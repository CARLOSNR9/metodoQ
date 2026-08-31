import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · Preguntas #31–#40.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_08_23_31_40_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-08-23-31",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / URGENCIAS",
    topic: "Urgencias Cardiovasculares",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-cardiovasculares","urgencias","cardiovasculares"],
    statement: "Un hombre de 65 años ingresa al servicio de urgencias en estado de choque profundo (PA 70/40 mmHg, FC 135 lpm, SatO2 82%). Refiere disnea súbita y dolor torácico pleurítico. Un ecocardiograma a pie de cama (POCUS) evidencia un ventrículo derecho dilatado, severamente hipoquinético (con preservación del ápice o Signo de McConnell) y colapso sistólico del ventrículo izquierdo. Se diagnostica un Tromboembolismo Pulmonar (TEP) Masivo con inestabilidad hemodinámica. El médico de urgencias se prepara para administrar terapia trombolítica sistémica (Alteplase), pero al revisar el historial clínico del paciente en el sistema, descubre un antecedente crítico ocurrido hace 3 semanas. ¿Cuál de los siguientes antecedentes representa una CONTRAINDICACIÓN ABSOLUTA para la trombólisis y obliga a derivar al paciente a una embolectomía quirúrgica o por catéter de emergencia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Úlcera péptica gástrica con sangrado endoscópico controlado hace 3 semanas.",
      },
      {
        id: "B",
        label: "B",
        text: "Resucitación cardiopulmonar (RCP) traumática prolongada de 15 minutos en el trayecto en ambulancia.",
      },
      {
        id: "C",
        label: "C",
        text: "Accidente Cerebrovascular (ACV) Hemorrágico documentado hace 3 semanas.",
      },
      {
        id: "D",
        label: "D",
        text: "Uso crónico de anticoagulantes orales directos (Rivaroxabán) para fibrilación auricular.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con un Tromboembolismo Pulmonar (TEP) Masivo (definido por la presencia de choque o hipotensión sistólica < 90 mmHg). En este escenario letal, la heparina no es suficiente; el coágulo debe ser destruido de inmediato para salvar el ventrículo derecho. El tratamiento de primera línea es la Trombólisis Sistémica (Alteplase / rt-PA). SIN EMBARGO, existen contraindicaciones absolutas mundiales que prohíben el uso de trombolíticos porque el riesgo de muerte por hemorragia es del 100%. Una de las contraindicaciones absolutas más importantes es el antecedente de cualquier ACV hemorrágico en cualquier momento de la vida (o un ACV isquémico en los últimos 3 a 6 meses, o un trauma craneal severo/neurocirugía en las últimas 3 semanas). Si a este paciente le pasas Alteplase, el coágulo del pulmón se disolverá, pero la cicatriz fresca de su cerebro sangrará masivamente, causándole muerte encefálica en minutos. La única opción de rescate es llamar a cirugía cardiovascular o hemodinamia para una embolectomía mecánica.",
    keyPoints: [
    "Paciente con TEP Masivo (Hipotensión/Choque + Falla del Ventrículo Derecho).; Decisión de Trombólisis vs. Embolectomía.",
    "Revisar contraindicaciones absolutas para Alteplase: ACV hemorrágico previo, tumor cerebral, trauma craneal/neurocirugía reciente (<3 semanas), o sangrado interno ACTIVO. Si tiene alguna de estas, la trombólisis está PROSCRITA y va a embolectomía.",
    "Urgencias Cardiovasculares / TEP Masivo."
],
  },
  {
    id: "ucc-conv-2026-08-23-32",
    university: "UCC",
    examArea: "PEDIATRÍA - NEFROLOGÍA / NEONATOLOGÍA",
    topic: "Urología Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urolog-a-pedi-trica","urolog","a","pedi","trica"],
    statement: "Un neonato masculino a término es evaluado a las 12 horas de vida debido a dificultad respiratoria severa. El historial obstétrico reporta un Oligohidramnios severo detectado en el tercer trimestre (poco líquido amniótico). Al examen físico, el neonato presenta facies aplanada, orejas de implantación baja y pie equinovaro (Secuencia de Potter). El abdomen se encuentra marcadamente distendido y a la palpación profunda se identifica una masa supra-púbica firme y globosa, compatible con una vejiga urinaria inmensamente distendida y palpable (globo vesical). El neonato no ha presentado ninguna micción desde el nacimiento. Se realiza una ecografía renal que evidencia hidronefrosis bilateral severa y megauréteres. Ante la patología obstructiva congénita MÁS probable en este varón, ¿cuál es la intervención diagnóstica-terapéutica INICIAL de primera línea en la sala de neonatología?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar una punción suprapúbica (cistostomía) de urgencia para evitar la ruptura vesical.",
      },
      {
        id: "B",
        label: "B",
        text: "Derivar inmediatamente a cirugía pediátrica para ablación endoscópica con láser antes de manipular la vía.",
      },
      {
        id: "C",
        label: "C",
        text: "Insertar una sonda vesical (uretral) de pequeño calibre (Feeding tube o Foley pediátrica) para descomprimir la vía urinaria.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar un bolo de Furosemida intravenosa para forzar el flujo urinario a través de la obstrucción.",
      },
    ],
    correctOptionId: "C",
    explanation: "El neonato varón cursa con Válvulas de Uretra Posterior (VUP), la causa más común de obstrucción severa del tracto urinario inferior en varones. Unos pliegues de tejido anómalos bloquean la uretra prostática. Al no poder orinar en el útero, el feto no produce líquido amniótico (Oligohidramnios), lo que impide que sus pulmones se desarrollen (Hipoplasia pulmonar) y el útero lo aplasta físicamente (caras planas, pie equinovaro = Secuencia de Potter). Al nacer, el globo vesical es masivo y los riñones están dilatados (hidronefrosis). El paso MÁS URGENTE para salvar los riñones de la destrucción total por presión retrógrada no es llevarlo corriendo al quirófano, sino descomprimir la vejiga. Esto se logra de forma simple, rápida y segura en la misma cuna insertando una sonda uretral fina. A menudo, la sonda logra traspasar y separar temporalmente los velos de la válvula, permitiendo que la orina estancada drene a chorro. Una vez estabilizado el riñón y el estado respiratorio, el urólogo pediatra realizará una Cistouretrografía Miccional (CUMC) confirmatoria y la posterior ablación endoscópica de las válvulas con láser.",
    keyPoints: [
    "Neonato VARÓN con Oligohidramnios en el embarazo + Hipoplasia Pulmonar (Secuencia de Potter).; Masa en hipogastrio (Globo vesical) + Anuria desde el nacimiento.",
    "Válvulas de Uretra Posterior (VUP). Intervención de rescate inicial: Sonda Vesical (Foley) para drenar. Examen confirmatorio de oro: Cistouretrografía Miccional Cistoscópica (CUMC).",
    "Urología Pediátrica / Malformaciones Congénitas."
],
  },
  {
    id: "ucc-conv-2026-08-23-33",
    university: "UCC",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - URGENCIAS",
    topic: "Urgencias Obstétricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-obst-tricas","urgencias","obst","tricas"],
    statement: "Una mujer de 34 años, G3P2, con antecedente de dos cesáreas previas, se encuentra en la sala de dilatación cursando un Trabajo de Parto tras Cesárea (TOLAC) a las 39 semanas. Se encuentra con 8 cm de dilatación y la cabeza fetal encajada en estación +1. Súbitamente, durante el acmé de una contracción, la paciente emite un grito desgarrador por un dolor pélvico lancinante, describe sentir \"algo que se rompió por dentro\" y presenta sangrado vaginal rojo oscuro. El monitor cardiotocográfico revela bradicardia fetal profunda y sostenida (70 lpm) y una pérdida repentina e total del tono y patrón de las contracciones uterinas (el útero se vuelve atónico y silencioso en el monitor). Al realizar el tacto vaginal de urgencia, el obstetra percibe que la cabeza fetal ya no se palpa en la pelvis (pérdida de la estación fetal). ¿Cuál es el diagnóstico más certero y la acción salvavidas inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Desprendimiento Prematuro de Placenta Normoinserta (Abruptio Placentae); requiere reanimación hídrica masiva y fórceps para extracción vaginal rápida.",
      },
      {
        id: "B",
        label: "B",
        text: "Ruptura Uterina completa; la paciente debe ser trasladada inmediatamente a quirófano para laparotomía de emergencia (Cesárea) y control de daños.",
      },
      {
        id: "C",
        label: "C",
        text: "Placenta Previa sangrante; se debe realizar ecografía transvaginal urgente en la sala para confirmar la localización antes de operar.",
      },
      {
        id: "D",
        label: "D",
        text: "Vasa Previa rota; requiere transfusión fetal intrauterina urgente y cesárea programada.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una Ruptura Uterina, la catástrofe obstétrica más letal durante el trabajo de parto. El factor de riesgo supremo y predictivo es el antecedente de cesáreas previas (la cicatriz antigua cede ante la fuerza de las contracciones). La presentación clínica de esta viñeta es el \"cuadro de oro\" y no permite lugar a dudas: 1) Dolor lancinante súbito con sensación de desgarro, 2) Cese repentino de las contracciones uterinas en el monitor (el útero roto no puede contraerse), 3) Pérdida de la estación fetal (el feto, que ya estaba encajado en la vagina, es expulsado hacia atrás a la cavidad abdominal de la madre a través del agujero en el útero), y 4) Sufrimiento fetal hiperagudo (bradicardia profunda). En este punto, el feto está muriendo por asfixia y la madre se exanguina internamente. La única conducta aceptable es correr al quirófano para una Laparotomía de Emergencia, extraer al feto desde la cavidad abdominal materna y suturar el útero o realizar histerectomía si está destrozado.",
    keyPoints: [
    "Gestante en trabajo de parto con antecedente de Cesárea previa (Cicatriz uterina).; Dato Pivote 1: Las contracciones SE DETIENEN de golpe.; Dato Pivote 2: El bebé \"desaparece\" del canal vaginal (pérdida de la presentación) o se palpan las partes fetales directamente debajo de la piel de la madre.",
    "Ruptura Uterina. Es la emergencia obstétrica por excelencia. Laparotomía urgente absoluta (Mortalidad fetal altísima).",
    "Urgencias Obstétricas / Ruptura Uterina."
],
  },
  {
    id: "ucc-conv-2026-08-23-34",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / URGENCIAS",
    topic: "Complicaciones de Diabetes",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","complicaciones-de-diabetes","complicaciones","de","diabetes"],
    statement: "Mujer de 55 años, con antecedente de Diabetes Mellitus tipo 2 en tratamiento con Metformina y Empagliflozina, acude a urgencias por malestar general intenso, náuseas, vómitos repetitivos y dolor abdominal de 24 horas de evolución. Refiere haber cursado con un cuadro viral gastrointestinal los días previos, disminuyendo su ingesta de alimentos pero manteniendo sus medicamentos habituales. Al examen físico: deshidratada, polipneica con respiración profunda y laboriosa (Respiración de Kussmaul) y aliento con olor frutal. Signos vitales: PA 90/60 mmHg, FC 120 lpm. Los laboratorios de ingreso arrojan un hallazgo que confunde al médico de guardia: Glucemia central en 175 mg/dL (casi normal). Sin embargo, los gases arteriales muestran pH 7.12, HCO3 de 10 mEq/L, y un Anión Gap de 24 mEq/L. El parcial de orina marca Cetonas fuertemente positivas (+++). Ante esta paradoja de acidosis metabólica profunda sin hiperglucemia marcada, ¿cuál es el diagnóstico endocrinológico preciso y el mecanismo iatrogénico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cetoacidosis Alcohólica encubierta; la empagliflozina bloqueó la gluconeogénesis hepática induciendo la cetogénesis.",
      },
      {
        id: "B",
        label: "B",
        text: "Cetoacidosis Diabética Euglucémica; inducida por los inhibidores del SGLT2 que promueven glucosuria masiva independientemente de los niveles de insulina.",
      },
      {
        id: "C",
        label: "C",
        text: "Acidosis Láctica secundaria a intoxicación por Metformina; la cetonuria es un falso positivo por la deshidratación aguda.",
      },
      {
        id: "D",
        label: "D",
        text: "Estado Hiperosmolar Hiperglucémico silente; el laboratorio procesó erróneamente la muestra por la interferencia de la empagliflozina.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta la clásica \"trampa moderna\" de la endocrinología: la Cetoacidosis Diabética Euglucémica. Clínicamente, la paciente tiene Cetoacidosis Diabética (CAD) severa: Kussmaul, dolor abdominal, pH 7.12, Gap alto y Cetonas volando. Pero el azúcar no está en 500 o 600 como es habitual, está en apenas 175 mg/dL. Este fenómeno es causado casi exclusivamente por el uso de los Inhibidores del Cotransportador Sodio-Glucosa tipo 2 (iSGLT2, como Empagliflozina, Dapagliflozina, Canagliflozina). Estos maravillosos fármacos hacen que el riñón excrete cantidades masivas de glucosa por la orina. Si la paciente se enferma, deja de comer y se deshidrata (estado de estrés y ayuno), su cuerpo entra en pánico por falta de carbohidratos celulares, y dispara la producción de glucagón y el consumo de grasas (cetogénesis) para sobrevivir. El paciente entra en una CAD real y mortal, pero como la pastilla (iSGLT2) obliga al riñón a botar toda el azúcar a la orina, la glucosa en sangre nunca sube a niveles de alarma. El tratamiento sigue siendo el de una CAD: suspender el iSGLT2, reanimar con líquidos y administrar Insulina intravenosa JUNTAMENTE con Dextrosa, para que la insulina apague la cetogénesis sin causar hipoglucemia mortal.",
    keyPoints: [
    "Paciente Diabético Tipo 2 tomando \"gliflozinas\" (Empagliflozina / Dapagliflozina).; Cuadro de cetoacidosis clásica (Kussmaul, cetonas, acidosis metabólica).; Dato Pivote: Glucemia en sangre NORMAL o levemente alta (< 250 mg/dL).",
    "Cetoacidosis Euglucémica por iSGLT2. El azúcar está \"normal\" porque el paciente la está orinando toda, pero las células se están muriendo de hambre y haciendo cetosis. Tratamiento: Insulina IV + Dextrosa IV + Líquidos.",
    "Complicaciones de Diabetes / Farmacología."
],
  },
  {
    id: "ucc-conv-2026-08-23-35",
    university: "UCC",
    examArea: "PEDIATRÍA - CIRUGÍA / GASTROENTEROLOGÍA",
    topic: "Cirugía Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","cirug-a-pedi-trica","cirug","a","pedi","trica"],
    statement: "Un recién nacido, producto de un embarazo mal controlado con polihidramnios severo, presenta en la sala de partos una abundante salivación espumosa por la boca (sialorrea excesiva). Minutos después, al intentar ofrecerle la primera toma de pecho, el neonato presenta tos violenta, ahogo (choking) y se torna cianótico, requiriendo aspiración inmediata. El neonatólogo intenta pasar una sonda orogástrica suave de 8 Fr, pero esta se detiene a unos 10 cm de las arcadas dentarias y se \"enrolla\" sobre sí misma, siendo imposible alcanzar el estómago. Se solicita una radiografía toracoabdominal que confirma la sonda enrollada en un bolsón esofágico ciego superior, PERO, sorprendentemente, se observa una gran cámara de aire en el estómago y abundante gas en el intestino distal. Dado el diagnóstico de la variante anatómica más común de esta malformación, ¿cuál es el examen ecográfico PREOPERATORIO sistémico OBLIGATORIO que el cirujano debe exigir antes de la corrección de la vía digestiva?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ecocardiograma transtorácico y Ecografía renal para descartar malformaciones de la asociación VACTERL.",
      },
      {
        id: "B",
        label: "B",
        text: "Ecografía cerebral transfontanelar para descartar hidrocefalia asociada a Síndrome de Dandy-Walker.",
      },
      {
        id: "C",
        label: "C",
        text: "Ecografía Doppler portal para descartar Atresia de vías biliares concomitante.",
      },
      {
        id: "D",
        label: "D",
        text: "Serie gastrointestinal superior con bario para delimitar el trayecto fistuloso exacto hacia el pulmón.",
      },
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con Atresia Esofágica con Fístula Traqueoesofágica (FTE). La clínica es patognomónica: \"Bebé que babea burbujas\" y se ahoga cianótico al intentar tragar la primera leche. El intento fallido de pasar la sonda sella el diagnóstico de Atresia Esofágica. La variante anatómica que sufre este paciente (y que representa el 85% de todos los casos, el Tipo C) consta de una atresia esofágica superior (bolsón ciego) y el extremo inferior del esófago conectado directamente a la tráquea (Fístula inferior). El \"truco\" diagnóstico de la viñeta es la presencia de aire en el estómago: si el esófago está tapado por arriba, ¿cómo llegó el aire al abdomen? ¡A través de la tráquea! Cada vez que el bebé respira o llora, el aire pasa de la tráquea por la fístula hacia el estómago. La regla estelar en pediatría quirúrgica es que la Atresia Esofágica JAMÁS viene sola en un 30-50% de los casos. Forma parte de la infame Asociación VACTERL (Anomalías Vertebrales, Anales, Cardíacas, Traqueo-Esofágicas, Renales y Limb/Extremidades). Por tanto, antes de llevar al bebé al quirófano a reparar el esófago, es innegociable pedirle un Ecocardiograma y una Ecografía Renal. Si el anestesiólogo lo duerme y el bebé tiene una Tetralogía de Fallot oculta o agenesia renal severa no diagnosticada, la mortalidad intraoperatoria se disparará.",
    keyPoints: [
    "Neonato que babea mucho, se atraganta (cianosis) con la 1ra toma de leche.; Sonda orogástrica que NO pasa y se enrolla.; Rx: Aire en el estómago = Atresia esofágica + Fístula traqueoesofágica inferior (Tipo C, la más común). Si NO hay aire en el estómago = Atresia Pura aislada (Tipo A).",
    "Asociación VACTERL. Buscar malformaciones ocultas antes del bisturí (Ecocardiograma es la prioridad absoluta).",
    "Cirugía Pediátrica / Malformaciones Congénitas Digestivas."
],
  },
  {
    id: "ucc-conv-2026-08-23-36",
    university: "UCC",
    examArea: "MEDICINA INTERNA - HEMATOLOGÍA",
    topic: "Oncología Hematológica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","oncolog-a-hematol-gica","oncolog","a","hematol","gica"],
    statement: "Un hombre de 68 años acude a consulta por fatiga severa y un dolor sordo y continuo en la región lumbar inferior y costillas, de varios meses de evolución. En las últimas semanas se ha quejado de estreñimiento y excesiva sed. Los exámenes de laboratorio revelan: Hemoglobina 9.0 g/dL (Anemia normocítica), Creatinina 2.2 mg/dL y un nivel de Calcio sérico elevado (11.8 mg/dL). El panel de proteínas arroja una Proteína Total sérica de 9.5 g/dL (muy alta) con una Albúmina de 3.5 g/dL (normal), lo que indica una Brecha o Gap de Proteínas > 4 g/dL. Una radiografía de cráneo muestra múltiples lesiones líticas redondas en \"sacabocados\". Ante la altísima sospecha de Mieloma Múltiple, ¿cuál de los siguientes hallazgos de laboratorio es PATOGNOMÓNICO de esta entidad y sellaría el diagnóstico hematológico definitivo junto a la biopsia de médula ósea?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Presencia masiva de Cuerpos de Auer en el citoplasma de las células plasmáticas periféricas.",
      },
      {
        id: "B",
        label: "B",
        text: "Electroforesis de proteínas séricas mostrando un pico monoclonal (Pico M) masivo de clase IgM, con hiperviscosidad clínica.",
      },
      {
        id: "C",
        label: "C",
        text: "Aspirado de médula ósea demostrando >10% de células plasmáticas clonales y hallazgo en el frotis de sangre de eritrocitos en \"pilas de monedas\" (Rouleaux).",
      },
      {
        id: "D",
        label: "D",
        text: "Cromosoma Filadelfia t(9;22) positivo en el análisis citogenético de las células malignas.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con un clásico y florido Mieloma Múltiple. Es una neoplasia hematológica de células plasmáticas que se presenta con el legendario criterio CRAB: Calcio alto (Hipercalcemia por destrucción ósea), Renal failure (Falla renal por los riñones taponados por proteínas Bence Jones), Anemia, y Bone lesions (lesiones óseas líticas en \"sacabocados\", que causan el dolor de espalda). Una de las pistas bioquímicas más elegantes del Mieloma es la \"Brecha de Proteínas\" (Proteína Total menos Albúmina); si es mayor a 4 g/dL, significa que hay muchísima globulina/anticuerpos basura en la sangre (Gammapatía monoclonal). El sello morfológico de esta sangre tan densa llena de inmunoglobulinas es el frotis periférico en Rouleaux (los glóbulos rojos pierden su repulsión magnética y se apilan unos sobre otros como si fueran pilas de monedas). El diagnóstico definitivo u OBLIGATORIO exige demostrar en una biopsia de médula ósea la infiltración por más del 10% de Células Plasmáticas clonales. (O una lesión ósea biopseada confirmada como plasmocitoma).",
    keyPoints: [
    "Anciano con Dolor de Espalda o Costillas (lesiones en sacabocados/osteolíticas) + Falla renal.; Criterios CRAB: Calcio alto, Renal, Anemia, Bone.; Gap de Proteínas muy alto en sangre (por anticuerpos monoclonales IgG o IgA).",
    "Mieloma Múltiple. Frotis clave: Células en \"Pilas de monedas\" (Rouleaux). Diagnóstico de confirmación: Médula Ósea con >10% de células plasmáticas clonales.",
    "Oncología Hematológica / Gammapatías Monoclonales."
],
  },
  {
    id: "ucc-conv-2026-08-23-37",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / GINECOLOGÍA",
    topic: "Urgencias Neurológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-neurol-gicas","urgencias","neurol","gicas"],
    statement: "Mujer de 26 años, en su tercera semana de puerperio tras un parto sin complicaciones, acude a urgencias por presentar una cefalea holocraneana severa y progresiva durante los últimos 5 días, que no cede con analgésicos. En las últimas 24 horas, su esposo nota que presenta visión doble, somnolencia profunda y, hace una hora, sufrió un episodio de convulsión focal en su brazo y cara derecha. Al examen físico, se documenta papiledema bilateral franco (edema de los discos ópticos) y una paresia del VI par craneal. Se solicita de inmediato una Tomografía Computarizada (TC) de cráneo con contraste venoso, la cual reporta el signo del \"Delta Vacío\" (Empty Delta Sign) a nivel parasagital posterior y una pequeña área de hemorragia cortical adyacente en el parénquima venoso de 1 cm. Ante el diagnóstico fulminante, ¿cuál es el tratamiento INMEDIATO Y MANDATORIO que debe instaurarse a pesar de la presencia de la zona hemorrágica documentada en el parénquima?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspensión de cualquier anticoagulación y administración de ácido tranexámico ante el infarto venoso hemorrágico activo en el parénquima cerebral.",
      },
      {
        id: "B",
        label: "B",
        text: "Anticoagulación sistémica a dosis plenas inmediatas con Heparina de Bajo Peso Molecular (HBPM) o Heparina No Fraccionada (HNF).",
      },
      {
        id: "C",
        label: "C",
        text: "Inserción de una derivación ventrículo-peritoneal para disminuir la hipertensión endocraneana producida por el edema de papila.",
      },
      {
        id: "D",
        label: "D",
        text: "Administración profiláctica de esteroides a dosis altas y tratamiento exclusivo con antiepilépticos, difiriendo la anticoagulación por 14 días hasta que la sangre se reabsorba.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una Trombosis de Senos Venosos Cerebrales (TSVC), predominantemente del seno sagital superior. Es una catástrofe vascular que ataca principalmente a mujeres en estado de hipercoagulabilidad: puerperio, embarazo o uso de anticonceptivos orales (ACOs). A diferencia del ACV arterial, la TSVC tapona el desagüe (las venas) del cerebro. La sangre arterial entra, pero no puede salir, aumentando brutalmente la presión intracraneal (Cefalea refractaria + Papiledema + Convulsiones por irritación de la corteza adyacente). El signo radiológico de oro en la TC o RMN con contraste es el \"Signo del Delta Vacío\" (el contraste pinta la periferia triangular del seno venoso, pero el centro está negro/vacío porque el coágulo lo tapona). Al estar las venas taponadas, los capilares se rompen por contrapresión, causando pequeños \"infartos venosos hemorrágicos\" en el cerebro. ¡AQUÍ ESTÁ LA TRAMPA MAGISTRAL! A pesar de que la paciente tiene sangre (hemorragia venosa) en la TAC, la regla internacional y las guías de la AHA/ASA dictaminan que SE DEBE ANTICOAGULAR A PLENITUD (Heparina IV o Enoxaparina) de inmediato. A diferencia del ACV arterial, la hemorragia aquí es un síntoma del taponamiento venoso; si no anticoagulas y destapas esa vena principal, el cerebro entero se encharcará en sangre y la paciente morirá.",
    keyPoints: [
    "Mujer en Puerperio / Embarazo / usuaria de Anticonceptivos Orales.; Cefalea que no cede + Papiledema + Convulsión/Focalización.; TAC con contraste: Signo del Delta Vacío (Empty delta sign).",
    "Trombosis de Senos Venosos Cerebrales. Tratamiento paradójico salvavidas: ANTICOAGULACIÓN PLENA (Heparinas), INCLUSO si la imagen muestra una pequeña transformación hemorrágica asociada al infarto venoso.",
    "Urgencias Neurológicas / ACV Venoso."
],
  },
  {
    id: "ucc-conv-2026-08-23-38",
    university: "UCC",
    examArea: "PEDIATRÍA - ONCOLOGÍA / REUMATOLOGÍA",
    topic: "Oncología Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","oncolog-a-pedi-trica","oncolog","a","pedi","trica"],
    statement: "Un niño de 4 años es llevado a su pediatra quejándose de \"dolor de huesos\" difuso durante las últimas tres semanas, el cual lo despierta intermitentemente por la noche. Su madre relata que últimamente el niño no quiere jugar, está muy fatigado, pálido y ha presentado episodios de fiebre baja (38°C) persistente sin foco aparente. Al examinarlo, el pediatra palpa dolor óseo exquisito a la percusión de la tibia anterior y el esternón. Se observa la presencia de adenopatías cervicales generalizadas indoloras (1.5 cm) y esplenomegalia a 3 cm bajo el reborde costal. Un hemograma ambulatorio de la semana pasada mostró una leve pancitopenia: Hemoglobina 9.5 g/dL, Leucocitos 3,500/mm³ (sin blastos visibles en la máquina automática de conteo) y Plaquetas 90,000/mm³. El pediatra de turno sospecha que el niño padece Artritis Idiopática Juvenil de inicio sistémico debido a la fiebre y el dolor esquelético, y se prepara para administrarle pulsos de Corticosteroides a dosis altas (Dexametasona o Prednisona) para inducir la remisión inflamatoria antes de referirlo. ¿Por qué esta conducta médica está ABSOLUTAMENTE PROSCRITA y constituye una de las mayores iatrogenias en este contexto específico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Porque en caso de tratarse de una osteomielitis multifocal, los corticoides diseminarían la infección bacteriana de forma incontrolable hacia la sangre.",
      },
      {
        id: "B",
        label: "B",
        text: "Porque ante la altísima sospecha de una Leucemia Linfoblástica Aguda (LLA), administrar esteroides causará destrucción celular en la médula ósea, \"enmascarando\" la biopsia diagnóstica y precipitando un letal Síndrome de Lisis Tumoral de forma ambulatoria.",
      },
      {
        id: "C",
        label: "C",
        text: "Porque la pancitopenia sugiere una anemia aplásica severa, en la cual los esteroides acelerarían la apoptosis total de las células madre de la médula.",
      },
      {
        id: "D",
        label: "D",
        text: "Porque en la Artritis Idiopática Juvenil de inicio sistémico, los esteroides de primera línea causan el temido Síndrome de Activación Macrofágica fulminante.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un cuadro sumamente sugestivo de Leucemia Linfoblástica Aguda (LLA), el cáncer pediátrico más frecuente. Su forma de presentación inicial es a menudo engañosa, imitando enfermedades reumatológicas infantiles (\"dolores de crecimiento\" o artritis juvenil) debido a que la expansión masiva de las células leucémicas en la médula ósea inflama e irrita intensamente el periostio, causando un dolor óseo profundo y constante. La pancitopenia y las visceromegalias (bazo y ganglios llenos de blastos) sellan la sospecha de que la médula ósea está \"reemplazada\" (Aplasia leucémica). El diagnóstico confirmatorio de la leucemia requiere, OBLIGATORIAMENTE, un Aspirado/Biopsia de Médula Ósea que demuestre >20-25% de linfoblastos. El error yatrogénico más grave (y penalizado en pediatría oncológica) es administrar Corticosteroides a un niño con pancitopenia sin tener un diagnóstico histológico de la médula. Los linfoblastos de la LLA son exquisitamente sensibles a los esteroides (de hecho, son parte de la quimioterapia de inducción). Si le das Dexametasona al niño en urgencias, matarás a los blastos leucémicos de forma transitoria. Esto tendrá dos desastrosos efectos: 1) Cuando el oncólogo le haga la biopsia de médula al día siguiente, no encontrará células malignas (\"médula parcialmente decapitada\"), impidiendo clasificar la leucemia y arruinando el protocolo curativo; y 2) La lisis no controlada de estos blastos en la casa o en piso generará un Síndrome de Lisis Tumoral silente, colapsando los riñones del niño sin haber recibido hidratación ni Rasburicasa previa.",
    keyPoints: [
    "Niño con \"dolor de huesos\" que lo despierta + Fiebre + Hepatoesplenomegalia o adenopatías.; Hemograma: Citopenias (Anemia, Trombocitopenia o Leucopenia).; La viñeta intenta engañarte haciéndote creer que es \"Artritis Juvenil\".",
    "Leucemia Linfoblástica Aguda oculta. REGLA INQUEBRANTABLE: JAMÁS administrar corticosteroides (Dexametasona/Prednisona) a un niño con pancitopenia/sospecha de leucemia antes de realizar el aspirado de médula ósea. (Borra el diagnóstico y precipita lisis tumoral).",
    "Oncología Pediátrica / Leucemias."
],
  },
  {
    id: "ucc-conv-2026-08-23-39",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA / CARDIOLOGÍA",
    topic: "Zoonosis Infecciosas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","zoonosis-infecciosas","zoonosis","infecciosas"],
    statement: "Un granjero de 45 años, que trabaja en un rastro (matadero) de ovejas y vacas en la región andina, es derivado al hospital de tercer nivel por una fiebre intermitente de origen desconocido, pérdida de peso de 5 kg y astenia extrema que ya lleva 4 meses de evolución. Al examen físico, se encuentra pálido, con hepatomegalia palpable y un soplo diastólico de regurgitación aórtica que su médico rural asegura que \"no existía el año pasado\". Ante la alta sospecha clínica, se extraen seis sets de hemocultivos con protocolos estándar en sangre, incubados por 5 días, los cuales resultan repetida y persistentemente NEGATIVOS. Se le realiza un ecocardiograma transesofágico que evidencia una vegetación de 9 mm en la valva coronariana derecha de la válvula aórtica con destrucción focal. Dado el antecedente epidemiológico de exposición directa al ganado, ¿cuál es el patógeno intracelular obligado MÁS probable de esta Endocarditis Infecciosa de Cultivo Negativo y cuál es el examen confirmatorio definitivo en suero?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Brucella abortus; requiere confirmación mediante la prueba de Rosa de Bengala y aglutinaciones febriles altas.",
      },
      {
        id: "B",
        label: "B",
        text: "Coxiella burnetii; requiere confirmación mediante Inmunofluorescencia Indirecta midiendo títulos de anticuerpos IgG contra el antígeno de Fase 1.",
      },
      {
        id: "C",
        label: "C",
        text: "Bartonella henselae; exige pruebas serológicas por inmunofluorescencia y antecedente estricto de mordedura de gato.",
      },
      {
        id: "D",
        label: "D",
        text: "Staphylococcus epidermidis de crecimiento lento; requiere dejar los frascos de hemocultivo hasta 21 días en el laboratorio automatizado.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una letal Endocarditis con Hemocultivos Negativos, siendo la Fiebre Q (Causada por Coxiella burnetii) uno de los principales culpables mundiales en este grupo selecto. La historia epidemiológica es la clave maestra: un granjero, veterinario o trabajador de mataderos (contacto con vacas, ovejas, cabras, o inhalación de sus placentas o heces aerosolizadas). La forma aguda da una neumonía atípica o hepatitis. Sin embargo, si la infección se cronifica (semanas a meses después), Coxiella burnetii invade letalmente las válvulas del corazón. Como es una bacteria intracelular estricta, JAMÁS crecerá en los frascos de hemocultivos estándar del hospital (de ahí los hemocultivos negativos falsamente tranquilizadores). La única manera aprobada de confirmar este diagnóstico es a través de serología en sangre mediante Inmunofluorescencia Indirecta (IFA). Para que sea endocarditis crónica por Fiebre Q, el título de IgG contra los antígenos de Fase 1 debe ser gigantesco (típicamente $\\ge$ 1:800). El tratamiento salva-vidas, a diferencia de la penicilina tradicional, es abrumadoramente largo: requiere combinación de Doxiciclina MÁS Hidroxicloroquina por al menos 18 a 24 meses ininterrumpidos, seguido a menudo de reemplazo de la válvula cardíaca.",
    keyPoints: [
    "Endocarditis evidente (Vegetación + Fiebre + Soplo).; Hemocultivos NEGATIVOS.; Antecedente laboral / exposición animal: Ovejas, cabras, vacas, mataderos (farm/slaughterhouse).",
    "Fiebre Q crónica (Coxiella burnetii). Es el rey de las endocarditis de cultivo negativo por exposición a ganado. Diagnóstico con serología de anticuerpos de Fase 1 (>1:800).",
    "Zoonosis Infecciosas / Endocarditis Cultivo Negativo."
],
  },
  {
    id: "ucc-conv-2026-08-23-40",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL / URGENCIAS",
    topic: "Urgencias Vasculares",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-vasculares","urgencias","vasculares"],
    statement: "Un hombre de 75 años, ex fumador crónico pesado con EPOC leve e hipertensión arterial, es traído en ambulancia al servicio de reanimación por haber presentado súbitamente en su domicilio un dolor punzante, desgarrador y atroz en la región lumbar (espalda baja) y en el flanco izquierdo, que en pocos minutos se irradió a la fosa ilíaca. Al ingreso en la camilla de urgencias, el paciente luce intensamente sudoroso, pálido y confuso. La enfermera grita las constantes vitales: Presión Arterial en 75/40 mmHg (hipotensión profunda), Frecuencia Cardíaca en 115 lpm. A la exploración física inmediata del abdomen de este paciente delgado, el médico palpa una prominente y expandida masa pulsátil en la región supraumbilical y mesogastrio. Ante el devastador diagnóstico clínico de un Aneurisma de Aorta Abdominal (AAA) roto en cavidad retroperitoneal, y mientras el equipo llama al cirujano vascular para el ingreso inminente al quirófano (tiempo de puerta-quirófano de 10 minutos), ¿cuál de los siguientes dogmas de reanimación de la \"Hora de Oro\" del trauma/choque es una IATROGENIA LETAL que debe ser explícitamente evitada en este paciente en particular?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar hemocultivos y tipificación de sangre cruzada O-negativa urgente, ya que la transfusión O-positiva agravaría el pronóstico.",
      },
      {
        id: "B",
        label: "B",
        text: "Someter al paciente a una ecografía POCUS a pie de cama, en lugar de enviarlo a Tomografía Computarizada (TC).",
      },
      {
        id: "C",
        label: "C",
        text: "Aplicar reanimación hídrica agresiva y masiva (Litros de Suero Salino o Ringer a presión) intentando normalizar la Presión Arterial Sistólica a cifras de 120 mmHg (\"Normotensión\").",
      },
      {
        id: "D",
        label: "D",
        text: "Autorizar al anestesiólogo a proceder con la intubación de secuencia rápida inmediata aún si el paciente tiene reflejos, para asegurar la vía aérea antes del quirófano.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente se encuentra sufriendo el cuadro fulminante de la Ruptura de un Aneurisma de Aorta Abdominal (AAA roto). La tríada clínica está completa: Hipotensión (Choque) + Masa abdominal pulsátil + Dolor súbito en espalda o flanco en un paciente anciano fumador. El paciente no está muerto gracias a un milagro fisiológico: la ruptura retroperitoneal se \"taponó\" o se selló temporalmente por la contrapresión de sus propios tejidos y un coágulo inestable sobre la aorta rasgada. La norma absoluta universal para la supervivencia prequirúrgica de estos pacientes se llama HIPOTENSIÓN PERMISIVA. Consiste en permitir y tolerar presiones arteriales sistólicas bajas (típicamente entre 70 a 90 mmHg), aportando sangre o cristaloides en gotas solo y estrictamente para mantener al paciente consciente o evitar el paro inminente, pero JAMÁS intentando subir su presión arterial a \"120/80\". Si el residente inyecta 2 litros de solución salina a presión para \"normalizarle\" la presión arterial (Opción C, la iatrogenia letal), el aumento de volumen reventará el coágulo inestable, destapando de nuevo el agujero aórtico. El paciente derramará toda su sangre en el abdomen y morirá instantáneamente por exanguinación fulminante frente a tus ojos.",
    keyPoints: [
    "Anciano Fumador.; Tríada: Choque + Masa pulsátil + Dolor lumbar/flanco súbito.; Cuestión de manejo en URGENCIAS.",
    "Ruptura de Aneurisma de Aorta Abdominal (AAA). Conducta OBLIGATORIA: Quirófano inmediato. La Eco FAST a pie de cama es la imagen de elección para inestables (la TAC se reserva solo si está super estable). Regla de reanimación: Hipotensión Permisiva (mantener sistólica en 70-90 mmHg, NUNCA sobrehidratar para evitar volar el coágulo tapón).",
    "Urgencias Vasculares / Abdomen Agudo Letal."
],
  }
];
