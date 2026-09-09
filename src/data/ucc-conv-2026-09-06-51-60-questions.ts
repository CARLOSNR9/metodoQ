import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #7 (6 sep 2026) · Preguntas #51–#60.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_06_51_60_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-06-51",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / URGENCIAS",
    topic: "Emergencias Cardiovasculares",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","emergencias-cardiovasculares","emergencias","cardiovasculares"],
    statement: "Un hombre de 50 años, con antecedente de insuficiencia renal en hemodiálisis, consulta por disnea progresiva y dolor torácico opresivo leve de 3 días de evolución. Al examen físico: PA 88/62 mmHg, con una caída de la presión sistólica de 18 mmHg durante la inspiración (pulso paradójico), venas yugulares marcadamente distendidas, y ruidos cardíacos velados/apagados a la auscultación. El paciente refiere haber faltado a su última sesión de diálisis. Un ecocardiograma confirma un derrame pericárdico circunferencial de gran volumen con **colapso diastólico del ventrículo derecho**. ¿Cuál es la conducta terapéutica DEFINITIVA e inmediata ante este cuadro de compromiso hemodinámico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Diuréticos intravenosos en altas dosis para reducir la precarga y aliviar la congestión venosa.",
        distractorProfile: "dangerous_reduction_of_compensatory_preload",
        incorrectFeedback: "En el taponamiento cardíaco, el paciente depende de una precarga elevada para mantener el gasto cardíaco a pesar de la compresión externa; reducir el volumen intravascular con diuréticos puede precipitar un colapso hemodinámico catastrófico en lugar de mejorar la condición.",
      },
      {
        id: "B",
        label: "B",
        text: "Pericardiocentesis urgente (guiada por ecografía) para drenaje del derrame pericárdico.",
      },
      {
        id: "C",
        label: "C",
        text: "Betabloqueadores intravenosos para controlar la frecuencia cardíaca y mejorar el llenado diastólico.",
        distractorProfile: "dangerous_blunting_of_compensatory_tachycardia",
        incorrectFeedback: "La taquicardia en el taponamiento cardíaco es un mecanismo compensatorio esencial para mantener el gasto cardíaco a pesar del volumen sistólico reducido por la compresión; bloquear esta respuesta compensatoria con betabloqueadores puede precipitar un colapso hemodinámico severo.",
      },
      {
        id: "D",
        label: "D",
        text: "Nitroglicerina intravenosa en infusión continua para reducir la poscarga y mejorar el gasto cardíaco.",
        distractorProfile: "dangerous_preload_reduction",
        incorrectFeedback: "La Nitroglicerina reduce la precarga venosa mediante venodilatación, lo cual es contraproducente y peligroso en el taponamiento cardíaco, donde el paciente necesita mantener una presión de llenado elevada para compensar la compresión externa del corazón.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un **Taponamiento Cardíaco**, una emergencia cardiovascular en la que la acumulación de líquido en el saco pericárdico (en este caso, probablemente por uremia no dializada, una causa clásica de pericarditis/derrame en pacientes renales) comprime las cavidades cardíacas, impidiendo el llenado diastólico normal y comprometiendo dramáticamente el gasto cardíaco. La **Tríada de Beck** (hipotensión, distensión venosa yugular, ruidos cardíacos apagados) junto con el **pulso paradójico** (caída exagerada de la presión sistólica durante la inspiración) y el hallazgo ecocardiográfico confirmatorio de colapso diastólico de las cavidades derechas, establecen el diagnóstico. Esta es una condición que amenaza la vida de forma inmediata, y el **único tratamiento verdaderamente efectivo** es mecánico: la **pericardiocentesis urgente** (idealmente guiada por ecografía para mayor seguridad) para drenar el líquido y aliviar la compresión cardíaca. Ningún tratamiento farmacológico (diuréticos, vasodilatadores, betabloqueadores) resuelve la compresión mecánica, y algunos pueden incluso empeorar peligrosamente la hemodinamia al reducir la precarga en un corazón que depende de una presión de llenado elevada para mantener el gasto cardíaco en este contexto.",
    keyPoints: [
    "Tríada de Beck (hipotensión + distensión yugular + ruidos cardíacos apagados) + Pulso paradójico + Derrame pericárdico con colapso diastólico en ecocardiograma.",
    "Taponamiento Cardíaco. Tratamiento DEFINITIVO: Pericardiocentesis urgente (mecánico, no farmacológico). Los diuréticos y vasodilatadores están CONTRAINDICADOS o son inefectivos, ya que el paciente depende de una precarga elevada para mantener el gasto cardíaco.",
    "Emergencias Cardiovasculares / Taponamiento Cardíaco."
],
  },
  {
    id: "ucc-conv-2026-09-06-52",
    university: "UCC",
    examArea: "PEDIATRÍA - CIRUGÍA / GASTROENTEROLOGÍA",
    topic: "Cirugía Pediátrica Neonatal",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","cirug-a-pedi-trica-neonatal","cirug","a","pedi","trica","neonatal"],
    statement: "Un recién nacido a término no ha eliminado meconio en las primeras 48 horas de vida (más allá del límite normal esperado de 24-48 horas). Al examen físico presenta distensión abdominal progresiva y rechazo del alimento, con vómito bilioso ocasional. Al tacto rectal, se produce una expulsión explosiva de gas y heces líquidas inmediatamente después del retiro del dedo del examinador (\"signo del disparo\" o \"squirt sign\"), con mejoría transitoria de la distensión. Una biopsia rectal por succión confirma la **ausencia de células ganglionares** en el plexo submucoso y mientérico del segmento afectado, con hipertrofia de fibras nerviosas colinérgicas. ¿Cuál es el diagnóstico, y cuál es el tratamiento DEFINITIVO de esta condición?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Íleo Meconial simple; manejo exclusivamente con enemas de contraste hiperosmolar, sin necesidad de cirugía en la mayoría de los casos.",
        distractorProfile: "wrong_diagnosis_confirmed_histology_ignored",
        incorrectFeedback: "La biopsia rectal ya confirmó la ausencia de células ganglionares, el hallazgo histopatológico definitorio de Hirschsprung, no de íleo meconial (que se caracteriza por meconio espeso obstructivo sin alteración de la inervación intestinal y generalmente asociado a fibrosis quística).",
      },
      {
        id: "B",
        label: "B",
        text: "Enfermedad de Hirschsprung; tratamiento definitivo quirúrgico mediante resección del segmento agangliónico con descenso del intestino sano (\"pull-through\").",
      },
      {
        id: "C",
        label: "C",
        text: "Malrotación intestinal con Vólvulo de intestino medio; tratamiento con Procedimiento de Ladd de urgencia inmediata sin biopsia previa.",
        distractorProfile: "wrong_diagnosis_different_presentation",
        incorrectFeedback: "El vólvulo por malrotación se presenta típicamente con vómito bilioso de inicio súbito y compromiso vascular agudo potencialmente catastrófico, no con el retraso progresivo en la eliminación de meconio y el hallazgo histológico específico de aganglionosis descritos en esta viñeta.",
      },
      {
        id: "D",
        label: "D",
        text: "Atresia Anal (Ano Imperforado); tratamiento con colostomía derivativa como único manejo necesario, sin corrección definitiva posterior.",
        distractorProfile: "wrong_diagnosis_incomplete_treatment",
        incorrectFeedback: "La Atresia Anal es una anomalía anatómica evidente al examen físico externo (ausencia de orificio anal visible), diagnóstico clínico inmediato al nacer, distinto de la aganglionosis funcional confirmada por biopsia en este paciente; además, incluso en atresia anal, la colostomía es solo un paso temporal, no el tratamiento definitivo único.",
      },
    ],
    correctOptionId: "B",
    explanation: "El recién nacido presenta una **Enfermedad de Hirschsprung (Megacolon Agangliónico Congénito)**, causada por la ausencia congénita de células ganglionares parasimpáticas en los plexos mientérico (Auerbach) y submucoso (Meissner) de un segmento distal del colon (más frecuentemente el rectosigmoides), resultando en la incapacidad de ese segmento para relajarse y permitir el paso normal de las heces, generando una obstrucción funcional. La clave diagnóstica clásica es el **retraso en la eliminación del meconio más allá de las primeras 48 horas de vida**, junto con el característico \"signo del disparo\" al tacto rectal (la descompresión súbita y explosiva de gas y heces retenidas tras la estimulación digital del segmento agangliónico contraído). El diagnóstico se confirma mediante **biopsia rectal por succión**, que demuestra la ausencia de células ganglionares. El tratamiento **definitivo es quirúrgico**: la resección del segmento intestinal agangliónico (que no tiene capacidad funcional normal) con el descenso (\"pull-through\") del intestino proximal sano hasta el ano, restaurando la continuidad y función intestinal normal.",
    keyPoints: [
    "RN sin eliminar meconio en las primeras 48 horas + distensión abdominal + \"signo del disparo\" al tacto rectal.; Biopsia rectal: AUSENCIA de células ganglionares.",
    "Enfermedad de Hirschsprung. Tratamiento DEFINITIVO: Cirugía (resección del segmento agangliónico + descenso del intestino sano/\"pull-through\"). No se resuelve con manejo médico o enemas exclusivamente.",
    "Cirugía Pediátrica Neonatal / Enfermedad de Hirschsprung."
],
  },
  {
    id: "ucc-conv-2026-09-06-53",
    university: "UCC",
    examArea: "MEDICINA INTERNA - REUMATOLOGÍA",
    topic: "Reumatología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","reumatolog-a","reumatolog","a"],
    statement: "Un hombre de 27 años consulta por dolor lumbar bajo crónico de 8 meses de evolución, de características inflamatorias: **empeora con el reposo y mejora con la actividad física**, con rigidez matutina prolongada (mayor a 1 hora), que lo despierta en la segunda mitad de la noche. Refiere además un episodio previo de dolor y enrojecimiento ocular unilateral diagnosticado como uveítis anterior. Al examen físico hay limitación marcada de la movilidad de la columna lumbar en todos los planos y disminución de la expansión torácica. Las radiografías de articulaciones sacroilíacas muestran esclerosis y pseudoensanchamiento del espacio articular bilateral. El HLA-B27 es positivo. ¿Cuál es el diagnóstico más probable, y cuál es la característica que DIFERENCIA el patrón de dolor de esta condición del dolor lumbar mecánico común?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hernia de disco lumbar; el dolor mecánico también empeora característicamente con el reposo y mejora con la actividad.",
        distractorProfile: "reversed_pain_pattern_description",
        incorrectFeedback: "Esta afirmación invierte incorrectamente el patrón: el dolor mecánico de una hernia discal típicamente EMPEORA con la actividad física y el esfuerzo (especialmente al sentarse, toser o hacer Valsalva) y MEJORA con el reposo, patrón opuesto al descrito en esta viñeta, que es claramente de tipo inflamatorio.",
      },
      {
        id: "B",
        label: "B",
        text: "Espondiloartritis Axial (Espondilitis Anquilosante); el dolor es de tipo INFLAMATORIO: mejora con el ejercicio y empeora con el reposo, a diferencia del dolor mecánico que empeora con la actividad y mejora con el reposo.",
      },
      {
        id: "C",
        label: "C",
        text: "Fibromialgia; el patrón de dolor es idéntico al descrito y no requiere estudios de imagen ni marcadores genéticos para su diagnóstico.",
        distractorProfile: "wrong_diagnosis_ignoring_objective_findings",
        incorrectFeedback: "La Fibromialgia se caracteriza por dolor musculoesquelético generalizado y puntos sensibles específicos, sin los hallazgos radiográficos objetivos de sacroileítis ni la asociación con uveítis y HLA-B27 presentes en esta viñeta, que son específicos de una espondiloartropatía verdadera.",
      },
      {
        id: "D",
        label: "D",
        text: "Osteoartrosis de columna lumbar; el dolor típicamente empeora progresivamente con la actividad física a lo largo del día.",
        distractorProfile: "wrong_diagnosis_mechanical_pattern_mismatch",
        incorrectFeedback: "La Osteoartrosis genera dolor de tipo mecánico que empeora con el uso y la actividad a lo largo del día, y mejora con el reposo, patrón opuesto al dolor inflamatorio nocturno con mejoría al ejercicio descrito en este paciente joven con hallazgos de sacroileítis.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Espondiloartritis Axial (Espondilitis Anquilosante)**, una enfermedad inflamatoria crónica que afecta predominantemente el esqueleto axial (columna vertebral y articulaciones sacroilíacas), fuertemente asociada al antígeno **HLA-B27**. La característica diagnóstica fundamental que distingue el dolor de esta condición del dolor lumbar mecánico común (por ejemplo, por hernia discal o sobreuso) es el **patrón de dolor inflamatorio**: empeora con el reposo prolongado (especialmente notorio como dolor que despierta al paciente en la segunda mitad de la noche) y **mejora característicamente con la actividad física y el ejercicio**, además de la rigidez matutina prolongada (típicamente mayor a 30-60 minutos). Esto contrasta directamente con el dolor **mecánico**, que típicamente **empeora con la actividad y el uso a lo largo del día, y mejora con el reposo**. La asociación con uveítis anterior recurrente es otra manifestación extraarticular clásica de las espondiloartropatías, y los hallazgos radiográficos de sacroileítis (esclerosis, pseudoensanchamiento, y en etapas avanzadas fusión completa de las articulaciones sacroilíacas) apoyan fuertemente el diagnóstico.",
    keyPoints: [
    "Adulto joven con dolor lumbar crónico que MEJORA con el ejercicio y EMPEORA con el reposo, rigidez matutina prolongada (>30-60 min), +/- uveítis anterior recurrente.",
    "Espondiloartritis Axial (Espondilitis Anquilosante). Patrón de dolor INFLAMATORIO (mejora con actividad) vs. dolor MECÁNICO (empeora con actividad, mejora con reposo). Fuertemente asociada a HLA-B27.",
    "Reumatología / Espondiloartritis Axial."
],
  },
  {
    id: "ucc-conv-2026-09-06-54",
    university: "UCC",
    examArea: "PEDIATRÍA - INFECTOLOGÍA / URGENCIAS",
    topic: "Infectología Pediátrica de Urgencias",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","infectolog-a-pedi-trica-de-urgencias","infectolog","a","pedi","trica","de","urgencias"],
    statement: "Un niño de 7 años es traído a urgencias por fiebre de inicio súbito (39.8°C), cefalea intensa, vómito, y aparición rápidamente progresiva (en menos de 2 horas) de lesiones cutáneas purpúricas de bordes irregulares en tronco y extremidades, algunas de las cuales no desaparecen a la vitropresión (no blanquean al presionar un vaso de vidrio contra ellas). El niño se ve progresivamente más letárgico, con extremidades frías y llenado capilar de 4 segundos, y PA 78/48 mmHg. Se sospecha una infección bacteriana fulminante con alto riesgo de colapso circulatorio y compromiso de las glándulas suprarrenales. ¿Cuál es el diagnóstico probable de este síndrome específico que combina la infección con hemorragia suprarrenal bilateral, y cuál es la conducta terapéutica INMEDIATA, sin retrasar el tratamiento por confirmación microbiológica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Púrpura de Henoch-Schönlein con compromiso renal; manejo con corticoides orales ambulatorios sin necesidad de hospitalización urgente.",
        distractorProfile: "severe_underdiagnosis_of_septic_emergency",
        incorrectFeedback: "La Púrpura de Henoch-Schönlein es una vasculitis de curso más indolente sin el choque séptico fulminante ni la progresión en horas descritos en esta viñeta; el manejo ambulatorio en un niño con hipotensión franca y letargia progresiva sería catastróficamente inadecuado.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Waterhouse-Friderichsen (Meningococcemia fulminante con hemorragia suprarrenal bilateral); antibioticoterapia empírica INMEDIATA + reanimación agresiva + Hidrocortisona a dosis de estrés.",
      },
      {
        id: "C",
        label: "C",
        text: "Púrpura Trombocitopénica Idiopática; manejo con Inmunoglobulina IV como tratamiento único, sin necesidad de antibióticos.",
        distractorProfile: "wrong_diagnosis_missing_septic_features",
        incorrectFeedback: "La PTI clásicamente no cursa con fiebre alta, choque séptico ni deterioro hemodinámico rápidamente progresivo; el cuadro tóxico-séptico descrito, con hipotensión y mala perfusión, es incompatible con este diagnóstico y exige cobertura antibiótica empírica inmediata.",
      },
      {
        id: "D",
        label: "D",
        text: "Vasculitis por hipersensibilidad a fármacos; suspender cualquier medicamento reciente y observar sin tratamiento antimicrobiano.",
        distractorProfile: "dangerous_delay_in_life_threatening_infection",
        incorrectFeedback: "No hay antecedente de exposición farmacológica reciente descrito, y la combinación de fiebre alta, púrpura de rápida progresión y choque séptico es una emergencia infecciosa que no debe manejarse con observación pasiva, dado el riesgo de muerte en pocas horas sin tratamiento antibiótico inmediato.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Meningococcemia Fulminante** complicada con **Síndrome de Waterhouse-Friderichsen**, una de las presentaciones más devastadoras y rápidamente mortales en pediatría, causada por *Neisseria meningitidis*. La bacteriemia masiva genera una respuesta inflamatoria sistémica catastrófica con Coagulación Intravascular Diseminada, causando el **púrpura fulminante** característico (lesiones purpúricas de rápida progresión que no blanquean a la vitropresión, reflejando hemorragia dérmica verdadera por trombosis de la microvasculatura cutánea) y, crucialmente, **hemorragia bilateral de las glándulas suprarrenales**, precipitando una insuficiencia suprarrenal aguda que agrava dramáticamente el choque séptico ya establecido. Dado el curso fulminante de esta condición (puede progresar de fiebre a la muerte en pocas horas), la conducta es absolutamente inmediata: **antibioticoterapia empírica de amplio espectro sin retraso alguno** (idealmente tras hemocultivos, pero sin esperarlos si esto implica demora), **reanimación hemodinámica agresiva**, y **Hidrocortisona a dosis de estrés** para tratar la insuficiencia suprarrenal aguda concomitante, que de no corregirse perpetúa el choque refractario a líquidos y vasopresores.",
    keyPoints: [
    "Niño con fiebre súbita + púrpura de rápida progresión que NO blanquea a la vitropresión + choque séptico rápidamente progresivo.",
    "Meningococcemia Fulminante / Síndrome de Waterhouse-Friderichsen (hemorragia suprarrenal bilateral). Manejo INMEDIATO: Antibiótico empírico sin retraso + Reanimación agresiva + Hidrocortisona a dosis de estrés (por la insuficiencia suprarrenal asociada).",
    "Infectología Pediátrica de Urgencias / Meningococcemia Fulminante."
],
  },
  {
    id: "ucc-conv-2026-09-06-55",
    university: "UCC",
    examArea: "MEDICINA INTERNA - TOXICOLOGÍA",
    topic: "Toxicología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","toxicolog-a","toxicolog","a"],
    statement: "Un adolescente de 16 años es traído a urgencias por su madre, quien encontró un frasco vacío de Aspirina (Ácido Acetilsalicílico) en su habitación, con sospecha de ingesta intencional hace 4 horas. Al ingreso, el paciente está taquipneico (FR 32 rpm, respiraciones profundas), con tinnitus, náuseas, vómito, y diaforesis. Los gases arteriales muestran: pH 7.42 (prácticamente normal), PaCO2 22 mmHg (bajo), Bicarbonato 14 mEq/L (bajo). El salicilato sérico es de 65 mg/dL (nivel tóxico). ¿Cómo se interpreta este patrón de gases arteriales característico de la intoxicación salicílica, y cuál es la medida terapéutica INICIAL más importante para aumentar la eliminación del salicilato?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Acidosis respiratoria pura; manejo con intubación y ventilación mecánica controlada de inmediato.",
        distractorProfile: "misread_gas_pattern_wrong_intervention",
        incorrectFeedback: "El PaCO2 está BAJO (22 mmHg), no elevado, lo que descarta una acidosis respiratoria; de hecho, es fundamental EVITAR la intubación de rutina en estos pacientes salvo indicación clara, ya que la hiperventilación compensatoria espontánea es protectora, y una ventilación mecánica mal ajustada puede empeorar peligrosamente la acidemia.",
      },
      {
        id: "B",
        label: "B",
        text: "Trastorno ácido-base MIXTO: Alcalosis respiratoria primaria (por estimulación directa del centro respiratorio) + Acidosis metabólica primaria concomitante; tratamiento con Bicarbonato de sodio IV para alcalinizar la orina y \"atrapar\" el salicilato ionizado, aumentando su excreción renal.",
      },
      {
        id: "C",
        label: "C",
        text: "Alcalosis metabólica pura compensada; manejo exclusivamente con hidratación oral y observación domiciliaria.",
        distractorProfile: "misinterpretation_and_dangerous_undertreatment",
        incorrectFeedback: "El bicarbonato está BAJO (14 mEq/L), no elevado, lo que es incompatible con una alcalosis metabólica; el patrón real es mixto (alcalosis respiratoria + acidosis metabólica), y el manejo domiciliario es peligrosamente inadecuado para una intoxicación salicílica con nivel tóxico confirmado.",
      },
      {
        id: "D",
        label: "D",
        text: "Patrón de gases normal sin trastorno ácido-base significativo; no se requiere ninguna intervención específica más allá de la observación.",
        distractorProfile: "false_reassurance_from_near_normal_ph",
        incorrectFeedback: "Aunque el pH parece casi normal, esto es engañoso porque enmascara dos trastornos primarios opuestos y significativos (alcalosis respiratoria y acidosis metabólica) ocurriendo simultáneamente; el nivel de salicilato claramente tóxico exige tratamiento activo con alcalinización urinaria, no solo observación.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una **Intoxicación por Salicilatos (Aspirina)**, que produce un patrón ácido-base **mixto y característico**: el salicilato estimula directamente el centro respiratorio bulbar, generando hiperventilación y una **alcalosis respiratoria primaria** (explicando la PaCO2 baja); simultáneamente, el salicilato interfiere con el metabolismo celular (desacopla la fosforilación oxidativa) generando acumulación de ácido láctico y otros ácidos orgánicos, causando una **acidosis metabólica primaria con anion gap elevado** (explicando el bicarbonato bajo). El pH final puede aparecer engañosamente \"casi normal\" (como en este caso, 7.42) porque ambos trastornos, al ser de dirección opuesta, se contrarrestan parcialmente, pero esto NO significa que el paciente esté bien; es fundamental reconocer el patrón mixto subyacente. El tratamiento clave para aumentar la eliminación renal del salicilato es la **alcalinización urinaria con Bicarbonato de sodio intravenoso**: al elevar el pH urinario, el salicilato (un ácido débil) se mantiene en su forma ionizada dentro del túbulo renal, quedando \"atrapado\" (no puede reabsorberse de vuelta a la circulación) y siendo excretado eficazmente por la orina.",
    keyPoints: [
    "Intoxicación por Salicilatos: Taquipnea + Tinnitus + Gases arteriales con Alcalosis Respiratoria Y Acidosis Metabólica simultáneas (trastorno MIXTO).",
    "Intoxicación Salicílica. Tratamiento clave: Alcalinización urinaria con Bicarbonato de Sodio IV (atrapamiento iónico, aumenta la excreción renal del salicilato). Vigilar estrechamente el pH sérico; la acidemia empeora la toxicidad al facilitar el paso del salicilato al SNC.",
    "Toxicología / Intoxicación por Salicilatos."
],
  },
  {
    id: "ucc-conv-2026-09-06-56",
    university: "UCC",
    examArea: "GINECOLOGÍA - MEDICINA REPRODUCTIVA",
    topic: "Medicina Reproductiva",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","medicina-reproductiva","medicina","reproductiva"],
    statement: "Una mujer de 29 años, en tratamiento de fertilidad con estimulación ovárica controlada para fecundación in vitro, consulta 5 días después de la administración de la inyección desencadenante (hCG) por distensión abdominal progresiva, náuseas, vómito, y disnea leve. Al examen físico: abdomen distendido con ascitis clínicamente evidente, y una ecografía confirma ovarios masivamente aumentados de tamaño (ambos mayores de 10 cm) con múltiples quistes, además de ascitis moderada y un derrame pleural derecho leve. Los laboratorios muestran hemoconcentración (Hematocrito 48%, elevado respecto a su basal) y Albúmina sérica baja. ¿Cuál es el diagnóstico, y cuál es el mecanismo fisiopatológico central que explica la hemoconcentración y el riesgo asociado de eventos tromboembólicos en esta condición?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Torsión ovárica bilateral; el mecanismo central es la obstrucción venosa mecánica directa por la torsión del pedículo.",
        distractorProfile: "wrong_diagnosis_wrong_mechanism",
        incorrectFeedback: "Aunque los ovarios hiperestimulados tienen mayor riesgo de torsión por su tamaño aumentado, el cuadro descrito (con ascitis bilateral extensa, derrame pleural y hemoconcentración generalizada) es característico del síndrome sistémico de hiperestimulación, no de una torsión mecánica localizada, que causaría dolor unilateral agudo más que un cuadro sistémico difuso.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Hiperestimulación Ovárica; el mecanismo central es el aumento masivo de la permeabilidad capilar (mediado por VEGF) que causa fuga de líquido intravascular hacia el tercer espacio (ascitis, derrame pleural), generando hemoconcentración e hipercoagulabilidad relativa.",
      },
      {
        id: "C",
        label: "C",
        text: "Enfermedad Trofoblástica Gestacional; el mecanismo central es la invasión trofoblástica directa de los vasos ováricos.",
        distractorProfile: "wrong_diagnosis_unrelated_context",
        incorrectFeedback: "No hay evidencia de embarazo molar ni de invasión trofoblástica en esta viñeta; el contexto claro de estimulación ovárica reciente con hCG exógena y el patrón clínico descrito son característicos y específicos del Síndrome de Hiperestimulación Ovárica.",
      },
      {
        id: "D",
        label: "D",
        text: "Peritonitis bacteriana secundaria a la punción folicular; el mecanismo central es la respuesta inflamatoria sistémica a la infección intraabdominal.",
        distractorProfile: "wrong_diagnosis_missing_infectious_signs",
        incorrectFeedback: "No hay fiebre, leucocitosis marcada ni signos de irritación peritoneal descritos en esta viñeta; el cuadro de ascitis con ovarios masivamente aumentados tras estimulación con hCG es característico del Síndrome de Hiperestimulación Ovárica, un proceso no infeccioso mediado por permeabilidad capilar aumentada.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con un **Síndrome de Hiperestimulación Ovárica (SHO)**, una complicación yatrogénica de los protocolos de estimulación ovárica controlada utilizados en reproducción asistida, típicamente desencadenada o exacerbada por la administración de **hCG** (usada para inducir la maduración ovocitaria final), que ocurre en el contexto de una respuesta ovárica excesiva con múltiples folículos. El mecanismo fisiopatológico central es la liberación masiva de **Factor de Crecimiento Endotelial Vascular (VEGF)** y otros mediadores vasoactivos por los ovarios hiperestimulados, que provocan un **aumento generalizado y marcado de la permeabilidad capilar**. Esto causa una fuga masiva de líquido rico en proteínas desde el espacio intravascular hacia cavidades corporales (ascitis, derrame pleural/pericárdico) y el espacio extravascular, generando paradójicamente **hemoconcentración** (a pesar de la sobrecarga de volumen corporal total) y un estado de **hipercoagulabilidad relativa** que incrementa significativamente el riesgo de eventos **tromboembólicos** (venosos y arteriales), una de las complicaciones más temidas y potencialmente mortales de este síndrome.",
    keyPoints: [
    "Mujer en tratamiento de fertilidad, tras administración de hCG, con distensión abdominal + ascitis + ovarios masivamente aumentados + hemoconcentración.",
    "Síndrome de Hiperestimulación Ovárica. Mecanismo: Aumento de permeabilidad capilar mediado por VEGF → fuga de líquido al tercer espacio → Hemoconcentración + riesgo de Tromboembolismo (a pesar de la sobrecarga de volumen corporal total, el volumen INTRAVASCULAR está reducido).",
    "Medicina Reproductiva / Síndrome de Hiperestimulación Ovárica."
],
  },
  {
    id: "ucc-conv-2026-09-06-57",
    university: "UCC",
    examArea: "PEDIATRÍA - NEUROLOGÍA / GENÉTICA",
    topic: "Enfermedades Neuromusculares Pediátricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","enfermedades-neuromusculares-pedi-tricas","enfermedades","neuromusculares","pedi","tricas"],
    statement: "Un niño varón de 4 años es traído a consulta por sus padres, quienes notaron que tiene dificultad progresiva para correr, saltar y subir escaleras en comparación con sus compañeros de la misma edad, y que frecuentemente \"se trepa sobre sí mismo\" usando las manos para levantarse del suelo desde una posición sentada (apoyándose progresivamente en sus muslos para incorporarse). Al examen físico se observa hipertrofia notable de las pantorrillas (que se sienten firmes, no musculosas verdaderamente), con debilidad muscular proximal simétrica de predominio en cinturas pélvica y escapular, y marcha con aumento de la lordosis lumbar (\"marcha de pato\"). Los laboratorios muestran Creatín Fosfoquinasa (CPK) marcadamente elevada (15.000 U/L). ¿Cuál es el diagnóstico más probable, y cómo se denomina la maniobra clínica descrita para incorporarse desde el suelo, característica de esta condición?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Parálisis Cerebral Espástica; la maniobra descrita se denomina \"Signo de Babinski\" y confirma compromiso de primera motoneurona.",
        distractorProfile: "wrong_diagnosis_wrong_sign_name",
        incorrectFeedback: "La Parálisis Cerebral es un trastorno del neurodesarrollo no progresivo con espasticidad de primera motoneurona, no debilidad progresiva con CPK elevada; el Signo de Babinski es un reflejo plantar patológico, completamente distinto a la maniobra de incorporación descrita en esta viñeta (Signo de Gowers).",
      },
      {
        id: "B",
        label: "B",
        text: "Distrofia Muscular de Duchenne; la maniobra descrita se denomina \"Signo de Gowers\", y refleja debilidad severa de la musculatura proximal de cinturas.",
      },
      {
        id: "C",
        label: "C",
        text: "Miastenia Gravis Juvenil; la maniobra descrita se denomina \"Fatiga miasténica\" y mejora significativamente con el reposo.",
        distractorProfile: "wrong_diagnosis_wrong_mechanism",
        incorrectFeedback: "La Miastenia Gravis se caracteriza por debilidad fluctuante que empeora con el uso repetido y mejora con el reposo (fatigabilidad), sin la CPK marcadamente elevada ni la pseudohipertrofia de pantorrillas características de las distrofias musculares como la de Duchenne.",
      },
      {
        id: "D",
        label: "D",
        text: "Ataxia de Friedreich; la maniobra descrita se denomina \"Signo de Romberg\" y refleja compromiso propioceptivo primario.",
        distractorProfile: "wrong_diagnosis_wrong_clinical_sign",
        incorrectFeedback: "La Ataxia de Friedreich se presenta con ataxia de la marcha y compromiso propioceptivo/cerebeloso, no con el patrón de debilidad muscular proximal progresiva con pseudohipertrofia de pantorrillas y CPK marcadamente elevada; el Signo de Romberg evalúa el equilibrio con ojos cerrados, un hallazgo distinto al descrito.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta **Distrofia Muscular de Duchenne**, una enfermedad genética ligada al cromosoma X (por lo que afecta predominantemente a varones), causada por mutaciones en el gen de la **distrofina**, una proteína estructural esencial para la integridad de la membrana de la fibra muscular. Sin distrofina funcional, las fibras musculares se degeneran progresivamente y son reemplazadas por tejido fibroadiposo, generando la característica **pseudohipertrofia de pantorrillas** (que se sienten firmes al tacto, pero corresponden a tejido graso/fibroso infiltrando el músculo dañado, no a músculo funcional verdadero) y debilidad muscular **proximal simétrica progresiva**, típicamente evidente entre los 2 y 5 años de edad. La maniobra clínica clásica y patognomónica es el **Signo de Gowers**: al intentar levantarse del suelo, el niño, incapaz de usar directamente la musculatura débil de sus muslos y caderas, utiliza sus manos para \"trepar\" progresivamente por sus propias piernas (apoyándose primero en las rodillas, luego en los muslos) hasta lograr la posición erguida, compensando la debilidad de la musculatura de cinturas pélvica y del tronco.",
    keyPoints: [
    "Niño varón de 2-5 años con debilidad muscular proximal progresiva + pseudohipertrofia de pantorrillas + CPK marcadamente elevada.; Necesidad de \"treparse sobre sí mismo\" para levantarse del suelo.",
    "Distrofia Muscular de Duchenne. Maniobra característica: Signo de Gowers. Herencia recesiva ligada al X (déficit de distrofina). CPK marcadamente elevada es un hallazgo clave de apoyo diagnóstico.",
    "Enfermedades Neuromusculares Pediátricas / Distrofia Muscular de Duchenne."
],
  },
  {
    id: "ucc-conv-2026-09-06-58",
    university: "UCC",
    examArea: "MEDICINA INTERNA - HEMATOLOGÍA",
    topic: "Hematología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","hematolog-a","hematolog","a"],
    statement: "Una mujer de 34 años consulta por astenia progresiva e ictericia leve de 3 semanas de evolución. Refiere antecedente de Lupus Eritematoso Sistémico diagnosticado hace 2 años. Al examen físico hay palidez cutáneo-mucosa e ictericia escleral leve, con esplenomegalia leve palpable. Los laboratorios muestran: Hemoglobina 7.8 g/dL, Reticulocitos elevados (8%, respuesta medular apropiada), LDH elevada, Haptoglobina indetectable, Bilirrubina indirecta elevada, y un frotis de sangre periférica que muestra **esferocitos** (sin evidencia de esquistocitos). La Prueba de Coombs Directa (Antiglobulina Directa) es **positiva** para IgG y complemento C3. ¿Cuál es el diagnóstico más probable, y cuál es el tratamiento de PRIMERA LÍNEA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Púrpura Trombocitopénica Trombótica; tratamiento de primera línea con Plasmaféresis urgente.",
        distractorProfile: "wrong_diagnosis_missing_coombs_and_platelet_data",
        incorrectFeedback: "La PTT se caracteriza por esquistocitos (no esferocitos) en el frotis, Coombs Directa NEGATIVA (el mecanismo no es mediado por anticuerpos contra los glóbulos rojos), y típicamente trombocitopenia severa asociada, hallazgos ausentes o diferentes en esta viñeta, que presenta un Coombs positivo clásico de anemia hemolítica autoinmune.",
      },
      {
        id: "B",
        label: "B",
        text: "Anemia Hemolítica Autoinmune \"caliente\" (por autoanticuerpos IgG); tratamiento de primera línea con Corticoides sistémicos (Prednisona).",
      },
      {
        id: "C",
        label: "C",
        text: "Esferocitosis Hereditaria descompensada; tratamiento de primera línea con Esplenectomía inmediata de urgencia.",
        distractorProfile: "wrong_diagnosis_missing_immune_marker",
        incorrectFeedback: "Aunque la Esferocitosis Hereditaria también presenta esferocitos, es una condición congénita presente desde la infancia con Coombs Directa típicamente NEGATIVA (el defecto es estructural de la membrana, no inmunomediado); el Coombs positivo en esta paciente adulta con Lupus confirma un mecanismo autoinmune adquirido, no hereditario.",
      },
      {
        id: "D",
        label: "D",
        text: "Déficit de Glucosa-6-Fosfato Deshidrogenasa (G6PD) con crisis hemolítica; tratamiento con evitar estrictamente agentes oxidantes, sin necesidad de inmunosupresión.",
        distractorProfile: "wrong_diagnosis_missing_trigger_and_coombs",
        incorrectFeedback: "El déficit de G6PD típicamente se desencadena por exposición a agentes oxidantes específicos (ciertos fármacos, habas, infecciones) y muestra Cuerpos de Heinz con Coombs Directa NEGATIVA en el frotis, un perfil distinto al Coombs positivo con esferocitos característico de la anemia hemolítica autoinmune de esta paciente.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una **Anemia Hemolítica Autoinmune (AHAI) \"caliente\"** (mediada por anticuerpos IgG que reaccionan óptimamente a temperatura corporal, de ahí el nombre), en el contexto de su enfermedad autoinmune de base (Lupus Eritematoso Sistémico), una asociación clásica y frecuente. Los hallazgos de hemólisis (anemia, reticulocitosis apropiada como respuesta medular compensatoria, LDH elevada, haptoglobina indetectable, bilirrubina indirecta elevada) junto con **esferocitos** en el frotis (formados cuando el sistema reticuloendotelial esplénico \"muerde\" fragmentos de membrana de los eritrocitos recubiertos de anticuerpos, dándoles una forma esférica) y una **Prueba de Coombs Directa positiva** (que detecta anticuerpos y/o complemento adheridos directamente a la superficie de los eritrocitos del paciente) confirman el mecanismo autoinmune. El tratamiento de primera línea es la **inmunosupresión con Corticoides sistémicos (Prednisona)**, que reducen la producción de autoanticuerpos y disminuyen la destrucción eritrocitaria mediada por el sistema reticuloendotelial, logrando remisión en la mayoría de los pacientes.",
    keyPoints: [
    "Hemólisis (anemia + reticulocitosis + LDH alta + haptoglobina baja + bilirrubina indirecta alta) + Esferocitos en frotis + Coombs Directa POSITIVA, en paciente con enfermedad autoinmune de base.",
    "Anemia Hemolítica Autoinmune \"caliente\" (IgG). Tratamiento de primera línea: Corticoides sistémicos. Diferencia clave con la PTT: Coombs POSITIVA (AHAI) vs. Coombs NEGATIVA con esquistocitos (PTT, mecanismo mecánico no inmune).",
    "Hematología / Anemia Hemolítica Autoinmune."
],
  },
  {
    id: "ucc-conv-2026-09-06-59",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA",
    topic: "Complicaciones de Enfermedad Inflamatoria Intestinal",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","complicaciones-de-enfermedad-inflamatoria-intestinal","complicaciones","de","enfermedad","inflamatoria","intestinal"],
    statement: "Un hombre de 70 años, con antecedente de Colitis Ulcerativa de larga data en tratamiento irregular, es hospitalizado por un brote agudo severo de su enfermedad, con más de 10 deposiciones sanguinolentas al día. Al tercer día de hospitalización, a pesar del tratamiento con corticoides intravenosos, presenta fiebre de 39°C, taquicardia marcada (FC 128 lpm), distensión abdominal progresiva con dolor difuso, y disminución llamativa de la frecuencia de las deposiciones (que antes eran muy frecuentes) a pesar de que clínicamente el paciente luce más enfermo, no mejor. Al examen físico hay dolor abdominal difuso con signos de irritación peritoneal leve y ausencia de ruidos intestinales. Una radiografía de abdomen simple muestra el colon transverso dilatado a 7 cm de diámetro, con pérdida de las haustras normales. ¿Cuál es esta complicación potencialmente mortal, y por qué la DISMINUCIÓN de las deposiciones en este contexto es una señal de ALARMA y no de mejoría?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Estenosis colónica benigna; la disminución de deposiciones refleja resolución natural de la inflamación aguda, sin necesidad de intervención urgente.",
        distractorProfile: "dangerous_misinterpretation_of_warning_sign",
        incorrectFeedback: "Interpretar la disminución de deposiciones como mejoría en un paciente que clínicamente empeora (fiebre, taquicardia, distensión) es el error conceptual central que esta pregunta busca evitar; el hallazgo radiográfico de dilatación colónica confirma que se trata de atonía/parálisis, no de resolución de la enfermedad.",
      },
      {
        id: "B",
        label: "B",
        text: "Megacolon Tóxico; la disminución de las deposiciones refleja parálisis del colon (íleo/atonía), NO mejoría de la inflamación, y es un signo de alarma de perforación inminente.",
      },
      {
        id: "C",
        label: "C",
        text: "Obstrucción mecánica por fecaloma; manejo con enemas evacuantes de forma ambulatoria sin necesidad de hospitalización adicional.",
        distractorProfile: "dangerous_intervention_risking_perforation",
        incorrectFeedback: "Administrar enemas o cualquier maniobra que aumente la presión intraluminal en un colon ya dilatado, atónico y con pared adelgazada por megacolon tóxico puede precipitar directamente una perforación; además, el manejo ambulatorio es completamente inadecuado para un paciente con toxicidad sistémica activa.",
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome de Intestino Irritable postinfeccioso; manejo exclusivamente con antiespasmódicos y dieta baja en residuos.",
        distractorProfile: "trivializing_life_threatening_complication",
        incorrectFeedback: "La fiebre, taquicardia, distensión abdominal con signos de irritación peritoneal y la dilatación colónica objetiva en la radiografía son incompatibles con un trastorno funcional benigno como el Intestino Irritable; este cuadro representa una complicación grave y potencialmente mortal que requiere manejo hospitalario intensivo.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Megacolon Tóxico**, una complicación grave y potencialmente mortal de la Colitis Ulcerativa (y otras colitis severas, incluyendo la infecciosa por *Clostridioides difficile*), definida por la combinación de **dilatación colónica** (típicamente >6 cm en el colon transverso) con **toxicidad sistémica** (fiebre, taquicardia, leucocitosis, alteración del estado general). La clave conceptual crucial de esta pregunta, frecuentemente malinterpretada incluso por médicos con menor experiencia, es que la **disminución en la frecuencia de las deposiciones NO representa mejoría clínica** en este contexto: refleja que la pared del colon, severamente inflamada y dañada, ha perdido su capacidad de contraerse (atonía/parálisis), dilatándose progresivamente en lugar de expulsar su contenido. Esta dilatación progresiva adelgaza la pared colónica, aumentando dramáticamente el riesgo de **perforación libre**, una complicación con altísima mortalidad. El manejo requiere hospitalización en UCI, manejo médico intensivo, y evaluación quirúrgica temprana (colectomía) si no hay mejoría rápida o si aparecen signos de perforación o deterioro.",
    keyPoints: [
    "Paciente con Colitis Ulcerativa (o C. difficile severo) que empeora clínicamente PERO tiene MENOS deposiciones + Distensión abdominal + Colon dilatado (>6 cm) en radiografía.",
    "Megacolon Tóxico. Regla de oro: la disminución de las deposiciones en este contexto es un signo de ALARMA (atonía/parálisis colónica), NO de mejoría. Riesgo inminente: Perforación colónica. Requiere manejo intensivo y evaluación quirúrgica urgente.",
    "Complicaciones de Enfermedad Inflamatoria Intestinal / Megacolon Tóxico."
],
  },
  {
    id: "ucc-conv-2026-09-06-60",
    university: "UCC",
    examArea: "PEDIATRÍA - CIRUGÍA NEONATAL",
    topic: "Cirugía Neonatal",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","cirug-a-neonatal","cirug","a","neonatal"],
    statement: "Un recién nacido a término, diagnosticado prenatalmente por ecografía con una masa quística en el tórax izquierdo, nace con dificultad respiratoria severa inmediata, requiriendo intubación en sala de partos. Al examen físico: **abdomen excavado/escafoide** (con apariencia de estar \"vacío\"), tórax asimétrico con abombamiento izquierdo, ruidos cardíacos desplazados hacia la derecha, y ausencia de ruidos respiratorios en el hemitórax izquierdo, con auscultación de ruidos intestinales audibles dentro del tórax. Una radiografía de tórax confirma asas intestinales dentro de la cavidad torácica izquierda, con desplazamiento mediastínico hacia la derecha. ¿Cuál es el diagnóstico, y cuál es la complicación pulmonar del desarrollo fetal que determina PRINCIPALMENTE el pronóstico de este paciente, más allá de la corrección quirúrgica del defecto en sí?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Malformación Adenomatoidea Quística Pulmonar; el pronóstico depende exclusivamente del tamaño de la lesión quística misma.",
        distractorProfile: "wrong_diagnosis_missing_abdominal_finding",
        incorrectFeedback: "La Malformación Adenomatoidea Quística no explica el abdomen escafoide ni la presencia de ruidos intestinales dentro del tórax, hallazgos específicos de contenido abdominal herniado hacia la cavidad torácica, característicos de la Hernia Diafragmática Congénita.",
      },
      {
        id: "B",
        label: "B",
        text: "Hernia Diafragmática Congénita; el pronóstico depende principalmente del grado de Hipoplasia Pulmonar bilateral (más severa en el lado afectado) causada por la compresión intratorácica crónica in útero.",
      },
      {
        id: "C",
        label: "C",
        text: "Secuestro Pulmonar Extralobar; el pronóstico es excelente en todos los casos, con resección quirúrgica electiva sin urgencia.",
        distractorProfile: "wrong_diagnosis_underestimating_severity",
        incorrectFeedback: "El secuestro pulmonar no suele causar dificultad respiratoria severa inmediata al nacer ni el desplazamiento visceral hacia el tórax con abdomen escafoide descrito; este cuadro clínico es específico y de mayor gravedad, correspondiente a una Hernia Diafragmática Congénita.",
      },
      {
        id: "D",
        label: "D",
        text: "Quiste Broncogénico simple; el manejo es expectante en la mayoría de los casos, sin necesidad de intervención neonatal inmediata.",
        distractorProfile: "wrong_diagnosis_and_dangerously_passive_approach",
        incorrectFeedback: "El quiste broncogénico simple raramente causa compromiso respiratorio tan severo e inmediato al nacer, y no explica los hallazgos de contenido intestinal en el tórax; el manejo expectante sería peligrosamente inadecuado para un recién nacido con la insuficiencia respiratoria crítica descrita en esta viñeta.",
      },
    ],
    correctOptionId: "B",
    explanation: "El recién nacido presenta una **Hernia Diafragmática Congénita**, un defecto del desarrollo del diafragma (más frecuentemente izquierdo, a través del foramen posterolateral de Bochdalek) que permite el paso de vísceras abdominales hacia la cavidad torácica durante la vida fetal. Los hallazgos clásicos al nacer son dificultad respiratoria severa inmediata, **abdomen escafoide** (porque las vísceras abdominales que normalmente ocuparían ese espacio están desplazadas hacia el tórax), desplazamiento del mediastino, y auscultación de ruidos intestinales dentro del tórax. El factor pronóstico **más determinante**, más allá de la reparación quirúrgica del defecto diafragmático en sí (que se realiza de forma diferida tras estabilización, no como una emergencia inmediata), es el grado de **Hipoplasia Pulmonar**, que afecta a ambos pulmones (aunque más severamente el ipsilateral a la hernia) debido a la compresión mecánica crónica que las vísceras herniadas ejercen sobre el desarrollo del árbol bronquial y la vasculatura pulmonar durante la gestación. Esta hipoplasia, junto con la Hipertensión Pulmonar Persistente asociada, determina fundamentalmente la supervivencia del neonato, independientemente de cuán exitosa sea técnicamente la cirugía reparadora.",
    keyPoints: [
    "RN con dificultad respiratoria severa al nacer + Abdomen escafoide + Ruidos intestinales auscultables en el tórax + Desplazamiento mediastínico.",
    "Hernia Diafragmática Congénita (más frecuente izquierda, Bochdalek). Factor pronóstico PRINCIPAL: Grado de Hipoplasia Pulmonar (bilateral) por compresión crónica in útero, NO el tamaño del defecto diafragmático en sí. La cirugía reparadora se realiza tras estabilización respiratoria, no como emergencia inmediata al nacer.",
    "Cirugía Neonatal / Hernia Diafragmática Congénita."
],
  }
];
