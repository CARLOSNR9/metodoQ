import type { TrainingQuestion } from "@/lib/questions/types";

export const UMNG_CONV_ED4_01_10_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed4-01",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 72 años, con antecedente de Fibrilación Auricular crónica irregularmente controlada, es traído a urgencias quejándose de un dolor abdominal periumbilical de inicio brusco y extremadamente violento. El paciente se retuerce en la camilla gritando de dolor. Sin embargo, al realizar la exploración física del abdomen, este se encuentra blando, depresible, sin signos de irritación peritoneal, sin defensa y el paciente no presenta dolor a la palpación profunda (abdomen \"inocente\"). Sus signos vitales muestran PA 140/90 mmHg, FC 120 lpm (irregular). Los paraclínicos de urgencia revelan leucocitosis de 20.000 células/mm³ y una elevación franca del Ácido Láctico (Lactato sérico 6.5 mmol/L). ¿Cuál es la sospecha diagnóstica inminente y el paso a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Úlcera péptica perforada / Radiografía de tórax en bipedestación."
      },
      {
        id: "B",
        label: "B",
        text: "Isquemia Mesentérica Aguda / Angio-TAC de abdomen de urgencia."
      },
      {
        id: "C",
        label: "C",
        text: "Pancreatitis Aguda Severa / Medición de lipasa y amilasa."
      },
      {
        id: "D",
        label: "D",
        text: "Obstrucción intestinal por bridas / TAC de abdomen simple."
      }
    ],
    correctOptionId: "B",
    explanation: "La **Isquemia Mesentérica Aguda** es un infarto del intestino. Un coágulo salió disparado desde el corazón (por la Fibrilación Auricular), bajó por la aorta y taponó la Arteria Mesentérica Superior. El intestino se queda sin sangre de golpe, causando un dolor visceral desgarrador. La perla máxima de este diagnóstico es el **\"Dolor desproporcionado a los hallazgos físicos\"**. Como la isquemia empieza en la mucosa (adentro) y el peritoneo (afuera) aún está intacto al principio, si tú le tocas el abdomen, no hay rebote ni defensa. El médico inexperto cree que el paciente está exagerando o buscando analgésicos. Cuando el intestino muere y libera ácido láctico a la sangre, ya es tarde. El Gold Standard diagnóstico inicial es el **Angio-TAC abdominal**.\n\n**TRAMPA DEL EXAMEN:** Buscar el abdomen quirúrgico tradicional: El estudiante asume que todo intestino en problemas debe presentar el signo de Blumberg (rebote) positivo. En la isquemia mesentérica, para cuando el Blumberg es positivo, el intestino ya se perforó, la peritonitis es fecal y la mortalidad supera el 80%.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este abuelo acaba de sufrir un \"infarto\", pero no en el corazón, sino en sus intestinos. Imagina el dolor de un infarto cardíaco multiplicado a todo lo largo de seis metros de intestino delgado. El paciente grita y llora en la camilla. Tú le tocas la barriga y está suave como un cojín. Si no cruzas la historia de su Fibrilación Auricular con su dolor, le pondrás un espasmolítico y lo mandarás a casa a morir. El intestino está pidiendo oxígeno a gritos, y al no tenerlo, empieza a ahogarse en su propio ácido láctico. Pide el Angio-TAC \"para ya\", porque el cirujano vascular tiene menos de 6 horas para entrar y sacar el coágulo con un catéter Fogarty antes de que las tripas se vuelvan negras.",
    keyPoints: [
      "Fibrilación Auricular + Dolor Abdominal Agudo + Dolor Desproporcionado al examen físico (Abdomen blando) = Isquemia Mesentérica Aguda.",
      "Marcador de laboratorio de severidad: Ácido Láctico elevado."
    ]
  },
  {
    id: "umng-conv-ed4-02",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "INFECTOLOGÍA NEONATAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un recién nacido a término de 12 días de vida es traído al servicio de urgencias por irritabilidad, rechazo al alimento, fiebre de 38.5°C y fontanela anterior abombada. Se sospecha una Meningitis Neonatal. Se realiza una punción lumbar que confirma pleocitosis con predominio de polimorfonucleares, hiperproteinorraquia e hipoglucorraquia (Meningitis Bacteriana Aguda). Al momento de instaurar la antibioticoterapia empírica intravenosa inmediata, usted repasa mentalmente los gérmenes más comunes a esta edad (Streptococcus agalactiae, Escherichia coli, Listeria monocytogenes). ¿Qué medicamento está ESTRICTAMENTE CONTRAINDICADO en este neonato de 12 días debido al riesgo de precipitar encefalopatía por Kernicterus y causar lodo biliar?",
    options: [
      { id: "A", label: "A", text: "Ampicilina." },
      { id: "B", label: "B", text: "Gentamicina." },
      { id: "C", label: "C", text: "Ceftriaxona." },
      { id: "D", label: "D", text: "Cefotaxima." }
    ],
    correctOptionId: "C",
    explanation: "Esta es la droga **PROHIBIDA en el primer mes de vida (<28 días)**. La **Ceftriaxona** tiene una afinidad gigantesca por la albúmina sérica. Al inyectarla, compite y \"patea\" a la bilirrubina indirecta que estaba pegada a la albúmina en la sangre del bebé. Esa bilirrubina libre y tóxica viaja al cerebro, atraviesa la barrera hematoencefálica y se deposita en los ganglios basales, causando daño cerebral irreversible (**Kernicterus**). Además, la Ceftriaxona se elimina por la bilis y, en neonatos, precipita formando **barro biliar (sludge)** y cálculos biliares masivos (Pseudo-colelitiasis). ¡Nunca se usa Ceftriaxona en neonatos!\n\n**TRAMPA DEL EXAMEN:** El reflejo de la urgencia adulta: Ceftriaxona es la reina absoluta de urgencias para casi todo. Pero en neonatología, la Ceftriaxona es un veneno tóxico metabólico. El examinador siempre te pondrá a elegir entre Ceftriaxona y Cefotaxima.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si a este bebé le clavas Ceftriaxona, no se va a morir de la meningitis, se va a quedar sordo, ciego y con parálisis cerebral por culpa de tu medicamento. La bilirrubina en los bebés recién nacidos necesita andar en el bus escolar de la albúmina para estar segura. La Ceftriaxona es un grandulón que se sube al bus y empuja a la bilirrubina por la ventana. Esa bilirrubina suelta viaja directo al cerebro del bebé y lo \"tiñe\" de amarillo por dentro para siempre. Por eso, en la sala de neonatos, la Ceftriaxona está guardada bajo llave y se reemplaza por su hermana gemela amable: la Cefotaxima.",
    keyPoints: [
      "Meningitis Neonatal (< 28 días de vida).",
      "Gérmenes: S. agalactiae, E. coli, L. monocytogenes.",
      "Esquema ATB Empírico: Ampicilina + Cefotaxima.",
      "Medicamento CONTRAINDICADO: Ceftriaxona (Causa Kernicterus al desplazar la bilirrubina y produce barro biliar)."
    ]
  },
  {
    id: "umng-conv-ed4-03",
    university: "UMNG",
    examArea: "MEDICINA DE URGENCIAS",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un campesino de 45 años es traído a urgencias en el platón de una camioneta tras haber sido encontrado inconsciente en la zona de almacenamiento de agroquímicos de su finca. Al ingreso, el paciente convulsiona, presenta sialorrea masiva (babea como una llave abierta), lagrimeo, fasciculaciones musculares generalizadas y diaforesis profusa. Usted nota un olor aliáceo (como a ajo) en su ropa. Su frecuencia cardíaca es de 40 lpm (bradicardia extrema), y a la auscultación pulmonar usted escucha estertores crepitantes y sibilancias difusas en ambos campos pulmonares (broncospasmo y broncorrea masiva). Las pupilas son puntiformes (Miosis). Usted inicia el manejo con Atropina intravenosa a dosis altas y repetidas. ¿Cuál es el SIGNO CLÍNICO absoluto e innegociable que le indicará a usted que el paciente ya está \"atropinizado\" y que debe detener o espaciar la dosis de Atropina para evitar la toxicidad?",
    options: [
      { id: "A", label: "A", text: "El ensanchamiento de las pupilas hasta alcanzar la midriasis total." },
      { id: "B", label: "B", text: "La reversión de la bradicardia y estabilización de la frecuencia cardíaca en 100 lpm." },
      { id: "C", label: "C", text: "El cese de la actividad convulsiva y las fasciculaciones musculares." },
      { id: "D", label: "D", text: "La desaparición de las secreciones traqueobronquiales (\"pulmón seco\") a la auscultación." }
    ],
    correctOptionId: "D",
    explanation: "El paciente con Síndrome Colinérgico (Intoxicación por Organofosforados) tiene un exceso absoluto de Acetilcolina. Esto produce el síndrome DUMBELS (Diarrea, Urinación, Miosis, Broncorrea, Emesis, Lagrimeo, Salivación). De todas esas \"fugas de líquidos\", la que MATA al paciente es la **Broncorrea y el Broncoespasmo**. El paciente literalmente se \"ahoga en sus propias secreciones\" (los pulmones se llenan de moco líquido a chorros). El objetivo único y sagrado de la Atropina es secar esas secreciones. Tú administras bolos de Atropina (2 mg, 4 mg, 8 mg, doblándolos) y auscultas el pecho tras cada bolo. El signo de **\"Atropinización\"** exitosa se alcanza EXCLUSIVAMENTE cuando, al poner el fonendoscopio en el pecho, escuchas un **Pulmón Seco y limpio (sin estertores ni sibilancias audibles)**. Ahí sabes que el paciente ya no se ahogará y dejas la infusión de mantenimiento.\n\n**TRAMPA DEL EXAMEN:** Pupilas engañosas: Siempre te enseñan que organofosforados = Miosis y Atropina = Midriasis. Por eso el estudiante cree que la meta es ver los ojos del paciente. En toxicología pesada, el ojo no mata, el pulmón lleno de mocos sí. ¡Ausculte, no mire los ojos!\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu campesino se bañó en veneno para fumigar maleza. Su cuerpo perdió la tijera química (colinesterasa) que corta la Acetilcolina. Al tener la acetilcolina pegada al acelerador, cada glándula de su cuerpo se encendió como una manguera de bomberos rota. Llora, babea, se orina encima. Pero lo trágico está en su pecho: sus bronquios están fabricando litros de moco espumoso que le tapan el paso de aire. La Atropina actúa cerrando la llave de paso de esas mangueras. ¿Cómo sabes que le diste suficiente Atropina? Porque le pones el fonendoscopio en el pecho y dejas de escuchar el \"hervor de olla\" del moco. Cuando el pulmón suene claro y seco como el desierto, ganaste.",
    keyPoints: [
      "Intoxicación por Organofosforados = Síndrome Colinérgico (Suda, Babea, Llora, Orina, Miosis, Bradicardia).",
      "Antídoto de primera línea: ATROPINA.",
      "Meta terapéutica (Signo de Atropinización): Desaparición de la Broncorrea (Auscultar un PULMÓN SECO)."
    ]
  },
  {
    id: "umng-conv-ed4-04",
    university: "UMNG",
    examArea: "INFECTOLOGÍA TROPICAL",
    topic: "SALUD PÚBLICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una adolescente de 14 años es llevada al puesto de salud de un municipio tropical con historia de 4 días de fiebre continua de 39.5°C, cefalea intensa retroocular, mialgias y un sarpullido pruriginoso en el tórax. Durante los primeros 3 días el cuadro se manejó en casa con Paracetamol. Sin embargo, en el cuarto día (hoy), la fiebre de la paciente ha disminuido a 37.5°C, pero ella luce mucho más enferma. La madre refiere que la niña se queja de un dolor abdominal continuo y muy intenso, ha vomitado 4 veces en la última hora y está extremadamente somnolienta (letargia). Usted nota un sangrado leve en las encías. Se solicitan laboratorios urgentes que muestran una caída abrupta de las plaquetas a 40.000 y el Hematocrito se elevó del 38% al 48% (Hemoconcentración). Dada la clasificación de la OMS (2009) para esta arbovirosis, ¿en qué fase se encuentra la paciente y cuál es el manejo OBLIGATORIO?",
    options: [
      { id: "A", label: "A", text: "Dengue Severo con choque / Traslado a UCI e inotrópicos." },
      { id: "B", label: "B", text: "Dengue con Signos de Alarma / Hospitalización en sala general, hidratación venosa estricta con Lactato de Ringer." },
      { id: "C", label: "C", text: "Dengue Clásico fase febril / Alta con sales de rehidratación oral y Dipirona para el dolor abdominal." },
      { id: "D", label: "D", text: "Malaria Complicada por daño endotelial / Iniciar esquema con Arteméter/Lumefantrina urgente." }
    ],
    correctOptionId: "B",
    explanation: "Esta paciente acaba de entrar en la fase crítica del Dengue. Los capilares de sus vasos sanguíneos perdieron el \"pegamento\" y el plasma se está escapando de la sangre hacia el peritoneo y los pulmones (Fuga Capilar). Por eso el Hematocrito sube bruscamente (la sangre se vuelve \"espesa\" porque pierde agua) y las plaquetas caen. El dolor abdominal intenso y sostenido es por el hígado hinchándose (hepatomegalia) o por el líquido ascítico irritando el peritoneo. Los vómitos persistentes y el sangrado de encías son la lista estricta de la OMS de los **Signos de Alarma del Dengue**. ¡Si un paciente de Dengue hace uno solo de estos signos, SE HOSPITALIZA OBLIGATORIAMENTE y se cuelgan líquidos intravenosos (Lactato de Ringer a dosis precisas) para rellenar la sangre fugada y evitar que entre en Choque Irreversible en las próximas horas!\n\n**TRAMPA DEL EXAMEN:** La fiebre mentirosa: El paciente o el médico inexperto dice \"Qué bueno, ya se le bajó la fiebre, ya va de salida\". ¡FALSO! En el Dengue, el diablo ataca entre el día 3 y 5, JUSTO cuando la fiebre desaparece (fase de efervescencia). Ahí es cuando la permeabilidad capilar estalla.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este es el momento de oro de la medicina tropical. El mosquito la picó hace una semana. Ayer la niña tenía fiebre, pero su sangre circulaba bien. Hoy la fiebre se apagó, pero los vasos sanguíneos de su vientre empezaron a \"llorar\" agua (plasma) hacia la cavidad abdominal. Por eso se queja de un dolor de barriga espantoso; el líquido está estirando la cápsula de su hígado. Sus venas se están quedando sin agua, la sangre se le está volviendo lodo (el hematocrito disparado lo confirma). Si no la metes a una cama ahora mismo y le clavas un litro de Lactato de Ringer por la vena para rellenar el tanque, esa sangre espesa no llegará a sus riñones ni a su cerebro, y la niña entrará a la estadística de las muertes infantiles por Dengue Severo.",
    keyPoints: [
      "Signos de ALARMA del Dengue (Indican Fuga Capilar y Riesgo de Choque inminente):",
      "1. Dolor abdominal continuo e intenso.",
      "2. Vómitos persistentes.",
      "3. Acumulación de líquidos (Ascitis, Derrame pleural).",
      "4. Sangrado de mucosas (Encías, epistaxis).",
      "5. Letargia / Irritabilidad.",
      "6. Aumento repentino del Hematocrito + Caída de Plaquetas.",
      "Conducta: Hospitalizar + Cristaloides IV."
    ]
  },
  {
    id: "umng-conv-ed4-05",
    university: "UMNG",
    examArea: "NEUROLOGÍA",
    topic: "URGENCIAS Y TRAUMA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 65 años ingresa a urgencias de forma ambulante apoyado en su hijo. El hijo relata que su padre resbaló en el baño hace 1 mes y se golpeó la cabeza levemente, pero \"no le prestamos atención porque no se desmayó ni sangró\". Sin embargo, durante la última semana, el abuelo ha presentado una cefalea sorda y progresiva, episodios de desorientación, camina de lado (inestabilidad de la marcha) y hoy por la mañana la familia notó que arrastra levemente la pierna izquierda y su brazo izquierdo está débil (Hemiparesia izquierda). Al ingreso: signos vitales normales y Glasgow 13. Usted solicita un TAC de cráneo simple de urgencia. Teniendo en cuenta la clínica subaguda en un adulto mayor, ¿qué imagen patognomónica espera encontrar en la tomografía que explique este deterioro neurológico larvado?",
    options: [
      { id: "A", label: "A", text: "Imagen lenticular (biconvexa) hiperdensa brillante en la región temporoparietal." },
      { id: "B", label: "B", text: "Colección de sangre en forma de semiluna (cóncavo-convexa) hipodensa o isodensa cruzando las suturas craneales." },
      { id: "C", label: "C", text: "Sangre dispersa ocupando el espacio subaracnoideo basal y las cisternas en patrón de estrella de mar." },
      { id: "D", label: "D", text: "Masa redondeada intraparenquimatosa hipodensa con anillo hiperdenso de realce (absceso en cápsula interna)." }
    ],
    correctOptionId: "B",
    explanation: "Al envejecer, el cerebro del abuelo se encoge un poco (atrofia cortical fisiológica). Esto hace que las venas que conectan el cerebro con las meninges (las \"venas puente\") queden estiradas y tensas como hilos de guitarra. Un resbalón bobo en el baño sacude la cabeza y rompe una de esas venitas. Como la vena sangra a muy poquita presión (goteo lento), la sangre se acumula lentamente durante semanas entre la duramadre y la aracnoides. La sangre se extiende a lo largo de todo el borde del hemisferio en forma de **Medialuna (cóncavo-convexa o \"forma de banano\")**. Como la sangre ya lleva un mes ahí, los glóbulos rojos viejos perdieron el hierro brillante, así que el TAC NO la ve blanca brillante; se ve oscura (**Hipodensa** o Isodensa al cerebro). Esto aplasta suavemente el cerebro, causando el famoso \"Simulador de demencia\" del anciano (empieza a olvidar cosas, camina raro, y se le paraliza medio cuerpo lentamente). El tratamiento es llevar a quirófano, hacer un trépano pequeño y drenar el \"aceite de motor viejo\" de su cabeza.\n\n**TRAMPA DEL EXAMEN:** Forma de la sangre: Para nunca olvidarlo. Epidur**AL** = Biconvexa como una **AL**mendra o Limón (Arterial agudo). Su**B**dural = Semiluna como una **B**anana (Venoso crónico o agudo).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., a los 20 años el cerebro llena todo el cráneo a presión. A los 65 años, el cerebro se ha secado un poco y flota dentro de una cabeza que le queda grande. Las venitas que lo amarran al techo están tensas. El abuelo no necesitaba chocar contra un camión; con solo darse un golpe leve contra el marco de la puerta del baño, una venita hizo crack. La sangre empezó a gotear 1 centímetro por día a lo largo de toda la superficie de su cráneo derecho. Un mes después, ese charco gigante de sangre negra y vieja en forma de luna está apachurrando su lóbulo frontal. La familia cree que al abuelo le dio Alzheimer de la noche a la mañana o que le dio un derrame. Pide el TAC, fíjate en esa franja grisácea que bordea el hueso, y entrégaselo al neurocirujano para que le perfore el cráneo con un taladro y lave el coágulo.",
    keyPoints: [
      "Anciano + Trauma craneal LEVE olvidado (hace semanas/meses) + Deterioro cognitivo progresivo/Hemiparesia = Hematoma Subdural Crónico.",
      "TAC Cráneo: Colección en forma de MEDIALUNA (semilunar). Es Isodensa o Hipodensa (oscura) porque la sangre ya está vieja y degradada."
    ]
  },
  {
    id: "umng-conv-ed4-06",
    university: "UMNG",
    examArea: "ENDOCRINOLOGÍA",
    topic: "URGENCIAS Y CUIDADO CRÍTICO",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 28 años, con antecedente conocido de Enfermedad de Graves-Basedow con mal apego al tratamiento, ingresa a urgencias tras sufrir un accidente de tránsito con fractura cerrada de fémur. A las 12 horas de su ingreso (en la sala de hospitalización), la paciente presenta un deterioro fulminante: temperatura de 40.5°C, sudoración profusa, agitación psicomotriz extrema y signos de falla cardíaca congestiva aguda. En el monitor, se evidencia una Fibrilación Auricular con respuesta ventricular rápida a 170 lpm. Usted diagnostica clínicamente una Tormenta Tiroidea precipitada por el trauma físico. Teniendo en cuenta la gravedad inminente y la fisiopatología de la síntesis y liberación hormonal, ¿cuál es la SECUENCIA FARMACOLÓGICA EXACTA (orden innegociable) que usted debe administrar para salvar a la paciente y no empeorar la crisis?",
    options: [
      { id: "A", label: "A", text: "Yodo inorgánico (Solución de Lugol) INMEDIATO, seguido de Betabloqueadores y posteriormente Propiltiouracilo." },
      { id: "B", label: "B", text: "Betabloqueadores (Propranolol) -> Antitiroideos (Propiltiouracilo/Metimazol) -> Yodo inorgánico (Lugol) una hora después -> Corticosteroides sistémicos." },
      { id: "C", label: "C", text: "Corticosteroides sistémicos de rescate, seguidos de Aspirina para controlar la fiebre y finalmente Metimazol." },
      { id: "D", label: "D", text: "Amiodarona intravenosa para controlar la fibrilación auricular y remisión a cirugía para tiroidectomía de emergencia." }
    ],
    correctOptionId: "B",
    explanation: "El tratamiento de la tormenta tiroidea es una orquesta perfecta de cuatro pasos innegociables:\n1. **Frenar el daño periférico (Propranolol):** El corazón está a punto de colapsar por la taquicardia. El Propranolol frena el corazón y además bloquea la conversión periférica de T4 a T3 (la hormona más activa).\n2. **Frenar la fábrica (Propiltiouracilo - PTU / Metimazol):** Se bloquea la síntesis de *nuevas* hormonas tiroideas dentro de la glándula.\n3. **Frenar la liberación (Yodo inorgánico / Lugol):** OJO, debe darse **MÍNIMO 1 HORA DESPUÉS** del PTU. Como la fábrica ya está bloqueada por el PTU, el yodo masivo causará el *Efecto de Wolff-Chaikoff* (satura el sistema y paraliza temporalmente la secreción de las hormonas que ya estaban almacenadas en el coloide).\n4. **Proteger del choque (Corticosteroides / Hidrocortisona):** Evitan la insuficiencia suprarrenal relativa por el metabolismo acelerado y también frenan la conversión de T4 a T3.\n\n**TRAMPA DEL EXAMEN:** El juego de los tiempos: Te pondrán el orden inverso. Jamás olvides la regla: \"Nunca envíes materia prima (Yodo) a una fábrica sin antes haber apagado la máquina de ensamblaje (Metimazol/PTU)\".\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el metabolismo de esta joven es como un tren sin frenos bajando por una montaña. La fractura del fémur asustó tanto a su sistema inmunológico que la glándula tiroides liberó su arsenal completo de hormonas a la sangre. Su cuerpo se está \"cocinando\" vivo desde adentro y su corazón va a reventar de la velocidad. Primero ponle un freno de mano al corazón con el Propranolol. Luego, apaga el motor de la tiroides con PTU. Espera pacientemente mirando el reloj por 60 minutos, y luego ponle las gotas de Lugol (yodo). Si te desesperas y le echas el yodo al principio, la tiroides usará ese yodo como leña seca para el fuego y la señora hará un paro cardiorrespiratorio por hipertermia en tu camilla.",
    keyPoints: [
      "Secuencia Salvavidas en Tormenta Tiroidea:",
      "1º. Propranolol (Bloquea efecto simpático y baja conversión T4->T3).",
      "2º. PTU / Metimazol (Apaga la síntesis).",
      "3º. Lugol / Yoduro de Potasio (Dado 1 HORA DESPUÉS, frena la liberación - Efecto Wolff-Chaikoff).",
      "4º. Corticosteroides (Soporte metabólico)."
    ]
  },
  {
    id: "umng-conv-ed4-07",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "URGENCIAS QUIRÚRGICAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una paciente de 32 años, G1P0, con 35 semanas de gestación, se encuentra hospitalizada por un cuadro de Preeclampsia con Criterios de Severidad. Sus laboratorios de control muestran: AST 700 U/L, ALT 650 U/L, Plaquetas 45.000 cél/mm³ y DHL muy elevada. La paciente presenta cefalea refractaria y dolor epigástrico intenso. Mientras se coordina la cesárea de urgencia y la transfusión de plaquetas, la paciente súbitamente palidece, presenta diaforesis fría y experimenta un dolor atroz, cortante y repentino en el cuadrante superior derecho que se irradia hacia la escápula y el hombro derecho (Signo de Kehr). En cuestión de 5 minutos, la presión arterial se desploma a 60/40 mmHg (Choque hipovolémico severo) y el abdomen se torna rápidamente globoso y a tensión. El monitor fetal detecta bradicardia severa de 70 lpm. Ante la inminencia de muerte materna y fetal, ¿cuál es el diagnóstico de la catástrofe que acaba de ocurrir?",
    options: [
      { id: "A", label: "A", text: "Desprendimiento Prematuro de Placenta Normoinserta (Abruptio) oculto masivo." },
      { id: "B", label: "B", text: "Ruptura espontánea de un Hematoma Subcapsular Hepático (Cápsula de Glisson)." },
      { id: "C", label: "C", text: "Ruptura Uterina fúndica por sobredistensión." },
      { id: "D", label: "D", text: "Embolia de Líquido Amniótico con CID aguda." }
    ],
    correctOptionId: "B",
    explanation: "La paciente tiene un **Síndrome de HELLP** franco (Hemólisis, Enzimas Hepáticas Elevadas, Plaquetas Bajas). Fisiopatológicamente, la preeclampsia severa causa microtrombos en los sinusoides del hígado de la madre. Esto genera necrosis isquémica hepática y sangrado. El hígado empieza a sangrar por dentro, formando un **Hematoma Subcapsular** (debajo de la cápsula de Glisson). Ese estiramiento de la cápsula es lo que le causaba la epigastralgia en la mañana. De repente, la cápsula no aguantó más la presión y **ESTALLÓ**. Litros de sangre cayeron libres a la cavidad abdominal. La sangre chocó contra el diafragma, irritando el nervio frénico, lo que causó el **dolor reflejo en la punta del hombro derecho (Signo de Kehr)**. La madre se desangró hacia su propia barriga en minutos. La conducta es Código Rojo, Cesárea emergente y taponamiento (packing) hepático por el cirujano general de inmediato.\n\n**TRAMPA DEL EXAMEN:** Distractores de choque: Te ponen a una paciente que sangró por dentro y el feto se muere. Tu mente obstétrica piensa solo en el útero y marca \"Abruptio\". Lee la ubicación anatómica. Si el dolor está en las costillas derechas y sube al hombro, la explosión no fue pélvica, fue en el cuadrante superior.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta es la pesadilla máxima del ginecobstetra de alto riesgo. El hígado de esta mamá se volvió una gelatina sangrante por culpa de los coágulos de la preeclampsia. La cápsula que envuelve al hígado aguantó la presión de la sangre como si fuera un globo, dándole ese famoso \"dolor en la boca del estómago\". Cuando el globo explotó, dos litros de sangre materna se vaciaron en el peritoneo. Como la sangre tocó el diafragma, el nervio frénico se irritó y mandó una señal fantasma al cerebro de que le dolía el hombro derecho. Activa el código rojo transfusional y llama al cirujano de trauma; tu misión es sacar al bebé vivo en dos minutos, la misión del cirujano es embutirle 15 compresas alrededor del hígado para que la madre no se vacíe por completo.",
    keyPoints: [
      "Paciente con Síndrome de HELLP (Epigastralgia/Plaquetas bajas) + Choque Súbito + Dolor irradiado al Hombro Derecho = Ruptura de Hematoma Subcapsular Hepático.",
      "Mortalidad altísima. Manejo: Quirófano INMEDIATO (Cesárea + Empaquetamiento Hepático)."
    ]
  },
  {
    id: "umng-conv-ed4-08",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "NEUMOLOGÍA Y URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un niño de 8 años con diagnóstico de Asma Bronquial moderada persistente es traído a urgencias por su padre. El niño presenta una crisis asmática severa de 6 horas de evolución que inició tras una infección viral. En casa, el padre le administró más de 10 puffs de Salbutamol con inhalocámara, sin lograr ninguna mejoría. Al ingreso, el niño luce francamente agotado, obnubilado (se duerme en los brazos del padre), cianótico, con aleteo nasal y tirajes intercostales profundos. Usted ausculta los pulmones del paciente y, sorprendentemente, NO ESCUCHA NINGÚN TIPO DE SIBILANCIAS; los campos pulmonares están completamente silenciosos (\"Tórax Silente\"). Los gases arteriales de ingreso reportan: pH 7.20, PaCO2 48 mmHg (Normal/Elevado en niños) y PaO2 50 mmHg. Sabiendo que los asmáticos en crisis normalmente hiperventilan y tienen el CO2 bajo, ¿qué significa clínica y gasométricamente este \"tórax silente\" asociado a ese nivel de PaCO2?",
    options: [
      { id: "A", label: "A", text: "El salbutamol en casa hizo efecto y el broncoespasmo está cediendo, por lo que el CO2 volvió a cifras normales de 48 mmHg." },
      { id: "B", label: "B", text: "El niño sufre de asma atípica por obstrucción de vía aérea superior, requiriendo adrenalina racémica inmediata." },
      { id: "C", label: "C", text: "El niño presenta fatiga muscular respiratoria extrema, cierre crítico de la vía aérea (no entra ni sale aire) y está en paro respiratorio inminente." },
      { id: "D", label: "D", text: "La ausencia de sibilancias y la acidosis indican un neumotórax espontáneo derecho compensado." }
    ],
    correctOptionId: "C",
    explanation: "En una crisis asmática, la vía aérea se cierra. Para respirar, el niño respira MUY rápido (Taquipnea). Esa taquipnea debería \"barrer y eliminar\" todo el CO2 de la sangre, causando Hipocapnia (PCO2 de 25-30 mmHg es lo esperado en un asmático agudo). **Si la PaCO2 empieza a subir hacia valores \"Normales\" (40 mmHg) o francamente altos (48 mmHg), NO ES QUE ESTÉ MEJOR, es que el niño ya no tiene fuerzas para respirar**. Sus músculos se agotaron, su diafragma claudicó (por eso está obnubilado, intoxicado por CO2). Al no mover aire, los pulmones no suenan. Para que un bronquio \"sibile o pite\", requiere que pase aire a presión. Si las mangueras están 100% cerradas y trancadas, no entra aire, por lo tanto, no hay sonido (**Tórax Silente**). Este niño está en Paro Cardiorrespiratorio Inminente y requiere Sulfato de Magnesio IV, Bolos de Corticoides, e Intubación Orotraqueal Urgente o VMNI agresiva.\n\n**TRAMPA DEL EXAMEN:** Normalidad que mata: Los valores normales de PaCO2 (35-45 mmHg) aplican para gente sana sentada en su casa. Un paciente ahogándose que presenta \"CO2 Normal\" te está avisando que su cuerpo perdió la guerra compensatoria y está muriendo de asfixia hipercápnica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si en tu turno entra un asmático haciendo un ruido tremendo al respirar que parece una flauta rota, tranquilízate. El ruido significa que las mangueras están estrechas, pero el oxígeno aún logra pasar a la fuerza. Pero si el asmático llega babeando, dormido y tú pones el fonendoscopio en su pecho y escuchas un \"silencio absoluto de cementerio\", activa el código azul inmediatamente. Esas mangueras colapsaron del todo. Ni una sola gota de oxígeno está entrando. Está tan cansado que ya no puede hiperventilar, y el CO2 de su sangre empezó a acumularse durmiendo a sus neuronas. Prepárale Ketamina para intubarlo y clávale el Sulfato de Magnesio por la vena para intentar dilatar el músculo liso bronquial antes de que el corazón se le pare por hipoxia.",
    keyPoints: [
      "Crisis Asmática Aguda:",
      "Lo esperado: Sibilancias audibles + Hipocapnia (PCO2 bajo).",
      "Signo de PARO INMINENTE: Tórax Silente (Cierre total de la vía, no pasa aire) + PaCO2 Normal o Alto (Fatiga muscular, retiene CO2).",
      "Manejo: Preparar Vía Aérea Avanzada (Intubación) + Sulfato de Magnesio IV + Corticoides Sistémicos."
    ]
  },
  {
    id: "umng-conv-ed4-09",
    university: "UMNG",
    examArea: "MEDICINA DE URGENCIAS",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una adolescente de 15 años es traída a urgencias por sus padres a las 8:00 AM. Ellos relatan que la menor, tras una discusión escolar, se tomó un frasco entero de pastillas de Acetaminofén (Paracetamol) que contenía 40 tabletas de 500 mg cada una (Dosis total: 20 gramos). La ingesta ocurrió en su habitación a las 8:00 PM de la noche anterior (hace exactamente 12 horas). Al examinar a la paciente en urgencias, ella se encuentra completamente ASINTOMÁTICA, tranquila, sin dolor abdominal, sin náuseas y sus escleras están blancas (sin ictericia). Usted toma exámenes de sangre urgentes que reportan: Transaminasas (AST y ALT) normales y bilirrubinas normales. Ante esta presentación silenciosa, ¿cuál es el paso tóxico-terapéutico DIRECTO OBLIGATORIO que debe realizar según las guías mundiales de toxicología?",
    options: [
      { id: "A", label: "A", text: "Dar de alta a la paciente con remisión a psiquiatría, ya que la ingesta de acetaminofén rara vez es fatal y la paciente no presenta síntomas ni alteración hepática a las 12 horas." },
      { id: "B", label: "B", text: "Administrar Carbón Activado y realizar lavado gástrico vigoroso para extraer las pastillas del estómago." },
      { id: "C", label: "C", text: "Medir los niveles séricos de Acetaminofén, graficarlos en el Nomograma de Rumack-Matthew e iniciar el antídoto N-Acetilcisteína (NAC) si está en rango tóxico." },
      { id: "D", label: "D", text: "Iniciar de inmediato la Hemodiálisis para depurar el analgésico de la sangre, ya que pasaron las primeras 4 horas doradas de rescate." }
    ],
    correctOptionId: "C",
    explanation: "El hígado metaboliza el Acetaminofén y produce una basura tóxica llamada **NAPQI**. Normalmente, el Glutatión del hígado destruye el NAPQI. Pero cuando tomas 20 gramos de golpe, el Glutatión se agota, y el NAPQI empieza a derretir y matar las células hepáticas silenciosamente. Al llegar la paciente a las 12 horas, DEBES tomarle sangre para medir los **Niveles Séricos de Paracetamol** y cruzarlos con la \"hora de ingesta\" en el famoso **Nomograma de Rumack-Matthew**. Si el punto cae por encima de la línea de toxicidad (la línea de tratamiento), se inicia inmediatamente el antídoto **N-Acetilcisteína (NAC / Fluimucil)**. La NAC actúa como un donador de cisteína que recarga el Glutatión del hígado, permitiéndole neutralizar el NAPQI y salvando el hígado de la necrosis. (Ojo: La NAC es 100% efectiva si se da en las primeras 8 horas, pero a las 12 horas aún tiene un efecto protector gigantesco).\n\n**TRAMPA DEL EXAMEN:** La fase silente del veneno: Las películas nos enseñan que el veneno duele o hace echar espuma por la boca. El Acetaminofén mata callado. Te pondrán laboratorios perfectos a propósito para tentarte a dar el alta. Todo paciente con sobredosis de Dolex/Tylenol debe ser monitorizado y medido.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando una niña se traga el botiquín de pastillas para el dolor de cabeza de la casa, no lo hace para asustar, a veces realmente las traga sin saber. Esas pastillas ya entraron a su hígado y su enzima protectora (el glutatión) está en números rojos. Aunque la muchacha esté jugando en el celular en la camilla y su hígado no le duela, en 48 horas empezará a vomitar sangre y sus ojos se pondrán amarillos fosforescentes porque el hígado se desintegró por dentro (Falla hepática fulminante). Busca en tu celular el gráfico de Rumack-Matthew, mira la hora, busca el valor de la sangre, y si cruza la línea roja de peligro, inyéctale la N-Acetilcisteína intravenosa por los próximos tres días. Estarás reconstruyendo el escudo de su hígado molécula por molécula.",
    keyPoints: [
      "Intoxicación masiva por Acetaminofén (Paracetamol):",
      "Fase 1 (<24h): Completamente ASINTOMÁTICO con Labs Normales.",
      "Diagnóstico y Decisión: Medir niveles séricos a las 4 horas post-ingesta (o cuando llegue) -> Evaluar en el Nomograma de Rumack-Matthew.",
      "Antídoto de rescate universal: N-ACETILCISTEÍNA (NAC) (Repone el Glutatión hepático para destruir al tóxico NAPQI)."
    ]
  },
  {
    id: "umng-conv-ed4-10",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "GASTROENTEROLOGÍA RADIOLÓGICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un anciano de 82 años, residente de un asilo (hogar geriátrico) con diagnóstico de demencia senil y problemas de estreñimiento crónico severo, es traído a urgencias por los cuidadores. Relatan que el paciente no ha hecho deposición en los últimos 5 días, su abdomen ha crecido progresivamente y hoy empezó con vómitos de contenido fecaloide y un dolor abdominal tipo retortijón moderado, intermitente, pero sin signos de choque ni peritonitis. A la inspección, el paciente luce un abdomen monstruosamente distendido y timpánico a la percusión. Usted solicita una radiografía simple de abdomen de pie y en decúbito. El radiólogo señala una imagen dramática y gigantesca: \"Una dilatación colónica masiva en forma de U invertida (o tubo de llanta) que nace desde la fosa ilíaca izquierda y se proyecta hacia arriba hasta el cuadrante superior derecho, asimilando la imagen de un Grano de Café; no hay aire libre subdiafragmático\". Sabiendo que el paciente está hemodinámicamente ESTABLE y no tiene peritonitis, ¿cuál es el tratamiento INICIAL y de elección para descomprimir esta patología específica?",
    options: [
      { id: "A", label: "A", text: "Laparotomía exploratoria inmediata, resección del colon necrótico y colostomía de Hartmann." },
      { id: "B", label: "B", text: "Descompresión endoscópica inmediata mediante Colonoscopia o Rectosigmoidoscopia con instalación de sonda rectal." },
      { id: "C", label: "C", text: "Administrar enemas de Bario a presión alta para reducir el cuadro mecánicamente desde abajo." },
      { id: "D", label: "D", text: "Pasar una sonda nasogástrica y administrar procinéticos (Neostigmina o Metoclopramida) a dosis plenas." }
    ],
    correctOptionId: "B",
    explanation: "El **Vólvulo de Sigmoides** ocurre porque los ancianos estreñidos tienen el colon muy largo y \"flojo\" (dolicomegacolon). Al estar lleno de heces, la gravedad hace que el colon gire sobre su propio eje (mesenterio), retorciéndose como un trapo o un dulce de envoltura. La radiografía toma la clásica forma de **\"Grano de Café\"**. Como la obstrucción es como un nudo, el gas se acumula inflando la barriga monstruosamente. La gran ventaja del sigmoides es que está \"ahí nomás\" a la vuelta del recto. Como el abuelo está ESTABLE y no tiene la barriga en tabla (no hay peritonitis), el paso ideal mundial (Gold Standard Inicial) es llamar al gastroenterólogo o cirujano para que meta un tubo de **Rectosigmoidoscopia o Colonoscopia**. Al empujar el tubo, este atraviesa el nudo retorcido e instantáneamente libera un estallido de gases y heces fétidas, desinflando el vólvulo y devolviéndolo a su sitio. Se deja una sonda rectal de plástico gruesa metida por un par de días para que el aire salga y el nudo no se vuelva a armar. (Días después, ya desinflamado y estable, se programa una cirugía electiva para cortar el pedazo flojo).\n\n**TRAMPA DEL EXAMEN:** Vólvulo de Sigmoides vs Vólvulo de Ciego:\n- **Sigmoides**: Anciano estreñido. Imagen de \"Grano de café\" naciendo de abajo a la izquierda hacia arriba a la derecha. Manejo: **ENDOSCOPIA DE DESCOMPRESIÓN**.\n- **Ciego**: Adulto joven maratonista o con anomalías de fijación. Grano de café naciendo desde la derecha abajo hacia el centro. Manejo: **QUIRÓFANO SIEMPRE (Derecho a cirugía, no se usa tubo por estar muy lejos y alto riesgo de perforar)**.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., a este abuelo se le anudó el colon sigmoides sobre sí mismo. Ese \"grano de café\" gigante que ves en la radiografía es el intestino lleno de un litro de gas metano que no puede salir porque la puerta de salida está retorcida como una manguera doblada. Si la barriga del abuelo está blandita y no tiene fiebre de peritonitis, eso significa que el intestino todavía está vivo y rosado. Dile al especialista que le ponga un poco de anestesia y meta el colonoscopio suavemente por el recto con paciencia. Cuando el tubo atraviese la rosca del nudo, prepárate, porque un huracán de gases intestinales bañará la sala, pero el abdomen del señor se desinflará instantáneamente salvándole de una cirugía abierta de alto riesgo.",
    keyPoints: [
      "Anciano/Asilo + Estreñimiento crónico + Rx: Signo de Grano de Café (U Invertida) = Vólvulo de Sigmoides.",
      "Paciente estable y sin peritonitis: Manejo inicial con DESCOMPRESIÓN ENDOSCÓPICA (Rectosigmoidoscopia) + Sonda rectal."
    ]
  }
];
