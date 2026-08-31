import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · Preguntas #01–#10.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_08_23_01_10_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-08-23-01",
    university: "UCC",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - CUIDADO INTENSIVO",
    topic: "Complicaciones del Embarazo",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","complicaciones-del-embarazo","complicaciones","del","embarazo"],
    statement: "Una paciente primigesta de 36 semanas de gestación ingresa a urgencias por un cuadro de 3 días de evolución consistente en náuseas severas, vómitos persistentes, dolor en epigastrio y malestar general. Al examen físico: PA 140/90 mmHg, ictericia escleral franca y somnolencia (Glasgow 13/15). Se solicitan laboratorios urgentes que reportan: AST 450 U/L, ALT 510 U/L, Bilirrubina Total 6.5 mg/dL. Plaquetas en 110.000/mm³. El dato paraclínico pivote revela una **Glucemia de 35 mg/dL (hipoglucemia profunda)** y tiempos de coagulación marcadamente alterados (**TP de 28 segundos, TPTa de 65 segundos**), con fibrinógeno bajo. Ante la inestabilidad metabólica de la paciente, ¿cuál es el diagnóstico más probable que diferencia este cuadro de una preeclampsia severa y cuál es la conducta obstétrica ineludible?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome de HELLP; el manejo consiste en sulfato de magnesio, dexametasona a altas dosis y finalización de la gestación.",
      },
      {
        id: "B",
        label: "B",
        text: "Hígado Graso Agudo del Embarazo (AFLP); el manejo es soporte intensivo, corrección de la hipoglucemia/coagulopatía y finalización INMEDIATA del embarazo.",
      },
      {
        id: "C",
        label: "C",
        text: "Hepatitis E fulminante del tercer trimestre; se debe iniciar terapia antiviral empírica y diferir el parto hasta estabilizar las transaminasas.",
      },
      {
        id: "D",
        label: "D",
        text: "Púrpura Trombocitopénica Trombótica (PTT) desencadenada por el embarazo; requiere plasmaféresis urgente antes del parto.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con **Hígado Graso Agudo del Embarazo (AFLP)**, una emergencia obstétrica catastrófica típica del tercer trimestre. Fisiopatológicamente, se asocia a un defecto genético en la beta-oxidación de los ácidos grasos en el feto (déficit de LCHAD), lo que genera metabolitos tóxicos que destruyen el hígado materno. El cuadro clínico simula un Síndrome de HELLP, pero la clave diferencial de oro en el laboratorio es que el AFLP causa una **Falla Hepática Fulminante VERDADERA**: el hígado deja de producir glucosa (**hipoglucemia severa**) y deja de fabricar factores de coagulación (**prolongación masiva del TP y TPTa**). El Síndrome de HELLP raramente altera los tiempos de coagulación de forma tan severa ni produce hipoglucemia, a menos que haya un estallido hepático o CID terminal. El único tratamiento curativo para detener la necrosis hepática materna es la terminación inmediata del embarazo, independientemente de la edad gestacional.",
    keyPoints: [
    "Gestante en el 3er trimestre con vómitos, ictericia y alteración mental.; Laboratorios clave: **Hipoglucemia** + **Tiempos de coagulación largos (TP/TPT)** + Transaminasas elevadas.",
    "Hígado Graso Agudo del Embarazo (AFLP). Diferencia con HELLP: El HELLP destruye plaquetas y glóbulos rojos (hemólisis), pero el hígado sigue fabricando glucosa y factores de coagulación.",
    "Complicaciones del Embarazo / Urgencias Obstétricas."
],
  },
  {
    id: "ucc-conv-2026-08-23-02",
    university: "UCC",
    examArea: "PEDIATRÍA - CARDIOLOGÍA / NEONATOLOGÍA",
    topic: "Cardiopatías Congénitas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","cardiopat-as-cong-nitas","cardiopat","as","cong","nitas"],
    statement: "Un neonato masculino es dado de alta a las 48 horas de nacido tras un parto a término sin complicaciones aparentes, viéndose completamente sano y rosado. Al **cuarto día de vida**, la madre lo trae a urgencias en estado de choque: el bebé está intensamente pálido, aletargado, con piel moteada, cianosis periférica y dificultad respiratoria (quejido y retracciones). Al examen físico, los pulsos braquiales son saltones, pero **los pulsos femorales son filiformes y virtualmente impalpables**. El llenado capilar en extremidades inferiores es de 6 segundos. El monitor marca una taquicardia de 180 lpm. Los gases arteriales muestran una acidosis metabólica láctica severa (pH 7.05, Lactato 12 mmol/L). El corazón estructuralmente es normal, salvo por una anomalía en los grandes vasos. ¿Cuál es el fármaco OBLIGATORIO Y SALVAVIDAS que debe iniciarse en los primeros 5 minutos en la sala de reanimación?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Bolo intravenoso de Indometacina o Ibuprofeno para forzar el cierre del cortocircuito de izquierda a derecha.",
      },
      {
        id: "B",
        label: "B",
        text: "Infusión continua de Prostaglandina E1 (Alprostadil) para reabrir el ductus arterioso.",
      },
      {
        id: "C",
        label: "C",
        text: "Administración de Milrinona y Dobutamina para tratar la miocarditis viral aguda fulminante.",
      },
      {
        id: "D",
        label: "D",
        text: "Oxígeno al 100% en cánula de alto flujo y bolo de Solución Salina para corregir el choque séptico neonatal temprano.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un choque cardiogénico obstructivo debido a una **Coartación de Aorta severa (o interrupción del arco aórtico)**. Esta es la cardiopatía congénita \"trampa\" por excelencia. El bebé nace sano y se va a casa rosado porque el **Ductus Arterioso** fetal sigue abierto en los primeros 2 a 3 días de vida, permitiendo que la sangre pase de la arteria pulmonar hacia la aorta descendente (bypassando la zona estrecha de la coartación) y perfundiendo las piernas y los riñones. Sin embargo, en el **día 3 o 4, el ductus se cierra naturalmente**. Al cerrarse, la sangre se topa con la coartación masiva en la aorta; el flujo hacia la mitad inferior del cuerpo cae a cero. Los riñones y los intestinos se necrosan, produciendo ácido láctico masivo (pH 7.05), y los pulsos femorales desaparecen. Esta es una **cardiopatía ducto-dependiente**. La única manera de devolverle la vida al bebé es **REABRIR el ductus arterioso artificialmente infundiendo Prostaglandina E1 (Alprostadil) IV**. En 15 minutos, el ductus se relaja, la sangre vuelve a fluir hacia las piernas y el lactato comienza a depurarse, comprando tiempo para la cirugía correctiva.",
    keyPoints: [
    "Neonato que debuta con Choque / Colapso entre el **día 3 y 7 de vida** (cuando se cierra el ductus).; Disociación de pulsos: Pulsos en brazos FUERTES, **pulsos en ingles (femorales) AUSENTES o débiles**.; Acidosis metabólica profunda.",
    "Coartación de Aorta Crítica (Cardiopatía ducto-dependiente sistémica). Fármaco de rescate innegociable: **Prostaglandina E1** para abrir la \"válvula de escape\". Vigilar apnea como efecto adverso del fármaco.",
    "Cardiopatías Congénitas / Urgencias Neonatales."
],
  },
  {
    id: "ucc-conv-2026-08-23-03",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA / GASTROENTEROLOGÍA",
    topic: "Endocarditis Infecciosa",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","endocarditis-infecciosa","endocarditis","infecciosa"],
    statement: "Un hombre de 68 años acude a urgencias por fiebre de 38°C, sudores nocturnos y astenia profunda de tres semanas de evolución. Al examen físico se documenta la aparición de un soplo holosistólico en el foco mitral irradiado a la axila (no conocido previamente) y se observan petequias en la conjuntiva y lesiones nodulares dolorosas en los pulpejos de los dedos (Nódulos de Osler). El ecocardiograma transesofágico revela una vegetación de 12 mm en la válvula mitral. Se extraen tres sets de hemocultivos, los cuales reportan a las 48 horas el crecimiento monomicrobiano de ***Streptococcus gallolyticus* (antiguamente *Streptococcus bovis* tipo I)**. Se inicia antibioticoterapia dirigida con Penicilina G y Gentamicina con excelente respuesta clínica. Una vez estabilizada la infección cardiovascular, ¿cuál es el procedimiento diagnóstico OBLIGATORIO que debe programarse en este paciente antes del alta hospitalaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ecografía Doppler de miembros inferiores para buscar el foco embólico primario (TVP).",
      },
      {
        id: "B",
        label: "B",
        text: "Colonoscopia total para descartar una neoplasia o pólipo adenomatoso colorrectal oculto.",
      },
      {
        id: "C",
        label: "C",
        text: "Tomografía de cráneo contrastada para descartar microabscesos o aneurismas micóticos silentes.",
      },
      {
        id: "D",
        label: "D",
        text: "Biopsia de médula ósea para descartar un síndrome mielodisplásico subyacente que causó la bacteriemia.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una **Endocarditis Infecciosa Subaguda** causada por ***Streptococcus gallolyticus*** (previamente conocido como *S. bovis* biotipo I). Esta bacteria habita normalmente en el tracto gastrointestinal. Sin embargo, en medicina interna existe una asociación clásica, epidemiológica e irrefutable: la presencia de bacteriemia o endocarditis por *S. gallolyticus* está intensamente vinculada (hasta en un 20-60% de los casos) con la presencia de lesiones malignas o premalignas en el colon (**Cáncer Colorrectal o pólipos adenomatosos avanzados**). El tumor en el colon altera la barrera de la mucosa intestinal, permitiendo que esta bacteria cruce a la sangre, viaje hasta el corazón y se adhiera a las válvulas. Por protocolo internacional, TODO paciente con aislamiento en sangre de *S. gallolyticus* DEBE ser sometido a una **Colonoscopia total** exhaustiva.",
    keyPoints: [
    "Endocarditis Infecciosa o Bacteriemia pura.; Bacteria aislada: ***Streptococcus bovis* o *Streptococcus gallolyticus***.",
    "Asociación directa con Cáncer de Colon. Siguiente paso clínico innegociable: Endoscopia Digestiva Baja (Colonoscopia).",
    "Endocarditis Infecciosa / Screening Oncológico."
],
  },
  {
    id: "ucc-conv-2026-08-23-04",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL / GASTROENTEROLOGÍA",
    topic: "Abdomen Agudo Obstructivo",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","abdomen-agudo-obstructivo","abdomen","agudo","obstructivo"],
    statement: "Un paciente masculino de 78 años, residente en un hogar geriátrico, con historial de demencia vascular, inmovilidad crónica y constipación severa de larga data, es traído a urgencias por dolor abdominal difuso, ausencia de deposiciones y flatos desde hace 4 días, y distensión abdominal gigantesca. Al examen físico, el abdomen está tenso, marcadamente timpanizado a la percusión, asimétrico, pero sin signos de irritación peritoneal (no hay rebote, no hay defensa muscular involuntaria) y el paciente se encuentra hemodinámicamente estable (PA 130/80 mmHg). Se toma una radiografía de abdomen en decúbito supino que revela una enorme asa intestinal dilatada, desprovista de haustras, que emerge desde la pelvis y asciende hacia el cuadrante superior derecho, adoptando una clásica imagen de **\"grano de café\" (Coffee bean sign) o \"U invertida\"**. Dado el diagnóstico de obstrucción en asa cerrada, y confirmando la ausencia de signos de isquemia o perforación, ¿cuál es el abordaje terapéutico DE PRIMERA LÍNEA para resolver la emergencia mecánica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Laparotomía exploratoria inmediata con resección del intestino afectado y colostomía de Hartmann.",
      },
      {
        id: "B",
        label: "B",
        text: "Descompresión y detorsión endoscópica mediante Sigmoidoscopia flexible o Colonoscopia, con posterior inserción de una sonda rectal.",
      },
      {
        id: "C",
        label: "C",
        text: "Administración de Neostigmina intravenosa combinada con enemas de fosfato para forzar la motilidad intestinal profunda.",
      },
      {
        id: "D",
        label: "D",
        text: "Descompresión gástrica con Sonda Nasogástrica exclusiva y administración de líquidos intravenosos en espera de resolución espontánea.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un **Vólvulo de Sigmoides**, la causa más frecuente de obstrucción estrangulante del colon en ancianos institucionalizados, psiquiátricos o con constipación crónica. El colon sigmoides, redundante y elongado, se tuerce sobre su propio eje mesentérico, creando una obstrucción en asa cerrada. La radiografía es infalible: el **signo del \"Grano de Café\"** que apunta desde la pelvis hacia el hipocondrio derecho. La regla de oro en el Vólvulo de Sigmoides es evaluar la vitalidad del intestino: Si el paciente tiene peritonitis, fiebre, leucocitosis masiva o choque (signos de que el colon está gangrenado), va directo a cirugía (Laparotomía). PERO, si el paciente está **estable y SIN signos de peritonitis** (como en esta viñeta), la indicación inicial OBLIGATORIA de primera línea es la **Detorsión Endoscópica (Sigmoidoscopia/Colonoscopia flexible)**. Al avanzar el tubo, el gas y las heces escapan explosivamente, el asa se destuerce y el colon se salva de la cirugía de urgencia. (Posteriormente, en el mismo ingreso, se programa una sigmoidectomía electiva, ya que el riesgo de recurrencia es >50%).",
    keyPoints: [
    "Anciano institucionalizado / psiquiátrico / encamado crónico.; Distensión abdominal monstruosa + Rx: \"Grano de Café\" o \"Tubo de llanta interno\".",
    "Vólvulo de Sigmoides. Si NO hay peritonitis: **Detorsión Endoscópica** (Terapia inicial de elección). Si SÍ hay peritonitis/gangrena: Laparotomía de urgencia con resección. (Ojo diferencial: El Vólvulo de Ciego casi siempre se opera de entrada).",
    "Abdomen Agudo Obstructivo / Cirugía General."
],
  },
  {
    id: "ucc-conv-2026-08-23-05",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / URGENCIAS",
    topic: "Urgencias Neurológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-neurol-gicas","urgencias","neurol","gicas"],
    statement: "Mujer de 32 años, con diagnóstico conocido de Miastenia Gravis en tratamiento crónico con Piridostigmina oral. Acude a urgencias traída por su esposo debido a debilidad generalizada severa que inició hace dos días, coincidiendo con un cuadro febril y disuria (Infección de Vías Urinarias no tratada). Al ingreso, la paciente es incapaz de mantener la cabeza erguida, no puede tragar su propia saliva (sialorrea por disfagia) y tiene voz nasal ininteligible. Durante la exploración, la paciente desarrolla **respiración paradójica**, taquipnea a 35 rpm y un esfuerzo espiratorio muy pobre. Se le realiza una espirometría a la cabecera del paciente (Bedside spirometry), la cual reporta una Capacidad Vital Forzada (CVF) de **12 mL/kg** y una Presión Inspiratoria Máxima (NIF/MIP) de **-18 cmH2O**. Los gases arteriales muestran pH 7.30, PaCO2 50 mmHg, PaO2 75 mmHg. Ante la franca descompensación neurológica, ¿cuál es la conducta secuencial INMEDIATA para preservar la vida de la paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar una ampolla de Edrofonio intravenoso (Test de Tensilon) para diferenciar una Crisis Miasténica de una Crisis Colinérgica antes de actuar.",
      },
      {
        id: "B",
        label: "B",
        text: "Duplicar la dosis de Piridostigmina oral o intravenosa para superar el bloqueo autoinmune del receptor y mejorar la mecánica respiratoria.",
      },
      {
        id: "C",
        label: "C",
        text: "Proceder a **Intubación Orotraqueal electiva urgente**, suspender temporalmente los anticolinesterásicos e iniciar Plasmaféresis o IGIV.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar ventilación no invasiva (BiPAP) a altas presiones y administrar Sulfato de Atropina para secar las secreciones bronquiales.",
      },
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con una **Crisis Miasténica**, desencadenada clásicamente por una infección intercurrente (IVU). La crisis se define como la exacerbación aguda de la debilidad miasténica que compromete la **vía aérea (músculos bulbares) y los músculos respiratorios (diafragma)**, requiriendo asistencia ventilatoria. Las \"banderas rojas\" que gritan intubación inminente en esta paciente son la falla bulbar (no puede tragar saliva) y, matemáticamente, los parámetros mecánicos: una **CVF < 15-20 mL/kg** o una **MIP peor (menos negativa) de -20 cmH2O** dictan fallo diafragmático irreversible. Retrasar la intubación esperando que la paciente caiga en coma hipercápnico es negligencia. El abordaje de oro es: 1) **Asegurar la vía aérea (Intubación Orotraqueal)**; 2) **Suspender la Piridostigmina** (en pacientes intubados e insuficientes no sirve, e incrementa peligrosamente las secreciones bronquiales, favoreciendo tapones de moco y neumonías); y 3) Iniciar el tratamiento de rescate rápido para limpiar los autoanticuerpos: **Plasmaféresis (Intercambio Plasmático) o Inmunoglobulina G Intravenosa (IGIV)**.",
    keyPoints: [
    "Paciente con Miastenia Gravis + Infección.; Falla bulbar (no traga saliva, voz apagada) y/o Respiración paradójica.; Parámetro crítico: CVF < 15 mL/kg.",
    "Crisis Miasténica. Conducta prioritaria y absoluta: INTUBACIÓN OROTRAQUEAL TEMPRANA / ELECTIVA. Terapia inmunomoduladora rápida: Plasmaféresis o IGIV. Detener los inhibidores de acetilcolinesterasa (Piridostigmina).",
    "Urgencias Neurológicas / Miastenia Gravis."
],
  },
  {
    id: "ucc-conv-2026-08-23-06",
    university: "UCC",
    examArea: "PEDIATRÍA - INFECTOLOGÍA / PREVENTIVA",
    topic: "Enfermedades Inmunoprevenibles",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","enfermedades-inmunoprevenibles","enfermedades","inmunoprevenibles"],
    statement: "Un niño de 3 años, no inmunizado debido a ideologías paternas, es traído de urgencias desde una zona rural aislada. Presenta fiebre de 39.5°C, tos intensa, congestión nasal grave (coriza) y ojos rojos llorosos (conjuntivitis). Al examen oral, el pediatra descubre múltiples lesiones puntiformes blancas rodeadas de un halo eritematoso en la mucosa yugal interna, a la altura de los molares (Manchas de Koplik). A las 24 horas del ingreso, el niño desarrolla una erupción maculopapular que inicia en la línea de implantación del cabello y se extiende hacia el tronco. En su segundo día de hospitalización, el cuadro se complica gravemente con taquipnea a 60 rpm, retracciones severas y una radiografía que confirma una Neumonía bilateral de células gigantes (Neumonía por células de Warthin-Finkeldey). Además del soporte respiratorio en UCIP y el aislamiento estricto, ¿cuál es el suplemento nutricional farmacológico OBLIGATORIO dictaminado por la OMS que ha demostrado reducir drásticamente la mortalidad y la ceguera en esta enfermedad infecciosa aguda?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Vitamina C en altas dosis durante 5 días para estabilizar el endotelio respiratorio.",
      },
      {
        id: "B",
        label: "B",
        text: "Vitamina A en dosis masivas (200.000 UI) administrada hoy y repetida el día de mañana.",
      },
      {
        id: "C",
        label: "C",
        text: "Zinc intravenoso continuo para estimular la función de los macrófagos alveolares.",
      },
      {
        id: "D",
        label: "D",
        text: "Ácido Fólico intramuscular para prevenir la aplasia eritrocítica secundaria al virus.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Sarampión** (Measles), caracterizado por la triple \"C\" (Cough, Coryza, Conjunctivitis), las patognomónicas Manchas de Koplik en la boca (fase prodrómica) y el exantema cefalocaudal descendente. La causa más común de muerte en el sarampión es la neumonía secundaria (ya sea bacteriana o la neumonía primaria de células gigantes virales). El virus del sarampión tiene un efecto devastador sobre las reservas de vitaminas del cuerpo, agotando rápida y agresivamente los niveles de retinol. La Organización Mundial de la Salud (OMS) y la Academia Americana de Pediatría establecen que **la suplementación con altas dosis de Vitamina A** es una terapia de soporte ESTRICTAMENTE OBLIGATORIA en niños con sarampión grave (especialmente en no vacunados, desnutridos o menores de 2 años). La Vitamina A promueve la regeneración del epitelio respiratorio (reduciendo la mortalidad por neumonía en más de un 50%), mejora la respuesta inmunitaria y previene la xeroftalmía/ceguera permanente (ulcera corneal por sarampión). Se dan dos dosis (día 1 y 2).",
    keyPoints: [
    "Niño no vacunado con: Tos, Coriza, Conjuntivitis, Manchas de Koplik, Sarpullido desde la cabeza.; Complicación grave del sarampión (Neumonía, Encefalitis) o paciente en área de riesgo.",
    "Sarampión severo. Terapia curativa/soporte de alto impacto: **Vitamina A a dosis masivas**. Reduce la mortalidad de la neumonía sarampionosa a la mitad.",
    "Enfermedades Inmunoprevenibles / Infectología Pediátrica."
],
  },
  {
    id: "ucc-conv-2026-08-23-07",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / CUIDADO INTENSIVO",
    topic: "Urgencias Endocrinológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-endocrinol-gicas","urgencias","endocrinol","gicas"],
    statement: "Mujer de 75 años es traída en pleno invierno a urgencias por su hija tras encontrarla inconsciente en su cama. En los antecedentes, la hija relata que la madre dejó de tomar sus medicamentos \"hace meses porque le caían mal al estómago\" y ha notado que estaba extremadamente lenta, intolerante al frío y con hinchazón facial. Al ingreso: estupor profundo (Glasgow 7/15), hipoventilación severa (FR 8 rpm), bradicardia extrema (FC 40 lpm) y temperatura axilar de **33.5°C (Hipotermia severa)**. Al examen físico resalta una piel seca, gruesa y fría, macroglosia leve, y una notoria cicatriz de tiroidectomía antigua en la base del cuello. En los laboratorios urgentes: Sodio sérico de 118 mEq/L, glucosa de 55 mg/dL. Los gases arteriales reportan acidosis respiratoria con hipercapnia. TSH > 150 mUI/L, T4 libre indetectable. El intensivista decide iniciar terapia con hormona tiroidea intravenosa (Levotiroxina / T3) para revertir este Coma Mixedematoso. Sin embargo, ¿qué fármaco OBLIGATORIO debe infundirse SIEMPRE antes o de forma simultánea a la hormona tiroidea para evitar un choque vascular letal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Atropina intravenosa para bloquear el hipertono vagal y revertir la bradicardia antes de activar el metabolismo basal.",
      },
      {
        id: "B",
        label: "B",
        text: "Solución Salina Hipertónica al 3% para corregir la hiponatremia, que es la causa primaria del coma.",
      },
      {
        id: "C",
        label: "C",
        text: "Hidrocortisona intravenosa a dosis de estrés para prevenir una crisis suprarrenal aguda inducida por el aumento del metabolismo metabólico.",
      },
      {
        id: "D",
        label: "D",
        text: "Glucagón subcutáneo para promover la gluconeogénesis hepática rápida y evitar el daño cerebral.",
      },
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con un **Coma Mixedematoso**, la máxima y letal expresión del hipotiroidismo descompensado. La presentación de hipotermia refractaria, bradicardia, depresión respiratoria (retención de CO2), hiponatremia e hipoglucemia en invierno en un paciente con cicatriz de tiroidectomía es de libro. El metabolismo celular está literalmente detenido. El rescate requiere hormona tiroidea exógena (T4/T3 intravenosa) de inmediato. SIN EMBARGO, la regla de ORO absoluta en endocrinología dicta que **JAMÁS se debe administrar hormona tiroidea a un Coma Mixedematoso sin antes haberle puesto una dosis de estrés de Glucocorticoides (Hidrocortisona IV)**. ¿La razón? Muchos de estos pacientes tienen hipotiroidismo de origen central (falla panhipofisiaria) o síndromes poliglandulares autoinmunes subyacentes, co-existiendo con un *déficit oculto de cortisol*. Mientras la paciente está \"fría y lenta\", su cuerpo no nota la falta de cortisol. Pero si le inyectas Levotiroxina, el metabolismo de sus células se acelerará a 1000 km/h; este aumento brusco del aclaramiento hepático consumirá en segundos el poco cortisol libre que le quedaba. Sin cortisol, los vasos sanguíneos perderán su tono, las catecolaminas fallarán y la paciente sufrirá un **Choque Adrenal fulminante e irreversible**.",
    keyPoints: [
    "Anciano en invierno con alteraciones del sensorio, hipotermia (<35°C), bradicardia e hiponatremia.; Antecedente de hipotiroidismo abandonado o cicatriz en el cuello.",
    "Coma Mixedematoso. Orden terapéutico vitalicio: 1º. HIDROCORTISONA IV. 2º. Levotiroxina (T4/T3) IV. (Si inviertes el orden, el paciente muere de insuficiencia suprarrenal aguda).",
    "Urgencias Endocrinológicas / Coma Mixedematoso."
],
  },
  {
    id: "ucc-conv-2026-08-23-08",
    university: "UCC",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - TOXICOLOGÍA / URGENCIAS",
    topic: "Complicaciones Obstétricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","complicaciones-obst-tricas","complicaciones","obst","tricas"],
    statement: "Una mujer de 28 años, primigesta a las 34 semanas de gestación, ingresa por un cuadro de Preeclampsia con Criterios de Severidad (PA 175/115 mmHg, cefalea refractaria y escotomas visuales). El equipo médico de urgencias obstétricas inicia profilaxis anticonvulsivante con Sulfato de Magnesio (MgSO4) con dosis de carga intravenosa (4 gramos) seguida de infusión continua a 2 gramos/hora. A las tres horas de iniciada la infusión, la enfermera nota que la paciente se encuentra intensamente aletargada. Al revaluarla, se documenta que la frecuencia respiratoria ha caído a **8 respiraciones por minuto**, la paciente es incapaz de sostener la cabeza y, al realizar el examen neurológico con martillo de reflejos, existe una **abolición completa de los reflejos osteotendinosos rotulianos y bicipitales (Arreflexia global)**. El monitor revela un bloqueo AV de primer grado de nueva aparición. ¿Cuál es el antídoto FARMACOLÓGICO INTRAVENOSO OBLIGATORIO que debe administrarse STAT para revertir esta iatrogenia letal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Flumazenil intravenoso lento para antagonizar la inhibición cortical.",
      },
      {
        id: "B",
        label: "B",
        text: "Gluconato de Calcio al 10% (1 gramo IV) durante 3 minutos.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Naloxona intravenosa repetida por sospecha de sobredosis cruzada de opioides endógenos.",
      },
      {
        id: "D",
        label: "D",
        text: "Aumentar el flujo de líquidos intravenosos y administrar Furosemida para \"lavar\" el electrolito por vía renal en 24 horas.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con **Toxicidad Severa por Sulfato de Magnesio**. El MgSO4 es el neuroprotector de oro para prevenir la Eclampsia, pero es una droga de altísimo riesgo por su estrecho margen terapéutico. El magnesio actúa compitiendo con el Calcio a nivel de las uniones neuromusculares y el sistema nervioso central. Su toxicidad se manifiesta de forma escalonada predecible:\n\n1. Nivel 8 - 10 mEq/L: **Pérdida de los Reflejos Osteotendinosos (Arreflexia)**. Es el primer signo de alerta clínica.\n2. Nivel 10 - 15 mEq/L: **Depresión o Paro Respiratorio** (la paciente respira a 8 rpm).\n3. Nivel > 15 mEq/L: **Paro Cardíaco** en asistolia.\nAnte la arreflexia y bradipnea inminentes, la conducta mandatoria es suspender de inmediato el goteo de magnesio y administrar su antídoto fisiológico específico: **Gluconato de Calcio (o Cloruro de Calcio) IV**. El calcio desplazará competitivamente al magnesio de las terminales nerviosas, recuperando la contracción muscular del diafragma y protegiendo el miocardio en escasos minutos.",
    keyPoints: [
    "Gestante preeclámptica en manejo con Sulfato de Magnesio.; Signos de toxicidad aguda: 1º **Arreflexia rotuliana** (Hacer siempre el reflejo de rodilla en rondas). 2º **Falla respiratoria** (< 12 rpm).",
    "Intoxicación por Magnesio. Antídoto OBLIGATORIO: **Gluconato de Calcio IV**. Nunca se debe esperar al nivel de laboratorio (magnesemia) para tratar la bradipnea clínica.",
    "Complicaciones Obstétricas / Toxicología."
],
  },
  {
    id: "ucc-conv-2026-08-23-09",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA / INFECTOLOGÍA",
    topic: "Infectología Pulmonar",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","infectolog-a-pulmonar","infectolog","a","pulmonar"],
    statement: "Hombre de 50 años, con antecedente de tabaquismo pesado, acude a urgencias por un cuadro de 4 días de fiebre alta (39.5°C), tos no productiva, confusión mental progresiva y severo decaimiento. Refiere que recientemente **regresó de un congreso en un gran hotel con sistema de aire acondicionado central**. Llamativamente, antes del inicio de los síntomas respiratorios, el paciente presentó **3 días de diarrea acuosa profusa y dolores abdominales**, los cuales persisten. Al examen físico: taquipneico (28 rpm), SatO2 88%. El corazón late a 75 lpm a pesar de la fiebre alta (bradicardia relativa o Signo de Faget). Una radiografía de tórax revela un infiltrado alveolar parcheado lobar unilateral que progresa a consolidación. Los laboratorios de urgencia muestran alteración de enzimas hepáticas, pero el hallazgo más alarmante es un **Sodio sérico de 122 mEq/L (Hiponatremia severa)**. No se aíslan gérmenes en el Gram de esputo rutinario. ¿Cuál es el diagnóstico infeccioso más probable y el régimen antibiótico intravenoso empírico de PRIMERA LÍNEA capaz de penetrar intracelularmente para salvar al paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Neumonía por Streptococcus pneumoniae; el tratamiento de elección empírica es Penicilina G en altas dosis o Ampicilina.",
      },
      {
        id: "B",
        label: "B",
        text: "Neumonía por Legionella pneumophila; requiere terapia bactericida intracelular con Macrólidos (Azitromicina) o Fluoroquinolonas (Levofloxacino).",
      },
      {
        id: "C",
        label: "C",
        text: "Neumonía atípica por Mycoplasma pneumoniae; se debe iniciar Doxiciclina y monitorizar para evitar el Síndrome de Lisis Tumoral.",
      },
      {
        id: "D",
        label: "D",
        text: "Neumonitis viral por SARS-CoV-2; no requiere antibióticos, el soporte es oxigenoterapia y Dexametasona sistémica.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un cuadro clásico y \"de libro\" de la **Enfermedad de los Legionarios** (Neumonía atípica severa por *Legionella pneumophila*). Esta bacteria vive en sistemas acuáticos, y en el ámbito humano contamina torres de refrigeración, cabezales de **aires acondicionados centrales en hoteles/cruceros** o duchas no desinfectadas. Clínicamente, el board te gritará \"Legionella\" mediante una constelación de síntomas sistémicos que acompañan a la neumonía: 1) Síntomas Gastrointestinales que a menudo preceden a los respiratorios (**Diarrea acuosa**, dolor abdominal); 2) Síntomas Neurológicos (**Confusión**, encefalopatía); y 3) Alteraciones de Laboratorio Pivote: **Hiponatremia severa** (frecuentemente mediada por un SIADH o daño renal focal), disfunción hepática leve y **Bradicardia relativa** frente a la fiebre alta (el corazón no se acelera lo que debería con 39.5°C). Al ser una bacteria intracelular y no teñirse con Gram común, los betalactámicos (Penicilinas, Cefalosporinas) son absolutamente INÚTILES. El tratamiento farmacológico obligado para erradicar a la bacteria intracelular y evitar la muerte por SDRA y choque séptico son los **Macrólidos (Azitromicina) o las Fluoroquinolonas Respiratorias (Levofloxacino)**. (El diagnóstico se sella rápidamente con el Antígeno Urinario para Legionella serotipo 1).",
    keyPoints: [
    "Paciente que asistió a convención en hotel o crucero (Aire acondicionado).; Neumonía severa asociada a **Diarrea** y **Confusión mental**.; Laboratorio: **HIPONATREMIA (<130 mEq/L)** y Gram de esputo negativo.",
    "*Legionella pneumophila*. Fármaco de oro para salvarlo: Azitromicina o Levofloxacino. NO responde a Cefalosporinas. Diagnóstico rápido: Antígeno en orina.",
    "Infectología Pulmonar / Neumonías Atípicas Severas."
],
  },
  {
    id: "ucc-conv-2026-08-23-10",
    university: "UCC",
    examArea: "PEDIATRÍA - URGENCIAS / ENDOCRINOLOGÍA",
    topic: "Urgencias Endocrinológicas Pediátricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_08_23","urgencias-endocrinol-gicas-pedi-tricas","urgencias","endocrinol","gicas","pedi","tricas"],
    statement: "Una niña de 10 años, con diagnóstico reciente de Diabetes Mellitus tipo 1, fue ingresada a la Unidad de Cuidados Intensivos Pediátricos (UCIP) por una Cetoacidosis Diabética (CAD) severa (pH 7.05, Glucosa 550 mg/dL). Se instauró el protocolo correcto con reanimación hídrica (solución salina) e infusión de insulina intravenosa a 0.1 U/kg/h. A la hora 6 de evolución, el cuadro metabólico está mejorando y el pH subió a 7.20. Sin embargo, súbitamente la niña se queja de un **dolor de cabeza explosivo y letargia severa**, llegando al estupor. El monitor de signos vitales genera una alarma: la Presión Arterial, que era de 100/60, salta a **145/95 mmHg** (Hipertensión franca), mientras que la Frecuencia Cardíaca se desploma de 115 lpm a **45 lpm (Bradicardia profunda)**, con patrón respiratorio irregular deprimido. Al examen neurológico, no hay focalización motora, pero la respuesta pupilar es lenta. ¿Cuál es el diagnóstico de la complicación letal hiperaguda en curso y la intervención farmacológica OBLIGATORIA INMEDIATA antes de trasladarla a neuroimagen?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Encefalopatía Hipoglucémica aguda por caída drástica del azúcar; requiere bolo directo de Dextrosa al 50%.",
      },
      {
        id: "B",
        label: "B",
        text: "Hemorragia subaracnoidea por ruptura de malformación vascular; requiere control de presión arterial con infusión de Labetalol urgente.",
      },
      {
        id: "C",
        label: "C",
        text: "Edema Cerebral fatal secundario al protocolo de CAD; el tratamiento innegociable es la administración inmediata de Manitol al 20% o Solución Salina Hipertónica al 3% endovenosos.",
      },
      {
        id: "D",
        label: "D",
        text: "Acidosis paradójica intracraneal que asfixia el tallo encefálico; se debe administrar un bolo agresivo de Bicarbonato de Sodio intravenoso.",
      },
    ],
    correctOptionId: "C",
    explanation: "La paciente está desarrollando la complicación más temida, devastadora y la principal causa de muerte en niños con Cetoacidosis Diabética (CAD): el **Edema Cerebral**. Ocurre típicamente entre las horas 4 y 12 después de haber iniciado la hidratación y la insulina (por un desequilibrio osmótico brusco que mete agua masivamente a las células del cerebro). Las pistas clínicas son un grito de auxilio del tallo cerebral aplastado: aparición de Cefalea severa súbita, alteración del sensorio (estupor) y, matemáticamente, el inicio de la inconfundible Tríada de Cushing de la hipertensión endocraneana herniante (Hipertensión Arterial, Bradicardia profunda y Alteración Respiratoria). La regla universal del PALS y de urgencias endocrinas establece que: NO SE DEBE ESPERAR la TAC DE CRÁNEO PARA TRATAR. La demora radiológica garantiza la muerte cerebral. Al primer signo clínico de edema cerebral o Tríada de Cushing, se debe detener o bajar drásticamente la infusión de líquidos IV y administrar de inmediato un agente osmótico de rescate para deshinchar el cerebro: Manitol al 20% (0.5 a 1 g/kg) o Solución Salina Hipertónica al 3% (3-5 mL/kg) en bolo intravenoso STAT a la cama del paciente.",
    keyPoints: [
    "Niño o adolescente cursando tratamiento agudo de Cetoacidosis Diabética (hora 4 a 12).; Se queja de fuerte DOLOR DE CABEZA y se pone soñoliento/letárgico.; Monitor vital: La Presión Arterial SUBE y la Frecuencia Cardíaca BAJA (Tríada de Cushing = Enclavamiento inminente).",
    "Edema Cerebral por CAD. Tratamiento salva-vidas instintivo en cama: Manitol o Solución Hipertónica al 3%. No esperar el escáner. Reducir la tasa de fluidoterapia basal a la mitad.",
    "Urgencias Endocrinológicas Pediátricas / Edema Cerebral en CAD."
],
  }
];
