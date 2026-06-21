import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición 21 jun 2025 · Urología (#39–#42), Reumatología (#43–#46), Bioquímica (#47–#50).
 */
export const UCC_CONV_2025_06_21_URO_REUMA_BIO_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-06-21-39",
    university: "UCC",
    examArea: "Urología / Litiasis / Urgencias",
    topic: "Urología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "urologia", "colico_renal", "litiasis"],
    statement:
      "Hombre de 38 años, previamente sano, consulta a urgencias por dolor lumbar derecho de inicio súbito hace 6 horas, tipo cólico, irradiado a fosa ilíaca derecha y región inguinal, acompañado de náuseas y un episodio emético. Niega fiebre, disuria o hematuria macroscópica. Signos vitales: PA 130/85 mmHg, FC 102 lpm, FR 18 rpm, temperatura 36.9 °C. Abdomen: dolor a la puñopercusión en ángulo costovertebral derecho, sin defensa peritoneal. Parcial de orina: 2–3 eritrocitos/campo, nitritos negativos, leucocitos 0–2/campo. Creatinina 0.9 mg/dL. TAC de abdomen sin contraste: cálculo de 6 mm en unión ureteropélvica derecha con leve hidroureteronefrosis proximal, sin signos de infección. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar antibiótico empírico de amplio espectro y hospitalizar por sospecha de pielonefritis obstructiva.",
        distractorProfile: "atb_sin_infeccion_litiasis",
        incorrectFeedback:
          "No hay fiebre, piuria ni nitritos; el cuadro es cólico renal obstructivo no complicado, no pielonefritis.",
      },
      {
        id: "B",
        label: "B",
        text: "Analgesia (AINE o ketorolaco según función renal), hidratación oral si tolera, antiemético y manejo ambulatorio con control urológico en 48–72 horas.",
      },
      {
        id: "C",
        label: "C",
        text: "Litotricia extracorpórea de urgencia en las primeras 6 horas para todo cálculo ureteral.",
        distractorProfile: "leot_inmediata_todo_calculo",
        incorrectFeedback:
          "La litotricia no es de urgencia en cólico bien controlado con analgesia; se reserva si falla manejo médico o hay indicación específica según tamaño y localización.",
      },
      {
        id: "D",
        label: "D",
        text: "Colocación de catéter doble J de urgencia en todos los pacientes con hidroureteronefrosis leve.",
        distractorProfile: "doble_j_rutinario",
        incorrectFeedback:
          "El doble J urgente se indica en obstrucción infectada, anuria, embarazo complicado o dolor refractario; no en cólico simple con hidroureteronefrosis leve.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Cólico renal por litiasis ureteral no complicada (6 mm, sin fiebre ni piuria): manejo médico con analgesia (AINE/ketorolaco), antieméticos e hidratación; seguimiento ambulatorio urológico. Intervención urgente si infección, anuria o dolor intratable.",
    keyPoints: [
      "Cólico renal no complicado: analgesia + manejo ambulatorio.",
      "ATB solo si pielonefritis obstructiva (fiebre + piuria).",
      "Doble J urgente: obstrucción infectada o complicaciones.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-40",
    university: "UCC",
    examArea: "Urología / Próstata / Urgencias",
    topic: "Urología",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "urologia", "retencion_urinaria", "hpb"],
    statement:
      "Hombre de 72 años con antecedente de hiperplasia prostática benigna en tratamiento irregular con tamsulosina consulta por imposibilidad para orinar desde hace 8 horas, con dolor suprapúbico progresivo. Signos vitales: PA 150/90 mmHg, FC 88 lpm, temperatura 36.7 °C. Abdomen: globo vesical palpable a 4 cm sobre sínfisis del pubis, doloroso, sin defensa generalizada. Creatinina 1.4 mg/dL (basal 1.0). Ecografía a pie de cama: vejiga con 650 mL de orina, próstata aumentada de tamaño, riñones sin hidronefrosis. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Sondaje vesical transuretral de inmediato y programar valoración urológica para manejo definitivo de la HPB.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar furosemida intravenosa para estimular diuresis espontánea.",
        distractorProfile: "diuretico_retencion_aguda",
        incorrectFeedback:
          "En retención urinaria aguda con globo vesical la vejiga está llena; los diuréticos no resuelven la obstrucción salida.",
      },
      {
        id: "C",
        label: "C",
        text: "Observación con analgesia y reevaluación en 12 horas antes de cualquier sondaje.",
        distractorProfile: "observacion_retencion_dolorosa",
        incorrectFeedback:
          "La retención urinaria aguda dolorosa requiere descompresión vesical inmediata con sondaje para prevenir daño vesical y renal.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar antibióticos de amplio espectro empíricamente sin sondaje por sospecha de prostatitis aguda.",
        distractorProfile: "atb_sin_sondaje_retencion",
        incorrectFeedback:
          "Aunque exista HPB, la prioridad es aliviar la retención con sondaje; no hay fiebre ni datos de prostatitis aguda bacteriana.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Retención urinaria aguda por HPB con globo vesical palpable: sondaje vesical transuretral inmediato para descompresión, luego valoración urológica (ajuste medicación, posible resección transuretral).",
    keyPoints: [
      "Retención aguda + globo vesical → sondaje inmediato.",
      "Diuréticos no tratan obstrucción de salida.",
      "Manejo definitivo de HPB tras descompresión.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-41",
    university: "UCC",
    examArea: "Urología / Infectología / Pielonefritis",
    topic: "Urología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "urologia", "pielonefritis", "itu_complicada"],
    statement:
      "Mujer de 48 años, con antecedente de diabetes mellitus tipo 2, consulta por fiebre, escalofríos, dolor lumbar izquierdo y disuria de 3 días. Signos vitales: PA 100/65 mmHg, FC 115 lpm, FR 22 rpm, temperatura 39.2 °C. Puñopercusión lumbar izquierda positiva. Parcial de orina: nitritos positivos, leucocitos 50–100/campo, bacterias ++. Leucocitos 16500/mm³, creatinina 1.1 mg/dL. Ecografía renal: leve dilatación pielocalicial izquierda sin absceso. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nitrofurantoína oral por 5 días y control ambulatorio.",
        distractorProfile: "nitrofurantoina_pielonefritis",
        incorrectFeedback:
          "La nitrofurantoína no alcanza concentraciones terapéuticas en parénquima renal; no es adecuada para pielonefritis.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar ceftriaxona intravenosa (o fluoroquinolona parenteral según resistencia local), hidratación, analgesia y hospitalización con urocultivo previo.",
      },
      {
        id: "C",
        label: "C",
        text: "Solicitar TAC abdominal con contraste antes de iniciar antibióticos para confirmar diagnóstico.",
        distractorProfile: "retrasar_atb_pielonefritis",
        incorrectFeedback:
          "En pielonefritis complicada con fiebre alta y comorbilidad no se debe retrasar antibiótico empírico para estudios de imagen.",
      },
      {
        id: "D",
        label: "D",
        text: "Manejo ambulatorio con ciprofloxacino oral únicamente sin evaluar ingreso.",
        distractorProfile: "ambulatorio_pielonefritis_complicada",
        incorrectFeedback:
          "Diabetes, fiebre alta y posible obstrucción leve ameritan hospitalización y ATB parenteral inicial en pielonefritis complicada.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Pielonefritis aguda complicada (diabetes, fiebre alta, posible obstrucción): hospitalización, ATB IV empírico (ceftriaxona o fluoroquinolona según resistencia), urocultivo, hidratación; imagen si no responde o empeora.",
    keyPoints: [
      "Pielonefritis: no nitrofurantoína (no llega al parénquima).",
      "Complicada (diabetes, obstrucción): ATB IV + hospitalización.",
      "No retrasar ATB para TAC en cuadro febril claro.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-42",
    university: "UCC",
    examArea: "Urología / Oncología / Próstata",
    topic: "Urología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "urologia", "cancer_prostata", "tamizaje", "psa"],
    statement:
      "Hombre afrodescendiente de 62 años, asintomático, acude a control de salud. Antecedente familiar de cáncer de próstata en padre diagnosticado a los 65 años. Examen digital rectal: próstata simétrica, lisa, de consistencia firme, sin nódulos, tamaño II/IV. PSA total 6.8 ng/mL (referencia <4 ng/mL). Relación PSA libre/total 12%. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Repetir PSA en 5 años dado examen digital rectal normal.",
        distractorProfile: "seguimiento_lejano_psa_elevado",
        incorrectFeedback:
          "PSA elevado con factores de riesgo (afrodescendiente, familiar de primer grado) requiere evaluación urológica activa, no seguimiento a 5 años.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar quimioterapia sistémica empírica por sospecha de enfermedad metastásica.",
        distractorProfile: "quimioterapia_sin_biopsia",
        incorrectFeedback:
          "No hay diagnóstico histológico ni evidencia de enfermedad metastásica; el siguiente paso es estudio diagnóstico, no quimioterapia.",
      },
      {
        id: "C",
        label: "C",
        text: "Referir a urología para confirmación/repetición de PSA, posible RM multiparamétrica de próstata y biopsia prostática según estratificación de riesgo.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar prostatectomía radical de inmediato sin biopsia previa.",
        distractorProfile: "cirugia_sin_histologia",
        incorrectFeedback:
          "La prostatectomía radical requiere diagnóstico histológico y estadificación; no se realiza solo por PSA elevado.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "PSA elevado (6.8) en hombre de 62 años, afrodescendiente, con antecedente familiar: valoración urológica con repetición de PSA, RM multiparamétrica según protocolo y biopsia dirigida si indicada. No tratamiento sin histología.",
    keyPoints: [
      "PSA elevado + factores de riesgo → estudio urológico activo.",
      "Biopsia/RM antes de decisiones terapéuticas.",
      "No prostatectomía ni quimioterapia sin diagnóstico histológico.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-43",
    university: "UCC",
    examArea: "Reumatología / Artritis Reumatoide",
    topic: "Reumatología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "reumatologia", "artritis_reumatoide", "dmard"],
    statement:
      "Mujer de 42 años consulta por rigidez matutina de 2 horas y poliartritis simétrica de muñecas, metacarpofalángicas y articulaciones interfalángicas proximales de 4 meses de evolución. Signos vitales normales. Examen articular: edema, calor y dolor en ambas muñecas y MCF II–V bilaterales. Laboratorios: VSG 58 mm/h, PCR 2.8 mg/dL, factor reumatoide positivo, anti-CCP positivo. Radiografía de manos: osteopenia periarticular y erosiones marginales incipientes en MCF. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar metotrexato en dosis semanal con ácido fólico y valorar adición de corticoide en dosis bajas transitorias si hay actividad persistente.",
      },
      {
        id: "B",
        label: "B",
        text: "Manejo exclusivo con ibuprofeno a demanda y control en 12 meses.",
        distractorProfile: "aine_solo_ar_erosiva",
        incorrectFeedback:
          "La artritis reumatoide con erosiones y anti-CCP positivo requiere DMARD de inicio precoz; los AINE solos no modifican la enfermedad.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar prednisolona 60 mg/día como monoterapia a largo plazo sin metotrexato.",
        distractorProfile: "esteroides_monoterapia_ar",
        incorrectFeedback:
          "Los corticoides son puente o adyuvantes; la monoterapia prolongada no previene erosiones y tiene efectos adversos importantes.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar artrocentesis y diferir tratamiento hasta resultado de cultivo en 72 horas.",
        distractorProfile: "diferir_dmard_ar_clasica",
        incorrectFeedback:
          "El cuadro clínico y serológico es típico de AR; no hay monoartritis aguda febril que obligue a diferir DMARD por sospecha de artritis séptica.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Artritis reumatoide seropositiva con erosiones incipientes: iniciar metotrexato precoz (DMARD ancla) con ácido fólico; corticoide en dosis bajas puente si actividad. Objetivo: remisión y prevención de daño estructural.",
    keyPoints: [
      "AR seropositiva con erosiones → metotrexato precoz.",
      "AINE no modifican enfermedad; no monoterapia prolongada con esteroides.",
      "Tratar para alcanzar remisión y evitar destrucción articular.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-44",
    university: "UCC",
    examArea: "Reumatología / Lupus / Nefrología",
    topic: "Reumatología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "reumatologia", "lupus", "nefritis"],
    statement:
      "Mujer de 29 años consulta por edema facial y en miembros inferiores de 3 semanas, artralgias y rash malar fotosensible. Signos vitales: PA 155/95 mmHg, FC 88 lpm. Examen: edema ++/+++, rash eritematoso en puente nasal y mejillas que respeta surco nasogeniano. Laboratorios: ANA 1:640 homogéneo, anti-dsDNA positivo, complemento C3 y C4 bajos, proteinuria 24 h 3.2 g, creatinina 1.6 mg/dL, sedimento urinario con cilindros granulosos y eritrocitos dismórficos. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar ibuprofeno y control ambulatorio en 6 meses.",
        distractorProfile: "aine_lupus_nefritis",
        incorrectFeedback:
          "Proteinuria nefrótica, hipertensión, cilindros y creatinina elevada sugieren nefritis lúpica activa; requiere evaluación urgente y inmunosupresión, no AINE ambulatorio.",
      },
      {
        id: "B",
        label: "B",
        text: "Referir a nefrología/reumatología para biopsia renal y tratamiento con corticoides sistémicos ± micofenolato o ciclofosfamida según clase histológica.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar antibióticos empíricos por sospecha de glomerulonefritis postinfecciosa.",
        distractorProfile: "atb_lupus_nefritis",
        incorrectFeedback:
          "El perfil inmunológico (anti-dsDNA, complemento bajo) y clínica sistémica orientan a nefritis lúpica, no a GN postinfecciosa bacteriana.",
      },
      {
        id: "D",
        label: "D",
        text: "Restricción hídrica y diurético como única medida hasta remisión espontánea.",
        distractorProfile: "solo_sintomatico_nefritis_lupica",
        incorrectFeedback:
          "La nefritis lúpica activa sin inmunosupresión progresa a insuficiencia renal terminal; el diurético solo no trata la inflamación glomerular.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Lupus eritematoso sistémico con nefritis probable (proteinuria >3 g, HTA, cilindros, creatinina elevada, anti-dsDNA y complemento bajo): biopsia renal para clasificación y tratamiento inmunosupresor (corticoides + micofenolato o ciclofosfamida según clase).",
    keyPoints: [
      "Nefritis lúpica: proteinuria + sedimento activo + anti-dsDNA + complemento bajo.",
      "Biopsia renal guía tratamiento.",
      "Inmunosupresión precoz previene ERC terminal.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-45",
    university: "UCC",
    examArea: "Reumatología / Cristales / Urgencias",
    topic: "Reumatología",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "reumatologia", "gota", "hiperuricemia"],
    statement:
      "Hombre de 55 años con antecedente de hipertensión en hidroclorotiazida consulta por dolor intenso, hinchazón y eritema en primera articulación metatarsofalángica derecha de 24 horas de evolución. Signos vitales: temperatura 37.5 °C, resto normal. Examen: articulación I MCF derecha caliente, eritematosa, muy dolorosa a la mínima palpación. Ácido úrico sérico 9.2 mg/dL. No hay herida ni trauma. ¿Cuál es el manejo agudo MÁS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar alopurinol 300 mg/día de inmediato para normalizar el ácido úrico durante la crisis.",
        distractorProfile: "alopurinol_en_crisis_aguda",
        incorrectFeedback:
          "Iniciar alopurinol durante la crisis aguda puede empeorar o prolongar el ataque; el tratamiento agudo es antiinflamatorio.",
      },
      {
        id: "B",
        label: "B",
        text: "Aspirina en dosis altas como antiinflamatorio de primera línea.",
        distractorProfile: "aspirina_gota",
        incorrectFeedback:
          "La aspirina en dosis bajas-moderadas puede reducir la excreción urinaria de ácido úrico y empeorar la gota; se prefieren AINE, colchicina o esteroides.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar colchicina en dosis apropiada, AINE o prednisolona oral según contraindicaciones (función renal, comorbilidades).",
      },
      {
        id: "D",
        label: "D",
        text: "Artrocentesis no está indicada y debe evitarse en toda monoartritis aguda.",
        distractorProfile: "evitar_artrocentesis_monoartritis",
        incorrectFeedback:
          "La artrocentesis puede confirmar cristales de urato monosódico y descartar artritis séptica; no está contraindicada, aunque el manejo antiinflamatorio es prioritario.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Crisis aguda de gota en I MCF: colchicina, AINE o corticoide oral/intraarticular según contraindicaciones. No iniciar alopurinol en la crisis. La aspirina en dosis analgésicas habituales no es primera línea.",
    keyPoints: [
      "Gota aguda: colchicina, AINE o esteroide; no alopurinol en crisis.",
      "Evitar aspirina para tratar crisis de gota.",
      "Alopurinol se inicia tras resolución de la crisis si hay indicación.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-46",
    university: "UCC",
    examArea: "Reumatología / Infectología / Urgencias",
    topic: "Reumatología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "reumatologia", "artritis_septica", "monoartritis"],
    statement:
      "Hombre de 58 años, con diabetes mellitus, consulta por monoartritis aguda de rodilla derecha de 2 días: dolor intenso, incapacidad para la marcha, fiebre 38.8 °C. Signos vitales: PA 110/70 mmHg, FC 105 lpm. Rodilla: aumento de volumen importante, calor, eritema, dolor a mínimo movimiento. Leucocitos 18500/mm³, PCR 12 mg/dL. Radiografía de rodilla: aumento de partes blandas, sin fractura. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar colchicina y alopurinol empíricamente por probable gota.",
        distractorProfile: "gota_sin_descartar_septica",
        incorrectFeedback:
          "Monoartritis febril con leucocitosis en diabético es artritis séptica hasta demostrar lo contrario; tratar como gota retrasa ATB y drenaje.",
      },
      {
        id: "B",
        label: "B",
        text: "Artrocentesis diagnóstica de urgencia, iniciar antibiótico empírico intravenoso tras obtener muestra y drenaje articular (artroscopia o lavado abierto según respuesta).",
      },
      {
        id: "C",
        label: "C",
        text: "Observación con AINE y control ambulatorio en 48 horas si no mejora.",
        distractorProfile: "observacion_artritis_septica",
        incorrectFeedback:
          "La artritis séptica es emergencia; el retraso en drenaje y ATB destruye cartílago en horas y aumenta mortalidad.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar metotrexato y prednisolona por sospecha de artritis reumatoide de inicio agudo.",
        distractorProfile: "inmunosupresion_artritis_septica",
        incorrectFeedback:
          "La inmunosupresión en artritis séptica no tratada es catastrófica; el cuadro febril monoarticular requiere artrocentesis y ATB.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Monoartritis aguda febril en paciente diabético: artritis séptica hasta probar lo contrario. Artrocentesis urgente (Gram, cultivo, cristales), ATB IV empírico (antiestafilocócico según contexto) y drenaje articular.",
    keyPoints: [
      "Monoartritis febril = séptica hasta demostrar lo contrario.",
      "Artrocentesis urgente antes/durante ATB.",
      "Drenaje + ATB IV; no AINE ambulatorio ni inmunosupresores.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-47",
    university: "UCC",
    examArea: "Medicina Interna / Nefrología / Bioquímica",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "bioquimica", "acidosis_metabolica", "brecha_anionica"],
    statement:
      "Hombre de 45 años con diabetes mellitus tipo 2 mal controlada consulta a urgencias por náuseas, vómitos y respiración profunda de 12 horas. Signos vitales: PA 105/65 mmHg, FC 110 lpm, FR 28 rpm. Examen: deshidratación moderada, aliento cetósico. Gases arteriales: pH 7.18, PaCO₂ 28 mmHg, HCO₃⁻ 10 mEq/L. Sodio 132 mEq/L, potasio 5.2 mEq/L, cloro 100 mEq/L, glucosa 420 mg/dL. Brecha aniónica calculada: 22 mEq/L. ¿Cuál es el mecanismo MÁS probable de la acidosis metabólica y la conducta inicial MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Acidosis hiperclorémica por pérdida de bicarbonato; reponer bicarbonato IV como tratamiento principal.",
        distractorProfile: "bicarbonato_acidosis_hipercloremica",
        incorrectFeedback:
          "La brecha aniónica elevada (22) indica acidosis con gap aumentado (MUDPILES), no acidosis hiperclorémica normal gap.",
      },
      {
        id: "B",
        label: "B",
        text: "Cetoacidosis diabética por acumulación de cetonas; iniciar reanimación con solución salina al 0.9% y evaluar potasio antes de insulina intravenosa.",
      },
      {
        id: "C",
        label: "C",
        text: "Acidosis láctica por sepsis; iniciar antibióticos empíricos sin considerar la hiperglucemia.",
        distractorProfile: "lactica_sin_integrar_dm",
        incorrectFeedback:
          "Aliento cetósico, glucosa 420 y brecha aniónica en contexto de DM apuntan primero a CAD; no hay datos de sepsis como causa principal.",
      },
      {
        id: "D",
        label: "D",
        text: "Intoxicación por metanol; iniciar etanol empírico sin medir osmolalidad.",
        distractorProfile: "metanol_sin_evidencia",
        incorrectFeedback:
          "La intoxicación por metanol es posible con gap aumentado, pero aliento cetósico e hiperglucemia extrema orientan a CAD como diagnóstico principal.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Acidosis metabólica con brecha aniónica elevada (22), pH 7.18, hiperglucemia y aliento cetósico: cetoacidosis diabética. Manejo: cristaloides 0.9%, evaluar K⁺ e iniciar insulina IV cuando K⁺ ≥3.3 mEq/L.",
    keyPoints: [
      "Brecha aniónica >12 → acidosis con gap (CAD, lactato, tóxicos).",
      "CAD: cetosis + hiperglucemia + aliento cetósico.",
      "Volumen primero; insulina cuando K⁺ seguro.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-48",
    university: "UCC",
    examArea: "Medicina Interna / Cardiología / Hepatología",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "bioquimica", "enzimas_cardiacas", "hepatitis"],
    statement:
      "Hombre de 52 años consulta por dolor epigástrico y en hipocondrio derecho de 2 días, náuseas y orina oscura. Refiere consumo de alcohol en exceso el fin de semana previo. Signos vitales: PA 125/80 mmHg, FC 88 lpm. Examen: ictericia leve, hepatomegalia dolorosa, sin soplos. ECG: ritmo sinusal sin cambios isquémicos agudos. Laboratorios: AST 980 U/L, ALT 850 U/L, bilirrubina total 4.2 mg/dL, fosfatasa alcalina 180 U/L, troponina I <0.01 ng/mL, CK total 320 U/L (CK-MB 2%). ¿Cuál es la interpretación MÁS apropiada y la conducta inicial?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Infarto agudo de miocardio con elevación de transaminasas por shock hepático; iniciar anticoagulación plena y cateterismo urgente.",
        distractorProfile: "iam_por_ast_alt",
        incorrectFeedback:
          "Troponina negativa y ECG sin isquemia; AST/ALT muy elevadas con ictericia y contexto de alcohol orientan a hepatitis aguda, no IAM.",
      },
      {
        id: "B",
        label: "B",
        text: "Hepatitis aguda probablemente tóxica/alcoholica; manejo de soporte, suspender hepatotóxicos, evaluar gravedad (INR, encefalopatía) y considerar estudio de virus hepatotropos según protocolo.",
      },
      {
        id: "C",
        label: "C",
        text: "Embolia pulmonar masiva; solicitar angio-TAC de tórax de inmediato.",
        distractorProfile: "tep_por_transaminasas",
        incorrectFeedback:
          "No hay disnea súbita, hipoxemia ni datos de TEP; el cuadro es abdominal-hepático con ictericia.",
      },
      {
        id: "D",
        label: "D",
        text: "Rabdomiolisis primaria; iniciar bicarbonato y diálisis de urgencia.",
        distractorProfile: "rabdomiolisis_sin_ck_alta",
        incorrectFeedback:
          "CK total modesta y relación CK-MB baja no sugieren rabdomiolisis masiva; el patrón hepático (AST/ALT >> CK) es típico de lesión hepatocelular.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "AST/ALT muy elevadas con ictericia, hepatomegalia dolorosa, troponina negativa y ECG normal: lesión hepatocelular aguda (alcohol/tóxico vs viral). Soporte, evaluar criterios de gravedad (INR, encefalopatía, bilirrubina) y estudio etiológico.",
    keyPoints: [
      "AST/ALT >> CK + ictericia → hepatocelular, no IAM.",
      "Troponina y ECG descartan SCA en este caso.",
      "Evaluar gravedad hepática (INR, encefalopatía).",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-49",
    university: "UCC",
    examArea: "Medicina Interna / Nefrología / Cardiología",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "bioquimica", "hiperkalemia", "ecg"],
    statement:
      "Mujer de 70 años con insuficiencia renal crónica estadio 4 (creatinina basal 3.8 mg/dL) en tratamiento con enalapril y espironolactona consulta por debilidad generalizada y palpitaciones. Signos vitales: PA 130/75 mmHg, FC 52 lpm. ECG: ondas T simétricas y acuminadas en precordiales, ensanchamiento del QRS a 130 ms, ondas P aplanadas. Potasio sérico 6.8 mEq/L. ¿Cuál es la conducta inmediata MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar gluconato de calcio al 10% intravenoso de inmediato para estabilización de membrana miocárdica.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar insulina regular con dextrosa al 50% como primera medida sin calcio.",
        distractorProfile: "insulina_antes_calcio_ecg_toxico",
        incorrectFeedback:
          "Con cambios ECG por hiperkalemia (T acuminadas, QRS ancho), el calcio IV estabiliza el miocardio en minutos; la insulina baja K⁺ pero tarda más.",
      },
      {
        id: "C",
        label: "C",
        text: "Suspender enalapril y espironolactona y dar de alta con dieta baja en potasio sin otras medidas.",
        distractorProfile: "alta_hiperkalemia_ecg",
        incorrectFeedback:
          "K⁺ 6.8 con ECG tóxico es emergencia; suspender fármacos no basta y el alta es insegura.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar bicarbonato de sodio como única medida en paciente con pH arterial normal.",
        distractorProfile: "bicarbonato_monoterapia",
        incorrectFeedback:
          "El bicarbonato es adyuvante si hay acidosis; no sustituye calcio ni medidas de shift/eliminación en hiperkalemia con ECG alterado.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Hiperkalemia moderada-severa (6.8 mEq/L) con cambios ECG (T acuminadas, QRS ancho): gluconato de calcio IV primero para estabilizar miocardio; luego insulina + dextrosa, beta-agonista, resinas o diálisis según contexto; suspender IECA/espironolactona.",
    keyPoints: [
      "Hiperkalemia + ECG tóxico → calcio IV primero.",
      "Insulina + dextrosa = shift intracelular (segundo paso).",
      "Diálisis si ERC avanzada o refractaria.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-50",
    university: "UCC",
    examArea: "Medicina Interna / Endocrinología / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "bioquimica", "hipercalcemia", "malignidad"],
    statement:
      "Mujer de 64 años con antecedente de tabaquismo consulta por astenia, poliuria, polidipsia, estreñimiento y confusión leve de 3 semanas. Signos vitales: PA 145/90 mmHg, FC 98 lpm. Examen: deshidratación leve, no masas palpables cervicales. Laboratorios: calcio sérico corregido por albúmina 14.2 mg/dL, fosfato 2.0 mg/dL, PTH <5 pg/mL (suprimida), creatinina 1.8 mg/dL, albumina 3.5 g/dL. ECG: intervalo QT acortado. ¿Cuál es la causa MÁS probable y el manejo inicial MÁS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hiperparatiroidismo primario; programar paratiroidectomía electiva ambulatoria.",
        distractorProfile: "hpt_primario_ptH_baja",
        incorrectFeedback:
          "En hiperparatiroidismo primario la PTH está elevada o inapropiadamente normal; aquí la PTH está suprimida.",
      },
      {
        id: "B",
        label: "B",
        text: "Hipercalcemia por malignidad (PTHrP u osteólisis); iniciar hidratación intravenosa con solución salina al 0.9% agresiva y considerar bifosfonato intravenoso tras reanimación.",
      },
      {
        id: "C",
        label: "C",
        text: "Intoxicación por vitamina D; iniciar diuréticos tiazídicos para aumentar excreción de calcio.",
        distractorProfile: "tiazidas_hipercalcemia",
        incorrectFeedback:
          "Las tiazidas reducen excreción urinaria de calcio y empeoran la hipercalcemia; están contraindicadas.",
      },
      {
        id: "D",
        label: "D",
        text: "Hipocalcemia por error de laboratorio; repetir calcio en 6 meses.",
        distractorProfile: "negar_hipercalcemia_sintomatica",
        incorrectFeedback:
          "Calcio 14.2 mg/dL con síntomas neurológicos, poliuria y QT acortado confirma hipercalcemia severa sintomática; requiere tratamiento urgente.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Hipercalcemia severa (Ca corregido 14.2) con PTH suprimida: causa no paratiroidea, más probable malignidad (PTHrP en tabaquista). Manejo: hidratación IV agresiva con SF 0.9%, luego bifosfonato IV (zoledronato); buscar neoplasia.",
    keyPoints: [
      "PTH suprimida + hipercalcemia → pensar malignidad o vitamina D.",
      "Tratamiento agudo: SF 0.9% IV + bifosfonato.",
      "Tiazidas empeoran hipercalcemia; no usar.",
    ],
  },
];
