import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · Preguntas #61–#70.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_08_23_61_70_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-08-23-61",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / URGENCIAS",
    topic: "Urgencias Neurológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-neurol-gicas","urgencias","neurol","gicas"],
    statement: "Una mujer de 55 años, previamente sana, es llevada a urgencias por su familia. Relatan que mientras estaba cenando, se llevó las manos a la cabeza y gritó experimentando \"el peor dolor de cabeza de toda su vida\" (Cefalea en trueno), seguido de un episodio de vómito explosivo y pérdida transitoria de la conciencia por un par de minutos. Al ingreso: PA 170/95 mmHg, lúcida pero quejándose de fotofobia severa y dolor cervical. Se evidencia rigidez de nuca franca (Signos de Kernig y Brudzinski positivos). Una Tomografía Computarizada (TC) de cráneo simple de urgencia confirma la presencia de sangre hiperdensa llenando las cisternas basales y el polígono de Willis. Se realiza una angiografía cerebral que detecta un aneurisma sacular en la arteria comunicante anterior, el cual es clipado exitosamente en quirófano a las pocas horas. Sin embargo, para prevenir la complicación neurológica MÁS letal y frecuente que ocurre entre los días 4 y 14 post-sangrado (vasoespasmo cerebral isquémico tardío), ¿cuál es el agente farmacológico neuroprotector OBLIGATORIO que debe iniciarse de inmediato y mantenerse por 21 días?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Dexametasona intravenosa a altas dosis para disminuir la inflamación meníngea irritativa.",
      },
      {
        id: "B",
        label: "B",
        text: "Fenitoína profiláctica para evitar convulsiones que aumenten la demanda metabólica de oxígeno.",
      },
      {
        id: "C",
        label: "C",
        text: "Nimodipino oral o por sonda nasogástrica a dosis de 60 mg cada 4 horas.",
      },
      {
        id: "D",
        label: "D",
        text: "Infusión continua de Nitroprusiato de Sodio para garantizar una presión arterial sistólica estrictamente menor a 120 mmHg.",
      },
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con una Hemorragia Subaracnoidea (HSA) de origen aneurismático. Tras asegurar el aneurisma sangrante (mediante clipaje quirúrgico o coiling endovascular), la batalla no ha terminado. La principal causa de muerte y discapacidad neurológica diferida en estos pacientes es el Vasoespasmo Cerebral Tardío. La sangre que quedó libre irritando el espacio subaracnoideo causa una constricción brutal y reactiva de las arterias cerebrales adyacentes, típicamente entre el Día 4 y el Día 14 del inicio de los síntomas, provocando isquemia (infartos cerebrales masivos). La única droga en el mundo que ha demostrado con Nivel de Evidencia 1A reducir la mortalidad y los déficits neurológicos isquémicos por este fenómeno es el Nimodipino, un bloqueador de canales de calcio altamente lipofílico que penetra la barrera hematoencefálica y dilata selectivamente las arteriolas cerebrales.",
    keyPoints: [
      "\"El peor dolor de cabeza de mi vida\" (Thunderclap headache) + Rigidez de nuca sin fiebre prolongada.; Confirmación de Hemorragia Subaracnoidea (HSA) en la TC o xantocromía en la punción lumbar.",
      "Riesgo altísimo de Vasoespasmo Cerebral (Días 4-14). El tratamiento profiláctico de ORO, absoluto e innegociable es Nimodipino (Calcioantagonista neuroespecífico).",
      "Urgencias Neurológicas / Hemorragia Subaracnoidea.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-62",
    university: "UCC",
    examArea: "PEDIATRÍA - NEFROLOGÍA",
    topic: "Glomerulopatías Pediátricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","glomerulopat-as-pedi-tricas","glomerulopat","as","pedi","tricas"],
    statement: "Un niño de 4 años es llevado a la consulta externa por presentar hinchazón generalizada que inició en los párpados hace tres días y ahora se ha extendido al abdomen y las piernas. Los padres reportan que la orina del niño tiene mucho \"aspecto de espuma de cerveza\". El examen físico confirma anasarca severa y presión arterial de 95/60 mmHg (normal para la edad). Laboratorios de urgencia: Albúmina sérica de 1.5 g/dL, Colesterol total de 450 mg/dL. El parcial de orina muestra Proteinuria masiva (>300 mg/dL), con un sedimento totalmente inactivo (ausencia de hematuria microscópica y sin cilindros celulares). La función renal (Creatinina y BUN) y los niveles de Complemento (C3 y C4) son rigurosamente normales. Ante este clásico debut de Síndrome Nefrótico Idiopático Pediátrico, y asumiendo la etiología histológica más abrumadoramente frecuente a esta edad, ¿cuál es el hallazgo patognomónico esperado en la biopsia renal si se realizara un estudio de microscopía electrónica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Borramiento (fusión) difuso de los pedicelos de los podocitos en la membrana basal glomerular.",
      },
      {
        id: "B",
        label: "B",
        text: "Engrosamiento uniforme de la membrana basal con depósitos subepiteliales de IgG en forma de espículas (spikes).",
      },
      {
        id: "C",
        label: "C",
        text: "Infiltración mesangial nodular difusa con depósitos de IgA y C3.",
      },
      {
        id: "D",
        label: "D",
        text: "Esclerosis segmentaria de los ovillos capilares con hialinosis y colapso parcial.",
      },
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con un debut puro de Enfermedad de Cambios Mínimos (ECM), la causa subyacente de más del 80-90% de los casos de Síndrome Nefrótico Idiopático en niños entre 2 y 6 años de edad. Es una podocitopatía mediada por una supuesta disfunción de las células T, las cuales secretan citocinas que alteran la carga eléctrica negativa de la barrera de filtración. Clínicamente es un nefrótico puro (muchísimo edema, colesterol alto y albúmina baja) sin características nefríticas (no hay sangre, no hay falla renal, no hay hipertensión). El nombre \"Cambios Mínimos\" deriva de que si le haces una biopsia a este riñón y la miras en un microscopio de luz convencional o con inmunofluorescencia, el riñón se ve absolutamente NORMAL (no hay cicatrices, no hay complejos inmunes). El único defecto físico solo puede ser visto si amplías la imagen miles de veces con un Microscopio Electrónico: allí observarás la retracción o fusión (borramiento) masiva de los pedicelos (los \"pies\" de los podocitos que abrazan los capilares), dejando el filtro abierto para que la albúmina se escape a la orina. (Nota clínica: Por protocolo, a estos niños NUNCA se les biopsia en su primer episodio; se les trata empíricamente con Corticosteroides a altas dosis y, al responder mágicamente en un 95% de los casos, el diagnóstico de ECM queda sellado).",
    keyPoints: [
      "Niño de 2 a 8 años con Anasarca (Hinchazón) y Orina espumosa.; Proteinuria Nefrótica masiva.; Sedimento inactivo (Sin hematuria), Función renal y Complemento NORMALES.",
      "Enfermedad de Cambios Mínimos. Histología clave: Fusión de pedicelos en el microscopio electrónico. Tratamiento de inducción: Prednisona empírica (la biopsia se reserva solo para los que no responden o son corticorresistentes).",
      "Glomerulopatías Pediátricas / Síndrome Nefrótico.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-63",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / URGENCIAS",
    topic: "Endocrinología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","endocrinolog-a","endocrinolog","a"],
    statement: "Hombre de 42 años, agricultor residente en el municipio de Linares (Nariño), acude al centro de salud local por un cuadro de debilidad extrema, pérdida de peso de 8 kg en los últimos 4 meses, anorexia, náuseas y mareos frecuentes al ponerse de pie. Al examen físico, el paciente presenta una notable y difusa hiperpigmentación bronceada en la piel, la cual es particularmente oscura en los pliegues de las manos, los codos, las rodillas y las encías (mucosa oral). Los signos vitales muestran una PA de 85/55 mmHg (hipotensión marcada). Los laboratorios de urgencia reportan: Sodio sérico de 128 mEq/L (Hiponatremia), Potasio de 5.6 mEq/L (Hiperkalemia) y una glucemia en ayunas de 60 mg/dL. Con sospecha de una insuficiencia endocrina primaria, se le realiza un test diagnóstico de estimulación con Cosintropina (ACTH sintética). A los 60 minutos de la inyección, los niveles séricos de cortisol del paciente permanecen bajos (no logran superar los 18 mcg/dL). ¿Cuál es el diagnóstico definitivo y qué mecanismo compensatorio explica la hiperpigmentación patognomónica de su piel?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Enfermedad de Addison (Insuficiencia Adrenal Primaria); la hiperpigmentación se debe al exceso compensatorio de proopiomelanocortina (POMC) y ACTH hipofisiaria que co-estimulan a los melanocitos.",
      },
      {
        id: "B",
        label: "B",
        text: "Insuficiencia Adrenal Secundaria por uso crónico de esteroides; la hiperpigmentación es secundaria al depósito crónico de hemosiderina por la anemia crónica concomitante.",
      },
      {
        id: "C",
        label: "C",
        text: "Hemocromatosis hereditaria; el exceso de hierro destruye la glándula suprarrenal y pigmenta directamente la dermis (\"Diabetes bronceada\").",
      },
      {
        id: "D",
        label: "D",
        text: "Enfermedad de Cushing primaria; el exceso de cortisol estimula directamente la producción de melanina en el estrato basal.",
      },
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con Enfermedad de Addison (Insuficiencia Suprarrenal Primaria). En esta patología (cuya etiología principal es la destrucción autoinmune en países desarrollados, o por Tuberculosis en zonas rurales/endémicas), toda la corteza de la glándula suprarrenal está destruida. Al faltar la Aldosterona, el riñón bota la sal y retiene potasio (Sodio bajo, Potasio alto, Hipotensión). Al faltar el Cortisol, el paciente está asténico, hipoglucémico y deprimido. La clave visual inconfundible de esta viñeta es la hiperpigmentación de piel y mucosas. Fisiopatológicamente, la hipófisis en el cerebro detecta que el cortisol está en el piso, por lo que entra en pánico y comienza a fabricar toneladas de ACTH para intentar \"despertar\" a las suprarrenales muertas. La ACTH se escinde de una proteína madre gigante llamada POMC (Proopiomelanocortina), la cual también contiene la hormona estimulante de los melanocitos (MSH). Todo este \"coctel\" hormonal inunda la sangre y estimula a las células de la piel (melanocitos) a producir melanina, bronceando al paciente. El Test de Estimulación con Cosintropina es la prueba de oro: si inyectas ACTH sintética y la glándula no responde (el cortisol no sube a > 18 mcg/dL), confirmas que la glándula suprarrenal está físicamente destrozada.",
    keyPoints: [
      "Paciente con astenia, hipotensión y pérdida de peso.; Piel Hiperpigmentada (encías oscuras, pliegues oscuros).; Tríada laboratorial de hipoaldosteronismo: Hiponatremia + Hiperkalemia + Hipotensión.",
      "Enfermedad de Addison (Insuficiencia Adrenal Primaria). Prueba confirmatoria: Test de estimulación con ACTH fallido. Tratamiento de por vida: Reemplazo con Hidrocortisona (glucocorticoide) Y Fludrocortisona (mineralocorticoide).",
      "Endocrinología / Eje Hipotálamo-Hipófisis-Adrenal.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-64",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA / REUMATOLOGÍA",
    topic: "Hepatopatías Inmunológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","hepatopat-as-inmunol-gicas","hepatopat","as","inmunol","gicas"],
    statement: "Una mujer de 48 años consulta por un cuadro insidioso de fatiga extrema y un prurito (comezón) insoportable que es de predominio nocturno y no cede a antihistamínicos ni cremas humectantes. Refiere que la piel se le ha oscurecido levemente en los últimos meses por tanto rascarse. Al examen físico resalta ictericia conjuntival leve y hepatoesplenomegalia a la palpación. No hay ascitis. Los estudios bioquímicos evidencian: Bilirrubina Total 2.8 mg/dL (a predominio directo), AST 45 U/L, ALT 55 U/L (casi normales), y una Fosfatasa Alcalina masivamente elevada de 980 U/L, junto a una GGT (Gamma-Glutamil Transferasa) marcadamente alta. Un ultrasonido de abdomen revela vías biliares extrahepáticas de calibre totalmente normal, sin cálculos ni masas. Se realiza un panel de autoanticuerpos que arroja un resultado fuertemente positivo (títulos 1:320) para Anticuerpos Antimitocondriales (AMA). Ante la patología hepática autoinmune crónica diagnosticada, ¿cuál es el fármaco de PRIMERA LÍNEA comprobado que enlentece la progresión histológica de la enfermedad, posponiendo la necesidad de un trasplante de hígado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ácido Ursodesoxicólico (UDCA) oral en dosis continuas y altas.",
      },
      {
        id: "B",
        label: "B",
        text: "Corticosteroides sistémicos a dosis altas (Prednisona) combinados con Azatioprina.",
      },
      {
        id: "C",
        label: "C",
        text: "Colestiramina o Rifampicina oral para atrapar las sales biliares en la luz intestinal.",
      },
      {
        id: "D",
        label: "D",
        text: "D-penicilamina inmediata para iniciar la quelación agresiva de depósitos de cobre hepáticos.",
      },
    ],
    correctOptionId: "A",
    explanation: "La paciente cursa con Colangitis Biliar Primaria (CBP), antiguamente conocida como Cirrosis Biliar Primaria. Es una enfermedad autoinmune clásica y casi exclusiva de mujeres de mediana edad (40-60 años). Fisiopatológicamente, los linfocitos T atacan y destruyen progresivamente los conductillos biliares intrahepáticos pequeños y microscópicos. Como los canales grandes están sanos, la ecografía abdominal se verá paradójicamente normal (sin dilatación de la vía extrahepática). Al no poder evacuar la bilis, los ácidos biliares se acumulan en la piel (causando un prurito enloquecedor) y la sangre presenta un clásico patrón bioquímico colestásico puro: Fosfatasa Alcalina y GGT por las nubes, con transaminasas (AST/ALT) casi normales. El sello diagnóstico absoluto (sensibilidad >95%) es el título elevado de Anticuerpos Antimitocondriales (AMA). El único fármaco de primera línea que modifica el curso natural de la enfermedad, mejora la sobrevida y retrasa la llegada a la cirrosis terminal es el Ácido Ursodesoxicólico (UDCA), un ácido biliar hidrofílico y no tóxico que desplaza a los ácidos biliares endógenos destructivos y protege a los hepatocitos.",
    keyPoints: [
      "Mujer de mediana edad con Fatiga extrema + Prurito incontrolable (sin rash aparente).; Perfil hepático de Colestasis (Fosfatasa alcalina altísima) con Eco abdominal de vías biliares normales.; Dato Serológico de Oro: Anticuerpos Antimitocondriales (AMA) Positivos.",
      "Colangitis Biliar Primaria (CBP). Fármaco modificador de la enfermedad: Ácido Ursodesoxicólico (UDCA). El prurito severo se puede paliar con resinas atrapadoras (Colestiramina).",
      "Hepatopatías Inmunológicas / Colestasis.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-65",
    university: "UCC",
    examArea: "PEDIATRÍA - NEUMOLOGÍA / URGENCIAS",
    topic: "Urgencias de Vía Aérea Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-de-v-a-a-rea-pedi-trica","urgencias","de","v","a","rea","pedi","trica"],
    statement: "Un niño de 2 años es llevado por sus padres al servicio de urgencias a las 2:00 a.m. debido a un cuadro de despertar súbito con dificultad respiratoria franca. Durante los últimos tres días el niño había presentado coriza leve y febrícula (37.6°C). A su ingreso, el paciente se observa inquieto, con tirajes supraclaviculares e intercostales, y emite un ruido inspiratorio de tono agudo y áspero (estridor en reposo). Sin embargo, el signo clínico más llamativo es que el niño presenta accesos de tos repetitivos y ruidosos, que los padres describen asustados como el \"ladrido de un perro o una foca\" (tos perruna). Al examen físico, el niño NO presenta sialorrea (no babea), traga saliva sin dificultad y la faringe no se observa eritematosa ni edematizada. Se le toma una radiografía AP del cuello que revela un clásico estrechamiento subglótico en forma de V invertida o \"Signo del Campanario\" (Steeple sign). Con diagnóstico clínico de Laringotraqueobronquitis viral, ¿cuál es el abordaje de primera línea OBLIGATORIO para desinflamar rápidamente la vía aérea en el servicio de urgencias?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nebulizaciones con Adrenalina racémica y una dosis oral o intramuscular de Dexametasona (0.6 mg/kg).",
      },
      {
        id: "B",
        label: "B",
        text: "Antibioticoterapia empírica intravenosa con Ceftriaxona para erradicar Haemophilus influenzae y evitar la obstrucción supraglótica.",
      },
      {
        id: "C",
        label: "C",
        text: "Sedación profunda con benzodiacepinas para calmar el llanto del niño, seguido de oxígeno por mascarilla a alto flujo.",
      },
      {
        id: "D",
        label: "D",
        text: "Intubación orotraqueal electiva de emergencia bajo anestesia general.",
      },
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con Crupe (Laringotraqueítis o Laringotraqueobronquitis viral), la causa más común de estridor agudo en pediatría (generalmente entre los 6 meses y 3 años). El agente etiológico predominante es el Virus Parainfluenza. Fisiopatológicamente, el virus inflama y edematiza la región subglótica de la tráquea (justo debajo de las cuerdas vocales), originando la tríada de: Tos perruna (barking cough), estridor inspiratorio y disfonía. La radiografía, aunque no es obligatoria si la clínica es clara, muestra el estrechamiento de la columna de aire subglótica (Signo del campanario o de la punta de lápiz). A diferencia de la epiglotitis, los niños con Crupe NO se ven tóxicos y NO babean (pueden tragar su saliva). El tratamiento de oro y de primera línea mundial para el crupe (tanto leve como moderado/severo) es una dosis única de Dexametasona (potente antiinflamatorio de larga duración). Si el niño presenta estridor en reposo o dificultad respiratoria (como este caso), se le DEBE adicionar de forma aguda una nebulización con L-Adrenalina o Adrenalina racémica. La adrenalina causa una vasoconstricción hiperaguda del epitelio traqueal, \"secando\" el edema en 10-15 minutos y aliviando el estridor mágicamente mientras la dexametasona empieza a actuar horas después.",
    keyPoints: [
      "Preescolar (1-3 años) con resfriado previo que despierta de madrugada ahogándose.; Pistas acústicas: TOS PERRUNA (Tos de foca) + Estridor inspiratorio.; Radiografía: Signo del Campanario (Steeple sign).",
      "Crupe viral (Parainfluenza). Tratamiento estándar: Corticoides siempre (Dexametasona dosis única). Tratamiento para la urgencia (Estridor en reposo): Nebulización con Adrenalina. NUNCA usar antibióticos (es viral).",
      "Urgencias de Vía Aérea Pediátrica / Crupe.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-66",
    university: "UCC",
    examArea: "MEDICINA INTERNA - HEMATOLOGÍA / ONCOLOGÍA",
    topic: "Urgencias Oncológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-oncol-gicas","urgencias","oncol","gicas"],
    statement: "Una mujer de 32 años acude a urgencias quejándose de sangrado gingival severo, aparición espontánea de múltiples hematomas gigantes en extremidades y fatiga profunda. A su ingreso: pálida, hemodinámicamente estable pero con sangrado activo en los sitios de punción venosa de triaje. El hemograma urgente reporta: Hemoglobina 7.2 g/dL, Leucocitos 42,000/mm³ (francamente elevados) y Plaquetas 18,000/mm³. Los tiempos de coagulación evidencian un Tiempo de Protrombina (TP) y un TPTa extensamente prolongados, un Fibrinógeno sérico en 60 mg/dL (consumido/bajo) y Dímero-D altísimo (compatible con Coagulación Intravascular Diseminada aguda - CID). El frotis de sangre periférica revisado de inmediato revela la presencia de abundantes promielocitos hipergranulares malignos repletos de estructuras cristalinas en su citoplasma, denominadas Cuerpos de Auer. Ante el inminente riesgo de muerte por hemorragia cerebral o alveolar secundaria a esta neoplasia hematológica (asociada a la translocación t(15;17)), ¿cuál es el agente terapéutico OBLIGATORIO que debe iniciarse de forma presuntiva y STAT, incluso antes de la confirmación formal por biopsia de médula ósea?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Infusión de Heparina No Fraccionada (HNF) en bomba para detener la cascada microtrombótica del cuadro de CID agudo.",
      },
      {
        id: "B",
        label: "B",
        text: "Ciclofosfamida y Doxorrubicina a altas dosis como terapia de inducción mieloablativa de inducción 7+3 convencional.",
      },
      {
        id: "C",
        label: "C",
        text: "Ácido Trans-retinoico (ATRA / Tretinoína) oral inmediato asociado a soporte transfusional de fibrinógeno y plaquetas.",
      },
      {
        id: "D",
        label: "D",
        text: "Imatinib mesilato oral, dirigido específicamente a la quinasa del gen de fusión promielocítico.",
      },
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con una verdadera emergencia hematológica: Leucemia Promielocítica Aguda (LPA / LMA M3), una variante altamente curable pero hiperagudamente mortal de la Leucemia Mieloide Aguda. Fisiopatológicamente, esta leucemia es causada por la translocación recíproca t(15;17), que fusiona el gen del receptor del ácido retinoico (PML-RARA). Esto paraliza a los glóbulos blancos en la fase de \"promielocito\". Estos promielocitos neoplásicos están repletos de enzimas tóxicas y gránulos agrupados (los famosos Cuerpos de Auer en el frotis). Al romperse las células leucémicas, estas enzimas se derraman en la sangre y actúan como bombas tromboplásticas, desencadenando una Coagulación Intravascular Diseminada (CID fulminante) que exanguina al paciente (sangrado en mucosas, encías y venas). La REGLA DE ORO innegociable de la hematología es: Ante cualquier sospecha de Leucemia Promielocítica Aguda (o visualización de Cuerpos de Auer abundantes + CID), se debe administrar inmediatamente el Ácido Trans-retinoico (ATRA o Vitamina A sintética). El ATRA se une al receptor mutado y obliga mágicamente a las células malignas estancadas a madurar y convertirse en neutrófilos normales, frenando en horas la tormenta destructiva de la CID.",
    keyPoints: [
      "Adulto joven con pancitopenia (o leucocitosis) + Sangrado masivo agudo (Coagulopatía / CID).; Frotis de sangre: Cuerpos de Auer abundantes.; Genética subyacente: Translocación t(15;17).",
      "Leucemia Promielocítica Aguda (LMA M3). El manejo SALVAVIDAS es empezar ATRA (Ácido All-Trans-Retinoico) empírico STAT para detener el sangrado fulminante de la CID. Si esperas a la biopsia de médula para darle el ATRA, la paciente morirá de un ACV hemorrágico en 24 horas.",
      "Urgencias Oncológicas / Leucemias Agudas.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-67",
    university: "UCC",
    examArea: "PEDIATRÍA - CIRUGÍA NEONATAL",
    topic: "Cirugía Pediátrica Neonatal",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","cirug-a-pedi-trica-neonatal","cirug","a","pedi","trica","neonatal"],
    statement: "Se atiende a un recién nacido en el quirófano producto de una cesárea programada debido a hallazgos ecográficos prenatales. Inmediatamente tras el nacimiento, el pediatra advierte un defecto mayor en la pared abdominal del neonato. Múltiples asas de intestino delgado y grueso se encuentran expuestas y libres en la superficie abdominal, evisceradas a través de un defecto aponeurótico de 3 centímetros situado estricta y lateralmente a la DERECHA del anillo umbilical. Las asas intestinales lucen edematosas, engrosadas y cubiertas por un exudado fibrinoso (\"peel\" inflamatorio), sin presencia de ninguna membrana ni saco que las recubra. El cordón umbilical se inserta de forma totalmente normal en el anillo umbilical nativo, a la izquierda del defecto. A diferencia de otros defectos de pared, este neonato no presenta estigmas faciales ni se auscultan soplos cardíacos (sin síndromes genéticos asociados aparentes). ¿Cuál es la conducta de soporte térmico-hídrico INMEDIATO en la sala de partos para esta patología específica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cubrir inmediatamente los intestinos expuestos con una bolsa plástica estéril (Bolsa de polietileno tipo silo) (Bowel bag) hasta el tórax, sin utilizar compresas húmedas frías que causen hipotermia, e iniciar reanimación con líquidos intravenosos agresivos.",
      },
      {
        id: "B",
        label: "B",
        text: "Intentar reducir manualmente a la fuerza las asas intestinales hacia la cavidad abdominal en el primer minuto y cerrar el defecto cutáneo con grapas.",
      },
      {
        id: "C",
        label: "C",
        text: "Dejar las asas intestinales expuestas al aire libre para que sequen y evitar la proliferación de bacterias anaerobias, administrando antibióticos profilácticos tópicos.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar corticoides a altas dosis para reducir la inflamación fibrinosa del intestino (\"peel\") antes de cubrir con compresas secas de algodón.",
      },
    ],
    correctOptionId: "A",
    explanation: "El neonato cursa con una Gastrosquisis, una malformación congénita dramática pero estructuralmente aislada. El diagnóstico diferencial con el Onfalocele es la prueba de oro en los boards. La Gastrosquisis se define por: 1) Defecto LATERAL (usualmente a la DERECHA) del ombligo, 2) Cordón umbilical sano en su sitio original, y 3) AUSENCIA de saco (peritoneo/amnios), por lo que las tripas han pasado meses \"nadando\" libremente en el líquido amniótico del útero materno (lo que inflama y quema la serosa creando la típica \"cáscara o peel\" dura sobre el intestino). Como NO están cubiertas por ningún saco, las asas de intestino al nacer perderán cantidades astronómicas de líquido por evaporación y radiarán el calor del bebé a una velocidad letal. El manejo en los primeros minutos de vida es cubrir las asas expuestas con una bolsa plástica transparente (Bowel bag / Spring silo). Esta bolsa plástica detiene inmediatamente la fuga de agua y calor, protegiendo al bebé del choque hipovolémico y la hipotermia extrema, permitiendo al cirujano prepararse para re-introducir lentamente el intestino en la cavidad en los días siguientes. Las guías modernas prohíben poner compresas húmedas frías porque bajan la temperatura del neonato a niveles mortales.",
    keyPoints: [
      "Neonato con intestinos AFUERA del cuerpo.; A la derecha del cordón umbilical y SIN saco o bolsa protectora.",
      "Gastrosquisis. Rara vez se asocia a anomalías genéticas extra-gastrointestinales (a diferencia del Onfalocele, que es central, sí tiene saco, y viene en combo con trisomías y cardiopatías letales). Manejo inicial: Meter en bolsa plástica (silo) + Líquidos IV vigorosos.",
      "Cirugía Pediátrica Neonatal / Defectos de Pared Abdominal.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-68",
    university: "UCC",
    examArea: "MEDICINA INTERNA - TOXICOLOGÍA / CARDIOLOGÍA",
    topic: "Toxicología Cardiovascular",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","toxicolog-a-cardiovascular","toxicolog","a","cardiovascular"],
    statement: "Un adolescente de 16 años es llevado a urgencias por sus padres en estado de estupor. Relatan haberlo encontrado en su habitación junto a un frasco vacío del medicamento que utiliza su abuelo para \"controlar el pulso y la presión de sus arritmias\". Al ingreso, el paciente se encuentra extremadamente letárgico. A la monitorización continua se evidencia: FC 35 lpm (Bradicardia profunda severa) y PA de 70/40 mmHg (Hipotensión extrema y choque). La auscultación pulmonar revela abundantes sibilancias bronquiales difusas. Los laboratorios de choque muestran un perfil electrolítico y renal normal, PERO una glucometría capilar revela Hipoglucemia de 48 mg/dL. Tras reanimar con un litro de solución salina, administrar bolos de atropina sin ninguna respuesta cronotrópica y descartar intoxicación por bloqueadores de canales de calcio (dado que el paciente presenta hipoglucemia en lugar de hiperglucemia), ¿cuál es el antídoto FARMACOLÓGICO DE ORO que debe administrarse en bolos e infusión continua para reactivar la contractilidad y el automatismo cardíaco?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Glucagón intravenoso a altas dosis para estimular la producción de AMP cíclico sin requerir el receptor adrenérgico.",
      },
      {
        id: "B",
        label: "B",
        text: "Infusión de Insulina Regular a altas dosis combinada con Dextrosa (HIET) como primera línea absoluta.",
      },
      {
        id: "C",
        label: "C",
        text: "Naloxona en bolos agresivos hasta revertir el compromiso miocárdico y despertar al paciente.",
      },
      {
        id: "D",
        label: "D",
        text: "Adrenalina o Noradrenalina puras a dosis altas para desplazar competitivamente el tóxico del receptor vascular.",
      },
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con una Intoxicación severa por Betabloqueadores (ej. Propranolol, Atenolol, Metoprolol). Las pastillas del abuelo bloquearon los receptores Beta-1 del corazón, apagando su automatismo (bradicardia profunda refractaria a la Atropina) y su contractilidad (hipotensión severa), además de bloquear los receptores Beta-2 pulmonares (gatillando el broncoespasmo y sibilancias). Una de las perlas clásicas para diferenciar este toxíndrome de la intoxicación por bloqueadores de los canales de calcio es la Hipoglucemia, ya que los betabloqueadores inhiben la glucogenólisis y gluconeogénesis mediada por catecolaminas en el hígado. Al estar la \"puerta\" de los receptores beta cerrada y trancada con candado, administrar Adrenalina no será suficiente porque no tiene dónde unirse. El antídoto salvavidas magistral y de primera elección es el Glucagón Intravenoso a dosis de megabolo (3 a 10 mg). El Glucagón tiene su propio receptor mágico en la pared del miocardio; al unirse a él, activa la Adenilato Ciclasa y dispara el AMP cíclico y el Calcio intracelular, provocando que el corazón lata con furia y fuerza (efecto inotrópico y cronotrópico positivo) saltándose por completo la necesidad del receptor Beta bloqueado (efecto \"Bypass\" o \"puerta trasera\").",
    keyPoints: [
      "Intoxicación por pastillas cardíacas + Bradicardia severa + Hipotensión.; Dato Pivote Diferencial: Hipoglucemia + Broncoespasmo (Sibilancias).",
      "Sobredosis de Betabloqueadores. Antídoto OBLIGATORIO: Glucagón IV a altas dosis. Entra al miocardiocito usando una \"puerta trasera\" sin importar que los beta-receptores estén sellados.",
      "Toxicología Cardiovascular / Antídotos.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-69",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA / CARDIOLOGÍA",
    topic: "Urgencias Cardiovasculares",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-cardiovasculares","urgencias","cardiovasculares"],
    statement: "Un paciente de 55 años, obeso, post-operado de una artroplastia de rodilla hace 10 días (sin profilaxis antitrombótica ambulatoria), ingresa al cuarto de reanimación traído en ambulancia. Su esposa refiere que, al intentar levantarse para ir al baño, el paciente \"se ahogó repentinamente\", se quejó de dolor torácico, se puso de color azulado y se desplomó al suelo (síncope agudo). A su ingreso: PA 85/55 mmHg (hipotensión), FC 135 lpm, SatO2 78% al ambiente. Se evidencia una franca ingurgitación de las venas yugulares. Al realizar un electrocardiograma de 12 derivaciones (ECG) hiperurgente de forma protocolaria, ¿cuál de los siguientes trazados electrocardiográficos específicos asienta el nivel de mayor gravedad (falla o \"cor pulmonale\" agudo derecho) respaldando la fuerte sospecha de Tromboembolismo Pulmonar (TEP) Masivo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Elevación cóncava difusa del segmento ST en todas las derivaciones precordiales y depresión del intervalo PR.",
      },
      {
        id: "B",
        label: "B",
        text: "Presencia de una onda S profunda en derivación I, una onda Q patológica en derivación III y una onda T invertida en derivación III (Patrón S1Q3T3).",
      },
      {
        id: "C",
        label: "C",
        text: "Fibrilación auricular rápida con complejos QRS estrechos sin otras alteraciones de repolarización en derivadas precordiales.",
      },
      {
        id: "D",
        label: "D",
        text: "Supradesnivel del segmento ST de 3 mm en las derivaciones II, III y aVF, asociado a bloqueo auriculoventricular de Wenckebach.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un innegable Tromboembolismo Pulmonar (TEP) Masivo causante de choque cardiogénico e hipoxia profunda, tras una Trombosis Venosa Profunda migrada del periodo post-quirúrgico ortopédico. El coágulo gigante obstruyó el tronco de la arteria pulmonar principal. El ventrículo derecho, que tiene paredes delgadas, se ve forzado repentantemente a bombear sangre contra un muro de concreto. El ventrículo se dilata en agudo y falla (Cor Pulmonale Agudo, justificando la ingurgitación yugular y la hipotensión al no mandar sangre a la izquierda). El electrocardiograma más común en un TEP es la simple Taquicardia Sinusal. SIN EMBARGO, el trazado de los \"libros de texto\" o de \"alta severidad/sobrecarga aguda del ventrículo derecho\" es el famoso y patognomónico Patrón de McGinn-White o S1Q3T3: Ondas S notorias y profundas en la derivación I, onda Q patológica nueva en derivación III y onda T invertida en la misma derivación III. Este hallazgo, aunque solo ocurre en un 15-20% de los pacientes con TEP severo, sella el diagnóstico de una tensión abrumadora sobre las cavidades derechas exigiendo reperfusión mecánica o farmacológica urgente (Trombólisis).",
    keyPoints: [
      "Paciente inmovilizado/operado que hace Disnea SÚBITA, dolor torácico, cianosis y síncope (o hipotensión).; Pregunta dirigida a hallazgos de electrocardiograma.",
      "Tromboembolismo Pulmonar Masivo.\nSigno ECG infalible y clásico de examen: S1-Q3-T3. Indica un esfuerzo hiperagudo e insuficiencia del corazón derecho (cor pulmonale) frente a la embolia, no es un simple infarto.",
      "Urgencias Cardiovasculares / Neumológicas / ECG en TEP.",
    ],
  },
  {
    id: "ucc-conv-2026-08-23-70",
    university: "UCC",
    examArea: "PEDIATRÍA - GASTROENTEROLOGÍA / INMUNOLOGÍA",
    topic: "Gastroenterología Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","gastroenterolog-a-pedi-trica","gastroenterolog","a","pedi","trica"],
    statement: "Una madre acude a consulta de pediatría alarmada y con el pañal de su bebé varón de 4 semanas de vida. El lactante es producto de un embarazo sano, nació a término con excelente peso y se encuentra bajo lactancia materna exclusiva vigorosa. La madre reporta que el bebé no ha presentado fiebre, no luce letárgico, come vorazmente y está ganando peso maravillosamente por encima del percentil 60. Sin embargo, en los últimos cinco días ha notado que las deposiciones del bebé se han vuelto más líquidas y están teñidas con hilos o estrías de sangre roja fresca entremezclados con mucosidad. Al examen físico: abdomen suave, no doloroso, sin masas palpables, y signos vitales perfectos. Se nota la presencia de un eccema atópico severo en ambas mejillas del bebé. Tras descartar una fisura anal, ¿cuál es el diagnóstico más probable de esta proctocolitis benigna y cuál es la medida terapéutica conservadora indicada por las guías en este lactante amamantado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Invaginación Intestinal con isquemia mucosa; requiere derivación a urgencias para reducción hidrostática ecoguiada y suspensión del seno materno.",
      },
      {
        id: "B",
        label: "B",
        text: "Enterocolitis Necrotizante (NEC) subclínica temprana; exige ayuno estricto absoluto (NPO), antibióticos intravenosos empíricos y nutrición parenteral de inmediato.",
      },
      {
        id: "C",
        label: "C",
        text: "Infección aguda invasiva por Salmonella o Shigella; se debe iniciar azitromicina oral empírica durante 5 días para evitar la bacteriemia y permitir que la madre siga lactando.",
      },
      {
        id: "D",
        label: "D",
        text: "Alergia a la Proteína de la Leche de Vaca (APLV); se recomienda la continuación ininterrumpida de la lactancia materna exclusiva EXIGIENDO que la madre elimine estrictamente todos los lácteos y derivados de su propia dieta.",
      },
    ],
    correctOptionId: "D",
    explanation: "El paciente cursa con la manifestación más común de la Alergia a la Proteína de la Leche de Vaca (APLV) no mediada por IgE, específicamente una Proctocolitis Inducida por Proteínas Alimentarias. La presentación es estelar e inconfundible: ocurre en las primeras semanas o meses de vida de un bebé que luce PERFECTAMENTE SANO, afebril y \"feliz\" (gana excelente peso), pero las madres llegan aterradísimas porque encuentran heces con moco y estrías de sangre fresca roja. El bebé es alérgico a las macromoléculas de proteínas vacunas (caseína o lactosuero). Aunque el bebé toma pecho exclusivo, la madre consume lácteos (leche, queso, yogur), y las proteínas cruzan intactas a la leche materna, irritando y sangrando el colon del bebé. La piel (eccema atópico en las mejillas) es el faro que ilumina la predisposición alérgica/atópica de este bebé. El tratamiento curativo que dictan las pautas de gastroenterología pediátrica prohíbe destetar al bebé de la leche de mamá: se DEBE continuar la lactancia materna exclusiva, ordenándole a la madre realizar una Dieta de Exclusión estricta y absoluta de Lácteos en su propia alimentación por el tiempo que dure la lactancia. El sangrado resolverá espectacularmente en 1 a 2 semanas y el bebé podrá re-introducir los lácteos a su propia dieta superado su primer o segundo año de vida.",
    keyPoints: [
      "Bebé de pocas semanas o meses que está GORDITO, Feliz y gana peso estupendo.; El pañal tiene sangre con moco (estrías rojas) sin fiebre.; Pista extra: Tiene eccema (dermatitis) en cara o cuerpo.",
      "Proctocolitis por Alergia a Proteína Leche de Vaca (APLV). Diagnóstico diferencial crítico: A diferencia de la Invaginación o NEC, el niño de APLV luce \"perfectamente sano\". Conducta de oro: Dieta de exclusión de lácteos para la MAMÁ, mantener lactancia. Si usaran biberón, se cambia a fórmula extensamente hidrolizada.",
      "Gastroenterología Pediátrica / Alergias Alimentarias.",
    ],
  }
];
