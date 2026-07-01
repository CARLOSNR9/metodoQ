import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coexamPath = path.join(__dirname, "../src/data/dr-q-coexam-questions.ts");

const questions = [
  {
    "id": 207,
    "examArea": "GASTROENTEROLOGÍA",
    "topic": "GASTROENTEROLOGÍA",
    "slug": "gastroenterologia",
    "difficulty": "hard",
    "correctOptionId": "B",
    "explanation": "Forrest IIa, Glasgow-Blatchford alto riesgo (>7), úlcera péptica sangrante secundaria a AINE.",
    "keyPoints": [
      "Cuando veas: Hematemesis y melena en paciente con AINEs. Vaso visible no sangrante en endoscopia. Anemia y taquicardia.",
      "Debes pensar en: Forrest IIa, Glasgow-Blatchford alto riesgo, úlcera péptica por AINE.",
      "Tema: Hemorragia digestiva alta y clasificación de Forrest."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q.\r\n\r\nEsta es una pregunta clásica de gastroenterología porque evalúa una trampa frecuente: clasificar mal la lesión endoscópica o subestimar el riesgo clínico por no integrar Forrest con Glasgow-Blatchford.\r\n\r\nLa clave no es la hemoglobina aislada ni el antecedente de AINEs por sí solo.\r\nLa clave es:\r\nVaso visible no sangrante en lecho ulceroso = Forrest IIa + anemia significativa y taquicardia = Glasgow-Blatchford alto riesgo.\r\n\r\n¿Qué está ocurriendo realmente?\r\nEl paciente presenta:\r\n• Hombre de 55 años con uso frecuente de AINEs por gonalgia.\r\n• Hematemesis abundante y melena de inicio reciente.\r\n• Taquicardia sin hipotensión (inestabilidad hemodinámica incipiente).\r\n• Endoscopia: úlcera gástrica 1.5 cm con vaso visible no sangrante, sin sangrado activo.\r\n• Hb 8 g/dL y BUN 32 mg/dL (anemia significativa y absorción de sangre digestiva).\r\n\r\nRecordemos hemorragia digestiva alta y Forrest:\r\n• Forrest Ia/Ib: sangrado activo (chorro o babeo).\r\n• Forrest IIa: vaso visible no sangrante (alto riesgo de resangrado).\r\n• Forrest IIb: coágulo adherido; IIc: mancha hemática plana; III: base limpia.\r\n• Glasgow-Blatchford estratifica riesgo clínico; >7 indica alto riesgo.\r\n• Los AINEs inhiben prostaglandinas gástricas y son causa frecuente de úlcera péptica complicada.\r\n• El BUN elevado puede reflejar absorción de hemoglobina en el intestino.\r\n\r\nPor lo tanto:\r\nForrest IIa, Glasgow-Blatchford alto riesgo (>7) y úlcera péptica sangrante secundaria a AINE (opción B).\r\n\r\n¿Por qué la opción B es la respuesta correcta?\r\nEl vaso visible no sangrante corresponde a Forrest IIa. La combinación de anemia (Hb 8), taquicardia, hematemesis y contexto de AINEs eleva el Glasgow-Blatchford por encima de 7.\r\n\r\n¿Por qué fallan las otras opciones?\r\nOpción A (Forrest Ia, bajo riesgo, gastritis erosiva): Forrest Ia implica sangrado activo; el Glasgow-Blatchford no es bajo con Hb 8 y taquicardia.\r\nOpción C (Forrest IIc, bajo riesgo, úlcera cicatrizada): IIc es mancha hemática plana, no vaso visible; la úlcera no está cicatrizada.\r\nOpción D (Forrest III, Mallory-Weiss): Forrest III es base limpia; Mallory-Weiss es desgarro mucoso, no úlcera con vaso visible.\r\n\r\n¿Cuál es la trampa del examen?\r\nMuchos estudiantes confunden Forrest IIa (vaso visible no sangrante) con Forrest Ia (sangrado activo) o subestiman el Glasgow-Blatchford al no integrar anemia y taquicardia.\r\n\r\nEntonces, ¿qué debe recordarse?\r\nLa secuencia correcta es:\r\n1. Identificar el hallazgo endoscópico: vaso visible = Forrest IIa.\r\n2. Calcular Glasgow-Blatchford con datos clínicos y de laboratorio.\r\n3. Relacionar AINEs con úlcera péptica complicada.\r\n4. Forrest IIa requiere hemostasia endoscópica por alto riesgo de resangrado.\r\n\r\nPerlas de examen\r\n✅ Vaso visible no sangrante = Forrest IIa.\r\n✅ Glasgow-Blatchford >7 = alto riesgo de reintervención o mortalidad.\r\n✅ Forrest Ia = sangrado activo; no confundir con IIa.\r\n✅ AINEs = causa frecuente de úlcera péptica complicada.\r\n✅ BUN elevado puede reflejar absorción de sangre digestiva.\r\n\r\nReferencias\r\n• ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding.\r\n• Sleisenger and Fordtran's Gastrointestinal and Liver Disease.\r\n• Harrison's Principles of Internal Medicine.\r\n• UpToDate: Approach to acute upper gastrointestinal bleeding.\r\n• Baveno VII Consensus on Portal Hypertension.",
    "statement": "Paciente masculino de 55 años, con antecedente de gonalgia izquierda en manejo frecuente con antiinflamatorios no esteroideos, consulta por hematemesis abundante y melena de inicio reciente. Al examen físico presenta taquicardia sin hipotensión.\nLa endoscopia digestiva alta reporta:\n• Úlcera gástrica de 1.5 cm en curvatura menor.\n• Vaso visible no sangrante en el lecho ulceroso.\n• Sin sangrado activo al momento del procedimiento.\nLos laboratorios muestran:\n• Hemoglobina: 8 g/dL.\n• Nitrógeno ureico (BUN): 32 mg/dL.\n¿Cuál es la clasificación de Forrest, la puntuación de Glasgow-Blatchford y el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Forrest Ia, Glasgow-Blatchford bajo riesgo (<3), gastritis erosiva por AINE."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Forrest IIa, Glasgow-Blatchford alto riesgo (>7), úlcera péptica sangrante secundaria a AINE."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Forrest IIc, Glasgow-Blatchford bajo riesgo (<3), úlcera gástrica cicatrizada."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Forrest III, Glasgow-Blatchford intermedio, síndrome de Mallory-Weiss."
      }
    ]
  },
  {
    "id": 208,
    "examArea": "ENDOCRINOLOGÍA",
    "topic": "ENDOCRINOLOGÍA",
    "slug": "endocrinologia",
    "difficulty": "easy",
    "correctOptionId": "B",
    "explanation": "La elevación de TSH asociada a disminución de T4 libre es el patrón bioquímico característico del hipotiroidismo primario, generalmente secundario a enfermedad tiroidea primaria.",
    "keyPoints": [
      "Cuando veas: Fatiga. Intolerancia al frío. Aumento de peso. TSH elevada. T4 libre baja.",
      "Debes pensar en: Hipotiroidismo primario.",
      "Tema: Hipotiroidismo."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los trastornos endocrinológicos más frecuentes.\nLa clave no son los síntomas.\nLa clave es:\nLa combinación de TSH elevada y T4 libre baja.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Síntomas compatibles con disminución del metabolismo basal.\n• TSH elevada.\n• T4 libre disminuida.\nEstos hallazgos corresponden a:\nHipotiroidismo primario.\n¿Por qué aumenta la TSH?\nCuando la glándula tiroides produce menos hormonas:\n• Disminuye la T4.\n• Aumenta la secreción hipofisaria de TSH.\nEsto ocurre por:\nRetroalimentación negativa.\n¿Cuál es la causa más frecuente?\nEn adultos, la causa más frecuente es:\nTiroiditis de Hashimoto.\nAunque también pueden producirlo:\n• Cirugía tiroidea.\n• Radioyodo.\n• Déficit de yodo.\n¿Por qué NO es hipotiroidismo central?\nEn el hipotiroidismo central suele encontrarse:\n• T4 libre baja.\n• TSH baja o inapropiadamente normal.\nNo elevada.\n¿Por qué NO es hipertiroidismo?\nEl hipertiroidismo produce:\n• Pérdida de peso.\n• Intolerancia al calor.\n• Taquicardia.\nHallazgos opuestos a los del caso.\n¿Por qué NO es tiroiditis subaguda?\nLa tiroiditis subaguda típicamente cursa con:\n• Dolor cervical.\n• Fase inicial de hipertiroidismo.\nNo corresponde al cuadro presentado.\n¿Cuál es la trampa de examen?\nMuchos estudiantes memorizan:\nTSH alta = problema hipofisario.\nSin embargo:\nEl dato decisivo es:\nLa T4 libre disminuida.\nEsto indica:\nFalla primaria de la glándula tiroides.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar síntomas compatibles.\n2.\tInterpretar TSH.\n3.\tInterpretar T4 libre.\n4.\tDiferenciar origen primario o central.\n5.\tDiagnosticar hipotiroidismo primario.\nPerlas de examen\n✅ TSH elevada y T4 libre baja = hipotiroidismo primario.\n✅ La causa más frecuente es la tiroiditis de Hashimoto.\n✅ La intolerancia al frío es un síntoma clásico.\n✅ La piel seca y la caída del cabello son hallazgos frecuentes.\n✅ El estreñimiento es una manifestación común.\n✅ La bradicardia puede estar presente.\n✅ El tratamiento de elección es la levotiroxina.\nReferencias\n• Williams Textbook of Endocrinology.\n• Harrison's Principles of Internal Medicine.\n• American Thyroid Association Guidelines.\n• Greenspan's Basic and Clinical Endocrinology.\n• UpToDate: Clinical Manifestations and Diagnosis of Hypothyroidism.",
    "statement": "Paciente femenina de 25 años consulta por fatiga progresiva, intolerancia al frío, aumento de peso no intencional y estreñimiento de varios meses de evolución. Refiere además caída del cabello y piel seca. Los estudios de laboratorio muestran TSH elevada y T4 libre disminuida.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hipertiroidismo primario."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hipotiroidismo primario."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Hipotiroidismo central."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Tiroiditis subaguda."
      }
    ]
  },
  {
    "id": 209,
    "examArea": "CARDIOLOGÍA",
    "topic": "CARDIOLOGÍA",
    "slug": "cardiologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "El paciente presenta un tromboembolismo pulmonar de alto riesgo (masivo), evidenciado por hipotensión arterial e inestabilidad hemodinámica. En ausencia de contraindicaciones, la trombólisis sistémica constituye el tratamiento de elección.",
    "keyPoints": [
      "Cuando veas: Disnea súbita. Dolor torácico. Hipotensión. AngioTAC positiva para TEP.",
      "Debes pensar en: Tromboembolismo pulmonar de alto riesgo.",
      "Tema: Tromboembolismo pulmonar."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el manejo del tromboembolismo pulmonar según el riesgo de mortalidad.\nLa clave no es el patrón S1Q3T3.\nLa clave es:\nLa hipotensión.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Disnea súbita.\n• Dolor torácico.\n• Hipoxemia.\n• Hipotensión.\n• Confirmación imagenológica de TEP.\nEsto corresponde a:\nTromboembolismo pulmonar de alto riesgo.\n¿Por qué la hipotensión es tan importante?\nLa hipotensión indica:\nCompromiso hemodinámico secundario a falla ventricular derecha aguda.\nEsto aumenta significativamente:\nLa mortalidad.\nPor ello:\nRequiere reperfusión urgente.\n¿Cuál es el tratamiento de elección?\nEn pacientes con:\n• PAS <90 mmHg.\n• Choque obstructivo.\n• Inestabilidad hemodinámica.\nLa conducta indicada es:\nTrombólisis sistémica.\n¿Qué medicamentos pueden utilizarse?\nLos más empleados son:\n• Alteplasa.\n• Tenecteplasa.\nSu objetivo es:\nDisolver rápidamente el trombo.\n¿Por qué NO anticoagulación aislada?\nLa anticoagulación es el tratamiento estándar en:\nTEP de riesgo bajo o intermedio.\nSin embargo:\nEn presencia de choque o hipotensión es insuficiente como único tratamiento.\n¿Por qué NO iniciar directamente apixabán?\nLos anticoagulantes orales directos tienen indicación en:\nTratamiento posterior y prevención secundaria.\nNo son la estrategia inicial en un TEP masivo.\n¿Por qué NO colocar filtro de vena cava?\nLos filtros se reservan principalmente para:\n• Contraindicación absoluta para anticoagulación.\n• Recurrencia tromboembólica pese a anticoagulación adecuada.\nNo es la indicación principal en este escenario.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Defecto de llenado en arteria pulmonar.\"\nY responden:\nAnticoagulación.\nSin embargo:\nEl dato decisivo es:\nLa hipotensión arterial.\nEsto convierte el cuadro en:\nTEP de alto riesgo con indicación de trombólisis.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tConfirmar el diagnóstico.\n2.\tValorar estabilidad hemodinámica.\n3.\tIdentificar hipotensión o choque.\n4.\tClasificar como TEP de alto riesgo.\n5.\tRealizar trombólisis sistémica.\nPerlas de examen\n✅ La hipotensión define un TEP de alto riesgo.\n✅ El patrón S1Q3T3 puede observarse en sobrecarga aguda del ventrículo derecho.\n✅ La angioTAC es el estudio diagnóstico de elección en pacientes estables.\n✅ La trombólisis reduce la obstrucción vascular rápidamente.\n✅ La anticoagulación aislada no es suficiente en pacientes inestables.\n✅ El ventrículo derecho es el principal determinante pronóstico en el TEP.\n✅ El TEP masivo constituye una emergencia cardiovascular.\nReferencias\n• European Society of Cardiology Guidelines for Pulmonary Embolism.\n• CHEST Guidelines for Venous Thromboembolism.\n• Harrison's Principles of Internal Medicine.\n• Braunwald's Heart Disease.\n• UpToDate: Risk Stratification and Initial Management of Acute Pulmonary Embolism.",
    "statement": "Paciente masculino de 60 años, con antecedentes de fibrilación auricular en manejo para control del ritmo, consulta por disnea súbita y dolor torácico. Al ingreso presenta hipotensión e hipoxemia. El electrocardiograma muestra patrón S1Q3T3 y la angiotomografía pulmonar evidencia un defecto de llenado en la arteria pulmonar derecha.\n¿Cuál es el siguiente paso más adecuado en el manejo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Anticoagulación con heparina de bajo peso molecular y manejo ambulatorio."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar anticoagulación oral con apixabán."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Trombólisis sistémica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Colocación de filtro de vena cava inferior."
      }
    ]
  },
  {
    "id": 210,
    "examArea": "PEDIATRÍA - ALERGOLOGÍA",
    "topic": "ALERGOLOGÍA",
    "slug": "alergologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "El paciente presenta un cuadro de anafilaxia caracterizado por compromiso cutáneo, respiratorio y cardiovascular tras la exposición a un alérgeno. La adrenalina intramuscular es el tratamiento de primera línea y debe administrarse de forma inmediata.",
    "keyPoints": [
      "Cuando veas: Exposición a alérgeno. Urticaria. Angioedema. Hipotensión. Estridor.",
      "Debes pensar en: Anafilaxia.",
      "Tema: Anafilaxia."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las emergencias alérgicas más importantes.\nLa clave no es la urticaria.\nLa clave es:\nLa hipotensión asociada a compromiso respiratorio.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Exposición reciente a mariscos.\n• Urticaria generalizada.\n• Edema de labios.\n• Estridor.\n• Hipotensión.\nEsto corresponde a:\nAnafilaxia.\n¿Qué es la anafilaxia?\nEs una reacción de hipersensibilidad sistémica grave que puede comprometer:\n• Vía aérea.\n• Respiración.\n• Circulación.\nY puede causar:\nMuerte si no se trata oportunamente.\n¿Cuál es el tratamiento de elección?\nLa medida más importante es:\nAdrenalina intramuscular.\nDebe administrarse en:\nLa cara anterolateral del muslo.\n¿Por qué funciona la adrenalina?\nProduce:\n• Vasoconstricción.\n• Aumento de la presión arterial.\n• Disminución del edema laríngeo.\n• Broncodilatación.\nPor ello:\nEs el tratamiento de primera línea.\n¿Por qué NO administrar antihistamínicos primero?\nLos antihistamínicos:\nMejoran síntomas cutáneos.\nPero:\nNo corrigen la hipotensión ni el compromiso de la vía aérea.\n¿Por qué NO administrar corticoides primero?\nLos corticoides tienen:\nInicio de acción tardío.\nNo son útiles como tratamiento inicial de rescate.\n¿Por qué NO usar únicamente salbutamol?\nEl salbutamol puede mejorar:\nBroncoespasmo.\nPero:\nNo corrige el choque anafiláctico.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Urticaria.\"\nY responden:\nAntihistamínicos.\nSin embargo:\nEl dato decisivo es:\nLa presencia de hipotensión y estridor.\nEsto define:\nAnafilaxia.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tReconocer la anafilaxia.\n2.\tAdministrar adrenalina intramuscular.\n3.\tAsegurar vía aérea.\n4.\tAdministrar oxígeno y líquidos intravenosos.\n5.\tAñadir antihistamínicos y corticoides como tratamiento complementario.\nPerlas de examen\n✅ La adrenalina intramuscular es el tratamiento de primera línea en anafilaxia.\n✅ No existen contraindicaciones absolutas para administrar adrenalina en una anafilaxia.\n✅ La hipotensión indica compromiso cardiovascular.\n✅ El estridor sugiere edema de vía aérea superior.\n✅ Los antihistamínicos son tratamientos coadyuvantes.\n✅ Los corticoides no reemplazan la adrenalina.\n✅ El retraso en la administración de adrenalina aumenta la mortalidad.\nReferencias\n• World Allergy Organization (WAO) Anaphylaxis Guidelines.\n• European Academy of Allergy and Clinical Immunology (EAACI) Guidelines.\n• Nelson Textbook of Pediatrics.\n• Tintinalli's Emergency Medicine.\n• UpToDate: Anaphylaxis Recognition and Management.",
    "statement": "Paciente masculino de 15 años es llevado a urgencias tras presentar urticaria generalizada y edema de labios aproximadamente 15 minutos después de ingerir mariscos. Al examen físico presenta hipotensión, taquicardia y estridor laríngeo.\n¿Cuál es el manejo de primera línea?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hidrocortisona intravenosa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Clorfeniramina intravenosa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Adrenalina intramuscular."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Salbutamol inhalado."
      }
    ]
  },
  {
    "id": 211,
    "examArea": "DERMATOLOGÍA",
    "topic": "DERMATOLOGÍA",
    "slug": "dermatologia",
    "difficulty": "easy",
    "correctOptionId": "B",
    "explanation": "La combinación de fiebre, edema facial, exantema extenso y exposición a un fármaco de alto riesgo como la carbamazepina es altamente sugestiva de síndrome DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms), una reacción de hipersensibilidad potencialmente grave.",
    "keyPoints": [
      "Cuando veas: Carbamazepina. Fiebre. Edema facial o palpebral. Exantema extenso.",
      "Debes pensar en: Síndrome DRESS.",
      "Tema: Reacciones cutáneas graves inducidas por medicamentos."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las farmacodermias graves más preguntadas en los exámenes.\nLa clave no es el exantema.\nLa clave es:\nEl edema facial asociado a fiebre.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Exposición a carbamazepina.\n• Fiebre.\n• Malestar general.\n• Edema palpebral.\n• Exantema máculo-papular extenso.\nEstos hallazgos orientan fuertemente hacia:\nSíndrome DRESS.\n¿Qué es el síndrome DRESS?\nEs una reacción de hipersensibilidad medicamentosa severa caracterizada por:\n• Exantema cutáneo.\n• Fiebre.\n• Eosinofilia.\n• Compromiso sistémico.\nPuede afectar:\n• Hígado.\n• Riñones.\n• Pulmones.\n• Corazón.\n¿Cuáles son los medicamentos más asociados?\nLos más clásicos son:\n• Carbamazepina.\n• Fenitoína.\n• Lamotrigina.\n• Fenobarbital.\n• Alopurinol.\n¿Por qué el edema facial es importante?\nEl edema facial o palpebral es uno de los hallazgos más característicos de DRESS y suele aparecer tempranamente.\n¿Qué tratamiento debe realizarse?\nLa conducta inicial es:\n• Suspender inmediatamente el medicamento causal.\n• Iniciar corticoides sistémicos cuando existe compromiso importante o riesgo de afectación visceral.\n¿Por qué NO es síndrome de Stevens-Johnson?\nEl síndrome de Stevens-Johnson suele caracterizarse por:\n• Lesiones en diana atípicas.\n• Desprendimiento epidérmico.\n• Compromiso mucoso prominente.\nDatos que no se describen en este caso.\n¿Por qué NO es necrólisis epidérmica tóxica?\nLa NET se caracteriza por:\n• Desprendimiento epidérmico extenso.\n• Compromiso >30% de superficie corporal.\nNo corresponde a la presentación descrita.\n¿Por qué NO es un exantema medicamentoso simple?\nLa presencia de:\n• Fiebre.\n• Edema facial.\n• Afectación sistémica potencial.\nDescarta una reacción simple.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Exantema por medicamento.\"\nY responden:\nExantema medicamentoso simple.\nSin embargo:\nEl dato decisivo es:\nLa asociación de fiebre y edema facial con carbamazepina.\nEsto orienta a:\nSíndrome DRESS.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar el medicamento implicado.\n2.\tReconocer fiebre y edema facial.\n3.\tSospechar DRESS.\n4.\tSuspender el fármaco.\n5.\tIniciar manejo sistémico oportuno.\nPerlas de examen\n✅ La carbamazepina es una causa clásica de síndrome DRESS.\n✅ El edema facial es uno de los hallazgos más característicos.\n✅ La eosinofilia es frecuente pero no indispensable para sospechar el diagnóstico.\n✅ El compromiso hepático es la manifestación visceral más común.\n✅ La suspensión inmediata del fármaco es obligatoria.\n✅ Los corticoides sistémicos suelen emplearse en casos moderados o graves.\n✅ El síndrome DRESS puede aparecer semanas después de iniciar el medicamento.\nReferencias\n• Fitzpatrick's Dermatology.\n• Bolognia Dermatology.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS).\n• European Academy of Dermatology and Venereology Guidelines.",
    "statement": "Mujer de 33 años, con antecedente de epilepsia en tratamiento con carbamazepina, consulta por malestar general, fiebre y edema palpebral, seguido de la aparición de un exantema máculo-papular pruriginoso que compromete aproximadamente el 17% de la superficie corporal.\n¿Cuál es el diagnóstico y tratamiento más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Síndrome de Stevens-Johnson; suspensión de carbamazepina y manejo de soporte hospitalario."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Síndrome DRESS; suspensión inmediata de carbamazepina e inicio de corticoides sistémicos."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Necrólisis epidérmica tóxica; desbridamiento quirúrgico urgente."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Exantema medicamentoso simple; continuar carbamazepina y administrar antihistamínicos."
      }
    ]
  },
  {
    "id": 212,
    "examArea": "MEDICINA INTERNA - TOXICOLOGÍA",
    "topic": "TOXICOLOGÍA",
    "slug": "toxicologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La intoxicación por monóxido de carbono produce formación de carboxihemoglobina, la cual disminuye el transporte de oxígeno sin alterar significativamente la PaO₂. Además, la pulsioximetría convencional no diferencia adecuadamente entre oxihemoglobina y carboxihemoglobina, generando lecturas falsamente normales.",
    "keyPoints": [
      "Cuando veas: Exposición a humo o motores encendidos. Alteración del estado de conciencia. PaO₂ normal o elevada. Pulsioximetría falsamente normal.",
      "Debes pensar en: Intoxicación por monóxido de carbono.",
      "Tema: Intoxicación por monóxido de carbono."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los errores diagnósticos más frecuentes en toxicología.\nLa clave no es la hipoxemia.\nLa clave es:\nLa discrepancia entre los gases arteriales y la pulsioximetría.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Exposición prolongada a gases de combustión.\n• Alteración del estado de conciencia.\n• Acidosis.\n• Saturación discordante.\nEsto es altamente sugestivo de:\nIntoxicación por monóxido de carbono (CO).\n¿Cómo actúa el monóxido de carbono?\nEl CO posee una afinidad por la hemoglobina aproximadamente:\n200 a 250 veces mayor que la del oxígeno.\nComo consecuencia:\nSe forma carboxihemoglobina.\n¿Qué ocurre con la PaO₂?\nLa PaO₂ mide:\nOxígeno disuelto en plasma.\nPor ello:\nPuede encontrarse normal o incluso elevada.\n¿Por qué la pulsioximetría es engañosa?\nLa mayoría de los pulsioxímetros convencionales:\nNo distinguen entre oxihemoglobina y carboxihemoglobina.\nComo resultado:\nReportan saturaciones falsamente normales o elevadas.\n¿Qué examen confirma el diagnóstico?\nLa prueba diagnóstica de elección es:\nCooximetría arterial o venosa.\nLa cual permite cuantificar:\nCarboxihemoglobina.\n¿Por qué NO es metahemoglobinemia?\nLa metahemoglobinemia suele asociarse a:\n• Exposición a oxidantes.\n• Saturaciones cercanas a 85%.\n• Cianosis persistente.\nNo al antecedente clásico del caso.\n¿Por qué NO es hipoventilación?\nLa hipoventilación produciría:\nDisminución de la PaO₂.\nLo contrario de lo observado.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Saturación 98%.\"\nY descartan hipoxia.\nSin embargo:\nEl dato decisivo es:\nLa exposición a un motor encendido junto con la discordancia gasométrica.\nEsto orienta a:\nIntoxicación por monóxido de carbono.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar la exposición.\n2.\tReconocer la alteración neurológica.\n3.\tDetectar la discordancia entre pulsioximetría y gases arteriales.\n4.\tSospechar carboxihemoglobina.\n5.\tConfirmar mediante cooximetría.\nPerlas de examen\n✅ El monóxido de carbono produce carboxihemoglobina.\n✅ La PaO₂ puede ser normal en la intoxicación por CO.\n✅ La pulsioximetría puede ser falsamente normal.\n✅ La cooximetría es el método diagnóstico de elección.\n✅ El tratamiento inicial es oxígeno al 100%.\n✅ Algunos pacientes requieren oxigenoterapia hiperbárica.\n✅ La intoxicación por CO es una causa frecuente de muerte accidental por inhalación.\nReferencias\n• Goldfrank's Toxicologic Emergencies.\n• Tintinalli's Emergency Medicine.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Carbon Monoxide Poisoning.\n• American College of Emergency Physicians Guidelines.",
    "statement": "Un hombre de 20 años es encontrado inconsciente tras permanecer toda la noche dentro de una cochera con el motor de un automóvil encendido. Los gases arteriales muestran pH de 7.2, PaO₂ de 190 mmHg y saturación de oxígeno de 88%, mientras que la pulsioximetría registra una saturación de 98%.\n¿Cuál es la explicación más probable para esta disociación?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Metahemoglobinemia secundaria a intoxicación por nitritos."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Intoxicación por monóxido de carbono con formación de carboxihemoglobina."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Error técnico de la pulsioximetría por hipotermia."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hipoventilación alveolar secundaria a depresión respiratoria."
      }
    ]
  },
  {
    "id": 213,
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "GINECOLOGÍA Y OBSTETRICIA",
    "slug": "ginecologia_y_obstetricia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La presencia de dolor pélvico asociado a dolor a la movilización cervical en una mujer con factores de riesgo para infecciones de transmisión sexual es altamente sugestiva de enfermedad inflamatoria pélvica (EIP). El tratamiento empírico debe iniciarse tan pronto como exista sospecha clínica.",
    "keyPoints": [
      "Cuando veas: Mujer joven sexualmente activa. Relaciones sexuales sin preservativo. Dolor pélvico. Dolor a la movilización cervical.",
      "Debes pensar en: Enfermedad inflamatoria pélvica.",
      "Tema: Enfermedad inflamatoria pélvica."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los diagnósticos ginecológicos más frecuentes en mujeres jóvenes.\nLa clave no es el dolor pélvico.\nLa clave es:\nEl dolor a la movilización cervical.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Conductas sexuales de riesgo.\n• Dolor hipogástrico.\n• Dolor pélvico.\n• Dolor cervical al tacto bimanual.\nEstos hallazgos son altamente sugestivos de:\nEnfermedad inflamatoria pélvica.\n¿Qué es la EIP?\nCorresponde a una infección ascendente del tracto genital femenino superior que puede comprometer:\n• Endometrio.\n• Trompas de Falopio.\n• Ovarios.\n• Peritoneo pélvico.\n¿Cuáles son los microorganismos más frecuentes?\nLos principales agentes implicados son:\n• Neisseria gonorrhoeae.\n• Chlamydia trachomatis.\nAunque suele ser una infección polimicrobiana.\n¿Cuál es el tratamiento inicial?\nEl esquema ambulatorio recomendado incluye:\n• Ceftriaxona.\n• Doxiciclina.\n• Metronidazol.\nEste tratamiento cubre:\n• Gonococo.\n• Chlamydia.\n• Anaerobios.\n¿Por qué NO es embarazo ectópico?\nAunque puede producir dolor pélvico:\nNo existe información sugestiva de embarazo y el hallazgo característico es:\nDolor a la movilización cervical en un contexto de riesgo infeccioso.\n¿Por qué NO es endometriosis?\nLa endometriosis suele producir:\n• Dolor crónico.\n• Dismenorrea.\n• Dispareunia.\nNo se asocia típicamente a:\nDolor cervical sugestivo de infección.\n¿Por qué NO es un quiste funcional?\nNo explica adecuadamente:\nLos factores de riesgo sexuales ni el dolor a la movilización cervical.\n¿Cuál es la trampa de examen?\nMuchos estudiantes se enfocan en:\nEl dolor pélvico.\nSin embargo:\nEl dato decisivo es:\nEl dolor a la movilización cervical.\nEste hallazgo es clásico de:\nEnfermedad inflamatoria pélvica.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar factores de riesgo sexuales.\n2.\tReconocer dolor pélvico.\n3.\tBuscar dolor a la movilización cervical.\n4.\tSospechar EIP.\n5.\tIniciar tratamiento antibiótico empírico.\nPerlas de examen\n✅ El dolor a la movilización cervical es un criterio clínico importante para EIP.\n✅ El tratamiento no debe retrasarse esperando resultados microbiológicos.\n✅ Chlamydia y Gonococo son los agentes más frecuentes.\n✅ El metronidazol mejora la cobertura frente a anaerobios.\n✅ La EIP puede causar infertilidad tubárica.\n✅ El retraso terapéutico aumenta el riesgo de complicaciones.\n✅ Toda mujer joven con dolor pélvico debe evaluarse para EIP.\nReferencias\n• CDC Sexually Transmitted Infections Treatment Guidelines.\n• ACOG Practice Bulletin: Pelvic Inflammatory Disease.\n• Novak's Gynecology.\n• Williams Gynecology.\n• UpToDate: Pelvic Inflammatory Disease.",
    "statement": "Paciente femenina de 25 años, sexualmente activa, con antecedentes de relaciones sexuales de riesgo y no uso habitual de preservativo, consulta por dolor en hipogastrio y dolor pélvico de intensidad fluctuante. Al examen ginecológico se evidencia dolor a la movilización cervical sin dolor anexial.\n¿Cuál es la enfermedad más probable y el tratamiento inicial recomendado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Embarazo ectópico; manejo quirúrgico urgente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Enfermedad inflamatoria pélvica; ceftriaxona más doxiciclina y metronidazol."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Endometriosis; anticonceptivos orales combinados."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Quiste ovárico funcional; observación clínica."
      }
    ]
  },
  {
    "id": 214,
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "slug": "neurologia",
    "difficulty": "easy",
    "correctOptionId": "B",
    "explanation": "La migraña se caracteriza por episodios recurrentes de cefalea pulsátil, habitualmente unilateral, asociada a náuseas, fotofobia y empeoramiento con la actividad física.",
    "keyPoints": [
      "Cuando veas: Cefalea unilateral. Dolor pulsátil. Náuseas. Fotofobia. Empeoramiento con ejercicio.",
      "Debes pensar en: Migraña.",
      "Tema: Migraña."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el reconocimiento clínico de la migraña.\nLa clave no es la edad.\nLa clave es:\nLa combinación de cefalea pulsátil con síntomas asociados.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Cefalea recurrente.\n• Localización unilateral.\n• Carácter pulsátil.\n• Náuseas.\n• Fotofobia.\n• Empeoramiento con actividad física.\nEstos hallazgos son característicos de:\nMigraña.\n¿Cuáles son las características típicas de la migraña?\nGeneralmente presenta:\n• Dolor unilateral.\n• Intensidad moderada o severa.\n• Carácter pulsátil.\n• Empeoramiento con actividad física.\n• Náuseas o vómitos.\n• Fotofobia y fonofobia.\n¿Por qué el ejercicio empeora el dolor?\nLa actividad física aumenta:\nLa percepción del dolor durante la crisis migrañosa.\nPor ello muchos pacientes:\nPrefieren permanecer en reposo.\n¿Por qué NO es cefalea tensional?\nLa cefalea tensional suele ser:\n• Opresiva.\n• Bilateral.\n• No pulsátil.\nAdemás:\nNo suele asociarse a náuseas importantes.\n¿Por qué NO es cefalea en racimos?\nLa cefalea en racimos se caracteriza por:\n• Dolor orbitario intenso.\n• Lagrimeo.\n• Congestión nasal.\nNo corresponde al cuadro descrito.\n¿Por qué NO es hipertensión intracraneal idiopática?\nSuele asociarse a:\n• Papiledema.\n• Alteraciones visuales.\n• Cefalea más persistente.\nNo a episodios típicos de migraña.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Cefalea después del gimnasio.\"\nY responden:\nCefalea por esfuerzo.\nSin embargo:\nEl dato decisivo es:\nLa presencia de náuseas y fotofobia asociadas.\nEsto orienta a:\nMigraña.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar cefalea recurrente.\n2.\tReconocer el carácter pulsátil.\n3.\tBuscar síntomas acompañantes.\n4.\tEvaluar desencadenantes.\n5.\tDiagnosticar migraña.\nPerlas de examen\n✅ La migraña suele ser unilateral y pulsátil.\n✅ Las náuseas y la fotofobia son síntomas clásicos.\n✅ La actividad física suele empeorar la crisis.\n✅ Puede existir aura, aunque no es obligatoria.\n✅ Es una de las cefaleas primarias más frecuentes.\n✅ El diagnóstico es fundamentalmente clínico.\n✅ Los desencadenantes incluyen estrés, ejercicio intenso, ayuno y privación de sueño.\nReferencias\n• International Classification of Headache Disorders (ICHD-3).\n• Adams and Victor's Principles of Neurology.\n• Harrison's Principles of Internal Medicine.\n• American Headache Society Guidelines.\n• UpToDate: Migraine in Adults.",
    "statement": "Joven de 16 años presenta episodios recurrentes de cefalea unilateral, pulsátil, acompañada de náuseas y fotofobia. Refiere que los síntomas suelen desencadenarse o exacerbarse después de realizar actividad física intensa.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Cefalea tensional."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Migraña."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Cefalea en racimos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hipertensión intracraneal idiopática."
      }
    ]
  },
  {
    "id": 215,
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "slug": "neurologia",
    "difficulty": "easy",
    "correctOptionId": "B",
    "explanation": "La cefalea tensional es la cefalea primaria más frecuente. Se caracteriza por dolor opresivo, habitualmente bilateral, localizado en región occipital, frontal o cervical, estrechamente relacionado con estrés emocional o tensión muscular.",
    "keyPoints": [
      "Cuando veas: Estrés laboral. Dolor occipital o cervical. Cefalea recurrente. Mejoría parcial con analgésicos.",
      "Debes pensar en: Cefalea tensional.",
      "Tema: Cefaleas primarias."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la cefalea primaria más frecuente en la práctica clínica.\nLa clave no es la localización.\nLa clave es:\nLa asociación con estrés.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Cefalea recurrente.\n• Localización occipital y cervical.\n• Relación con estrés laboral.\n• Ausencia de síntomas neurológicos asociados.\nEstos hallazgos son compatibles con:\nCefalea tensional.\n¿Cuáles son las características de la cefalea tensional?\nHabitualmente presenta:\n• Dolor opresivo.\n• Sensación de banda o presión.\n• Intensidad leve o moderada.\n• Localización bilateral.\n• Relación con estrés o fatiga.\nGeneralmente:\nNo empeora con la actividad física.\n¿Por qué aparece en región cervical?\nLa tensión muscular de:\n• Cuello.\n• Hombros.\n• Región occipital.\nParticipa en la fisiopatología del cuadro.\n¿Por qué NO es migraña?\nLa migraña suele asociarse a:\n• Náuseas.\n• Fotofobia.\n• Dolor pulsátil.\n• Empeoramiento con ejercicio.\nDatos ausentes en este caso.\n¿Por qué NO es cefalea en racimos?\nLa cefalea en racimos produce:\n• Dolor orbitario intenso.\n• Lagrimeo.\n• Rinorrea.\nNo corresponde al cuadro descrito.\n¿Por qué NO es neuralgia occipital?\nLa neuralgia occipital suele manifestarse como:\nDolor lancinante o eléctrico.\nNo como cefalea relacionada con estrés.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Región occipital.\"\nY responden:\nNeuralgia occipital.\nSin embargo:\nEl dato decisivo es:\nLa relación con estrés laboral.\nEsto orienta a:\nCefalea tensional.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar el patrón de cefalea.\n2.\tBuscar factores desencadenantes.\n3.\tEvaluar síntomas acompañantes.\n4.\tDiferenciar cefaleas primarias.\n5.\tDiagnosticar cefalea tensional.\nPerlas de examen\n✅ La cefalea tensional es la cefalea primaria más frecuente.\n✅ El estrés emocional es uno de los principales desencadenantes.\n✅ El dolor suele ser opresivo y no pulsátil.\n✅ Generalmente no se acompaña de náuseas ni vómitos.\n✅ La exploración neurológica suele ser normal.\n✅ Puede asociarse a contractura muscular cervical.\n✅ El manejo incluye medidas no farmacológicas y analgésicos simples.\nReferencias\n• International Classification of Headache Disorders (ICHD-3).\n• Adams and Victor's Principles of Neurology.\n• Harrison's Principles of Internal Medicine.\n• American Headache Society Guidelines.\n• UpToDate: Tension-Type Headache in Adults.",
    "statement": "Paciente de 40 años, sin antecedentes de importancia, consulta por cefalea recurrente localizada en región occipital y cervical. Refiere que los episodios suelen aparecer durante periodos de alta carga laboral y estrés. Ha utilizado analgésicos con mejoría parcial de los síntomas.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Migraña."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Cefalea tensional."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Cefalea en racimos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Neuralgia occipital."
      }
    ]
  },
  {
    "id": 216,
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "slug": "neurologia",
    "difficulty": "easy",
    "correctOptionId": "C",
    "explanation": "La cefalea en racimos se caracteriza por crisis recurrentes de dolor orbitario o retroorbitario extremadamente intenso, asociado a síntomas autonómicos ipsilaterales como lagrimeo, inyección conjuntival y congestión nasal. El oxígeno al 100% es uno de los tratamientos abortivos de elección.",
    "keyPoints": [
      "Cuando veas: Dolor retroocular intenso. Epífora. Inyección conjuntival. Mejoría con oxígeno.",
      "Debes pensar en: Cefalea en racimos.",
      "Tema: Cefaleas trigémino-autonómicas."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las cefaleas primarias más incapacitantes.\nLa clave no es el dolor.\nLa clave es:\nLos síntomas autonómicos asociados.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Dolor retroocular severo.\n• Lagrimeo.\n• Inyección conjuntival.\n• Episodios recurrentes.\n• Respuesta al oxígeno.\nEstos hallazgos son característicos de:\nCefalea en racimos.\n¿Por qué se llama cefalea en racimos?\nPorque los episodios suelen agruparse en:\nPeríodos o \"racimos\" de semanas o meses.\nDurante estos períodos:\nLas crisis pueden repetirse varias veces al día.\n¿Cuáles son los síntomas autonómicos típicos?\nLos más frecuentes son:\n• Epífora.\n• Inyección conjuntival.\n• Congestión nasal.\n• Rinorrea.\n• Ptosis.\n• Miosis.\nTodos del mismo lado del dolor.\n¿Por qué mejora con oxígeno?\nEl oxígeno al 100%:\nEs uno de los tratamientos abortivos más eficaces.\nProduce alivio rápido en muchos pacientes.\n¿Qué otros tratamientos se utilizan?\nPara abortar la crisis:\n• Oxígeno.\n• Sumatriptán.\nPara prevención:\n• Verapamilo.\n¿Por qué NO es migraña?\nLa migraña suele asociarse a:\n• Náuseas.\n• Fotofobia.\n• Dolor pulsátil.\nY no suele presentar:\nSíntomas autonómicos tan marcados.\n¿Por qué NO es neuralgia del trigémino?\nLa neuralgia produce:\nDolor eléctrico de segundos de duración.\nNo crisis prolongadas con lagrimeo e inyección conjuntival.\n¿Por qué NO es cefalea tensional?\nLa cefalea tensional es:\nOpresiva y menos intensa.\nNo produce síntomas autonómicos.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Dolor ocular.\"\nY responden:\nMigraña.\nSin embargo:\nEl dato decisivo es:\nLa combinación de epífora, inyección conjuntival y mejoría con oxígeno.\nEsto orienta directamente a:\nCefalea en racimos.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar dolor orbitario intenso.\n2.\tBuscar síntomas autonómicos ipsilaterales.\n3.\tReconocer el patrón recurrente.\n4.\tRecordar la respuesta al oxígeno.\n5.\tDiagnosticar cefalea en racimos.\nPerlas de examen\n✅ La cefalea en racimos es una cefalea trigémino-autonómica.\n✅ El dolor suele ser orbitario o retroorbitario.\n✅ El lagrimeo y la inyección conjuntival son hallazgos clásicos.\n✅ El oxígeno al 100% es tratamiento abortivo de elección.\n✅ El sumatriptán también es altamente eficaz.\n✅ El verapamilo es el tratamiento preventivo más utilizado.\n✅ Se considera una de las cefaleas más dolorosas descritas en medicina.\nReferencias\n• International Classification of Headache Disorders (ICHD-3).\n• Adams and Victor's Principles of Neurology.\n• Harrison's Principles of Internal Medicine.\n• American Headache Society Guidelines.\n• UpToDate: Cluster Headache.",
    "statement": "Paciente de 27 años consulta de forma recurrente al servicio de urgencias por episodios de dolor retroocular intenso, asociado a inyección conjuntival y epífora ipsilateral. Refiere múltiples consultas previas por el mismo cuadro. Durante una de las atenciones, un residente de neurología indica oxígeno suplementario, con mejoría rápida y significativa de los síntomas.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Migraña."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Neuralgia del trigémino."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Cefalea en racimos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Cefalea tensional."
      }
    ]
  },
  {
    "id": 217,
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "slug": "neurologia",
    "difficulty": "medium",
    "correctOptionId": "A",
    "explanation": "La combinación de \"muñeca caída\", compromiso transitorio del reflejo tricipital y recuperación completa posterior es característica de una neuropraxia del nervio radial, la forma más leve de lesión nerviosa periférica.",
    "keyPoints": [
      "Cuando veas: Imposibilidad para extender la muñeca. Dolor dorsal del antebrazo. Recuperación espontánea. Déficit neurológico transitorio.",
      "Debes pensar en: Neuropraxia del nervio radial.",
      "Tema: Lesiones de nervios periféricos."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa las lesiones traumáticas de nervios periféricos.\nLa clave no es el trauma.\nLa clave es:\nLa recuperación completa de la función.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Déficit motor radial.\n• Alteración refleja.\n• Recuperación posterior.\nEsto corresponde a:\nNeuropraxia.\n¿Qué es una neuropraxia?\nEs la lesión nerviosa más leve según la clasificación de Seddon.\nSe caracteriza por:\n• Bloqueo transitorio de la conducción nerviosa.\n• Ausencia de degeneración axonal.\n• Recuperación completa.\n¿Por qué el nervio radial?\nEl nervio radial controla:\n• Extensión de muñeca.\n• Extensión de dedos.\n• Extensión de codo (parcialmente).\nLa lesión produce:\nLa clásica \"muñeca caída\".\n¿Por qué NO es axonotmesis?\nLa axonotmesis implica:\nDaño axonal con degeneración walleriana.\nLa recuperación es:\nMás lenta y generalmente incompleta en fases iniciales.\n¿Por qué NO es neurotmesis?\nLa neurotmesis corresponde a:\nSección completa del nervio.\nNo presenta:\nRecuperación espontánea temprana.\n¿Por qué NO es lesión del nervio musculocutáneo?\nEl nervio musculocutáneo afecta principalmente:\n• Flexión del codo.\n• Sensibilidad lateral del antebrazo.\nNo explica:\nLa incapacidad para extender la muñeca.\n¿Cuál es la trampa de examen?\nMuchos estudiantes identifican:\nLa lesión del nervio radial.\nPero olvidan clasificar:\nEl tipo de lesión nerviosa.\nEl dato decisivo es:\nLa recuperación completa posterior.\nEsto orienta a:\nNeuropraxia.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar el déficit motor.\n2.\tLocalizar el nervio comprometido.\n3.\tEvaluar la evolución clínica.\n4.\tReconocer la recuperación espontánea.\n5.\tDiagnosticar neuropraxia.\nPerlas de examen\n✅ La neuropraxia es la lesión nerviosa periférica más leve.\n✅ Existe bloqueo de conducción sin lesión axonal.\n✅ La recuperación suele ser completa.\n✅ El nervio radial es el más asociado a la \"muñeca caída\".\n✅ La neurotmesis es la lesión más grave.\n✅ La axonotmesis implica degeneración walleriana.\n✅ La evolución clínica es fundamental para diferenciar los tipos de lesión nerviosa.\nReferencias\n• Adams and Victor's Principles of Neurology.\n• Bradley's Neurology in Clinical Practice.\n• Greenberg's Handbook of Neurosurgery.\n• Moore Clinically Oriented Anatomy.\n• UpToDate: Peripheral Nerve Injury Classification and Evaluation.",
    "statement": "Posterior a un atraco callejero, una mujer consulta por imposibilidad para extender la muñeca, asociada a dolor en la región dorsal del antebrazo. Al examen físico presenta disminución del reflejo tricipital. Días después recupera completamente la movilidad de la extremidad.\n¿Cuál es la lesión neurológica más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Neuropraxia del nervio radial."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Axonotmesis del nervio cubital."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Neurotmesis del nervio mediano."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Lesión del nervio musculocutáneo."
      }
    ]
  },
  {
    "id": 218,
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "GINECOLOGÍA Y OBSTETRICIA",
    "slug": "ginecologia_y_obstetricia",
    "difficulty": "medium",
    "correctOptionId": "D",
    "explanation": "La paciente presenta un feto pequeño para la edad gestacional (PEG), ya que el peso fetal estimado se encuentra por debajo del percentil 10. Sin embargo, un percentil 4 por sí solo no establece necesariamente una restricción del crecimiento intrauterino (RCIU) severa. Antes de decidir la interrupción del embarazo, es fundamental evaluar la circulación útero-placentaria y fetal mediante Doppler.",
    "keyPoints": [
      "Cuando veas: Peso fetal estimado entre percentil 3 y 10. Embarazo a término. Paciente clínicamente estable. Sin datos de compromiso fetal agudo.",
      "Debes pensar en: Completar estudio con Doppler obstétrico.",
      "Tema: Feto pequeño para la edad gestacional y restricción del crecimiento fetal."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los errores más frecuentes en obstetricia:\nConfundir un feto pequeño para la edad gestacional con una restricción del crecimiento fetal establecida.\nLa clave no es la edad gestacional.\nLa clave es:\nQue aún no se ha documentado compromiso hemodinámico fetal.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Embarazo de 37 semanas.\n• Peso fetal estimado en percentil 4.\n• Índice de líquido amniótico de 6 cm.\n• Ausencia de síntomas maternos.\n• Sin evidencia de sufrimiento fetal.\nCon estos datos:\nNo puede concluirse automáticamente que exista una RCIU severa que obligue a finalizar la gestación.\n¿Qué debe hacerse primero?\nLa siguiente conducta es:\nRealizar Doppler obstétrico.\nIdealmente evaluando:\n• Arterias uterinas.\n• Arteria umbilical.\n• Arteria cerebral media.\n• Relación cerebroplacentaria.\n¿Por qué es importante el Doppler?\nPorque permite diferenciar:\n• Un feto constitucionalmente pequeño (PEG).\n• Una verdadera restricción del crecimiento fetal secundaria a insuficiencia placentaria.\nEsta diferenciación modifica completamente la conducta.\n¿Cuándo se considera RCIU severa?\nLas definiciones pueden variar según las guías, pero clásicamente:\n• Percentil <3 es altamente sugestivo de RCIU severa.\n• Percentiles entre 3 y 10 requieren evaluación Doppler para clasificación adecuada.\n¿Por qué NO debe interrumpirse inmediatamente el embarazo?\nPorque:\nNo existe evidencia presentada de deterioro fetal.\nLa interrupción debe basarse en:\n• Hallazgos Doppler.\n• Bienestar fetal.\n• Perfil biofísico.\n• Monitoreo fetal.\nNo únicamente en un percentil aislado.\n¿Por qué NO continuar control rutinario?\nPorque un percentil 4 requiere estudio adicional.\nNo es una gestación de bajo riesgo.\n¿Por qué NO administrar maduración pulmonar?\nPorque:\nLa paciente tiene 37 semanas.\nLa maduración pulmonar no está indicada en este contexto.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Percentil 4.\"\nY responden:\n\"Interrumpir embarazo.\"\nSin embargo:\nEl dato decisivo es que aún no se dispone de evaluación Doppler.\nAntes de decidir la finalización del embarazo debe determinarse si existe insuficiencia placentaria.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar el percentil fetal.\n2.\tDiferenciar PEG de RCIU.\n3.\tSolicitar Doppler fetal-materno.\n4.\tEstratificar riesgo fetal.\n5.\tDefinir conducta obstétrica según resultados.\nPerlas de examen\n✅ Un peso fetal estimado < percentil 10 define un feto pequeño para la edad gestacional.\n✅ Un percentil <3 es altamente sugestivo de restricción del crecimiento fetal severa.\n✅ Los percentiles entre 3 y 10 requieren evaluación Doppler.\n✅ El Doppler de arteria umbilical es fundamental para valorar insuficiencia placentaria.\n✅ La relación cerebroplacentaria aporta información pronóstica importante.\n✅ No todo feto pequeño requiere interrupción inmediata del embarazo.\n✅ La conducta obstétrica depende de la evaluación hemodinámica fetal y no únicamente del percentil de crecimiento.\nReferencias\n• Williams Obstetrics.\n• ACOG Practice Bulletin: Fetal Growth Restriction.\n• ISUOG Practice Guidelines: Diagnosis and Management of Small-for-Gestational-Age Fetus and Fetal Growth Restriction.\n• FIGO Guidelines on Fetal Growth Restriction.\n• UpToDate: Fetal Growth Restriction: Evaluation and Management.",
    "statement": "Primigestante de 26 años con embarazo de 37 semanas acude a control prenatal. La ecografía obstétrica reporta un peso fetal estimado en percentil 4 e índice de líquido amniótico de 6 cm. La paciente se encuentra asintomática, hemodinámicamente estable y sin trabajo de parto.\n¿Cuál es el manejo más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Continuar control prenatal habitual y repetir ecografía en 4 semanas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hospitalización y maduración pulmonar fetal."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Interrupción inmediata del embarazo."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Realizar estudio Doppler fetal-materno para estratificación del riesgo y definir conducta obstétrica."
      }
    ]
  },
  {
    "id": 219,
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "GINECOLOGÍA Y OBSTETRICIA",
    "slug": "ginecologia_y_obstetricia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "La paciente cumple criterios diagnósticos de diabetes gestacional. El manejo inicial consiste en intervención nutricional, ejercicio físico adaptado al embarazo y monitorización glucémica. La insulinoterapia se reserva para pacientes que no alcanzan metas glucémicas con medidas no farmacológicas.",
    "keyPoints": [
      "Cuando veas: PTOG alterada. Embarazo entre 24 y 28 semanas o posterior. Al menos un valor diagnóstico.",
      "Debes pensar en: Diabetes gestacional.",
      "Tema: Diabetes gestacional."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el diagnóstico y manejo inicial de la diabetes gestacional.\nLa clave no es la edad materna.\nLa clave es:\nInterpretar correctamente la curva de tolerancia.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Ayunas: 92 mg/dL.\n• 1 hora: 213 mg/dL.\n• 2 horas: 150 mg/dL.\nSegún los criterios IADPSG/OMS:\nSe diagnostica diabetes gestacional cuando se cumple uno o más de los siguientes:\n• Ayunas ≥ 92 mg/dL.\n• 1 hora ≥ 180 mg/dL.\n• 2 horas ≥ 153 mg/dL.\nLa paciente cumple:\n• Ayunas diagnósticas.\n• Glucemia a la hora del diagnóstico.\nPor tanto:\nPresenta diabetes gestacional.\n¿Cuál es el manejo inicial?\nLa primera intervención consiste en:\n• Educación nutricional.\n• Plan alimentario individualizado.\n• Actividad física según condición obstétrica.\n• Automonitoreo glucémico.\n¿Qué metas glucémicas se buscan?\nGeneralmente:\n• Ayunas <95 mg/dL.\n• 1 hora posprandial <140 mg/dL.\n• 2 horas posprandial <120 mg/dL.\n¿Cuándo se utiliza insulina?\nCuando:\nLas metas glucémicas no se alcanzan con medidas no farmacológicas.\nO existe:\nHiperglucemia importante desde el diagnóstico.\n¿Por qué NO iniciar insulina inmediatamente?\nPorque:\nLa mayoría de las pacientes deben iniciar primero manejo conservador.\nLa respuesta terapéutica se evalúa posteriormente.\n¿Por qué NO repetir la curva?\nEl diagnóstico ya está establecido.\nNo se requiere repetir la prueba.\n¿Por qué NO es diabetes pregestacional?\nNo existen criterios diagnósticos de diabetes manifiesta en el embarazo.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\nGlucemia >200 mg/dL a la hora.\nY responden:\nInsulinoterapia inmediata.\nSin embargo:\nLa pregunta solicita el plan inicial.\nY el manejo inicial es:\nCambios en estilo de vida y monitorización glucémica.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tInterpretar la PTOG.\n2.\tConfirmar diabetes gestacional.\n3.\tIniciar medidas no farmacológicas.\n4.\tRealizar automonitoreo.\n5.\tEscalar a insulina si no se alcanzan metas.\nPerlas de examen\n✅ Un solo valor alterado en la PTOG es suficiente para el diagnóstico.\n✅ La diabetes gestacional aumenta el riesgo de macrosomía fetal.\n✅ El tratamiento inicial es nutricional y conductual.\n✅ La insulina es el tratamiento farmacológico de elección cuando se requiere.\n✅ El control glucémico reduce complicaciones maternas y fetales.\n✅ Debe realizarse seguimiento obstétrico estrecho.\n✅ Toda paciente con diabetes gestacional requiere reevaluación metabólica posparto.\nReferencias\n• American Diabetes Association (ADA) Standards of Care.\n• ACOG Practice Bulletin: Gestational Diabetes Mellitus.\n• Williams Obstetrics.\n• FIGO Guidelines on Gestational Diabetes.\n• UpToDate: Gestational Diabetes Mellitus: Screening, Diagnosis and Management.",
    "statement": "Paciente de 37 años, multigestante G5A2C2V2, con embarazo de 29 semanas, acude a control prenatal. En la prueba de tolerancia oral a la glucosa presenta los siguientes resultados: glucemia en ayunas 92 mg/dL, glucemia a la hora 213 mg/dL y glucemia a las 2 horas 150 mg/dL.\n¿Cuál es el plan de manejo más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Continuar control prenatal habitual y repetir la curva de tolerancia en 4 semanas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar insulinoterapia de forma inmediata."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Diagnosticar diabetes gestacional, iniciar cambios en el estilo de vida y automonitoreo glucémico."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Diagnosticar diabetes pregestacional y finalizar la gestación."
      }
    ]
  },
  {
    "id": 220,
    "examArea": "ORTOPEDIA Y TRAUMATOLOGÍA",
    "topic": "ORTOPEDIA Y TRAUMATOLOGÍA",
    "slug": "ortopedia_y_traumatologia",
    "difficulty": "medium",
    "correctOptionId": "A",
    "explanation": "La lesión del nervio radial en una fractura de la diáfisis humeral produce clásicamente \"muñeca caída\" debido a la pérdida de la extensión de la muñeca y los dedos, asociada a alteraciones sensitivas en el territorio radial.",
    "keyPoints": [
      "Cuando veas: Fractura de diáfisis humeral. Lesión del nervio radial. Déficit motor distal.",
      "Debes pensar en: Muñeca caída.",
      "Tema: Lesiones nerviosas periféricas."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la lesión nerviosa más frecuentemente asociada a las fracturas del húmero.\nLa clave no es la fractura.\nLa clave es:\nEl nervio comprometido.\n¿Qué está ocurriendo realmente?\nEl nervio radial discurre por:\nEl surco espiral del húmero.\nPor ello:\nLas fracturas de la diáfisis media humeral pueden lesionarlo fácilmente.\n¿Cuál es el déficit motor típico?\nEl nervio radial inerva:\n• Extensores de la muñeca.\n• Extensores de los dedos.\n• Supinadores del antebrazo.\nSu lesión produce:\n• Muñeca caída.\n• Imposibilidad para extender los dedos.\n• Debilidad en la extensión del pulgar.\n¿Cuál es el déficit sensitivo?\nLa alteración sensitiva clásica compromete:\n• Dorso radial de la mano.\n• Primer espacio interdigital dorsal.\n¿Qué es la \"muñeca caída\"?\nEs la incapacidad para mantener la muñeca en extensión debido a la parálisis de los músculos extensores.\nEs uno de los hallazgos más preguntados en exámenes.\n¿Por qué NO es nervio cubital?\nEl nervio cubital produce:\n• Garra cubital.\n• Déficit sensitivo del quinto dedo.\nNo muñeca caída.\n¿Por qué NO es nervio mediano?\nLa lesión del mediano produce:\n• Alteración de la oposición del pulgar.\n• Mano de simio.\nNo pérdida de la extensión de muñeca.\n¿Por qué NO es nervio axilar?\nLa lesión axilar afecta:\n• Deltoides.\n• Sensibilidad del hombro.\nNo la función extensora de la muñeca.\n¿Cuál es la trampa de examen?\nMuchos estudiantes recuerdan:\n\"Fractura de húmero.\"\nPero olvidan:\nQué nervio se relaciona con la diáfisis media.\nEl dato decisivo es:\nLa lesión del nervio radial.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar la localización de la fractura.\n2.\tRelacionar el nervio lesionado.\n3.\tEvaluar función motora.\n4.\tBuscar muñeca caída.\n5.\tConfirmar compromiso sensitivo radial.\nPerlas de examen\n✅ El nervio radial es el nervio más frecuentemente lesionado en fracturas de diáfisis humeral.\n✅ La muñeca caída es el hallazgo clínico clásico.\n✅ El primer espacio interdigital dorsal es clave para la exploración sensitiva.\n✅ El nervio radial recorre el surco espiral del húmero.\n✅ La mayoría de las lesiones son neuropraxias.\n✅ La recuperación espontánea es frecuente.\n✅ Siempre debe documentarse el examen neurovascular antes y después de la reducción.\nReferencias\n• Campbell's Operative Orthopaedics.\n• Rockwood and Green's Fractures in Adults.\n• Moore Clinically Oriented Anatomy.\n• Greenberg's Handbook of Neurosurgery.\n• UpToDate: Radial Nerve Injury Associated with Humeral Shaft Fractures.",
    "statement": "Un hombre presenta una fractura desplazada de la diáfisis media del húmero asociada a lesión del nervio radial.\n¿Cuál de los siguientes hallazgos clínicos es más probable encontrar?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Incapacidad para extender la muñeca y los dedos, con hipoestesia en el dorso de la mano."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Incapacidad para flexionar los dedos cuarto y quinto, con hipoestesia del borde cubital de la mano."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Pérdida de la oposición del pulgar e hipoestesia de los tres primeros dedos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Debilidad para la abducción del hombro con pérdida de sensibilidad en la cara lateral del hombro."
      }
    ]
  },
  {
    "id": 221,
    "examArea": "ORTOPEDIA Y TRAUMATOLOGÍA",
    "topic": "ORTOPEDIA Y TRAUMATOLOGÍA",
    "slug": "ortopedia_y_traumatologia",
    "difficulty": "medium",
    "correctOptionId": "D",
    "explanation": "La fractura de escafoides es una de las lesiones ocultas más frecuentes tras trauma de muñeca. Cuando existe sospecha clínica y la radiografía AP inicial es normal, debe solicitarse una proyección específica para escafoides.",
    "keyPoints": [
      "Cuando veas: Trauma de muñeca. Radiografía inicial normal. Persistencia de sospecha clínica.",
      "Debes pensar en: Fractura oculta de escafoides.",
      "Tema: Trauma de muñeca."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las fracturas más frecuentemente pasadas por alto en urgencias.\nLa clave no es la radiografía normal.\nLa clave es:\nLa sospecha clínica persistente.\n¿Qué está ocurriendo realmente?\nTras un trauma de muñeca:\nLa radiografía AP inicial puede ser normal.\nSin embargo:\nAlgunas fracturas del escafoides pueden no visualizarse inicialmente.\n¿Qué proyección debe solicitarse?\nLa proyección de Stecher:\nOptimiza la visualización del escafoides.\nY aumenta:\nLa sensibilidad diagnóstica.\n¿Por qué es importante diagnosticarla?\nPorque el escafoides posee:\nIrrigación retrógrada.\nLas fracturas no diagnosticadas pueden evolucionar a:\n• Pseudoartrosis.\n• Necrosis avascular.\n¿Por qué NO basta con la AP?\nPorque:\nMuchas fracturas no desplazadas pasan desapercibidas.\n¿Por qué NO elegir únicamente la lateral?\nLa lateral complementa el estudio.\nPero:\nLa proyección específica de escafoides es más útil cuando se sospecha esta lesión.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Radiografía normal.\"\nY concluyen:\nAusencia de fractura.\nSin embargo:\nEl dato decisivo es:\nLa necesidad de descartar una lesión oculta.\nEsto orienta a:\nProyección específica de escafoides.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar el trauma de muñeca.\n2.\tEvaluar sospecha clínica.\n3.\tReconocer que la AP puede ser normal.\n4.\tSolicitar proyección de escafoides.\n5.\tConsiderar inmovilización si persiste la sospecha.\nPerlas de examen\n✅ El escafoides es el hueso del carpo que más se fractura.\n✅ La radiografía inicial puede ser normal.\n✅ La proyección de Stecher mejora la visualización del escafoides.\n✅ La necrosis avascular es una complicación clásica.\n✅ La pseudoartrosis es frecuente cuando el diagnóstico se retrasa.\n✅ El dolor en tabaquera anatómica aumenta la sospecha diagnóstica.\n✅ Ante alta sospecha clínica debe inmovilizarse aunque la radiografía sea normal.\nReferencias\n• Rockwood and Green's Fractures in Adults.\n• Campbell's Operative Orthopaedics.\n• AO Trauma Principles.\n• Moore Clinically Oriented Anatomy.\n• UpToDate: Scaphoid Fractures.",
    "statement": "Paciente de 15 años consulta a urgencias tras sufrir un trauma en la muñeca. Se realiza radiografía anteroposterior (AP) sin evidencia de fracturas. Debido a la persistencia de la sospecha clínica de lesión ósea, se decide complementar el estudio radiológico.\n¿Cuál es la proyección radiográfica adicional más recomendada para descartar lesiones ocultas?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Proyección lateral de muñeca."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Proyección oblicua de muñeca."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Proyección AP comparativa de ambas muñecas."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Proyección de escafoides (Stecher)."
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
const startMatch = content.match(/  \{\r?\n    id: "dr-q-207"/);
const endMatch = content.match(/  \{\r?\n    id: "dr-q-222"/);
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
console.log(`Patched dr-q-207 through dr-q-221 (${questions.length} questions) in ${coexamPath}`);
