import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #3 (19 jul 2025) Â· Preguntas #81”“#90.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_81_90_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-81",
    university: "UCC",
    examArea: "Medicina Interna / Cardiología / Farmacología",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "farmacologia"],
    statement: "Mujer de 45 años, con antecedente de Trastorno Depresivo Mayor en manejo crónico con Citalopram a dosis altas (40 mg/día), acude a urgencias por un cuadro de neumonía atípica para la cual su médico general le prescribió Azitromicina oral hace 3 días. Hoy es traída por presentar dos episodios de síncope estando en reposo. Al ingreso en urgencias, la paciente se encuentra obnubilada, pálida y diaforética. El monitor electrocardiográfico muestra múltiples salvas de una taquicardia ventricular polimórfica que gira sobre su propio eje isoeléctrico, a una frecuencia de 220 lpm. Durante la salva (que dura 15 segundos y revierte espontáneamente), la presión arterial cae a 60/40 mmHg. Entre los episodios, la paciente recupera el ritmo sinusal, pero se observa un intervalo QTc de 580 ms. Los electrolitos séricos (Potasio, Calcio, Magnesio) se encuentran en rangos de estricta normalidad. ¿Cuál es el tratamiento INMEDIATO de elección para prevenir un nuevo episodio letal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cardioversión eléctrica sincronizada con 100 Joules.",
        distractorProfile: "premature_electrical_therapy",
        incorrectFeedback: "La cardioversión/desfibrilación está indicada SOLO si la Torsades de Pointes degenera en Fibrilación Ventricular sostenida sin pulso o produce un choque hemodinámico irreversible continuo. En salvas autolimitadas, la corrección iónica (Magnesio) es la prioridad preventiva."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Amiodarona intravenosa (bolo de 150 mg) para estabilizar el ritmo ventricular.",
        distractorProfile: "deadly_antiarrhythmic_choice",
        incorrectFeedback: "La Amiodarona es el fármaco de elección para la TV monomórfica, pero está ABSOLUTAMENTE CONTRAINDICADA en la TV polimórfica tipo Torsades de Pointes porque prolonga de forma potente el intervalo QT, agravando la arritmia letal."
      },
      {
        id: "C",
        label: "C",
        text: "Infusión intravenosa de Sulfato de Magnesio (1 a 2 gramos), independientemente del valor de magnesio sérico."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar un bolo de Lidocaína y suspender de inmediato el Citalopram y la Azitromicina.",
        distractorProfile: "secondary_alternative_error",
        incorrectFeedback: "Suspender los fármacos gatillo es obligatorio, pero la lidocaína es solo una medida de tercera línea de escasa eficacia en Torsades de Pointes si no se ha administrado primero el Sulfato de Magnesio."
      }
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta *Torsades de Pointes* (Torsión de Puntas), una taquicardia ventricular polimórfica patognomónicamente desencadenada por la prolongación del intervalo QT. La etiología en este caso es farmacológica: una interacción letal entre dos fármacos prolongadores del QT ampliamente conocidos (Citalopram y un macrólido como la Azitromicina). El tratamiento de primera línea y salvavidas absoluto para prevenir las recurrencias de Torsades de Pointes en un paciente que aún tiene pulso y recupera el ritmo es la administración de **Sulfato de Magnesio intravenoso**, sin importar que los niveles de magnesio en sangre del paciente sean normales. El magnesio actúa estabilizando los canales iónicos transmembrana (bloquea la entrada temprana de calcio) y previene las post-despolarizaciones tempranas que gatillan la arritmia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, aquí hay dos trampas venenosas. La primera es la Amiodarona (Opción B): en la vida real, si el médico ve \"taquicardia ventricular\" y pone Amiodarona, está inyectando un antiarrítmico de clase III (bloqueador de canales de potasio) que prolonga masivamente el QT. Al hacer eso, la paciente entrará en Fibrilación Ventricular intratable y morirá en la camilla. La segunda trampa es el choque eléctrico (Opción A): solo chocamos o desfibrilamos la Torsades de Pointes si la paciente se queda SIN PULSO o el ritmo no revierte y colapsa. Si entra y sale de la arritmia de forma paroxística, el choque no curará el QT largo de base; el Sulfato de Magnesio es la única bala de plata.",
    keyPoints: [
      "Paciente polimedicado (Antidepresivos, Antipsicóticos, Macrólidos, Fluoroquinolonas, Ondansetrón).",
      "Síncope + Torsades de Pointes (Taquicardia polimórfica que \"gira\" en el monitor).",
      "QTc basal prolongado (> 450 ms en hombres o > 470 ms en mujeres).",
      "Sulfato de Magnesio IV inmediato. NUNCA usar Amiodarona (porque prolonga aún más el QT).",
      "Tema: Arritmias Ventriculares / Torsades de Pointes."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-82",
    university: "UCC",
    examArea: "Pediatría / Neonatología / Cirugía",
    topic: "Cirugía Pediátrica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neonatologia", "cirugia"],
    statement: "Recién nacido pretérmino (35 semanas), producto de un embarazo complicado con polihidramnios severo diagnosticado en el tercer trimestre. En la sala de partos, el neonato presenta sialorrea abundante y babeo espumoso continuo por la boca (\"hace burbujas\"). En su primer intento de alimentación al pecho materno, el bebé tose enérgicamente, se atraganta y presenta un episodio de cianosis profunda que requiere estimulación. El pediatra intenta pasar una sonda orogástrica calibre 8 Fr, pero esta encuentra un tope elástico a los 10 cm de la arcada dentaria y no logra avanzar al estómago. Una radiografía toracoabdominal muestra la sonda enrollada en el bolsón esofágico superior, pero se observa una burbuja gástrica francamente prominente y abundante aire en el intestino. ¿Cuál es la variante anatómica MÁS probable y su implicación respiratoria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Atresia esofágica pura (Tipo A); el aire intestinal proviene de deglución intrauterina previa.",
        distractorProfile: "radiographic_impossibility",
        incorrectFeedback: "En la atresia esofágica pura (Tipo A), sin ninguna fístula asociada, el aire inspirado no tiene ninguna vía anatómica para alcanzar el estómago; la radiografía mostraría invariablemente un abdomen completamente opaco y sin gas (gasless abdomen)."
      },
      {
        id: "B",
        label: "B",
        text: "Atresia esofágica con fístula traqueoesofágica distal (Tipo C); alto riesgo de neumonitis química por reflujo de ácido gástrico hacia los pulmones."
      },
      {
        id: "C",
        label: "C",
        text: "Fístula traqueoesofágica en \"H\" (Tipo E) sin atresia; la sonda se enrolló por espasmo del esfínter esofágico inferior.",
        distractorProfile: "clinical_and_anatomic_mismatch",
        incorrectFeedback: "La fístula en \"H\" permite el paso libre de una sonda orogástrica hasta el estómago sin enrollarse, ya que el esófago es patente en toda su extensión. Su síntoma principal es la neumonía aspirativa recurrente y episodios de asfixia al comer, pero no babeo masivo ni imposibilidad de pasar sonda."
      },
      {
        id: "D",
        label: "D",
        text: "Atresia esofágica con fístula traqueoesofágica proximal (Tipo B); el aire abdominal refleja perforación gástrica intrauterina.",
        distractorProfile: "rare_variant_and_wrong_physiopathology",
        incorrectFeedback: "La variante Tipo B tiene fístula desde la tráquea hacia el bolsón esofágico SUPERIOR. Al igual que el Tipo A, carece de conexión traqueal con el estómago inferior, por lo que su radiografía también sería un \"abdomen sin gas\"."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Atresia Esofágica, evidenciada por la sialorrea masiva (incapacidad para tragar la propia saliva), el atragantamiento inmediato al comer y la imposibilidad de pasar una sonda orogástrica (se enrolla en el fondo de saco ciego superior). Existen 5 tipos de Atresia Esofágica. La presencia masiva de AIRE EN EL ESTÓMAGO y los intestinos (burbuja gástrica en la radiografía) en un niño que tiene el esófago superior totalmente cerrado, indica que el aire respirado está llegando al estómago a través de una comunicación (fístula) entre la tráquea y el esófago inferior. Esta es la **Atresia Esofágica Tipo C (Atresia proximal con fístula distal)**, la variante más común (85% de los casos). El mayor peligro letal de esta configuración no es la desnutrición, sino que el ácido gástrico del estómago refluye libremente por el esófago inferior, cruza la fístula y entra directamente al árbol traqueobronquial, causando una neumonitis química y sepsis pulmonar masiva.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** La clínica es de libro, pero la radiografía deprime los errores. Si el esófago está cerrado arriba (la sonda se enrolla), la única forma física en el universo para que haya gas en el estómago es que haya un tubo conectando los pulmones (llenos de aire) con el estómago. Esa es la fístula traqueoesofágica distal (Tipo C). Si marcas la Atresia pura (Opción A), el abdomen en la radiografía se vería completamente blanco, opaco, sin una sola burbuja de gas, porque nada conecta al estómago con el exterior. La prevención es posicionar al bebé con la cabeza elevada a 45 grados para que la gravedad mantenga el ácido gástrico abajo y no inunde los pulmones a través de la fístula.",
    keyPoints: [
      "Polihidramnios materno + Neonato con babeo espumoso y atragantamiento con la primera toma.",
      "Sonda orogástrica que \"no pasa\" y se enrolla en el tórax superior.",
      "Rx de abdomen CON mucho aire gástrico = Tipo C (fístula distal). Rx SIN aire (abdomen opaco) = Tipo A (Atresia pura).",
      "Atresia Esofágica Tipo C. El manejo inicial requiere dejar una sonda a succión continua en el bolsón superior, posición semisentada y cirugía urgente. Nunca hacer estudios con contraste baritado.",
      "Tema: Cirugía Neonatal / Atresia Esofágica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-83",
    university: "UCC",
    examArea: "Medicina Interna / Nefrología / Farmacología",
    topic: "Nefrología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "nefrologia", "farmacologia"],
    statement: "Un hombre de 62 años, deportista amateur, acude a la consulta externa quejándose de la aparición reciente de un edema severo en miembros inferiores (hasta los muslos), orina \"extremadamente espumosa\" y astenia. Refiere haber estado consumiendo Dosis Altas de Naproxeno (1000 mg/día) e Ibuprofeno durante los últimos 4 meses debido a una tendinitis rotuliana crónica. Al examen físico: PA 140/85 mmHg, edema grado III/IV con fóvea, anasarca incipiente. Paraclínicos: Creatinina sérica 1.3 mg/dL, Albúmina sérica 1.9 g/dL. Parcial de orina: Proteínas > 300 mg/dL (proteinuria masiva en orina de 24h: 9.5 gramos), sedimento urinario estrictamente normal, sin hematuria y sin cilindros. Tiempos de coagulación y complemento normales. Se le practica una biopsia renal. El reporte de microscopía óptica es normal (sin inflamación ni cicatrices glomerulares). ¿Qué hallazgo específico se documentará de forma ineludible en la Microscopía Electrónica (ME) para confirmar la glomerulopatía inducida por AINEs en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Depósitos subepiteliales densos en forma de \"jorobas\" (humps).",
        distractorProfile: "post-infectious_glomerulonephritis_trap",
        incorrectFeedback: "Las \"jorobas\" subepiteliales a la microscopía electrónica son patognomónicas de la Glomerulonefritis Postinfecciosa (Postestreptocócica), la cual debuta clásicamente como un síndrome nefrítico impuro (con hematuria macroscópica y falla renal aguda), no como un nefrótico puro inducido por fármacos."
      },
      {
        id: "B",
        label: "B",
        text: "Borramiento extenso, fusión o fusión de los pedicelos (procesos podocitarios) de las células epiteliales viscerales."
      },
      {
        id: "C",
        label: "C",
        text: "Engrosamiento masivo de la membrana basal con depósitos de amiloide.",
        distractorProfile: "wrong_protein_deposition_disease",
        incorrectFeedback: "La amiloidosis causa síndrome nefrótico en adultos, pero cursa con depósitos que son francamente visibles a la microscopía óptica (material amorfo eosinófilo que tiñe rojo congo positivo y da birrefringencia verde manzana), contradiciendo el reporte de MO normal de la viñeta."
      },
      {
        id: "D",
        label: "D",
        text: "Presencia de semilunas celulares y fibrinosas en el espacio de Bowman.",
        distractorProfile: "rp_glomerulonephritis_trap",
        incorrectFeedback: "Las semilunas (crescentes) son el marcador de la Glomerulonefritis Rápidamente Progresiva; se evidencian claramente en la microscopía óptica y cursan con hematuria, sedimento activo y falla renal terminal en semanas, cuadro ausente en este paciente."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Síndrome Nefrótico puro (proteinuria masiva >3.5g, hipoalbuminemia severa y edema, sin hematuria). La asociación clásica, peculiar y altamente evaluada entre el uso crónico o abusivo de Antiinflamatorios No Esteroideos (AINEs) y el síndrome nefrótico masivo en adultos es el desarrollo de la **Enfermedad de Cambios Mínimos (ECM)**, a menudo coexistiendo con episodios de Nefritis Intersticial Aguda. En la Enfermedad de Cambios Mínimos, la microscopía óptica (convencional) y la inmunofluorescencia son, por definición, completamente NORMALES. La única alteración patológica reside a nivel ultramicroscópico: la microscopía electrónica demuestra la pérdida, borramiento, fusión o retracción (effacement) de los pedicelos de los podocitos, lo que arruina la barrera de filtración de cargas negativas y deja escapar masivamente la albúmina a la orina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, la trampa aquí es creer que la Enfermedad de Cambios Mínimos es exclusiva de la pediatría. Si bien es el 90% de los nefróticos en niños, en adultos suele presentarse asociada a dos grandes gatillos (y a los examinadores les encanta preguntarlos): Los AINEs a dosis tóxicas y el Linfoma de Hodgkin. Fíjate en los distractores: las \"jorobas\" o humps (Opción A) son el sello de la Glomerulonefritis Postestreptocócica, la cual daría hematuria y C3 bajo. Las semilunas (Opción D) dan falla renal rápida y hematuria. Si el riñón se ve \"sano\" en el microscopio normal pero bota 9 gramos de proteínas, el daño es subcelular (podocitario).",
    keyPoints: [
      "Adulto con Síndrome Nefrótico masivo (>8 gramos de proteínas) DE INICIO ABRUPTO, sin hematuria.",
      "Fuerte antecedente de consumo de AINEs (Naproxeno, Ibuprofeno) o antecedente de Linfoma de Hodgkin.",
      "Biopsia renal que reporta \"Microscopía Óptica normal\".",
      "Enfermedad de Cambios Mínimos inducida por fármacos/paraneoplásica. Sello histológico en M.E.: Borramiento/Fusión de podocitos (pedicelos). Responde mágicamente a retirar el AINE y dar esteroides.",
      "Tema: Glomerulopatías Primarias / Enfermedad de Cambios Mínimos."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-84",
    university: "UCC",
    examArea: "Pediatría / Infectología / Neurología",
    topic: "Infectología Pediátrica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "neurologia"],
    statement: "Un niño de 6 años, con diagnóstico conocido de Tetralogía de Fallot no corregida (con cianosis crónica y saturaciones basales de 82%), es llevado a urgencias por un cuadro de 3 días de fiebre persistente de 38.5°C, cefalea matutina intensa, vómitos y cambios en el comportamiento (marcada somnolencia). Hoy en la mañana presentó una convulsión focal motora en la mano y hemicara derecha. Al examen físico: obnubilado, febril, SatO2 80% al aire ambiente, hemiparesia derecha 3/5 y edema de papila bilateral. Se realiza una Tomografía Computarizada (TC) de cráneo con contraste que evidencia una lesión única de 3 cm en el lóbulo frontal izquierdo, redondeada, con un marcado realce en forma de anillo y extenso edema vasogénico perilesional. ¿Cuál es la fisiopatología MÁS probable de esta lesión y los microorganismos etiológicos que DEBEN cubrirse empíricamente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Embolización aséptica por endocarditis trombótica no bacteriana (marántica); no requiere antibióticos, solo anticoagulación y cirugía cardíaca.",
        distractorProfile: "wrong_pathology_oncologic_overlap",
        incorrectFeedback: "La endocarditis marántica se asocia a estados de hipercoagulabilidad en neoplasias malignas avanzadas (adenocarcinomas) o lupus, pero produce infartos cerebrales isquémicos múltiples sin fiebre alta, no una gran lesión purulenta con realce en anillo y edema masivo."
      },
      {
        id: "B",
        label: "B",
        text: "Diseminación hematógena de un embolismo bacteriano paradójico (Absceso Cerebral); la terapia empírica de elección es Ceftriaxona o Cefotaxima asociada a Metronidazol."
      },
      {
        id: "C",
        label: "C",
        text: "Reactivación de un tuberculoma del sistema nervioso central secundario a hipoxia crónica; requiere esquema antituberculoso HRZE inmediato.",
        distractorProfile: "epidemiologic_overlap",
        incorrectFeedback: "El tuberculoma cerebral puede realzar en anillo, pero típicamente tiene un curso subagudo/crónico de semanas a meses con síntomas constitucionales profundos, y no es la complicación directa hiperaguda de un cortocircuito de derecha a izquierda."
      },
      {
        id: "D",
        label: "D",
        text: "Ruptura de un aneurisma micótico por endocarditis; el tratamiento empírico de elección es la Vancomicina aislada a altas dosis.",
        distractorProfile: "endocarditis_complication_mismatch",
        incorrectFeedback: "La ruptura de un aneurisma micótico causa una hemorragia intracerebral o subaracnoidea catastrófica, la cual se vería hiperdensa/blanca en la TAC simple, en lugar del patrón quístico-purulento con realce en anillo periférico propio del absceso parenquimatoso."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Absceso Cerebral agudo. Los niños con Cardiopatías Congénitas Cianógenas (como la Tetralogía de Fallot, que cursa con un cortocircuito de derecha a izquierda intracardíaco masivo) tienen un riesgo astronómicamente alto de desarrollar abscesos cerebrales. Fisiopatológicamente, las bacterias transitorias en la sangre venosa (usualmente flora oral como *Streptococcus spp.* o anaerobios tras el cepillado dental) cruzan la comunicación interventricular directamente hacia la circulación sistémica y el cerebro, **saltándose o esquivando el lecho capilar pulmonar** (el cual normalmente actúa como un filtro fagocítico gigantesco que esteriliza la sangre venosa). La imagen de \"realce en anillo\" con edema y focalización es la firma del absceso. La punción lumbar está contraindicada por riesgo de herniación. El tratamiento empírico mandatorio requiere penetración de la barrera hematoencefálica y cobertura para flora oral/anaerobios y bacilos entéricos: Cefalosporina de 3Âª generación (Ceftriaxona) + Metronidazol (asociando Vancomicina si hay sospecha de S. aureus o trauma/cirugía previa).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un escenario fascinante donde la cardiología explica la infectología. ¿Por qué un niño sano rara vez hace un absceso cerebral de la nada, pero el niño con Fallot sí? Porque en el niño sano, cualquier bacteria que entra por una encía sangrante viaja por las venas hasta los pulmones; allí, los macrófagos alveolares se la comen antes de que llegue a la aorta. En el Fallot, la bacteria llega al ventrículo derecho y, debido a la estenosis pulmonar, cruza por el hueco del tabique (CIV) directo a la aorta y sube al cerebro sin haber tocado los pulmones. Esa es la embolia paradójica. Cubrir los anaerobios (Metronidazol) es la clave porque las bacterias provienen mayormente de hendiduras gingivales sin oxígeno.",
    keyPoints: [
      "Niño con Cardiopatía Cianógena (Tetralogía de Fallot, TGA) o MAV pulmonar.",
      "Tríada: Fiebre + Cefalea/Vómitos (HIC) + Déficit Neurológico Focal o Convulsión focal.",
      "TAC: Lesión que realza en anillo con edema vasogénico perilesional.",
      "Absceso Cerebral por Embolismo Paradójico (se salta el filtro pulmonar). NO hacer Punción Lumbar. Cobertura empírica urgente con Ceftriaxona + Metronidazol.",
      "Tema: Neuroinfección / Absceso Cerebral Pediátrico."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-85",
    university: "UCC",
    examArea: "Medicina Interna / Endocrinología / Urgencias",
    topic: "Endocrinología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia", "urgencias"],
    statement: "Hombre de 75 años, diabético tipo 2, es traído a urgencias en estado de coma. Su familia refiere que vive solo y ha estado sufriendo de una gastroenteritis viral severa (vómitos y diarrea) en las últimas 72 horas que le ha impedido comer. A pesar del ayuno, el paciente continuó tomando su medicación antidiabética de base, Glibenclamida (10 mg/día). Al ingreso: Glasgow 6/15, diaforético, taquicárdico (FC 115 lpm). Se toma una glucometría capilar que marca 30 mg/dL. Inmediatamente se administra un bolo de 50 mL de Dextrosa al 50% (DAD 50%), y el paciente despierta conversando a los 5 minutos (Glucosa 110 mg/dL). Sin embargo, a pesar de iniciar una infusión de Dextrosa al 10% de mantenimiento y brindarle dieta oral, el paciente vuelve a caer en estupor a las dos horas (Glucometría 35 mg/dL). Ante la hipoglucemia severa y refractaria inducida por sulfonilureas, ¿cuál es el antídoto farmacológico MÁS adecuado para frenar el hiperinsulinismo sostenido?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Glucagón intravenoso o intramuscular en bolos repetidos.",
        distractorProfile: "empty_glycogen_stores_trap",
        incorrectFeedback: "El glucagón eleva la glucemia induciendo glucogenólisis hepática. En un paciente que lleva 72 horas en ayuno y vómito por gastroenteritis, las reservas de glucógeno están nulas, por lo que el glucagón será ineficaz. Además, el glucagón también tiene un efecto insulinotrópico paradójico leve."
      },
      {
        id: "B",
        label: "B",
        text: "Infusión intravenosa de Octreotide (Análogo de Somatostatina)."
      },
      {
        id: "C",
        label: "C",
        text: "Bolos repetidos de Dextrosa al 50% (DAD 50%) cada hora hasta la eliminación renal del fármaco oral.",
        distractorProfile: "destructive_rollercoaster_management",
        incorrectFeedback: "Administrar bolos repetidos de DAD 50% exacerba enormemente el pico de secreción insulínica endógena (efecto rebote), provoca esclerosis y trombosis de las venas periféricas, e induce un daño neurológico secundario a las drásticas oscilaciones osmolares."
      },
      {
        id: "D",
        label: "D",
        text: "Hidrocortisona intravenosa a dosis de estrés para aumentar la neoglucogénesis hepática.",
        distractorProfile: "too_slow_and_wrong_pathway",
        incorrectFeedback: "Aunque los glucocorticoides tienen un efecto hiperglucemiante por resistencia insulínica, su latencia de acción es de varias horas, siendo inútiles para revertir de manera inmediata un choque neuroglucopénico refractario que requiere antagonismo celular en el páncreas."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Hipoglucemia Severa Inducida por Sulfonilureas (Glibenclamida). Las sulfonilureas son secretagogos potentes de acción prolongada; se unen al canal de potasio sensible a ATP en las células beta del páncreas, forzando una despolarización y una liberación masiva y continua de insulina endógena, independientemente del nivel de glucosa en sangre. La trampa mortal de esta intoxicación es que administrar Dextrosa (bolos) agrava el problema a largo plazo: el azúcar exógeno estimula AÚN MÁS al páncreas a liberar insulina (efecto rebote hiperinsulínico), lo que explica por qué el paciente recae rápidamente a pesar del goteo de DAD 10%. El tratamiento de rescate definitivo, cuando la hipoglucemia se vuelve recurrente o refractaria a la glucosa inicial, es el **Octreotide**. Al ser un análogo de la somatostatina, el Octreotide inhibe directa y profundamente la liberación de insulina por las células beta del páncreas, rompiendo el ciclo vicioso de secreción.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un caso súper frecuente en nuestros abuelos, Colega. Como la Glibenclamida tiene una vida media larguísima (peor aún si el riñón está fallando un poco por la deshidratación), el abuelo va a seguir botando insulina por 24 a 48 horas seguidas. Si tratas de ganar esta guerra solo con bolos de DAD 50% (Opción C), causarás una flebitis química horrible en las venas del paciente, harás una \"montaña rusa\" de azúcar y el abuelo acabará con daño neurológico permanente. Pones el Octreotide y es como \"desconectarle la batería\" al páncreas. El Glucagón (Opción A) no sirve en la desnutrición/ayuno de 72 horas porque las reservas de glucógeno hepático ya están agotadas; el glucagón necesita glucógeno guardado para funcionar.",
    keyPoints: [
      "Anciano diabético tratado con Sulfonilureas (Glibenclamida, Glimepirida) que se salta comidas (o con falla renal).",
      "Hipoglucemia profunda que REBOTA o recae rápidamente a pesar de la infusión continua de Dextrosa IV.",
      "Hipoglucemia Refractaria por Sulfonilureas. El antídoto fisiológico salvavidas que inhibe la secreción de insulina endógena es el OCTREOTIDE subcutáneo o intravenoso.",
      "Tema: Urgencias Endocrinológicas / Hipoglucemia Refractaria."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-86",
    university: "UCC",
    examArea: "Pediatría / Gastroenterología / Urgencias",
    topic: "Gastroenterología Pediátrica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "urgencias", "endoscopia"],
    statement: "Niño de 2 años de edad es llevado a urgencias por sus padres en estado de irritabilidad, babeo continuo (sialorrea) y rechazo total a la alimentación de inicio súbito hace 45 minutos. Los padres sospechan que el menor ingirió algo mientras jugaba solo en el cuarto de manualidades y herramientas del abuelo. Al examen físico: hemodinámicamente estable, SatO2 98%, sin estridor respiratorio. Una radiografía cérvico-tóraco-abdominal AP y Lateral documenta un objeto radiopaco redondo alojado en el tercio superior del esófago (a nivel de la clavícula/C6). En la proyección anteroposterior (AP), el objeto muestra un signo del \"doble contorno\" o \"halo anular\". En la proyección lateral, se observa un borde escalonado o biselado. ¿Cuál es el riesgo patogénico MÁS grave asociado a este objeto y la conducta ineludible inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Necrosis de licuefacción esofágica por quemadura electrolítica/hidróxido; se debe proceder a extracción endoscópica INMEDIATA (emergencia de < 2 horas)."
      },
      {
        id: "B",
        label: "B",
        text: "Obstrucción mecánica benigna por impactación de una moneda; se debe observar por 24 horas y realizar extracción con sonda Foley si no progresa.",
        distractorProfile: "catastrophic_radiological_misinterpretation",
        incorrectFeedback: "La radiografía describe el signo patognomónico de una pila de botón (\"doble contorno\"), no de una moneda (que se vería como un disco sólido homogéneo). Observar una pila impactada en esófago por 24 horas garantiza necrosis transmural letal."
      },
      {
        id: "C",
        label: "C",
        text: "Perforación intestinal por toxicidad de metales pesados (plomo); se requiere administración inmediata de catárticos salinos y extracción quirúrgica.",
        distractorProfile: "wrong_toxicology_mechanism",
        incorrectFeedback: "La toxicidad sistémica por metales de la batería ocurre solo si se rompe la cápsula, pero el mecanismo letal hiperagudo en las primeras horas es netamente la quemadura cáustica/eléctrica por generación de hidróxidos tisulares locales."
      },
      {
        id: "D",
        label: "D",
        text: "Riesgo de migración hacia la vía aérea; se debe programar extracción ambulatoria por broncoscopia rígida en las próximas 24 horas.",
        distractorProfile: "unaccepted_delay_and_wrong_location",
        incorrectFeedback: "El cuerpo extraño ya está impactado en la vía digestiva (esófago), no en la tráquea; programar el procedimiento para el día siguiente es negligencia grave debido a la perforación esofágica inminente."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente ingirió una Pila de Botón (batería de reloj/litio), un evento que constituye una de las **emergencias pediátricas endoscópicas más críticas y tiempo-dependientes**. Radiológicamente, la pila de botón se diferencia de una moneda inofensiva por dos signos clave: el \"doble contorno o halo\" en la radiografía AP, y el \"bisel o escalón\" en la radiografía lateral (que corresponden al diseño de contacto negativo/positivo de la batería). A diferencia de una moneda (que solo causa obstrucción mecánica), la pila de botón atascada en el esófago (donde las paredes húmedas conectan sus polos) genera una corriente eléctrica micro-galvánica inmediata. Esta corriente produce hidróxido de sodio en el polo negativo, provocando una **necrosis de licuefacción cáustica profunda** en la pared del esófago que puede causar perforación franca, mediastinitis o una fístula aorto-esofágica mortal en apenas **2 horas** de impactación. El tratamiento exige remoción endoscópica de emergencia innegociable (< 2 horas).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un error de diagnóstico radiológico aquí cuesta la vida del niño. Muchos internos ven un círculo blanco en la placa y le dicen a los padres \"tranquilos, se tragó una moneda, esperemos a que la expulse en la popó\". Si le das el alta y era una pila, la pila perfora el esófago, erosiona la arteria aorta y el niño muere desangrado en su cama a las pocas horas. Si el círculo blanco tiene un doble anillo (como un platillo volador o un botón de jean), es una batería. Entras al quirófano a las 3 AM sin dudarlo.",
    keyPoints: [
      "Preescolar con sospecha de cuerpo extraño esofágico.",
      "Radiografía radiopaca redonda con \"Doble anillo/contorno\" o \"escalón lateral\".",
      "Pila de botón (Batería). Es una emergencia quirúrgica/endoscópica de extrema urgencia por riesgo de perforación esofágica térmica/química masiva en menos de 2 horas. Nunca diferir.",
      "Tema: Ingesta de Cuerpos Extraños Pediátricos / Pila de Botón."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-87",
    university: "UCC",
    examArea: "Medicina Interna / Neumología / Cuidado Intensivo",
    topic: "Neumología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neumologia", "cuidado_intensivo"],
    statement: "Mujer de 55 años, ingresada en el servicio de ginecología cursando el 12Âº día postoperatorio de una histerectomía radical por carcinoma de endometrio. Durante la mañana, al levantarse al baño, presenta de forma brusca disnea extrema, opresión torácica, mareo profundo y síncope transitorio. A la evaluación médica se encuentra pálida, mal prefundida, diaforética. Signos vitales: PA 70/40 mmHg (choque), FC 135 lpm, SatO2 84% con O2 a 15 L/min. Ingurgitación yugular evidente. Se realiza de inmediato una ecocardiografía a la cabecera (POCUS) que evidencia dilatación masiva del Ventrículo Derecho (relación VD/VI > 1.0) con desviación del septum interventricular hacia la izquierda (signo de la \"D\" en eje corto) y ausencia de derrame pericárdico. Tras la administración de 500 mL de cristaloides, la PA cae a 65/35 mmHg. Ante la imposibilidad inmediata de realizar una Angio-TC de tórax por la inestabilidad extrema, ¿cuál es la intervención terapéutica DE SALVAMENTO MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar terapia trombolítica sistémica intravenosa inmediata (ej. Alteplase o Tenecteplase) por sospecha altísima de TEP Masivo."
      },
      {
        id: "B",
        label: "B",
        text: "Suspender líquidos, iniciar infusión de Noradrenalina a dosis altas e iniciar anticoagulación exclusiva con Heparina de Bajo Peso Molecular.",
        distractorProfile: "inadequate_therapy_for_massive_pe",
        incorrectFeedback: "La anticoagulación exclusiva es el pilar para el TEP estable (bajo/intermedio riesgo). En el TEP masivo, la heparina no restaura la permeabilidad de la arteria pulmonar, por lo que el ventrículo derecho seguirá claudicando contra la presión insuperable hasta el colapso final."
      },
      {
        id: "C",
        label: "C",
        text: "Trasladar urgentemente a la paciente a sala de operaciones para Tromboendarterectomía pulmonar abierta por la contraindicación quirúrgica de la trombólisis.",
        distractorProfile: "logistic_delay_trap",
        incorrectFeedback: "La embolectomía quirúrgica o por catéter es una alternativa si la trombólisis está contraindicada ABSOLUTAMENTE (ej. sangrado intracraneal), pero su disponibilidad casi nunca es inmediata en hospitales promedio, garantizando la muerte pre-operatoria. Además, la cirugía reciente es solo una contraindicación relativa."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar pericardiocentesis de urgencia ante la sospecha de taponamiento cardíaco oculto con disfunción ventricular derecha.",
        distractorProfile: "bedside_echo_misinterpretation",
        incorrectFeedback: "El enunciado descarta explícitamente el derrame pericárdico mediante la ecocardiografía POCUS, haciendo la pericardiocentesis una intervención fútil, incorrecta y extremadamente peligrosa."
      }
    ],
    correctOptionId: "A",
    explanation: "La paciente cursa con un Tromboembolismo Pulmonar (TEP) Masivo (de Alto Riesgo), evidenciado por inestabilidad hemodinámica profunda (choque cardiogénico derecho), desaturación e ingurgitación yugular tras una inmovilización quirúrgica oncológica. La ecocardiografía a la cabecera confirmó la \"cor pulmonale aguda\" (fallo y dilatación masiva del VD). Según las guías de la Sociedad Europea de Cardiología (ESC), en un paciente con inestabilidad hemodinámica franca, sospecha clínica altísima de TEP y un ecocardiograma que documente falla ventricular derecha inequívoca, **NO se debe retrasar la terapia para obtener una Angio-TC**. El tratamiento de rescate primario es la **Trombólisis Sistémica Inmediata (rt-PA)**. Aunque la paciente está en posoperatorio reciente de cirugía pélvica (lo cual es una contraindicación *relativa* para fibrinolíticos debido al riesgo de sangrado de la cúpula vaginal), en el escenario de choque obstructivo fulminante y paro cardiorrespiratorio inminente, el riesgo de muerte por asfixia y falla del VD supera el riesgo de sangrado quirúrgico, y la trombólisis es mandatoria.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Aquí te mido el pulso como clínico en jefe de la UCI, Colega. Tienes a una mujer a 5 minutos de hacer un paro cardíaco por obstrucción total de la arteria pulmonar. La opción B (Heparina + Nora) es la ruta de los cobardes; la heparina no disuelve un coágulo del tamaño de un pulgar que está trabado en la bifurcación pulmonar, la paciente morirá. El verdadero dilema mental es: \"¡Pero si la operaron hace 12 días, va a sangrar por todas partes!\". Las guías son clarísimas: el TEP masivo en choque desautoriza el miedo al sangrado, prefieres una paciente que sangre en la pelvis (que el cirujano puede re-explorar y empaquetar) a una paciente muerta por fallo de bomba. Administra el fibrinolítico.",
    keyPoints: [
      "Paciente con cuadro agudo de disnea/síncope postoperatorio o oncológico que se presenta EN CHOQUE (Hipotensión <90 mmHg).",
      "Eco-Bedside (POCUS) con crecimiento masivo del VD y colapso del VI (Septum en \"D\").",
      "TEP de Alto Riesgo / Masivo. Requiere Trombólisis Sistémica (Alteplase) INMEDIATA. No retrasar la terapia por TAC. La inestabilidad vital hace que casi todas las contraindicaciones de la trombólisis pasen a ser relativas.",
      "Tema: Tromboembolismo Pulmonar Masivo / Urgencias."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-88",
    university: "UCC",
    examArea: "Pediatría / Reumatología / Oftalmología",
    topic: "Reumatología Pediátrica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "reumatologia"],
    statement: "Una niña de 3 años es llevada a la consulta de pediatría por presentar, desde hace 4 meses, aumento de volumen, rigidez matutina y cojera (claudicación) matinal en la rodilla derecha y el tobillo izquierdo. El examen físico revela derrame articular y limitación a la movilidad en dichas dos articulaciones de manera indolora, sin eritema cutáneo. Resto del examen es normal, con crecimiento y desarrollo conservados. No hay fiebre, pérdida de peso ni visceromegalias. Laboratorios: Hemograma, función renal y hepática normales. Factor Reumatoide (FR) negativo. Anticuerpos Antinucleares (ANA) francamente POSITIVOS a un título de 1:640. Se establece diagnóstico de Artritis Idiopática Juvenil (AIJ) en su variedad Oligoarticular. Ante este diagnóstico y perfil serológico, ¿cuál es la interconsulta OBLIGATORIA MÁS urgente y crítica que previene la secuela irreversible más temida de esta enfermedad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Remisión a Nefrología Pediátrica para biopsia renal por alto riesgo de Glomerulonefritis Lúpica Silente.",
        distractorProfile: "ana_lupus_generalization_trap",
        incorrectFeedback: "Aunque los ANA están positivos, el lupus debuta sistémicamente con nefritis, citopenias, rash y compromiso polisistémico grave, no como una mono/oligoartritis crónica indolente y aislada en una niña de 3 años, por lo que una biopsia renal carece de justificación clínica."
      },
      {
        id: "B",
        label: "B",
        text: "Remisión a Oftalmología para un examen con Lámpara de Hendidura urgente por riesgo de Uveítis Anterior Asintomática."
      },
      {
        id: "C",
        label: "C",
        text: "Remisión a Cardiología Pediátrica para ecocardiograma buscando carditis reumática silente e insuficiencia aórtica.",
        distractorProfile: "rheumatic_fever_overlap",
        incorrectFeedback: "La fiebre reumática causa poliartritis migratoria, cursa con fiebre alta y reactantes fase aguda elevados, y se asocia a anticuerpos anti-estreptolisina, pero no a positividad de ANA y cojera indolora persistente de meses de duración."
      },
      {
        id: "D",
        label: "D",
        text: "Remisión a Ortopedia Infantil para artrocentesis diagnóstica y lavado articular profiláctico.",
        distractorProfile: "aggressive_surgical_trap",
        incorrectFeedback: "El lavado articular quirúrgico se reserva para la artritis séptica comprobada. En la AIJ, la intervención articular se limita a la infiltración terapéutica de corticoides de depósito (triamcinolona) tras confirmación clínica."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con Artritis Idiopática Juvenil (AIJ) variedad Oligoarticular (afecta ≤ 4 articulaciones en los primeros 6 meses). A diferencia de los adultos, el gran peligro oculto de las niñas preescolares con AIJ Oligoarticular y **Anticuerpos Antinucleares (ANA) positivos** no es la destrucción ósea severa, sino el desarrollo de **Uveítis Anterior Crónica NO granulomatosa**. Esta inflamación del ojo es engañosa porque cursa típicamente de forma COMPLETAMENTE ASINTOMÁTICA (ojo blanco, indoloro, sin fotofobia). Sin embargo, si no se detecta y se trata tempranamente con esteroides oftálmicos, el daño inflamatorio silencioso provocará sinequias (adherencias del iris), cataratas secundarias, glaucoma y, finalmente, ceguera bilateral irreversible. Las guías reumatológicas internacionales exigen que todo niño con AIJ Oligoarticular ANA (+) sea evaluado con Lámpara de Hendidura por el oftalmólogo cada 3 meses durante los primeros años de la enfermedad.",
    keyPoints: [
      "Niña preescolar (<6 años) con inflamación de 1 a 4 articulaciones (clásico rodilla/tobillo), típicamente indolora.",
      "ANA Positivos, FR Negativo (AIJ Oligoarticular clásica).",
      "Riesgo elevadísimo de Uveítis Anterior Asintomática. La evaluación con Lámpara de Hendidura por oftalmología es mandatoria para evitar la ceguera.",
      "Tema: Artritis Idiopática Juvenil / Complicaciones Oftalmológicas."
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica porque evalúa la complicación más grave y silenciosa de la AIJ.

La clave no es preocuparse excesivamente por el daño articular.
La clave es:
Evaluación rutinaria oftalmológica obligatoria con lámpara de hendidura en niñas con AIJ oligoarticular y ANA positivo.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Niña preescolar de 3 años.
• Mono u oligoartritis crónica (rodilla y tobillo), indolora.
• Factor reumatoide negativo y ANA fuertemente positivos.
• Diagnóstico establecido de AIJ variedad oligoarticular.

¿Por qué la opción B es la respuesta correcta?
El gran peligro de la AIJ Oligoarticular ANA (+) es el desarrollo de Uveítis Anterior Crónica, que es COMPLETAMENTE asintomática. Remitir urgentemente a oftalmología es la única forma de diagnosticarla tempranamente y evitar la ceguera irreversible.

¿Por qué NO Nefrología Pediátrica?
Aunque los ANA son positivos, el Lupus Eritematoso Sistémico (LES) pediátrico debuta con nefritis, citopenias, rash y compromiso sistémico grave. La paciente tiene una enfermedad articular aislada y sana en todos los demás aspectos, descartando nefropatía lúpica por ahora.

¿Por qué NO Cardiología Pediátrica?
La fiebre reumática causa poliartritis migratoria hiperaguda, carditis y reactantes de fase aguda elevadísimos. No cursa con ANA positivos ni oligoartritis indolente de meses de duración.

¿Por qué NO Ortopedia Infantil?
El lavado articular está indicado en artritis séptica comprobada, no en enfermedad autoinmune. La AIJ se maneja con inmunosupresión o esteroides locales, no con intervenciones quirúrgicas agresivas.

¿Cuál es la trampa de examen?
Muchos estudiantes asumen que, como los ANA están positivos, el diagnóstico oculto es un Lupus.
Pero el dato decisivo es:
En una niña de 3 años, ANA (+) asociados a una artritis leve y prolongada en la rodilla indican el mayor riesgo estadístico para presentar ceguera por uveítis silenciosa.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar diagnóstico de AIJ oligoarticular (≤4 articulaciones).
2. Solicitar Anticuerpos Antinucleares (ANA).
3. Si los ANA son POSITIVOS, clasificar a la paciente como de "Alto Riesgo".
4. Referir inmediatamente a Oftalmología para examen con lámpara de hendidura cada 3-4 meses.
5. Iniciar tratamiento inmunosupresor o esteroides oftálmicos si se detecta uveítis silenciosa.

Perlas de examen
✅ Niña + AIJ Oligoarticular + ANA (+) = Riesgo MÁXIMO de uveítis asintomática.
✅ La uveítis de la AIJ es la única que NO enrojece el ojo (ojo blanco indoloro).
✅ ANA positivo en este contexto no significa Lupus, significa "ojo en peligro".
✅ El pronóstico de movilidad articular en la AIJ oligoarticular es excelente, el pronóstico visual es el que debe preocupar.

Referencias
• ACR Guidelines for the Treatment of JIA and JIA-Associated Uveitis.
• Nelson Textbook of Pediatrics.
• Cassidy JT, Petty RE. Textbook of Pediatric Rheumatology.`
  },
  {
    id: "ucc-conv-2025-07-19-89",
    university: "UCC",
    examArea: "Medicina Interna / Gastroenterología / Cirugía",
    topic: "Gastroenterología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "cirugia"],
    statement: "Hombre de 65 años, previamente sano, ingresa a urgencias traído por su hijo. Refiere un cuadro de dolor en el cuadrante superior derecho de 48 horas de evolución, asociado a fiebre no cuantificada. En las últimas 12 horas, la familia notó al paciente muy confuso, respondiendo incoherencias y con una coloración amarillenta marcada en los ojos. Al examen físico: obnubilado, ictericia franca en escleras y mucosas, PA 85/55 mmHg (hipotensión), FC 115 lpm, T 39.5°C. Abdomen muy doloroso a la palpación del hipocondrio derecho. Laboratorios urgentes: Leucocitos 22.000/mmÂ³, Bilirrubina Total 7.5 mg/dL (Bilirrubina Directa 6.1 mg/dL), Fosfatasa Alcalina 680 U/L. Una ecografía hepatobiliar revela la vesícula biliar distendida sin paredes engrosadas, pero se documenta un colédoco marcadamente dilatado de 14 mm con una imagen ecogénica productora de sombra acústica en su interior. Se inicia reanimación hídrica intensa y antibióticos intravenosos de amplio espectro, pero el paciente persiste hipotenso. ¿Cuál es el procedimiento DE EMERGENCIA VITAL innegociable a continuación?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Colecistectomía laparoscópica de urgencia en las primeras 24 horas.",
        distractorProfile: "wrong_anatomic_target_surgery",
        incorrectFeedback: "La colecistectomía extrae la vesícula biliar pero no desobstruye el colédoco, dejando la causa primaria de la colangitis (la coledocolitiasis) completamente intacta y garantizando la progresión de la sepsis."
      },
      {
        id: "B",
        label: "B",
        text: "Colangiopancreatografía Retrógrada Endoscópica (CPRE) urgente para esfinterotomía y drenaje de la vía biliar."
      },
      {
        id: "C",
        label: "C",
        text: "Derivación biliodigestiva (Hepaticoyeyunostomía en Y de Roux) a cielo abierto.",
        distractorProfile: "obsolete_major_surgery_in_unstable_patient",
        incorrectFeedback: "Las reconstrucciones biliares complejas a cielo abierto en medio de un choque séptico por colangitis purulenta acarrean una mortalidad quirúrgica casi total; las directrices exigen enfoques mínimamente invasivos de endoscopia (CPRE) o percutáneos."
      },
      {
        id: "D",
        label: "D",
        text: "Instaurar infusión continua de Noradrenalina, diferiendo intervenciones invasivas hasta alcanzar normotensión arterial.",
        distractorProfile: "deadly_delay_of_source_control",
        incorrectFeedback: "Los vasopresores son requeridos para soporte, pero posponer el control del foco (source control = destapar el colédoco) en una sepsis de origen obstructivo purulento impide revertir el cuadro inflamatorio base."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Colangitis Aguda Tóxica o Supurativa severa, un cuadro infeccioso catastrófico que se define por la **Pentada de Reynolds**: Tríada de Charcot (Dolor en CSD, Ictericia y Fiebre) MÁS Shock Hipotensivo y Alteración del Sensorio. La fisiopatología radica en un cálculo que tapona por completo el conducto colédoco, convirtiendo a la vía biliar intra y extrahepática en un absceso a altísima presión que \"inyecta\" bacterias directamente al torrente venoso hepático. La mortalidad de la Pentada de Reynolds con tratamiento médico exclusivo (antibióticos solos) se acerca al 100%, ya que los antibióticos no logran penetrar la pus a alta presión retenida tras la piedra. Según las Guías de Tokio 2018 (TG18), la Colangitis de Grado III (Severa, con disfunción de órganos/choque) exige **Drenaje Biliar Urgente / Emergente**. El gold standard minimamente invasivo de primera línea que desatasca la cañería salvando la vida del paciente es la CPRE con esfinterotomía y extracción del cálculo o colocación de stent.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, aquí no se negocia. Si un paciente tiene \"Pentada de Reynolds\", el pus está empujando las paredes del hígado para llegar a la sangre. La Colecistectomía (Opción A) no sirve para nada aquí: quitar la vesícula biliar es sacar un órgano adyacente, pero la piedra asesina está en el tubo principal (el colédoco). Operar la vesícula dejaría al paciente con el colédoco bloqueado e igual moriría. Si el gastroenterólogo no puede hacer la CPRE porque el paciente está muy inestable o la anatomía falla, el paso siguiente es drenarlo con una aguja por la piel del hígado (Drenaje Biliar Transhepático Percutáneo - CTPH). Los antibióticos o los vasopresores solos sin liberar la presión biliar son cosméticos.",
    keyPoints: [
      "Paciente con Tríada de Charcot (Ictericia + Dolor CSD + Fiebre) que además tiene Hipotensión y Confusión Mental.",
      "Ecografía evidenciando coledocolitiasis (colédoco > 6-8 mm con piedra).",
      "Colangitis Tóxica / Pentada de Reynolds. El paso de reanimación suprema, después de iniciar los antibióticos, es destapar el conducto colédoco mediante CPRE de urgencia.",
      "Tema: Urgencias Biliares / Colangitis Aguda."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-90",
    university: "UCC",
    examArea: "Medicina Interna / Reumatología / Infectología",
    topic: "Infectología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "reumatologia", "infectologia"],
    statement: "Mujer de 22 años, nulípara, sin comorbilidades conocidas. Consulta a urgencias por un cuadro de 4 días de fiebre, escalofríos y múltiples dolores articulares migratorios (rodilla derecha, luego codo izquierdo, seguido de la muñeca derecha). Hoy nota la aparición de 6 lesiones pustulosas indoloras con base eritematosa distribuidas en las palmas de las manos, el dorso de los pies y los antebrazos. Al examen físico: febrícula de 37.8°C, se palpa inflamación franca a nivel de la cara dorsal de las muñecas que sigue el trayecto de los tendones extensores (tenosinovitis manifiesta). Refiere ser sexualmente activa y haber tenido un cambio de pareja reciente. Se toman hemocultivos y cultivos de líquido sinovial articular, los cuales, tras 48 horas de incubación, se reportan negativos. El gram articular tampoco muestra gérmenes. ¿Cuál es el diagnóstico clínico MÁS probable y la prueba diagnóstica que confirmaría el agente patógeno con la mayor especificidad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Endocarditis infecciosa de válvula derecha por S. aureus; el diagnóstico se confirma con ecocardiograma transesofágico.",
        distractorProfile: "wrong_infectious_syndrome_and_focus",
        incorrectFeedback: "Aunque la endocarditis puede causar lesiones embólicas en las palmas (lesiones de Janeway), el síndrome primario articular (tenosinovitis) en una paciente joven sin fiebre alta ni soplos orienta hacia una patología reumatológica/infecciosa transmitida sexualmente."
      },
      {
        id: "B",
        label: "B",
        text: "Fiebre reumática aguda post-estreptocócica; la prueba diagnóstica de elección son los títulos de Anti-estreptolisina O (ASO).",
        distractorProfile: "age_and_clinical_presentation_mismatch",
        incorrectFeedback: "La fiebre reumática presenta poliartritis migratoria, pero sus lesiones cutáneas clásicas son el eritema marginado o nódulos subcutáneos, NO lesiones pustulosas palmo-plantares ni tenosinovitis manifiesta, siendo además muy rara después de la adolescencia."
      },
      {
        id: "C",
        label: "C",
        text: "Infección Gonocócica Diseminada (Síndrome Artritis-Dermatitis); la confirmación requiere pruebas de amplificación de ácidos nucleicos (NAAT) de exudado endocervical o hisopado vaginal."
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome de Reiter (Artritis Reactiva) por Chlamydia trachomatis; el diagnóstico definitivo lo da el análisis de HLA-B27.",
        distractorProfile: "wrong_rheumatologic_reactive_pathology",
        incorrectFeedback: "La artritis reactiva causa uretritis, uveítis y artritis asimétrica, y la queratodermia blenorrágica, pero la tríada hiperaguda de tenosinovitis, poliartritis y pústulas es patognomónica de la bacteriemia gonocócica activa."
      }
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta la tríada clásica de la Infección Gonocócica Diseminada (IGD): tenosinovitis, dermatitis (lesiones pustulosas acrales) y poliartralgias migratorias. Ocurre característicamente en mujeres jóvenes sexualmente activas (a menudo coincidiendo con la menstruación o un embarazo temprano). *Neisseria gonorrhoeae* es un microorganismo muy fastidioso; por tanto, los hemocultivos y los cultivos de líquido sinovial rutinarios son negativos en más del 70-80% de los casos (pues requiere medios especiales como el agar Thayer-Martin, e incluso así la rentabilidad es baja). Para confirmar el patógeno, la prueba más sensible y específica es el NAAT (Prueba de Amplificación de Ácidos Nucleicos) tomado directamente de las mucosas donde el patógeno coloniza primariamente: endocérvix, uretra, faringe o recto, independientemente de que la paciente no tenga síntomas genitourinarios (flujo).",
    keyPoints: [
      "Tríada: Tenosinovitis + Pústulas acrales + Poliartralgia migratoria.",
      "Mujer joven sexualmente activa.",
      "Cultivos articulares y hemocultivos TÍPICAMENTE NEGATIVOS por la naturaleza fastidiosa de la bacteria.",
      "El diagnóstico etiológico se confirma buscando *Neisseria gonorrhoeae* en las mucosas primarias mediante NAAT (PCR endocervical).",
      "Tema: Infecciones de Transmisión Sexual / Artritis Gonocócica."
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Un clásico de los servicios de urgencias. Ves las pústulas, la inflamación de los tendones y piensas "¡Artritis séptica!". Le sacas líquido a la rodilla y oh sorpresa, el líquido está estéril. ¡No caigas en la trampa! El gonococo diseminado daña las articulaciones más por mecanismos inmunomediados circulantes y microabscesos que por purulencia franca masiva dentro del espacio articular. Como el gonococo odia el medio ambiente externo y no crece en los caldos de cultivo normales, tienes que ir a buscar su ADN directamente a su "cueva" (el cérvix) usando NAAT (PCR).`
  }
];

