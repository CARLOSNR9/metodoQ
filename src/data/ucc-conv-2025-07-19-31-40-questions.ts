import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #3 (19 jul 2025) Â· Preguntas #31”“#40.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_31_40_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-31",
    university: "UCC",
    examArea: "Medicina Interna / Neurología / Psiquiatría",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neurologia", "psiquiatria"],
    statement: "Mujer de 24 años es llevada a urgencias por su familia debido a cambios severos de comportamiento de 3 semanas de evolución, caracterizados por labilidad emocional, paranoia y alucinaciones visuales. Inicialmente fue valorada por psiquiatría e inició haloperidol, pero hace 48 horas desarrolló disquinesias orofaciales severas, fluctuación de la presión arterial (160/100 a 85/50 mmHg), taquicardia y un episodio de convulsión tónico-clónica generalizada. Al examen físico: mutismo acinético, hipertermia de 38.5°C, sin rigidez de nuca clara. La punción lumbar reporta 45 linfocitos/mmÂ³, proteínas de 60 mg/dL y glucosa normal. El panel viral (PCR para VHS, CMV, Enterovirus) es negativo. Una ecografía transvaginal reporta una masa ovárica quística compleja de 5 cm. ¿Cuál es la terapia sistémica INMEDIATA MÁS apropiada mientras se programa la intervención quirúrgica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender el haloperidol, iniciar Bromocriptina y Dantroleno por sospecha de Síndrome Neuroléptico Maligno.",
        distractorProfile: "overlapping_toxidrome_trap",
        incorrectFeedback: "El Síndrome Neuroléptico Maligno presenta fiebre y disautonomía post-neurolépticos, pero se caracteriza por rigidez muscular \"en tubo de plomo\" y CPK masivamente elevada, no por convulsiones, pleocitosis en LCR ni disquinesias orofaciales hipercíneticas."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar terapia inmunomoduladora intensiva con pulsos de Metilprednisolona intravenosa e Inmunoglobulina G (IGIV) o Plasmaféresis."
      },
      {
        id: "C",
        label: "C",
        text: "Mantener Aciclovir empírico a dosis meningeas por 14 días a pesar de la PCR negativa, por alta tasa de falsos negativos.",
        distractorProfile: "stubborn_infectious_protocol",
        incorrectFeedback: "Mantener el Aciclovir tras un panel molecular viral exhaustivamente negativo retrasa el inicio de la inmunosupresión salvavidas, permitiendo el daño neurológico irreversible mediado por anticuerpos."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar terapia antiepiléptica con Ácido Valproico y derivar a un pabellón de salud mental para manejo de esquizofrenia refractaria.",
        distractorProfile: "catastrophic_misdiagnosis",
        incorrectFeedback: "Tratar el cuadro como un trastorno psiquiátrico primario en presencia de fiebre, convulsiones, disautonomía y pleocitosis en el LCR constituye un error fatal y un pase directo a la mortalidad en urgencias."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una Encefalitis Autoinmune por anticuerpos contra el receptor NMDA (Anti-NMDAR), el prototipo de encefalitis paraneoplásica en mujeres jóvenes, clásicamente asociada a teratomas ováricos. Su presentación es escalonada: fase prodrómica, fase psiquiátrica (frecuentemente diagnosticada erróneamente como esquizofrenia aguda), seguida de complicaciones neurológicas severas (convulsiones, disquinesias orofaciales continuas) y disautonomía que pone en riesgo la vida (arritmias, hipoventilación, fluctuación tensional). El tratamiento salvavidas exige una terapia dual urgente: resección quirúrgica del tumor (teratoma) y barrido de anticuerpos del sistema con inmunosupresión de primera línea (Corticosteroides a altas dosis + IGIV o Plasmaféresis).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, esta patología es la gran simuladora psiquiátrica del siglo XXI. Muchas de estas pacientes terminan amarradas en un hospital mental bajo el diagnóstico de \"psicosis aguda\" hasta que hacen el paro cardíaco por disautonomía. La presencia de las disquinesias orofaciales tras recibir haloperidol no es un efecto extrapiramidal común, es la manifestación clásica del anticuerpo bloqueando el receptor NMDA en los ganglios basales. Si el virus del herpes sale negativo en el LCR, no te aferres al Aciclovir; tu cerebro debe saltar de la infectología a la inmunología al instante.",
    keyPoints: [
      "Mujer joven con debut psiquiátrico agudo que evoluciona a convulsiones y disquinesias orofaciales (\"muecas\" o masticación continua).",
      "Signos de disautonomía (fluctuación de pulso/PA) y hallazgo de masa ovárica.",
      "LCR con pleocitosis leve y panel infeccioso negativo.",
      "Encefalitis por anticuerpos Anti-NMDAR. Requiere inmunosupresión profunda e inmediata (Esteroides + IGIV) y resección del teratoma.",
      "Tema: Encefalitis Autoinmune Paraneoplásica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-32",
    university: "UCC",
    examArea: "Pediatría / Nefrología",
    topic: "Nefrología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "nefrologia"],
    statement: "Un lactante masculino de 9 meses es llevado a consulta por pobre ganancia pondoestatural (peso y talla en el percentil 3), episodios recurrentes de vómitos, irritabilidad y poliuria (los padres reportan que el pañal se empapa con inusual frecuencia). Al examen físico luce desnutrido y con signos de deshidratación leve. Paraclínicos: Sodio 140 mEq/L, Potasio 2.8 mEq/L (Hipokalemia), Cloro 115 mEq/L (Hipercloremia). Los gases venosos reportan pH 7.25, HCO3 12 mEq/L, Anión Gap 10 (normal). El pH urinario de una muestra fresca es de 7.1. Una ecografía renal reporta presencia de nefrocalcinosis bilateral franca. ¿Cuál es el defecto fisiopatológico que explica este síndrome y orienta su terapia específica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Incapacidad del túbulo contorneado proximal para reabsorber bicarbonato filtrado.",
        distractorProfile: "proximal_rta_confusion",
        incorrectFeedback: "La falla en la reabsorción proximal de bicarbonato (ATR tipo 2) permite que el túbulo distal compense la acidez, logrando un pH urinario < 5.5 tras la depleción inicial, y característicamente no se asocia con nefrocalcinosis masiva."
      },
      {
        id: "B",
        label: "B",
        text: "Defecto en la secreción de hidrogeniones ($H^+$) en las células intercaladas alfa del túbulo distal."
      },
      {
        id: "C",
        label: "C",
        text: "Mutación en el cotransportador $Na^+-K^+-2Cl^-$ de la rama ascendente gruesa del asa de Henle.",
        distractorProfile: "bartter_syndrome_overlap",
        incorrectFeedback: "El defecto en el asa de Henle corresponde al Síndrome de Bartter, el cual también produce poliuria, falla de medro y nefrocalcinosis, pero se asocia clásicamente a ALCALOSIS metabólica, no a acidosis."
      },
      {
        id: "D",
        label: "D",
        text: "Hipoaldosteronismo secundario con incapacidad para secretar potasio y retener sodio.",
        distractorProfile: "type4_rta_opposite_potassium",
        incorrectFeedback: "El hipoaldosteronismo (ATR tipo 4) produce acidosis hiperclorémica pero se caracteriza invariablemente por hiperkalemia (potasio alto), lo que choca frontalmente con el potasio en 2.8 de este paciente."
      }
    ],
    correctOptionId: "B",
    explanation: "El lactante cursa con una Acidosis Tubular Renal (ATR) Tipo 1 (Distal). La triada diagnóstica fundamental incluye: acidosis metabólica de anión gap normal (hiperclorémica), hipokalemia severa y un pH urinario que JAMÁS logra bajar a rangos ácidos normales (se mantiene persistentemente > 5.5, usualmente alcalino, como el 7.1 del caso). Este defecto en las células intercaladas alfa del túbulo colector impide excretar la carga ácida diaria. Al no poder excretar hidrogeniones, el riñón elimina grandes cantidades de potasio y calcio para mantener la electroneutralidad, provocando hipokalemia y un ambiente urinario alcalino rico en calcio, lo cual precipita inexorablemente la formación de cristales de fosfato de calcio (nefrocalcinosis), una complicación patognomónica de la ATR Tipo 1.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** El diferencial de las acidosis tubulares renitentes siempre entra en el examen de residencia. La ATR Tipo 2 (Proximal - opción A) bota el bicarbonato, pero la nefrona distal sí funciona, por lo que el pH de la orina puede ser ácido (<5.5) y RARA VEZ hace nefrocalcinosis. La ATR Tipo 4 (opción D) cursa con POTASIO ALTO. La ATR Tipo 1 es la que \"petrifica\" el riñón de los niños (nefrocalcinosis) porque junta calcio alto en orina con un pH alcalino, el caldo de cultivo perfecto para formar cálculos.",
    keyPoints: [
      "Lactante con falla de medro, acidosis metabólica hiperclorémica e hipokalemia.",
      "Orina persistentemente alcalina (pH > 5.5).",
      "Evidencia radiológica de nefrocalcinosis o urolitiasis temprana.",
      "Acidosis Tubular Renal Tipo 1 (Distal). El manejo crónico requiere sales alcalinizantes (Citrato de Potasio) para corregir el pH y evitar la falla renal por cálculos.",
      "Tema: Nefrología Pediátrica / Acidosis Tubular Renal."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-33",
    university: "UCC",
    examArea: "Medicina Interna / Gastroenterología / Urgencias",
    topic: "Gastroenterología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "urgencias"],
    statement: "Hombre de 26 años, con diagnóstico de Colitis Ulcerativa de 4 años de evolución, acude a urgencias por un brote agudo severo. Refiere más de 12 deposiciones líquidas sanguinolentas al día, tenesmo severo, y fiebre no cuantificada. En las últimas 24 horas, la diarrea se detuvo bruscamente, pero el paciente desarrolló una marcada distensión abdominal. Al examen físico: febril (39.2°C), taquicárdico (128 lpm), letárgico, PA 95/60 mmHg. Abdomen intensamente distendido, timpánico, con dolor difuso a la palpación y ruidos intestinales ausentes. Una radiografía simple de abdomen en decúbito supino evidencia dilatación continua del colon transverso de 8.5 cm de diámetro, con pérdida de las haustras (patrón en \"tubo de plomo\") y múltiples niveles hidroaéreos. No hay neumoperitoneo evidente. ¿Cuál de las siguientes acciones terapéuticas está ABSOLUTAMENTE CONTRAINDICADA en el manejo inmediato de este cuadro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administración de pulsos intravenosos de hidrocortisona (o metilprednisolona) a altas dosis.",
        distractorProfile: "standard_medical_therapy",
        incorrectFeedback: "La administración de corticosteroides a altas dosis es el pilar del tratamiento médico (salvo si se sospecha infección subyacente primaria pura) para desinflamar rápidamente la mucosa y evitar la cirugía radical."
      },
      {
        id: "B",
        label: "B",
        text: "Solicitud de valoración inmediata por el servicio de cirugía general/coloproctología.",
        distractorProfile: "multidisciplinary_mandatory_step",
        incorrectFeedback: "Contactar al cirujano el día cero es mandatorio; el 50% de estos pacientes terminarán en colectomía de emergencia si el manejo médico falla en las primeras 48 horas."
      },
      {
        id: "C",
        label: "C",
        text: "Realización de una videocolonoscopia total con toma de biopsias para confirmar actividad de la enfermedad y buscar CMV."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciación de esquema antibiótico de amplio espectro endovenoso para cubrir translocación bacteriana.",
        distractorProfile: "vital_support_therapy",
        incorrectFeedback: "La translocación bacteriana inminente y la sepsis sistémica obligan al uso precoz de antibióticos intravenosos de amplio espectro en la reanimación inicial del megacolon tóxico."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con un Megacolon Tóxico, la complicación aguda más letal de la enfermedad inflamatoria intestinal (particularmente la Colitis Ulcerativa). Se diagnostica por la clínica de toxicidad sistémica (fiebre, taquicardia, leucocitosis, anemia, alteración del sensorio) sumada a una dilatación radiológica del colon transverso > 6 cm. Ante un Megacolon Tóxico, la pared del colon se encuentra adelgazada, isquémica y extremadamente friable. La realización de una colonoscopia total (o enemas de bario) conlleva un riesgo altísimo e inaceptable de perforación iatrogénica fulminante debido a la insuflación de aire y manipulación mecánica, estando ABSOLUTAMENTE CONTRAINDICADA. Además, medicamentos que paralizan la motilidad colónica (como Loperamida, anticolinérgicos u opiáceos) también están proscritos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un error de residente de primer año es intentar \"diagnosticar bien\" un brote antes de tratarlo. Si le pasas una sonda de colonoscopio e insuflas aire para visualizar la mucosa a un colon que ya mide 8.5 cm de ancho, el ciego estallará instantáneamente. El manejo es \"enfriar\" el colon sistémicamente con megadosis de corticoides y antibióticos, rotando al paciente de posición para movilizar gas. Si el colon no se desinfla en 24 a 72 horas, o si hay signos de perforación en la radiografía, el tratamiento es la colectomía subtotal de emergencia.",
    keyPoints: [
      "Paciente con Colitis Ulcerativa que tras diarrea intensa frena sus deposiciones y desarrolla abdomen distendido y tóxico.",
      "Radiografía con diámetro del colon transverso > 6 cm con pérdida de haustras.",
      "Megacolon Tóxico. Requiere esteroides IV, antibióticos, NPO y llamado al cirujano. Colonoscopia total y antidiarreicos/opioides están formalmente contraindicados por riesgo de perforación y parálisis.",
      "Tema: Urgencias Gastroenterológicas / Megacolon Tóxico."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-34",
    university: "UCC",
    examArea: "Pediatría / Hematología / Urgencias",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "hematologia", "urgencias"],
    statement: "Adolescente masculino de 13 años, con antecedente conocido de Anemia de Células Falciformes (enfermedad homocigota HbSS), es traído a urgencias por presentar fiebre de 39.0°C, dolor torácico severo de características pleuríticas y tos seca de 24 horas de evolución. Al examen físico: luz taquipneico (FR 35 rpm), SatO2 86% al aire ambiente, FC 120 lpm. A la auscultación pulmonar se evidencian crépitos y disminución del murmullo vesicular en las bases de ambos hemitórax. El hemograma muestra una Hemoglobina de 6.0 g/dL (basal de 8.5 g/dL) con leucocitosis de 22,000/mmÂ³. La radiografía de tórax confirma nuevos infiltrados alveolares difusos bilaterales. Se inicia oxígeno suplementario, hidratación y analgesia con opioides. ¿Cuál es el pilar terapéutico INMEDIATO que disminuye de forma contundente la mortalidad e hipoxemia en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar exanguinotransfusión urgente (o transfusión simple) sumada a la cobertura empírica con Ceftriaxona y un macrólido."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar dosis altas de Hidroxiurea por vía oral para estimular la producción aguda de hemoglobina fetal.",
        distractorProfile: "chronic_therapy_misapplied_to_acute",
        incorrectFeedback: "La Hidroxiurea incrementa el nivel de hemoglobina fetal y previene las crisis vasooclusivas a largo plazo, pero su latencia es de semanas a meses, siendo inútil para el rescate agudo en urgencias."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar terapia trombolítica con Alteplase seguido de anticoagulación, ante la sospecha de microtrombos diseminados.",
        distractorProfile: "pathophysiological_error_thrombosis",
        incorrectFeedback: "Las crisis vasooclusivas de la drepanocitosis son producto del atrapamiento mecánico de eritrocitos rígidos y el daño endotelial, no de trombos de fibrina primaria; la trombólisis carece de indicación y aumentaría el riesgo de hemorragia pulmonar."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar esplenectomía de urgencia por secuestro esplénico de glóbulos rojos precipitante del cuadro pulmonar.",
        distractorProfile: "wrong_hematological_crisis",
        incorrectFeedback: "El secuestro esplénico cursa con esplenomegalia masiva dolorosa aguda y choque hipovolémico severo sin manifestaciones pulmonares primarias; además, suele ocurrir en preescolares, ya que los adolescentes ya tienen autoesplenectomía anatómica."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con un Síndrome Torácico Agudo (STA), la principal causa de muerte en adolescentes y adultos jóvenes con Anemia de Células Falciformes. Se define por la aparición de un nuevo infiltrado pulmonar en la radiografía, acompañado de fiebre, dolor torácico, taquipnea e hipoxemia. Fisiopatológicamente, ocurre un ciclo vicioso de isquemia-hipoxia por oclusión vascular en la microcirculación pulmonar por los eritrocitos falciformes, comúnmente desencadenado por infección atípica (*Mycoplasma/Chlamydia*), infarto óseo o embolia grasa. Ante un STA severo (hipoxemia <90%, compromiso multilobar, o caída de la hemoglobina >1 g/dL del basal), la transfusión sanguínea precoz (transfusión simple o exanguinotransfusión para remover la HbS) es la única medida que rompe la hipoxia tisular letal. Esto debe ir acompañado del protocolo antibiótico que siempre debe cubrir gérmenes típicos y atípicos (Cefalosporina de 3a gen + Macrólido).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** En la Anemia Falciforme, el oxígeno no puede penetrar la maraña de glóbulos rojos deformados (\"en hoz\") que están taponando los capilares alveolares. Puedes ponerle al paciente una cánula nasal a máxima capacidad, pero el oxígeno nunca llegará a la sangre. La única forma de \"destrabar\" el tráfico es hacer un cambio de aceite: sacar la sangre enferma y meter sangre nueva (exanguinotransfusión), o al menos diluir el porcentaje de células S transfundiendo glóbulos rojos frescos. La Hidroxiurea (Opción B) es excelente para PREVENIR estas crisis a largo plazo, pero tarda meses en actuar, por lo que no sirve absolutamente de nada en el escenario agudo del servicio de urgencias.",
    keyPoints: [
      "Paciente con Anemia Falciforme (HbSS) que desarrolla dolor torácico, fiebre, disnea y caída abrupta de la SatO2.",
      "Radiografía con aparición de un infiltrado nuevo.",
      "Síndrome Torácico Agudo. Requiere analgesia, hidratación cuidadosa, antibióticos duales (Típico+Atípico) y Transfusión de Glóbulos Rojos agresiva (simple o exanguinotransfusión) para salvar la vida.",
      "Tema: Urgencias Hematológicas / Síndrome Torácico Agudo."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-35",
    university: "UCC",
    examArea: "Medicina Interna / Cardiología / Toxicología",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "toxicologia"],
    statement: "Hombre de 76 años, con historia de Falla Cardíaca con Fracción de Eyección Reducida (FEVI 28%), consulta por un cuadro de 4 días de náuseas intratables, vómitos repetidos, fatiga severa y refiere percibir \"halos de color amarillo\" alrededor de las luces. En su tratamiento crónico recibe Bisoprolol, Espironolactona, Losartán y Digoxina. Al examen físico se encuentra somnoliento, deshidratado y bradicárdico. El monitor revela una taquicardia auricular con frecuencia de 130 lpm y un bloqueo AV 2:1, resultando en una frecuencia ventricular de 65 lpm. Los paraclínicos urgentes reportan: Creatinina 2.2 mg/dL (basal de 1.1 mg/dL), BUN 65 mg/dL. Potasio sérico 6.1 mEq/L (hiperkalemia grave). Ante la confirmación diagnóstica, ¿cuál de los siguientes tratamientos de rescate está FUERTEMENTE DESACONSEJADO / CONTRAINDICADO y podría resultar letal en este escenario?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administración de Anticuerpos Fab específicos (Fragmentos Fab antidigoxina).",
        distractorProfile: "first_line_antidote",
        incorrectFeedback: "La administración de anticuerpos Fab antidigoxina es el estándar de oro curativo absoluto; revierten tanto las arritmias mortales como la hiperkalemia inducida por el bloqueo de la bomba."
      },
      {
        id: "B",
        label: "B",
        text: "Tratamiento agresivo del potasio mediante Insulina regular asociada a Dextrosa al 50%.",
        distractorProfile: "safe_hyperkalemia_management",
        incorrectFeedback: "A diferencia del calcio, forzar el desplazamiento de potasio al interior de la célula con el combo Insulina-Dextrosa es un abordaje transitorio seguro mientras se consiguen los anticuerpos neutralizantes."
      },
      {
        id: "C",
        label: "C",
        text: "Uso de marcapasos transvenoso temporal para sobrepasar el bloqueo AV si hay inestabilidad.",
        distractorProfile: "mechanical_rescue_pacing",
        incorrectFeedback: "El uso de un marcapasos temporal está indicado en la bradicardia sintomática profunda o bloqueos completos refractarios inducidos por toxicidad medicamentosa nodal, siendo una medida de puente segura."
      },
      {
        id: "D",
        label: "D",
        text: "Administración de Gluconato de Calcio IV en bolo rápido para revertir los efectos miocárdicos de la hiperkalemia."
      }
    ],
    correctOptionId: "D",
    explanation: "El paciente cursa con una Intoxicación Aguda sobre Crónica por Digoxina (clásicamente por acumulación debida a Falla Renal Aguda pre-renal por vómitos y deshidratación). Las manifestaciones incluyen síntomas gastrointestinales, visuales (xantopsia o halos amarillos) y arritmias complejas (la taquicardia auricular con bloqueo AV 2:1 es altamente específica). A nivel celular, la digoxina inhibe la bomba Na+/K+ ATPasa, lo que impide que el potasio entre a la célula, generando una hiperkalemia severa (marcador pronóstico ominoso). Aunque la regla general del manejo de la hiperkalemia es dar Calcio IV (como escudo miocárdico), en la INTOXICACIÓN POR DIGOXINA está clásicamente proscrito o debe usarse con extrema cautela. La digoxina ya genera una sobrecarga intracelular masiva de calcio; inyectar calcio intravenoso puede precipitar una contracción miocárdica sostenida e irreversible (\"Corazón de Piedra\" o \"Stone Heart\"), induciendo parada en sístole. El tratamiento de elección son los fragmentos Fab antidigoxina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Esta pregunta entrelaza dos protocolos que chocan. El algoritmo clásico de hiperkalemia severa dicta poner Gluconato de Calcio. Pero la intoxicación por digitálicos es la \"excepción a la regla\". El corazón del intoxicado por digoxina está saturado de calcio en su citoplasma (así es como la digoxina aumenta la fuerza de contracción). Si pasas calcio a chorro, la célula miocárdica se bloquea en una sístole eterna que no podrás reanimar. Hoy en día algunos toxicológos debaten este dogma en escenarios desesperados, pero para efectos de exámenes de residencia (\"Board exams\"), el Calcio en digoxina sigue siendo la trampa letal a evitar. Trata el potasio alto con insulina-dextrosa y pide urgentemente los anticuerpos Fab antidigoxina.",
    keyPoints: [
      "Anciano medicado con cardiotónicos que presenta síntomas gastrointestinales, visión amarilla y arritmias (ej. Taquicardia Auricular con Bloqueo AV).",
      "Hiperkalemia concomitante.",
      "Toxicidad Digitálica severa. Antídoto: Fragmentos Fab antidigoxina. Precaución/Contraindicación histórica: No dar Calcio IV para corregir el potasio, riesgo de \"Stone Heart\".",
      "Tema: Toxicología Cardíaca / Intoxicación por Digoxina."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-36",
    university: "UCC",
    examArea: "Pediatría / Infectología / Urgencias",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "urgencias"],
    statement: "Niño de 4 años, previamente sano, es llevado a urgencias por presentar fiebre de 39.5°C, irritabilidad y dificultad para deglutir alimentos (disfagia) de 48 horas de evolución. Hoy los padres notan \"el cuello torcido y rígido\". Al examen físico: babeo moderado (sialorrea), el cuello se encuentra en discreta extensión, con marcada resistencia dolorosa a la flexión pasiva y lateralización hacia la derecha (tortícolis). La inspección de la cavidad orofaríngea mediante depresión cuidadosa de la lengua revela un abombamiento liso y prominente de la pared posterior de la faringe derecha. Una radiografía lateral de cuello de partes blandas tomada en fase de inspiración evidencia un espacio retrofaríngeo ensanchado (> 7 mm a nivel de C2). ¿Cuál es la conducta inicial de MÁS alto rendimiento diagnóstico y terapéutico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Tomografía Computarizada (TC) de cuello con medio de contraste para estadificar la colección antes del drenaje quirúrgico u opción médica."
      },
      {
        id: "B",
        label: "B",
        text: "Punción y aspiración a ciegas del abombamiento faríngeo en el servicio de urgencias para cultivo microbiológico rápido.",
        distractorProfile: "blind_and_lethal_puncture",
        incorrectFeedback: "Puncionar una masa retrofaríngea a ciegas en un paciente despierto expone a una ruptura incontrolada de la colección con broncoaspiración masiva de pus y obstrucción aguda de la vía aérea inferior."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Dexametasona intramuscular en dosis única y prescribir Amoxicilina oral, diagnosticando una adenitis cervical reactiva simple.",
        distractorProfile: "misdiagnosis_and_undertreatment",
        incorrectFeedback: "La tortícolis febril con abombamiento faríngeo y alteración radiológica del espacio prevertebral no es una adenopatía reactiva benigna; tratarlo de forma oral y ambulatoria resultará en mediastinitis fulminante por diseminación del absceso."
      },
      {
        id: "D",
        label: "D",
        text: "Ingreso inmediato a quirófano para traqueostomía de urgencia seguida de incisión y drenaje abierto transoral.",
        distractorProfile: "extreme_and_unjustified_surgical_measure",
        incorrectFeedback: "La traqueostomía de entrada es una medida extrema injustificada, reservada solo para obstrucciones completas inintubables; si el paciente requiere drenaje, suele realizarse de forma transoral controlada bajo intubación orotraqueal simple."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con un Absceso Retrofaríngeo, una grave infección de los espacios profundos del cuello que suele ocurrir en menores de 5 años (tras infecciones de vía aérea superior) dado que los ganglios linfáticos retrofaríngeos involucucionan después de esta edad. Clínicamente se presenta con disfagia, sialorrea, tortícolis por espasmo muscular profundo y el característico ensanchamiento del espacio prevertebral en la radiografía lateral. El paso obligatorio una vez asegurada la permeabilidad de la vía aérea en un paciente estable, es la TAC de cuello con contraste. La TAC es fundamental para diferenciar una verdadera colección purulenta organizada (absceso con realce en anillo, que puede requerir drenaje quirúrgico) de una celulitis retrofaríngea (inflamación flemonosa pura, que se maneja exclusivamente con antibióticos intravenosos como Ampicilina/Sulbactam o Clindamicina).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Ojo con esta patología que asusta a cualquiera en urgencias pediátricas. A diferencia de la Epiglotitis (donde el niño se ahoga en minutos y no puedes mandarlo a TAC porque se cierra la vía aérea), el absceso retrofaríngeo compromete el espacio retroposterior y usualmente te da una ventana de estabilidad respiratoria para tomar imágenes. NUNCA punciones un absceso a ciegas en urgencias (Opción B); el paciente toserá, broncoaspirará el pus directo a los pulmones y hará un síndrome de dificultad respiratoria agudo séptico y mortal. La TAC manda si lo operan o lo tratan con antibióticos.",
    keyPoints: [
      "Preescolar con fiebre alta, dolor de cuello, tortícolis o rigidez a la movilización, y disfagia/sialorrea.",
      "Masa en pared posterior de la faringe o radiografía lateral de cuello con ensanchamiento de tejidos prevertebrales.",
      "Absceso Retrofaríngeo. En paciente estable, siempre realizar TAC de cuello contrastada para distinguir absceso vs celulitis y guiar la intervención.",
      "Tema: Infecciones de Espacios Profundos del Cuello."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-37",
    university: "UCC",
    examArea: "Medicina Interna / Endocrinología",
    topic: "Endocrinología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia"],
    statement: "Mujer de 58 años, asintomática, acude a consulta de medicina interna para revisión de exámenes de rutina. Llama la atención un Calcio sérico corregido de 11.3 mg/dL (valor normal < 10.2 mg/dL) reportado en dos tomas diferentes. Los niveles de Hormona Paratiroidea intacta (iPTH) están elevados en 115 pg/mL (normal < 65 pg/mL), con Fósforo sérico de 2.2 mg/dL (disminuido) y niveles de 25-OH-Vitamina D normales. La paciente niega dolores óseos, cólicos renales, fatiga, depresión o síntomas abdominales. Se realiza una Densitometría Ósea (DEXA) que reporta un T-score de -2.7 en el tercio distal del radio y cuello femoral. El filtrado glomerular es de 78 mL/min/1.73mÂ² y la excreción urinaria de calcio en 24 horas es de 180 mg (normal). Con el diagnóstico de Hiperparatiroidismo Primario, ¿cuál es la conducta MÁS indicada basándose en las guías quirúrgicas actuales?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Prescribir Cinacalcet para sensibilizar el receptor de calcio y reducir los niveles de PTH, asumiendo manejo conservador de por vida.",
        distractorProfile: "wrong_chronic_medical_management",
        incorrectFeedback: "El Cinacalcet (calcimimético) reduce las cifras séricas de calcio, pero no revierte el deterioro de la densidad mineral ósea (osteoporosis inducida por PTH); su uso se reserva estrictamente para pacientes con falla renal grave secundaria o aquellos que rechazan/contraindican la cirugía absoluta."
      },
      {
        id: "B",
        label: "B",
        text: "Indicar manejo médico conservador con seguimiento anual estricto, hidratación abundante y bisfosfonatos orales (Alendronato).",
        distractorProfile: "incorrect_delay_of_indicated_surgery",
        incorrectFeedback: "Observar pasivamente a una paciente que ya cumple criterios estrictos de indicación quirúrgica (Osteoporosis T-score < -2.5 y Calcio > 1 mg/dL sobre el límite normal) asegura la ocurrencia inminente de fracturas patológicas graves y daño renal crónico."
      },
      {
        id: "C",
        label: "C",
        text: "Remitir a cirugía de cabeza y cuello para Paratiroidectomía definitiva y curativa."
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar ecografía de cuello; si no se localiza un adenoma mayor a 3 cm, el manejo debe mantenerse conservador con vitamina D.",
        distractorProfile: "diagnostic_modality_dictating_therapy",
        incorrectFeedback: "Las imágenes de localización (ecografía o gammagrafía sestaMIBI) se usan *después* de haber tomado la decisión bioquímica de operar para guiar al cirujano; si el tumor no se localiza por imagen (falso negativo), la cirugía exploratoria sigue estando indicada por el estado bioquímico alterado del paciente."
      }
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta un Hiperparatiroidismo Primario (HPTP) asintomático clásico. Aunque históricamente a los pacientes asintomáticos se les observaba, las guías internacionales (Consenso Internacional para el Manejo del HPTP Asintomático) establecen criterios precisos bajo los cuales la cirugía (Paratiroidectomía) se vuelve OBLIGATORIA para evitar secuelas a largo plazo, sin importar la ausencia de síntomas. Los criterios quirúrgicos absolutos son: 1) Calcio sérico > 1.0 mg/dL por encima del límite superior normal (la pte tiene 11.3, supera el límite). 2) T-score en densitometría â‰¤ -2.5 en cualquier sitio (Osteoporosis franca, confirmada aquí con -2.7). 3) Tasa de Filtrado Glomerular < 60 mL/min. 4) Edad < 50 años. 5) Nefrolitiasis o nefrocalcinosis asintomática por imagen o calcio en orina 24h >400 mg/día. Al cumplir dos de estos criterios (calcio elevado en rango de indicación y osteoporosis), la remisión quirúrgica no admite dilaciones, siendo el único tratamiento curativo definitivo y restaurador de la densidad mineral ósea.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Esta viñeta te prueba si estás leyendo las guías de los últimos 5 años o si operas con conceptos antiguos. Un \"HPTP asintomático\" no se manda para la casa a tomar agüita si el calcio está alto o el hueso se está desmoronando (DEXA -2.7 = Osteoporosis). Los medicamentos como el Cinacalcet (Opción A) solo bajan la cifra de calcio en sangre engañando al receptor de la paratiroides, pero NO revierten la pérdida de hueso y NO curan la enfermedad; se reservan exclusivamente para pacientes con un riesgo quirúrgico inaceptable o metástasis de un carcinoma paratiroideo inoperable.",
    keyPoints: [
      "Paciente con Calcio elevado y PTH intacta elevada/inapropiadamente normal (HPTP).",
      "Ausencia total de síntomas (\"asintomática\").",
      "Presencia de UN criterio quirúrgico (Edad < 50, Calcio > 1.0 sobre LSN, Osteoporosis, Falla renal).",
      "La cirugía (Paratiroidectomía) es mandatoria. No te dejes engañar por el adjetivo \"asintomático\".",
      "Tema: Hiperparatiroidismo Primario / Endocrinología Quirúrgica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-38",
    university: "UCC",
    examArea: "Pediatría / Urgencias / Alergología",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "urgencias", "alergologia"],
    statement: "Un niño de 6 años, con antecedente de atopia grave, es traído de urgencia por sus padres a un centro de salud tras presentar dificultad respiratoria súbita e hinchazón facial masiva 15 minutos después de haber ingerido galletas con crema de cacahuate en una fiesta infantil. A su llegada: pálido, cianótico, con estridor laríngeo severo y sibilancias bilaterales diseminadas. PA 65/40 mmHg (choque francamente establecido). El médico de urgencias actúa de manera impecable y administra de inmediato una dosis de Epinefrina (Adrenalina) intramuscular 1:1,000 (0.01 mg/kg) en la cara anterolateral del muslo. A los 5 minutos, el paciente revierte espectacularmente todo el cuadro clínico: el estridor desaparece, la presión sube a 105/65 mmHg y el niño luce tranquilo y reactivo. Tras colocar vía venosa, antihistamínicos (difenhidramina) y corticosteroides IV (metilprednisolona), los padres solicitan el alta inmediata para regresar al domicilio porque \"el niño ya está perfecto\". ¿Cuál es la conducta de observación temporal MÁS indicada y basada en la evidencia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Dar de alta inmediatamente, prescribiendo Prednisolona oral por 5 días para evitar reacciones tardías y un autoinyector de epinefrina.",
        distractorProfile: "false_security_from_adjunct_drugs",
        incorrectFeedback: "Los corticosteroides y antihistamínicos son drogas de soporte (tercera línea) que alivian síntomas tardíos de la piel, pero múltiples estudios demuestran que NO previenen en absoluto el desarrollo letal de una reacción anafiláctica bifásica si se da de alta al menor tempranamente."
      },
      {
        id: "B",
        label: "B",
        text: "Mantener al paciente en observación clínica continua en el servicio de urgencias por un mínimo de 4 a 6 horas antes de considerar el egreso."
      },
      {
        id: "C",
        label: "C",
        text: "Ingresar de forma rutinaria y obligatoria a la unidad de cuidado intensivo pediátrico (UCIP) por al menos 24 horas debido a la gravedad inicial del cuadro.",
        distractorProfile: "resource_misallocation_in_stable_patient",
        incorrectFeedback: "La UCIP se reserva para pacientes con choque anafiláctico refractario (que requieren infusión continua de adrenalina o intubación); un paciente con reversión clínica completa y rápida solo requiere monitorización vigilante en la sala general o urgencias."
      },
      {
        id: "D",
        label: "D",
        text: "Mantener en observación por 1 hora; si no recurren las sibilancias, se puede dar de alta de forma segura con antihistamínicos.",
        distractorProfile: "lethal_premature_discharge",
        incorrectFeedback: "Una hora de observación es peligrosamente insuficiente, dejando al niño desprotegido durante la ventana crítica de mayor incidencia del rebote anafiláctico (entre la hora 2 y 6 post-evento)."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presentó un cuadro de Anafilaxia Severa grado III (compromiso respiratorio alto, bajo y cardiovascular) que revirtió de forma óptima con la administración oportuna de Epinefrina IM (el fármaco único e insustituible que detiene el choque mastocitario). El peligro subyacente radica en el fenómeno de la \"Anafilaxia Bifásica\": la reaparición de síntomas anafilácticos potencialmente fatales (incluso peores que el primer evento) entre 1 y 72 horas después de la resolución completa inicial, sin haber existido una nueva exposición al alergeno. Esto ocurre en el 5-20% de los casos. Las guías de reanimación pediátrica (PALS / EAACI) establecen que TODO paciente que sufre un evento anafiláctico debe mantenerse en observación intrahospitalaria por un periodo mínimo de 4 a 6 horas (extendible a 12-24 horas en pacientes de alto riesgo que requirieron múltiples dosis de epinefrina, asmáticos severos o con historia previa de reacciones bifásicas).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** El error legal más trágico de las urgencias pediátricas. El niño llega cianótico, le pones la adrenalina intramuscular y a los 5 minutos está pidiendo jugo. Te confías, le das corticoides orales, lo mandas a casa, y a las tres horas hace una reacción bifásica (segunda ola de degranulación de mastocitos) en la cama de su habitación y fallece asfixiado sin un médico cerca. Ni los esteroides ni la loratadina detienen la reacción bifásica, la única garantía de seguridad es el reloj: tenerlo conectado al monitor de tu hospital por 4 a 6 horas para actuar de inmediato si el estridor regresa.",
    keyPoints: [
      "Paciente con anafilaxia clara que responde maravillosamente a la Adrenalina IM.",
      "Padres o personal médico solicitando el alta precoz por resolución de los síntomas.",
      "Riesgo de Reacción Bifásica. La conducta obligatoria es observar estrictamente al menos 4 a 6 horas en urgencias; los corticoides y antihistamínicos NO han demostrado prevenir esta recaída.",
      "Tema: Anafilaxia Pediátrica / Reacción Bifásica."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-39",
    university: "UCC",
    examArea: "Medicina Interna / Infectología / Reumatología",
    topic: "Infectología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "infectologia", "reumatologia"],
    statement: "Mujer de 54 años, con antecedente de Artritis Reumatoide severa refractaria a Metotrexato y fármacos biológicos anti-TNF, se programa para inicio inminente de terapia de depleción de células B con Rituximab (Anti-CD20). Como protocolo pre-biológico, se solicitan serologías infecciosas para virus hepatotropos. El tamizaje reporta el siguiente perfil: Antígeno de superficie de la Hepatitis B (HBsAg) negativo; Anticuerpos anti-Core totales del VHB (Anti-HBc total) francamente positivo; Anticuerpos de superficie (Anti-HBs) positivos a 150 mUI/mL. Carga viral ADN de VHB no detectable. Pruebas de función hepática estrictamente normales. Ante este perfil serológico de Hepatitis B \"pasada/resuelta\", y frente al inminente uso de Rituximab, ¿cuál es el paso mandatorio para prevenir una insuficiencia hepática aguda en esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Considerar a la paciente inmunizada naturalmente, sin riesgo de enfermedad, e iniciar el Rituximab sin intervenciones profilácticas.",
        distractorProfile: "passive_lethal_clearance",
        incorrectFeedback: "Aunque clínicamente la infección parezca \"resuelta\", la pérdida profunda de la memoria inmunológica de linfocitos B y T generada por el Rituximab desencadena una reactivación viral fulminante del cccDNA latente del hepatocito."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar una dosis de refuerzo de la vacuna recombinante contra la Hepatitis B de manera urgente antes del inicio de la infusión biológica.",
        distractorProfile: "useless_vaccination",
        incorrectFeedback: "La vacuna estimula la formación de anticuerpos de superficie, la cual la paciente ya posee en títulos protectores. No protege en absoluto contra la reactivación endógena de los viriones intracelulares durmientes de una infección previa."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar terapia profiláctica antiviral diaria ininterrumpida con un análogo de nucleósidos/nucleótidos de alta barrera genética (Entecavir o Tenofovir)."
      },
      {
        id: "D",
        label: "D",
        text: "Monitorizar rutinariamente las transaminasas hepáticas cada mes; iniciar interferón pegilado únicamente si el HBsAg se torna reactivo.",
        distractorProfile: "delayed_reactive_management",
        incorrectFeedback: "Esperar a que los marcadores se reactiven o las transaminasas se elevate (hepatitis clínica) ya marca un escenario donde el daño del parénquima hepático está masivamente instaurado y el riesgo de choque fulminante es inminente; la conducta es profilaxis primaria."
      }
    ],
    correctOptionId: "C",
    explanation: "Esta pregunta aborda un escenario médico de altísimo riesgo y cada vez más evaluado. La paciente presenta un perfil serológico clásico de **infección resuelta/previa por Hepatitis B** (HBsAg negativo y Anti-HBc positivo, usualmente con Anti-HBs protector). Sin embargo, el VHB nunca se erradica completamente del cuerpo; su ADN (cccDNA) permanece latente de forma vitalicia en los hepatocitos, bajo el estricto control de la inmunidad celular. Al administrar un fármaco intensamente inmunosupresor celular, y de forma suprema el **Rituximab** (Anti-CD20), el sistema inmune pierde el control del virus latente. Esto provoca una Reactivación del Virus de la Hepatitis B (mutación fulminante o necrosis masiva por reactivación inmune posterior), con mortalidades superiores al 30%. Las guías AASLD y AGA establecen con máxima rigidez que TODO paciente expuesto a agentes depletores de células B que tenga el marcador \"Anti-HBc\" positivo (así su antígeno esté negativo y su carga viral en cero) DEBE recibir profilaxis antiviral universal diaria (ej. Entecavir) desde el inicio de la terapia y hasta 12-18 meses después de suspenderla.",
    keyPoints: [
      "Paciente oncológico o reumatológico programado para recibir Rituximab (o quimioterapia intensiva).",
      "Serología de Hepatitis B: HBsAg (-) PERO Anti-HBc (+). (Infección resuelta).",
      "Riesgo extremo de reactivación viral letal de la Hepatitis B. El uso de profilaxis profiláctica crónica con Entecavir o Tenofovir es MANDATORIO antes del biológico.",
      "Tema: Reactivación de Hepatitis B / Inmunosupresión en Reumatología."
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Colega, aquí es donde cae la mayoría de la gente en el examen de medicina interna. La gran "cascarita" es el término "infección resuelta o curada". Como el HBsAg salió negativo y el paciente tiene anticuerpos protectores (Anti-HBs), el médico general anota "paciente inmunizado" y autoriza el Rituximab (Opción A). Tres meses después, la paciente ingresa amarilla, en coma hepático y fallece porque el Rituximab despertó el ADN latente en los hepatocitos. El anticuerpo clave para vigilar no es el de superficie, es el Core (Anti-HBc). Si el Anti-HBc está positivo alguna vez en la vida de un paciente, el virus está durmiendo ahí dentro. Ponle el Entecavir profiláctico y te evitas una demanda médica y un fallecimiento.`
  },
  {
    id: "ucc-conv-2025-07-19-40",
    university: "UCC",
    examArea: "Pediatría / Neonatología / Cuidado Intensivo",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neonatologia", "cuidado_intensivo"],
    statement: "Recién nacido de 38 semanas de edad gestacional, extraído por parto vaginal no institucional sin control prenatal. Inmediatamente tras el nacimiento, el niño se presenta severamente cianótico, con aleteo nasal y quejido respiratorio. Al examen físico en la sala de reanimación: el abdomen se observa notoriamente excavado (escafoide) y el hemitórax izquierdo luce abombado. A la auscultación cardiopulmonar, el médico reporta una franca disminución o ausencia de murmullo vesicular en todo el hemitórax izquierdo y los ruidos cardíacos se escuchan desplazados e intensos sobre la línea medioclavicular derecha. Tras realizar la fase inicial de pasos de reanimación (calor, posicionamiento, estimulación), la frecuencia cardíaca persiste en 90 lpm y el neonato no respira con eficacia. ¿Cuál es el paso INMEDIATO de soporte respiratorio MÁS seguro y adecuado para salvar la vida de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar Inmediatamente Ventilación con Presión Positiva (VPP) usando bolsa y mascarilla facial (bolseo).",
        distractorProfile: "general_algorithmic_trap_lethal_here",
        incorrectFeedback: "La ventilación con bolsa-mascarilla introduce volúmenes ingentes de aire al estómago y al tracto gastrointestinal (que está herniado en el tórax), inflando las vísceras y produciendo un colapso mediastínico por compresión pulmonar restrictiva fulminante."
      },
      {
        id: "B",
        label: "B",
        text: "Realizar intubación orotraqueal directa y colocación simultánea de una sonda orogástrica o nasogástrica de gran calibre a succión continua."
      },
      {
        id: "C",
        label: "C",
        text: "Introducir una aguja de punción descompresiva de emergencia en el segundo espacio intercostal izquierdo por sospecha de un neumotórax a tensión.",
        distractorProfile: "misdiagnosis_pneumothorax",
        incorrectFeedback: "Los ruidos alejados en un hemitórax sugieren neumotórax, pero la asociación con abdomen excavado y ruidos cardíacos desplazados confirma HDC; puncionar asumiendo neumotórax causará perforación iatrogénica y catastrófica de víscera hueca gástrica intratorácica."
      },
      {
        id: "D",
        label: "D",
        text: "Posicionar al paciente en decúbito lateral derecho y administrar oxígeno al 100% por cámara cefálica exclusivamente (Halo).",
        distractorProfile: "insufficient_conservative_management",
        incorrectFeedback: "La administración pasiva de oxígeno mediante Halo no aporta soporte de presión para mantener abiertos los alvéolos de un pulmón hipoplásico grave, y el neonato asfixiado progresará rápidamente a la bradicardia sostenida y muerte en minutos."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con la presentación clásica posnatal de una Hernia Diafragmática Congénita (HDC) izquierda (Defecto de Bochdalek): dificultad respiratoria y cianosis graves asociadas a un abdomen escafoide (porque las vísceras están en el tórax) y ruidos cardíacos desplazados a la derecha (por compresión mediastínica). El pulmón ipsilateral sufre hipoplasia pulmonar severa. La regla vital de oro en la reanimación neonatal de la HDC es que la **Ventilación con Presión Positiva mediante bolsa-mascarilla está ABSOLUTAMENTE CONTRAINDICADA**. Si se bolsea al paciente, el aire insuflado llenará el estómago y los intestinos que están herniados dentro del tórax, expandiéndolos como globos y aplastando de forma irreversible el poco pulmón sano restante, induciendo el paro cardíaco por compromiso mediastínico. La conducta mandatoria es la intubación endotraqueal inmediata (para ventilar directamente la tráquea aislando el esófago) y la inserción de una sonda orogástrica/nasogástrica a libre drenaje para desinflar las asas intestinales intratorácicas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Aquí el escenario te confronta entre el algoritmo general de Reanimación Neonatal (NRP) y la patología específica. El NRP dice \"Si la FC <100 lpm, bolsee con máscara\" (Opción A). ¡Pero esta es la excepción a la regla! Si el bebé tiene el intestino ocupando el espacio de su pulmón izquierdo, y tú empiezas a meter aire a presión positiva por su boca, la mitad de ese aire se irá al estómago, inflando las asas intestinales herniadas. El niño colapsará frente a tus ojos. La única manera de llevar oxígeno al hipoplásico pulmón es aislando la vía aérea con un tubo traqueal, mientras aspiras el aire del estómago con una sonda gruesa para abrirle espacio al mediastino. La punción con aguja (Opción C) en este niño resultaría en que perforarías el estómago o el colon directamente, causando una peritonitis fecal masiva dentro de la pleura.",
    keyPoints: [
      "Recién nacido asfíctico con Abdomen Excavado (escafoide) + Dificultad respiratoria.",
      "Auscultación de ruidos cardíacos en el lado derecho.",
      "Hernia Diafragmática Congénita (HDC). Regla en sala de partos: Intubación Orotraqueal + Sonda Gástrica. NUNCA ventilar con bolsa-mascarilla.",
      "Tema: Urgencias Neonatales / Hernia Diafragmática Congénita."
    ]
  }
];

