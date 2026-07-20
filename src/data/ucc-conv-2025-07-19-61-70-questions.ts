import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC â€” EdiciÃ³n #3 (19 jul 2025) Â· Preguntas #61â€“#70.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_61_70_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-61",
    university: "UCC",
    examArea: "PediatrÃ­a / InfectologÃ­a / NeurologÃ­a",
    topic: "InfectologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "neurologia"],
    statement: "NiÃ±o de 8 aÃ±os, previamente sano, es traÃ­do a urgencias por presentar fiebre de 39.0Â°C y cefalea severa de 3 dÃ­as de evoluciÃ³n. Hace 4 horas presentÃ³ alteraciones conductuales (agresividad y lenguaje incoherente) seguidas de una convulsiÃ³n focal motora en el hemicuerpo derecho que progresÃ³ a generalizada. Al examen fÃ­sico: estuporoso, rigidez de nuca leve. Se realiza una TomografÃ­a Computarizada (TC) de crÃ¡neo simple que es reportada como normal. Inmediatamente se realiza una punciÃ³n lumbar con los siguientes hallazgos: PresiÃ³n de apertura 18 cmH2O, Leucocitos 120/mmÂ³ (85% linfocitos), Glucosa 65 mg/dL (glucemia sÃ©rica 90 mg/dL), ProteÃ­nas 80 mg/dL. Llama la atenciÃ³n la presencia de 800 Eritrocitos/mmÂ³ en el tubo 1 y 850 Eritrocitos/mmÂ³ en el tubo 4 (ausencia de aclaramiento traumÃ¡tico). Â¿CuÃ¡l es el tratamiento empÃ­rico INMEDIATO de elecciÃ³n que cambia drÃ¡sticamente la mortalidad y morbilidad neurolÃ³gica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Ceftriaxona + Vancomicina a dosis meningeas debido a la alta celularidad en el lÃ­quido.",
        distractorProfile: "bacterial_algorithm_misapplied",
        incorrectFeedback: "El perfil del LCR es claramente viral (pleocitosis linfocÃ­tica con glucosa normal); los antibiÃ³ticos bactericidas no tienen acciÃ³n sobre la encefalitis herpÃ©tica y omitir el Aciclovir aumenta la mortalidad por encima del 70%."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar Aciclovir intravenoso a dosis de 10 mg/kg/dosis cada 8 horas sin esperar confirmaciÃ³n virolÃ³gica."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar Resonancia MagnÃ©tica (RMN) cerebral urgente antes de iniciar terapia para confirmar compromiso del lÃ³bulo temporal.",
        distractorProfile: "diagnostic_delay_in_emergency",
        incorrectFeedback: "Aunque la RMN es el gold standard imagenolÃ³gico, nunca debe retrasar la infusiÃ³n del antiviral en una sospecha de encefalitis necrotizante aguda."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar pulsos de Metilprednisolona por sospecha de Encefalomielitis Diseminada Aguda (ADEM) post-infecciosa.",
        distractorProfile: "wrong_demyelinating_disease",
        incorrectFeedback: "El ADEM es un cuadro desmielinizante subagudo que suele cursar con signos multifocales de sustancia blanca, pero tÃ­picamente carece de fiebre aguda severa de 39Â°C o eritrocitos abundantes en el LCR, y usar esteroides solos en una infecciÃ³n viral activa empeora la replicaciÃ³n herpÃ©tica."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Encefalitis Viral aguda, siendo el Virus del Herpes Simple (VHS tipo 1 en niÃ±os mayores/adultos) la etiologÃ­a mÃ¡s letal, tratable y frecuente. ClÃ­nicamente debuta con fiebre, alteraciÃ³n del sensorio, sÃ­ntomas psiquiÃ¡tricos y focalizaciÃ³n neurolÃ³gica (convulsiones focales por tropismo hacia el lÃ³bulo temporal/frontobasal). El LCR muestra un perfil asÃ©ptico (pleocitosis linfocÃ­tica, glucosa normal), pero el hallazgo \"pivote\" es la presencia elevada y constante de eritrocitos en todos los tubos, reflejando la naturaleza necrotizante y hemorrÃ¡gica del virus en el parÃ©nquima cerebral. Ante la sola sospecha clÃ­nica de Encefalitis HerpÃ©tica, el inicio de Aciclovir IV es OBLIGATORIO en urgencias. Retrasar el Aciclovir esperando una PCR o una Resonancia MagnÃ©tica empeora irremediablemente el pronÃ³stico neurocognitivo.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, aquÃ­ te evalÃºan el \"reflejo medular\" del infectÃ³logo. Si la viÃ±eta dijera que el niÃ±o tiene solo fiebre y rigidez de nuca con PMN altos y glucosa por el piso, piensas en bacterias (Ceftriaxona). Pero si el niÃ±o se pone \"loco\" (alteraciÃ³n del lÃ³bulo temporal), convulsiona, y el LCR te sale con linfocitos y SANGRE que no aclara entre los tubos, el herpes le estÃ¡ necrosando y licuando las venas temporales. La RMN (OpciÃ³n C) mostrarÃ­a el clÃ¡sico edema hiperintenso bitemporal asimÃ©trico, pero mandarlo al resonador sin haberle colgado la bolsa de Aciclovir es una negligencia que le costarÃ¡ el lÃ³bulo temporal y la memoria al paciente.",
    keyPoints: [
      "NiÃ±o o adulto con fiebre, confusiÃ³n, alteraciones conductuales y convulsiones focales.",
      "LCR con perfil linfocÃ­tico, glucosa normal y presencia anormal de Eritrocitos (LCR xantocrÃ³mico/hemorrÃ¡gico sin trauma).",
      "Encefalitis por Herpes Simple (VHS). El Aciclovir IV es la primera orden mÃ©dica de emergencia, superando en urgencia a cualquier imagen confirmatoria.",
      "Tema: NeuroinfecciÃ³n / Encefalitis HerpÃ©tica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-62",
    university: "UCC",
    examArea: "Medicina Interna / ReumatologÃ­a",
    topic: "ReumatologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "reumatologia"],
    statement: "Hombre de 68 aÃ±os con antecedente de Enfermedad Renal CrÃ³nica estadio 4 (Tasa de Filtrado Glomerular 22 mL/min). Consulta a urgencias por presentar instauraciÃ³n sÃºbita de dolor 10/10, edema, calor y eritema en la rodilla derecha de 12 horas de evoluciÃ³n. Al examen fÃ­sico: rodilla a tensiÃ³n, con impotencia funcional absoluta; febrÃ­cula de 37.8Â°C. Una radiografÃ­a de rodilla revela una fina lÃ­nea radiopaca calcificada que dibuja el contorno del cartÃ­lago articular (condrocalcinosis). Se realiza una artrocentesis diagnÃ³stica que extrae lÃ­quido sinovial turbio; el citoquÃ­mico reporta 35.000 Leucocitos/mmÂ³ con 85% de polimorfonucleares. La microscopÃ­a de luz polarizada evidencia la presencia de cristales romboidales con birrefringencia dÃ©bilmente positiva. Ante este cuadro, Â¿cuÃ¡l es el tratamiento intraarticular o sistÃ©mico MÃS apropiado y seguro para resolver la crisis actual?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Artrocentesis evacuadora seguida de inyecciÃ³n intraarticular de un corticosteroide de depÃ³sito (ej. Triamcinolona)."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Ibuprofeno a dosis altas (800 mg cada 8 horas) acompaÃ±ado de un Inhibidor de la Bomba de Protones.",
        distractorProfile: "renal_toxicity_in_ckd",
        incorrectFeedback: "Los AINEs a dosis plenas inhiben la sÃ­ntesis de prostaglandinas renales; en una ERC estadio 4 causarÃ¡n isquemia de la arteriola aferente y falla renal aguda sobre crÃ³nica de forma inmediata."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar Colchicina vÃ­a oral con dosis de carga (1.2 mg seguidos de 0.6 mg), asegurando hidrataciÃ³n agresiva.",
        distractorProfile: "metabolic_accumulation_error",
        incorrectFeedback: "La colchicina se excreta predominantemente por vÃ­a renal. En depuraciones < 30 mL/min, usar dosis de carga estÃ¡ndar induce miopatÃ­a severa y aplasia medular tÃ³xica letal."
      },
      {
        id: "D",
        label: "D",
        text: "Instaurar Ceftriaxona y Vancomicina intravenosas inmediatamente por diagnÃ³stico de Artritis SÃ©ptica, seguido de lavado quirÃºrgico.",
        distractorProfile: "false_septic_arthritis_alarm",
        incorrectFeedback: "Aunque los cristales y la infecciÃ³n pueden coexistir, la clÃ­nica clÃ¡sica de cristales romboidales y el recuento celular inflamatorio (<50,000) apuntan primariamente a pseudogota; la cirugÃ­a es un sobretratamiento masivo."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta una crisis aguda de Pseudogota (Enfermedad por depÃ³sito de cristales de Pirofosfato de Calcio Dihidratado - CPPD). Las claves del diagnÃ³stico son: la afectaciÃ³n de una articulaciÃ³n grande (tÃ­picamente la rodilla), la radiografÃ­a con condrocalcinosis, y el lÃ­quido articular confirmatorio (cristales ROMBOIDALES con birrefringencia POSITIVA dÃ©bil). Aunque la celularidad de 35,000 sugiere un proceso inflamatorio intenso, no cruza el umbral purulento de la artritis sÃ©ptica (>50k-100k). El dilema aquÃ­ es terapÃ©utico: en un paciente con Enfermedad Renal CrÃ³nica Estadio 4 (TFGe 22 mL/min), los AINEs y la Colchicina sistÃ©mica estÃ¡n **contraindicados** o conllevan toxicidad inaceptable. Al ser una monoartritis pura, la intervenciÃ³n mÃ¡s segura, rÃ¡pida y efectiva (recomendada por las guÃ­as ACR/EULAR) es el vaciamiento del lÃ­quido inflamatorio seguido de una inyecciÃ³n intraarticular de glucocorticoides, evitando la toxicidad sistÃ©mica en un riÃ±Ã³n frÃ¡gil.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** En reumatologÃ­a de urgencias, los cristales tienen formas y signos. Gota (Ã¡cido Ãºrico): forma de aguja, birrefringencia negativa, en el dedo gordo. Pseudogota (pirofosfato de calcio): forma de rombo, birrefringencia positiva, en la rodilla. Las opciones B y C estÃ¡n diseÃ±adas para que mates el riÃ±Ã³n o la mÃ©dula Ã³sea del paciente; con una TFG de 22, los AINEs le causarÃ¡n diÃ¡lisis irreversible al dÃ­a siguiente, y la colchicina lo intoxicarÃ¡ neuromuscolarmente porque se acumula. La aguja directo en la rodilla con triamcinolona apaga el fuego localmente sin tocar el riÃ±Ã³n.",
    keyPoints: [
      "Anciano con monoartritis aguda en rodilla o muÃ±eca.",
      "RX: Condrocalcinosis (calcificaciÃ³n del cartÃ­lago).",
      "LÃ­quido sinovial: Cristales ROMBOIDALES, birrefringencia POSITIVA dÃ©bil.",
      "Pseudogota (CPPD). En pacientes con daÃ±o renal (donde AINEs/Colchicina estÃ¡n prohibidos), la infiltraciÃ³n intraarticular con esteroides es el estÃ¡ndar de oro para 1 o 2 articulaciones comprometidas.",
      "Tema: Artritis por Microcristales / Pseudogota."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-63",
    university: "UCC",
    examArea: "Medicina Interna / HematologÃ­a",
    topic: "HematologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "hematologia"],
    statement: "Hombre de 62 aÃ±os consulta por un cuadro crÃ³nico de astenia profunda, diaforesis nocturna y \"picazÃ³n insoportable\" (prurito aquagÃ©nico) generalizada, la cual se exacerba caracterÃ­sticamente minutos despuÃ©s de tomar un baÃ±o con agua caliente. Al examen fÃ­sico: paciente rubicundo (pletÃ³rico), con marcada esplenomegalia palpable a 6 cm por debajo del reborde costal izquierdo. Laboratorios de ingreso: Hemoglobina 19.5 g/dL, Hematocrito 59%, Leucocitos 14,500/mmÂ³, Plaquetas 550,000/mmÂ³ (pancitosis leve con eritrocitosis masiva). Los niveles de Eritropoyetina (EPO) sÃ©rica se reportan marcadamente suprimidos (< 4 mU/mL). La prueba molecular en sangre perifÃ©rica es positiva para la mutaciÃ³n JAK2 V617F. Como paciente clasificado de ALTO RIESGO por edad y cifras, Â¿cuÃ¡l es el pilar terapÃ©utico farmacolÃ³gico y mecÃ¡nico MÃS indicado para prevenir complicaciones trombÃ³ticas mortales?",
    options: [
      {
        id: "A",
        label: "A",
        text: "FlebotomÃ­as terapÃ©uticas seriadas como Ãºnica terapia, manteniendo un hematocrito objetivo < 45%.",
        distractorProfile: "low_risk_therapy_applied_to_high_risk",
        incorrectFeedback: "Excluye la necesidad de citorreducciÃ³n (Hidroxiurea) y de antiagregaciÃ³n, las cuales son mandatorias en este paciente de alto riesgo (>60 aÃ±os) para prevenir morbimortalidad trombÃ³tica arterial y venosa."
      },
      {
        id: "B",
        label: "B",
        text: "FlebotomÃ­as terapÃ©uticas seriadas (meta Hto < 45%) combinadas con Ãcido AcetilsalicÃ­lico (AAS) a dosis bajas y terapia citorreductora con Hidroxiurea."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar terapia dirigida con Imatinib mesilato de manera indefinida.",
        distractorProfile: "wrong_molecular_target",
        incorrectFeedback: "El Imatinib es un inhibidor de tirosina quinasa dirigido contra la proteÃ­na de fusiÃ³n BCR-ABL (Cromosoma Filadelfia), patognomÃ³nica de la Leucemia Mieloide CrÃ³nica (LMC), no teniendo actividad terapÃ©utica en la mutaciÃ³n JAK2 de la PV."
      },
      {
        id: "D",
        label: "D",
        text: "Transfusiones de recambio eritrocitario y suplementaciÃ³n profilÃ¡ctica intensiva con hierro oral para evitar ferropenia secundaria.",
        distractorProfile: "pathophysiological_reversal_trap",
        incorrectFeedback: "El paciente no necesita sangre nueva, necesita evacuar el exceso; ademÃ¡s, la ferropenia iatrogÃ©nica inducida por las flebotomÃ­as es de hecho \"beneficiosa\" en la PV porque frena la formaciÃ³n de nuevos glÃ³bulos rojos; suplementar hierro anularÃ¡ el efecto de la sangrÃ­a."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Policitemia Vera (PV), una neoplasia mieloproliferativa crÃ³nica caracterizada por la mutaciÃ³n JAK2 (que independiza la producciÃ³n de glÃ³bulos rojos del estÃ­mulo de la eritropoyetina, de ahÃ­ la EPO suprimida). La complicaciÃ³n primaria y causa de muerte es la hiperviscosidad sanguÃ­nea que produce trombosis masivas (ACV, IAM, trombosis esplÃ¡cnica). El paciente se clasifica como de **Alto Riesgo** (por tener > 60 aÃ±os o antecedente de trombosis). En pacientes de bajo riesgo, las flebotomÃ­as (sangrÃ­as) con meta de Hematocrito < 45% mÃ¡s Aspirina (AAS) a bajas dosis son suficientes. Pero en pacientes de ALTO RIESGO, las guÃ­as internacionales hematolÃ³gicas exigen la adiciÃ³n de una terapia citorreductora para frenar la mÃ©dula Ã³sea, siendo la **Hidroxiurea** el fÃ¡rmaco de primera lÃ­nea de elecciÃ³n.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, en la Policitemia Vera, el agua caliente de la ducha desgranula los mastocitos y basÃ³filos clonales, liberando histamina a chorros que enloquece al paciente con picor (prurito aquagÃ©nico). Tienes que saber diferenciar la terapia segÃºn el riesgo. Si el paciente tuviera 45 aÃ±os, la opciÃ³n A (sangrÃ­as y aspirina sola) serÃ­a correcta. Pero al tener mÃ¡s de 60, su riesgo trombÃ³tico se dispara exponencialmente; si no le das la Hidroxiurea, harÃ¡ un ACV a pesar de las flebotomÃ­as. Â¿Por quÃ© Imatinib (OpciÃ³n C) es incorrecta? Porque Imatinib es la bala mÃ¡gica del cromosoma Filadelfia (t9;22) en la Leucemia Mieloide CrÃ³nica, no del gen JAK2 de la Policitemia.",
    keyPoints: [
      "Paciente rubicundo con prurito post-ducha caliente y esplenomegalia.",
      "Hemoglobina/Hematocrito muy elevados con Eritropoyetina (EPO) suprimida y JAK2 positivo.",
      "Criterios de Alto Riesgo (> 60 aÃ±os o historia de coÃ¡gulos).",
      "Policitemia Vera de Alto Riesgo. La triada terapÃ©utica es: SangrÃ­as (Hto <45%) + Aspirina + Hidroxiurea.",
      "Tema: Neoplasias Mieloproliferativas / Policitemia Vera."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-64",
    university: "UCC",
    examArea: "PediatrÃ­a / NeonatologÃ­a / CirugÃ­a",
    topic: "NeonatologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neonatologia", "cirugia"],
    statement: "Se atiende el parto vaginal de un neonato masculino a las 38 semanas de edad gestacional; embarazo mal controlado, sin ecografÃ­as prenatales. Inmediatamente al nacer, el equipo de reanimaciÃ³n observa que el niÃ±o presenta un defecto de la pared abdominal supraumbilical derecho de 4 cm. A travÃ©s de este defecto, se observa la protrusiÃ³n franca de asas intestinales gruesas y edematizadas flotando libremente, careciendo por completo de cualquier membrana, saco o peritoneo que las recubra. El cordÃ³n umbilical se encuentra intacto a la izquierda del defecto. El neonato inicia con esfuerzo respiratorio adecuado y FC > 100 lpm. Para evitar una cascada de complicaciones letales intraoperatorias, Â¿cuÃ¡l es el paso INMEDIATO crÃ­tico en la sala de partos para el manejo de las asas expuestas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cubrir las asas exclusivamente con compresas secas estÃ©riles para evitar la maceraciÃ³n de la mucosa y preparar traslado a UCI.",
        distractorProfile: "destructive_mechanical_dressing",
        incorrectFeedback: "Los apÃ³sitos secos se adhieren al peritoneo inflamado de las asas; al retirarlos se producirÃ¡ desgarro de la serosa, sangrado y perforaciones microscÃ³picas, ademÃ¡s de no prevenir la evaporaciÃ³n tÃ©rmica y de fluidos."
      },
      {
        id: "B",
        label: "B",
        text: "Cubrir las asas intestinales expuestas con apÃ³sitos estÃ©riles embebidos en soluciÃ³n salina tibia e introducirlas inmediatamente dentro de una bolsa plÃ¡stica estÃ©ril (silo improvisado)."
      },
      {
        id: "C",
        label: "C",
        text: "Ejercer compresiÃ³n manual directa sobre las asas para reducirlas inmediatamente hacia la cavidad abdominal antes de que se edematicen mÃ¡s.",
        distractorProfile: "lethal_compartment_syndrome",
        incorrectFeedback: "La cavidad abdominal del feto no se desarrollÃ³ adecuadamente por la herniaciÃ³n (pÃ©rdida de domicilio). Reducir a la fuerza las asas generarÃ¡ un SÃ­ndrome Compartimental Abdominal sÃºbito, con colapso diafragmÃ¡tico, asfixia y caÃ­da fatal del gasto cardÃ­aco."
      },
      {
        id: "D",
        label: "D",
        text: "No cubrir las asas, mantenerlas expuestas al calor de la cuna radiante para evitar la colonizaciÃ³n bacteriana por apÃ³sitos hÃºmedos.",
        distractorProfile: "catastrophic_dehydration",
        incorrectFeedback: "El calor directo de la cuna radiante sobre las asas desnudas actuarÃ¡ como un horno, evaporando todo el lÃ­quido extracelular y necrosando (quemando) el tejido mesentÃ©rico irreversiblemente."
      }
    ],
    correctOptionId: "B",
    explanation: "El neonato presenta una Gastrosquisis, un defecto de la pared abdominal congÃ©nito donde los intestinos protruyen libremente (sin saco) a travÃ©s de un orificio tÃ­picamente localizado a la derecha del ombligo. Debido a la falta de cobertura de las asas, el lÃ­quido intravascular, la temperatura y las proteÃ­nas se evaporan masivamente hacia el ambiente, causando hipotermia, choque hipovolÃ©mico y necrosis por desecaciÃ³n en cuestiÃ³n de minutos. La regla de oro en sala de partos es la protecciÃ³n mecÃ¡nica y tÃ©rmica inmediata: las asas deben envolverse en gasas/apÃ³sitos humedecidos con soluciÃ³n salina tibia, y todo el hemicuerpo inferior del neonato (incluyendo el defecto) debe envolverse en una bolsa plÃ¡stica estÃ©ril transparente (una bolsa de recolecciÃ³n de fluidos o silo) para atrapar el calor y la humedad, prevenir la infecciÃ³n e iniciar hidrataciÃ³n agresiva intravenosa.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, esta es una pregunta de maniobras fÃ­sicas de supervivencia. La gastrosquisis no tiene \"paracaÃ­das\" (el saco del onfalocele). Las tripas estÃ¡n literalmente sudando litros de plasma hacia la sala de partos. Si pones gasas secas (OpciÃ³n A), la gasa se pegarÃ¡ a la serosa del intestino, arrancÃ¡ndola cuando el cirujano intente retirarla. Si fuerzas el intestino hacia adentro con tus manos (OpciÃ³n C), aumentarÃ¡s sÃºbitamente la presiÃ³n intraabdominal, colapsando la vena cava inferior y provocando un paro cardÃ­aco instantÃ¡neo por falta de retorno venoso (SÃ­ndrome Compartimental Abdominal). Moja, envuelve en plÃ¡stico y reanima con lÃ­quidos.",
    keyPoints: [
      "Defecto de pared abdominal en neonato CON asas flotando libres y SIN saco (Gastrosquisis).",
      "(Diferenciar de Onfalocele: defecto central, por el ombligo, asas envueltas en un saco de amnios brillante).",
      "Manejo agudo en sala de partos.",
      "Prevenir hipotermia y desecaciÃ³n intestinal (Bolsa plÃ¡stica o Silo + apÃ³sitos salinos tibios). JamÃ¡s comprimir ni forzar el intestino hacia adentro en la sala.",
      "Tema: Defectos de Pared Abdominal / Gastrosquisis."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-65",
    university: "UCC",
    examArea: "Medicina Interna / NefrologÃ­a / ToxicologÃ­a",
    topic: "NefrologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "nefrologia", "toxicologia"],
    statement: "Mujer de 22 aÃ±os, estudiante universitaria, es traÃ­da por sus compaÃ±eros de cuarto al servicio de urgencias en estado de confusiÃ³n mental, agitaciÃ³n, fiebre leve y respiraciÃ³n marcadamente profunda y rÃ¡pida (hiperventilaciÃ³n). Sus amigos refieren que ha estado sometida a mucho estrÃ©s acadÃ©mico y encontraron un frasco vacÃ­o de pastillas en su escritorio. Signos vitales: PA 110/68 mmHg, FC 122 lpm, FR 38 rpm, SatO2 98%. Los gases arteriales reportan los siguientes valores: pH 7.43, PaCO2 18 mmHg, HCO3 12 mEq/L, PaO2 105 mmHg. Electrolitos: Sodio 140 mEq/L, Cloro 102 mEq/L, Potasio 3.6 mEq/L. Brecha AniÃ³nica (Anion Gap) calculada de 26 mEq/L. Â¿CuÃ¡l es el diagnÃ³stico toxicolÃ³gico MÃS probable y el mecanismo fisiopatolÃ³gico del trastorno Ã¡cido-base mixto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "IntoxicaciÃ³n por Etilenglicol; causa acidosis lÃ¡ctica masiva con compensaciÃ³n respiratoria hiperactiva pura.",
        distractorProfile: "single_disorder_trap",
        incorrectFeedback: "El etilenglicol (anticongelante) produce una Acidosis MetabÃ³lica severa pura con Anion Gap muy alto (y gap osmolar alto), y la baja de CO2 es netamente compensatoria. El pH resultante siempre es Ã¡cido (<7.35), no se queda normal/alcalÃ³tico en 7.43."
      },
      {
        id: "B",
        label: "B",
        text: "IntoxicaciÃ³n por Salicilatos (Aspirina); causa inicialmente una alcalosis respiratoria primaria por estimulaciÃ³n del centro bulbar, combinada con una acidosis metabÃ³lica primaria de aniÃ³n gap elevado."
      },
      {
        id: "C",
        label: "C",
        text: "IntoxicaciÃ³n por Benzodiacepinas; causa acidosis respiratoria primaria enmascarada por alcalosis metabÃ³lica severa por vÃ³mitos.",
        distractorProfile: "opposite_respiratory_effect",
        incorrectFeedback: "Las benzodiacepinas deprimen fuertemente el centro respiratorio, produciendo hipoventilaciÃ³n profunda con ACIDOSIS respiratoria (PaCO2 alta, > 50 mmHg), todo lo opuesto a la taquipnea y PaCO2 de 18 que presenta la paciente."
      },
      {
        id: "D",
        label: "D",
        text: "IntoxicaciÃ³n por Metanol; causa cetoacidosis pura por inhibiciÃ³n de la alcohol deshidrogenasa, elevando el pH sanguÃ­neo transitoriamente.",
        distractorProfile: "mechanistic_error_methanol",
        incorrectFeedback: "El metanol genera Ã¡cido fÃ³rmico y produce acidosis metabÃ³lica grave pura de aniÃ³n gap alto (no cetoacidosis pura, ni alcalosis respiratoria), dejando el pH invariablemente desplomado (< 7.20)."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un trastorno Ã¡cido-base MIXTO caracterÃ­stico y patognomÃ³nico de la intoxicaciÃ³n por Salicilatos (Aspirina): pH casi normal (7.43) engaÃ±oso, que es producto del choque entre dos fuerzas primarias independientes. Por un lado, una PaCO2 excesivamente baja (18 mmHg) que indica una Alcalosis Respiratoria primaria (el Ã¡cido acetilsalicÃ­lico estimula de forma directa el centro respiratorio del tronco encefÃ¡lico forzando hiperventilaciÃ³n). Por otro lado, un HCO3 bajÃ­simo (12 mEq/L) con un AniÃ³n Gap francamente elevado (26 mEq/L), lo que indica una Acidosis MetabÃ³lica primaria paralela (secundaria a la acumulaciÃ³n de Ã¡cidos orgÃ¡nicos por desacoplamiento de la fosforilaciÃ³n oxidativa celular). El tratamiento exige alcalinizaciÃ³n urinaria y sÃ©rica con Bicarbonato de Sodio y, en casos de disfunciÃ³n neurolÃ³gica o renal grave, hemodiÃ¡lisis.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Para leer bien los gases arteriales en el examen, usa la fÃ³rmula de Winters. En una acidosis metabÃ³lica simple, por cada punto que baja el bicarbonato, el CO2 deberÃ­a bajar 1.2 puntos por hiperventilaciÃ³n compensatoria. AquÃ­, el bicarbonato bajÃ³ 12 puntos; el CO2 esperado deberÃ­a ser ~26. Sin embargo, el CO2 estÃ¡ en 18 (mucho mÃ¡s barrido de lo normal). Esto significa que la hiperventilaciÃ³n no es solo \"compensaciÃ³n\", sino que hay un problema primario hiperventilando el tÃ³rax independientemente del bicarbonato. La Aspirina cruza al bulbo raquÃ­deo y prende el centro respiratorio como un motor a fondo. Un pH normal escondiendo dos trastornos masivos es el sello toxicolÃ³gico de los salicilatos.",
    keyPoints: [
      "Adulto o joven con hiperventilaciÃ³n primaria, confusiÃ³n y tinnitus (zumbido de oÃ­dos).",
      "Gases con pH engaÃ±osamente normal (7.40 - 7.45), pero con PCO2 muy baja Y HCO3 muy bajo + Anion Gap ALTO.",
      "IntoxicaciÃ³n por Salicilatos (Aspirina). El diagnÃ³stico lo sella la presencia dual de Alcalosis Respiratoria + Acidosis MetabÃ³lica. Tratamiento: AlcalinizaciÃ³n con Bicarbonato de Sodio.",
      "Tema: Trastornos Ãcido-Base / ToxicologÃ­a."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-66",
    university: "UCC",
    examArea: "Medicina Interna / CardiologÃ­a / Urgencias",
    topic: "CardiologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "urgencias"],
    statement: "Hombre de 55 aÃ±os, previamente sano y deportista recreativo, es evaluado en urgencias por un episodio de dolor torÃ¡cico retroesternal difuso ocurrido hace 24 horas que resolviÃ³ espontÃ¡neamente. Al momento del examen, el paciente se encuentra completamente asintomÃ¡tico, normotenso (120/75 mmHg) y bien prefundido. Se realiza un electrocardiograma de 12 derivaciones (ECG) para protocolo de dolor torÃ¡cico, el cual revela: Presencia de ondas P sinusales a 70 lpm. Llama la atenciÃ³n que el intervalo PR se va alargando progresivamente latido a latido (de 200 ms a 280 ms y luego a 340 ms), hasta que sÃºbitamente una onda P no es seguida por un complejo QRS. El ciclo vuelve a iniciar inmediatamente despuÃ©s de la pausa. Â¿CuÃ¡l es el diagnÃ³stico electrocardiogrÃ¡fico y la conducta mÃ©dica indicada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Bloqueo Auriculoventricular de 3er grado (Completo); requiere implantaciÃ³n urgente de marcapasos transvenoso.",
        distractorProfile: "wrong_ecg_interpretation",
        incorrectFeedback: "En el bloqueo de 3er grado existe una disociaciÃ³n AV completa; los intervalos PP son regulares y los RR son regulares, pero no guardan ninguna relaciÃ³n entre sÃ­, y nunca se observa un patrÃ³n de alargamiento progresivo del PR."
      },
      {
        id: "B",
        label: "B",
        text: "Bloqueo Auriculoventricular de 2do grado tipo Mobitz II; requiere vigilancia estricta y posible marcapasos definitivo por alto riesgo de progresiÃ³n a asistolia.",
        distractorProfile: "malignant_block_confusion",
        incorrectFeedback: "El Mobitz II se caracteriza por intervalos PR constantes y fijos antes del latido bloqueado, reflejando una enfermedad estructural del Haz de His o fibras de Purkinje, no la fatiga del nodo AV descrita en el Wenckebach."
      },
      {
        id: "C",
        label: "C",
        text: "Bloqueo Auriculoventricular de 2do grado tipo Mobitz I (Wenckebach); al ser asintomÃ¡tico, requiere solo observaciÃ³n y alta mÃ©dica, ya que tiene un curso benigno."
      },
      {
        id: "D",
        label: "D",
        text: "Ritmo de la uniÃ³n auriculoventricular con escapes ventriculares; iniciar Atropina IV para aumentar el cronotropismo intrÃ­nseco.",
        distractorProfile: "wrong_rhythm_and_symptomatic_error",
        incorrectFeedback: "Un ritmo de la uniÃ³n suele no mostrar ondas P o mostrarlas retrÃ³gradas invertidas. AdemÃ¡s, administrar atropina a un paciente completamente normotenso y asintomÃ¡tico carece de indicaciÃ³n clÃ­nica."
      }
    ],
    correctOptionId: "C",
    explanation: "El trazado describe clÃ¡sicamente un Bloqueo Auriculoventricular de segundo grado, tipo Mobitz I (FenÃ³meno de Wenckebach). El signo electrocardiogrÃ¡fico cardinal es el alargamiento progresivo del intervalo PR antes del latido \"ausente\" o bloqueado, indicando una fatiga progresiva y benigna del nodo AV. Este bloqueo es frecuente en atletas por alto tono vagal, durante el sueÃ±o o posterior a infartos de cara inferior (por isquemia transitoria del nodo). La caracterÃ­stica primordial del Mobitz I es que es fisiolÃ³gicamente benigno y rara vez progresa a un bloqueo completo. SegÃºn las guÃ­as de la AHA/ACC, si el paciente estÃ¡ hemodinÃ¡micamente estable y asintomÃ¡tico, no requiere ninguna intervenciÃ³n farmacolÃ³gica (atropina) ni elÃ©ctrica (marcapasos); la observaciÃ³n o el alta con control ambulatorio es la conducta correcta.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un bloqueo de libro de texto, Colega. La trampa del Mobitz I es hacer creer al mÃ©dico general que el corazÃ³n se \"apagÃ³\" en la pausa, induciendo pÃ¡nico. Si el PR es fijo (siempre mide lo mismo) y de repente cae una P, eso es Mobitz II (lesiÃ³n infranodal, maligna, requiere marcapasos). Pero si el PR \"avisa\" que se va a fatigar haciÃ©ndose cada vez mÃ¡s largo (Mobitz I), es un bloqueo protector benigno. Atropina solo se usa si, durante la bradicardia, el paciente hace hipotensiÃ³n severa o se desmaya, situaciÃ³n ausente en nuestra viÃ±eta asintomÃ¡tica.",
    keyPoints: [
      "Alargamiento PROGRESIVO del PR hasta que una onda P se bloquea (se queda \"huÃ©rfana\").",
      "Paciente sin inestabilidad hemodinÃ¡mica ni mareos/sÃ­ncope.",
      "Bloqueo AV de 2do grado tipo Mobitz I (Wenckebach). Localizado en el nodo AV, es suprahisiano y benigno. No requiere marcapasos; solo observaciÃ³n.",
      "Tema: Arritmias / Bloqueos Auriculoventriculares."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-67",
    university: "UCC",
    examArea: "PediatrÃ­a / CardiologÃ­a / NeonatologÃ­a",
    topic: "CardiologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "cardiologia", "neonatologia"],
    statement: "Neonato masculino de 7 dÃ­as de vida es traÃ­do al servicio de urgencias por sus padres en estado de choque profundo. Refieren que el niÃ±o estuvo \"perfecto\" hasta ayer, cuando comenzÃ³ con rechazo a la lactancia, somnolencia extrema y palidez. Al examen fÃ­sico: letÃ¡rgico, taquipneico (FR 65 rpm), PA en brazo derecho de 75/40 mmHg. Llama la atenciÃ³n que la piel del tronco superior luce rosada, pero de la pelvis hacia abajo se observa franca cianosis perifÃ©rica con retardo del llenado capilar (> 5 segundos). Los pulsos radiales y braquiales son fuertes y saltones, mientras que los pulsos femorales y pedios son filiformes y virtualmente impalpables. Â¿CuÃ¡l es el diagnÃ³stico subyacente que precipitÃ³ este cuadro fulminante a los 7 dÃ­as de vida y el tratamiento agudo de elecciÃ³n?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Sepsis neonatal tardÃ­a por *Listeria monocytogenes*; tratamiento es choque de lÃ­quidos e infusiÃ³n de Ampicilina.",
        distractorProfile: "common_neonatal_shock_overlap",
        incorrectFeedback: "Aunque la sepsis neonatal produce choque letÃ¡rgico, NO explica la profunda discrepancia mecÃ¡nica regional entre los pulsos saltones de miembros superiores y la impalpabilidad/cianosis exclusiva de miembros inferiores."
      },
      {
        id: "B",
        label: "B",
        text: "CoartaciÃ³n de la Aorta crÃ­tica desenmascarada por el cierre del ductus arterioso; la intervenciÃ³n inmediata es la infusiÃ³n intravenosa de Prostaglandina E1 (Alprostadil)."
      },
      {
        id: "C",
        label: "C",
        text: "Persistencia del Conducto Arterioso masivo; el tratamiento de urgencia es el cierre farmacolÃ³gico con Indometacina o Ibuprofeno.",
        distractorProfile: "fatal_physiologic_reversal",
        incorrectFeedback: "En la coartaciÃ³n crÃ­tica, el paciente depende del conducto abierto para vivir (circulaciÃ³n sistÃ©mica ductus-dependiente). Cerrar el ductus con AINEs desencadena choque refractario visceral inmediato por obstrucciÃ³n aÃ³rtica total distal."
      },
      {
        id: "D",
        label: "D",
        text: "Hipoplasia del CorazÃ³n Izquierdo; requiere administraciÃ³n profilÃ¡ctica de surfactante y ventilaciÃ³n invasiva para reducir la carga de trabajo derecho.",
        distractorProfile: "wrong_heart_lesion_management",
        incorrectFeedback: "La hipoplasia del corazÃ³n izquierdo tambiÃ©n es dependiente del ductus y causa choque, pero presenta pulsos disminuidos universalmente (en brazos y piernas), y el surfactante no ejerce ningÃºn efecto hemodinÃ¡mico."
      }
    ],
    correctOptionId: "B",
    explanation: "El neonato cursa con una presentaciÃ³n severa clÃ¡sica de CoartaciÃ³n de Aorta yuxtaductal crÃ­tica. Al nacimiento, estas lesiones obstructivas severas del arco aÃ³rtico pasan desapercibidas (\"perfecto los primeros dÃ­as\") porque el Conducto Arterioso (Ductus) fetal se mantiene permeable, proveyendo un cortocircuito \"salvavidas\" que lleva sangre desde la arteria pulmonar hacia la aorta descendente (brindando flujo a las piernas e intestinos, aunque desoxigenada, explicando la cianosis diferencial pÃ©lvica). Entre el dÃ­a 3 y 10 de vida, el ductus se cierra anatÃ³micamente. Al cerrarse la Ãºnica vÃ­a de escape, la obstrucciÃ³n aÃ³rtica total desenmascara el choque cardiogÃ©nico: hiperperfusiÃ³n de extremidades superiores (pulsos saltones, HTA) e hipoperfusiÃ³n extrema del hemicuerpo inferior (pulsos femorales ausentes, cianosis pÃ©lvica, falla renal y falla intestinal). El rescate de urgencia absoluto es la infusiÃ³n de **Prostaglandina E1** para forzar la reapertura del conducto arterioso, devolviendo el flujo a los Ã³rganos vitales mientras se lleva al niÃ±o a cirugÃ­a correctiva.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** En cardiologÃ­a pediÃ¡trica, \"pulsos femorales ausentes\" es coartaciÃ³n aÃ³rtica hasta probar lo contrario. FÃ­jate en la magia de la fisiopatologÃ­a: el niÃ±o no estÃ¡ infectado, su choque es obstructivo puro porque la \"llave de paso\" se cerrÃ³. Si crees que es solo un conducto que no cerrÃ³ y le pones Indometacina (OpciÃ³n C), cometes un asesinato clÃ­nico: sellarÃ¡s definitivamente el poco ductus que queda, cortando el 100% de la sangre a los riÃ±ones, intestino e hÃ­gado, matando al bebÃ© en menos de una hora. El Alprostadil (PGE1) derrite el mÃºsculo del ductus, reabriendo la compuerta de escape.",
    keyPoints: [
      "Neonato de 1 a 2 semanas de vida que colapsa de forma sÃºbita con choque cardiogÃ©nico.",
      "Diferencia franca de pulsos/presiÃ³n: Fuertes arriba (brazos), dÃ©biles o ausentes abajo (femorales).",
      "CardiopatÃ­a congÃ©nita dependiente del conducto (CoartaciÃ³n de Aorta / InterrupciÃ³n de Arco AÃ³rtico). Choque desatado por cierre del Ductus. El tratamiento empÃ­rico de soporte vital innegociable es Prostaglandina E1.",
      "Tema: CardiopatÃ­as CongÃ©nitas / CoartaciÃ³n de Aorta."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-68",
    university: "UCC",
    examArea: "Medicina Interna / GastroenterologÃ­a / ReumatologÃ­a",
    topic: "GastroenterologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "reumatologia"],
    statement: "Mujer de 52 aÃ±os acude a consulta por fatiga profunda e incapacitante de 6 meses de evoluciÃ³n, asociada a un cuadro de prurito generalizado severo, predominantemente nocturno, que no responde a antihistamÃ­nicos. Al examen fÃ­sico se documentan xantelasmas en los pÃ¡rpados superiores, Ã¡reas de hiperpigmentaciÃ³n por rascado crÃ³nico (excoriaciones) en extremidades y hepatomegalia lisa a 3 cm bajo el reborde costal. Los laboratorios revelan: Fosfatasa Alcalina 850 U/L (marcadamente elevada), GGT 620 U/L, AST 55 U/L, ALT 45 U/L, Bilirrubina Total 1.2 mg/dL. Un perfil de autoinmunidad reporta la presencia de **Anticuerpos Mitocondriales (AMA)** positivos en un tÃ­tulo de 1:320. La ecografÃ­a de vÃ­as biliares no muestra dilataciÃ³n ni cÃ¡lculos. Â¿CuÃ¡l es la intervenciÃ³n terapÃ©utica farmacolÃ³gica de PRIMERA LÃNEA capaz de retrasar la progresiÃ³n histolÃ³gica de esta enfermedad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar corticosteroides a altas dosis asociados a Azatioprina para suprimir la respuesta autoinmune portal.",
        distractorProfile: "overlapping_autoimmune_hepatitis_trap",
        incorrectFeedback: "La corticoterapia sistÃ©mica NO altera la supervivencia libre de trasplante en la Colangitis Biliar Primaria (a diferencia de la Hepatitis Autoinmune pura) y su uso crÃ³nico exacerba profundamente la osteoporosis severa secundaria a la malabsorciÃ³n de calcio propia de la colestasis."
      },
      {
        id: "B",
        label: "B",
        text: "Prescribir Ãcido UrsodesoxicÃ³lico (UDCA) oral de forma crÃ³nica, idealmente a una dosis de 13 a 15 mg/kg/dÃ­a."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar recambio plasmÃ¡tico (plasmafÃ©resis) y prescribir Colestiramina para controlar el prurito biliar refractario.",
        distractorProfile: "symptomatic_focus_ignoring_disease_modifier",
        incorrectFeedback: "La colestiramina es un tratamiento coadyuvante muy Ãºtil para atrapar sales biliares en el intestino y aliviar el prurito, pero no frena en absoluto la destrucciÃ³n inmunolÃ³gica del conducto biliar intrahepÃ¡tico lograda por el UDCA."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar tratamiento empÃ­rico con Tenofovir o Entecavir por sospecha de coinfecciÃ³n por hepatitis viral oculta.",
        distractorProfile: "wrong_hepatopathy_etiology",
        incorrectFeedback: "Las hepatitis crÃ³nicas virales (B y C) causan predominantemente un patrÃ³n hepatocelular (elevaciÃ³n de AST/ALT), carecen de xantomas primarios y nunca inducen la apariciÃ³n de los anticuerpos mitocondriales que sellan la CBP."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta la descripciÃ³n de texto de la **Colangitis Biliar Primaria** (CBP, antiguamente Cirrosis Biliar Primaria). Es una enfermedad autoinmune del hÃ­gado que ataca los conductos biliares intrahepÃ¡ticos pequeÃ±os. Afecta tÃ­picamente a mujeres de mediana edad. Su presentaciÃ³n cardinal incluye fatiga extrema, prurito y patrÃ³n de colestasis disociada (Fosfatasa Alcalina y GGT por las nubes con bilirrubina normal en etapas tempranas) e hipercolesterolemia con xantomas/xantelasmas. El hallazgo de laboratorio pivote y patognomÃ³nico es la positividad a **Anticuerpos Mitocondriales (AMA)** en mÃ¡s del 90-95% de las pacientes. El Ãºnico fÃ¡rmaco de primera lÃ­nea comprobado para mejorar los parÃ¡metros bioquÃ­micos, retrasar la progresiÃ³n a cirrosis, prevenir vÃ¡rices y extender el tiempo libre de trasplante es el **Ãcido UrsodesoxicÃ³lico (UDCA)**.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Punto para diferenciar las hepatopatÃ­as autoinmunes, Colega. Si el paciente tiene las transaminasas (AST/ALT) en 1.000 y anticuerpos Anti-MÃºsculo Liso (ASMA) positivos, eso es Hepatitis Autoinmune y se trata con Esteroides + Azatioprina (OpciÃ³n A). Pero si el paciente tiene las enzimas biliares (Fosfatasa Alcalina/GGT) en 1.000 y anticuerpos Antimitocondriales (AMA), eso es Colangitis Biliar Primaria y su Ãºnico salvavidas es el Ãcido UrsodesoxicÃ³lico. Este Ã¡cido es un Ã¡cido biliar hidrofÃ­lico y protector que desplaza a los Ã¡cidos biliares tÃ³xicos (litocÃ³lico), desinflamando el conductillo hepÃ¡tico desde adentro.",
    keyPoints: [
      "Mujer de mediana edad con fatiga, prurito insoportable y patrÃ³n colestÃ¡sico (Fosfatasa Alcalina altÃ­sima).",
      "EcografÃ­a de vÃ­as biliares completamente normal (la obstrucciÃ³n es micro-intrahepÃ¡tica).",
      "Anticuerpos Mitocondriales (AMA) fuertemente positivos.",
      "Colangitis Biliar Primaria (CBP). FÃ¡rmaco modificador de la enfermedad: Ãcido UrsodesoxicÃ³lico (UDCA). Los esteroides no sirven.",
      "Tema: HepatopatÃ­as Autoinmunes / Colangitis Biliar Primaria."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-69",
    university: "UCC",
    examArea: "Medicina Interna / InfectologÃ­a / NeumologÃ­a",
    topic: "InfectologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "infectologia", "neumologia"],
    statement: "Hombre de 42 aÃ±os con diagnÃ³stico de infecciÃ³n por VIH y nulo seguimiento mÃ©dico (desconoce CD4 y carga viral actuales). Ingresa a urgencias por un cuadro de instauraciÃ³n gradual de 3 semanas de tos seca exigente, disnea de medianos a pequeÃ±os esfuerzos y fiebre vespertina progresiva. Al examen fÃ­sico: luz taquipneico (FR 26 rpm), sin uso marcado de accesorios. A la auscultaciÃ³n, los campos pulmonares carecen de estertores o sibilancias francas. Una radiografÃ­a de tÃ³rax reporta opacidades reticulonodulares difusas bilaterales finas (\"vidrio esmerilado\") predominantemente perihiliares. Se realiza prueba de gases arteriales con el paciente respirando aire ambiente, la cual revela: pH 7.42, PaCO2 35 mmHg, y una **PaO2 de 62 mmHg**, calculÃ¡ndose una gradiente alvÃ©olo-arterial de oxÃ­geno (A-a) de 45 mmHg. Se sospecha NeumonÃ­a por *Pneumocystis jirovecii*. Â¿CuÃ¡l es la terapia dual OBLIGATORIA de inicio para disminuir el riesgo de falla ventilatoria y muerte?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Trimetoprima-Sulfametoxazol (TMP-SMX) intravenosa a altas dosis asociada a Corticosteroides sistÃ©micos (Prednisona)."
      },
      {
        id: "B",
        label: "B",
        text: "Pentamidina intravenosa exclusiva, reservando los esteroides solo si se confirma coinfecciÃ³n bacteriana.",
        distractorProfile: "second_line_antibiotic_trap",
        incorrectFeedback: "La pentamidina es un fÃ¡rmaco de segunda lÃ­nea reservado estrictamente para pacientes con alergia severa/anafilaxia documentada a las sulfas o fallo al TMP-SMX, y su uso aislado no suprime la inflamaciÃ³n alveolar letal inicial."
      },
      {
        id: "C",
        label: "C",
        text: "Trimetoprima-Sulfametoxazol (TMP-SMX) combinada con Clindamicina-Primaquina, diferiendo esteroides por riesgo de superinfecciÃ³n inmunosupresora.",
        distractorProfile: "double_antibiotic_no_steroids",
        incorrectFeedback: "Clindamicina-Primaquina es otra opciÃ³n de segunda lÃ­nea, no se combina con TMP-SMX. Retrasar u omitir los corticosteroides ante una PaO2 de 62 mmHg garantiza un deterioro agudo hacia intubaciÃ³n y ventilaciÃ³n mecÃ¡nica prolongada."
      },
      {
        id: "D",
        label: "D",
        text: "Caspofungina asociada a Anfotericina B liposomal debido a la naturaleza fÃºngica intrÃ­nseca del agente patÃ³geno.",
        distractorProfile: "taxonomic_antifungal_error",
        incorrectFeedback: "Aunque *Pneumocystis jirovecii* es taxonÃ³micamente un hongo atÃ­pico, su membrana carece de ergosterol, lo que lo hace completamente resistente a los antifÃºngicos tradicionales (como azoles, polienos y equinocandinas); responde a agentes antiprotozoarios/antibacterianos."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con una NeumonÃ­a por *Pneumocystis jirovecii* (PCP), la infecciÃ³n oportunista pulmonar marcadora del VIH (CD4 < 200). La droga antimicrobiana de primera lÃ­nea y estÃ¡ndar de oro para el tratamiento agudo es el Trimetoprima-Sulfametoxazol a dosis altas. Sin embargo, el detalle crÃ­tico de supervivencia de esta viÃ±eta radica en los gases arteriales. Cuando los antibiÃ³ticos empiezan a matar los hongos de *Pneumocystis* en el alvÃ©olo, la lisis fÃºngica genera una tormenta inflamatoria masiva que empeora agudamente la oxigenaciÃ³n y precipita SDRA y falla ventilatoria. Para prevenir este \"efecto rebote\" fatal, las guÃ­as establecen como mandato universal que los corticosteroides sistÃ©micos deben iniciarse *junto* al antibiÃ³tico en todos los pacientes que presenten Criterios de Severidad HipÃ³xica: **PaO2 < 70 mmHg al aire ambiente** (el paciente tiene 62 mmHg) o una **Gradiente A-a de oxÃ­geno â‰¥ 35 mmHg** (el paciente tiene 45 mmHg).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Los esteroides en la medicina interna siempre son un arma de doble filo, pero en la PCP severa son un mandato divino. El mÃ©dico novato teme usar corticoides (inmunosupresores) en un paciente con SIDA y falla respiratoria (OpciÃ³n C), pensando que agravarÃ¡ la infecciÃ³n. El problema es que el *Pneumocystis* muerto inflama el alvÃ©olo de tal manera que el paciente morirÃ¡ de SDRA en las primeras 48 horas de hospitalizaciÃ³n. Si el gas arterial te bota una PaO2 por debajo de 70, la Prednisona debe pasarse el DÃ­a 1, Minuto 1 junto al antibiÃ³tico (TMP-SMX).",
    keyPoints: [
      "Paciente con VIH/SIDA e infiltrados pulmonares en \"vidrio esmerilado\".",
      "Gases arteriales (aire ambiente) que reportan: PaO2 < 70 mmHg O Gradiente alvÃ©olo-arterial â‰¥ 35 mmHg.",
      "NeumonÃ­a por Pneumocystis Severa. El tratamiento exige el inicio simultÃ¡neo de TMP-SMX y Corticosteroides (Prednisona 40mg cada 12h) para evitar la muerte por inflamaciÃ³n de lisis.",
      "Tema: Infecciones Oportunistas en VIH / NeumonÃ­a PCP."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-70",
    university: "UCC",
    examArea: "PediatrÃ­a / EndocrinologÃ­a",
    topic: "EndocrinologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "endocrinologia"],
    statement: "NiÃ±a de 6 aÃ±os y 6 meses es llevada a consulta por su madre, quien ha notado en las Ãºltimas semanas la apariciÃ³n progresiva de \"botÃ³n mamario\" bilateral doloroso y la presencia de vello pÃºbico incipiente. Adicionalmente, el pediatra documenta un aumento repentino en la velocidad de crecimiento (estirÃ³n). Se solicita una radiografÃ­a de carpograma (edad Ã³sea), la cual reporta una maduraciÃ³n esquelÃ©tica correspondiente a una niÃ±a de 9 aÃ±os (francamente adelantada). Se realiza una prueba de estimulaciÃ³n con AnÃ¡logo de la Hormona Liberadora de Gonadotropinas (GnRH), y se observa un pico masivo de secreciÃ³n de Hormona Luteinizante (LH) superior a 5 UI/L (patrÃ³n puberal/maduro). Ante el diagnÃ³stico de Pubertad Precoz Central (dependiente de gonadotropinas), Â¿cuÃ¡l es el PASO DIAGNÃ“STICO ESTÃNDAR DE ORO y obligatorio antes de iniciar el tratamiento inhibidor de la pubertad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "EcografÃ­a pÃ©lvica de alta resoluciÃ³n para descartar un tumor de cÃ©lulas de la granulosa ovÃ¡rico secretor de estrÃ³genos.",
        distractorProfile: "wrong_puberty_origin_test",
        incorrectFeedback: "La ecografÃ­a pÃ©lvica es el paso inicial para la pubertad precoz PERIFÃ‰RICA (gonadotropinas bajas/suprimidas). En este caso, la LH elevada confirma que el origen de la seÃ±al estÃ¡ en el cerebro (pubertad central), haciendo mandatoria la RMN de crÃ¡neo."
      },
      {
        id: "B",
        label: "B",
        text: "Resonancia MagnÃ©tica (RMN) cerebral contrastada para descartar una masa estructural del sistema nervioso central (Hamartoma hipotalÃ¡mico)."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar manejo inmediato y empÃ­rico con Leuprorelina (AnÃ¡logo de GnRH) de depÃ³sito y diferir imÃ¡genes por seguridad.",
        distractorProfile: "premature_treatment_trap",
        incorrectFeedback: "Retrasar la neuroimagen para iniciar el bloqueo farmacolÃ³gico es un grave error; la causa de la pubertad podrÃ­a ser un glioma Ã³ptico, astrocitoma o hamartoma que requiere abordaje neuroquirÃºrgico urgente antes que el bloqueo hormonal."
      },
      {
        id: "D",
        label: "D",
        text: "Biopsia endometrial para evaluaciÃ³n de receptores estrogÃ©nicos activos y riesgo de sangrado temprano.",
        distractorProfile: "useless_invasive_test",
        incorrectFeedback: "La biopsia endometrial no tiene ninguna indicaciÃ³n en el algoritmo de pubertad precoz infantil; el desarrollo endometrial se infiere clÃ­nicamente y por ecografÃ­a pÃ©lvica bÃ¡sica, nunca con intervenciones cruentas."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una Pubertad Precoz (desarrollo de caracteres sexuales secundarios en niÃ±as antes de los 8 aÃ±os). Al documentarse un botÃ³n mamario (activaciÃ³n ovÃ¡rica), un aumento de la velocidad de crecimiento y, fundamentalmente, una respuesta francamente positiva/puberal de la hormona LH al estÃ­mulo con GnRH, se confirma categÃ³ricamente que se trata de una **Pubertad Precoz Central (PPC)** o Verdadera. Esto significa que el eje HipotÃ¡lamo-HipÃ³fisis-GÃ³nadas se activÃ³ prematuramente de forma idÃ©ntica a la fisiologÃ­a normal. Aunque la mayorÃ­a de las PPC en niÃ±as son \"idiopÃ¡ticas\", una proporciÃ³n importante se debe a tumores o malformaciones del SNC, siendo el **Hamartoma HipotalÃ¡mico** la causa tumoral mÃ¡s frecuente. Las guÃ­as endocrinolÃ³gicas exigen OBLIGATORIAMENTE realizar una Resonancia MagnÃ©tica Cerebral en toda niÃ±a con Pubertad Precoz Central confirmada (especialmente si es menor de 6-7 aÃ±os) antes de iniciar los anÃ¡logos de GnRH, para no enmascarar un tumor de crÃ¡neo que podrÃ­a requerir abordaje neuroquirÃºrgico.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Para no perder puntos aquÃ­, Colega, debes tener muy clara la diferencia entre pubertad perifÃ©rica y central. Si la pubertad fuera perifÃ©rica (LH baja o inhibida tras estÃ­mulo), el estrÃ³geno viene del ovario y pedirÃ­as una ecografÃ­a pÃ©lvica (OpciÃ³n A). Pero como la LH respondiÃ³ fuerte, el eje hipotÃ¡lamo-hipofisario estÃ¡ encendido. En niÃ±as menores de 8 aÃ±os, la causa mÃ¡s temida de encender el hipotÃ¡lamo es una masa, siendo el hamartoma la principal. No puedes bloquear la pubertad a ciegas (OpciÃ³n C) sin estar seguro de que no hay un tumor creciendo en el cerebro. La biopsia endometrial (OpciÃ³n D) es inÃºtil, el estrÃ³geno de una pubertad temprana no es indicaciÃ³n para invadir el Ãºtero.",
    keyPoints: [
      "NiÃ±a menor de 8 aÃ±os con Telarquia (mamas) o niÃ±o menor de 9 con aumento testicular.",
      "Edad Ã³sea adelantada + LH basal o tras estÃ­mulo con GnRH francamente ALTA (PatrÃ³n Central).",
      "Pubertad Precoz Central. El estudio imagenolÃ³gico INEXCUSABLE y OBLIGATORIO de la vÃ­a es la Resonancia MagnÃ©tica (RMN) del cerebro/hipotÃ¡lamo para buscar Hamartomas.",
      "Tema: Pubertad Precoz PediÃ¡trica."
    ]
  }
];

