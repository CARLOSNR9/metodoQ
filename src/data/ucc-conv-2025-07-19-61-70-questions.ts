import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #3 (19 jul 2025) Â· Preguntas #61”“#70.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_61_70_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-61",
    university: "UCC",
    examArea: "Pediatría / Infectología / Neurología",
    topic: "Infectología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "neurologia"],
    statement: "Niño de 8 años, previamente sano, es traído a urgencias por presentar fiebre de 39.0°C y cefalea severa de 3 días de evolución. Hace 4 horas presentó alteraciones conductuales (agresividad y lenguaje incoherente) seguidas de una convulsión focal motora en el hemicuerpo derecho que progresó a generalizada. Al examen físico: estuporoso, rigidez de nuca leve. Se realiza una Tomografía Computarizada (TC) de cráneo simple que es reportada como normal. Inmediatamente se realiza una punción lumbar con los siguientes hallazgos: Presión de apertura 18 cmH2O, Leucocitos 120/mmÂ³ (85% linfocitos), Glucosa 65 mg/dL (glucemia sérica 90 mg/dL), Proteínas 80 mg/dL. Llama la atención la presencia de 800 Eritrocitos/mmÂ³ en el tubo 1 y 850 Eritrocitos/mmÂ³ en el tubo 4 (ausencia de aclaramiento traumático). ¿Cuál es el tratamiento empírico INMEDIATO de elección que cambia drásticamente la mortalidad y morbilidad neurológica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Ceftriaxona + Vancomicina a dosis meningeas debido a la alta celularidad en el líquido.",
        distractorProfile: "bacterial_algorithm_misapplied",
        incorrectFeedback: "El perfil del LCR es claramente viral (pleocitosis linfocítica con glucosa normal); los antibióticos bactericidas no tienen acción sobre la encefalitis herpética y omitir el Aciclovir aumenta la mortalidad por encima del 70%."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar Aciclovir intravenoso a dosis de 10 mg/kg/dosis cada 8 horas sin esperar confirmación virológica."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar Resonancia Magnética (RMN) cerebral urgente antes de iniciar terapia para confirmar compromiso del lóbulo temporal.",
        distractorProfile: "diagnostic_delay_in_emergency",
        incorrectFeedback: "Aunque la RMN es el gold standard imagenológico, nunca debe retrasar la infusión del antiviral en una sospecha de encefalitis necrotizante aguda."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar pulsos de Metilprednisolona por sospecha de Encefalomielitis Diseminada Aguda (ADEM) post-infecciosa.",
        distractorProfile: "wrong_demyelinating_disease",
        incorrectFeedback: "El ADEM es un cuadro desmielinizante subagudo que suele cursar con signos multifocales de sustancia blanca, pero típicamente carece de fiebre aguda severa de 39°C o eritrocitos abundantes en el LCR, y usar esteroides solos en una infección viral activa empeora la replicación herpética."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Encefalitis Viral aguda, siendo el Virus del Herpes Simple (VHS tipo 1 en niños mayores/adultos) la etiología más letal, tratable y frecuente. Clínicamente debuta con fiebre, alteración del sensorio, síntomas psiquiátricos y focalización neurológica (convulsiones focales por tropismo hacia el lóbulo temporal/frontobasal). El LCR muestra un perfil aséptico (pleocitosis linfocítica, glucosa normal), pero el hallazgo \"pivote\" es la presencia elevada y constante de eritrocitos en todos los tubos, reflejando la naturaleza necrotizante y hemorrágica del virus en el parénquima cerebral. Ante la sola sospecha clínica de Encefalitis Herpética, el inicio de Aciclovir IV es OBLIGATORIO en urgencias. Retrasar el Aciclovir esperando una PCR o una Resonancia Magnética empeora irremediablemente el pronóstico neurocognitivo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, aquí te evalúan el \"reflejo medular\" del infectólogo. Si la viñeta dijera que el niño tiene solo fiebre y rigidez de nuca con PMN altos y glucosa por el piso, piensas en bacterias (Ceftriaxona). Pero si el niño se pone \"loco\" (alteración del lóbulo temporal), convulsiona, y el LCR te sale con linfocitos y SANGRE que no aclara entre los tubos, el herpes le está necrosando y licuando las venas temporales. La RMN (Opción C) mostraría el clásico edema hiperintenso bitemporal asimétrico, pero mandarlo al resonador sin haberle colgado la bolsa de Aciclovir es una negligencia que le costará el lóbulo temporal y la memoria al paciente.",
    keyPoints: [
      "Niño o adulto con fiebre, confusión, alteraciones conductuales y convulsiones focales.",
      "LCR con perfil linfocítico, glucosa normal y presencia anormal de Eritrocitos (LCR xantocrómico/hemorrágico sin trauma).",
      "Encefalitis por Herpes Simple (VHS). El Aciclovir IV es la primera orden médica de emergencia, superando en urgencia a cualquier imagen confirmatoria.",
      "Tema: Neuroinfección / Encefalitis Herpética."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-62",
    university: "UCC",
    examArea: "Medicina Interna / Reumatología",
    topic: "Reumatología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "reumatologia"],
    statement: "Hombre de 68 años con antecedente de Enfermedad Renal Crónica estadio 4 (Tasa de Filtrado Glomerular 22 mL/min). Consulta a urgencias por presentar instauración súbita de dolor 10/10, edema, calor y eritema en la rodilla derecha de 12 horas de evolución. Al examen físico: rodilla a tensión, con impotencia funcional absoluta; febrícula de 37.8°C. Una radiografía de rodilla revela una fina línea radiopaca calcificada que dibuja el contorno del cartílago articular (condrocalcinosis). Se realiza una artrocentesis diagnóstica que extrae líquido sinovial turbio; el citoquímico reporta 35.000 Leucocitos/mmÂ³ con 85% de polimorfonucleares. La microscopía de luz polarizada evidencia la presencia de cristales romboidales con birrefringencia débilmente positiva. Ante este cuadro, ¿cuál es el tratamiento intraarticular o sistémico MÁS apropiado y seguro para resolver la crisis actual?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Artrocentesis evacuadora seguida de inyección intraarticular de un corticosteroide de depósito (ej. Triamcinolona)."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Ibuprofeno a dosis altas (800 mg cada 8 horas) acompañado de un Inhibidor de la Bomba de Protones.",
        distractorProfile: "renal_toxicity_in_ckd",
        incorrectFeedback: "Los AINEs a dosis plenas inhiben la síntesis de prostaglandinas renales; en una ERC estadio 4 causarán isquemia de la arteriola aferente y falla renal aguda sobre crónica de forma inmediata."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar Colchicina vía oral con dosis de carga (1.2 mg seguidos de 0.6 mg), asegurando hidratación agresiva.",
        distractorProfile: "metabolic_accumulation_error",
        incorrectFeedback: "La colchicina se excreta predominantemente por vía renal. En depuraciones < 30 mL/min, usar dosis de carga estándar induce miopatía severa y aplasia medular tóxica letal."
      },
      {
        id: "D",
        label: "D",
        text: "Instaurar Ceftriaxona y Vancomicina intravenosas inmediatamente por diagnóstico de Artritis Séptica, seguido de lavado quirúrgico.",
        distractorProfile: "false_septic_arthritis_alarm",
        incorrectFeedback: "Aunque los cristales y la infección pueden coexistir, la clínica clásica de cristales romboidales y el recuento celular inflamatorio (<50,000) apuntan primariamente a pseudogota; la cirugía es un sobretratamiento masivo."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta una crisis aguda de Pseudogota (Enfermedad por depósito de cristales de Pirofosfato de Calcio Dihidratado - CPPD). Las claves del diagnóstico son: la afectación de una articulación grande (típicamente la rodilla), la radiografía con condrocalcinosis, y el líquido articular confirmatorio (cristales ROMBOIDALES con birrefringencia POSITIVA débil). Aunque la celularidad de 35,000 sugiere un proceso inflamatorio intenso, no cruza el umbral purulento de la artritis séptica (>50k-100k). El dilema aquí es terapéutico: en un paciente con Enfermedad Renal Crónica Estadio 4 (TFGe 22 mL/min), los AINEs y la Colchicina sistémica están **contraindicados** o conllevan toxicidad inaceptable. Al ser una monoartritis pura, la intervención más segura, rápida y efectiva (recomendada por las guías ACR/EULAR) es el vaciamiento del líquido inflamatorio seguido de una inyección intraarticular de glucocorticoides, evitando la toxicidad sistémica en un riñón frágil.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** En reumatología de urgencias, los cristales tienen formas y signos. Gota (ácido úrico): forma de aguja, birrefringencia negativa, en el dedo gordo. Pseudogota (pirofosfato de calcio): forma de rombo, birrefringencia positiva, en la rodilla. Las opciones B y C están diseñadas para que mates el riñón o la médula ósea del paciente; con una TFG de 22, los AINEs le causarán diálisis irreversible al día siguiente, y la colchicina lo intoxicará neuromuscolarmente porque se acumula. La aguja directo en la rodilla con triamcinolona apaga el fuego localmente sin tocar el riñón.",
    keyPoints: [
      "Anciano con monoartritis aguda en rodilla o muñeca.",
      "RX: Condrocalcinosis (calcificación del cartílago).",
      "Líquido sinovial: Cristales ROMBOIDALES, birrefringencia POSITIVA débil.",
      "Pseudogota (CPPD). En pacientes con daño renal (donde AINEs/Colchicina están prohibidos), la infiltración intraarticular con esteroides es el estándar de oro para 1 o 2 articulaciones comprometidas.",
      "Tema: Artritis por Microcristales / Pseudogota."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-63",
    university: "UCC",
    examArea: "Medicina Interna / Hematología",
    topic: "Hematología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "hematologia"],
    statement: "Hombre de 62 años consulta por un cuadro crónico de astenia profunda, diaforesis nocturna y \"picazón insoportable\" (prurito aquagénico) generalizada, la cual se exacerba característicamente minutos después de tomar un baño con agua caliente. Al examen físico: paciente rubicundo (pletórico), con marcada esplenomegalia palpable a 6 cm por debajo del reborde costal izquierdo. Laboratorios de ingreso: Hemoglobina 19.5 g/dL, Hematocrito 59%, Leucocitos 14,500/mmÂ³, Plaquetas 550,000/mmÂ³ (pancitosis leve con eritrocitosis masiva). Los niveles de Eritropoyetina (EPO) sérica se reportan marcadamente suprimidos (< 4 mU/mL). La prueba molecular en sangre periférica es positiva para la mutación JAK2 V617F. Como paciente clasificado de ALTO RIESGO por edad y cifras, ¿cuál es el pilar terapéutico farmacológico y mecánico MÁS indicado para prevenir complicaciones trombóticas mortales?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Flebotomías terapéuticas seriadas como única terapia, manteniendo un hematocrito objetivo < 45%.",
        distractorProfile: "low_risk_therapy_applied_to_high_risk",
        incorrectFeedback: "Excluye la necesidad de citorreducción (Hidroxiurea) y de antiagregación, las cuales son mandatorias en este paciente de alto riesgo (>60 años) para prevenir morbimortalidad trombótica arterial y venosa."
      },
      {
        id: "B",
        label: "B",
        text: "Flebotomías terapéuticas seriadas (meta Hto < 45%) combinadas con Ácido Acetilsalicílico (AAS) a dosis bajas y terapia citorreductora con Hidroxiurea."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar terapia dirigida con Imatinib mesilato de manera indefinida.",
        distractorProfile: "wrong_molecular_target",
        incorrectFeedback: "El Imatinib es un inhibidor de tirosina quinasa dirigido contra la proteína de fusión BCR-ABL (Cromosoma Filadelfia), patognomónica de la Leucemia Mieloide Crónica (LMC), no teniendo actividad terapéutica en la mutación JAK2 de la PV."
      },
      {
        id: "D",
        label: "D",
        text: "Transfusiones de recambio eritrocitario y suplementación profiláctica intensiva con hierro oral para evitar ferropenia secundaria.",
        distractorProfile: "pathophysiological_reversal_trap",
        incorrectFeedback: "El paciente no necesita sangre nueva, necesita evacuar el exceso; además, la ferropenia iatrogénica inducida por las flebotomías es de hecho \"beneficiosa\" en la PV porque frena la formación de nuevos glóbulos rojos; suplementar hierro anulará el efecto de la sangría."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Policitemia Vera (PV), una neoplasia mieloproliferativa crónica caracterizada por la mutación JAK2 (que independiza la producción de glóbulos rojos del estímulo de la eritropoyetina, de ahí la EPO suprimida). La complicación primaria y causa de muerte es la hiperviscosidad sanguínea que produce trombosis masivas (ACV, IAM, trombosis esplácnica). El paciente se clasifica como de **Alto Riesgo** (por tener > 60 años o antecedente de trombosis). En pacientes de bajo riesgo, las flebotomías (sangrías) con meta de Hematocrito < 45% más Aspirina (AAS) a bajas dosis son suficientes. Pero en pacientes de ALTO RIESGO, las guías internacionales hematológicas exigen la adición de una terapia citorreductora para frenar la médula ósea, siendo la **Hidroxiurea** el fármaco de primera línea de elección.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, en la Policitemia Vera, el agua caliente de la ducha desgranula los mastocitos y basófilos clonales, liberando histamina a chorros que enloquece al paciente con picor (prurito aquagénico). Tienes que saber diferenciar la terapia según el riesgo. Si el paciente tuviera 45 años, la opción A (sangrías y aspirina sola) sería correcta. Pero al tener más de 60, su riesgo trombótico se dispara exponencialmente; si no le das la Hidroxiurea, hará un ACV a pesar de las flebotomías. ¿Por qué Imatinib (Opción C) es incorrecta? Porque Imatinib es la bala mágica del cromosoma Filadelfia (t9;22) en la Leucemia Mieloide Crónica, no del gen JAK2 de la Policitemia.",
    keyPoints: [
      "Paciente rubicundo con prurito post-ducha caliente y esplenomegalia.",
      "Hemoglobina/Hematocrito muy elevados con Eritropoyetina (EPO) suprimida y JAK2 positivo.",
      "Criterios de Alto Riesgo (> 60 años o historia de coágulos).",
      "Policitemia Vera de Alto Riesgo. La triada terapéutica es: Sangrías (Hto <45%) + Aspirina + Hidroxiurea.",
      "Tema: Neoplasias Mieloproliferativas / Policitemia Vera."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-64",
    university: "UCC",
    examArea: "Pediatría / Neonatología / Cirugía",
    topic: "Neonatología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neonatologia", "cirugia"],
    statement: "Se atiende el parto vaginal de un neonato masculino a las 38 semanas de edad gestacional; embarazo mal controlado, sin ecografías prenatales. Inmediatamente al nacer, el equipo de reanimación observa que el niño presenta un defecto de la pared abdominal supraumbilical derecho de 4 cm. A través de este defecto, se observa la protrusión franca de asas intestinales gruesas y edematizadas flotando libremente, careciendo por completo de cualquier membrana, saco o peritoneo que las recubra. El cordón umbilical se encuentra intacto a la izquierda del defecto. El neonato inicia con esfuerzo respiratorio adecuado y FC > 100 lpm. Para evitar una cascada de complicaciones letales intraoperatorias, ¿cuál es el paso INMEDIATO crítico en la sala de partos para el manejo de las asas expuestas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cubrir las asas exclusivamente con compresas secas estériles para evitar la maceración de la mucosa y preparar traslado a UCI.",
        distractorProfile: "destructive_mechanical_dressing",
        incorrectFeedback: "Los apósitos secos se adhieren al peritoneo inflamado de las asas; al retirarlos se producirá desgarro de la serosa, sangrado y perforaciones microscópicas, además de no prevenir la evaporación térmica y de fluidos."
      },
      {
        id: "B",
        label: "B",
        text: "Cubrir las asas intestinales expuestas con apósitos estériles embebidos en solución salina tibia e introducirlas inmediatamente dentro de una bolsa plástica estéril (silo improvisado)."
      },
      {
        id: "C",
        label: "C",
        text: "Ejercer compresión manual directa sobre las asas para reducirlas inmediatamente hacia la cavidad abdominal antes de que se edematicen más.",
        distractorProfile: "lethal_compartment_syndrome",
        incorrectFeedback: "La cavidad abdominal del feto no se desarrolló adecuadamente por la herniación (pérdida de domicilio). Reducir a la fuerza las asas generará un Síndrome Compartimental Abdominal súbito, con colapso diafragmático, asfixia y caída fatal del gasto cardíaco."
      },
      {
        id: "D",
        label: "D",
        text: "No cubrir las asas, mantenerlas expuestas al calor de la cuna radiante para evitar la colonización bacteriana por apósitos húmedos.",
        distractorProfile: "catastrophic_dehydration",
        incorrectFeedback: "El calor directo de la cuna radiante sobre las asas desnudas actuará como un horno, evaporando todo el líquido extracelular y necrosando (quemando) el tejido mesentérico irreversiblemente."
      }
    ],
    correctOptionId: "B",
    explanation: "El neonato presenta una Gastrosquisis, un defecto de la pared abdominal congénito donde los intestinos protruyen libremente (sin saco) a través de un orificio típicamente localizado a la derecha del ombligo. Debido a la falta de cobertura de las asas, el líquido intravascular, la temperatura y las proteínas se evaporan masivamente hacia el ambiente, causando hipotermia, choque hipovolémico y necrosis por desecación en cuestión de minutos. La regla de oro en sala de partos es la protección mecánica y térmica inmediata: las asas deben envolverse en gasas/apósitos humedecidos con solución salina tibia, y todo el hemicuerpo inferior del neonato (incluyendo el defecto) debe envolverse en una bolsa plástica estéril transparente (una bolsa de recolección de fluidos o silo) para atrapar el calor y la humedad, prevenir la infección e iniciar hidratación agresiva intravenosa.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, esta es una pregunta de maniobras físicas de supervivencia. La gastrosquisis no tiene \"paracaídas\" (el saco del onfalocele). Las tripas están literalmente sudando litros de plasma hacia la sala de partos. Si pones gasas secas (Opción A), la gasa se pegará a la serosa del intestino, arrancándola cuando el cirujano intente retirarla. Si fuerzas el intestino hacia adentro con tus manos (Opción C), aumentarás súbitamente la presión intraabdominal, colapsando la vena cava inferior y provocando un paro cardíaco instantáneo por falta de retorno venoso (Síndrome Compartimental Abdominal). Moja, envuelve en plástico y reanima con líquidos.",
    keyPoints: [
      "Defecto de pared abdominal en neonato CON asas flotando libres y SIN saco (Gastrosquisis).",
      "(Diferenciar de Onfalocele: defecto central, por el ombligo, asas envueltas en un saco de amnios brillante).",
      "Manejo agudo en sala de partos.",
      "Prevenir hipotermia y desecación intestinal (Bolsa plástica o Silo + apósitos salinos tibios). Jamás comprimir ni forzar el intestino hacia adentro en la sala.",
      "Tema: Defectos de Pared Abdominal / Gastrosquisis."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-65",
    university: "UCC",
    examArea: "Medicina Interna / Nefrología / Toxicología",
    topic: "Nefrología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "nefrologia", "toxicologia"],
    statement: "Mujer de 22 años, estudiante universitaria, es traída por sus compañeros de cuarto al servicio de urgencias en estado de confusión mental, agitación, fiebre leve y respiración marcadamente profunda y rápida (hiperventilación). Sus amigos refieren que ha estado sometida a mucho estrés académico y encontraron un frasco vacío de pastillas en su escritorio. Signos vitales: PA 110/68 mmHg, FC 122 lpm, FR 38 rpm, SatO2 98%. Los gases arteriales reportan los siguientes valores: pH 7.43, PaCO2 18 mmHg, HCO3 12 mEq/L, PaO2 105 mmHg. Electrolitos: Sodio 140 mEq/L, Cloro 102 mEq/L, Potasio 3.6 mEq/L. Brecha Aniónica (Anion Gap) calculada de 26 mEq/L. ¿Cuál es el diagnóstico toxicológico MÁS probable y el mecanismo fisiopatológico del trastorno ácido-base mixto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Intoxicación por Etilenglicol; causa acidosis láctica masiva con compensación respiratoria hiperactiva pura.",
        distractorProfile: "single_disorder_trap",
        incorrectFeedback: "El etilenglicol (anticongelante) produce una Acidosis Metabólica severa pura con Anion Gap muy alto (y gap osmolar alto), y la baja de CO2 es netamente compensatoria. El pH resultante siempre es ácido (<7.35), no se queda normal/alcalótico en 7.43."
      },
      {
        id: "B",
        label: "B",
        text: "Intoxicación por Salicilatos (Aspirina); causa inicialmente una alcalosis respiratoria primaria por estimulación del centro bulbar, combinada con una acidosis metabólica primaria de anión gap elevado."
      },
      {
        id: "C",
        label: "C",
        text: "Intoxicación por Benzodiacepinas; causa acidosis respiratoria primaria enmascarada por alcalosis metabólica severa por vómitos.",
        distractorProfile: "opposite_respiratory_effect",
        incorrectFeedback: "Las benzodiacepinas deprimen fuertemente el centro respiratorio, produciendo hipoventilación profunda con ACIDOSIS respiratoria (PaCO2 alta, > 50 mmHg), todo lo opuesto a la taquipnea y PaCO2 de 18 que presenta la paciente."
      },
      {
        id: "D",
        label: "D",
        text: "Intoxicación por Metanol; causa cetoacidosis pura por inhibición de la alcohol deshidrogenasa, elevando el pH sanguíneo transitoriamente.",
        distractorProfile: "mechanistic_error_methanol",
        incorrectFeedback: "El metanol genera ácido fórmico y produce acidosis metabólica grave pura de anión gap alto (no cetoacidosis pura, ni alcalosis respiratoria), dejando el pH invariablemente desplomado (< 7.20)."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un trastorno ácido-base MIXTO característico y patognomónico de la intoxicación por Salicilatos (Aspirina): pH casi normal (7.43) engañoso, que es producto del choque entre dos fuerzas primarias independientes. Por un lado, una PaCO2 excesivamente baja (18 mmHg) que indica una Alcalosis Respiratoria primaria (el ácido acetilsalicílico estimula de forma directa el centro respiratorio del tronco encefálico forzando hiperventilación). Por otro lado, un HCO3 bajísimo (12 mEq/L) con un Anión Gap francamente elevado (26 mEq/L), lo que indica una Acidosis Metabólica primaria paralela (secundaria a la acumulación de ácidos orgánicos por desacoplamiento de la fosforilación oxidativa celular). El tratamiento exige alcalinización urinaria y sérica con Bicarbonato de Sodio y, en casos de disfunción neurológica o renal grave, hemodiálisis.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Para leer bien los gases arteriales en el examen, usa la fórmula de Winters. En una acidosis metabólica simple, por cada punto que baja el bicarbonato, el CO2 debería bajar 1.2 puntos por hiperventilación compensatoria. Aquí, el bicarbonato bajó 12 puntos; el CO2 esperado debería ser ~26. Sin embargo, el CO2 está en 18 (mucho más barrido de lo normal). Esto significa que la hiperventilación no es solo \"compensación\", sino que hay un problema primario hiperventilando el tórax independientemente del bicarbonato. La Aspirina cruza al bulbo raquídeo y prende el centro respiratorio como un motor a fondo. Un pH normal escondiendo dos trastornos masivos es el sello toxicológico de los salicilatos.",
    keyPoints: [
      "Adulto o joven con hiperventilación primaria, confusión y tinnitus (zumbido de oídos).",
      "Gases con pH engañosamente normal (7.40 - 7.45), pero con PCO2 muy baja Y HCO3 muy bajo + Anion Gap ALTO.",
      "Intoxicación por Salicilatos (Aspirina). El diagnóstico lo sella la presencia dual de Alcalosis Respiratoria + Acidosis Metabólica. Tratamiento: Alcalinización con Bicarbonato de Sodio.",
      "Tema: Trastornos Ácido-Base / Toxicología."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-66",
    university: "UCC",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "urgencias"],
    statement: "Hombre de 55 años, previamente sano y deportista recreativo, es evaluado en urgencias por un episodio de dolor torácico retroesternal difuso ocurrido hace 24 horas que resolvió espontáneamente. Al momento del examen, el paciente se encuentra completamente asintomático, normotenso (120/75 mmHg) y bien prefundido. Se realiza un electrocardiograma de 12 derivaciones (ECG) para protocolo de dolor torácico, el cual revela: Presencia de ondas P sinusales a 70 lpm. Llama la atención que el intervalo PR se va alargando progresivamente latido a latido (de 200 ms a 280 ms y luego a 340 ms), hasta que súbitamente una onda P no es seguida por un complejo QRS. El ciclo vuelve a iniciar inmediatamente después de la pausa. ¿Cuál es el diagnóstico electrocardiográfico y la conducta médica indicada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Bloqueo Auriculoventricular de 3er grado (Completo); requiere implantación urgente de marcapasos transvenoso.",
        distractorProfile: "wrong_ecg_interpretation",
        incorrectFeedback: "En el bloqueo de 3er grado existe una disociación AV completa; los intervalos PP son regulares y los RR son regulares, pero no guardan ninguna relación entre sí, y nunca se observa un patrón de alargamiento progresivo del PR."
      },
      {
        id: "B",
        label: "B",
        text: "Bloqueo Auriculoventricular de 2do grado tipo Mobitz II; requiere vigilancia estricta y posible marcapasos definitivo por alto riesgo de progresión a asistolia.",
        distractorProfile: "malignant_block_confusion",
        incorrectFeedback: "El Mobitz II se caracteriza por intervalos PR constantes y fijos antes del latido bloqueado, reflejando una enfermedad estructural del Haz de His o fibras de Purkinje, no la fatiga del nodo AV descrita en el Wenckebach."
      },
      {
        id: "C",
        label: "C",
        text: "Bloqueo Auriculoventricular de 2do grado tipo Mobitz I (Wenckebach); al ser asintomático, requiere solo observación y alta médica, ya que tiene un curso benigno."
      },
      {
        id: "D",
        label: "D",
        text: "Ritmo de la unión auriculoventricular con escapes ventriculares; iniciar Atropina IV para aumentar el cronotropismo intrínseco.",
        distractorProfile: "wrong_rhythm_and_symptomatic_error",
        incorrectFeedback: "Un ritmo de la unión suele no mostrar ondas P o mostrarlas retrógradas invertidas. Además, administrar atropina a un paciente completamente normotenso y asintomático carece de indicación clínica."
      }
    ],
    correctOptionId: "C",
    explanation: "El trazado describe clásicamente un Bloqueo Auriculoventricular de segundo grado, tipo Mobitz I (Fenómeno de Wenckebach). El signo electrocardiográfico cardinal es el alargamiento progresivo del intervalo PR antes del latido \"ausente\" o bloqueado, indicando una fatiga progresiva y benigna del nodo AV. Este bloqueo es frecuente en atletas por alto tono vagal, durante el sueño o posterior a infartos de cara inferior (por isquemia transitoria del nodo). La característica primordial del Mobitz I es que es fisiológicamente benigno y rara vez progresa a un bloqueo completo. Según las guías de la AHA/ACC, si el paciente está hemodinámicamente estable y asintomático, no requiere ninguna intervención farmacológica (atropina) ni eléctrica (marcapasos); la observación o el alta con control ambulatorio es la conducta correcta.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un bloqueo de libro de texto, Colega. La trampa del Mobitz I es hacer creer al médico general que el corazón se \"apagó\" en la pausa, induciendo pánico. Si el PR es fijo (siempre mide lo mismo) y de repente cae una P, eso es Mobitz II (lesión infranodal, maligna, requiere marcapasos). Pero si el PR \"avisa\" que se va a fatigar haciéndose cada vez más largo (Mobitz I), es un bloqueo protector benigno. Atropina solo se usa si, durante la bradicardia, el paciente hace hipotensión severa o se desmaya, situación ausente en nuestra viñeta asintomática.",
    keyPoints: [
      "Alargamiento PROGRESIVO del PR hasta que una onda P se bloquea (se queda \"huérfana\").",
      "Paciente sin inestabilidad hemodinámica ni mareos/síncope.",
      "Bloqueo AV de 2do grado tipo Mobitz I (Wenckebach). Localizado en el nodo AV, es suprahisiano y benigno. No requiere marcapasos; solo observación.",
      "Tema: Arritmias / Bloqueos Auriculoventriculares."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-67",
    university: "UCC",
    examArea: "Pediatría / Cardiología / Neonatología",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "cardiologia", "neonatologia"],
    statement: "Neonato masculino de 7 días de vida es traído al servicio de urgencias por sus padres en estado de choque profundo. Refieren que el niño estuvo \"perfecto\" hasta ayer, cuando comenzó con rechazo a la lactancia, somnolencia extrema y palidez. Al examen físico: letárgico, taquipneico (FR 65 rpm), PA en brazo derecho de 75/40 mmHg. Llama la atención que la piel del tronco superior luce rosada, pero de la pelvis hacia abajo se observa franca cianosis periférica con retardo del llenado capilar (> 5 segundos). Los pulsos radiales y braquiales son fuertes y saltones, mientras que los pulsos femorales y pedios son filiformes y virtualmente impalpables. ¿Cuál es el diagnóstico subyacente que precipitó este cuadro fulminante a los 7 días de vida y el tratamiento agudo de elección?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Sepsis neonatal tardía por *Listeria monocytogenes*; tratamiento es choque de líquidos e infusión de Ampicilina.",
        distractorProfile: "common_neonatal_shock_overlap",
        incorrectFeedback: "Aunque la sepsis neonatal produce choque letárgico, NO explica la profunda discrepancia mecánica regional entre los pulsos saltones de miembros superiores y la impalpabilidad/cianosis exclusiva de miembros inferiores."
      },
      {
        id: "B",
        label: "B",
        text: "Coartación de la Aorta crítica desenmascarada por el cierre del ductus arterioso; la intervención inmediata es la infusión intravenosa de Prostaglandina E1 (Alprostadil)."
      },
      {
        id: "C",
        label: "C",
        text: "Persistencia del Conducto Arterioso masivo; el tratamiento de urgencia es el cierre farmacológico con Indometacina o Ibuprofeno.",
        distractorProfile: "fatal_physiologic_reversal",
        incorrectFeedback: "En la coartación crítica, el paciente depende del conducto abierto para vivir (circulación sistémica ductus-dependiente). Cerrar el ductus con AINEs desencadena choque refractario visceral inmediato por obstrucción aórtica total distal."
      },
      {
        id: "D",
        label: "D",
        text: "Hipoplasia del Corazón Izquierdo; requiere administración profiláctica de surfactante y ventilación invasiva para reducir la carga de trabajo derecho.",
        distractorProfile: "wrong_heart_lesion_management",
        incorrectFeedback: "La hipoplasia del corazón izquierdo también es dependiente del ductus y causa choque, pero presenta pulsos disminuidos universalmente (en brazos y piernas), y el surfactante no ejerce ningún efecto hemodinámico."
      }
    ],
    correctOptionId: "B",
    explanation: "El neonato cursa con una presentación severa clásica de Coartación de Aorta yuxtaductal crítica. Al nacimiento, estas lesiones obstructivas severas del arco aórtico pasan desapercibidas (\"perfecto los primeros días\") porque el Conducto Arterioso (Ductus) fetal se mantiene permeable, proveyendo un cortocircuito \"salvavidas\" que lleva sangre desde la arteria pulmonar hacia la aorta descendente (brindando flujo a las piernas e intestinos, aunque desoxigenada, explicando la cianosis diferencial pélvica). Entre el día 3 y 10 de vida, el ductus se cierra anatómicamente. Al cerrarse la única vía de escape, la obstrucción aórtica total desenmascara el choque cardiogénico: hiperperfusión de extremidades superiores (pulsos saltones, HTA) e hipoperfusión extrema del hemicuerpo inferior (pulsos femorales ausentes, cianosis pélvica, falla renal y falla intestinal). El rescate de urgencia absoluto es la infusión de **Prostaglandina E1** para forzar la reapertura del conducto arterioso, devolviendo el flujo a los órganos vitales mientras se lleva al niño a cirugía correctiva.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** En cardiología pediátrica, \"pulsos femorales ausentes\" es coartación aórtica hasta probar lo contrario. Fíjate en la magia de la fisiopatología: el niño no está infectado, su choque es obstructivo puro porque la \"llave de paso\" se cerró. Si crees que es solo un conducto que no cerró y le pones Indometacina (Opción C), cometes un asesinato clínico: sellarás definitivamente el poco ductus que queda, cortando el 100% de la sangre a los riñones, intestino e hígado, matando al bebé en menos de una hora. El Alprostadil (PGE1) derrite el músculo del ductus, reabriendo la compuerta de escape.",
    keyPoints: [
      "Neonato de 1 a 2 semanas de vida que colapsa de forma súbita con choque cardiogénico.",
      "Diferencia franca de pulsos/presión: Fuertes arriba (brazos), débiles o ausentes abajo (femorales).",
      "Cardiopatía congénita dependiente del conducto (Coartación de Aorta / Interrupción de Arco Aórtico). Choque desatado por cierre del Ductus. El tratamiento empírico de soporte vital innegociable es Prostaglandina E1.",
      "Tema: Cardiopatías Congénitas / Coartación de Aorta."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-68",
    university: "UCC",
    examArea: "Medicina Interna / Gastroenterología / Reumatología",
    topic: "Gastroenterología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "reumatologia"],
    statement: "Mujer de 52 años acude a consulta por fatiga profunda e incapacitante de 6 meses de evolución, asociada a un cuadro de prurito generalizado severo, predominantemente nocturno, que no responde a antihistamínicos. Al examen físico se documentan xantelasmas en los párpados superiores, áreas de hiperpigmentación por rascado crónico (excoriaciones) en extremidades y hepatomegalia lisa a 3 cm bajo el reborde costal. Los laboratorios revelan: Fosfatasa Alcalina 850 U/L (marcadamente elevada), GGT 620 U/L, AST 55 U/L, ALT 45 U/L, Bilirrubina Total 1.2 mg/dL. Un perfil de autoinmunidad reporta la presencia de **Anticuerpos Mitocondriales (AMA)** positivos en un título de 1:320. La ecografía de vías biliares no muestra dilatación ni cálculos. ¿Cuál es la intervención terapéutica farmacológica de PRIMERA LÍNEA capaz de retrasar la progresión histológica de esta enfermedad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar corticosteroides a altas dosis asociados a Azatioprina para suprimir la respuesta autoinmune portal.",
        distractorProfile: "overlapping_autoimmune_hepatitis_trap",
        incorrectFeedback: "La corticoterapia sistémica NO altera la supervivencia libre de trasplante en la Colangitis Biliar Primaria (a diferencia de la Hepatitis Autoinmune pura) y su uso crónico exacerba profundamente la osteoporosis severa secundaria a la malabsorción de calcio propia de la colestasis."
      },
      {
        id: "B",
        label: "B",
        text: "Prescribir Ácido Ursodesoxicólico (UDCA) oral de forma crónica, idealmente a una dosis de 13 a 15 mg/kg/día."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar recambio plasmático (plasmaféresis) y prescribir Colestiramina para controlar el prurito biliar refractario.",
        distractorProfile: "symptomatic_focus_ignoring_disease_modifier",
        incorrectFeedback: "La colestiramina es un tratamiento coadyuvante muy útil para atrapar sales biliares en el intestino y aliviar el prurito, pero no frena en absoluto la destrucción inmunológica del conducto biliar intrahepático lograda por el UDCA."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar tratamiento empírico con Tenofovir o Entecavir por sospecha de coinfección por hepatitis viral oculta.",
        distractorProfile: "wrong_hepatopathy_etiology",
        incorrectFeedback: "Las hepatitis crónicas virales (B y C) causan predominantemente un patrón hepatocelular (elevación de AST/ALT), carecen de xantomas primarios y nunca inducen la aparición de los anticuerpos mitocondriales que sellan la CBP."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta la descripción de texto de la **Colangitis Biliar Primaria** (CBP, antiguamente Cirrosis Biliar Primaria). Es una enfermedad autoinmune del hígado que ataca los conductos biliares intrahepáticos pequeños. Afecta típicamente a mujeres de mediana edad. Su presentación cardinal incluye fatiga extrema, prurito y patrón de colestasis disociada (Fosfatasa Alcalina y GGT por las nubes con bilirrubina normal en etapas tempranas) e hipercolesterolemia con xantomas/xantelasmas. El hallazgo de laboratorio pivote y patognomónico es la positividad a **Anticuerpos Mitocondriales (AMA)** en más del 90-95% de las pacientes. El único fármaco de primera línea comprobado para mejorar los parámetros bioquímicos, retrasar la progresión a cirrosis, prevenir várices y extender el tiempo libre de trasplante es el **Ácido Ursodesoxicólico (UDCA)**.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Punto para diferenciar las hepatopatías autoinmunes, Colega. Si el paciente tiene las transaminasas (AST/ALT) en 1.000 y anticuerpos Anti-Músculo Liso (ASMA) positivos, eso es Hepatitis Autoinmune y se trata con Esteroides + Azatioprina (Opción A). Pero si el paciente tiene las enzimas biliares (Fosfatasa Alcalina/GGT) en 1.000 y anticuerpos Antimitocondriales (AMA), eso es Colangitis Biliar Primaria y su único salvavidas es el Ácido Ursodesoxicólico. Este ácido es un ácido biliar hidrofílico y protector que desplaza a los ácidos biliares tóxicos (litocólico), desinflamando el conductillo hepático desde adentro.",
    keyPoints: [
      "Mujer de mediana edad con fatiga, prurito insoportable y patrón colestásico (Fosfatasa Alcalina altísima).",
      "Ecografía de vías biliares completamente normal (la obstrucción es micro-intrahepática).",
      "Anticuerpos Mitocondriales (AMA) fuertemente positivos.",
      "Colangitis Biliar Primaria (CBP). Fármaco modificador de la enfermedad: Ácido Ursodesoxicólico (UDCA). Los esteroides no sirven.",
      "Tema: Hepatopatías Autoinmunes / Colangitis Biliar Primaria."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-69",
    university: "UCC",
    examArea: "Medicina Interna / Infectología / Neumología",
    topic: "Infectología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "infectologia", "neumologia"],
    statement: "Hombre de 42 años con diagnóstico de infección por VIH y nulo seguimiento médico (desconoce CD4 y carga viral actuales). Ingresa a urgencias por un cuadro de instauración gradual de 3 semanas de tos seca exigente, disnea de medianos a pequeños esfuerzos y fiebre vespertina progresiva. Al examen físico: luz taquipneico (FR 26 rpm), sin uso marcado de accesorios. A la auscultación, los campos pulmonares carecen de estertores o sibilancias francas. Una radiografía de tórax reporta opacidades reticulonodulares difusas bilaterales finas (\"vidrio esmerilado\") predominantemente perihiliares. Se realiza prueba de gases arteriales con el paciente respirando aire ambiente, la cual revela: pH 7.42, PaCO2 35 mmHg, y una **PaO2 de 62 mmHg**, calculándose una gradiente alvéolo-arterial de oxígeno (A-a) de 45 mmHg. Se sospecha Neumonía por *Pneumocystis jirovecii*. ¿Cuál es la terapia dual OBLIGATORIA de inicio para disminuir el riesgo de falla ventilatoria y muerte?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Trimetoprima-Sulfametoxazol (TMP-SMX) intravenosa a altas dosis asociada a Corticosteroides sistémicos (Prednisona)."
      },
      {
        id: "B",
        label: "B",
        text: "Pentamidina intravenosa exclusiva, reservando los esteroides solo si se confirma coinfección bacteriana.",
        distractorProfile: "second_line_antibiotic_trap",
        incorrectFeedback: "La pentamidina es un fármaco de segunda línea reservado estrictamente para pacientes con alergia severa/anafilaxia documentada a las sulfas o fallo al TMP-SMX, y su uso aislado no suprime la inflamación alveolar letal inicial."
      },
      {
        id: "C",
        label: "C",
        text: "Trimetoprima-Sulfametoxazol (TMP-SMX) combinada con Clindamicina-Primaquina, diferiendo esteroides por riesgo de superinfección inmunosupresora.",
        distractorProfile: "double_antibiotic_no_steroids",
        incorrectFeedback: "Clindamicina-Primaquina es otra opción de segunda línea, no se combina con TMP-SMX. Retrasar u omitir los corticosteroides ante una PaO2 de 62 mmHg garantiza un deterioro agudo hacia intubación y ventilación mecánica prolongada."
      },
      {
        id: "D",
        label: "D",
        text: "Caspofungina asociada a Anfotericina B liposomal debido a la naturaleza fúngica intrínseca del agente patógeno.",
        distractorProfile: "taxonomic_antifungal_error",
        incorrectFeedback: "Aunque *Pneumocystis jirovecii* es taxonómicamente un hongo atípico, su membrana carece de ergosterol, lo que lo hace completamente resistente a los antifúngicos tradicionales (como azoles, polienos y equinocandinas); responde a agentes antiprotozoarios/antibacterianos."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con una Neumonía por *Pneumocystis jirovecii* (PCP), la infección oportunista pulmonar marcadora del VIH (CD4 < 200). La droga antimicrobiana de primera línea y estándar de oro para el tratamiento agudo es el Trimetoprima-Sulfametoxazol a dosis altas. Sin embargo, el detalle crítico de supervivencia de esta viñeta radica en los gases arteriales. Cuando los antibióticos empiezan a matar los hongos de *Pneumocystis* en el alvéolo, la lisis fúngica genera una tormenta inflamatoria masiva que empeora agudamente la oxigenación y precipita SDRA y falla ventilatoria. Para prevenir este \"efecto rebote\" fatal, las guías establecen como mandato universal que los corticosteroides sistémicos deben iniciarse *junto* al antibiótico en todos los pacientes que presenten Criterios de Severidad Hipóxica: **PaO2 < 70 mmHg al aire ambiente** (el paciente tiene 62 mmHg) o una **Gradiente A-a de oxígeno â‰¥ 35 mmHg** (el paciente tiene 45 mmHg).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Los esteroides en la medicina interna siempre son un arma de doble filo, pero en la PCP severa son un mandato divino. El médico novato teme usar corticoides (inmunosupresores) en un paciente con SIDA y falla respiratoria (Opción C), pensando que agravará la infección. El problema es que el *Pneumocystis* muerto inflama el alvéolo de tal manera que el paciente morirá de SDRA en las primeras 48 horas de hospitalización. Si el gas arterial te bota una PaO2 por debajo de 70, la Prednisona debe pasarse el Día 1, Minuto 1 junto al antibiótico (TMP-SMX).",
    keyPoints: [
      "Paciente con VIH/SIDA e infiltrados pulmonares en \"vidrio esmerilado\".",
      "Gases arteriales (aire ambiente) que reportan: PaO2 < 70 mmHg O Gradiente alvéolo-arterial â‰¥ 35 mmHg.",
      "Neumonía por Pneumocystis Severa. El tratamiento exige el inicio simultáneo de TMP-SMX y Corticosteroides (Prednisona 40mg cada 12h) para evitar la muerte por inflamación de lisis.",
      "Tema: Infecciones Oportunistas en VIH / Neumonía PCP."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-70",
    university: "UCC",
    examArea: "Pediatría / Endocrinología",
    topic: "Endocrinología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "endocrinologia"],
    statement: "Niña de 6 años y 6 meses es llevada a consulta por su madre, quien ha notado en las últimas semanas la aparición progresiva de \"botón mamario\" bilateral doloroso y la presencia de vello púbico incipiente. Adicionalmente, el pediatra documenta un aumento repentino en la velocidad de crecimiento (estirón). Se solicita una radiografía de carpograma (edad ósea), la cual reporta una maduración esquelética correspondiente a una niña de 9 años (francamente adelantada). Se realiza una prueba de estimulación con Análogo de la Hormona Liberadora de Gonadotropinas (GnRH), y se observa un pico masivo de secreción de Hormona Luteinizante (LH) superior a 5 UI/L (patrón puberal/maduro). Ante el diagnóstico de Pubertad Precoz Central (dependiente de gonadotropinas), ¿cuál es el PASO DIAGNÓSTICO ESTÁNDAR DE ORO y obligatorio antes de iniciar el tratamiento inhibidor de la pubertad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ecografía pélvica de alta resolución para descartar un tumor de células de la granulosa ovárico secretor de estrógenos.",
        distractorProfile: "wrong_puberty_origin_test",
        incorrectFeedback: "La ecografía pélvica es el paso inicial para la pubertad precoz PERIFÉRICA (gonadotropinas bajas/suprimidas). En este caso, la LH elevada confirma que el origen de la señal está en el cerebro (pubertad central), haciendo mandatoria la RMN de cráneo."
      },
      {
        id: "B",
        label: "B",
        text: "Resonancia Magnética (RMN) cerebral contrastada para descartar una masa estructural del sistema nervioso central (Hamartoma hipotalámico)."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar manejo inmediato y empírico con Leuprorelina (Análogo de GnRH) de depósito y diferir imágenes por seguridad.",
        distractorProfile: "premature_treatment_trap",
        incorrectFeedback: "Retrasar la neuroimagen para iniciar el bloqueo farmacológico es un grave error; la causa de la pubertad podría ser un glioma óptico, astrocitoma o hamartoma que requiere abordaje neuroquirúrgico urgente antes que el bloqueo hormonal."
      },
      {
        id: "D",
        label: "D",
        text: "Biopsia endometrial para evaluación de receptores estrogénicos activos y riesgo de sangrado temprano.",
        distractorProfile: "useless_invasive_test",
        incorrectFeedback: "La biopsia endometrial no tiene ninguna indicación en el algoritmo de pubertad precoz infantil; el desarrollo endometrial se infiere clínicamente y por ecografía pélvica básica, nunca con intervenciones cruentas."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una Pubertad Precoz (desarrollo de caracteres sexuales secundarios en niñas antes de los 8 años). Al documentarse un botón mamario (activación ovárica), un aumento de la velocidad de crecimiento y, fundamentalmente, una respuesta francamente positiva/puberal de la hormona LH al estímulo con GnRH, se confirma categóricamente que se trata de una **Pubertad Precoz Central (PPC)** o Verdadera. Esto significa que el eje Hipotálamo-Hipófisis-Gónadas se activó prematuramente de forma idéntica a la fisiología normal. Aunque la mayoría de las PPC en niñas son \"idiopáticas\", una proporción importante se debe a tumores o malformaciones del SNC, siendo el **Hamartoma Hipotalámico** la causa tumoral más frecuente. Las guías endocrinológicas exigen OBLIGATORIAMENTE realizar una Resonancia Magnética Cerebral en toda niña con Pubertad Precoz Central confirmada (especialmente si es menor de 6-7 años) antes de iniciar los análogos de GnRH, para no enmascarar un tumor de cráneo que podría requerir abordaje neuroquirúrgico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Para no perder puntos aquí, Colega, debes tener muy clara la diferencia entre pubertad periférica y central. Si la pubertad fuera periférica (LH baja o inhibida tras estímulo), el estrógeno viene del ovario y pedirías una ecografía pélvica (Opción A). Pero como la LH respondió fuerte, el eje hipotálamo-hipofisario está encendido. En niñas menores de 8 años, la causa más temida de encender el hipotálamo es una masa, siendo el hamartoma la principal. No puedes bloquear la pubertad a ciegas (Opción C) sin estar seguro de que no hay un tumor creciendo en el cerebro. La biopsia endometrial (Opción D) es inútil, el estrógeno de una pubertad temprana no es indicación para invadir el útero.",
    keyPoints: [
      "Niña menor de 8 años con Telarquia (mamas) o niño menor de 9 con aumento testicular.",
      "Edad ósea adelantada + LH basal o tras estímulo con GnRH francamente ALTA (Patrón Central).",
      "Pubertad Precoz Central. El estudio imagenológico INEXCUSABLE y OBLIGATORIO de la vía es la Resonancia Magnética (RMN) del cerebro/hipotálamo para buscar Hamartomas.",
      "Tema: Pubertad Precoz Pediátrica."
    ]
  }
];

