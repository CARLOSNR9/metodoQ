import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · Preguntas #01–#10.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_08_09_01_10_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-08-09-01",
    university: "UCC",
    examArea: "MEDICINA INTERNA - REUMATOLOGÍA / OFTALMOLOGÍA",
    topic: "Vasculitis de Vasos Grandes",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","vasculitis-de-vasos-grandes","vasculitis","de","vasos","grandes"],
    statement: "Mujer de 74 años consulta a urgencias por cefalea temporal derecha de instauración reciente, severa y punzante. Refiere que al masticar sus alimentos siente un dolor tipo calambre en la mandíbula que la obliga a detenerse (claudicación mandibular). Hace una hora, presentó un episodio de pérdida transitoria y completa de la visión en el ojo derecho (\"como si bajara un telón\"), el cual duró unos minutos. Al examen físico se palpa la arteria temporal derecha engrosada, tortuosa, sin pulso y muy dolorosa al roce. Los laboratorios de ingreso muestran una Velocidad de Sedimentación Globular (VSG) de 95 mm/h y Proteína C Reactiva (PCR) marcadamente elevada. Ante la altísima sospecha de Arteritis de Células Gigantes (Arteritis de la Temporal), ¿cuál es la conducta INMEDIATA OBLIGATORIA a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar una biopsia de la arteria temporal de urgencia y esperar la confirmación histopatológica antes de iniciar inmunosupresión.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar pulsos intravenosos de Metilprednisolona a altas dosis (1 g/día) de forma inmediata, difiriendo la biopsia para los próximos días.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar terapia antiagregante dual con Aspirina y Clopidogrel por sospecha de Ataque Isquémico Transitorio (AIT) de la arteria oftálmica.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar un eco-Doppler de arterias carótidas y temporales antes de administrar cualquier fármaco que pueda alterar la inflamación vascular.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una Arteritis de Células Gigantes (ACG), la vasculitis sistémica más común en adultos mayores (> 50 años). La claudicación mandibular es el síntoma más específico, pero la manifestación más temida es la afectación de las arterias ciliares posteriores y oftálmicas, que conduce a la ceguera permanente por neuropatía óptica isquémica anterior. El episodio de amaurosis fugax (\"telón que baja\") es el grito de auxilio del nervio óptico: la ceguera total irreversible es inminente. Las guías reumatológicas mundiales establecen que, ante síntomas isquémicos visuales, la administración de Corticosteroides a dosis masivas (pulsos de Metilprednisolona IV) es OBLIGATORIA e inmediata en la misma sala de urgencias. La biopsia de la arteria temporal es el gold standard diagnóstico, pero JAMÁS debe retrasar el inicio de los esteroides. Los corticoides no alteran los hallazgos histopatológicos de la biopsia si esta se realiza en los primeros 7 a 14 días tras el inicio del tratamiento.",
    keyPoints: [
      "Anciano (> 60 años) con cefalea nueva, claudicación mandibular y VSG/PCR muy altas.; Síntomas visuales (amaurosis fugax, visión borrosa, diplopía).",
      "Arteritis de Células Gigantes. El tratamiento es ESTEROIDES INMEDIATOS. Si hay síntomas visuales: Metilprednisolona IV. Si no hay síntomas visuales: Prednisona oral a dosis altas. Nunca esperar la biopsia para tratar.",
      "Vasculitis de Vasos Grandes / Urgencias Oftalmológicas.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-02",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA / NEFROLOGÍA",
    topic: "Complicaciones de la Cirrosis",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","complicaciones-de-la-cirrosis","complicaciones","de","la","cirrosis"],
    statement: "Hombre de 55 años, con antecedente de cirrosis hepática por virus de la Hepatitis C (Child-Pugh C) y ascitis a tensión. Es ingresado al hospital por un cuadro de Peritonitis Bacteriana Espontánea (PBE) y se inicia tratamiento con Cefotaxima IV. Al tercer día de hospitalización, el paciente desarrolla oliguria progresiva. Los paraclínicos evidencian una elevación rápida de la creatinina sérica de 1.1 mg/dL a 2.8 mg/dL en 48 horas. Se suspenden los diuréticos y se administra una carga agresiva de Albúmina intravenosa (1 g/kg) por dos días consecutivos sin lograr ABSOLUTAMENTE NINGUNA mejoría de la función renal ni de la diuresis. El parcial de orina es normal, la ecografía renal descarta obstrucción y no hay exposición a nefrotóxicos recientes. Ante el diagnóstico clínico más probable en este escenario cirrótico, ¿cuál es el tratamiento farmacológico de ELECCIÓN para revertir el cuadro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Inicio de hemodiálisis venovenosa continua de urgencia ante la refractariedad a líquidos.",
      },
      {
        id: "B",
        label: "B",
        text: "Terapia combinada con Terlipresina en infusión continua asociada a Albúmina intravenosa.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Furosemida a dosis topes (infusión continua) para forzar la diuresis del riñón bloqueado.",
      },
      {
        id: "D",
        label: "D",
        text: "Inserción de un TIPS (Derivación Portosistémica Intrahepática Transyugular) de emergencia.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Síndrome Hepatorrenal (SHR) tipo 1 (o SHR-LRA), una complicación catastrófica de la cirrosis avanzada, frecuentemente precipitada por infecciones como la PBE. La fisiopatología radica en una vasodilatación esplácnica extrema (por la hipertensión portal y el óxido nítrico) que \"secuestra\" la sangre en el abdomen, causando una profunda hipoperfusión renal. El riñón, que está anatómicamente sano, reacciona con una vasoconstricción compensatoria brutal de la arteria renal, llevando a la falla renal oligúrica. El diagnóstico de exclusión requiere la falta de respuesta a la expansión de volumen con Albúmina. El tratamiento de primera línea avalado por las guías es el uso de potentes vasoconstrictores esplácnicos para \"exprimir\" la sangre del abdomen y devolverla a la circulación sistémica. La Terlipresina (un análogo de la vasopresina) MÁS Albúmina IV es el régimen más efectivo. En los países donde la Terlipresina no está disponible (como en USA), se utiliza la combinación de Octreotide y Midodrina o Noradrenalina en UCI.",
    keyPoints: [
      "Paciente con Cirrosis + Ascitis que desarrolla Falla Renal Aguda rápida.; Ausencia de respuesta renal tras suspender diuréticos y expandir con Albúmina por 48 horas.; Riñones ecográficamente normales y sedimento sin proteinuria/hematuria.",
      "Síndrome Hepatorrenal (SHR). Tratamiento de rescate: Terlipresina + Albúmina. (La Noradrenalina también es válida en UCI). El tratamiento curativo definitivo es el trasplante hepático.",
      "Complicaciones de la Cirrosis / Síndrome Hepatorrenal.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-03",
    university: "UCC",
    examArea: "PEDIATRÍA - GASTROENTEROLOGÍA / CIRUGÍA",
    topic: "Cirugía Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","cirug-a-pedi-trica","cirug","a","pedi","trica"],
    statement: "Un lactante masculino de 5 semanas de vida es traído a urgencias porque desde hace 5 días presenta vómitos continuos, postprandiales inmediatos y de gran volumen, los cuales la madre describe como \"vómitos a chorro o en proyectil\". Refiere que el niño se muestra famélico e intenta volver a lactar inmediatamente después de vomitar. Llama la atención que los vómitos consisten exclusivamente en leche coagulada y nunca han contenido bilis (no son verdosos). Al examen físico, el paciente luce adelgazado, moderadamente deshidratado y se logran observar ondas peristálticas gástricas visibles en el epigastrio. Se palpa una pequeña masa móvil en forma de \"oliva\" en el cuadrante superior derecho. Una ecografía confirma el diagnóstico quirúrgico. Se solicitan gases venosos y electrolitos séricos preoperatorios que reportan: pH 7.55, pCO2 46 mmHg, HCO3 36 mEq/L, Cloro 82 mEq/L y Potasio 2.8 mEq/L. ¿Cuál es el paso INMEDIATO de mayor impacto para la seguridad del paciente antes del ingreso a quirófano?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ingreso inmediato a quirófano para Piloromiotomía de Ramstedt antes de que empeore la desnutrición.",
      },
      {
        id: "B",
        label: "B",
        text: "Corrección agresiva y meticulosa de la alcalosis metabólica, la hipocloremia y la hipokalemia con fluidoterapia intravenosa antes de autorizar la cirugía.",
      },
      {
        id: "C",
        label: "C",
        text: "Colocación de una sonda nasoyeyunal para iniciar nutrición post-pilórica y revertir la pérdida de peso prequirúrgica.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar un bolo intravenoso de Bicarbonato de Sodio para compensar el estrés quirúrgico inminente.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Estenosis Hipertrófica del Píloro (EHP), una patología quirúrgica clásica del lactante menor (usualmente primogénitos varones entre la 3ra y 6ta semana de vida). El síntoma patognomónico es el vómito en proyectil NO bilioso (porque la obstrucción está antes de la ampolla de Vater). Al vomitar litros de contenido gástrico, el bebé pierde ácido clorhídrico (HCl) y agua. Esto desencadena el trastorno ácido-base más característico de la pediatría quirúrgica: Alcalosis Metabólica Hipoclorémica e Hipokalémica. Aunque el tratamiento definitivo es quirúrgico (Piloromiotomía), la estenosis del píloro NO ES una emergencia quirúrgica, es una EMERGENCIA MÉDICA y de reanimación hídrica. Si se anestesia y se opera a un lactante con pH de 7.55, el centro respiratorio del bulbo raquídeo (que ya está deprimido para intentar retener CO2 y compensar la alcalosis) sufrirá una apnea posoperatoria letal tras retirar el tubo endotraqueal. El cirujano NO DEBE operar hasta que el pediatra haya hidratado al bebé con Solución Salina Normal y Cloruro de Potasio (KCl) y el pH/cloro se hayan normalizado (usualmente toma 24-48 horas).",
    keyPoints: [
      "Lactante (3 a 6 semanas) con vómitos no biliosos en proyectil y apetito voraz.; Masa epigástrica palpable (\"oliva pilórica\").; Alteración metabólica: Alcalosis metabólica hipoclorémica e hipokalémica.",
      "Estenosis Hipertrófica del Píloro. Regla de oro: Reanimación médica de electrolitos y fluidos OBLIGATORIA antes del quirófano para prevenir apnea anestésica.",
      "Cirugía Pediátrica / Medio Interno.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-04",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / URGENCIAS",
    topic: "Urgencias Cardiovasculares",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","urgencias-cardiovasculares","urgencias","cardiovasculares"],
    statement: "Hombre de 68 años con antecedente de hipertensión arterial mal controlada es traído a urgencias por la aparición brusca de un dolor torácico \"desgarrador\" e irradiado a la región interescapular (entre los omóplatos). Al examen físico, se encuentra diaforético, muy ansioso y con una PA de 210/115 mmHg en el brazo derecho y 160/90 mmHg en el brazo izquierdo. Se ausculta un nuevo soplo diastólico en el foco aórtico. Una Angio-TC de tórax confirma el diagnóstico de Disección Aórtica tipo A de Stanford, con la íntima aórtica rasgada desde la aorta ascendente extendiéndose hasta el cayado. Mientras se moviliza al equipo de cirugía cardiovascular de extrema urgencia, se debe iniciar control hemodinámico farmacológico para evitar la rotura inminente y la extensión de la disección. ¿Cuál es la secuencia farmacológica INICIAL OBLIGATORIA y por qué?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Nitroprusiato de Sodio intravenoso inmediatamente para reducir la presión arterial de forma ultrarrápida, añadiendo luego Labetalol si la FC no cede.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar exclusivamente fluidoterapia y vasopresores por el riesgo de taponamiento cardíaco secundario a la disección proximal.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar primero un Betabloqueador intravenoso (Esmolol o Labetalol) para reducir la FC y el dP/dt, seguido posteriormente de un vasodilatador (como Nitroprusiato) si la PA sistólica persiste alta.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Clopidogrel y Heparina de Bajo Peso Molecular de forma agresiva para prevenir la trombosis de la falsa luz aórtica.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con una Disección Aórtica Stanford Tipo A (emergencia quirúrgica absoluta). Mientras entra a quirófano, la terapia anti-impulso (control de la tensión y la fuerza contráctil del corazón) es vital. La regla de oro en el manejo de la disección aórtica es el concepto físico del \"estrés de cizallamiento\" o fuerza cortante del ventrículo izquierdo sobre la pared de la aorta (dP/dt). Se DEBE administrar OBLIGATORIAMENTE primero un Betabloqueador (Esmolol o Labetalol) para bajar la frecuencia cardíaca (meta < 60 lpm) y disminuir la fuerza bruta de contracción del ventrículo. SOLO DESPUÉS de haber bloqueado los receptores beta (frenado el corazón), se puede agregar un vasodilatador potente como el Nitroprusiato para bajar la Presión Sistólica (meta 100-120 mmHg). Si se altera este orden, el paciente morirá de un desgarro fulminante.",
    keyPoints: [
      "Dolor torácico transfixiante/desgarrador irradiado a la espalda + Asimetría de pulsos/presión en ambos brazos.; Crisis Hipertensiva severa.",
      "Disección Aórtica. Protocolo de manejo farmacológico estricto: SIEMPRE Betabloqueador PRIMERO, Vasodilatador SEGUNDO.",
      "Urgencias Cardiovasculares / Disección Aórtica.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-05",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / URGENCIAS",
    topic: "Urgencias Endocrinológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","urgencias-endocrinol-gicas","urgencias","endocrinol","gicas"],
    statement: "Mujer de 32 años, con diagnóstico reciente de Enfermedad de Graves en manejo irregular con Propiltiouracilo (PTU), ingresa a urgencias en estado crítico tras padecer una infección urinaria severa (factor precipitante). Al examen físico: franca agitación psicomotriz, delirio, temperatura de 40.5°C, diaforesis masiva y exoftalmos bilateral. Signos vitales: PA 165/70 mmHg, FC 185 lpm (taquicardia sinusal). Al examen del cuello presenta un gran bocio difuso con frémito. Los laboratorios muestran TSH indetectable y hormonas libres (T3, T4) masivamente elevadas. Se inicia protocolo de reanimación por Tormenta Tiroidea, instaurando soporte hídrico agresivo y dosis altas de Propranolol intravenoso para el bloqueo adrenérgico periférico. Según las guías internacionales, ¿cuál debe ser la SECUENCIA temporal estricta y correcta de los fármacos inhibidores de la glándula para bloquear la síntesis y liberación hormonal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Yodo inorgánico (Solución de Lugol o Yoduro de Potasio) inmediatamente para saturar la glándula, seguido a la hora de Propiltiouracilo (PTU).",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar simultáneamente en el mismo minuto Propiltiouracilo (PTU), Solución de Lugol y Dexametasona por vía intravenosa.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Propiltiouracilo (PTU) a dosis altas de carga, y esperar estrictamente al menos 1 a 2 HORAS antes de administrar Yodo inorgánico (Lugol o SSKI).",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Yodo radiactivo (I-131) de emergencia asociado a pulsos de Metilprednisolona.",
      },
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con una Tormenta Tiroidea, una emergencia endocrina hipermetabólica de alta letalidad. El tratamiento farmacológico requiere un bloqueo escalonado de la tiroides y de los receptores periféricos. Además del Propranolol (frena síntomas adrenérgicos y bloquea conversión de T4 a T3 en la periferia) y los Glucocorticoides (Dexametasona/Hidrocortisona, previenen crisis adrenal y bloquean conversión T4 a T3), se debe atacar a la fábrica tiroidea. El Propiltiouracilo (PTU) bloquea la SÍNTESIS de nuevas hormonas y la conversión periférica. El Yodo inorgánico a altas dosis (Solución de Lugol) se usa para aprovechar el Efecto de Wolff-Chaikoff (el exceso súbito de yodo bloquea la LIBERACIÓN temporal de las hormonas preformadas en el coloide). Sin embargo, la regla inquebrantable de la endocrinología exige que el PTU DEBE ADMINISTRARSE SIEMPRE 1 a 2 HORAS ANTES que el Yodo. Si se administra yodo antes o simultáneamente sin que las enzimas estén bloqueadas, la tiroides hiperactiva utilizará ese yodo como \"materia prima\" masiva para fabricar aún más hormonas de forma explosiva (Fenómeno de Jod-Basedow), empeorando catastróficamente la tormenta tiroidea.",
    keyPoints: [
      "Paciente con hipertiroidismo que sufre estrés (infección/cirugía) y debuta con: Fiebre >40°C, Taquicardia >140, agitación o psicosis.; Manejo de la Tormenta Tiroidea y orden de la receta.",
      "Orden estricto: 1. Beta-bloqueador (Propranolol). 2. Antitiroideo (PTU o Metimazol). 3. ESPERAR 1 HORA. 4. Yodo inorgánico (Lugol). 5. Corticosteroides.",
      "Urgencias Endocrinológicas / Tormenta Tiroidea.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-06",
    university: "UCC",
    examArea: "PEDIATRÍA - INFECTOLOGÍA / NEONATOLOGÍA",
    topic: "Infectología Neonatal",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","infectolog-a-neonatal","infectolog","a","neonatal"],
    statement: "Recién nacido de 15 días de vida, a término, es traído al servicio de urgencias por fiebre de 39.5°C de inicio súbito hace 12 horas, irritabilidad marcada y pobre tolerancia a la vía oral. No presenta signos de focalidad respiratoria o gastrointestinal. El neonato luce tóxico y mal perfundido. Tras la estabilización inicial, se procede a realizar el pan-cultivo protocolario (hemocultivos, urocultivo por sondaje y punción lumbar), documentándose en el citoquímico del LCR una pleocitosis con predominio de polimorfonucleares y proteínas francamente elevadas, sugestivas de Meningitis Bacteriana neonatal. Ante la necesidad de iniciar cobertura antibiótica empírica de amplio espectro en la primera hora, ¿qué combinación de fármacos intravenosos es la recomendada como PRIMERA LÍNEA para un menor de 28 días?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ceftriaxona asociada a Vancomicina a dosis meningeas.",
      },
      {
        id: "B",
        label: "B",
        text: "Ampicilina asociada a Cefotaxima o a un Aminoglucósido (Gentamicina).",
      },
      {
        id: "C",
        label: "C",
        text: "Meropenem asociado a Clindamicina para cubrir patógenos anaerobios y nosocomiales de alto riesgo.",
      },
      {
        id: "D",
        label: "D",
        text: "Ampicilina en monoterapia a altas dosis por su excelente penetración de la barrera hematoencefálica.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Sepsis / Meningitis Neonatal Tardía. El período neonatal (primeros 28 días de vida) es terreno de tres patógenos bacterianos principales adquiridos en el canal del parto o la comunidad: Streptococcus agalactiae (Grupo B), Escherichia coli y Listeria monocytogenes. Debido a este perfil epidemiológico particular, el régimen antibiótico empírico sagrado y universal para todo neonato febril/tóxico es la combinación de Ampicilina (para cubrir espléndidamente a S. agalactiae y Listeria) más un medicamento para Gram negativos entéricos de la madre (E. coli), el cual clásicamente es un Aminoglucósido (Gentamicina). Si hay franca meningitis purulenta confirmada en LCR, muchos centros prefieren cambiar la Gentamicina por Cefotaxima debido a su superior penetración en el LCR sin toxicidad renal. El uso de Ceftriaxona en el período neonatal está fuertemente desaconsejado.",
    keyPoints: [
      "Neonato (< 28 días de vida) con fiebre sin foco evidente o letargia.; Necesidad de inicio empírico de antibióticos por protocolo de sepsis/meningitis neonatal.",
      "Ampicilina + Gentamicina (o Cefotaxima). Siempre cubrir Estreptococo B y Listeria (con la Ampicilina). La Ceftriaxona es un error iatrogénico grave en neonatología.",
      "Infectología Neonatal / Sepsis Temprana y Tardía.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-07",
    university: "UCC",
    examArea: "MEDICINA INTERNA - HEMATOLOGÍA / NEUROLOGÍA",
    topic: "Urgencias Hematológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","urgencias-hematol-gicas","urgencias","hematol","gicas"],
    statement: "Mujer de 38 años, previamente sana, consulta a urgencias por un cuadro de 4 días de instauración que incluye fatiga extrema, fiebre leve (37.8°C), y la aparición de \"manchas rojas en la piel\" (petequias diseminadas en abdomen y piernas). Hoy en la mañana, su esposo notó que ella arrastraba las palabras al hablar (disartria) y presentó un episodio transitorio de desorientación témporo-espacial severa. Al examen físico resalta ictericia en escleras. Paraclínicos de ingreso: Hemoglobina 7.4 g/dL, Plaquetas 18,000/mm³ (Trombocitopenia grave), Leucocitos normales. Creatinina sérica 1.8 mg/dL. Reticulocitos elevados (8%). LDH sérica masivamente elevada en 1.850 U/L y Haptoglobina indetectable. El Test de Coombs directo es Negativo. Se solicita un frotis de sangre periférica urgente, el cual revela la presencia de múltiples esquizocitos (fragmentos de glóbulos rojos rotos). Ante el diagnóstico fulminante, ¿cuál es el tratamiento INMEDIATO de soporte vital que no debe retrasarse bajo ninguna circunstancia, y qué intervención clásica está CONTRAINDICADA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Transfusión empírica de concentrados plaquetarios inmediatos para evitar hemorragia intracerebral y soporte con hemodiálisis.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar Recambio Plasmático Terapéutico (Plasmaféresis) de emergencia asociado a esteroides, y EVITAR estrictamente la transfusión de plaquetas.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar pulsos de Metilprednisolona intravenosa a dosis altas y esplenectomía de urgencia; evitar el recambio plasmático por riesgo de sangrado.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Eculizumab (Anti-C5) de inmediato por sospecha de microangiopatía trombótica mediada por complemento.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta la pentalogía clínica patognomónica de la Púrpura Trombocitopénica Trombótica (PTT): Anemia hemolítica microangiopática (esquizocitos, LDH alta, haptoglobina baja, Coombs negativo), Trombocitopenia por consumo, Síntomas Neurológicos fluctuantes, Falla renal aguda (usualmente leve) y Fiebre. El mecanismo fisiopatológico es la producción de un autoanticuerpo inhibitorio contra la enzima ADAMTS13. Al fallar la enzima, los megamultímeros del Factor de von Willebrand no se pueden \"recortar\" y permanecen como redes gigantes en la sangre, atrapando millones de plaquetas y formando microtrombos diseminados en el cerebro y riñón (los glóbulos rojos chocan contra estas redes y se rompen en \"esquizocitos\"). Esta es una de las mayores urgencias en hematología médica. La terapia que cambió la mortalidad histórica (de >90% a <10%) es el Recambio Plasmático Terapéutico (Plasmaféresis) URGENTE, el cual remueve el autoanticuerpo de la sangre y, al mismo tiempo, el plasma donado repone la enzima ADAMTS13 faltante. La regla de oro restrictiva de la PTT es que NUNCA SE DEBEN TRANSFUNDIR PLAQUETAS (a menos que haya sangrado catastrófico activo intracraneal incontrolable), pues añadir nuevas plaquetas a la circulación solo alimenta la formación de nuevos trombos letales (\"echar gasolina al fuego\").",
    keyPoints: [
      "Mujer joven adulta con síntomas NEUROLÓGICOS (fluctuantes/isquémicos) + Petequias.; Laboratorio: Plaquetas muy bajas (<20k) + Anemia con ESQUIZOCITOS (Microangiopatía trombótica).",
      "Púrpura Trombocitopénica Trombótica (PTT) por déficit de ADAMTS13. Manejo: Plasmaféresis de urgencia inmediata + Corticoides. Trampa letal a evitar: La transfusión de plaquetas empírica está proscrita porque precipita trombosis masiva.",
      "Urgencias Hematológicas / PTT.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-08",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA / URGENCIAS",
    topic: "Medio Interno y Electrolitos",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","medio-interno-y-electrolitos","medio","interno","y","electrolitos"],
    statement: "Hombre de 70 años con antecedente de Insuficiencia Renal Crónica estadio 5 en programa de diálisis peritoneal ambulatoria. Es traído por el SAMU a urgencias por debilidad generalizada profunda, dificultad respiratoria de inicio reciente y parestesias en extremidades superiores. El paciente refiere haber estado ingiriendo altas cantidades de jugo de naranja y suplementos nutricionales no prescritos en la última semana. Al examen físico: obnubilado, pálido, FR 28 rpm, FC 45 lpm (bradicardia franca). Se toma un electrocardiograma (ECG) de 12 derivaciones inmediato en el triaje que reporta: Ritmo irregular sin ondas P visibles, prolongación marcada del complejo QRS (160 ms) de morfología sinusoidal, y presencia de ondas T picudas, acuminadas y de base estrecha en derivadas precordiales. A la espera de los gases arteriales y niveles de electrolitos en sangre, el paciente presenta un episodio de inestabilidad hemodinámica (PA 75/40 mmHg). ¿Cuál es la intervención terapéutica empírica de PRIMER ORDEN y OBLIGATORIA para proteger la vida del paciente frente al colapso eléctrico inminente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Gluconato de Calcio al 10% (o Cloruro de Calcio) en bolo intravenoso inmediato para estabilizar la membrana del miocardiocito.",
      },
      {
        id: "B",
        label: "B",
        text: "Infundir una mezcla de Insulina Regular (10 Unidades) con Dextrosa al 50% (50 mL) intravenosa rápida para iniciar el desplazamiento intracelular del electrolito culpable.",
      },
      {
        id: "C",
        label: "C",
        text: "Instalar terapia nebulizada con Salbutamol a dosis altas (10-20 mg) y administrar Bicarbonato de Sodio intravenoso.",
      },
      {
        id: "D",
        label: "D",
        text: "Insertar un marcapasos temporal de urgencia y administrar Atropina a dosis de 1 mg IV por la bradicardia sinusal.",
      },
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con una Hiperkalemia Severa con inestabilidad eléctrica y toxicidad cardíaca franca. En un paciente nefrópata que consume altas cargas de potasio (jugo de naranja, frutas) y se presenta con debilidad y bradicardia, el hallazgo ECG de ondas T picudas \"en tienda de campaña\", ensanchamiento letal del QRS y desaparición de las ondas P, son las señales rojas de que el nivel de potasio sérico debe estar por encima de 7.5 - 8.0 mEq/L. Este trazado sinusoidal preludia un paro cardiorrespiratorio inminente (Fibrilación Ventricular o Asistolia). El paso primario innegociable en el algoritmo de hiperkalemia grave no es intentar \"bajar\" el potasio de inmediato, sino ESTABILIZAR EL CORAZÓN. El Calcio Intravenoso (Gluconato o Cloruro de Calcio) antagoniza el efecto tóxico del potasio en la membrana celular del corazón, restaurando el umbral eléctrico de excitabilidad miocárdica en escasos de 1 a 3 minutos, previniendo la arritmia mortal mientras hacen efecto los otros medicamentos. (Ojo: El Calcio intravenoso NO BAJA los niveles séricos de potasio en lo absoluto, solo es un \"escudo eléctrico\" transitorio).",
    keyPoints: [
      "Paciente renal crónico con debilidad, parestesias y bradicardia.; ECG: Ondas T picudas altas, PR largo, ondas P que desaparecen, o QRS ancho sinusoidal.",
      "Hiperkalemia tóxica letal. El paso número 1 SIEMPRE es Calcio IV (Gluconato/Cloruro) para proteger la membrana miocárdica. El paso 2 es la redistribución (Insulina+Dextrosa, Salbutamol) y el paso 3 es la eliminación (Diálisis o resinas).",
      "Medio Interno y Electrolitos / Hiperkalemia.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-09",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / CUIDADO INTENSIVO",
    topic: "Complicaciones de Endocarditis Infecciosa",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","complicaciones-de-endocarditis-infecciosa","complicaciones","de","endocarditis","infecciosa"],
    statement: "Mujer de 55 años, previamente sana, se encuentra hospitalizada en cuidados intermedios en tratamiento por una Endocarditis Infecciosa de válvula tricúspide nativa debida a Staphylococcus aureus meticilino-sensible (SAMS), relacionada presumiblemente al uso de un catéter venoso periférico que presentó flebitis hace un mes. Ha recibido Oxacilina endovenosa durante 10 días y presentaba evolución clínica favorable y resolución de la fiebre. Sin embargo, en las últimas 24 horas inicia de manera brusca con dolor torácico de características pleuríticas, disnea, tos seca en accesos y expectoración escasa de hilos de sangre (hemoptisis). Vuelve a presentar picos febriles (39°C) y taquicardia a 115 lpm. Al examen físico: murmullo vesicular disminuido con estertores basales bilaterales dispersos, y un soplo holosistólico en foco tricuspídeo que aumenta con la inspiración, idéntico al del ingreso. ¿Cuál es la principal sospecha diagnóstica como complicación secundaria aguda de este cuadro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Extensión de la endocarditis hacia la válvula aórtica con insuficiencia valvular izquierda aguda secundaria.",
      },
      {
        id: "B",
        label: "B",
        text: "Ruptura de las cuerdas tendinosas de la válvula tricúspide precipitando insuficiencia derecha retrógrada e infarto hepático isquémico.",
      },
      {
        id: "C",
        label: "C",
        text: "Desarrollo de múltiples embolismos sépticos pulmonares originados por fragmentación de la vegetación tricuspídea.",
      },
      {
        id: "D",
        label: "D",
        text: "Reacción adversa pleuropulmonar tardía de hipersensibilidad (Neumonitis eosinofílica) inducida por la Oxacilina intravenosa.",
      },
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con la complicación por excelencia de la Endocarditis Infecciosa del Lado Derecho (Válvula Tricúspide). A diferencia de las endocarditis del lado izquierdo (aórtica o mitral) que lanzan los émbolos hacia la circulación sistémica causando ACVs, isquemia en las piernas o infartos esplénicos, el flujo de la válvula tricúspide y del ventrículo derecho tiene un único destino: el árbol arterial de los pulmones. Es sumamente frecuente (especialmente cuando el agente causal es el destructivo y aglutinante S. aureus) que trozos de la vegetación purulenta se desprendan (\"émbolos sépticos\") e impacten masivamente en las pequeñas ramas pulmonares. Esto genera infartos pulmonares focales y abscesos pulmonares diseminados, lo cual explica clínicamente la reaparición de la fiebre, el dolor pleurítico de instauración súbita (por el infarto periférico que irrita la pleura), y la hemoptisis focal en un paciente con endocarditis tricuspídea conocida.",
    keyPoints: [
      "Paciente con antecedente de uso de drogas intravenosas (ADVP) o uso crónico de catéteres periféricos/centrales.; Endocarditis de Válvula Tricúspide o Pulmonar.; Complicación aguda nueva: Disnea, dolor torácico pleurítico, tos y hemoptisis.",
      "Embolismos Sépticos Pulmonares. Todo el material infeccioso desprendido del corazón derecho se filtra y estanca obligatoriamente en la vasculatura de los pulmones, provocando infartos purulentos múltiples y cavitaciones bilaterales.",
      "Complicaciones de Endocarditis Infecciosa / Neumología.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-10",
    university: "UCC",
    examArea: "PEDIATRÍA - URGENCIAS / CUIDADO INTENSIVO",
    topic: "Reanimación Pediátrica (PALS)",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","reanimaci-n-pedi-trica-pals","reanimaci","n","pedi","trica","pals"],
    statement: "Lactante masculino de 10 meses de edad es ingresado al cuarto de reanimación de urgencias por un cuadro febril de 40°C y alteraciones en el estado de alerta. A su llegada, la madre relata que el niño lleva dos días sin tolerar vía oral y presentaba vómitos continuos. Al examen físico: obnubilado, pálido, piel marmórea, extremidades frías, pulsos pedios y femorales virtualmente impalpables y llenado capilar de 6 segundos. Su Frecuencia Cardíaca es de 185 lpm y la Presión Arterial (tomada con manguito adecuado) es de 55/30 mmHg. Tras activar la alerta de choque séptico pediátrico \"frío\", el equipo de reanimación intenta canalizar dos vías venosas periféricas de grueso calibre de manera agresiva. Sin embargo, debido al intenso colapso vascular y la centralización del flujo sanguíneo, ambos intentos fracasan a los 60 segundos del ingreso. ¿Cuál es el paso INMEDIATO de procedimiento clínico innegociable indicado por las guías del PALS (Soporte Vital Avanzado Pediátrico) para asegurar el acceso vascular que no debe retrasarse más?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar un tercer y cuarto intento de canalización periférica en miembros inferiores guiados por ecografía durante un periodo adicional de 5 minutos.",
      },
      {
        id: "B",
        label: "B",
        text: "Proceder inmediatamente a la inserción de un catéter venoso central (CVC) femoral o yugular mediante técnica de Seldinger, convocando al cirujano o intensivista de turno.",
      },
      {
        id: "C",
        label: "C",
        text: "Instaurar un acceso intraóseo (IO) directo en la tibia proximal anterior o en fémur distal sin demora alguna.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar una venodisección quirúrgica (cutdown) de la vena safena magna a la altura del tobillo interno.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con un Choque Séptico Pediátrico Descompensado (inestabilidad mental, mala perfusión periférica, hiperlactatemia clínica y caída franca de la presión arterial por debajo del percentil 5 para su edad). Las guías del Surviving Sepsis Campaign pediátrico y las directrices PALS son dictatoriales respecto a la reanimación hídrica en pediatría: en el niño chocado (hipovolémico o séptico), los líquidos y antibióticos deben iniciar en los primeros 5 a 15 minutos. Si el acceso intravenoso (IV) periférico no se logra obtener en un plazo máximo de 60 a 90 segundos (o tras un máximo de 2 a 3 intentos), el personal médico debe SALTAR AUTOMÁTICAMENTE a colocar un Acceso Intraóseo (IO). La médula ósea de la tibia anterior proximal es un lecho venoso no colapsable que fluye directamente a la circulación central y asimila líquidos y medicamentos a la misma velocidad que una vía intravenosa. Retrasar esto buscando venas periféricas colapsadas condena al niño al paro cardíaco por hipovolemia celular isquémica prolongada.",
    keyPoints: [
      "Niño o lactante críticamente inestable (Choque franco, paro cardíaco inminente, Estatus epiléptico).; Intento de canalización venosa periférica FALLIDA tras 60 - 90 segundos.",
      "Acceso Intraóseo (IO) inmediato (típicamente en la cara plana anteromedial de la tibia proximal). Es inaceptable seguir pinchando a un niño chocado o perder tiempo vital preparando catéteres venosos centrales.",
      "Reanimación Pediátrica (PALS) / Accesos Vasculares.",
    ],
  }
];
