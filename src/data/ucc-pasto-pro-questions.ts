import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Banco exclusivo UCC Pasto · Medicina Interna (plan Pro).
 * Entrenamiento, simulacros y repaso; no sustituye la batería Act1 (ucc-dx-*).
 */
export const UCC_PASTO_PRO_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-pro-01",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "pro", "cardiologia", "choque", "iam", "ruptura_mitral", "bcia"],
    statement:
      "Mujer de 68 años consulta al servicio de urgencias por disnea súbita de reposo que evolucionó rápidamente a deterioro del estado de conciencia. Como antecedente, reporta dolor torácico opresivo de 12 horas de evolución ocurrido hace cuatro días, por el cual no buscó atención médica. Signos vitales: PA 75/45 mmHg, FC 130 lpm, FR 35 rpm, SpO2 82% al aire ambiente. Al examen físico: pálida, diaforética, extremidades frías con llenado capilar de 5 segundos. Auscultación cardíaca revela un nuevo soplo holosistólico grado IV/VI en el ápex con irradiación a la axila. Auscultación pulmonar con crépitos bilaterales de burbuja fina que ascienden hasta los ápices. ECG: ondas Q patológicas y supradesnivel del segmento ST persistente en DII, DIII y aVF. Ecocardiografía a la cabecera (POCUS): ventrículo izquierdo hiperdinámico, fracción de eyección preservada y movimiento valvular anómalo de la valva posterior mitral. Ante este escenario de inestabilidad hemodinámica profunda, ¿cuál es la conducta inmediata MÁS apropiada y basada en la evidencia que modifica la mortalidad a corto plazo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Infusión de nitroprusiato de sodio intravenoso de inmediato para reducir agresivamente la poscarga y disminuir la fracción regurgitante valvular.",
        distractorProfile: "nitroprusiato_choque_franco",
        incorrectFeedback:
          "El nitroprusiato es vasodilatador potente; en choque franco (PA 75/45) puede provocar colapso hemodinámico y parada cardíaca.",
      },
      {
        id: "B",
        label: "B",
        text: "Soporte inotrópico aislado con milrinona para mejorar la contractilidad miocárdica derecha y facilitar la relajación ventricular.",
        distractorProfile: "milrinona_imr_aguda",
        incorrectFeedback:
          "La milrinona es inodilatadora y empeora la hipotensión; el VI está hiperdinámico: el problema es mecánico (fuga mitral), no contractilidad.",
      },
      {
        id: "C",
        label: "C",
        text: "Intubación orotraqueal, soporte vasopresor/inotrópico y colocación urgente de balón de contrapulsación intraaórtico (BCIA) como puente a cirugía cardiovascular.",
      },
      {
        id: "D",
        label: "D",
        text: "Expansión volumétrica en bolos rápidos con 1000 cc de cristaloides para garantizar el llenado ventricular izquierdo y mantener el gasto cardíaco.",
        distractorProfile: "cristaloides_edema_pulmonar",
        incorrectFeedback:
          "El volumen masivo en edema pulmonar cardiogénico severo empeora el intercambio gaseoso y puede colapsar el ventrículo derecho.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Choque cardiogénico por insuficiencia mitral aguda secundaria a ruptura del músculo papilar posteromedial (IAM inferior tardío). Terapia definitiva quirúrgica; puente: vía aérea, vasopresores y BCIA (clase I) para reducir poscarga y mejorar perfusión coronaria sin hipotensión fatal.",
    keyPoints: [
      "Ruptura papilar posteromedial → IM aguda + edema pulmonar + choque.",
      "BCIA + soporte vital como puente a cirugía valvular urgente.",
      "Evitar vasodilatadores y volumen en choque franco con edema pulmonar.",
    ],
    theoryContent: `Choque cardiogénico por complicación mecánica del IAM

Diagnóstico integrado:
- IAM inferior tardío (Q + ST persistente en DII, DIII, aVF).
- Nuevo soplo holosistólico en ápex → insuficiencia mitral aguda por ruptura del músculo papilar posteromedial (irrigation única por descendente posterior).
- VI hiperdinámico con FEVI preservada: la fuga súbita eleva presión capilar pulmonar (edema) y colapsa el gasto hacia la aorta.

Conducta que modifica mortalidad (AHA/ACC IAMCEST, ESC IC aguda):
1. Soporte vital: intubación si hipoxemia refractaria.
2. Vasopresores para perfusión coronaria.
3. BCIA indicación clase I como puente: ↓ poscarga sistólica (↓ regurgitación), ↑ perfusión coronaria diastólica.
4. Cirugía urgente (reparación/reemplazo mitral).

Errores frecuentes en examen:
- Nitroprusiato o milrinona en hipotensión profunda → colapso.
- Cristaloides masivos con edema pulmonar → asfixia / sobrecarga VD.`,
  },
  {
    id: "ucc-pro-02",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Endocrinología / Urgencias",
    topic: "Endocrinología",
    difficulty: "hard",
    tags: ["ucc", "pro", "endocrinologia", "cad", "dm1", "hipokalemia"],
    statement:
      "Femenina de 22 años, con antecedente de Diabetes Mellitus tipo 1, es traída por familiares por cuadro de 24 horas de emesis incoercible, dolor abdominal difuso y somnolencia progresiva. Signos vitales: PA 85/50 mmHg, FC 135 lpm, FR 28 rpm (respiración profunda y laboriosa), temperatura 36.5 °C. Examen físico: mucosas orales intensamente deshidratadas, turgencia cutánea disminuida, aliento cetósico, abdomen con dolor generalizado a la palpación sin irritación peritoneal. Paraclínicos urgentes: glucometría 580 mg/dL; gases arteriales: pH 7.05, PaCO2 18 mmHg, HCO3 5 mEq/L; ionograma: sodio 131 mEq/L, potasio 3.1 mEq/L, cloro 102 mEq/L; brecha aniónica 24. Tomando en consideración los resultados paraclínicos iniciales, ¿cuál es la conducta terapéutica INMEDIATA más apropiada para esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar infusión intravenosa de insulina regular a 0.1 U/kg/h inmediatamente para frenar la cetogénesis y corregir la acidosis metabólica severa.",
        distractorProfile: "insulina_antes_k_seguro",
        incorrectFeedback:
          "Con K+ <3.3 mEq/L, la insulina desplaza potasio al interior celular y puede precipitar hipokalemia fulminante y arritmias letales.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar bolo de bicarbonato de sodio a 1 mEq/kg dado que presenta una acidemia con pH crítico cercano a 7.0 que amenaza la contractilidad miocárdica.",
        distractorProfile: "bicarbonato_cad_joven",
        incorrectFeedback:
          "El bicarbonato en CAD solo se considera tibiamente si pH <6.9; aumenta riesgo de edema cerebral e hipokalemia.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar reanimación hídrica agresiva con solución salina al 0.9% y reposición agresiva de potasio, posponiendo el inicio de la insulina hasta titular niveles séricos seguros.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar terapia combinada con insulina subcutánea de acción rápida y fluidos hipotónicos (solución salina al 0.45%) por la hiperosmolaridad inminente.",
        distractorProfile: "insulina_sc_choque",
        incorrectFeedback:
          "En choque y CAD severa la absorción subcutánea es errática; el estándar es insulina IV una vez K+ ≥3.3 mEq/L.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "CAD severa con K+ 3.1 mEq/L: la insulina está contraindicada hasta K+ ≥3.3 mEq/L (ADA). Prioridad: cristaloides 0.9% y reposición de potasio; luego insulina IV.",
    keyPoints: [
      "K+ <3.3 → posponer insulina.",
      "Acidosis severa enmascara déficit intracelular de K+.",
      "Fluidos antes que insulina en CAD con hipokalemia.",
    ],
    theoryContent: `CAD — prioridad con hipokalemia (ADA)

Algoritmo:
1. Volumen con SF 0.9%.
2. Si K+ <3.3: reponer K+ y NO iniciar insulina.
3. Si K+ 3.3–5.2: insulina 0.1 U/kg/h + K+ según protocolo.
4. Bicarbonato solo si pH <6.9 (controversial; riesgo edema cerebral).

Trampa de examen: iniciar insulina con K+ 3.1 → arritmia/paro.`,
  },
  {
    id: "ucc-pro-03",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Neumología / Urgencias",
    topic: "Neumología",
    difficulty: "hard",
    tags: ["ucc", "pro", "neumologia", "tep", "trombolisis", "choque_obstructivo"],
    statement:
      "Hombre de 65 años, en séptimo día de posoperatorio por reemplazo total de cadera, presenta episodio de síncope en el baño de su habitación, seguido de disnea extrema. Al ingreso a urgencias: PA 70/40 mmHg, FC 135 lpm, FR 32 rpm, SpO2 84% con máscara de no reinhalación a 15 L/min. Examen físico revela ingurgitación yugular franca y refuerzo del segundo ruido cardíaco (P2). Ecocardiograma transtorácico en urgencias: dilatación severa del ventrículo derecho, desviación del septum interventricular hacia la izquierda (signo de la letra D) e hipocinesia de la pared libre del ventrículo derecho con respeto del ápex (signo de McConnell). Según la estratificación de riesgo hemodinámico de este paciente, ¿cuál es la intervención farmacológica de primera línea recomendada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anticoagulación sistémica temprana con heparina de bajo peso molecular a dosis terapéuticas (1 mg/kg cada 12 horas) y monitorización estricta en Unidad de Cuidado Intensivo.",
        distractorProfile: "hbpm_tep_alto_riesgo",
        incorrectFeedback:
          "La heparina previene nuevos trombos pero no disuelve el coágulo que causa el choque obstructivo en TEP masivo.",
      },
      {
        id: "B",
        label: "B",
        text: "Terapia de reperfusión farmacológica sistémica inmediata con trombolíticos (ej. Alteplasa) ante el choque de etiología obstructiva, al sopesar el riesgo vital contra el riesgo de sangrado.",
      },
      {
        id: "C",
        label: "C",
        text: "Reanimación agresiva con 2 litros de cristaloides isotónicos para optimizar la precarga del ventrículo derecho, vencer la poscarga de la arteria pulmonar y mejorar el gasto cardíaco.",
        distractorProfile: "fluidos_vd_sobrecargado",
        incorrectFeedback:
          "Más volumen distiende el VD, desplaza el septum y empeora el gasto cardíaco (interdependencia ventricular).",
      },
      {
        id: "D",
        label: "D",
        text: "Inicio de infusión de nitroprusiato de sodio para causar vasodilatación del lecho vascular pulmonar y reducir la resistencia vascular pulmonar agudamente.",
        distractorProfile: "nitroprusiato_hipotension",
        incorrectFeedback:
          "Con PA 70/40, un vasodilatador sistémico provoca vasoplejía y colapso hemodinámico.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "TEP de alto riesgo (choque + falla VD): trombolisis sistémica de primera línea (ESC). El riesgo de muerte por obstrucción supera la contraindicación relativa de sangrado postoperatorio.",
    keyPoints: [
      "TEP masivo = choque + sobrecarga VD (McConnell, D-sign).",
      "Trombolisis, no solo anticoagulación.",
      "Evitar fluidos agresivos en falla VD aguda.",
    ],
    theoryContent: `TEP de alto riesgo (ESC)

Criterios: hipotensión (PAS <90) + evidencia de sobrecarga VD.
Primera línea: trombolisis sistémica (alteplasa) si no contraindicación absoluta.
Heparina: no suficiente sola en choque obstructivo.
Fluidos: usar con extrema cautela; preferir vasopresores/inotrópicos selectivos.`,
  },
  {
    id: "ucc-pro-04",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Nefrología / Urgencias",
    topic: "Nefrología",
    difficulty: "hard",
    tags: ["ucc", "pro", "nefrologia", "hiperkalemia", "onda_sinusoidal"],
    statement:
      "Hombre de 60 años con Enfermedad Renal Crónica estadio 5 en hemodiálisis trisemanal, reporta haber faltado a sus últimas dos sesiones. Ingresa a la sala de reanimación por debilidad muscular profunda, parestesias y palpitaciones. Signos vitales: PA 110/60 mmHg, FC 42 lpm, FR 18 rpm, SpO2 96%. ECG de 12 derivaciones: ausencia total de ondas P, complejo QRS severamente ensanchado (180 ms) fusionado con ondas T acuminadas, morfología de onda sinusoidal (sine-wave). Potasio sérico 8.2 mEq/L. Dada la inminencia del paro cardíaco, ¿cuál es el agente terapéutico INICIAL que debe ser administrado en los primeros minutos de contacto con el paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar gluconato de calcio al 10% de forma inmediata por vía intravenosa lenta para la estabilización de los canales iónicos del miocardio.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar bolo rápido de 10 unidades de insulina regular acompañada de dextrosa al 50% para promover el ingreso intracelular del potasio.",
        distractorProfile: "insulina_antes_calcio",
        incorrectFeedback:
          "La redistribución con insulina tarda 15–30 min; sin calcio primero el paciente puede fibrilar en minutos.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar terapias de eliminación extracorpórea mediante hemodiálisis de urgencia, omitiendo intervenciones médicas que retrasen el traslado a la unidad renal.",
        distractorProfile: "dialisis_sin_estabilizar",
        incorrectFeedback:
          "La diálisis es curativa pero logística lenta; primero estabilizar membrana miocárdica con calcio.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar nebulización continua con dosis altas de salbutamol y administrar furosemida intravenosa a dosis de estrés para asegurar la excreción renal.",
        distractorProfile: "salbutamol_anurico",
        incorrectFeedback:
          "Salbutamol es adyuvante y lento; furosemida es inútil en ERC estadio 5 anúrico.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Hiperkalemia con cambios ECG graves (QRS ancho, sine-wave): gluconato/cloruro de calcio IV primero (AHA/KDIGO) para estabilizar miocardio; no baja K+ pero previene paro 30–60 min.",
    keyPoints: [
      "Calcio primero si ECG tóxico.",
      "Insulina + dextrosa = paso 2 (redistribución).",
      "Diálisis = eliminación definitiva.",
    ],
    theoryContent: `Hiperkalemia emergente — orden AHA/KDIGO

1. Calcio IV (efecto en 1–3 min) si QRS ancho, P ausente, sine-wave.
2. Insulina + dextrosa (↓ K+ en 15–30 min).
3. Beta-agonistas, bicarbonato si acidosis (adyuvantes).
4. Diálisis si ERC / refractaria.`,
  },
  {
    id: "ucc-pro-05",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Neurología / Urgencias",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["ucc", "pro", "neurologia", "hic", "hipertension", "hematoma"],
    statement:
      "Hombre de 65 años es traído en ambulancia tras colapso súbito en su domicilio. Presenta cefalea 10/10, hemiplejía izquierda severa, desviación de la mirada conjugada hacia la derecha y deterioro del sensorio (Glasgow 10). Signos vitales: PA 225/130 mmHg, FC 60 lpm, FR 16 rpm. TAC de cráneo simple: gran hiperdensidad intraparenquimatosa en ganglios basales derechos (~40 cc) con desplazamiento de línea media de 5 mm, sin hidrocefalia. ¿Cuál es la estrategia hemodinámica inmediata más segura y sustentada en la evidencia para el control de la presión arterial en este escenario?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Mantener hipertensión permisiva, absteniéndose de utilizar antihipertensivos a menos que la PA supere los 220/120 mmHg, para asegurar la perfusión en la penumbra isquémica del hematoma.",
        distractorProfile: "permisiva_hic",
        incorrectFeedback:
          "La hipertensión permisiva aplica al ACV isquémico, no a la HIC: PA elevada expande el hematoma.",
      },
      {
        id: "B",
        label: "B",
        text: "Reducción controlada e inmediata de la presión arterial sistólica con agentes intravenosos titulables (ej. nicardipino o labetalol) a un objetivo terapéutico de 140 mmHg.",
      },
      {
        id: "C",
        label: "C",
        text: "Descenso agresivo y ultra-rápido de la presión arterial sistólica a una meta menor a 120 mmHg con nitroprusiato de sodio para colapsar y detener la arteria lenticuloestriada sangrante.",
        distractorProfile: "pas_menor_120_hic",
        incorrectFeedback:
          "Meta <120 mmHg aumenta eventos adversos; nitroprusiato eleva PIC por vasodilatación cerebral.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar manitol al 20% en bolo y dosis de carga de corticoides intravenosos (dexametasona) para reducir la presión intracraneal antes de manipular la presión arterial.",
        distractorProfile: "esteroides_hic",
        incorrectFeedback:
          "Los corticoides están proscritos en HIC aguda (sin beneficio, más infecciones).",
      },
    ],
    correctOptionId: "B",
    explanation:
      "HIC espontánea con PAS 150–220: reducción aguda de PAS a 140 mmHg con IV titulable es segura y puede limitar expansión del hematoma (AHA/ASA, evidencia I).",
    keyPoints: [
      "HIC ≠ ACV isquémico en manejo de PA.",
      "Objetivo PAS ~140 mmHg (no <120).",
      "Evitar nitroprusiato y esteroides en HIC.",
    ],
    theoryContent: `HIC — control de PA (AHA/ASA)

PAS inicial 150–220 sin contraindicación: reducir a 140 mmHg en 1 h (nicardipino/labetalol).
No hipertensión permisiva (eso es isquemia).
No meta agresiva <120 (ATACH-2).
Corticoides no indicados en hematoma intraparenquimatoso.`,
  },
  {
    id: "ucc-pro-06",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Infectología / Urgencias",
    topic: "Urgencias",
    difficulty: "hard",
    tags: ["ucc", "pro", "sepsis", "choque_septico", "norepinefrina", "ssc"],
    statement:
      "Mujer de 78 años, residente de hogar geriátrico, ingresa por fiebre persistente, disuria, postración y desorientación de dos días de evolución. Signos vitales iniciales: PA 75/40 mmHg, FC 125 lpm, temperatura 39.2 °C, FR 28 rpm. Laboratorios: leucocitos 24,000 cel/uL, lactato 6.5 mmol/L y uroanálisis con piuria masiva y bacterias. Se administró antibioticoterapia empírica temprana y bolo inicial de reanimación hídrica con cristaloides isotónicos a 30 cc/kg durante la primera hora. Tras el bolo: PA 78/42 mmHg y oliguria persistente. Ante la persistencia de la hipotensión profunda a pesar de la carga hídrica, ¿cuál es la conducta inmediata estandarizada en la Campaña Sobreviviendo a la Sepsis?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar un segundo reto de cristaloides a 30 cc/kg para asegurar de forma conservadora que el volumen intravascular esté completamente expandido.",
        distractorProfile: "segundo_bolo_sepsis",
        incorrectFeedback:
          "Más cristaloides sin vasopresores empeora congestión, SDRA y mortalidad (sobrecarga de fluidos).",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar infusión de vasopresores (norepinefrina de elección) inmediatamente de forma periférica o central, titulando para alcanzar una Presión Arterial Media (PAM) igual o superior a 65 mmHg.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusión continua de hidrocortisona intravenosa (200 mg/día) como terapia de rescate ante choque catalogado como de etiología suprarrenal.",
        distractorProfile: "esteroides_primera_linea",
        incorrectFeedback:
          "Los corticoides se reservan para choque séptico refractario a vasopresores, no como primer paso post-líquidos.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar una transfusión empírica de dos unidades de glóbulos rojos empacados para mejorar la entrega de oxígeno (DO2) a nivel tisular ante la hiperlactatemia severa.",
        distractorProfile: "transfusion_lactato",
        incorrectFeedback:
          "SSC no recomienda transfundir solo por lactato; umbral típico Hb <7 g/dL sin sangrado activo.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Choque séptico con hipotensión persistente tras 30 cc/kg: iniciar norepinefrina de inmediato (SSC 2021), PAM ≥65 mmHg; puede iniciarse por vía periférica mientras se logra acceso central.",
    keyPoints: [
      "Post-30 cc/kg + hipotensión → vasopresor.",
      "Norepinefrina primera línea.",
      "Corticoides solo si choque refractario.",
    ],
    theoryContent: `Choque séptico — SSC 2021

Hora 1: antibióticos + 30 cc/kg cristaloides.
Si persiste hipotensión: norepinefrina (no esperar segundo bolo masivo).
PAM objetivo ≥65 mmHg.
Hidrocortisona si necesidad de dosis altas sostenidas de vasopresores.`,
  },
  {
    id: "ucc-pro-07",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Neumología / Urgencias",
    topic: "Neumología",
    difficulty: "hard",
    tags: ["ucc", "pro", "neumologia", "asma", "falla_ventilatoria", "gases"],
    statement:
      "Hombre de 26 años, asmático crónico severo, ingresa por exacerbación aguda refractaria de tres días. Ha utilizado salbutamol más de 20 veces en las últimas horas sin alivio. Exploración: agotado, trípode, cianótico, diaforético, uso máximo de musculatura accesoria. Signos vitales: PA 135/85 mmHg, FC 145 lpm, FR 40 rpm, SpO2 86% al aire ambiente. Auscultación: tórax \"silente\", muy escasa entrada de aire vesicular y ausencia paradójica de sibilancias. Gasometría arterial (FiO2 21%): pH 7.37, PaCO2 42 mmHg, PaO2 55 mmHg, HCO3 24 mEq/L. Tomando en consideración los datos clínicos e interpretando rigurosamente los gases arteriales iniciales, ¿cuál es el significado pronóstico de los mismos y la medida inminente a contemplar?",
    options: [
      {
        id: "A",
        label: "A",
        text: "La gasometría evidencia un patrón gasométrico equilibrado y normalizado (PaCO2 dentro de límites); se debe intensificar únicamente la terapia con inhaladores beta-agonistas.",
        distractorProfile: "paco2_normal_mejora",
        incorrectFeedback:
          "PaCO2 \"normal\" con taquipnea extrema y tórax silente indica fatiga respiratoria inminente, no mejoría.",
      },
      {
        id: "B",
        label: "B",
        text: "La retención de dióxido de carbono en valores \"pseudonormales\" (42 mmHg) en un paciente con taquipnea extrema (40 rpm) indica fatiga muscular inminente, fallo ventilatorio grave y necesidad de preparación inmediata para manejo avanzado de la vía aérea.",
      },
      {
        id: "C",
        label: "C",
        text: "El paciente cursa con alcalosis respiratoria pura no compensada clásica de la broncoconstricción temprana; requiere relajantes neuromusculares inmediatos para aliviar el dolor pleurítico.",
        distractorProfile: "alcalosis_temprana",
        incorrectFeedback:
          "El pH y PaCO2 están en rango normal, no hay alcalosis respiratoria aguda en este momento.",
      },
      {
        id: "D",
        label: "D",
        text: "El paciente presenta hipercapnia secundaria a sobrecarga hídrica no cardiogénica oculta; debe iniciarse manejo con ventilación mecánica no invasiva (BIPAP) combinada con aminofilina.",
        distractorProfile: "aminofilina_vni_asma",
        incorrectFeedback:
          "Aminofilina está obsoleta en exacerbación grave; VNI puede retrasar intubación en asma crítica agotada.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Asma grave: PaCO2 normal o elevada con FR muy alta = bandera roja de falla ventilatoria (GINA). Tórax silente confirma. Preparar intubación, MgSO4 IV y esteroides.",
    keyPoints: [
      "PaCO2 normal con taquipnea = peligro.",
      "Tórax silente = obstrucción crítica.",
      "Intubación preparada, no solo más salbutamol.",
    ],
    theoryContent: `Asma casi fatal — GINA

Fase temprana: hiperventilación → PaCO2 baja (alcalosis).
Señal de alarma: PaCO2 sube hacia normal con FR alta = fatiga/obstrucción crítica.
Conducta: O2, beta-agonistas, ipratropio, esteroides IV, MgSO4; preparar IOT.`,
  },
  {
    id: "ucc-pro-08",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "pro", "cardiologia", "fibrilacion_auricular", "cardioversion", "acls"],
    statement:
      "Hombre de 68 años con antecedente de tabaquismo y cardiopatía isquémica crónica es admitido reportando palpitaciones intensas, opresión centrotorácica isquémica, mareo severo y visión borrosa. Signos vitales: PA 75/50 mmHg, FC fluctuante entre 160 y 185 lpm, FR 22 rpm, SpO2 93%. Hipoperfundido, frío y ansioso. ECG: ritmo taquicárdico, intervalos R-R irregularmente irregulares, QRS estrechos (<120 ms) y ausencia de ondas P, congruente con fibrilación auricular con respuesta ventricular rápida. Teniendo en cuenta el algoritmo de soporte vital cardiovascular avanzado, ¿cuál es la acción terapéutica que salva la vida y debe ejecutarse de inmediato?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Control de frecuencia agresivo e inmediato mediante la administración de bolo intravenoso de diltiazem o metoprolol para disminuir el trabajo miocárdico.",
        distractorProfile: "bb_ccb_fa_inestable",
        incorrectFeedback:
          "Betabloqueadores y diltiazem son para FA estable; en PA 75/50 inducen colapso por inotropismo negativo.",
      },
      {
        id: "B",
        label: "B",
        text: "Cardioversión farmacológica inmediata mediante la infusión continua de amiodarona (150 mg IV en 10 minutos) debido a su excelente perfil de seguridad miocárdica.",
        distractorProfile: "amiodarona_inestable",
        incorrectFeedback:
          "Amiodarona es lenta y su vehículo puede causar hipotensión; no es primera línea en inestabilidad.",
      },
      {
        id: "C",
        label: "C",
        text: "Sedoanalgesia seguida de cardioversión eléctrica sincronizada inmediata, comenzando preferentemente con descargas bifásicas escalonadas de 120 a 200 Joules.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar adenosina intravenosa (6 mg seguida de bolo salino veloz) como intervención diagnóstica y terapéutica para discriminar la vía de reentrada.",
        distractorProfile: "adenosina_fa",
        incorrectFeedback:
          "Adenosina no convierte FA; pierde tiempo en paciente con isquemia e hipotensión.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "FA con inestabilidad hemodinámica (hipotensión, isquemia, síntomas graves): cardioversión eléctrica sincronizada inmediata (ACLS/AHA), no fármacos de control de frecuencia.",
    keyPoints: [
      "Inestabilidad → cardioversión sincronizada.",
      "No diltiazem/metoprolol en choque.",
      "Adenosina no es para FA.",
    ],
    theoryContent: `FA inestable — ACLS

Inestabilidad = hipotensión, isquemia miocárdica, ICC aguda, alteración de conciencia.
Tratamiento: sedación + cardioversión eléctrica sincronizada (120–200 J bifásico).
Control de frecuencia solo si estable.`,
  },
  {
    id: "ucc-pro-09",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Gastroenterología / Urgencias",
    topic: "Gastroenterología",
    difficulty: "hard",
    tags: ["ucc", "pro", "gastroenterologia", "varices", "hematemesis", "cirrosis"],
    statement:
      "Hombre de 55 años, con antecedente de cirrosis alcohólica avanzada (Child-Pugh C) e hipertensión portal, es llevado a urgencias tras dos episodios masivos de hematemesis de sangre rutilante (>1 litro estimado). Estuporoso, encefalopatía grado III y reflejos de vía aérea abolidos; vomita coágulos frescos activamente. Signos vitales: PA 80/40 mmHg, FC 135 lpm, FR 28 rpm. Examen: ictericia marcada, red venosa colateral, ascitis a tensión. Antes de considerar el traslado a endoscopia para terapia hemostática, ¿cuál es la primera secuencia lógica de reanimación y protección vital para este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reanimación hídrica súper masiva para normalizar completamente la tensión arterial a niveles premórbidos, combinada con endoscopia diagnóstica diferida a 48 horas.",
        distractorProfile: "fluidos_masivos_variceal",
        incorrectFeedback:
          "Sobrecarga volumétrica aumenta presión portal y re-sangrado; endoscopia no debe diferirse 48 h en sangrado activo.",
      },
      {
        id: "B",
        label: "B",
        text: "Intubación orotraqueal expedita de protección de vía aérea, seguido de reanimación hídrica restrictiva/juiciosa e inicio temprano de agentes vasoactivos esplácnicos (ej. terlipresina u octreótido) y antibioticoterapia profiláctica.",
      },
      {
        id: "C",
        label: "C",
        text: "Inserción ciega e inmediata de sonda de Sengstaken-Blakemore o sonda de Linton en la sala de emergencias para taponamiento esofágico mecánico como maniobra heroica de primera línea antes de fármacos.",
        distractorProfile: "sengstaken_primera_linea",
        incorrectFeedback:
          "Balón es puente de último recurso, no primera línea; alto riesgo de ruptura esofágica.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar ácido tranexámico a dosis de choque intravenoso para inhibir la fibrinólisis masiva y posponer maniobras de vía aérea para evitar picos de presión torácica que exacerben la ruptura variceal.",
        distractorProfile: "txa_variceal",
        incorrectFeedback:
          "Tranexámico no está indicado en sangrado variceal (HALT-IT); riesgo trombótico sin beneficio.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "HDA variceal masiva: intubación por riesgo de aspiración (A), reanimación restrictiva (B), terlipresina/octreótido + ceftriaxona profiláctica (Baveno VII/AASLD), luego endoscopia <12 h.",
    keyPoints: [
      "A: vía aérea antes que endoscopia.",
      "Fluidos restrictivos; PAS ~90 mmHg.",
      "Vasoactivos + antibiótico profiláctico.",
    ],
    theoryContent: `Sangrado variceal — Baveno VII

Secuencia: IOT si encefalopatía/hematemesis activa → cristaloides juiciosos → terlipresina/octreótido → ceftriaxona → endoscopia precoz.
No normalizar PA agresivamente.
No Sengstaken de primera línea.
No ácido tranexámico sistémico.`,
  },
  {
    id: "ucc-pro-10",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Toxicología / Urgencias",
    topic: "Urgencias",
    difficulty: "hard",
    tags: ["ucc", "pro", "toxicologia", "calcioantagonistas", "hie", "amlodipino"],
    statement:
      "Mujer de 40 años, con antecedente de depresión mayor, es traída por paramédicos tras ingesta de aproximadamente 40 tabletas de amlodipino 10 mg con fines suicidas (hace 3 horas). Colapso cardiovascular en vía. Signos vitales: PA 65/35 mmHg, FC 115 lpm, FR 24 rpm. Recibió 2 litros de cristaloides en ambulancia sin respuesta. Glucometría 290 mg/dL sin diabetes previa conocida. Reconociendo el fracaso de la reanimación con cristaloides y el perfil toxicológico inminente, ¿cuál es el antídoto farmacológico avanzado fundamentado como el pilar fundamental para revertir este tipo de choque?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar dosis altas en bolo de glucagón de forma temprana y exclusiva como primera línea para puentear farmacológicamente el bloqueo del receptor de calcio.",
        distractorProfile: "glucagon_ccb",
        incorrectFeedback:
          "El glucagón es antídoto de referencia en intoxicación por betabloqueadores, no pilar en CCB severos.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar terapia hiperinsulinémica euglucémica (insulina regular a altas dosis) suplementada estrictamente con perfusión de dextrosa y cloruro de calcio de forma protocolizada.",
      },
      {
        id: "C",
        label: "C",
        text: "Instaurar un lavado gástrico inmediato a pesar de sus inestables signos vitales para frenar la cinética de absorción entérica del medicamento.",
        distractorProfile: "lavado_choque",
        incorrectFeedback:
          "Descontaminación sin vía aérea segura en choque profundo → broncoaspiración; a 3 h el rendimiento es bajo.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar flumazenil intravenoso lento para revertir los potentes efectos bloqueadores miocárdicos y vasodilatadores a nivel celular de manera fisiológica.",
        distractorProfile: "flumazenil_ccb",
        incorrectFeedback:
          "Flumazenil antagoniza benzodiacepinas; no tiene efecto en bloqueo de canales de calcio.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Intoxicación grave por CCB (amlodipino): terapia hiperinsulinémica euglucémica (HIE) es pilar (ACMT/EXTRIP): insulina alta + dextrosa + calcio IV; mejora inotropismo y captación de glucosa miocárdica.",
    keyPoints: [
      "CCB → choque distributivo + hiperglucemia.",
      "HIE > glucagón en CCB severo.",
      "Calcio IV concomitante; evitar descontaminación insegura.",
    ],
    theoryContent: `Intoxicación por calcioantagonistas

Fisiopatología: bloqueo L-type → vasoplejía + miocardiopatía; ↓ insulina → hiperglucemia.
Pilar: HIE (insulina 1 U/kg/h escalando) + dextrosa + calcio.
Glucagón: mejor en betabloqueadores.
Descontaminación solo con vía aérea protegida.`,
  },
  {
    id: "ucc-pro-11",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Cardiología / IAM",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "pro", "cardiologia", "iam", "infarto_vd", "v4r"],
    statement:
      "Hombre de 58 años con dolor torácico opresivo irradiado a mandíbula y síncope. Antecedentes: tabaquismo activo, HTA. Signos vitales: PA 80/50 mmHg, FC 55 lpm, FR 18 rpm, SpO2 96%. Examen: ingurgitación yugular franca a 45°, signo de Kussmaul positivo, pulmones limpios sin crépitos, sin soplos. Troponina I 1.5 ng/mL (<0.04). ECG: supradesnivel ST 3 mm en DII, DIII y aVF con infradesnivel en DI y aVL; derivaciones derechas con elevación ST 2 mm en V4R. POCUS: acinesia pared inferior VI, VD dilatado con disfunción severa (TAPSE 10 mm), sin derrame pericárdico. Ante la inestabilidad hemodinámica profunda en este evento coronario agudo, ¿cuál es la intervención farmacológica o hemodinámica INMEDIATA más apropiada para estabilizar la presión arterial antes del traslado a hemodinamia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar nitroglicerina intravenosa en infusión para generar vasodilatación coronaria y aliviar el dolor torácico isquémico.",
        distractorProfile: "nitratos_iam_vd",
        incorrectFeedback:
          "Los nitratos reducen precarga en un VD isquémico dependiente de volumen y pueden precipitar paro circulatorio.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar bolos rápidos de cristaloides isotónicos (solución salina al 0.9%) para optimizar la precarga del ventrículo derecho.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusión de dosis bajas de metoprolol intravenoso para disminuir la frecuencia cardíaca y reducir el consumo miocárdico de oxígeno.",
        distractorProfile: "bb_iam_inferior_bradicardia",
        incorrectFeedback:
          "Betabloqueadores en IAM inferior con bradicardia e hipotensión empeoran el choque cardiogénico.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar furosemida intravenosa para descongestionar el ventrículo derecho dilatado y disminuir la ingurgitación yugular.",
        distractorProfile: "diureticos_iam_vd",
        incorrectFeedback:
          "Diuréticos disminuyen volumen intravascular en infarto de VD; están contraindicados con hipotensión.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "IAM inferior con infarto de VD (V4R con ST elevado, TAPSE bajo, pulmones limpios, hipotensión): reanimación con cristaloides clase I (AHA/ACC). Nitratos, morfina y diuréticos contraindicados.",
    keyPoints: [
      "IAM inferior + hipotensión + pulmones limpios = sospechar VD.",
      "V4R confirma infarto de VD.",
      "Volumen antes de hemodinamia; no nitratos ni diuréticos.",
    ],
    theoryContent: `IAM con infarto de ventrículo derecho

Clave: ST en II-III-aVF + V4R + hipotensión + yugulares sin edema pulmonar.
Tratamiento inicial: cristaloides para ↑ precarga del VD.
Contraindicados: nitratos, morfina, diuréticos.`,
  },
  {
    id: "ucc-pro-12",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Cardiología / Valvulopatías",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "pro", "cardiologia", "estenosis_aortica", "fa", "cardioversion"],
    statement:
      "Mujer de 78 años con síncope presenciado y alteración aguda del estado de conciencia. Antecedentes: estenosis aórtica severa (lista TAVI), HTA. Signos vitales: PA 65/40 mmHg, FC 160 lpm, FR 26 rpm, SpO2 88%. Estuporosa, extremidades frías, diaforética. Soplo sistólico rudo tardío en foco aórtico, pulso carotídeo parvus et tardus. Lactato 5.5 mmol/L. ECG: taquicardia QRS estrecho, R-R irregular, sin ondas P (FA con RVR). Eco previo: área valvular 0.6 cm², gradiente medio 55 mmHg, FEVI 55%. El evento desencadenante de este choque es la arritmia del ECG. ¿Cuál es la conducta inmediata que salva la vida?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar bolo de amiodarona (150 mg IV en 10 minutos) para control del ritmo, evitando terapias eléctricas en válvulas calcificadas.",
        distractorProfile: "amiodarona_inestable_ea",
        incorrectFeedback:
          "Amiodarona es lenta y su vehículo puede causar hipotensión severa en choque por FA inestable.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar metoprolol intravenoso (5 mg lentos) para control rápido de la frecuencia cardíaca y aumentar el tiempo de diástole.",
        distractorProfile: "bb_choque_ea",
        incorrectFeedback:
          "Betabloqueadores son inotrópicos negativos; en EA severa con choque inducen asístole.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusión de dobutamina para superar la resistencia de la válvula aórtica estenótica y mejorar el gasto cardíaco sistémico.",
        distractorProfile: "dobutamina_ea_fa",
        incorrectFeedback:
          "Dobutamina puede aumentar FC y empeorar llenado diastólico en EA + FA rápida.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar sedación rápida (si el estado de conciencia lo permite) y proceder con cardioversión eléctrica sincronizada inmediata.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "EA severa + FA con inestabilidad (PA 65/40, síncope): cardioversión eléctrica sincronizada inmediata (ACLS). La pérdida de sístole auricular en VI rígido precipita choque cardiogénico.",
    keyPoints: [
      "EA severa depende de la patada auricular.",
      "FA inestable → cardioversión sincronizada, no amiodarona ni BB.",
      "Restaurar ritmo sinusal es crítico para supervivencia.",
    ],
    theoryContent: `Estenosis aórtica + FA inestable

VI hipertrofiado depende ~40% del llenado auricular.
FA con RVR en choque → cardioversión sincronizada urgente.
Evitar amiodarona (hipotensión), betabloqueadores e inotrópicos en fase aguda inestable.`,
  },
  {
    id: "ucc-pro-13",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Cardiología / Insuficiencia cardíaca",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "pro", "cardiologia", "steenson", "choque_cardiogenico", "inotropicos"],
    statement:
      "Hombre de 65 años con disnea de reposo, oliguria 24 h y confusión. Antecedentes: miocardiopatía isquémica, FEVI 25%. Signos vitales: PA 85/65 mmHg, FC 110 lpm, FR 28 rpm, SpO2 89%. Obnubilado, extremidades frías, llenado capilar 5 s, ingurgitación yugular, crépitos bilaterales hasta campos medios, galope S3. BNP 4500 pg/mL, lactato 4.2 mmol/L. Swan-Ganz: índice cardíaco 1.6 L/min/m², PECP 28 mmHg, RVS 2100 din·s·cm⁻⁵. Según el perfil hemodinámico de Stevenson documentado, ¿cuál es la estrategia de tratamiento inicial más acertada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar bolos intravenosos de furosemida a dosis altas de forma aislada para disminuir rápidamente la presión de enclavamiento pulmonar y aliviar la congestión.",
        distractorProfile: "diureticos_perfil_frio",
        incorrectFeedback:
          "En perfil frío y húmedo con IC bajo, diuréticos agresivos empeoran hipoperfusión y función renal.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar inotrópicos (dobutamina o milrinona), considerar soporte vasopresor transitorio para asegurar perfusión, y posponer la diuresis intensiva hasta mejorar el índice cardíaco.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar perfusión de nitroprusiato de sodio para disminuir la resistencia vascular sistémica extrema (2100 dinas), lo cual permitirá al ventrículo aumentar su volumen sistólico.",
        distractorProfile: "nitroprusiato_choque_frio",
        incorrectFeedback:
          "Vasodilatadores en PA 85/65 y choque frío provocan vasoplejía letal; son para perfil caliente hipertenso.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar expansión de volumen guiada por metas con cristaloides para optimizar la precarga, dado que la hipotensión es el principal determinante del compromiso del sensorio.",
        distractorProfile: "fluidos_pecp_elevada",
        incorrectFeedback:
          "Con PECP 28 mmHg e ingurgitación, más volumen empeora edema pulmonar.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Perfil C de Stevenson (frío y húmedo): IC 1.6, PECP 28, hipoperfusión + congestión. Primero inotrópicos ± vasopresores; diuresis y vasodilatadores después de mejorar perfusión (ESC IC aguda).",
    keyPoints: [
      "Frío + húmedo = choque cardiogénico con congestión.",
      "Inotrópicos antes que diuréticos masivos.",
      "Nitroprusiato solo si perfil caliente hipertenso.",
    ],
    theoryContent: `Perfiles de Stevenson en IC aguda

Frío y húmedo: bajo gasto + congestión → inotrópicos, soporte mecánico si refractario.
Caliente y húmedo hipertenso: vasodilatadores + diuréticos.
No diuréticos agresivos ni vasodilatadores como primera línea en perfil frío.`,
  },
  {
    id: "ucc-pro-14",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Cardiología / Arritmias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "pro", "cardiologia", "tca", "tv", "disociacion_av"],
    statement:
      "Hombre de 62 años con palpitaciones rápidas y sensación de desvanecimiento. Antecedentes: IAM anterior extenso hace 5 años, marcapasos por bradicardia sinusal, FEVI 30%. Signos vitales: PA 100/60 mmHg, FC 180 lpm. ECG: taquicardia regular de complejos anchos (QRS 160 ms), concordancia positiva V1–V6, muescas independientes a ~75 lpm con disociación aurículo-ventricular, eje extremo noroccidental (-120°). Al interpretar la morfología del trazado, ¿cuál es el diagnóstico definitivo y la terapéutica inicial más indicada estando temporalmente estable?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Taquicardia supraventricular con conducción aberrante; el tratamiento de elección es un bolo rápido de adenosina 6 mg IV.",
        distractorProfile: "adenosina_tca",
        incorrectFeedback:
          "Disociación AV, concordancia precordial e infarto previo descartan TSV; adenosina puede inducir FV.",
      },
      {
        id: "B",
        label: "B",
        text: "Taquicardia ventricular monomórfica sostenida; el tratamiento inicial de elección es infusión de amiodarona intravenosa o cardioversión eléctrica.",
      },
      {
        id: "C",
        label: "C",
        text: "Fibrilación ventricular en fase inicial; requiere desfibrilación eléctrica no sincronizada inmediata con 200 Joules.",
        distractorProfile: "fv_estable",
        incorrectFeedback:
          "FV es ritmo caótico sin pulso; este paciente tiene PA 100/60 y está consciente.",
      },
      {
        id: "D",
        label: "D",
        text: "Taquicardia mediada por marcapasos; requiere colocación de un imán sobre el generador para restaurar el modo asincrónico.",
        distractorProfile: "tmm_tca",
        incorrectFeedback:
          "TMM rara vez supera 140 lpm y muestra espigas de estimulación; no explica disociación AV.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "TCA regular en cardiopatía estructural = TV hasta demostrar lo contrario. Criterios Brugada: disociación AV, concordancia positiva, eje extremo. Tratamiento: amiodarona o cardioversión sincronizada (AHA/HRS).",
    keyPoints: [
      "TCA + cardiopatía = TV (>80%).",
      "Disociación AV confirma TV.",
      "Nunca adenosina en TCA con cardiopatía.",
    ],
    theoryContent: `Taquicardia de complejos anchos

Regla: asumir TV si FEVI baja o cardiopatía.
Disociación AV / captura / fusión = TV.
Estable: amiodarona o CVE sincronizada.
Inestable: CVE inmediata.`,
  },
  {
    id: "ucc-pro-15",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Cardiología / Pericardio",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "pro", "cardiologia", "taponamiento", "pericardiocentesis"],
    statement:
      "Mujer de 45 años con disnea rápidamente progresiva, debilidad y presíncope. Antecedentes: cáncer de mama con metástasis pulmonares. Signos vitales: PA 80/60 mmHg, FC 135 lpm, FR 30 rpm, SpO2 93%. Ingurgitación yugular severa sin colapso inspiratorio, ruidos velados, caída de PAS 25 mmHg en inspiración profunda (pulso paradójico). ECG: taquicardia sinusal, alternancia eléctrica, microvoltaje. POCUS: derrame pericárdico masivo, colapso VD en diástole, VCI plétora sin colapso respiratorio. Ante taponamiento cardíaco, ¿cuál debe ser la conducta INMEDIATA para evitar AESP?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar infusión de diuréticos de asa (furosemida) para resolver la congestión venosa sistémica y disminuir la ingurgitación yugular.",
        distractorProfile: "diureticos_taponamiento",
        incorrectFeedback:
          "Diuréticos reducen presión venosa y cierran cavidades derechas → paro cardíaco instantáneo.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar inotrópicos positivos (dobutamina) para aumentar la fuerza de contracción y superar la restricción pericárdica externa.",
        distractorProfile: "inotropicos_taponamiento",
        incorrectFeedback:
          "La falla es de llenado diastólico, no contractil; más taquicardia no ayuda.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar anticoagulación plena y considerar trombólisis sistémica dado el dímero D elevado y probabilidad de TEP neoplásico.",
        distractorProfile: "trombolisis_taponamiento",
        incorrectFeedback:
          "Trombolisis en derrame masivo puede causar hemopericardio exsanguinante.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar bolos de cristaloides para aumentar la precarga biventricular mientras se prepara pericardiocentesis evacuatoria de urgencia.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Taponamiento: puente con volumen IV para ↑ presión de llenado mientras pericardiocentesis (ESC). Diuréticos e inotrópicos contraindicados; no trombolizar.",
    keyPoints: [
      "Beck + alternancia eléctrica + pulso paradójico.",
      "Puente: volumen; definitivo: drenaje.",
      "Diuréticos = contraindicados.",
    ],
    theoryContent: `Taponamiento cardíaco

Fisiopatología: presión pericárdica > presión diastólica VD → colapso diastólico.
Puente: cristaloides si hipotensión.
Definitivo: pericardiocentesis urgente.
Nunca diuréticos.`,
  },
  {
    id: "ucc-pro-16",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Cardiología / Miocardiopatía hipertrófica",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "pro", "cardiologia", "mch", "sam", "obstruccion_dinamica"],
    statement:
      "Hombre de 22 años con dolor torácico y presíncope tras partido de fútbol. Hermano falleció súbitamente a los 19 años. Triaje: PA 115/70, FC 95. Soplo sistólico en borde esternal izquierdo que aumenta con Valsalva. Tras nitroglicerina sublingual (asumiendo SCA) presenta síncope: PA 60/40, FC 130. ECG: HVI masiva, ondas Q en daga lateral/inferior. Eco: septo 24 mm, movimiento anterior sistólico (SAM) de valva mitral. ¿Cuál es el mecanismo exacto por el cual la nitroglicerina causó el choque y cuál es la terapia de reversión ideal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "La nitroglicerina disminuyó la precarga (venodilatación), vaciando el VI y exacerbando la obstrucción dinámica del TSVI; revertir con volumen IV y fenilefrina (agonista alfa puro).",
      },
      {
        id: "B",
        label: "B",
        text: "La nitroglicerina causó vasodilatación coronaria robando flujo de la circulación subendocárdica hipertrófica; revertir con infusión de dobutamina.",
        distractorProfile: "dobutamina_mch",
        incorrectFeedback:
          "Dobutamina aumenta contractilidad y empeora SAM/obstrucción del TSVI.",
      },
      {
        id: "C",
        label: "C",
        text: "La nitroglicerina aumentó la resistencia vascular sistémica por reflejo simpático; revertir con esmolol.",
        distractorProfile: "reflejo_svr_mch",
        incorrectFeedback:
          "Nitroglicerina reduce precarga y poscarga, no aumenta RVS.",
      },
      {
        id: "D",
        label: "D",
        text: "La nitroglicerina precipitó insuficiencia aórtica masiva; revertir con balón de contrapulsación intraaórtico.",
        distractorProfile: "ia_mch",
        incorrectFeedback:
          "MCH obstructiva asocia IM por SAM, no insuficiencia aórtica aguda.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "MCH obstructiva: nitratos ↓ precarga → VI vacío → SAM y obstrucción TSVI letal. Reversión: volumen + fenilefrina (↑ poscarga). Contraindicados nitratos, diuréticos, inotrópicos (AHA/ACC MCH).",
    keyPoints: [
      "Soplo ↑ con Valsalva = MCH.",
      "Nitratos/diuréticos/inotrópicos prohibidos.",
      "Choque agudo: volumen + fenilefrina.",
    ],
    theoryContent: `MCH obstructiva — emergencia

Obstrucción dinámica TSVI depende de volumen y poscarga.
Venenos: nitratos, diuréticos, dobutamina.
Reversión choque: cristaloides + fenilefrina.
Crónico: betabloqueador o verapamil no DHP.`,
  },
  {
    id: "ucc-pro-17",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Cardiología / Aorta",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "pro", "cardiologia", "diseccion_aortica", "stanford_a"],
    statement:
      "Hombre de 60 años con dolor torácico lacerante 10/10 irradiado a región interescapular. HTA sin adherencia. Signos vitales: PA 220/120 mmHg brazo derecho, PA 140/80 mmHg brazo izquierdo; FC 115 lpm. Sin pulso radial izquierdo. Soplo diastólico aspirativo en foco aórtico. Dímero D 12,500 ng/mL, troponina normal. AngioTAC: falsa luz en aorta ascendente hasta cayado (disección Stanford tipo A). Requiere cirugía emergente; ¿cuál es el orden farmacológico cronológico imperativo en urgencias?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar perfusión de nitroprusiato de sodio de inmediato para reducir la presión sistólica agresivamente a <120 mmHg, seguido de morfina para el dolor.",
        distractorProfile: "nitroprusiato_sin_bb",
        incorrectFeedback:
          "Vasodilatador aislado aumenta dP/dt y taquicardia refleja → propagación del desgarro.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar trombolíticos intravenosos sistémicos dado que la disección tipo A es un equivalente isquémico torácico.",
        distractorProfile: "trombolisis_daa",
        incorrectFeedback:
          "Trombolisis en disección aórtica causa hemorragia mediastínica/pericárdica fatal.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusión de labetalol o esmolol para reducir primero la frecuencia cardíaca (<60 lpm) y la fuerza de contracción (dP/dt), y solo después agregar vasodilatadores si la PA sistólica persiste elevada.",
      },
      {
        id: "D",
        label: "D",
        text: "Omitir fármacos intravenosos y trasladar a quirófano directamente asumiendo la hipertensión como mecanismo compensatorio.",
        distractorProfile: "omitir_control_daa",
        incorrectFeedback:
          "La hipertensión propaga la disección; control anti-impulso es obligatorio prequirúrgico.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Disección tipo A: control anti-impulso — betabloqueador IV primero (FC <60, ↓ dP/dt), luego vasodilatador si PAS persiste >120 mmHg (ACC/AHA). Nunca nitroprusiato sin BB ni trombolisis.",
    keyPoints: [
      "Asimetría de pulsos + dolor desgarrador = sospechar DAA.",
      "BB antes que vasodilatador.",
      "Meta PAS <120 mmHg tras bloqueo beta.",
    ],
    theoryContent: `Disección aórtica tipo A — puente médico

dP/dt y PAM propagan el flap.
1. Esmolol/labetalol → FC ~60.
2. Si PAS alta: nitroprusiato/nicardipino (solo con BB).
Prohibido: trombolisis, nitroprusiato solo.`,
  },
  {
    id: "ucc-pro-18",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Cardiología / Bradiarritmias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "pro", "cardiologia", "bloqueo_av", "marcapasos", "iam_anterior"],
    statement:
      "Hombre de 72 años con síncope y dolor precordial 4 h. Signos vitales: PA 80/40 mmHg, FC 32 lpm, SpO2 93%. Ondas «a» en cañón en yugular, S1 de intensidad variable. Troponina I 8.5 ng/mL. ECG: supradesnivel ST 4 mm V1–V4 (IAMCEST anterior) y ondas P 90 lpm con QRS anchos 160 ms a 32 lpm sin relación P-QRS (bloqueo AV completo). Ante inestabilidad hemodinámica, ¿cuál es la terapia médica de soporte inicial más indicada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar bolos repetidos de atropina (1 mg IV) hasta 3 mg, dado que la bradicardia parasimpática es fácilmente reversible.",
        distractorProfile: "atropina_bav_infranodal",
        incorrectFeedback:
          "Atropina es ineficaz en bloqueo AV infranodal de QRS ancho por IAM anterior.",
      },
      {
        id: "B",
        label: "B",
        text: "Colocación inmediata de marcapasos transcutáneo de urgencia como puente al marcapasos transvenoso temporal, mientras es llevado a ICP primaria.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar perfusión continua de isoproterenol para estimular receptores beta-1 y aumentar cronotropismo.",
        distractorProfile: "isoproterenol_iam",
        incorrectFeedback:
          "Isoproterenol aumenta MVO2 y riesgo de arritmias en IAM activo.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar lidocaína en bolo para suprimir el foco ventricular aberrante que genera los latidos anchos de 32 lpm.",
        distractorProfile: "lidocaina_escape",
        incorrectFeedback:
          "Suprimir el ritmo de escape idioventricular provoca asístole.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "IAM anterior + BAV completo de QRS ancho (infranodal): marcapasos transcutáneo inmediato + ICP (ACLS). Atropina predeciblemente ineficaz; no suprimir escape con lidocaína.",
    keyPoints: [
      "IAM anterior + BAV III ancho = infranodal.",
      "Marcapasos transcutáneo sin demorar atropina.",
      "IAM inferior + BAV estrecho: atropina sí funciona.",
    ],
    theoryContent: `BAV completo en IAM

Anterior + QRS ancho: daño His-Purkinje → marcapasos urgente.
Inferior + QRS estrecho: vagal/nodal → atropina efectiva.
No suprimir escape ventricular con antiarrítmicos.`,
  },
  {
    id: "ucc-pro-19",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Cardiología / Insuficiencia cardíaca aguda",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "pro", "cardiologia", "scape", "edema_pulmonar", "vni"],
    statement:
      "Mujer de 68 años con disnea paroxística extrema de inicio fulminante hace 45 min. Antecedentes: estenosis arterial renal bilateral, IC con FEVI preservada. Signos vitales: PA 250/140 mmHg, FC 125 lpm, FR 42 rpm, SpO2 75%. Angustia vital, cianosis, esputo rosado, crépitos en marea montante, galope. BNP 1800 pg/mL. Rx: infiltrados algodonosos bilaterales (alas de mariposa). Diagnóstico: edema agudo de pulmón por emergencia hipertensiva (SCAPE). ¿Cuál es la terapia dual más efectiva en los primeros 5 minutos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar dosis supra-terapéuticas de furosemida intravenosa (>100 mg) para forzar diuresis y extraer líquido del pulmón.",
        distractorProfile: "furosemida_scape",
        incorrectFeedback:
          "Furosemida tarda 30–60 min; en SCAPE el problema es redistribución aguda, no hipervolemia global.",
      },
      {
        id: "B",
        label: "B",
        text: "Proceder a secuencia de intubación rápida con propofol y rocuronio de forma inmediata.",
        distractorProfile: "iot_primera_scape",
        incorrectFeedback:
          "VNI es primera línea; propofol puede colapsar PA en emergencia hipertensiva.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusión intravenosa de nitroglicerina a dosis altas combinada con ventilación mecánica no invasiva (BiPAP o CPAP).",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar morfina intravenosa en bolos repetidos para disminuir drive respiratorio y generar venodilatación.",
        distractorProfile: "morfina_scape",
        incorrectFeedback:
          "Morfina retrasa intubación pero aumenta mortalidad y depresión respiratoria en EAP agudo.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "SCAPE: vasoconstricción aguda desplaza volumen al pulmón; terapia dual nitroglicerina IV (↓ poscarga) + VNI/BiPAP (↓ precarga/poscarga, recluta alvéolos). Diuréticos y morfina no son primera línea (ESC).",
    keyPoints: [
      "SCAPE = redistribución, no sobrecarga global.",
      "Nitro IV alto flujo + BiPAP/CPAP.",
      "Furosemida puede esperar tras estabilizar.",
    ],
    theoryContent: `SCAPE — edema agudo hipertensivo

Mecanismo: ↑ poscarga y retorno venoso espláncnico → falla VI aguda.
Rescate: nitroglicerina IV + VNI.
No depender de diuréticos en los primeros minutos.`,
  },
  {
    id: "ucc-pro-20",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Cardiología / SCA",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "pro", "cardiologia", "iam_posterior", "stemi_oculto", "icp"],
    statement:
      "Hombre de 52 años con dolor torácico opresivo intermitente 3 h. Obesidad, tabaco, antecedente familiar IAM. Signos vitales: PA 135/85, FC 90, sin congestión. Troponina T inicial 12 ng/L (<14). ECG: ritmo sinusal sin elevación ST en derivaciones estándar; infradesnivel ST horizontal 2–3 mm en V1–V3 con ondas R altas prominentes (R>S) y ondas T positivas simétricas altas en precordiales derechas. Basado en el ECG y el escenario clínico, ¿cuál es el diagnóstico electrocardiográfico real y la conducta que determina el pronóstico vital?",
    options: [
      {
        id: "A",
        label: "A",
        text: "IAM sin elevación del ST (IAMSEST); manejo con doble antiagregación y heparina, estratificando angiografía en las próximas 24 horas.",
        distractorProfile: "nstemi_posterior",
        incorrectFeedback:
          "Retrasar cateterismo en infarto posterior transmural permite necrosis masiva y muerte.",
      },
      {
        id: "B",
        label: "B",
        text: "Isquemia subendocárdica del ventrículo derecho; observación porque la troponina basal es negativa.",
        distractorProfile: "troponina_negativa_alto_riesgo",
        incorrectFeedback:
          "R altas + T positivas en V1–V3 no son patrón de isquemia subendocárdica anterior típica.",
      },
      {
        id: "C",
        label: "C",
        text: "Infarto agudo de miocardio posterior (oclusión transmural activa); equivalente de IAMCEST que requiere activación inmediata de hemodinamia para ICP primaria emergente.",
      },
      {
        id: "D",
        label: "D",
        text: "Crecimiento ventricular derecho severo por TEP subyacente; requiere angioTAC urgentes.",
        distractorProfile: "tep_r_altas",
        incorrectFeedback:
          "Cor pulmonale da R altas pero con T negativas por strain y eje derecho, no patrón espejo posterior agudo.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Infarto posterior transmural: imagen en espejo en V1–V3 (infradesnivel ST, R prominente, T positivas altas). Equivalente STEMI/OMI → ICP <90 min; tomar V7–V9 (ST >0.5 mm). Troponina inicial puede ser normal.",
    keyPoints: [
      "V1–V3: infradesnivel + R alta + T positiva = posterior.",
      "STEMI oculto → hemodinamia inmediata.",
      "Confirmar con V7, V8, V9.",
    ],
    theoryContent: `IAM posterior — STEMI oculto

Espejo en precordiales derechas:
- Infradesnivel ST en V1–V3
- R prominente
- T positivas altas
Derivaciones posteriores V7–V9: buscar elevación ST.
Conducta: ICP primaria urgente aunque troponina inicial normal.`,
  },
];
