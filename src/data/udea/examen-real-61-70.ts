import { buildUdeaQuestion as q } from "./build-question";

/** Examen real de admisión UdeA · preguntas 61–70 (clave Método Q). */
export const UDEA_EXAMEN_REAL_61_70 = [
  q({
    id: "udea-real-61",
    examArea: "PEDIATRÍA",
    topic: "INFECCIÓN URINARIA FEBRIL EN EL LACTANTE",
    difficulty: "medium",
    tags: ["examen-real", "nefrologia"],
    statement:
      "Lactante femenina de 4 meses llevada a consulta por sus padres debido a fiebre de 39° C de 48 horas de evolución, irritabilidad y rechazo al alimento. No presenta síntomas respiratorios ni digestivos. Examen físico: febril, buen estado general, sin signos de foco infeccioso evidente. Uroanálisis: nitritos positivos y leucocituria. Gram de orina con más de 1 bacilo gram negativo. ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      [
        "Iniciar antibiótico oral empírico y dar de alta sin más estudios",
        "El antibiótico oral es válido si tolera la vía oral, pero rechaza el alimento, y todo lactante con IVU febril requiere ecografía renal.",
      ],
      ["Iniciar antibióticos endovenosos y solicitar una ecografía renal y de vías urinarias"],
      [
        "Realizar cistouretrografía miccional inmediatamente para descartar reflujo vesicoureteral",
        "La cistouretrografía no se hace de rutina tras el primer episodio ni durante la infección aguda; se indica si la ecografía es anormal o hay recurrencia.",
      ],
      [
        "Observar sin tratamiento y repetir el urocultivo en 48 horas",
        "Retrasar el tratamiento de una pielonefritis en un lactante aumenta el riesgo de cicatriz renal y sepsis.",
      ],
    ],
    correct: "B",
    explanation:
      "Infección urinaria febril (pielonefritis) en lactante de 4 meses: fiebre sin foco, nitritos y leucocitos positivos, Gram con bacilos gramnegativos (urocultivo por sonda o punción antes del antibiótico).\n\nLa irritabilidad y el rechazo al alimento (no garantiza la vía oral) justifican hospitalizar e iniciar antibiótico parenteral (p. ej., ceftriaxona o aminoglucósido según epidemiología local), pasando a vía oral al mejorar (7–14 días en total). AAP: ecografía renal y de vías urinarias en todo niño de 2–24 meses con primera IVU febril; cistouretrografía solo si la ecografía es anormal o hay recurrencia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, lactante con IVU febril que no come: antibiótico IV y ecografía renal. La cistografía no es de entrada.",
    keyPoints: [
      "IVU febril 2–24 meses: ecografía renal y vesical.",
      "Parenteral si no tolera vía oral, aspecto tóxico o <2–3 meses.",
      "Cistouretrografía: ecografía anormal o recurrencia.",
    ],
  }),
  q({
    id: "udea-real-62",
    examArea: "PSIQUIATRÍA",
    topic: "TRASTORNO BIPOLAR: EPISODIO MANÍACO",
    difficulty: "easy",
    tags: ["examen-real"],
    statement:
      "Hombre de 21 años. Traído al servicio de urgencias porque desde hace diez días \"está muy raro, mantiene muerto de la risa todo el tiempo y diciéndole a todos que encontró la cura contra el cáncer\", adicionalmente \"no para de caminar, caminó por más de 24 horas seguidas\", \"no volvió a dormir, si mucho se acuesta dos horas en la noche\", \"tampoco se queda callado, habla demasiado y dice que la mente va a mil kilómetros por hora\". Sin antecedentes de importancia. Sin alteraciones al examen físico. Sin alteraciones en los resultados de los exámenes de laboratorio. ¿Cuál de los siguientes es el diagnóstico más probable?",
    options: [
      [
        "Trastorno bipolar tipo I, episodio actual hipomanía",
        "La hipomanía dura ≥4 días, sin síntomas psicóticos ni deterioro grave; aquí hay ideas delirantes de grandeza y >7 días.",
      ],
      ["Trastorno bipolar tipo I, episodio actual manía"],
      [
        "Trastorno bipolar tipo II, episodio actual hipomanía",
        "Bipolar II exige hipomanía + depresión mayor y nunca manía; este cuadro es una manía.",
      ],
      [
        "Trastorno bipolar tipo II, episodio actual manía",
        "Combinación imposible: un solo episodio maníaco define el bipolar tipo I.",
      ],
    ],
    correct: "B",
    explanation:
      "Episodio maníaco (DSM-5-TR): ánimo elevado/expansivo o irritable y aumento de la energía ≥7 días (o cualquier duración si requiere hospitalización), con ≥3 síntomas: grandiosidad (\"encontró la cura del cáncer\", de carácter delirante), menor necesidad de dormir, verborrea, fuga de ideas/taquipsiquia, aumento de la actividad, distractibilidad, conductas de riesgo — con deterioro marcado o psicosis.\n\nUn solo episodio maníaco basta para diagnosticar trastorno bipolar tipo I (no requiere depresión previa). Descartar sustancias y causas médicas (laboratorios normales). Tratamiento: litio, valproato o antipsicóticos atípicos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, ≥7 días + psicosis o deterioro = manía = bipolar I. La hipomanía no enloquece ni hospitaliza.",
    keyPoints: [
      "Manía: ≥7 días o hospitalización; puede haber psicosis.",
      "Hipomanía: ≥4 días, sin psicosis ni deterioro marcado.",
      "Un episodio maníaco = trastorno bipolar I.",
    ],
  }),
  q({
    id: "udea-real-63",
    examArea: "PSIQUIATRÍA",
    topic: "ESQUIZOFRENIA Y SÍNDROME METABÓLICO",
    difficulty: "medium",
    tags: ["examen-real", "antipsicoticos"],
    statement:
      "Mujer de 24 años. Traída al servicio de urgencias porque desde 7 meses antes la ven extraña: dice que \"el servicio de inteligencia de Rusia le tiene hackeado el celular\", tapizó el cuarto con cajas de huevos porque dice que \"así no le pueden escuchar el pensamiento\", se la pasa en su cuarto, en la cama, sentada y callada, aunque a veces habla sola, como alegando con otras personas. Examen físico: IMC de 32 Kg/m², sin otras alteraciones. Tóxicos en orina negativos. Resto de laboratorios sin hallazgos patológicos. ¿Cuál de las siguientes es la mejor opción de tratamiento para esta paciente?",
    options: [
      [
        "Clozapina",
        "Se reserva para esquizofrenia resistente (falla de 2 antipsicóticos) por el riesgo de agranulocitosis y su gran efecto metabólico.",
      ],
      [
        "Olanzapina",
        "Es de los antipsicóticos con mayor ganancia de peso y alteración metabólica; mala opción con IMC 32.",
      ],
      ["Risperidona"],
    ],
    correct: "C",
    explanation:
      "Esquizofrenia (≥6 meses): delirios de persecución y de difusión/robo del pensamiento, alucinaciones auditivas (habla sola, 'alegando' con voces), síntomas negativos (aislamiento, abulia); tóxicos negativos.\n\nLa elección del antipsicótico se basa en el perfil de efectos adversos. Con obesidad (IMC 32) se evitan olanzapina y clozapina (máximo riesgo metabólico). Opciones con menor impacto metabólico: risperidona (riesgo intermedio; vigilar hiperprolactinemia), aripiprazol, ziprasidona, lurasidona. La clozapina queda para la esquizofrenia resistente o con riesgo suicida alto.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, paciente con obesidad: nada de olanzapina ni clozapina de entrada. Risperidona (o aripiprazol) y control metabólico.",
    keyPoints: [
      "Esquizofrenia: síntomas ≥6 meses.",
      "Mayor riesgo metabólico: clozapina y olanzapina.",
      "Clozapina: esquizofrenia resistente.",
    ],
  }),
  q({
    id: "udea-real-64",
    examArea: "PSIQUIATRÍA",
    topic: "TRASTORNO OBSESIVO-COMPULSIVO",
    difficulty: "easy",
    tags: ["examen-real"],
    statement:
      "Mujer de 33 años que trabaja como auxiliar en un laboratorio hematológico. Consulta por dos meses de insomnio de conciliación. Indica constantemente pensamientos desagradables e intrusivos acerca de la posibilidad de \"contagiarme de algo en el trabajo\", lo que la ha llevado a descuidar sus obligaciones laborales. Refiere \"esfuerzos mentales\" por controlar esos pensamientos, como la repetición constante de una misma palabra, pero \"nada de eso me sirve, si toco algo en el laboratorio me voy a contaminar\". ¿Cuál de los siguientes es el tratamiento farmacológico inicial más apropiado para la paciente?",
    options: [
      [
        "Pregabalina 75 miligramos cada 12 horas",
        "Tiene evidencia en ansiedad generalizada, no en TOC.",
      ],
      [
        "Risperidona 2 miligramos cada noche",
        "Los antipsicóticos solo se usan como potenciadores en TOC resistente a ISRS.",
      ],
      ["Sertralina 50 miligramos en la mañana"],
    ],
    correct: "C",
    explanation:
      "Trastorno obsesivo-compulsivo: obsesiones (pensamientos intrusivos, egodistónicos, de contaminación) y compulsiones, que pueden ser mentales (repetir una palabra para neutralizar la ansiedad), con deterioro funcional.\n\nTratamiento de primera línea: terapia cognitivo-conductual con exposición y prevención de respuesta (EPR) y/o ISRS (sertralina, fluoxetina, fluvoxamina, paroxetina), habitualmente a dosis más altas y por más tiempo que en depresión (respuesta en 8–12 semanas). Refractario: clomipramina o potenciación con antipsicótico (risperidona, aripiprazol).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, obsesión + compulsión (aunque sea mental) = TOC → ISRS y terapia de exposición. El antipsicótico solo potencia.",
    keyPoints: [
      "TOC: obsesiones + compulsiones (también mentales).",
      "Primera línea: ISRS a dosis altas + TCC con EPR.",
      "Refractario: clomipramina o potenciar con antipsicótico.",
    ],
  }),
  q({
    id: "udea-real-65",
    examArea: "PSIQUIATRÍA",
    topic: "DEPRESIÓN MAYOR VS DUELO",
    difficulty: "medium",
    tags: ["examen-real"],
    statement:
      "Mujer de 47 años, sobreviviente de accidente de tránsito en el que murió un familiar cercano siete meses antes, consulta refiriendo: \"Desde lo que pasó casi no como, no duermo bien, a veces tengo sueños con todo eso. Siempre estoy cansada, triste, no tengo ánimos de nada. Yo asistía a clases de pintura y lo disfrutaba mucho, ya ni eso me interesa. He tenido fallas en mi trabajo y muchas discusiones en casa con mis hijos. Ya no hago bien nada, pienso que sería mejor morirme, mi familia estaría mejor sin mí\". ¿Cuál es el diagnóstico más probable?",
    options: [
      [
        "Duelo prolongado",
        "El duelo prolongado exige ≥12 meses en adultos (DSM-5-TR) y se centra en el anhelo por el fallecido, no en culpa global y sentimientos de inutilidad.",
      ],
      [
        "Trastorno de estrés postraumático",
        "Tiene algún sueño, pero no se describen reexperimentación intrusiva, evitación ni hiperalerta como núcleo del cuadro.",
      ],
      ["Trastorno depresivo mayor"],
    ],
    correct: "C",
    explanation:
      "Cumple criterios de episodio depresivo mayor (≥5 síntomas, ≥2 semanas): ánimo triste, anhedonia (ya no disfruta la pintura), hiporexia, insomnio, fatiga, sentimientos de inutilidad ('ya no hago bien nada'), ideas de muerte ('sería mejor morirme, mi familia estaría mejor sin mí'), con deterioro laboral y familiar.\n\nEl DSM-5 eliminó la 'exclusión por duelo': si hay un episodio depresivo mayor, se diagnostica aunque exista una pérdida. Pistas a favor de depresión sobre duelo: autoestima baja y culpa generalizada, ideación suicida con sentimiento de ser una carga. Evaluar riesgo suicida de inmediato. Tratamiento: ISRS + psicoterapia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en el duelo la tristeza va en olas y es por el que se fue; en la depresión la persona se siente inútil y una carga. Y con ideación de muerte, evalúa riesgo suicida.",
    keyPoints: [
      "Depresión mayor: ≥5 síntomas ≥2 semanas, incluye ánimo triste o anhedonia.",
      "Duelo prolongado: ≥12 meses en adultos.",
      "Ideación de muerte: valorar riesgo suicida siempre.",
    ],
  }),
  q({
    id: "udea-real-66",
    examArea: "TOXICOLOGÍA",
    topic: "INTOXICACIÓN POR ACETAMINOFÉN",
    difficulty: "medium",
    tags: ["examen-real", "urgencias"],
    statement:
      "Mujer de 21 años. Consultó a urgencias tras ingerir 30 tabletas de acetaminofén de 500 mg 6 horas antes de la consulta. Refiere 2 episodios eméticos de contenido alimentario, sin otros síntomas. Antecedentes negativos. Examen físico: sin alteración en signos vitales, sin hallazgos de relevancia. Laboratorio: AST 80 UI/L, ALT 68 UI/L, bilirrubina total de 1,1 mg/dL, albúmina 4, glucosa 116 mg/dL, INR 1.1. ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      [
        "Medir niveles de acetaminofén y esperar resultado para decidir si se inicia N-acetilcisteína",
        "Con ingesta tóxica (≥7,5–10 g) y transaminasas elevadas, no se espera el nivel: la eficacia de la NAC cae después de 8 horas.",
      ],
      [
        "Iniciar N-acetilcisteína oral, un sobre de 300 mg cada 8 horas por 72 horas",
        "Es una dosis mucolítica; la dosis antídoto oral es 140 mg/kg de carga y 70 mg/kg cada 4 h.",
      ],
      ["Administrar N-acetilcisteína 150 mg/Kg en 60 minutos y continuar por 20 horas"],
      [
        "Repetir medición de transaminasas en 12 horas y según resultado definir el inicio o no de antídoto",
        "Esperar el daño hepático para tratar es justamente lo que el antídoto busca prevenir.",
      ],
    ],
    correct: "C",
    explanation:
      "Ingesta de 15 g (30 × 500 mg), muy por encima de la dosis tóxica (>150 mg/kg o >7,5–10 g en adultos), con 6 horas de evolución y transaminasas ya elevadas.\n\nIndicación de N-acetilcisteína IV: protocolo de 21 horas — 150 mg/kg en 60 minutos, luego 50 mg/kg en 4 h y 100 mg/kg en 16 h (o el esquema de dos bolsas: 200 mg/kg en 4 h + 100 mg/kg en 16 h). La NAC es casi 100% eficaz si se inicia antes de 8 horas. Se mide el nivel a las 4 h o más (nomograma de Rumack-Matthew), pero no se retrasa la NAC si el nivel no estará antes de las 8 horas o si ya hay hepatotoxicidad.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, ingesta tóxica + transaminasas elevadas = NAC ya. El nomograma sirve para decidir, no para demorar.",
    keyPoints: [
      "Dosis tóxica: >150 mg/kg o >7,5–10 g.",
      "NAC IV: 150 mg/kg/1 h → 50 mg/kg/4 h → 100 mg/kg/16 h.",
      "Máxima eficacia si se inicia antes de 8 horas.",
    ],
  }),
  q({
    id: "udea-real-67",
    examArea: "TOXICOLOGÍA",
    topic: "INTOXICACIÓN POR ORGANOFOSFORADOS",
    difficulty: "medium",
    tags: ["examen-real", "urgencias"],
    statement:
      "Hombre de 32 años, agricultor. Llevado a urgencias porque 30 minutos antes fue encontrado por su esposa con alteración del estado de conciencia. Antecedente: depresión, sin ningún tratamiento farmacológico. Examen físico: presión arterial 100/60 mmHg, frecuencia cardiaca 64 lat/min, frecuencia respiratoria 18/min, saturando 94% a oxígeno ambiente, Glasgow 10/15, pupilas mióticas puntiformes, sialorrea, rinorrea, diaforesis, sibilancias leves, peristaltismo aumentado, con múltiples deposiciones líquidas y abundantes. EKG: ritmo sinusal, sin bloqueo de canales de sodio, QT corregido de 470 mseg. ¿Cuál De los siguientes es el mejor enfoque terapéutico?",
    options: [
      [
        "Administrar 1 gr/Kg de carbón activado en dosis única vía sonda nasogástrica",
        "Con Glasgow 10 y sin vía aérea protegida hay riesgo de broncoaspiración; además no trata el síndrome colinérgico, que es lo que mata.",
      ],
      ["Administrar 1 mg IV de atropina directo y sin diluir. Si no hay mejoría, duplicar la dosis"],
      [
        "Administrar dosis única de 2 gramos de sulfato de magnesio IV y tomar EKG de control",
        "El QTc de 470 ms no obliga al magnesio y no trata la crisis colinérgica.",
      ],
      [
        "Administrar líquidos endovenosos, dar tratamiento de soporte y continuar vigilancia",
        "El soporte es necesario, pero sin antídoto el broncoespasmo y la broncorrea pueden llevar a falla respiratoria.",
      ],
    ],
    correct: "B",
    explanation:
      "Síndrome colinérgico muscarínico por inhibidores de colinesterasa (organofosforados/carbamatos) en un agricultor con depresión: miosis, sialorrea, rinorrea, diaforesis, broncorrea/sibilancias, hiperperistaltismo y diarrea (DUMBELS/SLUDGE), con alteración de conciencia.\n\nTratamiento: ABC y descontaminación de la piel, ATROPINA IV 1–2 mg (en bolo, sin diluir) duplicando la dosis cada 5 minutos hasta atropinizar (secreciones bronquiales secas, auscultación limpia, FC >80, PAS >80); luego infusión. Considerar oximas (pralidoxima) en organofosforados con síntomas nicotínicos. Benzodiacepinas si convulsiona. Evaluar riesgo suicida.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, el objetivo de la atropina es secar el pulmón, no dilatar la pupila. Dosis que se duplica cada 5 minutos hasta que el pecho suene limpio.",
    keyPoints: [
      "Organofosforados: síndrome muscarínico + nicotínico + SNC.",
      "Atropina 1–2 mg IV duplicando cada 5 min hasta secar secreciones bronquiales.",
      "Meta de atropinización: pulmón limpio, FC >80, PAS >80.",
    ],
  }),
  q({
    id: "udea-real-68",
    examArea: "MEDICINA INTERNA",
    topic: "ABSCESO RENAL",
    difficulty: "medium",
    tags: ["examen-real", "infectologia", "urologia"],
    statement:
      "Mujer de 30 años. En el servicio de urgencias le diagnostican pielonefritis derecha. Antecedentes negativos. Examen físico: signos vitales estables. Función renal conservada. Tomografía de abdomen contrastada: riñones sin hidronefrosis, imagen hipodensa en el riñón derecho, sin septos, con realce periférico de 20 mm única, sugestiva de absceso renal. ¿Cuál de las siguientes es la conducta correcta?",
    options: [
      ["Administrar antibiótico empírico según perfil de sensibilidad local por 10 días y control imagenológico"],
      [
        "Administrar ciprofloxacina 400 mg IV cada 12 horas por 10 días",
        "Fijar ciprofloxacina sin considerar la resistencia local (alta en Colombia para E. coli) no es la mejor conducta.",
      ],
      [
        "Realizar drenaje de la colección guiada por tomografía y administrar antibiótico empírico según perfil de sensibilidad local por 10 días",
        "El drenaje percutáneo se reserva para abscesos >3–5 cm o que no responden al antibiótico.",
      ],
      [
        "Remitir para realizar nefrostomía percutánea e iniciar antibiótico de amplio espectro",
        "La nefrostomía se indica en obstrucción (hidronefrosis), que esta paciente no tiene.",
      ],
    ],
    correct: "A",
    explanation:
      "Absceso renal pequeño (2 cm), único, en paciente estable, sin obstrucción. Los abscesos renales <3 cm responden en la mayoría de los casos solo a antibiótico (empírico según el perfil de resistencia local y ajustado al urocultivo/hemocultivo), con control por imagen.\n\nDrenaje percutáneo guiado: abscesos >3–5 cm, falla clínica a las 48–72 h o paciente séptico. Si hay obstrucción con infección: derivación urgente (nefrostomía o catéter JJ). Duración total: generalmente 2–4 semanas según evolución.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, absceso renal <3 cm y paciente estable: antibiótico y control. El drenaje es para los grandes o los que no mejoran.",
    keyPoints: [
      "Absceso renal <3 cm: antibiótico solo.",
      "Drenaje: >3–5 cm, sepsis o falla al tratamiento.",
      "Obstrucción + infección: nefrostomía o JJ urgente.",
    ],
  }),
  q({
    id: "udea-real-69",
    examArea: "CIRUGÍA",
    topic: "CRIPTORQUIDIA POSPUBERAL",
    difficulty: "medium",
    tags: ["examen-real", "urologia"],
    statement:
      "Adolescente de 16 años, consulta por ausencia del testículo derecho desde el nacimiento, sin sintomatología. Examen físico: pene con desarrollo normal, testículo izquierdo de volumen normal, sin masas ni dolor durante la evaluación, hemiescroto derecho con ausencia de testículo y no se palpa en canal inguinal. Clasificación Tanner genital 4. ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      [
        "Realizar laparoscopia y si el testículo se encuentra intraabdominal, realizar orquidopexia",
        "Después de la pubertad el testículo intraabdominal ya no es funcional para la espermatogénesis y conserva el riesgo de cáncer.",
      ],
      ["Realizar laparoscopia y si el testículo se encuentra intraabdominal, realizar orquidectomía"],
      [
        "Realizar una ecografía Doppler testicular para evaluar la ubicación exacta para definir el tratamiento",
        "La ecografía tiene baja sensibilidad para el testículo intraabdominal y no cambia la conducta; la laparoscopia es diagnóstica y terapéutica.",
      ],
      [
        "Seguimiento ambulatorio con ecografía Doppler testicular y niveles de testosterona control para evaluar la necesidad de suplementación",
        "Dejar un testículo intraabdominal sin tratar expone al riesgo de tumor de células germinales sin vigilancia posible.",
      ],
    ],
    correct: "B",
    explanation:
      "Testículo no palpable unilateral en un adolescente pospuberal (Tanner 4) con testículo contralateral normal.\n\nLa laparoscopia es el estudio de elección (diagnóstica y terapéutica); la ecografía no se recomienda para el no palpable. En pospuberales, el testículo intraabdominal no descendido tiene espermatogénesis prácticamente nula y riesgo aumentado de tumor de células germinales (seminoma), por lo que se realiza ORQUIDECTOMÍA (el contralateral sano mantiene la testosterona y la fertilidad). En niños, la orquidopexia se hace idealmente entre los 6 y 18 meses.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, criptorquidia en niño = orquidopexia antes de los 18 meses. Testículo intraabdominal en adolescente ya desarrollado = orquidectomía.",
    keyPoints: [
      "Testículo no palpable: laparoscopia (no ecografía).",
      "Orquidopexia ideal: 6–18 meses.",
      "Pospuberal intraabdominal con contralateral sano → orquidectomía.",
    ],
  }),
  q({
    id: "udea-real-70",
    examArea: "MEDICINA INTERNA",
    topic: "BACTERIURIA ASINTOMÁTICA",
    difficulty: "hard",
    tags: ["examen-real", "infectologia", "urologia"],
    statement:
      "Mujer de 30 años, consulta por 30 días de dolor lumbar derecho que se presenta con los movimientos, esfuerzos y cambios de posición. Revisión por sistemas: orina fétida y turbia sin disuria, polaquiuria, tenesmo urinario, fiebre, ni dolor abdominal. Antecedente: estrechez ureteral corregida e infecciones del tracto urinario a repetición en la niñez. Examen físico: presión arterial de 100/70 mmHg, frecuencia cardiaca 65/min, temperatura 36.8°C. Dolor a la palpación de región lumbar bilateral. Uroanálisis: nitritos negativos, 15 leucocitos por campo de alto poder y Gram con bacilos Gram negativos abundantes. Urocultivo: >100.000 unidades formadora de colonia de E. coli sensible a ciprofloxacina, trimetoprím sulfametoxazol, gentamicina y ceftriaxona. Creatinina 1.0 mg/dL. ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      ["Ordenar antiinflamatorios no esteroideos, aumentar el consumo de líquidos y ejercicio terapéutico"],
      [
        "Tratar como infección urinaria alta sintomática con ciprofloxacina oral 500 mg cada día por 7 días",
        "No hay síntomas urinarios ni fiebre que indiquen pielonefritis; además la dosis de ciprofloxacina sería cada 12 horas.",
      ],
      [
        "Tratar como infección urinaria sintomática con ciprofloxacina oral 500mg cada 12 horas por 7 días y solicitar un UROTAC",
        "El dolor es mecánico (con movimientos y posición, bilateral a la palpación), no renal; la orina turbia o fétida no es síntoma de infección.",
      ],
      [
        "Tratar como infección urinaria sintomática con gentamicina 80mg intramuscular cada día por la alta tasa de resistencia a la ciprofloxacina en nuestro medio",
        "Igual que las otras: trata una bacteriuria que no requiere antibiótico, y con una dosis inadecuada.",
      ],
    ],
    correct: "A",
    explanation:
      "Dos problemas separados:\n1. Dolor lumbar MECÁNICO: aparece con movimientos, esfuerzos y cambios de posición, dolor a la palpación paravertebral bilateral, sin fiebre ni síntomas urinarios → lumbalgia inespecífica: AINE por corto tiempo, mantenerse activa y ejercicio terapéutico.\n2. BACTERIURIA ASINTOMÁTICA: urocultivo positivo sin síntomas de infección (la orina turbia o con mal olor NO son síntomas de IVU, según IDSA 2019). No se trata, salvo en embarazadas y antes de procedimientos urológicos con sangrado de mucosa. Tratarla aumenta la resistencia y no mejora desenlaces.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, urocultivo positivo no es igual a infección. Sin síntomas urinarios ni fiebre, no hay antibiótico; y si el dolor cambia con el movimiento, es de la espalda, no del riñón.\n\n*Clave elaborada por el equipo Método Q (el examen no trae respuestas).*",
    keyPoints: [
      "Bacteriuria asintomática: no tratar (excepto embarazo y procedimientos urológicos).",
      "Orina turbia o fétida no son síntomas de IVU.",
      "Dolor que cambia con movimiento y posición = lumbalgia mecánica.",
    ],
  }),
];
