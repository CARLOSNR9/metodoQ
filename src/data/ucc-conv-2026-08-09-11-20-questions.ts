import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · Preguntas #11–#20.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_08_09_11_20_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-08-09-11",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA / CARDIOLOGÍA",
    topic: "Complicaciones Endovasculares",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","complicaciones-endovasculares","complicaciones","endovasculares"],
    statement: "Hombre de 68 años con antecedente de cardiopatía isquémica severa. Hace 5 días fue sometido a un cateterismo cardíaco (Angioplastia con colocación de stent) por un infarto agudo de miocardio, durante el cual se utilizó una cantidad moderada de medio de contraste. Hoy el paciente es interconsultado por una elevación progresiva de la creatinina sérica de 1.1 mg/dL basal a 3.4 mg/dL. Al examen físico: hemodinámicamente estable, pero se documenta un patrón reticular violáceo difuso en ambas extremidades inferiores (livedo reticularis) y cianosis dolorosa en los pulpejos de los dedos de los pies, con pulsos pedios y tibiales posteriores palpables y rítmicos. Los laboratorios revelan una Eosinofilia del 12% en el hemograma y el sedimento urinario muestra eosinofiluria sin cilindros de eritrocitos. ¿Cuál es la etiología MÁS probable de la lesión renal aguda de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nefropatía por contraste hiperosmolar inducida por el procedimiento angiográfico.",
      },
      {
        id: "B",
        label: "B",
        text: "Enfermedad Ateroembólica Renal (Embolia de cristales de colesterol).",
      },
      {
        id: "C",
        label: "C",
        text: "Nefritis Intersticial Aguda secundaria a los antiagregantes plaquetarios (Clopidogrel).",
      },
      {
        id: "D",
        label: "D",
        text: "Isquemia arterial aguda de miembros inferiores por trombosis del acceso femoral con rabdomiólisis secundaria.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Ateroembolia por Cristales de Colesterol, una complicación iatrogénica clásica y devastadora posterior a procedimientos endovasculares invasivos (cateterismo, angiografías, cirugía aórtica). Al manipular catéteres dentro de una aorta severamente ateroesclerótica, el cardiólogo \"raspa\" accidentalmente las placas de ateroma, liberando una lluvia de cristales de colesterol hacia la circulación sistémica. Estos cristales viajan hacia las arteriolas distales, impactando en los riñones (Falla Renal Aguda) y en la piel de las extremidades inferiores. La tríada clínica patognomónica es: Falla renal aguda de instauración subaguda (días a semanas post-cateterismo), lesiones isquémicas distales (\"Síndrome del dedo azul\" y livedo reticularis con pulsos normales, ya que el tapón es microvascular), y un hallazgo de laboratorio pivote: Eosinofilia sérica y Eosinofiluria, producto de la fuerte reacción inmunológica contra el material lipídico extraño expuesto en la sangre. No existe tratamiento curativo, el manejo es puramente de soporte.",
    keyPoints: [
      "Paciente sometido a Cateterismo Cardíaco o cirugía de aorta en los últimos días/semanas.; Livedo reticularis + Dedo azul con pulsos conservados.; Falla renal aguda asociada a Eosinofilia.",
      "Embolismo de Cristales de Colesterol (Enfermedad ateroembólica). La diferencia clave con la nefropatía por contraste es el TIEMPO (el contraste daña en 24-48h, el ateroembolismo tarda de 5 a 15 días) y los signos cutáneos eosinofílicos.",
      "Complicaciones Endovasculares / Lesión Renal Aguda.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-12",
    university: "UCC",
    examArea: "PEDIATRÍA - URGENCIAS / NEUROLOGÍA",
    topic: "Urgencias Pediátricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","urgencias-pedi-tricas","urgencias","pedi","tricas"],
    statement: "Un niño de 5 años, con antecedente de epilepsia focal, ingresa a la sala de reanimación pediátrica en Estatus Epiléptico Convulsivo. Al ingreso, los padres refieren que lleva convulsionando ininterrumpidamente durante 15 minutos. El equipo médico asegura la vía aérea, administra oxígeno y logra canalizar una vía periférica. Se le administran dos dosis de Diazepam intravenoso (0.2 mg/kg cada una) espaciadas por 5 minutos, sin lograr absolutamente ninguna respuesta. La convulsión tónico-clónica persiste activa alcanzando ya el minuto 25. La glucemia capilar y los electrolitos de urgencia son normales. ¿Cuál es el paso farmacológico INMEDIATO protocolizado en la segunda línea de manejo del estatus epiléptico pediátrico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar una tercera y cuarta dosis de Diazepam o Midazolam intravenoso hasta saturar los receptores GABA.",
      },
      {
        id: "B",
        label: "B",
        text: "Inducir coma barbitúrico inmediato con Tiopental o Propofol y proceder a intubación orotraqueal de urgencia.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar dosis de carga intravenosa de Fenitoína (o Fosfenitoína), Ácido Valproico o Levetiracetam.",
      },
      {
        id: "D",
        label: "D",
        text: "Instaurar infusión continua de Ketamina por vía intraósea o central.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con un Estatus Epiléptico Convulsivo Refractario Temprano. El algoritmo de reanimación pediátrica y neurológica es estricto y tiene fases temporales.\nFase 1 (0-10 min): Benzodiacepinas de primera línea (Diazepam, Lorazepam, Midazolam). Las guías prohíben dar más de DOS dosis de benzodiacepinas por el inaceptable riesgo de depresión respiratoria y porque el cerebro \"internaliza\" los receptores GABA en una convulsión prolongada, haciéndose resistente al fármaco.\nFase 2 (10-30 min): Si las dos dosis de benzodiacepinas fallan, se pasa inmediatamente a la SEGUNDA LÍNEA. Esta consiste en \"impregnar\" el cerebro con un fármaco antiepiléptico de acción prolongada. Las tres opciones con el mismo nivel de evidencia son: Fenitoína (o Fosfenitoína), Ácido Valproico IV o Levetiracetam IV.\nFase 3 (>30 min): Si falla la segunda línea, el estatus es refractario y exige inducción de coma con anestésicos (Midazolam en infusión, Propofol o Tiopental) más intubación endotraqueal.",
    keyPoints: [
      "Niño en convulsión continua que NO cede a dos dosis de Diazepam/Midazolam.; Minutos 15 a 30 del Estatus Epiléptico.",
      "Segunda línea antiepiléptica OBLIGATORIA: Carga de Fenitoína, Ácido Valproico o Levetiracetam. NUNCA dar una tercera dosis de benzodiacepina de forma empírica en esta fase.",
      "Urgencias Pediátricas / Estatus Epiléptico.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-13",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA",
    topic: "Complicaciones de Cirrosis",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","complicaciones-de-cirrosis","complicaciones","de","cirrosis"],
    statement: "Un hombre de 62 años con cirrosis hepática secundaria a esteatohepatitis no alcohólica (NASH) acude a su consulta de control gastroenterológico. El paciente se encuentra estable, sin encefalopatía, pero ha presentado ascitis recurrente. Hace un mes, estuvo hospitalizado en medicina interna por un episodio severo de Peritonitis Bacteriana Espontánea (PBE), del cual se recuperó satisfactoriamente tras 7 días de Cefotaxima intravenosa. Actualmente, el líquido ascítico está estéril. Para prevenir una nueva infección, que en su estado actual acarrearía una mortalidad superior al 50%, ¿cuál es el régimen farmacológico de profilaxis secundaria INNEGOCIABLE que este paciente debe mantener al alta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender intervenciones profilácticas para evitar el desarrollo de microorganismos multirresistentes en la luz intestinal.",
      },
      {
        id: "B",
        label: "B",
        text: "Prescribir fluoroquinolonas orales (como Ciprofloxacino o Norfloxacino) o Trimetoprima-Sulfametoxazol (TMP-SMX) a dosis bajas de manera indefinida o hasta el trasplante hepático.",
      },
      {
        id: "C",
        label: "C",
        text: "Prescribir Rifaximina oral junto con Lactulosa para esterilizar selectivamente la microbiota productora de amonio.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar paracentesis evacuadoras seriadas semanales acompañadas de Albúmina intravenosa para evitar el estancamiento del líquido ascítico.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente tiene historia de un episodio previo confirmado de Peritonitis Bacteriana Espontánea (PBE). En el paciente cirrótico, la PBE es una complicación letal mediada por translocación bacteriana (usualmente enterobacterias como E. coli o Klebsiella) desde el intestino hacia el líquido ascítico. Las estadísticas dictan que un paciente que sobrevive a un episodio de PBE tiene una tasa de recurrencia del 70% en el primer año, con una mortalidad acumulada casi prohibitiva. Por lo tanto, las directrices de la AASLD y EASL obligan a instaurar una Profilaxis Secundaria universal e INDEFINIDA en todo paciente cirrótico que haya tenido al menos un episodio de PBE. El régimen de oro consiste en la descontaminación intestinal selectiva crónica utilizando dosis bajas de Ciprofloxacino, Norfloxacino o TMP-SMX todos los días, para frenar la translocación de Gram negativos. Esta terapia solo se suspende si la ascitis desaparece permanentemente o si el paciente recibe un trasplante hepático.",
    keyPoints: [
      "Cirrótico con Ascitis.; Antecedente de un episodio previo de PBE resuelto.; Decisión de manejo ambulatorio al alta.",
      "Profilaxis Secundaria para PBE. OBLIGATORIA DE POR VIDA (o hasta trasplante). Antibióticos de elección: Quinolonas (Cipro/Norfloxacino) o TMP-SMX diario.",
      "Complicaciones de Cirrosis / PBE.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-14",
    university: "UCC",
    examArea: "PEDIATRÍA - NEUMOLOGÍA / INFECTOLOGÍA",
    topic: "Infecciones en Fibrosis Quística",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","infecciones-en-fibrosis-qu-stica","infecciones","en","fibrosis","qu","stica"],
    statement: "Un niño de 2 años, con diagnóstico genético de Fibrosis Quística (FQ) detectado al nacimiento por tamizaje neonatal, es traído al hospital por una exacerbación pulmonar aguda caracterizada por aumento del trabajo respiratorio, tos húmeda productiva y fiebre de 38.5°C. El paciente no ha requerido hospitalizaciones previas ni ha estado bajo esquemas antibióticos prolongados recientemente. Se le toma una muestra de esputo inducido para cultivo y se planea el inicio de terapia antibiótica empírica intravenosa en piso. Conociendo el perfil epidemiológico cronológico de colonización bacteriana en los pacientes con Fibrosis Quística, ¿cuál es el patógeno pulmonar MÁS frecuente que debe ser el blanco principal del tratamiento empírico a esta edad (lactantes/preescolares)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Pseudomonas aeruginosa (cepa mucoide).",
      },
      {
        id: "B",
        label: "B",
        text: "Staphylococcus aureus.",
      },
      {
        id: "C",
        label: "C",
        text: "Burkholderia cepacia.",
      },
      {
        id: "D",
        label: "D",
        text: "Stenotrophomonas maltophilia.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una neumonía / exacerbación pulmonar aguda en el contexto de Fibrosis Quística (FQ). La clave de esta pregunta radica en el reloj biológico de la enfermedad. El moco espeso y deshidratado del pulmón fibroquístico cambia de \"dueño bacteriano\" a medida que el niño crece. En la edad de la lactancia y preescolar (0 a 5 años), el agente patógeno abrumadoramente más frecuente y el colonizador primario inicial de la vía aérea es el Staphylococcus aureus (a menudo asociado temporalmente con Haemophilus influenzae). Por esta razón, el tratamiento inicial de una exacerbación en un niño de 2 años sin aislamientos previos debe priorizar cobertura agresiva anti-estafilocócica. A medida que el tejido pulmonar se daña, el ambiente cambia; es solo en la preadolescencia y adultez temprana cuando la temida Pseudomonas aeruginosa desplaza al estafilococo y se convierte en el patógeno rey, indomable y letal de la vía aérea de la FQ.",
    keyPoints: [
      "Paciente con Fibrosis Quística con exacerbación respiratoria.; Edad < 5 años (Lactantes/Preescolares) -> Patógeno principal: S. aureus.; Edad > 15 años (Adolescentes/Adultos) -> Patógeno principal: Pseudomonas aeruginosa.",
      "El cambio de guardia bacteriano. El tratamiento empírico debe cubrir estafilococo en el niño pequeño, y antipseudomónicos duales en el adulto.",
      "Infecciones en Fibrosis Quística / Epidemiología Pediátrica.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-15",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / NEUMOLOGÍA",
    topic: "Arritmias",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","arritmias"],
    statement: "Un paciente masculino de 70 años, fumador pesado con Enfermedad Pulmonar Obstructiva Crónica (EPOC) estadio GOLD D, es ingresado a urgencias por una exacerbación severa de su cuadro respiratorio (aumento de la purulencia del esputo, uso masivo de accesorios y SatO2 de 82%). Mientras recibe broncodilatadores nebulizados y oxígeno, el monitor de signos vitales genera una alarma por taquicardia irregular de QRS estrecho a 145 lpm. Un ECG de 12 derivaciones reporta: Ritmo irregularmente irregular de complejos QRS estrechos, ausencia de una línea de base en serrucho y, patognomónicamente, la presencia de ondas P previas a cada QRS que exhiben 3 morfologías claramente diferentes en la misma derivación (DII), con intervalos PR y PP totalmente variables. El paciente está hemodinámicamente estable pero francamente ahogado por su broncoespasmo. ¿Cuál es el tratamiento de ELECCIÓN principal y fisiológico para revertir esta arritmia en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar Cardioversión Eléctrica Sincronizada inmediata, ya que las arritmias multifocales son precursoras de fibrilación ventricular.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Amiodarona intravenosa o iniciar un goteo de Esmolol para frenar el automatismo ectópico auricular.",
      },
      {
        id: "C",
        label: "C",
        text: "Optimizar exclusivamente el tratamiento de la patología pulmonar subyacente (oxigenación, esteroides, broncodilatadores).",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Adenosina intravenosa en técnica de doble jeringa para resetear el nódulo auriculoventricular.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta el trazado diagnóstico inconfundible de una Taquicardia Auricular Multifocal (TAM). Esta arritmia se caracteriza por ser irregularmente irregular, de QRS estrecho y, la perla de oro, presentar ≥ 3 morfologías distintas de la onda P en una misma derivación electrocardiográfica. La TAM no es una enfermedad cardíaca primaria; es casi exclusivamente una arritmia secundaria a hipoxia tisular severa, cor pulmonale y tensión de las cavidades derechas, siendo el paciente con reagudización de EPOC su víctima clásica. A diferencia de la Fibrilación Auricular (con la cual se confunde por ser ambas irregulares), la TAM es extremadamente refractaria a los antiarrítmicos, la cardioversión eléctrica y la digoxina. La única forma validada por las guías para \"curar\" la TAM es tratar la causa subyacente: oxigenar el pulmón isquémico y revertir el broncoespasmo (mejorando la hipoxemia y la sobrecarga derecha, el automatismo auricular caótico desaparecerá espontáneamente). Si fuera estrictamente necesario un freno cardíaco, el único aceptado (si la presión lo tolera y no hay asma) es el Verapamilo, pero tratar el pulmón sigue siendo la prioridad absoluta.",
    keyPoints: [
      "Paciente con EPOC severo exacerbado.; ECG: Arritmia Irregular + QRS estrecho + 3 tipos diferentes de onda P en la misma tira.",
      "Taquicardia Auricular Multifocal (TAM). NO SE CHOCA, NO RESPONDE A ADENOSINA NI AMIODARONA. El tratamiento de la arritmia es arreglar los pulmones (O2 y broncodilatadores).",
      "Arritmias / Neumología.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-16",
    university: "UCC",
    examArea: "PEDIATRÍA - ENDOCRINOLOGÍA / GASTROENTEROLOGÍA",
    topic: "Errores Innatos del Metabolismo Pediátrico.",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","errores-innatos-del-metabolismo-pedi-trico","errores","innatos","del","metabolismo","pedi","trico"],
    statement: "Un lactante de 6 meses es traído a urgencias en estado de estupor, sudoración fría y vómitos explosivos. La madre refiere que el niño venía desarrollándose perfectamente y sin problemas de salud mientras se alimentó exclusivamente de leche materna. Sin embargo, hace 3 días decidió iniciar la alimentación complementaria (ablactación) y le introdujo compotas de frutas (puré de manzana y jugo de pera) en su dieta diaria. Desde entonces, el niño comenzó a rechazar la comida, se tornó letárgico, y hoy notó que los ojos del bebé están de color amarillento. Al examen físico: hepatomegalia masiva a 6 cm bajo el reborde costal, ictericia franca y signos de falla hepática. Una glucometría de ingreso reporta 20 mg/dL (hipoglucemia profunda) y los gases muestran acidosis láctica secundaria. ¿Cuál es el diagnóstico metabólico MÁS exacto y la enzima ausente que desencadenó el cuadro tóxico en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Galactosemia Clásica; deficiencia de Galactosa-1-Fosfato Uridiltransferasa (GALT).",
      },
      {
        id: "B",
        label: "B",
        text: "Glucogenosis tipo I (Enfermedad de von Gierke); deficiencia de Glucosa-6-Fosfatasa.",
      },
      {
        id: "C",
        label: "C",
        text: "Intolerancia Hereditaria a la Fructosa; deficiencia de Aldolasa B.",
      },
      {
        id: "D",
        label: "D",
        text: "Fructosuria Esencial benigna; deficiencia de Fructoquinasa.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con Intolerancia Hereditaria a la Fructosa, un grave error innato del metabolismo autosómico recesivo. El patrón temporal de esta enfermedad es un \"gatillo\" diagnóstico irrefutable para exámenes médicos: los bebés son completa y absolutamente sanos mientras toman leche materna o fórmula exclusiva (pues estas contienen lactosa/galactosa, pero no fructosa). La catástrofe tóxica empieza súbitamente a los 5-6 meses, exactamente en el momento en que inician la ablactación y prueban su primera compota, papilla de frutas, miel o jugo dulce. Fisiológicamente, al carecer de la enzima Aldolasa B, la fructosa se atasca dentro de la célula hepática en forma de fructosa-1-fosfato. Este tóxico intracelular consume todo el fosfato libre del hígado, paralizando por completo la producción de glucosa (glucogenólisis y gluconeogénesis). El resultado clínico es un debut fulminante de: Vómitos repetitivos, Hepatomegalia tóxica (ictericia/cirrosis temprana) e Hipoglucemia letal tras ingerir frutas. El tratamiento es retirar de por vida la fructosa, la sacarosa y el sorbitol de la dieta.",
    keyPoints: [
      "Lactante completamente SANO en la etapa de lactancia exclusiva.; A los 6 meses (Ablactación) prueba purés de fruta o jugo y colapsa: Vómito, Hepatomegalia, Ictericia.; Laboratorio: Hipoglucemia severa sin respuesta a glucagón.",
      "Intolerancia Hereditaria a la Fructosa. Enzima defectuosa: ALDOLASA B. (No confundir con Galactosemia, que mata al bebé en la primera semana de vida solo con la leche de su madre).",
      "Errores Innatos del Metabolismo Pediátrico.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-17",
    university: "UCC",
    examArea: "MEDICINA INTERNA - REUMATOLOGÍA / NEFROLOGÍA",
    topic: "Urgencias Reumatológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","urgencias-reumatol-gicas","urgencias","reumatol","gicas"],
    statement: "Una mujer de 45 años, con antecedente de Esclerosis Sistémica de variante cutánea difusa (esclerodermia con endurecimiento de la piel que compromete tórax, abdomen y zonas proximales de los brazos) es ingresada a urgencias. Refiere un cuadro de 48 horas de cefalea intensísima de tipo punzante, visión borrosa (retinopatía hipertensiva grado IV en el fondo de ojo) y disnea incipiente. Al examen físico: PA 225/135 mmHg. Los laboratorios urgentes reportan: Creatinina sérica 3.5 mg/dL (basal de 0.8 mg/dL hace un mes), Plaquetas de 85.000/mm³ y frotis de sangre con presencia de abundantes esquizocitos (Microangiopatía trombótica). Se diagnostica una Crisis Renal Esclerodérmica aguda. Teniendo en cuenta la profunda falla renal oligúrica en curso que presenta la paciente (TFG < 15 mL/min), ¿cuál es el único grupo farmacológico salvavidas que DEBE utilizarse inmediatamente y obligatoriamente para frenar este cuadro letal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fibrinolíticos sistémicos (rt-PA) o Plasmaféresis inmediata para lisar los coágulos de la microangiopatía.",
      },
      {
        id: "B",
        label: "B",
        text: "Betabloqueadores intravenosos (Labetalol) o Nitroprusiato, asumiendo que los IECAs están prohibidos por el riesgo de empeorar la falla renal.",
      },
      {
        id: "C",
        label: "C",
        text: "Inhibidores de la Enzima Convertidora de Angiotensina (IECA, como el Captopril) a dosis progresivas, independientemente de la elevación inicial de la creatinina.",
      },
      {
        id: "D",
        label: "D",
        text: "Glucocorticoides sistémicos a dosis altas (Pulsos de Metilprednisolona) para apagar el brote fibrótico-inflamatorio generalizado de la Esclerodermia.",
      },
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con una Crisis Renal Esclerodérmica, la complicación visceral más temida y de mayor mortalidad aguda de la Esclerosis Sistémica difusa. La fisiopatología radica en un engrosamiento proliferativo de las arterias arqueadas interlobulillares del riñón que genera una isquemia cortical abrupta. Esta isquemia hace \"entrar en pánico\" a las células yuxtaglomerulares, provocando una liberación astronómica e incontrolada de Renina, la cual hiperactiva el eje Angiotensina II, causando una Hipertensión Arterial Maligna (daño de órgano blanco, esquizocitos, LRA). Antes de la llegada del Captopril (un IECA), la mortalidad a un año de esta crisis era del 90%. La regla inquebrantable y sagrada de reumatología dicta que el único tratamiento curativo que frena este ciclo letal es la administración de IECAs. Aquí se rompe un dogma médico de estudiantes: en un paciente sin esclerodermia, dar IECAs con una creatinina disparándose asusta. ¡En la esclerodermia, el IECA es el salvavidas absoluto, y SE DEBE DAR Y CONTINUAR A PESAR de que la creatinina siga subiendo en los primeros días! (No usar ARA-II, la evidencia sólida es estrictamente con IECAs de acción corta como Captopril).",
    keyPoints: [
      "Mujer con Esclerodermia Difusa (Piel dura).; Instauración de Hipertensión Arterial Maligna (>200/120) + Falla Renal Aguda rápida + Microangiopatía (esquizocitos).",
      "Crisis Renal Esclerodérmica. Fármaco OBLIGATORIO: Inhibidores de la ECA (Captopril). Prohibido cambiar de esquema aunque el riñón parezca estar fallando.",
      "Urgencias Reumatológicas / Esclerodermia.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-18",
    university: "UCC",
    examArea: "PEDIATRÍA - GASTROENTEROLOGÍA / CIRUGÍA",
    topic: "Cirugía Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","cirug-a-pedi-trica","cirug","a","pedi","trica"],
    statement: "Lactante masculino de 24 meses (2 años) de edad, es traído a consulta de urgencias por la madre debido a la aparición súbita de una hemorragia digestiva baja masiva. El niño manchó el pañal con grandes cantidades de sangre de color rojo vino oscuro (hematoquecia franca). Durante el interrogatorio, la madre hace especial énfasis en que el niño se encuentra COMPLETAMENTE INDOLORO, sigue jugando, se ve asintomático, está afebril y no presentó diarrea ni vómitos previos. Al examen físico: palidez mucocutánea generalizada, abdomen blando, depresible, ruidos normales, sin masas palpables ni dolor a la compresión profunda. El hemograma urgente muestra una caída de la Hemoglobina a 7.0 g/dL. Las constantes vitales se mantienen en rango de estabilidad límite. Ante la sospecha de la malformación congénita intestinal causante del cuadro de rectorragia indolora más común de esta edad, ¿cuál es el estudio de ORO de medicina nuclear que sella el diagnóstico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ecografía Doppler abdominal total en búsqueda del signo de la \"diana\" o el \"pseudoriñón\".",
      },
      {
        id: "B",
        label: "B",
        text: "Gammagrafía con Tecnecio-99m pertecnetato (Gammagrafía de Meckel).",
      },
      {
        id: "C",
        label: "C",
        text: "Angiografía mesentérica urgente para visualización y embolización directa del sangrado.",
      },
      {
        id: "D",
        label: "D",
        text: "Videocolonoscopia total con sedación profunda como primer abordaje visual de la mucosa sangrante.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Divertículo de Meckel sangrante. El divertículo de Meckel es el remanente embriológico del conducto onfalomesentérico (la anomalía congénita más común del tracto GI, regla de los 2: ocurre en el 2% de la población, 2 pulgadas de largo, a 2 pies de la válvula ileocecal, y debuta clásicamente alrededor de los 2 años de edad). Su presentación patognomónica es una hemorragia digestiva baja MASIVA, profusa y, fundamentalmente, TOTALMENTE INDOLORA, de color rojo oscuro o alquitranado, en un niño sin compromiso sistémico previo (hasta que se anenmiza). La hemorragia ocurre porque el divertículo contiene, de manera ectópica, tejido gástrico que secreta ácido clorhídrico. Este ácido cae directamente sobre la mucosa del íleon subyacente (que no está protegida), ulcerándola y causando el sangrado arterial severo. El test diagnóstico no invasivo de elección indiscutida es la Gammagrafía con Tecnecio-99m Pertecnetato (Scan de Meckel). El isótopo Tc-99m tiene una afinidad química única: es captado ávidamente por las células de la mucosa gástrica. Así, la máquina de rayos gamma mostrará el estómago (normal) y, sorpresivamente, un \"punto caliente\" extra en la fosa ilíaca derecha (el tejido gástrico rebelde ectópico dentro del divertículo).",
    keyPoints: [
      "Niño preescolar o lactante (típicamente 2 años).; Rectorragia / Hematoquecia profusa pero indolora y abdomen blando sano.",
      "Divertículo de Meckel sangrante. Fisiopatología: Tejido gástrico ectópico que ulcera el intestino. Diagnóstico: Gammagrafía con Tc-99m.",
      "Cirugía Pediátrica / Sangrado Gastrointestinal en Niños.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-19",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA / NEUROLOGÍA",
    topic: "Infecciones Oportunistas del VIH",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","infecciones-oportunistas-del-vih","infecciones","oportunistas","del","vih"],
    statement: "Hombre de 30 años, con diagnóstico de infección por VIH en etapa de abandono de terapia antirretroviral desde hace 2 años (recuento de CD4 actual en 35 cél/mm³). Acude a urgencias traído por familiares por un cuadro de inicio subagudo de dos semanas de evolución, caracterizado por cefalea de gran intensidad, letargia y fiebre no cuantificada. Hace dos horas presentó su primera crisis convulsiva tónico-clónica generalizada. Al examen neurológico: hemiparesia izquierda de predominio braquial 3/5. Una Tomografía Computarizada (TC) de cráneo con contraste evidencia múltiples lesiones nodulares ubicadas en los ganglios basales bilaterales y en la unión cortico-medular, las cuales presentan un intenso realce en anillo y están rodeadas de edema vasogénico masivo, generando leve desviación de la línea media. No se dispone aún de PCR en LCR ni de serologías específicas cruzadas. Según los protocolos de actuación en infecciones oportunistas del VIH, ¿cuál es el paso diagnóstico-terapéutico de PRIMERA LÍNEA para el manejo de este paciente en la sala de urgencias?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Remitir al paciente de forma urgente a neurocirugía para biopsia cerebral estereotáxica de la lesión primaria antes de iniciar drogas.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar de inmediato tratamiento empírico farmacológico con Pirimetamina, Sulfadiazina y Ácido Folínico.",
      },
      {
        id: "C",
        label: "C",
        text: "Instaurar manejo empírico inmediato con altas dosis de Corticosteroides sistémicos y diferir antibióticos para evitar sesgos diagnósticos.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar infusión intravenosa de Aciclovir empírico, dado que la meningoencefalitis necrotizante viral es el primer diagnóstico.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Neurotoxoplasmosis (Toxoplasmosis Cerebral), la infección oportunista neurológica MÁS FRECUENTE en pacientes con SIDA avanzado (CD4 estrictamente < 100 y clásicamente < 50 cél/mm³). La presentación clínica de fiebre, focalización motora nueva (hemiparesia) y convulsiones, sumada al hallazgo de imagen patognomónico: múltiples masas con realce en anillo localizadas en ganglios basales, establece un alto nivel de sospecha de reactivación de toxoplasma. A diferencia de las reglas en neurología de pacientes sanos (donde se biopsia antes de tratar para no borrar los márgenes tumorales), la regla de oro internacional en pacientes con VIH y masa cerebral es el Ensayo Terapéutico Empírico. Si el paciente tiene lesiones que realzan en anillo, SE ASUME siempre Toxoplasmosis y se instaura tratamiento antiprotozoario inmediato con Pirimetamina y Sulfadiazina (con Leucovorina para proteger la médula). Se reevalúa clínica e imagenológicamente a los 10-14 días; si la masa se \"derrite\" o reduce su tamaño, el diagnóstico queda sellado. La biopsia cerebral se reserva EXCLUSIVAMENTE si el paciente falla a este régimen tras dos semanas (haciendo sospechar fuertemente del segundo diferencial, el Linfoma Primario del SNC, que suele ser lesión única periventricular).",
    keyPoints: [
      "Paciente VIH (+) severamente suprimido (CD4 < 50).; Convulsión / focalización motora.; TC de cráneo: MÚLTIPLES lesiones con REALCE EN ANILLO en ganglios basales/unión cortico-subcortical.",
      "Toxoplasmosis Cerebral. La directriz innegociable es tratar primero a ciegas: Pirimetamina + Sulfadiazina empírica. Biopsia cerebral solo en caso de falla al tratamiento (para buscar Linfoma).",
      "Infecciones Oportunistas del VIH / Neurotoxoplasmosis.",
    ],
  },
  {
    id: "ucc-conv-2026-08-09-20",
    university: "UCC",
    examArea: "PEDIATRÍA - CARDIOLOGÍA / URGENCIAS",
    topic: "Cardiopatías Congénitas Cianosantes",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_09","cardiopat-as-cong-nitas-cianosantes","cardiopat","as","cong","nitas","cianosantes"],
    statement: "Lactante masculino de 8 meses, con un diagnóstico prenatal de cardiopatía congénita no corregida quirúrgicamente por abandono paterno del seguimiento. La abuela, quien está ahora a cargo, lo trae a urgencias porque notó que durante un episodio de llanto enérgico esta tarde, el niño \"se puso de color negro en los labios y en las manos\", quedó sin fuerza, respirando agitado (hiperpneico) y casi pierde el conocimiento. Al llegar a urgencias, el niño inicia otro acceso de llanto fuerte durante la toma de signos vitales e, inmediatamente, desarrolla una cianosis generalizada profunda con una franca disminución del soplo cardíaco que el residente de pediatría había auscultado minutos antes. Los signos vitales muestran SatO2 de 65% que no repunta significativamente con una cánula nasal de oxígeno. ¿Cuál es el mecanismo hemodinámico clave de la posición instintiva o física de rescate \"Genupectoral\" (rodillas al pecho) OBLIGATORIA para quebrar este episodio de asfixia cianógena?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Disminuye la Resistencia Vascular Sistémica (RVS) facilitando el vaciamiento del ventrículo izquierdo hacia la aorta.",
      },
      {
        id: "B",
        label: "B",
        text: "Aumenta la Resistencia Vascular Sistémica (RVS), lo que revierte el cortocircuito (shunt) de derecha a izquierda y fuerza la sangre hacia la arteria pulmonar.",
      },
      {
        id: "C",
        label: "C",
        text: "Aumenta pasivamente el retorno venoso al corazón derecho (precarga) al exprimir los lechos venosos de las extremidades inferiores.",
      },
      {
        id: "D",
        label: "D",
        text: "Disminuye la presión intratorácica, mejorando la compliancia pulmonar y permitiendo una mayor expansión alveolar.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Crisis Hipóxica (o Crisis Cianótica / \"Tet Spell\"), la emergencia médica característica de la Tetralogía de Fallot no corregida. Durante el llanto o el dolor, la taquicardia y la liberación de catecolaminas causan un espasmo del infundíbulo del ventrículo derecho (empeorando la estenosis pulmonar subvalvular). Al mismo tiempo, la sangre desoxigenada del ventrículo derecho, que ya no puede salir hacia los pulmones por el espasmo, busca el camino de menor resistencia y se escapa masivamente hacia la aorta (a través de la Comunicación Interventricular o CIV). Esto produce un cortocircuito (shunt) masivo de derecha a izquierda, enviando sangre desoxigenada al cuerpo (SatO2 65%). La maniobra inicial innegociable en el soporte vital es colocar al niño en posición Genupectoral (rodillas al pecho). Al flexionar fuertemente las caderas, se \"estrangulan\" las arterias femorales e ilíacas, lo que genera un aumento brusco de la Resistencia Vascular Sistémica (RVS). Al aumentar la presión en la aorta (por la resistencia distal), se le hace más difícil a la sangre del ventrículo derecho escapar por la CIV, obligándola a vencer el espasmo pulmonar e ir a oxigenarse a los pulmones, rompiendo así el ciclo de la crisis.",
    keyPoints: [
      "Lactante con cardiopatía cianógena (Tetralogía de Fallot).; Crisis desencadenada por llanto, dolor o fiebre: cianosis extrema repentina e hiperpnea.; Disminución de la intensidad del soplo sistólico habitual (porque hay menos sangre pasando por la válvula pulmonar).",
      "Crisis Hipóxica (Tet Spell). Manejo inicial: Posición Genupectoral (aumenta RVS). Manejo farmacológico: Oxígeno, Morfina (calma el llanto y la hiperpnea), Betabloqueadores (Esmolol/Propranolol para relajar el espasmo infundibular) y líquidos intravenosos.",
      "Cardiopatías Congénitas Cianosantes / Emergencias Pediátricas.",
    ],
  }
];
