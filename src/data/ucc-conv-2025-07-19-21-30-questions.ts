import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC â€” EdiciÃ³n #3 (19 jul 2025) Â· Preguntas #21â€“#30.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_21_30_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-21",
    university: "UCC",
    examArea: "Medicina Interna / NeurologÃ­a / Cuidado Intensivo",
    topic: "NeurologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neurologia", "cuidado_intensivo"],
    statement: "Mujer de 28 aÃ±os, con diagnÃ³stico previo de Miastenia Gravis en manejo crÃ³nico con Piridostigmina oral, es traÃ­da a urgencias por presentar debilidad muscular generalizada profunda de 48 horas de evoluciÃ³n tras un cuadro de gastroenteritis aguda. A su ingreso: PA 130/80 mmHg, FC 110 lpm. Presenta ptosis palpebral bilateral severa, voz nasal, incapacidad para deglutir saliva y un patrÃ³n respiratorio paradÃ³jico con uso marcado de mÃºsculos accesorios. La Capacidad Vital Forzada (CVF) medida a la cabecera es de 10 mL/kg. Se decide proceder con intubaciÃ³n orotraqueal electiva y traslado a la Unidad de Cuidados Intensivos. AdemÃ¡s de iniciar Inmunoglobulina Intravenosa (IGIV) o PlasmafÃ©resis, Â¿cuÃ¡l es la conducta MÃS adecuada respecto a su medicaciÃ³n de base (Piridostigmina)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aumentar la dosis de Piridostigmina al doble y administrarla por sonda nasogÃ¡strica para revertir la crisis.",
        distractorProfile: "deadly_cholinergic_overload",
        incorrectFeedback: "Aumentar la dosis en una placa neuromuscular refractaria no mejora la fuerza motora (nicotÃ­nica), pero exacerba letalmente los efectos muscarÃ­nicos induciendo broncorrea masiva y bradicardia severa."
      },
      {
        id: "B",
        label: "B",
        text: "Suspender temporalmente la Piridostigmina mientras la paciente se encuentre bajo ventilaciÃ³n mecÃ¡nica invasiva."
      },
      {
        id: "C",
        label: "C",
        text: "Cambiar la Piridostigmina oral a Neostigmina intravenosa en infusiÃ³n continua para lograr mayor biodisponibilidad.",
        distractorProfile: "wrong_pharmacological_escalation",
        incorrectFeedback: "La administraciÃ³n intravenosa de anticolinesterÃ¡sicos agrava severamente el manejo de las secreciones de la vÃ­a aÃ©rea en el paciente bajo ventilaciÃ³n mecÃ¡nica, complicando el destete respiratorio."
      },
      {
        id: "D",
        label: "D",
        text: "Mantener la dosis basal exacta de Piridostigmina para evitar un rebote de debilidad muscular severa al extubarla.",
        distractorProfile: "unjustified_maintenance_therapy",
        incorrectFeedback: "Mantener el fÃ¡rmaco no previene ningÃºn \"rebote\" porque el problema primario es autoinmune (exceso de anticuerpos), y mantenerlo expone al paciente a neumonÃ­as asociadas al ventilador por secreciones espesas."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una Crisis MiastÃ©nica (falla respiratoria inminente evidenciada por CVF < 15 mL/kg y sÃ­ntomas bulbares severos). El tratamiento pilar en la UCI es el soporte ventilatorio invasivo y la inmunomodulaciÃ³n rÃ¡pida (IGIV o PlasmafÃ©resis). Una regla de oro en el cuidado intensivo neurocrÃ­tico es que, una vez el paciente con crisis miastÃ©nica estÃ¡ intubado, los inhibidores de la acetilcolinesterasa (Piridostigmina) DEBEN SUSPENDERSE. Esto se hace por dos razones: 1) Evitar la hipersecreciÃ³n traqueobronquial colinÃ©rgica que complica el manejo del ventilador y favorece neumonÃ­as asociadas al ventilador, y 2) Descartar que el cuadro tenga un componente de \"Crisis ColinÃ©rgica\" por sobredosis acumulativa del fÃ¡rmaco, permitiendo que la placa neuromuscular se \"limpie\" y recupere su sensibilidad.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, en neurologÃ­a esta pregunta tumba a la mayorÃ­a. El instinto mÃ©dico te dice \"si el paciente estÃ¡ dÃ©bil por falta de acetilcolina, dale mÃ¡s medicina\". Â¡Falso! En la crisis miastÃ©nica severa, la placa motora estÃ¡ tan tapada por anticuerpos que la piridostigmina ya no tiene dÃ³nde actuar. Si le das mÃ¡s dosis (opciÃ³n A o C), solo vas a hiperestimular los receptores muscarÃ­nicos del pulmÃ³n, inundando el tubo endotraqueal de mocos espesos (broncorrea colinÃ©rgica) y causando un SDRA o atelectasias masivas. Intubas, suspendes la pastilla, lavas la sangre con plasmafÃ©resis y, dÃ­as despuÃ©s, cuando la vayas a extubar, reinicias la piridostigmina.",
    keyPoints: [
      "Paciente con Miastenia Gravis que desarrolla debilidad bulbar/respiratoria (Crisis MiastÃ©nica).",
      "IndicaciÃ³n de intubaciÃ³n orotraqueal (CVF < 15-20 mL/kg).",
      "SuspensiÃ³n inmediata de los anticolinesterÃ¡sicos (Piridostigmina) una vez intubado, e inicio de IGIV o PlasmafÃ©resis.",
      "Tema: Urgencias NeurolÃ³gicas / Crisis MiastÃ©nica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-22",
    university: "UCC",
    examArea: "PediatrÃ­a / NefrologÃ­a",
    topic: "NefrologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "nefrologia"],
    statement: "Un niÃ±o de 4 aÃ±os fue diagnosticado hace 8 semanas con SÃ­ndrome NefrÃ³tico IdiopÃ¡tico (edema, proteinuria de 50 mg/mÂ²/h e hipoalbuminemia de 1.8 g/dL). Se iniciÃ³ tratamiento estandarizado con Prednisolona vÃ­a oral a dosis de 60 mg/mÂ²/dÃ­a. Hoy acude a control evidenciÃ¡ndose persistencia de edema facial y escrotal. Los exÃ¡menes de control reportan: AlbÃºmina sÃ©rica de 2.0 g/dL y un parcial de orina con proteinuria masiva (relaciÃ³n Pr/Cr en orina de 4.5). Sus niveles de complemento (C3 y C4) son normales y la serologÃ­a viral es negativa. Â¿CuÃ¡l es el paso INMEDIATO de mayor relevancia clÃ­nica y pronÃ³stica para reorientar el manejo de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Adicionar un Inhibidor de la Enzima Convertidora de Angiotensina (Enalapril) y continuar la Prednisolona por 4 semanas mÃ¡s.",
        distractorProfile: "insufficient_conservative_management",
        incorrectFeedback: "Los IECAs son terapias coadyuvantes antiproteinÃºricas Ãºtiles, pero continuar con un esquema de esteroides que ya demostrÃ³ fracaso clÃ­nico (superando las 6 semanas) expone al niÃ±o a toxicidad grave sin beneficio primario."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar terapia inmunosupresora de segunda lÃ­nea con Ciclofosfamida o Tacrolimus de forma empÃ­rica.",
        distractorProfile: "blind_immunosuppression_trap",
        incorrectFeedback: "El uso de inhibidores de calcineurina o agentes alquilantes estÃ¡ indicado en la corticorresistencia, pero NUNCA se inician de forma empÃ­rica sin una biopsia renal previa que clasifique el tipo histolÃ³gico de lesiÃ³n."
      },
      {
        id: "C",
        label: "C",
        text: "Indicar de forma prioritaria la realizaciÃ³n de una biopsia renal percutÃ¡nea."
      },
      {
        id: "D",
        label: "D",
        text: "Doblar la dosis actual de Prednisolona y administrar pulsos de Metilprednisolona intravenosa.",
        distractorProfile: "dangerous_steroid_overload",
        incorrectFeedback: "Aumentar aÃºn mÃ¡s las dosis de esteroides en un paciente francamente corticorresistente no inducirÃ¡ remisiÃ³n, pero precipitarÃ¡ complicaciones agudas como cataratas, osteopenia severa y supresiÃ³n suprarrenal."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un SÃ­ndrome NefrÃ³tico Corticorresistente (SNCR), definido formalmente por la persistencia de proteinuria en rango nefrÃ³tico a pesar de haber completado 4 a 6 semanas (dependiendo de la guÃ­a ISKDC o KDIGO) de tratamiento con corticosteroides a dosis plenas. En pediatrÃ­a, el sÃ­ndrome nefrÃ³tico tÃ­pico (usualmente de Cambios MÃ­nimos) no se biopsia de entrada porque asume una alta tasa de respuesta a esteroides. SIN EMBARGO, ante la instauraciÃ³n de corticorresistencia, el algoritmo cambia radicalmente: la indicaciÃ³n de biopsia renal percutÃ¡nea se vuelve ABSOLUTA. Esto es debido a que la etiologÃ­a probable deja de ser Cambios MÃ­nimos y cambia hacia Glomeruloesclerosis Focal y Segmentaria (GEFS) o patologÃ­as genÃ©ticas podocitarias, las cuales requieren confirmaciÃ³n histolÃ³gica antes de exponer al niÃ±o a inmunosupresores de alta toxicidad celular.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, en pediatrÃ­a, la aguja de biopsia se guarda celosamente hasta que el esteroide fracasa. Un niÃ±o de 4 aÃ±os con sÃ­ndrome nefrÃ³tico debe \"secarse\" (remitir la proteinuria) en menos de 4 semanas. Si llegas a la semana 6 y la orina sigue espumosa con proteÃ­nas altÃ­simas, el diagnÃ³stico ya no es una simple enfermedad de cambios mÃ­nimos benigna. Tiene alta probabilidad de ser una GEFS. No puedes empezar a darle Tacrolimus o Ciclosporina (OpciÃ³n B) a ciegas sin ver primero bajo el microscopio electrÃ³nico si los podocitos estÃ¡n esclerosados o si hay una mutaciÃ³n genÃ©tica, porque si es genÃ©tico (mutaciÃ³n de nefrina/podocina), los inmunosupresores no le servirÃ¡n de nada y solo le destrozarÃ¡n la mÃ©dula Ã³sea.",
    keyPoints: [
      "NiÃ±o con sÃ­ndrome nefrÃ³tico que NO remite la proteinuria tras 4 a 6 semanas de esteroides a dosis plenas.",
      "ConfirmaciÃ³n de Corticorresistencia.",
      "Biopsia Renal Obligatoria. No se debe iniciar quimioterapia/inmunosupresiÃ³n mayor (inhibidores de calcineurina) sin tener el resultado histopatolÃ³gico y descartar causas genÃ©ticas.",
      "Tema: SÃ­ndrome NefrÃ³tico PediÃ¡trico / Corticorresistencia."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-23",
    university: "UCC",
    examArea: "Medicina Interna / CardiologÃ­a / NefrologÃ­a",
    topic: "CardiologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "nefrologia"],
    statement: "Hombre de 55 aÃ±os con antecedente de Enfermedad Renal CrÃ³nica estadio 5 en hemodiÃ¡lisis trisemanal, quien reporta haber faltado a sus Ãºltimas cuatro sesiones (hace 9 dÃ­as). Es traÃ­do a urgencias por presentar dolor torÃ¡cico retroesternal de caracterÃ­sticas pleurÃ­ticas, que empeora en decÃºbito supino y mejora al inclinarse hacia adelante. Al examen fÃ­sico: PA 118/78 mmHg, FC 98 lpm, SatO2 96%, sin ingurgitaciÃ³n yugular y sin pulso paradÃ³jico. A la auscultaciÃ³n se evidencia un frote pericÃ¡rdico rudo trifÃ¡sico en el borde esternal izquierdo. El ecocardiograma de ingreso muestra un derrame pericÃ¡rdico circunferencial leve (<10 mm) sin colapso de cavidades derechas ni variaciones respiratorias significativas. ParaclÃ­nicos: BUN de 145 mg/dL, Creatinina 11.2 mg/dL. Â¿CuÃ¡l es el tratamiento de PRIMERA LÃNEA para el cuadro actual de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar manejo inmediato con AINEs (Ibuprofeno a dosis altas) asociados a Colchicina por 3 meses.",
        distractorProfile: "automatic_guideline_misapplication",
        incorrectFeedback: "El tratamiento con AINEs y colchicina es el estÃ¡ndar para la pericarditis aguda viral/idiopÃ¡tica, pero es completamente ineficaz en la pericarditis urÃ©mica, donde la causa inflamatoria es la acumulaciÃ³n de toxinas no dializadas."
      },
      {
        id: "B",
        label: "B",
        text: "Coordinar el inicio de una sesiÃ³n de HemodiÃ¡lisis de urgencia intensiva."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar Pericardiocentesis evacuadora guiada por ecografÃ­a para anÃ¡lisis del lÃ­quido pericÃ¡rdico.",
        distractorProfile: "premature_invasive_procedure",
        incorrectFeedback: "La pericardiocentesis se reserva estrictamente para pacientes con evidencia clÃ­nica o ecocardiogrÃ¡fica de taponamiento cardÃ­aco inminente; invadir un derrame pericÃ¡rdico leve conlleva un riesgo de perforaciÃ³n miocÃ¡rdica injustificado."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar pulsos de Metilprednisolona intravenosa de forma prioritaria.",
        distractorProfile: "wrong_immunosuppression_use",
        incorrectFeedback: "Los corticosteroides sistÃ©micos se reservan para pericarditis autoinmunes severas o refractarias (ej. Lupus) y no depuran la causa primaria de la inflamaciÃ³n tÃ³xica urÃ©mica."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Pericarditis UrÃ©mica clÃ¡sica, diagnosticada por la clÃ­nica (dolor pericÃ¡rdico), el frote rudo patognomÃ³nico y el contexto de sÃ­ndrome urÃ©mico severo (BUN > 100 mg/dL por abandono de diÃ¡lisis). A diferencia de la pericarditis aguda viral/idiopÃ¡tica, la fisiopatologÃ­a de la pericarditis urÃ©mica es puramente tÃ³xica/inflamatoria por retenciÃ³n de toxinas nitrogenadas. Por lo tanto, NO responde al manejo convencional con AINEs o Colchicina. Las guÃ­as internacionales establecen que la presencia de frote o pericarditis clÃ­nica en un paciente con ERC es una INDICACIÃ“N ABSOLUTA de diÃ¡lisis de urgencia (o intensificaciÃ³n del esquema dialÃ­tico si ya lo recibe). El derrame pericÃ¡rdico es leve y no tiene signos ecogrÃ¡ficos ni clÃ­nicos de taponamiento (no hay colapso de VD, no hay pulso paradÃ³jico), por lo que el drenaje invasivo no estÃ¡ indicado.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Mucho ojo con no actuar en modo \"piloto automÃ¡tico\", Colega. Si ves \"pericarditis\", el cerebro grita \"Â¡Ibuprofeno y Colchicina!\" (OpciÃ³n A). Pero el paciente tiene la creatinina en 11 y el BUN en 145; los AINEs son inÃºtiles contra las toxinas urÃ©micas y agravarÃ­an el riesgo de sangrado pericÃ¡rdico por la disfunciÃ³n plaquetaria de la uremia. La diÃ¡lisis es el Ãºnico mecanismo capaz de \"lavar\" la urea de la sangre y desinflamar el pericardio. Tampoco debes puncionar (OpciÃ³n C) un derrame de 8 mm en un paciente urÃ©mico estable; la aguja rozarÃ¡ el ventrÃ­culo y causarÃ¡s una hemorragia miocÃ¡rdica iatrogÃ©nica letal.",
    keyPoints: [
      "Paciente con Enfermedad Renal CrÃ³nica / elevaciÃ³n marcada de BUN (> 80-100 mg/dL).",
      "Dolor torÃ¡cico pleurÃ­tico que mejora al sentarse + frote pericÃ¡rdico a la auscultaciÃ³n.",
      "Ausencia de signos de taponamiento cardÃ­aco.",
      "Pericarditis UrÃ©mica. El tratamiento curativo es iniciar/intensificar la HemodiÃ¡lisis. AINEs y Colchicina estÃ¡n inindicados.",
      "Tema: Urgencias DialÃ­ticas / Pericarditis UrÃ©mica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-24",
    university: "UCC",
    examArea: "PediatrÃ­a / InfectologÃ­a / NeumologÃ­a",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "neumologia"],
    statement: "NiÃ±a de 10 aÃ±os, con diagnÃ³stico de Fibrosis QuÃ­stica (mutaciÃ³n F508del homocigota), es hospitalizada por una exacerbaciÃ³n pulmonar aguda caracterizada por aumento de la tos, volumen de esputo francamente purulento, caÃ­da del VEF1 en un 15% respecto a su basal y pÃ©rdida de peso reciente. En su historia clÃ­nica, los cultivos de esputo de hace 6 meses y 1 aÃ±o documentaron colonizaciÃ³n crÃ³nica por *Pseudomonas aeruginosa* (cepas mucoides). La paciente no luce en choque, pero se encuentra muy sintomÃ¡tica. SegÃºn los estÃ¡ndares de cuidado para la exacerbaciÃ³n infecciosa en Fibrosis QuÃ­stica colonizada, Â¿cuÃ¡l de los siguientes regÃ­menes antibiÃ³ticos es el de PRIMERA LÃNEA MÃS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cefepime intravenoso como monoterapia a dosis altas.",
        distractorProfile: "dangerous_monotherapy_in_cf",
        incorrectFeedback: "La monoterapia intravenosa en exacerbaciones agudas por *Pseudomonas* en FQ se asocia a tasas inaceptablemente altas de fracaso terapÃ©utico y emergencia rÃ¡pida de resistencia antimicrobiana intra-hospitalaria."
      },
      {
        id: "B",
        label: "B",
        text: "Ceftazidima intravenosa asociada a Tobramicina intravenosa."
      },
      {
        id: "C",
        label: "C",
        text: "Levofloxacino oral en dosis Ãºnica diaria asociado a Azitromicina.",
        distractorProfile: "inadequate_oral_coverage",
        incorrectFeedback: "Las fluoroquinolonas orales se reservan para exacerbaciones muy leves en Ã¡mbito ambulatorio; una exacerbaciÃ³n hospitalaria con pÃ©rdida de VEF1 exige la biodisponibilidad y potencia de la terapia combinada parenteral."
      },
      {
        id: "D",
        label: "D",
        text: "Tobramicina inhalada de forma exclusiva sin necesidad de manejo sistÃ©mico por la estabilidad hemodinÃ¡mica.",
        distractorProfile: "inappropriate_acute_management",
        incorrectFeedback: "Los antibiÃ³ticos inhalados (como tobramicina o colistina) se utilizan crÃ³nicamente para suprimir la carga bacteriana ambulatoria, pero carecen de la penetraciÃ³n alveolar profunda requerida para resolver un episodio inflamatorio agudo lobar."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una exacerbaciÃ³n pulmonar aguda en el contexto de una Fibrosis QuÃ­stica (FQ) con colonizaciÃ³n crÃ³nica confirmada por *Pseudomonas aeruginosa*. Las guÃ­as de la Cystic Fibrosis Foundation (CFF) establecen categÃ³ricamente que, para tratar una exacerbaciÃ³n aguda en un paciente colonizado por *Pseudomonas*, el tratamiento de elecciÃ³n EXIGE una terapia combinada intravenosa con **dos** antibiÃ³ticos de diferentes clases con actividad antipseudomÃ³nica (terapia dual). Esto se realiza para asegurar un efecto bactericida sinÃ©rgico y, fundamentalmente, para prevenir la apariciÃ³n in vivo de cepas extremadamente resistentes. La combinaciÃ³n clÃ¡sica recomendada es un beta-lactÃ¡mico antipseudomÃ³nico (Ceftazidima, Cefepime, Meropenem o Piperacilina-Tazobactam) asociado a un aminoglucÃ³sido (Tobramicina o Amikacina).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** En la Fibrosis QuÃ­stica, la *Pseudomonas* vive protegida bajo una biopelÃ­cula (biofilm) espesa de alginato (cepas mucoides). Si la atacas con un solo antibiÃ³tico (monoterapia, OpciÃ³n A), las bacterias que sobreviven dentro de la pelÃ­cula mutarÃ¡n sus porinas en menos de 48 horas y crearÃ¡s un \"sÃºper bicho\" intratable. Por eso siempre la acorralamos con dos mecanismos diferentes: un beta-lactÃ¡mico que rompe su pared por fuera (Ceftazidima) y un aminoglucÃ³sido que viaja hasta el ribosoma para bloquear su sÃ­ntesis (Tobramicina). La terapia inhalada sola (OpciÃ³n D) es el pilar de mantenimiento ambulatorio, no el manejo agudo de una exacerbaciÃ³n grave con caÃ­da del VEF1.",
    keyPoints: [
      "NiÃ±o/adulto con Fibrosis QuÃ­stica colonizado por *Pseudomonas aeruginosa*.",
      "Cuadro clÃ­nico de exacerbaciÃ³n pulmonar infecciosa aguda.",
      "Terapia intravenosa DUAL obligatoria antipseudomÃ³nica (ej. Ceftazidima + AminoglucÃ³sido). La monoterapia estÃ¡ proscrita en exacerbaciones severas de FQ.",
      "Tema: Fibrosis QuÃ­stica / ExacerbaciÃ³n Pulmonar."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-25",
    university: "UCC",
    examArea: "Medicina Interna / EndocrinologÃ­a",
    topic: "EndocrinologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia"],
    statement: "Mujer de 42 aÃ±os acude a consulta por hallazgo incidental de una masa cervical anterior. Al examen fÃ­sico se palpa un nÃ³dulo tiroideo en el lÃ³bulo derecho, de consistencia firme, mÃ³vil, indoloro. No hay adenopatÃ­as cervicales palpables. Se realiza una ecografÃ­a de tiroides que describe un nÃ³dulo sÃ³lido, hipoecogÃ©nico, de bordes regulares, sin microcalcificaciones, con un diÃ¡metro mÃ¡ximo de 2.2 cm (TIRADS 4). Los paraclÃ­nicos iniciales solicitados reportan una TSH sÃ©rica de 0.05 mUI/L (marcadamente suprimida, rango normal 0.4-4.0), con niveles de T4 libre y T3 total normales. Â¿CuÃ¡l es el paso INMEDIATO MÃS adecuado a seguir en la evaluaciÃ³n de este nÃ³dulo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar una PunciÃ³n AspiraciÃ³n con Aguja Fina (PAAF) guiada por ecografÃ­a basÃ¡ndose en el diÃ¡metro mayor a 1.5 cm.",
        distractorProfile: "premature_biopsy_without_functional_status",
        incorrectFeedback: "La PAAF estÃ¡ indicada por ecografÃ­a Ãºnicamente si la TSH es normal o elevada (o si la gammagrafÃ­a demuestra un nÃ³dulo frÃ­o); puncionar un nÃ³dulo funcionante sin estudio isotÃ³pico previo viola el algoritmo diagnÃ³stico y genera falsos diagnÃ³sticos citolÃ³gicos."
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar de forma prioritaria una GammagrafÃ­a Tiroidea con Iodo-123 o Tecnecio-99m."
      },
      {
        id: "C",
        label: "C",
        text: "Prescribir Metimazol para normalizar el perfil hormonal antes de decidir la resecciÃ³n quirÃºrgica.",
        distractorProfile: "premature_medical_therapy",
        incorrectFeedback: "Aunque los antitiroideos pueden ser parte del tratamiento futuro de un adenoma tÃ³xico, iniciar manejo farmacolÃ³gico sin confirmar el estado funcional anatÃ³mico con gammagrafÃ­a enmascara el cuadro subyacente."
      },
      {
        id: "D",
        label: "D",
        text: "Programar LobectomÃ­a tiroidea derecha debido al alto riesgo de malignidad por el aspecto hipoecogÃ©nico ecogrÃ¡fico.",
        distractorProfile: "unjustified_surgery",
        incorrectFeedback: "Un nÃ³dulo hiperfuncionante asintomÃ¡tico sin confirmaciÃ³n de malignidad no tiene indicaciÃ³n quirÃºrgica de urgencia; la cirugÃ­a inmediata es un sobretratamiento radical inaceptable."
      }
    ],
    correctOptionId: "B",
    explanation: "El abordaje del nÃ³dulo tiroideo estÃ¡ estrictamente protocolizado por las guÃ­as de la American Thyroid Association (ATA). El primer paso laboratorial absoluto ante un nÃ³dulo tiroideo clÃ­nico o ecogrÃ¡fico es medir la TSH sÃ©rica. Si la TSH es normal o alta, el nÃ³dulo se evalÃºa segÃºn sus caracterÃ­sticas ecogrÃ¡ficas (tamaÃ±o y sospecha) para decidir la biopsia (PAAF). SIN EMBARGO, si la TSH se encuentra **suprimida** (baja), indica que la glÃ¡ndula estÃ¡ produciendo hormona de forma autÃ³noma. En este caso especÃ­fico, el siguiente paso OBLIGATORIO es una GammagrafÃ­a Tiroidea. Si el nÃ³dulo es \"caliente\" (hipercaptante/autÃ³nomo), el riesgo de malignidad es inferior al 1%, y la PAAF NO ESTÃ INDICADA, manejÃ¡ndose como un adenoma tÃ³xico. Solo si el nÃ³dulo resulta ser \"frÃ­o\" (no captante), se procede a la PAAF.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, aquÃ­ el algoritmo te tienta a equivocarte. Si ves un nÃ³dulo TIRADS 4 de 2.2 cm, tu mente grita \"Â¡punciÃ³n a la aguja!\" (OpciÃ³n A). Pero el nÃ³dulo es inteligente, el algoritmo te pone un \"peaje\" previo: la TSH. Si la TSH es de 0.05, significa que el nÃ³dulo es una fÃ¡brica hiperactiva de hormonas (un adenoma tÃ³xico o nÃ³dulo caliente). El cÃ¡ncer de tiroides es tejido desorganizado que casi nunca es capaz de producir hormona tiroidea funcionante. Por ende, los nÃ³dulos \"calientes\" en gammagrafÃ­a casi nunca son cÃ¡ncer. Si lo puncionas sin necesidad, puedes inducir un sangrado intra-nodular masivo, ademÃ¡s de desperdiciar recursos del sistema de salud.",
    keyPoints: [
      "Paciente con nÃ³dulo tiroideo palpable o ecogrÃ¡fico.",
      "TSH marcadamente disminuida (suprimida).",
      "Realizar GammagrafÃ­a Tiroidea inmediata para evaluar funcionalidad. NUNCA puncionar de primera lÃ­nea un nÃ³dulo con TSH suprimida sin conocer si es hiperfuncionante.",
      "Tema: NÃ³dulo Tiroideo / GammagrafÃ­a."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-26",
    university: "UCC",
    examArea: "Medicina Interna / InfectologÃ­a / NeurologÃ­a",
    topic: "InfectologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "infectologia", "neurologia"],
    statement: "Hombre de 35 aÃ±os, con antecedente de infecciÃ³n por VIH en estado de abandono crÃ³nico del tratamiento antirretroviral (TARV), acude por cuadro de 3 semanas de progresiÃ³n insidiosa de debilidad en el hemicuerpo izquierdo, inestabilidad de la marcha, dificultad para la articulaciÃ³n de palabras (disartria) y dÃ©ficit de atenciÃ³n leve. Niega fiebre, cefalea o convulsiones. Examen neurolÃ³gico: hemiparesia espÃ¡stica izquierda profunda, hemianopsia homÃ³nima izquierda y ataxia franca. El recuento actual de CD4 es de 35 cÃ©l/mmÂ³. Una Resonancia MagnÃ©tica (RMN) cerebral simple y con contraste evidencia mÃºltiples lesiones extensas, asimÃ©tricas y confluentes en la sustancia blanca periventricular y subcortical del hemisferio derecho y fosa posterior; dichas lesiones NO captan medio de contraste, NO generan edema perilesional y NO presentan efecto de masa. Â¿CuÃ¡l es el diagnÃ³stico MÃS probable y su tratamiento especÃ­fico de primera lÃ­nea?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Linfoma Primario del SNC; se debe iniciar Metotrexato sistÃ©mico y radioterapia craneal.",
        distractorProfile: "wrong_radiological_pattern_lymphoma",
        incorrectFeedback: "El linfoma primario del SNC tÃ­picamente se presenta como una o pocas lesiones focales periventriculares que presentan captaciÃ³n sÃ³lida o en anillo irregular de contraste, asociado a un marcado efecto de masa tumoral."
      },
      {
        id: "B",
        label: "B",
        text: "Encefalitis por Toxoplasma gondii; iniciar terapia empÃ­rica con Pirimetamina y Sulfadiazina.",
        distractorProfile: "wrong_radiological_pattern_toxoplasma",
        incorrectFeedback: "La toxoplasmosis cerebral se manifiesta clÃ¡sicamente por mÃºltiples lesiones nodulares en los ganglios basales que presentan un intenso realce en anillo tras la administraciÃ³n de gadolinio, con abundante edema vasogÃ©nico perifÃ©rico."
      },
      {
        id: "C",
        label: "C",
        text: "LeucoencefalopatÃ­a Multifocal Progresiva (LMP); el tratamiento exige el inicio temprano y optimizaciÃ³n de la terapia antirretroviral (TARV)."
      },
      {
        id: "D",
        label: "D",
        text: "Encefalitis por Citomegalovirus (CMV); administrar Ganciclovir endovenoso de forma prioritaria.",
        distractorProfile: "rare_cmv_manifestation",
        incorrectFeedback: "La encefalitis por CMV es una entidad subaguda que produce un patrÃ³n de ventriculoencefalitis con realce ependimario difuso, muy distante del daÃ±o focal en la sustancia blanca profunda (leucoencefalopatÃ­a) descrito."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta la descripciÃ³n clÃ­nica y radiolÃ³gica perfecta de la LeucoencefalopatÃ­a Multifocal Progresiva (LMP), una enfermedad desmielinizante subaguda causada por la reactivaciÃ³n del Virus JC en pacientes con inmunosupresiÃ³n profunda (CD4 clÃ¡sicamente < 100). Su sello patognomÃ³nico distintivo frente a otras infecciones oportunistas en la neuroimagen (RMN) es la presencia de lesiones en la sustancia blanca que **carecen de realce (no captan contraste)** y **no presentan efecto de masa ni edema perilesional**, a diferencia de la toxoplasmosis o el linfoma. Lamentablemente, no existe ningÃºn fÃ¡rmaco antiviral o terapia dirigida que destruya el virus JC con eficacia clÃ­nica probada. El ÃšNICO tratamiento que mejora la supervivencia en la LMP es la reconstituciÃ³n rÃ¡pida del sistema inmunolÃ³gico celular mediante el inicio y optimizaciÃ³n urgente de la Terapia Antirretroviral (TARV).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, aquÃ­ te juegan la psicologÃ­a del mÃ©dico que siempre quiere formular un antibiÃ³tico. En pacientes con SIDA y lesiones cerebrales: si realzan en \"anillo\" y tienen edema, es Toxoplasma. Si es lesiÃ³n Ãºnica grandota que realza periventricular, es Linfoma. Pero si las manchas son \"fantasmas\" (estÃ¡n ahÃ­, desbaratan los nervios del paciente, pero no empujan el cerebro, no se inflaman y no captan el contraste del radiÃ³logo), es el Virus JC causando LMP. Como la farmacologÃ­a no le hace cosquillas al virus JC, tu Ãºnica medicina es devolverle los linfocitos CD4 al paciente dÃ¡ndole su tratamiento contra el VIH de inmediato.",
    keyPoints: [
      "Paciente con VIH severamente inmunosuprimido (CD4 < 50-100).",
      "DÃ©ficit neurolÃ³gico focal subagudo SIN fiebre ni cefalea (apiretico).",
      "RMN cerebral: Lesiones en sustancia blanca, ASIMÃ‰TRICAS, SIN realce de contraste y SIN efecto de masa/edema.",
      "LeucoencefalopatÃ­a Multifocal Progresiva (Virus JC). Tratamiento: Iniciar o reiniciar el TARV inmediatamente (InmunoreconstituciÃ³n).",
      "Tema: Infecciones Oportunistas SNC / VIH."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-27",
    university: "UCC",
    examArea: "PediatrÃ­a / GastroenterologÃ­a / CirugÃ­a",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "gastroenterologia", "cirugia"],
    statement: "Un lactante masculino de 5 semanas de vida es traÃ­do a consulta pediÃ¡trica por ictericia persistente desde su segunda semana de nacimiento. A diferencia de las primeras semanas, la madre nota ahora que los paÃ±ales presentan deposiciones de color masilla/blanco tiza (acolia sostenida) y la orina mancha intensamente el paÃ±al de color tÃ© (coluria). El niÃ±o ha ganado peso discretamente pero su desarrollo es normal. Al examen fÃ­sico: ictericia generalizada verdÃ­nica, hepatomegalia de consistencia firme a 4 cm del reborde costal; el bazo no es palpable. ParaclÃ­nicos: Bilirrubina Total 12.5 mg/dL, Bilirrubina Directa 9.8 mg/dL, ALT 115 U/L, AST 130 U/L, GGT 850 U/L. Una ecografÃ­a hepÃ¡tica en ayuno muestra vesÃ­cula biliar ausente (o un cordÃ³n fibroso remanente) y presencia del \"signo del cordÃ³n triangular\" en el hilio hepÃ¡tico. Con este diagnÃ³stico altamente probable, Â¿cuÃ¡l es la intervenciÃ³n TARDÃA o complicaciÃ³n irreversible que se busca prevenir al establecer un lÃ­mite de edad crÃ­tico (<60-90 dÃ­as) para el procedimiento corrector?",
    options: [
      {
        id: "A",
        label: "A",
        text: "El desarrollo inminente de encefalopatÃ­a por depÃ³sito de bilirrubina indirecta en los ganglios basales (Kernicterus).",
        distractorProfile: "toxicological_pathway_error",
        incorrectFeedback: "El Kernicterus es una complicaciÃ³n neurotÃ³xica exclusiva del depÃ³sito de bilirrubina INDIRECTA (no conjugada, liposoluble). En la atresia biliar, el aumento es predominante o exclusivamente de bilirrubina DIRECTA, la cual es hidrosoluble y no penetra el SNC."
      },
      {
        id: "B",
        label: "B",
        text: "La apariciÃ³n de un carcinoma hepatocelular primario de la infancia desencadenado por la inflamaciÃ³n ductal.",
        distractorProfile: "wrong_oncological_timeline",
        incorrectFeedback: "Aunque la atresia de vÃ­as biliares produce cirrosis (factor de riesgo tumoral en adultos), el carcinoma hepatocelular no es la complicaciÃ³n temprana que marca el reloj de supervivencia a los 3 meses de vida del bebÃ©."
      },
      {
        id: "C",
        label: "C",
        text: "El establecimiento de cirrosis biliar secundaria progresiva y falla hepÃ¡tica terminal, requiriendo trasplante."
      },
      {
        id: "D",
        label: "D",
        text: "La obliteraciÃ³n del conducto pancreÃ¡tico accesorio con desarrollo de insuficiencia exocrina nutricional profunda.",
        distractorProfile: "wrong_organ_system",
        incorrectFeedback: "La atresia afecta de forma focal y progresiva al Ã¡rbol biliar intra y extrahepÃ¡tico; el conducto pancreÃ¡tico drena de forma independiente hacia el duodeno en su mayorÃ­a, por lo que la insuficiencia pancreÃ¡tica no es la secuela primaria temida de este sÃ­ndrome."
      }
    ],
    correctOptionId: "C",
    explanation: "El lactante cursa con una Atresia de VÃ­as Biliares (AVB), la causa nÃºmero uno de ictericia neonatal colestÃ¡sica (directa) y la indicaciÃ³n mÃ¡s frecuente de trasplante hepÃ¡tico infantil en el mundo. La presentaciÃ³n patognomÃ³nica involucra un niÃ±o que \"luce bien\" pero presenta acolia, coluria y un nivel altÃ­simo de bilirrubina conjugada/directa y GGT. El hallazgo ecogrÃ¡fico del \"signo del cordÃ³n triangular\" (tejido fibroso hiper-ecogÃ©nico en el hilio) sella la alta sospecha. La urgencia absoluta en el diagnÃ³stico de la AVB radica en que el tejido inflamatorio biliar destruye el parÃ©nquima hepÃ¡tico silenciosamente. Si el procedimiento quirÃºrgico corrector (PortoenterostomÃ­a de Kasai) se realiza tarde (tÃ­picamente despuÃ©s de los 60 a 90 dÃ­as de vida), el daÃ±o parenquimatoso ya ha progresado a una Cirrosis Biliar Secundaria irreversible, haciendo que la cirugÃ­a de Kasai fracase y condenando al niÃ±o a requerir un trasplante hepÃ¡tico inmediato para no morir.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un mito frecuente y trÃ¡gico de la prÃ¡ctica clÃ­nica es ver un bebÃ© amarillo al mes de vida y decirle a la mamÃ¡: \"PÃ³ngalo al sol que eso es leche materna\". La ictericia por leche materna SIEMPRE es indirecta y NUNCA hace caca blanca. Si el bebÃ© defeca masilla blanca, su tubo biliar se tapÃ³ (atresia biliar). La bilirrubina directa no cruza la barrera hematoencefÃ¡lica, por lo que NUNCA produce Kernicterus (eso destruye la trampa de la OpciÃ³n A). Lo que sÃ­ hace el Ã¡cido biliar acumulado es carcomer el hÃ­gado hasta volverlo una piedra cirrÃ³tica. Por eso, el pediatra corre contra reloj: si el cirujano hace el Kasai a los 40 dÃ­as, el niÃ±o salva su hÃ­gado propio; si lo operan a los 100 dÃ­as, ya necesita un donante de hÃ­gado.",
    keyPoints: [
      "Lactante (4 a 8 semanas) con ictericia que NO resuelve, acolia franca y coluria.",
      "Bilirrubinemia de predominio Directo (Conjugada).",
      "EcografÃ­a con vesÃ­cula \"fantasma\" o signo del cordÃ³n triangular.",
      "Atresia de VÃ­as Biliares. La meta es intervenir quirÃºrgicamente (cirugÃ­a de Kasai) ANTES de los 60 dÃ­as para evitar la progresiÃ³n silenciosa a cirrosis biliar terminal.",
      "Tema: Ictericia Neonatal ColestÃ¡sica / Atresia Biliar."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-28",
    university: "UCC",
    examArea: "Medicina Interna / HematologÃ­a / Urgencias",
    topic: "HematologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "hematologia", "urgencias"],
    statement: "Hombre de 30 aÃ±os acude a urgencias quejÃ¡ndose de sangrado profundo en las encÃ­as al cepillarse y la apariciÃ³n espontÃ¡nea de mÃºltiples equimosis (\"morados\") masivas en tronco y extremidades durante los Ãºltimos 4 dÃ­as, acompaÃ±ado de astenia profunda. Al examen fÃ­sico: palidez mucocutÃ¡nea generalizada y petequias extensas; no se palpan adenopatÃ­as ni visceromegalias. Laboratorios: Leucocitos 1,500/mmÂ³, NeutrÃ³filos absolutos 400/mmÂ³, Hemoglobina 7.2 g/dL, Plaquetas 12,000/mmÂ³. Tiempos de coagulaciÃ³n: TP 28 seg, TPT 55 seg, FibrinÃ³geno 65 mg/dL (disminuido), DÃ­mero-D > 5,000 ng/mL. Un frotis de sangre perifÃ©rica urgente revela abundantes cÃ©lulas atÃ­picas de gran tamaÃ±o, con un citoplasma densamente granuloso y mÃºltiples estructuras cristalinas rosadas en forma de astilla o bastÃ³n en su interior (MÃºltiples Cuerpos de Auer). Â¿CuÃ¡l es la intervenciÃ³n de supervivencia INMEDIATA que NO debe posponerse en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender cualquier intervenciÃ³n oncolÃ³gica especÃ­fica hasta obtener la confirmaciÃ³n citogenÃ©tica por aspirado de mÃ©dula Ã³sea.",
        distractorProfile: "deadly_diagnostic_delay",
        incorrectFeedback: "La espera de resultados moleculares o de mÃ©dula Ã³sea (que tardan de 48 a 72 horas) estÃ¡ proscrita en guÃ­as hematolÃ³gicas ante sospecha de LPA, debido a la inaceptable letalidad hemorrÃ¡gica por CID en el periodo de espera."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar administraciÃ³n inmediata y a altas dosis de Ãcido Todo-Trans Retinoico (ATRA) por vÃ­a oral ante la alta sospecha clÃ­nica de Leucemia PromielocÃ­tica Aguda."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar quimioterapia citotÃ³xica endovenosa convencional con esquema 7+3 (Citarabina y Daunorrubicina) para frenar la proliferaciÃ³n blastica agudamente.",
        distractorProfile: "harmful_initial_chemotherapy",
        incorrectFeedback: "La quimioterapia citotÃ³xica lÃ­tica (como 7+3) rompe los blastos circulantes masivamente. Si los rompes antes de inducir su maduraciÃ³n con ATRA, liberarÃ¡n toneladas de grÃ¡nulos de proteasa a la sangre, empeorando catastrÃ³ficamente la CID y matando al paciente."
      },
      {
        id: "D",
        label: "D",
        text: "Transfundir crioprecipitados y plaquetas simultÃ¡neamente con una infusiÃ³n a dosis plenas de Heparina de Bajo Peso Molecular para tratar la coagulopatÃ­a diseminada.",
        distractorProfile: "paradoxical_coagulopathy_error",
        incorrectFeedback: "Aunque se debe dar soporte transfusional si hay sangrado activo masivo, el uso rutinario de heparina a dosis plenas en la coagulopatÃ­a de la LPA incrementa gravemente el riesgo de hemorragia fatal del SNC, no resolviendo la patogenia primaria tumoral."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una Leucemia PromielocÃ­tica Aguda (LPA, anteriormente Leucemia Mieloide Aguda variante M3). Se caracteriza por la clÃ¡sica presentaciÃ³n hiperaguda de pancitopenia y un cuadro catastrÃ³fico de CoagulaciÃ³n Intravascular Diseminada (CID) fulminante. El frotis perifÃ©rico es virtualmente diagnÃ³stico: promielocitos hipergranulares atÃ­picos agrupados con los inconfundibles \"Cuerpos de Auer\" (agregaciones cristalizadas de enzimas lisosomales). La LPA se produce por una translocaciÃ³n cromosÃ³mica t(15;17) que genera un receptor mutado de Ã¡cido retinoico, bloqueando la maduraciÃ³n celular. La regla de oro internacional de la hematologÃ­a de urgencias es: ante la **sola sospecha morfolÃ³gica o clÃ­nica de LPA**, el tratamiento con ATRA (derivado de vitamina A) DEBE INICIARSE DE INMEDIATO en urgencias, sin esperar el resultado de la mÃ©dula Ã³sea ni la confirmaciÃ³n genÃ©tica. El ATRA fuerza la maduraciÃ³n terminal de los promielocitos en 24-48 horas, apagando la liberaciÃ³n de procoagulantes que causan la hemorragia intracraneana mortal.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** La Leucemia PromielocÃ­tica Aguda es la leucemia aguda mÃ¡s curable del mundo de la medicina moderna, pero tiene la mayor mortalidad pre-tratamiento de todas. Si retrasas el ATRA para el dÃ­a de maÃ±ana buscando la cama en UCI o esperando al patÃ³logo especialista, el paciente toserÃ¡, le sangrarÃ¡ el cerebro de forma difusa (por la CID) y fallecerÃ¡. El ATRA no es quimioterapia venenosa celular, es una simple vitamina dirigida que \"despierta\" genÃ©ticamente al blasto maligno y le permite convertirse en un neutrÃ³filo sano y dejar de sangrar. Â¡Dalo apenas veas el frotis!",
    keyPoints: [
      "Paciente joven con pancitopenia que debuta sangrando profusamente con alteraciones compatibles con CID (TP/TPT prolongados, fibrinÃ³geno bajo, dÃ­mero D alto).",
      "Frotis de sangre con presencia destacada de Cuerpos de Auer (bastones rosados en el citoplasma).",
      "Leucemia PromielocÃ­tica Aguda (LMA M3). El paso mÃ¡s urgente de vida o muerte es suministrar ATRA oral, superando en prioridad a la quimioterapia e imÃ¡genes.",
      "Tema: Urgencias HematolÃ³gicas / Leucemia PromielocÃ­tica Aguda."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-29",
    university: "UCC",
    examArea: "Medicina Interna / ReumatologÃ­a / Gineco-Obstetricia",
    topic: "ReumatologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "reumatologia", "gineco-obstetricia"],
    statement: "Mujer de 26 aÃ±os con diagnÃ³stico conocido de Lupus Eritematoso SistÃ©mico (LES) desde hace 3 aÃ±os, con antecedente de nefritis lÃºpica controlada. Actualmente cursa un embarazo de 14 semanas de gestaciÃ³n. Su enfermedad reumatolÃ³gica se encontraba en remisiÃ³n mantenida durante el Ãºltimo aÃ±o bajo manejo estricto ambulatorio con Hidroxicloroquina (200 mg/dÃ­a) y Micofenolato de Mofetilo (MMF, 1 g cada 12 horas), habiendo ignorado la indicaciÃ³n de planificaciÃ³n familiar. Durante la consulta prenatal actual, se constata estabilidad clÃ­nica, presiÃ³n arterial normal y parcial de orina con proteÃ­nas negativas. Â¿CuÃ¡l es el ajuste farmacolÃ³gico INMEDIATO mÃ¡s seguro y mandatorio en esta paciente gestante?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Continuar ambos medicamentos en la dosis exacta actual para evitar la recaÃ­da renal que pondrÃ­a en riesgo inminente al feto.",
        distractorProfile: "dangerous_teratogenic_continuation",
        incorrectFeedback: "El mantenimiento del Micofenolato durante el embarazo somete al feto a una embriopatÃ­a demostrada (ausencia de desarrollo de la oreja externa, paladar hendido y defectos cardÃ­acos estructurales)."
      },
      {
        id: "B",
        label: "B",
        text: "Suspender inmediatamente el Micofenolato de Mofetilo e iniciar Azatioprina oral, manteniendo la Hidroxicloroquina inalterada."
      },
      {
        id: "C",
        label: "C",
        text: "Suspender todos los fÃ¡rmacos inmunomoduladores durante el primer y segundo trimestre debido al riesgo teratogÃ©nico global de los modificadores de enfermedad.",
        distractorProfile: "catastrophic_disease_rebound",
        incorrectFeedback: "Abandonar los fÃ¡rmacos modificadores de la enfermedad bajo el pretexto de \"cero drogas en el embarazo\" en una paciente lÃºpica induce brotes agudos severos, preeclampsia precoz y muerte perinatal en altos porcentajes."
      },
      {
        id: "D",
        label: "D",
        text: "Reemplazar la Hidroxicloroquina por Metotrexato a bajas dosis y continuar con el Micofenolato bajo vigilancia estricta ecogrÃ¡fica.",
        distractorProfile: "swap_for_another_teratogen",
        incorrectFeedback: "El Metotrexato es el teratÃ³geno mÃ¡s potente y citotÃ³xico (inhibidor del Ã¡cido fÃ³lico) en el armamentario reumatolÃ³gico, estando absolutamente contraindicado en mujeres con deseo genÃ©sico o embarazo instaurado."
      }
    ],
    correctOptionId: "B",
    explanation: "El manejo del LES en el embarazo requiere un balance delicadÃ­simo. El principio rector es que el riesgo de muerte fetal o complicaciones maternas catastrÃ³ficas por una *recaÃ­da lÃºpica* durante el embarazo supera el riesgo general de usar medicamentos compatibles. La Hidroxicloroquina es el pilar de supervivencia y SE DEBE MANTENER OBLIGATORIAMENTE en todo el embarazo (suspenderla precipita brotes lÃºpicos masivos y daÃ±o orgÃ¡nico materno-fetal). SIN EMBARGO, el Micofenolato de Mofetilo es un teratÃ³geno humano absoluto comprobado (ClasificaciÃ³n D/X, asociado a malformaciones craneofaciales y abortos) y debe suspenderse DE INMEDIATO. El fÃ¡rmaco de transiciÃ³n y mantenimiento de elecciÃ³n para reemplazar al micofenolato, considerado seguro durante la gestaciÃ³n (no atraviesa la barrera placentaria de forma enzimÃ¡ticamente activa para el feto), es la Azatioprina.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Punto clave en control prenatal de reumatologÃ­a. Hay fÃ¡rmacos que estÃ¡n vetados para las mujeres encinta. Si dice Metotrexato, Ciclofosfamida o Micofenolato: alÃ©jalos de la embarazada si no quieres provocar deformidades severas o aborto. La Azatioprina es el salvavidas inmunosupresor de la mujer encinta porque el hÃ­gado fetal inmaduro carece de la enzima inosinato pirofosforilasa, protegiÃ©ndolo de los efectos tÃ³xicos celulares del fÃ¡rmaco mientras cuida el riÃ±Ã³n de la madre. Quitarle la Hidroxicloroquina (OpciÃ³n C) por \"miedo\", como hacÃ­an los mÃ©dicos de antaÃ±o, garantiza casi con certeza un brote renal o cutÃ¡neo letal a mitad del embarazo.",
    keyPoints: [
      "Paciente con Lupus u otra enfermedad autoinmune grave embarazada.",
      "Manejo previo que incluye Micofenolato de Mofetilo, Metotrexato o Ciclofosfamida.",
      "La Hidroxicloroquina SIEMPRE se continÃºa (es segura y salva embarazos lÃºpicos). El Micofenolato es TERATOGÃ‰NICO absoluto y se sustituye inmediatamente por Azatioprina (que es segura).",
      "Tema: Lupus y Embarazo / FarmacologÃ­a Autoinmune."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-30",
    university: "UCC",
    examArea: "PediatrÃ­a / NeonatologÃ­a / CardiologÃ­a",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neonatologia", "cardiologia"],
    statement: "ReciÃ©n nacido prematuro de 26 semanas de edad gestacional se encuentra en su cuarto dÃ­a de vida en la Unidad de Cuidados Intensivos Neonatales, conectado a ventilaciÃ³n mecÃ¡nica por SÃ­ndrome de Dificultad Respiratoria (Enfermedad de Membrana Hialina). Hoy, el neonatÃ³logo documenta la apariciÃ³n de un soplo sistÃ³lico en maquinaria continuo en el borde esternal superior izquierdo, acompaÃ±ado de pulsos saltones arteriales perifÃ©ricos (celer) y un aumento progresivo de los requerimientos ventilatorios con hepatomegalia. Un ecocardiograma confirma un Conducto Arterioso Permeable (PDA) hemodinÃ¡micamente significativo. En los paraclÃ­nicos urgentes tomados hace una hora resalta un recuento plaquetario de 38.000/mmÂ³ y una ecografÃ­a transfontanelar reporta una Hemorragia Intraventricular (HIV) aguda grado III en el lado derecho. Â¿CuÃ¡l es la estrategia de cierre del ductus MÃS segura y apropiada en este neonato?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar tratamiento farmacolÃ³gico con dosis endovenosas plenas de Indometacina, titulando a respuesta de cierre ecogrÃ¡fico.",
        distractorProfile: "dangerous_classical_drug_use",
        incorrectFeedback: "La indometacina genera una potente disfunciÃ³n plaquetaria e interfiere severamente con la coagulaciÃ³n microvascular, exacerbando de forma catastrÃ³fica y aguda la hemorragia intracraneal activa preexistente en el neonato."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar ciclo farmacolÃ³gico endovenoso con Ibuprofeno Lisina durante 3 dÃ­as.",
        distractorProfile: "harmful_ibuprofen_usage",
        incorrectFeedback: "Aunque el ibuprofeno es considerado mÃ¡s noble que la indometacina sobre el flujo renal, comparte la misma contraindicaciÃ³n plaquetaria/anti-hemostÃ¡tica que todos los AINEs ante un sangrado masivo en el sistema nervioso central."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar AcetaminofÃ©n (Paracetamol) intravenoso, o en caso de refractariedad, derivar a ligadura quirÃºrgica directa del conducto."
      },
      {
        id: "D",
        label: "D",
        text: "Aumentar el aporte de lÃ­quidos endovenosos diarios a 150 cc/kg y administrar furosemida para favorecer el cierre espontÃ¡neo natural.",
        distractorProfile: "volume_overload_error",
        incorrectFeedback: "Aumentar el volumen de lÃ­quidos circulantes es contraproducente, empeorarÃ¡ drÃ¡sticamente el flujo de izquierda a derecha a travÃ©s del ductus, expandiendo la sobrecarga hÃ­drica hacia los pulmones e induciendo falla cardÃ­aca congestiva intratable."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con un Conducto Arterioso Permeable (PDA) sintomÃ¡tico (genera sobrecarga izquierda, edema pulmonar y falla cardÃ­aca derecha congestiva). Aunque los inhibidores no selectivos de la ciclooxigenasa (AINEs como la Indometacina y el Ibuprofeno) son el gold standard mundial clÃ¡sico para el cierre farmacolÃ³gico del ductus, estÃ¡n ABSOLUTAMENTE CONTRAINDICADOS en neonatos que presenten: 1) Sangrado activo importante (como la Hemorragia Intraventricular grado III documentada), 2) Trombocitopenia moderada/severa (< 50,000) o falla en la coagulaciÃ³n, 3) LesiÃ³n renal aguda oligÃºrica, o 4) Enterocolitis Necrotizante activa. Al estar vetados los AINEs, la terapia de rescate mÃ©dica emergente y con creciente evidencia de seguridad es el Paracetamol (AcetaminofÃ©n) intravenoso, el cual no inhibe la agregaciÃ³n plaquetaria. Si el paracetamol no funciona (o no estÃ¡ disponible), la conducta final de salvamento es la ligadura mecÃ¡nica toracoscÃ³pica o quirÃºrgica del ductus por cirugÃ­a cardiovascular.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Con esta cerramos con broche de oro la neonatologÃ­a, Colega. Saber tratar un Ductus abierto es esencial, pero saber CUÃNDO NO tratarlo con AINEs salva al prematuro. La Indometacina no solo cierra el ductus de maravilla, sino que tambiÃ©n tumba el flujo sanguÃ­neo de la arteria mesentÃ©rica superior (riesgo de NEC), cierra las arteriolas renales y paraliza a las plaquetas que tratan de taponar la sangre en el cerebro inmaduro. En un bebÃ© prematuro con la cabeza llena de sangre y sin plaquetas de respaldo (38,000), ponerle Ibuprofeno o Indometacina transformarÃ¡ un sangrado local en una hemorragia parenquimatosa letal en horas. Usas Paracetamol IV o llamas al cirujano.",
    keyPoints: [
      "Neonato prematuro con diagnÃ³stico clÃ­nico/ecocardiogrÃ¡fico de Conducto Arterioso Permeable sintomÃ¡tico.",
      "Presencia de contraindicaciones absolutas para AINEs: Hemorragia intraventricular aguda, plaquetas muy bajas o falla renal aguda en anuria.",
      "RestricciÃ³n estricta de Indometacina/Ibuprofeno. El cierre debe intentarse con Paracetamol IV o escalarse a ligadura quirÃºrgica (o cierre percutÃ¡neo).",
      "Tema: CardiopatÃ­as CongÃ©nitas / PDA en el Prematuro."
    ]
  }
];

