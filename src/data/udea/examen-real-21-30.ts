import { buildUdeaQuestion as q } from "./build-question";

/** Examen real de admisión UdeA · preguntas 21–30 (clave Método Q). */
export const UDEA_EXAMEN_REAL_21_30 = [
  q({
    id: "udea-real-21",
    examArea: "GINECOBSTETRICIA",
    topic: "DOLOR PÉLVICO CRÓNICO",
    difficulty: "hard",
    tags: ["examen-real", "dolor-cronico"],
    statement:
      "Mujer de 39 años consulta por dolor pélvico crónico de 2 años de evolución. El dolor es intermitente, de hasta 24 horas de duración, con intensidad 6/10, parcialmente aliviado por analgésicos. Refiere insomnio de conciliación, cansancio persistente, llanto fácil, y pensamientos negativos sobre su condición. Estos síntomas han afectado significativamente su calidad de vida ¿Cuál de las siguientes es la estrategia más adecuada para el manejo de esta paciente?",
    options: [
      [
        "Indicaciones de reposo en cama, suplementos vitamínicos y fármacos antiinflamatorios no esteroideos (AINES) asociado a acetaminofén como terapia multimodal",
        "El reposo empeora el dolor crónico y el desacondicionamiento; esta 'multimodal' ignora el componente afectivo.",
      ],
      [
        "Prescripción de gabapentina, ejercicios aeróbicos de intensidad moderada, técnicas de relajación según preferencia del paciente, y terapia cognitivo-conductual para abordar el catastrofismo",
        "La gabapentina no mostró beneficio frente a placebo en dolor pélvico crónico femenino (ensayo GaPP2, Lancet 2020) y no trata el insomnio ni el ánimo como la amitriptilina.",
      ],
      [
        "Prescripción de opioides a dosis bajas, evaluación psiquiátrica y psicológica, contraindicación de ejercicio físico",
        "Los opioides no son recomendados en dolor crónico no oncológico y el ejercicio es parte central del tratamiento.",
      ],
      [
        "Terapia conductiva-conductual asociado a educación sobre el dolor, amitriptilina, ejercicio físico o movimiento según preferencias, y técnicas de relajación y terapia somática para abordar el estrés",
      ],
    ],
    correct: "D",
    explanation:
      "Dolor pélvico crónico (>6 meses) con sensibilización central y comorbilidad afectiva (insomnio, fatiga, llanto, catastrofismo). El manejo es biopsicosocial e interdisciplinario:\n• Educación en neurociencia del dolor.\n• Terapia cognitivo-conductual.\n• Ejercicio/movimiento gradual según preferencia (no reposo).\n• Neuromodulador: amitriptilina (dolor + sueño + ánimo) o duloxetina.\n• Técnicas de relajación y terapias somáticas; fisioterapia de piso pélvico si hay disfunción.\nEvitar opioides.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, el dolor crónico se trata con educación, movimiento, mente y un neuromodulador. Reposo y opioides empeoran todo.\n\n*Clave elaborada por el equipo Método Q (el examen no trae respuestas).*",
    keyPoints: [
      "Dolor crónico = manejo biopsicosocial (educación, TCC, ejercicio).",
      "Amitriptilina: útil para dolor, insomnio y ánimo.",
      "Evitar reposo en cama y opioides.",
    ],
  }),
  q({
    id: "udea-real-22",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "PRESCRIPCIÓN DEL EJERCICIO (METs)",
    difficulty: "medium",
    tags: ["examen-real", "actividad-fisica", "riesgo-cardiovascular"],
    statement:
      "Hombre de 44 años. Viene para prescripción de ejercicio. Antecedentes: sobrepeso, hipertensión arterial y dislipidemia; actualmente en tratamiento con losartán y atorvastatina. Peso: 82 Kg, talla: 175 cm. Se prescribió caminata, 40 minutos, 4 veces por semana a una intensidad moderada (5 METs) entre 125-135 latidos por minuto y fortalecimiento muscular dos veces por semana. Con relación al volumen de ejercicio aeróbico prescrito ¿Cuál de las siguientes afirmaciones es correcta?",
    options: [
      [
        "Fue de 11,4 METs hora por semana y es el recomendado para disminuir el riesgo de mortalidad cardiovascular",
        "Error de cálculo: 5 METs × 160 min = 800 MET·min, es decir, 13,3 MET·h, no 11,4.",
      ],
      ["Fue de 13,3 METs hora por semana y es el recomendado para disminuir el riesgo de mortalidad cardiovascular"],
      [
        "Fue de 19,7 METs hora por semana y es mayor del recomendado para disminuir el riesgo de mortalidad cardiovascular",
        "Sobreestima el volumen; además, superar la meta no sería 'excesivo' para el beneficio cardiovascular.",
      ],
      [
        "Fue de 8,2 METs hora por semana y es menor del recomendado para disminuir el riesgo de mortalidad cardiovascular",
        "Subestima el volumen: el cálculo correcto da 13,3 MET·h/semana.",
      ],
    ],
    correct: "B",
    explanation:
      "Cálculo del volumen: intensidad × tiempo semanal.\n• Tiempo: 40 min × 4 = 160 min/semana = 2,67 h.\n• Volumen: 5 METs × 160 min = 800 MET·min/semana = 13,3 MET·h/semana.\n\nACSM/OMS: 150–300 min/semana de actividad moderada, equivalentes a ~500–1000 MET·min/semana (8,3–16,7 MET·h), es el rango asociado a la mayor reducción de mortalidad cardiovascular. 800 MET·min cae dentro de lo recomendado. Además, la frecuencia objetivo y el fortalecimiento 2 días/semana completan la prescripción FITT-VP.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, para medicina del deporte esta es TU pregunta: METs × minutos ÷ 60 = MET·hora. La meta es 500–1000 MET·min a la semana.",
    keyPoints: [
      "Volumen = METs × minutos/semana (÷ 60 para MET·h).",
      "Meta OMS/ACSM: 500–1000 MET·min/semana (150–300 min moderada).",
      "1 MET = 3,5 mL O₂/kg/min.",
    ],
  }),
  q({
    id: "udea-real-23",
    examArea: "NEUROLOGÍA",
    topic: "ACV ISQUÉMICO EN ANTICOAGULADO",
    difficulty: "hard",
    tags: ["examen-real", "acv", "urgencias"],
    statement:
      "Hombres de 58 años. Desde 4 horas previas a la consulta presenta hemiplejia derecha, afasia y asimetría facial. Antecedentes: hipertensión arterial y fibrilación auricular, anticoagulado con apixabán del cual tomó la última dosis 12 horas antes. Examen físico: Rankin modificado de 1 punto, presión arterial 182/104 mmHg, frecuencia cardiaca 78 lat/min, frecuencia respiratoria 16/min, saturación de oxígeno 93 % ambiente. Puntaje en la escala NIHSS de 15. Glucometría 118 mg/dL. Tomografía de cráneo simple sin evidencia de hemorragia intracerebral ni cambios isquémicos agudos. ¿Cuál de las siguientes es la conducta más adecuada para continuar la atención en este paciente?",
    options: [
      [
        "Indicar trombectomía mecánica",
        "La trombectomía requiere demostrar primero oclusión de un gran vaso; no se indica sin la angiografía.",
      ],
      [
        "Proceder con trombólisis intravenosa",
        "Contraindicada: tomó un anticoagulante directo hace menos de 48 horas (sin pruebas específicas de nivel normales).",
      ],
      ["Solicitar angiotomografía de cráneo y cuello"],
      [
        "Solicitar resonancia magnética con estudio de perfusión",
        "Dentro de las 6 horas no es necesaria la perfusión, y la RM retrasa la decisión; lo indicado es la angioTC inmediata.",
      ],
    ],
    correct: "C",
    explanation:
      "ACV isquémico de 4 horas, NIHSS 15 (déficit cortical: afasia + hemiplejía), en paciente anticoagulado con apixabán (última dosis hace 12 h). La trombólisis IV está contraindicada con DOAC en las últimas 48 h (salvo pruebas de actividad normales o reversión con idarucizumab en dabigatrán).\n\nEl paciente sí puede ser candidato a trombectomía mecánica (hasta 6 h, extensible a 24 h con selección por imagen), que no está contraindicada por la anticoagulación. Para indicarla se necesita demostrar oclusión de gran vaso: angiotomografía de cráneo y cuello inmediata.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, ¿anticoagulado y con ACV? Olvida el trombolítico y busca el trombo grande con angioTAC: el catéter sí le sirve.",
    keyPoints: [
      "DOAC <48 h = contraindicación para trombólisis IV.",
      "Trombectomía no está contraindicada por anticoagulación.",
      "Antes de trombectomía: angioTC para demostrar oclusión de gran vaso.",
    ],
  }),
  q({
    id: "udea-real-24",
    examArea: "URGENCIAS",
    topic: "TAQUICARDIA POR REENTRADA NODAL REFRACTARIA",
    difficulty: "medium",
    tags: ["examen-real", "arritmias", "cardiologia"],
    statement:
      "Mujer de 46 años. Ingresa al servicio de urgencias por palpitaciones y taquicardia persistente, sin dolor torácico ni dificultad respiratoria. Examen físico: presión arterial 122/80 mmHg, frecuencia cardiaca 160 lat/min, frecuencia respiratoria 23/min, saturación de oxígeno 94 % con fracción inspirada de oxígeno del 21%. EKG compatible con taquicardia por re-entrada nodal auriculoventricular. Se le realizaron maniobras vagales en supino tipo REVERT, en dos oportunidades, que no fueron efectivas luego, se realizó tratamiento secuencial de dosis adecuadas de adenosina y metoprolol intravenoso sin respuesta ¿Cuál de las siguientes es la conducta más adecuada a seguir?",
    options: [
      ["Cardioversión eléctrica sincronizada con 50 joules"],
      [
        "Reintentar maniobras vagales",
        "Ya fallaron dos veces con la técnica óptima (REVERT) y además fallaron fármacos.",
      ],
      [
        "Suministrar un bolo IV de 150 mg de amiodarona",
        "La amiodarona no es útil para terminar una reentrada nodal.",
      ],
      [
        "Suministrar un bolo IV de 50 mg de diltiazem 50 mg",
        "Dosis excesiva (lo usual es 0,25 mg/kg ≈ 15–20 mg) y combinar calcioantagonista IV tras betabloqueador IV aumenta el riesgo de hipotensión y bradicardia.",
      ],
    ],
    correct: "A",
    explanation:
      "Taquicardia supraventricular por reentrada nodal en paciente estable, refractaria a maniobras vagales (REVERT), adenosina y betabloqueador IV.\n\nESC 2019 / AHA: si fallan las maniobras vagales y los fármacos en paciente estable, el paso siguiente es la cardioversión eléctrica sincronizada (con sedación). Energía inicial para TSV de complejo estrecho regular: 50–100 J bifásico. A largo plazo: ablación por catéter (curativa en >95%).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, vagales → adenosina → betabloqueador o calcioantagonista → si nada funciona, electricidad sincronizada. No mezcles betabloqueador y diltiazem IV.",
    keyPoints: [
      "TSV estable refractaria a fármacos → cardioversión sincronizada.",
      "TSV estrecha regular: 50–100 J bifásico.",
      "Ablación: tratamiento definitivo de la reentrada nodal.",
    ],
  }),
  q({
    id: "udea-real-25",
    examArea: "URGENCIAS",
    topic: "PARO CARDÍACO EN FIBRILACIÓN VENTRICULAR",
    difficulty: "medium",
    tags: ["examen-real", "reanimacion", "aha-2020"],
    statement:
      "Hombre de 50 años, llega a un servicio de urgencias de un hospital por dolor intenso en el pecho, de 2 horas de evolución. Al llegar a triage colapsó súbitamente, dejó de responder, no respiraba y no se palpaba pulso. Se activó código azul y lo pasaron a la sala de reanimación. Le verificaron ritmo de paro, que es una fibrilación ventricular, y lo desfibrilaron con 200 J bifásico. Además de continuar el masaje cardiaco por dos minutos en una relación de 30 compresiones por dos ventilaciones y canalizar la vena ¿Cuál de los siguientes es el paso para seguir según la guía de reanimación de la AHA del 2020?",
    options: [
      [
        "Aplicar 1 ampolla de adrenalina y a los dos minutos verificar ritmo de paro",
        "En ritmo desfibrilable la adrenalina se administra después de la SEGUNDA descarga, no tras la primera.",
      ],
      [
        "Aplicar 1 ampolla de adrenalina, realizar intubación orotraqueal y a los dos minutos verificar ritmo de paro",
        "Además de adelantar la adrenalina, la intubación no es prioritaria si la ventilación con bolsa-máscara es efectiva.",
      ],
      ["Verificar ritmo de paro a los dos minutos"],
    ],
    correct: "C",
    explanation:
      "Algoritmo AHA 2020 de paro con ritmo desfibrilable (FV/TV sin pulso):\n1. RCP + oxígeno + monitor → ritmo desfibrilable → DESCARGA.\n2. RCP 2 minutos + acceso IV/IO.\n3. Verificar ritmo → si sigue desfibrilable → DESCARGA.\n4. RCP 2 minutos + ADRENALINA 1 mg cada 3–5 min + considerar vía aérea avanzada.\n5. Verificar ritmo → DESCARGA → RCP + AMIODARONA 300 mg (o lidocaína).\nEn ritmos NO desfibrilables (AESP/asistolia) la adrenalina se da lo antes posible.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en FV: choque, 2 minutos de RCP con vena, mirar ritmo. La adrenalina llega después del segundo choque y la amiodarona después del tercero.\n\n*En el material original solo se leen tres opciones.*",
    keyPoints: [
      "FV/TVSP: adrenalina tras la 2.ª descarga, amiodarona tras la 3.ª.",
      "Ciclos de 2 minutos de RCP entre verificaciones de ritmo.",
      "AESP/asistolia: adrenalina lo antes posible.",
    ],
  }),
  q({
    id: "udea-real-26",
    examArea: "URGENCIAS",
    topic: "FIBRILACIÓN AURICULAR INESTABLE",
    difficulty: "medium",
    tags: ["examen-real", "arritmias", "cardiologia"],
    statement:
      "Hombre de 60 años. Consulta por dos horas de palpitaciones y disnea. Examen físico: frecuencia cardiaca 184 lat/min, frecuencia respiratoria 28 /min, saturación periférica de oxígeno de 89 % al ambiente, presión arterial 108/70 mmHg, temperatura 36°C. Mal estado general, pálido, diaforético, somnoliento, con crépitos en ambos campos pulmonares, llenado capilar de cuatro segundos. Electrocardiograma: taquicardia, ritmo no sinusal, R-R irregular y complejos QRS menores a 120 ms alternantes en voltaje. ¿Cuál de las siguientes conductas terapéuticas es la más adecuada para este paciente?",
    options: [
      [
        "Amiodarona, 150 mg intravenosos en bolo y luego en infusión continua",
        "La amiodarona es para el paciente estable o como complemento; con signos de inestabilidad no se debe esperar su efecto.",
      ],
      [
        "Maniobra de Valsalva modificada con monitoreo electrocardiográfico continuo",
        "Las maniobras vagales no terminan una fibrilación auricular y retrasan el tratamiento del paciente inestable.",
      ],
      [
        "Metoprolol 5 mg intravenosos en bolo y tomar un electrocardiograma de control",
        "El betabloqueador IV en edema pulmonar e hipoperfusión puede precipitar choque cardiogénico.",
      ],
      ["Sedación y cardioversión eléctrica sincrónica emergente"],
    ],
    correct: "D",
    explanation:
      "Taquicardia irregular de complejo estrecho = fibrilación auricular con respuesta ventricular rápida. El paciente está INESTABLE: alteración del estado de conciencia (somnoliento), edema pulmonar (crépitos, SatO₂ 89%), hipoperfusión (llenado capilar 4 s, diaforesis, palidez), aunque la presión aún no esté baja.\n\nTaquiarritmia inestable → cardioversión eléctrica sincronizada inmediata con sedación (FA: 120–200 J bifásico). La anticoagulación previa no debe retrasarla en la emergencia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, inestabilidad no es solo hipotensión: confusión, edema pulmonar o mala perfusión bastan. Inestable = electricidad sincronizada.",
    keyPoints: [
      "Signos de inestabilidad: hipotensión, alteración mental, choque, dolor isquémico, falla cardíaca aguda.",
      "Taquiarritmia inestable → cardioversión sincronizada.",
      "FA: 120–200 J bifásico.",
    ],
  }),
  q({
    id: "udea-real-27",
    examArea: "MEDICINA INTERNA",
    topic: "POLIARTRITIS SERONEGATIVA",
    difficulty: "hard",
    tags: ["examen-real", "reumatologia"],
    statement:
      "Hombre de 52 años. Consulta por dolor articular de 3 meses de evolución en la segunda a quinta articulaciones metacarpofalángicas y en la tercera a quinta interfalángicas proximales de ambas manos. El dolor es de predominio matutino y se asocia a rigidez matinal de 60 minutos. Antecedentes personales: hipertensión arterial controlada con enalapril e hidroclorotiazida, obesidad. Antecedentes familiares: madre con artritis reumatoide. Examen físico: IMC 32 Kg/m², squeeze test bilateral positivo y evidencia de sinovitis en la cuarta y quinta interfalángicas proximales de la mano izquierda. Exámenes: hemograma normal, PCR 4 mg/dL (normal 0,4 a 1 mg/dL), VSG 45 mm/hora (normal hasta 10 mm/hora), ácido úrico 8,5 mg/dL (normal 3,1 a 7,8 mg/dL), factor reumatoide (FR) y anticuerpos contra el péptido citrulinado cíclico (anti CCP) negativos. ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      [
        "Iniciar prednisolona 60 mg/día, leflunomida 20 mg/día y suplementar calcio con vitamina D puesto que tiene artritis reumatoide seronegativa con alta actividad",
        "Se adelanta al diagnóstico de exclusión, y 60 mg/día de prednisolona es una dosis excesiva para AR (se usan dosis bajas como puente).",
      ],
      [
        "Realizar radiografías comparativas de manos, caderas y rodillas para confirmar el diagnóstico más probable que es osteoartritis",
        "La osteoartritis no afecta las metacarpofalángicas, no da rigidez de 60 minutos ni eleva PCR y VSG.",
      ],
      [
        "Solicitar exámenes adicionales para evaluar la presencia de otras posibles causas de poliartritis crónica simétrica dada la negatividad del FR y anti-CCP",
      ],
      [
        "Suspender la hidroclorotiazida e iniciar alopurinol 300 mg/día más colchicina 0,5 mg/día ya que tiene una artritis gotosa crónica",
        "La hiperuricemia (por la tiazida) no es gota: la gota crónica no es simétrica de pequeñas articulaciones sin episodios agudos previos ni tofos.",
      ],
    ],
    correct: "C",
    explanation:
      "Poliartritis inflamatoria simétrica de pequeñas articulaciones (MCF e IFP), rigidez matinal >30 min, squeeze test positivo y reactantes elevados: el patrón es de artritis reumatoide, pero con FR y anti-CCP negativos.\n\nLa AR seronegativa es un diagnóstico de exclusión: antes de iniciar FARME hay que descartar otras poliartritis simétricas crónicas — virales (hepatitis B y C, parvovirus, VIH), artritis psoriásica, LES (ANA), gota/pseudogota (cristales, radiografías), hemocromatosis, sarcoidosis y paraneoplásicas. Una vez confirmada, el ancla es metotrexato (con glucocorticoide a dosis baja como puente).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, cuando el FR y el anti-CCP salen negativos, primero descarta los imitadores; luego metotrexato. Ácido úrico alto con tiazida no es gota.\n\n*Clave elaborada por el equipo Método Q (el examen no trae respuestas).*",
    keyPoints: [
      "AR seronegativa: diagnóstico de exclusión.",
      "Descartar virales, psoriásica, LES, cristales, hemocromatosis.",
      "FARME ancla: metotrexato; glucocorticoide en dosis baja como puente.",
    ],
  }),
  q({
    id: "udea-real-28",
    examArea: "MEDICINA INTERNA",
    topic: "ENFERMEDAD CORONARIA CRÓNICA",
    difficulty: "medium",
    tags: ["examen-real", "cardiologia"],
    statement:
      "Hombre de 65 años. Consulta por dolor torácico intermitente de 6 meses de evolución, que describe como opresivo y que aparece al caminar distancias largas y desaparece al descansar. Antecedentes: hipertensión arterial, dislipidemia y es fumador activo. Examen físico: no se encuentran hallazgos relevantes. Prueba de ecocardiografía de estrés con dobutamina positiva para isquemia miocárdica inducida por estrés en el territorio de la arteria circunfleja (hipocinesia en pared lateral); fracción de eyección normal. ¿Cuál de las siguientes es la conducta más adecuada en este paciente?",
    options: [
      [
        "Hospitalizar para realizar coronariografía y revascularizar según hallazgos",
        "La hospitalización es para síndrome coronario agudo; esta es angina estable.",
      ],
      ["Optimizar el tratamiento médico antes de considerar revascularización"],
      [
        "Realizar una coronariografía ambulatoria y revascularizar según hallazgos",
        "En angina estable sin criterios de alto riesgo, la estrategia invasiva inicial no reduce muerte ni infarto frente al tratamiento médico óptimo (ISCHEMIA).",
      ],
      [
        "Realizar una gammagrafía de perfusión miocárdica",
        "Ya hay una prueba de isquemia positiva; repetir otra prueba funcional no cambia la conducta.",
      ],
    ],
    correct: "B",
    explanation:
      "Angina estable (síndrome coronario crónico) con isquemia en un solo territorio (circunfleja), fracción de eyección normal y síntomas solo con esfuerzos grandes: no hay criterios de alto riesgo (tronco, enfermedad de 3 vasos, FEVI baja, isquemia extensa).\n\nESC 2019/2024 y estudio ISCHEMIA: el primer paso es el tratamiento médico óptimo — antiagregante (ASA), estatina de alta intensidad, antianginosos (betabloqueador o calcioantagonista, nitratos sublinguales), control de presión, y DEJAR DE FUMAR. Se considera coronariografía si los síntomas persisten pese al tratamiento o aparecen criterios de alto riesgo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, angina estable de bajo riesgo: primero pastillas y cero cigarrillo. El cateterismo es para el que sigue con síntomas o tiene alto riesgo.",
    keyPoints: [
      "Síndrome coronario crónico de bajo riesgo → tratamiento médico óptimo.",
      "ISCHEMIA: invasivo inicial no reduce muerte/IAM en estables.",
      "Revascular si síntomas refractarios o anatomía/función de alto riesgo.",
    ],
  }),
  q({
    id: "udea-real-29",
    examArea: "MEDICINA INTERNA",
    topic: "EXACERBACIÓN DE EPOC",
    difficulty: "easy",
    tags: ["examen-real", "neumologia"],
    statement:
      "Hombre de 65 años. Acude al servicio de urgencias por una semana de aumento de la disnea, tos productiva y sibilancias. Antecedente: EPOC de larga evolución, sin antecedente de falla cardíaca. Examen físico: frecuencia respiratoria 26 /min, saturación de oxígeno del 88 % con mascarilla de oxígeno a 3 litros por minuto, uso de músculos accesorios. Gases arteriales: pH 7.32, PaCO₂ 52 mmHg, PaO₂ 58 mmHg. Creatinina: 0.9 mg/dL. ¿Cuál de las siguientes estrategias de tratamiento se le debe recomendar a este paciente para reducir el riesgo de muerte?",
    options: [
      [
        "Administrar broncodilatadores de corta acción a dosis alta y frecuente",
        "Son necesarios para los síntomas, pero no han demostrado reducir la mortalidad.",
      ],
      [
        "Administrar corticosteroides sistémicos",
        "Acortan la recuperación y reducen la falla del tratamiento, pero no la mortalidad.",
      ],
      [
        "Aumentar el flujo de oxígeno hasta lograr una saturación del 95 %",
        "En EPOC retenedor de CO₂ la meta es 88–92%; sobreoxigenar empeora la hipercapnia y la acidosis.",
      ],
      ["Iniciar ventilación mecánica no invasiva con presión positiva"],
    ],
    correct: "D",
    explanation:
      "Exacerbación de EPOC con acidosis respiratoria hipercápnica (pH 7,32 <7,35; PaCO₂ 52 >45) y trabajo respiratorio aumentado. GOLD: indicación de ventilación no invasiva (VMNI, BiPAP), la única intervención en la exacerbación que ha demostrado REDUCIR LA MORTALIDAD y la necesidad de intubación.\n\nTodo paciente recibe además broncodilatadores de acción corta, corticoide sistémico (prednisona 40 mg × 5 días), antibiótico si el esputo es purulento, y oxígeno titulado a 88–92%.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, EPOC con pH <7,35 y CO₂ alto = BiPAP. Es lo único que te cambia la mortalidad.",
    keyPoints: [
      "pH <7,35 + PaCO₂ >45 en exacerbación → VMNI.",
      "VMNI reduce mortalidad e intubación.",
      "Meta de saturación en EPOC: 88–92%.",
    ],
  }),
  q({
    id: "udea-real-30",
    examArea: "MEDICINA INTERNA",
    topic: "ASMA LEVE EN ADULTOS",
    difficulty: "medium",
    tags: ["examen-real", "neumologia", "gina", "deporte"],
    statement:
      "Hombre de 20 años. En los últimos 3 meses presenta disnea y tos durante el día, en promedio 2 días a la semana, precipitado por el ejercicio y las bajas temperaturas ambientales. Sin síntomas nocturnos. Antecedentes: asma diagnosticada a los 15 años sin tratamiento farmacológico ni consultas recientes a urgencias; sin alergias. Examen físico: frecuencia respiratoria 18/min saturación de oxígeno 95 % al aire ambiente. Escasas sibilancias, sin signos de trabajo respiratorio. ¿Cuál de las siguientes es el mejor opción farmacológica para este paciente?",
    options: [
      [
        "Formoterol y budesonida en dosis diaria fija",
        "Para síntomas ≤2–3 días/semana no se necesita mantenimiento diario; el esquema preferido es a necesidad.",
      ],
      ["Formoterol y budesonida solo en caso de síntomas"],
      [
        "Salbutamol solo en caso de síntomas y beclometasona en dosis diaria fija",
        "Es una alternativa (ruta 2 de GINA), pero con menor reducción de crisis graves y peor adherencia que budesonida-formoterol a necesidad.",
      ],
      [
        "Salbutamol y beclometasona solo en caso de síntomas",
        "Es aceptable en GINA como alternativa, pero no es la opción preferida.",
      ],
    ],
    correct: "B",
    explanation:
      "Asma leve (síntomas 2 días/semana, sin despertares, sin crisis recientes) en adulto, con broncoespasmo inducido por ejercicio y frío.\n\nGINA (desde 2019) desaconseja el SABA solo. La ruta preferida (ruta 1) en pasos 1–2 es budesonida-formoterol a dosis baja A NECESIDAD (alivio antiinflamatorio, AIR), que reduce las exacerbaciones graves ~60% frente al salbutamol solo. También puede usarse antes del ejercicio. Si no está controlado, pasa a mantenimiento y rescate con el mismo inhalador (MART).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, para medicina del deporte: el atleta con asma leve usa budesonida-formoterol a necesidad y antes de entrenar. El salbutamol solo ya no se recomienda.",
    keyPoints: [
      "GINA: nunca SABA solo en adolescentes y adultos.",
      "Asma leve: budesonida-formoterol a necesidad (AIR).",
      "Broncoespasmo por ejercicio: budesonida-formoterol antes del esfuerzo, calentamiento.",
    ],
  }),
];
