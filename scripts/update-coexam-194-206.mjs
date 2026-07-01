import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coexamPath = path.join(__dirname, "../src/data/dr-q-coexam-questions.ts");

const questions = [
  {
    "id": 194,
    "examArea": "MEDICINA PREVENTIVA Y SALUD PÚBLICA",
    "topic": "MEDICINA PREVENTIVA Y SALUD PÚBLICA",
    "slug": "medicina_preventiva_y_salud_publica",
    "difficulty": "medium",
    "correctOptionId": "A",
    "explanation": "El paciente es un fumador activo con antecedente significativo de tabaquismo y se encuentra dentro del grupo de riesgo para cáncer de pulmón. Las guías actuales recomiendan tamizaje mediante tomografía computarizada de tórax de baja dosis en pacientes seleccionados de alto riesgo, incluso en ausencia de síntomas.",
    "keyPoints": [
      "Cuando veas: Edad entre 50 y 80 años. Antecedente de tabaquismo importante. Fumador activo. Paciente asintomático.",
      "Debes pensar en: Tamizaje para cáncer de pulmón con tomografía de baja dosis.",
      "Tema: Tamizaje de cáncer de pulmón."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa las recomendaciones actuales de tamizaje en pacientes fumadores.\nLa clave no es que el paciente esté asintomático.\nLa clave es:\nEl antecedente de tabaquismo.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• 53 años.\n• Tabaquismo activo.\n• 20 paquetes-año.\n• Ausencia de síntomas.\nEsto lo ubica en:\nUn grupo con riesgo aumentado de cáncer de pulmón.\n¿Qué recomiendan las guías?\nLas recomendaciones actuales sugieren tamizaje anual con:\nTomografía computarizada de tórax de baja dosis.\nEn pacientes:\n• Entre 50 y 80 años.\n• Con al menos 20 paquetes-año.\n• Fumadores activos o exfumadores recientes.\nEste paciente cumple dichos criterios.\n¿Por qué la tomografía de baja dosis?\nPermite:\n• Detectar lesiones tempranas.\n• Disminuir mortalidad por cáncer de pulmón.\n• Identificar tumores potencialmente curables.\nCon una exposición menor a radiación que una tomografía convencional.\n¿Por qué NO solicitar radiografía de tórax?\nLos estudios demostraron que:\nLa radiografía de tórax no reduce la mortalidad por cáncer de pulmón.\nPor ello:\nNo se recomienda como estrategia de tamizaje.\n¿Por qué NO realizar broncoscopia?\nLa broncoscopia es un procedimiento diagnóstico.\nNo se utiliza para:\nTamizaje en pacientes asintomáticos.\n¿Por qué NO omitir el estudio?\nPrecisamente el objetivo del tamizaje es:\nDetectar enfermedad antes de que aparezcan síntomas.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Paciente asintomático.\"\nY responden:\n\"No necesita estudios.\"\nSin embargo:\nEl dato decisivo es:\nTabaquismo de 20 paquetes-año y edad de 53 años.\nEsto cumple criterios de tamizaje.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar factores de riesgo.\n2.\tCuantificar exposición al tabaco.\n3.\tVerificar edad.\n4.\tDeterminar elegibilidad para tamizaje.\n5.\tSolicitar tomografía de tórax de baja dosis.\nPerlas de examen\n✅ El cáncer de pulmón puede ser asintomático en etapas iniciales.\n✅ La tomografía de baja dosis es el método recomendado para tamizaje.\n✅ La radiografía de tórax no es una estrategia efectiva de cribado.\n✅ El tabaquismo sigue siendo el principal factor de riesgo para cáncer pulmonar.\n✅ El tamizaje busca disminuir la mortalidad específica por cáncer de pulmón.\n✅ Los fumadores activos continúan siendo candidatos a programas de detección precoz.\n✅ La suspensión del tabaquismo sigue siendo la intervención preventiva más efectiva.\nReferencias\n• United States Preventive Services Task Force (USPSTF) Lung Cancer Screening Recommendations.\n• National Comprehensive Cancer Network (NCCN) Guidelines.\n• American Cancer Society Guidelines for Lung Cancer Screening.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Screening for Lung Cancer.",
    "statement": "Paciente masculino de 53 años con antecedente de tabaquismo de 20 paquetes-año, fumador activo en la actualidad. Consulta acompañado por su esposa, quien solicita valoración médica para realizar tamizajes preventivos acordes a la edad. El paciente refiere encontrarse completamente asintomático y considera innecesaria la atención médica.\n¿Cuál es la conducta médica más apropiada en este paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Solicitar tomografía computarizada de tórax de baja dosis para tamizaje de cáncer de pulmón."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Solicitar radiografía de tórax anual."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Solicitar broncoscopia diagnóstica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "No realizar ningún estudio al encontrarse asintomático."
      }
    ]
  },
  {
    "id": 195,
    "examArea": "CARDIOLOGÍA",
    "topic": "CARDIOLOGÍA",
    "slug": "cardiologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "La paciente presenta fibrilación auricular no valvular y antecedente de accidente cerebrovascular isquémico previo, lo que la ubica en un grupo de muy alto riesgo tromboembólico. En ausencia de contraindicaciones, la anticoagulación oral está claramente indicada para reducir el riesgo de nuevos eventos cerebrovasculares.",
    "keyPoints": [
      "Cuando veas: Fibrilación auricular. Accidente cerebrovascular previo. Ausencia de contraindicaciones para anticoagulación.",
      "Debes pensar en: Anticoagulación oral obligatoria.",
      "Tema: Prevención tromboembólica en fibrilación auricular."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las indicaciones más importantes de anticoagulación en cardiología.\nLa clave no es la edad.\nLa clave es:\nEl antecedente de accidente cerebrovascular.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Fibrilación auricular no valvular.\n• Edad avanzada.\n• Evento cerebrovascular isquémico previo.\nEstos hallazgos indican:\nRiesgo extremadamente elevado de nuevos eventos embólicos.\n¿Cómo se calcula el riesgo?\nMediante la escala CHA₂DS₂-VASc:\n• Edad ≥75 años = 2 puntos.\n• Accidente cerebrovascular previo = 2 puntos.\nLa paciente tiene al menos:\n4 puntos.\nEsto corresponde a:\nAlto riesgo tromboembólico.\n¿Por qué anticoagular?\nLa fibrilación auricular favorece:\n• Estasis sanguínea auricular.\n• Formación de trombos.\n• Embolización sistémica.\nLa anticoagulación disminuye significativamente:\n• Accidente cerebrovascular.\n• Embolismo sistémico.\n• Mortalidad cardiovascular.\n¿Por qué preferir anticoagulantes orales directos?\nMedicamentos como:\n• Apixabán.\n• Rivaroxabán.\n• Dabigatrán.\n• Edoxabán.\nHan demostrado:\n• Eficacia comparable o superior a warfarina.\n• Menor riesgo de hemorragia intracraneal.\n• Mayor facilidad de uso.\nPor ello son la estrategia preferida en fibrilación auricular no valvular.\n¿Por qué NO utilizar aspirina?\nLa aspirina:\nNo proporciona protección adecuada contra el cardioembolismo.\nActualmente:\nNo se recomienda como alternativa a la anticoagulación en fibrilación auricular.\n¿Por qué NO dejar únicamente betabloqueadores?\nLos betabloqueadores:\nControlan la frecuencia cardíaca.\nPero:\nNo previenen la formación de trombos.\n¿Por qué el antecedente de ACV aumenta tanto el riesgo?\nPorque identifica pacientes que ya demostraron:\nCapacidad de desarrollar eventos embólicos clínicamente significativos.\nPor ello:\nConstituye uno de los factores de riesgo más importantes.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Tuvo un accidente cerebrovascular.\"\nY responden:\n\"No anticoagular por riesgo de sangrado.\"\nSin embargo:\nEl dato decisivo es:\nQue el evento fue isquémico y no existen contraindicaciones para anticoagulación.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar fibrilación auricular.\n2.\tCalcular riesgo tromboembólico.\n3.\tReconocer antecedente de ACV.\n4.\tConfirmar ausencia de contraindicaciones.\n5.\tIniciar anticoagulación oral.\nPerlas de examen\n✅ El antecedente de ACV es uno de los factores de mayor peso en CHA₂DS₂-VASc.\n✅ La fibrilación auricular aumenta significativamente el riesgo de embolia cerebral.\n✅ Los anticoagulantes orales directos son preferidos en fibrilación auricular no valvular.\n✅ Los betabloqueadores no previenen eventos tromboembólicos.\n✅ La aspirina no sustituye la anticoagulación en fibrilación auricular.\n✅ La prevención secundaria es fundamental tras un ACV isquémico.\n✅ La anticoagulación reduce de forma importante el riesgo de recurrencia.\nReferencias\n• ESC Guidelines for the Management of Atrial Fibrillation.\n• ACC/AHA/HRS Guideline for Atrial Fibrillation.\n• Braunwald's Heart Disease.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Prevention of Stroke and Systemic Embolism in Atrial Fibrillation.",
    "statement": "Paciente femenina de 77 años con antecedente de fibrilación auricular no valvular en tratamiento con betabloqueadores para control de la frecuencia cardíaca. Refiere antecedente de accidente cerebrovascular isquémico hace 5 años, sin secuelas neurológicas significativas. Niega antecedentes de hemorragia digestiva, hemorragia intracraneal u otras contraindicaciones para anticoagulación.\n¿Cuál es la conducta más adecuada para la prevención de eventos tromboembólicos?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Mantener únicamente el tratamiento con betabloqueadores."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar ácido acetilsalicílico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar anticoagulación oral con un anticoagulante oral directo."
      },
      {
        "id": "D",
        "label": "D",
        "text": "No iniciar anticoagulación debido al antecedente de accidente cerebrovascular."
      }
    ]
  },
  {
    "id": 196,
    "examArea": "NEFROLOGÍA",
    "topic": "NEFROLOGÍA",
    "slug": "nefrologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "El paciente presenta manifestaciones neuromusculares y cambios electrocardiográficos clásicos de hiperkalemia. La enfermedad renal crónica es uno de los principales factores de riesgo para el desarrollo de esta alteración electrolítica debido a la disminución de la excreción renal de potasio.",
    "keyPoints": [
      "Cuando veas: Enfermedad renal crónica. Debilidad muscular. Parestesias. Ondas T picudas. QRS ancho.",
      "Debes pensar en: Hiperkalemia.",
      "Tema: Trastornos del potasio."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los trastornos electrolíticos más preguntados en los exámenes.\nLa clave no es la enfermedad renal.\nLa clave es:\nEl electrocardiograma.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Enfermedad renal crónica.\n• Debilidad muscular.\n• Parestesias.\n• Alteraciones características en el ECG.\nEstos hallazgos orientan fuertemente hacia:\nHiperkalemia.\n¿Por qué ocurre la hiperkalemia en la enfermedad renal crónica?\nEl riñón es el principal órgano encargado de:\nEliminar potasio.\nCuando disminuye la tasa de filtración glomerular:\n• Disminuye la excreción de potasio.\n• Se favorece su acumulación sérica.\nComo consecuencia:\nAumenta el riesgo de hiperkalemia.\n¿Cuáles son los cambios electrocardiográficos clásicos?\nLa progresión típica incluye:\n1.\tOndas T picudas y simétricas.\n2.\tAplanamiento o desaparición de la onda P.\n3.\tProlongación del PR.\n4.\tEnsanchamiento del QRS.\n5.\tPatrón en onda sinusoidal.\n6.\tFibrilación ventricular o asistolia.\nEste paciente presenta varios de estos hallazgos.\n¿Por qué aparecen síntomas neuromusculares?\nEl exceso de potasio altera:\nLa excitabilidad de membrana.\nProduciendo:\n• Debilidad muscular.\n• Parestesias.\n• Hiporreflexia.\n• Parálisis en casos severos.\n¿Por qué NO es hipokalemia?\nLa hipokalemia suele producir:\n• Ondas U prominentes.\n• Aplanamiento de la onda T.\n• Depresión del ST.\nNo es el patrón descrito.\n¿Por qué NO es hipocalcemia?\nLa hipocalcemia se asocia clásicamente con:\n• Prolongación del QT.\n• Tetania.\n• Espasmos musculares.\nNo explica las ondas T picudas.\n¿Por qué NO es hipernatremia?\nLa hipernatremia produce principalmente:\nAlteraciones neurológicas.\nNo genera este patrón electrocardiográfico.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"Debilidad muscular.\"\nY responden:\nHipokalemia.\nSin embargo:\nEl dato decisivo es:\nLa presencia de ondas T picudas.\nEste hallazgo es prácticamente clásico de:\nHiperkalemia.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar factores de riesgo.\n2.\tAnalizar los hallazgos del ECG.\n3.\tReconocer ondas T picudas.\n4.\tIdentificar ensanchamiento del QRS.\n5.\tDiagnosticar hiperkalemia.\nPerlas de examen\n✅ Las ondas T picudas son el hallazgo más temprano de hiperkalemia.\n✅ La enfermedad renal crónica es una causa frecuente de hiperkalemia.\n✅ El ensanchamiento del QRS indica mayor gravedad.\n✅ La desaparición de la onda P es un signo de progresión.\n✅ La hiperkalemia severa puede causar paro cardíaco.\n✅ Debilidad muscular y parestesias son manifestaciones frecuentes.\n✅ El calcio intravenoso estabiliza la membrana miocárdica en casos graves.\nReferencias\n• KDIGO Clinical Practice Guidelines.\n• Harrison's Principles of Internal Medicine.\n• Brenner and Rector's The Kidney.\n• UpToDate: Clinical Manifestations and Treatment of Hyperkalemia.\n• Tintinalli's Emergency Medicine.",
    "statement": "Paciente masculino de 60 años con antecedente de enfermedad renal crónica consulta por debilidad muscular progresiva y parestesias en extremidades. Se realiza un electrocardiograma que evidencia alteraciones de la conducción cardíaca.\n¿Cuál es la alteración electrolítica más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hipocalcemia."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hipokalemia."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Hiperkalemia."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hipernatremia."
      }
    ]
  },
  {
    "id": 197,
    "examArea": "PEDIATRÍA",
    "topic": "PEDIATRÍA",
    "slug": "pediatria",
    "difficulty": "easy",
    "correctOptionId": "B",
    "explanation": "El cuadro clínico es característico de eritema infeccioso, enfermedad causada por el Parvovirus B19. La aparición de eritema facial con aspecto de \"mejillas abofeteadas\" seguida de un exantema reticulado en tronco y extremidades constituye una presentación clásica.",
    "keyPoints": [
      "Cuando veas: Niño escolar. Fiebre leve. Mejillas abofeteadas. Exantema reticulado. Buen estado general.",
      "Debes pensar en: Eritema infeccioso por Parvovirus B19.",
      "Tema: Exantemas virales de la infancia."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los exantemas virales más característicos de pediatría.\nLa clave no es la fiebre.\nLa clave es:\nLa apariencia de \"bofetada\" en las mejillas.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Fiebre leve.\n• Malestar general.\n• Exantema facial intenso.\n• Patrón reticulado en extremidades y tronco.\n• Buen estado general.\nEstos hallazgos son clásicos de:\nEritema infeccioso.\n¿Cuál es el agente causal?\nLa enfermedad es producida por:\nParvovirus B19.\nEste virus tiene tropismo por:\nLos precursores eritroides de la médula ósea.\n¿Por qué aparecen las mejillas abofeteadas?\nLa fase exantemática se caracteriza por:\nEritema intenso en ambas mejillas.\nCon palidez peribucal relativa.\nEste hallazgo es prácticamente diagnóstico.\n¿Cómo evoluciona el exantema?\nPosteriormente aparece:\n• Exantema reticulado.\n• Patrón en encaje.\n• Distribución en tronco y extremidades.\nPuede fluctuar durante semanas.\n¿Qué importancia clínica tiene?\nLa mayoría de los niños presentan:\nCurso benigno y autolimitado.\nSin embargo, puede producir complicaciones en:\n• Pacientes con hemoglobinopatías.\n• Inmunosuprimidos.\n• Mujeres embarazadas.\n¿Por qué NO es sarampión?\nEl sarampión suele presentar:\n• Tos.\n• Coriza.\n• Conjuntivitis.\n• Manchas de Koplik.\nAdemás:\nEl exantema inicia detrás de las orejas y progresa cefalocaudalmente.\n¿Por qué NO es rubéola?\nLa rubéola se caracteriza por:\n• Adenopatías retroauriculares.\n• Exantema maculopapular difuso.\nNo produce típicamente:\nMejillas abofeteadas.\n¿Por qué NO es roséola?\nLa roséola suele ocurrir en:\nMenores de 2 años.\nAdemás:\nEl exantema aparece después de la desaparición de la fiebre alta.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Fiebre y exantema.\"\nY responden:\nSarampión.\nSin embargo:\nEl dato decisivo es:\nLa apariencia de mejillas abofeteadas.\nEste hallazgo es clásico de:\nParvovirus B19.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar el exantema facial.\n2.\tReconocer el aspecto de bofetada.\n3.\tObservar el patrón reticulado.\n4.\tEvaluar el buen estado general.\n5.\tDiagnosticar eritema infeccioso.\nPerlas de examen\n✅ El eritema infeccioso es causado por Parvovirus B19.\n✅ El signo de \"mejillas abofeteadas\" es característico.\n✅ El exantema reticulado es altamente sugestivo del diagnóstico.\n✅ La enfermedad suele ser autolimitada.\n✅ Puede desencadenar crisis aplásica en pacientes con hemoglobinopatías.\n✅ La infección durante el embarazo puede producir hidrops fetal.\n✅ Es uno de los exantemas virales más preguntados en exámenes.\nReferencias\n• Nelson Textbook of Pediatrics.\n• Red Book: American Academy of Pediatrics.\n• Rudolph's Pediatrics.\n• UpToDate: Erythema Infectiosum (Parvovirus B19 Infection).\n• Manual de Infectología Pediátrica.",
    "statement": "Paciente masculino de 4 años, llevado a consulta por su madre. Tiene esquema de vacunación completo para la edad y no presenta antecedentes patológicos de importancia.Consulta por cuadro de fiebre de 4 días de evolución asociado a malestar general y mialgias. Ha recibido únicamente acetaminofén con mejoría parcial de la sintomatología.La madre refiere que durante las últimas 24 horas ha aparecido un exantema eritematoso intenso en ambas mejillas con apariencia de \"bofetada\". Posteriormente, las lesiones se han extendido al tronco y extremidades adoptando un patrón reticulado o en encaje. El paciente se encuentra en buen estado general, sin compromiso respiratorio, sin prurito y con adecuada tolerancia a la vía oral.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Sarampión."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Eritema infeccioso (quinta enfermedad)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Rubéola."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Exantema súbito (roséola infantil)."
      }
    ]
  },
  {
    "id": 198,
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "slug": "neurologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La paciente presenta un síndrome neurológico focal de inicio súbito altamente sugestivo de accidente cerebrovascular isquémico agudo dentro de la ventana terapéutica para reperfusión. La conducta inicial consiste en realizar neuroimagen urgente para descartar hemorragia intracraneal y determinar elegibilidad para trombólisis.",
    "keyPoints": [
      "Cuando veas: Déficit neurológico focal súbito. Menos de 4.5 horas de evolución. NIHSS elevado. Paciente potencialmente trombolizable.",
      "Debes pensar en: Código ACV y tomografía urgente.",
      "Tema: Accidente cerebrovascular isquémico agudo."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el manejo inicial del accidente cerebrovascular agudo.\nLa clave no es la hipertensión.\nLa clave es:\nLa ventana terapéutica.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Hemiparesia.\n• Disartria.\n• Desviación de la mirada.\n• Inicio súbito.\n• Evolución de 2 horas.\nEstos hallazgos son altamente sugestivos de:\nAccidente cerebrovascular isquémico agudo.\n¿Por qué es importante el tiempo?\nEn neurología existe un principio fundamental:\n\"Time is brain.\"\nCada minuto de retraso produce:\nPérdida neuronal irreversible.\nPor ello:\nLa identificación temprana permite terapias de reperfusión.\n¿Qué estudio debe realizarse inicialmente?\nLa tomografía cerebral simple permite:\n• Excluir hemorragia intracraneal.\n• Confirmar elegibilidad para trombólisis.\n• Guiar decisiones terapéuticas.\nEs el estudio inicial de elección.\n¿Por qué podría ser candidata a trombólisis?\nLa paciente presenta:\n• Déficit neurológico incapacitante.\n• NIHSS de 12.\n• Menos de 4.5 horas desde el inicio.\nAdemás:\nLa presión arterial se encuentra por debajo del límite habitual para trombólisis (<185/110 mmHg).\nPor lo tanto:\nPodría ser candidata a alteplasa o tenecteplasa tras la neuroimagen.\n¿Por qué NO administrar aspirina inmediatamente?\nLa aspirina se utiliza en ACV isquémico.\nSin embargo:\nPrimero debe descartarse hemorragia cerebral.\nAdministrarla antes de la imagen puede ser peligroso.\n¿Por qué NO iniciar anticoagulación?\nLa anticoagulación no constituye el tratamiento inicial estándar del ACV isquémico agudo.\nAdemás:\nAumenta el riesgo de transformación hemorrágica.\n¿Por qué NO observar?\nLa paciente presenta:\nDéficit neurológico significativo.\nRetrasar el diagnóstico podría hacer perder la ventana terapéutica.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Presión arterial 160/90 mmHg.\"\nY responden:\nControl agresivo de la presión arterial.\nSin embargo:\nEl dato decisivo es:\nInicio de síntomas hace 2 horas.\nEsto obliga a activar protocolo de ACV.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tReconocer déficit neurológico focal.\n2.\tDeterminar hora de inicio.\n3.\tActivar código ACV.\n4.\tSolicitar tomografía cerebral urgente.\n5.\tValorar trombólisis intravenosa y/o trombectomía según hallazgos.\nPerlas de examen\n✅ Todo déficit neurológico focal súbito debe considerarse un ACV hasta demostrar lo contrario.\n✅ La tomografía simple es el estudio inicial de elección.\n✅ La ventana habitual para trombólisis intravenosa es de hasta 4.5 horas en pacientes seleccionados.\n✅ La presión arterial de 160/90 mmHg no contraindica trombólisis.\n✅ NIHSS ayuda a cuantificar la gravedad del evento.\n✅ La aspirina se administra después de descartar hemorragia intracraneal.\n✅ \"Time is brain\" es uno de los conceptos más importantes en neurología de urgencias.\nReferencias\n• American Heart Association/American Stroke Association Guidelines.\n• European Stroke Organisation Guidelines.\n• Adams and Victor's Principles of Neurology.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Initial Assessment and Management of Acute Stroke.",
    "statement": "Paciente femenina de 50 años, con antecedentes de hipertensión arterial y diabetes mellitus, mal adherente al tratamiento, consulta por inicio súbito de debilidad en hemicuerpo derecho y dificultad para hablar de 2 horas de evolución. Al examen neurológico presenta hemiparesia derecha, desviación de la mirada y NIHSS de 12 puntos.\n¿Cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar ácido acetilsalicílico inmediatamente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Solicitar tomografía cerebral simple urgente y valorar trombólisis intravenosa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar anticoagulación con heparina de bajo peso molecular."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Observación clínica durante 24 horas y repetir valoración neurológica."
      }
    ]
  },
  {
    "id": 199,
    "examArea": "UROLOGÍA",
    "topic": "UROLOGÍA",
    "slug": "urologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La hematuria macroscópica indolora en un paciente fumador debe considerarse carcinoma urotelial hasta demostrar lo contrario. La evaluación diagnóstica inicial incluye estudio del tracto urinario, siendo la cistoscopia el método fundamental para descartar neoplasia vesical.",
    "keyPoints": [
      "Cuando veas: Hematuria macroscópica. Ausencia de dolor. Tabaquismo. Sin datos de origen glomerular.",
      "Debes pensar en: Cáncer urotelial.",
      "Tema: Hematuria y cáncer de vejiga."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los diagnósticos oncológicos más importantes en urología.\nLa clave no es la hematuria.\nLa clave es:\nQue sea indolora.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Hematuria macroscópica.\n• Ausencia de dolor.\n• Tabaquismo activo.\n• Ausencia de datos de enfermedad glomerular.\nEstos hallazgos obligan a sospechar:\nNeoplasia urotelial.\n¿Por qué el tabaquismo es importante?\nEl principal factor de riesgo para cáncer de vejiga es:\nEl tabaquismo.\nLos carcinógenos del cigarrillo se concentran en la orina y producen:\nDaño crónico al urotelio.\nPor ello:\nLos fumadores tienen un riesgo significativamente aumentado.\n¿Qué significa que no existan eritrocitos dismórficos?\nLos eritrocitos dismórficos sugieren:\nOrigen glomerular.\nLa ausencia de estos hallazgos orienta hacia:\nOrigen urológico.\n¿Por qué la hematuria es indolora?\nEl síntoma clásico del cáncer vesical es:\nHematuria macroscópica indolora.\nDe hecho:\nEs una de las preguntas más frecuentes en exámenes médicos.\n¿Qué estudio debe realizarse?\nLa evaluación incluye:\n• Cistoscopia.\n• Citología urinaria.\n• Estudio de vía urinaria superior.\nLa cistoscopia permite:\nVisualización directa de lesiones vesicales.\n¿Por qué NO iniciar antibióticos?\nEl paciente no presenta:\n• Disuria.\n• Fiebre.\n• Piuria.\n• Bacteriuria.\nNo existen datos de infección urinaria.\n¿Por qué NO realizar biopsia renal?\nLa biopsia renal se reserva para:\nSospecha de enfermedad glomerular.\nEl uroanálisis no apoya ese diagnóstico.\n¿Por qué NO asumir litiasis urinaria?\nLa litiasis suele acompañarse de:\n• Dolor lumbar intenso.\n• Cólico renal.\n• Irritación urinaria.\nNada de esto está presente.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Paciente joven.\"\nY descartan malignidad.\nSin embargo:\nEl dato decisivo es:\nHematuria macroscópica indolora en un fumador.\nEsto debe considerarse:\nCáncer urotelial hasta demostrar lo contrario.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tConfirmar hematuria.\n2.\tDeterminar origen glomerular o urológico.\n3.\tIdentificar factores de riesgo.\n4.\tSospechar neoplasia urotelial.\n5.\tRealizar cistoscopia y estudio complementario.\nPerlas de examen\n✅ La hematuria macroscópica indolora es el síntoma clásico del cáncer vesical.\n✅ El tabaquismo es el principal factor de riesgo para carcinoma urotelial.\n✅ La ausencia de eritrocitos dismórficos orienta a origen no glomerular.\n✅ La cistoscopia es el estudio diagnóstico fundamental.\n✅ Toda hematuria macroscópica debe estudiarse completamente.\n✅ La citología urinaria puede ayudar en el diagnóstico.\n✅ El cáncer de vejiga debe descartarse antes de asumir causas benignas.\nReferencias\n• Campbell-Walsh-Wein Urology.\n• European Association of Urology (EAU) Guidelines on Non-Muscle-Invasive Bladder Cancer.\n• American Urological Association (AUA) Hematuria Guidelines.\n• Smith & Tanagho's General Urology.\n• UpToDate: Etiology and Evaluation of Hematuria in Adults.",
    "statement": "Paciente masculino de 35 años con tabaquismo activo e índice paquete-año de 20, consulta por hematuria macroscópica indolora de una semana de evolución. Niega síntomas urinarios irritativos, fiebre o dolor lumbar.\n¿Cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar tratamiento antibiótico empírico y control en 7 días."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Solicitar citología urinaria y cistoscopia."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Solicitar biopsia renal percutánea."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Iniciar manejo para litiasis urinaria y egreso."
      }
    ]
  },
  {
    "id": 200,
    "examArea": "NEFROLOGÍA",
    "topic": "NEFROLOGÍA",
    "slug": "nefrologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La paciente presenta hematuria persistente con estudio urológico completamente negativo. En este contexto debe sospecharse una causa nefrológica, especialmente de origen glomerular, que requiere estudio especializado.",
    "keyPoints": [
      "Cuando veas: Hematuria persistente. Estudios urológicos negativos. Cistoscopia normal. Imágenes normales.",
      "Debes pensar en: Origen nefrológico de la hematuria.",
      "Tema: Hematuria glomerular."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el enfoque diagnóstico de la hematuria persistente.\nLa clave no es el antecedente familiar.\nLa clave es:\nLa negatividad del estudio urológico.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Hematuria macroscópica persistente.\n• Ecografía normal.\n• Tomografía normal.\n• Cistoscopia normal.\nPor tanto:\nLas causas urológicas más frecuentes han sido razonablemente descartadas.\n¿Qué sigue después de un estudio urológico negativo?\nDebe investigarse:\nOrigen renal o glomerular.\nEntre las causas más frecuentes se encuentran:\n• Nefropatía por IgA.\n• Enfermedad de membrana basal delgada.\n• Síndrome de Alport.\n• Otras glomerulopatías.\n¿Por qué es importante el antecedente familiar?\nAunque el antecedente de cáncer renal debe considerarse, la ausencia de hallazgos en:\n• Ecografía.\n• Tomografía contrastada.\n• Cistoscopia.\nHace menos probable una neoplasia activa detectable.\nLa prioridad es:\nDescartar enfermedad renal.\n¿Por qué NO repetir la cistoscopia?\nYa existe una evaluación urológica completa sin hallazgos.\nLa siguiente etapa diagnóstica corresponde a:\nNefrología.\n¿Por qué NO realizar nefrectomía profiláctica?\nNo existe:\n• Diagnóstico de cáncer.\n• Masa renal.\n• Síndrome hereditario confirmado.\nPor tanto:\nNo tiene indicación.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Cáncer renal en el padre.\"\nY responden:\nContinuar estudios urológicos.\nSin embargo:\nEl dato decisivo es:\nLa evaluación urológica completamente negativa.\nEsto obliga a buscar:\nOrigen nefrológico.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tConfirmar hematuria.\n2.\tRealizar estudio urológico.\n3.\tDescartar lesiones estructurales.\n4.\tRemitir a nefrología si el estudio es negativo.\n5.\tInvestigar causas glomerulares.\nPerlas de examen\n✅ Toda hematuria persistente requiere estudio completo.\n✅ Un estudio urológico negativo obliga a pensar en origen renal.\n✅ La nefropatía por IgA es una causa frecuente de hematuria persistente.\n✅ El síndrome de Alport puede asociarse a hematuria familiar.\n✅ La enfermedad de membrana basal delgada es un diagnóstico diferencial importante.\n✅ La cistoscopia normal no excluye enfermedad glomerular.\n✅ Nefrología es el siguiente paso tras descartar causas urológicas.\nReferencias\n• KDIGO Clinical Practice Guidelines.\n• Brenner and Rector's The Kidney.\n• Campbell-Walsh-Wein Urology.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Evaluation of Hematuria in Adults.",
    "statement": "Femenina de 22 años, con antecedente de cáncer renal en su padre diagnosticado a los 52 años, consulta por hematuria macroscópica de 6 meses de evolución. Ha sido valorada por urología con estudios de imagen y cistoscopia sin hallazgos patológicos. ¿Cuál es la conducta más apropiada a seguir?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Seguimiento por medicina familiar sin estudios adicionales."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Remisión a nefrología para estudio de hematuria de origen glomerular."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Repetir cistoscopia en 6 meses."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Realizar nefrectomía profiláctica por antecedente familiar."
      }
    ]
  },
  {
    "id": 201,
    "examArea": "MEDICINA INTERNA - INFECTOLOGÍA",
    "topic": "INFECTOLOGÍA",
    "slug": "infectologia",
    "difficulty": "easy",
    "correctOptionId": "B",
    "explanation": "La presencia de fiebre prolongada asociada a un nuevo soplo cardíaco debe hacer sospechar endocarditis infecciosa hasta demostrar lo contrario. El estudio inicial incluye hemocultivos seriados y ecocardiografía para confirmar el diagnóstico e identificar compromiso valvular.",
    "keyPoints": [
      "Cuando veas: Fiebre prolongada. Pérdida de peso. Astenia. Soplo cardíaco.",
      "Debes pensar en: Endocarditis infecciosa.",
      "Tema: Endocarditis infecciosa."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las causas más importantes de fiebre de origen desconocido.\nLa clave no es la fiebre.\nLa clave es:\nLa presencia del soplo cardíaco.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Fiebre persistente.\n• Síntomas constitucionales.\n• Soplo aórtico.\nEsta combinación obliga a sospechar:\nEndocarditis infecciosa.\n¿Por qué sospechar endocarditis?\nLa enfermedad suele manifestarse con:\n• Fiebre.\n• Astenia.\n• Pérdida de peso.\n• Soplos cardíacos nuevos o modificados.\nEn muchos pacientes:\nLa fiebre puede ser el síntoma predominante.\n¿Cuál es el estudio inicial?\nLos pilares diagnósticos son:\n• Hemocultivos seriados.\n• Ecocardiograma.\nLos hemocultivos permiten:\nIdentificar el microorganismo causal.\nLa ecocardiografía permite:\nDetectar vegetaciones y complicaciones valvulares.\n¿Por qué NO iniciar tratamiento empírico inmediatamente?\nSiempre que el paciente esté estable:\nDeben obtenerse hemocultivos antes de iniciar antibióticos.\nEsto aumenta significativamente el rendimiento diagnóstico.\n¿Por qué NO pensar primero en tuberculosis?\nLa tuberculosis puede producir fiebre y pérdida de peso.\nSin embargo:\nNo explica adecuadamente la aparición de un soplo cardíaco.\n¿Por qué NO pensar primero en linfoma?\nEl linfoma puede producir síntomas constitucionales.\nPero:\nLa presencia de un soplo orienta más hacia una causa cardíaca infecciosa.\n¿Cuál es la trampa de examen?\nMuchos estudiantes se enfocan en:\nLa pérdida de peso.\nY responden:\nTuberculosis o neoplasia.\nSin embargo:\nEl dato decisivo es:\nEl soplo cardíaco.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar fiebre prolongada.\n2.\tBuscar soplos cardíacos.\n3.\tSospechar endocarditis.\n4.\tObtener hemocultivos.\n5.\tRealizar ecocardiograma.\nPerlas de examen\n✅ Fiebre más soplo cardíaco obliga a descartar endocarditis infecciosa.\n✅ Los hemocultivos deben obtenerse antes de iniciar antibióticos.\n✅ El ecocardiograma es fundamental para el diagnóstico.\n✅ La pérdida de peso y la astenia son frecuentes en cuadros subagudos.\n✅ Staphylococcus aureus es una de las causas más frecuentes de endocarditis.\n✅ Los criterios de Duke modificados son la herramienta diagnóstica de referencia.\n✅ La sospecha temprana disminuye complicaciones embólicas y valvulares.\nReferencias\n• European Society of Cardiology Guidelines for Infective Endocarditis.\n• American Heart Association Scientific Statement on Infective Endocarditis.\n• Harrison's Principles of Internal Medicine.\n• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\n• UpToDate: Clinical Manifestations and Evaluation of Infective Endocarditis.",
    "statement": "Paciente masculino de 40 años, sin antecedentes de relevancia, consulta por fiebre persistente de dos semanas de evolución, acompañada de astenia y pérdida de peso no intencional. Al examen físico se identifica un soplo diastólico en foco aórtico.\n¿Cuál es el diagnóstico más probable y la conducta a seguir?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Fiebre reumática aguda; iniciar antiinflamatorios."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Endocarditis infecciosa; solicitar hemocultivos y ecocardiograma."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Tuberculosis diseminada; solicitar baciloscopias seriadas."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Linfoma no Hodgkin; solicitar biopsia ganglionar."
      }
    ]
  },
  {
    "id": 202,
    "examArea": "PEDIATRÍA - CARDIOLOGÍA PEDIÁTRICA",
    "topic": "CARDIOLOGÍA PEDIÁTRICA",
    "slug": "cardiologia_pediatrica",
    "difficulty": "easy",
    "correctOptionId": "A",
    "explanation": "La presencia de desdoblamiento fijo del segundo ruido cardíaco asociado a un soplo sistólico eyectivo en foco pulmonar constituye el hallazgo clásico de la comunicación interauricular.",
    "keyPoints": [
      "Cuando veas: Soplo mesosistólico en foco pulmonar. Desdoblamiento fijo del segundo ruido. Niño con intolerancia al ejercicio.",
      "Debes pensar en: Comunicación interauricular.",
      "Tema: Cardiopatías congénitas acianóticas."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los hallazgos auscultatorios más característicos de cardiología pediátrica.\nLa clave no es el soplo.\nLa clave es:\nEl desdoblamiento fijo del segundo ruido.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Disnea de esfuerzo.\n• Fatiga progresiva.\n• Soplo pulmonar.\n• Desdoblamiento fijo de S2.\nEste conjunto de hallazgos es altamente sugestivo de:\nComunicación interauricular (CIA).\n¿Por qué se produce el soplo?\nLa CIA genera:\nPaso de sangre desde la aurícula izquierda hacia la aurícula derecha.\nEsto ocasiona:\nAumento del flujo pulmonar.\nEl soplo auscultado no corresponde al defecto septal en sí, sino al:\nIncremento del flujo a través de la válvula pulmonar.\n¿Por qué ocurre el desdoblamiento fijo de S2?\nEl aumento constante del flujo hacia el ventrículo derecho produce:\nRetraso persistente en el cierre de la válvula pulmonar.\nComo consecuencia:\nEl segundo ruido permanece desdoblado durante inspiración y espiración.\nEste hallazgo es:\nPrácticamente clásico de CIA.\n¿Por qué NO es comunicación interventricular?\nLa CIV típicamente produce:\nSoplo holosistólico en borde esternal izquierdo.\nNo suele asociarse a:\nDesdoblamiento fijo de S2.\n¿Por qué NO es persistencia del conducto arterioso?\nLa PCA produce clásicamente:\nSoplo continuo en maquinaria.\nNo un soplo mesosistólico aislado.\n¿Por qué NO es tetralogía de Fallot?\nLa tetralogía de Fallot se caracteriza por:\n• Cianosis.\n• Crisis hipóxicas.\n• Soplo por estenosis pulmonar.\nNo por desdoblamiento fijo del segundo ruido.\n¿Cuál es la trampa de examen?\nMuchos estudiantes recuerdan:\n\"Soplo pulmonar.\"\nY responden:\nPersistencia del conducto arterioso.\nSin embargo:\nEl dato decisivo es:\nEl desdoblamiento fijo de S2.\nEste hallazgo orienta directamente hacia:\nComunicación interauricular.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar el soplo pulmonar.\n2.\tEvaluar el segundo ruido.\n3.\tReconocer el desdoblamiento fijo.\n4.\tSospechar cortocircuito izquierda-derecha.\n5.\tDiagnosticar comunicación interauricular.\nPerlas de examen\n✅ El desdoblamiento fijo de S2 es el hallazgo clásico de la CIA.\n✅ La CIA es una cardiopatía congénita acianótica.\n✅ El soplo se produce por aumento del flujo pulmonar.\n✅ Muchos pacientes permanecen asintomáticos durante años.\n✅ La ecocardiografía confirma el diagnóstico.\n✅ La sobrecarga de cavidades derechas aparece con la evolución.\n✅ Es una de las cardiopatías congénitas más preguntadas en exámenes.\nReferencias\n• Nelson Textbook of Pediatrics.\n• Moss & Adams' Heart Disease in Infants, Children, and Adolescents.\n• Braunwald's Heart Disease.\n• American Heart Association Guidelines for Congenital Heart Disease.\n• UpToDate: Clinical Manifestations and Diagnosis of Atrial Septal Defects.",
    "statement": "Paciente masculino de 6 años es llevado a consulta por sus padres debido a fatiga progresiva y disnea de esfuerzo en las últimas semanas. En la exploración física se ausculta un soplo mesosistólico en foco pulmonar asociado a desdoblamiento fijo del segundo ruido cardíaco.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Comunicación interauricular."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Comunicación interventricular."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Persistencia del conducto arterioso."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Tetralogía de Fallot."
      }
    ]
  },
  {
    "id": 203,
    "examArea": "NEUROCIRUGÍA - URGENCIAS",
    "topic": "URGENCIAS",
    "slug": "urgencias",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La escala de Glasgow se calcula sumando la respuesta ocular, verbal y motora. En este paciente la apertura ocular al dolor corresponde a 2 puntos, los sonidos incomprensibles a 2 puntos y la respuesta motora inadecuada (retirada al dolor) a 3 puntos, para un total de 7 puntos.",
    "keyPoints": [
      "Cuando veas: Apertura ocular al dolor. Sonidos incomprensibles. Retirada al dolor.",
      "Debes pensar en: Glasgow 7/15.",
      "Tema: Escala de Coma de Glasgow."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los instrumentos más utilizados en urgencias y trauma.\nLa clave no es el trauma.\nLa clave es:\nConocer la puntuación de cada componente.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Apertura ocular al dolor.\n• Sonidos incomprensibles.\n• Retirada al dolor.\nDebemos calcular:\nLa suma de las tres respuestas.\n¿Cómo se puntúa la respuesta ocular?\n• Espontánea = 4.\n• A la voz = 3.\n• Al dolor = 2.\n• Ninguna = 1.\nEl paciente obtiene:\n2 puntos.\n¿Cómo se puntúa la respuesta verbal?\n• Orientado = 5.\n• Confuso = 4.\n• Palabras inapropiadas = 3.\n• Sonidos incomprensibles = 2.\n• Ninguna = 1.\nEl paciente obtiene:\n2 puntos.\n¿Cómo se puntúa la respuesta motora?\n• Obedece órdenes = 6.\n• Localiza dolor = 5.\n• Retirada al dolor = 4.\n• Flexión anormal = 3.\n• Extensión anormal = 2.\n• Ninguna = 1.\nEl paciente obtiene:\n3 puntos según el enunciado de la pregunta (respuesta motora inadecuada).\nPor lo tanto:\n2 + 2 + 3 = 7 puntos.\n¿Cuál es la trampa de examen?\nMuchos estudiantes olvidan:\nLa puntuación individual de cada componente.\nO confunden:\nFlexión anormal con retirada al dolor.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tEvaluar respuesta ocular.\n2.\tEvaluar respuesta verbal.\n3.\tEvaluar respuesta motora.\n4.\tSumar los tres componentes.\n5.\tObtener el Glasgow total.\nPerlas de examen\n✅ Glasgow ≤ 8 indica trauma craneoencefálico grave.\n✅ La respuesta motora es el componente con mayor valor pronóstico.\n✅ La apertura ocular al dolor corresponde a 2 puntos.\n✅ Los sonidos incomprensibles corresponden a 2 puntos.\n✅ La escala máxima es 15 puntos.\n✅ La escala mínima es 3 puntos.\n✅ Glasgow ≤ 8 obliga a considerar protección de la vía aérea.\nReferencias\n• Advanced Trauma Life Support (ATLS).\n• Brain Trauma Foundation Guidelines.\n• Greenberg's Handbook of Neurosurgery.\n• Tintinalli's Emergency Medicine.\n• UpToDate: Glasgow Coma Scale.",
    "statement": "Paciente masculino de 43 años es llevado a urgencias tras un accidente de tránsito con trauma craneoencefálico severo. Al ingreso presenta apertura ocular únicamente al dolor, emisión de sonidos incomprensibles y respuesta motora inadecuada al estímulo doloroso.\n¿Cuál es el puntaje de la escala de Glasgow?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "6 puntos."
      },
      {
        "id": "B",
        "label": "B",
        "text": "7 puntos."
      },
      {
        "id": "C",
        "label": "C",
        "text": "8 puntos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "9 puntos."
      }
    ]
  },
  {
    "id": 204,
    "examArea": "PEDIATRÍA - CARDIOLOGÍA",
    "topic": "CARDIOLOGÍA",
    "slug": "cardiologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "El paciente presenta una taquicardia supraventricular estable. En lactantes hemodinámicamente estables, la adenosina es el tratamiento farmacológico de elección debido a su capacidad para bloquear transitoriamente la conducción a través del nodo auriculoventricular.",
    "keyPoints": [
      "Cuando veas: Lactante. Taquicardia regular. Complejos estrechos. Ausencia de ondas P.",
      "Debes pensar en: Taquicardia supraventricular.",
      "Tema: Taquicardia supraventricular en pediatría."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las arritmias más frecuentes en pediatría.\nLa clave no es la frecuencia cardíaca.\nLa clave es:\nLa regularidad del ritmo y los complejos estrechos.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Frecuencia cardíaca muy elevada.\n• Ritmo regular.\n• Complejos estrechos.\n• Ondas P no visibles.\nEstos hallazgos son característicos de:\nTaquicardia supraventricular.\n¿Cuál es el tratamiento inicial?\nSi el paciente se encuentra estable:\n• Maniobras vagales.\n• Adenosina intravenosa.\nLa adenosina constituye:\nEl tratamiento farmacológico de elección.\n¿Cómo actúa la adenosina?\nProduce:\nBloqueo transitorio del nodo auriculoventricular.\nEsto interrumpe:\nLa mayoría de los circuitos de reentrada responsables de la TSV.\n¿Por qué NO cardioversión eléctrica?\nLa cardioversión sincronizada está indicada cuando existe:\n• Inestabilidad hemodinámica.\n• Hipotensión significativa.\n• Choque.\n• Alteración importante del estado de conciencia.\nNo es el caso.\n¿Por qué NO amiodarona?\nLa amiodarona puede utilizarse en algunas arritmias refractarias.\nSin embargo:\nNo es el tratamiento inicial de elección para una TSV estable.\n¿Por qué NO metoprolol?\nLos betabloqueadores pueden utilizarse en prevención o manejo crónico.\nNo constituyen la primera línea en el episodio agudo.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"230 lpm.\"\nY responden:\nCardioversión.\nSin embargo:\nEl dato decisivo es:\nLa estabilidad hemodinámica.\nPor ello:\nLa adenosina es la respuesta correcta.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar la TSV.\n2.\tValorar estabilidad hemodinámica.\n3.\tRealizar maniobras vagales.\n4.\tAdministrar adenosina.\n5.\tConsiderar cardioversión si existe inestabilidad.\nPerlas de examen\n✅ La TSV es la arritmia sintomática más frecuente en lactantes.\n✅ La adenosina es el tratamiento farmacológico de elección en pacientes estables.\n✅ Debe administrarse en bolo intravenoso rápido.\n✅ Las maniobras vagales pueden ser efectivas antes del tratamiento farmacológico.\n✅ La cardioversión sincronizada se reserva para pacientes inestables.\n✅ La ausencia de ondas P visibles es un hallazgo frecuente.\n✅ La frecuencia cardíaca suele superar los 220 lpm en lactantes.\nReferencias\n• Nelson Textbook of Pediatrics.\n• Pediatric Advanced Life Support (PALS).\n• Braunwald's Heart Disease.\n• Moss & Adams' Heart Disease in Infants, Children, and Adolescents.\n• UpToDate: Supraventricular Tachycardia in Infants and Children.",
    "statement": "Lactante masculino de 2 meses es llevado a urgencias por irritabilidad y disminución de la succión de inicio súbito. Al examen físico presenta taquicardia de 230 lpm. El electrocardiograma evidencia una taquicardia supraventricular de complejos estrechos, regular y sin ondas P visibles.\n¿Cuál es el tratamiento de elección?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Amiodarona intravenosa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Adenosina intravenosa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Cardioversión eléctrica sincronizada."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Metoprolol intravenoso."
      }
    ]
  },
  {
    "id": 205,
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "slug": "neurologia",
    "difficulty": "easy",
    "correctOptionId": "B",
    "explanation": "La hemorragia subaracnoidea clásicamente se presenta con cefalea intensa de inicio súbito (\"la peor cefalea de su vida\"), acompañada de signos de irritación meníngea como rigidez de nuca y fotofobia.",
    "keyPoints": [
      "Cuando veas: Cefalea súbita intensa. Rigidez de nuca. Fotofobia. Ausencia de focalización neurológica.",
      "Debes pensar en: Hemorragia subaracnoidea.",
      "Tema: Hemorragia subaracnoidea."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las emergencias neurológicas más importantes.\nLa clave no es la hipertensión.\nLa clave es:\nEl inicio súbito de la cefalea.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Cefalea explosiva.\n• Náuseas.\n• Fotofobia.\n• Rigidez de nuca.\nEstos hallazgos son altamente sugestivos de:\nHemorragia subaracnoidea.\n¿Por qué ocurre?\nLa causa más frecuente es:\nRotura de un aneurisma intracraneal sacular.\nLa sangre liberada al espacio subaracnoideo produce:\nIrritación meníngea aguda.\n¿Cuál es la presentación clásica?\nLa descripción típica es:\n\"La peor cefalea de la vida.\"\nAdemás pueden aparecer:\n• Náuseas.\n• Vómitos.\n• Rigidez de nuca.\n• Fotofobia.\n• Alteración del estado de conciencia.\n¿Por qué NO es meningitis?\nLa meningitis suele asociarse a:\n• Fiebre.\n• Síndrome infeccioso.\n• Evolución progresiva.\nNo suele iniciar con una cefalea explosiva.\n¿Por qué NO es migraña?\nLa migraña generalmente tiene:\n• Antecedentes previos similares.\n• Evolución recurrente.\nLa rigidez de nuca obliga a descartar primero una causa grave.\n¿Por qué NO es encefalitis?\nLa encefalitis suele producir:\n• Alteración del estado mental.\n• Convulsiones.\n• Déficits neurológicos.\nNo es la presentación típica del caso.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Fotofobia.\"\nY responden:\nMeningitis.\nSin embargo:\nEl dato decisivo es:\nLa cefalea de inicio súbito.\nEsto orienta primero a:\nHemorragia subaracnoidea.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar cefalea explosiva.\n2.\tBuscar signos meníngeos.\n3.\tSospechar hemorragia subaracnoidea.\n4.\tSolicitar tomografía cerebral urgente.\n5.\tRealizar punción lumbar si la tomografía es negativa y persiste la sospecha.\nPerlas de examen\n✅ La hemorragia subaracnoidea produce la clásica \"cefalea en trueno\".\n✅ La causa más frecuente es la ruptura de un aneurisma sacular.\n✅ La rigidez de nuca es un signo de irritación meníngea.\n✅ La tomografía simple es el estudio inicial de elección.\n✅ Una tomografía negativa no excluye completamente el diagnóstico.\n✅ La punción lumbar puede confirmar el diagnóstico cuando la sospecha persiste.\n✅ Constituye una emergencia neurológica potencialmente mortal.\nReferencias\n• Adams and Victor's Principles of Neurology.\n• Greenberg's Handbook of Neurosurgery.\n• American Heart Association Guidelines for Aneurysmal Subarachnoid Hemorrhage.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Clinical Presentation and Diagnosis of Subarachnoid Hemorrhage.",
    "statement": "Paciente masculino de 57 años, con antecedentes de hipertensión arterial y obesidad, consulta por cefalea intensa de inicio súbito, asociada a náuseas y fotofobia. Al examen físico presenta rigidez de nuca sin focalización neurológica.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Meningitis bacteriana aguda."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hemorragia subaracnoidea."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Migraña con aura."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Encefalitis viral."
      }
    ]
  },
  {
    "id": 206,
    "examArea": "PEDIATRÍA",
    "topic": "PEDIATRÍA",
    "slug": "pediatria",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "El cuadro clínico es compatible con bronquiolitis aguda, cuyo tratamiento es fundamentalmente de soporte. La oxigenoterapia está indicada cuando existe hipoxemia y no se recomienda el uso rutinario de broncodilatadores, corticoides o antibióticos.",
    "keyPoints": [
      "Cuando veas: Lactante menor de 2 años. Primer episodio de sibilancias. Infección respiratoria viral. Dificultad respiratoria.",
      "Debes pensar en: Bronquiolitis aguda.",
      "Tema: Bronquiolitis."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el manejo de la infección respiratoria baja más frecuente en lactantes.\nLa clave no son las sibilancias.\nLa clave es:\nQue se trata del primer episodio.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Lactante de 1 año.\n• Cuadro viral respiratorio.\n• Sibilancias.\n• Tiraje.\n• Hipoxemia leve.\nEstos hallazgos son compatibles con:\nBronquiolitis aguda.\n¿Cuál es el agente causal más frecuente?\nEl principal agente es:\nVirus sincitial respiratorio (VSR).\nAunque otros virus también pueden producir el cuadro.\n¿Cuál es el tratamiento?\nLas medidas recomendadas incluyen:\n• Oxígeno si existe hipoxemia.\n• Hidratación adecuada.\n• Lavados nasales.\n• Monitorización clínica.\n¿Por qué NO usar salbutamol de rutina?\nLa evidencia actual demuestra:\nBeneficio limitado o ausente en la mayoría de los pacientes.\nPor ello:\nNo se recomienda de forma rutinaria.\n¿Por qué NO utilizar corticoides?\nLos corticoides:\nNo mejoran desenlaces clínicos relevantes en bronquiolitis.\nPor tanto:\nNo forman parte del tratamiento habitual.\n¿Por qué NO administrar antibióticos?\nLa bronquiolitis es:\nUna infección viral.\nLos antibióticos solo están indicados cuando existe:\nCoinfección bacteriana documentada.\n¿Por qué NO administrar adrenalina intramuscular?\nLa adrenalina intramuscular está indicada en:\nAnafilaxia.\nNo corresponde al cuadro clínico presentado.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Sibilancias.\"\nY responden:\nSalbutamol.\nSin embargo:\nEl dato decisivo es:\nPrimer episodio de sibilancias en un lactante con infección viral.\nEsto orienta a:\nBronquiolitis.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar lactante con infección viral.\n2.\tReconocer primer episodio de sibilancias.\n3.\tDiagnosticar bronquiolitis.\n4.\tAdministrar medidas de soporte.\n5.\tUtilizar oxígeno cuando exista hipoxemia.\nPerlas de examen\n✅ El VSR es la principal causa de bronquiolitis.\n✅ La bronquiolitis ocurre principalmente en menores de 2 años.\n✅ El tratamiento es fundamentalmente de soporte.\n✅ El oxígeno se administra en presencia de hipoxemia.\n✅ Los broncodilatadores no se recomiendan de rutina.\n✅ Los corticoides no forman parte del manejo estándar.\n✅ Es una de las causas más frecuentes de hospitalización pediátrica.\nReferencias\n• Nelson Textbook of Pediatrics.\n• American Academy of Pediatrics Clinical Practice Guideline: Bronchiolitis.\n• Manual de Pediatría de la AEP.\n• UpToDate: Bronchiolitis in Infants and Children.\n• Red Book: American Academy of Pediatrics.",
    "statement": "Paciente masculino de 1 año es llevado a urgencias por fiebre, tos y dificultad respiratoria progresiva de 2 días de evolución. Al examen físico presenta sibilancias difusas, tiraje intercostal y saturación de oxígeno de 92% al aire ambiente. No tiene antecedentes de episodios similares.\n¿Cuál es el tratamiento más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Salbutamol inhalado y prednisolona oral."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Oxígeno suplementario y medidas de soporte."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Ceftriaxona intravenosa."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Adrenalina intramuscular."
      }
    ]
  }
];

function escapeTemplate(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function renderQuestion(q) {
  const options = q.options
    .map(
      (opt) =>
        `      { id: "${opt.id}", label: "${opt.label}", text: ${JSON.stringify(opt.text)} },`,
    )
    .join("\n");

  const keyPoints = q.keyPoints
    .map((kp) => `      ${JSON.stringify(kp)},`)
    .join("\n");

  const tags = [
    "dr-q",
    "universal",
    "metodoq",
    "univalle",
    "udea",
    "caldas",
    "ucc_pasto",
    "unimilitar",
    q.slug,
  ]
    .map((t) => JSON.stringify(t))
    .join(",");

  return `  {
    id: "dr-q-${q.id}",
    examArea: ${JSON.stringify(q.examArea)},
    topic: ${JSON.stringify(q.topic)},
    difficulty: ${JSON.stringify(q.difficulty)},
    tags: [${tags}],
    statement: ${JSON.stringify(q.statement)},
    options: [
${options}
    ],
    correctOptionId: "${q.correctOptionId}",
    explanation: ${JSON.stringify(q.explanation)},
    keyPoints: [
${keyPoints}
    ],
    theoryContent: \`${escapeTemplate(q.theoryContent)}\`,
  }`;
}

const content = fs.readFileSync(coexamPath, "utf8");
const startMatch = content.match(/  \{\r?\n    id: "dr-q-194"/);
const endMatch = content.match(/  \{\r?\n    id: "dr-q-207"/);
if (!startMatch || !endMatch) {
  throw new Error("Could not find patch boundaries in dr-q-coexam-questions.ts");
}
const startIdx = startMatch.index;
const endIdx = endMatch.index;
if (startIdx === -1 || endIdx === -1) {
  throw new Error("Could not find patch boundaries in dr-q-coexam-questions.ts");
}

const rendered = questions.map(renderQuestion).join(",\n") + ",\n";
const newContent = content.slice(0, startIdx) + rendered + content.slice(endIdx);
fs.writeFileSync(coexamPath, newContent, "utf8");
console.log(`Patched dr-q-194 through dr-q-206 (${questions.length} questions) in ${coexamPath}`);
