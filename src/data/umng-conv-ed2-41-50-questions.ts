import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #2 (Simulacro 2) · Preguntas #41–#50.
 */
export const UMNG_CONV_ED2_41_50_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed2-41",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Usted se encuentra realizando su año rural. Una gestante de 37 semanas, sin controles prenatales, es traída por familiares porque refería dolor de cabeza severo y visión borrosa. En la sala de espera, la paciente súbitamente pierde el conocimiento y comienza a presentar una crisis convulsiva tónico-clónica generalizada activa. Su enfermera jefe le grita que no ha podido canalizarle una vía venosa periférica debido a los movimientos violentos de la paciente. ¿Cuál es el medicamento de PRIMERA LÍNEA y la vía de administración inmediata que usted debe ordenar para abortar esta crisis convulsiva específica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Diazepam 10 mg por vía intramuscular (IM) en el glúteo.",
        distractorProfile: "standard_seizure_treatment_but_wrong_here",
        incorrectFeedback: "Las benzodiacepinas son el gold standard para el estatus epiléptico neurológico, pero en la Eclampsia el Sulfato de Magnesio es superior. El Diazepam IM tiene absorción errática y deprime al feto severamente."
      },
      {
        id: "B",
        label: "B",
        text: "Fenitoína 15 mg/kg por vía intraósea o intramuscular.",
        distractorProfile: "second_line_wrong_route",
        incorrectFeedback: "La Fenitoína es de segunda línea y no tiene absorción intramuscular útil (causa necrosis estéril cristalizada en el músculo)."
      },
      {
        id: "C",
        label: "C",
        text: "Sulfato de Magnesio 10 gramos por vía intramuscular profunda (5 g en cada glúteo)."
      },
      {
        id: "D",
        label: "D",
        text: "Midazolam 5 mg por vía intranasal o bucal, seguido de remisión inmediata.",
        distractorProfile: "pediatric_seizure_protocol",
        incorrectFeedback: "El midazolam intranasal es útil en niños con estatus epiléptico, pero en la eclampsia el magnesio es irremplazable por su efecto estabilizador endotelial."
      }
    ],
    correctOptionId: "C",
    explanation: "La droga salvavidas innegociable de la eclampsia es el Sulfato de Magnesio (estudio MAGPIE). Si no tienes una vena canalizada y la paciente se sacude violentamente, las guías de la OMS para Código Rojo en primer nivel dictan el esquema IM de rescate: Inyectar 10 gramos de Sulfato de Magnesio IM profundo, divididos en 5 g en cada glúteo (usualmente con lidocaína por el dolor). Esto detiene la convulsión, previene recurrencia y te da tiempo para canalizar la vena con calma y prepararla para la cesárea.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la convulsión de la eclampsia no es eléctrica pura, es por vasoespasmo y edema cerebral (encefalopatía hipertensiva). Si le das Diazepam, la vas a dormir a ella y al bebé, pero sus vasos cerebrales seguirán con isquemia. El Magnesio relaja los vasos cerebrales y bloquea los receptores NMDA. En un rural sin venas, clávale las dos jeringas gigantes de magnesio en las nalgas. Le dolerá muchísimo cuando despierte, pero despertará viva y con su cerebro intacto.",
    keyPoints: [
      "Convulsión en Gestante >20 semanas = ECLAMPSIA.",
      "Tratamiento Absoluto: Sulfato de Magnesio.",
      "Si NO hay acceso IV: Esquema IM (10 gramos IM profundo, 5g/glúteo)."
    ]
  },
  {
    id: "umng-conv-ed2-42",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "NEONATOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un recién nacido a término (39 semanas), hijo de una madre que cursó con polihidramnios severo durante el embarazo, es evaluado en la sala de adaptación. A los pocos minutos de nacer, el neonato presenta salivación excesiva, expulsando secreciones espumosas por la boca y la nariz constantemente. Al intentar la primera toma al seno materno, el bebé presenta un episodio agudo de tos, cianosis y ahogamiento. Usted intenta el paso de una sonda orogástrica para descartar patología obstructiva, pero la sonda se detiene bruscamente a los 10 cm de la arcada dentaria. Una radiografía toracoabdominal muestra la sonda enrollada en la porción superior del tórax y se observa abundante presencia de aire en la cámara gástrica y las asas intestinales. ¿Cuál es la variante anatómica exacta de esta patología congénita?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Atresia esofágica aislada sin fístula traqueoesofágica (Tipo A).",
        distractorProfile: "similar_presentation_wrong_type",
        incorrectFeedback: "En la atresia aislada, el esófago inferior también es ciego. Al no haber fístula con la vía aérea, el aire nunca llega al estómago. La radiografía mostraría un abdomen completamente BLANCO (sin gas)."
      },
      {
        id: "B",
        label: "B",
        text: "Atresia esofágica con fístula traqueoesofágica distal (Tipo C)."
      },
      {
        id: "C",
        label: "C",
        text: "Fístula traqueoesofágica aislada en 'H', sin atresia esofágica (Tipo E).",
        distractorProfile: "wrong_type_no_atresia",
        incorrectFeedback: "En la fístula tipo H, NO hay atresia. La sonda orogástrica pasaría perfectamente hasta el estómago."
      },
      {
        id: "D",
        label: "D",
        text: "Atresia duodenal con páncreas anular.",
        distractorProfile: "different_obstruction",
        incorrectFeedback: "En atresia duodenal, la sonda pasa al estómago y se ve el 'Signo de la Doble Burbuja', no una sonda enrollada en el cuello."
      }
    ],
    correctOptionId: "B",
    explanation: "Esta es la variante más común (85% de los casos, Tipo C). El esófago superior termina en un saco ciego (donde se enrolló tu sonda y se acumula la saliva espumosa). El esófago inferior nace directamente de la tráquea o bronquio (fístula distal) y baja al estómago. Cada vez que el niño respira, el aire pasa de los pulmones al estómago a través de la fístula, llenando la barriga de gas, como se ve en la radiografía. Es quirúrgica de emergencia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si este niño traga leche, choca con la pared ciega de la garganta y se devuelve a los pulmones ahogándolo. Pero el gran peligro es la fístula distal: el jugo gástrico y los ácidos pueden subir por ese túnel equivocado hacia los pulmones, quemándolos químicamente. Pon al niño semi-sentado (a 45 grados) para que la gravedad deje el ácido gástrico abajo, y pon una sonda succionando la garganta para aspirarle la baba.",
    keyPoints: [
      "Polihidramnios + Babeo espumoso + Ahogo + Sonda que no pasa = Atresia Esofágica.",
      "Sonda enrollada + AIRE en el estómago = Atresia con Fístula Distal (Tipo C, la más común).",
      "Sonda enrollada + SIN aire en estómago = Atresia Pura (Tipo A)."
    ]
  },
  {
    id: "umng-conv-ed2-43",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "NEUROLOGÍA Y ORTOPEDIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 28 años es apuñalado por la espalda durante una riña. El cuchillo penetra a nivel de la vértebra torácica T8 en el lado derecho de la línea media de la columna. El paciente ingresa estable hemodinámicamente. Al realizar la exploración neurológica minuciosa de las extremidades inferiores, usted documenta los siguientes hallazgos: en la pierna DERECHA, el paciente tiene parálisis espástica (fuerza 0/5) y no es capaz de sentir la vibración de un diapasón ni reconocer en qué posición está su dedo (pérdida de la propiocepción). En la pierna IZQUIERDA, el paciente tiene fuerza normal (5/5), pero es totalmente incapaz de sentir el pinchazo de una aguja o un tubo de ensayo con agua caliente (pérdida de sensibilidad termoalgésica). ¿A qué síndrome medular incompleto corresponde esta presentación clínica cruzada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome Medular Central.",
        distractorProfile: "wrong_syndrome",
        incorrectFeedback: "Afecta desproporcionadamente brazos más que piernas, típico de ancianos con latigazo cervical."
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de la Arteria Espinal Anterior.",
        distractorProfile: "similar_but_symmetric",
        incorrectFeedback: "Paraliza ambas piernas (paraplejía bilateral) y quita el dolor bilateral, pero CONSERVA la propiocepción y vibración intactas."
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome de Brown-Séquard."
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome Medular Posterior.",
        distractorProfile: "pure_sensory",
        incorrectFeedback: "Da pérdida propioceptiva pura bilateral con marcha atáxica (Tabes dorsal/déficit B12), sin parálisis motora."
      }
    ],
    correctOptionId: "C",
    explanation: "El cuchillo cortó la mitad derecha de la médula espinal (hemisección derecha). 1) Cortó la vía motora piramidal derecha (causando Parálisis IPSILATERAL en la pierna derecha). 2) Cortó las columnas dorsales derechas (pérdida de propiocepción IPSILATERAL). 3) Cortó el haz espinotalámico derecho. Este haz transporta el dolor y temperatura de la pierna IZQUIERDA, porque dichas fibras cruzan al lado opuesto apenas entran a la médula abajo. Al cortarlo a la derecha, causa pérdida termoalgésica CONTRALATERAL. Este patrón cruzado patognomónico es el Brown-Séquard.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate la médula como una autopista. Los cables del movimiento y vibración viajan rectos hacia abajo por el mismo carril. Por eso la pierna derecha está muerta motrizmente y sin propiocepción. Pero los cables del dolor y la temperatura apenas entran por la pierna izquierda, cruzan el peaje hacia el carril derecho para subir al cerebro. El cuchillazo a la derecha cortó los cables de dolor que venían desde la izquierda. Es pura ingeniería eléctrica. Motor y vibración se dañan del MISMO lado de la herida; dolor y temperatura se dañan del lado OPUESTO.",
    keyPoints: [
      "Síndrome de Brown-Séquard (Hemisección medular).",
      "Lado ipsilateral (herida): Parálisis motora + Pérdida de propiocepción/vibración.",
      "Lado contralateral (sano): Pérdida de termoalgesia (dolor y temperatura)."
    ]
  },
  {
    id: "umng-conv-ed2-44",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "MEDICINA TROPICAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un trabajador cacaotero de 45 años es traído a urgencias desde la selva chocoana tras ser mordido en la pierna derecha por una serpiente enorme ('con púas como un erizo') hace 6 horas. Al examen físico, el paciente impresiona gravemente enfermo. Presenta un edema masivo en la extremidad derecha con flictenas hemorrágicas severas y sangrado por las encías (gingivorragia). Sin embargo, lo que domina el cuadro clínico y lo tiene al borde de la muerte es una hipotensión profunda (PA 60/40 mmHg), bradicardia extrema de 40 lpm, sudoración fría profusa, dolor abdominal tipo cólico insoportable y evacuaciones diarreicas continuas. Los tiempos de coagulación son infinitos. ¿Qué serpiente es la causante MÁS PROBABLE de este cuadro y cuál es el antiveneno indicado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Crotalus durissus (Cascabel) / Suero anticrotálico para contrarrestar la rhabdomiolisis.",
        distractorProfile: "wrong_snake_toxin",
        incorrectFeedback: "La Cascabel da fascies miasténica, ceguera y rhabdomiolisis (mioglobinuria), pero no destruye la pierna con edema masivo ni da este síndrome vagal diarreico."
      },
      {
        id: "B",
        label: "B",
        text: "Micrurus sp. (Coral) / Suero anticoral polivalente para la neurotoxicidad.",
        distractorProfile: "wrong_snake_toxin",
        incorrectFeedback: "La coral es neurotóxica pura (asfixia flácida) sin edema ni sangrado local."
      },
      {
        id: "C",
        label: "C",
        text: "Lachesis muta (Verrugosa / Surucucú) / Suero antilachésico o polivalente que la incluya, debido al síndrome de excitación vagal masivo."
      },
      {
        id: "D",
        label: "D",
        text: "Bothrops atrox (Mapaná) / Suero antibothrópico monovalente, causante exclusivo del sangrado y cólico.",
        distractorProfile: "similar_but_lacks_vagal",
        incorrectFeedback: "El Bothrops da toda la destrucción local y la coagulopatía, pero carece de la enzima que causa la descarga vagal severa parasimpaticomimética (bradicardia/diarrea)."
      }
    ],
    correctOptionId: "C",
    explanation: "La Lachesis muta (Verrugosa o Mapaná de río) es la víbora venenosa más grande de América. Su veneno comparte las toxinas necróticas y coagulantes del Bothrops (pierna destruida y sangrante). PERO la Lachesis tiene una enzima exclusiva que desata un Síndrome Vagal o Autonómico masivo. El paciente se choca, la frecuencia cardiaca se desploma, suda a mares y tiene diarrea profusa y cólicos. Este sello clínico separa a la Lachesis de la Mapaná común. Requiere Suero Antiofídico polivalente antilachésico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., una mordedura de Verrugosa es un Bothrops 'con esteroides'. La toxina le pudre la pierna y le consume los factores de coagulación en minutos, pero además le hace un 'hackeo' al nervio vago. El corazón se apaga, las tripas se le sueltan en diarrea y la presión colapsa. Si a este señor no le cuelgas 10 frascos de suero polivalente por la vena inmediatamente y no le pones atropina para el choque vagal, se muere en urgencias antes de que le laves la herida. Vómito, diarrea y bradicardia = Lachesis.",
    keyPoints: [
      "Mionecrosis + Sangrado (Coagulopatía) = Bothrops o Lachesis.",
      "Diferenciador clave: Bradicardia + Hipotensión + Diarrea/Sudoración (Descarga Vagal) = Lachesis (Verrugosa).",
      "Antiveneno: Polivalente con cobertura Antilachésica."
    ]
  },
  {
    id: "umng-conv-ed2-45",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "MEDICINA LABORAL Y PEDIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un niño de 4 años, habitante de una casa colonial en proceso de restauración y con pintura desgastada, es traído por su madre por cursar desde hace semanas con dolor abdominal tipo cólico persistente, estreñimiento, fatiga marcada e irritabilidad inusual. Al examen físico, llama la atención una línea oscura azul-grisácea a lo largo del margen de las encías. La evaluación neurológica evidencia dificultad del niño para extender la muñeca derecha (ligera 'mano caída') o marcha en estepaje. El hemograma reporta una anemia microcítica hipocrómica severa. En el frotis de sangre periférica, el patólogo reporta la presencia de 'punteado basófilo' en el interior de los glóbulos rojos. Teniendo en cuenta la exposición tóxica crónica que sufre este paciente, ¿cuál es el antídoto quelante de elección para su manejo farmacológico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "N-Acetilcisteína.",
        distractorProfile: "wrong_antidote",
        incorrectFeedback: "Repone glutatión en toxicidad por Acetaminofén, no quela metales."
      },
      {
        id: "B",
        label: "B",
        text: "Azul de Prusia.",
        distractorProfile: "wrong_antidote",
        incorrectFeedback: "Antídoto específico para radiación por Cesio o intoxicación por Talio."
      },
      {
        id: "C",
        label: "C",
        text: "Dimercaprol (BAL), Succímero o EDTA cálcico disódico."
      },
      {
        id: "D",
        label: "D",
        text: "Deferoxamina intravenosa.",
        distractorProfile: "wrong_metal_antidote",
        incorrectFeedback: "La Deferoxamina es el quelante específico y exclusivo para la intoxicación por Hierro, no para plomo."
      }
    ],
    correctOptionId: "C",
    explanation: "El diagnóstico es Plumbismo (Intoxicación por Plomo). El plomo inhibe enzimas de la síntesis del hemo, causando anemia microcítica con acumulación de ARN residual (Punteado basófilo en glóbulos rojos). El metal se deposita en nervios periféricos (mano caída por parálisis del nervio radial) y encías (Línea de Burton azul-grisácea). El cólico abdominal saturnino es clásico. El tratamiento absoluto son quelantes: Succímero oral para casos leves/moderados, o Dimercaprol (BAL) + EDTA IV para encefalopatía o casos severos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el plomo vuelve brutos a los niños y paraliza sus nervios (mano caída). El cuerpo lo confunde con Calcio y lo deposita en huesos y cerebro. La sangre intenta fabricar hemoglobina, pero el plomo daña la fábrica, y los glóbulos rojos salen llenos de 'basura' de ARN, esos son los puntos azules (punteado basófilo) del frotis. Si ves a un niño pálido con cólico crónico y punteado basófilo, no le des sulfato ferroso creyendo que es desnutrición. Inicia el Succímero para que el químico abrace al plomo y el niño lo orine.",
    keyPoints: [
      "Intoxicación por Plomo (Pintura vieja) = Cólico abdominal + Línea de Burton (encías) + Neuropatía motora (Mano caída).",
      "Hallazgo de Laboratorio: Anemia microcítica con PUNTEADO BASÓFILO.",
      "Antídotos: Succímero (DMSA), EDTA cálcico disódico, Dimercaprol (BAL)."
    ]
  },
  {
    id: "umng-conv-ed2-46",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 45 años, con antecedente de consumo abusivo de alcohol, ingresó a la UCI hace dos semanas con un cuadro de Pancreatitis Aguda Severa (Balthazar E). Durante los últimos 14 días se mantuvo estable con soporte nutricional y hídrico. Sin embargo, en las últimas 48 horas presenta deterioro clínico: fiebre de 39.5°C, leucocitosis de 25.000 y sepsis progresiva. Se solicita una Tomografía Computarizada (TAC) de abdomen contrastada que revela un área de necrosis que compromete el 60% del parénquima pancreático y, de suma importancia, se observa la presencia de múltiples burbujas de gas en el interior del tejido necrótico pancreático y peri-pancreático. Dada la evolución y el hallazgo imagenológico actual, ¿cuál es la conducta médico-quirúrgica avalada por las guías internacionales (Atlanta/Step-up approach)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Mantener manejo expectante con nutrición parenteral exclusiva, ya que la necrosis pancreática NUNCA se opera.",
        distractorProfile: "dangerous_inaction",
        incorrectFeedback: "La necrosis estéril no se opera. PERO si hay gas (bacterias anaerobias), es necrosis infectada y requiere drenaje mandatorio o morirá de sepsis."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar antibióticos de amplio espectro (ej. Carbapenémicos) y programar terapia escalonada (drenaje percutáneo o endoscópico seguido de necrosectomía si no mejora)."
      },
      {
        id: "C",
        label: "C",
        text: "Llevar a quirófano inmediatamente para Pancreatectomía total abierta y lavado de la cavidad.",
        distractorProfile: "obsolete_aggressive_surgery",
        incorrectFeedback: "La pancreatectomía total abierta en el paciente séptico agudo tiene mortalidad prohibitiva (>50%). Ya no se recomienda."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar Colangiopancreatografía Retrógrada Endoscópica (CPRE) urgente para lavar el conducto de Wirsung.",
        distractorProfile: "wrong_indication",
        incorrectFeedback: "La CPRE está indicada en pancreatitis AGUDA BILIAR temprana, no en necrosis infectada por pancreatitis alcohólica tardía."
      }
    ],
    correctOptionId: "B",
    explanation: "La presencia de gas en el tejido necrótico pancreático en un TAC a las 2-3 semanas es PATOGNOMÓNICA de Necrosis Pancreática Infectada. Las guías exigen iniciar antibióticos que penetren páncreas (Carbapenémicos) y usar el abordaje 'Step-up' (Escalonado). Primero: drenaje percutáneo o endoscópico. Si no mejora: Necrosectomía mínimamente invasiva (VARD) o abierta como último recurso.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el páncreas necrótico es una esponja de carne muerta en la barriga. Las primeras 2 semanas es estéril; si la operas y abres, el paciente muere. Pero si en la tercera semana el paciente hace fiebre y ves burbujitas de gas en el TAC, significa que las bacterias del colon llegaron a podrir la esponja. Ese es el pase de abordaje. Inunda sus venas de Meropenem y llama al radiólogo intervencionista para que le clave un tubo y saque el pus. El bisturí de abdomen abierto de entrada quedó en los años 90.",
    keyPoints: [
      "Pancreatitis severa > 2 semanas + Sepsis + GAS en necrosis (TAC) = Necrosis Infectada.",
      "Manejo de elección: Antibióticos (Carbapenémicos) + Abordaje Step-up.",
      "Step-up: Drenaje Percutáneo/Endoscópico inicial, y solo necrosectomía si falla el tubo."
    ]
  },
  {
    id: "umng-conv-ed2-47",
    university: "UMNG",
    examArea: "ONCOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una mujer de 55 años, con antecedente de cáncer de mama avanzado en tratamiento paliativo, es llevada a urgencias por referir disnea severa progresiva desde hace una semana, que hoy empeora en reposo. Al examen físico, usted la encuentra pálida, sudorosa y confusa. PA 80/50 mmHg, FC 125 lpm, FR 28 rpm. Destaca una franca ingurgitación yugular bilateral, pero a la auscultación pulmonar los campos están limpios (no hay estertores ni sibilancias). Usted le solicita un Electrocardiograma (ECG) de 12 derivaciones, donde llama profundamente la atención que la amplitud (altura) de los complejos QRS cambia continuamente latido tras latido, siendo un QRS muy alto, seguido de uno muy pequeño, y así sucesivamente en un patrón repetitivo. ¿Cuál es el nombre de este signo electrocardiográfico y a qué patología obedece en este escenario clínico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Patrón de Torsades de Pointes / Intoxicación por doxorrubicina o antraciclinas.",
        distractorProfile: "wrong_ecg_pattern",
        incorrectFeedback: "Torsades es un QRS ancho que se tuerce. Las antraciclinas causan miocardiopatía dilatada, no alternancia eléctrica."
      },
      {
        id: "B",
        label: "B",
        text: "Alternancia Eléctrica / Taponamiento cardíaco maligno."
      },
      {
        id: "C",
        label: "C",
        text: "Variabilidad de la onda T (T wave alternans) / Isquemia miocárdica silenciosa.",
        distractorProfile: "subtle_finding",
        incorrectFeedback: "No explica el cambio masivo de voltaje de todo el QRS ni el choque obstructivo."
      },
      {
        id: "D",
        label: "D",
        text: "Complejos prematuros ventriculares acoplados en bigeminismo / Miocarditis tumoral.",
        distractorProfile: "arrhythmia_not_effusion",
        incorrectFeedback: "El bigeminismo alterna con extrasístoles anchas amorfas, no es un QRS estrecho que solo cambia de altura."
      }
    ],
    correctOptionId: "B",
    explanation: "El cáncer de mama y pulmón frecuentemente hace metástasis al pericardio produciendo un derrame masivo. El corazón se ahoga (Taponamiento Cardíaco), causando choque obstructivo con yugulares ingurgitadas pero pulmones limpios. El hallazgo patognomónico en ECG es la Alternancia Eléctrica: el corazón se balancea libremente dentro del líquido; cuando se acerca a la pared torácica el electrodo capta un QRS alto, y cuando se aleja hacia atrás capta un QRS pequeño. Requiere pericardiocentesis urgente.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate una manzana flotando en un balde de agua. Esa manzana es el corazón de la paciente. El cáncer llenó el pericardio de líquido. El corazón literalmente 'baila y se mece' con cada contracción adentro de su saco de agua. Ese balanceo acerca y aleja el corazón a los electrodos del pecho, dibujando picos altos y bajos (grande, chiquito, grande) en el electro. Es una imagen hermosa pero mortal; saca esa aguja y púnzale el pericardio subxifoideo o morirá en minutos.",
    keyPoints: [
      "Cáncer avanzado + Choque + Yugulares Ingurgitadas (Pulmón limpio) = Taponamiento Cardíaco Maligno.",
      "Signo clásico en ECG: Alternancia Eléctrica (QRS de altura oscilante latido a latido).",
      "Signo vital clásico: Pulso Paradójico."
    ]
  },
  {
    id: "umng-conv-ed2-48",
    university: "UMNG",
    examArea: "NEUROLOGÍA",
    topic: "NEUROCIRUGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una mujer de 55 años, previamente sana, sufre un episodio de ruptura de aneurisma de la arteria comunicante anterior, desarrollando una Hemorragia Subaracnoidea (HSA) grado III de Fisher. Es llevada a quirófano y el aneurisma es exitosamente embolizado (coiling) sin complicaciones. La paciente cursa una evolución neurológica favorable en la UCI. Sin embargo, en la mañana del séptimo (7°) día post-ruptura, la paciente presenta un deterioro neurológico súbito: de estar conversando, pasa a la afasia de expresión (no puede hablar) y desarrolla una hemiparesia derecha franca. Un TAC de cráneo simple urgente no evidencia ningún re-sangrado, aumento del tamaño ventricular ni nuevas lesiones isquémicas consolidadas. ¿Cuál es el diagnóstico más probable de esta complicación retardada y cuál es la terapia preventiva/curativa específica de la patología subyacente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hidrocefalia comunicante aguda / Derivación ventrículo-peritoneal.",
        distractorProfile: "wrong_timing_and_symptoms",
        incorrectFeedback: "Ocurre típicamente en los primeros 3 días y causa deterioro global por hipertensión endocraneana, no una focalización cortical pura (hemiparesia). Además, el TAC la habría mostrado."
      },
      {
        id: "B",
        label: "B",
        text: "Resangrado aneurismático microscópico / Nueva intervención angiográfica.",
        distractorProfile: "wrong_timing",
        incorrectFeedback: "El pico de resangrado es en las primeras 24-48h. El aneurisma está asegurado y el TAC no muestra nueva sangre."
      },
      {
        id: "C",
        label: "C",
        text: "Vasoespasmo cerebral sintomático (Isquemia cerebral tardía) / Nimodipino y terapia de hipertensión inducida."
      },
      {
        id: "D",
        label: "D",
        text: "Convulsiones parciales complejas no motoras / Fenitoína o Levetiracetam IV.",
        distractorProfile: "possible_but_not_primary",
        incorrectFeedback: "El protocolo exige descartar y tratar el vasoespasmo en el día 7 antes de asumir epilepsia silente con déficit de Todd."
      }
    ],
    correctOptionId: "C",
    explanation: "La sangre (productos de degradación eritrocitaria) irrita las arterias del polígono de Willis causando un vasoespasmo severo que tiene su pico patognomónico entre los días 4 a 14 post-HSA. Al cerrarse la arteria (ej. cerebral media), la paciente sufre isquemia focal (afasia/hemiparesia). Para prevenirlo, todos reciben Nimodipino oral por 21 días. Si ya se instauró el déficit, la terapia médica es inducir Hipertensión (con vasopresores) para forzar la sangre por el tubo estrecho.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., sobrevivir a un aneurisma roto el primer día no garantiza nada. La sangre que quedó nadando en la base del cerebro se vuelve tóxica a la semana. El hierro irrita tanto a las arterias que estas sufren un calambre y se estrangulan a sí mismas. Si no subes la presión arterial con Noradrenalina para empujar la sangre a la fuerza a través de esa cañería apretada, el territorio isquémico morirá por completo, dejándola hemipléjica para siempre. ¡Ojo siempre en los días 4 al 14 de la UCI neurológica!",
    keyPoints: [
      "Cronología de complicaciones post-HSA:",
      "1. Resangrado (Primeras 24-48 horas).",
      "2. Vasoespasmo e isquemia tardía (Días 4 al 14). PREVENCIÓN: Nimodipino.",
      "3. Hidrocefalia (Aguda o tardía)."
    ]
  },
  {
    id: "umng-conv-ed2-49",
    university: "UMNG",
    examArea: "PSIQUIATRÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un joven de 24 años con diagnóstico de Trastorno Depresivo Mayor ha estado en tratamiento con Sertralina (un ISRS) 100 mg diarios durante 6 meses con buena adherencia. El fin de semana sufrió una lesión deportiva, por lo que un médico general en urgencias le prescribió Tramadol 50 mg cada 8 horas para el dolor, el cual ha estado tomando desde hace 48 horas. Hoy el paciente es traído por sus padres por presentar intensa agitación, sudoración profusa y fiebre (39.0°C). Al examen neurológico, usted documenta la presencia de clonus inducible y espontáneo masivo en ambas extremidades inferiores (temblor rítmico oscilante), hiperreflexia generalizada (++++/++++) y temblor muscular. El paciente está rígido, pero no en 'tubo de plomo'. ¿Cuál es el diagnóstico sindrómico exacto y el antídoto farmacológico específico de rescate para casos refractarios a las benzodiacepinas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome Neuroléptico Maligno / Dantroleno intravenoso.",
        distractorProfile: "classic_confusion",
        incorrectFeedback: "El SNM (por bloqueadores de dopamina) da fiebre y alteración mental, PERO cursa con RIGIDEZ en Tubo de Plomo e HIPORREFLEXIA, jamás con Clonus y temblor."
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome Serotoninérgico / Ciproheptadina oral o por sonda nasogástrica."
      },
      {
        id: "C",
        label: "C",
        text: "Tormenta Tiroidea oculta inducida por estrés / Propranolol y PTU.",
        distractorProfile: "endocrine_mimic",
        incorrectFeedback: "Da taquicardia y fiebre, pero el clonus masivo y el antecedente farmacológico descartan esto."
      },
      {
        id: "D",
        label: "D",
        text: "Abstinencia de Benzodiacepinas cruzada con opiáceos / Flumazenil IV.",
        distractorProfile: "wrong_antidote",
        incorrectFeedback: "Dar Flumazenil aquí disminuiría el umbral convulsivo, provocando status epilepticus letal."
      }
    ],
    correctOptionId: "B",
    explanation: "El Síndrome Serotoninérgico ocurre al combinar pro-serotoninérgicos (ISRS + Tramadol/Linezolid/IMAO). Clínicamente da fiebre, agitación y un pilar neuromuscular excitatorio: HIPERREFLEXIA exagerada y CLONUS espontáneo. El antídoto específico es la Ciproheptadina (bloqueador 5-HT2A).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el Tramadol engaña: es un opioide que además inhibe la recaptación de serotonina. Mezclarlo con Sertralina es una bomba atómica cerebral. Tienes que buscar clonus patelar a todo paciente agitado con fiebre en urgencias. Si el pie zapatea como ametralladora (clonus), su cerebro está reventado de serotonina. El Neuroléptico Maligno hace lo contrario: los pone tiesos como madera (tubo de plomo) y sin reflejos. Dales Lorazepam a montones y busca las píldoras de Ciproheptadina antes de que se calcine por dentro.",
    keyPoints: [
      "Síndrome Serotoninérgico: Fiebre + Agitación + HIPERREFLEXIA/CLONUS. Antídoto: Ciproheptadina.",
      "Síndrome Neuroléptico Maligno: Fiebre + Mutismo + RIGIDEZ/ARREFLEXIA (Tubo de plomo). Antídoto: Dantroleno.",
      "Tramadol + ISRS = Riesgo letal de S. Serotoninérgico."
    ]
  },
  {
    id: "umng-conv-ed2-50",
    university: "UMNG",
    examArea: "SALUD PÚBLICA Y ÉTICA",
    topic: "INFECTOLOGÍA LABORAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Usted es el residente de cirugía de primer año y se encuentra en plena cirugía de urgencia (laparotomía) operando a un paciente de 40 años que es portador conocido del Virus de la Inmunodeficiencia Humana (VIH) con mala adherencia al tratamiento antirretroviral (carga viral alta desconocida). En un momento de descuido durante el cierre de la pared abdominal, usted sufre un pinchazo profundo accidental en el dedo índice derecho con la aguja de sutura previamente impregnada con la sangre del paciente. Hay sangrado evidente en su guante. Después de lavar la herida con abundante agua y jabón y notificar a salud ocupacional, ¿qué conducta de Profilaxis Post-Exposición (PEP) ocupacional sistémica DEBE INICIARSE obligatoriamente según las guías mundiales y del Ministerio de Salud?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar prueba rápida de VIH en el médico y, si sale negativa, observar durante 6 meses repitiendo la prueba, sin iniciar drogas tóxicas profilácticas.",
        distractorProfile: "passive_observation_dangerous",
        incorrectFeedback: "Esperar síntomas o positividad significa que te infectaste permanentemente. La profilaxis debe iniciar inmediatamente para matar el virus antes de que llegue a los ganglios."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar biterapia antirretroviral (Zidovudina/Lamivudina) durante 7 días y continuar solo si hay síntomas de primoinfección.",
        distractorProfile: "obsolete_inadequate_protocol",
        incorrectFeedback: "La PEP moderna no usa biterapia por resistencia. Siempre es triterapia y dura 28 días, no 7."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar Terapia Antirretroviral Triple (ej. Tenofovir + Emtricitabine + Raltegravir/Dolutegravir) lo más pronto posible (idealmente en < 2 horas, máximo en < 72h) y mantenerla durante 28 días continuos."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Inmunoglobulina Humana hiperinmune anti-VIH intramuscular dosis única y realizar lavados antisépticos con cloro u óxido de etileno en la herida.",
        distractorProfile: "fake_treatment",
        incorrectFeedback: "No existe inmunoglobulina 'anti-VIH'. El cloro empeora la isquemia tisular y favorece la entrada del virus."
      }
    ],
    correctOptionId: "C",
    explanation: "El riesgo de transmisión percutánea es 0.3%. La regla de oro es iniciar PEP con un esquema de 3 antirretrovirales (Terapia Triple: típicamente Tenofovir + Emtricitabina + inhibidor de integrasa como Dolutegravir) DENTRO DE LAS PRIMERAS 2 HORAS y jamás después de 72 horas. La pastilla salvavidas debe ser tomada por 28 días completos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el miedo al pincharse el guante y ver la sangre te paraliza. Lávate la mano en el chorro de agua con jabón normal, NO te exprimas el dedo (haces presión negativa y succionas el virus), y corre a urgencias laborales. Tienes un 'reloj dorado' de 2 horas para tomarte esa primera pastilla. Te dará náuseas, pesadillas y dolor de cabeza todo el mes, pero son los 28 días de pastillas que garantizan que el resto de tu vida sigas siendo VIH negativo.",
    keyPoints: [
      "Accidente percutáneo de alto riesgo VIH+.",
      "Esquema PEP: Triterapia (ej. Tenofovir/Emtricitabina/Dolutegravir).",
      "Tiempo de inicio: Ideal < 2 horas, máximo 72 horas.",
      "Duración: 28 días continuos."
    ]
  }
];
