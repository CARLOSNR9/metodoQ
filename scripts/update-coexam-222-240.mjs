import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coexamPath = path.join(__dirname, "../src/data/dr-q-coexam-questions.ts");

const questions = [
  {
    "id": 222,
    "examArea": "DERMATOLOGÍA",
    "topic": "DERMATOLOGÍA",
    "slug": "dermatologia",
    "difficulty": "easy",
    "correctOptionId": "B",
    "explanation": "La dermatitis seborreica es una dermatosis inflamatoria crónica caracterizada por placas eritematodescamativas con escamas amarillentas y grasosas en áreas ricas en glándulas sebáceas. Se ha asociado a la proliferación de levaduras del género Malassezia.",
    "keyPoints": [
      "Cuando veas: Escamas amarillentas. Cuero cabelludo. Barba. Prurito.",
      "Debes pensar en: Dermatitis seborreica.",
      "Tema: Dermatitis seborreica."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las enfermedades dermatológicas más frecuentes.\nLa clave no es el prurito.\nLa clave es:\nLa localización y el aspecto de las escamas.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Placas descamativas.\n• Escamas amarillentas y grasosas.\n• Cuero cabelludo.\n• Región de la barba.\nEstos hallazgos son característicos de:\nDermatitis seborreica.\n¿Cuál es el agente asociado?\nLa enfermedad se relaciona con:\nLevaduras lipofílicas del género Malassezia.\nClásicamente en los exámenes se menciona:\nMalassezia furfur.\n¿Dónde aparece con mayor frecuencia?\nEn zonas ricas en glándulas sebáceas:\n• Cuero cabelludo.\n• Surcos nasogenianos.\n• Cejas.\n• Conducto auditivo externo.\n• Región preesternal.\n• Barba.\n¿Por qué NO es psoriasis?\nLa psoriasis suele presentar:\n• Escamas blanquecinas o plateadas.\n• Bordes bien definidos.\nAdemás:\nEs menos frecuente que comprometa predominantemente barba y áreas seborreicas.\n¿Por qué NO es tiña capitis?\nLa tiña suele asociarse a:\n• Alopecia localizada.\n• Cabellos rotos.\n• Dermatofitos.\nNo a escamas grasosas amarillentas.\n¿Por qué NO es dermatitis atópica?\nLa dermatitis atópica se caracteriza por:\n• Xerosis intensa.\n• Antecedentes atópicos.\n• Distribución flexural.\nNo por placas seborreicas típicas.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Placas descamativas.\"\nY responden:\nPsoriasis.\nSin embargo:\nEl dato decisivo es:\nLa presencia de escamas amarillentas y grasosas en áreas seborreicas.\nEsto orienta a:\nDermatitis seborreica.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar la localización.\n2.\tEvaluar el tipo de escama.\n3.\tReconocer áreas seborreicas.\n4.\tAsociar Malassezia.\n5.\tDiagnosticar dermatitis seborreica.\nPerlas de examen\n✅ La dermatitis seborreica se asocia a Malassezia spp.\n✅ Las escamas suelen ser amarillentas y grasosas.\n✅ El cuero cabelludo es la localización más frecuente.\n✅ Puede afectar barba, cejas y surcos nasogenianos.\n✅ El prurito es variable.\n✅ El tratamiento incluye antifúngicos tópicos y corticoides de baja potencia.\n✅ Es más frecuente en lactantes y adultos mayores.\nReferencias\n• Fitzpatrick's Dermatology.\n• Bolognia Dermatology.\n• Andrews' Diseases of the Skin.\n• UpToDate: Seborrheic Dermatitis.\n• European Dermatology Forum Guidelines.",
    "statement": "Un hombre de 80 años consulta por la aparición de placas amarillentas, pruriginosas y descamativas en cuero cabelludo y región de la barba.\n¿Cuál es el diagnóstico más probable y cuál es el agente etiológico más asociado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Psoriasis; Streptococcus pyogenes."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Dermatitis seborreica; Malassezia furfur."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Tiña capitis; Trichophyton rubrum."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Dermatitis atópica; Staphylococcus aureus."
      }
    ]
  },
  {
    "id": 223,
    "examArea": "PEDIATRÍA",
    "topic": "PEDIATRÍA",
    "slug": "pediatria",
    "difficulty": "easy",
    "correctOptionId": "C",
    "explanation": "La enfermedad de Kawasaki es una vasculitis sistémica de vasos medianos caracterizada por fiebre prolongada, alteraciones mucocutáneas, adenopatías cervicales y exantema. El tratamiento temprano con inmunoglobulina intravenosa disminuye significativamente el riesgo de aneurismas coronarios.",
    "keyPoints": [
      "Cuando veas: Fiebre ≥ 5 días. Lengua en fresa. Adenopatía cervical. Exantema. Cambios mucocutáneos.",
      "Debes pensar en: Enfermedad de Kawasaki.",
      "Tema: Vasculitis en pediatría."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las vasculitis pediátricas más preguntadas en los exámenes.\nLa clave no es el exantema.\nLa clave es:\nLa fiebre prolongada asociada a cambios mucocutáneos.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Fiebre de más de 5 días.\n• Exantema.\n• Lengua roja.\n• Adenopatías cervicales.\n• Compromiso mucoso.\nEstos hallazgos son característicos de:\nEnfermedad de Kawasaki.\n¿Cuáles son los criterios clásicos?\nAdemás de la fiebre prolongada:\n• Conjuntivitis bilateral no purulenta.\n• Cambios en mucosa oral.\n• Alteraciones de extremidades.\n• Exantema polimorfo.\n• Adenopatía cervical.\n¿Por qué es importante el diagnóstico?\nPorque puede producir:\nAneurismas de arterias coronarias.\nEsta es:\nLa complicación más temida.\n¿Cuál es el tratamiento de elección?\nDebe administrarse:\n• Inmunoglobulina intravenosa (IVIG).\n• Ácido acetilsalicílico.\nIdealmente:\nDentro de los primeros 10 días de enfermedad.\n¿Por qué NO es escarlatina?\nLa escarlatina puede producir:\n• Lengua en fresa.\n• Exantema.\nPero generalmente presenta:\nFaringoamigdalitis estreptocócica previa.\nY no la constelación clásica de Kawasaki.\n¿Por qué NO es sarampión?\nEl sarampión suele acompañarse de:\n• Tos.\n• Coriza.\n• Conjuntivitis.\n• Manchas de Koplik.\n¿Por qué NO es mononucleosis?\nLa mononucleosis suele asociarse a:\n• Faringitis.\n• Adenopatías generalizadas.\n• Hepatoesplenomegalia.\nNo a los hallazgos mucocutáneos típicos.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Lengua roja.\"\nY responden:\nEscarlatina.\nSin embargo:\nEl dato decisivo es:\nLa fiebre prolongada con exantema y adenopatía cervical.\nEsto orienta a:\nEnfermedad de Kawasaki.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar fiebre prolongada.\n2.\tBuscar criterios clínicos.\n3.\tReconocer la vasculitis.\n4.\tIniciar inmunoglobulina intravenosa.\n5.\tAdministrar ácido acetilsalicílico.\nPerlas de examen\n✅ Fiebre ≥ 5 días es un criterio indispensable para Kawasaki clásica.\n✅ La lengua en fresa es un hallazgo frecuente.\n✅ La adenopatía cervical suele ser unilateral.\n✅ La complicación más importante son los aneurismas coronarios.\n✅ La IVIG reduce significativamente el riesgo coronario.\n✅ El AAS forma parte del tratamiento estándar.\n✅ Es la principal causa de cardiopatía adquirida en niños en países desarrollados.\nReferencias\n• Nelson Textbook of Pediatrics.\n• American Heart Association Guidelines for Kawasaki Disease.\n• Red Book: American Academy of Pediatrics.\n• Rudolph's Pediatrics.\n• UpToDate: Kawasaki Disease Clinical Features and Diagnosis.",
    "statement": "Niño de 8 años consulta por fiebre de 6 días de evolución, asociada a astenia, adinamia, malestar general, exantema cutáneo, cambios en mucosas orales y adenopatías cervicales.\n¿Cuál es el diagnóstico más probable y el tratamiento de elección?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Escarlatina; penicilina benzatínica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Sarampión; vitamina A y manejo de soporte."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Enfermedad de Kawasaki; inmunoglobulina intravenosa y ácido acetilsalicílico."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Mononucleosis infecciosa; manejo sintomático."
      }
    ]
  },
  {
    "id": 224,
    "examArea": "CIRUGÍA VASCULAR",
    "topic": "CIRUGÍA VASCULAR",
    "slug": "cirugia_vascular",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "La presencia de signos duros de lesión vascular, como ausencia o disminución de pulsos y datos de isquemia distal, constituye una indicación de exploración quirúrgica inmediata sin retrasar el manejo con estudios diagnósticos adicionales.",
    "keyPoints": [
      "Cuando veas: Trauma penetrante. Disminución o ausencia de pulsos. Frialdad distal. Sospecha de lesión arterial.",
      "Debes pensar en: Lesión vascular mayor.",
      "Tema: Trauma vascular."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el manejo inicial del trauma vascular.\nLa clave no es el sangrado.\nLa clave es:\nLa presencia de signos duros de lesión vascular.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Herida penetrante.\n• Disminución de pulsos.\n• Frialdad distal.\nEstos hallazgos sugieren:\nCompromiso arterial significativo.\n¿Cuáles son los signos duros de lesión vascular?\nLos más importantes son:\n• Sangrado pulsátil.\n• Hematoma expansivo.\n• Soplo o frémito.\n• Ausencia de pulsos.\n• Isquemia distal.\nCuando están presentes:\nNo se requieren estudios diagnósticos previos.\n¿Cuál es la conducta correcta?\nLa conducta indicada es:\nExploración quirúrgica urgente.\n¿Por qué NO solicitar Doppler?\nEl Doppler es útil en:\nPacientes con signos blandos.\nNo debe retrasar:\nLa cirugía cuando existen signos duros.\n¿Por qué NO solicitar angioTAC?\nLa angioTAC es excelente para caracterizar lesiones vasculares.\nSin embargo:\nNo debe retrasar el tratamiento definitivo en pacientes con isquemia.\n¿Por qué NO observar?\nLa demora terapéutica aumenta:\nEl riesgo de pérdida de la extremidad.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Paciente estable.\"\nY responden:\nAngioTAC.\nSin embargo:\nEl dato decisivo es:\nLa disminución de pulsos y la frialdad distal.\nEsto constituye:\nIsquemia aguda secundaria a lesión vascular.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar trauma penetrante.\n2.\tBuscar signos duros vasculares.\n3.\tReconocer isquemia distal.\n4.\tEvitar retrasos diagnósticos innecesarios.\n5.\tRealizar exploración quirúrgica urgente.\nPerlas de examen\n✅ La ausencia o disminución de pulsos es un signo duro de lesión vascular.\n✅ La frialdad distal indica compromiso de la perfusión.\n✅ Los signos duros requieren cirugía inmediata.\n✅ La angioTAC se reserva para pacientes estables sin signos duros.\n✅ El tiempo de isquemia determina el pronóstico funcional.\n✅ La revascularización temprana mejora la viabilidad de la extremidad.\n✅ En trauma vascular, la clínica dirige la conducta inicial.\nReferencias\n• Advanced Trauma Life Support (ATLS).\n• Rutherford's Vascular Surgery and Endovascular Therapy.\n• Eastern Association for the Surgery of Trauma (EAST) Guidelines.\n• Schwartz's Principles of Surgery.\n• UpToDate: Extremity Vascular Trauma.",
    "statement": "Un habitante de calle es encontrado con una herida penetrante en el muslo izquierdo y es trasladado al servicio de urgencias. Al examen físico presenta disminución de pulsos distales y frialdad de la extremidad afectada.\n¿Cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Solicitar ecografía Doppler arterial de la extremidad."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Solicitar angiotomografía de miembro inferior."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Exploración quirúrgica vascular urgente."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Observación clínica y reevaluación en 6 horas."
      }
    ]
  },
  {
    "id": 225,
    "examArea": "ORTOPEDIA Y TRAUMATOLOGÍA",
    "topic": "ORTOPEDIA Y TRAUMATOLOGÍA",
    "slug": "ortopedia_y_traumatologia",
    "difficulty": "medium",
    "correctOptionId": "D",
    "explanation": "La clasificación Gustilo IIIC corresponde a cualquier fractura abierta asociada a lesión vascular que requiere reparación quirúrgica, independientemente del tamaño de la herida o del compromiso de partes blandas.",
    "keyPoints": [
      "Cuando veas: Fractura abierta. Ausencia de pulsos. Lesión vascular. Trauma de alta energía.",
      "Debes pensar en: Gustilo IIIC.",
      "Tema: Clasificación de Gustilo y Anderson."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las clasificaciones ortopédicas más preguntadas en trauma.\nLa clave no es la fractura.\nLa clave es:\nLa lesión vascular.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Trauma de alta energía.\n• Fractura abierta de tibia y peroné.\n• Ausencia de pulsos distales.\n• Déficit neurológico.\nEsto indica:\nCompromiso vascular severo.\n¿Cómo se clasifica?\nRecordemos:\nGustilo I:\n• Herida <1 cm.\n• Baja energía.\nGustilo II:\n• Herida >1 cm.\n• Sin daño extenso.\nGustilo III:\n• Trauma de alta energía.\n• Amplio daño de partes blandas.\nSe subdivide en:\nIIIA:\n• Cobertura ósea posible.\nIIIB:\n• Pérdida extensa de tejidos blandos con exposición ósea.\nIIIC:\n• Lesión vascular que requiere reparación.\n¿Cuál es el dato decisivo?\nLa presencia de:\nAusencia de pulsos distales.\nEsto implica:\nLesión arterial asociada.\nPor definición:\nLa fractura es Gustilo IIIC.\n¿Por qué NO es IIIA?\nPorque en IIIA:\nNo existe lesión vascular significativa.\n¿Por qué NO es IIIB?\nPorque la característica fundamental del IIIB es:\nLa pérdida extensa de cobertura de partes blandas.\nNo necesariamente lesión arterial.\n¿Cuál es la trampa de examen?\nMuchos estudiantes buscan:\nEl tamaño de la herida.\nSin embargo:\nEl dato decisivo es:\nLa lesión vascular.\nSiempre que exista lesión arterial que requiera reparación:\nLa respuesta será:\nGustilo IIIC.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar fractura abierta.\n2.\tBuscar compromiso vascular.\n3.\tConfirmar ausencia de pulsos.\n4.\tClasificar como Gustilo IIIC.\n5.\tRealizar manejo ortopédico y vascular urgente.\nPerlas de examen\n✅ La lesión vascular define una fractura Gustilo IIIC.\n✅ La tibia es el hueso largo más frecuentemente asociado a fracturas abiertas graves.\n✅ Las fracturas Gustilo IIIC tienen alto riesgo de amputación.\n✅ Requieren antibióticos tempranos y desbridamiento quirúrgico.\n✅ Debe valorarse la viabilidad de la extremidad.\n✅ El manejo suele requerir cirugía vascular y ortopédica conjunta.\n✅ Son lesiones de alta energía con elevada morbimortalidad.\nReferencias\n• Gustilo RB, Anderson JT. Prevention of Infection in the Treatment of Open Fractures.\n• Rockwood and Green's Fractures in Adults.\n• Campbell's Operative Orthopaedics.\n• ATLS (Advanced Trauma Life Support).\n• UpToDate: Classification and Management of Open Fractures.",
    "statement": "Un hombre de 30 años es llevado a urgencias tras ser atropellado. Refiere que las llantas de un vehículo pasaron por encima de su extremidad inferior. Al examen físico presenta fractura abierta de tibia y peroné, ausencia de pulsos distales y pérdida de la función motora de la extremidad afectada.\n¿Cuál es la clasificación de Gustilo y Anderson más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Gustilo I."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Gustilo II."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Gustilo IIIA."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Gustilo IIIC."
      }
    ]
  },
  {
    "id": 226,
    "examArea": "TOXICOLOGÍA",
    "topic": "TOXICOLOGÍA",
    "slug": "toxicologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "La dosis potencialmente tóxica de acetaminofén en una ingesta aguda única es ≥150 mg/kg (o aproximadamente ≥7.5 g en adultos). Ante una sobredosis intencional debe solicitarse concentración sérica de acetaminofén a las 4 horas de la ingesta (o tan pronto como sea posible si han transcurrido más de 4 horas) y valorar tratamiento con N-acetilcisteína.",
    "keyPoints": [
      "Cuando veas: Intento autolítico. Ingesta masiva de acetaminofén. Paciente inicialmente asintomático.",
      "Debes pensar en: Intoxicación por acetaminofén.",
      "Tema: Toxicología."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la intoxicación medicamentosa más frecuente a nivel mundial.\nLa clave no es el examen físico.\nLa clave es:\nLa cantidad ingerida.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Ingesta voluntaria masiva.\n• Riesgo de hepatotoxicidad grave.\n• Examen físico inicialmente normal.\nEsto ocurre porque:\nLa intoxicación por acetaminofén suele ser inicialmente asintomática.\n¿Cuál es la dosis tóxica?\nLa cifra que debes recordar para examen es:\n≥150 mg/kg.\nTambién suele recordarse:\n≥7.5 gramos en adultos.\n¿Cuál es el siguiente paso?\n1.\tDeterminar hora exacta de la ingesta.\n2.\tSolicitar nivel sérico de acetaminofén.\n3.\tAplicar nomograma de Rumack-Matthew.\n4.\tIniciar N-acetilcisteína cuando esté indicada.\n¿Cuándo iniciar N-acetilcisteína inmediatamente?\nCuando:\n• La dosis ingerida claramente supera el umbral tóxico.\n• Se desconoce el tiempo de ingesta.\n• No será posible obtener niveles oportunamente.\n¿Por qué la paciente puede estar asintomática?\nPorque la hepatotoxicidad suele desarrollarse:\nEntre las 24 y 72 horas posteriores.\n¿Cuál es la trampa de examen?\nMuchos estudiantes creen que:\nLa ausencia de síntomas descarta gravedad.\nSin embargo:\nLa mayoría de los pacientes se encuentran clínicamente bien durante las primeras horas.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tCalcular la dosis ingerida.\n2.\tCompararla con 150 mg/kg.\n3.\tSolicitar nivel sérico.\n4.\tAplicar nomograma.\n5.\tIniciar N-acetilcisteína cuando corresponda.\nPerlas de examen\n✅ La dosis tóxica clásica es ≥150 mg/kg.\n✅ El antídoto es la N-acetilcisteína.\n✅ La mayor eficacia del antídoto ocurre si se administra dentro de las primeras 8 horas.\n✅ El nomograma de Rumack-Matthew se utiliza en intoxicaciones agudas únicas.\n✅ La hepatotoxicidad puede aparecer después de 24 horas.\n✅ El paciente puede estar inicialmente asintomático.\n✅ El acetaminofén es una de las causas más frecuentes de falla hepática aguda.\nReferencias\n• Goldfrank's Toxicologic Emergencies.\n• Tintinalli's Emergency Medicine.\n• Nelson Textbook of Pediatrics.\n• UpToDate: Acetaminophen Poisoning in Children and Adolescents.\n• American Academy of Clinical Toxicology Guidelines.",
    "statement": "Adolescente de 17 años es llevada a urgencias después de ingerir 43 tabletas de acetaminofén en un intento autolítico. Al ingreso se encuentra hemodinámicamente estable y sin hallazgos relevantes en el examen físico.\n¿Cuál es la dosis tóxica de acetaminofén y cuál es el siguiente paso en el manejo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Dosis tóxica >75 mg/kg; observación clínica y egreso."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Dosis tóxica >100 mg/kg; administrar carbón activado únicamente."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Dosis tóxica >150 mg/kg; solicitar nivel sérico de acetaminofén e iniciar protocolo con N-acetilcisteína según nomograma de Rumack-Matthew."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Dosis tóxica >300 mg/kg; realizar hemodiálisis de urgencia."
      }
    ]
  },
  {
    "id": 227,
    "examArea": "CARDIOLOGÍA",
    "topic": "CARDIOLOGÍA",
    "slug": "cardiologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "Toda taquicardia regular de complejo ancho debe considerarse taquicardia ventricular hasta demostrar lo contrario. En un paciente hemodinámicamente estable, el tratamiento farmacológico de elección es la amiodarona intravenosa.",
    "keyPoints": [
      "Cuando veas: Taquicardia. QRS ancho (>120 ms). Paciente estable. Dolor torácico.",
      "Debes pensar en: Taquicardia ventricular.",
      "Tema: Arritmias ventriculares."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las emergencias cardiológicas más importantes.\nLa clave no es el dolor torácico.\nLa clave es:\nLa taquicardia de complejos anchos.\n¿Qué está ocurriendo realmente?\nEl ECG muestra:\n• Taquicardia.\n• Complejos QRS anchos.\nHasta demostrar lo contrario:\nDebe asumirse que se trata de una:\nTaquicardia ventricular.\n¿Por qué?\nPorque aproximadamente:\nEl 80% de las taquicardias de complejo ancho en adultos corresponden a taquicardia ventricular.\n¿Cuál es el tratamiento?\nSi el paciente está estable:\n• Amiodarona IV.\nSi estuviera inestable:\n• Cardioversión sincronizada inmediata.\n¿Por qué NO adenosina?\nLa adenosina puede utilizarse en algunas TSV con aberrancia.\nSin embargo:\nNo es el tratamiento inicial de elección cuando se sospecha taquicardia ventricular.\n¿Por qué NO verapamilo?\nEl verapamilo puede producir:\nColapso hemodinámico en taquicardia ventricular.\nPor ello debe evitarse.\n¿Por qué NO nitroglicerina?\nLa nitroglicerina puede ser útil en síndrome coronario agudo.\nPero:\nNo corrige la arritmia.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Dolor torácico.\"\nY responden:\nTratamiento antiisquémico.\nSin embargo:\nEl dato decisivo es:\nLa presencia de una taquicardia de complejo ancho.\nLa arritmia debe tratarse primero.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar QRS ancho.\n2.\tAsumir taquicardia ventricular.\n3.\tEvaluar estabilidad hemodinámica.\n4.\tAdministrar amiodarona si está estable.\n5.\tCardioversión si aparece inestabilidad.\nPerlas de examen\n✅ Toda taquicardia de complejo ancho es TV hasta demostrar lo contrario.\n✅ La amiodarona es el antiarrítmico de elección en TV estable.\n✅ La cardioversión sincronizada es el manejo de elección en TV inestable.\n✅ El verapamilo está contraindicado en TV.\n✅ El antecedente de cardiopatía estructural aumenta la probabilidad de TV.\n✅ La estabilidad hemodinámica define la conducta inicial.\n✅ El QRS ancho corresponde a una duración ≥120 ms.\nReferencias\n• ACLS American Heart Association.\n• Braunwald's Heart Disease.\n• Harrison's Principles of Internal Medicine.\n• ESC Guidelines for Ventricular Arrhythmias.\n• UpToDate: Sustained Monomorphic Ventricular Tachycardia.",
    "statement": "Un hombre consulta a urgencias por dolor torácico de 30 minutos de evolución. Al ingreso presenta frecuencia cardíaca de 70 lpm y presión arterial de 110/70 mmHg. Antes de iniciar manejo antiisquémico se realiza electrocardiograma, el cual evidencia una taquicardia regular de complejos anchos.\n¿Cuál es el tratamiento de elección para este cuadro?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Adenosina intravenosa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Amiodarona intravenosa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Verapamilo intravenoso."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Nitroglicerina sublingual."
      }
    ]
  },
  {
    "id": 228,
    "examArea": "TOXICOLOGÍA",
    "topic": "TOXICOLOGÍA",
    "slug": "toxicologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "La combinación de miosis, bradicardia, hipotensión, sialorrea e hiperperistaltismo es característica de un toxíndrome colinérgico, habitualmente secundario a exposición a organofosforados o carbamatos.",
    "keyPoints": [
      "Cuando veas: Miosis. Bradicardia. Sialorrea. Hipotensión. Hiperperistaltismo.",
      "Debes pensar en: Toxíndrome colinérgico.",
      "Tema: Intoxicaciones agudas."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el reconocimiento de toxíndromes.\nLa clave no es la pérdida de conciencia.\nLa clave es:\nLa combinación de manifestaciones muscarínicas.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Miosis.\n• Bradicardia.\n• Hipotensión.\n• Hipersecreciones.\n• Aumento del peristaltismo.\nEsto corresponde a:\nExceso de acetilcolina.\nPor lo tanto:\nToxíndrome colinérgico.\n¿Cuál es la causa más frecuente?\nClásicamente:\n• Organofosforados.\n• Carbamatos.\n¿Qué síntomas produce?\nRecuerda el clásico:\nSLUDGE o DUMBELS.\n• Salivación.\n• Lagrimeo.\n• Micción.\n• Diarrea.\n• Síntomas gastrointestinales.\n• Emesis.\nAdemás:\n• Miosis.\n• Bradicardia.\n• Broncorrea.\n• Broncoespasmo.\n¿Cuál es el tratamiento?\nDos pilares:\n• Atropina.\n• Pralidoxima.\n¿Qué hace la atropina?\nBloquea:\nLos receptores muscarínicos.\nMejora:\n• Bradicardia.\n• Broncorrea.\n• Hipersecreciones.\n¿Qué hace la pralidoxima?\nReactiva:\nLa acetilcolinesterasa inhibida.\nEspecialmente útil en:\nIntoxicación por organofosforados.\n¿Por qué NO es opioide?\nLos opioides producen:\n• Miosis.\n• Depresión respiratoria.\nPero no suelen producir:\n• Sialorrea marcada.\n• Hiperperistaltismo.\n• Síndrome colinérgico completo.\n¿Por qué NO es simpaticomimético?\nLos simpaticomiméticos producen:\n• Midriasis.\n• Taquicardia.\n• Hipertensión.\nLo contrario del caso.\n¿Por qué NO es anticolinérgico?\nEl anticolinérgico produce:\n• Midriasis.\n• Piel seca.\n• Retención urinaria.\nNo miosis ni hipersecreciones.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Miosis.\"\nY responden:\nIntoxicación por opioides.\nSin embargo:\nEl dato decisivo es:\nLa presencia de sialorrea e hiperperistaltismo.\nEsto orienta claramente a:\nToxíndrome colinérgico.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tReconocer el toxíndrome.\n2.\tIdentificar signos colinérgicos.\n3.\tAsegurar vía aérea.\n4.\tAdministrar atropina.\n5.\tAñadir pralidoxima.\nPerlas de examen\n✅ Miosis + sialorrea + bradicardia = pensar en toxíndrome colinérgico.\n✅ Los organofosforados inhiben la acetilcolinesterasa.\n✅ La atropina es el tratamiento inicial más importante.\n✅ La pralidoxima regenera la enzima inhibida.\n✅ La broncorrea es una causa frecuente de muerte.\n✅ La descontaminación es parte fundamental del manejo.\n✅ El diagnóstico suele ser clínico.\nReferencias\n• Goldfrank's Toxicologic Emergencies.\n• Tintinalli's Emergency Medicine.\n• Harrison's Principles of Internal Medicine.\n• Olson's Poisoning & Drug Overdose.\n• UpToDate: Organophosphate and Carbamate Poisoning.",
    "statement": "Paciente de 17 años es llevado a urgencias en estado de inconsciencia. Una amiga refiere que asistió a una fiesta rave durante toda la noche. Al ingreso presenta presión arterial de 70/40 mmHg, frecuencia cardíaca de 40 lpm, pupilas mióticas, sialorrea y aumento de los ruidos intestinales.\n¿Cuál es el toxíndrome más probable y cuál es el manejo de elección?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Toxíndrome simpaticomimético; benzodiacepinas intravenosas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Toxíndrome anticolinérgico; fisostigmina intravenosa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Toxíndrome colinérgico; atropina y pralidoxima."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Toxíndrome opioide; naloxona intravenosa."
      }
    ]
  },
  {
    "id": 229,
    "examArea": "PEDIATRÍA - DESARROLLO Y LENGUAJE",
    "topic": "DESARROLLO Y LENGUAJE",
    "slug": "desarrollo_y_lenguaje",
    "difficulty": "easy",
    "correctOptionId": "A",
    "explanation": "La dislalia es un trastorno de la articulación de los fonemas sin compromiso de la comprensión ni de la organización del lenguaje. El paciente sabe qué quiere decir, pero presenta dificultad para pronunciar correctamente determinados sonidos.",
    "keyPoints": [
      "Cuando veas: Dificultad para pronunciar fonemas. Lenguaje conservado. Comprensión normal.",
      "Debes pensar en: Dislalia.",
      "Tema: Trastornos del lenguaje."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa las diferencias entre los trastornos del habla y del lenguaje.\nLa clave no es la edad.\nLa clave es:\nQue el lenguaje está conservado.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Dificultad articulatoria.\n• Comprensión normal.\n• Expresión del lenguaje conservada.\nEsto corresponde a:\nDislalia.\n¿Qué es la dislalia?\nEs una alteración en:\nLa pronunciación o articulación de uno o varios fonemas.\nEjemplos frecuentes:\n• Sustitución de letras.\n• Omisión de sonidos.\n• Distorsión fonética.\n¿Por qué NO es disfasia?\nLa disfasia implica:\nAlteración en la adquisición y organización del lenguaje.\nAfecta:\n• Comprensión.\n• Expresión.\n• Estructuración lingüística.\n¿Por qué NO es disglosia?\nLa disglosia es un trastorno articulatorio secundario a:\nAlteraciones anatómicas.\nPor ejemplo:\n• Labio leporino.\n• Fisura palatina.\n• Malformaciones linguales.\nEl caso no menciona anomalías estructurales.\n¿Por qué NO es afasia?\nLa afasia corresponde a:\nPérdida adquirida del lenguaje por lesión cerebral.\nGeneralmente aparece:\nDespués de un evento neurológico.\n¿Cuál es la trampa de examen?\nMuchos estudiantes confunden:\nDislalia y disfasia.\nSin embargo:\nEl dato decisivo es:\nQue el lenguaje global está intacto.\nEsto orienta a:\nDislalia.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tEvaluar comprensión.\n2.\tEvaluar expresión.\n3.\tIdentificar alteración aislada de fonemas.\n4.\tConfirmar lenguaje conservado.\n5.\tDiagnosticar dislalia.\nPerlas de examen\n✅ La dislalia afecta únicamente la articulación de los sonidos.\n✅ No existe alteración de la comprensión del lenguaje.\n✅ No existe alteración de la inteligencia.\n✅ Es uno de los trastornos del habla más frecuentes en pediatría.\n✅ Puede requerir terapia fonoaudiológica.\n✅ La disfasia afecta el lenguaje, no solo la pronunciación.\n✅ La afasia es un trastorno adquirido secundario a lesión cerebral.\nReferencias\n• Nelson Textbook of Pediatrics.\n• Developmental-Behavioral Pediatrics.\n• Manual de Pediatría de la AEP.\n• DSM-5-TR.\n• UpToDate: Speech and Language Disorders in Children.",
    "statement": "Un adolescente de 14 años presenta dificultades para articular ciertos fonemas, sin alteraciones en la comprensión, expresión o estructura general del lenguaje.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Dislalia."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Disfasia."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Disglosia."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Afasia."
      }
    ]
  },
  {
    "id": 230,
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "GINECOLOGÍA Y OBSTETRICIA",
    "slug": "ginecologia_y_obstetricia",
    "difficulty": "medium",
    "correctOptionId": "A",
    "explanation": "Las células glandulares atípicas (AGC) se asocian a un riesgo significativo de lesiones premalignas o malignas del cuello uterino y del endometrio. Por ello, toda paciente con AGC-NOS requiere evaluación diagnóstica inmediata mediante colposcopia con toma de biopsias dirigidas y muestreo endocervical.",
    "keyPoints": [
      "Cuando veas: AGC. Células glandulares atípicas. Citología cervical anormal.",
      "Debes pensar en: Colposcopia inmediata.",
      "Tema: Tamizaje y patología cervical."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los hallazgos citológicos de mayor relevancia clínica.\nLa clave no es la edad.\nLa clave es:\nEl reporte de AGC.\n¿Qué está ocurriendo realmente?\nLa citología reporta:\nAGC-NOS.\nEsto significa:\nCélulas glandulares atípicas de significado indeterminado.\n¿Por qué es importante?\nPorque las alteraciones glandulares tienen:\nMayor asociación con lesiones premalignas y adenocarcinoma.\n¿Qué debe hacerse?\nToda paciente con AGC debe ser remitida a:\n• Colposcopia.\n• Biopsias dirigidas.\n• Muestreo endocervical.\nDependiendo de la edad y factores de riesgo:\nPuede requerirse evaluación endometrial adicional.\n¿Por qué NO repetir la citología?\nPorque:\nAGC no es una alteración de bajo riesgo.\nRepetir la citología retrasa el diagnóstico.\n¿Por qué NO solicitar únicamente ADN-VPH?\nLa prueba de VPH puede complementar la evaluación.\nSin embargo:\nNo reemplaza la colposcopia.\n¿Por qué NO realizar histeroscopia inicialmente?\nLa histeroscopia no constituye:\nEl estudio inicial estándar.\n¿Cuál es la trampa de examen?\nMuchos estudiantes asocian:\nCitología anormal.\nCon:\nRepetición del examen.\nSin embargo:\nEl dato decisivo es:\nLa presencia de células glandulares atípicas.\nEsto obliga a:\nEstudio colposcópico inmediato.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar AGC.\n2.\tReconocer alto riesgo de neoplasia.\n3.\tRealizar colposcopia.\n4.\tTomar biopsias dirigidas.\n5.\tCompletar estudio según hallazgos.\nPerlas de examen\n✅ AGC significa células glandulares atípicas.\n✅ Toda paciente con AGC requiere colposcopia.\n✅ El riesgo de adenocarcinoma es mayor que en las alteraciones escamosas leves.\n✅ El muestreo endocervical suele formar parte de la evaluación.\n✅ Puede requerirse estudio endometrial en mujeres mayores o con factores de riesgo.\n✅ No debe manejarse con simple observación.\n✅ Es una de las citologías que más obliga a estudio diagnóstico inmediato.\nReferencias\n• ASCCP Risk-Based Management Guidelines.\n• ACOG Practice Bulletin: Cervical Cancer Screening.\n• Novak's Gynecology.\n• Berek & Novak's Gynecology.\n• UpToDate: Management of Atypical Glandular Cells on Cervical Cytology.",
    "statement": "Una mujer de 40 años se realiza una citología cervical de tamizaje, cuyo resultado reporta AGC-NOS (células glandulares atípicas de significado indeterminado).\n¿Cuál es el siguiente paso en el manejo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Colposcopia y biopsia."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Repetir citología en 6–12 meses."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Prueba de ADN para VPH."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Histeroscopia."
      }
    ]
  },
  {
    "id": 231,
    "examArea": "NEUMOLOGÍA",
    "topic": "NEUMOLOGÍA",
    "slug": "neumologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "Los criterios de Light confirman un exudado (relación proteínas LP/suero >0.5 y relación LDH LP/suero >0.6). Además, la glucosa baja y el pH <7.30 sugieren un derrame parapneumónico complicado que generalmente requiere drenaje pleural.",
    "keyPoints": [
      "Cuando veas: Proteínas LP/suero >0.5. LDH LP/suero >0.6. Glucosa baja. pH bajo.",
      "Debes pensar en: Exudado complicado.",
      "Tema: Derrame pleural."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la interpretación del líquido pleural mediante los criterios de Light.\nLa clave no es el derrame.\nLa clave es:\nDeterminar si es exudado o transudado.\n¿Qué está ocurriendo realmente?\nCalculemos:\nProteínas:\n4.8 / 6.0 = 0.8\nLDH:\n420 / 180 = 2.3\nAmbos cumplen:\nCriterios de Light para exudado.\n¿Qué sugieren el pH y la glucosa?\n• pH 7.28.\n• Glucosa 45 mg/dL.\nEstos hallazgos sugieren:\nInfección pleural significativa.\nPor ello:\nDebe sospecharse un derrame parapneumónico complicado.\n¿Cuándo un derrame es exudativo?\nSi cumple cualquiera de los siguientes:\n• Proteínas LP/suero >0.5.\n• LDH LP/suero >0.6.\n• LDH LP > 2/3 del límite superior sérico.\n¿Cuáles son las causas más frecuentes?\n• Neumonía.\n• Cáncer.\n• Tuberculosis.\n• Embolia pulmonar.\n¿Por qué NO es transudado?\nLos transudados típicamente presentan:\n• Proteínas bajas.\n• LDH baja.\n• pH cercano a normalidad.\nY suelen aparecer en:\n• Insuficiencia cardíaca.\n• Cirrosis.\n• Síndrome nefrótico.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"Derrame pleural.\"\nY responden:\nInsuficiencia cardíaca.\nSin embargo:\nEl dato decisivo es:\nEl cumplimiento de los criterios de Light.\nEsto orienta claramente a:\nExudado.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tAplicar criterios de Light.\n2.\tClasificar el derrame.\n3.\tRevisar glucosa y pH.\n4.\tIdentificar complicación infecciosa.\n5.\tConsiderar drenaje pleural.\nPerlas de examen\n✅ Los criterios de Light son el estándar para diferenciar exudados y transudados.\n✅ Glucosa <60 mg/dL sugiere exudado complicado.\n✅ pH <7.30 orienta a drenaje pleural.\n✅ El derrame parapneumónico complicado suele ser neutrofílico.\n✅ La insuficiencia cardíaca produce transudados.\n✅ La tuberculosis suele producir exudado linfocitario.\n✅ Todo derrame pleural debe interpretarse inicialmente con criterios de Light.\nReferencias\n• Light RW. Pleural Diseases.\n• ATS Guidelines for Pleural Disease.\n• Harrison's Principles of Internal Medicine.\n• Murray & Nadel's Textbook of Respiratory Medicine.\n• UpToDate: Diagnostic Evaluation of Pleural Effusion.",
    "statement": "Paciente hospitalizado por derrame pleural es sometido a toracocentesis diagnóstica. El análisis del líquido pleural reporta:\n• Proteínas líquido pleural: 4.8 g/dL.\n• Proteínas séricas: 6.0 g/dL.\n• LDH líquido pleural: 420 U/L.\n• LDH sérica: 180 U/L.\n• pH: 7.28.\n• Glucosa: 45 mg/dL.\n• Recuento celular: 3.500 leucocitos/mm³ con predominio de neutrófilos.\n¿Qué determinan estos hallazgos?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Derrame pleural transudativo secundario a insuficiencia cardíaca."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Derrame pleural exudativo compatible con derrame parapneumónico complicado."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Derrame pleural secundario a síndrome nefrótico."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Derrame pleural transudativo secundario a cirrosis hepática."
      }
    ]
  },
  {
    "id": 232,
    "examArea": "ENDOCRINOLOGÍA",
    "topic": "ENDOCRINOLOGÍA",
    "slug": "endocrinologia",
    "difficulty": "medium",
    "correctOptionId": "D",
    "explanation": "La presencia de un nódulo sólido, hipoecoico y con microcalcificaciones corresponde a características ecográficas altamente sospechosas de malignidad. Un nódulo TI-RADS 5 de 1.5 cm tiene indicación de estudio citológico mediante BACAF.",
    "keyPoints": [
      "Cuando veas: Nódulo sólido. Hipoecogenicidad. Microcalcificaciones. Tamaño >1 cm.",
      "Debes pensar en: TI-RADS 5.",
      "Tema: Nódulo tiroideo."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la estratificación ecográfica del riesgo de cáncer de tiroides.\nLa clave no es el tamaño.\nLa clave es:\nLas características ecográficas sospechosas.\n¿Qué está ocurriendo realmente?\nLa ecografía reporta:\n• Nódulo sólido.\n• Hipoecoico.\n• Microcalcificaciones.\nEstos son:\nHallazgos de alto riesgo para malignidad.\n¿A qué categoría corresponde?\nLa combinación descrita es compatible con:\nTI-RADS 5.\n¿Qué significa TI-RADS 5?\nSignifica:\nAlta sospecha de cáncer de tiroides.\nEspecialmente:\nCarcinoma papilar.\n¿Por qué las microcalcificaciones son importantes?\nRepresentan frecuentemente:\nCuerpos de psammoma.\nHallazgo clásico de:\nCarcinoma papilar de tiroides.\n¿Cuál es el siguiente paso?\nEn nódulos sospechosos ≥1 cm:\nDebe realizarse:\nBiopsia por aspiración con aguja fina (BACAF).\n¿Por qué NO solicitar gammagrafía?\nLa gammagrafía está indicada principalmente cuando existe:\nTSH suprimida.\nPara determinar si el nódulo es hiperfuncionante.\n¿Por qué NO realizar solo seguimiento?\nPorque:\nLa sospecha ecográfica es alta.\nY el tamaño supera el umbral para biopsia.\n¿Cuál es la trampa de examen?\nMuchos estudiantes se enfocan en:\nQue el nódulo mide solo 1.5 cm.\nSin embargo:\nEl dato decisivo es:\nLa presencia de microcalcificaciones e hipoecogenicidad.\nEsto obliga a:\nRealizar BACAF.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tEvaluar características ecográficas.\n2.\tClasificar según TI-RADS.\n3.\tIdentificar criterios de alto riesgo.\n4.\tVerificar el tamaño.\n5.\tSolicitar BACAF.\nPerlas de examen\n✅ Las microcalcificaciones son un signo ecográfico de alta sospecha.\n✅ El carcinoma papilar es el cáncer de tiroides más frecuente.\n✅ TI-RADS 5 implica alto riesgo de malignidad.\n✅ La BACAF es el estudio diagnóstico inicial de elección.\n✅ La gammagrafía se reserva para nódulos con TSH baja.\n✅ Los nódulos sólidos tienen mayor riesgo que los quísticos.\n✅ La ecografía es la herramienta principal para estratificar riesgo.\nReferencias\n• American Thyroid Association Guidelines.\n• ACR TI-RADS White Paper.\n• Williams Textbook of Endocrinology.\n• UpToDate: Thyroid Nodules.\n• Haugen BR et al. ATA Management Guidelines for Thyroid Nodules.",
    "statement": "Mujer de 35 años consulta por disfagia, odinofagia y sensación de masa cervical de 3 meses de evolución. Se realiza ecografía tiroidea que reporta un nódulo sólido de 1.5 cm, hipoecoico y con microcalcificaciones.\n¿Cuál es la clasificación ecográfica más probable y el siguiente paso diagnóstico?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "TI-RADS 2; seguimiento ecográfico anual."
      },
      {
        "id": "B",
        "label": "B",
        "text": "TI-RADS 3; repetir ecografía en 12 meses."
      },
      {
        "id": "C",
        "label": "C",
        "text": "TI-RADS 4; gammagrafía tiroidea."
      },
      {
        "id": "D",
        "label": "D",
        "text": "TI-RADS 5; biopsia por aspiración con aguja fina (BACAF)."
      }
    ]
  },
  {
    "id": 233,
    "examArea": "PEDIATRÍA - OFTALMOLOGÍA",
    "topic": "OFTALMOLOGÍA",
    "slug": "oftalmologia",
    "difficulty": "easy",
    "correctOptionId": "B",
    "explanation": "La leucocoria (ausencia del reflejo rojo) en un niño pequeño debe considerarse retinoblastoma hasta demostrar lo contrario. Es el tumor intraocular maligno más frecuente de la infancia y constituye una urgencia diagnóstica.",
    "keyPoints": [
      "Cuando veas: Leucocoria. \"Ojo de gato\". Ausencia de reflejo rojo. Niño pequeño.",
      "Debes pensar en: Retinoblastoma.",
      "Tema: Retinoblastoma."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las urgencias oftalmológicas pediátricas más importantes.\nLa clave no es el entropión.\nLa clave es:\nLa leucocoria.\n¿Qué está ocurriendo realmente?\nLa madre describe:\n\"El ojo como el de un gato.\"\nY el examen confirma:\nAusencia del reflejo rojo.\nEsto corresponde a:\nLeucocoria.\n¿Cuál es la causa más importante que debe descartarse?\nRetinoblastoma.\nSiempre que aparezca en un examen:\nLeucocoria = Retinoblastoma hasta demostrar lo contrario.\n¿Por qué?\nPorque es:\nEl tumor intraocular maligno más frecuente en la infancia.\n¿Cuál es la edad típica?\nGeneralmente:\nMenores de 5 años.\nEspecialmente:\nEntre 1 y 3 años.\n¿Cuál es la manifestación más frecuente?\n• Leucocoria.\n• Estrabismo.\n¿Cuál es el siguiente paso?\nRemisión urgente a oftalmología pediátrica y estudio imagenológico ocular.\n¿Por qué NO es catarata congénita?\nTambién puede producir leucocoria.\nSin embargo:\nEn los exámenes la asociación clásica \"ojo de gato\" corresponde a retinoblastoma.\n¿Por qué NO es glaucoma congénito?\nProduce típicamente:\n• Epífora.\n• Fotofobia.\n• Buftalmos.\nNo leucocoria.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Entropión.\"\nY se distraen.\nSin embargo:\nEl dato decisivo es:\nLa ausencia del reflejo rojo.\nEsto orienta inmediatamente a:\nRetinoblastoma.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar leucocoria.\n2.\tSospechar retinoblastoma.\n3.\tRealizar valoración oftalmológica urgente.\n4.\tSolicitar ecografía ocular e imágenes complementarias.\n5.\tConfirmar el diagnóstico y estadificar.\nPerlas de examen\n✅ La leucocoria es el signo más frecuente del retinoblastoma.\n✅ El estrabismo es la segunda forma de presentación más común.\n✅ Nunca debe realizarse biopsia intraocular por riesgo de diseminación.\n✅ La ecografía ocular suele ser el primer estudio de imagen.\n✅ El retinoblastoma deriva de células retinianas primitivas.\n✅ La mutación del gen RB1 se asocia a formas hereditarias.\n✅ Toda leucocoria en pediatría es una urgencia diagnóstica.\nReferencias\n• Nelson Textbook of Pediatrics.\n• American Academy of Ophthalmology.\n• Shields' Retinoblastoma.\n• UpToDate: Retinoblastoma.\n• American Academy of Pediatrics Visual Screening Guidelines.",
    "statement": "Niño de 2 años es llevado a consulta por su madre, quien refiere que \"el ojo se ve como el de un gato\". Durante el tamizaje visual se evidencia ausencia del reflejo rojo en un ojo.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Estrabismo convergente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Retinoblastoma."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Catarata congénita."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Glaucoma congénito."
      }
    ]
  },
  {
    "id": 234,
    "examArea": "GINECOLOGÍA - INFECTOLOGÍA",
    "topic": "INFECTOLOGÍA",
    "slug": "infectologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "La lesión descrita es altamente sugestiva de chancro sifilítico. Durante la sífilis primaria temprana el VDRL puede ser negativo debido a que aún no se han desarrollado títulos detectables de anticuerpos no treponémicos.",
    "keyPoints": [
      "Cuando veas: Úlcera genital indolora. Bordes bien definidos. VDRL negativo.",
      "Debes pensar en: Sífilis primaria temprana.",
      "Tema: Sífilis."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las limitaciones más importantes de las pruebas diagnósticas para sífilis.\nLa clave no es el VDRL.\nLa clave es:\nLa descripción de la úlcera.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Úlcera única.\n• Indolora.\n• Bordes regulares.\nEsto corresponde clásicamente a:\nChancro sifilítico.\n¿Por qué puede ser negativo el VDRL?\nEn la sífilis primaria temprana:\nLos anticuerpos no treponémicos pueden no haberse elevado todavía.\nPor ello:\nEl VDRL puede ser falsamente negativo.\n¿Qué debe hacerse?\nSolicitar:\n• FTA-ABS.\n• TPPA.\n• Prueba rápida treponémica.\nSegún disponibilidad local.\n¿Cuál es el diagnóstico más probable?\nSífilis primaria.\n¿Debe descartarse la enfermedad por un VDRL negativo?\nNo.\nLa clínica tiene prioridad cuando la sospecha es alta.\n¿Por qué NO es herpes genital?\nEl herpes típicamente produce:\n• Úlceras múltiples.\n• Lesiones dolorosas.\n• Vesículas previas.\nNo corresponde al caso.\n¿Por qué NO repetir simplemente el VDRL?\nPorque:\nLa paciente requiere estudio confirmatorio inmediato.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"VDRL negativo.\"\nY descartan sífilis.\nSin embargo:\nEl dato decisivo es:\nLa presencia del chancro indoloro.\nEsto obliga a:\nContinuar el estudio con pruebas treponémicas.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar chancro sifilítico.\n2.\tReconocer que el VDRL puede ser negativo.\n3.\tSolicitar prueba treponémica.\n4.\tConfirmar el diagnóstico.\n5.\tIniciar tratamiento oportuno.\nPerlas de examen\n✅ El chancro sifilítico es típicamente indoloro.\n✅ El VDRL puede ser negativo en fases muy tempranas.\n✅ Las pruebas treponémicas son más sensibles en sífilis primaria.\n✅ La penicilina benzatínica continúa siendo el tratamiento de elección.\n✅ La sífilis debe notificarse y estudiarse en la pareja sexual.\n✅ Un VDRL negativo no excluye sífilis primaria.\n✅ La sospecha clínica sigue siendo fundamental para el diagnóstico.\nReferencias\n• CDC Sexually Transmitted Infections Treatment Guidelines.\n• Harrison's Principles of Internal Medicine.\n• Mandell, Douglas and Bennett's Infectious Diseases.\n• WHO Guidelines for the Management of Sexually Transmitted Infections.\n• UpToDate: Clinical Manifestations and Diagnosis of Syphilis.",
    "statement": "Una mujer de 28 años consulta por la aparición de una úlcera vulvar indolora de bordes bien definidos. Refiere actividad sexual sin protección en los últimos meses. Como parte del estudio inicial se solicita VDRL, cuyo resultado es no reactivo.\n¿Cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Descartar sífilis y solicitar biopsia de la lesión."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Repetir VDRL en 6 meses."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Solicitar prueba treponémica específica (FTA-ABS o prueba rápida treponémica) e iniciar manejo según hallazgos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Iniciar tratamiento para herpes genital."
      }
    ]
  },
  {
    "id": 235,
    "examArea": "CIRUGÍA - QUEMADURAS",
    "topic": "QUEMADURAS",
    "slug": "quemaduras",
    "difficulty": "medium",
    "correctOptionId": "D",
    "explanation": "Las quemaduras eléctricas de alto voltaje producen una extensa destrucción muscular y tisular profunda que no se correlaciona con la superficie cutánea visible. Por ello, la reanimación hídrica no debe basarse únicamente en la regla de los nueves o en las lesiones de entrada y salida.",
    "keyPoints": [
      "Cuando veas: Alto voltaje. Lesión de entrada y salida. Escaras pequeñas. Mecanismo eléctrico.",
      "Debes pensar en: Daño profundo oculto.",
      "Tema: Quemaduras eléctricas."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las principales diferencias entre las quemaduras térmicas y las eléctricas.\nLa clave no es el tamaño de la quemadura.\nLa clave es:\nEl mecanismo de lesión.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Descarga eléctrica de alto voltaje.\n• Punto de entrada.\n• Punto de salida.\nLa corriente atravesó:\nGran cantidad de tejidos profundos.\n¿Por qué la superficie visible engaña?\nPorque la electricidad:\nProduce necrosis muscular profunda.\nPuede existir:\n• Rabdomiólisis.\n• Síndrome compartimental.\n• Lesión vascular.\nCon lesiones cutáneas aparentemente pequeñas.\n¿Cómo se realiza la reposición hídrica?\nSe inicia reanimación agresiva:\nGuiada por:\n• Diuresis.\n• Estado hemodinámico.\n• Presencia de mioglobinuria.\nMás que por el porcentaje visible de SCQ.\n¿Cuál es la trampa de examen?\nMuchos estudiantes intentan:\nCalcular la superficie corporal quemada usando la regla de los nueves.\nSin embargo:\nEn quemaduras eléctricas de alto voltaje esto subestima gravemente la lesión.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar quemadura eléctrica de alto voltaje.\n2.\tReconocer daño profundo oculto.\n3.\tNo confiar en la superficie visible.\n4.\tIniciar reanimación hídrica intensiva.\n5.\tVigilar rabdomiólisis y función renal.\nPerlas de examen\n✅ Las quemaduras eléctricas suelen subestimar la lesión real.\n✅ El daño muscular profundo puede ser masivo.\n✅ La mioglobinuria es una complicación frecuente.\n✅ La diuresis es la principal guía de reanimación.\n✅ Debe realizarse monitorización cardíaca.\n✅ El síndrome compartimental es una complicación importante.\n✅ Alto voltaje (>1000 V) se asocia a mayor mortalidad y amputaciones.\nReferencias\n• Advanced Burn Life Support (ABLS).\n• American Burn Association Guidelines.\n• Schwartz's Principles of Surgery.\n• Tintinalli's Emergency Medicine.\n• UpToDate: Electrical Injuries.",
    "statement": "Hombre de 25 años, electricista, es traído al servicio de urgencias tras sufrir una descarga eléctrica de alto voltaje al manipular una antena en un tejado. Ingresa consciente, con una lesión de entrada en región occipital y una lesión de salida en el talón derecho. No presenta otras quemaduras cutáneas evidentes.\n¿Cuál es el porcentaje aproximado de superficie corporal quemada que debe estimarse inicialmente para realizar la reposición hídrica?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "1%."
      },
      {
        "id": "B",
        "label": "B",
        "text": "5%."
      },
      {
        "id": "C",
        "label": "C",
        "text": "20%."
      },
      {
        "id": "D",
        "label": "D",
        "text": "No puede estimarse por la apariencia externa; debe considerarse una quemadura eléctrica profunda de alto voltaje con importante daño tisular oculto."
      }
    ]
  },
  {
    "id": 236,
    "examArea": "PEDIATRÍA - CARDIOLOGÍA NEONATAL",
    "topic": "CARDIOLOGÍA NEONATAL",
    "slug": "cardiologia_neonatal",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "Según las recomendaciones del Ministerio de Salud de Colombia y los protocolos de tamizaje neonatal para cardiopatías congénitas críticas, una diferencia mayor de 3% entre la saturación preductal (mano derecha) y postductal (miembro inferior), o una saturación menor de 95% en cualquiera de las extremidades tras mediciones repetidas, constituye un tamizaje positivo.",
    "keyPoints": [
      "Cuando veas: Saturación preductal 98%. Saturación postductal 92%. Diferencia >3%. Recién nacido aparentemente sano.",
      "Debes pensar en: Tamizaje positivo para cardiopatía congénita crítica.",
      "Tema: Tamizaje neonatal cardiovascular."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el tamizaje neonatal para cardiopatías congénitas críticas.\nLa clave no es la ausencia de síntomas.\nLa clave es:\nLa diferencia de saturación.\n¿Qué está ocurriendo realmente?\nEl recién nacido presenta:\n• Saturación preductal: 98%.\n• Saturación postductal: 92%.\nLa diferencia es:\n6%.\nEsto supera:\nEl límite aceptado de 3%.\nPor tanto:\nEl tamizaje es positivo.\n¿Qué debe hacerse?\nAnte un tamizaje positivo:\n• Valoración pediátrica inmediata.\n• Evaluación por cardiología pediátrica.\n• Ecocardiograma.\n¿Qué cardiopatías pueden detectarse?\nPrincipalmente:\n• Coartación de aorta.\n• Transposición de grandes arterias.\n• Tronco arterioso.\n• Atresia pulmonar.\n• Síndrome de corazón izquierdo hipoplásico.\n¿Por qué NO dar egreso?\nPorque:\nPodría existir una cardiopatía congénita crítica aún asintomática.\n¿Por qué NO esperar control ambulatorio?\nPorque:\nLa detección temprana disminuye mortalidad neonatal.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"No presenta cianosis.\"\nY concluyen:\nRecién nacido sano.\nSin embargo:\nEl dato decisivo es:\nLa diferencia preductal-postductal mayor de 3%.\nEsto convierte el tamizaje en:\nPositivo.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tComparar saturaciones pre y postductales.\n2.\tIdentificar diferencia >3%.\n3.\tConsiderar tamizaje positivo.\n4.\tSolicitar ecocardiograma.\n5.\tDescartar cardiopatía congénita crítica antes del alta.\nPerlas de examen\n✅ La mano derecha corresponde a la medición preductal.\n✅ Los miembros inferiores corresponden a la medición postductal.\n✅ Diferencia >3% es un tamizaje anormal.\n✅ Saturación <95% también es criterio de positividad.\n✅ El tamizaje se realiza antes del egreso neonatal.\n✅ Un recién nacido puede tener cardiopatía crítica sin cianosis evidente.\n✅ El ecocardiograma es el estudio confirmatorio de elección.\nReferencias\n• Ministerio de Salud y Protección Social de Colombia. Lineamientos de Tamizaje Neonatal.\n• American Academy of Pediatrics.\n• Nelson Textbook of Pediatrics.\n• American Heart Association Guidelines.\n• UpToDate: Screening for Critical Congenital Heart Disease in Newborns.",
    "statement": "Neonato a término, sin antecedentes perinatales relevantes, con adecuada adaptación neonatal. Durante la evaluación previa al alta se realiza tamizaje para cardiopatías congénitas críticas mediante oximetría de pulso. Los resultados muestran saturación de oxígeno de 98% en la mano derecha y 92% en un miembro inferior, persistiendo la diferencia en una segunda medición.\n¿Cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Considerar tamizaje normal y otorgar egreso."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Repetir la oximetría en el control ambulatorio del recién nacido."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Considerar tamizaje positivo, realizar valoración cardiológica y ecocardiograma."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar oxígeno suplementario y repetir la medición en 24 horas."
      }
    ]
  },
  {
    "id": 237,
    "examArea": "GINECOLOGÍA Y PLANIFICACIÓN FAMILIAR",
    "topic": "GINECOLOGÍA Y PLANIFICACIÓN FAMILIAR",
    "slug": "ginecologia_y_planificacion_familiar",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "El sangrado uterino irregular es el efecto adverso más frecuente de los implantes de progestágeno. Cuando la paciente desea continuar con el método y se han descartado otras causas, puede realizarse tratamiento médico temporal con estrógenos o anticonceptivos combinados para mejorar el patrón de sangrado.",
    "keyPoints": [
      "Cuando veas: Implante subdérmico. Sangrado irregular persistente. Paciente desea conservar el método. Sin signos de alarma.",
      "Debes pensar en: Manejo médico del sangrado asociado al implante.",
      "Tema: Anticoncepción hormonal."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los efectos adversos más frecuentes de los implantes anticonceptivos.\nLa clave no es el sangrado.\nLa clave es:\nQue la paciente desea continuar con el método.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Sangrado irregular prolongado.\n• Uso de implante de solo progestágeno.\n• Ausencia de anemia.\n• Examen normal.\nEsto corresponde a:\nSangrado uterino asociado al implante.\n¿Cuál es el manejo inicial?\nLuego de descartar:\n• Embarazo.\n• Infección.\n• Patología estructural.\nPuede ofrecerse:\n• Anticonceptivo oral combinado por corto tiempo.\n• Estrógenos.\n• Algunos protocolos utilizan AINEs.\n¿Qué se busca?\nEstabilizar el endometrio.\nY disminuir:\nLos episodios de sangrado irregular.\n¿Por qué NO retirar el implante?\nPorque:\nLa paciente desea conservarlo.\nAdemás:\nLa mayoría mejora con manejo médico.\n¿Por qué NO realizar legrado?\nNo existe:\nSangrado severo ni sospecha de patología endometrial.\n¿Por qué NO limitarse a observar?\nPorque:\nEl sangrado está afectando significativamente su calidad de vida.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"5 meses de sangrado.\"\nY responden:\nRetirar el implante.\nSin embargo:\nEl dato decisivo es:\nLa paciente desea continuar el método.\nEsto orienta a:\nTratamiento médico antes de retirarlo.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tConfirmar que el sangrado es secundario al implante.\n2.\tDescartar otras causas.\n3.\tEvaluar impacto clínico.\n4.\tOfrecer manejo farmacológico.\n5.\tMantener el método si la paciente lo desea.\nPerlas de examen\n✅ El sangrado irregular es el efecto adverso más frecuente de los implantes.\n✅ No disminuye la eficacia anticonceptiva.\n✅ Los anticonceptivos combinados pueden utilizarse temporalmente para controlar el sangrado.\n✅ Los AINEs también pueden ser útiles en algunos casos.\n✅ El retiro del implante no es la primera medida si la paciente desea conservarlo.\n✅ Siempre debe descartarse embarazo antes de atribuir el sangrado al método.\n✅ La consejería adecuada mejora la adherencia al implante.\nReferencias\n• WHO Family Planning Handbook.\n• CDC U.S. Selected Practice Recommendations for Contraceptive Use.\n• ACOG Long-Acting Reversible Contraception Guidelines.\n• Williams Gynecology.\n• UpToDate: Management of Bleeding Irregularities with Progestin-Only Contraceptives.",
    "statement": "Mujer de 20 años consulta por sangrado uterino irregular persistente desde hace 5 meses. Utiliza implante subdérmico de levonorgestrel como método anticonceptivo. Refiere afectación de su calidad de vida, pero desea continuar utilizando el método. El examen físico es normal y no existen signos de anemia.\n¿Cuál es la conducta terapéutica más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Retirar inmediatamente el implante subdérmico."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar anticonceptivos orales combinados por corto tiempo para control del sangrado."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Realizar legrado uterino diagnóstico."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Suspender toda intervención y explicar que es un efecto esperado."
      }
    ]
  },
  {
    "id": 238,
    "examArea": "CIRUGÍA GENERAL",
    "topic": "CIRUGÍA GENERAL",
    "slug": "cirugia_general",
    "difficulty": "medium",
    "correctOptionId": "A",
    "explanation": "La diverticulitis aguda no complicada con inflamación pericólica y ausencia de abscesos o perforación corresponde a un Hinchey Ia. El manejo inicial suele ser conservador con antibióticos, analgesia, hidratación y vigilancia clínica.",
    "keyPoints": [
      "Cuando veas: Dolor en fosa ilíaca izquierda. Engrosamiento sigmoideo. Inflamación de grasa pericólica. Sin absceso.",
      "Debes pensar en: Diverticulitis aguda no complicada.",
      "Tema: Diverticulitis aguda."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la clasificación tomográfica de Hinchey.\nLa clave no es el dolor.\nLa clave es:\nLa ausencia de complicaciones.\n¿Qué está ocurriendo realmente?\nLa TAC muestra:\n• Engrosamiento del sigmoides.\n• Estriación de grasa pericólica.\nPero no evidencia:\n• Absceso.\n• Perforación.\n• Peritonitis.\nEsto corresponde a:\nHinchey Ia.\n¿Cómo recordar la clasificación?\nHinchey Ia:\n• Inflamación pericólica o flemón.\nHinchey Ib:\n• Absceso pericólico.\nHinchey II:\n• Absceso pélvico o a distancia.\nHinchey III:\n• Peritonitis purulenta.\nHinchey IV:\n• Peritonitis fecaloidea.\n¿Cuál es el tratamiento?\nInicialmente:\n• Antibióticos.\n• Analgesia.\n• Hidratación.\n• Observación clínica.\n¿Por qué NO drenaje percutáneo?\nPorque:\nNo existe colección o absceso.\n¿Por qué NO cirugía?\nPorque:\nNo hay perforación ni peritonitis.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Paciente anciano con fiebre.\"\nY responden:\nCirugía.\nSin embargo:\nEl dato decisivo es:\nLa TAC sin abscesos ni neumoperitoneo.\nEsto define:\nDiverticulitis no complicada.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar diverticulitis.\n2.\tBuscar abscesos.\n3.\tBuscar perforación.\n4.\tClasificar según Hinchey.\n5.\tElegir manejo conservador o quirúrgico.\nPerlas de examen\n✅ El dolor en fosa ilíaca izquierda es la presentación clásica.\n✅ Hinchey Ia corresponde a inflamación pericólica.\n✅ La TAC es el estudio diagnóstico de elección.\n✅ Los abscesos pequeños pueden manejarse conservadoramente.\n✅ Los abscesos grandes suelen requerir drenaje.\n✅ Hinchey III y IV generalmente requieren cirugía.\n✅ La diverticulitis complicada se asocia a perforación, abscesos o peritonitis.\nReferencias\n• Schwartz's Principles of Surgery.\n• Sabiston Textbook of Surgery.\n• ASCRS Guidelines for Diverticulitis.\n• UpToDate: Acute Colonic Diverticulitis.\n• World Society of Emergency Surgery Guidelines.",
    "statement": "Hombre de 78 años consulta por dolor en fosa ilíaca izquierda, fiebre y náuseas. La tomografía abdominal reporta engrosamiento del colon sigmoide con infiltración de la grasa pericólica, sin evidencia de abscesos, fístulas, neumoperitoneo ni peritonitis.\n¿Cuál es la clasificación de Hinchey y el manejo inicial más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hinchey Ia; manejo conservador con antibióticos y observación."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hinchey Ib; drenaje percutáneo urgente."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Hinchey III; laparotomía exploratoria urgente."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hinchey IV; procedimiento de Hartmann."
      }
    ]
  },
  {
    "id": 239,
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "slug": "neurologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La presencia de desconexión del medio, automatismos orales y período posictal confusional es altamente sugestiva de una crisis focal con alteración de la conciencia, frecuentemente originada en el lóbulo temporal.",
    "keyPoints": [
      "Cuando veas: Mirada fija. Automatismos orales. Duración de minutos. Confusión posictal.",
      "Debes pensar en: Crisis focal con alteración de la conciencia.",
      "Tema: Epilepsia focal."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el reconocimiento clínico de las crisis focales temporales.\nLa clave no es la desconexión.\nLa clave es:\nLos automatismos y la confusión posterior.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Desconexión del entorno.\n• Automatismos orales.\n• Mirada fija.\n• Estado posictal.\nEstos hallazgos son característicos de:\nCrisis focal con alteración de la conciencia.\n¿Dónde suelen originarse?\nCon mayor frecuencia en:\nLóbulo temporal.\n¿Qué son los automatismos?\nMovimientos involuntarios repetitivos como:\n• Masticación.\n• Chasquido de labios.\n• Deglución.\n• Manipulación de objetos.\nSon muy característicos de:\nEpilepsia temporal.\n¿Cuál es el tratamiento de primera línea?\nActualmente uno de los fármacos más utilizados como primera línea es:\nLevetiracetam.\nTambién pueden emplearse:\n• Lamotrigina.\n• Carbamazepina.\n¿Por qué NO es crisis de ausencia?\nLas ausencias típicamente:\n• Duran segundos.\n• No presentan período posictal.\n• Son más frecuentes en niños.\n¿Por qué NO es crisis tónico-clónica?\nNo existen:\n• Sacudidas generalizadas.\n• Fase tónica.\n• Fase clónica.\n¿Por qué NO es crisis mioclónica?\nLas mioclonías son:\nContracciones musculares breves.\nNo producen automatismos ni confusión prolongada.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Desconexión del entorno.\"\nY responden:\nCrisis de ausencia.\nSin embargo:\nEl dato decisivo es:\nLa duración de varios minutos y la confusión posictal.\nEsto orienta a:\nCrisis focal con alteración de la conciencia.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar la alteración de conciencia.\n2.\tBuscar automatismos.\n3.\tEvaluar período posictal.\n4.\tReconocer origen focal temporal.\n5.\tIniciar tratamiento antiepiléptico.\nPerlas de examen\n✅ Los automatismos orales sugieren epilepsia del lóbulo temporal.\n✅ La confusión posictal es típica de las crisis focales complejas.\n✅ Las ausencias no presentan período posictal.\n✅ Levetiracetam es una terapia de primera línea ampliamente utilizada.\n✅ La resonancia cerebral suele formar parte del estudio etiológico.\n✅ El EEG puede mostrar descargas focales temporales.\n✅ Las crisis focales son el tipo más frecuente de epilepsia en adultos.\nReferencias\n• Adams and Victor's Principles of Neurology.\n• Bradley's Neurology in Clinical Practice.\n• ILAE Classification of Seizures.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Focal Seizures in Adults.",
    "statement": "Mujer de 45 años presenta episodios recurrentes de desconexión del entorno de aproximadamente 3 minutos de duración. Durante los eventos presenta mirada fija y movimientos automáticos repetitivos de la boca. Al finalizar el episodio permanece desorientada y confusa durante varios minutos.\n¿Cuál es el tipo de crisis epiléptica más probable y cuál es el tratamiento de primera línea?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Crisis de ausencia; etosuximida."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Crisis focal con alteración de la conciencia (focal compleja); levetiracetam."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Crisis tónico-clónica generalizada; fenitoína."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Crisis mioclónica; ácido valproico."
      }
    ]
  },
  {
    "id": 240,
    "examArea": "PSIQUIATRÍA",
    "topic": "PSIQUIATRÍA",
    "slug": "psiquiatria",
    "difficulty": "easy",
    "correctOptionId": "B",
    "explanation": "La coexistencia de síntomas depresivos (llanto, desesperanza, ideación de muerte) con síntomas maniformes (verborrea, agitación psicomotora e insomnio con aumento de energía) es altamente sugestiva de un episodio mixto del trastorno bipolar. Los antidepresivos pueden precipitar o desenmascarar estos episodios.",
    "keyPoints": [
      "Cuando veas: Síntomas depresivos. Verborrea. Agitación. Disminución de la necesidad de sueño. Uso de antidepresivos.",
      "Debes pensar en: Episodio mixto bipolar.",
      "Tema: Trastorno bipolar."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los cuadros psiquiátricos con mayor riesgo suicida.\nLa clave no es la depresión.\nLa clave es:\nLa presencia simultánea de síntomas maníacos.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\nSíntomas depresivos:\n• Llanto.\n• Pensamientos negativos.\n• Ideación de muerte.\nY simultáneamente:\n• Verborrea.\n• Agitación psicomotora.\n• Insomnio.\nEsto corresponde a:\nEpisodio mixto bipolar.\n¿Qué es un episodio mixto?\nEs la coexistencia de:\nSíntomas depresivos y maníacos al mismo tiempo.\n¿Por qué es importante?\nPorque tiene:\nMayor riesgo suicida.\nMayor impulsividad.\nMayor riesgo de hospitalización.\n¿Cuál es la conducta inicial?\n• Suspender o reevaluar el antidepresivo.\n• Iniciar estabilizador del ánimo.\nEjemplos:\n• Litio.\n• Valproato.\nY frecuentemente:\n• Antipsicóticos atípicos (quetiapina, olanzapina, risperidona, entre otros).\n¿Qué hacer en urgencias?\nSi existe:\n• Riesgo suicida.\n• Agitación importante.\n• Episodio mixto severo.\nDebe considerarse:\nHospitalización psiquiátrica.\n¿Por qué NO aumentar el ISRS?\nPorque:\nPodría empeorar la descompensación bipolar.\n¿Por qué NO es delirium?\nEl delirium cursa con:\n• Alteración fluctuante de conciencia.\n• Déficit atencional.\nDatos ausentes en el caso.\n¿Por qué NO es ansiedad generalizada?\nLa ansiedad no explica:\nLa verborrea ni el cuadro mixto afectivo.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Depresión.\"\nY responden:\nAumentar el antidepresivo.\nSin embargo:\nEl dato decisivo es:\nLa presencia simultánea de síntomas maníacos.\nEsto orienta a:\nTrastorno bipolar en episodio mixto.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar síntomas depresivos.\n2.\tBuscar síntomas maniformes.\n3.\tReconocer episodio mixto.\n4.\tSuspender o reevaluar antidepresivos.\n5.\tIniciar estabilizador del ánimo y antipsicótico.\nPerlas de examen\n✅ El episodio mixto tiene uno de los mayores riesgos de suicidio en psiquiatría.\n✅ Los ISRS pueden precipitar manía o episodios mixtos.\n✅ El litio reduce el riesgo suicida.\n✅ Los antipsicóticos atípicos son útiles en el control agudo.\n✅ La disminución de la necesidad de sueño es un síntoma cardinal de manía.\n✅ La verborrea es un hallazgo clásico de activación maníaca.\n✅ Todo paciente con ideación suicida requiere valoración urgente del riesgo.\nReferencias\n• DSM-5-TR.\n• Kaplan & Sadock's Synopsis of Psychiatry.\n• American Psychiatric Association Guidelines.\n• Stahl's Essential Psychopharmacology.\n• UpToDate: Bipolar Disorder in Adults.",
    "statement": "Mujer de 38 años con antecedente de trastorno depresivo mayor en tratamiento con un inhibidor selectivo de la recaptación de serotonina (ISRS), consulta a urgencias por llanto persistente, pensamientos negativos e ideación de muerte. Durante la valoración presenta agitación psicomotora, verborrea e insomnio de varios días de evolución.\n¿Cuál es el diagnóstico más probable y el tratamiento de urgencia más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Episodio depresivo mayor; aumentar la dosis del ISRS."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Trastorno bipolar en episodio mixto; suspender antidepresivo e iniciar estabilizador del ánimo y antipsicótico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Delirium; haloperidol intravenoso."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Trastorno de ansiedad generalizada; benzodiacepina y egreso."
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
const startMatch = content.match(/  \{\r?\n    id: "dr-q-222"/);
const endMatch = content.match(/  \{\r?\n    id: "dr-q-241"/);
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
console.log(`Patched dr-q-222 through dr-q-240 (${questions.length} questions) in ${coexamPath}`);
