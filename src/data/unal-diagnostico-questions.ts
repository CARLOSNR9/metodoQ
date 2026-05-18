import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Batería diagnóstica fija (10 ítems) — Universidad Nacional / Medicina Interna.
 * Examen unificado de posgrados clínicos; énfasis en razonamiento integrado y guías nacionales.
 */
export const UNAL_DIAGNOSTIC_QUESTIONS: TrainingQuestion[] = [
  {
    id: "unal-dx-01",
    university: "UNAL",
    examArea: "Medicina Interna / Cardiología",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["unal", "diagnostico", "icfep", "cardiologia"],
    statement:
      "Paciente masculino de 68 años con disnea de esfuerzo progresiva, ortopnea de dos almohadas y edema en miembros inferiores. Antecedentes: hipertensión arterial y fibrilación auricular permanente. PA 145/90 mmHg, FC irregular 88 lpm. Auscultación: estertores finos bibasales y S3 en ápex. Ecocardiograma: FEVI 55%, hipertrofia concéntrica severa, dilatación de aurícula izquierda, NT-proBNP 1250 pg/mL. Se confirma insuficiencia cardíaca con fracción de eyección preservada (ICFep). Según guías contemporáneas aplicables en Colombia, ¿qué fármaco tiene recomendación de clase más alta para reducir hospitalizaciones por insuficiencia cardíaca en ICFep?",
    options: [
      {
        id: "A",
        label: "A",
        text: "IECA (enalapril) en dosis máximas toleradas.",
        distractorProfile: "tratamiento_historico_icfep",
        incorrectFeedback:
          "En ICFep los IECA no tienen el mismo beneficio pronóstico demostrado que en ICFEr; no son la recomendación de mayor evidencia actual.",
      },
      {
        id: "B",
        label: "B",
        text: "Sacubitrilo/valsartán (ARNI).",
        distractorProfile: "arni_icfep_sin_evidencia",
        incorrectFeedback:
          "El ARNI está validado principalmente en ICFEr; en ICFep la evidencia de beneficio no es equivalente a la de los iSGLT2.",
      },
      {
        id: "C",
        label: "C",
        text: "Espironolactona a dosis bajas.",
        distractorProfile: "arm_sin_beneficio_icfep",
        incorrectFeedback:
          "Los antagonistas de mineralocorticoides no muestran el mismo impacto en desenlaces en ICFep que los iSGLT2 en ensayos pivotales recientes.",
      },
      {
        id: "D",
        label: "D",
        text: "Inhibidor del cotransportador SGLT2 (dapagliflozina o empagliflozina).",
      },
    ],
    correctOptionId: "D",
    explanation:
      "En ICFep los iSGLT2 (EMPEROR-Preserved, DELIVER) reducen hospitalizaciones por IC y son la recomendación de mayor nivel de evidencia actual.",
    keyPoints: [
      "ICFep: iSGLT2 con beneficio pronóstico demostrado.",
      "ARNI e IECA no replican el mismo nivel de evidencia en FEVI preservada.",
      "Tema: Insuficiencia cardíaca — fenotipo FEVI preservada.",
    ],
  },
  {
    id: "unal-dx-02",
    university: "UNAL",
    examArea: "Medicina Interna / Endocrinología",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["unal", "diagnostico", "dm2", "endocrinologia"],
    statement:
      "Mujer de 52 años con diabetes mellitus tipo 2 diagnosticada hace 2 años, en metformina 2000 mg/día con buena adherencia. HbA1c 8.4%, IMC 33 kg/m², sin enfermedad cardiovascular establecida ni insuficiencia renal. Según guías colombianas recientes (ACE) para segunda línea en paciente con sobrepeso/obesidad sin aterosclerosis establecida, ¿cuál es la mejor opción terapéutica a adicionar?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Sulfonilurea de segunda generación (glibenclamida).",
        distractorProfile: "sulfonilurea_riesgo_hipoglucemia",
        incorrectFeedback:
          "Las sulfonilureas aumentan riesgo de hipoglucemia y ganancia de peso; ya no son preferidas en este perfil.",
      },
      {
        id: "B",
        label: "B",
        text: "Agonista del receptor GLP-1.",
      },
      {
        id: "C",
        label: "C",
        text: "Insulina basal nocturna como siguiente paso obligatorio.",
        distractorProfile: "insulina_prematura",
        incorrectFeedback:
          "La insulinización no es primera elección ante metformina fallida con obesidad si aún hay opciones orales/inyectables con beneficio ponderal.",
      },
      {
        id: "D",
        label: "D",
        text: "Inhibidor de DPP-4 como única alternativa recomendada.",
        distractorProfile: "idpp4_sin_beneficio_ponderal",
        incorrectFeedback:
          "Los iDPP-4 son neutros en peso pero no ofrecen la misma reducción ponderal y glucémica que los AR GLP-1 en obesidad.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Con HbA1c fuera de meta, metformina al máximo e IMC > 27, los agonistas GLP-1 son la adición preferida por control glucémico y pérdida de peso.",
    keyPoints: [
      "DM2 + obesidad: priorizar AR GLP-1 tras metformina.",
      "Evitar sulfonilureas por hipoglucemia y peso.",
      "Tema: Diabetes tipo 2 — algoritmo terapéutico.",
    ],
  },
  {
    id: "unal-dx-03",
    university: "UNAL",
    examArea: "Medicina Interna / Nefrología",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["unal", "diagnostico", "ira", "nefrologia"],
    statement:
      "Hombre de 58 años con diarrea profusa de 5 días, hipotensión ortostática y oliguria. Creatinina 2.8 mg/dL (basal 1.0), BUN 65 mg/dL, sodio urinario 8 mEq/L y urea urinaria 320 mg/dL. Sedimento sin cilindros granulares ni hematuria significativa. ¿Cuál es el mecanismo más probable de la lesión renal y la conducta inicial prioritaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Necrosis tubular aguda; iniciar diálisis de urgencia sin reanimación previa.",
        distractorProfile: "dialisis_sin_reanimacion",
        incorrectFeedback:
          "El sodio urinario bajo y el contexto de hipovolemia favorecen causa prerrenal; la diálisis no es primera línea sin corregir volumen.",
      },
      {
        id: "B",
        label: "B",
        text: "Insuficiencia renal aguda prerrenal por hipovolemia; expansión cautelosa con cristaloides y tratar la causa.",
      },
      {
        id: "C",
        label: "C",
        text: "Glomerulonefritis aguda; indicar pulsos de metilprednisolona.",
        distractorProfile: "inmunosupresion_sin_sedimento",
        incorrectFeedback:
          "Sin sedimento activo ni proteinuria nefrótica, la glomerulonefritis es poco probable como primera hipótesis.",
      },
      {
        id: "D",
        label: "D",
        text: "Obstrucción urinaria baja; solicitar derivación urinaria inmediata.",
        distractorProfile: "obstruccion_sin_datos",
        incorrectFeedback:
          "No hay datos de globo vesical, anuria súbita ni antecedente obstructivo; el cuadro es de depleción de volumen.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "IRA prerrenal: sodio urinario < 20, contexto de pérdidas y hipotensión. Manejo inicial: restaurar volumen intravascular y corregir la causa.",
    keyPoints: [
      "FeNa baja / Na urinario bajo → sospechar prerrenal.",
      "Primero volumen, luego reevaluar función renal.",
      "Tema: Insuficiencia renal aguda — fisiopatología prerrenal.",
    ],
  },
  {
    id: "unal-dx-04",
    university: "UNAL",
    examArea: "Medicina Interna / Neumología",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["unal", "diagnostico", "epoc", "neumologia"],
    statement:
      "Mujer de 64 años, fumadora activa, con EPOC GOLD D, consulta por aumento de disnea, esputo purulento y pico febril de 38.5°C de 3 días. SatO2 88% al ambiente, FC 105 lpm, uso de musculatura accesoria. Gases: pH 7.32, PaCO2 58 mmHg, PaO2 52 mmHg. ¿Cuál es el manejo inicial más adecuado en urgencias?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solo broncodilatadores inhalados y alta con oxígeno domiciliario.",
        distractorProfile: "alta_en_agudizacion_severa",
        incorrectFeedback:
          "Con hipoxemia grave, hipercapnia y trabajo respiratorio aumentado no es seguro el manejo ambulatorio.",
      },
      {
        id: "B",
        label: "B",
        text: "Oxígeno controlado, broncodilatadores, corticoide sistémico, antibiótico si indicado y evaluar ventilación no invasiva.",
      },
      {
        id: "C",
        label: "C",
        text: "Intubación orotraqueal inmediata en todos los casos sin prueba de BiPAP.",
        distractorProfile: "intubacion_precoz",
        incorrectFeedback:
          "La VNI es primera línea en muchas agudizaciones hipercápnicas antes de intubar, si no hay contraindicación.",
      },
      {
        id: "D",
        label: "D",
        text: "Sedación profunda y morfina IV para disminuir la ansiedad respiratoria.",
        distractorProfile: "morfina_en_epoc",
        incorrectFeedback:
          "Los opiáceos pueden deprimir el drive respiratorio y empeorar la hipercapnia en EPOC agudizada.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Agudización grave de EPOC: broncodilatadores, corticoides, antibiótico dirigido, oxígeno titulado y BiPAP si acidosis hipercápnica con trabajo respiratorio.",
    keyPoints: [
      "EPOC agudo grave: considerar VNI antes de IOT.",
      "Evitar sedación que deprime ventilación.",
      "Tema: EPOC — exacerbación hipercápnica.",
    ],
  },
  {
    id: "unal-dx-05",
    university: "UNAL",
    examArea: "Neurología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["unal", "diagnostico", "acv", "neurologia"],
    statement:
      "Hombre de 71 años, hipertenso, llega a urgencias 2 horas después de inicio súbito de hemiparesia derecha y afasia. TA 175/95 mmHg, glucemia 110 mg/dL. TAC craneal simple sin hemorragia. NIHSS 14. No anticoagulación, no cirugía reciente. ¿Cuál es la conducta reperfusiva más apropiada dentro de la ventana terapéutica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solo manejo de soportes; la trombólisis está contraindicada por la presión arterial.",
        distractorProfile: "rechazo_trombolisis_por_pa",
        incorrectFeedback:
          "PA elevada puede manejarse antes/durante trombólisis según protocolo; no es contraindicación absoluta aislada si se corrige.",
      },
      {
        id: "B",
        label: "B",
        text: "Alteplasa intravenosa si no hay exclusiones, tras evaluación en unidad de ictus.",
      },
      {
        id: "C",
        label: "C",
        text: "Ácido acetilsalicílico en carga inmediata como única terapia reperfusiva.",
        distractorProfile: "aas_como_reperfusion",
        incorrectFeedback:
          "El AAS no es reperfusión; en ictus isquémico agudo candidato a trombólisis, esta es prioritaria dentro de ventana.",
      },
      {
        id: "D",
        label: "D",
        text: "Anticoagulación plena con heparina no fraccionada de inmediato.",
        distractorProfile: "anticoagulacion_en_fase_aguda",
        incorrectFeedback:
          "La anticoagulación plena precoz no sustituye la trombólisis en isquemia aguda y aumenta riesgo hemorrágico.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Ictus isquémico agudo sin hemorragia, dentro de ventana y sin exclusiones: trombólisis IV con alteplasa en unidad especializada.",
    keyPoints: [
      "TAC sin sangrado + ventana < 4.5 h → evaluar trombólisis.",
      "AAS no reemplaza reperfusión en candidatos elegibles.",
      "Tema: Evento cerebrovascular isquémico agudo.",
    ],
  },
  {
    id: "unal-dx-06",
    university: "UNAL",
    examArea: "Medicina Interna / Infectología",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["unal", "diagnostico", "sepsis", "urgencias"],
    statement:
      "Mujer de 45 años con fiebre, escalofríos y dolor en fosa ilíaca derecha de 24 horas. TA 88/52 mmHg, FC 128 lpm, FR 26 rpm, temperatura 39.2°C, lactato 4.2 mmol/L. Abdomen con defensa en FID. ¿Cuál es el conjunto de medidas iniciales más adecuado en la primera hora?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Esperar resultados de cultivos antes de antibióticos para no enmascarar el diagnóstico.",
        distractorProfile: "diferir_antibioticos",
        incorrectFeedback:
          "En sepsis o shock séptico el antibiótico empírico debe administrarse en la primera hora, sin esperar cultivos.",
      },
      {
        id: "B",
        label: "B",
        text: "Cristaloides en bolo, antibiótico empírico de amplio espectro precoz y evaluación quirúrgica urgente.",
      },
      {
        id: "C",
        label: "C",
        text: "Solo analgesia y observación ambulatoria con TAC programado en 48 horas.",
        distractorProfile: "manejo_ambulatorio_sepsis",
        incorrectFeedback:
          "Con hipotensión, lactato elevado y abdomen agudo no es candidata a manejo diferido ambulatorio.",
      },
      {
        id: "D",
        label: "D",
        text: "Transfusión masiva de concentrados eritrocitarios antes de cualquier líquido.",
        distractorProfile: "transfusion_antes_de_volumen",
        incorrectFeedback:
          "El pilar inicial es reanimación con cristaloides y antibiótico; la transfusión no sustituye la expansión en este contexto.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Sepsis con hipotensión y foco abdominal: reanimación con fluidos, antibiótico en la primera hora y control del foco (cirugía si indicada).",
    keyPoints: [
      "Bundle de sepsis: líquidos + ATB precoz + control de foco.",
      "No retrasar antibióticos por cultivos.",
      "Tema: Sepsis abdominal — manejo en la primera hora.",
    ],
  },
  {
    id: "unal-dx-07",
    university: "UNAL",
    examArea: "Cirugía General",
    topic: "Cirugía",
    difficulty: "medium",
    tags: ["unal", "diagnostico", "colecistitis", "cirugia"],
    statement:
      "Hombre de 47 años con dolor en hipocondrio derecho de 18 horas, fiebre 38.8°C y Murphy positivo. Leucocitosis 15,000/µL. Ecografía: litiasis, pared vesicular 5 mm, líquido perivesicular, sin dilatación de vía biliar. ¿Cuál es la conducta más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Colecistectomía laparoscópica temprana durante el mismo ingreso, con antibiótico y soporte.",
      },
      {
        id: "B",
        label: "B",
        text: "Solo tratamiento médico ambulatorial con antibiótico oral por 14 días.",
        distractorProfile: "medico_ambulatorio_colecistitis_aguda",
        incorrectFeedback:
          "La colecistitis aguda confirmada requiere manejo quirúrgico; el tratamiento solo médico tiene alta recurrencia.",
      },
      {
        id: "C",
        label: "C",
        text: "CPRE de urgencia en todos los casos antes de cirugía.",
        distractorProfile: "cpre_sin_coledocolitiasis",
        incorrectFeedback:
          "CPRE se reserva para sospecha de coledocolitiasis o colangitis, no está indicada de rutina sin dilatación biliar.",
      },
      {
        id: "D",
        label: "D",
        text: "Observación domiciliaria y colecistectomía electiva en 6 meses.",
        distractorProfile: "diferir_cirugia",
        incorrectFeedback:
          "La colecistitis aguda debe resolverse en el mismo episodio con colecistectomía precoz cuando el paciente es estable.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Colecistitis aguda no complicada: antibiótico, soporte y colecistectomía laparoscópica precoz (idealmente durante el ingreso index).",
    keyPoints: [
      "Colecistitis aguda → cirugía precoz, no solo ATB.",
      "CPRE solo si coledocolitiasis/colangitis.",
      "Tema: Colecistitis aguda litiásica.",
    ],
  },
  {
    id: "unal-dx-08",
    university: "UNAL",
    examArea: "Ginecología y Obstetricia",
    topic: "Ginecología",
    difficulty: "medium",
    tags: ["unal", "diagnostico", "hemorragia-postparto"],
    statement:
      "Puérpera de 2 horas postparto vaginal presenta sangrado vaginal abundante, palidez, TA 80/50 mmHg, FC 125 lpm. Útero palpable por encima del ombligo, blando. Se administra oxitocina sin respuesta adecuada. ¿Cuál es la siguiente medida más apropiada según el algoritmo de hemorragia postparto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Masaje uterino bimanual y segundo uterotónico (misoprostol o metilergometrina según contraindicaciones), continuar reanimación.",
      },
      {
        id: "B",
        label: "B",
        text: "Alta a planta con hierro oral y control en 1 semana.",
        distractorProfile: "alta_en_hipovolemia",
        incorrectFeedback:
          "Con inestabilidad hemodinámica y útero atónico no se puede diferir el manejo ni dar de alta.",
      },
      {
        id: "C",
        label: "C",
        text: "Anticoagulación plena inmediata para prevenir trombosis.",
        distractorProfile: "anticoagulacion_en_sangrado",
        incorrectFeedback:
          "En hemorragia activa la prioridad es hemostasia y uterotónicos, no anticoagular.",
      },
      {
        id: "D",
        label: "D",
        text: "Esperar 24 horas antes de cualquier procedimiento invasivo.",
        distractorProfile: "diferimiento_hemorragia",
        incorrectFeedback:
          "La HPP es emergencia; el escalonamiento debe ser minuto a minuto, no diferido.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "HPP por atonía: tras oxitocina, masaje uterino y segundo uterotónico; si persiste, balón intrauterino o cirugía según protocolo.",
    keyPoints: [
      "Algoritmo HPP: uterotónicos + masaje + reanimación.",
      "No diferir en paciente inestable.",
      "Tema: Hemorragia postparto — atonía uterina.",
    ],
  },
  {
    id: "unal-dx-09",
    university: "UNAL",
    examArea: "Pediatría",
    topic: "Pediatría",
    difficulty: "medium",
    tags: ["unal", "diagnostico", "neumonia", "aiepi"],
    statement:
      "Niña de 3 años con tos de 3 días, fiebre 39°C, tiraje subcostal y saturación 91% al ambiente. Frecuencia respiratoria 48 rpm. No hay cianosis ni imposibilidad para beber. Clasificación AIEPI: neumonía. ¿Cuál es el manejo inicial recomendado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Antibiótico oral ambulatorio y control en 48 horas sin oxígeno.",
        distractorProfile: "ambulatorio_con_hipoxemia",
        incorrectFeedback:
          "Con saturación < 92% o dificultad respiratoria significativa requiere hospitalización y oxígeno.",
      },
      {
        id: "B",
        label: "B",
        text: "Hospitalización, oxígeno suplementario, antibiótico apropiado según edad y vía según gravedad.",
      },
      {
        id: "C",
        label: "C",
        text: "Solo antipiréticos y nebulizaciones con broncodilatador en todos los casos.",
        distractorProfile: "broncodilatador_como_unico_tratamiento",
        incorrectFeedback:
          "La neumonía bacteriana requiere antibiótico; los broncodilatadores no sustituyen el tratamiento del foco.",
      },
      {
        id: "D",
        label: "D",
        text: "Corticoides sistémicos de rutina sin antibiótico.",
        distractorProfile: "esteroides_sin_atb",
        incorrectFeedback:
          "Los corticoides no son primera línea en neumonía comunitaria típica; el antibiótico dirigido es esencial.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Neumonía grave en pediatría (hipoxemia, tiraje): hospitalizar, oxigenar y antibioterapia empírica según edad y guía AIEPI/MSPS.",
    keyPoints: [
      "SatO2 < 92% → hospitalización y oxígeno.",
      "Neumonía pediátrica: antibiótico según edad.",
      "Tema: Infección respiratoria aguda — neumonía infantil.",
    ],
  },
  {
    id: "unal-dx-10",
    university: "UNAL",
    examArea: "Legislación y Ética Médica",
    topic: "Salud Pública",
    difficulty: "medium",
    tags: ["unal", "diagnostico", "bioetica", "consentimiento"],
    statement:
      "Paciente adulto mayor con encefalopatía metabólica reversible, sin documento de voluntad anticipada, requiere intubación para proteger vía aérea. La familia se opone argumentando preferencias religiosas no expresadas previamente por el paciente cuando estaba lúcido. ¿Cuál es el principio bioético y la conducta más adecuada según la normativa colombiana?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Autonomía del paciente: si no hay voluntad anticipada válida, el médico debe actuar en beneficio del paciente (beneficencia/no maleficencia) e indicar el procedimiento vital si está médicamente justificado, documentando el caso.",
      },
      {
        id: "B",
        label: "B",
        text: "La opinión familiar sustituye siempre la voluntad del paciente incapaz, por lo que se debe abstener de intubar.",
        distractorProfile: "sustitucion_familiar_absoluta",
        incorrectFeedback:
          "En Colombia la familia no sustituye automáticamente la autonomía cuando hay indicación vital clara y ausencia de directriz válida.",
      },
      {
        id: "C",
        label: "C",
        text: "Justicia distributiva obliga a no usar UCI en adultos mayores.",
        distractorProfile: "discriminacion_por_edad",
        incorrectFeedback:
          "La justicia no autoriza negar procedimientos indicados por edad; las decisiones deben ser clínicas y éticas individualizadas.",
      },
      {
        id: "D",
        label: "D",
        text: "Confidencialidad impide informar a la familia y también impide cualquier procedimiento invasivo.",
        distractorProfile: "confidencialidad_mal_interpretada",
        incorrectFeedback:
          "La confidencialidad no prohíbe procedimientos de urgencia ni comunicación adecuada con familiares involucrados en el cuidado.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Sin voluntad anticipada, en urgencia vital el médico actúa en beneficio del paciente, respetando autonomía previa cuando exista evidencia; documentar decisión y diálogo familiar.",
    keyPoints: [
      "Urgencia vital: beneficencia y no maleficencia guían la acción.",
      "Familia informa pero no siempre decide si no hay directriz válida.",
      "Tema: Bioética — autonomía y decisiones en incapacidad.",
    ],
  },
];

export function getUnalDiagnosticSession(): TrainingQuestion[] {
  return [...UNAL_DIAGNOSTIC_QUESTIONS];
}
