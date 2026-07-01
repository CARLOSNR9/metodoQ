import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coexamPath = path.join(__dirname, "../src/data/dr-q-coexam-questions.ts");

const questions = [
  {
    "id": 166,
    "examArea": "CIRUGÍA GENERAL",
    "topic": "CIRUGÍA GENERAL",
    "slug": "cirugia_general",
    "difficulty": "medium",
    "correctOptionId": "A",
    "explanation": "La presencia de una masa inguinal que aumenta con el esfuerzo, es reductible y desaparece en decúbito es altamente sugestiva de hernia inguinal reducible. En ausencia de signos de complicación, el manejo indicado es la corrección quirúrgica programada.",
    "keyPoints": [
      "Cuando veas: Masa inguinal. Aumenta con el esfuerzo. Reducible. Valsalva positivo.",
      "Debes pensar en: Hernia inguinal reducible.",
      "Tema: Hernias de la pared abdominal."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el diagnóstico y manejo de la hernia inguinal no complicada.\nLa clave no es la masa.\nLa clave es:\nQue desaparece al acostarse.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Tumoración inguinal.\n• Aparición con esfuerzo.\n• Reducción espontánea en decúbito.\nEsto corresponde a:\nHernia inguinal reducible.\n¿Qué significa reducible?\nQue el contenido herniario:\nPuede regresar a la cavidad abdominal.\nPor ello:\nNo existe encarcelación.\n¿Requiere cirugía?\nSí.\nEl tratamiento definitivo es:\nHernioplastia electiva.\n¿Por qué NO observación indefinida?\nPorque las hernias:\nNo se resuelven espontáneamente.\nY pueden progresar a:\n• Encarcelación.\n• Estrangulación.\n¿Por qué NO cirugía urgente?\nPorque no existen:\n• Dolor intenso.\n• Eritema.\n• Signos de isquemia.\n• Imposibilidad de reducción.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Masa inguinal.\"\nY responden:\nCirugía urgente.\nSin embargo:\nEl dato decisivo es:\nQue la hernia es reducible y no complicada.\nEsto orienta a:\nCorrección quirúrgica programada.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar masa inguinal.\n2.\tEvaluar reducibilidad.\n3.\tBuscar signos de complicación.\n4.\tDiagnosticar hernia reducible.\n5.\tProgramar hernioplastia electiva.\nPerlas de examen\n✅ La hernia inguinal es la hernia de pared abdominal más frecuente.\n✅ La maniobra de Valsalva aumenta la protrusión herniaria.\n✅ Una hernia reducible no constituye una urgencia quirúrgica.\n✅ El tratamiento definitivo es quirúrgico.\n✅ El encarcelamiento implica imposibilidad de reducción.\n✅ La estrangulación se asocia a compromiso vascular.\n✅ Dolor intenso y cambios cutáneos sugieren complicación.\nReferencias\n• Schwartz's Principles of Surgery.\n• Sabiston Textbook of Surgery.\n• Townsend. Sabiston Surgery.\n• European Hernia Society Guidelines.\n• UpToDate: Adult Inguinal Hernia.",
    "statement": "Hombre de 40 años consulta por una masa en región inguinal que aparece al realizar esfuerzos físicos y al toser, desapareciendo completamente cuando se encuentra en decúbito. Al examen físico la masa es reductible, aumenta con la maniobra de Valsalva y no existen signos de encarcelación ni estrangulación.\n¿Cuál es el diagnóstico más probable y el manejo más oportuno?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hernia inguinal reducible; remisión a cirugía general para hernioplastia electiva."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hernia estrangulada; laparotomía urgente."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Hernia femoral encarcelada; observación ambulatoria."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Lipoma inguinal; manejo conservador indefinido."
      }
    ]
  },
  {
    "id": 167,
    "examArea": "NEUROLOGÍA - URGENCIAS",
    "topic": "NEUROLOGÍA",
    "slug": "neurologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La persistencia de las convulsiones a pesar de benzodiacepinas iniciales corresponde a un estado epiléptico convulsivo establecido. El siguiente escalón terapéutico consiste en administrar un anticonvulsivante de segunda línea por vía intravenosa.",
    "keyPoints": [
      "Cuando veas: Convulsión continua. Benzodiacepina sin respuesta. Persistencia de actividad convulsiva.",
      "Debes pensar en: Estado epiléptico establecido.",
      "Tema: Estado epiléptico."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el algoritmo moderno del estado epiléptico.\nLa clave no es la duración exacta.\nLa clave es:\nQue ya fracasó el tratamiento inicial con benzodiacepinas.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Crisis tónico-clónica persistente.\n• Benzodiacepina IM.\n• Benzodiacepina IV.\n• Sin control de la crisis.\nEsto corresponde a:\nEstado epiléptico convulsivo establecido.\n¿Cuál es el siguiente paso?\nAdministrar un anticonvulsivante de segunda línea:\n• Levetiracetam IV.\n• Ácido valproico IV.\n• Fosfenitoína IV.\n¿Cuándo se considera refractario?\nCuando persiste:\nDespués de benzodiacepinas y un anticonvulsivante de segunda línea.\nEn ese momento se considera:\nEstado epiléptico refractario.\nY se requiere:\n• Intubación.\n• Sedación continua.\n• UCI.\n¿Por qué NO seguir administrando benzodiacepinas?\nPorque aumenta:\n• Depresión respiratoria.\n• Hipotensión.\nSin mejorar significativamente el control de la crisis.\n¿Cuál es la trampa de examen?\nMuchos estudiantes responden:\n\"Intubación inmediata.\"\nSin embargo:\nTodavía no ha recibido el:\nAnticonvulsivante de segunda línea.\nEsto orienta a:\nLevetiracetam, valproato o fosfenitoína IV.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tBenzodiacepina inicial.\n2.\tPersistencia de crisis.\n3.\tAnticonvulsivante de segunda línea.\n4.\tReevaluación.\n5.\tSi continúa → estado epiléptico refractario.\nPerlas de examen\n✅ Estado epiléptico = crisis ≥5 minutos o crisis repetidas sin recuperación de conciencia.\n✅ Las benzodiacepinas son la primera línea.\n✅ Levetiracetam, valproato y fosfenitoína son tratamientos de segunda línea.\n✅ La fosfenitoína tiene menos efectos adversos que la fenitoína.\n✅ El estado epiléptico refractario requiere UCI.\n✅ La hipoglucemia siempre debe descartarse precozmente.\n✅ El retraso terapéutico aumenta la morbimortalidad.\nReferencias\n• American Epilepsy Society Guidelines.\n• Adams and Victor's Principles of Neurology.\n• Tintinalli's Emergency Medicine.\n• UpToDate: Convulsive Status Epilepticus in Adults.\n• Neurocritical Care Society Guidelines.",
    "statement": "Hombre de 45 años presenta movimientos tónico-clónicos generalizados continuos. Recibe una dosis inicial de benzodiacepina por vía intramuscular sin respuesta clínica. Un minuto después se obtiene acceso venoso periférico y se administra una benzodiacepina intravenosa, persistiendo la actividad convulsiva.\n¿Cuál es el diagnóstico y el siguiente paso más apropiado en el tratamiento?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Convulsión febril; repetir benzodiacepina intravenosa indefinidamente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Estado epiléptico convulsivo establecido; administrar levetiracetam, ácido valproico o fosfenitoína intravenosa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Estado epiléptico refractario; iniciar anestesia general inmediatamente."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Crisis psicógena no epiléptica; suspender tratamiento anticonvulsivante."
      }
    ]
  },
  {
    "id": 168,
    "examArea": "MEDICINA INTERNA - URGENCIAS",
    "topic": "URGENCIAS",
    "slug": "urgencias",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "El cuadro clínico es compatible con neumonía adquirida en la comunidad complicada con sepsis. La presencia de alteración del estado mental, hipoxemia y elevación del lactato obliga a iniciar de manera inmediata el paquete de manejo para sepsis, incluyendo reanimación temprana, toma de cultivos y antibióticos intravenosos.",
    "keyPoints": [
      "Cuando veas: Neumonía. Confusión. Lactato elevado. Hipoxemia.",
      "Debes pensar en: Sepsis de origen pulmonar.",
      "Tema: Sepsis."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el reconocimiento temprano de la sepsis.\nLa clave no es el EPOC.\nLa clave es:\nLa combinación de infección e hipoperfusión.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Infección respiratoria.\n• Alteración del estado mental.\n• Hipoxemia.\n• Lactato elevado.\nEsto cumple criterios de:\nSepsis.\n¿Cuál es la conducta inmediata?\nEl paquete inicial incluye:\n• Oxigenoterapia.\n• Acceso venoso.\n• Cultivos.\n• Antibióticos intravenosos tempranos.\n• Reanimación con cristaloides.\n¿Por qué es tan importante el tiempo?\nPorque:\nCada hora de retraso en el inicio de antibióticos aumenta la mortalidad.\n¿Qué antibióticos podrían utilizarse?\nDependiendo del contexto:\n• Ceftriaxona + azitromicina.\no\n• Ampicilina/sulbactam + macrólido.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"EPOC.\"\nY responden:\nExacerbación aislada de EPOC.\nSin embargo:\nEl dato decisivo es:\nLa presencia de fiebre, confusión y lactato elevado.\nEsto orienta a:\nSepsis secundaria a neumonía.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tReconocer infección.\n2.\tIdentificar disfunción orgánica.\n3.\tDiagnosticar sepsis.\n4.\tIniciar antibióticos tempranos.\n5.\tRealizar reanimación y monitorización.\nPerlas de examen\n✅ Lactato elevado es marcador de hipoperfusión tisular.\n✅ La confusión constituye disfunción orgánica.\n✅ Los antibióticos deben iniciarse lo antes posible.\n✅ Los cultivos deben obtenerse antes de antibióticos si no retrasan el tratamiento.\n✅ La neumonía es una de las causas más frecuentes de sepsis.\n✅ La oxigenoterapia forma parte del manejo inicial.\n✅ qSOFA alterado aumenta la sospecha de sepsis.\nReferencias\n• Surviving Sepsis Campaign Guidelines.\n• Harrison's Principles of Internal Medicine.\n• Tintinalli's Emergency Medicine.\n• GOLD Guidelines.\n• IDSA/ATS Guidelines for Community-Acquired Pneumonia.",
    "statement": "Hombre de 70 años con antecedente de EPOC consulta por cuadro de 2 días de evolución consistente en fiebre, tos productiva, disnea y deterioro del estado general. Durante la valoración presenta confusión aguda, hipoxemia y estudios de laboratorio compatibles con hipoperfusión tisular.\n¿Cuál es la conducta más adecuada en el servicio de urgencias?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar broncodilatadores inhalados y dar egreso con antibiótico oral."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar líquidos intravenosos, obtener cultivos, iniciar antibióticos de amplio espectro y oxigenoterapia temprana."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Solicitar tomografía de tórax antes de iniciar cualquier tratamiento."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Iniciar únicamente corticosteroides sistémicos y observación."
      }
    ]
  },
  {
    "id": 169,
    "examArea": "MEDICINA INTERNA - CUIDADO CRÍTICO",
    "topic": "MEDICINA INTERNA",
    "slug": "medicina_interna",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La persistencia de hipotensión e hipoperfusión tisular después de una adecuada reanimación con líquidos define choque séptico. En este contexto se requiere el inicio temprano de vasopresores, siendo la norepinefrina el fármaco de primera línea.",
    "keyPoints": [
      "Cuando veas: Infección. Hipotensión persistente. Lactato elevado. Líquidos adecuados.",
      "Debes pensar en: Choque séptico.",
      "Tema: Sepsis y choque séptico."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la diferencia entre sepsis y choque séptico.\nLa clave no es la infección urinaria.\nLa clave es:\nLa persistencia de la hipotensión tras líquidos.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Infección probable de origen urinario.\n• Hipotensión severa.\n• Lactato elevado.\n• Persistencia de hipoperfusión.\nA pesar de:\n• Cristaloides 30 mL/kg.\n• Antibióticos adecuados.\nEsto corresponde a:\nChoque séptico.\n¿Cuál es la definición práctica?\nHipotensión persistente que requiere:\nVasopresores para mantener PAM ≥65 mmHg.\nY generalmente:\nLactato >2 mmol/L.\n¿Cuál es el vasopresor de elección?\nLa respuesta clásica es:\nNorepinefrina.\n¿Por qué norepinefrina?\nPorque:\n• Aumenta la resistencia vascular sistémica.\n• Mejora la perfusión tisular.\n• Tiene menor riesgo de arritmias que dopamina.\n¿Cuál es el objetivo?\nMantener:\nPAM ≥65 mmHg.\nPara asegurar:\nPerfusión cerebral, renal y coronaria.\n¿Por qué NO más líquidos indefinidamente?\nPorque ya recibió:\nReanimación inicial adecuada.\nEl problema ahora es:\nVasoplejía séptica.\nNo hay déficit de volumen.\n¿Cuál es la trampa del examen?\nMuchos estudiantes leen:\n\"Hipotensión.\"\nY responden:\nMás líquidos.\nSin embargo:\nEl dato decisivo es:\nLa persistencia de hipotensión después de 30 mL/kg.\nEsto define:\nChoque séptico.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar infección.\n2.\tAdministrar líquidos iniciales.\n3.\tIniciar antibióticos tempranos.\n4.\tReevaluar perfusión.\n5.\tSi persiste hipotensión → iniciar norepinefrina.\nPerlas de examen\n✅ La norepinefrina es el vasopresor de primera línea en choque séptico.\n✅ PAM objetivo ≥65 mmHg.\n✅ Lactato elevado indica hipoperfusión tisular.\n✅ El choque séptico es una emergencia con alta mortalidad.\n✅ Los antibióticos deben administrarse precozmente.\n✅ La dopamina se asocia a más arritmias.\n✅ El control del foco infeccioso es fundamental para la supervivencia.\nReferencias\n• Surviving Sepsis Campaign 2021.\n• Harrison's Principles of Internal Medicine.\n• Marino's The ICU Book.\n• Tintinalli's Emergency Medicine.\n• SCCM Guidelines for Septic Shock.",
    "statement": "Hombre de 60 años consulta por deterioro progresivo del estado general. Días previos presentó síntomas urinarios y fiebre, recibiendo tratamiento antibiótico ambulatorio sin mejoría. Al ingreso presenta hipotensión, fiebre y alteración del estado de conciencia. Se inicia reanimación con cristaloides (30 mL/kg) y antibióticos de amplio espectro. Posteriormente persiste hipotenso y con elevación del lactato sérico.\n¿Cuál es el siguiente paso más apropiado y cuál es la razón para realizarlo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar un segundo bolo de cristaloides y observar la respuesta."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar norepinefrina para mantener una PAM ≥65 mmHg debido a choque séptico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar dopamina por el antecedente de infección urinaria."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Suspender líquidos e iniciar diuréticos intravenosos."
      }
    ]
  },
  {
    "id": 170,
    "examArea": "NEUMOLOGÍA",
    "topic": "NEUMOLOGÍA",
    "slug": "neumologia",
    "difficulty": "medium",
    "correctOptionId": "A",
    "explanation": "El paciente presenta una exacerbación aguda de EPOC con insuficiencia respiratoria hipercápnica. El manejo inicial incluye oxigenoterapia titulada, broncodilatadores de acción corta, corticosteroides sistémicos y antibióticos debido a la presencia de esputo purulento. Una vez estabilizado, debe optimizarse el tratamiento de mantenimiento con doble broncodilatación LABA/LAMA.",
    "keyPoints": [
      "Cuando veas: EPOC. Aumento de disnea. Esputo purulento. Acidosis respiratoria.",
      "Debes pensar en: Exacerbación aguda de EPOC.",
      "Tema: EPOC."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el manejo agudo y crónico del EPOC.\nLa clave no es el antecedente.\nLa clave es:\nLa gasometría.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Disnea.\n• Sibilancias.\n• Esputo purulento.\n• pH 7.30.\n• PaCO₂ elevada.\nEsto corresponde a:\nExacerbación aguda de EPOC.\n¿Cuál es el manejo inicial?\n1.\tOxígeno suplementario titulado.\nMeta:\nSatO₂ 88-92%.\n2.\tBroncodilatadores de acción corta.\n• Salbutamol.\n• Ipratropio.\n3.\tCorticoides sistémicos.\nEjemplo:\n• Prednisolona.\n• Hidrocortisona.\n4.\tAntibióticos.\nPorque presenta:\nEsputo purulento.\n¿Qué hacer con la gasometría?\nEl pH de 7.30 indica:\nAcidosis respiratoria aguda sobre crónica.\nPor ello:\nDebe considerarse ventilación mecánica no invasiva (VNI) si la acidosis persiste o empeora.\n¿Por qué NO intubarlo inmediatamente?\nPorque:\n• Está consciente.\n• No presenta agotamiento respiratorio.\n• No hay contraindicación para VNI.\n¿Cuál es el manejo crónico?\nActualmente las guías GOLD recomiendan:\nDoble broncodilatación:\n• LABA + LAMA.\nEjemplos:\n• Formoterol + tiotropio.\n• Indacaterol + glicopirronio.\n¿Cuándo agregar corticoide inhalado?\nEn pacientes con:\n• Exacerbaciones frecuentes.\n• Eosinofilia elevada.\n¿Cuál es la trampa del examen?\nMuchos estudiantes leen:\n\"PaO₂ 55.\"\nY responden:\nOxígeno al 100%.\nSin embargo:\nEl dato decisivo es:\nLa hipercapnia.\nEsto obliga a:\nOxigenoterapia controlada.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tReconocer exacerbación.\n2.\tAdministrar oxígeno titulado.\n3.\tBroncodilatadores de acción corta.\n4.\tCorticoides y antibióticos.\n5.\tOptimizar tratamiento crónico con LABA/LAMA.\nPerlas de examen\n✅ Los tres criterios de Anthonisen son: aumento de disnea, aumento del volumen del esputo y purulencia.\n✅ SatO₂ objetivo en EPOC: 88-92%.\n✅ La VNI disminuye mortalidad e intubación.\n✅ LABA/LAMA es la terapia de mantenimiento preferida en muchos pacientes GOLD B.\n✅ El oxígeno al 100% puede empeorar la hipercapnia.\n✅ Los corticosteroides sistémicos acortan la recuperación.\n✅ El abandono del tabaquismo es la medida más efectiva para modificar la progresión de la enfermedad.\nReferencias\n• GOLD Report 2025.\n• Harrison's Principles of Internal Medicine.\n• Murray & Nadel's Textbook of Respiratory Medicine.\n• UpToDate: Acute Exacerbations of COPD.\n• ERS/ATS Guidelines on COPD Exacerbations.",
    "statement": "Hombre de 64 años con diagnóstico de EPOC GOLD B en tratamiento con tiotropio consulta por aumento progresivo de la disnea, incremento del volumen del esputo y cambio a expectoración purulenta. Se encuentra consciente y orientado. La gasometría arterial evidencia hipercapnia con acidemia e hipoxemia.\n¿Cuál es el manejo inicial más apropiado y cuál sería el manejo crónico posterior?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Oxígeno suplementario, broncodilatadores de acción corta, corticosteroides sistémicos, antibióticos y posteriormente terapia dual LABA/LAMA."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Intubación orotraqueal inmediata y ventilación mecánica invasiva; posteriormente oxígeno domiciliario."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Antibióticos únicamente y continuar tiotropio como único tratamiento."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Oxígeno al 100% por mascarilla de no reinhalación y egreso con salbutamol inhalado."
      }
    ]
  },
  {
    "id": 171,
    "examArea": "MEDICINA INTERNA - URGENCIAS",
    "topic": "URGENCIAS",
    "slug": "urgencias",
    "difficulty": "hard",
    "correctOptionId": "A",
    "explanation": "El cuadro clínico es sugestivo de tromboembolismo pulmonar (TEP). En un paciente hemodinámicamente estable, el abordaje inicial consiste en estimar la probabilidad clínica (Wells o Ginebra). Si la probabilidad es baja o intermedia, debe solicitarse dímero D y confirmar posteriormente con angiotomografía pulmonar cuando esté indicado.",
    "keyPoints": [
      "Cuando veas: Dolor torácico súbito. Disnea aguda. Taquicardia. Estabilidad hemodinámica.",
      "Debes pensar en: Tromboembolismo pulmonar.",
      "Tema: Tromboembolismo pulmonar."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el algoritmo diagnóstico del TEP.\nLa clave no es el dolor torácico.\nLa clave es:\nLa combinación de disnea súbita y taquicardia.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Disnea aguda.\n• Dolor torácico.\n• Hipoxemia leve.\n• Taquicardia.\nEsto obliga a sospechar:\nTromboembolismo pulmonar.\n¿Qué debe hacerse primero?\nDeterminar:\nProbabilidad clínica.\nSi es baja o intermedia:\nSolicitar:\nDímero D.\nSi resulta positivo:\nRealizar:\nAngiotomografía pulmonar.\n¿Cuándo se tromboliza?\nSolo en:\nTEP de alto riesgo.\nEs decir:\n• Hipotensión.\n• Choque.\n• Inestabilidad hemodinámica.\nHallazgos ausentes en este caso.\n¿Por qué NO antibióticos?\nNo existen datos que sugieran:\nInfección respiratoria.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Disnea intensa.\"\nY responden:\nTrombólisis inmediata.\nSin embargo:\nEl dato decisivo es:\nLa estabilidad hemodinámica.\nEsto obliga primero a:\nConfirmar el diagnóstico.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tSospechar TEP.\n2.\tCalcular probabilidad clínica.\n3.\tSolicitar dímero D si corresponde.\n4.\tConfirmar con angiotomografía.\n5.\tIniciar anticoagulación según resultados.\nPerlas de examen\n✅ La angiotomografía pulmonar es el estudio diagnóstico de elección.\n✅ El dímero D tiene alto valor predictivo negativo.\n✅ La trombólisis se reserva para TEP de alto riesgo.\n✅ La taquicardia es uno de los hallazgos más frecuentes.\n✅ La radiografía de tórax puede ser normal.\n✅ El ECG puede mostrar taquicardia sinusal.\n✅ La estabilidad hemodinámica define gran parte del manejo inicial.\nReferencias\n• ESC Guidelines for Acute Pulmonary Embolism.\n• Harrison's Principles of Internal Medicine.\n• Tintinalli's Emergency Medicine.\n• UpToDate: Diagnosis of Acute Pulmonary Embolism.\n• Braunwald's Heart Disease.",
    "statement": "Hombre de 50 años consulta por dolor torácico súbito acompañado de disnea intensa de inicio reciente. Al examen físico se encuentra hemodinámicamente estable, con leve taquicardia y saturación de oxígeno de 93% al aire ambiente. Niega trauma reciente y no refiere antecedentes médicos de importancia.\n¿Cuál es el manejo inicial más apropiado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Solicitar dímero D y, si es positivo, realizar angiotomografía pulmonar."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar trombólisis sistémica inmediata."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Solicitar ecocardiograma transesofágico urgente."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar antibióticos de amplio espectro."
      }
    ]
  },
  {
    "id": 172,
    "examArea": "GASTROENTEROLOGÍA",
    "topic": "GASTROENTEROLOGÍA",
    "slug": "gastroenterologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "El sangrado activo en chorro corresponde a una lesión Forrest Ia, la categoría con mayor riesgo de resangrado. Requiere tratamiento endoscópico inmediato (inyección, termocoagulación o hemoclips) junto con inhibidores de bomba de protones intravenosos y reanimación hemodinámica.",
    "keyPoints": [
      "Cuando veas: Hematemesis. Melena. Úlcera con sangrado activo. Inestabilidad o hipovolemia.",
      "Debes pensar en: Forrest Ia.",
      "Tema: Hemorragia digestiva alta."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la clasificación de Forrest.\nLa clave no es la úlcera.\nLa clave es:\nEl tipo de sangrado observado en la endoscopia.\n¿Cómo se clasifica Forrest?\nForrest Ia:\n• Sangrado activo en chorro.\nForrest Ib:\n• Sangrado activo en babeo.\nForrest IIa:\n• Vaso visible no sangrante.\nForrest IIb:\n• Coágulo adherido.\nForrest IIc:\n• Mancha plana pigmentada.\nForrest III:\n• Base limpia.\n¿Qué tiene esta paciente?\nLa descripción clásica es:\nSangrado activo en chorro.\nPor tanto corresponde a:\nForrest Ia.\n¿Qué manejo requiere?\n1.\tReanimación hemodinámica.\n2.\tInhibidor de bomba de protones IV.\n3.\tEndoscopia terapéutica urgente.\n¿Qué IBP se utiliza?\nFrecuentemente:\n• Omeprazol IV.\n• Pantoprazol IV.\n¿Y Helicobacter pylori?\nDebe investigarse y erradicarse posteriormente.\nPero:\nNo es la prioridad inmediata.\n¿Cuál es la trampa del examen?\nMuchos estudiantes leen:\n\"Antecedente de H. pylori.\"\nY responden:\nErradicación antibiótica.\nSin embargo:\nEl dato decisivo es:\nEl sangrado activo.\nEsto obliga a:\nControl endoscópico urgente.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar hemorragia digestiva alta.\n2.\tRevisar clasificación Forrest.\n3.\tReconocer Forrest Ia.\n4.\tIniciar IBP IV.\n5.\tRealizar hemostasia endoscópica urgente.\nPerlas de examen\n✅ Forrest Ia = sangrado activo en chorro.\n✅ Forrest Ib = sangrado activo en babeo.\n✅ Forrest IIa = vaso visible.\n✅ Forrest IIb = coágulo adherido.\n✅ Forrest III = base limpia.\n✅ Forrest Ia tiene alto riesgo de resangrado.\n✅ La hemostasia endoscópica es el tratamiento de elección.\nReferencias\n• Sleisenger and Fordtran's Gastrointestinal Disease.\n• Harrison's Principles of Internal Medicine.\n• ESGE Guideline for Nonvariceal Upper GI Bleeding.\n• UpToDate: Peptic Ulcer Bleeding.\n• ASGE Guidelines on Upper Gastrointestinal Hemorrhage.",
    "statement": "Mujer de 45 años consulta por hematemesis abundante y melena de inicio reciente. Durante la valoración presenta signos clínicos de hipovolemia leve. Se realiza endoscopia digestiva alta que evidencia una úlcera duodenal con sangrado activo en chorro.\n¿Cuál es la clasificación de Forrest y cuál es el manejo inicial más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Forrest III; inhibidor de bomba de protones oral y egreso."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Forrest IIc; observación hospitalaria."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Forrest Ia; terapia endoscópica urgente asociada a inhibidor de bomba de protones intravenoso."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Forrest IIb; erradicación ambulatoria de Helicobacter pylori."
      }
    ]
  },
  {
    "id": 173,
    "examArea": "CIRUGÍA GENERAL",
    "topic": "CIRUGÍA GENERAL",
    "slug": "cirugia_general",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "La presencia de dolor abdominal súbito, abdomen en tabla y neumoperitoneo en una radiografía simple es altamente sugestiva de perforación de una víscera hueca, siendo la perforación de una úlcera péptica una de las causas más frecuentes.",
    "keyPoints": [
      "Cuando veas: Dolor epigástrico súbito. Abdomen rígido. Peritonitis. Aire libre subdiafragmático.",
      "Debes pensar en: Perforación de úlcera péptica.",
      "Tema: Abdomen agudo quirúrgico."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las urgencias quirúrgicas más importantes.\nLa clave no es el dolor.\nLa clave es:\nEl neumoperitoneo.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Dolor súbito.\n• Signos de peritonitis.\n• Aire libre intraperitoneal.\nEsto significa:\nPerforación de una víscera hueca.\n¿Cuál es la causa más frecuente en los exámenes?\nLa respuesta clásica es:\nÚlcera péptica perforada.\n¿Por qué aparece aire bajo el diafragma?\nPorque el contenido gaseoso del tubo digestivo:\nEscapa hacia la cavidad peritoneal.\nProduciendo:\nNeumoperitoneo.\n¿Qué hallazgo físico es característico?\nAbdomen en tabla.\nDebido a:\nIrritación peritoneal generalizada.\n¿Cuál es la conducta?\n• Reanimación inicial.\n• Antibióticos de amplio espectro.\n• Inhibidor de bomba de protones.\n• Valoración quirúrgica urgente.\n¿Por qué NO pancreatitis?\nLa pancreatitis puede producir:\nDolor epigástrico intenso.\nPero:\nNo produce neumoperitoneo.\n¿Por qué NO obstrucción intestinal?\nLa radiografía mostraría:\nNiveles hidroaéreos.\nNo aire libre subdiafragmático.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Dolor epigástrico.\"\nY responden:\nPancreatitis.\nSin embargo:\nEl dato decisivo es:\nEl aire libre subdiafragmático.\nEsto prácticamente confirma:\nPerforación de víscera hueca.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar dolor abdominal súbito.\n2.\tReconocer peritonitis.\n3.\tDetectar neumoperitoneo.\n4.\tDiagnosticar perforación de víscera hueca.\n5.\tPensar primero en úlcera péptica perforada.\nPerlas de examen\n✅ Aire libre subdiafragmático = neumoperitoneo hasta demostrar lo contrario.\n✅ La úlcera duodenal perforada es una causa clásica de abdomen agudo.\n✅ El abdomen rígido sugiere irritación peritoneal.\n✅ Es una urgencia quirúrgica.\n✅ La TAC es el estudio más sensible para detectar neumoperitoneo.\n✅ Deben iniciarse antibióticos de amplio espectro precozmente.\n✅ El retraso quirúrgico aumenta significativamente la mortalidad.\nReferencias\n• Schwartz's Principles of Surgery.\n• Sabiston Textbook of Surgery.\n• Harrison's Principles of Internal Medicine.\n• Tintinalli's Emergency Medicine.\n• UpToDate: Perforated Peptic Ulcer.",
    "statement": "Hombre de 50 años consulta por dolor abdominal súbito e intenso de inicio reciente. Al examen físico presenta abdomen rígido con signos de irritación peritoneal generalizada. Una radiografía en decúbito lateral evidencia aire libre subdiafragmático.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Pancreatitis aguda grave."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Colecistitis aguda complicada."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Perforación de úlcera péptica con neumoperitoneo."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Obstrucción intestinal mecánica."
      }
    ]
  },
  {
    "id": 174,
    "examArea": "GASTROENTEROLOGÍA",
    "topic": "GASTROENTEROLOGÍA",
    "slug": "gastroenterologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "En la pancreatitis aguda leve o moderada se recomienda reiniciar la alimentación enteral precoz una vez disminuyan las náuseas y el dolor, incluso dentro de las primeras 24-48 horas. La nutrición enteral reduce complicaciones infecciosas, estancia hospitalaria y mortalidad en comparación con la nutrición parenteral.",
    "keyPoints": [
      "Cuando veas: Pancreatitis aguda. Sin necrosis. Sin colecciones. Estabilidad clínica.",
      "Debes pensar en: Nutrición enteral temprana.",
      "Tema: Pancreatitis aguda."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los cambios más importantes en el manejo moderno de la pancreatitis.\nLa clave no es la lipasa.\nLa clave es:\nLa ausencia de complicaciones locales.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Pancreatitis aguda.\n• TAC sin necrosis.\n• Sin colecciones.\n• Sin falla orgánica.\nEsto corresponde a:\nPancreatitis aguda leve.\n¿Qué se hacía antes?\nDurante años se indicaba:\nAyuno prolongado.\nEsperando:\nNormalización de enzimas.\nActualmente esto es incorrecto.\n¿Qué recomiendan las guías?\nAlimentación enteral temprana.\nTan pronto como el paciente la tolere.\n¿Por qué?\nPorque:\n• Preserva la barrera intestinal.\n• Disminuye translocación bacteriana.\n• Reduce infecciones.\n• Disminuye estancia hospitalaria.\n¿Es necesario esperar que la lipasa se normalice?\nNo.\nLa evolución clínica es más importante que:\nLos valores enzimáticos.\n¿Cuándo usar nutrición parenteral?\nSolo cuando:\nLa vía enteral no sea posible o esté contraindicada.\n¿Cuál es la trampa de examen?\nMuchos estudiantes recuerdan:\n\"Pancreatitis = ayuno.\"\nSin embargo:\nLas guías actuales recomiendan:\nRealimentación temprana.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tDiagnosticar pancreatitis.\n2.\tClasificar gravedad.\n3.\tEvaluar tolerancia gastrointestinal.\n4.\tReiniciar vía enteral precozmente.\n5.\tReservar nutrición parenteral para casos seleccionados.\nPerlas de examen\n✅ La nutrición enteral es superior a la nutrición parenteral.\n✅ No es necesario esperar la normalización de amilasa o lipasa.\n✅ La alimentación oral temprana es segura en pancreatitis leve.\n✅ La nutrición enteral disminuye complicaciones infecciosas.\n✅ El ayuno prolongado ya no se recomienda de rutina.\n✅ La pancreatitis intersticial tiene mejor pronóstico que la necrotizante.\n✅ La hidratación intravenosa temprana sigue siendo fundamental.\nReferencias\n• American College of Gastroenterology Guidelines on Acute Pancreatitis.\n• IAP/APA Evidence-Based Guidelines.\n• Harrison's Principles of Internal Medicine.\n• Sleisenger and Fordtran's Gastrointestinal Disease.\n• UpToDate: Nutrition Support in Acute Pancreatitis.",
    "statement": "Mujer de 60 años consulta por dolor epigástrico intenso irradiado a la espalda, asociado a náuseas y múltiples episodios de vómito. Refiere intolerancia completa a la vía oral durante las últimas 24 horas. Los estudios muestran elevación significativa de lipasa sérica y tomografía compatible con pancreatitis aguda intersticial sin necrosis ni colecciones.\n¿Cuál es la orden médica más adecuada respecto al soporte nutricional?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Mantener ayuno absoluto hasta normalización de la lipasa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar nutrición parenteral total de forma temprana."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Reiniciar alimentación enteral temprana tan pronto sea tolerada."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Mantener ayuno durante 7 días y repetir tomografía."
      }
    ]
  },
  {
    "id": 175,
    "examArea": "HEMATOLOGÍA",
    "topic": "HEMATOLOGÍA",
    "slug": "hematologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La combinación de anemia microcítica, ferritina baja y TIBC elevada es característica de anemia ferropénica. En hombres adultos debe considerarse pérdida crónica de sangre gastrointestinal hasta demostrar lo contrario, por lo que además de corregir el déficit de hierro debe investigarse la causa subyacente.",
    "keyPoints": [
      "Cuando veas: VCM bajo. Ferritina baja. TIBC elevada. Adulto masculino.",
      "Debes pensar en: Anemia ferropénica por sangrado gastrointestinal oculto.",
      "Tema: Anemias microcíticas."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la interpretación del perfil férrico.\nLa clave no es la hemoglobina.\nLa clave es:\nLa ferritina.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Hb 9 g/dL.\n• VCM 78 fL.\n• Ferritina baja.\n• TIBC elevada.\nEsto corresponde a:\nAnemia ferropénica.\n¿Qué significa una ferritina baja?\nDisminución de:\nLas reservas corporales de hierro.\nEs el marcador más específico de:\nDeficiencia de hierro.\n¿Por qué el TIBC está elevado?\nPorque el organismo intenta:\nCaptar más hierro circulante.\n¿Qué causa debe sospecharse en un hombre adulto?\nLa respuesta clásica de examen es:\nSangrado gastrointestinal crónico.\nHasta demostrar lo contrario.\n¿Qué estudios deben solicitarse?\nHabitualmente:\n• Colonoscopia.\n• Endoscopia digestiva alta.\nSegún el contexto clínico.\n¿Cuál es el tratamiento inicial?\n• Hierro oral.\n• Corrección de la causa subyacente.\n¿Por qué NO transfundir?\nPorque una Hb de 9 g/dL en un paciente estable:\nNo constituye indicación rutinaria de transfusión.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Anemia microcítica.\"\nY responden:\nTalasemia.\nSin embargo:\nEl dato decisivo es:\nFerritina baja + TIBC elevada.\nPatrón clásico de:\nFerropenia.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar anemia microcítica.\n2.\tRevisar ferritina.\n3.\tConfirmar ferropenia.\n4.\tBuscar la causa.\n5.\tIniciar hierro y corregir el origen del sangrado.\nPerlas de examen\n✅ Ferritina baja es el hallazgo más específico de ferropenia.\n✅ TIBC elevada es característica de anemia ferropénica.\n✅ En hombres y mujeres posmenopáusicas debe descartarse sangrado digestivo.\n✅ La anemia ferropénica es la causa más frecuente de anemia en el mundo.\n✅ El VCM suele disminuir progresivamente.\n✅ La ferritina puede elevarse falsamente en estados inflamatorios.\n✅ El tratamiento debe corregir la deficiencia y la causa subyacente.\nReferencias\n• Harrison's Principles of Internal Medicine.\n• Williams Hematology.\n• Hoffbrand's Essential Haematology.\n• UpToDate: Iron Deficiency Anemia in Adults.\n• British Society of Gastroenterology Guidelines on Iron Deficiency Anemia.",
    "statement": "Hombre de 45 años consulta por fatiga progresiva, disnea de esfuerzo y disminución de la tolerancia al ejercicio. Los exámenes muestran hemoglobina de 9 g/dL, volumen corpuscular medio (VCM) de 78 fL, ferritina disminuida y capacidad total de fijación de hierro (TIBC) elevada.\n¿Cuál es el diagnóstico más probable, la etiología más frecuente y el manejo inicial adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Anemia de enfermedad crónica; proceso inflamatorio; eritropoyetina."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Anemia ferropénica; pérdida crónica de sangre gastrointestinal; suplementación con hierro y estudio de la fuente de sangrado."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Talasemia menor; trastorno hereditario; transfusión sanguínea."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Anemia hemolítica autoinmune; destrucción eritrocitaria; corticosteroides."
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
const startMatch = content.match(/  \{\r?\n    id: "dr-q-166"/);
const endMatch = content.match(/  \{\r?\n    id: "dr-q-176"/);
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
console.log(`Patched dr-q-166 through dr-q-175 (${questions.length} questions) in ${coexamPath}`);
