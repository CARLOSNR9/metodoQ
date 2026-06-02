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
];
