import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coexamPath = path.join(__dirname, "../src/data/dr-q-coexam-questions.ts");

const questions = [
  {
    "id": 166,
    "examArea": "GASTROENTEROLOGÍA",
    "topic": "GASTROENTEROLOGÍA",
    "slug": "gastroenterologia",
    "difficulty": "medium",
    "statement": "Un hombre de 60 años con antecedente de colitis ulcerosa extensa de 15 años de evolución consulta para conocer su riesgo de desarrollar cáncer colorrectal y las estrategias disponibles para su prevención. Refiere encontrarse en remisión clínica durante los últimos 3 años. No presenta antecedentes personales de displasia ni cáncer colorrectal.\n¿Cuál de las siguientes afirmaciones es correcta?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "La colitis ulcerosa sólo se asocia a un incremento en el riesgo de cáncer colorrectal en fumadores."
      },
      {
        "id": "B",
        "label": "B",
        "text": "En su caso, dado que está en remisión de larga duración, se considera adecuado el tamizaje aconsejado a la población general."
      },
      {
        "id": "C",
        "label": "C",
        "text": "En casos como el suyo se considera adecuado someterse a colonoscopia con cromoendoscopia y biopsias dirigidas a zonas sospechosas de malignidad."
      },
      {
        "id": "D",
        "label": "D",
        "text": "En casos como el suyo se considera adecuado el tamizaje mediante estudios periódicos de sangre oculta en heces, pero con una frecuencia superior a la utilizada en la población general."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Los pacientes con colitis ulcerosa extensa y larga evolución presentan un riesgo aumentado de desarrollar cáncer colorrectal. Las guías actuales recomiendan programas de vigilancia endoscópica mediante colonoscopia con cromoendoscopia y toma de biopsias dirigidas para detectar displasia precozmente.",
    "keyPoints": [
      "Cuando veas: Colitis ulcerosa extensa. Más de 8 años de evolución. Vigilancia de cáncer colorrectal. Prevención secundaria.",
      "Debes pensar en: Colonoscopia periódica con cromoendoscopia.",
      "Tema: Vigilancia de cáncer colorrectal en colitis ulcerosa."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa las estrategias de vigilancia del cáncer colorrectal en pacientes con enfermedad inflamatoria intestinal.\nLa clave no es la remisión clínica.\nLa clave es:\nLa extensión y duración de la enfermedad.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Colitis ulcerosa extensa.\n• 15 años de evolución.\n• Remisión clínica actual.\nEstos pacientes tienen:\nMayor riesgo acumulado de desarrollar displasia y cáncer colorrectal.\n¿Por qué aumenta el riesgo?\nLa inflamación crónica mantenida favorece:\n• Daño epitelial persistente.\n• Inestabilidad genética.\n• Aparición de displasia.\n• Progresión a cáncer colorrectal.\nEl riesgo depende principalmente de:\n• Duración de la enfermedad.\n• Extensión del compromiso colónico.\n• Grado de inflamación.\n• Presencia de colangitis esclerosante primaria.\n• Antecedentes familiares de cáncer colorrectal.\n¿Por qué la cromoendoscopia es la estrategia recomendada?\nLa cromoendoscopia mejora la detección de:\n• Displasia plana.\n• Lesiones sutiles.\n• Áreas sospechosas de transformación neoplásica.\nPermite además:\nRealizar biopsias dirigidas con mayor rendimiento diagnóstico.\nPor ello constituye la estrategia preferida en la vigilancia moderna de pacientes con colitis ulcerosa de larga evolución.\n¿Por qué NO es suficiente el tamizaje de la población general?\nPorque el riesgo del paciente es:\nSignificativamente superior al de una persona sin enfermedad inflamatoria intestinal.\nPor esta razón requiere:\nProtocolos específicos de vigilancia.\n¿Por qué NO sirve la sangre oculta en heces?\nLas pruebas de sangre oculta pueden utilizarse en programas poblacionales.\nSin embargo:\nNo sustituyen la vigilancia endoscópica en pacientes con colitis ulcerosa.\nLa detección de displasia requiere:\nEvaluación directa de la mucosa colónica.\n¿Por qué la opción A es falsa?\nLa colitis ulcerosa aumenta el riesgo de cáncer colorrectal independientemente del hábito tabáquico.\nEl tabaquismo no condiciona la indicación de vigilancia.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Remisión clínica durante 3 años.\"\nY concluyen:\n\"El riesgo desapareció.\"\nSin embargo:\nEl riesgo está determinado principalmente por la duración y extensión de la enfermedad.\nLa remisión clínica no elimina la necesidad de vigilancia endoscópica.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar colitis ulcerosa extensa.\n2.\tEvaluar duración de la enfermedad.\n3.\tReconocer aumento del riesgo de cáncer colorrectal.\n4.\tIndicar vigilancia endoscópica especializada.\n5.\tUtilizar cromoendoscopia con biopsias dirigidas.\nPerlas de examen\n✅ La colitis ulcerosa extensa de larga evolución aumenta el riesgo de cáncer colorrectal.\n✅ La vigilancia suele iniciarse después de varios años de evolución de la enfermedad.\n✅ La cromoendoscopia mejora la detección de displasia.\n✅ Las biopsias dirigidas tienen mayor rendimiento diagnóstico.\n✅ La remisión clínica no elimina el riesgo de neoplasia.\n✅ La colonoscopia es superior a las pruebas de sangre oculta para vigilancia en estos pacientes.\n✅ La detección precoz de displasia modifica significativamente el pronóstico.\nReferencias\n• ECCO Guidelines on Colorectal Carcinoma Surveillance in Inflammatory Bowel Disease.\n• American College of Gastroenterology Clinical Guidelines.\n• British Society of Gastroenterology Guidelines for IBD Surveillance.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Colorectal Cancer Surveillance in Patients with Inflammatory Bowel Disease."
  },
  {
    "id": 167,
    "examArea": "HEMATOLOGÍA",
    "topic": "HEMATOLOGÍA",
    "slug": "hematologia",
    "difficulty": "medium",
    "statement": "Mujer de 28 años consulta por fatiga progresiva, disnea de medianos esfuerzos y disminución de la tolerancia al ejercicio. Refiere antecedentes de metrorragias abundantes desde hace varios meses. Los estudios de laboratorio confirman anemia ferropénica secundaria a pérdida crónica de sangre.\n¿Cuál de los siguientes parámetros se espera encontrar aumentado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Concentración de ferritina en suero."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Concentración de hemoglobina en reticulocitos."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Volumen corpuscular medio de los hematíes."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Concentración de transferrina en suero."
      }
    ],
    "correctOptionId": "D",
    "explanation": "La anemia ferropénica se caracteriza por disminución de los depósitos corporales de hierro. Como mecanismo compensatorio, el hígado aumenta la síntesis de transferrina para maximizar la captación y el transporte del hierro disponible.",
    "keyPoints": [
      "Cuando veas: Anemia ferropénica. Pérdidas sanguíneas crónicas. Metrorragia. Déficit de hierro.",
      "Debes pensar en: Aumento de transferrina y disminución de ferritina.",
      "Tema: Anemia ferropénica."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa los cambios característicos del metabolismo del hierro en la anemia ferropénica.\nLa clave no es la anemia.\nLa clave es:\nEl comportamiento de los marcadores del hierro.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Pérdidas sanguíneas crónicas.\n• Depleción progresiva de hierro.\n• Disminución de reservas corporales.\nComo consecuencia:\nSe desarrolla anemia ferropénica.\n¿Qué ocurre con la ferritina?\nLa ferritina refleja:\nLos depósitos corporales de hierro.\nEn la anemia ferropénica:\nLa ferritina disminuye.\nPor ello:\nLa opción A es incorrecta.\n¿Qué ocurre con la transferrina?\nLa transferrina es la principal proteína transportadora de hierro.\nCuando el hierro corporal disminuye:\nEl hígado incrementa la síntesis de transferrina.\nEl objetivo es:\nOptimizar la captación y distribución del hierro disponible.\nPor tanto:\nLa transferrina aumenta.\n¿Qué ocurre con el volumen corpuscular medio?\nLa anemia ferropénica produce:\nMicrocitosis.\nPor ello:\nEl volumen corpuscular medio (VCM) disminuye.\nLa opción C es incorrecta.\n¿Qué ocurre con la hemoglobina reticulocitaria?\nLa hemoglobina de los reticulocitos refleja el hierro disponible para la eritropoyesis.\nEn la deficiencia de hierro:\nTiende a disminuir.\nPor ello:\nLa opción B es incorrecta.\n¿Cuáles son los hallazgos clásicos de laboratorio?\nEn anemia ferropénica se observa:\n• Ferritina disminuida.\n• Hierro sérico disminuido.\n• Saturación de transferrina disminuida.\n• Capacidad total de fijación del hierro aumentada.\n• Transferrina aumentada.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Anemia.\"\nY buscan parámetros relacionados con la producción de eritrocitos.\nSin embargo:\nLa pregunta está evaluando específicamente el metabolismo del hierro.\nEl dato decisivo es:\nDéficit de hierro secundario a pérdidas crónicas.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar la anemia ferropénica.\n2.\tReconocer disminución de depósitos de hierro.\n3.\tRecordar que la ferritina disminuye.\n4.\tRecordar que la transferrina aumenta.\n5.\tIdentificar el patrón bioquímico característico.\nPerlas de examen\n✅ La ferritina es el mejor marcador de depósitos corporales de hierro.\n✅ La transferrina aumenta en la anemia ferropénica.\n✅ El VCM suele estar disminuido por microcitosis.\n✅ La saturación de transferrina disminuye.\n✅ La capacidad total de fijación del hierro aumenta.\n✅ La metrorragia es una causa frecuente de anemia ferropénica en mujeres jóvenes.\n✅ La ferritina baja prácticamente confirma deficiencia de hierro en ausencia de inflamación.\nReferencias\n• Harrison's Principles of Internal Medicine.\n• Hoffbrand's Essential Haematology.\n• Williams Hematology.\n• British Society for Haematology Guidelines.\n• UpToDate: Causes and Diagnosis of Iron Deficiency and Iron Deficiency Anemia in Adults."
  },
  {
    "id": 168,
    "examArea": "HEMATOLOGÍA",
    "topic": "HEMATOLOGÍA",
    "slug": "hematologia",
    "difficulty": "medium",
    "statement": "Hombre de 65 años, sin antecedentes médicos de importancia, consulta por astenia y adinamia de varios meses de evolución. Refiere no haber tenido seguimiento médico en los últimos años. Al examen físico presenta palidez conjuntival, sin otros hallazgos relevantes. Se realiza hemograma que reporta: hemoglobina 9.9 g/dL, hematocrito 29%, volumen corpuscular medio (VCM) 75 fL y RDW 19%.\n¿Cuál de los siguientes sería el paso inicial más apropiado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Tacto rectal y programar colonoscopia."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Espirometría y programar broncoscopia."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Medir haptoglobina y realizar prueba de Coombs."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Medir vitamina B12 y programar biopsia de médula ósea."
      }
    ],
    "correctOptionId": "A",
    "explanation": "El paciente presenta una anemia microcítica con anisocitosis, hallazgos altamente sugestivos de anemia ferropénica. En hombres mayores de 50 años, la principal causa que debe descartarse es pérdida crónica de sangre por cáncer colorrectal hasta demostrar lo contrario.",
    "keyPoints": [
      "Cuando veas: Hombre mayor de 50 años. Anemia microcítica. RDW elevado. Sin causa evidente de pérdida sanguínea.",
      "Debes pensar en: Sangrado gastrointestinal oculto y descartar cáncer colorrectal.",
      "Tema: Anemia ferropénica en el adulto mayor."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el abordaje diagnóstico de la anemia ferropénica en adultos mayores.\nLa clave no es la hemoglobina.\nLa clave es:\nLa microcitosis en un hombre de edad avanzada.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Anemia.\n• VCM disminuido.\n• RDW elevado.\n• Palidez conjuntival.\nEste patrón es altamente sugestivo de:\nAnemia ferropénica.\n¿Qué indica el RDW elevado?\nEl RDW refleja:\nVariabilidad en el tamaño de los eritrocitos.\nEn la anemia ferropénica suele encontrarse:\nAumentado.\nEsto ocurre por la coexistencia de hematíes normales y microcíticos.\n¿Por qué pensar en sangrado gastrointestinal?\nEn hombres y mujeres posmenopáusicas:\nLa ferropenia debe considerarse secundaria a pérdida sanguínea gastrointestinal hasta demostrar lo contrario.\nLas causas más importantes incluyen:\n• Cáncer colorrectal.\n• Adenomas avanzados.\n• Angiodisplasias.\n• Úlceras gastrointestinales.\n¿Por qué la colonoscopia es prioritaria?\nPorque permite:\n• Identificar lesiones sangrantes.\n• Diagnosticar cáncer colorrectal.\n• Detectar pólipos avanzados.\n• Establecer tratamiento oportuno.\nLa evaluación digestiva forma parte del estudio inicial de estos pacientes.\n¿Por qué NO realizar broncoscopia?\nNo existen datos que sugieran:\n• Hemoptisis.\n• Enfermedad pulmonar.\n• Sangrado respiratorio.\nAdemás:\nLa anemia es microcítica, orientando inicialmente hacia déficit de hierro.\n¿Por qué NO solicitar haptoglobina y Coombs?\nEstos estudios se utilizan para investigar:\nAnemia hemolítica.\nLa hemólisis típicamente produce:\n• Reticulocitosis.\n• LDH elevada.\n• Bilirrubina indirecta elevada.\nNo suele producir microcitosis.\n¿Por qué NO medir vitamina B12?\nLa deficiencia de vitamina B12 genera:\nAnemia macrocítica.\nEl paciente presenta:\nVCM de 75 fL.\nPor lo tanto:\nNo corresponde al patrón esperado.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"Anemia.\"\nY buscan estudios hematológicos complejos.\nSin embargo:\nEl dato decisivo es:\nMicrocitosis en un hombre de 65 años.\nHasta demostrar lo contrario debe asumirse pérdida crónica de sangre gastrointestinal.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar anemia microcítica.\n2.\tSospechar ferropenia.\n3.\tBuscar pérdidas sanguíneas ocultas.\n4.\tPriorizar estudio gastrointestinal.\n5.\tDescartar cáncer colorrectal.\nPerlas de examen\n✅ La causa más importante de ferropenia en hombres mayores es el sangrado gastrointestinal oculto.\n✅ El cáncer colorrectal debe descartarse en todo adulto mayor con anemia ferropénica.\n✅ El VCM disminuido orienta hacia ferropenia.\n✅ El RDW suele estar elevado en la anemia ferropénica.\n✅ La colonoscopia forma parte del estudio inicial.\n✅ La hemólisis generalmente no produce anemia microcítica.\n✅ La deficiencia de vitamina B12 produce anemia macrocítica.\nReferencias\n• Harrison's Principles of Internal Medicine.\n• Williams Hematology.\n• British Society of Gastroenterology Guidelines for Iron Deficiency Anaemia.\n• American Gastroenterological Association Clinical Practice Guidelines.\n• UpToDate: Evaluation of Iron Deficiency Anemia in Adults."
  },
  {
    "id": 169,
    "examArea": "CARDIOLOGÍA",
    "topic": "CARDIOLOGÍA",
    "slug": "cardiologia",
    "difficulty": "medium",
    "statement": "Con respecto a los mecanismos fisiopatológicos de las taquiarritmias, señale cuál de las siguientes NO se explica por un mecanismo de reentrada:",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Flutter o aleteo auricular."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Taquicardia ventricular polimórfica tipo torsade de pointes."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Taquicardia auriculoventricular recíproca en el síndrome de Wolff-Parkinson-White."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Taquicardias asociadas a defectos del tabique interauricular."
      }
    ],
    "correctOptionId": "B",
    "explanation": "La torsade de pointes es una taquicardia ventricular polimórfica asociada a prolongación del intervalo QT y se produce principalmente por actividad desencadenada secundaria a posdespolarizaciones tempranas (early afterdepolarizations), no por mecanismos de reentrada.",
    "keyPoints": [
      "Cuando veas: QT prolongado. Torsade de pointes. Taquicardia ventricular polimórfica. Posdespolarizaciones tempranas.",
      "Debes pensar en: Actividad desencadenada y no en reentrada.",
      "Tema: Mecanismos electrofisiológicos de las arritmias."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa los principales mecanismos responsables de las arritmias cardíacas.\nLa clave no es la taquicardia.\nLa clave es:\nEl mecanismo electrofisiológico que la produce.\n¿Qué mecanismos producen las arritmias?\nLas arritmias pueden originarse por:\n• Reentrada.\n• Automatismo aumentado.\n• Actividad desencadenada.\nLa mayoría de las taquicardias supraventriculares clínicas se producen por:\nMecanismos de reentrada.\n¿Qué es la reentrada?\nLa reentrada ocurre cuando un impulso eléctrico circula repetidamente a través de un circuito anatómico o funcional.\nEsto genera:\nActivación continua del tejido cardíaco.\nEs el mecanismo responsable de numerosas taquicardias.\n¿Por qué el flutter auricular es una arritmia por reentrada?\nEl flutter auricular típico se origina por:\nUn circuito macrorreentrante en la aurícula derecha.\nGeneralmente dependiente del:\nIstmo cavotricuspídeo.\nPor esta razón:\nLa opción A es verdadera.\n¿Por qué la taquicardia del síndrome de Wolff-Parkinson-White es una arritmia por reentrada?\nEn la taquicardia auriculoventricular recíproca existe:\n• Una vía normal de conducción.\n• Una vía accesoria.\nEl impulso circula entre ambas estructuras formando:\nUn circuito de reentrada.\nPor ello:\nLa opción C es verdadera.\n¿Por qué las taquicardias asociadas a defectos del tabique interauricular suelen ser por reentrada?\nLos pacientes con defectos septales auriculares presentan:\n• Dilatación auricular.\n• Remodelado eléctrico.\n• Circuitos de macrorreentrada.\nEsto favorece especialmente:\n• Flutter auricular.\n• Taquicardias auriculares por reentrada.\nPor lo tanto:\nLa opción D es verdadera.\n¿Por qué la torsade de pointes NO es una arritmia por reentrada?\nLa torsade de pointes aparece en presencia de:\n• QT prolongado.\n• Alteraciones electrolíticas.\n• Fármacos que prolongan la repolarización.\n• Síndromes congénitos del QT largo.\nSu mecanismo principal es:\nPosdespolarizaciones tempranas.\nEstas generan:\nActividad desencadenada.\nNo existe un circuito reentrante como mecanismo primario.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"Taquicardia ventricular.\"\nY asumen:\n\"Todas las taquicardias son por reentrada.\"\nSin embargo:\nLa torsade de pointes es una excepción clásica.\nEl dato decisivo es:\nLa prolongación del QT y las posdespolarizaciones tempranas.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar el tipo de arritmia.\n2.\tAnalizar el mecanismo electrofisiológico.\n3.\tReconocer cuáles dependen de reentrada.\n4.\tIdentificar las asociadas a actividad desencadenada.\n5.\tRecordar que la torsade de pointes se produce por posdespolarizaciones tempranas.\nPerlas de examen\n✅ El flutter auricular típico es una macrorreentrada auricular.\n✅ La taquicardia auriculoventricular recíproca del WPW es una arritmia por reentrada.\n✅ La torsade de pointes se asocia a QT prolongado.\n✅ Las posdespolarizaciones tempranas son el mecanismo principal de la torsade de pointes.\n✅ La hipocalemia y la hipomagnesemia favorecen su aparición.\n✅ Numerosos medicamentos pueden prolongar el QT.\n✅ La torsade de pointes puede degenerar en fibrilación ventricular y muerte súbita.\nReferencias\n• Braunwald's Heart Disease.\n• ESC Guidelines for the Management of Ventricular Arrhythmias.\n• ACC/AHA/HRS Guideline for Management of Arrhythmias.\n• UpToDate: Acquired Long QT Syndrome and Torsades de Pointes.\n• Zipes and Jalife's Cardiac Electrophysiology."
  },
  {
    "id": 170,
    "examArea": "CARDIOLOGÍA",
    "topic": "CARDIOLOGÍA",
    "slug": "cardiologia",
    "difficulty": "medium",
    "statement": "Paciente de 60 años con antecedente de síndrome coronario agudo consulta al servicio de urgencias por palpitaciones y deterioro del estado general. El electrocardiograma muestra una taquicardia regular de complejo ancho con duración del QRS mayor de 0.20 segundos. Al examen físico presenta presión arterial de 70/40 mmHg, diaforesis, piel fría y desorientación.\n¿Cuál es el tratamiento de elección?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Lidocaína intravenosa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Amiodarona intravenosa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Procainamida intravenosa."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Cardioversión eléctrica urgente."
      }
    ],
    "correctOptionId": "D",
    "explanation": "El paciente presenta una taquicardia de complejo ancho asociada a inestabilidad hemodinámica manifestada por hipotensión y alteración del estado mental. En este contexto, la conducta inmediata indicada es la cardioversión eléctrica sincronizada urgente.",
    "keyPoints": [
      "Cuando veas: Taquicardia de complejo ancho. Hipotensión. Alteración del estado mental. Signos de choque.",
      "Debes pensar en: Cardioversión eléctrica inmediata.",
      "Tema: Taquicardia inestable."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los algoritmos más importantes de urgencias cardiovasculares.\nLa clave no es el antecedente coronario.\nLa clave es:\nLa inestabilidad hemodinámica.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Taquicardia de complejo ancho.\n• Hipotensión severa.\n• Alteración del estado de conciencia.\n• Hipoperfusión sistémica.\nEsto corresponde a:\nTaquiarritmia inestable.\n¿Qué significa que esté inestable?\nLas guías consideran inestabilidad cuando existe:\n• Hipotensión.\n• Alteración del estado mental.\n• Choque.\n• Dolor torácico isquémico.\n• Insuficiencia cardíaca aguda.\nEste paciente presenta:\nHipotensión y compromiso neurológico.\nPor lo tanto:\nLa conducta debe ser inmediata.\n¿Por qué la cardioversión es el tratamiento de elección?\nLa cardioversión sincronizada:\n• Restablece rápidamente el ritmo organizado.\n• Mejora el gasto cardíaco.\n• Corrige la hipoperfusión.\n• Disminuye el riesgo de paro cardíaco.\nEn pacientes inestables:\nNo debe retrasarse por administración de antiarrítmicos.\n¿Por qué NO administrar amiodarona?\nLa amiodarona es útil en:\nTaquicardias estables.\nSin embargo:\nSu inicio de acción es más lento que la cardioversión eléctrica.\nEn presencia de choque o hipotensión:\nNo es el tratamiento inicial.\n¿Por qué NO administrar procainamida?\nLa procainamida puede emplearse en ciertas taquicardias de complejo ancho estables.\nPero:\nEstá contraindicada o debe evitarse en pacientes con inestabilidad hemodinámica.\n¿Por qué NO administrar lidocaína?\nLa lidocaína puede utilizarse en algunas taquicardias ventriculares.\nSin embargo:\nNo sustituye la cardioversión en pacientes inestables.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"Taquicardia ventricular.\"\nY buscan inmediatamente:\nUn antiarrítmico.\nSin embargo:\nAntes de identificar el fármaco, debe evaluarse la estabilidad hemodinámica.\nEl dato decisivo es:\nTA 70/40 mmHg y desorientación.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar la taquicardia.\n2.\tEvaluar estabilidad hemodinámica.\n3.\tBuscar hipotensión o alteración del estado mental.\n4.\tReconocer la inestabilidad.\n5.\tRealizar cardioversión sincronizada urgente.\nPerlas de examen\n✅ Toda taquicardia con hipotensión debe considerarse inestable hasta demostrar lo contrario.\n✅ La alteración del estado mental es un criterio de inestabilidad hemodinámica.\n✅ La cardioversión sincronizada es el tratamiento de elección en taquiarritmias inestables con pulso.\n✅ Los antiarrítmicos se reservan principalmente para pacientes estables.\n✅ Ante una taquicardia de complejo ancho debe asumirse taquicardia ventricular hasta demostrar lo contrario.\n✅ La demora en la cardioversión aumenta el riesgo de deterioro clínico.\n✅ La evaluación de la estabilidad hemodinámica precede a la clasificación detallada de la arritmia.\nReferencias\n• ACLS Provider Manual – American Heart Association.\n• ACC/AHA/HRS Guideline for the Management of Ventricular Arrhythmias.\n• ESC Guidelines for the Management of Supraventricular Tachycardia.\n• Braunwald's Heart Disease.\n• UpToDate: Emergency Treatment of Sustained Ventricular Tachycardia."
  },
  {
    "id": 171,
    "examArea": "CARDIOLOGÍA",
    "topic": "CARDIOLOGÍA",
    "slug": "cardiologia",
    "difficulty": "hard",
    "statement": "Paciente de 76 años con antecedentes de hipertensión arterial y diabetes mellitus consulta al servicio de urgencias por cuadro de 72 horas de evolución consistente en palpitaciones y disminución progresiva de la tolerancia al esfuerzo. A su llegada se documenta fibrilación auricular con respuesta ventricular aproximada de 120 lpm. Se encuentra hemodinámicamente estable.\n¿Cuál de las siguientes afirmaciones es FALSA?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Este paciente debe estar anticoagulado oralmente de por vida, salvo contraindicación."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Si decidimos realizar una cardioversión a su llegada a urgencias, sería necesario realizar previamente una ecocardiografía transesofágica."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Al ser el primer episodio de fibrilación auricular es el candidato idóneo para realizar una ablación con catéter."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Para controlar la frecuencia cardíaca podrían emplearse betabloqueantes."
      }
    ],
    "correctOptionId": "C",
    "explanation": "La ablación con catéter no constituye el manejo inicial rutinario de un primer episodio de fibrilación auricular. La indicación depende de múltiples factores clínicos, persistencia de síntomas, recurrencias y respuesta al tratamiento médico.",
    "keyPoints": [
      "Cuando veas: Fibrilación auricular. Paciente anciano. Hipertensión arterial. Diabetes mellitus. Duración mayor de 48 horas.",
      "Debes pensar en: Anticoagulación, control de frecuencia y valoración cuidadosa antes de cardioversión.",
      "Tema: Fibrilación auricular."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa los principios fundamentales del manejo de la fibrilación auricular.\nLa clave no es la frecuencia cardíaca.\nLa clave es:\nLa duración de la arritmia y el riesgo tromboembólico.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Fibrilación auricular.\n• Duración aproximada de 72 horas.\n• Edad avanzada.\n• Hipertensión arterial.\n• Diabetes mellitus.\nEstos factores aumentan significativamente:\nEl riesgo de eventos tromboembólicos.\n¿Cuál es el riesgo tromboembólico?\nUtilizando la escala CHA₂DS₂-VASc:\n• Edad ≥75 años = 2 puntos.\n• Hipertensión arterial = 1 punto.\n• Diabetes mellitus = 1 punto.\nPuntaje total:\n4 puntos.\nEsto implica:\nAlto riesgo de accidente cerebrovascular.\n¿Por qué la anticoagulación es correcta?\nLas guías actuales recomiendan:\nAnticoagulación oral crónica en pacientes con CHA₂DS₂-VASc elevado.\nSalvo contraindicación:\nEl beneficio supera claramente el riesgo hemorrágico.\nPor ello:\nLa opción A es verdadera.\n¿Por qué es necesaria la ecocardiografía transesofágica antes de cardioversión?\nLa fibrilación auricular tiene:\nMás de 48 horas de evolución.\nEn estos casos existe riesgo de:\nTrombos en la aurícula izquierda o en la orejuela auricular izquierda.\nLa ecocardiografía transesofágica permite:\nDescartar trombos antes de realizar cardioversión temprana.\nPor ello:\nLa opción B es verdadera.\n¿Por qué los betabloqueantes son apropiados?\nLos betabloqueantes constituyen uno de los pilares para:\n• Control de frecuencia ventricular.\n• Mejoría sintomática.\n• Reducción de la respuesta ventricular rápida.\nPor lo tanto:\nLa opción D es verdadera.\n¿Por qué la ablación NO es la mejor respuesta?\nLa ablación con catéter puede considerarse en:\n• Pacientes sintomáticos.\n• Episodios recurrentes.\n• Fracaso o intolerancia al tratamiento farmacológico.\n• Estrategias seleccionadas de control del ritmo.\nSin embargo:\nEl hecho de tratarse de un primer episodio no convierte automáticamente al paciente en candidato ideal para ablación.\nPor ello:\nLa afirmación es falsa.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Primer episodio de fibrilación auricular.\"\nY concluyen:\n\"Debe corregirse definitivamente con ablación.\"\nSin embargo:\nEl manejo inicial suele centrarse en:\n• Anticoagulación.\n• Control de frecuencia.\n• Estrategias individualizadas de control del ritmo.\nEl dato decisivo es:\nLa fibrilación auricular de 72 horas de evolución en un paciente de alto riesgo tromboembólico.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tConfirmar fibrilación auricular.\n2.\tEstimar duración del episodio.\n3.\tCalcular riesgo tromboembólico.\n4.\tDefinir necesidad de anticoagulación.\n5.\tControlar frecuencia ventricular.\n6.\tValorar cardioversión según evolución y riesgo.\nPerlas de examen\n✅ Un CHA₂DS₂-VASc elevado indica necesidad de anticoagulación oral.\n✅ La fibrilación auricular de más de 48 horas requiere precaución antes de cardioversión.\n✅ La ecocardiografía transesofágica permite descartar trombos auriculares.\n✅ Los betabloqueantes son fármacos de primera línea para control de frecuencia.\n✅ La edad avanzada incrementa significativamente el riesgo de accidente cerebrovascular.\n✅ La ablación no constituye el tratamiento inicial rutinario del primer episodio de fibrilación auricular.\n✅ La estrategia terapéutica debe individualizarse según síntomas y comorbilidades.\nReferencias\n• ESC Guidelines for the Management of Atrial Fibrillation.\n• ACC/AHA/HRS Guideline for the Management of Atrial Fibrillation.\n• Braunwald's Heart Disease.\n• UpToDate: Atrial Fibrillation in Adults.\n• Harrison's Principles of Internal Medicine."
  },
  {
    "id": 172,
    "examArea": "NEUMOLOGÍA",
    "topic": "NEUMOLOGÍA",
    "slug": "neumologia",
    "difficulty": "medium",
    "statement": "Hombre de 65 años con antecedente de enfermedad pulmonar obstructiva crónica (EPOC) y tabaquismo activo consulta por sensación de alza térmica, tos productiva y disnea de 3 días de evolución. En la radiografía de tórax se evidencia un infiltrado localizado en el lóbulo inferior izquierdo. Al examen físico se encuentra consciente, orientado y sin signos de choque.\n¿Cuál es la conducta más adecuada respecto al tratamiento y lugar de manejo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Tratamiento antibiótico oral y manejo ambulatorio."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Tratamiento antibiótico intravenoso y hospitalización."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Manejo en urgencias con observación por 6 horas y egreso sin antibióticos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Ingreso a unidad de cuidados intensivos para ventilación mecánica."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente presenta una neumonía adquirida en la comunidad asociada a una comorbilidad importante (EPOC), edad avanzada y compromiso radiológico pulmonar. Estos factores aumentan el riesgo de complicaciones y justifican manejo intrahospitalario con antibioticoterapia apropiada.",
    "keyPoints": [
      "Cuando veas: Adulto mayor. EPOC. Tos productiva. Fiebre. Infiltrado pulmonar en radiografía.",
      "Debes pensar en: Neumonía adquirida en la comunidad y necesidad de estratificación de riesgo.",
      "Tema: Neumonía adquirida en la comunidad."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el abordaje inicial de la neumonía adquirida en la comunidad.\nLa clave no es el tabaquismo.\nLa clave es:\nLa presencia de neumonía en un paciente con comorbilidades.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Fiebre.\n• Tos productiva.\n• Disnea.\n• Infiltrado pulmonar.\nEstos hallazgos cumplen criterios para:\nNeumonía adquirida en la comunidad.\n¿Por qué el EPOC es importante?\nLos pacientes con EPOC tienen:\n• Mayor riesgo de infección respiratoria.\n• Mayor riesgo de insuficiencia respiratoria.\n• Mayor probabilidad de evolución desfavorable.\nPor esta razón:\nLa presencia de EPOC modifica la conducta terapéutica.\n¿Cómo se decide el lugar de manejo?\nLa decisión debe basarse en:\n• Edad.\n• Comorbilidades.\n• Estado hemodinámico.\n• Escalas de gravedad (CURB-65 o PSI).\n• Riesgo de complicaciones.\nEn este caso:\nLa edad avanzada y la enfermedad pulmonar crónica favorecen el manejo hospitalario.\n¿Qué tratamiento debe iniciarse?\nEn pacientes hospitalizados sin criterios de UCI se recomienda:\n• Antibióticos intravenosos.\n• Monitorización clínica.\n• Oxigenoterapia según necesidad.\n• Manejo de la comorbilidad respiratoria.\n¿Por qué NO manejo ambulatorio?\nMuchos pacientes con neumonía leve pueden tratarse ambulatoriamente.\nSin embargo:\nLa combinación de edad avanzada y EPOC incrementa el riesgo clínico.\n¿Por qué NO observación sin antibióticos?\nLa presencia de infiltrado pulmonar y síntomas infecciosos establece el diagnóstico de neumonía.\nPor lo tanto:\nEl tratamiento antibiótico está indicado.\n¿Por qué NO ingreso a UCI?\nNo existen datos de:\n• Choque séptico.\n• Necesidad de ventilación mecánica.\n• Hipoxemia severa.\n• Falla multiorgánica.\nPor ello:\nNo cumple criterios de cuidado intensivo.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"Infiltrado pulmonar.\"\nY responden:\nManejo ambulatorio porque no se describen signos de gravedad extrema.\nSin embargo:\nEl dato decisivo es:\nLa presencia de EPOC y la edad avanzada.\nEstos factores aumentan el riesgo de complicaciones y favorecen hospitalización.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tConfirmar neumonía adquirida en la comunidad.\n2.\tIdentificar factores de riesgo.\n3.\tEvaluar comorbilidades.\n4.\tEstratificar gravedad.\n5.\tDefinir lugar de manejo.\n6.\tIniciar antibioticoterapia adecuada.\nPerlas de examen\n✅ La radiografía de tórax confirma el diagnóstico de neumonía.\n✅ El EPOC aumenta el riesgo de complicaciones infecciosas respiratorias.\n✅ La edad avanzada es un factor pronóstico importante.\n✅ CURB-65 y PSI ayudan a definir el lugar de manejo.\n✅ La presencia de comorbilidades influye en la decisión de hospitalización.\n✅ No toda neumonía requiere UCI.\n✅ El tratamiento antibiótico debe iniciarse tempranamente.\nReferencias\n• IDSA/ATS Guidelines for Community-Acquired Pneumonia.\n• GOLD Report.\n• Harrison's Principles of Internal Medicine.\n• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.\n• UpToDate: Community-Acquired Pneumonia in Adults."
  },
  {
    "id": 173,
    "examArea": "ENDOCRINOLOGÍA",
    "topic": "ENDOCRINOLOGÍA",
    "slug": "endocrinologia",
    "difficulty": "medium",
    "statement": "Paciente de 53 años con diabetes mellitus tipo 2 en tratamiento con metformina a dosis plena consulta por polidipsia, poliuria, polifagia y pérdida de peso no intencionada en los últimos meses. Los estudios de laboratorio muestran una HbA1c de 9.5%. No se documentan episodios de cetoacidosis ni otras complicaciones agudas.\n¿Cuál es el siguiente paso más apropiado en el manejo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Añadir un inhibidor del cotransportador sodio-glucosa tipo 2 (iSGLT2)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Añadir un agonista del receptor GLP-1."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar insulinoterapia."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Añadir una sulfonilurea."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente presenta hiperglucemia sintomática con manifestaciones clásicas de catabolismo metabólico, incluyendo poliuria, polidipsia, polifagia y pérdida de peso. En este escenario, las guías recomiendan iniciar insulinoterapia independientemente de que se encuentre recibiendo tratamiento oral.",
    "keyPoints": [
      "Cuando veas: HbA1c elevada. Pérdida de peso. Poliuria. Polidipsia. Polifagia. Hiperglucemia sintomática.",
      "Debes pensar en: Déficit significativo de insulina e indicación de insulinoterapia.",
      "Tema: Indicaciones de insulinoterapia en diabetes mellitus tipo 2."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las indicaciones más importantes para iniciar insulina en diabetes mellitus tipo 2.\nLa clave no es la HbA1c.\nLa clave es:\nLa presencia de síntomas catabólicos.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Diabetes mellitus tipo 2.\n• HbA1c de 9.5%.\n• Poliuria.\n• Polidipsia.\n• Polifagia.\n• Pérdida de peso.\nEstos hallazgos sugieren:\nDeficiencia significativa de acción insulínica.\n¿Por qué la pérdida de peso es importante?\nLa pérdida de peso en un paciente hiperglucémico indica:\nEstado catabólico.\nEl organismo comienza a utilizar:\n• Grasas.\n• Proteínas.\nComo fuente energética debido a la incapacidad para utilizar adecuadamente la glucosa.\nPor ello:\nEs un marcador de descompensación metabólica.\n¿Qué recomiendan las guías actuales?\nLa insulinoterapia debe iniciarse cuando existe:\n• Hiperglucemia sintomática.\n• Pérdida de peso inexplicada.\n• Evidencia de catabolismo.\n• HbA1c marcadamente elevada.\n• Sospecha de insuficiencia importante de células beta.\nEste paciente cumple varios de estos criterios.\n¿Por qué NO añadir un iSGLT2?\nLos iSGLT2 son excelentes fármacos para:\n• Control glucémico.\n• Protección cardiovascular.\n• Protección renal.\nSin embargo:\nNo son la mejor opción cuando existe hiperglucemia sintomática con catabolismo.\n¿Por qué NO añadir un agonista GLP-1?\nLos agonistas GLP-1 son muy eficaces para:\n• Reducción de HbA1c.\n• Pérdida de peso.\n• Beneficio cardiovascular.\nPero:\nEn presencia de síntomas catabólicos la prioridad es corregir rápidamente el déficit de insulina.\n¿Por qué NO añadir una sulfonilurea?\nLas sulfonilureas pueden disminuir la glucemia.\nSin embargo:\nSu efecto es insuficiente frente a un cuadro de descompensación metabólica con pérdida de peso.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"HbA1c de 9.5%.\"\nY responden:\nTerapia dual o triple.\nSin embargo:\nLa pregunta aporta un dato mucho más importante.\nLa presencia de:\n• Poliuria.\n• Polidipsia.\n• Polifagia.\n• Pérdida de peso.\nEstos hallazgos indican:\nHiperglucemia sintomática con catabolismo.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar la diabetes descompensada.\n2.\tBuscar síntomas clásicos de hiperglucemia.\n3.\tDetectar pérdida de peso o catabolismo.\n4.\tReconocer insuficiencia significativa de insulina.\n5.\tIniciar insulinoterapia.\nPerlas de examen\n✅ La pérdida de peso es un dato de alarma en diabetes mal controlada.\n✅ La poliuria, polidipsia y polifagia son síntomas clásicos de hiperglucemia.\n✅ La insulinoterapia está indicada en presencia de catabolismo metabólico.\n✅ La HbA1c elevada por sí sola no siempre obliga a iniciar insulina.\n✅ Los síntomas clínicos son tan importantes como los valores de laboratorio.\n✅ La corrección rápida de la hiperglucemia reduce complicaciones agudas.\n✅ La metformina puede mantenerse una vez iniciada la insulinoterapia si no existen contraindicaciones.\nReferencias\n• American Diabetes Association (ADA) Standards of Care.\n• EASD Consensus Report on Hyperglycemia Management.\n• Williams Textbook of Endocrinology.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Initial Management of Hyperglycemia in Adults with Type 2 Diabetes Mellitus."
  },
  {
    "id": 174,
    "examArea": "NEUMOLOGÍA",
    "topic": "NEUMOLOGÍA",
    "slug": "neumologia",
    "difficulty": "medium",
    "statement": "Hombre de 72 años con antecedente de enfermedad pulmonar obstructiva crónica (EPOC) en tratamiento con tiotropio. Durante los últimos 6 meses ha presentado dos exacerbaciones que han requerido atención médica. En los estudios de laboratorio presenta un recuento de eosinófilos de 150 células/μL.\n¿Cuál es el siguiente paso más apropiado en el manejo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Agregar un corticoide inhalado."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Cambiar a LAMA + LABA."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar roflumilast."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Mantener el tratamiento actual."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente presenta EPOC con exacerbaciones persistentes pese al tratamiento con un LAMA en monoterapia. Según las recomendaciones actuales, el siguiente paso consiste en escalar a broncodilatación dual con LAMA + LABA. El recuento de eosinófilos de 150 células/μL no favorece el uso inicial de corticoides inhalados.",
    "keyPoints": [
      "Cuando veas: EPOC. Tratamiento con LAMA. Exacerbaciones recurrentes. Eosinófilos <300 células/μL.",
      "Debes pensar en: Escalamiento inicial a doble broncodilatación.",
      "Tema: Tratamiento escalonado del EPOC."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el algoritmo actual de escalamiento terapéutico en EPOC.\nLa clave no es el número de exacerbaciones.\nLa clave es:\nEl recuento de eosinófilos.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• EPOC.\n• Tratamiento con LAMA (tiotropio).\n• Dos exacerbaciones recientes.\n• Eosinófilos de 150 células/μL.\nEsto indica:\nControl insuficiente de la enfermedad.\nPor lo tanto:\nSe requiere intensificación terapéutica.\n¿Qué recomiendan las guías GOLD?\nCuando un paciente recibe:\n• LAMA en monoterapia.\nY continúa presentando:\n• Exacerbaciones.\nEl siguiente paso habitual es:\nAñadir un LABA.\nEsto permite:\n• Mejor control sintomático.\n• Disminución de exacerbaciones.\n• Mejor función pulmonar.\n¿Por qué NO iniciar corticoides inhalados?\nLos corticoides inhalados son más beneficiosos en pacientes con:\n• Eosinofilia elevada.\n• Exacerbaciones frecuentes.\n• Fenotipo inflamatorio eosinofílico.\nLa mayor evidencia de beneficio se observa cuando los eosinófilos son:\n≥300 células/μL.\nCon 150 células/μL:\nEl beneficio es menor.\nPor ello:\nNo constituyen el siguiente paso inicial.\n¿Por qué NO iniciar roflumilast?\nRoflumilast se reserva para pacientes con:\n• EPOC grave o muy grave.\n• Bronquitis crónica.\n• Exacerbaciones persistentes pese a terapia inhalada optimizada.\nNo es el siguiente escalón terapéutico en este caso.\n¿Por qué NO mantener el tratamiento actual?\nEl paciente ha presentado:\nDos exacerbaciones en seis meses.\nEsto demuestra:\nControl insuficiente de la enfermedad.\nPor tanto:\nEs necesario escalar el tratamiento.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"Dos exacerbaciones.\"\nY responden:\n\"Corticoide inhalado.\"\nSin embargo:\nLa decisión depende en gran medida del número de eosinófilos.\nEl dato decisivo es:\n150 células/μL.\nPor ello:\nLa broncodilatación dual es el siguiente paso recomendado.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar exacerbaciones persistentes.\n2.\tRevisar tratamiento actual.\n3.\tEvaluar eosinófilos.\n4.\tEscalar inicialmente a LAMA + LABA.\n5.\tConsiderar corticoides inhalados según perfil eosinofílico.\nPerlas de examen\n✅ LAMA + LABA constituye el siguiente escalón terapéutico en muchos pacientes con EPOC no controlado.\n✅ Los eosinófilos ayudan a seleccionar candidatos para corticoides inhalados.\n✅ El mayor beneficio de los corticoides inhalados se observa con eosinófilos ≥300 células/μL.\n✅ Los corticoides inhalados aumentan el riesgo de neumonía en algunos pacientes.\n✅ Roflumilast se reserva para escenarios más avanzados.\n✅ Las exacerbaciones son un marcador importante de progresión de la enfermedad.\n✅ Las recomendaciones GOLD utilizan un enfoque individualizado basado en síntomas y exacerbaciones.\nReferencias\n• GOLD Report 2025.\n• Global Initiative for Chronic Obstructive Lung Disease.\n• Harrison's Principles of Internal Medicine.\n• Murray & Nadel's Textbook of Respiratory Medicine.\n• UpToDate: Stable COPD Pharmacologic Management."
  },
  {
    "id": 175,
    "examArea": "CIRUGÍA GENERAL",
    "topic": "CIRUGÍA GENERAL",
    "slug": "cirugia_general",
    "difficulty": "medium",
    "statement": "Hombre de 25 años es llevado al servicio de urgencias tras sufrir un accidente de tránsito con trauma abdominal contuso. Al ingreso presenta dolor abdominal difuso, presión arterial de 85/50 mmHg y frecuencia cardíaca de 125 lpm. Durante la evaluación inicial se realiza un FAST que resulta positivo para líquido libre intraabdominal.\n¿Cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Realizar una tomografía abdominal contrastada."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Llevar a laparotomía exploratoria."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Observación en urgencias con reevaluación clínica seriada."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente presenta trauma abdominal contuso asociado a inestabilidad hemodinámica y FAST positivo para líquido libre intraabdominal. Estos hallazgos sugieren hemorragia intraabdominal activa y constituyen indicación de exploración quirúrgica urgente.",
    "keyPoints": [
      "Cuando veas: Trauma abdominal contuso. Hipotensión. Taquicardia. FAST positivo.",
      "Debes pensar en: Hemorragia intraabdominal con indicación quirúrgica urgente.",
      "Tema: Trauma abdominal cerrado."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el algoritmo inicial del trauma abdominal.\nLa clave no es el accidente de tránsito.\nLa clave es:\nLa inestabilidad hemodinámica.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Trauma abdominal cerrado.\n• Hipotensión.\n• Taquicardia.\n• FAST positivo.\nEstos hallazgos sugieren:\nSangrado intraabdominal significativo.\nEn el contexto de trauma:\nDebe asumirse hemorragia activa hasta demostrar lo contrario.\n¿Por qué es importante el FAST?\nEl FAST (Focused Assessment with Sonography in Trauma) permite detectar:\n• Hemoperitoneo.\n• Hemopericardio.\n• Líquido libre asociado a trauma.\nEn pacientes inestables:\nEs una herramienta rápida para la toma de decisiones.\n¿Qué significa un FAST positivo en un paciente hipotenso?\nLa combinación de:\n• Inestabilidad hemodinámica.\n• Líquido libre abdominal.\nEs altamente sugestiva de:\nHemorragia intraabdominal clínicamente significativa.\nPor ello:\nLa conducta correcta es cirugía urgente.\n¿Por qué NO realizar tomografía?\nLa tomografía es el estudio de elección en:\n• Pacientes estables.\n• Trauma abdominal con necesidad de caracterización anatómica.\nSin embargo:\nEl paciente se encuentra hipotenso.\nRetrasar la cirugía para realizar imágenes puede aumentar la morbimortalidad.\n¿Por qué NO observar?\nLa observación está indicada en pacientes:\n• Estables.\n• Sin evidencia de sangrado significativo.\n• Con evaluación inicial tranquilizadora.\nEste paciente presenta:\nDatos claros de choque hemorrágico.\nPor lo tanto:\nLa observación es inadecuada.\n¿Cuál es la trampa de examen?\nMuchos estudiantes recuerdan:\n\"Trauma abdominal = TAC.\"\nSin embargo:\nAntes de decidir el estudio diagnóstico debe evaluarse la estabilidad hemodinámica.\nEl dato decisivo es:\nHipotensión más FAST positivo.\nEsto equivale a:\nLaparotomía exploratoria urgente.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tEvaluar estabilidad hemodinámica.\n2.\tRealizar FAST.\n3.\tIdentificar líquido libre abdominal.\n4.\tConfirmar inestabilidad.\n5.\tLlevar a cirugía urgente.\nPerlas de examen\n✅ El FAST positivo en un paciente inestable es indicación de laparotomía exploratoria.\n✅ La estabilidad hemodinámica determina el algoritmo diagnóstico en trauma.\n✅ La tomografía abdominal se reserva principalmente para pacientes estables.\n✅ La hipotensión y la taquicardia sugieren choque hemorrágico.\n✅ El trauma abdominal cerrado puede producir lesiones esplénicas, hepáticas y mesentéricas graves.\n✅ El FAST es una herramienta rápida y fundamental en la evaluación inicial del trauma.\n✅ No deben retrasarse intervenciones salvadoras para obtener estudios complementarios.\nReferencias\n• Advanced Trauma Life Support (ATLS) 11th Edition.\n• Eastern Association for the Surgery of Trauma (EAST) Guidelines.\n• Western Trauma Association Critical Decisions in Trauma.\n• Sabiston Textbook of Surgery.\n• UpToDate: Initial Evaluation and Management of Blunt Abdominal Trauma."
  },
  {
    "id": 176,
    "examArea": "CIRUGÍA GENERAL",
    "topic": "CIRUGÍA GENERAL",
    "slug": "cirugia_general",
    "difficulty": "medium",
    "statement": "Mujer de 24 años con antecedente de alergia a la penicilina consulta por dolor en fosa ilíaca derecha de 24 horas de evolución, asociado a fiebre y leucocitosis. Al examen físico presenta signo de Rovsing positivo, McBurney negativo y talopercusión positiva. No presenta signos de irritación peritoneal. La ecografía abdominal reporta apéndice engrosado con líquido periapendicular.\n¿Cuál es el manejo más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Manejo antibiótico ambulatorio y control en 48 horas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Apendicectomía laparoscópica e inicio de antibioticoterapia preoperatoria."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Observación intrahospitalaria durante 24 horas y repetir ecografía."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Drenaje percutáneo guiado por imágenes."
      }
    ],
    "correctOptionId": "B",
    "explanation": "La paciente presenta un cuadro clínico e imagenológico compatible con apendicitis aguda no complicada. El tratamiento de elección es la apendicectomía temprana asociada a antibioticoterapia perioperatoria adecuada.",
    "keyPoints": [
      "Cuando veas: Dolor en fosa ilíaca derecha. Fiebre. Leucocitosis. Ecografía compatible con apendicitis. Ausencia de absceso o plastrón.",
      "Debes pensar en: Apendicectomía temprana.",
      "Tema: Apendicitis aguda."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el manejo definitivo de la apendicitis aguda.\nLa clave no es el signo de McBurney.\nLa clave es:\nLa confirmación ecográfica de apendicitis.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Dolor en fosa ilíaca derecha.\n• Fiebre.\n• Leucocitosis.\n• Signos clínicos de irritación localizada.\n• Ecografía compatible con inflamación apendicular.\nEstos hallazgos son diagnósticos de:\nApendicitis aguda.\n¿Qué aporta la ecografía?\nLa ecografía demuestra:\n• Apéndice engrosado.\n• Líquido periapendicular.\nEstos hallazgos aumentan significativamente la probabilidad diagnóstica y permiten establecer conducta quirúrgica.\n¿Por qué la cirugía es el tratamiento de elección?\nLa apendicectomía:\n• Elimina el foco infeccioso.\n• Disminuye el riesgo de perforación.\n• Reduce recurrencias.\n• Constituye el tratamiento definitivo.\nActualmente:\nLa vía laparoscópica es la estrategia preferida en la mayoría de los pacientes.\n¿Qué antibióticos podrían utilizarse?\nDebido al antecedente de alergia a penicilina pueden emplearse esquemas alternativos que cubran:\n• Bacilos gramnegativos.\n• Anaerobios intestinales.\nSiempre según protocolos institucionales.\n¿Por qué NO observación?\nLa paciente ya cumple criterios clínicos e imagenológicos de apendicitis.\nRetrasar el tratamiento puede aumentar el riesgo de:\n• Perforación.\n• Absceso.\n• Peritonitis.\n¿Por qué NO manejo exclusivamente antibiótico?\nAunque algunos casos seleccionados pueden recibir manejo conservador, el tratamiento estándar de una apendicitis aguda confirmada continúa siendo:\nLa apendicectomía.\n¿Por qué NO drenaje percutáneo?\nEl drenaje se reserva principalmente para:\n• Abscesos apendiculares.\n• Plastrones complicados.\nEstos hallazgos no están presentes en el caso.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"McBurney negativo.\"\nY descartan apendicitis.\nSin embargo:\nNingún signo físico aislado excluye el diagnóstico.\nEl dato decisivo es:\nLa combinación de clínica compatible y ecografía positiva.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar síntomas compatibles.\n2.\tConfirmar inflamación apendicular mediante imágenes.\n3.\tDescartar complicaciones mayores.\n4.\tIniciar antibioticoterapia perioperatoria.\n5.\tRealizar apendicectomía temprana.\nPerlas de examen\n✅ La apendicitis es la causa más frecuente de abdomen agudo quirúrgico.\n✅ La ecografía es una herramienta diagnóstica útil especialmente en mujeres jóvenes.\n✅ La ausencia de un signo físico específico no excluye el diagnóstico.\n✅ La laparoscopia es el abordaje preferido en la mayoría de los casos.\n✅ Los antibióticos forman parte del manejo perioperatorio.\n✅ La demora terapéutica aumenta el riesgo de perforación.\n✅ El tratamiento definitivo de la apendicitis aguda sigue siendo quirúrgico en la mayoría de los pacientes.\nReferencias\n• World Society of Emergency Surgery (WSES) Guidelines for Acute Appendicitis.\n• Sabiston Textbook of Surgery.\n• Schwartz's Principles of Surgery.\n• UpToDate: Acute Appendicitis in Adults.\n• American College of Surgeons Clinical Practice Guidelines."
  },
  {
    "id": 177,
    "examArea": "CIRUGÍA GENERAL",
    "topic": "CIRUGÍA GENERAL",
    "slug": "cirugia_general",
    "difficulty": "medium",
    "statement": "Hombre de 40 años, de profesión obrero, consulta por una masa en la región inguinal derecha que aumenta de tamaño con los esfuerzos físicos y disminuye en reposo. Al examen físico se evidencia una masa inguinal reductible, no dolorosa, sin cambios inflamatorios locales y sin signos de irritación peritoneal.\n¿Cuál es la fisiopatología del cuadro y el manejo más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Persistencia del proceso peritoneo-vaginal con protrusión de contenido abdominal a través del anillo inguinal profundo; reparación quirúrgica electiva."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Debilidad adquirida de la pared posterior del canal inguinal con protrusión a través del triángulo de Hesselbach; reparación quirúrgica electiva."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Debilidad de la fascia transversalis con encarcelamiento intestinal; laparotomía exploratoria urgente."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Herniación secundaria a inflamación apendicular; manejo antibiótico y observación."
      }
    ],
    "correctOptionId": "B",
    "explanation": "La presentación clínica es compatible con una hernia inguinal directa, típica en adultos que realizan esfuerzos físicos repetitivos. Su fisiopatología se relaciona con debilidad adquirida de la pared posterior del canal inguinal, permitiendo la protrusión del contenido abdominal a través del triángulo de Hesselbach. El tratamiento definitivo es la corrección quirúrgica electiva.",
    "keyPoints": [
      "Cuando veas: Adulto mayor de 30 años. Trabajos con esfuerzo físico repetitivo. Masa inguinal reductible. Aumento con maniobras de Valsalva.",
      "Debes pensar en: Hernia inguinal directa.",
      "Tema: Hernias inguinales."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la fisiopatología y el manejo de las hernias inguinales.\nLa clave no es la masa.\nLa clave es:\nQue sea reductible y aparezca con el esfuerzo.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Masa inguinal.\n• Incremento con maniobras de presión abdominal.\n• Reducción espontánea o manual.\n• Ausencia de dolor intenso.\n• Ausencia de signos de complicación.\nEsto corresponde a:\nHernia inguinal no complicada.\n¿Cuál es la fisiopatología?\nLas hernias inguinales directas se producen por:\nDebilidad adquirida de la pared posterior del canal inguinal.\nLa protrusión ocurre a través de:\nEl triángulo de Hesselbach.\nEsta región está delimitada por:\n• Borde lateral del músculo recto abdominal.\n• Vasos epigástricos inferiores.\n• Ligamento inguinal.\n¿Por qué el trabajo del paciente es importante?\nLos esfuerzos repetitivos aumentan:\n• La presión intraabdominal.\n• El estrés mecánico sobre la pared abdominal.\nFavoreciendo:\nLa aparición de hernias adquiridas.\n¿Cómo se diferencia de una hernia indirecta?\nLa hernia indirecta:\n• Se relaciona con persistencia del proceso peritoneo-vaginal.\n• Atraviesa el anillo inguinal profundo.\n• Se localiza lateral a los vasos epigástricos inferiores.\nLa hernia directa:\n• Es adquirida.\n• Se localiza medial a los vasos epigástricos inferiores.\n• Protruye por el triángulo de Hesselbach.\n¿Por qué la cirugía es el tratamiento de elección?\nLa reparación quirúrgica:\n• Elimina el defecto anatómico.\n• Previene encarcelamiento.\n• Disminuye recurrencias.\n• Mejora la calidad de vida.\nEn ausencia de complicaciones:\nSe realiza de forma electiva.\n¿Por qué NO requiere cirugía urgente?\nEl paciente no presenta:\n• Dolor intenso.\n• Irreductibilidad.\n• Obstrucción intestinal.\n• Estrangulación.\nPor ello:\nNo existe indicación de urgencia quirúrgica.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Masa inguinal.\"\nY responden:\nHernia indirecta.\nSin embargo:\nEl dato decisivo es:\nAdulto con esfuerzo físico repetitivo y defecto adquirido de la pared abdominal.\nEsto orienta a:\nHernia inguinal directa.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar una masa inguinal reductible.\n2.\tEvaluar presencia de complicaciones.\n3.\tDiferenciar hernia directa de indirecta.\n4.\tReconocer el defecto anatómico.\n5.\tProgramar reparación quirúrgica electiva.\nPerlas de examen\n✅ La hernia inguinal directa atraviesa el triángulo de Hesselbach.\n✅ Se localiza medial a los vasos epigástricos inferiores.\n✅ Es una hernia adquirida relacionada con debilidad de la pared abdominal.\n✅ El esfuerzo físico repetitivo favorece su aparición.\n✅ La masa suele aumentar con Valsalva y disminuir en reposo.\n✅ La cirugía electiva es el tratamiento definitivo.\n✅ La ausencia de encarcelamiento permite manejo programado.\nReferencias\n• Schwartz's Principles of Surgery.\n• Sabiston Textbook of Surgery.\n• European Hernia Society Guidelines.\n• UpToDate: Classification, Clinical Features and Diagnosis of Inguinal Hernias.\n• American College of Surgeons Guidelines for Groin Hernias."
  },
  {
    "id": 178,
    "examArea": "MEDICINA INTERNA – CARDIOLOGÍA",
    "topic": "CARDIOLOGÍA",
    "slug": "cardiologia",
    "difficulty": "easy",
    "statement": "Hombre de 50 años con antecedente de hipertensión arterial en tratamiento con losartán e hidroclorotiazida consulta por cefalea intensa y visión borrosa de inicio reciente. Al examen físico presenta presión arterial de 190/110 mmHg. No se documentan signos de focalización neurológica, dolor torácico, insuficiencia cardíaca aguda ni otras manifestaciones de daño agudo a órgano blanco.\n¿Cuál es el diagnóstico y el tratamiento inicial más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Urgencia hipertensiva; ajuste del tratamiento antihipertensivo por vía oral y observación."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Emergencia hipertensiva; iniciar nitroprusiato intravenoso y traslado a UCI."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Crisis hipertensiva; administrar fibrinolíticos y hospitalizar."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hipertensión arterial resistente; agregar un tercer antihipertensivo y egreso."
      }
    ],
    "correctOptionId": "A",
    "explanation": "El paciente presenta cifras tensionales severamente elevadas acompañadas de síntomas inespecíficos, pero sin evidencia objetiva de daño agudo a órgano blanco. Esto corresponde a una urgencia hipertensiva, cuyo manejo inicial consiste en reducción gradual de la presión arterial mediante tratamiento oral.",
    "keyPoints": [
      "Cuando veas: Presión arterial ≥180/120 mmHg. Cefalea. Visión borrosa. Ausencia de daño agudo a órgano blanco.",
      "Debes pensar en: Urgencia hipertensiva.",
      "Tema: Crisis hipertensivas."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la diferencia entre urgencia y emergencia hipertensiva.\nLa clave no es la presión arterial.\nLa clave es:\nLa presencia o ausencia de daño agudo a órgano blanco.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Hipertensión arterial severa.\n• Cefalea.\n• Visión borrosa.\n• Ausencia de datos de daño orgánico agudo.\nEsto corresponde a:\nUrgencia hipertensiva.\n¿Cuál es la diferencia entre urgencia y emergencia hipertensiva?\nUrgencia hipertensiva:\n• Presión arterial severamente elevada.\n• Sin daño agudo a órgano blanco.\nEmergencia hipertensiva:\n• Presión arterial severamente elevada.\n• Daño agudo a órgano blanco demostrado.\nEjemplos:\n• Encefalopatía hipertensiva.\n• Disección aórtica.\n• Edema agudo de pulmón.\n• Infarto agudo de miocardio.\n• Accidente cerebrovascular.\n• Lesión renal aguda.\n¿Por qué este paciente no tiene una emergencia hipertensiva?\nPorque el caso no documenta:\n• Alteración del estado de conciencia.\n• Déficit neurológico.\n• Edema pulmonar.\n• Isquemia miocárdica.\n• Falla renal aguda.\nPor lo tanto:\nNo existe evidencia objetiva de lesión aguda de órgano blanco.\n¿Cómo debe tratarse?\nEl objetivo es:\nReducir la presión arterial de forma gradual.\nSe pueden utilizar:\n• Ajustes de antihipertensivos orales.\n• Observación clínica.\n• Seguimiento estrecho.\n¿Por qué NO usar nitroprusiato intravenoso?\nLos antihipertensivos intravenosos se reservan para:\nEmergencias hipertensivas.\nUna reducción brusca en este paciente podría generar:\n• Hipoperfusión cerebral.\n• Hipoperfusión coronaria.\n• Hipoperfusión renal.\n¿Por qué NO es hipertensión resistente?\nLa hipertensión resistente requiere:\nPersistencia de cifras elevadas pese al uso de múltiples antihipertensivos adecuadamente dosificados.\nLa pregunta está evaluando:\nUna crisis hipertensiva aguda.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n190/110 mmHg.\nY responden:\nEmergencia hipertensiva.\nSin embargo:\nLa presión arterial por sí sola no define una emergencia.\nEl dato decisivo es:\nLa ausencia de daño agudo a órgano blanco.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tConfirmar cifras tensionales severamente elevadas.\n2.\tBuscar daño agudo a órgano blanco.\n3.\tDiferenciar urgencia de emergencia hipertensiva.\n4.\tSi no existe daño agudo, utilizar tratamiento oral.\n5.\tReducir la presión arterial de manera progresiva.\nPerlas de examen\n✅ La presencia de daño agudo a órgano blanco define una emergencia hipertensiva.\n✅ La cifra de presión arterial aislada no distingue urgencia de emergencia.\n✅ La reducción brusca de la presión arterial puede ser perjudicial.\n✅ Las urgencias hipertensivas suelen manejarse con medicamentos orales.\n✅ Los antihipertensivos intravenosos se reservan para emergencias hipertensivas.\n✅ La evaluación neurológica y cardiovascular es fundamental.\n✅ Siempre debe buscarse evidencia de lesión aguda de órgano blanco.\nReferencias\n• ESC/ESH Guidelines for the Management of Arterial Hypertension.\n• ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Hypertensive Urgency and Emergency in Adults.\n• Tintinalli's Emergency Medicine."
  },
  {
    "id": 179,
    "examArea": "NEFROLOGÍA",
    "topic": "NEFROLOGÍA",
    "slug": "nefrologia",
    "difficulty": "medium",
    "statement": "Mujer de 70 años con antecedente de enfermedad renal crónica estadio G4 (TFG: 27 mL/min/1.73m²) consulta por fatiga, somnolencia y disnea progresiva. En los estudios de laboratorio se documenta hemoglobina de 8 g/dL. No se reportan sangrados activos ni otras causas evidentes de anemia.\n¿Cuál es la aproximación diagnóstica y la conducta más adecuada frente a la anemia?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Solicitar perfil férrico, índice de saturación de transferrina y ferritina sérica; si se descarta ferropenia significativa, iniciar agente estimulante de eritropoyesis."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar transfusión de glóbulos rojos de manera rutinaria en todos los pacientes con enfermedad renal crónica y hemoglobina menor de 10 g/dL."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Solicitar biopsia de médula ósea para confirmar anemia secundaria a enfermedad renal crónica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Iniciar hierro oral empírico sin necesidad de estudios complementarios."
      }
    ],
    "correctOptionId": "A",
    "explanation": "La anemia asociada a enfermedad renal crónica se produce principalmente por disminución de la producción de eritropoyetina. Sin embargo, antes de iniciar tratamiento con agentes estimulantes de eritropoyesis es obligatorio descartar deficiencia de hierro mediante estudio férrico completo.",
    "keyPoints": [
      "Cuando veas: Enfermedad renal crónica avanzada. Fatiga. Disnea. Hemoglobina disminuida.",
      "Debes pensar en: Anemia secundaria a déficit de eritropoyetina y necesidad de estudiar el estado del hierro.",
      "Tema: Anemia en enfermedad renal crónica."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el abordaje de la anemia en pacientes con enfermedad renal crónica.\nLa clave no es la hemoglobina.\nLa clave es:\nLa enfermedad renal avanzada.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Enfermedad renal crónica estadio G4.\n• TFG de 27 mL/min/1.73m².\n• Hemoglobina de 8 g/dL.\n• Síntomas compatibles con anemia.\nEsto orienta fuertemente a:\nAnemia secundaria a enfermedad renal crónica.\n¿Por qué aparece la anemia en la enfermedad renal crónica?\nEl riñón es el principal órgano responsable de producir:\nEritropoyetina.\nA medida que disminuye la función renal:\n• Disminuye la producción de eritropoyetina.\n• Disminuye la eritropoyesis medular.\n• Aparece anemia normocítica normocrómica.\nAdemás pueden coexistir:\n• Ferropenia absoluta.\n• Ferropenia funcional.\n• Inflamación crónica.\n¿Por qué solicitar ferritina y saturación de transferrina?\nPorque antes de iniciar agentes estimulantes de eritropoyesis debe evaluarse:\nLa disponibilidad de hierro.\nLas guías recomiendan medir:\n• Ferritina sérica.\n• Saturación de transferrina (TSAT).\nEsto permite:\n• Detectar déficit de hierro.\n• Optimizar la respuesta al tratamiento.\n¿Cuándo iniciar agentes estimulantes de eritropoyesis?\nUna vez descartadas o corregidas las alteraciones del hierro.\nLos agentes más utilizados son:\n• Eritropoyetina.\n• Darbepoetina.\nSu objetivo es:\nReducir síntomas y disminuir la necesidad de transfusiones.\n¿Por qué NO transfundir de rutina?\nLas transfusiones se reservan para:\n• Anemia severa.\n• Inestabilidad clínica.\n• Sangrado activo.\n• Necesidad urgente de corrección.\nNo constituyen el tratamiento crónico estándar.\n¿Por qué NO realizar biopsia de médula ósea?\nLa enfermedad renal crónica avanzada explica adecuadamente la anemia.\nLa biopsia medular se reserva para:\nCasos con sospecha de enfermedad hematológica.\n¿Por qué NO iniciar hierro empírico?\nPorque primero debe determinarse:\nSi existe déficit absoluto o funcional de hierro.\nLa evaluación diagnóstica precede al tratamiento.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\nHemoglobina de 8 g/dL.\nY responden:\nTransfusión inmediata.\nSin embargo:\nLa pregunta está evaluando el manejo habitual de la anemia asociada a enfermedad renal crónica.\nEl dato decisivo es:\nTFG de 27 mL/min/1.73m².\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar enfermedad renal crónica avanzada.\n2.\tConfirmar anemia.\n3.\tSolicitar ferritina y saturación de transferrina.\n4.\tCorregir déficit de hierro si existe.\n5.\tIniciar agentes estimulantes de eritropoyesis cuando estén indicados.\nPerlas de examen\n✅ La causa principal de anemia en enfermedad renal crónica es la disminución de eritropoyetina.\n✅ La anemia suele ser normocítica y normocrómica.\n✅ Ferritina y saturación de transferrina deben evaluarse antes del tratamiento.\n✅ Los agentes estimulantes de eritropoyesis son la base del manejo crónico.\n✅ Las transfusiones no constituyen el tratamiento habitual de mantenimiento.\n✅ La ferropenia funcional es frecuente en enfermedad renal crónica.\n✅ El tratamiento adecuado reduce síntomas y necesidad transfusional.\nReferencias\n• KDIGO Clinical Practice Guideline for Anemia in Chronic Kidney Disease.\n• Brenner and Rector's The Kidney.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Anemia of Chronic Kidney Disease.\n• National Kidney Foundation KDOQI Guidelines."
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
const endMatch = content.match(/  \{\r?\n    id: "dr-q-180"/);
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
console.log(`Patched dr-q-166 through dr-q-179 (${questions.length} questions) in ${coexamPath}`);
