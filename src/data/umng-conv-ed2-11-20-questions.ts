import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #2 (Simulacro 2) · Preguntas #11–#20.
 */
export const UMNG_CONV_ED2_11_20_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed2-11",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "NEFROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un niño de 4 años es llevado a urgencias por presentar palidez marcada, letargia y disminución en el volumen de orina (oliguria) desde hace 24 horas. La madre refiere que hace 5 días el niño cursó con un episodio de diarrea acuosa que rápidamente se tornó sanguinolenta (disentería) acompañada de cólicos abdominales, para la cual un farmaceuta le recetó Loperamida y Amoxicilina. Al examen físico, el niño está hipertenso (PA 115/75 mmHg), con edema bipalpebral y múltiples petequias en tronco y extremidades. Los laboratorios de urgencia revelan: Hemoglobina de 7.2 g/dL, Plaquetas en 35.000, Creatinina de 2.8 mg/dL y un frotis de sangre periférica que muestra esquistocitos (glóbulos rojos fragmentados). ¿Cuál es el diagnóstico más preciso y qué intervención farmacológica previa precipitó o agravó este cuadro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Púrpura Trombocitopénica Inmune (PTI) / El uso de Amoxicilina que desencadenó la respuesta autoinmune cruzada.",
        distractorProfile: "similar_symptoms",
        incorrectFeedback: "La PTI cursa con plaquetas bajas y petequias, pero NO produce falla renal aguda masiva ni anemia hemolítica por destrucción mecánica (esquistocitos)."
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome Urémico Hemolítico (SUH) / El uso de antibióticos y antidiarreicos que favorecieron la retención y liberación masiva de toxina Shiga."
      },
      {
        id: "C",
        label: "C",
        text: "Coagulación Intravascular Diseminada (CID) / La deshidratación severa por la diarrea inicial.",
        distractorProfile: "similar_lab_profile",
        incorrectFeedback: "La CID produce un perfil similar de esquistocitos y plaquetas bajas, pero característicamente prolonga severamente los tiempos de coagulación (PT/PTT) y agota el fibrinógeno. En el SUH puro, los tiempos de coagulación son NORMALES."
      },
      {
        id: "D",
        label: "D",
        text: "Glomerulonefritis Postestreptocócica / El tratamiento antibiótico tardío de una faringitis oculta.",
        distractorProfile: "different_renal_pathology",
        incorrectFeedback: "Da falla renal y hematuria post-infección, pero no causa trombocitopenia masiva ni anemia hemolítica microangiopática."
      }
    ],
    correctOptionId: "B",
    explanation: "El SUH es causado por la Toxina Shiga (Verotoxina), la cual destruye el endotelio de los capilares renales formando microtrombos. Los glóbulos rojos se \"despedazan\" al pasar por estos capilares obstruidos (esquistocitos). El error garrafal (frecuentemente iatrogénico) es dar antibióticos (como la Amoxicilina) o antimotílicos (Loperamida) a un niño con diarrea sanguinolenta. El antibiótico rompe la bacteria, liberando de golpe toda la toxina Shiga almacenada hacia la sangre. El antidiarreico paraliza el intestino, impidiendo que el niño parasite y bote la toxina con las heces, aumentando su absorción. Ambos factores disparan la probabilidad de sufrir SUH.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si le das Loperamida a un niño con disentería, lo estás taponando. El intestino se vuelve una piscina de toxina Shiga estancada. La toxina viaja a los riñones, pela el endotelio y hace un enjambre de coágulos en los glomérulos. El riñón se asfixia, las plaquetas se gastan haciendo los coágulos, y los glóbulos rojos se cortan por la mitad como si pasaran por una ralladora de queso (esquistocitos) al intentar cruzar. El SUH se maneja con diálisis y transfusiones cuidadosas.",
    keyPoints: [
      "Tríada del SUH: Anemia hemolítica (esquistocitos) + Trombocitopenia + Falla Renal Aguda (Post-diarrea con sangre).",
      "Conducta en diarrea con sangre en niños: Soporte hídrico. ESTRICTAMENTE CONTRAINDICADOS los antibióticos y la Loperamida (aumentan riesgo de SUH)."
    ]
  },
  {
    id: "umng-conv-ed2-12",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "ATLS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un joven de 22 años ingresa a urgencias tras recibir una herida por arma blanca en el quinto espacio intercostal izquierdo, línea paraesternal (área precordial). Al ingreso, el paciente está somnoliento, sudoroso y severamente disneico. Signos vitales: PA 75/40 mmHg, FC 135 lpm, SatO2 93%. A la inspección del cuello, se evidencia ingurgitación yugular bilateral marcada a 45 grados. A la auscultación, los campos pulmonares ventilan adecuadamente de forma simétrica, pero los ruidos cardíacos son casi inaudibles (velados). Usted realiza un FAST (Evaluación ecográfica focalizada en trauma) de urgencia. Teniendo en cuenta la sospecha clínica, ¿cuál será el hallazgo ecográfico y la intervención terapéutica que salvará la vida del paciente en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Neumotórax a tensión izquierdo / Toracostomía con tubo de tórax.",
        distractorProfile: "similar_presentation",
        incorrectFeedback: "El neumotórax a tensión produce hipotensión e ingurgitación yugular, pero cursa con ausencia de ruidos respiratorios en un hemitórax, hiperresonancia a la percusión y desviación de la tráquea. El caso especifica que los pulmones ventilan simétricamente."
      },
      {
        id: "B",
        label: "B",
        text: "Derrame pericárdico con colapso de cavidades derechas / Pericardiocentesis subxifoidea o ventana pericárdica inmediata."
      },
      {
        id: "C",
        label: "C",
        text: "Ruptura de válvula mitral / Reemplazo valvular de emergencia.",
        distractorProfile: "wrong_diagnosis",
        incorrectFeedback: "La ruptura valvular traumática daría un soplo masivo y edema pulmonar fulminante, no ruidos velados ni ingurgitación yugular como síntoma pivote."
      },
      {
        id: "D",
        label: "D",
        text: "Hemotórax masivo izquierdo / Toracotomía de reanimación en el servicio de urgencias.",
        distractorProfile: "different_pathophysiology",
        incorrectFeedback: "El hemotórax masivo vacía la sangre al pecho (da pulmón mate sin ruidos), y las venas yugulares estarían COLAPSADAS (planas) por la hipovolemia masiva, no ingurgitadas."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuchillo penetró el pericardio y lesionó el músculo cardíaco (generalmente ventrículo derecho por ser el más anterior). El pericardio es un saco inelástico. Con apenas 100-200 cc de sangre que se acumulen agudamente, la presión intrapericárdica supera la presión de llenado del corazón derecho, colapsando el ventrículo derecho en diástole (hallazgo clave en el eco FAST ventana subxifoidea). El corazón no se puede llenar (precarga cae a cero) y el paciente entra en choque obstructivo profundo. El tratamiento inmediato, mientras se prepara el quirófano para esternotomía, es drenar esa sangre: la punción pericárdica (Pericardiocentesis) guiada por eco o una ventana pericárdica subxifoidea quirúrgica rápida, liberan la presión del corazón al instante.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., un corazón dentro de un pericardio lleno de sangre es como tratar de inflar un globo dentro de un frasco de vidrio cerrado. Simplemente no se puede expandir para llenarse de sangre. Si no se llena, no bombea, y la sangre se estanca hacia atrás (por eso las yugulares del cuello parecen mangueras hinchadas a punto de reventar). Cuando haces el FAST y ves esa franja negra de sangre ahorcando al ventrículo, tienes que meterle una aguja larga por debajo del esternón apuntando hacia el hombro izquierdo. Con sacar 50 centímetros cúbicos de sangre, el corazón se \"libera\" y la presión arterial sube de golpe. ¡Salvavidas puro!",
    keyPoints: [
      "Tríada de Beck: 1. Hipotensión + 2. Ruidos cardíacos velados + 3. Ingurgitación yugular.",
      "Diagnóstico: Taponamiento Cardíaco (Choque obstructivo).",
      "Hallazgo ecográfico (FAST): Líquido pericárdico con colapso diastólico del Ventrículo Derecho.",
      "Manejo agudo: Pericardiocentesis o Ventana Pericárdica."
    ]
  },
  {
    id: "umng-conv-ed2-13",
    university: "UMNG",
    examArea: "OBSTETRICIA",
    topic: "URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Mujer de 38 años, multípara (G4P3), se encuentra en la sala de partos en plena fase del expulsivo. Minutos después de pujar vigorosamente y coincidiendo con la ruptura espontánea de las membranas, la paciente presenta súbitamente una agitación extrema, tos, cianosis peribucal y pérdida del estado de conciencia. En el monitor, la presión arterial cae a 60/40 mmHg y la SatO2 a 70%. Segundos después, inicia un sangrado masivo incontrolable por la vía vaginal y por los sitios de punción venosa en sus brazos, no formando coágulos. ¿Cuál es la sospecha diagnóstica MÁS PROBABLE que explica este colapso catastrófico materno?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ruptura uterina extensa con choque hipovolémico severo.",
        distractorProfile: "partial_symptoms",
        incorrectFeedback: "La ruptura uterina causa dolor desgarrador súbito, cese de contracciones, y choque hipovolémico, pero NO produce insuficiencia respiratoria severa (cianosis aguda) ni CID instantánea (sangrar por los catéteres intravenosos)."
      },
      {
        id: "B",
        label: "B",
        text: "Embolia de líquido amniótico complicado con Coagulación Intravascular Diseminada (CID)."
      },
      {
        id: "C",
        label: "C",
        text: "Tromboembolismo pulmonar masivo por estasis venosa.",
        distractorProfile: "different_complication",
        incorrectFeedback: "El TEP masivo explica la disnea súbita y el colapso (choque obstructivo), pero no explica en lo absoluto el desarrollo de una CID instantánea y sangrado masivo sin coágulos por las venas periféricas."
      },
      {
        id: "D",
        label: "D",
        text: "Abruptio placentae total oculto.",
        distractorProfile: "different_clinical_picture",
        incorrectFeedback: "El abruptio da dolor abdominal constante, útero leñoso, y aunque puede llevar a CID a la larga, su presentación no es un colapso respiratorio/anafiláctico fulminante en el expulsivo."
      }
    ],
    correctOptionId: "B",
    explanation: "La embolia de líquido amniótico ocurre cuando el líquido fetal, vérnix o meconio ingresa a la circulación materna a través de las venas uterinas rasgadas (común en contracciones fuertes o ruptura de membranas). El líquido no solo actúa como un émbolo físico, sino que desata una reacción inmunológica / anafilactoide masiva. Esto produce un vasoespasmo pulmonar instantáneo (falla ventricular derecha aguda, hipoxia severa, cianosis y choque), y lo más característico: las sustancias procoagulantes del líquido amniótico desatan una Coagulación Intravascular Diseminada (CID) fulminante casi de forma inmediata. La mortalidad ronda el 60-80%. El manejo es RCP avanzada, intubación y protocolo de transfusión masiva.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., no hay escena médica más espantosa que esta. Una mujer sana pujando, y en un segundo deja de respirar, se pone morada y, de repente, de cada hueco donde le metiste una aguja empieza a manar sangre líquida como si hubieras abierto una llave de agua. El líquido del bebé se le metió a la sangre y desató un infierno alérgico y procoagulante. Gastó todos sus factores de coagulación en 30 segundos haciendo coágulos en los pulmones, y ahora no tiene cómo frenar el sangrado. Activa el código azul, activa el código rojo de transfusión masiva y prepárate para la guerra en la sala de partos.",
    keyPoints: [
      "Momento del parto + Colapso cardiorrespiratorio Súbito + Sangrado incoagulable (CID por los catéteres) = Embolia de Líquido Amniótico.",
      "Tratamiento: Intubación Orotraqueal + Soporte vasopresor (RCP) + Transfusión de hemoderivados (Plasma, Crioprecipitados)."
    ]
  },
  {
    id: "umng-conv-ed2-14",
    university: "UMNG",
    examArea: "ENDOCRINOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 72 años, diabético tipo 2, es traído a urgencias a las 8:00 AM porque su hija lo encontró sudoroso, agresivo y luego en estado de coma. Su medicación de base incluye Glibenclamida 5 mg cada 12 horas. Al ingreso, usted realiza una glucometría capilar que reporta 35 mg/dL. Inmediatamente administra un bolo intravenoso de 25 gramos de Dextrosa al 50%. El paciente despierta, recupera la conciencia y conversa normalmente. Usted decide dejarlo en observación con infusión de Dextrosa al 5%. Dos horas más tarde, el paciente vuelve a presentar deterioro del sensorio, sudoración profusa y una nueva glucometría de 38 mg/dL. Tras aplicar un nuevo bolo de Dextrosa, ¿qué medicamento ESPECÍFICO debe iniciarse como antídoto para frenar las recaídas causadas por este hipoglucemiante oral?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Glucagón intramuscular o intravenoso en bolos a necesidad.",
        distractorProfile: "wrong_antidote",
        incorrectFeedback: "El Glucagón es útil en hipoglucemias donde el páncreas está intacto y hay reservas de glucógeno hepático. Pero en intoxicación por sulfonilureas, el glucagón también estimula sutilmente a la célula beta pancreática, pudiendo empeorar el problema."
      },
      {
        id: "B",
        label: "B",
        text: "Infusión endovenosa continua de Hidrocortisona.",
        distractorProfile: "ineffective_immediate_treatment",
        incorrectFeedback: "Los corticoides elevan la glucosa a largo plazo (neoglucogénesis), pero no tienen un efecto inmediato ni bloquean la raíz del problema (la secreción constante de insulina endógena)."
      },
      {
        id: "C",
        label: "C",
        text: "Octreotide (Análogo de Somatostatina) por vía subcutánea o intravenosa."
      },
      {
        id: "D",
        label: "D",
        text: "Aumentar la concentración de Dextrosa al 10% o 50% en infusión continua de forma indefinida.",
        distractorProfile: "worsens_condition",
        incorrectFeedback: "Aumentar y aumentar la Dextrosa (infusiones al 10%, 20%, 50%) sin bloquear el páncreas solo provocará la secreción de más y más insulina (\"echándole leña al fuego\")."
      }
    ],
    correctOptionId: "C",
    explanation: "La Glibenclamida (una sulfonilurea) obliga al páncreas a exprimir toda la insulina que tiene. Tiene una vida media larga y puede durar hasta 24-48 horas en el cuerpo del anciano. El problema de dar solo Dextrosa (azúcar IV) es que la glucosa intravenosa estimula aún más al páncreas para que libere todavía más insulina, creando un ciclo vicioso de rebote (sube el azúcar 30 minutos, y a la hora el páncreas tira más insulina y vuelve al coma). El verdadero antídoto de rescate es el Octreotide. La somatostatina (y su análogo octreotide) apaga e inhibe directamente a la célula beta del páncreas, \"cerrando el grifo\" de la insulina endógena de manera instantánea, permitiendo que la dextrosa IV haga su trabajo sin rebotes.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tratar la hipoglucemia por sulfonilureas solo con suero glucosado es como tratar de apagar un incendio tirándole gasolina. La pastilla le tiene puesto un \"candado abierto\" a las células del páncreas. Si tú le metes azúcar por la vena al paciente, el páncreas dice: \"¡Genial, más azúcar, voy a botar toda la insulina que me queda!\". El paciente despierta, tú te vas, y a las dos horas la enfermera te grita que el abuelo está convulsionando en coma. Tienes que usar el Octreotide para cerrarle la boca al páncreas y dejar de producir insulina; solo así el azúcar de la vena lo va a sacar del pozo.",
    keyPoints: [
      "Hipoglucemia recurrente/refractaria en paciente que toma SULFONILUREAS (Glibenclamida, Glimepirida): NO basta con bolos de Dextrosa (esto da \"rebote\").",
      "Antídoto de elección: Octreotide SC o IV (Bloquea la secreción de insulina pancreática)."
    ]
  },
  {
    id: "umng-conv-ed2-15",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 65 años, fumador crónico y diagnosticado con Osteoartritis, acude al servicio de urgencias por un dolor abdominal de inicio violento, \"en puñalada\", en el epigastrio. El dolor comenzó hace 2 horas de manera repentina y no ha cedido. Refiere consumo diario de Meloxicam e Ibuprofeno desde hace 2 meses para el dolor articular. Al examen físico, el paciente yace inmóvil en la camilla con respiración superficial. PA 130/80 mmHg, FC 110 lpm, T 37.8°C. A la inspección, el abdomen se observa plano, no distendido. A la palpación, hay resistencia muscular extrema y difusa (\"abdomen en tabla\") con dolor de rebote (Blumberg positivo) en todos los cuadrantes. A la percusión, se advierte pérdida de la matidez hepática normal (Signo de Jobert positivo). Usted solicita una Radiografía de tórax en bipedestación. ¿Qué imagen clásica esperaría encontrar para confirmar la indicación quirúrgica inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Niveles hidroaéreos múltiples en escalera y distensión central de asas.",
        distractorProfile: "different_disease",
        incorrectFeedback: "Es la imagen clásica de la Obstrucción Intestinal de intestino delgado (Íleo mecánico), la cual cursa con cólicos y vómitos, no con un abdomen en tabla agudo súbito (\"en puñalada\")."
      },
      {
        id: "B",
        label: "B",
        text: "Una banda radiolúcida (oscura) en forma de semiluna ubicada entre el hemidiafragma derecho y el hígado."
      },
      {
        id: "C",
        label: "C",
        text: "Un infiltrado alveolar basal derecho secundario a neumonía lobar que simula dolor abdominal.",
        distractorProfile: "mimic_condition",
        incorrectFeedback: "La neumonía basal derecha SÍ puede simular un dolor de \"abdomen agudo falso\" (pleuritis diafragmática), pero no daría el Signo de Jobert (timpanismo sobre el hígado) ni un abdomen en tabla real generalizado."
      },
      {
        id: "D",
        label: "D",
        text: "Imagen en \"grano de café\" proyectándose hacia el cuadrante superior derecho.",
        distractorProfile: "different_radiological_sign",
        incorrectFeedback: "Es el signo de Vólvulo de Sigmoides, caracterizado por distensión masiva indolente sin peritonitis franca en fases iniciales."
      }
    ],
    correctOptionId: "B",
    explanation: "El consumo crónico de AINEs destruye la barrera protectora gástrica, creando una úlcera. Cuando la úlcera profundiza y se rompe toda la pared del estómago/duodeno, el contenido gástrico (ácido y AIRE) escapa hacia la cavidad abdominal. El ácido clorhídrico baña los intestinos causando una peritonitis química fulminante (el paciente se niega a moverse y su abdomen parece de madera: \"abdomen en tabla\"). El aire que escapó del estómago, por simple gravedad (al estar el paciente de pie), sube hasta chocar con el techo del abdomen (el diafragma). Esto se visualiza en la Radiografía de Tórax PA de pie como Neumoperitoneo: una semiluna o \"media luna\" negra (radiolúcida) debajo del diafragma derecho, separándolo del hígado. Es una indicación para Laparotomía de urgencia y parche de epiplón (Parche de Graham).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando un abuelo se toma 3 Ibuprofenos diarios para la rodilla por meses, está haciendo un agujero silente en su duodeno. Cuando ese agujero se rompe por completo, todo el jugo gástrico y el aire que se tragó caen dentro de la barriga. El peritoneo grita de dolor al ser quemado por el ácido, por eso los músculos del abdomen se contraen a su máximo nivel de forma involuntaria (Abdomen en tabla). Ponle a ese señor una bata, sácalo de la camilla, páralo frente a la placa de rayos X del tórax y vas a ver cómo el aire forma una sonrisa negra debajo de los pulmones. Llámale al cirujano porque hay que ponerle un parche (como si fuera una llanta pinchada) a ese duodeno.",
    keyPoints: [
      "AINEs crónicos + Dolor en \"Puñalada\" Súbito + Abdomen en Tabla = Úlcera Péptica Perforada.",
      "Signo semiológico: Signo de Jobert (Pérdida de la matidez hepática a la percusión).",
      "Signo radiológico en Rx de Tórax de Pie: Aire libre subdiafragmático (Neumoperitoneo)."
    ]
  },
  {
    id: "umng-conv-ed2-16",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "PSIQUIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un joven de 20 años es encontrado deambulando por un parque a altas horas de la noche. La policía lo trae a urgencias en estado de extrema agitación y delirio. No obedece órdenes y habla incoherencias. Al examen físico, usted observa que el paciente tiene las pupilas severamente dilatadas y no reactivas a la luz (midriasis paralítica), su piel se siente \"ardiendo\" (Temperatura de 39.5°C), está completamente seco (no suda en lo absoluto) y luce intensamente enrojecido en cara y tórax. Al auscultar, la frecuencia cardíaca es de 145 lpm. Usted nota un globo vesical supraumbilical evidenciando retención urinaria aguda. Si la sedación intensiva con benzodiacepinas y el enfriamiento físico no logran revertir el delirio potencialmente fatal, ¿cuál es el antídoto específico para neutralizar esta intoxicación a nivel del Sistema Nervioso Central y Periférico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Flumazenil intravenoso de forma paulatina.",
        distractorProfile: "wrong_antidote",
        incorrectFeedback: "El Flumazenil es para intoxicación por Benzodiacepinas (que causa sueño, coma y pupilas normales o miosis, no este cuadro escandaloso simpaticomimético-like)."
      },
      {
        id: "B",
        label: "B",
        text: "Fisostigmina (Salicilato) administrada lentamente vía intravenosa."
      },
      {
        id: "C",
        label: "C",
        text: "Haloperidol o Clorpromazina intramuscular.",
        distractorProfile: "contraindicated_treatment",
        incorrectFeedback: "Los antipsicóticos típicos como el Haloperidol tienen propiedades anticolinérgicas intrínsecas. Darle Haloperidol a este paciente empeorará el cuadro tóxico de base o prolongará el delirio."
      },
      {
        id: "D",
        label: "D",
        text: "Pralidoxima y Atropina a altas dosis en infusión.",
        distractorProfile: "opposite_treatment",
        incorrectFeedback: "La Atropina es para la intoxicación exactamente opuesta (Organofosforados / Síndrome Colinérgico, donde el paciente suda, babea, se orina y tiene pupilas puntiformes)."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente está sufriendo un bloqueo masivo de los receptores muscarínicos de acetilcolina en todo el cuerpo y el cerebro (Síndrome Anticolinérgico). El manejo de primera línea es SIEMPRE medidas de soporte, enfriamiento físico y Benzodiacepinas para calmar el cerebro. Sin embargo, en casos refractarios, con delirio severo intratable, hipertermia letal o taquiarritmias, el antídoto específico es la Fisostigmina. La Fisostigmina es un inhibidor de la acetilcolinesterasa; al bloquear a la enzima que destruye la acetilcolina, inunda la sinapsis de acetilcolina fresca que logra \"patear\" al tóxico (Escopolamina) del receptor. Es el único de los inhibidores que cruza la barrera hematoencefálica, curando tanto los síntomas del cuerpo como la locura del cerebro. (Nota: NUNCA usar en intoxicaciones por antidepresivos tricíclicos).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si trabajas en Urgencias en Colombia, vas a ver pacientes \"burundangueados\" cada fin de semana. Llegan con las pupilas del tamaño de una moneda, la piel ardiendo pero secos como el desierto del Sahara, peleando con fantasmas y agarrando moscas imaginarias en el aire. No te dejes engañar, no es cocaína (la cocaína hace sudar muchísimo a la gente). Estos están completamente bloqueados del parasimpático. Cuelgale líquidos, ponle compresas de hielo, métele Lorazepam para que se duerma. Si la fiebre no baja de 40 grados o sigue destrozando la habitación, consigue la Fisostigmina con el toxicólogo, pásala suavemente por la vena y mira cómo la magia química le devuelve la cordura.",
    keyPoints: [
      "Síndrome Anticolinérgico = Seco, Rojo, Caliente, Loco, Pupilas Dilatadas (Midriasis) y no orina.",
      "Tóxicos comunes: Escopolamina (Burundanga), Atropina, Antihistamínicos.",
      "Antídoto de rescate para casos graves/refractarios: Fisostigmina (Cruza el cerebro y devuelve la acetilcolina)."
    ]
  },
  {
    id: "umng-conv-ed2-17",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "NEUMOLOGÍA - CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un paciente masculino de 22 años asiste a urgencias por referir un cuadro de 2 días de evolución caracterizado por fiebre leve, astenia y un dolor torácico intenso, opresivo-punzante, retroesternal. Usted indaga las características del dolor: el paciente refiere que el dolor empeora marcadamente con la inspiración profunda (dolor pleurítico), empeora al acostarse boca arriba (decúbito supino) y mejora espectacularmente cuando se sienta y se inclina hacia adelante (posición mahometana). En el examen físico se ausculta un sonido rasposo, como de \"cuero rozando contra cuero\", en el borde esternal izquierdo. El Electrocardiograma (ECG) reporta: Taquicardia sinusal, supradesnivel del segmento ST de concavidad superior (en forma de \"U\") de V2 a V6 y en derivadas inferiores, junto con un infradesnivel del segmento PR. Las troponinas séricas son negativas. ¿Cuál es el tratamiento de primera línea avalado por las guías para acortar los síntomas y evitar la recurrencia de esta patología?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Terapia combinada con Ibuprofeno (AINEs altas dosis) más Colchicina oral."
      },
      {
        id: "B",
        label: "B",
        text: "Antibioticoterapia intravenosa empírica con Ceftriaxona y Drenaje pericárdico.",
        distractorProfile: "wrong_etiology",
        incorrectFeedback: "La mayoría de las pericarditis (90%) son de etiología viral (Echovirus, Coxsackie) o idiopáticas. Las bacterias (pericarditis purulenta) son rarísimas y cursan con sepsis grave y colecciones enormes de pus en el eco."
      },
      {
        id: "C",
        label: "C",
        text: "Clopidogrel, Aspirina y remisión para angiografía coronaria urgente por SCA.",
        distractorProfile: "wrong_diagnosis",
        incorrectFeedback: "Aunque el dolor torácico asuste, las troponinas negativas, la edad (22 años), y el Supra-ST \"cóncavo\" difuso que no obedece a un territorio arterial específico (y el infradesnivel del PR que es patognomónico), descartan un infarto miocárdico ocluyente."
      },
      {
        id: "D",
        label: "D",
        text: "Glucocorticoides sistémicos (Prednisona) en monoterapia desde el inicio.",
        distractorProfile: "contraindicated_treatment",
        incorrectFeedback: "Los Corticoides (Prednisona) son un arma de doble filo. Quitan el dolor espectacularmente el primer día, pero cuando tratas de quitarlos, causan un \"efecto rebote\" brutal, condenando al paciente a tener Pericarditis Recurrente Crónica. Solo se reservan si fallan los AINEs + Colchicina, o si la causa base es autoinmune (Lupus)."
      }
    ],
    correctOptionId: "A",
    explanation: "El diagnóstico de Pericarditis Aguda es innegable. Para el tratamiento, por décadas se usaron solo los AINEs. Sin embargo, las guías europeas y americanas de cardiología estandarizaron que la terapia combinada y obligatoria de primera línea es utilizar un AINE a dosis antiinflamatorias plenas (Ej: Ibuprofeno 600-800 mg c/8h o Aspirina 650-1000 mg c/8h) DURANTE 1 A 2 SEMANAS, ASOCIADO siempre a Colchicina oral (0.5 mg/día) por 3 meses. Los estudios demostraron que añadir Colchicina acelera la mejoría del dolor y, más importante aún, reduce a la mitad el riesgo de que la pericarditis vuelva a aparecer (recurrencias) a futuro.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la membrana que envuelve al corazón (el pericardio) se inflamó por culpa de un virus de gripa de la semana pasada. Cuando el paciente se acuesta boca arriba, el corazón descansa todo su peso sobre el pericardio inflamado de la espalda y el paciente grita de dolor. Si se inclina hacia sus rodillas, el corazón \"cuelga\" hacia el pecho, separándose de la zona irritada de atrás, aliviando el dolor instantáneamente. Si no quieres que este muchacho vuelva al mes siguiente con el mismo dolor insoportable, nunca olvides mandarlo a casa con su receta de Colchicina junto con el analgésico.",
    keyPoints: [
      "Pericarditis Aguda = Dolor pleurítico que MEJORA AL SENTARSE HACIA ADELANTE.",
      "ECG clave: Depresión del intervalo PR y Supra-ST difuso Cóncavo.",
      "Tratamiento obligatorio: AINEs (Ibuprofeno/ASA) + COLCHICINA."
    ]
  },
  {
    id: "umng-conv-ed2-18",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "INFECTOLOGÍA - URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un niño de 3 años, no escolarizado, es llevado por sus padres a urgencias. Refieren que hace unas horas inició con fiebre alta, dolor de garganta y babeo excesivo. Al verlo en la sala de triaje, usted nota que el niño está muy angustiado, febril (39.8°C), y adopta una postura característica: sentado inclinado hacia adelante, con el cuello hiperextendido y el mentón hacia arriba (posición de trípode). El paciente tiene la boca abierta, babea saliva profusamente (sialorrea) y emite un sonido ronco y áspero al respirar (estridor inspiratorio). No tose y su voz suena como si tuviera algo caliente en la boca (\"papa caliente\"). ¿Cuál es la conducta DIAGNÓSTICA o TERAPÉUTICA que está ESTRICTAMENTE CONTRAINDICADA en este momento y que podría matar al paciente de inmediato?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar que el equipo de vía aérea difícil, Otorrinolaringología y Anestesiología acudan al quirófano para intubación.",
        distractorProfile: "correct_action_not_contraindicated",
        incorrectFeedback: "La epiglotitis es una emergencia quirúrgica/anestésica. La intubación debe hacerse de forma controlada en el quirófano con el mejor anestesiólogo pediátrico o el otorrino listo para hacer una traqueotomía de rescate si el tubo no pasa."
      },
      {
        id: "B",
        label: "B",
        text: "Indicar a los padres que lo sostengan y examinar vigorosamente la cavidad oral con un bajalenguas iluminado para ver la inflamación."
      },
      {
        id: "C",
        label: "C",
        text: "Mantener al niño en los brazos de su madre para evitar el llanto y administrar oxígeno humidificado suavemente.",
        distractorProfile: "correct_action_not_contraindicated",
        incorrectFeedback: "Evitar que el niño llore o se asuste es vital. El llanto consume oxígeno y aumenta el edema laringeo. Mantenerlo tranquilo y oxigenado sin forzarlo salva vidas."
      },
      {
        id: "D",
        label: "D",
        text: "Evitar tomar accesos venosos periféricos o exámenes de sangre dolorosos hasta que la vía aérea esté asegurada.",
        distractorProfile: "correct_action_not_contraindicated",
        incorrectFeedback: "Canalizar vías venosas duele y hace llorar al niño. Se debe postergar todo procedimiento invasivo doloroso hasta que el paciente esté sedado e intubado en quirófano."
      }
    ],
    correctOptionId: "B",
    explanation: "Esta es la acción CONTRAINDICADA y LETAL. La epiglotis es la \"tapita\" que cierra la tráquea al tragar. En la epiglotitis, esa tapa está hinchada al tamaño de una cereza roja gigante, inflamada y friable. Si metes un bajalenguas o espátula en la boca de un niño asustado para tratar de ver el fondo de la garganta, causarás dos cosas: 1) Angustia extrema, 2) Estimulación mecánica del vago o de los tejidos inflamados, provocando un ESPASMO LARÍNGEO COMPLETO e irreversible. La vía aérea se cerrará por completo frente a tus ojos y el niño morirá de asfixia antes de que puedas encontrar el tubo endotraqueal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., te apuesto mi sueldo a que la primera vez que veas un niño con epiglotitis real te vas a paralizar. El niño no llora; el niño te mira con unos ojos grandes de pánico, sentado hacia adelante, dejando caer hilos de baba porque pasar saliva le duele más que el fuego. Su cuello está extendido para alinear su laringe y poder robar migajas de aire. Si te atreves a meterle un palo de madera en la boca para verle las amígdalas, harás que se atragante, su laringe se cerrará del susto y tendrás que rajarle la garganta ahí mismo en la camilla con un bisturí (cricotiroidotomía) para que no se muera. Pásalo directo al quirófano \"volando\" y deja que el anestesiólogo más viejo del hospital lo duerma e intube.",
    keyPoints: [
      "Epiglotitis Aguda = Posición en Trípode + Babeo (Sialorrea) + Voz de papa caliente + Estridor.",
      "Conducta universal: NUNCA usar el bajalenguas ni forzar el llanto.",
      "Se debe asegurar la vía aérea de forma electiva y rápida en Quirófano (con equipo de vía aérea difícil)."
    ]
  },
  {
    id: "umng-conv-ed2-19",
    university: "UMNG",
    examArea: "MEDICINA TROPICAL",
    topic: "INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un trabajador minero de 30 años proveniente de la cuenca amazónica del Chocó es trasladado en avioneta medicalizada en estado crítico. Los paramédicos informan que el paciente inició hace una semana con picos febriles intermitentes, escalofríos y cefalea intensa. Hoy presentó deterioro severo. Al ingreso en la UCI: paciente estuporoso, con Glasgow 8/15, ictérico, pálido y con patrón de respiración acidótica rápida (Kussmaul). Paraclínicos de choque: Creatinina 4.5 mg/dL, Glucosa 40 mg/dL (Hipoglucemia) y Lactato de 6.0 mmol/L. Se realiza una prueba rápida y gota gruesa confirmando la presencia masiva de Plasmodium falciparum (Parasitemia > 15%). Usted diagnostica Malaria Severa / Complicada con afectación multisistémica. Teniendo en cuenta la gravedad y directrices del Ministerio de Salud (Colombia) y la OMS, ¿cuál es el tratamiento antimálarico INTRAVENOSO de primera línea que debe instaurar sin demora?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Arteméter-Lumefantrina por sonda nasogástrica y diálisis urgente.",
        distractorProfile: "wrong_route",
        incorrectFeedback: "Aunque las Terapias Combinadas con Artemisinina (ACT) como Arteméter-Lumefantrina (Coartem) son la primera línea para la malaria Falciparum, estas son píldoras ORALES diseñadas para malaria NO COMPLICADA (el paciente camina y está lúcido). Administrarla por sonda a un paciente en coma asume una absorción errática e insuficiente en un choque."
      },
      {
        id: "B",
        label: "B",
        text: "Cloroquina en bolo intravenoso lento seguido de Primaquina.",
        distractorProfile: "resistance_and_toxicity",
        incorrectFeedback: "El P. falciparum en Colombia es 100% resistente a la cloroquina (y dar cloroquina IV en bolo puede ser altamente tóxico para el corazón de paso)."
      },
      {
        id: "C",
        label: "C",
        text: "Sulfato de Quinina asociado a Doxiciclina por vía intravenosa.",
        distractorProfile: "outdated_guideline",
        incorrectFeedback: "El Sulfato de Quinina intravenoso FUE el tratamiento de elección histórica mundial para la malaria severa durante décadas. Sin embargo, múltiples ensayos grandes (estudios AQUAMAT y SEAQUAMAT) demostraron que la Quinina tiene una mortalidad superior, es mucho más lenta en limpiar la parasitemia y agrava horriblemente la hipoglucemia (es un estimulador insulínico). Hoy es una alternativa de segunda línea."
      },
      {
        id: "D",
        label: "D",
        text: "Artesunato intravenoso durante 24 horas continuas (mínimo 3 dosis) seguido de terapia combinada oral."
      }
    ],
    correctOptionId: "D",
    explanation: "La droga salvavidas universal moderna para la Malaria Severa es el derivado puro y rápido de la artemisinina: el Artesunato intravenoso. Es el antiparasitario de acción más rápida que existe; destruye todos los estadios del ciclo eritrocítico del parásito casi al instante. El protocolo manda dar una dosis al ingreso (hora 0), luego a las 12 horas y luego a las 24 horas. Una vez el paciente despierta de la malaria cerebral y puede tragar, se completa el tratamiento de \"limpieza\" con las píldoras orales (Coartem) por 3 días más.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los glóbulos rojos de este minero están repletos de parásitos. Como el Falciparum es pegajoso, todos esos glóbulos se están pegando a las paredes de los capilares microscópicos de su cerebro, riñones y pulmones, haciendo un trancón y asfixiando los órganos (Secuestro capilar). El paciente está en coma por asfixia cerebral. Las pastillas no le sirven de nada. El Artesunato IV es una \"bomba nuclear parasitológica\"; entra por la vena, limpia los capilares y resucita al paciente del coma malárico en menos de 24 horas. Si a este señor no le consigues las ampollas, sus riñones y su cerebro colapsarán irreversiblemente.",
    keyPoints: [
      "Malaria SEVERA/Complicada (Coma, Falla Renal, Falla Respiratoria, Ictericia masiva) = Artesunato Intravenoso (IV). ¡No importa la especie, todo lo grave va por la vena con Artesunato!"
    ]
  },
  {
    id: "umng-conv-ed2-20",
    university: "UMNG",
    examArea: "OBSTETRICIA",
    topic: "NEONATOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Mujer de 25 años (G1P0), con embarazo único de 28 semanas de gestación, asiste a urgencias de su hospital materno quejándose de salida de líquido claro y abundante por la vagina desde hace 6 horas. Al especuloscopio, usted confirma salida franca de líquido amniótico por el cérvix (prueba de cristalización/Nitrazina positiva). La paciente empieza a referir contracciones uterinas dolorosas regulares (3 en 10 minutos). Usted documenta que NO hay fiebre, no hay taquicardia materna/fetal, y los laboratorios infecciosos son normales (Ruptura Prematura de Membranas sin corioamnionitis). Se decide intentar prolongar el embarazo y preparar al feto prematuro. Usted inicia inmediatamente Eritromicina/Ampicilina profiláctica (por la RPM), un esquema de Betametasona IM (para maduración pulmonar) y un tocolítico (Nifedipino) para frenar las contracciones. Sabiendo que el parto podría ocurrir inevitablemente antes de las 32 semanas, ¿qué medicamento intravenoso OBLIGATORIO le falta prescribir para prevenir la parálisis cerebral y daños neurológicos severos en este prematuro extremo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ácido fólico a altas dosis intravenoso materno.",
        distractorProfile: "wrong_timing",
        incorrectFeedback: "El ácido fólico previene los defectos del tubo neural (espina bífida) si se da antes de la concepción y en las primeras 12 semanas. A las 28 semanas ya no cambia la estructura espinal."
      },
      {
        id: "B",
        label: "B",
        text: "Infusión de Sulfato de Magnesio intravenoso para neuroprotección fetal."
      },
      {
        id: "C",
        label: "C",
        text: "Vitamina K sistémica a altas dosis maternas.",
        distractorProfile: "postpartum_intervention",
        incorrectFeedback: "La vitamina K se aplicará intramuscular al bebé apenas nazca para prevenir la Enfermedad Hemorrágica del Recién Nacido, pero no es una infusión materna preparto profiláctica estandarizada para el cerebro."
      },
      {
        id: "D",
        label: "D",
        text: "Ácido Tranexámico profiláctico para evitar hemorragia intraventricular cerebral en el feto.",
        distractorProfile: "wrong_mechanism",
        incorrectFeedback: "El Ácido Tranexámico se usa para la hemorragia posparto materna o sangrados por trauma, no cruza para actuar como neuroprotector preventivo fetal."
      }
    ],
    correctOptionId: "B",
    explanation: "Los bebés nacidos antes de las 32 semanas de gestación tienen unos capilares cerebrales y una sustancia blanca extremadamente inmaduros y frágiles. Al nacer prematuros, el estrés del parto y los cambios de presión causan Hemorragia Intraventricular o Parálisis Cerebral Infantil (PCI). Está ampliamente demostrado por múltiples guías (ACOG) que administrar una infusión de Sulfato de Magnesio intravenoso a la madre en las horas previas a un parto inminente < 32 semanas, funciona como estabilizador de membrana y neuroprotector. Reduce significativamente la incidencia y gravedad de la parálisis cerebral motora gruesa en el bebé.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., nacer a las 28 semanas es un asalto brutal al cerebro de un feto. Su cabecita no está diseñada para resistir las contracciones pelvianas ni los picos de presión arterial sin la protección del líquido amniótico (que ya lo botó). El Magnesio cruza la placenta, entra al cerebro del feto, estabiliza los receptores NMDA y protege a las neuronas del daño inflamatorio e isquémico durante ese viaje por el canal vaginal o la cesárea. Darle esta ampolla a la mamá hoy, es la diferencia entre un niño que camina a los dos años, y uno que queda confinado a una silla de ruedas por parálisis cerebral espástica de por vida.",
    keyPoints: [
      "Tríada de preparación para Parto Pretérmino inminente (< 32 semanas): Corticoides (Betametasona) -> Madura Pulmones, Antibióticos -> Evita Sepsis, Sulfato de Magnesio IV -> Neuroprotección (Evita Parálisis Cerebral y Hemorragia Cerebral fetal)."
    ]
  }
];
