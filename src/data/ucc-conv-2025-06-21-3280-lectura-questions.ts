import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición 21 jun 2025 · Res. 3280 (#81–#90) y Lectura crítica (#91–#100).
 */
export const UCC_CONV_2025_06_21_3280_LECTURA_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-06-21-81",
    university: "UCC",
    examArea: "Salud Pública / Res. 3280 / Ruta materno-perinatal",
    topic: "Salud Pública",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "res_3280", "ruta_materna", "prenatal"],
    statement:
      "Gestante de 24 años, embarazo de 14 semanas confirmado por ecografía, acude a IPS de primer nivel en Colombia. No tiene comorbilidades. Según la Resolución 3280 de 2018 y la Ruta Integral de Atención Materno-Perinatal, ¿cuál es la recomendación MÁS apropiada respecto al número mínimo de controles prenatales durante todo el embarazo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Al menos 5 controles prenatales distribuidos en el embarazo, con esquema definido por trimestre y registro en historia clínica.",
      },
      {
        id: "B",
        label: "B",
        text: "Un solo control prenatal en el tercer trimestre es suficiente si no hay complicaciones.",
        distractorProfile: "un_control_prenatal",
        incorrectFeedback:
          "La ruta materno-perinatal exige seguimiento periódico desde primer trimestre; un control único no cumple estándares mínimos.",
      },
      {
        id: "C",
        label: "C",
        text: "Controles prenatales solo en el momento del parto en institución de segundo nivel.",
        distractorProfile: "control_solo_parto",
        incorrectFeedback:
          "La atención prenatal debe iniciarse en primer trimestre con controles programados, no limitarse al parto.",
      },
      {
        id: "D",
        label: "D",
        text: "Mínimo 12 controles mensuales obligatorios desde la concepción sin excepción.",
        distractorProfile: "doce_controles_obligatorios",
        incorrectFeedback:
          "El estándar mínimo nacional es al menos 5 controles prenatales, no 12 mensuales rígidos.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Res. 3280/RIAS materno-perinatal: mínimo 5 controles prenatales en el embarazo, con componentes de promoción, prevención, tamizajes y educación según trimestre.",
    keyPoints: [
      "Ruta materna: mínimo 5 controles prenatales.",
      "Inicio en primer trimestre.",
      "Registro y continuidad en APS/red de servicios.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-82",
    university: "UCC",
    examArea: "Salud Pública / Res. 3280 / Tamizaje neonatal",
    topic: "Salud Pública",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "res_3280", "tamizaje_neonatal"],
    statement:
      "Recién nacido a término de 48 horas de vida, sin factores de riesgo, nacido en hospital de segundo nivel en Colombia. ¿Cuál tamizaje neonatal es obligatorio según la Res. 3280 y el Programa Ampliado de Inmunizaciones?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Tamizaje metabólico neonatal (TSH, fenilcetonuria y enfermedades incluidas en el panel nacional) en las primeras 48–72 horas de vida, con toma de muestra de sangre en papel filtro.",
      },
      {
        id: "B",
        label: "B",
        text: "Tamizaje neonatal solo a los 6 meses de edad en consulta de crecimiento.",
        distractorProfile: "tamizaje_6_meses",
        incorrectFeedback:
          "El tamizaje metabólico neonatal debe realizarse en la primera semana de vida; retrasarlo pierde ventana terapéutica (ej. hipotiroidismo congénito).",
      },
      {
        id: "C",
        label: "C",
        text: "Mamografía neonatal de rutina antes del alta hospitalaria.",
        distractorProfile: "mamografia_neonato",
        incorrectFeedback:
          "La mamografía no es tamizaje neonatal; el panel incluye TSH, fenilcetonuria y otras enfermedades metabólicas/genéticas según programa nacional.",
      },
      {
        id: "D",
        label: "D",
        text: "Ecocardiograma en todos los recién nacidos asintomáticos como único tamizaje obligatorio.",
        distractorProfile: "eco_unico_tamizaje",
        incorrectFeedback:
          "Ecocardiograma se indica según sospecha clínica o programas específicos; no sustituye tamizaje metabólico obligatorio.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Tamizaje neonatal obligatorio en Colombia: muestra en papel filtro (heel stick) entre 48 h y 7 días, incluyendo TSH y fenilcetonuria entre otras, según Res. 3280 y lineamientos MSP.",
    keyPoints: [
      "Tamizaje metabólico: 48–72 h de vida ideal.",
      "TSH y fenilcetonuria en panel nacional.",
      "Retraso compromete tratamiento precoz.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-83",
    university: "UCC",
    examArea: "Salud Pública / Res. 3280 / Cáncer de mama",
    topic: "Salud Pública",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "res_3280", "cancer_mama", "tamizaje"],
    statement:
      "Mujer de 52 años, sin antecedente personal de cáncer de mama, sin síntomas, acude a consulta en EPS de Colombia. Según la ruta de detección temprana de cáncer de mama (Res. 3280), ¿cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar mamografía de tamizaje cada 2 años en mujer de 50–69 años sin síntomas, complementada con examen clínico de mamas.",
      },
      {
        id: "B",
        label: "B",
        text: "No realizar tamizaje hasta los 70 años porque la incidencia es baja antes.",
        distractorProfile: "no_tamizaje_50_69",
        incorrectFeedback:
          "La ventana de tamizaje poblacional con mamografía incluye 50–69 años según ruta nacional.",
      },
      {
        id: "C",
        label: "C",
        text: "Biopsia mamaria de rutina anual en toda mujer asintomática mayor de 40 años.",
        distractorProfile: "biopsia_tamizaje_rutina",
        incorrectFeedback:
          "El tamizaje inicial es mamografía y examen clínico; la biopsia se indica ante hallazgos sospechosos.",
      },
      {
        id: "D",
        label: "D",
        text: "Solo autoexploración mensual sin mamografía ni valoración profesional.",
        distractorProfile: "solo_autoexploracion",
        incorrectFeedback:
          "La autoexploración no sustituye mamografía de tamizaje ni examen clínico en la ruta 3280.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Ruta cáncer de mama Res. 3280: tamizaje con mamografía bianual en mujeres 50–69 años asintomáticas, más examen clínico de mamas; educación en autoexploración como complemento.",
    keyPoints: [
      "Tamizaje mamografía: 50–69 años cada 2 años.",
      "Examen clínico de mamas complementario.",
      "Biopsia solo ante sospecha, no de rutina.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-84",
    university: "UCC",
    examArea: "Salud Pública / Res. 3280 / Cáncer cervicouterino",
    topic: "Salud Pública",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "res_3280", "cancer_cervix", "citologia"],
    statement:
      "Mujer de 32 años, vida sexual activa desde los 18 años, asintomática, sin antecedente de citología anormal. Consulta en APS en Colombia. Según la ruta de cáncer de cuello uterino (Res. 3280), ¿cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar citología cervicovaginal (Papanicolaou) de tamizaje cada 3 años si resultados previos normales, o prueba de VPH según lineamiento vigente en la edad objetivo.",
      },
      {
        id: "B",
        label: "B",
        text: "Colposcopia anual de rutina en toda mujer mayor de 21 años sin citología previa.",
        distractorProfile: "colposcopia_tamizaje_primario",
        incorrectFeedback:
          "La colposcopia es paso diagnóstico ante citología anormal, no tamizaje primario en mujer asintomática.",
      },
      {
        id: "C",
        label: "C",
        text: "No tamizar hasta los 50 años porque el cáncer cervicouterino es raro en jóvenes.",
        distractorProfile: "tamizaje_tardio_cervix",
        incorrectFeedback:
          "El tamizaje inicia a los 21 años o 3 años después de inicio de relaciones sexuales según ruta nacional.",
      },
      {
        id: "D",
        label: "D",
        text: "Histerectomía profiláctica a los 30 años en toda mujer con vida sexual activa.",
        distractorProfile: "histerectomia_profilactica",
        incorrectFeedback:
          "La prevención se basa en tamizaje citológico/VPH y vacunación, no cirugía profiláctica universal.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Ruta cáncer cervicouterino: citología cada 3 años (21–69 años) o estrategia VPH según guía MSP; colposcopia y biopsia si resultado anormal.",
    keyPoints: [
      "Tamizaje desde 21 años o 3 años post inicio sexual.",
      "Citología cada 3 años si normal.",
      "Colposcopia ante alteración, no de rutina.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-85",
    university: "UCC",
    examArea: "Salud Pública / Res. 3280 / Enfermedad crónica",
    topic: "Salud Pública",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "res_3280", "hta", "diabetes", "cronicos"],
    statement:
      "Paciente de 60 años con hipertensión arterial y diabetes mellitus tipo 2 en seguimiento en APS. ¿Cuál componente es obligatorio en la Ruta Integral de Atención para Enfermedad Crónica según Res. 3280?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Mínimo un control médico anual documentado con evaluación de factores de riesgo, adherencia, complicaciones y plan de manejo integral (PA, glucemia, lípidos, pie, ojos según corresponda).",
      },
      {
        id: "B",
        label: "B",
        text: "Control médico solo cuando el paciente presente síntomas.",
        distractorProfile: "control_sintomatico_cronico",
        incorrectFeedback:
          "Las enfermedades crónicas requieren seguimiento programado mínimo anual independientemente de síntomas.",
      },
      {
        id: "C",
        label: "C",
        text: "Referencia inmediata a especialista sin manejo en APS.",
        distractorProfile: "referencia_sin_aps",
        incorrectFeedback:
          "La Res. 3280 fortalece resolución en primer nivel con controles mínimos anuales; referencia según complejidad.",
      },
      {
        id: "D",
        label: "D",
        text: "Suspender medicamentos crónicos si el paciente se siente bien en la consulta.",
        distractorProfile: "suspender_tratamiento_asintomatico",
        incorrectFeedback:
          "HTA y DM requieren continuidad terapéutica y monitoreo aunque estén asintomáticos.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "RIAS enfermedad crónica (Res. 3280): mínimo 1 control médico anual con evaluación integral de riesgo cardiovascular, metabólico y tamizaje de complicaciones según guías.",
    keyPoints: [
      "Crónicos: mínimo 1 control médico anual en APS.",
      "Evaluar PA, glucemia, lípidos, pie, ojos.",
      "Continuidad del tratamiento, no suspender por asintomático.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-86",
    university: "UCC",
    examArea: "Salud Pública / Res. 3280 / Promoción y mantenimiento",
    topic: "Salud Pública",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "res_3280", "promocion_salud", "aps"],
    statement:
      "¿Cuál intervención corresponde al componente de Promoción y Mantenimiento de la Salud de la Res. 3280 en la Atención Primaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Educación en estilos de vida saludables, actividad física, alimentación y detección de factores de riesgo en población sin enfermedad diagnosticada.",
      },
      {
        id: "B",
        label: "B",
        text: "Cirugía cardiovascular de urgencia en paciente con infarto agudo.",
        distractorProfile: "urgencia_segundo_nivel",
        incorrectFeedback:
          "Cirugía de urgencia es atención curativa de alto nivel, no promoción y mantenimiento en APS.",
      },
      {
        id: "C",
        label: "C",
        text: "Quimioterapia paliativa en cáncer estadio IV como única acción de APS.",
        distractorProfile: "quimio_aps_unica",
        incorrectFeedback:
          "Quimioterapia es manejo especializado; promoción es preventiva en población general y riesgo.",
      },
      {
        id: "D",
        label: "D",
        text: "Hospitalización psiquiátrica involuntaria de rutina en consulta general.",
        distractorProfile: "hospitalizacion_psiquiatrica_rutina",
        incorrectFeedback:
          "Hospitalización psiquiátrica es intervención de complejidad, no promoción rutinaria en APS.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Promoción y mantenimiento (Res. 3280): intervenciones poblacionales e individuales para fomentar salud, prevenir riesgos y mantener capacidad funcional en APS.",
    keyPoints: [
      "Promoción: estilos de vida, educación, factores de riesgo.",
      "APS resolutiva en prevención primaria.",
      "No confundir con urgencias o manejo especializado.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-87",
    university: "UCC",
    examArea: "Salud Pública / Res. 3280 / Salud mental",
    topic: "Salud Pública",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "res_3280", "salud_mental", "depresion", "phq"],
    statement:
      "Mujer de 38 años consulta en APS por astenia, insomnio y anhedonia de 4 semanas. No ideas suicidas activas al interrogatorio. Según lineamientos de salud mental en APS y Res. 3280, ¿cuál es el paso inicial MÁS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aplicar tamizaje con PHQ-2 o PHQ-9, confirmar diagnóstico clínico y definir manejo en APS o referencia según gravedad y riesgo suicida.",
      },
      {
        id: "B",
        label: "B",
        text: "No tamizar depresión en APS; referir de inmediato a psiquiatría sin evaluación inicial.",
        distractorProfile: "referencia_inmediata_sin_tamizaje",
        incorrectFeedback:
          "La APS debe tamizar y manejar depresión leve-moderada; referencia según gravedad, no automática sin evaluación.",
      },
      {
        id: "C",
        label: "C",
        text: "Prescribir benzodiacepinas a largo plazo como monoterapia sin evaluación diagnóstica.",
        distractorProfile: "benzodiacepinas_monoterapia",
        incorrectFeedback:
          "Benzodiacepinas no son tratamiento de primera línea de depresión; se requiere tamizaje y manejo basado en guías.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar TAC de cráneo de rutina antes de cualquier interrogatorio psiquiátrico.",
        distractorProfile: "tac_rutina_depresion",
        incorrectFeedback:
          "Depresión mayor se diagnostica clínicamente con tamizaje validado; neuroimagen no es paso inicial.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Salud mental en APS (Res. 3280): tamizaje con PHQ-2/9, diagnóstico clínico, psicoeducación, psicoterapia y/o antidepresivos según gravedad; referencia si riesgo suicida, psicosis o refractaria.",
    keyPoints: [
      "Tamizaje depresión: PHQ-2 o PHQ-9 en APS.",
      "Manejo resolutivo en APS según gravedad.",
      "Referencia si riesgo suicida o complejidad.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-88",
    university: "UCC",
    examArea: "Salud Pública / Res. 3280 / Violencia",
    topic: "Salud Pública",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "res_3280", "violencia_intrafamiliar", "ley_1257"],
    statement:
      "Mujer de 29 años consulta en urgencias por contusión en brazo; refiere agresión física repetida por pareja. Está hemodinámicamente estable. ¿Cuál es la conducta MÁS apropiada según rutas de atención a víctimas de violencia (Ley 1257 de 2008 y Res. 3280)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Documentar hallazgos, valorar seguridad, activar ruta de violencia intrafamiliar, ofrecer orientación legal/psicosocial y referir a red de apoyo; notificar según protocolo institucional.",
      },
      {
        id: "B",
        label: "B",
        text: "Enviar a la paciente a casa con analgésicos sin indagar ni documentar el contexto de violencia.",
        distractorProfile: "alta_sin_ruta_violencia",
        incorrectFeedback:
          "El médico tiene deber de detectar, documentar y activar rutas de protección; omitir indagación re-victimiza.",
      },
      {
        id: "C",
        label: "C",
        text: "Exigir mediación conyugal inmediata en urgencias como única intervención.",
        distractorProfile: "mediacion_conyugal_violencia",
        incorrectFeedback:
          "La mediación con el agresor presente está contraindicada en violencia intrafamiliar; priorizar seguridad y rutas especializadas.",
      },
      {
        id: "D",
        label: "D",
        text: "Negar atención médica hasta que la paciente presente denuncia penal.",
        distractorProfile: "atencion_condicionada_denuncia",
        incorrectFeedback:
          "La atención en salud no puede condicionarse a denuncia; la ruta incluye atención médica, protección y orientación.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Violencia intrafamiliar: valoración médica, documentación forense si procede, activación ruta institucional ( trabajo social, psicología, comisaría), evaluación de riesgo y contrarreferencia según Res. 3280 y Ley 1257.",
    keyPoints: [
      "Detectar, documentar y activar ruta de violencia.",
      "No mediación con agresor presente.",
      "Atención no condicionada a denuncia.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-89",
    university: "UCC",
    examArea: "Salud Pública / Res. 3280 / Planificación familiar",
    topic: "Salud Pública",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "res_3280", "planificacion_familiar", "aps"],
    statement:
      "Mujer de 26 años, G2P2, desea método anticonceptivo de larga duración. Lactancia materna exclusiva (6 meses postparto). Sin contraindicaciones médicas. Consulta en APS. ¿Cuál opción es MÁS apropiada según planificación familiar en Res. 3280?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ofrecer métodos compatibles con lactancia (DIU de cobre, implante de etonogestrel, progestágeno solo) según criterios de elegibilidad OMS y preferencia informada.",
      },
      {
        id: "B",
        label: "B",
        text: "Anticonceptivos combinados con estrógeno como primera opción en lactancia exclusiva menor de 6 meses.",
        distractorProfile: "combinados_lactancia_6m",
        incorrectFeedback:
          "En lactancia exclusiva <6 meses, los combinados con estrógeno tienen contraindicación relativa (OMS categoría 3–4); preferir progestágeno solo o DIU.",
      },
      {
        id: "C",
        label: "C",
        text: "Negar anticoncepción en APS y remitir exclusivamente a ginecólogo privado.",
        distractorProfile: "negar_pf_aps",
        incorrectFeedback:
          "La planificación familiar es componente resolutivo de APS según Res. 3280.",
      },
      {
        id: "D",
        label: "D",
        text: "Ligadura tubárica de urgencia sin asesoría ni periodo de reflexión.",
        distractorProfile: "esterilizacion_sin_asesoria",
        incorrectFeedback:
          "Métodos permanentes requieren asesoría, criterios de edad/paridad según norma y consentimiento informado; no de urgencia.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Planificación familiar en APS: oferta de métodos según elegibilidad OMS; en lactancia <6 meses, progestágeno solo, implante o DIU cobre son opciones seguras; combinados evitados inicialmente.",
    keyPoints: [
      "PF es competencia de APS (Res. 3280).",
      "Lactancia <6 meses: evitar estrógenos.",
      "DIU cobre, implante o minipíldora son opciones.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-90",
    university: "UCC",
    examArea: "Salud Pública / Res. 3280 / Referencia",
    topic: "Salud Pública",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "res_3280", "referencia", "contrarreferencia"],
    statement:
      "Paciente de 55 años con cefalea súbita «la peor de su vida», vómito y rigidez de nuca. Signos vitales: PA 180/100 mmHg, FC 110 lpm, Glasgow 14. Atendido en centro de salud rural sin neurocirugía. ¿Cuál es la conducta MÁS apropiada según criterios de referencia (Res. 3280)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Estabilizar, iniciar manejo inicial y referir de urgencia a institución de mayor complejidad con contrarreferencia oportuna; no retener si hay sospecha de hemorragia subaracnoidea.",
      },
      {
        id: "B",
        label: "B",
        text: "Observar 72 horas en el centro rural con analgésicos antes de decidir referencia.",
        distractorProfile: "observacion_hsa_rural",
        incorrectFeedback:
          "Cefalea en trueno con rigidez de nuca sugiere HSA; retrasar referencia aumenta mortalidad.",
      },
      {
        id: "C",
        label: "C",
        text: "Referir solo si el paciente trae autorización administrativa previa de la EPS.",
        distractorProfile: "autorizacion_previa_urgencia",
        incorrectFeedback:
          "En urgencias vitales la referencia no puede retrasarse por trámites administrativos.",
      },
      {
        id: "D",
        label: "D",
        text: "Alta con cita ambulatoria de neurología en 30 días.",
        distractorProfile: "alta_ambulatoria_hsa",
        incorrectFeedback:
          "Sospecha de HSA es emergencia neuroquirúrgica/neurológica; alta ambulatoria es inaceptable.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Res. 3280: referencia oportuna cuando se supera capacidad resolutiva o hay criterios de gravedad (HSA probable). Estabilización, traslado urgente y contrarreferencia al regreso para continuidad.",
    keyPoints: [
      "Referencia urgente si excede capacidad resolutiva.",
      "HSA probable: no observación prolongada en rural.",
      "Contrarreferencia asegura continuidad post-alta.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-91",
    university: "UCC",
    examArea: "Comprensión lectora / Ensayo clínico",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "lectura_critica", "ensayo_clinico", "hta"],
    statement:
      "Lea el siguiente extracto:\n\n«Ensayo aleatorizado doble ciego en 8 500 pacientes con hipertensión no controlada con monoterapia. Grupo A recibió fármaco X + diurético tiazídico; grupo B recibió placebo + tiazídico. Tras 24 meses, la presión arterial media disminuyó 12/8 mmHg en A vs 3/2 mmHg en B (p<0.001). El evento compuesto (IAM, ACV, muerte cardiovascular) fue 4.2% en A vs 6.1% en B (RR 0.69, IC95% 0.58–0.82). Los efectos adversos graves fueron similares entre grupos.»\n\nSegún el texto, ¿cuál conclusión es MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "El fármaco X añadido al diurético reduce significativamente eventos cardiovasculares mayores comparado con placebo más diurético.",
      },
      {
        id: "B",
        label: "B",
        text: "El fármaco X es inferior al placebo porque la PA no llega a valores normales.",
        distractorProfile: "pa_no_normalizada_falla",
        incorrectFeedback:
          "El desenlace primario evaluó eventos CV, no normalización absoluta de PA; A fue superior con RR 0.69 significativo.",
      },
      {
        id: "C",
        label: "C",
        text: "No hay diferencia clínica porque los efectos adversos son iguales.",
        distractorProfile: "ea_iguales_sin_eficacia",
        incorrectFeedback:
          "Seguridad similar no implica ausencia de eficacia; el desenlace compuesto fue significativamente menor en A.",
      },
      {
        id: "D",
        label: "D",
        text: "El estudio demuestra que el diurético solo es suficiente y X no aporta beneficio.",
        distractorProfile: "ignorar_brazo_activo",
        incorrectFeedback:
          "Ambos brazos recibieron tiazida; la diferencia entre A y B atribuye beneficio adicional a X.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "RR 0.69 con IC que excluye 1 indica reducción significativa de eventos CV con X+tiazida vs placebo+tiazida, con similar perfil de seguridad.",
    keyPoints: [
      "Interpretar RR e IC del desenlace primario.",
      "Ambos brazos incluyen tiazida: comparación aislada de X.",
      "EA similares no anulan eficacia.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-92",
    university: "UCC",
    examArea: "Comprensión lectora / Caso clínico EPOC",
    topic: "Neumología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "lectura_critica", "epoc", "vni"],
    statement:
      "Lea el caso:\n\n«Hombre de 70 años, EPOC GOLD D, consulta por aumento de disnea y esputo purulento de 2 días. FC 105 lpm, FR 32 rpm, SpO₂ 84% con O₂ 2 L/min. Auscultación con sibilancias difusas. Gases: pH 7.28, PaCO₂ 70 mmHg, PaO₂ 55 mmHg, HCO₃⁻ 32 mEq/L. Rx sin infiltrado nuevo.»\n\nSegún la información del texto, ¿cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ventilación no invasiva, broncodilatadores, corticoide sistémico y antibiótico si indicado; oxígeno titulado.",
      },
      {
        id: "B",
        label: "B",
        text: "Alta con azitromicina oral únicamente.",
        distractorProfile: "alta_epoc_acidosis",
        incorrectFeedback:
          "Acidosis respiratoria (pH 7.28) e hipoxemia requieren hospitalización y VNI, no alta.",
      },
      {
        id: "C",
        label: "C",
        text: "Aumentar O₂ a mascarilla reservorio al 15 L/min sin VNI.",
        distractorProfile: "o2_alto_sin_vni",
        incorrectFeedback:
          "En EPOC retenedor, oxígeno alto empeora hipercapnia; se necesita VNI y FiO₂ titulada.",
      },
      {
        id: "D",
        label: "D",
        text: "Solo nebulización con salbutamol cada 8 horas ambulatoria.",
        distractorProfile: "solo_saba_ambulatorio",
        incorrectFeedback:
          "Exacerbación grave con acidosis no se maneja ambulatoriamente solo con SABA.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Exacerbación EPOC con acidosis respiratoria aguda (pH 7.28, PaCO₂ 70): VNI es primera línea junto con broncodilatadores, esteroides y ATB si cambio de esputo; O₂ titulado SpO₂ 88–92%.",
    keyPoints: [
      "pH <7.35 + PaCO₂ alta → VNI.",
      "Oxígeno titulado en EPOC.",
      "Esteroides y ATB según cuadro.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-93",
    university: "UCC",
    examArea: "Comprensión lectora / Fisiopatología IRC",
    topic: "Nefrología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "lectura_critica", "irc", "anemia"],
    statement:
      "Lea el párrafo:\n\n«En la enfermedad renal crónica avanzada, la disminución de la masa renal reduce la producción de eritropoyetina por células peritubulares. Además, la acumulación de toxinas uremicas acorta la supervivencia eritrocitaria y favorece resistencia a la eritropoyetina. El hierro funcional puede estar limitado por inflamación crónica mediada por citocinas, a pesar de reservas aparentemente normales.»\n\nSegún el texto, ¿cuál es el mecanismo PRINCIPAL de anemia en ERC?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Déficit de producción de eritropoyetina por daño renal, con contribución de uremia, inflamación y disfunción del hierro.",
      },
      {
        id: "B",
        label: "B",
        text: "Pérdida exclusiva de hierro por hematuria macroscópica como única causa.",
        distractorProfile: "solo_hematuria",
        incorrectFeedback:
          "El texto enfatiza déficit de eritropoyetina y factores uremicos/inflamatorios, no hematuria como mecanismo principal.",
      },
      {
        id: "C",
        label: "C",
        text: "Anemia hemolítica autoinmune primaria no relacionada con la función renal.",
        distractorProfile: "hemolisis_autoimmune_erc",
        incorrectFeedback:
          "El párrafo describe acortamiento eritrocitario por uremia, no anemia autoinmune primaria.",
      },
      {
        id: "D",
        label: "D",
        text: "Sobrerregeneración medular por exceso de eritropoyetina endógena.",
        distractorProfile: "exceso_epo",
        incorrectFeedback:
          "El texto indica disminución de eritropoyetina, no exceso.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Anemia de ERC: principalmente déficit de EPO renal, más supervivencia eritrocitaria reducida (uremia) y disfunción del hierro por inflamación.",
    keyPoints: [
      "ERC → ↓ eritropoyetina renal.",
      "Uremia acorta vida eritrocitaria.",
      "Inflamación → hierro funcional limitado.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-94",
    university: "UCC",
    examArea: "Comprensión lectora / Nota de urgencias",
    topic: "Cardiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "lectura_critica", "dolor_toracico", "sca"],
    statement:
      "Lea la nota de urgencias:\n\n«Varón 58 años, dolor torácico opresivo de 1 hora, sudoración y náuseas. PA 90/60 mmHg, FC 110 lpm. ECG: supradesnivel ST de 3 mm en V1–V4. Troponina I pendiente. Antecedente de DM2.»\n\nSegún el texto, ¿cuál es la prioridad MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Activar vía de IAMCEST con reperfusión urgente (trombolisis o cateterismo según disponibilidad), AAS, P2Y12 y anticoagulación según protocolo.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar ecocardiograma ambulatorio en 48 horas antes de cualquier tratamiento.",
        distractorProfile: "eco_antes_reperfusion_stemi",
        incorrectFeedback:
          "Supra ST anterior con inestabilidad hemodinámica es STEMI; reperfusión no debe retrasarse por ecocardiograma.",
      },
      {
        id: "C",
        label: "C",
        text: "Alta con omeprazol por sospecha de reflujo gastroesofágico.",
        distractorProfile: "rge_stemi",
        incorrectFeedback:
          "ECG con supra ST y cuadro compatible descarta alta por RGE.",
      },
      {
        id: "D",
        label: "D",
        text: "Esperar troponina para iniciar reperfusión aunque tarde 6 horas.",
        distractorProfile: "esperar_troponina_stemi",
        incorrectFeedback:
          "En IAM con supra ST, la reperfusión se activa clínica y electrocardiográficamente sin esperar troponina.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "IAMCEST anterior (supra ST V1–V4) con hipotensión: reperfusión inmediata, antiagregación y anticoagulación; troponina confirma pero no retrasa manejo.",
    keyPoints: [
      "Supra ST = reperfusión urgente.",
      "No esperar troponina en STEMI claro.",
      "Inestabilidad hemodinámica aumenta urgencia.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-95",
    university: "UCC",
    examArea: "Comprensión lectora / Guía ATB neumonía",
    topic: "Infectología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "lectura_critica", "neumonia", "atb"],
    statement:
      "Lea el extracto de guía:\n\n«Neumonía adquirida en comunidad moderada en adulto ambulatorio sin comorbilidades graves: primera línea amoxicilina alta dosis o doxiciclina. Si comorbilidades (DM, EPOC, IRC) o uso reciente de antibióticos, considerar amoxicilina-ácido clavulánico o respiratoria fluoroquinolona. Hospitalización si CURB-65 ≥3, hipoxemia o inestabilidad hemodinámica.»\n\nAdulto de 45 años con NAC moderada, EPOC y diabetes, estable, SpO₂ 94% ambiente. ¿Cuál es la opción MÁS apropiada según el texto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Amoxicilina-ácido clavulánico o fluoroquinolona respiratoria ambulatoria según resistencia local.",
      },
      {
        id: "B",
        label: "B",
        text: "Amoxicilina simple en dosis estándar como única opción.",
        distractorProfile: "amox_simple_comorbilidad",
        incorrectFeedback:
          "El texto indica escalar ATB ante comorbilidades (DM, EPOC); amoxicilina simple no es primera línea en ese grupo.",
      },
      {
        id: "C",
        label: "C",
        text: "Hospitalización obligatoria en todo diabético sin evaluar gravedad.",
        distractorProfile: "hospitalizar_todo_dm",
        incorrectFeedback:
          "Hospitalización según CURB-65, hipoxemia o inestabilidad; este paciente está estable con SpO₂ 94%.",
      },
      {
        id: "D",
        label: "D",
        text: "Azitromicina en monoterapia como única recomendación para todos.",
        distractorProfile: "macrolido_monoterapia_todos",
        incorrectFeedback:
          "Macrólido solo no es primera línea universal; comorbilidades requieren beta-lactámico ampliado o fluoroquinolona.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "NAC moderada ambulatoria con comorbilidades (EPOC, DM): amoxicilina-clavulánico o fluoroquinolona respiratoria según guía citada; no amoxicilina simple sola.",
    keyPoints: [
      "Comorbilidades → escalar ATB ambulatorio.",
      "Hospitalización por gravedad, no solo DM.",
      "Seguir criterios CURB-65 e hipoxemia.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-96",
    university: "UCC",
    examArea: "Comprensión lectora / Cohorte cardiovascular",
    topic: "Epidemiología",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "lectura_critica", "cohorte", "riesgo_relativo"],
    statement:
      "Lea el abstract:\n\n«Cohorte de 12 000 adultos seguidos 10 años. Fumadores activos tuvieron riesgo de mortalidad por enfermedad cardiovascular de 8% vs 3% en no fumadores. RR ajustado 2.1 (IC95% 1.6–2.8) tras ajustar edad, sexo e HTA.»\n\n¿Cuál interpretación es CORRECTA según el texto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fumar se asocia con mayor mortalidad cardiovascular; el riesgo en fumadores es aproximadamente el doble del de no fumadores tras ajuste.",
      },
      {
        id: "B",
        label: "B",
        text: "Fumar reduce mortalidad cardiovascular porque 8% es menor que 50%.",
        distractorProfile: "interpretacion_absurda_porcentaje",
        incorrectFeedback:
          "8% > 3%; RR 2.1 confirma mayor riesgo en fumadores, no reducción.",
      },
      {
        id: "C",
        label: "C",
        text: "No hay asociación porque el IC es amplio.",
        distractorProfile: "ic_amplio_sin_asociacion",
        incorrectFeedback:
          "IC 1.6–2.8 excluye 1 → asociación significativa.",
      },
      {
        id: "D",
        label: "D",
        text: "El RR demuestra que el 8% de fumadores morirá necesariamente a los 10 años.",
        distractorProfile: "rr_riesgo_individual_obligatorio",
        incorrectFeedback:
          "RR es medida poblacional de asociación, no predicción individual obligatoria.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "RR ajustado 2.1 (IC excluye 1): fumadores tienen ~doble riesgo de mortalidad CV que no fumadores en la cohorte, independiente de confusores ajustados.",
    keyPoints: [
      "RR >1 → mayor riesgo en expuestos.",
      "IC sin 1 → significancia.",
      "RR es medida poblacional, no destino individual.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-97",
    university: "UCC",
    examArea: "Comprensión lectora / Caso pediátrico diarrea",
    topic: "Pediatría",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "lectura_critica", "pediatria", "deshidratacion"],
    statement:
      "Lea el caso:\n\n«Lactante de 14 meses, 10 kg, diarrea acuosa de 2 días, vómitos ocasionales. Alerta, llora con lágrimas, bebe líquidos con avidez. Mucosas húmedas, pliegue cutáneo normal (<2 seg). Peso similar al basal.»\n\nSegún OMS/AIEPI, ¿cuál plan de hidratación es MÁS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Plan A: aumentar líquidos en casa y continuar alimentación; sales de rehidratación oral tras cada deposición líquida.",
      },
      {
        id: "B",
        label: "B",
        text: "Plan C: lactato de Ringer 20 mL/kg en bolo IV.",
        distractorProfile: "plan_c_sin_deshidratacion",
        incorrectFeedback:
          "No hay signos de deshidratación grave; Plan C es para shock o deshidratación severa.",
      },
      {
        id: "C",
        label: "C",
        text: "Plan B: 75 mL/kg de SRO en 4 horas bajo supervisión.",
        distractorProfile: "plan_b_sin_signos",
        incorrectFeedback:
          "Plan B es para algún grado de deshidratación; este lactante tiene signos de no deshidratación (Plan A).",
      },
      {
        id: "D",
        label: "D",
        text: "Ayuno total de 48 horas solo con agua azucarada.",
        distractorProfile: "ayuno_diarrea_pediatrica",
        incorrectFeedback:
          "OMS recomienda continuar alimentación y usar SRO, no ayuno prolongado.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Sin signos de deshidratación (lágrimas, mucosas húmedas, pliegue normal, bebe bien): Plan A con SRO post-deposición y continuar alimentación.",
    keyPoints: [
      "Sin deshidratación → Plan A.",
      "Plan B: algún grado de deshidratación.",
      "Continuar alimentación en diarrea aguda.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-98",
    university: "UCC",
    examArea: "Comprensión lectora / Farmacocinética anticoagulantes",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "lectura_critica", "anticoagulantes", "irc"],
    statement:
      "Lea el párrafo:\n\n«La warfarina es metabolizada por vías hepáticas y su dosis se ajusta por INR; no se elimina renalmente de forma significativa. La dabigatrán es profármaco eliminado predominantemente por riñón (80%). En filtración glomerular <30 mL/min, acumula dabigatrán con mayor riesgo hemorrágico. Los inhibidores del factor Xa directos (rivaroxabán, apixabán) tienen eliminación renal variable (25–35%) y requieren ajuste según función renal y fármaco específico.»\n\nPaciente de 78 años con FA, creatinina 2.8 mg/dL (TFG estimada 22 mL/min). ¿Cuál opción es MÁS apropiada según el texto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Warfarina con control de INR puede ser opción; dabigatrán está contraindicada o requiere evitarse en TFG <30; DOAC FXa requieren ajuste o cautela según fármaco y TFG.",
      },
      {
        id: "B",
        label: "B",
        text: "Dabigatrán en dosis estándar sin ajuste porque todos los anticoagulantes orales se eliminan igual.",
        distractorProfile: "dabigatran_estandar_irc",
        incorrectFeedback:
          "El texto indica eliminación renal predominante de dabigatrán y riesgo en TFG <30.",
      },
      {
        id: "C",
        label: "C",
        text: "Suspender todo anticoagulante permanentemente en todo adulto mayor.",
        distractorProfile: "no_anticoagular_fa",
        incorrectFeedback:
          "IRC no contraindica anticoagulación en FA automáticamente; requiere selección y ajuste.",
      },
      {
        id: "D",
        label: "D",
        text: "Rivaroxabán siempre en dosis plena sin ajuste renal.",
        distractorProfile: "doac_sin_ajuste_renal",
        incorrectFeedback:
          "El texto indica ajuste de DOAC según función renal y fármaco.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "TFG 22: evitar dabigatrán o usar con extrema cautela; warfarina viable con INR; apixabán/rivaroxabán según ajuste por TFG según guías y texto.",
    keyPoints: [
      "Dabigatrán: eliminación renal ~80%.",
      "TFG <30: cautela/contraindicación dabigatrán.",
      "Warfarina no depende de riñón; DOAC requieren ajuste.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-99",
    university: "UCC",
    examArea: "Comprensión lectora / Ginecología sangrado",
    topic: "Ginecología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "lectura_critica", "ginecologia", "sangrado_anormal"],
    statement:
      "Lea la nota:\n\n«Mujer 44 años, ciclos regulares previos, sangrado uterino abundante intermenstrual de 3 meses. Hb 9.2 g/dL. Ecografía transvaginal: endometrio heterogéneo 14 mm, miometrio sin miomas grandes, ovarios simples. No uso de anticoagulantes.»\n\n¿Cuál es el siguiente paso MÁS apropiado según el cuadro descrito?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Estabilización si necesaria, hierro oral/IV, muestra endometrial o histeroscopia con biopsia para descartar patología endometrial y definir manejo.",
      },
      {
        id: "B",
        label: "B",
        text: "Observación 12 meses sin estudio porque la ecografía no muestra miomas.",
        distractorProfile: "observacion_sua_anemia",
        incorrectFeedback:
          "Sangrado intermenstrual con anemia y endometrio grueso requiere evaluación endometrial, no observación.",
      },
      {
        id: "C",
        label: "C",
        text: "Histerectomía de urgencia sin biopsia previa.",
        distractorProfile: "histerectomia_sin_biopsia_sua",
        incorrectFeedback:
          "Primero evaluar endometrio (biopsia/histeroscopia) antes de cirugía definitiva en sangrado anormal.",
      },
      {
        id: "D",
        label: "D",
        text: "Solo anticoncepción combinada sin evaluar endometrio en mujer >40 años con sangrado intermenstrual.",
        distractorProfile: "aco_sin_descartar_endometrio",
        incorrectFeedback:
          "En >40 años con sangrado intermenstrual debe descartarse hiperplasia/cáncer endometrial antes de manejo empírico.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Sangrado uterino anormal en >40 años con endometrio 14 mm y anemia: biopsia endometrial o histeroscopia para descartar patología, corrección de anemia y tratamiento según histología.",
    keyPoints: [
      "SUA >40 años → evaluación endometrial.",
      "Endometrio >4 mm postmenopáusico o patrón anormal premenopáusico → biopsia.",
      "Corregir anemia mientras se investiga.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-100",
    university: "UCC",
    examArea: "Comprensión lectora / Bioética consentimiento",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "lectura_critica", "bioetica", "consentimiento"],
    statement:
      "Lea el párrafo:\n\n«El consentimiento informado exige que el paciente comprenda diagnóstico, alternativas, riesgos y beneficios del procedimiento propuesto. Si un adulto con capacidad decisional rechaza una transfusión por creencias personales, el equipo debe respetar la autonomía, documentar el proceso y ofrecer tratamientos alternativos cuando existan. En emergencia con paciente inconsciente sin documento de voluntad anticipada, se aplican medidas para salvar la vida conforme al principio de beneficencia, salvo directriz válida conocida.»\n\nPaciente consciente, orientado, con anemia sintomática post-hemorragia, rechaza transfusión por creencias religiosas pero acepta hierro IV y eritropoyetina. ¿Cuál conducta es MÁS apropiada según el texto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Respetar la decisión informada, documentar consentimiento/rechazo, optimizar alternativas (hierro, eritropoyetina) y vigilar estrechamente.",
      },
      {
        id: "B",
        label: "B",
        text: "Transfundir de todas formas porque beneficencia supera autonomía en todo contexto.",
        distractorProfile: "transfundir_contra_voluntad",
        incorrectFeedback:
          "El texto indica respetar autonomía del paciente con capacidad que rechaza transfusión.",
      },
      {
        id: "C",
        label: "C",
        text: "Dar de alta sin tratamiento alguno por rechazar transfusión.",
        distractorProfile: "alta_sin_alternativas",
        incorrectFeedback:
          "Debe ofrecerse alternativas viables (hierro, EPO) y vigilancia, no abandono.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar autorización judicial rutinaria para toda transfusión rechazada en adulto consciente.",
        distractorProfile: "judicial_rutinaria_autonomia",
        incorrectFeedback:
          "Adulto con capacidad puede rechazar legalmente; documentación y alternativas son suficientes según el texto.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Paciente con capacidad decisional puede rechazar transfusión; el médico documenta, respeta autonomía y ofrece alternativas (hierro, EPO) con seguimiento estrecho.",
    keyPoints: [
      "Autonomía del paciente con capacidad decisional.",
      "Documentar rechazo informado.",
      "Ofrecer alternativas cuando existan.",
    ],
  },
];
