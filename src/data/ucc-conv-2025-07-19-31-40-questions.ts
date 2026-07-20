import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC â€” EdiciÃ³n #3 (19 jul 2025) Â· Preguntas #31â€“#40.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_31_40_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-31",
    university: "UCC",
    examArea: "Medicina Interna / NeurologÃ­a / PsiquiatrÃ­a",
    topic: "NeurologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neurologia", "psiquiatria"],
    statement: "Mujer de 24 aÃ±os es llevada a urgencias por su familia debido a cambios severos de comportamiento de 3 semanas de evoluciÃ³n, caracterizados por labilidad emocional, paranoia y alucinaciones visuales. Inicialmente fue valorada por psiquiatrÃ­a e iniciÃ³ haloperidol, pero hace 48 horas desarrollÃ³ disquinesias orofaciales severas, fluctuaciÃ³n de la presiÃ³n arterial (160/100 a 85/50 mmHg), taquicardia y un episodio de convulsiÃ³n tÃ³nico-clÃ³nica generalizada. Al examen fÃ­sico: mutismo acinÃ©tico, hipertermia de 38.5Â°C, sin rigidez de nuca clara. La punciÃ³n lumbar reporta 45 linfocitos/mmÂ³, proteÃ­nas de 60 mg/dL y glucosa normal. El panel viral (PCR para VHS, CMV, Enterovirus) es negativo. Una ecografÃ­a transvaginal reporta una masa ovÃ¡rica quÃ­stica compleja de 5 cm. Â¿CuÃ¡l es la terapia sistÃ©mica INMEDIATA MÃS apropiada mientras se programa la intervenciÃ³n quirÃºrgica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender el haloperidol, iniciar Bromocriptina y Dantroleno por sospecha de SÃ­ndrome NeurolÃ©ptico Maligno.",
        distractorProfile: "overlapping_toxidrome_trap",
        incorrectFeedback: "El SÃ­ndrome NeurolÃ©ptico Maligno presenta fiebre y disautonomÃ­a post-neurolÃ©pticos, pero se caracteriza por rigidez muscular \"en tubo de plomo\" y CPK masivamente elevada, no por convulsiones, pleocitosis en LCR ni disquinesias orofaciales hipercÃ­neticas."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar terapia inmunomoduladora intensiva con pulsos de Metilprednisolona intravenosa e Inmunoglobulina G (IGIV) o PlasmafÃ©resis."
      },
      {
        id: "C",
        label: "C",
        text: "Mantener Aciclovir empÃ­rico a dosis meningeas por 14 dÃ­as a pesar de la PCR negativa, por alta tasa de falsos negativos.",
        distractorProfile: "stubborn_infectious_protocol",
        incorrectFeedback: "Mantener el Aciclovir tras un panel molecular viral exhaustivamente negativo retrasa el inicio de la inmunosupresiÃ³n salvavidas, permitiendo el daÃ±o neurolÃ³gico irreversible mediado por anticuerpos."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar terapia antiepilÃ©ptica con Ãcido Valproico y derivar a un pabellÃ³n de salud mental para manejo de esquizofrenia refractaria.",
        distractorProfile: "catastrophic_misdiagnosis",
        incorrectFeedback: "Tratar el cuadro como un trastorno psiquiÃ¡trico primario en presencia de fiebre, convulsiones, disautonomÃ­a y pleocitosis en el LCR constituye un error fatal y un pase directo a la mortalidad en urgencias."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una Encefalitis Autoinmune por anticuerpos contra el receptor NMDA (Anti-NMDAR), el prototipo de encefalitis paraneoplÃ¡sica en mujeres jÃ³venes, clÃ¡sicamente asociada a teratomas ovÃ¡ricos. Su presentaciÃ³n es escalonada: fase prodrÃ³mica, fase psiquiÃ¡trica (frecuentemente diagnosticada errÃ³neamente como esquizofrenia aguda), seguida de complicaciones neurolÃ³gicas severas (convulsiones, disquinesias orofaciales continuas) y disautonomÃ­a que pone en riesgo la vida (arritmias, hipoventilaciÃ³n, fluctuaciÃ³n tensional). El tratamiento salvavidas exige una terapia dual urgente: resecciÃ³n quirÃºrgica del tumor (teratoma) y barrido de anticuerpos del sistema con inmunosupresiÃ³n de primera lÃ­nea (Corticosteroides a altas dosis + IGIV o PlasmafÃ©resis).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, esta patologÃ­a es la gran simuladora psiquiÃ¡trica del siglo XXI. Muchas de estas pacientes terminan amarradas en un hospital mental bajo el diagnÃ³stico de \"psicosis aguda\" hasta que hacen el paro cardÃ­aco por disautonomÃ­a. La presencia de las disquinesias orofaciales tras recibir haloperidol no es un efecto extrapiramidal comÃºn, es la manifestaciÃ³n clÃ¡sica del anticuerpo bloqueando el receptor NMDA en los ganglios basales. Si el virus del herpes sale negativo en el LCR, no te aferres al Aciclovir; tu cerebro debe saltar de la infectologÃ­a a la inmunologÃ­a al instante.",
    keyPoints: [
      "Mujer joven con debut psiquiÃ¡trico agudo que evoluciona a convulsiones y disquinesias orofaciales (\"muecas\" o masticaciÃ³n continua).",
      "Signos de disautonomÃ­a (fluctuaciÃ³n de pulso/PA) y hallazgo de masa ovÃ¡rica.",
      "LCR con pleocitosis leve y panel infeccioso negativo.",
      "Encefalitis por anticuerpos Anti-NMDAR. Requiere inmunosupresiÃ³n profunda e inmediata (Esteroides + IGIV) y resecciÃ³n del teratoma.",
      "Tema: Encefalitis Autoinmune ParaneoplÃ¡sica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-32",
    university: "UCC",
    examArea: "PediatrÃ­a / NefrologÃ­a",
    topic: "NefrologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "nefrologia"],
    statement: "Un lactante masculino de 9 meses es llevado a consulta por pobre ganancia pondoestatural (peso y talla en el percentil 3), episodios recurrentes de vÃ³mitos, irritabilidad y poliuria (los padres reportan que el paÃ±al se empapa con inusual frecuencia). Al examen fÃ­sico luce desnutrido y con signos de deshidrataciÃ³n leve. ParaclÃ­nicos: Sodio 140 mEq/L, Potasio 2.8 mEq/L (Hipokalemia), Cloro 115 mEq/L (Hipercloremia). Los gases venosos reportan pH 7.25, HCO3 12 mEq/L, AniÃ³n Gap 10 (normal). El pH urinario de una muestra fresca es de 7.1. Una ecografÃ­a renal reporta presencia de nefrocalcinosis bilateral franca. Â¿CuÃ¡l es el defecto fisiopatolÃ³gico que explica este sÃ­ndrome y orienta su terapia especÃ­fica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Incapacidad del tÃºbulo contorneado proximal para reabsorber bicarbonato filtrado.",
        distractorProfile: "proximal_rta_confusion",
        incorrectFeedback: "La falla en la reabsorciÃ³n proximal de bicarbonato (ATR tipo 2) permite que el tÃºbulo distal compense la acidez, logrando un pH urinario < 5.5 tras la depleciÃ³n inicial, y caracterÃ­sticamente no se asocia con nefrocalcinosis masiva."
      },
      {
        id: "B",
        label: "B",
        text: "Defecto en la secreciÃ³n de hidrogeniones ($H^+$) en las cÃ©lulas intercaladas alfa del tÃºbulo distal."
      },
      {
        id: "C",
        label: "C",
        text: "MutaciÃ³n en el cotransportador $Na^+-K^+-2Cl^-$ de la rama ascendente gruesa del asa de Henle.",
        distractorProfile: "bartter_syndrome_overlap",
        incorrectFeedback: "El defecto en el asa de Henle corresponde al SÃ­ndrome de Bartter, el cual tambiÃ©n produce poliuria, falla de medro y nefrocalcinosis, pero se asocia clÃ¡sicamente a ALCALOSIS metabÃ³lica, no a acidosis."
      },
      {
        id: "D",
        label: "D",
        text: "Hipoaldosteronismo secundario con incapacidad para secretar potasio y retener sodio.",
        distractorProfile: "type4_rta_opposite_potassium",
        incorrectFeedback: "El hipoaldosteronismo (ATR tipo 4) produce acidosis hiperclorÃ©mica pero se caracteriza invariablemente por hiperkalemia (potasio alto), lo que choca frontalmente con el potasio en 2.8 de este paciente."
      }
    ],
    correctOptionId: "B",
    explanation: "El lactante cursa con una Acidosis Tubular Renal (ATR) Tipo 1 (Distal). La triada diagnÃ³stica fundamental incluye: acidosis metabÃ³lica de aniÃ³n gap normal (hiperclorÃ©mica), hipokalemia severa y un pH urinario que JAMÃS logra bajar a rangos Ã¡cidos normales (se mantiene persistentemente > 5.5, usualmente alcalino, como el 7.1 del caso). Este defecto en las cÃ©lulas intercaladas alfa del tÃºbulo colector impide excretar la carga Ã¡cida diaria. Al no poder excretar hidrogeniones, el riÃ±Ã³n elimina grandes cantidades de potasio y calcio para mantener la electroneutralidad, provocando hipokalemia y un ambiente urinario alcalino rico en calcio, lo cual precipita inexorablemente la formaciÃ³n de cristales de fosfato de calcio (nefrocalcinosis), una complicaciÃ³n patognomÃ³nica de la ATR Tipo 1.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** El diferencial de las acidosis tubulares renitentes siempre entra en el examen de residencia. La ATR Tipo 2 (Proximal - opciÃ³n A) bota el bicarbonato, pero la nefrona distal sÃ­ funciona, por lo que el pH de la orina puede ser Ã¡cido (<5.5) y RARA VEZ hace nefrocalcinosis. La ATR Tipo 4 (opciÃ³n D) cursa con POTASIO ALTO. La ATR Tipo 1 es la que \"petrifica\" el riÃ±Ã³n de los niÃ±os (nefrocalcinosis) porque junta calcio alto en orina con un pH alcalino, el caldo de cultivo perfecto para formar cÃ¡lculos.",
    keyPoints: [
      "Lactante con falla de medro, acidosis metabÃ³lica hiperclorÃ©mica e hipokalemia.",
      "Orina persistentemente alcalina (pH > 5.5).",
      "Evidencia radiolÃ³gica de nefrocalcinosis o urolitiasis temprana.",
      "Acidosis Tubular Renal Tipo 1 (Distal). El manejo crÃ³nico requiere sales alcalinizantes (Citrato de Potasio) para corregir el pH y evitar la falla renal por cÃ¡lculos.",
      "Tema: NefrologÃ­a PediÃ¡trica / Acidosis Tubular Renal."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-33",
    university: "UCC",
    examArea: "Medicina Interna / GastroenterologÃ­a / Urgencias",
    topic: "GastroenterologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "urgencias"],
    statement: "Hombre de 26 aÃ±os, con diagnÃ³stico de Colitis Ulcerativa de 4 aÃ±os de evoluciÃ³n, acude a urgencias por un brote agudo severo. Refiere mÃ¡s de 12 deposiciones lÃ­quidas sanguinolentas al dÃ­a, tenesmo severo, y fiebre no cuantificada. En las Ãºltimas 24 horas, la diarrea se detuvo bruscamente, pero el paciente desarrollÃ³ una marcada distensiÃ³n abdominal. Al examen fÃ­sico: febril (39.2Â°C), taquicÃ¡rdico (128 lpm), letÃ¡rgico, PA 95/60 mmHg. Abdomen intensamente distendido, timpÃ¡nico, con dolor difuso a la palpaciÃ³n y ruidos intestinales ausentes. Una radiografÃ­a simple de abdomen en decÃºbito supino evidencia dilataciÃ³n continua del colon transverso de 8.5 cm de diÃ¡metro, con pÃ©rdida de las haustras (patrÃ³n en \"tubo de plomo\") y mÃºltiples niveles hidroaÃ©reos. No hay neumoperitoneo evidente. Â¿CuÃ¡l de las siguientes acciones terapÃ©uticas estÃ¡ ABSOLUTAMENTE CONTRAINDICADA en el manejo inmediato de este cuadro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "AdministraciÃ³n de pulsos intravenosos de hidrocortisona (o metilprednisolona) a altas dosis.",
        distractorProfile: "standard_medical_therapy",
        incorrectFeedback: "La administraciÃ³n de corticosteroides a altas dosis es el pilar del tratamiento mÃ©dico (salvo si se sospecha infecciÃ³n subyacente primaria pura) para desinflamar rÃ¡pidamente la mucosa y evitar la cirugÃ­a radical."
      },
      {
        id: "B",
        label: "B",
        text: "Solicitud de valoraciÃ³n inmediata por el servicio de cirugÃ­a general/coloproctologÃ­a.",
        distractorProfile: "multidisciplinary_mandatory_step",
        incorrectFeedback: "Contactar al cirujano el dÃ­a cero es mandatorio; el 50% de estos pacientes terminarÃ¡n en colectomÃ­a de emergencia si el manejo mÃ©dico falla en las primeras 48 horas."
      },
      {
        id: "C",
        label: "C",
        text: "RealizaciÃ³n de una videocolonoscopia total con toma de biopsias para confirmar actividad de la enfermedad y buscar CMV."
      },
      {
        id: "D",
        label: "D",
        text: "IniciaciÃ³n de esquema antibiÃ³tico de amplio espectro endovenoso para cubrir translocaciÃ³n bacteriana.",
        distractorProfile: "vital_support_therapy",
        incorrectFeedback: "La translocaciÃ³n bacteriana inminente y la sepsis sistÃ©mica obligan al uso precoz de antibiÃ³ticos intravenosos de amplio espectro en la reanimaciÃ³n inicial del megacolon tÃ³xico."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con un Megacolon TÃ³xico, la complicaciÃ³n aguda mÃ¡s letal de la enfermedad inflamatoria intestinal (particularmente la Colitis Ulcerativa). Se diagnostica por la clÃ­nica de toxicidad sistÃ©mica (fiebre, taquicardia, leucocitosis, anemia, alteraciÃ³n del sensorio) sumada a una dilataciÃ³n radiolÃ³gica del colon transverso > 6 cm. Ante un Megacolon TÃ³xico, la pared del colon se encuentra adelgazada, isquÃ©mica y extremadamente friable. La realizaciÃ³n de una colonoscopia total (o enemas de bario) conlleva un riesgo altÃ­simo e inaceptable de perforaciÃ³n iatrogÃ©nica fulminante debido a la insuflaciÃ³n de aire y manipulaciÃ³n mecÃ¡nica, estando ABSOLUTAMENTE CONTRAINDICADA. AdemÃ¡s, medicamentos que paralizan la motilidad colÃ³nica (como Loperamida, anticolinÃ©rgicos u opiÃ¡ceos) tambiÃ©n estÃ¡n proscritos.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un error de residente de primer aÃ±o es intentar \"diagnosticar bien\" un brote antes de tratarlo. Si le pasas una sonda de colonoscopio e insuflas aire para visualizar la mucosa a un colon que ya mide 8.5 cm de ancho, el ciego estallarÃ¡ instantÃ¡neamente. El manejo es \"enfriar\" el colon sistÃ©micamente con megadosis de corticoides y antibiÃ³ticos, rotando al paciente de posiciÃ³n para movilizar gas. Si el colon no se desinfla en 24 a 72 horas, o si hay signos de perforaciÃ³n en la radiografÃ­a, el tratamiento es la colectomÃ­a subtotal de emergencia.",
    keyPoints: [
      "Paciente con Colitis Ulcerativa que tras diarrea intensa frena sus deposiciones y desarrolla abdomen distendido y tÃ³xico.",
      "RadiografÃ­a con diÃ¡metro del colon transverso > 6 cm con pÃ©rdida de haustras.",
      "Megacolon TÃ³xico. Requiere esteroides IV, antibiÃ³ticos, NPO y llamado al cirujano. Colonoscopia total y antidiarreicos/opioides estÃ¡n formalmente contraindicados por riesgo de perforaciÃ³n y parÃ¡lisis.",
      "Tema: Urgencias GastroenterolÃ³gicas / Megacolon TÃ³xico."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-34",
    university: "UCC",
    examArea: "PediatrÃ­a / HematologÃ­a / Urgencias",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "hematologia", "urgencias"],
    statement: "Adolescente masculino de 13 aÃ±os, con antecedente conocido de Anemia de CÃ©lulas Falciformes (enfermedad homocigota HbSS), es traÃ­do a urgencias por presentar fiebre de 39.0Â°C, dolor torÃ¡cico severo de caracterÃ­sticas pleurÃ­ticas y tos seca de 24 horas de evoluciÃ³n. Al examen fÃ­sico: luz taquipneico (FR 35 rpm), SatO2 86% al aire ambiente, FC 120 lpm. A la auscultaciÃ³n pulmonar se evidencian crÃ©pitos y disminuciÃ³n del murmullo vesicular en las bases de ambos hemitÃ³rax. El hemograma muestra una Hemoglobina de 6.0 g/dL (basal de 8.5 g/dL) con leucocitosis de 22,000/mmÂ³. La radiografÃ­a de tÃ³rax confirma nuevos infiltrados alveolares difusos bilaterales. Se inicia oxÃ­geno suplementario, hidrataciÃ³n y analgesia con opioides. Â¿CuÃ¡l es el pilar terapÃ©utico INMEDIATO que disminuye de forma contundente la mortalidad e hipoxemia en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar exanguinotransfusiÃ³n urgente (o transfusiÃ³n simple) sumada a la cobertura empÃ­rica con Ceftriaxona y un macrÃ³lido."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar dosis altas de Hidroxiurea por vÃ­a oral para estimular la producciÃ³n aguda de hemoglobina fetal.",
        distractorProfile: "chronic_therapy_misapplied_to_acute",
        incorrectFeedback: "La Hidroxiurea incrementa el nivel de hemoglobina fetal y previene las crisis vasooclusivas a largo plazo, pero su latencia es de semanas a meses, siendo inÃºtil para el rescate agudo en urgencias."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar terapia trombolÃ­tica con Alteplase seguido de anticoagulaciÃ³n, ante la sospecha de microtrombos diseminados.",
        distractorProfile: "pathophysiological_error_thrombosis",
        incorrectFeedback: "Las crisis vasooclusivas de la drepanocitosis son producto del atrapamiento mecÃ¡nico de eritrocitos rÃ­gidos y el daÃ±o endotelial, no de trombos de fibrina primaria; la trombÃ³lisis carece de indicaciÃ³n y aumentarÃ­a el riesgo de hemorragia pulmonar."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar esplenectomÃ­a de urgencia por secuestro esplÃ©nico de glÃ³bulos rojos precipitante del cuadro pulmonar.",
        distractorProfile: "wrong_hematological_crisis",
        incorrectFeedback: "El secuestro esplÃ©nico cursa con esplenomegalia masiva dolorosa aguda y choque hipovolÃ©mico severo sin manifestaciones pulmonares primarias; ademÃ¡s, suele ocurrir en preescolares, ya que los adolescentes ya tienen autoesplenectomÃ­a anatÃ³mica."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con un SÃ­ndrome TorÃ¡cico Agudo (STA), la principal causa de muerte en adolescentes y adultos jÃ³venes con Anemia de CÃ©lulas Falciformes. Se define por la apariciÃ³n de un nuevo infiltrado pulmonar en la radiografÃ­a, acompaÃ±ado de fiebre, dolor torÃ¡cico, taquipnea e hipoxemia. FisiopatolÃ³gicamente, ocurre un ciclo vicioso de isquemia-hipoxia por oclusiÃ³n vascular en la microcirculaciÃ³n pulmonar por los eritrocitos falciformes, comÃºnmente desencadenado por infecciÃ³n atÃ­pica (*Mycoplasma/Chlamydia*), infarto Ã³seo o embolia grasa. Ante un STA severo (hipoxemia <90%, compromiso multilobar, o caÃ­da de la hemoglobina >1 g/dL del basal), la transfusiÃ³n sanguÃ­nea precoz (transfusiÃ³n simple o exanguinotransfusiÃ³n para remover la HbS) es la Ãºnica medida que rompe la hipoxia tisular letal. Esto debe ir acompaÃ±ado del protocolo antibiÃ³tico que siempre debe cubrir gÃ©rmenes tÃ­picos y atÃ­picos (Cefalosporina de 3a gen + MacrÃ³lido).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** En la Anemia Falciforme, el oxÃ­geno no puede penetrar la maraÃ±a de glÃ³bulos rojos deformados (\"en hoz\") que estÃ¡n taponando los capilares alveolares. Puedes ponerle al paciente una cÃ¡nula nasal a mÃ¡xima capacidad, pero el oxÃ­geno nunca llegarÃ¡ a la sangre. La Ãºnica forma de \"destrabar\" el trÃ¡fico es hacer un cambio de aceite: sacar la sangre enferma y meter sangre nueva (exanguinotransfusiÃ³n), o al menos diluir el porcentaje de cÃ©lulas S transfundiendo glÃ³bulos rojos frescos. La Hidroxiurea (OpciÃ³n B) es excelente para PREVENIR estas crisis a largo plazo, pero tarda meses en actuar, por lo que no sirve absolutamente de nada en el escenario agudo del servicio de urgencias.",
    keyPoints: [
      "Paciente con Anemia Falciforme (HbSS) que desarrolla dolor torÃ¡cico, fiebre, disnea y caÃ­da abrupta de la SatO2.",
      "RadiografÃ­a con apariciÃ³n de un infiltrado nuevo.",
      "SÃ­ndrome TorÃ¡cico Agudo. Requiere analgesia, hidrataciÃ³n cuidadosa, antibiÃ³ticos duales (TÃ­pico+AtÃ­pico) y TransfusiÃ³n de GlÃ³bulos Rojos agresiva (simple o exanguinotransfusiÃ³n) para salvar la vida.",
      "Tema: Urgencias HematolÃ³gicas / SÃ­ndrome TorÃ¡cico Agudo."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-35",
    university: "UCC",
    examArea: "Medicina Interna / CardiologÃ­a / ToxicologÃ­a",
    topic: "CardiologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "toxicologia"],
    statement: "Hombre de 76 aÃ±os, con historia de Falla CardÃ­aca con FracciÃ³n de EyecciÃ³n Reducida (FEVI 28%), consulta por un cuadro de 4 dÃ­as de nÃ¡useas intratables, vÃ³mitos repetidos, fatiga severa y refiere percibir \"halos de color amarillo\" alrededor de las luces. En su tratamiento crÃ³nico recibe Bisoprolol, Espironolactona, LosartÃ¡n y Digoxina. Al examen fÃ­sico se encuentra somnoliento, deshidratado y bradicÃ¡rdico. El monitor revela una taquicardia auricular con frecuencia de 130 lpm y un bloqueo AV 2:1, resultando en una frecuencia ventricular de 65 lpm. Los paraclÃ­nicos urgentes reportan: Creatinina 2.2 mg/dL (basal de 1.1 mg/dL), BUN 65 mg/dL. Potasio sÃ©rico 6.1 mEq/L (hiperkalemia grave). Ante la confirmaciÃ³n diagnÃ³stica, Â¿cuÃ¡l de los siguientes tratamientos de rescate estÃ¡ FUERTEMENTE DESACONSEJADO / CONTRAINDICADO y podrÃ­a resultar letal en este escenario?",
    options: [
      {
        id: "A",
        label: "A",
        text: "AdministraciÃ³n de Anticuerpos Fab especÃ­ficos (Fragmentos Fab antidigoxina).",
        distractorProfile: "first_line_antidote",
        incorrectFeedback: "La administraciÃ³n de anticuerpos Fab antidigoxina es el estÃ¡ndar de oro curativo absoluto; revierten tanto las arritmias mortales como la hiperkalemia inducida por el bloqueo de la bomba."
      },
      {
        id: "B",
        label: "B",
        text: "Tratamiento agresivo del potasio mediante Insulina regular asociada a Dextrosa al 50%.",
        distractorProfile: "safe_hyperkalemia_management",
        incorrectFeedback: "A diferencia del calcio, forzar el desplazamiento de potasio al interior de la cÃ©lula con el combo Insulina-Dextrosa es un abordaje transitorio seguro mientras se consiguen los anticuerpos neutralizantes."
      },
      {
        id: "C",
        label: "C",
        text: "Uso de marcapasos transvenoso temporal para sobrepasar el bloqueo AV si hay inestabilidad.",
        distractorProfile: "mechanical_rescue_pacing",
        incorrectFeedback: "El uso de un marcapasos temporal estÃ¡ indicado en la bradicardia sintomÃ¡tica profunda o bloqueos completos refractarios inducidos por toxicidad medicamentosa nodal, siendo una medida de puente segura."
      },
      {
        id: "D",
        label: "D",
        text: "AdministraciÃ³n de Gluconato de Calcio IV en bolo rÃ¡pido para revertir los efectos miocÃ¡rdicos de la hiperkalemia."
      }
    ],
    correctOptionId: "D",
    explanation: "El paciente cursa con una IntoxicaciÃ³n Aguda sobre CrÃ³nica por Digoxina (clÃ¡sicamente por acumulaciÃ³n debida a Falla Renal Aguda pre-renal por vÃ³mitos y deshidrataciÃ³n). Las manifestaciones incluyen sÃ­ntomas gastrointestinales, visuales (xantopsia o halos amarillos) y arritmias complejas (la taquicardia auricular con bloqueo AV 2:1 es altamente especÃ­fica). A nivel celular, la digoxina inhibe la bomba Na+/K+ ATPasa, lo que impide que el potasio entre a la cÃ©lula, generando una hiperkalemia severa (marcador pronÃ³stico ominoso). Aunque la regla general del manejo de la hiperkalemia es dar Calcio IV (como escudo miocÃ¡rdico), en la INTOXICACIÃ“N POR DIGOXINA estÃ¡ clÃ¡sicamente proscrito o debe usarse con extrema cautela. La digoxina ya genera una sobrecarga intracelular masiva de calcio; inyectar calcio intravenoso puede precipitar una contracciÃ³n miocÃ¡rdica sostenida e irreversible (\"CorazÃ³n de Piedra\" o \"Stone Heart\"), induciendo parada en sÃ­stole. El tratamiento de elecciÃ³n son los fragmentos Fab antidigoxina.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Esta pregunta entrelaza dos protocolos que chocan. El algoritmo clÃ¡sico de hiperkalemia severa dicta poner Gluconato de Calcio. Pero la intoxicaciÃ³n por digitÃ¡licos es la \"excepciÃ³n a la regla\". El corazÃ³n del intoxicado por digoxina estÃ¡ saturado de calcio en su citoplasma (asÃ­ es como la digoxina aumenta la fuerza de contracciÃ³n). Si pasas calcio a chorro, la cÃ©lula miocÃ¡rdica se bloquea en una sÃ­stole eterna que no podrÃ¡s reanimar. Hoy en dÃ­a algunos toxicolÃ³gos debaten este dogma en escenarios desesperados, pero para efectos de exÃ¡menes de residencia (\"Board exams\"), el Calcio en digoxina sigue siendo la trampa letal a evitar. Trata el potasio alto con insulina-dextrosa y pide urgentemente los anticuerpos Fab antidigoxina.",
    keyPoints: [
      "Anciano medicado con cardiotÃ³nicos que presenta sÃ­ntomas gastrointestinales, visiÃ³n amarilla y arritmias (ej. Taquicardia Auricular con Bloqueo AV).",
      "Hiperkalemia concomitante.",
      "Toxicidad DigitÃ¡lica severa. AntÃ­doto: Fragmentos Fab antidigoxina. PrecauciÃ³n/ContraindicaciÃ³n histÃ³rica: No dar Calcio IV para corregir el potasio, riesgo de \"Stone Heart\".",
      "Tema: ToxicologÃ­a CardÃ­aca / IntoxicaciÃ³n por Digoxina."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-36",
    university: "UCC",
    examArea: "PediatrÃ­a / InfectologÃ­a / Urgencias",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "urgencias"],
    statement: "NiÃ±o de 4 aÃ±os, previamente sano, es llevado a urgencias por presentar fiebre de 39.5Â°C, irritabilidad y dificultad para deglutir alimentos (disfagia) de 48 horas de evoluciÃ³n. Hoy los padres notan \"el cuello torcido y rÃ­gido\". Al examen fÃ­sico: babeo moderado (sialorrea), el cuello se encuentra en discreta extensiÃ³n, con marcada resistencia dolorosa a la flexiÃ³n pasiva y lateralizaciÃ³n hacia la derecha (tortÃ­colis). La inspecciÃ³n de la cavidad orofarÃ­ngea mediante depresiÃ³n cuidadosa de la lengua revela un abombamiento liso y prominente de la pared posterior de la faringe derecha. Una radiografÃ­a lateral de cuello de partes blandas tomada en fase de inspiraciÃ³n evidencia un espacio retrofarÃ­ngeo ensanchado (> 7 mm a nivel de C2). Â¿CuÃ¡l es la conducta inicial de MÃS alto rendimiento diagnÃ³stico y terapÃ©utico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "TomografÃ­a Computarizada (TC) de cuello con medio de contraste para estadificar la colecciÃ³n antes del drenaje quirÃºrgico u opciÃ³n mÃ©dica."
      },
      {
        id: "B",
        label: "B",
        text: "PunciÃ³n y aspiraciÃ³n a ciegas del abombamiento farÃ­ngeo en el servicio de urgencias para cultivo microbiolÃ³gico rÃ¡pido.",
        distractorProfile: "blind_and_lethal_puncture",
        incorrectFeedback: "Puncionar una masa retrofarÃ­ngea a ciegas en un paciente despierto expone a una ruptura incontrolada de la colecciÃ³n con broncoaspiraciÃ³n masiva de pus y obstrucciÃ³n aguda de la vÃ­a aÃ©rea inferior."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Dexametasona intramuscular en dosis Ãºnica y prescribir Amoxicilina oral, diagnosticando una adenitis cervical reactiva simple.",
        distractorProfile: "misdiagnosis_and_undertreatment",
        incorrectFeedback: "La tortÃ­colis febril con abombamiento farÃ­ngeo y alteraciÃ³n radiolÃ³gica del espacio prevertebral no es una adenopatÃ­a reactiva benigna; tratarlo de forma oral y ambulatoria resultarÃ¡ en mediastinitis fulminante por diseminaciÃ³n del absceso."
      },
      {
        id: "D",
        label: "D",
        text: "Ingreso inmediato a quirÃ³fano para traqueostomÃ­a de urgencia seguida de incisiÃ³n y drenaje abierto transoral.",
        distractorProfile: "extreme_and_unjustified_surgical_measure",
        incorrectFeedback: "La traqueostomÃ­a de entrada es una medida extrema injustificada, reservada solo para obstrucciones completas inintubables; si el paciente requiere drenaje, suele realizarse de forma transoral controlada bajo intubaciÃ³n orotraqueal simple."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con un Absceso RetrofarÃ­ngeo, una grave infecciÃ³n de los espacios profundos del cuello que suele ocurrir en menores de 5 aÃ±os (tras infecciones de vÃ­a aÃ©rea superior) dado que los ganglios linfÃ¡ticos retrofarÃ­ngeos involucucionan despuÃ©s de esta edad. ClÃ­nicamente se presenta con disfagia, sialorrea, tortÃ­colis por espasmo muscular profundo y el caracterÃ­stico ensanchamiento del espacio prevertebral en la radiografÃ­a lateral. El paso obligatorio una vez asegurada la permeabilidad de la vÃ­a aÃ©rea en un paciente estable, es la TAC de cuello con contraste. La TAC es fundamental para diferenciar una verdadera colecciÃ³n purulenta organizada (absceso con realce en anillo, que puede requerir drenaje quirÃºrgico) de una celulitis retrofarÃ­ngea (inflamaciÃ³n flemonosa pura, que se maneja exclusivamente con antibiÃ³ticos intravenosos como Ampicilina/Sulbactam o Clindamicina).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Ojo con esta patologÃ­a que asusta a cualquiera en urgencias pediÃ¡tricas. A diferencia de la Epiglotitis (donde el niÃ±o se ahoga en minutos y no puedes mandarlo a TAC porque se cierra la vÃ­a aÃ©rea), el absceso retrofarÃ­ngeo compromete el espacio retroposterior y usualmente te da una ventana de estabilidad respiratoria para tomar imÃ¡genes. NUNCA punciones un absceso a ciegas en urgencias (OpciÃ³n B); el paciente toserÃ¡, broncoaspirarÃ¡ el pus directo a los pulmones y harÃ¡ un sÃ­ndrome de dificultad respiratoria agudo sÃ©ptico y mortal. La TAC manda si lo operan o lo tratan con antibiÃ³ticos.",
    keyPoints: [
      "Preescolar con fiebre alta, dolor de cuello, tortÃ­colis o rigidez a la movilizaciÃ³n, y disfagia/sialorrea.",
      "Masa en pared posterior de la faringe o radiografÃ­a lateral de cuello con ensanchamiento de tejidos prevertebrales.",
      "Absceso RetrofarÃ­ngeo. En paciente estable, siempre realizar TAC de cuello contrastada para distinguir absceso vs celulitis y guiar la intervenciÃ³n.",
      "Tema: Infecciones de Espacios Profundos del Cuello."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-37",
    university: "UCC",
    examArea: "Medicina Interna / EndocrinologÃ­a",
    topic: "EndocrinologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia"],
    statement: "Mujer de 58 aÃ±os, asintomÃ¡tica, acude a consulta de medicina interna para revisiÃ³n de exÃ¡menes de rutina. Llama la atenciÃ³n un Calcio sÃ©rico corregido de 11.3 mg/dL (valor normal < 10.2 mg/dL) reportado en dos tomas diferentes. Los niveles de Hormona Paratiroidea intacta (iPTH) estÃ¡n elevados en 115 pg/mL (normal < 65 pg/mL), con FÃ³sforo sÃ©rico de 2.2 mg/dL (disminuido) y niveles de 25-OH-Vitamina D normales. La paciente niega dolores Ã³seos, cÃ³licos renales, fatiga, depresiÃ³n o sÃ­ntomas abdominales. Se realiza una DensitometrÃ­a Ã“sea (DEXA) que reporta un T-score de -2.7 en el tercio distal del radio y cuello femoral. El filtrado glomerular es de 78 mL/min/1.73mÂ² y la excreciÃ³n urinaria de calcio en 24 horas es de 180 mg (normal). Con el diagnÃ³stico de Hiperparatiroidismo Primario, Â¿cuÃ¡l es la conducta MÃS indicada basÃ¡ndose en las guÃ­as quirÃºrgicas actuales?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Prescribir Cinacalcet para sensibilizar el receptor de calcio y reducir los niveles de PTH, asumiendo manejo conservador de por vida.",
        distractorProfile: "wrong_chronic_medical_management",
        incorrectFeedback: "El Cinacalcet (calcimimÃ©tico) reduce las cifras sÃ©ricas de calcio, pero no revierte el deterioro de la densidad mineral Ã³sea (osteoporosis inducida por PTH); su uso se reserva estrictamente para pacientes con falla renal grave secundaria o aquellos que rechazan/contraindican la cirugÃ­a absoluta."
      },
      {
        id: "B",
        label: "B",
        text: "Indicar manejo mÃ©dico conservador con seguimiento anual estricto, hidrataciÃ³n abundante y bisfosfonatos orales (Alendronato).",
        distractorProfile: "incorrect_delay_of_indicated_surgery",
        incorrectFeedback: "Observar pasivamente a una paciente que ya cumple criterios estrictos de indicaciÃ³n quirÃºrgica (Osteoporosis T-score < -2.5 y Calcio > 1 mg/dL sobre el lÃ­mite normal) asegura la ocurrencia inminente de fracturas patolÃ³gicas graves y daÃ±o renal crÃ³nico."
      },
      {
        id: "C",
        label: "C",
        text: "Remitir a cirugÃ­a de cabeza y cuello para ParatiroidectomÃ­a definitiva y curativa."
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar ecografÃ­a de cuello; si no se localiza un adenoma mayor a 3 cm, el manejo debe mantenerse conservador con vitamina D.",
        distractorProfile: "diagnostic_modality_dictating_therapy",
        incorrectFeedback: "Las imÃ¡genes de localizaciÃ³n (ecografÃ­a o gammagrafÃ­a sestaMIBI) se usan *despuÃ©s* de haber tomado la decisiÃ³n bioquÃ­mica de operar para guiar al cirujano; si el tumor no se localiza por imagen (falso negativo), la cirugÃ­a exploratoria sigue estando indicada por el estado bioquÃ­mico alterado del paciente."
      }
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta un Hiperparatiroidismo Primario (HPTP) asintomÃ¡tico clÃ¡sico. Aunque histÃ³ricamente a los pacientes asintomÃ¡ticos se les observaba, las guÃ­as internacionales (Consenso Internacional para el Manejo del HPTP AsintomÃ¡tico) establecen criterios precisos bajo los cuales la cirugÃ­a (ParatiroidectomÃ­a) se vuelve OBLIGATORIA para evitar secuelas a largo plazo, sin importar la ausencia de sÃ­ntomas. Los criterios quirÃºrgicos absolutos son: 1) Calcio sÃ©rico > 1.0 mg/dL por encima del lÃ­mite superior normal (la pte tiene 11.3, supera el lÃ­mite). 2) T-score en densitometrÃ­a â‰¤ -2.5 en cualquier sitio (Osteoporosis franca, confirmada aquÃ­ con -2.7). 3) Tasa de Filtrado Glomerular < 60 mL/min. 4) Edad < 50 aÃ±os. 5) Nefrolitiasis o nefrocalcinosis asintomÃ¡tica por imagen o calcio en orina 24h >400 mg/dÃ­a. Al cumplir dos de estos criterios (calcio elevado en rango de indicaciÃ³n y osteoporosis), la remisiÃ³n quirÃºrgica no admite dilaciones, siendo el Ãºnico tratamiento curativo definitivo y restaurador de la densidad mineral Ã³sea.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Esta viÃ±eta te prueba si estÃ¡s leyendo las guÃ­as de los Ãºltimos 5 aÃ±os o si operas con conceptos antiguos. Un \"HPTP asintomÃ¡tico\" no se manda para la casa a tomar agÃ¼ita si el calcio estÃ¡ alto o el hueso se estÃ¡ desmoronando (DEXA -2.7 = Osteoporosis). Los medicamentos como el Cinacalcet (OpciÃ³n A) solo bajan la cifra de calcio en sangre engaÃ±ando al receptor de la paratiroides, pero NO revierten la pÃ©rdida de hueso y NO curan la enfermedad; se reservan exclusivamente para pacientes con un riesgo quirÃºrgico inaceptable o metÃ¡stasis de un carcinoma paratiroideo inoperable.",
    keyPoints: [
      "Paciente con Calcio elevado y PTH intacta elevada/inapropiadamente normal (HPTP).",
      "Ausencia total de sÃ­ntomas (\"asintomÃ¡tica\").",
      "Presencia de UN criterio quirÃºrgico (Edad < 50, Calcio > 1.0 sobre LSN, Osteoporosis, Falla renal).",
      "La cirugÃ­a (ParatiroidectomÃ­a) es mandatoria. No te dejes engaÃ±ar por el adjetivo \"asintomÃ¡tico\".",
      "Tema: Hiperparatiroidismo Primario / EndocrinologÃ­a QuirÃºrgica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-38",
    university: "UCC",
    examArea: "PediatrÃ­a / Urgencias / AlergologÃ­a",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "urgencias", "alergologia"],
    statement: "Un niÃ±o de 6 aÃ±os, con antecedente de atopia grave, es traÃ­do de urgencia por sus padres a un centro de salud tras presentar dificultad respiratoria sÃºbita e hinchazÃ³n facial masiva 15 minutos despuÃ©s de haber ingerido galletas con crema de cacahuate en una fiesta infantil. A su llegada: pÃ¡lido, cianÃ³tico, con estridor larÃ­ngeo severo y sibilancias bilaterales diseminadas. PA 65/40 mmHg (choque francamente establecido). El mÃ©dico de urgencias actÃºa de manera impecable y administra de inmediato una dosis de Epinefrina (Adrenalina) intramuscular 1:1,000 (0.01 mg/kg) en la cara anterolateral del muslo. A los 5 minutos, el paciente revierte espectacularmente todo el cuadro clÃ­nico: el estridor desaparece, la presiÃ³n sube a 105/65 mmHg y el niÃ±o luce tranquilo y reactivo. Tras colocar vÃ­a venosa, antihistamÃ­nicos (difenhidramina) y corticosteroides IV (metilprednisolona), los padres solicitan el alta inmediata para regresar al domicilio porque \"el niÃ±o ya estÃ¡ perfecto\". Â¿CuÃ¡l es la conducta de observaciÃ³n temporal MÃS indicada y basada en la evidencia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Dar de alta inmediatamente, prescribiendo Prednisolona oral por 5 dÃ­as para evitar reacciones tardÃ­as y un autoinyector de epinefrina.",
        distractorProfile: "false_security_from_adjunct_drugs",
        incorrectFeedback: "Los corticosteroides y antihistamÃ­nicos son drogas de soporte (tercera lÃ­nea) que alivian sÃ­ntomas tardÃ­os de la piel, pero mÃºltiples estudios demuestran que NO previenen en absoluto el desarrollo letal de una reacciÃ³n anafilÃ¡ctica bifÃ¡sica si se da de alta al menor tempranamente."
      },
      {
        id: "B",
        label: "B",
        text: "Mantener al paciente en observaciÃ³n clÃ­nica continua en el servicio de urgencias por un mÃ­nimo de 4 a 6 horas antes de considerar el egreso."
      },
      {
        id: "C",
        label: "C",
        text: "Ingresar de forma rutinaria y obligatoria a la unidad de cuidado intensivo pediÃ¡trico (UCIP) por al menos 24 horas debido a la gravedad inicial del cuadro.",
        distractorProfile: "resource_misallocation_in_stable_patient",
        incorrectFeedback: "La UCIP se reserva para pacientes con choque anafilÃ¡ctico refractario (que requieren infusiÃ³n continua de adrenalina o intubaciÃ³n); un paciente con reversiÃ³n clÃ­nica completa y rÃ¡pida solo requiere monitorizaciÃ³n vigilante en la sala general o urgencias."
      },
      {
        id: "D",
        label: "D",
        text: "Mantener en observaciÃ³n por 1 hora; si no recurren las sibilancias, se puede dar de alta de forma segura con antihistamÃ­nicos.",
        distractorProfile: "lethal_premature_discharge",
        incorrectFeedback: "Una hora de observaciÃ³n es peligrosamente insuficiente, dejando al niÃ±o desprotegido durante la ventana crÃ­tica de mayor incidencia del rebote anafilÃ¡ctico (entre la hora 2 y 6 post-evento)."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presentÃ³ un cuadro de Anafilaxia Severa grado III (compromiso respiratorio alto, bajo y cardiovascular) que revirtiÃ³ de forma Ã³ptima con la administraciÃ³n oportuna de Epinefrina IM (el fÃ¡rmaco Ãºnico e insustituible que detiene el choque mastocitario). El peligro subyacente radica en el fenÃ³meno de la \"Anafilaxia BifÃ¡sica\": la reapariciÃ³n de sÃ­ntomas anafilÃ¡cticos potencialmente fatales (incluso peores que el primer evento) entre 1 y 72 horas despuÃ©s de la resoluciÃ³n completa inicial, sin haber existido una nueva exposiciÃ³n al alergeno. Esto ocurre en el 5-20% de los casos. Las guÃ­as de reanimaciÃ³n pediÃ¡trica (PALS / EAACI) establecen que TODO paciente que sufre un evento anafilÃ¡ctico debe mantenerse en observaciÃ³n intrahospitalaria por un periodo mÃ­nimo de 4 a 6 horas (extendible a 12-24 horas en pacientes de alto riesgo que requirieron mÃºltiples dosis de epinefrina, asmÃ¡ticos severos o con historia previa de reacciones bifÃ¡sicas).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** El error legal mÃ¡s trÃ¡gico de las urgencias pediÃ¡tricas. El niÃ±o llega cianÃ³tico, le pones la adrenalina intramuscular y a los 5 minutos estÃ¡ pidiendo jugo. Te confÃ­as, le das corticoides orales, lo mandas a casa, y a las tres horas hace una reacciÃ³n bifÃ¡sica (segunda ola de degranulaciÃ³n de mastocitos) en la cama de su habitaciÃ³n y fallece asfixiado sin un mÃ©dico cerca. Ni los esteroides ni la loratadina detienen la reacciÃ³n bifÃ¡sica, la Ãºnica garantÃ­a de seguridad es el reloj: tenerlo conectado al monitor de tu hospital por 4 a 6 horas para actuar de inmediato si el estridor regresa.",
    keyPoints: [
      "Paciente con anafilaxia clara que responde maravillosamente a la Adrenalina IM.",
      "Padres o personal mÃ©dico solicitando el alta precoz por resoluciÃ³n de los sÃ­ntomas.",
      "Riesgo de ReacciÃ³n BifÃ¡sica. La conducta obligatoria es observar estrictamente al menos 4 a 6 horas en urgencias; los corticoides y antihistamÃ­nicos NO han demostrado prevenir esta recaÃ­da.",
      "Tema: Anafilaxia PediÃ¡trica / ReacciÃ³n BifÃ¡sica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-39",
    university: "UCC",
    examArea: "Medicina Interna / InfectologÃ­a / ReumatologÃ­a",
    topic: "InfectologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "infectologia", "reumatologia"],
    statement: "Mujer de 54 aÃ±os, con antecedente de Artritis Reumatoide severa refractaria a Metotrexato y fÃ¡rmacos biolÃ³gicos anti-TNF, se programa para inicio inminente de terapia de depleciÃ³n de cÃ©lulas B con Rituximab (Anti-CD20). Como protocolo pre-biolÃ³gico, se solicitan serologÃ­as infecciosas para virus hepatotropos. El tamizaje reporta el siguiente perfil: AntÃ­geno de superficie de la Hepatitis B (HBsAg) negativo; Anticuerpos anti-Core totales del VHB (Anti-HBc total) francamente positivo; Anticuerpos de superficie (Anti-HBs) positivos a 150 mUI/mL. Carga viral ADN de VHB no detectable. Pruebas de funciÃ³n hepÃ¡tica estrictamente normales. Ante este perfil serolÃ³gico de Hepatitis B \"pasada/resuelta\", y frente al inminente uso de Rituximab, Â¿cuÃ¡l es el paso mandatorio para prevenir una insuficiencia hepÃ¡tica aguda en esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Considerar a la paciente inmunizada naturalmente, sin riesgo de enfermedad, e iniciar el Rituximab sin intervenciones profilÃ¡cticas.",
        distractorProfile: "passive_lethal_clearance",
        incorrectFeedback: "Aunque clÃ­nicamente la infecciÃ³n parezca \"resuelta\", la pÃ©rdida profunda de la memoria inmunolÃ³gica de linfocitos B y T generada por el Rituximab desencadena una reactivaciÃ³n viral fulminante del cccDNA latente del hepatocito."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar una dosis de refuerzo de la vacuna recombinante contra la Hepatitis B de manera urgente antes del inicio de la infusiÃ³n biolÃ³gica.",
        distractorProfile: "useless_vaccination",
        incorrectFeedback: "La vacuna estimula la formaciÃ³n de anticuerpos de superficie, la cual la paciente ya posee en tÃ­tulos protectores. No protege en absoluto contra la reactivaciÃ³n endÃ³gena de los viriones intracelulares durmientes de una infecciÃ³n previa."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar terapia profilÃ¡ctica antiviral diaria ininterrumpida con un anÃ¡logo de nucleÃ³sidos/nucleÃ³tidos de alta barrera genÃ©tica (Entecavir o Tenofovir)."
      },
      {
        id: "D",
        label: "D",
        text: "Monitorizar rutinariamente las transaminasas hepÃ¡ticas cada mes; iniciar interferÃ³n pegilado Ãºnicamente si el HBsAg se torna reactivo.",
        distractorProfile: "delayed_reactive_management",
        incorrectFeedback: "Esperar a que los marcadores se reactiven o las transaminasas se elevate (hepatitis clÃ­nica) ya marca un escenario donde el daÃ±o del parÃ©nquima hepÃ¡tico estÃ¡ masivamente instaurado y el riesgo de choque fulminante es inminente; la conducta es profilaxis primaria."
      }
    ],
    correctOptionId: "C",
    explanation: "Esta pregunta aborda un escenario mÃ©dico de altÃ­simo riesgo y cada vez mÃ¡s evaluado. La paciente presenta un perfil serolÃ³gico clÃ¡sico de **infecciÃ³n resuelta/previa por Hepatitis B** (HBsAg negativo y Anti-HBc positivo, usualmente con Anti-HBs protector). Sin embargo, el VHB nunca se erradica completamente del cuerpo; su ADN (cccDNA) permanece latente de forma vitalicia en los hepatocitos, bajo el estricto control de la inmunidad celular. Al administrar un fÃ¡rmaco intensamente inmunosupresor celular, y de forma suprema el **Rituximab** (Anti-CD20), el sistema inmune pierde el control del virus latente. Esto provoca una ReactivaciÃ³n del Virus de la Hepatitis B (mutaciÃ³n fulminante o necrosis masiva por reactivaciÃ³n inmune posterior), con mortalidades superiores al 30%. Las guÃ­as AASLD y AGA establecen con mÃ¡xima rigidez que TODO paciente expuesto a agentes depletores de cÃ©lulas B que tenga el marcador \"Anti-HBc\" positivo (asÃ­ su antÃ­geno estÃ© negativo y su carga viral en cero) DEBE recibir profilaxis antiviral universal diaria (ej. Entecavir) desde el inicio de la terapia y hasta 12-18 meses despuÃ©s de suspenderla.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, aquÃ­ es donde cae la mayorÃ­a de la gente en el examen de medicina interna. La gran \"cascarita\" es el tÃ©rmino \"infecciÃ³n resuelta o curada\". Como el HBsAg saliÃ³ negativo y el paciente tiene anticuerpos protectores (Anti-HBs), el mÃ©dico general anota \"paciente inmunizado\" y autoriza el Rituximab (OpciÃ³n A). Tres meses despuÃ©s, la paciente ingresa amarilla, en coma hepÃ¡tico y fallece porque el Rituximab despertÃ³ el ADN latente en los hepatocitos. El anticuerpo clave para vigilar no es el de superficie, es el Core (Anti-HBc). Si el Anti-HBc estÃ¡ positivo alguna vez en la vida de un paciente, el virus estÃ¡ durmiendo ahÃ­ dentro. Ponle el Entecavir profilÃ¡ctico y te evitas una demanda mÃ©dica y un fallecimiento.",
    keyPoints: [
      "Paciente oncolÃ³gico o reumatolÃ³gico programado para recibir Rituximab (o quimioterapia intensiva).",
      "SerologÃ­a de Hepatitis B: HBsAg (-) PERO Anti-HBc (+). (InfecciÃ³n resuelta).",
      "Riesgo extremo de reactivaciÃ³n viral letal de la Hepatitis B. El uso de profilaxis profilÃ¡ctica crÃ³nica con Entecavir o Tenofovir es MANDATORIO antes del biolÃ³gico.",
      "Tema: ReactivaciÃ³n de Hepatitis B / InmunosupresiÃ³n en ReumatologÃ­a."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-40",
    university: "UCC",
    examArea: "PediatrÃ­a / NeonatologÃ­a / Cuidado Intensivo",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neonatologia", "cuidado_intensivo"],
    statement: "ReciÃ©n nacido de 38 semanas de edad gestacional, extraÃ­do por parto vaginal no institucional sin control prenatal. Inmediatamente tras el nacimiento, el niÃ±o se presenta severamente cianÃ³tico, con aleteo nasal y quejido respiratorio. Al examen fÃ­sico en la sala de reanimaciÃ³n: el abdomen se observa notoriamente excavado (escafoide) y el hemitÃ³rax izquierdo luce abombado. A la auscultaciÃ³n cardiopulmonar, el mÃ©dico reporta una franca disminuciÃ³n o ausencia de murmullo vesicular en todo el hemitÃ³rax izquierdo y los ruidos cardÃ­acos se escuchan desplazados e intensos sobre la lÃ­nea medioclavicular derecha. Tras realizar la fase inicial de pasos de reanimaciÃ³n (calor, posicionamiento, estimulaciÃ³n), la frecuencia cardÃ­aca persiste en 90 lpm y el neonato no respira con eficacia. Â¿CuÃ¡l es el paso INMEDIATO de soporte respiratorio MÃS seguro y adecuado para salvar la vida de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar Inmediatamente VentilaciÃ³n con PresiÃ³n Positiva (VPP) usando bolsa y mascarilla facial (bolseo).",
        distractorProfile: "general_algorithmic_trap_lethal_here",
        incorrectFeedback: "La ventilaciÃ³n con bolsa-mascarilla introduce volÃºmenes ingentes de aire al estÃ³mago y al tracto gastrointestinal (que estÃ¡ herniado en el tÃ³rax), inflando las vÃ­sceras y produciendo un colapso mediastÃ­nico por compresiÃ³n pulmonar restrictiva fulminante."
      },
      {
        id: "B",
        label: "B",
        text: "Realizar intubaciÃ³n orotraqueal directa y colocaciÃ³n simultÃ¡nea de una sonda orogÃ¡strica o nasogÃ¡strica de gran calibre a succiÃ³n continua."
      },
      {
        id: "C",
        label: "C",
        text: "Introducir una aguja de punciÃ³n descompresiva de emergencia en el segundo espacio intercostal izquierdo por sospecha de un neumotÃ³rax a tensiÃ³n.",
        distractorProfile: "misdiagnosis_pneumothorax",
        incorrectFeedback: "Los ruidos alejados en un hemitÃ³rax sugieren neumotÃ³rax, pero la asociaciÃ³n con abdomen excavado y ruidos cardÃ­acos desplazados confirma HDC; puncionar asumiendo neumotÃ³rax causarÃ¡ perforaciÃ³n iatrogÃ©nica y catastrÃ³fica de vÃ­scera hueca gÃ¡strica intratorÃ¡cica."
      },
      {
        id: "D",
        label: "D",
        text: "Posicionar al paciente en decÃºbito lateral derecho y administrar oxÃ­geno al 100% por cÃ¡mara cefÃ¡lica exclusivamente (Halo).",
        distractorProfile: "insufficient_conservative_management",
        incorrectFeedback: "La administraciÃ³n pasiva de oxÃ­geno mediante Halo no aporta soporte de presiÃ³n para mantener abiertos los alvÃ©olos de un pulmÃ³n hipoplÃ¡sico grave, y el neonato asfixiado progresarÃ¡ rÃ¡pidamente a la bradicardia sostenida y muerte en minutos."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con la presentaciÃ³n clÃ¡sica posnatal de una Hernia DiafragmÃ¡tica CongÃ©nita (HDC) izquierda (Defecto de Bochdalek): dificultad respiratoria y cianosis graves asociadas a un abdomen escafoide (porque las vÃ­sceras estÃ¡n en el tÃ³rax) y ruidos cardÃ­acos desplazados a la derecha (por compresiÃ³n mediastÃ­nica). El pulmÃ³n ipsilateral sufre hipoplasia pulmonar severa. La regla vital de oro en la reanimaciÃ³n neonatal de la HDC es que la **VentilaciÃ³n con PresiÃ³n Positiva mediante bolsa-mascarilla estÃ¡ ABSOLUTAMENTE CONTRAINDICADA**. Si se bolsea al paciente, el aire insuflado llenarÃ¡ el estÃ³mago y los intestinos que estÃ¡n herniados dentro del tÃ³rax, expandiÃ©ndolos como globos y aplastando de forma irreversible el poco pulmÃ³n sano restante, induciendo el paro cardÃ­aco por compromiso mediastÃ­nico. La conducta mandatoria es la intubaciÃ³n endotraqueal inmediata (para ventilar directamente la trÃ¡quea aislando el esÃ³fago) y la inserciÃ³n de una sonda orogÃ¡strica/nasogÃ¡strica a libre drenaje para desinflar las asas intestinales intratorÃ¡cicas.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** AquÃ­ el escenario te confronta entre el algoritmo general de ReanimaciÃ³n Neonatal (NRP) y la patologÃ­a especÃ­fica. El NRP dice \"Si la FC <100 lpm, bolsee con mÃ¡scara\" (OpciÃ³n A). Â¡Pero esta es la excepciÃ³n a la regla! Si el bebÃ© tiene el intestino ocupando el espacio de su pulmÃ³n izquierdo, y tÃº empiezas a meter aire a presiÃ³n positiva por su boca, la mitad de ese aire se irÃ¡ al estÃ³mago, inflando las asas intestinales herniadas. El niÃ±o colapsarÃ¡ frente a tus ojos. La Ãºnica manera de llevar oxÃ­geno al hipoplÃ¡sico pulmÃ³n es aislando la vÃ­a aÃ©rea con un tubo traqueal, mientras aspiras el aire del estÃ³mago con una sonda gruesa para abrirle espacio al mediastino. La punciÃ³n con aguja (OpciÃ³n C) en este niÃ±o resultarÃ­a en que perforarÃ­as el estÃ³mago o el colon directamente, causando una peritonitis fecal masiva dentro de la pleura.",
    keyPoints: [
      "ReciÃ©n nacido asfÃ­ctico con Abdomen Excavado (escafoide) + Dificultad respiratoria.",
      "AuscultaciÃ³n de ruidos cardÃ­acos en el lado derecho.",
      "Hernia DiafragmÃ¡tica CongÃ©nita (HDC). Regla en sala de partos: IntubaciÃ³n Orotraqueal + Sonda GÃ¡strica. NUNCA ventilar con bolsa-mascarilla.",
      "Tema: Urgencias Neonatales / Hernia DiafragmÃ¡tica CongÃ©nita."
    ]
  }
];

