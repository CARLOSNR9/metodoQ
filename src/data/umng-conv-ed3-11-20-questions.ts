import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #3 (Simulacro 3) · Preguntas #11–#20.
 */
export const UMNG_CONV_ED3_11_20_QUESTIONS: TrainingQuestion[] = [
  {
    "id": "umng-conv-ed3-11",
    "university": "UMNG",
    "examArea": "MEDICINA INTENSIVA",
    "topic": "NEUMOLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre de 45 años, con un peso real de 120 kg (Obesidad Grado III) y una talla de 1.70 m, se encuentra en la Unidad de Cuidados Intensivos (UCI) bajo Ventilación Mecánica Invasiva por un Síndrome de Distrés Respiratorio Agudo (SDRA) severo secundario a una neumonía por Influenza. El médico de turno anterior configuró el ventilador mecánico con un Volumen Corriente (Volumen Tidal) de 960 mL, argumentando que calculó \"8 mL por cada kilogramo de peso del paciente (8 x 120 = 960)\". Usted recibe el turno y nota que el paciente está presentando picos de presión en la vía aérea altísimos y enfisema subcutáneo masivo (barotrauma inminente). Según las guías de protección alveolar (Protocolo ARDSnet), ¿cuál fue el error gravísimo de formulación ventilatoria que cometió el colega y qué cálculo exacto debió utilizar?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "El volumen corriente en el SDRA debe calcularse siempre a 10-12 mL/kg del peso real para vencer la rigidez pulmonar.",
        "incorrectFeedback": "Administrar volúmenes de 10 a 12 mL/kg era la práctica de los años 80. Esto causa \"Volutrauma\" (estallido de los alvéolos sanos remanentes por sobredistensión), aumentando la mortalidad por encima del 40%."
      },
      {
        "id": "B",
        "label": "B",
        "text": "En el SDRA, el volumen corriente debe calcularse a 6 mL/kg, pero utilizando el PESO PREDICTIVO (Ideal) basado en la talla, no el peso real."
      },
      {
        "id": "C",
        "label": "C",
        "text": "El volumen corriente estaba correcto, el error fue no instaurar una PEEP de 20 cmH2O desde el inicio.",
        "incorrectFeedback": "Una PEEP de 20 cmH2O es altísima y, sumada a ese volumen corriente gigantesco, causaría un colapso cardiovascular instantáneo (choque obstructivo severo)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Se debió utilizar el peso real del paciente, pero calculando a 4 mL/kg debido a la obesidad mórbida.",
        "incorrectFeedback": "Nunca se usa el peso real en pacientes obesos para ventilar volumen."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Síndrome de Distrés Respiratorio Agudo (SDRA) complicado con Barotrauma (Volutrauma) iatrogénico.\n\nDato decisivo: Uso del peso real (120 kg) en un paciente obeso para programar el ventilador mecánico.\n\nPrincipio clínico evaluado: El dogma universal de la Ventilación Mecánica Protectora: El tamaño de los pulmones NO crece cuando una persona engorda.\n\nEl ensayo clínico ARDSnet cambió la historia de la medicina intensiva. En un paciente con pulmones inflamados (SDRA), el volumen de aire que se le mete con la máquina debe ser muy bajo (Ventilación Protectora: 6 mL/kg) para no reventar los alvéolos frágiles. El error letal del colega fue multiplicar por el Peso Real de 120 kg. Los pulmones están diseñados para la altura de la persona, la grasa del abdomen y los muslos no respira. El cálculo OBLIGATORIO se hace con el Peso Predictivo o Ideal, que se saca exclusivamente con la talla del paciente (1.70 m = aprox. 66 kg de peso ideal para un hombre). El volumen correcto debió ser: 6 mL x 66 kg = 396 mL. ¡El colega le estaba metiendo casi 1 Litro de aire por respiración, estallándole el pulmón!\n\n**Trampa del examen:** Lógica matemática vs Fisiología: El examinador te da el peso real de 120 kg para tentarte a hacer multiplicaciones rápidas. Recuerda: en la UCI, el gordo de 120 kg y el flaco de 65 kg (si ambos miden 1.70m) tienen los pulmones exactamente del mismo tamaño.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., meterle 1.000 cc de aire a los pulmones tiesos y enfermos de este paciente es como intentar inflar un globo de agua a presión usando un compresor industrial; se va a reventar en tu cara. El colega que entregó el turno mató los alvéolos de este señor porque creyó que la grasa necesitaba oxígeno. La grasa no se ventila. Ajusta esa máquina a 400 mL, acepta que el CO2 se va a subir un poco (Hipercapnia permisiva), y deja que esos pulmones descansen. La UCI moderna protege el pulmón, no lo fuerza a trabajar.",
    "keyPoints": [
      "Ventilación Protectora en SDRA:",
      "Volumen Corriente (Tidal) = 6 mL / kg de PESO PREDICTIVO (Ideal).",
      "(El peso predictivo se calcula SÓLO con la estatura/talla, jamás con el peso en la báscula).",
      "Objetivo: Prevenir el Volutrauma y Barotrauma."
    ]
  },
  {
    "id": "umng-conv-ed3-12",
    "university": "UMNG",
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "URGENCIAS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Usted recibe en urgencias a una primípara de 24 años que tuvo un parto vaginal instrumentado con fórceps hace 4 horas debido a agotamiento materno y macrosomía fetal. La paciente se queja de mareo, palpitaciones y su bata está empapada en sangre roja brillante. Al examen físico, PA 85/50 mmHg, FC 125 lpm. Usted realiza inmediatamente la palpación abdominal y encuentra que el fondo uterino está a nivel de la cicatriz umbilical, firmemente contraído y duro (Globo de seguridad de Pinard presente). A la inspección visual externa, la paciente sigue presentando un sangrado vaginal continuo, \"en chorro o babeo activo\" de color rojo rutilante. Tras canalizar dos venas y pedir sangre, ¿cuál es el paso diagnóstico y terapéutico OBLIGATORIO en esta paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Realizar revisión instrumentada de la cavidad uterina (Curetaje) por sospecha de retención de restos placentarios.",
        "incorrectFeedback": "La retención de tejido (placenta) usualmente no permite que el útero se contraiga del todo bien, y el sangrado suele ser más oscuro con coágulos grandes. Meter una legra a ciegas sin ver el cérvix primero es saltarse el algoritmo y arriesgar perforación."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar Metilergonovina y dosis altas de Oxitocina IV asumiendo atonía uterina segmentaria.",
        "incorrectFeedback": "El útero ya está \"firmemente contraído y duro\" (Globo de Pinard). Dar más oxitocina o methergin a un útero que ya está apretado al máximo es inútil y no detendrá la hemorragia, porque la sangre no viene del miometrio."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Colocar especuloscopio bajo buena iluminación y revisar meticulosamente el canal vaginal y el cérvix."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Preparar a la paciente para Histerectomía obstétrica de urgencia por atonía refractaria.",
        "incorrectFeedback": "Quitar un útero sano y contraído para curar un desgarro en la vagina es una aberración quirúrgica y causal de demanda millonaria."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Hemorragia Posparto Temprana secundaria a Trauma / Desgarro del canal del parto.\n\nDato decisivo: Paciente con sangrado continuo rojo rutilante, antecedentes de parto traumático (fórceps y feto grande) + ÚTERO FIRMEMENTE CONTRAÍDO (descartando la Atonía Uterina).\n\nPrincipio clínico evaluado: La regla de las \"4 Ts\" de la hemorragia posparto: Tono (Atonía, 70%), Trauma (Desgarros, 20%), Tejido (Restos, 10%), Trombina (Coagulopatía, <1%).\n\nSi el útero está como una piedra (Tono normal) y la paciente se está desangrando en chorro vivo por la vagina (especialmente después de usar Fórceps o parir un niño de 4.5 kg), el diagnóstico es casi seguro un TRAUMA (Laceración o desgarro) del cuello uterino o de las paredes vaginales altas. El paso innegociable es pedir valvas o un espéculo grande, una lámpara potente, pinzas de Foerster (anillos) y buscar el desgarro. Una vez visualizado el vaso arterial sangrante en el cérvix, se le pone un punto de sutura (catgut) y el sangrado se detiene mágicamente en 1 minuto.\n\n**Trampa del examen:** El pánico de la hemorragia posparto: Te programan en la universidad para gritar \"¡Oxitocina y Masaje!\" ante cualquier mujer que sangre. El secreto de esta viñeta es que el útero ya está duro. Si el \"grifo principal\" está cerrado, la fuga viene de la tubería rota más abajo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., no le hundas el puño en la barriga a esta pobre mujer intentando hacerle más masajes uterinos, ¡su útero ya está hecho una roca! Los fórceps son como cucharas de metal; al sacar la cabeza gigante del niño, las cucharas cortaron la comisura del cuello del útero como un cuchillo caliente en mantequilla. Allí hay una arteria cervical abierta bombeando sangre a presión. Ábrela con un espéculo, ubica el borde rasgado, pínzalo y pásale un punto de sutura en \"X\". El sangrado se cortará de raíz y tú podrás respirar de nuevo.",
    "keyPoints": [
      "Hemorragia Posparto Continua (Roja brillante) + Útero Duro/Bien Contraído:",
      "Pensar SIEMPRE en: Desgarro del tracto genital (TRAUMA).",
      "Acción inmediata: Revisión con Espéculo y sutura de la laceración cervical/vaginal. (Factores de riesgo: Macrosomía, Fórceps/Espátulas, Parto precipitado)."
    ]
  },
  {
    "id": "umng-conv-ed3-13",
    "university": "UMNG",
    "examArea": "CARDIOLOGÍA",
    "topic": "URGENCIAS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre de 55 años, tabaquista pesado, acude a urgencias quejándose de dolor torácico opresivo, irradiado a mandíbula, acompañado de diaforesis profusa de 1 hora de evolución. Al examen físico, PA 130/80 mmHg, FC 85 lpm. Los pulmones están limpios y no hay soplos. Se le toma un Electrocardiograma (ECG) de 12 derivaciones estándar que NO muestra elevación del segmento ST en ninguna derivación. Sin embargo, llama la atención que en las derivaciones V1, V2 y V3 se observa un infradesnivel del segmento ST muy marcado, de convexidad superior, asociado a ondas R anormalmente altas y prominentes, y ondas T altas y simétricas (positivas). Las derivaciones de la cara inferior (II, III, aVF) están normales. Dada esta morfología \"extraña\" en las precordiales derechas, ¿cuál es el diagnóstico más certero y la acción inmediata OBLIGATORIA para no cometer un error de omisión letal?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Infarto Agudo Sin Elevación del ST (IAMSEST) de cara anteroseptal / Iniciar anticoagulación con Enoxaparina y pedir angiografía a 24 horas.",
        "incorrectFeedback": "El error más demandado en urgencias coronarias. Si lo tratas como un infarto \"sin elevación del ST\" (IAMSEST), lo dejarás anticoagulado en la camilla y pospondrás el cateterismo para el día siguiente. Pero en realidad, el paciente tiene una arteria 100% OCLUIDA AHORA MISMO. Su pared posterior se necrosará esta noche y hará una arritmia mortal si no abres la arteria de urgencia extrema."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hipertrofia de Ventrículo Derecho severa por cor pulmonale crónico / Solicitar ecocardiograma transtorácico electivo.",
        "incorrectFeedback": "La HVD da ondas R altas en V1, pero no asocia infradesnivel isquémico dinámico con T positivas, ni explica el cuadro de angina diaforética aguda de 1 hora de evolución."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Infarto Agudo de Miocardio POSTERIOR (IAMCEST Posterior) / Solicitar derivaciones V7, V8 y V9 inmediatas y preparar para reperfusión (Cateterismo urgente o Trombólisis)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Bloqueo de Rama Derecha de reciente comienzo / Considerar marcapasos profiláctico y enzimas cardíacas.",
        "incorrectFeedback": "El Bloqueo de rama derecha da QRS ancho (>0.12s) con patrón de orejas de conejo rSR', pero aquí el QRS es normal en duración y la clínica es isquémica."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Infarto Agudo de Miocardio con Elevación del ST (IAMCEST) de pared Posterior estricta (usualmente oclusión de la arteria Circunfleja o sus ramas).\n\nDato decisivo: Presencia en V1-V3 de \"Imágenes en Espejo\": Infradesnivel del ST profundo + Ondas R altas + Ondas T prominentes.\n\nPrincipio clínico evaluado: El infarto silencioso del electro estándar. Las derivaciones V1 a V3 \"miran\" la cara anterior. Lo que pase en la cara posterior del corazón se dibuja al revés en la cara anterior.\n\nEl corazón no tiene electrodos en la espalda en un ECG normal. Cuando la pared Posterior se infarta, no hay ningún electrodo que dibuje un Supra-ST. En cambio, los electrodos de enfrente (V1, V2, V3) ven el infarto \"al revés\" (Imágenes en Espejo). Un Supra-ST atrás se ve como un Infra-ST profundo adelante. Una onda Q necrosada atrás se ve como una onda R gigante adelante. Una onda T negativa isquémica atrás se ve como una T alta y picuda adelante. Es un IAMCEST oculto. La regla clínica de oro exige que le pidas a la enfermera que quite los cables del pecho, se los pegue en la espalda al paciente (V7, V8, V9) e imprima el papel. ¡Bingo! Verás el Supra-ST de 2 mm brillante en la espalda. Código Infarto, hemodinamia inmediata.\n\n**Trampa del examen:** IAMSEST Falso: Te muestran un paciente infartado, te dicen \"No hay Supra-ST\" y el instinto automático es dar Heparina y esperar. Las tres TRAMPAS del IAMSEST falso son: Infarto Posterior (Infradesnivel en V1-V3), Infarto de Tronco Izquierdo (Supra ST solo en aVR y depresión en el resto) y Bloqueo de Rama Izquierda nuevo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si pones a este señor en una esquina a esperar \"porque no tiene supra ST\", se va a morir infartado en tu guardia. Las derivadas V1 y V2 están mirando el corazón desde el esternón. Si atrás del corazón, pegado a la columna, hay un incendio con elevación del ST inmenso, las cámaras de adelante ven la imagen invertida (un hueco para abajo, es decir, el Infradesnivel). Voltea a tu paciente, pégale tres electrodos debajo de la escápula izquierda e imprime. Te apuesto la quincena a que en el papel de la espalda sale un supradesnivel del tamaño de una montaña. Es una arteria tapada al 100%. ¡Abre esa arteria ya!",
    "keyPoints": [
      "Infra-ST profundo en V1, V2, V3 con Ondas R altas en paciente con angina = INFARTO POSTERIOR (IAMCEST Oculto).",
      "Conducta: Pedir derivadas de la espalda (V7, V8, V9) y manejar como INFARTO CON ELEVACIÓN DEL ST (Cateterismo primario o trombólisis en menos de 120 minutos)."
    ]
  },
  {
    "id": "umng-conv-ed3-14",
    "university": "UMNG",
    "examArea": "PEDIATRÍA",
    "topic": "ALERGOLOGÍA Y GASTROENTEROLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un lactante masculino de 2 meses de edad, alimentado exclusivamente con leche materna desde el nacimiento, es llevado a su consulta externa de crecimiento y desarrollo. La madre, muy asustada, relata que en las últimas dos semanas ha notado \"hilos de sangre fresca y abundante moco\" en casi todos los pañales del bebé. Al interrogar y examinar al niño, usted encuentra que el lactante NO tiene fiebre, NO ha vomitado, se ríe y luce muy activo, y su curva de ganancia de peso es absolutamente PERFECTA y ascendente. El abdomen es blando y no hay fisuras anales. Teniendo en cuenta la clínica paradojal (\"sangre en heces en bebé feliz y gordito\"), ¿cuál es el diagnóstico más probable y la conducta terapéutica INICIAL indicada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Invaginación intestinal aguda / Solicitar ecografía abdominal urgente.",
        "incorrectFeedback": "La invaginación causa dolor de cólico desgarrador intermitente (llanto incontrolable), palidez, letargia y vómitos. Este niño está asintomático, feliz y subiendo de peso."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Proctocolitis Inducida por Proteínas Alimentarias (Alergia a la Proteína de Leche de Vaca - APLV) / Suspender estrictamente el consumo de lácteos en la dieta de la MADRE."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Gastroenteritis bacteriana por Shigella o Campylobacter / Iniciar antibiótico empírico (Azitromicina o Cefixima) y suero oral.",
        "incorrectFeedback": "Las diarreas bacterianas invasivas (disentería) dan fiebre, compromiso sistémico, deshidratación y mal aspecto tóxico. El niño está perfecto y sin fiebre."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Divertículo de Meckel / Remitir a Gammagrafía con Tecnecio-99m.",
        "incorrectFeedback": "El divertículo de Meckel da sangrado indoloro y masivo (color rojo oscuro), pero es el pico de presentación en niños de alrededor de 2 años (no de 2 meses) y no cursa con \"moco y estrías crónicas\" diarias."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Proctocolitis Alérgica (Hipersensibilidad no mediada por IgE a la proteína de leche de vaca).\n\nDato decisivo: Estrías de sangre y moco en las heces en un lactante asintomático, de apariencia sana y con excelente ganancia de peso (\"bebé feliz que sangra\").\n\nPrincipio clínico evaluado: El manejo dietario cruzado madre-hijo en las alergias alimentarias tempranas.\n\nLa Proctocolitis Alérgica Inducida por Proteínas (usualmente leche de vaca, pero también soya) es la principal causa de sangrado rectal en lactantes menores sanos. Las proteínas de la leche que se toma la madre logran pasar intactas a través de la leche materna. Al llegar al colon inmaduro del bebé, causan una inflamación eosinofílica localizada que rompe vasitos capilares (sangre y moco). A diferencia de otras alergias o enfermedades, este niño absorbe bien los nutrientes (crece y engorda normal) y no tiene afectación sistémica. El tratamiento NO ES SUSPENDER LA LACTANCIA MATERNA. La lactancia es sagrada. El tratamiento es poner a la MADRE en una dieta de exclusión estricta de lácteos (ni leche, ni queso, ni mantequilla, ni derivados vacunos) durante varias semanas. El sangrado en el pañal desaparecerá gradualmente en unos 3 a 7 días. (Si tomara fórmula, se cambia a una Extensamente Hidrolizada).\n\n**Trampa del examen:** Destetar por pánico: La trampa clásica de los pediatras de la vieja escuela es \"si le hace daño, quítele el pecho y dele leche de tarro de soya\". Falso. El 15% de los alérgicos a la leche también son alérgicos a la soya. La leche materna se protege a toda costa. Modificas a la madre, no al bebé.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., te va a llegar la mamá pálida y llorando con un pañal lleno de vetas de sangre viva, jurando que el bebé se está muriendo de úlceras. Tú miras al niño y está sonriéndote, regordete y hermoso. Respira aliviado. Esa sangre es solo inflamación local del último tramo del colon. Le preguntas a la señora: \"¿Usted toma mucho tinto con leche o quesito al desayuno?\", te dirá que sí. La proteína de la vaca de su desayuno llega intacta a la leche de sus senos y raspa el intestino de su bebé. Dile que la leche materna es el mejor remedio, que siga amamantando, pero que ella (la madre) tendrá que olvidarse del queso, la pizza y el yogurt por varios meses.",
    "keyPoints": [
      "Lactante (<6 meses) + Sangre/Moco en pañal + Bebé FELIZ y engordando = Proctocolitis Alérgica (APLV).",
      "Tratamiento: Restricción de Leche y derivados en la dieta de la MADRE. (Si usa fórmula: cambiar a Fórmula Extensamente Hidrolizada)."
    ]
  },
  {
    "id": "umng-conv-ed3-15",
    "university": "UMNG",
    "examArea": "TOXICOLOGÍA",
    "topic": "URGENCIAS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre de 68 años con múltiples antecedentes de cardiopatía isquémica, hipertensión y migraña es traído a urgencias en estado de coma (Glasgow 5). La familia refiere haberlo encontrado junto a varias cajas vacías de uno de sus medicamentos de control (intento suicida). Al examen físico, el paciente presenta hipotensión profunda refractaria (PA 60/40 mmHg) y bradicardia severa (FC 35 lpm). Los pulmones están limpios (ausencia de edema pulmonar o broncoespasmo). Un hallazgo cardinal en los paraclínicos de ingreso es una Glucometría de 280 mg/dL (Hiperglucemia) y acidosis metabólica láctica. El ECG evidencia bloqueo AV de segundo grado Mobitz I. Ante la falla al manejo con dosis máximas de fluidos, Atropina, Calcio intravenoso, Glucagón y vasopresores, ¿cuál es el tratamiento de rescate o \"Gold Standard\" actual que debe iniciarse INMEDIATAMENTE en infusión continua para revertir este choque letal?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Infusión rápida de Lípidos al 20% (Intralipid).",
        "incorrectFeedback": "La Emulsión lipídica intravenosa es un tratamiento milagroso, pero es específico para intoxicaciones por anestésicos locales liposolubles (ej. Bupivacaína, o intoxicación letal por amitriptilina de última línea)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Terapia de Hiperinsulinemia-Euglucemia (Altas dosis de Insulina Regular intravenosa con goteo de Dextrosa)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Infusión de Digibind (Fragmentos Fab Inmunes).",
        "incorrectFeedback": "Digibind es para la intoxicación por Digoxina, la cual cursaría con hiperkalemia (y las extrasístoles ventriculares o taquicardia bidireccional), no da hiperglucemia sostenida como pilar clínico inicial."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Marcapasos transvenoso y Hemodiálisis urgente.",
        "incorrectFeedback": "El marcapasos sube la frecuencia, pero la PA de 60/40 es por \"vasoplejia y choque inotrópico\", el corazón está débil, no solo lento. El Verapamilo tiene gran unión a tejidos y NO es dializable."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Intoxicación grave por Calcioantagonistas No Dihidropiridínicos (Ej. Verapamilo o Diltiazem).\n\nDato decisivo: Choque refractario + Bradicardia + HIPERGLUCEMIA franca (diferencia vital frente a la hipoglucemia de los betabloqueadores).\n\nPrincipio clínico evaluado: El manejo toxicológico avanzado en la sobredosis de calcioantagonistas usando el miocardio como órgano dependiente de carbohidratos bajo estrés.\n\nLos bloqueadores de canales de calcio (Verapamilo) hacen dos cosas: 1) Apagan la contractilidad y el nodo AV del corazón (Choque/Bradicardia). 2) Bloquean los canales de calcio del páncreas, impidiendo la liberación de insulina, causando la Hiperglucemia (el sello distintivo de esta intoxicación). El miocardio, en estado de choque profundo, deja de usar ácidos grasos y prefiere \"comer\" exclusivamente carbohidratos para sobrevivir. Como no hay insulina, la glucosa no entra al corazón, y el corazón se rinde. El tratamiento SALVAVIDAS y moderno (cuando falla el Calcio IV, fluidos y Glucagón) es la Terapia de Alta Dosis de Insulina-Euglucemia (HIE). Se administran megadosis de Insulina Regular IV (ej. bolo de 1 U/kg, luego infusión continua a 1-10 U/kg/h). La insulina actúa como el \"inotrópico positivo más potente del mundo\" en este escenario, abriendo las puertas de la célula miocárdica a los carbohidratos, despertando al corazón del choque. Se debe dar simultáneamente Dextrosa concentrada para evitar hipoglucemia (euglucemia) y vigilar el potasio.\n\n**Trampa del examen:** El miedo a la Insulina en el paciente no diabético: El estudiante lee \"Altas dosis de insulina\" y piensa: \"lo voy a matar de coma hipoglucémico\". La trampa es desconocer que la insulina en toxicología cardiovascular actúa como inotrópico, no solo como hormona metabólica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente tiene las compuertas de calcio del corazón selladas con cemento (Verapamilo). Ya le diste Calcio y Adrenalina, pero la célula está en huelga de hambre porque no puede agarrar el azúcar de la sangre (el páncreas se durmió). El corazón se está muriendo de debilidad. Cuando cuelgas esa bomba con dosis masivas de Insulina, estás forzando un puente de energía. La insulina patea las compuertas del miocardio, mete azúcar y potasio a la fuerza, y en 30 minutos vas a ver la presión arterial subir de 60/40 a 110/70. Es pura magia metabólica. Ten a la mano tus bolsitas de Dextrosa para que el cerebro no se quede sin azúcar mientras salvas al corazón.",
    "keyPoints": [
      "Choque + Bradicardia + Hiperglucemia (>200) = Sobredosis de Bloqueadores de Canales de Calcio (Verapamilo).",
      "(Si el paciente tuviera Hipoglucemia, sería sobredosis de Betabloqueadores).",
      "Tratamiento de oro en falla cardiogénica refractaria toxicológica: Terapia de Hiperinsulinemia-Euglucemia (HIET) (+ Calcio IV)."
    ]
  },
  {
    "id": "umng-conv-ed3-16",
    "university": "UMNG",
    "examArea": "CIRUGÍA GENERAL",
    "topic": "URGENCIAS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre de 65 años consulta por presentar un bulto en la región inguinal derecha que notó hace 5 años, pero que desde hace 6 horas se tornó repentinamente muy doloroso, duro y es imposible \"meterlo\" de nuevo en el abdomen a pesar de sus intentos. En urgencias, el paciente está pálido, taquicárdico (FC 115 lpm) y febril (38.8°C). Al examinar la región inguinal derecha, se palpa una masa tensa, pétrea, exquisitamente dolorosa que se extiende hacia el escroto. El hallazgo más alarmante es que la piel que recubre el bulto y el hemiescroto derecho se encuentra eritematosa, violácea, brillante y edematizada. Los laboratorios muestran Lactato sérico en 4.5 mmol/L. ¿Cuál es el paso INICIAL y definitivo que dictamina la buena praxis quirúrgica en este escenario agudo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Realizar maniobras manuales vigorosas de Taxis (masaje y reducción manual) usando analgesia y relajantes musculares.",
        "incorrectFeedback": "ERROR MORTAL DE URGENCIA. La maniobra de taxis (masajear y empujar la hernia de vuelta al abdomen) es maravillosa en hernias incarceradas recientes (<4 horas) sin signos de compromiso vascular. PERO si la piel está morada/roja, hay fiebre o dolor extremo, significa que el intestino adentro de ese saco ya está negro, gangrenoso y podrido (estrangulación). Si empujas ese intestino muerto de vuelta al abdomen a la fuerza: 1) Puedes estallar la pared necrosada regando heces en el peritoneo (peritoni"
      },
      {
        "id": "B",
        "label": "B",
        "text": "Suspender vía oral, hidratar, colocar paños fríos sobre el escroto y realizar ecografía inguinal para decidir conducta en 24h.",
        "incorrectFeedback": "Esperar con hielo una hernia estrangulada es negligencia; el intestino morirá y se perforará en las próximas 4 a 6 horas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Traslado INMEDIATO a quirófano para laparotomía o abordaje inguinal abierto sin intentos de reducción manual."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar antibióticos intravenosos y programar reparación laparoscópica ambulatoria con malla.",
        "incorrectFeedback": "En un campo contaminado/gangrenoso no se ponen mallas (material extraño) por regla general, ni es de manejo ambulatorio."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Hernia Inguinal Estrangulada con isquemia/necrosis intestinal en curso.\n\nDato decisivo: Bulto irreductible agudo + Taquicardia/Fiebre/Lactato alto + Piel violácea y eritematosa sobre el bulto.\n\nPrincipio clínico evaluado: La Contraindicación Absoluta de la maniobra de \"Taxis\" (reducción manual) en presencia de signos de estrangulación isquémica.\n\nEl diagnóstico es clínico de Hernia Estrangulada. El asa intestinal atrapada perdió irrigación venosa y arterial. Es una Emergencia Quirúrgica Inmediata. El paciente va a quirófano, se abre el saco de la hernia (abordaje inguinal o laparotomía si hay abdomen agudo), se revisa el color y viabilidad del intestino estrangulado. Si está negro y no revive con suero tibio, se corta el pedazo (resección intestinal y anastomosis) y se cierra el anillo inguinal (usualmente SIN malla sintética en primer tiempo por el altísimo riesgo de infección del material protésico en un campo contaminado por isquemia/bacterias).\n\n**Trampa del examen:** Creerse el quiropráctico de las hernias: Todo interno de urgencias quiere empujar el bulto y lucirse porque la hernia hace \"plop\" y entra. Las guías son estrictas: Si hay enrojecimiento, mora, o llevan muchas horas... TOCA EL QUIRÓFANO, NO LA MANO.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu mano izquierda puede volverse un arma letal si no miras antes de tocar. Si ese bulto en la ingle se ve como una berenjena morada y caliente, el pedazo de intestino que está ahí adentro ya no sirve, está muerto. Si haces fuerza como un animal y logras meter el pedazo podrido de vuelta al hueco de la barriga del paciente, acabas de esconder la evidencia de tu crimen. El paciente dejará de tener el bulto afuera, tú le darás de alta creyendo que lo curaste, y a la madrugada, ese intestino podrido se perforará dentro de su abdomen, desatando una peritonitis fecaloidea. Llama al cirujano para que abra, huela la gangrena, corte ese intestino podrido y lo conecte sano de nuevo.",
    "keyPoints": [
      "Hernia incarcerada (Atascada):",
      "Si tiene Piel Roja/Morada, Fiebre, Leucocitosis o Lactato alto = Hernia ESTRANGULADA.",
      "Manejo absoluto: Cirugía de EMERGENCIA Inmediata.",
      "CONTRAINDICACIÓN MAYOR: Maniobra de Reducción Manual (Taxis)."
    ]
  },
  {
    "id": "umng-conv-ed3-17",
    "university": "UMNG",
    "examArea": "MEDICINA INTERNA",
    "topic": "ENDOCRINOLOGÍA - ONCOLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre de 65 años, fumador pesado (índice paquete/año de 60), asiste a consulta con su médico internista quejándose de tos crónica, hemoptisis y gran letargia en la última semana. En los exámenes de laboratorio, la Creatinina es normal, la Glucosa es normal, y presenta un panel de electrolitos con: Potasio 4.0 mEq/L, Calcio 9.5 mg/dL, y un Sodio (Na+) francamente disminuido en 115 mEq/L. Al examen físico, el paciente no presenta edemas periféricos, no hay ingurgitación yugular y su presión arterial es normal (euvolemia clínica). Los estudios de orina revelan una Osmolaridad Urinaria inapropiadamente alta (>100 mOsm/kg) y un Sodio urinario elevado (>40 mEq/L). Se le toma una radiografía de tórax que evidencia una gran masa central perihiliar sospechosa. ¿Cuál es el diagnóstico sindrómico metabólico exacto y la primera medida terapéutica de base antes del uso de medicamentos antagónicos?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Síndrome Cerebro Perdedor de Sal por metástasis cerebrales / Reposición agresiva con bolos de Solución Salina Normal.",
        "incorrectFeedback": "El Cerebro Perdedor de Sal (típico en hemorragias subaracnoideas) da una hiponatremia severa, PERO el paciente orina galones de agua, por lo que cursa con HIPOVOLEMIA (Deshidratación marcada, taquicardia). Nuestro paciente está normovolémico (euvolémico)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Síndrome de Secreción Inadecuada de Hormona Antidiurética (SIADH) secundario a Carcinoma Pulmonar de Células Pequeñas / Restricción hídrica severa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Diabetes Insípida Central por compresión del tallo pituitario / Desmopresina (DDAVP) intranasal o intravenosa.",
        "incorrectFeedback": "La Diabetes Insípida es lo CONTRARIO. Falta ADH. El paciente orina agua pura sin parar (poliuria) y la sangre se queda sin agua, causando HIPERNATREMIA severa."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Insuficiencia Suprarrenal Aguda oculta por destrucción metastásica / Hidrocortisona a dosis de estrés urgente.",
        "incorrectFeedback": "La insuficiencia suprarrenal daría Hiponatremia con Hiperkalemia grave e Hipotensión masiva con deshidratación. Aquí el potasio y la presión están perfectos."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Síndrome de Secreción Inadecuada de Hormona Antidiurética (SIADH) paraneoplásico.\n\nDato decisivo: Hiponatremia Euvolémica (Na+ 115, pero el paciente NO está hinchado de edemas ni deshidratado seco) + Orina concentrada (Osm >100) + Masa pulmonar central en un gran fumador.\n\nPrincipio clínico evaluado: El síndrome paraneoplásico más común del Cáncer de Pulmón de Células Pequeñas (Oat cell carcinoma) y el manejo contraintuitivo de los líquidos en hiponatremia.\n\nEl Carcinoma Pulmonar de Células Pequeñas (Células en avena) es famoso por producir hormonas ectópicas falsas. En este caso, el tumor está escupiendo Hormona Antidiurética (ADH / Vasopresina) sin freno. La ADH ordena al riñón: \"¡Retén todo el agua!\". El cuerpo se inunda de agua libre, diluyendo el sodio en la sangre (Hiponatremia de 115). Como retiene agua, la orina que bota está densa y escasa (Osmolaridad urinaria alta). Curiosamente, el paciente no se hincha de edemas (euvolemia) porque mecanismos compensatorios (Péptido Natriurético Auricular) botan algo de sodio por la orina para balancear. Dado que la raíz del problema es un \"exceso de agua libre retenida\", el paso terapéutico inicial no es inyectarle sal a las malas, es RESTRICCIÓN HÍDRICA SEVERA (Dar menos de 800 - 1000 cc de agua al día). Si la restricción falla o tiene síntomas muy severos, se usan antagonistas de la vasopresina (\"Vaptanes\" como Tolvaptán) o Demeclociclina. (Solo si tiene convulsiones en urgencias se usaría Sodio Hipertónico al 3% en bolos pequeños, pero la restricción de agua es la base del SIADH).\n\n**Trampa del examen:** Darle sal al que le falta: El instinto novato en una hiponatremia crónica de 115 es colgar litros de Solución Salina Normal. En un SIADH, si tú le pones un litro de suero fisiológico (0.9%), el cuerpo se quedará con el litro de agua (por culpa de la hormona del tumor) y botará la sal por la orina. Mañana, en lugar de 115 de sodio, el paciente amanecerá en 110. ¡Prohibidos los líquidos de más en SIADH!\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este hombre tiene un \"tumor esponja\" en el pecho. Ese cáncer de pulmón fabrica Hormona Antidiurética y se cree el dueño del cuerpo. Le está diciendo a los riñones de este pobre señor: \"cierren las compuertas, que no salga una sola gota de agua\". El paciente está intoxicado por exceso de agua libre en sus venas, que ahogó y diluyó la sal (sodio). Si en tu ronda médica le formulas una botellita de agua o un suero extra, vas a hundir más su sodio y lo pondrás a convulsionar. Córtale el agua. Que beba lo mínimo vital, y usa medicamentos como los \"Vaptanes\" para pelear contra la orden del tumor en el riñón.",
    "keyPoints": [
      "Fumador con masa pulmonar + Hiponatremia + Euvolemia + Orina concentrada = SIADH paraneoplásico.",
      "Tumor culpable típico: Carcinoma de Células Pequeñas (Avena) de pulmón.",
      "Pilar del tratamiento base: Restricción Hídrica (Agua restringida <1L/día)."
    ]
  },
  {
    "id": "umng-conv-ed3-18",
    "university": "UMNG",
    "examArea": "PEDIATRÍA",
    "topic": "UROLOGÍA - ESCROTO AGUDO",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un niño de 10 años, estudiante sano, acude con su madre a urgencias infantiles quejándose de dolor en el testículo izquierdo de 24 horas de evolución. Refiere que el dolor empezó levemente y ha ido aumentando, pero nunca fue incapacitante, y niega dolor irradiado al abdomen o vómitos. A la inspección, el escroto no está masivamente inflamado, pero se evidencia un punto azulado visible a través de la piel tensa en el polo superior del testículo izquierdo (Signo del Punto Azul). Al rozar esta zona exacta superior, el niño se queja intensamente (dolor exquisito focal). Sin embargo, a la palpación general, el testículo tiene un eje longitudinal normal, no está ascendido en la bolsa, y al estimular la cara interna del muslo, el testículo se eleva rápidamente (Reflejo cremastérico PRESERVADO y positivo). Una ecografía Doppler de escroto, pedida por precaución, muestra flujo sanguíneo arterial NORMAL en ambos testículos. ¿Cuál es el diagnóstico clínico y la conducta de rigor a seguir?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Torsión Testicular verdadera intermitente / Llevar a exploración quirúrgica de urgencia en menos de 6 horas.",
        "incorrectFeedback": "En la torsión testicular real, el testículo rota ahorcando su cordón. El dolor es un relámpago incapacitante, hay vómito, el testículo yace horizontal/alto, el flujo en el eco Doppler está ausente, y lo más importante: El reflejo cremastérico está BOLIDO (ausente). Operar un testículo con reflejo conservado y flujo normal es un error iatrogénico grave."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Torsión del Apéndice Testicular (Hidátide de Morgagni) / Reposo, frío local, antiinflamatorios (AINEs) y observación."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Epididimitis bacteriana aguda por Chlamydia / Antibioticoterapia con Doxiciclina o Macrólidos.",
        "incorrectFeedback": "La epididimitis es rarísima en niños prepúberes sanos sin anomalías urológicas ni actividad sexual. Daría un cuadro más febril, disuria irritativa y edema duro posterior del epidídimo, no un foco \"azul\" en el polo superior."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Cáncer testicular incipiente en polo superior / Orquiectomía radical por vía inguinal diferida.",
        "incorrectFeedback": "El cáncer es indoloro, pétreo, crónico y no es un \"punto azul\" agudo de 24 horas que chilla al tacto."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Torsión del Apéndice Testicular.\n\nDato decisivo: Signo del Punto Azul (Blue dot sign) en el polo superior + Dolor focal con Reflejo Cremastérico Conservado (y flujo Doppler normal).\n\nPrincipio clínico evaluado: El diagnóstico diferencial semiológico supremo del escroto agudo en pediatría y cómo evitar cirugías innecesarias de urgencia.\n\nEl testículo tiene un pequeño colgajo de tejido vestigial en la parte superior llamado Apéndice Testicular (Hidátide de Morgagni). Este pedacito de carne (del tamaño de un grano de arroz) a veces se tuerce sobre sí mismo y se infarta. Al volverse negro por la isquemia, la necrosis se asoma a través de la piel escrotal formando un puntico azul oscuro (Signo del punto azul), patognomónico de esta entidad. El testículo real está sano, feliz y con buena sangre (por eso el eco sale normal y el reflejo del cremáster está intacto). Como el testículo no corre ningún peligro, NO SE OPERA. La hidátide muerta se momificará y reabsorberá sola. Se prescribe Reposo, hielo (frío local) y AINEs (Ibuprofeno) por 5 a 7 días.\n\n**Trampa del examen:** El pánico del cirujano: La regla urológica dice \"Ante dolor de huevo, abre el escroto\". Pero la excepción mundial es cuando puedes ver la hidátide muerta (Signo del punto azul) y corroboras que el reflejo del cremáster sube el huevo vivo. Abrir a este niño lo expone a perder el testículo por una infección postquirúrgica inútil.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., no le pases el bisturí a una bolsa que no lo necesita. Las mamás entran en pánico porque oyeron en las noticias que a los niños se les \"mueren\" los testículos y hay que castrarlos si no se operan en 6 horas. Tienen razón en el miedo, pero tú tienes la ciencia. Rasca la parte interna del muslo del niño; si ves que la bolsa escrotal se contrae y el testículo sube rápido, ese músculo y ese nervio están bañados en sangre caliente y viva (descartas torsión severa). Pon una linterna contra la piel de arriba; si ves un frijolito negro/azul trasluciendo la piel, te acabas de ahorrar un viaje al quirófano a media noche. Mándalo a la casa con Advil y calzoncillo ajustado, y que duerma tranquilo.",
    "keyPoints": [
      "Dolor testicular focal superior + Reflejo Cremastérico POSITIVO + Eco Normal + Signo del Punto Azul = Torsión del Apéndice Testicular.",
      "Tratamiento: Manejo conservador (Reposo + AINEs). ¡Prohibida la exploración quirúrgica de urgencia!"
    ]
  },
  {
    "id": "umng-conv-ed3-19",
    "university": "UMNG",
    "examArea": "TRAUMA",
    "topic": "UROLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un joven de 16 años llega a urgencias caminando con dificultad, quejándose de dolor insoportable en el periné y sangrado. Él relata que mientras realizaba un truco patinando en una barra de metal en el parque, perdió el equilibrio y cayó violentamente con las piernas abiertas (\"caída a horcajadas\"), golpeándose fuertemente la región perineal contra la barra dura de hierro. A la inspección, se observa un hematoma masivo en forma de mariposa que abarca el periné inferior y la parte posterior del escroto. Usted documenta presencia de sangre viva goteando del meato uretral (uretrorragia). Se sospecha una lesión uretral. Siguiendo el protocolo, se realiza una Uretrografía Retrógrada de urgencia. La placa radiológica confirma una ruptura total de la uretra, observándose que el medio de contraste se escapa y se acumula en la región del periné y del escroto, PERO no se dibuja ni pasa hacia el interior de la cavidad pélvica profunda ni hacia la vejiga (no cruza la fascia urogenital). ¿Cuál es el segmento anatómico exacto de la uretra que resultó lesionado en este mecanismo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Uretra prostática."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Uretra membranosa (Uretra posterior).",
        "incorrectFeedback": "La uretra membranosa y prostática componen la Uretra Posterior. El mecanismo clásico de su ruptura es el Accidente de Tránsito con Fractura Compleja de Pelvis. La pelvis ósea se rompe, y los huesos cortan la uretra como guillotina (por encima del diafragma urogenital). En la radiografía verías la \"próstata flotante\" y el contraste inyectado subiría y mancharía el espacio retroperitoneal pélvico de la barriga (por encima del periné)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Uretra bulbar (Uretra anterior)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Cuello vesical y esfínter interno."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Trauma Uretral (Clasificación anatómica por imagen).\n\nDato decisivo: Mecanismo de caída con piernas abiertas (\"a horcajadas\") + Sangre en meato + Contraste fugando y contenido en el periné/escroto (sin ascender a la pelvis).\n\nPrincipio clínico evaluado: El diagnóstico anatómico del trauma uretral y sus dos grandes categorías: Anterior (Bulbar) vs Posterior (Membranosa/Prostática).\n\nLa uretra Anterior (cuyo segmento principal es la Uretra Bulbar) desciende por debajo de la fascia del piso pélvico (diafragma urogenital). Es el tubo que va colgado por debajo, muy cerca de la piel del periné. Su mecanismo patognomónico mundial es la caída con las piernas abiertas (Golpe a horcajadas en bicicleta, patineta o cerco de madera). El tubo de la uretra es \"aplastado\" y reventado brutalmente entre el tubo de metal de la patineta por debajo y la dura sínfisis púbica por arriba. Al estar por debajo de la fascia densa profunda (fascia de Colles y diafragma), si se rompe, la orina y la sangre se riegan libremente hacia el escroto, el pene y el periné (hematoma en mariposa o de alas de gaviota), pero la fascia fuerte le impide a la orina trepar hacia la cavidad de la pelvis por arriba. En la Uretrografía, la extravasación se ve estancada \"abajo\" en el periné sin subir al abdomen. (Tratamiento: NO PONER SONDA, derivar orina con Cistostomía suprapúbica).\n\n**Trampa del examen:** Las dos uretras del trauma: Nunca las confundas.\n\nAccidente de Auto + Hueso de la pelvis roto = Trauma de Uretra POSTERIOR (Membranosa).\n\nCaída en bicicleta/patineta (A horcajadas) = Trauma de Uretra ANTERIOR (Bulbar).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la anatomía masculina tiene un diseño cruel para los patinadores. El tubo de orina pasa colgando justo detrás de la base del pene, apenas cubierto por piel fina en el perineo. Arriba de él, hay un muro de hueso denso (la sínfisis del pubis). Cuando este muchacho calculó mal su salto, todo su peso cayó empujando el metal contra sus partes íntimas. La uretra quedó prensada como un gusano aplastado por una roca, estallando en dos. Sangre en la ropa interior significa NO METER MANGUERAS por ahí, porque vas a ensartar el tubo en el músculo dañado y lo vas a rematar. Clávale el catéter directamente a la vejiga a través del vello del abdomen, deja que cicatrice el conducto solo por dos meses y remítelo a cirugía reconstructiva de urología.",
    "keyPoints": [
      "Sangre en el meato uretral + Caída con piernas abiertas (Golpe a horcajadas) = Ruptura de la Uretra Bulbar (Anterior).",
      "Signo clínico: Hematoma en alas de mariposa en el periné/escroto.",
      "Imágenes (Uretrografía): Fuga de contraste confinada al periné, inferior al diafragma urogenital."
    ]
  },
  {
    "id": "umng-conv-ed3-20",
    "university": "UMNG",
    "examArea": "PSIQUIATRÍA",
    "topic": "TOXICOLOGÍA DE URGENCIAS - ¡EL REMATE DEL LOTE 8!",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un ejecutivo de finanzas de 45 años, con antecedentes de un trastorno depresivo persistente en manejo por psiquiatría externa, asiste a un cóctel de gala en el cual consumió abundantes vinos tintos madurados, quesos añejos, salchichas curadas y arenque ahumado. Dos horas después del evento, el paciente llega a urgencias en estado de pánico, con una sudoración fría incontrolable, palpitaciones explosivas y refiriendo \"un dolor de cabeza palpitante en la nuca que me va a reventar el cerebro\". Al ingreso: PA de 235/135 mmHg, FC de 125 lpm y midriasis leve. En urgencias, su esposa logra recordar que él estaba tomando un antidepresivo viejo y difícil que le habían importado hace unos meses, llamado Tranilcipromina (o Fenelzina). ¿Cuál es la fisiopatología metabólica letal de esta crisis y cuál es el medicamento de control intravenoso de elección inmediata?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Crisis de Abstinencia alcohólica cruzada / Benzodiacepinas.",
        "incorrectFeedback": "La ingesta es muy reciente y abundante, no hay abstinencia, y no encaja con el fármaco implicado letalmente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Síndrome Anticolinérgico severo / Fisostigmina intravenosa urgente.",
        "incorrectFeedback": "No hay rubor masivo, ni sequedad extrema (el paciente está diaforético, es decir, sudando por la adrenalina, lo opuesto a la sequedad anticolinérgica), ni retención urinaria como ejes dominantes de un síndrome atropínico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Crisis Hipertensiva por interacción Tiraminérgica (\"Efecto Queso\") / Fentolamina intravenosa o Nitroprusiato."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Síndrome de Secreción Inadecuada de Serotonina / Ciproheptadina oral rápida.",
        "incorrectFeedback": "El síndrome serotoninérgico se da al mezclar IMAO con ISRS (Fluoxetina) o Tramadol (dando fiebre, clonus masivo). El \"Efecto Queso\" da es una crisis Hipertensiva noradrenérgica pura, no fiebre y clonus, sino crisis hipertensiva."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Crisis Hipertensiva por Inhibidores de la Monoaminooxidasa (IMAO).\n\nDato decisivo: Consumo de alimentos con altas concentraciones de Tiramina (vinos maduros, quesos añejos, carnes curadas) + Paciente usando un IMAO clásico (Tranilcipromina/Fenelzina/Isocarboxazida) + Tormenta adrenérgica fulminante (PA 235/135 y cefalea occipital severa).\n\nPrincipio clínico evaluado: El infame \"Efecto Queso\" o reacción Tiraminérgica (una de las interacciones fármaco-alimento más mortales documentadas).\n\nLos IMAOs tradicionales (Tranilcipromina) actúan bloqueando permanentemente a la enzima Monoaminooxidasa (MAO) en el cerebro y en el intestino. La función de la MAO en el intestino es destruir una sustancia química presente en las comidas añejadas, podridas o fermentadas (quesos, embutidos y vinos oscuros) llamada TIRAMINA. Como el paciente tomó el IMAO, su intestino no pudo destruir la tiramina del banquete. Esta tiramina cruzó intacta a la sangre, viajó a los nervios y actuó como una bomba liberadora de toneladas de Noradrenalina (Adrenalina). El exceso brutal de noradrenalina causa una Crisis Hipertensiva Simpaticomimética letal (por eso la presión vuela a 235/135 y la cabeza duele como si fuera a estallar por riesgo de hemorragia subaracnoidea inminente). El antídoto y manejo base es dilatar las arterias cerradas de inmediato con un bloqueador Alfa de acción rápida (Fentolamina IV) o en su defecto Labetalol o Nitroprusiato, para evitar que la presión rompa un vaso en el cerebro.\n\n**Trampa del examen:** La farmacología psiquiátrica clásica: Los inhibidores de la MAO casi no se recetan hoy en día por este mismo peligro, pero siguen siendo evaluados intensamente en exámenes. Si ves las palabras \"Queso, Vino, Embutido\" pegadas a \"Crisis Hipertensiva\", no dudes, es la vieja trampa de las tiraminas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los psiquiatras dejaron de usar las pastillas IMAO porque sus pacientes se morían de derrame cerebral si iban a una cena italiana. El vino y el queso curado están llenos de \"Tiramina\", que es prima hermana de la Adrenalina. Todos nosotros nos comemos un trozo de queso azul y no pasa nada porque nuestra enzima MAO intestinal destruye la toxina antes de que entre al cuerpo. Pero este ejecutivo se tomó la pastilla que aniquiló a su enzima guardiana. Ahora su cuerpo está nadando en un infierno de adrenalina externa disparada desde su estómago, cerrándole las arterias como tubos de acero. Abre la válvula de la Fentolamina rápido para ensanchar esos tubos o tendrás que llamar a neurocirugía cuando se le rompa la aorta o una arteria cerebral en la camilla de urgencias.\n\n¡LOTE 8 DESTRUIDO CON ÉXITO!\nYa tienes en la cabeza el dogma de que a la uretra rota no se le pasa sonda, que el diafragma callado es un traidor mortal, y que el queso con vino puede ser el último platillo de un psiquiátrico.\n\nToma un buen sorbo de aire fresco. Estás puliendo los diamantes de tu conocimiento. ¡Avísame y liberamos el Lote 9 (Preguntas 81 a 90) para acercarnos a la gloria total!\n\nLote 3 (Preguntas 21 a 30)\n\n¡La máquina no tiene frenos, colega! Adentrarse en el Lote 3 (Preguntas 21 a 30) del tercer simulacro es la prueba de fuego de tu resistencia.\n\nEn este bloque vamos a destrozar los \"puntos ciegos\" de la medicina de urgencias: complicaciones que se disfrazan de infecciones, toxicologías raras de quirófano y ortopedia pediátrica donde la radiografía te miente en la cara. La Universidad Militar (UMNG) y la Nacional castigan a los que actúan por reflejo. Aquí se premia al que razona.\n\nActivo mi modo PROMPT MAESTRO / DR. Q. ¡Bisturí a la obra!",
    "keyPoints": [
      "Antidepresivo IMAO (Fenelzina / Tranilcipromina) + Quesos Añejos / Vino tinto (Alimentos con TIRAMINA) = Crisis Hipertensiva Letal (\"Efecto Queso\").",
      "Clínica: Presión arterial masiva + Cefalea pulsátil nucal.",
      "Tratamiento agudo: Fentolamina IV o Nitroprusiato de Sodio (Bloqueadores Alfa / Vasodilatadores potentes)."
    ]
  }
];
