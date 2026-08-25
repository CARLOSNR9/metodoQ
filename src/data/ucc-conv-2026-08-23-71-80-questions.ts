import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · Preguntas #71–#80.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_08_23_71_80_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-08-23-71",
    university: "UCC",
    examArea: "PEDIATRÍA - GENÉTICA / NEUROLOGÍA",
    topic: "Errores Innatos del Metabolismo",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","errores-innatos-del-metabolismo","errores","innatos","del","metabolismo"],
    statement: "Un lactante varón de 8 meses de edad es evaluado por un evidente retraso del neurodesarrollo. Los padres relatan que el niño no logra sentarse sin apoyo y ha comenzado a presentar episodios de convulsiones focales. Llama poderosamente la atención del pediatra que el niño tiene una tez extremadamente pálida, cabello rubio platinado y ojos azules, a pesar de que ambos padres son de ascendencia afrocolombiana y de tez muy oscura. Además, el paciente presenta un eccema cutáneo crónico severo refractario a cremas hidratantes. Al retirar el pañal del niño para el examen físico, el consultorio se inunda con un fuerte y penetrante olor corporal a \"ratón\" o a \"humedad\" (musty odor). Ante este fenotipo clásico, ¿cuál es el defecto enzimático hereditario que está destruyendo la mielinización del cerebro de este paciente y cómo debió prevenirse?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Deficiencia de Galactosa-1-Fosfato Uridiltransferasa (GALT); debió prevenirse suspendiendo la lactancia materna desde el día 1.",
      },
      {
        id: "B",
        label: "B",
        text: "Deficiencia de Fenilalanina Hidroxilasa (PAH); debió prevenirse mediante el tamizaje metabólico neonatal del talón y restricción dietética temprana.",
      },
      {
        id: "C",
        label: "C",
        text: "Deficiencia del complejo de la deshidrogenasa de los cetoácidos de cadena ramificada; el tratamiento exige restricción de leucina, isoleucina y valina.",
      },
      {
        id: "D",
        label: "D",
        text: "Mutación del gen de la Tirosinasa; debió prevenirse con suplementación de L-DOPA temprana para evitar el albinismo y el daño neuronal.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Fenilcetonuria (PKU), el error innato del metabolismo de los aminoácidos más famoso y evaluado en pediatría. Se hereda de forma autosómica recesiva y se debe a la ausencia de la enzima Fenilalanina Hidroxilasa (PAH), la cual convierte la fenilalanina en tirosina. Al no poder metabolizarse, la fenilalanina se acumula en niveles neurotóxicos en el cerebro, causando retraso mental irreversible y convulsiones. La falta de tirosina (que es precursora de la melanina) explica por qué el niño tiene piel pálida, cabello rubio y ojos azules a pesar de la genética de sus padres. El rasgo clínico supremo en los exámenes es el olor corporal a \"ratón\" o moho (musty odor), producto de la excreción de ácido fenilacético por la orina y el sudor. La tragedia de este caso es que el daño cerebral de la PKU es 100% prevenible si se diagnostica en la primera semana de vida mediante la prueba del talón (tamizaje neonatal) y se instaura una dieta estricta libre de fenilalanina.",
    keyPoints: [
    "Niño con retraso mental, convulsiones y eccema cutáneo severo.; Fenotipo característico: Piel/Pelo inusualmente claros para su genética.; Sello clínico infalible: Olor a \"ratón\" (moho/musty odor) en el pañal.",
    "Fenilcetonuria (PKU). Enzima faltante: Fenilalanina hidroxilasa. Tratamiento: Dieta libre de fenilalanina de por vida.",
    "Errores Innatos del Metabolismo / Genética."
],
  },
  {
    id: "ucc-conv-2026-08-23-72",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA / REUMATOLOGÍA",
    topic: "Glomerulopatías",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","glomerulopat-as","glomerulopat","as"],
    statement: "Un hombre de 28 años, previamente sano, es ingresado de urgencia a UCI por falla respiratoria y hemoptisis franca (tos con sangre roja brillante). En la última semana notó que su orina se tornó de color \"coca-cola\". A su ingreso, el paciente se encuentra taquicárdico y pálido, requiriendo intubación endotraqueal inmediata debido a hemorragia alveolar masiva evidenciada en la radiografía de tórax como infiltrados alveolares difusos bilaterales. Los laboratorios revelan Creatinina de 4.5 mg/dL (falla renal aguda rápidamente progresiva), BUN de 110 mg/dL y un sedimento urinario activo con cilindros eritrocitarios. Los anticuerpos ANCA (p-ANCA y c-ANCA) son negativos, y los niveles de complemento (C3 y C4) son normales. Se realiza una biopsia renal de emergencia. ¿Cuál es el hallazgo patognomónico que se observará en la inmunofluorescencia de los glomérulos y que confirma la etiología de este Síndrome Pulmón-Riñón?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Depósitos mesangiales granulares de IgA con patrón en \"cielo estrellado\".",
      },
      {
        id: "B",
        label: "B",
        text: "Depósitos lineales intensos y continuos de Inmunoglobulina G (IgG) a lo largo de la membrana basal glomerular.",
      },
      {
        id: "C",
        label: "C",
        text: "Ausencia total de depósitos de inmunoglobulinas o complemento (Glomerulonefritis pauci-inmune).",
      },
      {
        id: "D",
        label: "D",
        text: "Engrosamiento subepitelial de la membrana basal con formación de espículas (spikes) de IgG.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con el Síndrome de Goodpasture (Enfermedad por Anticuerpos Anti-MBG). Es el prototipo del \"Síndrome Pulmón-Riñón\" fulminante en varones jóvenes. La enfermedad es causada por autoanticuerpos dirigidos contra la cadena alfa-3 del colágeno tipo IV, una proteína que es fundamental tanto en la Membrana Basal Glomerular (riñón) como en la Membrana Basal Alveolar (pulmones). Clínicamente debuta como una Glomerulonefritis Rápidamente Progresiva (GNRP con semilunas, cilindros eritrocitarios y creatinina volando en días) combinada con Hemorragia Alveolar Masiva (hemoptisis que asfixia al paciente). El diagnóstico de oro absoluto es la biopsia renal con Inmunofluorescencia, la cual mostrará el infame y patognomónico patrón de Depósitos LINEALES y continuos de IgG dibujando la membrana de los capilares glomerulares. (El tratamiento de urgencia para evitar la muerte por asfixia y salvar el riñón es la Plasmaféresis diaria inmediata para lavar los anticuerpos de la sangre, combinada con ciclofosfamida y esteroides).",
    keyPoints: [
    "Hombre joven con Hemoptisis severa (Hemorragia pulmonar) + Falla renal aguda con sangre en orina (Síndrome Nefrítico).; ANCA negativo, Complementos normales.",
    "Enfermedad de Goodpasture (Anticuerpos anti-MBG). Sello histológico obligatorio: Inmunofluorescencia con Patrón LINEAL de IgG en la membrana basal. Terapia salvavidas: Plasmaféresis.",
    "Glomerulopatías / Síndrome Pulmón-Riñón."
],
  },
  {
    id: "ucc-conv-2026-08-23-73",
    university: "UCC",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - FARMACOLOGÍA / URGENCIAS",
    topic: "Emergencias Obstétricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","emergencias-obst-tricas","emergencias","obst","tricas"],
    statement: "Una paciente de 34 años, G2P1, ingresa a la sala de partos con un embarazo de 39 semanas. Durante su control prenatal se le diagnosticó Preeclampsia Severa, manteniendo cifras tensionales actuales de 165/105 mmHg. Tras un trabajo de parto prolongado, la paciente da a luz por vía vaginal a un feto macrosómico de 4.1 kg. Inmediatamente después del alumbramiento de la placenta, la paciente presenta una Hemorragia Postparto masiva (HPP) con pérdida estimada de 1.200 mL en los primeros 10 minutos. Al palpar el abdomen, el fondo uterino se encuentra a la altura del ombligo, flácido y de consistencia \"esponjosa\" (Atonía uterina franca). El obstetra de guardia ordena masaje uterino bimanual y la administración de una infusión rápida de 40 unidades de Oxitocina IV, pero el sangrado incontrolable persiste y el útero no contrae. Como droga uterotónica de segunda línea, un interno propone administrar una ampolla de Metilergonovina (Methergine) intramuscular. ¿Por qué esta orden farmacológica constituye una IATROGENIA LETAL que está estrictamente PROSCRITA en esta paciente específica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Porque al tener un feto macrosómico, el miometrio ha sufrido hiper-estiramiento y los alcaloides del ergot inducirán una ruptura uterina fulminante.",
      },
      {
        id: "B",
        label: "B",
        text: "Porque la Metilergonovina antagoniza el efecto de la oxitocina, relajando el músculo liso y exacerbando la hemorragia por atonía.",
      },
      {
        id: "C",
        label: "C",
        text: "Porque la paciente cursa con Preeclampsia y presión arterial severamente elevada (165/105); los alcaloides del ergot inducen una potente vasoconstricción periférica que precipitará un ACV hemorrágico o crisis hipertensiva letal.",
      },
      {
        id: "D",
        label: "D",
        text: "Porque en el posparto inmediato, la Metilergonovina penetra la barrera hematoencefálica y causa depresión respiratoria central intratable.",
      },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta una Atonía Uterina (la causa número 1 de Hemorragia Postparto). Cuando el útero no se contrae para \"estrangular\" las arterias espirales sangrantes, la oxitocina a altas dosis es la primera línea indiscutida. Si la oxitocina falla, el médico debe recurrir a uterotónicos de segunda línea. La Metilergonovina (Ergonovina/Methergine) es un derivado de los alcaloides del cornezuelo del centeno (ergot). Es un uterotónico formidable, pero actúa causando una intensa y violenta vasoconstricción arterial periférica generalizada, además de contraer el útero. La regla absoluta e inquebrantable de la obstetricia de urgencias es que la Metilergonovina está TOTAL Y ABSOLUTAMENTE CONTRAINDICADA en cualquier paciente con Hipertensión Arterial, Preeclampsia o Eclampsia. Si le inyectas este fármaco a una mujer que ya tiene los vasos espásticos y una presión en 165/105, la presión sistólica subirá instantáneamente a más de 220 mmHg, destrozando una arteria cerebral y matando a la paciente por un Accidente Cerebrovascular (ACV) Hemorrágico o edema agudo de pulmón. El fármaco de elección correcto de segunda línea en esta paciente hipertensa sería el Misoprostol (vía rectal/sublingual) o el Ácido Tranexámico.",
    keyPoints: [
    "Hemorragia Postparto por Atonía uterina que no responde a Oxitocina.; Paciente con PREECLAMPSIA o HIPERTENSIÓN.",
    "Fármaco CONTRAINDICADO y mortal: Metilergonovina (Methergine). Jamás usar alcaloides del ergot en pacientes hipertensas.\n(Nota de contraste: Si la paciente fuera Asmática, el medicamento que estaría absolutamente contraindicado sería el Carboprost/Hemabate, porque causa broncoespasmo letal).",
    "Emergencias Obstétricas / Farmacología Uterotónica."
],
  },
  {
    id: "ucc-conv-2026-08-23-74",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / URGENCIAS",
    topic: "Urgencias Traumáticas y Cardiovasculares.",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-traum-ticas-y-cardiovasculares","urgencias","traum","ticas","y","cardiovasculares"],
    statement: "Un hombre de 28 años es llevado a urgencias por el personal prehospitalario tras sufrir un asalto en la vía pública, durante el cual recibió una puñalada profunda en el hemitórax izquierdo, justo por debajo del pezón. A su ingreso, el paciente se encuentra sumamente pálido, frío, confuso y agitado. Las constantes vitales revelan: Presión Arterial 70/45 mmHg (Hipotensión severa), Frecuencia Cardíaca 135 lpm. Al examen físico enfocado, se documenta una marcada ingurgitación de las venas yugulares hasta el ángulo de la mandíbula, y a la auscultación cardíaca en un ambiente silencioso, los ruidos cardíacos son apenas audibles (lejanos y velados). A nivel pulmonar, la ventilación es simétrica y no hay desviación de la tráquea. El monitor hemodinámico de urgencias documenta un \"Pulso Paradójico\" de 18 mmHg. Ante esta tríada clínica fulminante, el médico residente decide instaurar una medida de \"puente\" médico de reanimación mientras se prepara la aguja para la pericardiocentesis. ¿Cuál de las siguientes acciones farmacológicas en este momento es una IATROGENIA absoluta que matará al paciente por colapso cardiovascular?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar infusión rápida de cristaloides isotónicos (Lactato de Ringer) para aumentar el retorno venoso al ventrículo derecho.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar una dosis intravenosa en bolo de Furosemida (diurético de asa) para aliviar la ingurgitación yugular y descargar la presión central.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar oxígeno suplementario al 100% por máscara de no reinhalación.",
      },
      {
        id: "D",
        label: "D",
        text: "Preparar sangre tipo O negativo para transfusión inmediata bajo el protocolo de hemorragia masiva.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Taponamiento Cardíaco Agudo secundario a un trauma penetrante. La bolsa de pericardio, que es inelástica, se llenó rápidamente de sangre procedente de la herida del miocardio. El diagnóstico es infalible por la legendaria Tríada de Beck: Hipotensión profunda + Ruidos cardíacos velados/apagados + Ingurgitación Yugular (aumento de la presión venosa central). El corazón literalmente está \"ahogado y comprimido\" desde afuera por la sangre pericárdica; no tiene espacio para expandirse en diástole ni llenarse de sangre. El único tratamiento definitivo es la Pericardiocentesis (drenaje con aguja o ventana pericárdica quirúrgica). Como puente médico de supervivencia en los minutos previos al pinchazo, el corazón depende ABSOLUTAMENTE de tener una Presión Venosa Central (Precarga) elevadísima para lograr forzar y empujar algo de sangre hacia las cámaras cardíacas comprimidas. La reanimación inicial exige bolos rápidos de líquidos intravenosos (Lactato de Ringer o sangre) para mantener el ventrículo derecho lleno a alta presión. Administrar Diuréticos (Furosemida) o Nitroglicerina, asumiendo erróneamente que el paciente tiene \"falla cardíaca congestiva\" por verle las yugulares llenas, es un error fatal. La Furosemida vaciará las venas, tumbará la precarga a cero y el corazón asfixiado dejará de bombear instantáneamente, provocando Actividad Eléctrica Sin Pulso (AESP) y muerte.",
    keyPoints: [
    "Paciente con trauma de tórax o pericarditis aguda.; Tríada de Beck: Hipotensión + Ruidos cardíacos apagados + Yugulares llenas.; Signo hemodinámico: Pulso Paradójico (caída de la PAS >10 mmHg a la inspiración).",
    "Taponamiento Cardíaco. Tratamiento vital: Pericardiocentesis de urgencia. Medida puente médica de soporte: Bolos de Líquidos IV para mantener la precarga muy alta. Fármacos contraindicados (Asesinos): Diuréticos, Nitratos o cualquier venodilatador.",
    "Urgencias Traumáticas y Cardiovasculares."
],
  },
  {
    id: "ucc-conv-2026-08-23-75",
    university: "UCC",
    examArea: "MEDICINA INTERNA - TOXICOLOGÍA / OFTALMOLOGÍA",
    topic: "Toxicología de Urgencias",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","toxicolog-a-de-urgencias","toxicolog","a","de","urgencias"],
    statement: "Un hombre de 45 años, con antecedentes de alcoholismo severo y situación de calle, es encontrado confuso y quejándose de ceguera en la madrugada, tras haber estado consumiendo licor de destilación casera (contrabando clandestino) con sus amigos la tarde anterior. A su ingreso a urgencias, el paciente está obnubilado, con respiración laboriosa, profunda y rápida (Respiración de Kussmaul). Se queja amargamente de que no puede ver nada, describiendo su visión \"como si estuviera caminando en medio de una tormenta de nieve blanca muy densa\". Al examen físico, sus pupilas están dilatadas y tienen pobre respuesta a la luz. El oftalmoscopio de urgencia revela una marcada hiperemia (enrojecimiento) del disco óptico con edema papilar incipiente. Los gases arteriales reportan una Acidosis Metabólica profunda con un Anión Gap fuertemente elevado y un Osmolar Gap superior a 35 mOsm/kg. Ante el veneno destilado implicado, ¿cuál es el metabolito ácido destructivo que se está acumulando en su nervio óptico y cuál es el antídoto FARMACOLÓGICO intravenoso de elección que compite por la misma enzima?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Metabolito: Ácido Oxálico; Antídoto: Etanol intravenoso o Fomepizol.",
      },
      {
        id: "B",
        label: "B",
        text: "Metabolito: Ácido Fórmico (Formiato); Antídoto: Fomepizol o Etanol intravenoso y Ácido Folínico.",
      },
      {
        id: "C",
        label: "C",
        text: "Metabolito: Acetaldehído masivo; Antídoto: Disulfiram oral de urgencia.",
      },
      {
        id: "D",
        label: "D",
        text: "Metabolito: Ácido Láctico tipo D; Antídoto: Bicarbonato de Sodio y Hemodiálisis exclusiva.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una severa Intoxicación por Metanol (Alcohol Metílico o Alcohol de Madera), el cual se encuentra clásicamente en licores adulterados de fabricación clandestina, solventes y líquido limpiaparabrisas. A diferencia del Etilenglicol (que destruye el riñón formando cristales en sobre de carta de oxalato cálcico), el Metanol es metabolizado por la enzima Alcohol Deshidrogenasa (ADH) hacia Formaldehído y luego hacia Ácido Fórmico (Formiato). El ácido fórmico es extremadamente tóxico para las mitocondrias de la retina y el Nervio Óptico. Esto desencadena la clínica de oro: pérdida visual abrupta que el paciente describe dramáticamente como \"ver una tormenta de nieve\", seguida de edema y enrojecimiento (hiperemia) del disco óptico, llevándolo a ceguera irreversible si no se actúa en horas. El tratamiento salvavidas se basa en bloquear inmediatamente a la enzima ADH para que no siga convirtiendo el metanol en ácido fórmico. El antídoto de ORO que compite con avidez 8.000 veces mayor por esta enzima es el Fomepizol intravenoso. Si no se dispone de Fomepizol, el \"antídoto antiguo\" es emborrachar al paciente con Etanol intravenoso de grado médico, el cual \"distrae\" a la enzima ADH. (El ácido folínico se asocia para acelerar el metabolismo del ácido fórmico hacia CO2 y agua). Al final, se requerirá hemodiálisis para lavar el tóxico de la sangre.",
    keyPoints: [
    "Indigente, alcohólico crónico o paciente que tomó \"licor casero\" / Moonshine.; Acidosis Metabólica severa de Gap Alto + Gap Osmolar Alto.; Foco Clínico Rey: Ceguera Súbita, visión de \"Tormenta de Nieve\", hiperemia del disco óptico.",
    "Intoxicación por Metanol. Veneno ocular: Ácido Fórmico. Antídoto inhibidor enzimático: Fomepizol. Terapia puente: Etanol IV.",
    "Toxicología de Urgencias / Alcoholes Tóxicos."
],
  },
  {
    id: "ucc-conv-2026-08-23-76",
    university: "UCC",
    examArea: "PEDIATRÍA - HEMATOLOGÍA / CUIDADO INTENSIVO",
    topic: "Complicaciones Hematológicas Pediátricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","complicaciones-hematol-gicas-pedi-tricas","complicaciones","hematol","gicas","pedi","tricas"],
    statement: "Un niño afrodescendiente de 8 años, con diagnóstico genético de Anemia de Células Falciformes (Enfermedad HbSS) desde el nacimiento, es ingresado de urgencia por un cuadro de fiebre de 39°C, tos productiva purulenta y un marcado dolor torácico pleurítico derecho. En urgencias, su estado respiratorio se deteriora aceleradamente en las últimas 3 horas: la frecuencia respiratoria sube a 45 rpm y la saturación de oxígeno, que era del 95% al ingreso, cae bruscamente al 80% en aire ambiente. A la auscultación, se documentan estertores gruesos difusos y sibilancias bilaterales. La radiografía de tórax revela la aparición abrupta de un nuevo infiltrado de consolidación radiopaco masivo que ocupa todo el lóbulo inferior derecho, con derrame pleural ipsilateral leve, borrando hallazgos de placas previas. Con el diagnóstico clínico evidente de la emergencia respiratoria y causa principal de mortalidad en la edad escolar de estos pacientes, y asumiendo una falla inminente del soporte oxigenatorio estándar, ¿cuál es la intervención hematológica salva-vidas de rescate innegociable indicada por los protocolos mundiales?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Transfusión masiva de unidades de Glóbulos Rojos Empaquetados (GRE) simples para elevar la hemoglobina a más de 12 g/dL y forzar la oxigenación celular.",
      },
      {
        id: "B",
        label: "B",
        text: "Infusión de altas dosis de Hidroxiurea (Hidroxicarbamida) por vía oral o sonda nasogástrica para subir agudamente la Hemoglobina Fetal.",
      },
      {
        id: "C",
        label: "C",
        text: "Exanguinotransfusión automatizada parcial (Eritrocitaféresis) para retirar rápidamente los glóbulos rojos \"falciformes\" y reemplazarlos por eritrocitos sanos (HbA).",
      },
      {
        id: "D",
        label: "D",
        text: "Instaurar terapia trombolítica con Alteplase (rt-PA) sistémico por sospecha de Tromboembolismo Pulmonar agudo.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta el temido Síndrome Torácico Agudo (Acute Chest Syndrome - ACS), la principal causa de mortalidad prematura en pacientes con Anemia de Células Falciformes (Drepanocitosis). Fisiopatológicamente, cualquier insulto inflamatorio en el pulmón (una neumonía por micoplasma, asma, o infartos por microembolos de grasa de la médula ósea) causa hipoxia local. La falta de oxígeno en el alvéolo hace que los glóbulos rojos del paciente, cargados de Hemoglobina S, se deformen instantáneamente en forma de hoz (falciformación masiva), taponando por completo todos los capilares del pulmón. Esto crea un ciclo vicioso letal: el taponamiento causa más hipoxia, y la hipoxia atrofia y forma más células falciformes. Clínicamente se define por Fiebre, dolor torácico, taquipnea e hipoxemia profunda, asociadas a la aparición de un NUEVO INFILTRADO radiológico en un lóbulo pulmonar. En cuadros leves, se manejan con oxígeno, hidratación y antibióticos. Pero en cuadros graves y de rápido deterioro con hipoxemia refractaria (como este paciente, que cayó al 80%), el tratamiento salvavidas obligatorio es el recambio mecánico de sangre infectada: la Exanguinotransfusión o Eritrocitaféresis. Al extraer la sangre llena de células deformes HbS y reemplazarla con sangre normal del banco (rica en HbA flexible), el ciclo de hipoxia se corta de golpe y la vasculatura pulmonar se destapa, salvando la vida del niño.",
    keyPoints: [
    "Paciente con Anemia Falciforme (HbSS).; Aparición aguda de Fiebre + Dolor de Pecho/Disnea + NUEVO infiltrado pulmonar en la Rx.",
    "Síndrome Torácico Agudo (Acute Chest Syndrome). Es una catástrofe isquémica pulmonar cíclica. Terapia de rescate en enfermedad hipoxémica severa: Eritrocitaféresis (Exanguinotransfusión) para bajar urgentemente la fracción de HbS por debajo del 30%.",
    "Complicaciones Hematológicas Pediátricas / Anemia Falciforme."
],
  },
  {
    id: "ucc-conv-2026-08-23-77",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / URGENCIAS",
    topic: "Urgencias Metabólicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-metab-licas","urgencias","metab","licas"],
    statement: "Un hombre de 26 años, con diagnóstico de Diabetes Mellitus tipo 1 diagnosticada hace cinco años, es llevado por el servicio paramédico al cuarto de choque de urgencias. Los paramédicos informan que lo hallaron inconsciente en el piso de su apartamento. Tras reanimarlo en la ambulancia por hipotensión y vómitos biliosos repetitivos, llega al hospital en estado de estupor. La glucometría capilar inicial revela 520 mg/dL, con aliento cetósico franco (\"olor a manzanas o frutas podridas\") y respiración de Kussmaul. El electrocardiograma basal en el triaje muestra un ritmo sinusal, pero se observa la presencia de Ondas U prominentes, depresión leve del segmento ST y un ensanchamiento del intervalo QT (hallazgos compatibles con hipokalemia severa). Inmediatamente se reciben los laboratorios venosos iniciales: pH de 7.10 (Acidosis metabólica profunda), HCO3 en 8 mEq/L, Anión Gap en 26 mEq/L. Sin embargo, el nivel de Potasio (K+) sérico reportado es de 2.9 mEq/L (críticamente disminuido). Ante la evidencia clínica y de laboratorio de Cetoacidosis Diabética (CAD) franca, ¿cuál es el paso FARMACOLÓGICO PREVIO ABSOLUTAMENTE OBLIGATORIO que debe realizarse antes de iniciar el goteo estándar de insulina intravenosa para no precipitar la muerte instantánea del paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Instaurar la bomba de Insulina Regular a 0.1 U/kg/hora de forma inmediata sin demoras, pues el cese de la cetogénesis es la prioridad vitalicia primaria de la CAD.",
      },
      {
        id: "B",
        label: "B",
        text: "Suspender la idea de insulina intravenosa e infundir Bicarbonato de Sodio en megabolo para corregir el pH, ya que esto forzará al potasio a salir de las células compensando la hipokalemia.",
      },
      {
        id: "C",
        label: "C",
        text: "Retrasar innegociablemente la infusión de insulina intravenosa y administrar primero reposición masiva de Cloruro de Potasio (KCl) intravenoso hasta que el nivel sérico de K+ sea estrictamente superior a 3.3 mEq/L.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar la bomba de insulina simultáneamente con resinas fijadoras de potasio entéricas (Sulfonato de poliestireno sódico) por sonda nasogástrica.",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con una Cetoacidosis Diabética (CAD) grave. Aquí se expone el \"asesino silencioso\" más grande en el manejo de la CAD: la gestión del potasio. Por definición, los pacientes con CAD tienen un DÉFICIT CORPORAL TOTAL de potasio masivo (lo han perdido todo orinando por diuresis osmótica y vomitando por la cetosis). Paradójicamente, la sangre al ingresar suele mostrar niveles \"normales\" o \"altos\" de potasio porque la profunda acidosis empujó el poco potasio intracelular restante hacia afuera de las células, engañando al médico. PERO, en el paciente de esta viñeta, la pérdida fue tan colosal que incluso con la acidosis empujando potasio afuera, el valor en sangre marca un terrorífico 2.9 mEq/L. La insulina es la llave universal del potasio: cuando administras insulina intravenosa, esta hormona obliga a las células de todo el cuerpo a abrir sus puertas y absorber masivamente la glucosa y el POTASIO desde la sangre hacia su interior. La regla de oro, legal y estricta en las pautas ADA e ISPAD para CAD dicta: Si el paciente ingresa con Potasio SÉRICO MENOR A 3.3 mEq/L, ESTÁ ESTRICTAMENTE PROHIBIDO INICIAR LA INSULINA. Si tú le abres la bomba de insulina a este paciente, el poco 2.9 de potasio que le queda en sangre entrará velozmente al músculo, el nivel en sangre caerá a 1.5 mEq/L, los músculos respiratorios se paralizarán y el corazón colapsará en Paro Cardiorrespiratorio por fibrilación ventricular o asistolia letal en 5 minutos. Primero lo hidratas, le cuelgas bolos de Potasio por la vena central, y cuando el papel de laboratorio te jure que el potasio llegó a 3.3, ahí recién le enciendes el goteo de insulina.",
    keyPoints: [
    "Paciente en Cetoacidosis Diabética confirmada (Azúcar alta, pH bajo, Cetonas altas).; Panel de electrolitos en el triage muestra Potasio (K+) < 3.3 mEq/L.",
    "La Trampa Mortal de la Insulina. Regla de oro OBLIGATORIA: NUNCA INICIAR INSULINA SI K < 3.3. Primero se debe reponer agresivamente el Potasio intravenoso. Una vez superado el umbral, se inicia la bomba de insulina.",
    "Urgencias Metabólicas / Complicaciones del Manejo de CAD."
],
  },
  {
    id: "ucc-conv-2026-08-23-78",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA / URGENCIAS",
    topic: "Urgencias Biliares",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-biliares","urgencias","biliares"],
    statement: "Mujer de 60 años, con antecedente de colelitiasis conocida (cálculos en la vesícula) pero rehusante de cirugía, es llevada a urgencias en estado de estupor. Su familia relata que el día anterior presentó un cuadro de dolor tipo cólico continuo y opresivo en el cuadrante superior derecho abdominal, seguido de escalofríos y picos febriles de hasta 40°C. Hoy por la mañana, la paciente no lograba responder coherentemente a las preguntas y lucía severamente deshidratada. A su ingreso, la paciente está confusa (letargia extrema, Glasgow 10). Sus signos vitales evidencian un choque franco establecido: PA de 80/40 mmHg, FC 130 lpm, FR 28 rpm. Al examen visual, presenta ictericia generalizada intensa (piel y escleras francamente amarillas) y dolor moderado a la palpación profunda subcostal derecha. El hemograma reporta una Leucocitosis de 22,000/mm³ con desviación a la izquierda (bandemia). Ante el cuadro toxémico de rápida evolución provocado por la impactación de un cálculo en el conducto biliar principal (colédoco), ¿cuál es el procedimiento de ORO invasivo y diagnóstico-terapéutico de emergencia absoluta requerido tras estabilizar su presión arterial en las siguientes horas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Colecistectomía laparoscópica de urgencia en quirófano para erradicar la fuente vesicular productora de cálculos y limpiar el peritoneo.",
      },
      {
        id: "B",
        label: "B",
        text: "Derivación percutánea transparietohepática (DPT) directa como tratamiento definitivo para saltar la vesícula inflamada.",
      },
      {
        id: "C",
        label: "C",
        text: "Tratamiento conservador en UCI exclusivamente con fluidos intravenosos masivos, vasopresores y un carbapenémico (Meropenem), asumiendo alta mortalidad quirúrgica.",
      },
      {
        id: "D",
        label: "D",
        text: "Colangiopancreatografía Retrógrada Endoscópica (CPRE) de urgencia para descompresión mecánica urgente del colédoco infectado.",
      },
    ],
    correctOptionId: "D",
    explanation: "La paciente cursa con Colangitis Aguda Ascendente, específicamente en su grado más severo y letal de toxicidad sistémica, caracterizada por la infame Péntada de Reynolds. Un cálculo biliar cayó de la vesícula y bloqueó el conducto colédoco principal, estancando la bilis. Las bacterias del intestino (ej. E. coli, Klebsiella) ascendieron hacia ese \"pantano\" de bilis obstruida, multiplicándose y reventando hacia la sangre venosa del hígado, causando una bacteriemia masiva purulenta. Clínicamente, presenta la Tríada de Charcot (Dolor en cuadrante superior derecho + Fiebre con escalofríos + Ictericia franca) SUMADA a los signos de colapso extremo: Alteración del estado mental (Confusión) e Hipotensión/Choque profundo, sellando la Péntada de Reynolds. Esta paciente tiene pus a presión letal atascada dentro del árbol biliar principal del hígado. Los antibióticos IV potentes no penetrarán la vía tapada a tiempo. La medida salvavidas absoluta innegociable, tras usar líquidos y vasopresores transitorios, es la descompresión mecánica de urgencia del conducto colédoco. El procedimiento Gold Standard de oro mundial es la CPRE (Colangiopancreatografía Retrógrada Endoscópica): el endoscopista corta el esfínter de Oddi desde el duodeno y saca el cálculo, permitiendo que litros de bilis purulenta drenen al intestino, aliviando la fiebre y el choque del paciente casi al instante.",
    keyPoints: [
    "Paciente (a menudo mayor, con piedras previas).; Tríada de Charcot: Fiebre/Escalofrío + Dolor HCD + Ictericia franca = Colangitis aguda.; Se añade letargo o hipotensión (Choque) -> Péntada de Reynolds = Emergencia inminente.",
    "Pus a tensión atascado en el colédoco. Intervención OBLIGATORIA inmediata tras estabilizar la UCI: Drenaje biliar urgente mediante CPRE. Extraer la vesícula (Colecistectomía) se hace mucho después, en otro ingreso, cuando el paciente ya no esté chocado.",
    "Urgencias Biliares / Gastroenterología Endoscópica."
],
  },
  {
    id: "ucc-conv-2026-08-23-79",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA / OFTALMOLOGÍA",
    topic: "Infecciones Oportunistas Oculares",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","infecciones-oportunistas-oculares","infecciones","oportunistas","oculares"],
    statement: "Un paciente masculino de 38 años de edad, diagnosticado hace 4 años con infección por VIH con pésima adherencia a la Terapia Antirretroviral (TARV), acude a consulta por \"ver luces flotando\" y pérdida progresiva del campo visual de su ojo izquierdo que ha empeorado en la última semana de forma rápida e indolora. A su ingreso, sus laboratorios marcan un conteo de CD4 dramáticamente bajo en 35 células/mm³. Al examen de fondo de ojo dilatado por el oftalmólogo, se describe de manera patognomónica una extensa retinitis necrotizante y blanquecina en forma de placas granulares que se extienden siguiendo el trayecto de los grandes vasos sanguíneos, acompañadas de hemorragias retinianas masivas y exudados algodonosos que asemejan una \"pizza de queso y salsa de tomate (pizza-pie retinopathy)\". No hay gran inflamación en el humor vítreo (vitritis mínima). Teniendo en cuenta el agente viral letal y mutilante más frecuente asociado a CD4 < 50, ¿cuál es el tratamiento farmacológico intravenoso (o en implante intravítreo) OBLIGATORIO que frena la ceguera inminente bloqueando la polimerasa del ADN viral?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anfotericina B liposomal y Flucitosina por sospecha de coriorretinitis fúngica invasiva.",
      },
      {
        id: "B",
        label: "B",
        text: "Valganciclovir oral o Ganciclovir intravenoso inmediato y sostenido.",
      },
      {
        id: "C",
        label: "C",
        text: "Tratamiento combinado con Pirimetamina, Sulfadiazina y Clindamicina, esperando la regresión cicatricial de las lesiones en \"faro en la niebla\".",
      },
      {
        id: "D",
        label: "D",
        text: "Foscarnet de mantenimiento aislado y evitar inyecciones intraoculares.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Retinitis por Citomegalovirus (CMV). Es la infección ocular oportunista devastadora más frecuente y amenazante para la visión en pacientes con SIDA avanzado que han cruzado la frontera de la inmunosupresión extrema (CD4 crónicamente por debajo de 50 cél/mm³). A diferencia de otras retinitis, el CMV ataca a los fotoreceptores de forma indolora, causando miodesopsias (moscas volantes/luces) seguidas de defectos visuales o ceguera por desprendimiento de retina. El sello visual indiscutido de las preguntas médicas es el aspecto en \"Pizza de queso con salsa de tomate\" o \"Salsa y queso\" (Pizza-pie / Ketchup and cottage cheese appearance): extensas hemorragias rojas confluentes mezcladas con exudados blanquecinos necróticos perivasculares. Para salvar la visión y detener la ceguera progresiva, el tratamiento de primera línea innegociable debe iniciarse inmediatamente (antes de esperar la TARV) con antivirales activos que inhiban la polimerasa del CMV: el Ganciclovir intravenoso (o inyecciones directas dentro del ojo en lesiones peligrosamente centrales) y luego transición rápida a Valganciclovir oral para mantenimiento de por vida o hasta que los CD4 superen las 100 células sostenidas con TARV.",
    keyPoints: [
    "Paciente con VIH severamente inmunodeprimido (CD4 < 50).; Pérdida visual rápida INDOLORA.; Fondo de ojo: \"Ketchup y Queso\" (Hemorragias intensas rojas + exudados blancos).",
    "Retinitis por Citomegalovirus (CMV). El tratamiento OBLIGATORIO que detiene la ceguera es el Ganciclovir (o Valganciclovir). El Aciclovir clásico no tiene acción curativa potente contra el CMV.",
    "Infecciones Oportunistas Oculares / SIDA."
],
  },
  {
    id: "ucc-conv-2026-08-23-80",
    university: "UCC",
    examArea: "PEDIATRÍA - GASTROENTEROLOGÍA / CIRUGÍA",
    topic: "Anomalías Congénitas del Tracto Digestivo",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","anomal-as-cong-nitas-del-tracto-digestivo","anomal","as","cong","nitas","del","tracto","digestivo"],
    statement: "Se atiende el parto a término de un recién nacido masculino. A las cuatro horas de nacido, la enfermera nota que el bebé cursa con excesiva distensión en el tercio superior del abdomen, salivación leve y un episodio de vómito francamente bilioso (color verde oscuro) que se repitió dos veces tras la primera succión de leche. El pediatra examina al neonato y encuentra un abdomen distendido superiormente pero plano/excavado en los flancos inferiores. Al tomar una radiografía simple de abdomen en posición de bipedestación, se observa una enorme cámara gástrica llena de aire a la izquierda de la columna y una segunda burbuja grande, bien delimitada y llena de aire, inmediatamente a la derecha, en el área duodenal proximal. Esta imagen patognomónica se conoce como el \"Signo de la Doble Burbuja\" (Double Bubble Sign). El detalle más revelador y crítico para el cirujano es que, en toda la radiografía, no se visualiza absolutamente ninguna otra sombra de gas o aire en el intestino distal (sin gas más allá de las burbujas). Dada esta alteración morfológica obstructiva total y congénita en la segunda porción del duodeno, ¿qué síndrome genético cromosómico se asocia estadística e ineludiblemente con esta malformación en casi el 30% de los casos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome de DiGeorge (Deleción 22q11.2).",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Patau (Trisomía 13).",
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome de Down (Trisomía 21).",
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome de Turner (Monosomía 45,X0).",
      },
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con un debut neonatal de Atresia Duodenal clásica. Embriológicamente, la luz del duodeno fetal falla en su proceso de \"recanalización\" (las células sólidas que llenan el tubo en desarrollo no mueren, dejando una pared ciega impenetrable, casi siempre justo a la altura o debajo de la ampolla de Vater, de ahí el color verde bilioso del vómito). El diagnóstico radiológico de oro universal para los exámenes de residencia es el Signo de la Doble Burbuja: la primera burbuja es el aire atascado inflando el estómago y la segunda burbuja, más pequeña a la derecha, es el aire y los líquidos estancados inflando la primera porción del duodeno ciego cerrado. La trampa fina de esta radiografía es la \"ausencia de gas distal\"; como la atresia duodenal es un muro de concreto ciego cerrado, NO HAY PASO DE AIRE y todo el intestino grueso y delgado distal al tapón está oscuro/vacío de gases en la Rx. Esta patología obstructiva mecánica tiene una asociación profunda y genéticamente innegable con el Síndrome de Down (Trisomía 21): aproximadamente un tercio de todos los bebés que nacen con atresia duodenal padecen Trisomía 21. Si el cirujano entra a operar un duodeno tapado (Duodeno-duodenostomía en diamante), el pediatra debe buscar inmediatamente el pliegue palmar único, las fisuras palpebrales oblícuas y prepararse para un ecocardiograma (buscando el canal AV completo del niño Down).",
    keyPoints: [
    "Neonato que debuta el Día 1 con VÓMITO BILIOSO.; Rx de abdomen clave: Signo de la DOBLE BURBUJA + Sin gas en intestino distal.",
    "Atresia Duodenal. Cirugía urgente. Asociación genética estrella: Trisomía 21 (Síndrome de Down).",
    "Anomalías Congénitas del Tracto Digestivo / Genética."
],
  }
];
