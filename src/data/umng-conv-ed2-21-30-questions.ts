import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #2 (Simulacro 2) · Preguntas #21–#30.
 */
export const UMNG_CONV_ED2_21_30_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed2-21",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un neonato masculino de 15 días de vida es traído a urgencias por su madre, quien refiere que el niño presenta vómitos constantes, rechazo a la vía oral y pérdida de peso progresiva desde hace una semana. Al examen físico, el niño luce severamente deshidratado, letárgico, con PA 60/30 mmHg y FC 180 lpm. Llama la atención una hiperpigmentación marcada en el escroto y las areolas mamilares. Los exámenes de laboratorio urgentes revelan: Glucosa 50 mg/dL, Sodio (Na+) 118 mEq/L, Potasio (K+) 7.5 mEq/L. Los gases arteriales muestran acidosis metabólica severa. Teniendo en cuenta la patología genética de base más probable, ¿cuál es el déficit enzimático responsable de este choque y el tratamiento hormonal urgente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Déficit de 21-alfa-hidroxilasa / Hidrocortisona y Fludrocortisona intravenosa."
      },
      {
        id: "B",
        label: "B",
        text: "Déficit de Glucosa-6-Fosfato Deshidrogenasa / Transfusión de hemoderivados.",
        distractorProfile: "different_pathology",
        incorrectFeedback: "El déficit de G6PD causa anemia hemolítica por estrés oxidativo, no un choque perdedor de sal."
      },
      {
        id: "C",
        label: "C",
        text: "Estenosis Hipertrófica del Píloro / Reanimación hídrica y Piloromiotomía.",
        distractorProfile: "mimic_symptoms",
        incorrectFeedback: "La trampa de oro. El píloro cerrado da vómitos en lactantes, PERO produce una Alcalosis metabólica con Hipopotasemia (Potasio BAJO) y cloro bajo. Este niño tiene acidosis y potasio por las nubes."
      },
      {
        id: "D",
        label: "D",
        text: "Déficit de 11-beta-hidroxilasa / Restricción de líquidos y espironolactona.",
        distractorProfile: "similar_disease_different_presentation",
        incorrectFeedback: "El déficit de 11-beta-hidroxilasa es la segunda causa de HSC, pero característicamente acumula desoxicorticosterona (DOCA), la cual tiene un potente efecto mineralocorticoide, por lo que el niño cursa con HIPERTENSIÓN e Hipokalemia, todo lo contrario a nuestro paciente chocado."
      }
    ],
    correctOptionId: "A",
    explanation: "El 90% de las Hiperplasias Suprarrenales Congénitas se deben a la deficiencia de la enzima 21-alfa-hidroxilasa. Sin esta enzima, la glándula suprarrenal no puede fabricar Aldosterona (por lo que el niño bota todo el sodio por la orina y retiene niveles letales de potasio) ni Cortisol (causando hipoglucemia y choque refractario). Todo el sustrato químico se desvía a la fábrica de andrógenos, lo que causa virilización (en niñas da genitales ambiguos, pero en niños varones a veces solo da hiperpigmentación de escroto por el exceso de ACTH cruzado con MSH). Es una emergencia absoluta: requiere bolos de Solución Salina y reemplazo urgente con glucocorticoides (Hidrocortisona) y mineralocorticoides (Fludrocortisona).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si este niño no recibe una ampolla de hidrocortisona hoy, se va a morir de una fibrilación ventricular por ese potasio de 7.5. Su cuerpo no tiene ni una gota de cortisol ni aldosterona para retener la sal de la leche materna. Al no tener aldosterona, orina sodio como si fuera agua. El escroto oscuro es un grito de auxilio del cerebro: la pituitaria está enviando cantidades industriales de ACTH tratando de despertar a la glándula suprarrenal, y esa ACTH mancha la piel de negro. Suénale la campana al endocrinólogo pediatra, porque este niño dependerá de las pastillas de cortisol toda su vida.",
    keyPoints: [
      "Crisis perdedora de sal neonatal (Hiponatremia + Hiperkalemia + Choque + Vómito) = Hiperplasia Suprarrenal Congénita.",
      "Enzima faltante en >90%: 21-alfa-hidroxilasa.",
      "Tratamiento urgente: Solución Salina + Hidrocortisona."
    ]
  },
  {
    id: "umng-conv-ed2-22",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Durante una ola de frío intenso, una familia entera es traída a urgencias por los vecinos. La madre ingresa convulsionando y el hijo de 10 años está en estado de coma. El padre, lúcido pero con cefalea pulsátil severa, mareos y náuseas, refiere que encendieron un calentador de gas antiguo en la sala cerrada para pasar la noche. Al examen físico del padre: PA 110/70 mmHg, FC 110 lpm. El pulsioxímetro capilar marca una SatO2 de 100%. Los gases arteriales reportan un pH 7.35, PaO2 de 98 mmHg (normal) pero con un lactato elevado de 5 mmol/L. Llama la atención que la piel del rostro de los pacientes tiene un tono rojo cereza. ¿Cuál es la terapia de elección inicial que salvará la vida de esta familia a pesar de los valores aparentemente \"normales\" de oxigenación?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Intubación rápida a toda la familia e inicio de Azul de Metileno intravenoso.",
        distractorProfile: "wrong_antidote",
        incorrectFeedback: "El Azul de Metileno es para la Metahemoglobinemia (que produce sangre color chocolate y cianosis grisácea)."
      },
      {
        id: "B",
        label: "B",
        text: "Infusión de Hidroxocobalamina a altas dosis por sospecha de cianuro.",
        distractorProfile: "wrong_poison",
        incorrectFeedback: "La Hidroxocobalamina es el antídoto para el cianuro (típico en incendios con plásticos o poliuretano quemado, no en combustión limpia incompleta de calentadores de gas donde reina el CO)."
      },
      {
        id: "C",
        label: "C",
        text: "Administración de Oxígeno suplementario al 100% mediante mascarilla de no reinhalación con reservorio."
      },
      {
        id: "D",
        label: "D",
        text: "Observación con líquidos IV y administración de esteroides para el edema cerebral, ya que la SatO2 es perfecta.",
        distractorProfile: "misinterpretation_of_vitals",
        incorrectFeedback: "El peor error toxicológico. La SatO2 de 100% es una mentira del aparato."
      }
    ],
    correctOptionId: "C",
    explanation: "El Monóxido de Carbono (CO) tiene una afinidad por la hemoglobina 200 a 250 veces mayor que el oxígeno. Ocupa los asientos de la hemoglobina y no la suelta, asfixiando a las células. El tratamiento inmediato en TODO paciente es lavar ese CO de la sangre inundando los pulmones con Oxígeno al 100% con mascarilla de reservorio (o Cámara Hiperbárica si hay coma/embarazo/convulsiones). El oxígeno al 100% reduce la vida media del CO en la sangre de 5 horas a solo 1 hora.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el CO es el \"asesino silencioso\". No huele, no pica, no avisa. Cuando entra a la sangre, secuestra a la hemoglobina y bota al oxígeno del carro. Si te confías del saturador de dedo que te marca 100% y dejas a ese niño respirando aire ambiente, su cerebro se va a licuar por hipoxia isquémica profunda. La única forma de \"patear\" al monóxido fuera de la sangre es aplicándole la ley de acción de masas: meterle oxígeno puro a presión a los alvéolos para que destrone al tóxico y lo haga salir por la respiración. ¡Máscara, bolsa reservorio inflada a 15 Litros y salvaste a la familia!",
    keyPoints: [
      "Calentador/Brasero en cuarto cerrado + Cefalea/Coma + SatO2 100% = Intoxicación por Monóxido de Carbono (CO).",
      "El oxímetro miente (lee la carboxihemoglobina como si fuera oxígeno).",
      "Tratamiento innegociable: Oxígeno al 100% con mascarilla de reservorio (o cámara hiperbárica en casos severos)."
    ]
  },
  {
    id: "umng-conv-ed2-23",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una mujer de 33 años (G3P2), con antecedente de una cesárea previa iterativa, se encuentra en trabajo de parto en fase activa (dilatación de 6 cm) en un intento de Parto Vaginal después de Cesárea (TOLAC). Súbitamente, durante el acmé de una contracción uterina, la paciente grita por un dolor suprapúbico de sensación \"desgarradora\". Inmediatamente después del grito, las contracciones uterinas cesan por completo. Usted nota que la presentación fetal (la cabeza), que antes se palpaba fácilmente en estación -1, ha \"desaparecido\" hacia arriba. A la palpación abdominal, usted puede palpar el codo y un pie del feto directamente debajo de la piel materna, y la madre entra en choque. El monitor fetal muestra bradicardia de 60 lpm. ¿Cuál es el diagnóstico clínico y la conducta inmediata a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ruptura de Vasa Previa / Oxitocina a altas dosis para expulsivo rápido.",
        distractorProfile: "wrong_diagnosis",
        incorrectFeedback: "La Vasa Previa rota produce un sangrado fetal masivo y bradicardia al romper membranas, pero NO detiene las contracciones del útero ni saca al bebé a la cavidad abdominal de la madre."
      },
      {
        id: "B",
        label: "B",
        text: "Desprendimiento Prematuro de Placenta (Abruptio) / Ruptura artificial de membranas y cesárea de emergencia.",
        distractorProfile: "similar_presentation",
        incorrectFeedback: "El Abruptio placentae cursa con dolor y choque, pero característicamente produce Hipertonía uterina (útero leñoso), es decir, el útero se contrae de forma tetánica y constante, no se \"apaga\"."
      },
      {
        id: "C",
        label: "C",
        text: "Ruptura Uterina / Laparotomía de emergencia (Cesárea y probable histerectomía)."
      },
      {
        id: "D",
        label: "D",
        text: "Atonía uterina por agotamiento muscular / Descanso materno, tocolíticos y fórceps.",
        distractorProfile: "wrong_timing",
        incorrectFeedback: "La atonía es una complicación del puerperio (tras salir el feto), y no explicaría el choque intraparto ni las partes fetales libres."
      }
    ],
    correctOptionId: "C",
    explanation: "Es la clínica de libro de la Ruptura Uterina. La cicatriz de la cesárea anterior no aguantó la fuerza del trabajo de parto y se abrió de lado a lado. Al rajarse el músculo, el útero pierde su tono (cesan las contracciones), el bebé \"se sale\" del útero y cae a nadar libremente entre los intestinos de la cavidad abdominal materna (por eso puedes tocarle el pie a través de la piel de la panza de la madre y la cabeza ya no se toca en la vagina). Esto genera una hemorragia intraabdominal catastrófica. La conducta es Quirófano INMEDIATO (Código Rojo): Laparotomía para sacar al feto libre, extraer la placenta y tratar de reconstruir el útero. Si la destrucción y la hemorragia son incontrolables (muy frecuente), termina en histerectomía obstétrica salvavidas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el útero de esta madre acaba de estallar como un globo viejo. Por la rajadura se escapó el bebé completo hacia la cavidad peritoneal de la mamá. La cabeza, que estaba a punto de coronar por la vagina, simplemente se resbaló hacia arriba y cayó entre los intestinos gruesos maternos. Por eso, al hacer el tacto, ya no sientes nada duro, solo un canal vacío y sangre bajando. El bebé se está asfixiando por el corte de la circulación y la madre se está desangrando en su propia barriga. No hay \"monitorización\" que valga. Grita \"Código Rojo\" y corre al quirófano a abrir esa barriga en vertical.",
    keyPoints: [
      "Ruptura Uterina = Dolor súbito + Cese de contracciones + Pérdida de estación (el feto \"sube\" de regreso al abdomen).",
      "Principal factor de riesgo: Cesárea previa (TOLAC).",
      "Manejo absoluto: Laparotomía urgente (Cesárea y reparación/histerectomía)."
    ]
  },
  {
    id: "umng-conv-ed2-24",
    university: "UMNG",
    examArea: "INFECTOLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 40 años, habitante de calle, portador conocido del Virus de la Inmunodeficiencia Humana (VIH) sin terapia antirretroviral, es traído por paramédicos al convulsionar en la vía pública. Al ingresar, el paciente está somnoliento, confuso y presenta hemiparesia del lado derecho. Su último recuento de CD4 (hace un año) era de 40 cel/mm3. Usted le realiza una Tomografía Computarizada (TAC) de cráneo con contraste que revela múltiples lesiones hipodensas de aspecto nodular en los ganglios basales y en la unión córtico-subcortical, las cuales presentan un intenso realce en forma de \"anillo\" al administrar el contraste, acompañadas de edema perilesional severo. ¿Cuál es el diagnóstico clínico más probable y la terapia empírica específica obligatoria a instaurar?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Toxoplasmosis cerebral / Pirimetamina, Sulfadiazina y Ácido Folínico."
      },
      {
        id: "B",
        label: "B",
        text: "Linfoma Primario del SNC / Quimioterapia sistémica con Metotrexato altas dosis y radioterapia.",
        distractorProfile: "similar_presentation",
        incorrectFeedback: "El Linfoma Primario del SNC es el principal diagnóstico diferencial. Sin embargo, el linfoma suele presentarse clásicamente como una lesión ÚNICA, periventricular, y su confirmación es por biopsia, la cual SOLO se realiza si falla el tratamiento empírico inicial para Toxoplasma."
      },
      {
        id: "C",
        label: "C",
        text: "Encefalitis viral por Herpes Simple tipo 1 / Aciclovir intravenoso y anticonvulsivantes.",
        distractorProfile: "wrong_imaging",
        incorrectFeedback: "El virus del Herpes ataca clásicamente de forma destructiva los lóbulos temporales, causando necrosis hemorrágica, pero no forma múltiples abscesos con realce en anillo perfecto."
      },
      {
        id: "D",
        label: "D",
        text: "Abscesos cerebrales bacterianos múltiples por endocarditis / Ceftriaxona, Vancomicina y Metronidazol.",
        distractorProfile: "epidemiological_mismatch",
        incorrectFeedback: "Aunque la endocarditis lanza émbolos sépticos, la epidemiología (SIDA sin TARV) y las características dictan como mandato estadístico la toxoplasmosis."
      }
    ],
    correctOptionId: "A",
    explanation: "La encefalitis por Toxoplasma gondii es la causa número uno de lesiones focales ocupantes de espacio en pacientes con VIH/SIDA (con CD4 clásicamente menores a 100 o 50). El parásito se reactiva formando abscesos que imagenológicamente tienen un centro necrótico oscuro (hipodenso) y una cápsula inflamada que brilla con el contraste (\"realce en anillo\"). La regla médica inquebrantable dicta que ante esta imagen, se asume toxoplasmosis y se inicia tratamiento empírico con Pirimetamina + Sulfadiazina + Ácido Folínico (para proteger la médula ósea). Si a los 10-14 días el paciente no mejora clínica ni imagenológicamente, se sospecha el segundo diagnóstico y se hace biopsia cerebral.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si este cerebro del TAC fuera un cielo estrellado, cada estrella en forma de aro brillante es un nido del parásito del gato (Toxoplasma). El sistema inmune del paciente, al quedarse sin linfocitos T, no pudo mantener dormidos a los parásitos que se tragó hace 10 años en una carne mal cocida. Se despertaron y se están comiendo sus ganglios basales, causando cortocircuitos (convulsiones). No pierdas tiempo pidiendo una biopsia de cerebro que lo puede matar. Trátalo con el triplete de antibióticos por dos semanas. Si al cabo de dos semanas el TAC sigue igual y el señor no despierta, ahí sí llama al neurocirujano porque no era toxoplasma, era un Linfoma y le toca agujazo cerebral.",
    keyPoints: [
      "VIH con CD4 <100 + Lesiones múltiples que realzan en ANILLO = Toxoplasmosis Cerebral.",
      "Tratamiento Empírico Mandatorio: Pirimetamina + Sulfadiazina + Ácido Folínico (Leucovorina)."
    ]
  },
  {
    id: "umng-conv-ed2-25",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "NEFROLOGÍA - HEMATOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un niño de 10 años, recién diagnosticado con Leucemia Linfoblástica Aguda (LLA) de muy alto riesgo, recibe su primera sesión de quimioterapia agresiva de inducción. Cuatro horas después de terminada la quimioterapia, el paciente presenta deterioro agudo de su estado general, oliguria, calambres musculares y episodios de tetania. El monitor cardíaco evidencia ensanchamiento del complejo QRS y prolongación del intervalo QT. Los exámenes de laboratorio revelan: Creatinina 2.5 mg/dL (basal de 0.6), Ácido Úrico 15 mg/dL, Potasio sérico 7.2 mEq/L. De los siguientes trastornos metabólicos, ¿cuál es el que usted espera confirmar en los paraclínicos que explicaría la tetania y es patognomónico de este síndrome catastrófico inducido por la quimioterapia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hipercalcemia masiva.",
        distractorProfile: "opposite_finding",
        incorrectFeedback: "La hipercalcemia es típica de los tumores sólidos con metástasis óseas o mieloma múltiple (destrucción directa del hueso o secreción de péptido relacionado a PTH), pero en la lisis tumoral aguda, el calcio hace exactamente lo contrario: se desploma."
      },
      {
        id: "B",
        label: "B",
        text: "Hipofosfatemia severa.",
        distractorProfile: "opposite_finding",
        incorrectFeedback: "El Fósforo se encuentra DENTRO de las células en altísimas cantidades. Al destruirse las células leucémicas de golpe, el fósforo se eleva drásticamente en la sangre (Hiperfosfatemia), no baja."
      },
      {
        id: "C",
        label: "C",
        text: "Hipocalcemia severa."
      },
      {
        id: "D",
        label: "D",
        text: "Hipomagnesemia extrema.",
        distractorProfile: "wrong_electrolyte",
        incorrectFeedback: "El magnesio puede alterarse en otros síndromes tóxicos (como por platinos), pero no es el pilar patognomónico estructurado del Síndrome de Lisis Tumoral de la prueba de Cairo-Bishop."
      }
    ],
    correctOptionId: "C",
    explanation: "El Síndrome de Lisis Tumoral (SLT) ocurre cuando la quimioterapia rompe millones de células malignas al mismo tiempo. El interior de las células se derrama a la sangre. La célula bota tres cosas principales: Potasio (hiperkalemia -> arritmias), Ácidos nucleicos (se vuelven Ácido Úrico -> tapa el riñón), y Fósforo (Hiperfosfatemia). La perla clave es que todo ese exceso masivo de fósforo en la sangre se une desesperadamente al poco calcio que anda flotando, precipitando cristales de fosfato de calcio en los tejidos (dañando el riñón y los vasos). Como el fósforo \"secuestra\" todo el calcio, el paciente sufre una HIPOCALCEMIA severa secundaria. Esta hipocalcemia es la responsable de la excitabilidad muscular extrema, los calambres y la tetania clínica (Signos de Chvostek y Trousseau).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate que las células de la leucemia son bombas llenas de Fósforo y Potasio. Cuando les pones la quimioterapia, estallan todas el mismo día. La sangre se vuelve un pantano tóxico. Todo ese Fósforo inmenso libre agarra por el cuello a cada molécula de Calcio que encuentra y se precipitan como \"arena de hueso\" en los riñones del niño, causándole falla renal aguda en 4 horas. Como ya no hay calcio libre en la sangre, los nervios del niño se disparan solos y hace calambres horribles (tetania). Prepara toneladas de solución salina y Rasburicasa (que destruye el ácido úrico) para limpiar la sangre. ¡No le des calcio a menos que la tetania lo ahogue, o precipitarás más cristales en sus riñones!",
    keyPoints: [
      "Síndrome de Lisis Tumoral (Tras Quimioterapia): Se derrama el contenido celular.",
      "Hiperkalemia (Potasio ALTO).",
      "Hiperuricemia (Ácido Úrico ALTO).",
      "Hiperfosfatemia (Fósforo ALTO).",
      "HIPOCALCEMIA (Calcio BAJO, secuestrado por el fósforo)."
    ]
  },
  {
    id: "umng-conv-ed2-26",
    university: "UMNG",
    examArea: "CARDIOLOGÍA",
    topic: "URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una mujer de 35 años acude a urgencias por palpitaciones de inicio súbito, sudoración y sensación de desmayo inminente (presíncope). Usted la encuentra pálida y sudorosa, con una PA de 90/60 mmHg. Al conectarla al monitor, usted observa una taquicardia de complejos anchos a 220 lpm, con un patrón muy particular: la amplitud de los complejos QRS aumenta y disminuye de forma ondulante y rítmica alrededor de la línea isoeléctrica de base. Usted revisa su historia clínica y nota que la paciente fue tratada recientemente en un hospital rural con Fluconazol intravenoso y Azitromicina por una neumonía atípica sobreinfectada. ¿Cuál es el tratamiento endovenoso INMEDIATO de elección para esta arritmia mortal específica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Amiodarona intravenosa.",
        distractorProfile: "contraindicated_treatment",
        incorrectFeedback: "La Amiodarona ES el tratamiento para la taquicardia ventricular monomórfica estable, pero está ABSOLUTAMENTE CONTRAINDICADA en la Torsades de Pointes. ¿Por qué? Porque la amiodarona bloquea los canales de potasio y prolonga enormemente el intervalo QT. Si la arritmia fue causada por un QT largo y tú le das amiodarona, empeoras el sustrato celular y el paciente muere en fibrilación ventricular."
      },
      {
        id: "B",
        label: "B",
        text: "Cardioversión eléctrica de baja energía.",
        distractorProfile: "wrong_indication",
        incorrectFeedback: "Si la paciente se desestabiliza por completo (sin pulso), la terapia eléctrica es Desfibrilación asincrónica, no cardioversión. Pero si tiene pulso (PA 90/60), el tratamiento médico primario estabilizador es la meta inmediata."
      },
      {
        id: "C",
        label: "C",
        text: "Sulfato de Magnesio intravenoso."
      },
      {
        id: "D",
        label: "D",
        text: "Adenosina intravenosa rápida.",
        distractorProfile: "wrong_arrhythmia",
        incorrectFeedback: "La adenosina se usa para las taquicardias supraventriculares (QRS estrecho) que dependen del nodo AV. Aquí el problema es en la masa del ventrículo."
      }
    ],
    correctOptionId: "C",
    explanation: "El trazado descrito es el de la \"Torzada de Puntas\" o Torsades de Pointes. Ocurre porque la repolarización celular es muy larga (QT largo) debido a interacciones farmacológicas (antibióticos, antifúngicos, antipsicóticos, ondansetrón). El tratamiento absoluto de primera línea universal, innegociable, es el Sulfato de Magnesio intravenoso en bolo (1-2 gramos en 5-15 min), el cual estabiliza mágicamente la membrana del miocito y suprime los post-potenciales tempranos que disparan la arritmia, independientemente de si el magnesio sérico de la paciente es normal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., mezclar Azitromicina con Fluconazol en urgencias es armar una bomba de tiempo celular. Los dos estiran el ciclo eléctrico del corazón (QT largo) hasta el límite. En un latido, el corazón se cruza con su propia electricidad (fenómeno de \"R sobre T\") y empieza a \"bailar ballet\" alrededor del monitor (Torsades de Pointes). Si le clavas una ampolla de Amiodarona pensando que es una arritmia normal, terminas de alargar ese QT y el corazón se convierte en un costal de gusanos flácido (Fibrilación Ventricular). Agarra 2 gramos de Magnesio, mételos por la vena, y verás cómo el corazón se \"resetea\" a la normalidad casi al instante.",
    keyPoints: [
      "Taquicardia de QRS que \"gira\" sobre la línea (Torsades de Pointes) = Culpa de QT Prolongado (Macrólidos, Fluoroquinolonas, Haloperidol, Hipokalemia).",
      "Droga mágica salvavidas: Sulfato de Magnesio IV en bolo.",
      "CONTRAINDICADO: Amiodarona."
    ]
  },
  {
    id: "umng-conv-ed2-27",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un lactante masculino de 3 meses de edad, cuyos padres omitieron las vacunas de los 2 meses por creencias personales, asiste a urgencias debido a un cuadro de accesos de tos incontrolables. La madre relata que el niño no tose una sola vez, sino que sufre \"ataques\" de 10 a 15 toses rápidas consecutivas en las que se pone cianótico, seguidas de una inspiración profunda forzada con un sonido agudo muy característico (como un \"gallo\" o estridor inspiratorio prolongado). Al final de casi todos los accesos de tos, el bebé vomita. En urgencias, los paraclínicos iniciales revelan un recuento de leucocitos abrumador de 45.000 células/mm³ con un 85% de linfocitos (Linfocitosis absoluta). ¿Cuál es el diagnóstico más probable y el grupo antibiótico de elección para el tratamiento y prevención del contagio en esta entidad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Bronquiolitis por Virus Sincitial Respiratorio / Tratamiento de soporte, los antibióticos no están indicados.",
        distractorProfile: "similar_symptoms",
        incorrectFeedback: "La bronquiolitis (VSR) afecta a lactantes y da tos, PERO clásicamente cursa con sibilancias respiratorias. Además, el hemograma en infecciones virales puede tener leve linfocitosis, pero nunca llega a niveles leucemoides de 45.000 como ocurre en pertussis."
      },
      {
        id: "B",
        label: "B",
        text: "Tos Ferina (Coqueluche) por Bordetella pertussis / Macrólidos (Azitromicina o Claritromicina)."
      },
      {
        id: "C",
        label: "C",
        text: "Neumonía atípica por Chlamydia trachomatis / Cefalosporinas de tercera generación.",
        distractorProfile: "wrong_pathogen",
        incorrectFeedback: "La Chlamydia da neumonía atípica \"afebril\" con eosinofilia o hemograma normal y conjuntivitis neonatal en el primer mes de vida, no \"gallos\" inspiratorios con hemogramas leucemoides. Además se trata con macrólidos, no cefalosporinas."
      },
      {
        id: "D",
        label: "D",
        text: "Fibrosis quística con sobreinfección por Pseudomonas / Aminoglucósidos (Tobramicina).",
        distractorProfile: "chronic_condition",
        incorrectFeedback: "La Fibrosis Quística da infecciones recurrentes purulentas en niños mayores, y el diagnóstico diferencial de este cuadro hiperagudo ahogante orienta hacia Bordetella."
      }
    ],
    correctOptionId: "B",
    explanation: "La clínica de Bordetella pertussis no vacunada es el clásico \"Síndrome Coqueluchoide\". La bacteria secreta una toxina (Toxina Pertussis) que inhibe la migración de los linfocitos a los tejidos, causando que se acumulen en la sangre hasta números absurdos (45k a 60k con gran linfocitosis, reaccionando como si fuera una leucemia). Los accesos de tos son tan severos que el niño vomita por el esfuerzo (vómito post-tusivo) o se ahoga (apneas cianóticas). El tratamiento absoluto para eliminar la bacteria de la faringe y detener la transmisibilidad (y levemente acortar los síntomas si se da temprano) son los Macrólidos (Azitromicina, Eritromicina o Claritromicina).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., escuchar a un bebé con tos ferina es traumático. El niño entra en un ataque de tos en \"metralleta\", tose tanto que bota todo el aire, se pone morado y hace un sonido espantoso agudo al intentar coger aire de nuevo (\"gallo\"). Como la toxina tapona los canales de los ganglios, los linfocitos se quedan flotando en la sangre alcanzando 50.000 por mm3. El pediatra asustado puede creer que es Leucemia. Dale Azitromicina de inmediato, y vacúnale a toda la familia, porque si no, algún hermanito menor de 1 mes (que aún no se ha podido vacunar) se contagiará y morirá de hipertensión pulmonar maligna en la UCI.",
    keyPoints: [
      "Tos en paroxismos + Estridor inspiratorio (\"gallo\") + Vómito post-tos = Tos Ferina (B. pertussis).",
      "Hallazgo cardinal en laboratorio: Reacción leucemoide con LINFOCITOSIS extrema (>40.000).",
      "Tratamiento: Azitromicina o Eritromicina (Macrólidos)."
    ]
  },
  {
    id: "umng-conv-ed2-28",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 62 años, diabético insulino-requiriente y con antecedente de enfermedad coronaria multivaso, asiste a urgencias a las 2:00 AM. Refiere dolor en hipocondrio derecho de 12 horas de evolución que inició tras una comida rica en grasas. Presenta fiebre de 39°C y escalofríos intensos. A la palpación abdominal, presenta defensa voluntaria en el hipocondrio derecho, un Signo de Murphy fuertemente positivo y se palpa una vesícula biliar francamente distendida y dolorosa. Usted solicita una ecografía abdominal y, además, una radiografía simple de abdomen de rutina por el protocolo de la clínica. En la radiografía simple se observa gas perfilando la pared de la vesícula biliar (aire dentro de la pared de la vesícula). Aparte del inicio de antibióticos de amplio espectro intravenosos, ¿cuál es la conducta quirúrgica DEFINITIVA inmediata que rige a este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Programar una Colecistectomía laparoscópica electiva y \"enfriar\" el cuadro 6 semanas con antibióticos por su alto riesgo cardiovascular.",
        distractorProfile: "wrong_timing",
        incorrectFeedback: "\"Enfriar\" la vesícula biliar con antibióticos y operar en 6 semanas es una práctica médica común para colecistitis litiásicas no complicadas. Pero si hay gas en la pared, enfriarla es garantizar que estalle en las siguientes horas causando peritonitis."
      },
      {
        id: "B",
        label: "B",
        text: "Realizar drenaje percutáneo exclusivo (Colecistostomía) guiado por ecografía y dejarlo como terapia final.",
        distractorProfile: "insufficient_treatment",
        incorrectFeedback: "La colecistostomía es buena terapia \"puente\" si no aguanta anestesia. Pero en la colecistitis enfisematosa, la pared de la vesícula está necrosada; un tubo no arregla el tejido muerto."
      },
      {
        id: "C",
        label: "C",
        text: "Colecistectomía de urgencia inmediata (quirófano stat) debido al alto riesgo inminente de perforación y gangrena."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar Colangiopancreatografía Retrógrada Endoscópica (CPRE) urgente para descomprimir el aire de la vía biliar.",
        distractorProfile: "wrong_procedure",
        incorrectFeedback: "La CPRE destapa el colédoco para la colangitis. En esta entidad el gas no bajó del intestino a la vía biliar, el gas nació directamente adentro de la pared muerta de la vesícula."
      }
    ],
    correctOptionId: "C",
    explanation: "La Colecistitis Enfisematosa es causada por isquemia de la arteria cística (típica de abuelos diabéticos microangiopáticos) seguida de una sobreinfección secundaria por bacterias productoras de gas, típicamente anaerobios clostridiales (Clostridium perfringens) o E. coli. Como la pared está infartada, se va a perforar inevitablemente casi en el 50% de los casos. La indicación absoluta es la Colecistectomía quirúrgica de EMERGENCIA INMEDIATA; se tiene que entrar a quirófano y extirpar ese órgano necrótico y gaseoso a la mayor brevedad.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la vesícula de este diabético es una granada a punto de explotar. Su arteria cística, dañada por años de azúcar alta, se tapó. La vesícula se asfixió. Llegaron los clostridios y empezaron a comerse la carne muerta produciendo burbujas de gas. Esas burbujitas negras que ves en la radiografía son el último aviso antes de que la pared de la vesícula se desintegre y derrame un litro de bilis purulenta en toda la cavidad del abuelito. Olvídate de su riesgo cardiológico, háblate con el anestesiólogo para que lo estabilice lo mejor que pueda, métanle tubo, entra por laparoscopia si eres hábil o abre la costilla por laparotomía, y saca ese trapo negro podrido que solía ser una vesícula.",
    keyPoints: [
      "Colecistitis en paciente Diabético Anciano + Gas en la PARED de la vesícula = Colecistitis Enfisematosa.",
      "Etiología: Isquemia + Clostridium perfringens.",
      "Tratamiento: Colecistectomía de Emergencia URGENTE (No admite terapia conservadora)."
    ]
  },
  {
    id: "umng-conv-ed2-29",
    university: "UMNG",
    examArea: "MEDICINA LEGAL Y BIOÉTICA",
    topic: "ÉTICA MÉDICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Usted es el médico de turno en la Unidad de Cuidados Intensivos (UCI). Recibe a un paciente masculino de 25 años quien sufrió un accidente de motocicleta severo hace 48 horas con trauma craneoencefálico cerrado severo. A pesar de una craniectomía descompresiva, el paciente progresa al deterioro total. En la mañana de hoy, la evaluación neurológica exhaustiva (realizada por dos médicos especialistas en tiempos diferentes, como dicta la norma colombiana) documenta: Glasgow de 3, ausencia de reflejo fotomotor, corneal, oculocefálico, faríngeo, tusígeno y ausencia de cualquier movimiento espinal inducido desde el cerebro. El Test de Apnea resulta categóricamente POSITIVO (no hay esfuerzo ventilatorio autónomo al desconectar el respirador permitiendo que el PCO2 suba > 60 mmHg). Se ha documentado la Muerte Encefálica clínica legalmente, a las 10:00 AM. La familia del paciente se encuentra en la sala de espera, orando fervientemente, y afirma rotundamente: \"Doctor, nuestro hijo tiene el corazón latiendo caliente y fuerte, está vivo, le exigimos que no lo desconecte porque un milagro va a ocurrir\". Teniendo en cuenta la Ley y Bioética Colombiana (Decreto 2493 de 2004), ¿cuál es su obligación médica y legal ineludible en este instante?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Mantener el soporte ventilatorio y vasopresor de forma indefinida hasta que el corazón se detenga por sí solo (asistolia), respetando el derecho al duelo familiar.",
        distractorProfile: "ethical_misconception",
        incorrectFeedback: "Mantener conectado a un cadáver constituye un uso irracional y no ético de los escasos recursos públicos, y expone al cadáver a mutilaciones médicas (obstinación terapéutica)."
      },
      {
        id: "B",
        label: "B",
        text: "Suspender todo soporte ventilatorio y farmacológico artificial inmediatamente y certificar el fallecimiento a las 10:00 AM, sin requerir el permiso o consentimiento de la familia para la desconexión."
      },
      {
        id: "C",
        label: "C",
        text: "Convocar al Comité de Bioética Hospitalaria para entablar un debate y someter a votación si el paciente puede ser desconectado.",
        distractorProfile: "procedural_misconception",
        incorrectFeedback: "Los comités de ética dirimen problemas sobre limitaciones de esfuerzo terapéutico en pacientes VIVOS. En un paciente muerto por protocolo encefálico, no hay debate ético; es una defunción clínica cerrada."
      },
      {
        id: "D",
        label: "D",
        text: "Mantener el soporte exclusivamente si la familia acepta firmar el consentimiento de donación de órganos múltiples.",
        distractorProfile: "partial_truth",
        incorrectFeedback: "Si la familia dice SÍ a la donación, se mantiene la máquina temporalmente. Pero si dicen NO, el paso siguiente sigue siendo APAGAR LA MÁQUINA, no dejarlo conectado ad eternum."
      }
    ],
    correctOptionId: "B",
    explanation: "En Colombia, así como en la medicina mundial, el diagnóstico clínico certificado de Muerte Encefálica marca la HORA EXACTA DE LA MUERTE del individuo (en este caso 10:00 AM). El corazón que late es simplemente un \"músculo bombeando sangre oxigenada artificialmente por una máquina eléctrica externa\" a un cadáver. El médico NO necesita el \"permiso\" de la familia para apagar un ventilador mecánico de un cadáver. El acto de apagar la máquina es simplemente suspender un soporte fútil a una persona ya fallecida.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., te vas a enfrentar a esto muchas veces. La madre va a llorar abrazada a tu bata tocando el pecho caliente de su hijo y sintiendo el corazón latir, rogándote que no lo mates apagando el aparato. Necesitas firmeza, compasión y ciencia. Tienes que mirarla a los ojos y decirle: \"Señora, el cerebro de su hijo murió a las 10 de la mañana de hoy. El que respira no es él, es una turbina plástica empujando aire a la fuerza. El que late no es él, es la electricidad artificial que lo mantiene.\" No estás pidiendo su permiso para desenchufar el cable de la pared; le estás avisando que la ley y la ciencia declaran que su hijo falleció y que las máquinas se apagarán ahora. Es duro, pero es el acto médico más compasivo para dejar que la naturaleza siga su curso.",
    keyPoints: [
      "Muerte Encefálica confirmada (Reflejos de tallo abolidos + Test de Apnea Positivo) = MUERTE CLÍNICA Y LEGAL.",
      "La hora de defunción es la hora de la confirmación neurológica.",
      "El médico tiene la obligación ética y legal de Desconectar todo soporte artificial vital, SIN necesitar el permiso de la familia."
    ]
  },
  {
    id: "umng-conv-ed2-30",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "URGENCIAS GASTROENTEROLÓGICAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un lactante de 20 meses es traído a urgencias. La abuela jura haberlo visto tragarse \"una moneda\" brillante pequeña de su cartera hace 2 horas. El niño lloró inicialmente pero ahora luce tranquilo, sin estridor y sin babeo (asintomático). Usted pide una radiografía Cérvico-Tórax AP y Lateral. En la placa AP, el objeto circular en el esófago superior presenta un signo de \"Doble Halo\" o anillo concéntrico (como una diana). En la placa lateral, el objeto se ve de perfil mostrando un escalón o reborde en uno de sus lados (como la letra \"T\"). Teniendo en cuenta estos hallazgos radiológicos clásicos, ¿cuál es el diagnóstico y la conducta URGENTE a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Impactación de moneda de 50 pesos / Observación estricta y dieta libre, esperar tránsito a estómago en 24 horas.",
        distractorProfile: "misdiagnosis_of_object",
        incorrectFeedback: "Confundir la imagen con una moneda convencional es la principal causa de demandas por muerte infantil en estos casos."
      },
      {
        id: "B",
        label: "B",
        text: "Impactación de Pila de Botón (batería de litio) / Extracción endoscópica de EMERGENCIA INMEDIATA (en menos de 2 horas)."
      },
      {
        id: "C",
        label: "C",
        text: "Impactación de Pila de Botón / Administrar jugo de naranja y pan para empujarla al estómago, donde el ácido la inactivará.",
        distractorProfile: "contraindicated_intervention",
        incorrectFeedback: "Intentar \"empujar a ciegas\" con comida sólida no funciona y agrava la impactación. (Nota: si la pila YA PASÓ al estómago y el niño está feliz y sin síntomas de sangrado, ahí sí se puede observar por unas semanas, pero en esófago NUNCA)."
      },
      {
        id: "D",
        label: "D",
        text: "Impactación de imán magnético / Observación por 48 horas con radiografías seriadas.",
        distractorProfile: "wrong_object",
        incorrectFeedback: "Un solo imán se observa, pero de cualquier forma la radiografía muestra los signos del doble halo y escalón de la pila, no de un imán."
      }
    ],
    correctOptionId: "B",
    explanation: "La Pila de Botón alojada en el esófago es una URGENCIA DE MUERTE INMINENTE. Al entrar en contacto con la humedad y los electrolitos de la mucosa esofágica, la batería genera una corriente eléctrica (hidrólisis) localizada que acumula de manera fulminante Hidróxido de Sodio (Lejía/Sosa cáustica) en el polo negativo, quemando el tejido como ácido de batería en vivo. Esto causa Necrosis de Licuefacción de toda la pared del esófago, y si se deja ahí, en menos de 2 horas la quemadura perforará el esófago, y en 4 a 6 horas perforará la Tráquea (fístula traqueoesofágica) o la Aorta (fístula aortoentérica letal por exanguinación masiva). El manejo endoscópico se hace a las horas 0 (urgencia tipo semáforo rojo extremo). Si no se tiene endoscopia disponible a los 10 minutos, algunas guías (Poison Control 2021) recomiendan administrar miel oral (10 ml c/10min) para aislar la pila transitoriamente mientras llega al quirófano, pero NUNCA observar expectante.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la pila en el esófago actúa como un soldador químico. La saliva cierra el circuito y quema un agujero hacia la tráquea o aorta en cuestión de horas. La moneda tiene bordes lisos y no doble halo, no caigas en esa trampa. Consigue al endoscopista de inmediato, es de vida o muerte.",
    keyPoints: [
      "Rx: Doble halo (frente) + Escalón (perfil) = Pila de botón.",
      "Urgencia endoscópica absoluta < 2 horas si está alojada en esófago."
    ]
  }
];
