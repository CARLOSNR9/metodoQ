import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #3 (Simulacro 3) · Preguntas #91–#100.
 */
export const UMNG_CONV_ED3_91_100_QUESTIONS: TrainingQuestion[] = [
  {
    "id": "umng-conv-ed3-91",
    "university": "UMNG",
    "examArea": "NEUROCIRUGÍA",
    "topic": "TRAUMA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un joven de 22 años es ingresado a la sala de trauma tras sufrir un golpe en la cabeza con un bate de béisbol durante una pelea en la calle. Ingresó alerta, pero en los últimos 30 minutos su nivel de conciencia se deterioró rápidamente hasta el coma (Glasgow 6). Al evaluarlo, usted documenta una pupila DERECHA francamente dilatada (midriática) y no reactiva a la luz. Simultáneamente, al realizar un estímulo doloroso central profundo, el paciente presenta una hemiplejía (parálisis) del lado DERECHO de su cuerpo (no mueve ni el brazo ni la pierna derecha). Se realiza un TAC de cráneo urgente que evidencia un Hematoma Epidural masivo en el hemisferio DERECHO. ¿Cómo se explica fisiopatológicamente que el paciente tenga la parálisis motora del MISMO lado de la pupila dilatada y del hematoma, desafiando la regla del cruce motor?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Lesión del nervio oculomotor derecho y daño isquémico de la arteria cerebral anterior derecha.",
        "incorrectFeedback": "La lesión aislada vascular no explica la discordancia anatómica bajo un síndrome de hipertensión endocraneana tan florido."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Fenómeno de la Muesca de Kernohan (Kernohan's Notch) por herniación uncal."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Infarto embólico simultáneo de la cápsula interna izquierda por trauma carotídeo.",
        "incorrectFeedback": "Es matemáticamente improbable y no justifica el evento fisiopatológico mecánico del efecto de masa."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Síndrome de Foville (Infarto pontino inferior) asociado al trauma craneal.",
        "incorrectFeedback": "Foville da hemiplejía contralateral y parálisis del VI par ipsilateral por infarto de protuberancia, no un cuadro agudo de hematoma epidural expansivo."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Herniación Uncal con Falso Localizador (Muesca de Kernohan).\r\n\r\nDato decisivo: Pupila midriática DERECHA + Hematoma DERECHO + Hemiplejía DERECHA (Ipsilateral, cuando debería ser contralateral).\r\n\r\nPrincipio clínico evaluado: La neuroanatomía de los síndromes de herniación cerebral masiva.\n\nLa regla general neurológica dice: \"Pupila midriática = lado de la lesión (ipsilateral)\" y \"Parálisis del cuerpo = lado opuesto de la lesión (contralateral)\". PERO existe una excepción mortal llamada Muesca de Kernohan (Falso Localizador). En este joven, el coágulo gigante de sangre en el lado DERECHO de la cabeza empuja el cerebro con tanta violencia hacia la izquierda, que el lóbulo temporal derecho (Uncus) se hernia y aplasta el Nervio Oculomotor III derecho (por eso la pupila DERECHA se dilata). Hasta ahí es normal. Sin embargo, el cerebro es empujado tan duro contra el lado izquierdo, que el \"tallo cerebral\" (Mesencéfalo) choca violentamente contra el borde duro de la tienda del cerebelo (Tentorio) del lado IZQUIERDO. Ese choque daña la vía motora (Pedúnculo cerebral izquierdo) ANTES de que las fibras se crucen en el bulbo. Como se dañó la vía motora izquierda, el paciente queda paralizado del lado DERECHO. Resultado final paradójico: Pupila dilatada y parálisis del MISMO LADO.\n\n**Trampa del examen:** Desconfiar de la imagen radiológica: El médico novato ve la parálisis derecha, jura que el coágulo está en el lado izquierdo, y cuando el TAC muestra el coágulo a la derecha, cree que el TAC es de otro paciente o que el técnico se equivocó al marcar \"R/L\" (Right/Left) en la placa. Kernohan engaña al ojo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el cerebro de este joven es como un flan de gelatina dentro de un envase de vidrio. El coágulo gigante a la derecha está empujando la gelatina hacia la izquierda con una fuerza abismal. La gelatina choca contra el borde duro y afilado del cráneo del lado izquierdo. Al chocarse, se \"macha\" y se corta el cable de movimiento que venía bajando por ese lado izquierdo. Como ese cable iba destinado a mover el lado derecho del cuerpo, el paciente queda paralítico del mismo lado del golpe. No creas que te trajeron la tomografía del paciente equivocado. Tienes que llamar al neurocirujano para que abra un hueco en el cráneo derecho (Craneotomía) en los próximos 15 minutos, o el muchacho tendrá muerte del tallo cerebral inminente.",
    "keyPoints": [
      "Herniación Uncal Clásica: Pupila dilatada del MISMO lado de la lesión + Parálisis del lado OPUESTO.",
      "Fenómeno de Kernohan (Falso Localizador): Pupila dilatada del MISMO lado de la lesión + Parálisis del MISMO lado (Por aplastamiento del pedúnculo cerebral contralateral contra el tentorio)."
    ]
  },
  {
    "id": "umng-conv-ed3-92",
    "university": "UMNG",
    "examArea": "CARDIOLOGÍA",
    "topic": "URGENCIAS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre de 65 años ingresa a urgencias con dolor torácico opresivo de 2 horas de evolución. El Electrocardiograma de 12 derivaciones evidencia un Supradesnivel del segmento ST de 3 mm en las derivaciones II, III y aVF. El médico de turno diagnostica un IAMCEST de pared inferior. Como parte del protocolo inicial estándar de Síndrome Coronario Agudo, se le administran 3 perlas de Nitroglicerina sublingual para aliviar el dolor, seguidas de Morfina IV. Cinco minutos después, el paciente pierde el conocimiento transitoriamente y el monitor muestra una caída catastrófica de la presión arterial a 60/40 mmHg. Usted acude a evaluarlo y encuentra al paciente pálido, con marcada ingurgitación de las venas yugulares, pero a la auscultación, los pulmones están completamente limpios (sin estertores ni ruidos agregados). ¿Cuál fue el error iatrogénico desencadenante y cuál es el tratamiento de rescate inmediato?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Reacción anafiláctica a la nitroglicerina / Administrar Epinefrina IM.",
        "incorrectFeedback": "La alergia a la nitroglicerina no produce choque aislado con ingurgitación yugular (anafilaxia da pulmones con broncoespasmo)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Infarto extenso del Ventrículo Derecho que fue agravado por los nitratos / Infusión rápida de abundantes Líquidos Intravenosos (SSN 0.9%)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Ruptura de músculo papilar con edema agudo de pulmón silente / Balón de Contrapulsación Intraaórtico.",
        "incorrectFeedback": "La ruptura del músculo papilar vimos que inunda los pulmones de sangre hacia atrás. Tendrías un paciente ahogándose con crepitantes hasta los ápices, no pulmones \"completamente limpios\"."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Vasodilatación paradójica vagal (Reflejo de Bezold-Jarisch) / Administrar Atropina a altas dosis.",
        "incorrectFeedback": "El reflejo vagal asocia bradicardia extrema, no explica el cuadro clásico mecánico tras la nitroglicerina."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Infarto Agudo del Ventrículo Derecho secundario a IAM de pared inferior.\r\n\r\nDato decisivo: IAM Inferior (II, III, aVF) + Hipotensión fulminante post-nitratos + Ingurgitación yugular + Pulmones limpios.\r\n\r\nPrincipio clínico evaluado: La dependencia absoluta de la \"precarga\" del Ventrículo Derecho cuando sufre isquemia, y la contraindicación absoluta del uso de vasodilatadores.\n\nCerca del 40% de los Infartos de la Pared Inferior del ventrículo izquierdo (arteria coronaria derecha tapada) se acompañan de un Infarto del Ventrículo Derecho (VD). Un VD infartado se vuelve una bolsa flácida incapaz de bombear. Para que esa bolsa flácida logre empujar sangre hacia los pulmones, necesita estar LLENA de líquido a altísima presión (dependencia de la precarga). La Nitroglicerina (y la Morfina) son venodilatadores. Al darle esto al paciente, abriste las venas del cuerpo, la sangre se estancó en las piernas, y el retorno venoso al corazón derecho cayó a cero. El VD colapsó, no mandó sangre al lado izquierdo, y la presión sistémica cayó a 60/40. (Por eso las yugulares están saltadas, la sangre se estanca hacia atrás, y los pulmones están limpios porque no hay sangre llegando a ellos). En un IAM inferior, los nitratos y opiáceos están PROSCRITOS hasta descartar infarto de VD (haciendo un ECG con derivadas V3R y V4R). El rescate de esta iatrogenia es inyectar rápidamente Bolos de 1 a 2 Litros de Solución Salina Normal para rellenar las venas y forzar mecánicamente al ventrículo derecho a trabajar.\n\n**Trampa del examen:** El protocolo M.O.N.A. a ciegas: Te enseñaron que al infarto se le da \"Morfina, Oxígeno, Nitratos y Aspirina\". Ese es el dogma obsoleto. Si usas MONA en un IAM inferior, matas al paciente. ¡A los infartos inferiores no se les da Nitratos sin antes tomar derivadas derechas!\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente acaba de infartarse la mitad derecha de su corazón. El ventrículo derecho ahora es tan útil como un globo desinflado. La única forma en que ese ventrículo logre abrir la válvula para empujar la sangre hacia los pulmones, es si le metes el líquido a una presión bestial. Cuando tú le pusiste la pastilla debajo de la lengua (nitroglicerina), le relajaste todas las venas del cuerpo. La sangre se fue al piso, la presión de llenado se desvaneció, y el globo derecho simplemente se apagó. Su cerebro se quedó sin sangre en 5 segundos. Para revivirlo, tienes que abrir las mangueras de Suero Fisiológico a máxima velocidad. Literalmente lo curas ahogando sus venas de agua para que la mecánica hidrostática haga el trabajo que el músculo cardíaco ya no puede hacer.",
    "keyPoints": [
      "IAM Inferior (II, III, aVF) + Choque súbito + Yugulares Ingurgitadas + Pulmones limpios = Infarto del Ventrículo Derecho.",
      "Contraindicaciones absolutas: Nitroglicerina, Diuréticos, Morfina. (Porque quitan la precarga).",
      "Tratamiento inmediato: Líquidos Intravenosos a chorro (Precarga agresiva)."
    ]
  },
  {
    "id": "umng-conv-ed3-93",
    "university": "UMNG",
    "examArea": "TOXICOLOGÍA",
    "topic": "MEDICINA PREVENTIVA E INDUSTRIAL",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un tapicero de muebles y trabajador de la construcción es rescatado de un incendio masivo ocurrido en su taller, donde se almacenaban grandes cantidades de espuma de poliuretano, plásticos y lana de vidrio. Al llegar a urgencias, el paciente está en coma profundo, presenta convulsiones clónicas y respiración agónica. Usted asume una intoxicación por Monóxido de Carbono e inicia oxígeno al 100%. Sin embargo, los gases arteriales reportan un Lactato sérico en 18 mmol/L (hiperlactatemia monstruosa) y una acidosis metabólica refractaria con pH de 6.90. Se extrae una muestra de sangre venosa y usted nota que la sangre del paciente es de un color \"Rojo Brillante\" espectacular, casi idéntica a la sangre arterial. Teniendo en cuenta la exposición a plásticos en combustión y la fisiopatología oxidativa celular, ¿cuál es el antídoto INTRAVENOSO OBLIGATORIO que debe administrarse como salvamento inmediato?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Azul de metileno intravenoso en infusión.",
        "incorrectFeedback": "El azul de metileno es para la Metahemoglobinemia (donde la sangre se ve color chocolate oscuro)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Etanol intravenoso o Fomepizol para inhibir la producción de ácido láctico.",
        "incorrectFeedback": "El fomepizol es para intoxicación por alcoholes tóxicos (Metanol o Etilenglicol) que se ingieren, no en incendios respiratorios."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Hidroxocobalamina (Vitamina B12a) intravenosa o Kit de Tiosulfato/Nitrito."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Flumazenil a altas dosis en goteo continuo.",
        "incorrectFeedback": "El Flumazenil es para intoxicación por Benzodiacepinas."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Intoxicación aguda por Cianuro (Ácido Cianhídrico).\r\n\r\nDato decisivo: Incendio en espacio cerrado con poliuretano/plásticos + Coma/Convulsión + Lactato por los cielos (>8 mmol/L post incendio es firma de cianuro) + Sangre venosa rojo brillante.\r\n\r\nPrincipio clínico evaluado: El bloqueo de la Citocromo C Oxidasa en la cadena respiratoria mitocondrial y su antídoto secuestrante de rescate.\n\nEn todos los incendios se respira Monóxido de Carbono (CO). PERO, si se queman plásticos, lana sintética, poliuretano o esponjas de tapicería, se libera gas de CIANURO. El Cianuro es un veneno que viaja a las mitocondrias de todas las células del cuerpo y bloquea la \"Citocromo C Oxidasa\". La célula pierde instantáneamente su capacidad para usar el oxígeno (asfixia celular directa o Hipoxia Histotóxica). Como las células no pueden coger el oxígeno que viene en la sangre, el oxígeno pasa de largo. Por eso, la sangre de las venas sale de un color Rojo Brillante brillante (súper oxigenada), en lugar del color vinotinto normal. Al no usar oxígeno, las células fabrican ácido láctico masivamente intentando sobrevivir (por eso el lactato está en 18). Darle solo oxígeno no sirve de nada porque la célula tiene la boca tapada. El Antídoto moderno de elección ORO es la Hidroxocobalamina (Vitamina B12a). Esta vitamina inyectada por vía IV actúa como una aspiradora: se pega al Cianuro circulante, formando la famosa Cianocobalamina (Vitamina B12 normal), que el cuerpo orina pacíficamente (tiñendo la orina del paciente de color rojo vino inofensivo).\n\n**Trampa del examen:** Sangre arterial vs Sangre Venosa: La sangre normal roja es la de la arteria. La venosa es oscura. El cianuro invierte las reglas: hace que la vena se vea roja y reluciente. La combinación de \"Lactato altísimo post incendio + Poliuretano\" grita cianuro.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este hombre está flotando en un mar de oxígeno, pero sus células se están asfixiando a muerte. El gas cianuro le puso un candado a la mitocondria de cada célula de su cuerpo. Aunque sus pulmones metan aire, el oxígeno rebota y se devuelve por las venas intacto, por eso su sangre venosa brilla como un rubí. Para salvarlo, tienes que echarle un \"cebo\" químico al veneno en la sangre. Inyectas altas dosis de Hidroxocobalamina, el cianuro suelta la célula, \"muerde\" la medicina y se transforma en una inofensiva Vitamina B12. Acabas de ganarle una partida de ajedrez molecular a la muerte.",
    "keyPoints": [
      "Incendio con humo de Plásticos/Espumas + Coma + Lactato muy Alto (>8) = Intoxicación por CIANURO.",
      "Hallazgo visual: Sangre venosa y piel Rojo Brillante.",
      "Antídoto de Primera Línea: Hidroxocobalamina (o el Kit de Cianuro Clásico: Nitrito de Amilo + Nitrito de Sodio + Tiosulfato de Sodio)."
    ]
  },
  {
    "id": "umng-conv-ed3-94",
    "university": "UMNG",
    "examArea": "PEDIATRÍA",
    "topic": "CIRUGÍA PEDIÁTRICA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un lactante masculino de 8 meses de edad, previamente sano y bien nutrido, es llevado a urgencias llorando inconsolablemente. La madre refiere que los episodios de llanto son intermitentes: \"El niño empieza a llorar de la nada, grita de dolor, se encoge y lleva sus rodillas fuertemente hacia el abdomen, suda mucho, y a los 5 minutos se calma por completo, quedando como letárgico o muy dormido\". Esto se repite cada 15 a 20 minutos. Ha presentado un episodio de vómito. Al revisar su pañal, usted encuentra heces mezcladas con sangre roja oscura y abundante moco espeso (apariencia de \"jalea de grosella\"). Al palpar el cuadrante superior derecho de su abdomen, usted nota una masa alargada (\"en forma de salchicha\"). ¿Cuál es el paso diagnóstico y TERAPÉUTICO simultáneo recomendado para evitar la isquemia intestinal y cirugía abierta en este paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Realizar una colonoscopia de urgencia para desobstrucción endoscópica.",
        "incorrectFeedback": "La colonoscopia no es un estudio para un bebé con abdomen agudo isquémico inminente. El riesgo de perforar el intestino frágil con la manguera es altísimo."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Ecografía abdominal urgente e inmediatamente un Enema de Aire o Bario (con control fluoroscópico) para reducir neumáticamente el defecto."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar corticoides intravenosos a altas dosis para desinflamar los ganglios de Peyer hipertróficos.",
        "incorrectFeedback": "Los corticoides no solucionan el enclavamiento físico intestinal obstructivo de un intestino metido dentro de otro."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Traslado inmediato a quirófano para laparotomía exploratoria y resección ileocecal.",
        "incorrectFeedback": "La cirugía de entrada no es la primera línea en un niño estable; la primera línea es el enema neumático descompresivo."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Invaginación Intestinal (Intususcepción).\r\n\r\nDato decisivo: Bebé de ~8 meses + Llanto tipo cólico intermitente con postura antálgica (piernas al abdomen) seguido de letargia extrema + Heces en Jalea de Grosella + Masa en forma de salchicha.\r\n\r\nPrincipio clínico evaluado: El enema hidrostático/neumático como \"gold standard\" dual (diagnóstico y terapéutico) en la pediatría de urgencias.\n\nLa Invaginación Intestinal (Intususcepción) es la causa más común de obstrucción intestinal en niños de 6 a 36 meses. El íleon (intestino delgado) \"se traga\" al ciego (intestino grueso), metiéndose dentro de él como el dedo de un guante al voltearlo (típicamente porque los ganglios del intestino se inflamaron tras un virus). Esto genera dolor en oleadas (por el peristaltismo). Como el intestino está apretado, sus vasos sanguíneos se ahogan, produciendo isquemia y necrosis mucosa, que se escama y se mezcla con moco, produciendo las \"Heces en Jalea de Grosella\" (Currant jelly stools). La ecografía muestra la clásica \"Masa en diana o pseudoriñón\". Si el niño NO tiene signos de choque avanzado ni perforación, el tratamiento ideal sin bisturí es el Enema de Aire (Neumático) o de Bario. Al inyectar aire a presión por el recto, la presión infla el colon y empuja el intestino invaginado hacia atrás, \"desenroscándolo\" (\"plop\") y curando al niño en 5 minutos sin cirugía. (Si el enema falla 3 veces, o si el niño está en choque séptico, AHÍ SÍ va a quirófano abierto).\n\n**Trampa del examen:** Operar todo abdomen agudo: En adultos, obstrucción aguda = bisturí. En lactantes, la invaginación se trata empujando aire por el ano en radiología. Solo marcas \"quirófano\" si te dicen explícitamente \"hay aire libre subdiafragmático (perforado)\" o \"hay peritonitis franca purulenta\".\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate una serpiente que se empieza a tragar su propia cola. Así está el intestino del bebé. Al tragarse, los vasos sanguíneos que alimentan a la cola quedan estrangulados, el tejido se hincha, llora lágrimas de sangre oscura y la revuelve con los mocos de la digestión, creando esa asquerosa jalea roja. Cada vez que el niño tiene una onda intestinal normal, el intestino tira de la soga ahorcándose más, por eso el niño grita y se encoge; luego pasa la onda y se relaja del cansancio. Inyéctale aire por el pañal de la cola usando las máquinas de radiología. Esa presión en reversa escupirá la cola de la serpiente hacia afuera y el problema desaparecerá frente al fluoroscopio sin dejarle una cicatriz en el abdomen.",
    "keyPoints": [
      "Llanto en oleadas + Dobla piernas al abdomen + Heces en \"Jalea de Grosella\" = Invaginación Intestinal (Intususcepción).",
      "Signo ecográfico: Imagen en DIANA o Pseudoriñón.",
      "Tratamiento No Operatorio (Elección inicial): Enema de Aire (Neumático) o Bario / Hidrostático."
    ]
  },
  {
    "id": "umng-conv-ed3-95",
    "university": "UMNG",
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "URGENCIAS MÁXIMAS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Usted es el médico encargado de atender el parto vaginal de una mujer de 38 años (G4P3), en la zona rural. La fase del expulsivo fue rápida pero requirió tracción fuerte y sostenida del cordón umbilical por parte de la enfermera porque la paciente \"estaba sangrando un poco\". Repentinamente, la paciente presenta una hemorragia masiva \"como un balde\" y entra en estado de choque profundo (PA 60/30 mmHg) desproporcionado al sangrado visible inicial. Usted realiza la palpación abdominal y se percata de algo aterrador: El útero no se palpa en el abdomen (ausencia total del fondo uterino). Al realizar la inspección vaginal, usted visualiza una enorme masa de tejido rojizo y carnoso, rugosa, que asoma completamente por fuera de la vagina (prolapso), con la placenta aún adherida a ella. ¿Cuál es el paso INMEDIATO de reanimación y corrección anatómica en el algoritmo de esta catástrofe que salva la vida de la madre?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar goteo máximo de Oxitocina IV para que el útero recupere su tono y \"suba\" por sí solo a la cavidad pélvica.",
        "incorrectFeedback": "EL PEOR ERROR. Si le das oxitocina a un útero que está volteado como un calcetín al revés, el anillo cervical (que ahora está arriba) se cerrará y se apretará como una trampa de acero, haciendo físicamente imposible empujar el cuerpo del útero de regreso por el hueco. La paciente morirá de choque neurogénico y exanguinante en pocos minutos."
      },
      {
        "id": "B",
        "label": "B",
        "text": "HALAR el resto de la placenta que está pegada para limpiar la masa y realizar luego histerectomía vaginal de urgencia.",
        "incorrectFeedback": "Si intentas arrancar o raspar la placenta pegada a la matriz volteada sin antes regresarla a su sitio, abrirás litros de vasos venosos abiertos (sinuosoides) sin tono muscular, y la madre se desangrará en tus manos. La placenta se saca DESPUÉS de que el útero vuelva a estar derecho por dentro."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Detener inmediatamente todos los uterotónicos (oxitocina), administrar un relajante uterino (Nitroglicerina, Terbutalina o Halotano) e introducir el puño en la vagina empujando la masa carnosa fuertemente hacia arriba para regresarla a su posición abdominal (Maniobra de Johnson)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Trasladar al quirófano a la paciente para laparotomía abdominal sin tocar la masa vaginal en urgencias, para evitar que se desangre al intentar empujarla.",
        "incorrectFeedback": "No puedes esperar un traslado a quirófano. Cada minuto que pase con el útero volteado hinchará el tejido y el cuello se volverá un anillo rígido inamovible (anillo de contracción), obligando a cirugías heroicas donde a menudo la mujer muere sangrando en el intento (Procedimiento de Huntington o Haultain en quirófano es solo si la maniobra manual en urgencias fracasa)."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Inversión Uterina Aguda.\r\n\r\nDato decisivo: Tracción fuerte del cordón + Hemorragia con Choque desproporcionado + Útero NO palpable en abdomen (Ausente) + Masa roja carnosa asomando en vulva.\r\n\r\nPrincipio clínico evaluado: El algoritmo contra-intuitivo pero vital de la inversión uterina: hay que \"ablandar/relajar\" el útero para poder devolverlo, antes de usar oxitocina.\n\nLa Inversión Uterina es una de las catástrofes más rápidas y mortales. Al jalar el cordón demasiado fuerte cuando la placenta aún estaba pegada, volteaste la matriz al revés (como cuando te quitas un guante de látex). Esto jala el peritoneo y los ovarios hacia abajo, causando un dolor atroz y un choque mixto (hipovolémico y neurogénico/vagal). La regla innegociable es la REPOSICIÓN MANUAL INMEDIATA (Maniobra de Johnson). Debes \"relajar\" el útero usando Tocolíticos (Nitroglicerina intravenosa, Terbutalina, o que el anestesiólogo use Halotano). Luego, metes el puño cerrado o la yema de los dedos presionando el fondo del útero prolapsado empujándolo fuerte y firme hacia arriba por el canal vaginal hasta que el útero haga \"pop\" y vuelva a su lugar original en el abdomen. Una vez que esté en su sitio, AHÍ SÍ SE LE METE OXITOCINA a chorro para que se quede apretado y no se vuelva a caer.\n\n**Trampa del examen:** La secuencia de la Oxitocina:\r\n\r\nHemorragia por Atonía = Oxitocina PRIMERO.\r\n\r\nHemorragia por Inversión Uterina = DETENER OXITOCINA, RELAJAR (Nitroglicerina), Empujar, y LUEGO dar Oxitocina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu enfermera se pasó de fuerza. En su afán por sacar la placenta, tiró de la cuerda (el cordón) tan duro que el techo del útero de la mamá cedió y se volteó como la media de un pie. Ahora tienes una bola de carne roja del tamaño de un melón colgada afuera de la vulva. La mamá está en choque vagal porque sus ovarios están estirados hasta el límite. ¡Apaga el goteo de oxitocina! Necesitas que esa masa esté blandita y fofa como gelatina para poder empujarla por el apretado anillo del cérvix de regreso a la barriga. Ponle tu puño cerrado en la punta de esa bola de carne y empuja hacia el cielo con toda la fuerza y el peso de tu brazo. Cuando sientas que saltó de regreso a la barriga, grítale a enfermería que abra la llave de la Oxitocina al máximo, para que el útero se vuelva una piedra dura allá adentro y cierre todas las fugas de sangre. Has sobrevivido a lo peor.",
    "keyPoints": [
      "Tracción de cordón + Útero no se toca en abdomen + Bola carnosa asomando = Inversión Uterina.",
      "Secuencia de Rescate:",
      "Detener Uterotónicos.",
      "Dar Relajantes uterinos (Tocolíticos).",
      "Maniobra de Johnson (Empujar el fondo hacia arriba manualmente).",
      "Administrar Oxitocina solo después de la restitución anatómica."
    ]
  },
  {
    "id": "umng-conv-ed3-96",
    "university": "UMNG",
    "examArea": "INFECTOLOGÍA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un niño campesino de 8 años es llevado a su consultorio tras ser mordido en la pierna izquierda por un perro callejero sin dueño (de comportamiento errático y que se encontraba hurgando en la basura). La herida fue un desgarro único, sangrante. El perro huyó hacia la maleza y no fue posible capturarlo para observación. Además de realizar el lavado exhaustivo de la herida con abundante agua y jabón, y verificar su estado antitetánico, ¿cuál es el protocolo exacto y COMPLETO de Profilaxis Post-Exposición (PEP) que DEBE iniciar OBLIGATORIAMENTE en el servicio de urgencias para evitar una encefalomielitis letal al 100%?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar profilaxis antibiótica oral (Amoxicilina/Clavulanato) y una dosis de refuerzo de vacuna antirrábica únicamente.",
        "incorrectFeedback": "Cubrirlo solo con antibióticos lo protege de una celulitis, pero el virus de la Rabia viajará por el axón del nervio periférico directo a su cerebro. Cuando el virus llegue allá en 2 o 3 meses, el niño morirá ineludiblemente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar exclusivamente el esquema completo de la Vacuna Antirrábica en 4 dosis (días 0, 3, 7 y 14) en el deltoides del brazo.",
        "incorrectFeedback": "La vacuna sola NO alcanza a fabricar anticuerpos en las primeras horas cruciales tras una exposición Categoría III (ruptura de piel sangrante por un animal con alto riesgo). Darle solo la vacuna le da \"ventaja\" al virus, que puede treparse al nervio motor y esconderse del sistema inmune antes de que los anticuerpos surjan en 2 semanas. (Este esquema solo de vacuna se usa si la exposición fue Categoría II: solo un pellizco sin sangre o rasguño leve)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Aplicar Inmunoglobulina Antirrábica Humana (RIG) infiltrando la mayor cantidad posible DE FORMA LOCAL alrededor y dentro de la herida, Y administrar simultáneamente la 1ª dosis de la Vacuna Antirrábica en el brazo."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hospitalizar al paciente y esperar 10 días clínicos; si el niño desarrolla síntomas neurológicos o hidrofobia, iniciar el protocolo de Milwaukee.",
        "incorrectFeedback": "El ERROR IMPERDONABLE Y MORTAL. La Rabia no se espera. Si un niño presenta el primer síntoma neurológico (Fiebre, Hidrofobia/miedo al agua, Aerofobia/miedo a las corrientes de aire, espasmos rábicos o alucinaciones), significa que el virus llegó al cerebro y el niño ESTÁ MUERTO. El famoso protocolo de Milwaukee (coma inducido) tiene una tasa de fracaso casi del 99% y no reemplaza jamás a la profilaxis."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Profilaxis aguda para Virus de la Rabia.\r\n\r\nDato decisivo: Mordedura grave y transdérmica (Categoría III) por un animal sospechoso (perro callejero errático) que NO PUEDE SER OBSERVADO por 10 días (huyó).\r\n\r\nPrincipio clínico evaluado: El protocolo de \"Escudo Inmunitario Dual\" (Inmunoglobulina para atrapar el virus hoy + Vacuna para crear anticuerpos para mañana).\n\nEsta es una Exposición Categoría III (Herida sangrante por animal no ubicable). La letalidad del virus de la Rabia si llega al cerebro es del 100%. Debes blindar la herida en el sitio de los hechos. La directriz inquebrantable mundial exige terapia combinada OBLIGATORIA:\n\n**Trampa del examen:** ¿Dónde inyectar la Inmunoglobulina?: La trampa dorada en los exámenes. ¿Se pone IM en la nalga? NO. El mayor porcentaje de la Inmunoglobulina de Rabia se tiene que infiltrar DIRECTAMENTE EN LA HERIDA ABIERTA. El virus no está en la sangre circulando, el virus está esperando en el pedazo de músculo de la herida buscando uniones neuromusculares. Tú mandas el antídoto al mismo hoyo donde quedó la saliva del perro.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la saliva de este perro de la calle depositó millones de virus de la Rabia en los músculos desgarrados de la pierna del niño. Estos virus no usan la sangre para viajar; ellos buscan pacientemente el cable de un nervio motor de la pierna para \"treparlo\" de a 1 centímetro por día como un túnel secreto hasta llegar a su cerebro. Coge la aguja del suero de anticuerpos importados (Inmunoglobulina), pínchale profundo en los bordes rotos del mordisco y suelta toda la medicina bañando esa fosa con el escudo inmunitario. Ahogarás al virus antes de que encuentre el túnel del nervio. Y vacúnalo en el brazo de una vez. Y por el amor a la vida, NO le cosas la herida. Cose la herida de un perro rabioso y le sellarás el cuarto al virus para que trabaje a oscuras.",
    "keyPoints": [
      "Mordedura Categoría III (Atraviesa piel/Sangra) por perro no ubicable, murciélago o animal salvaje:",
      "Terapia OBLIGATORIA: Inmunoglobulina Antirrábica (Infiltrada LOCALMENTE en la herida) MÁS Vacuna Antirrábica (Días 0, 3, 7, 14 en el Deltoides)."
    ]
  },
  {
    "id": "umng-conv-ed3-97",
    "university": "UMNG",
    "examArea": "URGENCIAS UROLÓGICAS",
    "topic": "ONCOLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre joven de 25 años, estudiante universitario, acude a urgencias quejándose de una \"masita dura\" que se palpó él mismo en su testículo derecho mientras se duchaba. El paciente está sumamente preocupado. Refiere que la masa es completamente INDOLORA y que siente el testículo derecho un poco más pesado que el izquierdo. No hay fiebre, disuria ni antecedente de trauma. Al examen físico, usted palpa una masa firme, sólida y adherida al cuerpo del testículo derecho, no fluctuante, y que NO transilumina con la luz de una linterna. La ecografía escrotal revela una \"Masa sólida hipoecoica intraparenquimatosa altamente sugestiva de neoplasia testicular\". Usted solicita marcadores tumorales en sangre (Alfa-fetoproteína y Beta-hCG). Sabiendo que el diagnóstico principal es un Cáncer Testicular (Tumor de células germinales), ¿cuál es el procedimiento INMEDIATO a seguir y qué intervención está ESTRICTAMENTE PROHIBIDA y sería causal de mala praxis oncológica?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Realizar Biopsia Percutánea por punción transescrotal para confirmar histología / Está prohibida la cirugía radical sin biopsia previa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Llevar a quirófano para Orquiectomía Radical vía Inguinal de entrada / Está ABSOLUTAMENTE PROHIBIDA la biopsia transescrotal o la incisión del escroto."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar Quimioterapia neoadyuvante con BEP urgente / Está prohibido resecar el testículo antes de reducir el tumor.",
        "incorrectFeedback": "El testículo se extirpa PRIMERO. Luego el patólogo lo revisa y, dependiendo de si es seminoma o no seminoma y sus estadios, el oncólogo dará el esquema BEP (Bleomicina, Etopósido, Platino) después."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Realizar incisión del escroto para biopsia en cuña del testículo a cielo abierto / Está prohibido el abordaje inguinal alto en jóvenes."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Cáncer Testicular (Tumor de Células Germinales, ej. Seminoma o No Seminoma).\r\n\r\nDato decisivo: Hombre joven (20-35 años) + Masa testicular INDOLORA, firme, opaca + Masa sólida intraparenquimatosa por Ecografía.\r\n\r\nPrincipio clínico evaluado: El \"Dogma Intocable\" del escroto oncológico. La alteración trágica del drenaje linfático si se cruza la piel escrotal con un bisturí o aguja.\n\nUn testículo con masa sólida firme en un joven ES CÁNCER. Punto. La conducta universal y definitiva es la Orquiectomía Radical Inguinal Alta. El urólogo no toca la bolsa de las bolas. El cirujano hace una incisión altísima \"tipo hernia\" en el canal inguinal (abdomen bajo). Atrapa el cordón espermático, lo pinza fuerte y luego \"jala/succiona\" el testículo entero hacia arriba, sacándolo íntegro, empacado en su propia cápsula intacta, desde el abdomen. Así, saca la glándula mala de raíz sin romper su ecosistema cerrado.\n\n**Trampa del examen:** Exigir la Biopsia de oro: Durante 9 semestres te enseñaron \"El diagnóstico de oro de los tumores es la BIOPSIA DE LA MASA\". Te pondrán esa opción para ver si caes. Cáncer de Ovario y Cáncer Testicular SON LAS DOS EXCEPCIONES donde la biopsia con aguja te manda a la cárcel. Sacas el órgano completo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el testículo tiene un sistema de tuberías de seguridad aislada. Su drenaje viaja derecho por el ascensor principal hacia arriba de los riñones. Si un médico desinformado le clava una aguja por la piel de la bolsita porque tiene curiosidad de saber qué células hay adentro del tumor, le creará un hueco artificial que conectará el ascensor interno con las escaleras de emergencia de las ingles de la entrepierna. Ese joven tenía un cáncer encapsulado y curable al 95%. Por culpa de tu aguja, en dos meses tendrá pelotas de tumores podridos reventándole los ganglios linfáticos de las ingles y los muslos, cambiándole un buen pronóstico por uno letal. Manda a ese joven al urólogo y dile que entre por el abdomen como un ladrón de guante blanco.",
    "keyPoints": [
      "Masa testicular SÓLIDA e INDOLORA en joven (15-35 años) = Cáncer Testicular.",
      "Paso 1: Ecografía Doppler + Marcadores tumorales.",
      "Paso 2: Orquiectomía Radical INGUINAL (Corte arriba en abdomen bajo).",
      "CONTRAINDICACIÓN MAYOR (Mala praxis): Biopsia transescrotal o abordaje directo por el escroto (Siembra y disemina el cáncer a los ganglios inguinales)."
    ]
  },
  {
    "id": "umng-conv-ed3-98",
    "university": "UMNG",
    "examArea": "ÉTICA MÉDICA Y JURISPRUDENCIA",
    "topic": "CIRUGÍA DE URGENCIAS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Usted se encuentra de turno en solitario en urgencias de una zona de conflicto rural a las 2:00 AM. La policía ingresa de forma aparatosa trayendo a un hombre de 30 años, habitante de la calle y presunto miembro de un grupo delictivo, que acaba de recibir dos impactos de bala en el abdomen. El paciente ingresa INCONSCIENTE (Glasgow 3), chocado (PA 50/20 mmHg), sin familiares, sin conocidos, sin identificación alguna y no hay ningún representante legal ni nadie que pueda responder por él. La ecografía FAST de trauma es masivamente positiva en las 4 ventanas. Usted tiene cirujano general disponible en la clínica. Teniendo en cuenta la Declaración de Helsinki, el Código de Ética Médica de Colombia (Ley 23 de 1981) y el derecho a la autonomía del paciente frente al requerimiento del \"Consentimiento Informado\", ¿cuál de las siguientes acciones es LA ÚNICA ética y legalmente obligatoria en los próximos 5 minutos?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Abstenerse de operar al paciente hasta que la Policía o la Fiscalía logren contactar a un familiar o tutor legal para firmar el consentimiento de la cirugía, protegiéndose de futuras demandas por mala praxis en paciente no identificado.",
        "incorrectFeedback": "ERROR ÉTICO PENAL (Homicidio culposo por omisión / Denegación de asistencia médica). Retrasar un acto médico que salva la vida de alguien asfixiado o desangrándose porque \"estás esperando a la mamá que firme un papel\" es negligencia inexcusable."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Llevar INMEDIATAMENTE al paciente al quirófano para realizar una Laparotomía de Rescate Salvavidas, invocando el Principio de Beneficencia y el Estado de Necesidad, sin requerir firmas ni consentimiento de terceros."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Informar a los policías que, al no tener recursos legales para operar, usted solo administrará maniobras de RCP superficial hasta certificar la muerte, ya que un \"NN\" no puede autorizar su propio riesgo anestésico.",
        "incorrectFeedback": "Discriminar al paciente porque es \"NN\" o presunto criminal va en contra del Juramento Hipocrático (Principio de Justicia). El médico atiende a heridos, no a prontuarios judiciales. Si necesita cirugía, le das cirugía."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Conformar rápidamente un comité ético intrahospitalario telefónico de tres colegas (junta médica express) para validar y votar la excepción y así poder proceder con la firma conjunta a la cirugía exploratoria.",
        "incorrectFeedback": "Reunir juntas de ética (incluso telefónicas) cuando la presión está en 50/20 y el FAST rebosa de sangre es futilidad burocrática y resultará en que el paciente muera mientras tú deliberas."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Consentimiento Implícito (Tácito) en emergencias de la Ley 23 de 1981 (Código de Ética Médica Colombiana).\r\n\r\nDato decisivo: Paciente adulto en estado INCONSCIENTE (incapaz de decidir) + URGENCIA VITAL EXTREMA de cirugía inmediata + AUSENCIA de acudientes legales (NN).\r\n\r\nPrincipio clínico evaluado: El \"Estado de Necesidad\" de la urgencia frente al requisito documental burocrático. El papel no salva vidas, el bisturí sí.\n\nEn el contexto legal colombiano, prima el derecho a la VIDA. El consentimiento informado es un pilar sagrado de la autonomía, PERO tiene una excepción de oro: LAS URGENCIAS VITALES. Cuando un paciente está inconsciente (incapacidad total para tomar una decisión) y su vida corre un peligro inminente donde cada minuto cuenta, opera jurídicamente la Doctrina del Consentimiento Implícito y el Estado de Necesidad o Urgencia. La ley asume, bajo el Principio de Beneficencia, que cualquier persona cuerda y en sus cabales, en ese estado, elegiría vivir y permitiría que le salvaran la vida. Por tanto, el médico general y el cirujano toman la orden del bisturí de forma autónoma. Se mete al quirófano y se opera sin pedirle permiso a nadie. En la historia clínica se deja anotado \"Se ingresa de emergencia por choque severo sin familiares, amparados bajo estado de urgencia vital\". ¡Esa nota médica te blinda legalmente contra cualquier demanda futura!\n\n**Trampa del examen:** Miedo a los abogados: En nuestra generación, te meten el pavor de las demandas si \"tocas\" a un paciente sin que haya firmado 5 hojas notariadas. El evaluador prueba si el médico tiene el carácter y los conocimientos legales para sobreponer la vida inminente de un moribundo por encima de la protección de un formulario de admisión vacío.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu ética se prueba en las horas oscuras. Tienes a un hombre cuyo abdomen es una bolsa de agua con sangre, y su corazón no tiene ya qué bombear. No te pongas a buscar \"su historia clínica del sistema de salud a ver a qué EPS pertenece\" ni a decirle a los patrulleros que busquen a un vecino para que firme un folio. Si dejas morir a este hombre por cobardía legal, el juez dictaminará que violaste tu posición de garante, porque el deber sagrado del médico de turno es preservar la vida biológica por encima de las trabas administrativas. Lávate las manos, ponte la bata estéril, abre las puertas del pabellón de un patadón y corta esa barriga en nombre de la Beneficencia absoluta.",
    "keyPoints": [
      "En un paciente con Peligro de Vida INMINENTE + Inconsciente o Incapaz + SIN Familiares en el sitio:",
      "Se asume Consentimiento Implícito en base al Principio de Beneficencia y Urgencia.",
      "Se realizan TODAS las maniobras salvavidas (Intubación, Cirugía de trauma, Amputaciones si es preciso para vivir) OBLIGATORIAMENTE Y SIN PERMISO PREVIO DE NADIE."
    ]
  },
  {
    "id": "umng-conv-ed3-99",
    "university": "UMNG",
    "examArea": "PEDIATRÍA",
    "topic": "CIRUGÍA NEONATAL Y GASTROENTEROLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un recién nacido varón de 32 semanas de gestación (prematuro de bajo peso), se encuentra en la Unidad de Cuidados Intensivos Neonatales (UCIN) en su día 12 de vida. Desde ayer, las enfermeras lograron iniciar alimentación con leche de fórmula por sonda orogástrica a bajos volúmenes. Sin embargo, en el turno actual (10:00 AM), el neonato presenta un grave deterioro clínico súbito: luce ashen (gris/tóxico), presenta episodios de apnea con bradicardia (letargia), y ha presentado dos episodios de vómito alimentario con pintas oscuras (hemático). Al inspeccionar su abdomen, usted nota que está sumamente distendido (timpánico), doloroso y el flanco derecho presenta una coloración rojiza y edematosa en la pared. Al abrir el pañal, observa deposiciones escasas y un estriado de sangre fresca. Usted solicita una radiografía abdominal en dos posiciones (Decúbito supino y Rayo horizontal tangencial). El radiólogo, alarmado, le llama y le informa de la presencia patognomónica de Neumatosis Intestinalis y gas libre venoso en el trayecto de la vena porta hepática. ¿Cuál es el diagnóstico más letal y temido en esta patología que explica el curso catastrófico actual?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Íleo Meconial obstructivo por Fibrosis Quística.",
        "incorrectFeedback": "El íleo meconial cursa al nacer (primeros días) porque el meconio pegajoso no deja pasar nada. No presenta el inicio abrupto y tóxico de heces con sangre fresca al día 12 de vida ni presenta Neumatosis Intestinalis clásica en la Rx."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Enterocolitis Necrotizante (ECN) Estadio III avanzada."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Gastroenteritis viral aguda por Rotavirus con deshidratación.",
        "incorrectFeedback": "La diarrea viral huele mal, bota agua y la cuna se ensucia, pero la barriga no se \"pudre\" con necrosis de pared ni sangre macroscópica franca, además de no hacer neumatosis de gas en la pared de un niño en UCI neonatal estéril."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hemorragia de la matriz germinal intraventricular grado IV de prematuros.",
        "incorrectFeedback": "La hemorragia cerebral mata prematuros, SÍ (y da letargo/apneas), pero NO causa un cuadro inflamatorio rojo de abdomen a tensión y vómitos con sangre y heces patognomónicas."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Enterocolitis Necrotizante (ECN) Severa del Prematuro.\r\n\r\nDato decisivo: Bebé PREMATURO (riesgo altísimo) + Inicio de alimentación enteral rápida (fórmula) + Choque súbito con abdomen tenso y deposiciones con SANGRE + Firma radiológica oro: Neumatosis intestinalis y Gas en la vena Porta.\r\n\r\nPrincipio clínico evaluado: El flagelo quirúrgico del recién nacido prematuro que asalta a la UCIN cuando las mucosas isquémicas del intestino sufren invasión bacteriana y se pudren con gas.\n\nLa Enterocolitis Necrotizante (ECN) es el infierno de los prematuros. Sus intestinos inmaduros tienen mala irrigación. Si tú empiezas a alimentarlos agresivamente o con fórmulas hiperosmolares tempranas, las paredes del intestino sufren micro-isquemia. Las bacterias de las tripas encuentran la pared del colon e íleon muerta, invaden la mucosa y se la comen, produciendo gas (inflamación necrótica severa). La radiografía detecta estas \"burbujitas de gas\" atrapadas DENTRO de la pared de la tripa (esto es la firma y se llama Neumatosis Intestinalis). La necrosis destruye los vasos, provocando las deposiciones francas de sangre y volviendo la piel del abdomen rojo violáceo. Si el gas salta a la sangre y el hígado se infla de aire (gas en Vena Porta) o se revienta la tripa (Neumoperitoneo), el paciente clasifica como un ECN Estadio III (Avanzado de Bell) y requiere ayuno absoluto NPO por semanas, antibióticos tri-asociados inmediatos, y usualmente Cirugía Pediátrica Urgente de resecación de los metros de intestino podrido, o terminará en choque séptico y muerte de todos los órganos.\n\n**Trampa del examen:** Gas normal vs Gas Anormal: Ver aire en una radiografía de estómago e intestinos de un bebé es normal. Pero, ¿ver aire DIBUJANDO EL MARGEN EXTERIOR del intestino formando aritos de jabón a lo largo de las paredes? Eso es Neumatosis Intestinalis. La bacteria está fermentando gas en el cemento que pega los ladrillos del colon del niño.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., darle biberón por primera vez a un niño de 7 meses (32 semanas) de edad biológica es un reto. Su sistema inmunológico digestivo de la tripa está virgen y ciego. Al recibir comida pesada, las bacterias crearon una fiesta tóxica en su pared colónica, inflamándola tanto que los vasitos capilares se murieron de asfixia (isquemia e infarto de tripa). La pared negra podrida de esa tripa botó toda su sangre roja al pañal. ¡Apaga inmediatamente la sonda de alimentación para que no pase ni una gota de leche más! Cuelga líquidos en sus venas para nutrirlo, mete un tubo por la nariz de drenaje para sacar el aire y la leche podrida atrapada, y enciende los antibióticos de millón de pesos en infusión. Ese pedazo de tripa necrótica se curará solo con suerte, o el cirujano cortará la porción negra en las próximas 12 horas.",
    "keyPoints": [
      "Enterocolitis Necrotizante (ECN / NEC):",
      "Población reina: PREMATUROS (< 34 semanas) en la UCIN, cuando inician alimentación.",
      "Clínica: Abdomen distendido rojo + Vómitos + Heces con SANGRE fresca.",
      "Signo Radiológico Patognomónico: NEUMATOSIS INTESTINALIS (Burbujas en la pared intestinal) y Gas en la Vena Porta.",
      "Manejo Agudo: NPO (Nada por la boca Inmediato) + Sonda Descompresiva + Antibióticos (Vancomicina, Gentamicina, Metronidazol) + Quirófano pediátrico a laparotomía si perfora."
    ]
  },
  {
    "id": "umng-conv-ed3-100",
    "university": "UMNG",
    "examArea": "TOXICOLOGÍA",
    "topic": "REANIMACIÓN DE URGENCIAS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Una mujer de 35 años, conocida por usted en la consulta externa por un Trastorno Depresivo Resistente y Ansiedad, asiste a la sala de emergencias a las 4:00 AM traída por su esposo, quien la encontró inconsciente en el piso de la cocina rodeada de cuatro frascos completamente vacíos de una de sus múltiples medicaciones psiquiátricas. El esposo no está seguro del nombre exacto de la pastilla que vació. Al examinar a la paciente: Glasgow de 4, midriasis pupilar severa, piel caliente y roja, y no hay ruidos intestinales audibles (íleo paralítico por intenso síndrome anticolinérgico). Lo más crítico es la evaluación cardiovascular: la paciente se encuentra con una PA de 65/35 mmHg, pulso filiforme. El Monitor del Electrocardiograma muestra un ritmo mortal y espantoso: una Taquicardia Sinusal de 135 lpm, PERO con un ensanchamiento gigantesco y monstruoso del complejo QRS (que mide > 0.18 segundos) y una desviación del eje del corazón hacia la extrema derecha (eje \"noroeste\" de -150 grados), además de una onda R altísima en aVR. En el preciso momento de su lectura del papel del electro, el corazón de la mujer colapsa en arritmia letal ventricular (Fibrilación ventricular). Antes del choque eléctrico y la reanimación RCP, usted da una orden de oro, ¿Cuál fue la droga antidepresiva letal implicada, y cuál es el TRATAMIENTO ENDOVENOSO OBLIGATORIO ESPECÍFICO QUE SALVARÁ EL CORAZÓN DE ESTE PACIENTE revirtiendo el ensanchamiento del QRS?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Intoxicación masiva por Benzodiacepinas (Diazepam) / Bolo salvavidas de Flumazenil por la vena.",
        "incorrectFeedback": "Las benzodiacepinas no ensanchan el QRS nunca en la vida ni causan un síndrome anticolinérgico febril-rojo seco. Ellas solitas solo dan somnolencia y apneas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Intoxicación por Inhibidores de la Recaptación de Serotonina (Fluoxetina) / Bolo urgente de Ciproheptadina parenteral.",
        "incorrectFeedback": "Los ISRS (Sertralina, Fluoxetina) sobredosificados dan el famoso \"Síndrome Serotoninérgico\" (Fiebre, temblor, clonus brutal y diarrea, NO íleo paralítico seco). Y el QRS no se altera como firma primordial."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Intoxicación Aguda por Antidepresivos Tricíclicos (Amitriptilina / Imipramina) / Bolo rudo directo de Bicarbonato de Sodio al 8.4% (Alcalinización sanguínea)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Intoxicación por Bloqueadores de Calcio / Infusión de Gluconato de Calcio en megadosis y Glucagón sistémico.",
        "incorrectFeedback": "Los bloqueadores de calcio causarían bradicardia profunda (FC de 30 o bloqueos AV de 3er grado, no taquicardia) y la señora no tendría por qué estar roja, caliente y con pupilas dilatadas (es un cardiometabólico puro, no ataca al cerebro de esta forma colinérgica)."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Sobredosis aguda (y letal) de Antidepresivos Tricíclicos (ADT).\r\n\r\nDato decisivo: Tríada del ADT: Síndrome Anticolinérgico Severo (Roja, caliente, seca, pupila grande, coma) + Hipotensión / Convulsiones + LA FIRMA CARDIOLÓGICA LETAL: Complejo QRS Ensanchado progresivo (>0.10s hasta 0.20s) y una inusual Onda R altísima en aVR.\r\n\r\nPrincipio clínico evaluado: El bloqueo de los canales de sodio rápidos dependientes de voltaje en el sistema His-Purkinje del corazón, y su terapia química de reversión rápida alcalinizante (El último milagro toxicológico que te enseñan en el internado).\n\nEsta viñeta es la realeza del trauma toxicológico mundial. Los Antidepresivos Tricíclicos (ej. Amitriptilina, Imipramina, Clomipramina) son pastillas viejas pero efectivísimas y baratísimas. El problema es que una sobredosis de 15 a 20 de estas pastillas mata al paciente. La droga tiene múltiples disfraces:\n\n**Trampa del examen:** Manejar el corazón solo con masajes y choques: En este escenario de QRS ensanchado toxicológico, si solo das choques y Epinefrina y no le pones Bicarbonato, el paciente está clínicamente muerto, nunca revertirá de la taquicardia/fibrilación porque el canal seguirá tapado. Bicarbonato en ADT es el equivalente al O2 en un asfixiado.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cierra los ojos e instálate en el clímax de tu guardia de reanimación. Tienes enfrente una paciente caliente de fiebre alérgica, su corazón está fibrilando de dolor tóxico, y la máquina te está dibujando olas en forma de montañas aterradoras y lentas en el papel de impresión. Tienes tres enfermeros esperando tu orden maestra. Las pastillas de la depresión silenciaron sus neuronas y le apagaron la bomba celular del corazón. Si le clavas el desfibrilador ciegamente, vas a quemar células que solo están envenenadas y paralizadas. Tú eres el líder hoy, y sabes de fisiología profunda. Le gritas a tu equipo con una calma sepulcral: \"Pásele ya dos frascos de Bicarbonato en bolo directo, empuje toda la ampolla a la vena\". En dos minutos, vas a ver cómo la ola gigante que amenazaba su vida en el monitor verde se derrumba volviéndose un palito afilado, rápido y hermoso: un QRS sano y joven. Tu paciente recupera el latido, recupera la circulación de su cerebro y le entregas de nuevo la oportunidad que ella creyó no merecer, salvando su depresión con la maestría de tus manos médicas.",
    "keyPoints": [
      "Mujer / Paciente Psiquiátrico en Coma + Síndrome Anticolinérgico + ECG con TAQUICARDIA y QRS MUY ENSANCHADO = Intoxicación Severa por ANTIDEPRESIVOS TRICÍCLICOS (Amitriptilina).",
      "Signo inconfundible de peligro de arritmia y convulsiones en minutos: QRS > 0.10s o 0.12s.",
      "Tratamiento innegociable de RESCATE SALVAVIDAS OBLIGATORIO: Bicarbonato de Sodio Intravenoso 8.4% (Terapia Alcalinizante y de carga de Sodio)."
    ]
  }
];
