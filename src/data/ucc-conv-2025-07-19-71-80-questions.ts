import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC â€” EdiciÃ³n #3 (19 jul 2025) Â· Preguntas #71â€“#80.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_71_80_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-71",
    university: "UCC",
    examArea: "Medicina Interna / NeumologÃ­a / ReumatologÃ­a",
    topic: "NeumologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neumologia", "reumatologia"],
    statement: "Mujer de 52 aÃ±os, con Artritis Reumatoide activa severa refractaria a Metotrexato y Leflunomida. Su reumatÃ³logo decide iniciar terapia biolÃ³gica con un inhibidor del Factor de Necrosis Tumoral alfa (Infliximab). Por protocolo, se le realiza tamizaje para Tuberculosis (TB). La paciente se encuentra completamente asintomÃ¡tica, sin tos ni pÃ©rdida de peso. La radiografÃ­a de tÃ³rax es estrictamente normal. Sin embargo, la prueba de liberaciÃ³n de interferÃ³n gamma (IGRA - QuantiFERON-TB) reporta un resultado francamente POSITIVO. Â¿CuÃ¡l es la conducta OBLIGATORIA a seguir antes de poder administrar la primera dosis del agente biolÃ³gico anti-TNF?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Considerar el resultado como un falso positivo por la autoinmunidad cruzada de la AR, e iniciar el Infliximab de inmediato bajo vigilancia clÃ­nica.",
        distractorProfile: "deadly_biological_ignorance",
        incorrectFeedback: "Ignorar un IGRA positivo en el contexto de terapia anti-TNF condena a la paciente a una reactivaciÃ³n por tuberculosis diseminada o miliar de alta letalidad, ya que el TNF es indispensable para la integridad del granuloma."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar profilaxis con Isoniazida (con piridoxina) por 9 meses o Rifampicina por 4 meses, y diferir el inicio del Infliximab al menos por 1 mes tras haber empezado la profilaxis."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar esquema tetraconjugado antituberculoso completo (Isoniazida, Rifampicina, Pirazinamida y Etambutol - HRZE) simultÃ¡neamente con el Infliximab para mÃ¡xima protecciÃ³n.",
        distractorProfile: "over_treatment_for_active_tb",
        incorrectFeedback: "El esquema HRZE se reserva exclusivamente para la Tuberculosis Activa. Darlo de forma empÃ­rica y profilÃ¡ctica a una ITBL somete a la paciente a un riesgo cuÃ¡druple e innecesario de hepatotoxicidad severa."
      },
      {
        id: "D",
        label: "D",
        text: "Repetir el tamizaje con Prueba de Tuberculina (PPD); si resulta negativa (< 5 mm), se descarta la TB latente y se inicia el biolÃ³gico.",
        distractorProfile: "test_downgrading_error",
        incorrectFeedback: "El IGRA es superior en especificidad al PPD. Si el IGRA es positivo, no se debe buscar un PPD negativo para \"descartar\" la infecciÃ³n, pues un PPD negativo en este escenario reflejarÃ­a anergia por la propia inmunosupresiÃ³n de la AR, no ausencia de infecciÃ³n."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con InfecciÃ³n Tuberculosa Latente (ITBL), demostrada por un IGRA positivo en ausencia de sÃ­ntomas y con radiografÃ­a de tÃ³rax normal (lo que descarta TB activa). El Factor de Necrosis Tumoral alfa (TNF-Î±) es la molÃ©cula maestra que mantiene a los macrÃ³fagos estructurados alrededor del granuloma tuberculoso. Si se administra un fÃ¡rmaco anti-TNF (Infliximab, Adalimumab, Etanercept) a una paciente con ITBL, el granuloma se \"desmorona\" y la paciente sufrirÃ¡ una reactivaciÃ³n tuberculosa fulminante (a menudo miliar o extrapulmonar). Las guÃ­as mundiales exigen iniciar tratamiento para la TB latente (usualmente Isoniazida x 9 meses o Rifampicina x 4 meses) y diferir obligatoriamente el inicio del biolÃ³gico al menos durante 3 a 4 semanas (1 mes) para asegurar que el bacilo latente estÃ© bajo control bactericida.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un error fatal en la reumatologÃ­a moderna. El IGRA (QuantiFERON) no da falsos positivos por vacunas previas de BCG ni por autoinmunidad, a diferencia del PPD. Si el IGRA es positivo, el bacilo estÃ¡ dormido en los vÃ©rtices pulmonares. Bloquear el TNF es abrirle las puertas de la prisiÃ³n al Mycobacterium. No necesitas darle los cuatro medicamentos (HRZE, OpciÃ³n C) porque la paciente no tiene la enfermedad activa cavitada, no hay millones de bacterias que requieran 4 fÃ¡rmacos para evitar resistencia; hay unos pocos bacilos dormidos que la Isoniazida o Rifampicina en monoterapia barrerÃ¡n exitosamente.",
    keyPoints: [
      "Paciente que iniciarÃ¡ Terapia BiolÃ³gica (especialmente anti-TNF).",
      "Tamizaje con IGRA o PPD positivo + RadiografÃ­a normal (asintomÃ¡tico).",
      "Tuberculosis Latente de alto riesgo de reactivaciÃ³n. Requiere profilaxis antibacilÃ­fera (Isoniazida o Rifampicina) y el biolÃ³gico DEBE postergarse por 1 mes.",
      "Tema: Tuberculosis Latente / FarmacologÃ­a Inmunosupresora."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-72",
    university: "UCC",
    examArea: "PediatrÃ­a / Urgencias / ToxicologÃ­a",
    topic: "ToxicologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "urgencias", "toxicologia"],
    statement: "Un niÃ±o de 3 aÃ±os es traÃ­do a urgencias en brazos de su madre. La madre refiere que el niÃ±o encontrÃ³ su frasco de pastillas de suplemento prenatal (Sulfato Ferroso) y se comiÃ³ aproximadamente 30 tabletas hace 3 horas. Al ingreso, el paciente se encuentra irritable, con dolor abdominal tipo cÃ³lico severo y ha presentado 5 episodios de vÃ³mitos, los dos Ãºltimos con estrÃ­as de sangre roja fresca (hematemesis). Signos vitales: PA 85/55 mmHg, FC 145 lpm, SatO2 96%. Una radiografÃ­a simple de abdomen evidencia mÃºltiples opacidades radiodensas en la cÃ¡mara gÃ¡strica y duodeno. Los laboratorios urgentes reportan un Hierro SÃ©rico de 580 mcg/dL. Â¿CuÃ¡l es la terapia toxicolÃ³gica de rescate MÃS adecuada y prioritaria en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar dosis repetidas de CarbÃ³n Activado por sonda nasogÃ¡strica para adsorber el metal en la luz intestinal.",
        distractorProfile: "wrong_toxicological_adsorbent",
        incorrectFeedback: "El carbÃ³n activado no posee capacidad de adsorciÃ³n fÃ­sica sobre los metales pesados o iones elementales como el hierro, el litio o el potasio, resultando en un procedimiento fÃºtil y con riesgo de broncoaspiraciÃ³n."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar de inmediato infusiÃ³n intravenosa continua de Deferoxamina a 15 mg/kg/hora."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar hemodiÃ¡lisis de urgencia con filtros de alto flujo debido a que el hierro sÃ©rico supera el lÃ­mite letal de 500 mcg/dL.",
        distractorProfile: "ineffective_extracorporeal_clearance",
        incorrectFeedback: "La hemodiÃ¡lisis no es efectiva para la remociÃ³n de hierro sÃ©rico libre debido a su extenso volumen de distribuciÃ³n intracelular y alta affinity proteica en sangre; el riÃ±Ã³n solo bota el hierro si estÃ¡ quelado previamente."
      },
      {
        id: "D",
        label: "D",
        text: "Inducir el vÃ³mito con Jarabe de Ipecacuana seguido de la administraciÃ³n de leche entera para formar complejos insolubles en el estÃ³mago.",
        distractorProfile: "obsolete_and_dangerous_gastric_emptying",
        incorrectFeedback: "El jarabe de ipecacuana estÃ¡ retirado y proscrito a nivel mundial en toxicologÃ­a por falta de eficacia y riesgo de broncoaspiraciÃ³n letal. Dar leche no impide la absorciÃ³n tÃ³xica a nivel intestinal."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una IntoxicaciÃ³n Aguda por Hierro en su primera fase (toxicidad gastrointestinal severa con necrosis mucosa directa, hemorragia y choque temprano). El diagnÃ³stico de gravedad estÃ¡ sustentado por la sintomatologÃ­a tÃ³xica (hematemesis, choque), las pastillas visibles en la radiografÃ­a y, categÃ³ricamente, por un Hierro SÃ©rico > 500 mcg/dL (rango de toxicidad sistÃ©mica grave con riesgo inminente de disfunciÃ³n mitocondrial celular, acidosis metabÃ³lica y falla hepÃ¡tica aguda). La terapia antidÃ³tica OBLIGATORIA ante sÃ­ntomas severos o hierro >500 es el agente quelante **Deferoxamina intravenosa**. Esta molÃ©cula se une al hierro fÃ©rrico libre en la sangre formando ferrioxamina, un compuesto hidrosoluble que es excretado por el riÃ±Ã³n (tiÃ±endo clÃ¡sicamente la orina de color \"vino tinto\" o \"rosado\").\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un error de triaje toxicolÃ³gico clÃ¡sico. Todos los niÃ±os que comen cosas tÃ³xicas reciben CarbÃ³n Activado, Â¿verdad? Â¡Falso! Los metales pesados (Hierro, Litio, Plomo) y los alcoholes NO se pegan al carbÃ³n activado, pasa derecho. Al meterle carbÃ³n (OpciÃ³n A) solo lograrÃ¡s que el niÃ±o vomite negro y el hierro seguirÃ¡ quemando su estÃ³mago y absorbiÃ©ndose. El hierro tampoco se puede sacar con HemodiÃ¡lisis (OpciÃ³n C) porque es una molÃ©cula que en la sangre viaja unida a proteÃ­nas con altÃ­sima afinidad y tiene un gran volumen de distribuciÃ³n; la mÃ¡quina no lo atrapa. La Deferoxamina es la Ãºnica que tiene la fuerza quÃ­mica para arrancarle el hierro a los tejidos y botarlo por la orina.",
    keyPoints: [
      "Preescolar con ingesta accidental de vitaminas/pastillas prenatales + VÃ³mitos sanguinolentos.",
      "Rx de abdomen con pastillas radiopacas.",
      "Hierro sÃ©rico > 500 mcg/dL o presencia de choque/acidosis metabÃ³lica.",
      "IntoxicaciÃ³n Grave por Hierro. El CarbÃ³n Activado NO sirve. El tratamiento salvavidas es la Deferoxamina IV.",
      "Tema: ToxicologÃ­a PediÃ¡trica / IntoxicaciÃ³n por Hierro."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-73",
    university: "UCC",
    examArea: "Medicina Interna / CardiologÃ­a / FarmacologÃ­a",
    topic: "CardiologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "farmacologia"],
    statement: "Mujer de 68 aÃ±os con antecedente de asma bronquial severa de difÃ­cil control (actualmente usando corticoides inhalados a altas dosis y LABA/LAMA). Acude al servicio de urgencias por exacerbaciÃ³n de su disnea y apariciÃ³n de palpitaciones. Al examen fÃ­sico: broncoespasmo bilateral marcado con sibilancias inspiratorias y espiratorias; FR 26 rpm, SatO2 91%. PA 130/80 mmHg. El electrocardiograma revela una FibrilaciÃ³n Auricular con Respuesta Ventricular RÃ¡pida (FA con RVR) a una frecuencia de 155 lpm. La paciente no presenta signos de inestabilidad hemodinÃ¡mica ni edema pulmonar cardiogÃ©nico. Â¿CuÃ¡l es el fÃ¡rmaco cronotrÃ³pico negativo de elecciÃ³n MÃS seguro para el control de la frecuencia cardÃ­aca en esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Propranolol intravenoso en bolos titulables.",
        distractorProfile: "non_selective_beta_blocker_lethal_trap",
        incorrectFeedback: "El propranolol es un beta-bloqueador no selectivo puro; su administraciÃ³n en una crisis asmÃ¡tica provocarÃ¡ el cierre total de la vÃ­a aÃ©rea en escasos minutos."
      },
      {
        id: "B",
        label: "B",
        text: "Adenosina en tÃ©cnica de doble jeringa para restaurar el ritmo sinusal.",
        distractorProfile: "wrong_drug_and_dangerous_side_effect",
        incorrectFeedback: "La adenosina estÃ¡ contraindicada en pacientes con asma severa porque induce degranulaciÃ³n de mastocitos e intenso broncoespasmo. AdemÃ¡s, la adenosina no cardioverte la fibrilaciÃ³n auricular, solo produce un bloqueo AV fugaz."
      },
      {
        id: "C",
        label: "C",
        text: "Diltiazem o Verapamilo intravenoso en infusiÃ³n."
      },
      {
        id: "D",
        label: "D",
        text: "Metoprolol intravenoso, por ser cardioselectivo (beta-1), minimizando el riesgo de broncoespasmo.",
        distractorProfile: "relative_contraindication_overlooked",
        incorrectFeedback: "Aunque el metoprolol es beta-1 selectivo, la selectividad se pierde a dosis mÃ¡s altas. En pacientes con asma severo y broncoespasmo activo, incluso pequeÃ±as afinidades beta-2 pueden desencadenar broncoconstricciÃ³n fatal."
      }
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con una FA de respuesta rÃ¡pida en un contexto complejo: **asma severa reagudizada**. El objetivo terapÃ©utico en el paciente estable es el control de la frecuencia cardÃ­aca. Sin embargo, el uso de Beta-bloqueadores (incluso los cardioselectivos como el Metoprolol o Bisoprolol) en un paciente con asma severa descompensada y broncoespasmo activo acarrea un riesgo muy alto de bloquear los pocos receptores beta-2 funcionales en el pulmÃ³n, empeorando el broncoespasmo y causando insuficiencia ventilatoria aguda. Las guÃ­as de la AHA/ACC para FA establecen que en pacientes con asma o EPOC severo broncoconstricto, el medicamento de PRIMERA LÃNEA para el control de frecuencia nodal debe ser un Calcioantagonista no dihidropiridÃ­nico (Diltiazem o Verapamilo), los cuales frenan eficientemente el nodo AV sin interactuar con los receptores bronquiales.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** AquÃ­ el instinto traiciona al internista. Uno se siente muy seguro con el Metoprolol porque el libro dice que es \"beta-1 selectivo\". Falso sentido de seguridad: en medio de un ataque de asma, los pulmones estÃ¡n hiperreactivos y cualquier molÃ©cula que antagonice los receptores (porque el metoprolol se \"desborda\" hacia el beta-2 a dosis terapÃ©uticas) sellarÃ¡ los bronquios. Los bloqueadores de calcio (Diltiazem) hacen el trabajo elÃ©ctrico en el corazÃ³n sin asomarse a los pulmones. La Adenosina (OpciÃ³n B) no solo no detiene una FibrilaciÃ³n Auricular (solo la enlentece por 10 segundos), sino que es un potente broncoconstrictor primario que ahogarÃ­a a esta paciente al instante.",
    keyPoints: [
      "Paciente ESTABLE con FibrilaciÃ³n Auricular rÃ¡pida (RVR).",
      "Coexistencia de ASMA SEVERA o EPOC en crisis con broncoespasmo.",
      "DecisiÃ³n de quÃ© \"frenador del nodo\" usar.",
      "Diltiazem o Verapamilo. Evitar a toda costa los beta-bloqueadores, incluso los \"cardioselectivos\", ya que pierden su selectividad a dosis altas y bloquean el bronquio.",
      "Tema: FibrilaciÃ³n Auricular / FarmacologÃ­a."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-74",
    university: "UCC",
    examArea: "PediatrÃ­a / InfectologÃ­a / NeurologÃ­a",
    topic: "InfectologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "neurologia"],
    statement: "Un niÃ±o de 5 aÃ±os es traÃ­do a urgencias porque su madre notÃ³ al despertar que \"tiene la cara chueca\". Al examen fÃ­sico, el niÃ±o presenta imposibilidad absoluta para arrugar la frente del lado derecho, imposibilidad para cerrar el ojo derecho (signo de Bell positivo) y desviaciÃ³n de la comisura labial hacia la izquierda al sonreÃ­r. El resto del examen neurolÃ³gico (fuerza y sensibilidad en extremidades) es normal. Al revisar sus antecedentes recientes, la madre menciona que el niÃ±o finalizÃ³ hace dos semanas un tratamiento empÃ­rico irregular (3 dÃ­as) de amoxicilina por un dolor de oÃ­do intenso en el lado derecho. A la otoscopia actual, la membrana timpÃ¡nica derecha se observa eritematosa, abombada y con un nivel hidroaÃ©reo purulento posterior. Â¿CuÃ¡l es la interpretaciÃ³n diagnÃ³stica MÃS correcta y el tratamiento a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "ParÃ¡lisis de Bell idiopÃ¡tica; iniciar de inmediato un ciclo corto de Prednisolona oral y lÃ¡grimas artificiales.",
        distractorProfile: "default_diagnosis_ignores_red_flags",
        incorrectFeedback: "Asumir una parÃ¡lisis de Bell idiopÃ¡tica y administrar esteroides cuando hay una infecciÃ³n purulenta activa no drenada contigua al nervio facial, facilita la diseminaciÃ³n intracraneal de la infecciÃ³n (meningitis o absceso epidural)."
      },
      {
        id: "B",
        label: "B",
        text: "Enfermedad de Lyme diseminada temprana; iniciar Amoxicilina por 21 dÃ­as e inmovilizar el ojo afectado.",
        distractorProfile: "epidemiologic_overlap_error",
        incorrectFeedback: "Aunque la enfermedad de Lyme puede dar parÃ¡lisis facial (incluso bilateral), la presencia de una OMA purulenta clara ipsilateral y la ausencia de historia de picadura de garrapata o eritema migrans descartan primariamente esta etiologÃ­a reumatolÃ³gica/infecciosa de segunda lÃ­nea."
      },
      {
        id: "C",
        label: "C",
        text: "ParÃ¡lisis facial perifÃ©rica secundaria a Otitis Media Aguda complicada; requiere MiringotomÃ­a de urgencia y cobertura antibiÃ³tica parenteral."
      },
      {
        id: "D",
        label: "D",
        text: "Accidente Cerebrovascular isquÃ©mico de fosa posterior; realizar RMN cerebral urgente e iniciar heparina.",
        distractorProfile: "wrong_central_neurological_pathology",
        incorrectFeedback: "Los accidentes cerebrovasculares supratentoriales producen una parÃ¡lisis facial CENTRAL, la cual respeta los mÃºsculos de la frente y el cierre del ojo debido a la inervaciÃ³n cortical bilateral del nÃºcleo facial superior."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta una ParÃ¡lisis Facial PERIFÃ‰RICA (compromete tanto el tercio superior como el inferior del rostro, a diferencia de la parÃ¡lisis central que respeta la frente por inervaciÃ³n cruzada bilateral). Aunque la causa mÃ¡s frecuente en pediatrÃ­a es idiopÃ¡tica (ParÃ¡lisis de Bell), la semiologÃ­a manda: la presencia de una **Otitis Media Aguda (OMA)** purulenta ipsilateral a la parÃ¡lisis descarta el diagnÃ³stico de \"idiopÃ¡tica\". El nervio facial (VII par) transcurre a travÃ©s del canal de Falopio dentro del oÃ­do medio; la inflamaciÃ³n purulenta a presiÃ³n de la OMA puede erosionar el conducto o transmitir toxinas inflamatorias que comprimen el nervio causando su parÃ¡lisis aguda. Esta es una **complicaciÃ³n supurativa severa de la OMA**, y su manejo no son esteroides, sino liberar inmediatamente el pus a presiÃ³n del oÃ­do (MiringotomÃ­a / tubo de timpanostomÃ­a) asociado a antibiÃ³ticos intravenosos de amplio espectro (ej. Ceftriaxona).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un escenario donde la semiologÃ­a y la otoscopia son el juez supremo. Si el oÃ­do estuviera sano, el diagnÃ³stico serÃ­a ParÃ¡lisis de Bell y el tratamiento con Corticoides (OpciÃ³n A) serÃ­a perfecto. Pero si ves un tÃ­mpano abombado y lleno de pus que estÃ¡ asfixiando al nervio facial que pasa justo por ahÃ­, los esteroides solos no curarÃ¡n el foco infeccioso, y el pus terminarÃ¡ erosionando la mastoides. La opciÃ³n D (ACV) se descarta fÃ¡cil: un infarto cerebral motor darÃ­a una parÃ¡lisis CENTRAL (el niÃ±o sÃ­ podrÃ­a arrugar la frente, porque la frente tiene doble inervaciÃ³n desde ambos hemisferios).",
    keyPoints: [
      "NiÃ±o con ParÃ¡lisis Facial PerifÃ©rica (no arruga la frente, ojo abierto, boca desviada).",
      "Otoscopia ANORMAL ipsilateral (OMA purulenta) o antecedente de otitis mal tratada.",
      "ParÃ¡lisis Facial secundaria a OMA (complicaciÃ³n aguda). Tratamiento exige antibiÃ³ticos agresivos y MiringotomÃ­a para descomprimir el nervio facial. No es ParÃ¡lisis de Bell.",
      "Tema: Complicaciones de OMA / NeurologÃ­a PediÃ¡trica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-75",
    university: "UCC",
    examArea: "Medicina Interna / EndocrinologÃ­a",
    topic: "EndocrinologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia"],
    statement: "Mujer de 78 aÃ±os, con antecedentes desconocidos por vivir sola, es encontrada por su hija en estado de letargia profunda y marcada lentitud motora. Al ingreso a urgencias en Ã©poca de invierno: estuporosa, PA 100/60 mmHg, bradicardia de 48 lpm, hipotermia (T 34.2Â°C). Al examen fÃ­sico resalta un engrosamiento burdo de las facies, macroglosia evidente, edema periorbitario y piel sumamente reseca y frÃ­a (mixedema generalizado). Los reflejos miotÃ¡ticos presentan una fase de relajaciÃ³n extremadamente prolongada. Se realiza un panel de laboratorios urgentes: Glucemia 65 mg/dL, Sodio sÃ©rico **112 mEq/L** (Hiponatremia severa). La osmolaridad urinaria es de 350 mOsm/kg con Sodio urinario de 45 mEq/L, y el estado de la paciente es euvolÃ©mico clÃ­nico. Un perfil tiroideo tomado STAT revela TSH en 185 mUI/L (rango normal 0.4-4.0) con T4 libre indetectable. Â¿CuÃ¡l es el tratamiento INMEDIATO de elecciÃ³n para corregir la severa hiponatremia de esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "AdministraciÃ³n agresiva de SoluciÃ³n Salina HipertÃ³nica al 3% bajo vigilancia neurolÃ³gica para subir el sodio entre 4 a 6 mEq/L en las primeras 6 horas.",
        distractorProfile: "blind_hyponatremia_algorithm_error",
        incorrectFeedback: "La soluciÃ³n salina hipertÃ³nica al 3% se reserva en el coma mixematoso ÃšNICAMENTE si la paciente cursa con convulsiones activas inducidas por el edema cerebral. Su uso rutinario sobrecarga un corazÃ³n hipodinÃ¡mico y no resuelve la causa raÃ­z endocrina de la retenciÃ³n acuosa."
      },
      {
        id: "B",
        label: "B",
        text: "RestricciÃ³n hÃ­drica estricta (<800 cc/dÃ­a) y prescripciÃ³n de TolvaptÃ¡n oral, asumiendo un SÃ­ndrome de SecreciÃ³n Inadecuada de ADH (SIADH) severo.",
        distractorProfile: "wrong_euvolemic_hyponatremia_pathology",
        incorrectFeedback: "Aunque los laboratorios (sodio orina alto, normovolemia) imitan al SIADH, la presencia de TSH masivamente elevada confirma que la hiponatremia es secundaria al hipotiroidismo profundo. Usar Vaptanes en un coma metabÃ³lico inestable es iatrogÃ©nico."
      },
      {
        id: "C",
        label: "C",
        text: "InfusiÃ³n intravenosa de Hidrocortisona a dosis de estrÃ©s, seguida de Levotiroxina endovenosa; no se requieren bolos de sodio hipertÃ³nico primarios."
      },
      {
        id: "D",
        label: "D",
        text: "HemodiÃ¡lisis de urgencia para remociÃ³n del exceso de agua libre retenida en el espacio intersticial mixedematoso.",
        distractorProfile: "extreme_and_unwarranted_intervention",
        incorrectFeedback: "La hemodiÃ¡lisis no tiene indicaciÃ³n para tratar el edema mixedematoso, el cual es rico en proteÃ­nas/mucopolisacÃ¡ridos, no agua libre pura extracelular que responda a ultrafiltraciÃ³n."
      }
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con un Coma Mixematoso (la fase mÃ¡s extrema del hipotiroidismo descompensado). Las caracterÃ­sticas patognomÃ³nicas incluyen alteraciÃ³n del sensorio, hipotermia, bradicardia y un mixedema franco (edema por depÃ³sito de glucosaminoglicanos y Ã¡cido hialurÃ³nico). A nivel electrolÃ­tico, el hipotiroidismo severo es una de las causas clÃ¡sicas de **Hiponatremia EuvolÃ©mica** (similar laboratorialmente al SIADH, debido a la reducciÃ³n drÃ¡stica del filtrado glomerular y la incapacidad de suprimir la ADH). La clave terapÃ©utica aquÃ­ es que la hiponatremia inducida por el coma mixematoso se resuelve fisiolÃ³gicamente al restaurar el metabolismo basal celular. El tratamiento inmediato exige, en orden inquebrantable, dar Glucocorticoides (Hidrocortisona IV) para proteger contra una insuficiencia adrenal subyacente simultÃ¡nea (SÃ­ndrome de Schmidt), seguido de la administraciÃ³n de Hormona Tiroidea (Levotiroxina o T3) intravenosa. El sodio mejorarÃ¡ dramÃ¡ticamente solo con la hormona tiroidea (\"diuresis de agua libre\"); usar soluciÃ³n salina hipertÃ³nica estÃ¡ desaconsejado a menos que la paciente estÃ© convulsionando activamente, pues agrava el riesgo de desmielinizaciÃ³n y sobrecarga cardÃ­aca.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un choque entre el instinto de la nefrologÃ­a y la endocrinologÃ­a. El nefrÃ³logo ve \"Sodio 112\" y quiere ponerle soluciÃ³n hipertÃ³nica al 3% (OpciÃ³n A). Pero el endocrinÃ³logo te grita: la paciente no tiene 112 porque haya tomado mucha agua, tiene 112 porque su corazÃ³n late tan despacio y su riÃ±Ã³n filtra tan poco por falta de tiroxina, que toda el agua se quedÃ³ estancada. Tan pronto inyectes la Levotiroxina, las cÃ©lulas se \"prenderÃ¡n\", el gasto cardÃ­aco aumentarÃ¡, el riÃ±Ã³n orinarÃ¡ litros de agua estancada y el sodio subirÃ¡ mÃ¡gicamente a 135. Darle sal hipertÃ³nica a un corazÃ³n mixedematoso bradicÃ¡rdico puede causar insuficiencia cardÃ­aca congestiva aguda por sobrecarga de volumen iatrogÃ©nica.",
    keyPoints: [
      "Anciana con hipotermia, bradicardia, letargia y signos de mixedema (macroglosia, reflejos lentos).",
      "TSH astronÃ³mica (hipotiroidismo profundo).",
      "Hiponatremia severa asociada.",
      "Coma Mixematoso. La correcciÃ³n del sodio se hace aportando Levotiroxina (previa cobertura con Hidrocortisona IV). La restricciÃ³n hÃ­drica o la salina hipertÃ³nica no atacan la raÃ­z celular del problema.",
      "Tema: Urgencias Endocrinas / Coma Mixematoso."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-76",
    university: "UCC",
    examArea: "PediatrÃ­a / CardiologÃ­a / Urgencias",
    topic: "CardiologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "cardiologia", "urgencias"],
    statement: "Un niÃ±o de 4 aÃ±os, previamente sano, es llevado al servicio de urgencias por un cuadro de 4 dÃ­as de disnea de esfuerzo progresiva y dolor abdominal. La madre menciona que el niÃ±o tuvo un \"resfriado muy fuerte\" (rinofaringitis viral) hace dos semanas. Al examen fÃ­sico: febrÃ­cula de 37.5Â°C, marcado trabajo respiratorio (FR 45 rpm), cianosis perioral leve y taquicardia desproporcionada en reposo (FC 165 lpm). Se ausculta un ritmo de galope claro por presencia de tercer ruido (S3), soplos sistÃ³licos funcionales por dilataciÃ³n y estertores crepitantes en ambas bases pulmonares. Llama la atenciÃ³n una hepatomegalia firme a 5 cm del reborde costal derecho. La radiografÃ­a de tÃ³rax revela una acentuada cardiomegalia global con Ã­ndice cardiotorÃ¡cico de 0.65 y congestiÃ³n venosa hiliar. Â¿CuÃ¡l es la sospecha diagnÃ³stica prioritaria y el soporte farmacolÃ³gico inicial MÃS adecuado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "NeumonÃ­a atÃ­pica complicada con derrame pleural masivo; se debe iniciar administraciÃ³n intravenosa de Clindamicina y MacrÃ³lidos.",
        distractorProfile: "wrong_system_primary_focus",
        incorrectFeedback: "La neumonÃ­a atÃ­pica no genera cardiomegalia global extrema ni ritmo de galope (S3); la hepatomegalia refleja congestiÃ³n hepÃ¡tica por falla de corazÃ³n derecho, incompatible con un origen puramente respiratorio."
      },
      {
        id: "B",
        label: "B",
        text: "Pericarditis aguda viral con taponamiento inminente; se requiere administraciÃ³n inmediata de Ibuprofeno a altas dosis y colchicina.",
        distractorProfile: "wrong_inflammatory_cardiac_layer",
        incorrectFeedback: "La pericarditis produce frote auscultatorio y dolor torÃ¡cico pleurÃ­tico, pero no causa ritmo de galope por S3 ni edema pulmonar directo (crepitantes), y dar AINEs deprimirÃ¡ mÃ¡s a un niÃ±o inestable hemodinÃ¡micamente."
      },
      {
        id: "C",
        label: "C",
        text: "Miocarditis viral aguda con falla cardÃ­aca congestiva; el manejo prioritario incluye soporte inotrÃ³pico (Milrinona/Dobutamina) y terapia diurÃ©tica agresiva."
      },
      {
        id: "D",
        label: "D",
        text: "Sepsis de origen respiratorio con choque caliente secundario; el paso inicial mandatorio es un bolo de Lactato de Ringer a 20 cc/kg en menos de 15 minutos.",
        distractorProfile: "lethal_fluid_overload",
        incorrectFeedback: "Administrar bolos rÃ¡pidos de volumen a un paciente con insuficiencia cardÃ­aca aguda congestiva (galope, estertores, hepatomegalia) precipitarÃ¡ un edema agudo de pulmÃ³n letal inmediato por sobrecarga diastÃ³lica."
      }
    ],
    correctOptionId: "C",
    explanation: "El niÃ±o presenta un cuadro clÃ¡sico y fulminante de Miocarditis Viral PediÃ¡trica (comÃºnmente secundaria a Coxsackievirus B, Adenovirus o Parvovirus B19 tras un prÃ³dromo respiratorio o gastrointestinal). Se manifiesta fisiopatolÃ³gicamente como una Insuficiencia CardÃ­aca Aguda de tipo sistÃ³lica. Los signos semiolÃ³gicos son el \"grito\" de la falla de bomba: taquicardia masiva desproporcionada a la fiebre, ritmo de galope (S3, signo de disfunciÃ³n ventricular izquierda y sobrecarga de volumen), estertores pulmonares (congestiÃ³n retrÃ³grada izquierda) y hepatomegalia marcada (congestiÃ³n retrÃ³grada derecha). El corazÃ³n del niÃ±o se ha dilatado y no tiene fuerza de contracciÃ³n. La terapia aguda de rescate se enfoca en descargar el volumen retenido (diurÃ©ticos de asa, Furosemida) y aumentar la fuerza contrÃ¡ctil del miocardio enfermo con inotrÃ³picos intravenosos (Milrinona, que ademÃ¡s es vasodilatador o inodilatador, o Dobutamina), mientras se decide la necesidad de soporte extracorpÃ³reo (ECMO) si hay colapso severo.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Cuidado con activar el protocolo de sepsis a ciegas (OpciÃ³n D). Es el error que cobra mÃ¡s vidas en la urgencia pediÃ¡trica con miocarditis. El niÃ±o luce pÃ¡lido, respira rÃ¡pido y estÃ¡ muy taquicÃ¡rdico, por lo que el interno asume \"Sepsis\" y ordena \"Â¡Bolo de 20 cc/kg de cristaloides a presiÃ³n!\". Al pasar ese volumen a un miocardio inflamado y dilatado que no tiene fuerza para contraerse, provocas un edema agudo de pulmÃ³n iatrogÃ©nico instantÃ¡neo y paro cardiorrespiratorio por falla de bomba diastÃ³lica. La hepatomegalia y el ritmo de galope en la auscultaciÃ³n son tu freno de mano: te indican que el tanque ya estÃ¡ lleno, no le metas mÃ¡s agua.",
    keyPoints: [
      "NiÃ±o o lactante con prÃ³dromo viral previo (hace 1-2 semanas).",
      "Disnea de novo, hepatomegalia, ritmo de galope (S3) y Cardiomegalia en la Rx TÃ³rax.",
      "Taquicardia que no cuadra con la temperatura (muy rÃ¡pido para tan poca fiebre).",
      "Miocarditis Viral con Falla CardÃ­aca Biventricular. El tratamiento de urgencia es soporte InotrÃ³pico y DiurÃ©ticos. Los bolos de lÃ­quidos rÃ¡pidos estÃ¡n contraindicados.",
      "Tema: Urgencias Cardiovasculares / Miocarditis PediÃ¡trica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-77",
    university: "UCC",
    examArea: "Medicina Interna / GastroenterologÃ­a / Urgencias",
    topic: "GastroenterologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "urgencias"],
    statement: "Hombre de 78 aÃ±os, hipertenso crÃ³nico, es traÃ­do a urgencias por la expulsiÃ³n de mÃºltiples deposiciones de abundante sangre roja rutilante pura con coÃ¡gulos (hematoquecia severa). Refiere que el evento fue de inicio sÃºbito, acompaÃ±ado de urgencia defecatoria, pero COMPLETAMENTE INDOLORO. Al ingreso presenta palidez severa, sudoraciÃ³n frÃ­a, PA 85/50 mmHg y FC 125 lpm (choque hipovolÃ©mico activo). Tras la reanimaciÃ³n hemodinÃ¡mica agresiva con cristaloides y 2 unidades de glÃ³bulos rojos, se logra estabilizar su presiÃ³n a 110/70 mmHg. Se realiza una colonoscopia de urgencia en las primeras 12 horas, la cual evidencia abundante sangre fresca y grandes coÃ¡gulos amorfos distribuidos a lo largo del colon ascendente y ciego, imposibilitando la visualizaciÃ³n directa de la mucosa o del vaso sangrante especÃ­fico, a pesar de lavados intensivos. El paciente presenta un nuevo episodio de hipotensiÃ³n asociado a rectorragia durante la recuperaciÃ³n endoscÃ³pica. Â¿CuÃ¡l es el siguiente paso diagnÃ³stico-terapÃ©utico MÃS apropiado y de mayor rendimiento en este escenario?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar una AngiografÃ­a por TomografÃ­a Computarizada (Angio-TC) de abdomen y pelvis o una AngiografÃ­a MesentÃ©rica convencional inmediata para embolizaciÃ³n dirigida."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar administraciÃ³n intravenosa de Terlipresina a dosis altas (2 mg cada 4 horas) para inducir vasoconstricciÃ³n esplÃ¡cnica prolongada.",
        distractorProfile: "upper_gi_pharmacology_applied_to_lower",
        incorrectFeedback: "Los vasoactivos (Terlipresina u Octreotide) estÃ¡n avalados y son el pilar fundamental del sangrado VARICEAL (hipertensiÃ³n portal). No tienen eficacia demostrada, indicaciÃ³n, ni rol comprobado en el control agudo del sangrado arterial bajo diverticular o angiodisplÃ¡sico."
      },
      {
        id: "C",
        label: "C",
        text: "Instalar un balÃ³n de Sengstaken-Blakemore a travÃ©s del canal anal para hacer hemostasia compresiva mecÃ¡nica de la mucosa colÃ³nica.",
        distractorProfile: "wrong_anatomical_device_use",
        incorrectFeedback: "El balÃ³n de Sengstaken-Blakemore fue diseÃ±ado anatÃ³micamente de forma exclusiva para comprimir las vÃ¡rices del esÃ³fago inferior y cardias gÃ¡strico; usarlo en el recto/colon es imposible, peligroso y mÃ©dicamente irracional."
      },
      {
        id: "D",
        label: "D",
        text: "Programar al paciente de inmediato para una ColectomÃ­a Subtotal de urgencia con ileostomÃ­a, ya que la falla endoscÃ³pica es indicaciÃ³n quirÃºrgica directa.",
        distractorProfile: "premature_radical_surgery",
        incorrectFeedback: "La cirugÃ­a de resecciÃ³n colÃ³nica \"a ciegas\" de rescate tiene una altÃ­sima mortalidad (>30%) en adultos mayores inestables y debe ser evitada a toda costa si la embolizaciÃ³n angiogrÃ¡fica mÃ­nimamente invasiva (mucho mÃ¡s segura) no se ha intentado previamente."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con una Hemorragia Digestiva Baja (HDB) aguda, masiva y de alto riesgo, probablemente secundaria a Enfermedad Diverticular o Angiodisplasia (las dos principales causas de sangrado bajo indoloro y profuso en ancianos). Cuando el paciente se encuentra inestable, presenta sangrado continuo masivo, y la **colonoscopia no es concluyente o falla por mala visibilidad (sangre abundante)**, las guÃ­as internacionales (ACG, ASGE) establecen que el paso mandatorio a seguir es la localizaciÃ³n radiolÃ³gica intravascular. La Angio-TC detecta sangrados activos con flujos tan bajos como 0.3 a 0.5 mL/min de manera rÃ¡pida y no invasiva, trazando el mapa. Inmediatamente despuÃ©s (o directamente si estÃ¡ disponible), la AngiografÃ­a MesentÃ©rica permite no solo ver el vaso sangrante, sino canalizarlo selectivamente e inyectar *coils*, gelfoam o microesferas para embolizarlo y salvar la vida del paciente sin requerir una riesgosa cirugÃ­a de colon.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** En la hemorragia digestiva baja masiva, el colonoscopio pierde su magia cuando el tubo digestivo estÃ¡ nadando en sangre roja porque la luz absorbe la imagen. Llevar a este paciente a una ColectomÃ­a de Urgencia \"a ciegas\" (OpciÃ³n D) es el Ãºltimo, ultimÃ­simo recurso de desesperaciÃ³n; quitarle todo el colon a un anciano de 78 aÃ±os chocado tiene una mortalidad quirÃºrgica casi prohibitiva. Si inyectas contraste por la arteria (Angio-TC), verÃ¡s exactamente cÃ³mo la arteria mesentÃ©rica superior \"escupe\" contraste hacia la luz del ciego, dÃ¡ndole el blanco exacto al radiÃ³logo intervencionista para taponar esa arteriola milimÃ©trica y curar el cuadro.",
    keyPoints: [
      "Anciano con hematoquecia/rectorragia masiva indolora (probable divertÃ­culo o angiodisplasia).",
      "Inestabilidad hemodinÃ¡mica intermitente o persistente.",
      "Colonoscopia urgente FALLIDA por falta de visibilidad por coÃ¡gulos o no logra hacer hemostasia.",
      "Angio-TC abdominal seguida de AngiografÃ­a MesentÃ©rica con EmbolizaciÃ³n. Es el mÃ©todo de elecciÃ³n y puente de rescate ante el fallo endoscÃ³pico.",
      "Tema: Hemorragia Digestiva Baja."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-78",
    university: "UCC",
    examArea: "PediatrÃ­a / NefrologÃ­a / GenÃ©tica",
    topic: "NefrologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "nefrologia", "genetica"],
    statement: "Un niÃ±o de 8 aÃ±os es llevado a la consulta de nefrologÃ­a por el hallazgo persistente de microhematuria aislada en tres parciales de orina consecutivos, realizados como tamizaje escolar. El niÃ±o se encuentra asintomÃ¡tico, con presiÃ³n arterial normal y funciÃ³n renal conservada (Creatinina 0.5 mg/dL). No presenta edemas. Al revisar los sedimentos urinarios, se reporta la presencia persistente de glÃ³bulos rojos dismÃ³rficos (>80%) y trazas de proteÃ­nas. La evaluaciÃ³n de la historia familiar es clave: su padre (de 38 aÃ±os) se encuentra en lista de espera para trasplante renal por Enfermedad Renal CrÃ³nica terminal de causa no biopsiada, y adicionalmente utiliza audÃ­fonos bilaterales desde los 30 aÃ±os por sordera neurosensorial. El examen de agudeza auditiva y visual del niÃ±o, realizado el mes pasado, reportÃ³ parÃ¡metros normales para la edad. Con estos hallazgos clÃ­nicos y familiares, Â¿cuÃ¡l es el mecanismo fisiopatolÃ³gico y genÃ©tico MÃS probable subyacente a la enfermedad que cursa este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "DepÃ³sito mesangial exagerado de inmunoglobulinas IgA polimÃ©ricas con O-glicosilaciÃ³n deficiente tras un desencadenante antigÃ©nico respiratorio.",
        distractorProfile: "overlapping_hematuria_disease",
        incorrectFeedback: "Describe la patogenia de la NefropatÃ­a por IgA (Enfermedad de Berger). Aunque causa hematuria microscÃ³pica/macroscÃ³pica recurrente, no se asocia patogÃ©nicamente ni familiarmente con la presencia de sordera neurosensorial bilateral progresiva y no suele heredar una diÃ¡lisis tan penetrante."
      },
      {
        id: "B",
        label: "B",
        text: "AlteraciÃ³n genÃ©tica en la sÃ­ntesis de las cadenas alfa-3, alfa-4 o alfa-5 del colÃ¡geno tipo IV, afectando la arquitectura estructural de la membrana basal glomerular."
      },
      {
        id: "C",
        label: "C",
        text: "MutaciÃ³n de genes codificadores de las proteÃ­nas del citoesqueleto del podocito (Nefrina/Podocina), induciendo esclerosis segmentaria resistente a esteroides.",
        distractorProfile: "wrong_glomerular_layer_defect",
        incorrectFeedback: "Estas mutaciones (ej. NPHS1, NPHS2) causan el SÃ­ndrome NefrÃ³tico CongÃ©nito o GEFS familiar, presentÃ¡ndose clÃ­nicamente con proteinuria masiva intratable y edemas en el periodo neonatal/infantil, no con microhematuria aislada indolente."
      },
      {
        id: "D",
        label: "D",
        text: "Adelgazamiento difuso benigno de las membranas basales glomerulares, de herencia autosÃ³mica dominante, sin riesgo de deterioro de funciÃ³n renal a largo plazo.",
        distractorProfile: "benign_familial_hematuria_trap",
        incorrectFeedback: "La Hematuria Familiar Benigna (NefropatÃ­a de membrana basal delgada) tambiÃ©n causa hematuria de por vida, pero como su nombre indica, no progresa a falla renal terminal en el adulto ni causa sordera neurosensorial (lo que contrasta agudamente con la historia del padre)."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un SÃ­ndrome de Alport de herencia ligada al cromosoma X (la forma mÃ¡s comÃºn, 80-85% de los casos). Las claves diagnÃ³sticas infalibles radican en la historia clÃ­nica: un paciente pediÃ¡trico varÃ³n con hematuria glomerular (microhematuria con dismorfismo eritrocitario), asociado a un padre joven que debutÃ³ en su edad adulta con Falla Renal Terminal y, de forma patognomÃ³nica, con **sordera neurosensorial progresiva** (y a veces anomalÃ­as oculares como el lenticono anterior). FisiopatolÃ³gicamente, el SÃ­ndrome de Alport es una enfermedad genÃ©tica del tejido conectivo causada por mutaciones en los genes COL4A3, COL4A4 o COL4A5, los cuales son responsables de la sÃ­ntesis de las cadenas alfa del ColÃ¡geno Tipo IV. El ColÃ¡geno Tipo IV es el ladrillo estructural principal que forma la Membrana Basal Glomerular del riÃ±Ã³n, la cÃ³clea del oÃ­do interno y el cristalino del ojo. Al estar mutado, la membrana basal renal se fisura (causando hematuria inicial), se engruesa e irregulariza (en \"capas de hojaldre\" a la microscopÃ­a electrÃ³nica), y finalmente se esclerosa llevando a la diÃ¡lisis en la segunda o tercera dÃ©cada de la vida.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Para el examen de la UCC, debes saber separar las hematurias microscÃ³picas puras en pediatrÃ­a. Si la hematuria familiar no tiene a nadie en diÃ¡lisis y el abuelo orina sangre pero estÃ¡ sano, es la Enfermedad de Membrana Basal Delgada (OpciÃ³n D), que es benigna de por vida. Si la hematuria duele y vino justo el dÃ­a que el niÃ±o se infectÃ³ la garganta, es NefropatÃ­a por IgA (OpciÃ³n A). Pero si en la familia los hombres se quedan sordos y luego necesitan un riÃ±Ã³n nuevo a los 30 aÃ±os, ese colÃ¡geno tipo IV viene daÃ±ado de fÃ¡brica (Alport).",
    keyPoints: [
      "NiÃ±o o joven con hematuria glomerular microscÃ³pica persistente asintomÃ¡tica.",
      "Antecedente familiar patognomÃ³nico: Insuficiencia Renal en hombres de la familia asociada a Sordera/Cofosis neurosensorial.",
      "SÃ­ndrome de Alport. La patogenia es una falla en el ColÃ¡geno Tipo IV de la membrana basal.",
      "Tema: GlomerulopatÃ­as Hereditarias / SÃ­ndrome de Alport."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-79",
    university: "UCC",
    examArea: "Medicina Interna / NeurologÃ­a / Gineco-Obstetricia",
    topic: "NeurologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neurologia", "ginecologia"],
    statement: "Mujer de 28 aÃ±os, primigestante cursando su semana 18 de gestaciÃ³n. Tiene antecedente diagnÃ³stico de Esclerosis MÃºltiple (EM) tipo Remitente-Recurrente desde hace 4 aÃ±os; previo a su embarazo, venÃ­a en manejo con Natalizumab (un anticuerpo monoclonal modificador de la enfermedad), el cual suspendiÃ³ tan pronto supo de su estado gestacional por precauciÃ³n. Consulta al servicio de urgencias por un cuadro de inicio agudo de 48 horas de disminuciÃ³n dolorosa de la agudeza visual en su ojo derecho, con alteraciÃ³n en la visiÃ³n de los colores y percepciÃ³n de un \"punto ciego\" central. Al examen neurolÃ³gico se confirma un Defecto Pupilar Aferente Relativo (Pupila de Marcus Gunn) en el ojo derecho. La paciente es evaluada por oftalmologÃ­a y neurologÃ­a, confirmÃ¡ndose un brote (recaÃ­da) agudo de Neuritis Ã“ptica secundario a su Esclerosis MÃºltiple. Â¿CuÃ¡l es el tratamiento agudo INMEDIATO y seguro para preservar la funciÃ³n visual durante este periodo del embarazo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar de inmediato terapia inmunosupresora modificadora de enfermedad con InterferÃ³n beta-1a sistÃ©mico continuo.",
        distractorProfile: "chronic_therapy_applied_to_acute_relapse",
        incorrectFeedback: "Los fÃ¡rmacos modificadores de la enfermedad (DMTs) como el interferÃ³n no actÃºan con la rapidez necesaria para detener la desmielinizaciÃ³n aguda de un brote activo (neuritis) y no recuperan el tejido en peligro; solo modulan la respuesta a meses vista."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar pulsos cortos intravenosos de Metilprednisolona a dosis altas (ej. 1 gramo diario por 3 a 5 dÃ­as) bajo monitoreo fetal estrecho."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar de forma prioritaria sesiones diarias de PlasmafÃ©resis terapÃ©utica durante la primera semana.",
        distractorProfile: "premature_escalation_to_second_line",
        incorrectFeedback: "La plasmafÃ©resis es un tratamiento agresivo considerado de SEGUNDA lÃ­nea. Solo estÃ¡ indicada en la mujer embarazada si el brote desmielinizante es catastrÃ³fico y ha mostrado refractariedad absoluta y ausencia de respuesta clÃ­nica a los pulsos iniciales de corticosteroides."
      },
      {
        id: "D",
        label: "D",
        text: "Mantener una conducta expectante con observaciÃ³n estrecha, contraindicando todo inmunosupresor farmacolÃ³gico hasta despuÃ©s del parto.",
        distractorProfile: "passive_and_negligent_neuromanagement",
        incorrectFeedback: "Aunque el embarazo mismo produce un estado fisiolÃ³gico de tolerancia inmunolÃ³gica protectora contra brotes, si la recaÃ­da ocurre y amenaza una vÃ­a funcional mayor (como la visiÃ³n), abstenerse de tratarla garantiza secuelas y discapacidad materna irreversibles."
      }
    ],
    correctOptionId: "B",
    explanation: "El escenario clÃ­nico plantea una recaÃ­da aguda incapacitante (Neuritis Ã“ptica Aguda) de Esclerosis MÃºltiple (EM) durante el embarazo (en este caso un rebote clÃ¡sico post-suspensiÃ³n de fÃ¡rmacos potentes como el Natalizumab). Las recaÃ­das que provocan dÃ©ficits funcionales graves, como la amenaza de pÃ©rdida visual, deben ser tratadas activamente a pesar del embarazo para evitar secuelas neurolÃ³gicas permanentes. Las guÃ­as de NeurologÃ­a y Obstetricia (AAN/EAN) establecen que la primera lÃ­nea de tratamiento para el brote agudo de EM en la gestante son los **pulsos intravenosos cortos de Glucocorticoides a dosis altas (Metilprednisolona)**. La metilprednisolona es relativamente segura en el segundo y tercer trimestre (es ampliamente metabolizada en la placenta por la enzima 11-beta-hidroxiesteroide deshidrogenasa, minimizando la exposiciÃ³n fetal cruzada a diferencia de la dexametasona), controlando eficientemente el edema y la desmielinizaciÃ³n del nervio Ã³ptico.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, en el manejo neurolÃ³gico de la embarazada el concepto central es \"apagar el fuego sin envenenar al feto\". El nervio Ã³ptico se estÃ¡ desmielinizando e inflamando; si esperas al parto (OpciÃ³n D), el nervio se atrofiarÃ¡ y la paciente quedarÃ¡ ciega del ojo derecho para siempre. Los pulsos de Metilprednisolona en el segundo y tercer trimestre no causan paladar hendido (riesgo solo en 1er trimestre con uso crÃ³nico) y cruzan muy poco la placenta. Es la mejor herramienta que tienes en tu maletÃ­n. Los modificadores de enfermedad crÃ³nicos (como el InterferÃ³n, OpciÃ³n A) no desinflaman el brote agudo, solo sirven para \"evitar\" futuras recaÃ­das.",
    keyPoints: [
      "Mujer embarazada con antecedente de Esclerosis MÃºltiple (o debut de la misma).",
      "Desarrollo de brote agudo incapacitante (como neuritis Ã³ptica o paraparesia) que requiere atenciÃ³n.",
      "El tratamiento agudo salvavidas de la funciÃ³n nerviosa son los Pulsos Cortos de Metilprednisolona IV (seguros y efectivos). Evitar la pasividad que condena a secuelas.",
      "Tema: Enfermedades Desmielinizantes / NeurologÃ­a Gestacional."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-80",
    university: "UCC",
    examArea: "PediatrÃ­a / NeonatologÃ­a / EndocrinologÃ­a",
    topic: "EndocrinologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neonatologia", "endocrinologia"],
    statement: "Un reciÃ©n nacido a tÃ©rmino (39 semanas de gestaciÃ³n), masculino, pesa al nacer 4.600 gramos (macrosÃ³mico, por encima del percentil 97 para la edad gestacional). Es producto de una madre con Diabetes Mellitus Gestacional con pobre adherencia a los controles y a la dieta. El neonato es extraÃ­do por vÃ­a vaginal sin trauma, tiene un Apgar de 8 y 9, y presenta un aspecto pletÃ³rico. A las 2 horas de vida, la enfermera nota que el bebÃ© se encuentra pÃ¡lido, hipoactivo, con letargia marcada, presencia de temblores finos distales (hiperexcitabilidad) y rechazo a la succiÃ³n. Inmediatamente se realiza una glucometrÃ­a capilar en el talÃ³n, la cual reporta **25 mg/dL** (hipoglucemia sintomÃ¡tica profunda). Se extrae muestra venosa confirmatoria. Â¿CuÃ¡l es el manejo inicial MÃS apropiado y seguro para revertir la neurotoxicidad aguda en este paciente, asumiendo protocolo de cuidado crÃ­tico neonatal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fomentar lactancia materna frecuente de forma inmediata y reevaluar la glucometrÃ­a capilar en 30 minutos sin invasiones.",
        distractorProfile: "passive_management_in_emergency",
        incorrectFeedback: "La alimentaciÃ³n enteral exclusiva estÃ¡ indicada Ãºnicamente en hipoglucemias leves y asintomÃ¡ticas. En presencia de letargia o temblores con valores < 25 mg/dL, diferir la glucosa intravenosa expone al niÃ±o a convulsiones inminentes y daÃ±o neuronal irreversible."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar un bolo intravenoso rÃ¡pido de Dextrosa al 50% (DAD 50%) a razÃ³n de 2 cc/kg por acceso perifÃ©rico.",
        distractorProfile: "lethal_hyperosmolar_concentration",
        incorrectFeedback: "La Dextrosa al 50% estÃ¡ proscrita en neonatologÃ­a; su hiperosmolaridad causa esclerosis y necrosis venosa inmediata. AdemÃ¡s, desencadena una respuesta insulÃ­nica de rebote masiva en el hijo de madre diabÃ©tica, provocando hipoglucemias posteriores mÃ¡s graves."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar un bolo intravenoso de Dextrosa al 10% (DAD 10%) a razÃ³n de 2 mL/kg (200 mg/kg), seguido de una infusiÃ³n continua de glucosa (VIG) de 6 a 8 mg/kg/min."
      },
      {
        id: "D",
        label: "D",
        text: "Inyectar GlucagÃ³n intramuscular a dosis de 1 mg/kg mientras se prepara un catÃ©ter venoso umbilical central.",
        distractorProfile: "mechanistic_failure_in_neonate",
        incorrectFeedback: "El glucagÃ³n requiere reservas adecuadas de glucÃ³geno hepÃ¡tico para estimular la glucogenÃ³lisis. Los reciÃ©n nacidos estresados rÃ¡pidamente depletadas sus reservas, haciendo que el glucagÃ³n sea ineficaz frente al severo hiperinsulinismo."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente es un clÃ¡sico \"Hijo de Madre DiabÃ©tica\". Debido al alto suministro de glucosa transplacentario durante el embarazo, el feto desarrollÃ³ una hiperplasia masiva de las cÃ©lulas beta del pÃ¡ncreas para producir altÃ­simas cantidades de insulina. Al cortar el cordÃ³n umbilical, la entrada de glucosa se apaga de golpe, pero el pÃ¡ncreas del bebÃ© sigue liberando insulina en avalancha (hiperinsulinismo endÃ³geno), generando una caÃ­da precipitosa y profunda del azÃºcar sanguÃ­neo (25 mg/dL) en las primeras horas de vida. Cuando un neonato presenta hipoglucemia **SINTOMÃTICA** o niveles severos (< 25-30 mg/dL), el manejo oral es insuficiente y peligroso. El protocolo de la AAP y PALS dicta que se debe administrar un **bolo rÃ¡pido y controlado de Dextrosa al 10%** (2 cc/kg = 200 mg/kg), ya que usar concentraciones mayores como el DAD 50% causarÃ­a daÃ±o masivo en las venas y dispararÃ­a un rebote insulÃ­nico aÃºn peor. Tras el bolo, es obligatorio iniciar una Velocidad de InfusiÃ³n de Glucosa (VIG) continua alta para empatar la secreciÃ³n de la insulina hiperactiva, usualmente entre 6 y 8 mg/kg/min.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, el neonato sintomÃ¡tico es una emergencia neurolÃ³gica. El cerebro del bebÃ© se estÃ¡ quedando sin combustible y cada minuto cuenta. Si le das leche materna (OpciÃ³n A), el vaciamiento gÃ¡strico tomarÃ¡ tiempo y no serÃ¡ suficiente para vencer la avalancha de insulina que tiene su cuerpo; la leche es para el niÃ±o asintomÃ¡tico con glucosa en 40, no para el que estÃ¡ letÃ¡rgico en 25. El DAD al 50% (OpciÃ³n B) es un veneno para las venitas del reciÃ©n nacido; las quema al instante por su extrema hiperosmolaridad y genera un pico glucÃ©mico tan alto que el pÃ¡ncreas del bebÃ© responderÃ¡ liberando AÃšN MÃS insulina, empeorando el problema. El GlucagÃ³n (OpciÃ³n D) necesita reservas de glucÃ³geno hepÃ¡tico para funcionar; este bebÃ© macrosÃ³mico y estresado ya quemÃ³ todo su glucÃ³geno, por lo que el GlucagÃ³n no tendrÃ¡ \"municiones\" para subir el azÃºcar. Bolo de DAD al 10% es el estÃ¡ndar de oro pediÃ¡trico mundial.",
    keyPoints: [
      "ReciÃ©n nacido macrosÃ³mico de madre con diabetes.",
      "ApariciÃ³n de temblores, letargia o convulsiones a las 2-6 horas de vida.",
      "GlucometrÃ­a/Glucemia < 25-30 mg/dL (francamente sintomÃ¡tico).",
      "Hipoglucemia neonatal por Hiperinsulinismo fetal. El tratamiento de urgencia es parenteral con bolo de DAD 10% (2 cc/kg) mÃ¡s infusiÃ³n continua. La alimentaciÃ³n enteral sola solo se intenta en bebÃ©s asintomÃ¡ticos y limÃ­trofes.",
      "Tema: Complicaciones del ReciÃ©n Nacido / Hijo de Madre DiabÃ©tica."
    ]
  }
];

