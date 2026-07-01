import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coexamPath = path.join(__dirname, "../src/data/dr-q-coexam-questions.ts");

const questions = [
  {
    "id": 241,
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "slug": "neurologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "El cuadro es altamente sugestivo de síndrome de Guillain-Barré, una polirradiculoneuropatía inflamatoria aguda autoinmune. El tratamiento de primera línea consiste en inmunoglobulina intravenosa o plasmaféresis.",
    "keyPoints": [
      "Cuando veas: Infección respiratoria reciente. Parestesias ascendentes. Debilidad progresiva. Parálisis facial bilateral. Estado de conciencia conservado.",
      "Debes pensar en: Síndrome de Guillain-Barré.",
      "Tema: Neuropatías desmielinizantes."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la emergencia neurológica periférica más preguntada en los exámenes.\nLa clave no es la electromiografía.\nLa clave es:\nLa progresión ascendente de los síntomas.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Infección reciente.\n• Dolor lumbar.\n• Parestesias.\n• Debilidad ascendente.\n• Parálisis facial bilateral.\nEstos hallazgos son típicos de:\nSíndrome de Guillain-Barré.\n¿Por qué puede ser normal la EMG?\nDurante los primeros días:\nLa electromiografía puede ser completamente normal.\nPor ello:\nUn estudio inicial normal no descarta el diagnóstico.\n¿Cuál es el tratamiento?\nLas dos terapias efectivas son:\n• Inmunoglobulina intravenosa (IVIG).\n• Plasmaféresis.\nAmbas tienen eficacia similar.\n¿Qué debe vigilarse?\nLa principal complicación es:\nInsuficiencia respiratoria.\nPor ello debe monitorizarse:\n• Capacidad vital forzada.\n• Función bulbar.\n• Saturación de oxígeno.\n¿Por qué NO usar corticoides?\nA diferencia de otras enfermedades autoinmunes:\nLos corticoides no han demostrado beneficio clínico significativo en Guillain-Barré.\n¿Por qué NO interferón beta?\nPorque se utiliza en:\nEsclerosis múltiple.\n¿Por qué NO acetazolamida?\nSe emplea en:\nHipertensión intracraneal idiopática.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"EMG normal.\"\nY descartan Guillain-Barré.\nSin embargo:\nEl dato decisivo es:\nLa debilidad ascendente posterior a infección.\nEsto orienta claramente a:\nSíndrome de Guillain-Barré.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar antecedente infeccioso.\n2.\tReconocer debilidad ascendente.\n3.\tBuscar compromiso facial bilateral.\n4.\tSospechar Guillain-Barré.\n5.\tIniciar inmunoglobulina intravenosa o plasmaféresis.\nPerlas de examen\n✅ Campylobacter jejuni es el desencadenante clásico.\n✅ La parálisis facial bilateral es frecuente.\n✅ La EMG puede ser normal al inicio.\n✅ El LCR suele mostrar disociación albúmino-citológica.\n✅ La inmunoglobulina intravenosa es tratamiento de primera línea.\n✅ Los corticoides no mejoran el pronóstico.\n✅ La insuficiencia respiratoria es la principal causa de morbimortalidad.\nReferencias\n• Adams and Victor's Principles of Neurology.\n• Bradley's Neurology in Clinical Practice.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Guillain-Barré Syndrome in Adults.\n• American Academy of Neurology Guidelines.",
    "statement": "Hombre de 35 años consulta por dolor lumbar y parestesias progresivas en miembros inferiores una semana después de una infección respiratoria. En los días siguientes desarrolla debilidad ascendente y parálisis facial bilateral. Se encuentra alerta, orientado y sin alteraciones del estado de conciencia. Un estudio inicial de electromiografía no muestra hallazgos concluyentes.\n¿Cuál es el tratamiento inicial más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Metilprednisolona intravenosa en altas dosis."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Inmunoglobulina intravenosa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Interferón beta."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Acetazolamida."
      }
    ]
  },
  {
    "id": 242,
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "GINECOLOGÍA Y OBSTETRICIA",
    "slug": "ginecologia_y_obstetricia",
    "difficulty": "easy",
    "correctOptionId": "C",
    "explanation": "La hipertensión diagnosticada antes de las 20 semanas de gestación corresponde a hipertensión arterial crónica. Además, esta paciente presenta alto riesgo de recurrencia de preeclampsia por antecedente de preeclampsia severa, por lo que requiere profilaxis con ácido acetilsalicílico a dosis bajas.",
    "keyPoints": [
      "Cuando veas: Hipertensión antes de las 20 semanas. Antecedente de preeclampsia. Ausencia de proteinuria.",
      "Debes pensar en: Hipertensión arterial crónica.",
      "Tema: Trastornos hipertensivos del embarazo."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la diferencia entre hipertensión crónica y preeclampsia.\nLa clave no es la presión arterial.\nLa clave es:\nLa edad gestacional.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Embarazo de 13 semanas.\n• TA ≥140/90 mmHg.\n• Sin proteinuria.\n• Sin daño orgánico.\nPor definición:\nLa hipertensión diagnosticada antes de las 20 semanas corresponde a:\nHipertensión arterial crónica.\n¿Por qué NO es preeclampsia?\nPorque la preeclampsia clásicamente aparece:\nDespués de las 20 semanas.\nSalvo situaciones excepcionales.\n¿Qué tratamiento debe recibir?\nControl tensional con fármacos seguros en el embarazo:\n• Labetalol.\n• Nifedipino.\n• Metildopa.\nAdemás:\nÁcido acetilsalicílico en dosis bajas (75-150 mg/día, habitualmente 100 mg/día).\n¿Por qué usar aspirina?\nPorque presenta:\nAntecedente de preeclampsia severa.\nLo que la convierte en:\nPaciente de alto riesgo.\n¿Cuándo debe iniciarse?\nIdealmente:\nEntre las 12 y 16 semanas.\nY mantenerse hasta:\n36-37 semanas según protocolo.\n¿Por qué NO sulfato de magnesio?\nEl sulfato de magnesio se utiliza para:\n• Prevención de eclampsia.\n• Tratamiento de convulsiones.\nNo para hipertensión crónica aislada.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Antecedente de preeclampsia.\"\nY responden:\nPreeclampsia actual.\nSin embargo:\nEl dato decisivo es:\nLa hipertensión antes de las 20 semanas.\nEsto define:\nHipertensión arterial crónica.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar la edad gestacional.\n2.\tClasificar la hipertensión.\n3.\tReconocer factores de alto riesgo.\n4.\tIniciar antihipertensivo seguro.\n5.\tPrescribir aspirina profiláctica.\nPerlas de examen\n✅ Hipertensión antes de las 20 semanas = hipertensión crónica.\n✅ La preeclampsia suele aparecer después de las 20 semanas.\n✅ Antecedente de preeclampsia severa es indicación de aspirina profiláctica.\n✅ Labetalol y nifedipino son tratamientos de elección.\n✅ Los IECA y ARA-II están contraindicados en embarazo.\n✅ La aspirina disminuye el riesgo de recurrencia de preeclampsia.\n✅ El seguimiento obstétrico debe ser estrecho por el alto riesgo materno-fetal.\nReferencias\n• ACOG Practice Bulletin: Chronic Hypertension in Pregnancy.\n• ISSHP Guidelines for Hypertensive Disorders of Pregnancy.\n• Williams Obstetrics.\n• FIGO Recommendations on Preeclampsia Prevention.\n• UpToDate: Chronic Hypertension in Pregnancy.",
    "statement": "Mujer de 27 años, secundigestante de 13 semanas de gestación, acude a control prenatal. Refiere antecedente de preeclampsia severa en un embarazo previo. Durante la valoración actual se documentan cifras tensionales de 150/90 mmHg en dos mediciones separadas. No presenta proteinuria ni datos de daño a órgano blanco.\n¿Cuál es el diagnóstico y el tratamiento más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hipertensión gestacional; iniciar sulfato de magnesio."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Preeclampsia sin criterios de severidad; finalizar la gestación."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Hipertensión arterial crónica; iniciar antihipertensivo y ácido acetilsalicílico a baja dosis."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hipertensión transitoria del embarazo; observación únicamente."
      }
    ]
  },
  {
    "id": 243,
    "examArea": "BÁSICAS- ANATOMÍA - CIRUGÍA GENERAL",
    "topic": "CIRUGÍA GENERAL",
    "slug": "cirugia_general",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "El conducto inguinal contiene el cordón espermático en el hombre y el ligamento redondo del útero en la mujer. En ambos sexos también atraviesa el nervio ilioinguinal.",
    "keyPoints": [
      "Cuando veas: Conducto inguinal. Anatomía quirúrgica. Hernias inguinales.",
      "Debes pensar en: Cordón espermático y ligamento redondo.",
      "Tema: Conducto inguinal."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las relaciones anatómicas más preguntadas en cirugía general.\nLa clave no es el conducto.\nLa clave es:\nSu contenido.\n¿Qué atraviesa el conducto inguinal en el hombre?\nEl principal contenido es:\n• Cordón espermático.\nDentro de él transcurren:\n• Conducto deferente.\n• Arteria testicular.\n• Plexo pampiniforme.\n• Vasos cremastéricos.\n• Ramas nerviosas.\n¿Qué atraviesa el conducto inguinal en la mujer?\nEl principal contenido es:\n• Ligamento redondo del útero.\nEste se extiende:\nDesde el útero hasta los labios mayores.\n¿Qué estructura atraviesa el conducto en ambos sexos?\nEl:\n• Nervio ilioinguinal.\nEs una pregunta frecuente de examen.\n¿Por qué es importante clínicamente?\nPorque:\nLas hernias inguinales siguen el trayecto del conducto inguinal.\nY durante la cirugía:\nDeben identificarse estas estructuras para evitar lesiones.\n¿Cuál es la trampa de examen?\nMuchos estudiantes invierten:\nLos contenidos masculinos y femeninos.\nPor ello debes recordar:\n👉 Hombre = cordón espermático.\n👉 Mujer = ligamento redondo.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar el conducto inguinal.\n2.\tRecordar el contenido masculino.\n3.\tRecordar el contenido femenino.\n4.\tReconocer el nervio ilioinguinal en ambos sexos.\n5.\tRelacionarlo con hernias inguinales.\nPerlas de examen\n✅ Hombre → cordón espermático.\n✅ Mujer → ligamento redondo del útero.\n✅ El nervio ilioinguinal atraviesa el conducto en ambos sexos.\n✅ El anillo inguinal profundo se localiza lateral a los vasos epigástricos inferiores.\n✅ Las hernias indirectas atraviesan el anillo inguinal profundo.\n✅ Las hernias directas protruyen a través del triángulo de Hesselbach.\n✅ Es una de las preguntas anatómicas más frecuentes en cirugía.\nReferencias\n• Moore. Anatomía con Orientación Clínica.\n• Gray's Anatomy.\n• Netter Atlas de Anatomía Humana.\n• Schwartz's Principles of Surgery.\n• Sabiston Textbook of Surgery.",
    "statement": "¿Cuál de las siguientes estructuras atraviesa el conducto inguinal en el hombre y cuál en la mujer?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hombre: ligamento redondo del útero / Mujer: cordón espermático."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hombre: cordón espermático / Mujer: ligamento redondo del útero."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Hombre: arteria epigástrica inferior / Mujer: vena safena magna."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hombre: nervio femoral / Mujer: nervio obturador."
      }
    ]
  },
  {
    "id": 244,
    "examArea": "BÁSICAS-SEMIOLOGÍA - ONCOLOGÍA",
    "topic": "ONCOLOGÍA",
    "slug": "oncologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "El ganglio de Virchow corresponde a una adenopatía supraclavicular izquierda secundaria a diseminación metastásica por vía linfática. Clásicamente se asocia al cáncer gástrico avanzado.",
    "keyPoints": [
      "Cuando veas: Adenopatía supraclavicular izquierda. Ganglio duro. Ganglio indoloro.",
      "Debes pensar en: Cáncer gástrico.",
      "Tema: Semiología oncológica."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los signos semiológicos más importantes en oncología.\nLa clave no es el ganglio.\nLa clave es:\nSu localización.\n¿Qué es el ganglio de Virchow?\nEs una adenopatía localizada en:\nLa región supraclavicular izquierda.\n¿Por qué aparece?\nPorque recibe drenaje linfático proveniente de:\n• Abdomen.\n• Retroperitoneo.\n• Tubo digestivo.\nPor ello puede actuar como:\nSitio de metástasis a distancia.\n¿Con qué cáncer se asocia clásicamente?\nLa asociación histórica más importante es:\nAdenocarcinoma gástrico.\nPor eso también se conoce como:\n\"Nódulo centinela de Troisier.\"\n¿Qué otros tumores pueden producirlo?\nTambién puede observarse en:\n• Cáncer pancreático.\n• Cáncer colorrectal.\n• Cáncer de ovario.\n• Linfomas.\nSin embargo, para examen:\nVirchow = cáncer gástrico.\n¿Cuál es la trampa de examen?\nMuchos estudiantes responden:\nCáncer pulmonar.\nPorque asocian:\nGanglio supraclavicular.\nSin embargo:\nEl dato decisivo es:\nQue se encuentra en el lado izquierdo.\nEsto orienta a:\nMetástasis abdominal, especialmente gástrica.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar adenopatía supraclavicular izquierda.\n2.\tReconocer ganglio de Virchow.\n3.\tRelacionarlo con drenaje linfático abdominal.\n4.\tSospechar malignidad digestiva.\n5.\tPensar principalmente en cáncer gástrico.\nPerlas de examen\n✅ Ganglio de Virchow = adenopatía supraclavicular izquierda.\n✅ También se denomina nódulo de Troisier.\n✅ Sugiere metástasis abdominal.\n✅ La asociación clásica es adenocarcinoma gástrico.\n✅ Es un hallazgo de enfermedad avanzada.\n✅ Generalmente es duro, fijo e indoloro.\n✅ Constituye un signo semiológico de alta relevancia oncológica.\nReferencias\n• Bates' Guide to Physical Examination.\n• DeGowin's Diagnostic Examination.\n• Schwartz's Principles of Surgery.\n• Sabiston Textbook of Surgery.\n• Harrison's Principles of Internal Medicine.",
    "statement": "Durante el examen físico de un paciente se identifica una adenopatía supraclavicular izquierda dura, fija e indolora, compatible con ganglio de Virchow.\n¿Con cuál de las siguientes patologías se asocia clásicamente este hallazgo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Cáncer de pulmón."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Linfoma de Hodgkin."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Adenocarcinoma gástrico."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Carcinoma de tiroides."
      }
    ]
  },
  {
    "id": 245,
    "examArea": "BÁSICAS- EMBRIOLOGÍA Y OBSTETRICIA",
    "topic": "EMBRIOLOGÍA Y OBSTETRICIA",
    "slug": "embriologia_y_obstetricia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "El trofoblasto es la estructura embrionaria que participa en la formación de la placenta. La invasión inadecuada del trofoblasto extravelloso sobre las arterias espirales uterinas constituye uno de los mecanismos fisiopatológicos fundamentales en el desarrollo de la preeclampsia.",
    "keyPoints": [
      "Cuando veas: Placenta. Invasión de arterias espirales. Preeclampsia.",
      "Debes pensar en: Trofoblasto.",
      "Tema: Embriología placentaria."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque integra embriología y obstetricia.\nLa clave no es la placenta.\nLa clave es:\nLa invasión trofoblástica.\n¿Qué ocurre normalmente?\nEl trofoblasto se diferencia en:\n• Citotrofoblasto.\n• Sincitiotrofoblasto.\nPosteriormente:\nEl trofoblasto extravelloso invade las arterias espirales maternas.\n¿Para qué sirve esta invasión?\nTransforma arterias de:\n• Alta resistencia.\nEn vasos de:\n• Baja resistencia.\n• Alto flujo.\nGarantizando:\nAdecuada perfusión placentaria.\n¿Qué ocurre en la preeclampsia?\nExiste:\nInvasión trofoblástica incompleta.\nComo consecuencia:\nLas arterias espirales permanecen estrechas.\nEsto produce:\n• Hipoperfusión placentaria.\n• Isquemia placentaria.\n• Liberación de factores antiangiogénicos.\n• Disfunción endotelial materna.\nResultado final:\nPreeclampsia.\n¿Por qué NO es el amnios?\nEl amnios forma:\nLa cavidad amniótica.\nNo participa en la formación de la placenta.\n¿Por qué NO es el saco vitelino?\nEl saco vitelino participa en:\nLa hematopoyesis primitiva.\nNo en la invasión placentaria.\n¿Por qué NO es el alantoides?\nEl alantoides contribuye a:\nLa formación del uraco.\nNo es el origen de la placenta.\n¿Cuál es la trampa de examen?\nMuchos estudiantes responden:\nSincitiotrofoblasto.\nSin embargo:\nLa pregunta solicita la estructura embrionaria principal.\nLa respuesta correcta es:\nTrofoblasto.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tTrofoblasto.\n2.\tFormación placentaria.\n3.\tInvasión de arterias espirales.\n4.\tRemodelación vascular uterina.\n5.\tPreeclampsia cuando este proceso falla.\nPerlas de examen\n✅ El trofoblasto origina la porción fetal de la placenta.\n✅ El citotrofoblasto y sincitiotrofoblasto derivan del trofoblasto.\n✅ La invasión trofoblástica es esencial para la perfusión placentaria.\n✅ La falla de remodelación de arterias espirales es un mecanismo central de la preeclampsia.\n✅ La placenta es el órgano clave en la fisiopatología de la preeclampsia.\n✅ La resolución definitiva de la preeclampsia ocurre con la extracción de la placenta.\n✅ Es una de las preguntas clásicas de embriología aplicada a obstetricia.\nReferencias\n• Langman's Embryology.\n• Moore. The Developing Human.\n• Williams Obstetrics.\n• Cunningham Obstetricia.\n• ACOG Practice Bulletin: Preeclampsia and Hypertension in Pregnancy.",
    "statement": "¿Cuál de las siguientes estructuras embrionarias da origen a la placenta y se encuentra directamente implicada en la fisiopatología de trastornos hipertensivos del embarazo como la preeclampsia?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Amnios."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Trofoblasto."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Saco vitelino."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Alantoides."
      }
    ]
  },
  {
    "id": 246,
    "examArea": "BÁSICAS-NEUROANATOMÍA",
    "topic": "NEUROANATOMÍA",
    "slug": "neuroanatomia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La motilidad ocular extrínseca depende de tres pares craneales: III (oculomotor), IV (troclear) y VI (abducens). El nervio troclear inerva el músculo oblicuo superior.",
    "keyPoints": [
      "Cuando veas: Movimientos oculares. Diplopía. Músculos extraoculares.",
      "Debes pensar en: Pares III, IV y VI.",
      "Tema: Pares craneales."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica de neuroanatomía.\nLa clave no es la diplopía.\nLa clave es:\nRecordar la inervación de los músculos extraoculares.\n¿Qué nervios controlan los movimientos oculares?\nExisten tres:\n• III par: Oculomotor.\n• IV par: Troclear.\n• VI par: Abducens.\n¿Qué inerva cada uno?\nIII par:\n• Recto superior.\n• Recto inferior.\n• Recto medial.\n• Oblicuo inferior.\n• Elevador del párpado.\nIV par:\n• Oblicuo superior.\nVI par:\n• Recto lateral.\n¿Cómo recordarlo?\nLa regla clásica:\nLR6 SO4 AO3\n(Lateral Rectus VI, Superior Oblique IV, All Others III)\n¿Qué lesión tiene este paciente?\nLa limitación de la abducción indica:\nCompromiso del VI par craneal izquierdo.\n¿Cuál es la trampa de examen?\nMuchos estudiantes recuerdan únicamente:\nIII y VI.\nPero olvidan:\nEl IV par craneal.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar alteración de la motilidad ocular.\n2.\tRecordar los músculos extraoculares.\n3.\tAsociar cada músculo a su nervio.\n4.\tAplicar la regla LR6 SO4 AO3.\n5.\tReconocer que participan III, IV y VI.\nPerlas de examen\n✅ El nervio troclear inerva exclusivamente el oblicuo superior.\n✅ El troclear es el único par craneal que emerge por la cara dorsal del tronco encefálico.\n✅ El abducens inerva el recto lateral.\n✅ El oculomotor inerva todos los músculos extraoculares restantes.\n✅ LR6 SO4 AO3 es una regla clásica de examen.\n✅ La lesión del VI produce incapacidad para la abducción.\n✅ La lesión del IV produce diplopía vertical que empeora al mirar hacia abajo.\nReferencias\n• Snell Neuroanatomía Clínica.\n• Moore Anatomía con Orientación Clínica.\n• Adams and Victor's Neurology.\n• Gray's Anatomy.\n• Netter Atlas de Anatomía Humana.",
    "statement": "Hombre de 30 años consulta por visión doble que empeora al mirar hacia la izquierda. Al examen neurológico se evidencia limitación para la abducción del ojo izquierdo. Los reflejos pupilares son normales.\nDurante la evaluación de los músculos extraoculares, además de los pares craneales III (oculomotor) y VI (abducens), ¿qué otro par craneal participa en la motilidad ocular?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Par craneal II (óptico)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Par craneal IV (troclear)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Par craneal V (trigémino)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Par craneal VII (facial)."
      }
    ]
  },
  {
    "id": 247,
    "examArea": "MEDICINA INTERNA",
    "topic": "MEDICINA INTERNA",
    "slug": "medicina_interna",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "Los betabloqueadores disminuyen la frecuencia cardíaca al bloquear los receptores β1 cardíacos. Una de sus reacciones adversas más importantes es la bradicardia sintomática, que puede manifestarse con síncope.",
    "keyPoints": [
      "Cuando veas: Síncope. Bradicardia. Inicio reciente de antihipertensivo.",
      "Debes pensar en: Betabloqueadores.",
      "Tema: Antihipertensivos."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa los efectos adversos cardiovasculares de los antihipertensivos.\nLa clave no es el síncope.\nLa clave es:\nLa frecuencia cardíaca de 42 lpm.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Bradicardia marcada.\n• Episodio sincopal.\n• Inicio reciente de tratamiento.\nEsto orienta a:\nExceso de bloqueo del nodo sinusal.\n¿Qué medicamento produce esto?\nEl más clásico es:\nMetoprolol.\n¿Cómo actúa?\nBloquea receptores β1 cardíacos produciendo:\n• Disminución de frecuencia cardíaca.\n• Disminución de contractilidad.\n• Disminución de conducción AV.\n¿Cuáles son los efectos adversos más importantes?\n• Bradicardia.\n• Bloqueo AV.\n• Hipotensión.\n• Fatiga.\n• Síncope.\n¿Por qué NO es amlodipino?\nEl amlodipino produce:\n• Vasodilatación.\n• Edema periférico.\nGeneralmente no produce bradicardia significativa.\n¿Por qué NO es hidroclorotiazida?\nLa hidroclorotiazida suele producir:\n• Hipokalemia.\n• Hiponatremia.\nNo bradicardia.\n¿Por qué NO es losartán?\nLos ARA-II no disminuyen directamente:\nLa frecuencia cardíaca.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Antihipertensivo.\"\nY responden cualquier fármaco frecuente.\nSin embargo:\nEl dato decisivo es:\nLa bradicardia marcada.\nEsto orienta inmediatamente a:\nBetabloqueadores.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar síncope.\n2.\tRevisar frecuencia cardíaca.\n3.\tReconocer bradicardia significativa.\n4.\tPensar en bloqueo β-adrenérgico.\n5.\tIdentificar metoprolol como causa probable.\nPerlas de examen\n✅ Los betabloqueadores son causa frecuente de bradicardia medicamentosa.\n✅ Metoprolol es un β1-selectivo.\n✅ La bradicardia sintomática puede manifestarse con síncope.\n✅ Los ARA-II no suelen alterar significativamente la frecuencia cardíaca.\n✅ Los calcioantagonistas dihidropiridínicos producen vasodilatación más que bradicardia.\n✅ La evaluación inicial incluye ECG para descartar trastornos de conducción.\n✅ La suspensión o ajuste del fármaco suele resolver el cuadro.\nReferencias\n• Katzung. Basic and Clinical Pharmacology.\n• Goodman & Gilman's The Pharmacological Basis of Therapeutics.\n• Braunwald's Heart Disease.\n• Harrison's Principles of Internal Medicine.\n• ESC Guidelines for Arterial Hypertension.",
    "statement": "Hombre de 62 años con diagnóstico reciente de hipertensión arterial inicia tratamiento farmacológico. Pocos días después presenta un episodio de síncope mientras caminaba. En el servicio de urgencias se documenta presión arterial de 140/90 mmHg y frecuencia cardíaca de 42 lpm. No presenta alteraciones neurológicas ni otros hallazgos relevantes.\n¿Cuál de los siguientes medicamentos es el más probable responsable del cuadro?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Amlodipino."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hidroclorotiazida."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Metoprolol."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Losartán."
      }
    ]
  },
  {
    "id": 248,
    "examArea": "PEDIATRÍA - INFECTOLOGÍA",
    "topic": "INFECTOLOGÍA",
    "slug": "infectologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La combinación de fiebre, síndrome meníngeo y exantema petequial o purpúrico debe hacer sospechar meningococcemia invasiva hasta demostrar lo contrario. Neisseria meningitidis es el agente clásicamente asociado.",
    "keyPoints": [
      "Cuando veas: Fiebre. Rigidez de nuca. Petequias o púrpura. Deterioro rápido.",
      "Debes pensar en: Meningococcemia.",
      "Tema: Meningitis bacteriana."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las emergencias infecciosas pediátricas más importantes.\nLa clave no es la fiebre.\nLa clave es:\nLa asociación entre meningismo y petequias.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Fiebre.\n• Vómitos.\n• Rigidez de nuca.\n• Petequias.\n• Equimosis.\nEsta combinación es altamente sugestiva de:\nEnfermedad meningocócica invasiva.\n¿Cuál es el germen?\nEl agente clásico es:\nNeisseria meningitidis.\n¿Por qué aparecen las petequias?\nPor:\n• Endotoxemia.\n• Vasculitis.\n• Coagulación intravascular diseminada.\nEsto explica la aparición de:\n• Petequias.\n• Púrpura.\n• Equimosis.\n¿Cuál es la complicación más temida?\n• Shock séptico.\n• Síndrome de Waterhouse-Friderichsen.\n• Coagulación intravascular diseminada.\n¿Cuál es el manejo inicial?\nAnte la sospecha clínica:\n• Hemocultivos.\n• Antibióticos intravenosos inmediatos (ceftriaxona o cefotaxima).\n• Soporte hemodinámico.\nNo debe retrasarse el tratamiento esperando estudios.\n¿Por qué NO es neumococo?\nStreptococcus pneumoniae es una causa frecuente de meningitis.\nSin embargo:\nNo se asocia clásicamente al exantema petequial fulminante.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Rigidez de nuca.\"\nY responden:\nNeumococo.\nSin embargo:\nEl dato decisivo es:\nLa presencia de petequias y equimosis.\nEsto orienta a:\nNeisseria meningitidis.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar fiebre.\n2.\tReconocer signos meníngeos.\n3.\tBuscar petequias o púrpura.\n4.\tSospechar meningococcemia.\n5.\tIniciar ceftriaxona inmediatamente.\nPerlas de examen\n✅ Petequias + meningismo = meningococo hasta demostrar lo contrario.\n✅ Neisseria meningitidis es un diplococo gramnegativo.\n✅ Puede evolucionar rápidamente a shock séptico.\n✅ La ceftriaxona es tratamiento empírico de elección.\n✅ La profilaxis de contactos cercanos es obligatoria.\n✅ El síndrome de Waterhouse-Friderichsen es una complicación clásica.\n✅ Es una verdadera emergencia pediátrica.\nReferencias\n• Nelson Textbook of Pediatrics.\n• Red Book: American Academy of Pediatrics.\n• Mandell, Douglas and Bennett's Infectious Diseases.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Meningococcal Infection.",
    "statement": "Niña de 10 años, previamente sana y con esquema de vacunación completo, consulta por fiebre, vómitos y aparición súbita de petequias y equimosis. Durante la valoración presenta rigidez de nuca y taquicardia.\n¿Cuál es la sospecha diagnóstica más probable y cuál es el microorganismo más frecuentemente implicado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Meningitis neumocócica; Streptococcus pneumoniae."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Meningococcemia con meningitis; Neisseria meningitidis."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Encefalitis viral; Virus herpes simple tipo 1."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Púrpura trombocitopénica inmune; Epstein-Barr virus."
      }
    ]
  },
  {
    "id": 249,
    "examArea": "BÁSICAS- FARMACOLOGÍA - ORTOPEDIA",
    "topic": "ORTOPEDIA",
    "slug": "ortopedia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "Las fluoroquinolonas se asocian a tendinopatía y ruptura tendinosa, especialmente del tendón de Aquiles. El riesgo es mayor en adultos mayores, pacientes con insuficiencia renal y usuarios concomitantes de corticoides.",
    "keyPoints": [
      "Cuando veas: Ruptura del tendón de Aquiles. Tendinopatía. Uso reciente de antibióticos.",
      "Debes pensar en: Fluoroquinolonas.",
      "Tema: Reacciones adversas medicamentosas."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica de farmacología clínica.\nLa clave no es la ruptura.\nLa clave es:\nLa asociación medicamento-evento adverso.\n¿Qué está ocurriendo realmente?\nLas fluoroquinolonas pueden producir:\n• Tendinitis.\n• Degeneración del colágeno.\n• Ruptura tendinosa.\nEl tendón más afectado es:\nEl tendón de Aquiles.\n¿Cuál es el antibiótico clásico?\nLa respuesta más preguntada en los exámenes es:\nCiprofloxacina.\nAunque el efecto puede ocurrir con:\n• Levofloxacina.\n• Moxifloxacina.\n• Otras fluoroquinolonas.\n¿Quiénes tienen mayor riesgo?\n• Mayores de 60 años.\n• Pacientes con enfermedad renal.\n• Trasplantados.\n• Usuarios de corticoides sistémicos.\n¿Por qué NO amoxicilina?\nLas penicilinas no se asocian a:\nRuptura tendinosa.\n¿Por qué NO azitromicina?\nLos macrólidos se relacionan más con:\nProlongación del QT.\n¿Por qué NO cefalexina?\nLas cefalosporinas no presentan esta asociación clásica.\n¿Cuál es la trampa de examen?\nMuchos estudiantes recuerdan:\n\"Antibiótico.\"\nPero olvidan:\nLa reacción adversa específica.\nSiempre que aparezca:\nTendón de Aquiles + antibiótico\nDebes pensar en:\nFluoroquinolonas.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar tendinopatía.\n2.\tRelacionarla con fármacos.\n3.\tPensar en fluoroquinolonas.\n4.\tRecordar el tendón de Aquiles.\n5.\tElegir ciprofloxacina.\nPerlas de examen\n✅ Ciprofloxacina es la asociación clásica en exámenes.\n✅ Las fluoroquinolonas pueden causar tendinitis y ruptura tendinosa.\n✅ El tendón de Aquiles es el más frecuentemente afectado.\n✅ El riesgo aumenta con el uso concomitante de corticoides.\n✅ Puede ocurrir incluso semanas después de iniciar el medicamento.\n✅ La FDA mantiene advertencias específicas sobre este efecto adverso.\n✅ Ante síntomas tendinosos debe suspenderse la fluoroquinolona.\nReferencias\n• Katzung. Basic and Clinical Pharmacology.\n• Goodman & Gilman's The Pharmacological Basis of Therapeutics.\n• Harrison's Principles of Internal Medicine.\n• FDA Safety Communication on Fluoroquinolones.\n• UpToDate: Fluoroquinolone Adverse Effects.",
    "statement": "Paciente de 55 años consulta por dolor súbito en la región posterior del tobillo mientras caminaba. La evaluación confirma ruptura del tendón de Aquiles. Al revisar antecedentes farmacológicos se identifica el uso reciente de un antibiótico.\n¿Cuál de los siguientes antibióticos se asocia clásicamente con este evento adverso?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Amoxicilina."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Azitromicina."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Ciprofloxacina."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Cefalexina."
      }
    ]
  },
  {
    "id": 250,
    "examArea": "UROLOGÍA",
    "topic": "UROLOGÍA",
    "slug": "urologia",
    "difficulty": "easy",
    "correctOptionId": "C",
    "explanation": "El varicocele corresponde a una dilatación anormal del plexo venoso pampiniforme. Se presenta típicamente como una masa escrotal que aumenta con el Valsalva y la bipedestación, con transiluminación negativa.",
    "keyPoints": [
      "Cuando veas: Masa escrotal indolora. Aumenta con el esfuerzo. Valsalva positivo. Transiluminación negativa.",
      "Debes pensar en: Varicocele.",
      "Tema: Patología escrotal."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica de urología porque evalúa el diagnóstico diferencial de las masas escrotales.\nLa clave no es la masa.\nLa clave es:\nQue aumenta con el Valsalva.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Masa escrotal.\n• Incremento con la bipedestación.\n• Incremento con el esfuerzo.\n• Transiluminación negativa.\nEsto corresponde a:\nDilatación venosa del plexo pampiniforme.\nEs decir:\nVaricocele.\n¿Cómo se describe clásicamente?\nComo una:\n\"Bolsa de gusanos.\"\n¿Qué lado se afecta más?\nClásicamente:\nEl lado izquierdo.\nDebido al drenaje de la vena gonadal izquierda hacia la vena renal izquierda.\n¿Por qué NO es hidrocele?\nPorque el hidrocele:\n• Transilumina.\n• No aumenta significativamente con Valsalva.\n¿Por qué NO es hernia inguinoescrotal?\nPuede aumentar con el esfuerzo.\nSin embargo:\nEl hallazgo clásico de examen con Valsalva positivo y masa venosa escrotal orienta más a varicocele.\n¿Por qué NO es espermatocele?\nEl espermatocele suele ser:\n• Quístico.\n• Transiluminable.\n• Dependiente del epidídimo.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Masa escrotal.\"\nY responden:\nHidrocele.\nSin embargo:\nEl dato decisivo es:\nValsalva positivo con transiluminación negativa.\nEsto orienta a:\nVaricocele.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar masa escrotal.\n2.\tEvaluar transiluminación.\n3.\tRealizar maniobra de Valsalva.\n4.\tReconocer dilatación venosa.\n5.\tDiagnosticar varicocele.\nPerlas de examen\n✅ El varicocele es la causa corregible más frecuente de infertilidad masculina.\n✅ Se origina por dilatación del plexo pampiniforme.\n✅ Es más frecuente en el lado izquierdo.\n✅ La ecografía Doppler confirma el diagnóstico.\n✅ La masa aumenta con Valsalva y al estar de pie.\n✅ La transiluminación es negativa.\n✅ La descripción clásica es \"bolsa de gusanos\".\nReferencias\n• Campbell-Walsh Urology.\n• Smith & Tanagho's General Urology.\n• Nelson Textbook of Pediatrics.\n• EAU Guidelines on Male Infertility.\n• UpToDate: Clinical Manifestations and Diagnosis of Varicocele.",
    "statement": "Varón de 25 años, albañil, consulta por aparición progresiva de una masa escrotal indolora de varios meses de evolución. Refiere que aumenta de tamaño al permanecer de pie y durante esfuerzos físicos. Al examen físico el test de Valsalva es positivo y la transiluminación es negativa.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hidrocele."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hernia inguinoescrotal."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Varicocele."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Espermatocele."
      }
    ]
  },
  {
    "id": 251,
    "examArea": "HEMATOLOGÍA - URGENCIAS",
    "topic": "URGENCIAS",
    "slug": "urgencias",
    "difficulty": "medium",
    "correctOptionId": "D",
    "explanation": "En pacientes con hemorragia mayor o trauma significativo bajo tratamiento con warfarina, la reversión más rápida y efectiva se logra con concentrado de complejo protrombínico (PCC de 4 factores) asociado a vitamina K intravenosa.",
    "keyPoints": [
      "Cuando veas: Warfarina. Sangrado activo. INR elevado. Trauma.",
      "Debes pensar en: Reversión urgente de anticoagulación.",
      "Tema: Anticoagulación y reversión."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el manejo de hemorragias en pacientes anticoagulados.\nLa clave no es el INR.\nLa clave es:\nLa presencia de sangrado activo.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Anticoagulación por warfarina.\n• Sangrado traumático.\n• INR supraterapéutico.\nEsto requiere:\nReversión inmediata.\n¿Cuál es la mejor estrategia?\nLa más rápida y efectiva es:\n• PCC de 4 factores.\n• Vitamina K intravenosa.\n¿Por qué PCC?\nPorque repone inmediatamente:\n• Factor II.\n• Factor VII.\n• Factor IX.\n• Factor X.\nCorrigiendo el INR en minutos.\n¿Por qué también vitamina K?\nPorque:\nLa acción del PCC es temporal.\nLa vitamina K permite:\nRestablecer la síntesis hepática de factores de coagulación.\n¿Por qué NO vitamina K sola?\nPorque tarda:\n6 a 24 horas en ejercer efecto.\nInsuficiente en un sangrado agudo.\n¿Por qué NO plasma fresco congelado?\nPuede utilizarse si no existe PCC disponible.\nSin embargo:\n• Corrige más lentamente.\n• Requiere grandes volúmenes.\n• Tiene más complicaciones transfusionales.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"INR 3.2\"\nY responden:\nVitamina K.\nSin embargo:\nEl dato decisivo es:\nLa hemorragia activa traumática.\nEsto obliga a:\nReversión inmediata con PCC.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar sangrado mayor.\n2.\tReconocer uso de warfarina.\n3.\tSolicitar INR.\n4.\tAdministrar PCC de 4 factores.\n5.\tAsociar vitamina K intravenosa.\nPerlas de examen\n✅ PCC de 4 factores es el método de reversión más rápido para warfarina.\n✅ La vitamina K siempre debe acompañar la reversión urgente.\n✅ El plasma fresco congelado es alternativa cuando no hay PCC.\n✅ El INR no determina por sí solo la gravedad; el sangrado sí.\n✅ La corrección del INR con PCC ocurre en minutos.\n✅ La warfarina inhibe los factores II, VII, IX y X dependientes de vitamina K.\n✅ Toda hemorragia mayor en anticoagulados requiere reversión inmediata.\nReferencias\n• Harrison's Principles of Internal Medicine.\n• Tintinalli's Emergency Medicine.\n• ACC Expert Consensus on Management of Bleeding in Patients on Oral Anticoagulants.\n• CHEST Guidelines on Antithrombotic Therapy.\n• UpToDate: Reversal of Warfarin Anticoagulation.",
    "statement": "Hombre de 45 años con antecedente de fibrilación auricular en tratamiento crónico con warfarina consulta a urgencias tras sufrir una herida por arma de fuego en el brazo izquierdo. Presenta sangrado activo importante, aunque se encuentra hemodinámicamente estable. Los estudios iniciales reportan INR de 3.2.\n¿Cuál es la intervención más efectiva para revertir rápidamente la anticoagulación?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar vitamina K intravenosa como única medida."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Suspender warfarina y repetir INR en 24 horas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar plasma fresco congelado."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar concentrado de complejo protrombínico de 4 factores asociado a vitamina K intravenosa."
      }
    ]
  },
  {
    "id": 252,
    "examArea": "HEMATOLOGÍA",
    "topic": "HEMATOLOGÍA",
    "slug": "hematologia",
    "difficulty": "easy",
    "correctOptionId": "C",
    "explanation": "La PTI es una enfermedad autoinmune caracterizada por trombocitopenia aislada, con hemoglobina y leucocitos normales, sin evidencia de hemólisis ni alteraciones en otras series hematológicas. El tratamiento inicial en pacientes sintomáticos o con plaquetas <30.000/μL son los corticoides sistémicos.",
    "keyPoints": [
      "Cuando veas: Petequias. Equimosis. Trombocitopenia aislada. Hemograma normal.",
      "Debes pensar en: PTI.",
      "Tema: Trastornos plaquetarios."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la causa más frecuente de trombocitopenia aislada en adultos jóvenes.\nLa clave no es el número de plaquetas.\nLa clave es:\nQue las demás líneas celulares son normales.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Petequias.\n• Moretones espontáneos.\n• Plaquetas 20.000/μL.\n• Leucocitos normales.\n• Hemoglobina normal.\nEsto corresponde a:\nTrombocitopenia aislada.\nEl diagnóstico más probable es:\nPúrpura trombocitopénica inmune.\n¿Cuál es el mecanismo?\nAutoanticuerpos IgG contra:\nGlicoproteínas plaquetarias.\nEsto produce:\nDestrucción esplénica acelerada.\n¿Cuál es el tratamiento inicial?\nSi existen síntomas hemorrágicos o:\nPlaquetas <30.000/μL\nDebe iniciarse:\n• Prednisona.\no\n• Dexametasona en dosis altas.\n¿Cuándo usar inmunoglobulina intravenosa?\nEn:\n• Sangrado importante.\n• Necesidad de elevar rápidamente las plaquetas.\n• Preparación para procedimientos urgentes.\n¿Por qué NO es PTT?\nLa púrpura trombótica trombocitopénica produce:\n• Anemia hemolítica microangiopática.\n• Esquistocitos.\nHallazgos ausentes en el caso.\n¿Por qué NO es leucemia?\nLa leucemia suele acompañarse de:\n• Alteración de múltiples líneas celulares.\n• Blastos.\nNo se describen en el caso.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Plaquetas 20.000.\"\nY responden:\nTransfusión de plaquetas.\nSin embargo:\nEl dato decisivo es:\nLa trombocitopenia aislada compatible con PTI.\nLa conducta inicial es:\nCorticoides.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tConfirmar trombocitopenia aislada.\n2.\tExcluir hemólisis.\n3.\tSospechar PTI.\n4.\tIniciar corticoides.\n5.\tReservar IVIG para casos seleccionados.\nPerlas de examen\n✅ PTI = trombocitopenia aislada.\n✅ El resto del hemograma suele ser normal.\n✅ Los corticoides son el tratamiento inicial de primera línea.\n✅ La IVIG eleva rápidamente el conteo plaquetario.\n✅ El riesgo hemorrágico aumenta marcadamente por debajo de 20.000/μL.\n✅ La médula ósea suele mostrar aumento de megacariocitos.\n✅ Es un diagnóstico de exclusión.\nReferencias\n• Williams Hematology.\n• Hoffbrand's Essential Haematology.\n• Harrison's Principles of Internal Medicine.\n• ASH Guidelines for Immune Thrombocytopenia.\n• UpToDate: Immune Thrombocytopenia in Adults.",
    "statement": "Mujer de 23 años, sin antecedentes de importancia, consulta por aparición progresiva de petequias y equimosis espontáneas. Los estudios iniciales reportan plaquetas de 20.000/μL. El resto del hemograma es normal. El frotis de sangre periférica no evidencia hemólisis ni alteraciones en otras líneas celulares.\n¿Cuál es el diagnóstico más probable y la conducta inicial más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Púrpura trombótica trombocitopénica; plasmaféresis urgente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Leucemia aguda; aspirado de médula ósea."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Púrpura trombocitopénica inmune (PTI); iniciar corticoides."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Coagulación intravascular diseminada; transfusión masiva."
      }
    ]
  },
  {
    "id": 253,
    "examArea": "NEFROLOGÍA",
    "topic": "NEFROLOGÍA",
    "slug": "nefrologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La nefropatía membranosa es la glomerulopatía que más se asocia a fenómenos tromboembólicos. La pérdida urinaria de anticoagulantes naturales (antitrombina III, proteínas C y S) y la hipoalbuminemia severa generan un importante estado de hipercoagulabilidad.",
    "keyPoints": [
      "Cuando veas: Síndrome nefrótico. Nefropatía membranosa. Albúmina <2.5 g/dL.",
      "Debes pensar en: Trombosis.",
      "Tema: Complicaciones del síndrome nefrótico."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la complicación más característica del síndrome nefrótico.\nLa clave no es la proteinuria.\nLa clave es:\nLa hipoalbuminemia.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Síndrome nefrótico.\n• Albúmina de 2.2 g/dL.\n• Nefropatía membranosa.\nEsto genera:\nEstado de hipercoagulabilidad.\n¿Por qué ocurre?\nPor pérdida urinaria de:\n• Antitrombina III.\n• Proteína C.\n• Proteína S.\nAdemás existe:\n• Aumento de fibrinógeno.\n• Incremento de factores procoagulantes.\nResultado:\nMayor riesgo trombótico.\n¿Cuál es la trombosis clásica?\nLa asociación más preguntada en exámenes es:\nTrombosis de la vena renal.\nTambién aumenta el riesgo de:\n• TVP.\n• Tromboembolismo pulmonar.\n¿Qué glomerulopatía se asocia más?\nLa respuesta clásica es:\nNefropatía membranosa.\nEspecialmente cuando:\nAlbúmina <2.5 g/dL.\n¿Por qué NO hemorragia?\nEl síndrome nefrótico produce:\nHipercoagulabilidad.\nNo tendencia hemorrágica.\n¿Cuál es la trampa de examen?\nMuchos estudiantes recuerdan:\n\"Síndrome nefrótico = infecciones.\"\nLo cual es cierto.\nSin embargo:\nLa nefropatía membranosa tiene una asociación particularmente fuerte con:\nEventos tromboembólicos.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar síndrome nefrótico.\n2.\tRevisar albúmina sérica.\n3.\tReconocer estado hipercoagulable.\n4.\tAsociar nefropatía membranosa.\n5.\tPensar en trombosis venosa renal o TVP.\nPerlas de examen\n✅ La nefropatía membranosa es la glomerulopatía con mayor riesgo trombótico.\n✅ La trombosis de la vena renal es una asociación clásica de examen.\n✅ Albúmina <2.5 g/dL aumenta significativamente el riesgo.\n✅ Existe pérdida urinaria de antitrombina III.\n✅ También aumenta el riesgo de embolia pulmonar.\n✅ El síndrome nefrótico es un estado de hipercoagulabilidad adquirida.\n✅ La profilaxis anticoagulante puede considerarse en pacientes seleccionados de alto riesgo.\nReferencias\n• Brenner & Rector's The Kidney.\n• KDIGO Glomerular Disease Guidelines.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Hypercoagulability in Nephrotic Syndrome.\n• Comprehensive Clinical Nephrology.",
    "statement": "Hombre de 55 años con diagnóstico reciente de síndrome nefrótico secundario a nefropatía membranosa. Los estudios muestran albúmina sérica de 2.2 g/dL. No presenta antecedentes de eventos trombóticos.\n¿Cuál es la complicación más probable a desarrollar?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hemorragia intracraneal espontánea."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Trombosis venosa profunda o trombosis de la vena renal."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Endocarditis infecciosa."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Crisis hipercalcémica."
      }
    ]
  },
  {
    "id": 254,
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "GINECOLOGÍA Y OBSTETRICIA",
    "slug": "ginecologia_y_obstetricia",
    "difficulty": "easy",
    "correctOptionId": "C",
    "explanation": "La torsión ovárica ocurre por rotación del ovario sobre su pedículo vascular, comprometiendo inicialmente el drenaje venoso y posteriormente el flujo arterial. El signo ecográfico de \"remolino\" es altamente sugestivo de torsión anexial y constituye una urgencia ginecológica.",
    "keyPoints": [
      "Cuando veas: Dolor pélvico súbito. Náuseas o vómitos. Masa anexial. Signo de remolino.",
      "Debes pensar en: Torsión ovárica.",
      "Tema: Abdomen agudo ginecológico."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las emergencias ginecológicas más importantes.\nLa clave no es el dolor.\nLa clave es:\nEl signo ecográfico de remolino.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Dolor súbito.\n• Náuseas.\n• Masa anexial.\nY la ecografía reporta:\nSigno de \"whirlpool\".\nEsto corresponde a:\nTorsión del pedículo anexial.\n¿Qué sucede fisiopatológicamente?\nInicialmente se compromete:\n• Retorno venoso.\nPosteriormente:\n• Flujo arterial.\nLo que puede producir:\n• Isquemia.\n• Necrosis ovárica.\n¿Cuál es el tratamiento?\nLa conducta correcta es:\nLaparoscopia urgente.\nCon:\n• Destorsión ovárica.\n• Preservación del ovario si es viable.\n¿Por qué NO observar?\nPorque:\nCada hora aumenta el riesgo de pérdida ovárica.\n¿Por qué NO administrar antibióticos?\nNo existen datos sugestivos de:\nEnfermedad inflamatoria pélvica.\n¿Por qué NO metotrexato?\nNo existen hallazgos sugestivos de:\nEmbarazo ectópico.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Masa anexial.\"\nY responden:\nQuiste ovárico.\nSin embargo:\nEl dato decisivo es:\nEl signo de remolino.\nEste hallazgo es prácticamente clásico de:\nTorsión ovárica.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar dolor súbito.\n2.\tReconocer masa anexial.\n3.\tIdentificar signo de remolino.\n4.\tDiagnosticar torsión ovárica.\n5.\tRealizar laparoscopia urgente.\nPerlas de examen\n✅ El signo de \"whirlpool\" es altamente sugestivo de torsión ovárica.\n✅ El dolor suele ser súbito e intenso.\n✅ Las náuseas y vómitos son frecuentes.\n✅ La ecografía Doppler puede mostrar disminución o ausencia de flujo.\n✅ La presencia de flujo arterial NO excluye torsión.\n✅ El tratamiento es quirúrgico urgente.\n✅ Actualmente se recomienda preservar el ovario siempre que sea posible.\nReferencias\n• Williams Gynecology.\n• Berek & Novak's Gynecology.\n• ACOG Committee Opinion on Adnexal Torsion.\n• UpToDate: Ovarian and Fallopian Tube Torsion.\n• Campbell-Walsh Gynecology and Pelvic Surgery.",
    "statement": "Mujer de 34 años consulta por dolor pélvico de inicio súbito durante actividad física intensa, asociado a náuseas. La ecografía transvaginal evidencia una masa anexial izquierda con signo de \"remolino\" (whirlpool sign).\n¿Cuál es el diagnóstico más probable y cuál es el manejo más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Embarazo ectópico; metotrexato."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Quiste ovárico hemorrágico; observación."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Torsión ovárica; laparoscopia urgente con destorsión ovárica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Enfermedad inflamatoria pélvica; antibióticos intravenosos."
      }
    ]
  },
  {
    "id": 255,
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "GINECOLOGÍA Y OBSTETRICIA",
    "slug": "ginecologia_y_obstetricia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "El cuadro clínico es compatible con mastitis puerperal. El microorganismo más frecuentemente implicado es Staphylococcus aureus. El tratamiento inicial consiste en antibióticos dirigidos contra cocos grampositivos y el mantenimiento de la lactancia o extracción frecuente de leche.",
    "keyPoints": [
      "Cuando veas: Posparto. Lactancia. Mama dolorosa y eritematosa. Fiebre. Sin absceso.",
      "Debes pensar en: Mastitis puerperal.",
      "Tema: Patología mamaria del puerperio."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las complicaciones más frecuentes de la lactancia.\nLa clave no es la fiebre.\nLa clave es:\nLa ausencia de absceso.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Posparto reciente.\n• Lactancia activa.\n• Dolor mamario.\n• Eritema.\n• Fiebre.\nEsto corresponde a:\nMastitis puerperal.\n¿Cuál es el germen más frecuente?\nLa respuesta clásica es:\nStaphylococcus aureus.\n¿Cuál es el tratamiento?\n• Dicloxacilina.\no\n• Cefalexina.\nAdemás:\nContinuar la lactancia materna.\n¿Por qué continuar lactando?\nPorque favorece:\n• Vaciamiento mamario.\n• Resolución de la infección.\n• Disminución de la congestión.\n¿Cuándo se realiza drenaje?\nSolo cuando existe:\n• Absceso mamario.\n• Fluctuación.\n• Colección documentada.\nHallazgos ausentes en este caso.\n¿Por qué NO suspender la lactancia?\nPorque:\nNo mejora la evolución y puede empeorar la congestión mamaria.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Fiebre y mama dolorosa.\"\nY responden:\nDrenaje quirúrgico.\nSin embargo:\nEl dato decisivo es:\nLa ausencia de absceso.\nEsto orienta a:\nManejo médico.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar mastitis puerperal.\n2.\tBuscar absceso.\n3.\tSi no existe colección → antibióticos.\n4.\tMantener lactancia.\n5.\tReevaluar respuesta clínica.\nPerlas de examen\n✅ Staphylococcus aureus es el agente causal más frecuente.\n✅ La lactancia NO debe suspenderse.\n✅ Dicloxacilina y cefalexina son tratamientos de primera línea.\n✅ El vaciamiento frecuente de la mama es fundamental.\n✅ El absceso mamario requiere drenaje.\n✅ La mastitis suele aparecer durante las primeras semanas posparto.\n✅ La ecografía mamaria se reserva para sospecha de absceso.\nReferencias\n• Williams Obstetrics.\n• ACOG Committee Opinion on Breastfeeding Challenges.\n• Academy of Breastfeeding Medicine Protocol #36.\n• Nelson Textbook of Pediatrics.\n• UpToDate: Lactational Mastitis.",
    "statement": "Mujer de 30 años, G1P1, consulta por fiebre y dolor mamario 8 días después de un parto vaginal. Refiere lactancia materna exclusiva. Al examen físico se evidencia una mama eritematosa, tumefacta y dolorosa a la palpación, sin fluctuación ni hallazgos sugestivos de colección.\n¿Cuál es la conducta inicial más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Suspender la lactancia e iniciar cabergolina."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Drenaje quirúrgico urgente."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar dicloxacilina o cefalexina y continuar la lactancia materna."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Observación ambulatoria sin tratamiento."
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
const startMatch = content.match(/  \{\r?\n    id: "dr-q-241"/);
const endMatch = content.match(/\r?\n\];/);
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
console.log(`Patched dr-q-241 through dr-q-255 (${questions.length} questions) in ${coexamPath}`);
