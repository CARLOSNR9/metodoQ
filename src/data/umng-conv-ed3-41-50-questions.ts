import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #3 (Simulacro 3) · Preguntas #41–#50.
 */
export const UMNG_CONV_ED3_41_50_QUESTIONS: TrainingQuestion[] = [
  {
    "id": "umng-conv-ed3-41",
    "university": "UMNG",
    "examArea": "MEDICINA TROPICAL",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un niño de 4 años, procedente de un área rural del departamento de Sucre, es traído por su madre por un cuadro de 2 meses de evolución de fiebre prolongada, pérdida de peso severa (caquexia), palidez y un crecimiento abdominal desproporcionado. Al examen físico, el niño luce desnutrido, con PA 90/50 mmHg, FC 120 lpm. El abdomen es globoso y se palpa una esplenomegalia masiva que cruza la línea media y llega hasta la fosa ilíaca derecha, asociada a hepatomegalia. Los laboratorios muestran Pancitopenia severa (Hb 6.0 g/dL, Leucocitos 1.500, Plaquetas 40.000) y una hipergammaglobulinemia policlonal masiva. El frotis de sangre periférica para malaria es negativo. ¿Cuál es la prueba de oro (Gold Standard) para confirmar el diagnóstico y cuál es el tratamiento de primera línea avalado por la OMS y el Ministerio de Salud para este niño?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Aspirado de médula ósea evidenciando amastigotes intracelulares / Anfotericina B Liposomal."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Biopsia de ganglio linfático evidenciando células de Reed-Sternberg / Quimioterapia (Esquema ABVD).",
        "incorrectFeedback": "El Linfoma de Hodgkin da síntomas B (fiebre, pérdida de peso) y adenopatías, pero la esplenomegalia masiva cruzando la línea media y la pancitopenia tan agresiva apuntan a invasión medular parasitaria directa en el trópico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Gota gruesa seriada evidenciando esquizontes / Artesunato intravenoso.",
        "incorrectFeedback": "La malaria crónica (Síndrome de Esplenomegalia Tropical) se descarta por la gota gruesa negativa y el cuadro crónico tan específico con hipergammaglobulinemia masiva."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Coprológico evidenciando huevos con espina lateral / Praziquantel.",
        "incorrectFeedback": "El Schistosoma mansoni da esplenomegalia y fibrosis periportal, pero no produce pancitopenia primaria por invasión medular, además de ser endémico en África/Brasil, pero muy raro en Colombia."
      }
    ],
    "correctOptionId": "A",
    "explanation": "Enfermedad sospechada: Leishmaniasis Visceral (Kala-Azar), causada por Leishmania infantum / chagasi.\n\nDato decisivo: Tríada clásica infantil en zona endémica (Costa Atlántica colombiana): Fiebre prolongada + Esplenomegalia masiva + Pancitopenia.\n\nPrincipio clínico evaluado: Diferenciación entre malaria y leishmaniasis visceral, y el uso de un fármaco nefrotóxico optimizado (Liposomal) en pediatría.\n\nLa Leishmaniasis Visceral (Kala-Azar) es transmitida por el mosquito Lutzomyia (pito de tierra). El parásito invade el sistema reticuloendotelial (médula ósea, bazo, hígado). Al invadir la médula ósea, causa una falla en la producción de todas las líneas celulares (Pancitopenia). El bazo trabaja tanto tratando de destruir al parásito que crece de forma monstruosa (Esplenomegalia gigante). La prueba diagnóstica de elección es el Aspirado de Médula Ósea (o punción esplénica, pero es muy riesgosa por sangrado), donde se observan los macrófagos llenos de parásitos sin flagelo (amastigotes). El tratamiento de primera línea, especialmente en niños, embarazadas y pacientes graves, es la Anfotericina B Liposomal, ya que es altamente fungicida/parasiticida y su envoltura lipídica protege al riñón del niño de la nefrotoxicidad.\n\n**Trampa del examen:** El desvío hacia la Leucemia: Un niño pálido, sangrando (plaquetas bajas) y con el bazo gigante hace que cualquier pediatra en Bogotá piense en Leucemia Linfoblástica Aguda. El examinador te pone la procedencia (Sucre/Córdoba/Trópico) para que antes de llamar al oncólogo, busques al parásito.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., a este pobre niño el parásito se le metió literalmente hasta los tuétanos. Sus huesos ya no fabrican glóbulos rojos porque la médula ósea es un nido de Leishmania. Su barriga parece la de una embarazada porque el bazo le llega hasta la pelvis intentando filtrar la sangre infectada. Si le metes una aguja en el hueso de la cadera, verás en el microscopio a los macrófagos a punto de reventar llenos de punticos (los amastigotes). Sálvale la vida colgando Anfotericina B Liposomal. Cuesta muchísimo dinero, sí, pero es la única que matará al bicho sin freírle los riñones al niño en el intento.",
    "keyPoints": [
      "Tríada de Kala-Azar (Leishmaniasis Visceral): Fiebre + Pancitopenia + Esplenomegalia Gigante.",
      "Diagnóstico: Amastigotes en Aspirado de Médula Ósea.",
      "Tratamiento de elección: Anfotericina B Liposomal (Glucantime es segunda línea o para la cutánea)."
    ]
  },
  {
    "id": "umng-conv-ed3-42",
    "university": "UMNG",
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "MEDICINA PREVENTIVA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Una mujer de 32 años (G2P1) asiste a su control prenatal en la semana 12 de gestación. Usted revisa su historia clínica y nota que en su primer embarazo, hace 3 años, la paciente presentó un cuadro grave de Preeclampsia Severa que requirió desembarazarla de urgencia a la semana 32. Actualmente, la paciente es obesa (IMC 32), su presión arterial en la consulta es normal (110/70 mmHg) y no hay proteinuria. Con base en la medicina basada en la evidencia (Guías ACOG/FIGO) para la prevención primaria de trastornos hipertensivos del embarazo, ¿cuál es la intervención farmacológica OBLIGATORIA que debe instaurarse en esta paciente en este preciso momento (entre las 12 y 16 semanas)?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar Labetalol oral a dosis bajas para mantener la presión arterial controlada preventivamente.",
        "incorrectFeedback": "Los antihipertensivos (Labetalol, Nifedipino) se usan para TRATAR la hipertensión arterial ya instaurada, NO previenen la aparición de preeclampsia ni mejoran la remodelación placentaria defectuosa temprana."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar Ácido Acetilsalicílico (Aspirina) a dosis de 100-150 mg diarios por vía oral, administrada por la noche."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Prescribir Sulfato de Magnesio en tabletas orales como suplemento diario hasta el parto.",
        "incorrectFeedback": "El magnesio oral no previene la preeclampsia. El sulfato de magnesio intravenoso se da DURANTE la preeclampsia severa instaurada para prevenir convulsiones (eclampsia)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Recomendar reposo absoluto en cama y restricción estricta de sal en la dieta.",
        "incorrectFeedback": "El reposo en cama y la restricción de sal son mitos obsoletos de la obstetricia. No previenen la preeclampsia y sí aumentan el riesgo de trombosis venosa profunda materna."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Profilaxis de Preeclampsia en paciente de Alto Riesgo.\n\nDato decisivo: Antecedente de Preeclampsia en embarazo anterior que requirió parto pretérmino + Obesidad + Semana 12 de gestación.\n\nPrincipio clínico evaluado: La fisiopatología de la placentación anómala y el uso de antiagregantes para prevenir el desequilibrio entre tromboxano y prostaciclina.\n\nLa paciente tiene un factor de ALTO RIESGO (Preeclampsia previa pretérmino). La fisiopatología de la preeclampsia ocurre en el primer trimestre, cuando las arterias espirales del útero no se remodelan bien, causando isquemia placentaria y liberación de factores tóxicos que dañan el endotelio de la madre. El estudio ASPRE demostró de forma abrumadora que dar Aspirina (Ácido Acetilsalicílico) a dosis bajas (100 a 150 mg/día) a partir de las 12 a 16 semanas de gestación (antes de que termine la invasión trofoblástica) y administrarla preferiblemente por la noche, reduce el riesgo de preeclampsia severa temprana en un >60%. Actúa inhibiendo la producción de Tromboxano A2 en las plaquetas, favoreciendo la vasodilatación y previniendo microtrombos en la placenta.\n\n**Trampa del examen:** Miedo a los AINEs en el embarazo: Todo estudiante sabe que el Ibuprofeno o la Aspirina en el tercer trimestre cierran el conducto arterioso del feto y dan oligohidramnios. La trampa es no saber que la \"dosis baja\" de Aspirina (100 mg) no tiene ese efecto teratogénico/vascular fetal adverso y es el único pilar preventivo avalado mundialmente.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la preeclampsia no es una enfermedad de la presión, es una enfermedad de una placenta defectuosa. Si tú esperas a que a esta señora se le suba la presión a las 30 semanas para darle pastillas, ya perdiste la guerra. Tienes que intervenir la placenta AHORA, cuando se está construyendo (semana 12). La \"Aspirineta\" todas las noches vuelve la sangre un poquito más delgada y evita que las venitas minúsculas de la placenta se tapen de coágulos, permitiendo que crezca sana. Es una pastilla de 100 pesitos que le salvará la vida a la madre y le evitará a ese bebé nacer de 6 meses directo a una incubadora.",
    "keyPoints": [
      "Factor de ALTO Riesgo para Preeclampsia (Preeclampsia previa, DM tipo 1/2, HTA crónica, SAF, Lupus, Gemelar) =",
      "Profilaxis OBLIGATORIA: Aspirina 100-150 mg/día.",
      "Momento de inicio: Entre la semana 12 y 16.",
      "(Si se inicia después de la semana 20, su efectividad cae drásticamente)."
    ]
  },
  {
    "id": "umng-conv-ed3-43",
    "university": "UMNG",
    "examArea": "TRAUMA",
    "topic": "NEUROLOGÍA Y NEUROCIRUGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre de 25 años ingresa a urgencias de un hospital de trauma tras haber sufrido una zambullida (clavado) en una piscina de baja profundidad, impactando la parte frontal de su cabeza contra el fondo. El paciente sufrió un mecanismo de hiperflexión cervical severa. Al recuperar la conciencia, se encuentra hemodinámicamente estable, pero no puede mover las extremidades inferiores (paraplejía 0/5) ni superiores (0/5). Al examen sensitivo, el paciente es absolutamente incapaz de sentir el dolor de un pinchazo de aguja ni la temperatura en ambas piernas y el tronco, desde el cuello hacia abajo. Sin embargo, al aplicarle un diapasón en los maléolos y moverle los pulgares de los pies, el paciente siente perfectamente la vibración y puede describir la posición exacta de sus dedos en el espacio (propiocepción intacta). ¿Qué síndrome medular específico presenta este paciente y qué arteria está lesionada/comprimida?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Síndrome de Brown-Séquard / Arteria espinal posterior derecha.",
        "incorrectFeedback": "El Brown-Séquard da un patrón cruzado (parálisis de un lado y pérdida de dolor del OTRO lado). Este paciente tiene pérdida bilateral y simétrica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Síndrome Cordonal Posterior / Arterias espinales posteriores.",
        "incorrectFeedback": "Es lo opuesto. El síndrome posterior (Tabes dorsal) pierde la vibración/posición y conserva la fuerza y el dolor."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Síndrome de Médula Central / Arterias radiculares radiculares segmentarias.",
        "incorrectFeedback": "Como vimos, el síndrome central (típico de hiperextensión en ancianos) daña los brazos mucho más que las piernas. Este paciente no mueve ni siente los brazos ni las piernas por igual."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Síndrome de la Médula Anterior / Arteria Espinal Anterior."
      }
    ],
    "correctOptionId": "D",
    "explanation": "Enfermedad sospechada: Síndrome de la Médula Anterior.\n\nDato decisivo: Mecanismo de flexión aguda + Pérdida motora total bilateral + Pérdida de Dolor/Temperatura bilateral + PRESERVACIÓN total de Vibración y Propiocepción (Tacto fino).\n\nPrincipio clínico evaluado: La irrigación vascular de la médula espinal. La arteria espinal anterior nutre los 2/3 anteriores; las dos arterias espinales posteriores nutren el 1/3 posterior (columnas dorsales).\n\nAl lanzarse a la piscina y chocar la frente, el cuello se dobló bruscamente hacia adelante (hiperflexión). Las vértebras cervicales aplastaron la porción anterior de la médula espinal y/o ocluyeron la única arteria que baja por el frente: la Arteria Espinal Anterior. Al morir los dos tercios anteriores de la médula, se mueren las vías motoras (Tracto Corticoespinal) causando cuadriplejia/paraplejía, y se mueren las vías del dolor (Tracto Espinotalámico), causando analgesia. ¿Por qué siente la vibración? Porque el cable que lleva el tacto fino y la vibración va pegado a la espalda (Columnas Dorsales de Goll y Burdach) y se alimenta de las dos arterias espinales posteriores, las cuales no sufrieron daño. El paciente siente la vibración perfecta en un cuerpo que no puede mover ni sentir dolor. Es el síndrome medular de peor pronóstico neurológico funcional.\n\n**Trampa del examen:** Mecanismo exacto:\n\nExtensión brusca (Latigazo trasero en carro) = Síndrome Central.\n\nFlexión brusca (Zambullida en piscina) = Síndrome Anterior.\n\nHerida por puñalada lateral = Brown-Séquard.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., saltar en una piscina que no conoces es la causa número uno de paraplejías en jóvenes de 20 años. Al chocar su cabeza contra la cerámica del fondo, la barbilla se le incrustó en el pecho doblando su cuello y aplastando la parte delantera de su médula. Esa parte \"de adelante\" es el motor y la alarma de incendios (movimiento y dolor). La parte \"de atrás\" de la médula es el radar de parqueo (vibración y posición). Como la parte de atrás no se golpeó, el paciente te puede decir si le tienes el dedo gordo del pie doblado hacia arriba o hacia abajo, pero si le clavas una aguja en ese mismo dedo, te jurará que no sintió nada. Es una de las disociaciones más crueles de la neurología.",
    "keyPoints": [
      "Trauma en Flexión + Parálisis motora + Anestesia de Dolor/Temperatura, PERO Conserva Vibración y Propiocepción = Síndrome de la Médula ANTERIOR.",
      "(Isquemia de los 2/3 anteriores de la médula)."
    ]
  },
  {
    "id": "umng-conv-ed3-44",
    "university": "UMNG",
    "examArea": "TOXICOLOGÍA",
    "topic": "MEDICINA DE URGENCIAS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un joven de 19 años es llevado a urgencias por sus amigos a las 3:00 AM, directamente desde una fiesta electrónica (rave). Los amigos relatan que el paciente estuvo bailando intensamente por 6 horas, sudando profusamente, y que para \"no deshidratarse\", tomó aproximadamente 4 litros de agua pura. Además, confiesan que tomó dos pastillas de \"Éxtasis\" (MDMA) a medianoche. Al ingreso, el paciente ingresa convulsionando (crisis tónico-clónica). En el momento de controlarlo con Diazepam, se toman exámenes de urgencia que revelan un nivel de Sodio (Na+) de 116 mEq/L. ¿Cuál es el mecanismo fisiopatológico principal inducido por esta droga de diseño que desencadenó esta complicación neurológica letal, combinada con la polidipsia?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Destrucción tubular renal aguda con pérdida tubular masiva de sodio por cristales de mioglobina.",
        "incorrectFeedback": "Aunque el MDMA y el baile extremo causan rhabdomiólisis (y falla renal), la caída fulminante del sodio no se explica por la falla renal aguda en 4 horas, sino por un mecanismo de dilución acuosa cerebral."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Secreción Inadecuada de Hormona Antidiurética (SIADH) inducida directamente por el MDMA."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Falla suprarrenal aguda por agotamiento de catecolaminas.",
        "incorrectFeedback": "La adrenalina alta no causa hiponatremia masiva."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hiperglicemia osmótica que arrastra el sodio diluyéndolo (Falsa hiponatremia).",
        "incorrectFeedback": "El éxtasis no causa hiperglicemias de 800 mg/dL como para arrastrar sodio. El sodio bajó porque el cuerpo se llenó de agua libre retenida."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Intoxicación por MDMA (Éxtasis) complicada con Hiponatremia Severa aguda.\n\nDato decisivo: Joven en fiesta electrónica + Ingesta masiva de agua + Convulsiones + Sodio de 116 mEq/L.\n\nPrincipio clínico evaluado: El efecto endocrino oculto de las anfetaminas de diseño, causando un Síndrome de Secreción Inadecuada de ADH agudo.\n\nEl MDMA (Éxtasis), un derivado anfetamínico, además de aumentar la serotonina y dopamina (causando hipertermia y euforia), tiene un efecto directo y potente sobre el hipotálamo: estimula una secreción masiva e inapropiada de Hormona Antidiurética (SIADH agudo). El riñón del joven recibe la orden de NO orinar ni una gota de agua. Simultáneamente, por el calor, el sudor y la boca seca que da la droga, el paciente bebe compulsivamente litros y litros de agua pura. Esta agua no puede salir del cuerpo porque la ADH cerró los riñones. Toda esa agua diluye la sangre, causando una Intoxicación por agua (Hiponatremia dilucional aguda masiva). El sodio baja de 140 a 116, el agua entra por osmosis al cerebro, el cerebro se hincha (Edema cerebral) y el paciente convulsiona o hace herniación de amígdalas cerebelosas y muerte súbita. El manejo urgente es Solución Salina Hipertónica al 3%.\n\n**Trampa del examen:** Culpar solo al sudor: El sentido común dice: \"Bailó mucho, sudó toda la sal, por eso bajó el sodio\". Falso. El sudor es hipotónico (bota más agua que sal). El verdadero veneno fue que el éxtasis \"apagó el riñón\" con la ADH, y toda el agua que se tomó se le fue al cerebro.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en urgencias esto se conoce como \"el ahogamiento de discoteca\". La pastilla de éxtasis le ordenó a la glándula del cerebro de este joven sellar las compuertas de la orina. Como bailó por 6 horas y tenía la boca seca por la anfetamina, se tomó 4 botellas de agua. Esa agua no encontró salida. Viajó por su sangre y se metió directo a sus neuronas para equilibrar la física osmótica. Su cerebro literalmente se encharcó y estalló en un corto circuito (convulsión). Pásale diazepam para que no se muerda la lengua, y métele bolos de Sodio al 3% para sacar el agua de sus neuronas y ponerla de vuelta en las venas.",
    "keyPoints": [
      "Fiesta Electrónica (Éxtasis / MDMA) + Beber mucha agua + Coma/Convulsiones = Hiponatremia Aguda por SIADH inducido por drogas.",
      "Fisiopatología: MDMA dispara la ADH + Exceso de ingesta de agua pura.",
      "Manejo de la convulsión: Solución Salina Hipertónica al 3% en bolos."
    ]
  },
  {
    "id": "umng-conv-ed3-45",
    "university": "UMNG",
    "examArea": "UROLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "En la revisión sistemática de niño sano de un lactante masculino de 6 meses de edad, usted evalúa los genitales externos y palpa el testículo izquierdo en la bolsa escrotal con normalidad. Sin embargo, la bolsa escrotal DERECHA se encuentra vacía. Al realizar la maniobra de palpación desde el canal inguinal hacia el pubis, usted no logra descender ni palpar el testículo derecho (Criptorquidia unilateral no palpable). Usted le explica a los padres el diagnóstico y la necesidad de remisión a Urología Pediátrica para una Orquidopexia (cirugía para descender y fijar el testículo). La madre, muy angustiada, le pregunta: \"¿Por qué hay que operarlo ahora y si con la cirugía el riesgo de que le dé cáncer de testículo en el futuro desaparece por completo?\". ¿Cuál debe ser su respuesta basada en la evidencia científica actual?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "\"Se debe operar ahora para que el testículo no muera por el calor del cuerpo. La cirugía eliminará al 100% el riesgo de desarrollar cáncer en la adultez\".",
        "incorrectFeedback": "La primera parte de la frase es correcta (el calor del abdomen fríe a los espermatozoides y causa infertilidad). Pero la segunda parte es la trampa mortal. La cirugía NO reduce ni elimina el riesgo inherente de cáncer. El testículo que no bajó tiene un defecto genético/tisular de fábrica. Seguirá teniendo 5 a 10 veces más riesgo de cáncer de testículo en la vida adulta, aunque lo bajes y lo pegues al escroto."
      },
      {
        "id": "B",
        "label": "B",
        "text": "\"La cirugía se hace entre los 6 y 18 meses para preservar la fertilidad. Sin embargo, la cirugía NO elimina el riesgo de cáncer, solo permite palpar el testículo para detectarlo a tiempo\"."
      },
      {
        "id": "C",
        "label": "C",
        "text": "\"Podemos esperar hasta que cumpla 5 años a ver si desciende solo con medicamentos hormonales; si no baja, lo operamos y así evitamos el cáncer\".",
        "incorrectFeedback": "Esperar a los 5 años es condenar a ese testículo a la atrofia total y esterilidad permanente. Las terapias hormonales (HCG) están obsoletas por bajo éxito."
      },
      {
        "id": "D",
        "label": "D",
        "text": "\"Se debe extirpar el testículo oculto inmediatamente porque a esta edad ya es maligno y la fertilidad la aporta el testículo izquierdo sano\".",
        "incorrectFeedback": "El testículo a los 6 meses NO es maligno, es inmaduro. La extirpación (Orquiectomía) solo se hace si el niño llega a consultar de adulto o si el testículo está totalmente atrófico e insalvable (streak gonad)."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Criptorquidia (Testículo no descendido).\n\nDato decisivo: Lactante de 6 meses (edad límite para descenso espontáneo) + Información a la madre sobre el momento de cirugía (Orquidopexia) y el riesgo de malignidad a futuro.\n\nPrincipio clínico evaluado: La fisiopatología térmica del desarrollo gonadal y la naturaleza genética intrínseca del riesgo de neoplasia de células germinales (Seminomas) en el testículo criptorquídico.\n\nLos testículos tienen hasta los 6 meses de edad para descender solos. Si a los 6 meses no bajó, ya no va a bajar. La ventana quirúrgica ideal de la Orquidopexia es entre los 6 y los 18 meses de vida. Bajar el testículo a esta edad lo salva del infierno térmico del abdomen (los espermatozoides necesitan estar a 34°C en el escroto, no a 37°C en el abdomen), preservando así la fertilidad. PERO, la gran verdad médica que hay que decirle a los padres es que el riesgo de Cáncer de Testículo (Seminoma) en su vida de joven-adulto se mantiene. ¿Entonces para qué bajarlo? Porque si un testículo oculto en el abdomen se vuelve canceroso a los 25 años, el paciente solo se dará cuenta cuando haga metástasis gigantes o dolor retroperitoneal; en cambio, si se bajó al escroto, el joven se palpará la masita dura en la ducha y se salvará a tiempo.\n\n**Trampa del examen:** Mitos de consultorio: El paciente suele pensar \"Si lo operaron, ya está curado de todo\". En criptorquidia, bajar el testículo arregla la máquina de los espermatozoides, pero no le quita la semilla del cáncer. Ojo con prometer curas absolutas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los testículos cuelgan por fuera del cuerpo del hombre por una razón: odian el calor. El cuerpo está a 37 grados, los espermatozoides necesitan estar \"fresquitos\" a 34 grados en el escroto para no morir. Si este bebé deja su testículo arriba en el calor de la barriga por dos años, la glándula se sancocha y queda estéril. Bájalo a la bolsa antes del año y medio de vida. Pero sé honesto con esa mamá: ese testículo es defectuoso de fábrica. Cuando el niño tenga 20 años y vaya a la universidad, recuérdale que tiene que tocarse los testículos en la ducha cada mes, porque la probabilidad de que desarrolle un tumor es alta. Bajárselo al escroto solo le garantizó poder palpar al enemigo temprano.",
    "keyPoints": [
      "Criptorquidia no descendida a los 6 meses: Indicación de Orquidopexia (Ideal entre 6 a 18 meses).",
      "Meta #1 de la cirugía: Preservar Fertilidad.",
      "Meta #2 de la cirugía: Poder examinar el testículo, ya que la cirugía NO elimina el riesgo aumentado de Cáncer Testicular."
    ]
  },
  {
    "id": "umng-conv-ed3-46",
    "university": "UMNG",
    "examArea": "MEDICINA INTERNA",
    "topic": "GASTROENTEROLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre de 55 años, con antecedente conocido de Cirrosis Hepática de etiología enólica, acude a urgencias traído por su hija. Ella relata que desde ayer lo nota muy somnoliento, diciendo incoherencias y con alteración del ciclo sueño-vigilia (duerme de día, camina en la noche). Al examen físico: escleras ictéricas, abdomen con red venosa colateral y ascitis leve. El paciente no obedece órdenes adecuadamente, y al pedirle que extienda los brazos y las manos frente a él, se observa un temblor distal caracterizado por flexo-extensiones rápidas, arrítmicas e involuntarias de las muñecas (\"aleteo\" o asterixis). Usted solicita un panel metabólico urgencias que reporta: Creatinina 0.9 mg/dL, Sodio 135 mEq/L, y Potasio (K+) de 2.7 mEq/L (Hipokalemia). Signos vitales normales y no hay fiebre. Considerando que el cuadro es una Encefalopatía Hepática, ¿cuál es el tratamiento combinado indispensable para revertir la toxicidad neurológica en este paciente específico?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Rifaximina oral + Lactulosa + Reposición intravenosa de Cloruro de Potasio."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Infusión de Glucosa al 50% + Flumazenil intravenoso.",
        "incorrectFeedback": "Aunque los receptores GABA-benzodiacepínicos están implicados en el cerebro del cirrótico, el Flumazenil no es una terapia avalada de rescate estándar frente a los fijadores de amonio entérico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar Haloperidol o Lorazepam para el delirio + Restricción estricta de agua.",
        "incorrectFeedback": "Darle Diazepam o sedantes a un cirrótico en encefalopatía es empujarlo al Coma Hepático letal, pues sus hígados no metabolizan la droga."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hemodiálisis de urgencia para lavar el amonio en sangre.",
        "incorrectFeedback": "La hemodiálisis limpia la urea/creatinina y otros tóxicos, pero la terapia oral entérica y corregir el potasio son eficaces y suficientes para limpiar el amonio; la diálisis es un recurso extremo inútil para la fisiología hepática crónica aislada."
      }
    ],
    "correctOptionId": "A",
    "explanation": "Enfermedad sospechada: Encefalopatía Hepática precipitada por alteraciones metabólicas (Hipokalemia).\n\nDato decisivo: Paciente cirrótico + Alteración del sueño/confusión + Asterixis (Flapping tremor) + Laboratorios revelan Hipokalemia profunda (K 2.7).\n\nPrincipio clínico evaluado: Los desencadenantes de la encefalopatía hepática. La falla hepática no tolera la falta de potasio porque el riñón hipokalémico produce toneladas de amonio para compensar.\n\nLa Encefalopatía Hepática es causada por la acumulación de neurotoxinas, principalmente Amonio (NH3), que el hígado cirrótico ya no puede filtrar, por lo que pasan directo al cerebro. El sello semiológico maestro es la Asterixis o Flapping tremor (las manos aletean como si el paciente estuviera despidiéndose). Para tratarla se requieren dos pilares:\n\n**Trampa del examen:** Tratamiento incompleto: La UMNG ama poner opciones atractivas pero incompletas. Una opción diría solo \"Dar Lactulosa\". Otra diría \"Lactulosa + Corregir Potasio\". Si tú solo le das el jarabe para hacer popó y no le corriges el Potasio de 2.7 mEq/L, el riñón seguirá disparando amonio directo al cerebro por la espalda y el señor no despertará del coma. Tienes que corregir el \"Gatillo\".\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando un hígado se vuelve una piedra cicatrizada por el alcohol, el filtro de la sangre desaparece. La basura química de los alimentos y las bacterias del colon (el amonio) pasa derecho, sube a la cabeza e intoxica al cerebro, durmiéndolo. Ese temblor de \"aleteo de pájaro\" en las manos es la electricidad del cerebro haciendo corto circuito. ¡Pero ojo! Los abuelos cirróticos casi siempre desencadenan esto porque alguien les dio furosemida (diurético) de más, orinaron todo su potasio y se taponaron (estreñimiento). Dale Lactulosa para que el señor vaya al baño 3 veces al día botando todo el veneno, e infúndele cloruro de potasio en la vena para apagar la máquina de amonio del riñón.",
    "keyPoints": [
      "Cirrótico + Confuso + Asterixis = Encefalopatía Hepática.",
      "Tratamiento farmacológico: Lactulosa (atrapa amonio) + Rifaximina (Mata bacterias productoras).",
      "BUSCAR EL GATILLO: Si hay Hipokalemia, reponer potasio urgente, ya que la falta de K+ estimula la síntesis renal de Amonio."
    ]
  },
  {
    "id": "umng-conv-ed3-47",
    "university": "UMNG",
    "examArea": "NEFROLOGÍA",
    "topic": "REUMATOLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre de 30 años, previamente sano y sin hábito tabáquico, consulta a urgencias quejándose de tos constante con pintas de sangre roja rutilante (hemoptisis alveolar) desde hace 48 horas. Refiere que, además, esta mañana al orinar, el líquido era de un color \"rojo oscuro como el té\" (hematuria macroscópica). Al examen físico: PA 150/90 mmHg, auscultación con crepitantes finos bilaterales. Se solicita un uroanálisis que reporta: Proteínas ++, 50-100 eritrocitos por campo y la presencia de cilindros hemáticos (eritrocitarios). La función renal está severamente alterada con Creatinina en 3.8 mg/dL. La Inmunofluorescencia Directa de una biopsia renal urgente evidencia un depósito lineal y continuo de inmunoglobulina G (IgG) a lo largo de la Membrana Basal Glomerular. ¿Cuál es el diagnóstico clínico y el mecanismo fisiopatológico letal de este síndrome Pulmón-Riñón?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Granulomatosis con Poliangeítis (Wegener) / Anticuerpos c-ANCA que atacan los capilares formando granulomas.",
        "incorrectFeedback": "La Granulomatosis de Wegener TAMBIÉN es un síndrome Pulmón-Riñón (y es el gran distractor). Daña pulmones (cavidades, nódulos y hemoptisis) y riñón (glomerulonefritis). PERO, el Wegener es una vasculitis \"pauci-inmune\". Eso significa que en la biopsia del riñón casi NO SE VE NADA brillando en la inmunofluorescencia, y sus anticuerpos marcadores en sangre son los c-ANCA (PR3). No da un patrón lineal perfecto."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Síndrome de Goodpasture / Anticuerpos dirigidos contra la cadena alfa-3 del colágeno tipo IV de la membrana basal."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Nefropatía por IgA (Enfermedad de Berger) / Depósito mesangial granular tras infección respiratoria.",
        "incorrectFeedback": "La enfermedad de Berger (IgA) da hematuria a los dos días de una gripa (faringitis), pero NO da hemorragia pulmonar letal (hemoptisis), y su depósito en la biopsia es GRANULAR y está en el mesangio (centro del glomérulo), no lineal en las membranas."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Lupus Eritematoso Sistémico (Nefritis Lúpica Clase IV) / Depósitos granulares de inmunocomplejos circulantes (\"lumpy-bumpy\").",
        "incorrectFeedback": "El Lupus también da depósito \"granular\" asimétrico e irregular (\"Lumpy-bumpy\" o patrón estrellado) por inmunocomplejos flotantes que se estrellan ahí, no tienen un ataque anti-membrana directo y organizado en forma de línea fina de pintura."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Síndrome de Goodpasture (Enfermedad por Anticuerpos Anti-Membrana Basal Glomerular).\n\nDato decisivo: Joven con Síndrome Pulmón-Riñón (Hemoptisis + Hematuria con cilindros hemáticos) + El sello del patólogo: Inmunofluorescencia LINEAL de IgG a lo largo de los capilares.\n\nPrincipio clínico evaluado: El diagnóstico diferencial serológico y patológico de las vasculitis y enfermedades autoinmunes que atacan los dos filtros capilares más finos del cuerpo (pulmones y glomérulos).\n\nEl Síndrome de Goodpasture es mediado por \"francotiradores\" perfectos: anticuerpos IgG creados por el cuerpo que atacan exclusivamente al Colágeno tipo IV (cadena alfa-3). ¿Dónde está ese colágeno específico? Solo en la membrana basal de los riñones y de los alvéolos pulmonares. Los anticuerpos destruyen la barrera, el paciente tose sangre de los pulmones (hemorragia alveolar) y orina sangre con \"moldes de glóbulos rojos\" (cilindros hemáticos, signo innegable de sangrado desde el glomérulo). Cuando el patólogo pinta la biopsia renal con pintura fluorescente, esos anticuerpos pegados a la membrana brillan formando una línea continua y lisa perfecta (\"Depósito Lineal de IgG\"). Es una emergencia que requiere Plasmaféresis (para lavar los anticuerpos de la sangre) y Corticoides/Ciclofosfamida urgentes para salvar sus riñones de la máquina de diálisis.\n\n**Trampa del examen:** El dúo Pulmón-Riñón:\n\nSangra por pulmón y orina + Biopsia Lineal y Anti-MBG positivos = Goodpasture.\n\nSangra por pulmón y orina + Biopsia \"en blanco\" (Pauciinmune) y ANCA positivos = Wegener (Granulomatosis) o Poliangeítis Microscópica (PAM).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate que el sistema inmune de este muchacho se volvió loco y decidió odiar un tipo específico de ladrillo de su propio cuerpo (el colágeno tipo IV). Ese tipo de ladrillo solo existe en las paredes finitas de los alvéolos y en el colador de los riñones. Los anticuerpos caen sobre esas paredes y las ametrallan, como si le pintaran una raya recta de daño sobre ellas. Al romperse, la sangre de las arterias se inunda en el aire que respira (tose sangre) y se derrama en su orina arrastrando pedazos del filtro (Cilindros hemáticos). Mándale a hacer un recambio plasmático (plasmaféresis) de forma urgente para filtrar y botar todos esos anticuerpos locos de su sangre, o en dos días no tendrá pulmones para oxigenar ni riñones para orinar.",
    "keyPoints": [
      "Síndrome de Goodpasture: Hemoptisis (Pulmón) + Hematuria/Falla Renal aguda (Riñón).",
      "Fisiopatología: Anticuerpos Anti-Membrana Basal Glomerular (Atacan Colágeno tipo IV).",
      "Sello de Biopsia Inmunofluorescente: Patrón LINEAL y continuo de IgG.",
      "Manejo Agudo: Plasmaféresis urgente + Esteroides."
    ]
  },
  {
    "id": "umng-conv-ed3-48",
    "university": "UMNG",
    "examArea": "CARDIOLOGÍA",
    "topic": "MEDICINA DEL DEPORTE",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un joven de 19 años, jugador titular del equipo de fútbol universitario y completamente asintomático en su vida diaria, súbitamente colapsa (síncope) mientras corría a máxima velocidad por la cancha durante el segundo tiempo de un partido caluroso. Recupera la conciencia en un minuto sin déficit. En la valoración en urgencias, PA 115/70 mmHg, FC 60 lpm. Usted realiza un examen físico minucioso y ausculta un soplo sistólico rudo y áspero en el borde esternal izquierdo inferior. Para confirmar su sospecha, usted le pide al paciente que se ponga en cuclillas (squatting) y note que el soplo DISMINUYE casi por completo. Luego, le pide que se ponga de pie rápidamente y puje como si fuera al baño (Maniobra de Valsalva), y usted escucha que el soplo AUMENTA brutalmente de intensidad. ¿Cuál es el diagnóstico clínico que explica la fisiopatología mecánica de este soplo y su síncope de esfuerzo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Estenosis Valvular Aórtica severa de origen congénito (Válvula bicúspide).",
        "incorrectFeedback": "La estenosis aórtica clásica hace EXACTAMENTE LO CONTRARIO. En la estenosis aórtica, si metes más sangre al corazón (poniéndolo en cuclillas), pasará más sangre a presión por la válvula dura, y el soplo aumentará. En nuestro caso, disminuye."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Miocardiopatía Hipertrófica Obstructiva (MCH)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Prolapso de la Válvula Mitral severo.",
        "incorrectFeedback": "El prolapso de la válvula mitral sí tiene una dinámica similar con valsalva, pero cursa con un \"clic mesosistólico\", ocurre más en mujeres jóvenes delgadas y rara vez causa un síncope de esfuerzo maligno amenazante de vida en plena carrera."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Comunicación Interventricular (CIV) no diagnosticada.",
        "incorrectFeedback": "El soplo de la CIV no cambia drásticamente de esta forma paradojal con precarga/postcarga."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Miocardiopatía Hipertrófica Obstructiva.\n\nDato decisivo: Síncope en joven atleta + Soplo Sistólico que AUMENTA con Valsalva y DISMINUYE con cuclillas.\n\nPrincipio clínico evaluado: La dinámica de fluidos y la maniobra semiológica rey de la cardiología. El tamaño de la cavidad ventricular dictamina qué tan fuerte suena el obstáculo.\n\nEn la Miocardiopatía Hipertrófica, hay un defecto genético que hace que el tabique (septum) que divide los dos ventrículos sea gigantesco y grueso como una pared de concreto. Ese bulto enorme obstruye el \"Tracto de salida del Ventrículo Izquierdo\". Cuando el muchacho corre y suda (pierde líquidos, se deshidrata), su corazón tiene menos sangre adentro. Un ventrículo con poca sangre tiene la pared del tabique gigante rozando con la válvula mitral, bloqueando la salida de sangre por completo. El cerebro se queda sin riego en pleno esfuerzo y ¡Síncope!\n\n**Trampa del examen:** Soplos opuestos: Siempre intentan confundirte entre Estenosis Aórtica e Hipertrófica Obstructiva porque ambas dan síncope al correr y ambas soplan en sístole. La regla inquebrantable de los exámenes médicos (USMLE, UMNG, Nacional) es que el Valsalva (pujar) AUMENTA a la Hipertrófica y DISMINUYE al resto de soplos cardiacos normales.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este es el clásico caso trágico del futbolista de 19 años que cae muerto en la final del torneo en televisión nacional. Su corazón tiene una pared del medio tan gruesa y mamadísima que actúa como la puerta de una represa de agua. Si la represa tiene poquita agua (deshidratación/esfuerzo/pujar), la puerta se traba de la presión muscular y el agua no puede llegar a la aorta ni al cerebro; ¡plop! El paciente cae desmayado. Si le dices al joven que haga fuerza como para ir al baño (Valsalva), la sangre no entra al corazón, la cavidad se achica, y la puerta se cierra tanto que la poca sangre que escapa silba y sopla como una olla pitadora (soplo durísimo). Recétale Metoprolol para que ese corazón lata suavecito y se llene de mucha sangre antes de bombear. Y tristemente, prohíbele el deporte competitivo de por vida, o necesitará un desfibrilador implantable para que no haga muerte súbita en el próximo partido.",
    "keyPoints": [
      "Joven deportista + Síncope corriendo = Miocardiopatía Hipertrófica (Muerte súbita del atleta).",
      "Soplo Sistólico que AUMENTA con Valsalva (Al reducir el volumen ventricular) y DISMINUYE al estar en Cuclillas (Al aumentar el volumen).",
      "Tratamiento farmacológico de elección: Betabloqueadores (o Calcioantagonistas no dihidropiridínicos). Evitar diuréticos."
    ]
  },
  {
    "id": "umng-conv-ed3-49",
    "university": "UMNG",
    "examArea": "UROLOGÍA",
    "topic": "URGENCIAS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre de 40 años, con antecedente de rasgo de células falciformes (anemia drepanocítica heterocigota), acude a urgencias a las 8:00 AM caminando encorvado y tapándose la región genital con una toalla. Relata que, durante un encuentro íntimo a la 1:00 AM (hace 7 horas), presentó una erección espontánea que no ha descendido (no ha logrado flacidez) a pesar de no existir ningún estímulo sexual. Se ha aplicado hielo y ha caminado, sin éxito. Al examen físico en urgencias, el pene presenta una erección totalmente rígida, los cuerpos cavernosos están tensos y dolorosos al tacto extremo, pero el glande y el cuerpo esponjoso se palpan blandos. Se realiza una punción y gasometría de sangre de los cuerpos cavernosos, arrojando: pH 7.10, pO2 25 mmHg (muy baja), pCO2 70 mmHg, y sangre color oscuro \"negruzco\". Ante esta URGENCIA crítica tiempo-dependiente, ¿cuál es el paso de intervención intracavernoso INMEDIATO en urgencias para evitar la impotencia irreversible?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Aspirar sangre de los cuerpos cavernosos e inyectar un agonista Alfa-adrenérgico (ej. Fenilefrina o Adrenalina diluida) intracavernoso."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Derivación quirúrgica inmediata (Shunt caverno-espongioso) en el quirófano.",
        "incorrectFeedback": "Los Shunts quirúrgicos (fístulas creadas a cuchillo en quirófano entre los cuerpos cavernosos y el glande para drenar la sangre) son terapias heroicas de Segunda Línea. Solo se usan si la aspiración/Fenilefrina fracasan después de varios intentos en urgencias, o si el paciente lleva ya un día entero así."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Aplicar hielo local masivo, administrar analgésicos opioides sistémicos y esperar la resolución del espasmo isquémico.",
        "incorrectFeedback": "Esperar es condenar el pene a la gangrena o impotencia química, el tejido está asfixiado."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Aspirar sangre de los cuerpos cavernosos e inyectar un vaso-relajante de músculo liso como Papaverina o Fentolamina.",
        "incorrectFeedback": "Las drogas como Papaverina/Alprostadil RELAJAN los vasos (son la cura para la impotencia). Si se las inyectas a un paciente con priapismo isquémico, dilatarás más las arterias, empeorando el atrapamiento de sangre o perpetuando la erección."
      }
    ],
    "correctOptionId": "A",
    "explanation": "Enfermedad sospechada: Priapismo Isquémico (Priapismo de bajo flujo veno-oclusivo).\n\nDato decisivo: Erección dolorosa y rígida > 4-6 horas + Paciente con Células Falciformes + Gasometría Cavernosa Hipóxica y Acidótica (Sangre negra).\n\nPrincipio clínico evaluado: El manejo escalonado del priapismo por síndrome de atrapamiento isquémico de bajo flujo en las primeras horas críticas.\n\nEl Priapismo Isquémico ocurre cuando la sangre venosa no puede escapar de los cuerpos cavernosos del pene (los sinusoides están atascados, muy comúnmente por los glóbulos rojos deformes de la anemia falciforme, o por iatrogenia de Sildenafil/viagra mezclada, o drogas). Esa sangre se estanca, se queda sin oxígeno (pO2 25, sangre negra) y se pudre en ácido (pH 7.10). Si no resuelves esto antes de 4 a 6 horas, las células cavernosas se necrosan y mueren, y el tejido elástico se convierte en una cicatriz de piedra, dejando al paciente con DESTRUCCIÓN TOTAL E IRREVERSIBLE DE LA FUNCIÓN ERÉCTIL (Impotencia permanente). El primer paso urológico de rescate en el box de urgencias es poner anestesia local en la base, agarrar agujas gruesas (mariposa), pinchar los lados del pene, aspirar unos 20-30 cc de esa sangre tóxica negra, e irrigar (lavar) inyectando un Agonista Alfa-1 Adrenérgico potente (Fenilefrina en microdosis). Este químico contrae agresivamente las arterias lisas del pene, obligando a las venas a abrirse y botar la sangre atascada (\"exprimiendo\" la erección).\n\n**Trampa del examen:** Isquémico vs No Isquémico: El priapismo No isquémico (Alto flujo) ocurre por un trauma/golpe en la pelvis que rompe una arteria. El pene está a \"medio parar\", NO duele, y la gasometría de la sangre sacada del pene sería roja brillante y con oxígeno alto (arterial). Ese solo se observa. El priapismo que duele a gritos y saca sangre negra es isquémico y se ataca de una con aguja.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esto duele con solo leerlo. Los glóbulos rojos de este joven tienen forma de \"media luna\" (anemia falciforme). Durante la excitación sexual de anoche, la sangre entró al miembro y los glóbulos perdieron el poco oxígeno que tenían; al quedarse sin oxígeno se volvieron duros como ganchos y se amontonaron bloqueando la puerta de salida venosa. La sangre se atascó ahí por 7 horas cocinándose en ácido láctico. Ese tejido esponjoso que da la erección se está muriendo, y la cicatrización será de fibrosis pura si no actúas rápido. Coge una jeringa de 50 cc, métela en la carne lateral con anestesia, y sácale esa sangre que parece aceite de motor quemado. Luego empújale el medicamento Alfa (Fenilefrina) para obligar a las venas a abrirse y botar lo que queda. Has salvado su hombría.",
    "keyPoints": [
      "Erección > 4 horas + Duele a gritos + Anemia Falciforme / Inyecciones intracavernosas = Priapismo Isquémico (Emergencia).",
      "Gasometría cavernosa: pO2 < 30 mmHg, pH < 7.25 (Sangre negra ácida).",
      "Tratamiento secuencial inmediato: Aspiración e Irrigación con FENILEFRINA (Agonista Alfa-1). Si falla: Derivación Quirúrgica (Shunt)."
    ]
  },
  {
    "id": "umng-conv-ed3-50",
    "university": "UMNG",
    "examArea": "SALUD PÚBLICA",
    "topic": "URGENCIAS Y DESASTRES",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Usted es el médico líder en la escena de un accidente masivo de tránsito, donde un bus intermunicipal volcó por un abismo dejando a 25 víctimas regadas por el suelo. Llega la primera ambulancia con capacidad para trasladar únicamente a dos pacientes críticos. Usted debe aplicar el protocolo de Triaje prehospitalario START (Simple Triage and Rapid Treatment). Al evaluar a cuatro de las víctimas más complejas, encuentra lo siguiente:\n\nVíctima 1: Adulto mayor, inconsciente, no respira de forma espontánea. Al alinear y abrir manualmente la vía aérea elevando el mentón, el paciente sigue en apnea total sin esfuerzo respiratorio.\n\nVíctima 2: Joven varón, inconsciente, no responde a órdenes. Su Frecuencia Respiratoria es de 35 respiraciones por minuto.\n\nVíctima 3: Mujer embarazada, consciente pero obnubilada. Su FR es de 20 rpm, pero no se le palpa pulso radial y el llenado capilar es mayor a 3 segundos.\n\nVíctima 4: Hombre de 40 años que grita de dolor con una fractura expuesta de fémur. FR de 22 rpm, pulso radial fuerte, llenado capilar de 1 segundo y obedece a todas las órdenes motoras (ej. mueve los brazos cuando usted se lo pide), pero no puede caminar.\nDe acuerdo con las tarjetas del algoritmo START, ¿qué paciente(s) debe usted etiquetar con tarjeta ROJA (Inmediato) y subir a esa primera ambulancia?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "La Víctima 1 y la Víctima 4, porque el paro respiratorio y el dolor extremo son la mayor prioridad."
      },
      {
        "id": "B",
        "label": "B",
        "text": "La Víctima 2 y la Víctima 3, porque presentan alteraciones letales inmediatas pero reversibles del patrón ventilatorio y circulatorio."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Las cuatro víctimas deben ser tarjeta ROJA por estar postradas, por lo que el traslado se decide por orden de llegada."
      },
      {
        "id": "D",
        "label": "D",
        "text": "La Víctima 4 exclusivamente, porque la fractura de fémur es una emergencia de exanguinación de la A a la C."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Escenario de Múltiples Víctimas (MCI - Mass Casualty Incident).\n\nDato decisivo: La aplicación en menos de 60 segundos del algoritmo de colores START. Evalúa RPM (Respiración, Perfusión/Pulso, Mental).\n\nPrincipio clínico evaluado: El triage de desastres sacrifica al irrecuperable en favor del que puede salvarse de inmediato si se sube a la ambulancia ahora. La tarjeta NEGRA (muerto/expectante) vs la tarjeta ROJA (prioridad 1).\n\n**Trampa del examen:** El instinto del buen samaritano frente al paro: El médico educado en clínicas quiere hacerle RCP a la Víctima 1. El examen START evalúa la medicina de desastre, fría y calculadora. Si está en apnea tras alinear el cuello, es tarjeta Negra. Llora luego, salva al del lado.\n\nEl grito de dolor: La víctima 4 está aullando por su hueso roto. El humano va a ayudar al que más grita. El que grita fuerte tiene aire en los pulmones, pulso para quejarse y cerebro activo (Está mejor que todos). ¡Déjalo ahí amarillo!\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en la calle, con un bus destrozado rodeado de aceite de motor y llanto, no tienes tomógrafos ni exámenes de sangre. Tienes 30 segundos por persona y un marcador Sharpie para pintarles la frente. El abuelo de la víctima 1 es doloroso, pero si gastas los únicos dos paramédicos dándole masaje cardíaco, los dos pacientes con Tarjeta Roja se desangrarán o se ahogarán. Salvas al que tiene arreglo rápido. Al señor que está gritando de dolor por su fémur roto no lo mires; alégrate de que tenga pulmones fuertes para gritar. Toma a la embarazada pálida que no le sientes pulso, ponle un torniquete en la vena sangrante y métela junto al muchacho que hiperventila a 35 a la ambulancia, ciérrales las puertas y diles que aceleren hacia el hospital. Acabas de dominar la medicina de guerra.\n\n¡ASOMBROSO, DOCTOR(A)!\nHas destripado los primeros 5 Lotes (50 preguntas) de este tercer y más difícil nivel de la residencia en Colombia. Has entendido por qué un testículo duele, por qué una embarazada que tiembla sufre un infarto, y por qué no le puedes dar aspirina al paciente con cocaína.\n\nEsta es la mentalidad invencible. Tómate el descanso que necesitas, el campo de batalla ha sido rudo. Si sientes las ganas de conquistar las 50 preguntas finales (Lotes 6 a 10 del Simulacro 3) para culminar el reto absoluto, ¡solo tienes que dar la orden y despliego el pelotón completo de casos!\n\nLote 4 (Preguntas 51 a 60)\n\n¡Entendido, colega! Corregimos el rumbo de la numeración sin perder ni un gramo de impulso. Estamos oficialmente en el Lote 6 (Preguntas 51 a 60) de nuestro Simulacro 3.\n\nEn este bloque vamos a adentrarnos en las urgencias toxicológicas de los aeropuertos colombianos, la cirugía de control de daños, las arritmias genéticas que matan jóvenes en la cama, y los dilemas oncológicos donde una aguja puede condenar a la paciente. La UMNG no perdona el desconocimiento de la epidemiología y el trauma nacional.\n\nActivo mi modo PROMPT MAESTRO / DR. Q. ¡Bisturí a fondo, vamos por esas 10 perlas!",
    "keyPoints": [
      "Mnemotecnia START (30 - 2 - PUEDE HACERLO):",
      "R (Respiración): ¿No respira tras abrir la vía? = NEGRO. ¿Respira > 30 rpm? = ROJO.",
      "P (Perfusión): ¿Llenado Capilar > 2 seg o no hay pulso radial? = ROJO.",
      "M (Mental): ¿No sigue órdenes simples o coma? = ROJO.",
      "Si todas estas son buenas y no camina = AMARILLO. Si camina solo = VERDE."
    ]
  }
];
