import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición 21 jun 2025 · Bloque Cirugía General (#31–#38).
 * Banco exclusivo del examen oficial quincenal.
 */
export const UCC_CONV_2025_06_21_SURGERY_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-06-21-31",
    university: "UCC",
    examArea: "Cirugía General / Abdomen Agudo / Apendicitis",
    topic: "Cirugía General",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "cirugia", "apendicitis_aguda"],
    statement:
      "Paciente masculino de 28 años, previamente sano, consulta por dolor abdominal de 36 horas de evolución que inició en región periumbilical y migró a fosa ilíaca derecha. Refiere anorexia, náuseas y dos episodios eméticos de contenido bilioso. Al examen: regular estado general, PA 110/70 mmHg, FC 98 lpm, FR 18 rpm, temperatura 37.8 °C. Abdomen: ruidos hidroaéreos disminuidos, dolor a la palpación profunda en FID con defensa voluntaria y signo de Blumberg positivo. Murphy negativo. Leucocitos 14500/mm³ (neutrofilia 88%). Ecografía abdominal: apéndice cecal no compresible de 9 mm de diámetro, con hiperecogenicidad de la grasa periapendicular y leve líquido libre en fondo de saco de Douglas. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar antibioticoterapia intravenosa y apendicectomía laparoscópica de urgencia.",
      },
      {
        id: "B",
        label: "B",
        text: "Manejo ambulatorio con antibióticos orales y control en 48 horas.",
        distractorProfile: "manejo_ambulatorio_apendicitis",
        incorrectFeedback:
          "Apendicitis aguda confirmada con criterios clínicos, ecográficos y leucocitosis requiere manejo quirúrgico; no es adecuado el alta ambulatoria con antibióticos orales con peritonitis localizada.",
      },
      {
        id: "C",
        label: "C",
        text: "Solicitar tomografía computarizada de abdomen con contraste antes de decidir cirugía.",
        distractorProfile: "tac_innecesaria",
        incorrectFeedback:
          "La ecografía es concluyente; retrasar la cirugía para TAC no está indicado cuando la clínica y la ecografía son suficientes y hay signos de peritonitis local.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar antibioticoterapia intravenosa y observar evolución por 24 horas.",
        distractorProfile: "antibiotico_solo",
        incorrectFeedback:
          "El manejo exclusivo con antibióticos se reserva para casos seleccionados; aquí hay compromiso peritoneal y el tratamiento quirúrgico es la conducta estándar.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Apendicitis aguda típica (dolor migratorio, anorexia, leucocitosis, ecografía con apéndice >6 mm, grasa hiperecogénica y líquido libre): apendicectomía de urgencia, preferiblemente laparoscópica, con antibioticoterapia parenteral según protocolo.",
    keyPoints: [
      "Dolor migratorio a FID + anorexia + leucocitosis → apendicitis.",
      "Ecografía con apéndice no compresible >6 mm confirma diagnóstico.",
      "No retrasar cirugía para TAC si ecografía es concluyente.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-32",
    university: "UCC",
    examArea: "Cirugía General / Vías Biliares / Colecistitis",
    topic: "Cirugía General",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "cirugia", "colecistitis_aguda"],
    statement:
      "Mujer de 52 años, con antecedente de litiasis vesicular asintomática diagnosticada hace 3 años, consulta por dolor en hipocondrio derecho de 48 horas de evolución, irradiado a la espalda, asociado a náuseas y vómitos. Al examen: PA 130/80 mmHg, FC 110 lpm, FR 22 rpm, temperatura 38.5 °C. Abdomen: Murphy positivo, defensa a la palpación profunda en hipocondrio derecho, ruidos hidroaéreos disminuidos. Leucocitos 16800/mm³, bilirrubina total 1.2 mg/dL, amilasa normal. Ecografía: vesícula distendida, pared engrosada (5 mm), barro biliar y líquido perivesicular, sin dilatación de vía biliar. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar analgesia y antibióticos intravenosos y programar colecistectomía laparoscópica diferida a 6–8 semanas.",
        distractorProfile: "colecistectomia_diferida",
        incorrectFeedback:
          "En colecistitis aguda, la colecistectomía temprana (<72 h) está asociada a menor morbilidad que la diferida en pacientes candidatos a cirugía.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar antibioticoterapia intravenosa, analgesia y colecistectomía laparoscópica temprana (dentro de las 72 horas).",
      },
      {
        id: "C",
        label: "C",
        text: "Manejo con analgesia y antieméticos, sin antibióticos, y alta programada con colecistectomía electiva en 4 semanas.",
        distractorProfile: "analgesia_sin_antibioticos",
        incorrectFeedback:
          "La colecistitis aguda es un proceso infeccioso-inflamatorio; el manejo sin antibióticos aumenta riesgo de perforación o absceso.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar colangiopancreatografía retrógrada endoscópica (CPRE) y luego colecistectomía.",
        distractorProfile: "cpre_rutinaria",
        incorrectFeedback:
          "La CPRE está indicada con coledocolitiasis o colangitis; aquí no hay dilatación de vía biliar ni hiperbilirrubinemia.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Colecistitis aguda (Murphy positivo, fiebre, leucocitosis, pared vesicular engrosada, líquido perivesicular): ATB IV, analgesia, ayuno y colecistectomía laparoscópica temprana dentro de las primeras 72 horas.",
    keyPoints: [
      "Colecistitis aguda: clínica + ecografía (Murphy, pared >4 mm, líquido perivesicular).",
      "ATB IV + colecistectomía temprana (<72 h).",
      "CPRE solo si coledocolitiasis o colangitis.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-33",
    university: "UCC",
    examArea: "Cirugía General / Abdomen Agudo / Obstrucción Intestinal",
    topic: "Cirugía General",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "cirugia", "obstruccion_intestinal"],
    statement:
      "Paciente femenina de 68 años, con antecedente de histerectomía por miomatosis hace 10 años, consulta por dolor abdominal tipo cólico de 3 días, distensión abdominal y ausencia de deposiciones y flatos en 48 horas. Refiere náuseas y vómitos de contenido fecaloideo. Al examen: PA 100/60 mmHg, FC 115 lpm, FR 24 rpm, temperatura 38.1 °C. Abdomen distendido, timpánico, ruidos hidroaéreos aumentados con tonos metálicos, dolor difuso, defensa involuntaria en cuadrantes inferiores. Leucocitos 18000/mm³. Radiografía de abdomen: niveles hidroaéreos en asas delgadas, ausencia de gas en colon. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar manejo conservador con sonda nasogástrica, líquidos intravenosos y enemas de solución salina.",
        distractorProfile: "enemas_en_obstruccion_mecanica",
        incorrectFeedback:
          "Los enemas están contraindicados en obstrucción mecánica completa con peritonismo; pueden precipitar perforación.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar laparotomía exploratoria de urgencia sin medidas de descompresión previas.",
        distractorProfile: "laparotomia_sin_manejo_previo",
        incorrectFeedback:
          "Antes de cirugía debe colocarse SNG y reanimar con líquidos, salvo perforación o isquemia con inestabilidad extrema.",
      },
      {
        id: "C",
        label: "C",
        text: "Colocar sonda nasogástrica, iniciar líquidos intravenosos, antibioticoterapia y valorar cirugía ante obstrucción mecánica completa con signos de alarma.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar laxantes orales y observar evolución por 24 horas.",
        distractorProfile: "laxantes_en_obstruccion",
        incorrectFeedback:
          "Los laxantes están contraindicados en obstrucción mecánica; hay peritonismo y leucocitosis que sugieren complicación.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Obstrucción intestinal mecánica (vómito fecaloideo, niveles hidroaéreos, sin gas en colon) con signos de alarma (fiebre, taquicardia, defensa, leucocitosis): SNG, líquidos IV, ATB y evaluación quirúrgica urgente. Enemas y laxantes contraindicados.",
    keyPoints: [
      "Obstrucción mecánica + peritonismo + leucocitosis → sospecha de estrangulación.",
      "SNG + líquidos IV + ATB; cirugía si alarma o no resolución.",
      "No enemas ni laxantes en obstrucción completa.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-34",
    university: "UCC",
    examArea: "Cirugía General / Hemorragia Digestiva / Hemorragia Digestiva Baja",
    topic: "Cirugía General",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "cirugia", "hemorragia_digestiva_baja"],
    statement:
      "Paciente masculino de 72 años, con antecedente de hipertensión y enfermedad diverticular, consulta por rectorragia de 4 horas con dos episodios de sangrado abundante (~300 mL), mareo y sudoración. Al examen: PA 90/60 mmHg, FC 120 lpm, FR 22 rpm, SpO₂ 95%. Abdomen blando, no doloroso, ruidos presentes. Tacto rectal: sangre roja sin masas. Hemoglobina 8.5 g/dL, hematocrito 25%, plaquetas 250000/mm³, INR 1.1. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar colonoscopia de urgencia sin estabilización previa para identificar el punto de sangrado.",
        distractorProfile: "colonoscopia_sin_estabilizacion",
        incorrectFeedback:
          "La colonoscopia urgente está contraindicada en inestabilidad hemodinámica; primero estabilizar con accesos IV, líquidos y transfusión.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar endoscopia digestiva alta como primera línea diagnóstica.",
        distractorProfile: "endoscopia_alta_primera",
        incorrectFeedback:
          "La rectorragia masiva sugiere origen colónico; tras estabilización, colonoscopia o angioembolización según disponibilidad.",
      },
      {
        id: "C",
        label: "C",
        text: "Solicitar tomografía computarizada de abdomen y pelvis con contraste antes de cualquier intervención.",
        distractorProfile: "tac_antes_estabilizacion",
        incorrectFeedback:
          "La TAC no debe retrasar la reanimación en sangrado activo con hipotensión.",
      },
      {
        id: "D",
        label: "D",
        text: "Establecer dos accesos venosos, iniciar reanimación con líquidos y transfusión según necesidad, y preparar colonoscopia urgente o angioembolización.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Hemorragia digestiva baja masiva con inestabilidad hemodinámica: resucitación con dos accesos IV, cristaloides y transfusión, corrección de coagulopatía si existe, luego colonoscopia urgente o angioembolización según estabilidad y disponibilidad.",
    keyPoints: [
      "HDB masiva: estabilización hemodinámica primero.",
      "Colonoscopia urgente o angioembolización tras resucitación.",
      "No retrasar reanimación por TAC o endoscopia alta de rutina.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-35",
    university: "UCC",
    examArea: "Cirugía General / Trauma / Abdomen Cerrado",
    topic: "Cirugía General",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "cirugia", "trauma_abdominal_cerrado"],
    statement:
      "Hombre de 34 años, sin antecedentes, involucrado en accidente de tránsito (impacto frontal contra volante) hace 2 horas. Refiere dolor abdominal difuso, sin pérdida de conciencia. Al examen: PA 140/85 mmHg, FC 95 lpm, FR 20 rpm, SpO₂ 98%. Abdomen: dolor en hipocondrios, defensa leve, ruidos hidroaéreos disminuidos. FAST: positivo con líquido libre en espacio de Morrison (3 mm) y en Douglas, sin derrame perihepático significativo. Hemoglobina 13.5 g/dL, hematocrito 40%. Permanece hemodinámicamente estable durante 2 horas de observación con reanimación con cristaloides. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Continuar observación con monitoreo hemodinámico estricto y repetir FAST o realizar TAC abdominal si hay cambios clínicos.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar laparotomía exploratoria inmediata por FAST positivo.",
        distractorProfile: "laparotomia_todos_fast_positivo",
        incorrectFeedback:
          "FAST positivo en paciente estable no obliga laparotomía inmediata; se observa o se realiza TAC selectiva para caracterizar lesión.",
      },
      {
        id: "C",
        label: "C",
        text: "Repetir FAST inmediatamente y si persiste positivo, realizar laparotomía.",
        distractorProfile: "repetir_fast_sin_reevaluar",
        incorrectFeedback:
          "La decisión debe basarse en evolución hemodinámica y examen físico, no solo en repetir FAST de inmediato.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar tomografía computarizada de abdomen y pelvis con contraste de inmediato en todos los casos, sin observación.",
        distractorProfile: "tac_obligatoria_estable",
        incorrectFeedback:
          "En trauma estable con FAST positivo leve, observación seriada con TAC selectiva si empeora es conducta aceptada; la TAC inmediata no es la única opción correcta.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Trauma abdominal cerrado, FAST positivo con escaso líquido libre pero hemodinámicamente estable y hemoglobina normal: observación con monitoreo estricto, repetir FAST o TAC si hay deterioro clínico. Laparotomía si inestabilidad o peritonitis.",
    keyPoints: [
      "FAST positivo + estable ≠ laparotomía automática.",
      "Observación seriada o TAC selectiva según evolución.",
      "Cirugía si inestabilidad hemodinámica o peritonitis.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-36",
    university: "UCC",
    examArea: "Cirugía General / Pared Abdominal / Hernias",
    topic: "Cirugía General",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "cirugia", "hernia_estrangulada"],
    statement:
      "Paciente masculino de 60 años, con hernia inguinal derecha reductible de larga evolución, consulta por dolor intenso en región inguinal derecha de 6 horas, náuseas, vómitos y distensión abdominal. La hernia no se reduce. Al examen: PA 110/70 mmHg, FC 110 lpm, FR 22 rpm, temperatura 38.0 °C. Masa inguinal derecha de 5 cm, tensa, dolorosa, no reductible, con cambios de coloración en piel suprayacente. Abdomen distendido, ruidos disminuidos, defensa en hemiabdomen derecho. Leucocitos 16000/mm³. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Intentar reducción manual de la hernia bajo sedación y observación clínica.",
        distractorProfile: "reduccion_ciega_estrangulada",
        incorrectFeedback:
          "La reducción ciega con signos de estrangulación puede ocasionar reducción en masa o perforación; está contraindicada.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar herniorrafia de urgencia, evaluar viabilidad del intestino y resecar si hay necrosis.",
      },
      {
        id: "C",
        label: "C",
        text: "Manejo expectante con analgesia y antibióticos, programar herniorrafia electiva en 8 semanas.",
        distractorProfile: "manejo_expectante_hernia",
        incorrectFeedback:
          "Hernia con estrangulación y peritonitis es urgencia quirúrgica; el manejo expectante aumenta riesgo de perforación y sepsis.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar herniorrafia sin exploración de la viabilidad intestinal si el paciente está estable.",
        distractorProfile: "herniorrafia_sin_explorar_viabilidad",
        incorrectFeedback:
          "En hernia estrangulada es obligatorio explorar viabilidad intestinal; dejar tejido necrótico conlleva perforación postoperatoria.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Hernia inguinal estrangulada (no reductible, dolor intensa, cambios cutáneos, obstrucción, peritonismo, leucocitosis): cirugía de urgencia con exploración de viabilidad intestinal y resección si hay necrosis. No reducción manual ciega.",
    keyPoints: [
      "Hernia estrangulada: no reductible + dolor + cambios cutáneos + peritonismo.",
      "Cirugía urgente + explorar viabilidad intestinal.",
      "Reducción manual contraindicada.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-37",
    university: "UCC",
    examArea: "Cirugía General / Páncreas / Pancreatitis Aguda",
    topic: "Cirugía General",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "cirugia", "pancreatitis_aguda"],
    statement:
      "Paciente femenina de 45 años, con antecedente de litiasis vesicular, consulta por dolor epigástrico e hipocondrio izquierdo de inicio súbito hace 24 horas, irradiado a la espalda, con náuseas y vómitos tras ingesta grasosa. Al examen: PA 140/90 mmHg, FC 115 lpm, FR 24 rpm, temperatura 38.2 °C. Abdomen: dolor en epigastrio y flanco izquierdo, defensa leve, Murphy negativo. Leucocitos 17000/mm³, amilasa 950 U/L, lipasa 1200 U/L, glucosa 140 mg/dL, BUN 25 mg/dL. TAC: páncreas aumentado de tamaño con necrosis en cola (30%), líquido peripancreático, sin gas en retroperitoneo. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar antibioticoterapia de amplio espectro profiláctica y CPRE urgente.",
        distractorProfile: "antibiotico_profilactico_y_ercp",
        incorrectFeedback:
          "Los antibióticos profilácticos no están indicados de rutina; la CPRE urgente solo si hay colangitis o coledocolitiasis obstructiva.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar restricción hídrica agresiva y analgesia, y programar colecistectomía en el mismo ingreso.",
        distractorProfile: "restriccion_hidrica_y_cirugia_precoz",
        incorrectFeedback:
          "La restricción hídrica está contraindicada; se recomienda reanimación vigorosa con cristaloides. La colecistectomía se difiere hasta resolución del cuadro agudo.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar reanimación hídrica agresiva con cristaloides, analgesia, ayuno, monitorización en cuidados intermedios y reevaluar antibióticos según evolución.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar laparotomía exploratoria para drenaje de necrosis y colecistectomía inmediata.",
        distractorProfile: "laparotomia_necrosis_no_infectada",
        incorrectFeedback:
          "La cirugía temprana en necrosis estéril no está indicada; el manejo es médico con líquidos, analgesia y soporte.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Pancreatitis aguda biliar grave (necrosis ~30%, taquicardia, leucocitosis): reanimación hídrica agresiva, analgesia, ayuno, monitorización en UCI/intermedios. ATB solo si necrosis infectada; CPRE si colangitis; no cirugía precoz en necrosis estéril.",
    keyPoints: [
      "Pancreatitis grave: líquidos IV agresivos + analgesia + ayuno.",
      "ATB solo si necrosis infectada; CPRE si colangitis.",
      "No cirugía precoz en necrosis estéril.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-38",
    university: "UCC",
    examArea: "Cirugía General / Vías Biliares / Cólico Biliar vs Colecistitis",
    topic: "Cirugía General",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "cirugia", "colico_biliar_colecistitis"],
    statement:
      "Paciente femenina de 35 años, con litiasis vesicular conocida, consulta por dolor en hipocondrio derecho de 4 horas, tipo cólico, irradiado a la espalda, sin fiebre ni vómitos. El dolor cede parcialmente con analgesia. Al examen: PA 120/80 mmHg, FC 80 lpm, FR 18 rpm, temperatura 36.8 °C. Abdomen: dolor superficial en hipocondrio derecho, sin defensa, Murphy negativo. Leucocitos 8500/mm³, bilirrubina y amilasa normales. Ecografía: litos móviles, pared fina (2 mm), sin líquido perivesicular. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar antibioticoterapia intravenosa y programar colecistectomía en el mismo ingreso.",
        distractorProfile: "antibioticos_en_colico",
        incorrectFeedback:
          "En cólico biliar simple no hay inflamación ni infección; no se requieren antibióticos ni colecistectomía de urgencia.",
      },
      {
        id: "B",
        label: "B",
        text: "Manejo con analgesia y alta con indicación de colecistectomía laparoscópica electiva en 4–6 semanas.",
      },
      {
        id: "C",
        label: "C",
        text: "Solicitar CPRE y luego decidir conducta.",
        distractorProfile: "cpre_colico",
        incorrectFeedback:
          "La CPRE solo está indicada con coledocolitiasis o colangitis; aquí no hay dilatación de vía biliar ni hiperbilirrubinemia.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar antibióticos, analgesia y colecistectomía diferida a 8 semanas.",
        distractorProfile: "antibioticos_y_diferida",
        incorrectFeedback:
          "En cólico simple no hay indicación de antibióticos; la colecistectomía es electiva temprana (4–6 semanas), no diferida por inflamación aguda inexistente.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Cólico biliar simple: dolor autolimitado, sin fiebre, Murphy negativo, leucocitos normales, ecografía con pared fina sin líquido perivesicular. Analgesia, alta y colecistectomía laparoscópica electiva en 4–6 semanas.",
    keyPoints: [
      "Cólico biliar: sin fiebre, Murphy negativo, pared fina, leucocitos normales.",
      "Analgesia + colecistectomía electiva (4–6 semanas).",
      "No ATB ni CPRE en cólico simple.",
    ],
  },
];
