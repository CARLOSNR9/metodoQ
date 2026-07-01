import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coexamPath = path.join(__dirname, "../src/data/dr-q-coexam-questions.ts");

const questions = [
  {
    "id": 156,
    "examArea": "CIRUGÍA GENERAL",
    "topic": "CIRUGÍA GENERAL",
    "slug": "cirugia_general",
    "statement": "Masculino de 25 años es llevado al servicio de urgencias tras sufrir una herida por arma de fuego durante un atraco. Al examen físico presenta una lesión por proyectil en el tercio distal de la pierna derecha, con orificio de entrada en la cara anterolateral y orificio de salida posteromedial. Refiere dolor intenso en la extremidad. Se evidencia edema progresivo, parestesias, palidez distal y disminución marcada de los pulsos pedio y tibial posterior. El dolor aumenta con la movilización pasiva del pie.\n¿Cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Solicitar ecografía Doppler arterial de la extremidad."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Realizar angiotomografía de miembro inferior."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Observación clínica y reevaluación seriada de pulsos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Exploración quirúrgica vascular urgente."
      }
    ],
    "correctOptionId": "D",
    "explanation": "El paciente presenta trauma penetrante con signos duros de lesión vascular e isquemia aguda de extremidad, incluyendo disminución de pulsos, palidez, parestesias y dolor intenso. La presencia de estos hallazgos constituye indicación de exploración quirúrgica inmediata sin retrasar el manejo para realizar estudios diagnósticos adicionales.",
    "keyPoints": [
      "Cuando veas: Trauma penetrante de extremidad. Ausencia o disminución de pulsos. Palidez distal. Parestesias. Dolor intenso sugestivo de isquemia.",
      "Debes pensar en: Lesión vascular mayor que requiere intervención quirúrgica urgente.",
      "Tema: Trauma vascular periférico."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los principios más importantes del trauma vascular:\nReconocer cuándo un paciente debe ir directamente a cirugía.\nLa clave no es la herida por arma de fuego.\nLa clave es:\nLa presencia de signos duros de lesión vascular.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Trauma penetrante de extremidad.\n• Disminución importante de pulsos.\n• Palidez distal.\n• Parestesias.\n• Dolor intenso.\nEstos hallazgos sugieren:\nCompromiso arterial significativo con isquemia aguda de la extremidad.\n¿Por qué son importantes los pulsos?\nLa disminución o ausencia de pulsos distales constituye uno de los signos más importantes de lesión arterial.\nSugiere:\n• Oclusión arterial.\n• Sección vascular.\n• Trombosis traumática.\n• Lesión arterial crítica.\n¿Por qué preocupa la palidez?\nLa palidez refleja disminución de la perfusión tisular.\nEs un hallazgo clásico de:\nIsquemia arterial aguda.\n¿Qué significan las parestesias?\nLas alteraciones sensitivas sugieren compromiso neurológico secundario a hipoperfusión.\nRepresentan:\nIsquemia avanzada.\n¿Por qué el dolor es tan intenso?\nEl dolor desproporcionado es un marcador temprano de isquemia y puede asociarse a síndrome compartimental secundario al trauma vascular.\n¿Por qué NO realizar angiotomografía?\nLa angiotomografía es muy útil en pacientes con signos blandos de lesión vascular.\nSin embargo:\nLa presencia de signos duros obliga a intervención inmediata.\nRetrasar la cirugía para obtener imágenes puede comprometer la viabilidad de la extremidad.\n¿Por qué NO solicitar Doppler?\nPuede ser útil cuando existe duda diagnóstica.\nPero en este caso:\nEl diagnóstico clínico ya está establecido.\n¿Por qué NO observar?\nLa observación retrasa el tratamiento de una lesión potencialmente devastadora.\nCada minuto de isquemia aumenta el riesgo de:\n• Necrosis muscular.\n• Lesión nerviosa irreversible.\n• Amputación.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Paciente estable.\"\nY responden:\n\"Solicitar imágenes.\"\nSin embargo, el dato decisivo es:\nLa presencia de signos duros de lesión vascular.\nCuando estos aparecen:\nLa conducta correcta es cirugía urgente.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar trauma penetrante.\n2.\tBuscar signos duros de lesión vascular.\n3.\tConfirmar compromiso arterial clínico.\n4.\tEvitar retrasos diagnósticos innecesarios.\n5.\tRealizar exploración y reparación vascular urgente.\nPerlas de examen\n✅ La disminución o ausencia de pulsos es un signo duro de lesión vascular.\n✅ La palidez y las parestesias sugieren isquemia arterial aguda.\n✅ Los signos duros de lesión vascular constituyen indicación de cirugía urgente.\n✅ La angiotomografía está indicada principalmente en pacientes con signos blandos.\n✅ El tiempo de isquemia influye directamente en la viabilidad de la extremidad.\n✅ El trauma penetrante puede producir lesión arterial aun en pacientes hemodinámicamente estables.\n✅ La evaluación clínica sigue siendo la herramienta más importante en el diagnóstico del trauma vascular.\nReferencias\n• ATLS 11th Edition.\n• Eastern Association for the Surgery of Trauma (EAST) Practice Management Guidelines.\n• Western Trauma Association Critical Decisions in Trauma.\n• Rutherford's Vascular Surgery and Endovascular Therapy.\n• UpToDate: Extremity Vascular Injury in Adults."
  },
  {
    "id": 157,
    "examArea": "ENDOCRINOLOGÍA",
    "topic": "ENDOCRINOLOGÍA",
    "slug": "endocrinologia",
    "statement": "Paciente masculino de 22 años consulta para estudio etiológico de diabetes mellitus diagnosticada recientemente. Tiene IMC de 21 kg/m², niega antecedentes familiares de diabetes tipo 2 y no presenta signos clínicos de resistencia a la insulina. Los niveles de glucosa permanecen elevados a pesar del tratamiento inicial. Usted sospecha una etiología autoinmune de la enfermedad.\n¿Cuál de los siguientes estudios tiene mayor utilidad para orientar la causa de la diabetes en este paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Anticuerpos anti GAD65."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Anticuerpos anti islote pancreático."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Péptido C."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Insulina basal."
      }
    ],
    "correctOptionId": "A",
    "explanation": "Los anticuerpos anti GAD65 constituyen uno de los marcadores más sensibles y utilizados para identificar diabetes autoinmune. Su detección permite diferenciar formas autoinmunes de diabetes de otros tipos de diabetes en pacientes jóvenes sin evidencia de resistencia a la insulina.",
    "keyPoints": [
      "Cuando veas: Paciente joven con diabetes. IMC normal. Ausencia de resistencia a la insulina. Sospecha de diabetes autoinmune.",
      "Debes pensar en: Búsqueda de autoanticuerpos pancreáticos.",
      "Tema: Clasificación etiológica de la diabetes mellitus."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el estudio etiológico de la diabetes en pacientes jóvenes.\nLa clave no es la hiperglucemia.\nLa clave es:\nLa ausencia de resistencia a la insulina.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Diabetes de inicio temprano.\n• IMC normal.\n• Ausencia de obesidad.\n• Ausencia de signos de insulinorresistencia.\nEstos hallazgos obligan a considerar:\nUna causa diferente a la diabetes tipo 2 clásica.\n¿Por qué sospechar diabetes autoinmune?\nLa diabetes autoinmune suele presentarse en pacientes que:\n• No son obesos.\n• No tienen acantosis nigricans.\n• No presentan características típicas de síndrome metabólico.\n• Tienen destrucción inmunológica de las células beta pancreáticas.\nPor ello, la búsqueda de autoanticuerpos es fundamental.\n¿Por qué los anticuerpos anti GAD65?\nSon los autoanticuerpos más frecuentemente detectados en pacientes con diabetes autoinmune.\nSu presencia apoya fuertemente el diagnóstico de:\n• Diabetes mellitus tipo 1.\n• Diabetes autoinmune latente del adulto (LADA).\n¿Por qué no los anticuerpos anti islote pancreático?\nTambién pueden encontrarse positivos en diabetes autoinmune.\nSin embargo:\nLos anticuerpos anti GAD65 son más utilizados y poseen mayor rendimiento diagnóstico en la práctica clínica.\n¿Por qué no el péptido C?\nEl péptido C permite evaluar:\nLa producción endógena de insulina.\nSin embargo:\nNo identifica la causa de la diabetes.\nUn valor disminuido puede encontrarse en diferentes formas de falla pancreática.\n¿Por qué no la insulina basal?\nLa concentración de insulina basal presenta gran variabilidad y escasa utilidad para establecer la etiología de la diabetes.\nNo permite diferenciar adecuadamente diabetes autoinmune de otras causas.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\nPaciente joven con diabetes.\nY responden:\nPéptido C.\nSin embargo, la pregunta está evaluando:\nLa búsqueda de la causa de la enfermedad.\nPara identificar autoinmunidad se requieren:\nAutoanticuerpos pancreáticos.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar diabetes en paciente joven.\n2.\tEvaluar presencia o ausencia de resistencia a la insulina.\n3.\tSospechar etiología autoinmune.\n4.\tSolicitar autoanticuerpos pancreáticos.\n5.\tConfirmar el diagnóstico etiológico.\nPerlas de examen\n✅ Los anticuerpos anti GAD65 son uno de los marcadores más importantes de diabetes autoinmune.\n✅ La ausencia de obesidad o insulinorresistencia obliga a considerar etiologías diferentes a diabetes tipo 2.\n✅ El péptido C evalúa reserva funcional pancreática.\n✅ Los autoanticuerpos ayudan a clasificar correctamente el tipo de diabetes.\n✅ La diabetes autoinmune puede presentarse en adultos jóvenes.\n✅ El diagnóstico etiológico permite seleccionar el tratamiento más apropiado.\n✅ No toda diabetes en adultos jóvenes corresponde a diabetes tipo 2.\nReferencias\n• American Diabetes Association (ADA) Standards of Care.\n• EASD Clinical Practice Recommendations.\n• Harrison's Principles of Internal Medicine.\n• Williams Textbook of Endocrinology.\n• UpToDate: Classification of Diabetes Mellitus and Genetic Diabetic Syndromes."
  },
  {
    "id": 158,
    "examArea": "ENDOCRINOLOGÍA",
    "topic": "ENDOCRINOLOGÍA",
    "slug": "endocrinologia",
    "statement": "Mujer de 44 años con IMC de 29 kg/m² y diagnóstico reciente de diabetes mellitus tipo 2. Se encuentra en tratamiento con metformina en monoterapia. Acude a control aportando laboratorios que muestran HbA1c de 9% y glucemia en ayunas de 280 mg/dL. Niega pérdida de peso, poliuria severa, polidipsia intensa o síntomas sugestivos de catabolismo. Al examen físico no se encuentran hallazgos relevantes.\n¿Cómo se ajustaría su tratamiento?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Cambios en estilo de vida, metformina a dosis plena y añadir un inhibidor del cotransportador sodio-glucosa tipo 2 (iSGLT2)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Cambios en estilo de vida, metformina a dosis plena y añadir una sulfonilurea."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Cambios en estilo de vida, metformina a dosis plena y empezar insulinoterapia."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Cambios en estilo de vida, metformina a dosis plena, iniciar insulinoterapia y añadir un iSGLT2."
      }
    ],
    "correctOptionId": "A",
    "explanation": "La paciente presenta una diabetes mellitus tipo 2 insuficientemente controlada con metformina en monoterapia. Sin embargo, no presenta síntomas de hiperglucemia severa ni datos sugestivos de déficit importante de insulina. En este contexto, las guías actuales recomiendan intensificar el tratamiento con un segundo agente antihiperglucemiante antes de considerar insulinoterapia.",
    "keyPoints": [
      "Cuando veas: Diabetes mellitus tipo 2. HbA1c ≥9%. Fracaso de monoterapia. Ausencia de síntomas catabólicos. Ausencia de datos de falla de célula beta.",
      "Debes pensar en: Terapia dual antes de iniciar insulinoterapia.",
      "Tema: Intensificación del tratamiento en diabetes mellitus tipo 2."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los escenarios más frecuentes en el manejo ambulatorio de la diabetes mellitus tipo 2.\nLa clave no es la glucemia de 280 mg/dL.\nLa clave es:\nLa ausencia de síntomas de déficit grave de insulina.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Diabetes mellitus tipo 2 recientemente diagnosticada.\n• Tratamiento con metformina.\n• HbA1c de 9%.\n• Hiperglucemia persistente.\n• Ausencia de síntomas catabólicos.\nEsto indica:\nFracaso de la monoterapia con necesidad de intensificación terapéutica.\n¿Qué recomiendan las guías actuales?\nCuando la HbA1c permanece por encima de la meta pese a metformina en monoterapia:\nDebe considerarse terapia combinada.\nLa elección del segundo fármaco depende de:\n• Comorbilidades.\n• Riesgo cardiovascular.\n• Riesgo de hipoglucemia.\n• Impacto sobre el peso.\n• Función renal.\n¿Por qué añadir un iSGLT2?\nLos iSGLT2 ofrecen múltiples beneficios:\n• Reducción de HbA1c.\n• Pérdida de peso.\n• Bajo riesgo de hipoglucemia.\n• Beneficio cardiovascular.\n• Beneficio renal.\nAdemás:\nLa paciente presenta sobrepeso, por lo que evitar ganancia ponderal es una consideración importante.\n¿Por qué NO añadir una sulfonilurea?\nLas sulfonilureas pueden reducir la HbA1c.\nSin embargo:\n• Incrementan el riesgo de hipoglucemia.\n• Favorecen ganancia de peso.\n• No ofrecen beneficios cardiovasculares demostrados comparables a los iSGLT2.\nPor ello han perdido protagonismo frente a alternativas más modernas.\n¿Por qué NO iniciar insulinoterapia?\nLa insulinoterapia suele reservarse para pacientes con:\n• HbA1c muy elevada.\n• Hiperglucemia sintomática.\n• Pérdida de peso inexplicada.\n• Cetosis.\n• Evidencia de falla importante de célula beta.\nNinguna de estas características aparece en el caso.\n¿Por qué NO iniciar insulina más iSGLT2?\nSería una intensificación excesiva para el escenario clínico presentado.\nLa paciente aún puede beneficiarse de escalamiento farmacológico sin necesidad de insulina.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\nGlucemia de 280 mg/dL.\nY responden:\nInsulinoterapia.\nSin embargo, la pregunta aporta un dato más importante:\nLa ausencia de síntomas de catabolismo o déficit grave de insulina.\nEn diabetes tipo 2 estable, la conducta inicial suele ser:\nIntensificar tratamiento no insulínico.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tConfirmar mal control glucémico.\n2.\tEvaluar síntomas de hiperglucemia severa.\n3.\tBuscar datos de déficit de insulina.\n4.\tSi no existen, intensificar tratamiento farmacológico.\n5.\tSeleccionar agentes con beneficios metabólicos y cardiovasculares adicionales.\nPerlas de examen\n✅ La HbA1c ≥9% suele requerir intensificación terapéutica.\n✅ La ausencia de síntomas catabólicos permite considerar terapia dual antes de insulina.\n✅ Los iSGLT2 producen pérdida de peso y tienen bajo riesgo de hipoglucemia.\n✅ Los iSGLT2 ofrecen beneficios cardiovasculares y renales.\n✅ Las sulfonilureas aumentan el riesgo de hipoglucemia y ganancia de peso.\n✅ La insulinoterapia no siempre es necesaria ante una HbA1c elevada.\n✅ El tratamiento de la diabetes debe individualizarse según las características del paciente.\nReferencias\n• American Diabetes Association (ADA) Standards of Care.\n• European Association for the Study of Diabetes (EASD) Consensus Report.\n• Harrison's Principles of Internal Medicine.\n• Williams Textbook of Endocrinology.\n• UpToDate: Initial Management of Hyperglycemia in Adults with Type 2 Diabetes Mellitus."
  },
  {
    "id": 159,
    "examArea": "PEDIATRÍA",
    "topic": "PEDIATRÍA",
    "slug": "pediatria",
    "statement": "Niño de 1 año es llevado a consulta de control por sus padres. La anamnesis no revela antecedentes de importancia y el examen físico general es normal. Durante la evaluación oftalmológica se documenta leucocoria en el ojo derecho. No se reportan otros hallazgos relevantes.\n¿Cuál es la impresión diagnóstica y la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Retinoblastoma, solicitar ecografía ocular."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Estrabismo, realizar oclusión con parche en el ojo sano."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Retinoblastoma, solicitar toma de biopsia con aguja fina."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Estrabismo, solicitar resonancia magnética contrastada."
      }
    ],
    "correctOptionId": "A",
    "explanation": "La leucocoria en un lactante o niño pequeño debe considerarse retinoblastoma hasta demostrar lo contrario. La ecografía ocular constituye una de las herramientas diagnósticas iniciales más importantes, ya que permite identificar masas intraoculares y calcificaciones características del tumor.",
    "keyPoints": [
      "Cuando veas: Leucocoria. Lactante o niño pequeño. Reflejo pupilar blanco. Hallazgo oftalmológico anormal.",
      "Debes pensar en: Retinoblastoma hasta demostrar lo contrario.",
      "Tema: Tumores oculares en pediatría."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los hallazgos oftalmológicos más importantes en pediatría.\nLa clave no es la edad.\nLa clave es:\nLa presencia de leucocoria.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Un año de edad.\n• Examen físico normal.\n• Leucocoria documentada.\nLa leucocoria corresponde a:\nReflejo pupilar blanco.\nEste hallazgo siempre debe considerarse patológico y obliga a descartar enfermedades potencialmente graves.\n¿Cuál es la principal sospecha diagnóstica?\nAunque existen múltiples causas de leucocoria, la más importante desde el punto de vista clínico y de examen es:\nRetinoblastoma.\nSe trata del tumor intraocular maligno más frecuente de la infancia.\n¿Por qué la ecografía ocular?\nLa ecografía ocular permite identificar:\n• Masas intraoculares.\n• Calcificaciones intratumorales.\n• Desprendimiento de retina asociado.\n• Extensión intraocular de la lesión.\nAdemás:\nEs una herramienta rápida, accesible y de gran utilidad diagnóstica.\n¿Qué hallazgo es clásico en el retinoblastoma?\nLas calcificaciones intraoculares.\nSu presencia aumenta significativamente la sospecha diagnóstica.\n¿Por qué NO realizar biopsia con aguja fina?\nLa biopsia está contraindicada en el estudio inicial del retinoblastoma.\nEsto se debe al riesgo de:\n• Diseminación tumoral extraocular.\n• Siembra tumoral.\n• Empeoramiento del pronóstico.\nPor esta razón el diagnóstico suele realizarse mediante evaluación clínica e imágenes.\n¿Por qué NO es estrabismo?\nEl estrabismo puede ser otra forma de presentación del retinoblastoma.\nSin embargo:\nEl caso aporta un dato mucho más importante.\nLa leucocoria.\nPor tanto, el diagnóstico principal no es un trastorno de alineación ocular.\n¿Por qué NO solicitar resonancia magnética contrastada como primer paso?\nLa resonancia magnética puede formar parte de la estadificación.\nSin embargo:\nLa evaluación inicial suele comenzar con valoración oftalmológica especializada y ecografía ocular.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\nUn niño aparentemente sano.\nY minimizan el hallazgo ocular.\nSin embargo:\nLa leucocoria es una urgencia diagnóstica.\nTodo niño con reflejo pupilar blanco debe ser estudiado de forma prioritaria.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar la leucocoria.\n2.\tSospechar retinoblastoma.\n3.\tSolicitar evaluación oftalmológica urgente.\n4.\tRealizar estudios de imagen apropiados.\n5.\tEvitar biopsias intraoculares.\nPerlas de examen\n✅ La leucocoria es el signo más frecuente del retinoblastoma.\n✅ El retinoblastoma es el tumor intraocular maligno más frecuente en la infancia.\n✅ La ecografía ocular permite identificar calcificaciones características.\n✅ La biopsia intraocular está contraindicada por riesgo de diseminación tumoral.\n✅ El estrabismo puede ser una manifestación inicial del retinoblastoma.\n✅ Todo niño con leucocoria requiere valoración oftalmológica urgente.\n✅ El diagnóstico precoz mejora significativamente el pronóstico visual y vital.\nReferencias\n• Nelson Textbook of Pediatrics.\n• American Academy of Ophthalmology Guidelines.\n• Shields' Retinoblastoma Review.\n• UpToDate: Clinical Presentation and Diagnosis of Retinoblastoma.\n• American Academy of Pediatrics Clinical Report on Leukocoria."
  },
  {
    "id": 160,
    "examArea": "OFTALMOLOGÍA",
    "topic": "OFTALMOLOGÍA",
    "slug": "oftalmologia",
    "statement": "Hombre de 25 años consulta al servicio de urgencias tras sufrir trauma contuso en el ojo izquierdo durante una riña callejera. Refiere visión borrosa posterior al evento. Al examen oftalmológico se evidencia hifema grado II. La presión intraocular se encuentra dentro de límites normales y no se identifican otras alteraciones oculares asociadas.\n¿Cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Manejo ambulatorio con tratamiento tópico, analgésicos, reposo y control por oftalmología."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Manejo intrahospitalario, realizar oclusión con parche, tratamiento tópico y antibiótico, analgésicos, reposo y observación."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Realizar lavado quirúrgico urgente de cámara anterior."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Traslado inmediato a quirófano."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente presenta un hifema traumático grado II. Debido al riesgo de resangrado, aumento de la presión intraocular y otras complicaciones durante los primeros días posteriores al trauma, se recomienda observación hospitalaria, reposo, protección ocular y seguimiento estrecho por oftalmología.",
    "keyPoints": [
      "Cuando veas: Trauma ocular contuso. Hifema grado II o superior. Visión borrosa. Sangre visible en cámara anterior.",
      "Debes pensar en: Prevención de complicaciones y vigilancia oftalmológica estrecha.",
      "Tema: Hifema traumático."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el manejo inicial del hifema traumático.\nLa clave no es el antecedente de trauma.\nLa clave es:\nEl grado del hifema.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Trauma ocular cerrado.\n• Sangrado en cámara anterior.\n• Hifema grado II.\n• Presión intraocular normal.\n• Ausencia de lesiones oculares mayores.\nEsto corresponde a:\nHifema traumático moderado.\n¿Qué es un hifema?\nEs la acumulación de sangre en la cámara anterior del ojo.\nGeneralmente ocurre por:\nRuptura de vasos del iris o del cuerpo ciliar secundaria a trauma.\n¿Por qué preocupa el hifema?\nPorque puede complicarse con:\n• Resangrado.\n• Glaucoma secundario.\n• Tinción hemática corneal.\n• Sinequias.\n• Disminución permanente de la agudeza visual.\nEl mayor riesgo de resangrado ocurre durante los primeros días posteriores al trauma.\n¿Qué incluye el manejo inicial?\nLas medidas habituales incluyen:\n• Reposo.\n• Elevación de la cabecera.\n• Protección ocular.\n• Analgesia.\n• Tratamiento tópico indicado por oftalmología.\n• Observación estrecha.\n¿Por qué hospitalizar?\nLos pacientes con hifema grado II o superior presentan mayor riesgo de complicaciones.\nLa observación permite:\n• Detectar resangrado precoz.\n• Vigilar presión intraocular.\n• Evaluar progresión del sangrado.\n• Intervenir oportunamente si aparecen complicaciones.\n¿Por qué NO manejo ambulatorio?\nAunque algunos hifemas pequeños pueden recibir manejo ambulatorio, la pregunta está evaluando el abordaje más seguro para un hifema grado II.\nLa presencia de una cantidad significativa de sangre en cámara anterior justifica vigilancia más estrecha.\n¿Por qué NO realizar lavado quirúrgico urgente?\nLa cirugía se reserva para situaciones específicas como:\n• Hifema total persistente.\n• Hipertensión ocular no controlada.\n• Tinción hemática corneal.\n• Resangrado severo.\nNada de esto aparece en el caso.\n¿Por qué NO trasladar inmediatamente a quirófano?\nNo existen criterios de urgencia quirúrgica.\nEl paciente no presenta:\n• Lesión ocular abierta.\n• Hipertensión ocular severa.\n• Compromiso estructural importante.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\nPresión intraocular normal.\nY responden:\nManejo ambulatorio.\nSin embargo, el dato decisivo es:\nHifema grado II.\nLa pregunta está evaluando la necesidad de vigilancia por el riesgo de complicaciones tempranas.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar el hifema traumático.\n2.\tDeterminar su grado.\n3.\tEvaluar presión intraocular.\n4.\tVigilar aparición de complicaciones.\n5.\tReservar cirugía para casos seleccionados.\nPerlas de examen\n✅ El hifema traumático es una complicación frecuente del trauma ocular cerrado.\n✅ El riesgo de resangrado es mayor durante los primeros días posteriores al trauma.\n✅ La presión intraocular debe monitorizarse de forma seriada.\n✅ Los hifemas moderados o extensos requieren vigilancia estrecha.\n✅ La cirugía no constituye el manejo inicial habitual.\n✅ El reposo y la protección ocular forman parte del tratamiento.\n✅ La evaluación oftalmológica temprana disminuye el riesgo de secuelas visuales.\nReferencias\n• American Academy of Ophthalmology Preferred Practice Pattern.\n• Kanski Clinical Ophthalmology.\n• Vaughan & Asbury General Ophthalmology.\n• UpToDate: Traumatic Hyphema.\n• American Academy of Ophthalmology Trauma Guidelines."
  },
  {
    "id": 161,
    "examArea": "OFTALMOLOGÍA",
    "topic": "OFTALMOLOGÍA",
    "slug": "oftalmologia",
    "statement": "Estudiante universitario consulta al servicio de urgencias tras sufrir trauma ocular contuso por impacto de una piedra durante una protesta pública. Refiere dolor ocular intenso (EVA 10/10), fotofobia y epífora. Al examen físico se evidencia un hifema en \"bola ocho\" (eight-ball hyphema) que ocupa completamente la cámara anterior. La tonometría digital sugiere aumento de la presión intraocular. No es posible evaluar adecuadamente las estructuras intraoculares debido a la magnitud del sangrado.\n¿Cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Realizar lavado quirúrgico urgente de cámara anterior."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Realizar oclusión con parche, lavado con solución salina y antibiótico oral."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Tratamiento ambulatorio con medicamentos tópicos y orales, con seguimiento estricto."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hospitalización, tratamiento endovenoso e interconsulta con oftalmología."
      }
    ],
    "correctOptionId": "A",
    "explanation": "El hifema en \"bola ocho\" corresponde a un hifema total asociado frecuentemente a hipertensión ocular significativa. Este hallazgo representa una urgencia oftalmológica debido al alto riesgo de daño irreversible del nervio óptico, tinción hemática corneal y pérdida visual permanente, por lo que requiere manejo quirúrgico urgente.",
    "keyPoints": [
      "Cuando veas: Hifema total. Hifema en \"bola ocho\". Hipertensión ocular. Dolor intenso. Imposibilidad para evaluar el fondo ocular.",
      "Debes pensar en: Urgencia oftalmológica con indicación quirúrgica.",
      "Tema: Hifema traumático complicado."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las complicaciones más graves del trauma ocular cerrado.\nLa clave no es el antecedente de trauma.\nLa clave es:\nEl hifema en \"bola ocho\".\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Trauma ocular contuso.\n• Hifema total.\n• Sangre ocupando toda la cámara anterior.\n• Elevación de la presión intraocular.\n• Dolor ocular severo.\nEsto corresponde a:\nHifema traumático complicado de alto riesgo.\n¿Qué es un hifema en \"bola ocho\"?\nEs una variante severa del hifema total.\nSe caracteriza por:\nLa ocupación completa de la cámara anterior por sangre de aspecto oscuro o negruzco.\nGeneralmente indica:\n• Sangrado importante.\n• Alteración en la circulación del humor acuoso.\n• Elevación significativa de la presión intraocular.\n¿Por qué es tan peligroso?\nPorque puede producir:\n• Neuropatía óptica por glaucoma agudo.\n• Tinción hemática corneal.\n• Sinequias.\n• Daño visual irreversible.\n• Pérdida permanente de la visión.\n¿Por qué realizar lavado quirúrgico?\nLa evacuación quirúrgica de la sangre permite:\n• Disminuir la presión intraocular.\n• Restaurar la circulación del humor acuoso.\n• Reducir el riesgo de daño corneal.\n• Preservar la función visual.\nEn este contexto:\nLa cirugía no debe retrasarse.\n¿Por qué NO realizar solamente hospitalización?\nLa hospitalización es necesaria.\nSin embargo:\nLa pregunta está evaluando la conducta definitiva.\nEl dato decisivo es:\nLa indicación quirúrgica urgente.\n¿Por qué NO manejo ambulatorio?\nExiste un riesgo elevado de:\n• Glaucoma secundario.\n• Daño corneal irreversible.\n• Complicaciones visuales permanentes.\nPor lo tanto:\nEl manejo ambulatorio está contraindicado.\n¿Por qué NO utilizar únicamente parche y antibióticos?\nEstas medidas son insuficientes ante:\n• Hifema total.\n• Hipertensión ocular.\n• Riesgo inminente de lesión ocular permanente.\nNo corrigen el problema principal.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Hifema traumático.\"\nY responden:\nReposo y observación.\nSin embargo, la pregunta aporta un dato mucho más importante:\nHifema en \"bola ocho\" con aumento de la presión intraocular.\nEste hallazgo cambia completamente el manejo.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar el hifema traumático.\n2.\tDeterminar su extensión.\n3.\tEvaluar la presión intraocular.\n4.\tReconocer los criterios de gravedad.\n5.\tRealizar evacuación quirúrgica urgente cuando esté indicada.\nPerlas de examen\n✅ El hifema en \"bola ocho\" corresponde a una forma grave de hifema total.\n✅ La hipertensión ocular es una de las complicaciones más importantes.\n✅ La tinción hemática corneal puede producir secuelas visuales permanentes.\n✅ El dolor intenso suele correlacionarse con aumento de la presión intraocular.\n✅ El hifema total impide la adecuada valoración de las estructuras intraoculares.\n✅ La cirugía está indicada en presencia de complicaciones severas o hipertensión ocular significativa.\n✅ El reconocimiento temprano modifica el pronóstico visual del paciente.\nReferencias\n• American Academy of Ophthalmology Preferred Practice Pattern.\n• Kanski Clinical Ophthalmology.\n• Vaughan & Asbury General Ophthalmology.\n• UpToDate: Traumatic Hyphema.\n• American Academy of Ophthalmology Trauma Guidelines."
  },
  {
    "id": 162,
    "examArea": "GASTROENTEROLOGÍA",
    "topic": "GASTROENTEROLOGÍA",
    "slug": "gastroenterologia",
    "statement": "Mujer de 25 años consulta por cuadro de dolor abdominal crónico acompañado de diarrea de larga evolución, rectorragia ocasional, urgencia rectal y pérdida de aproximadamente 7 kg de peso en los últimos 3 meses. Al examen físico presenta signos de desnutrición y dolor a la palpación de la fosa ilíaca derecha. Se realiza colonoscopia que evidencia úlceras aftosas y lesiones con distribución discontinua. En el estudio anatomopatológico se describen granulomas no caseificantes.\nCon base en estos hallazgos, ¿cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Enfermedad de Crohn."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Colitis ulcerosa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Enterocolitis necrotizante."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Síndrome de intestino irritable."
      }
    ],
    "correctOptionId": "A",
    "explanation": "La paciente presenta manifestaciones clínicas, endoscópicas e histológicas características de enfermedad de Crohn. La presencia de lesiones salteadas, compromiso de la fosa ilíaca derecha y granulomas no caseificantes constituye un patrón clásico de esta entidad.",
    "keyPoints": [
      "Cuando veas: Dolor en fosa ilíaca derecha. Diarrea crónica. Pérdida de peso. Úlceras aftosas. Lesiones discontinuas. Granulomas no caseificantes.",
      "Debes pensar en: Enfermedad de Crohn.",
      "Tema: Enfermedad inflamatoria intestinal."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa las diferencias entre las dos principales enfermedades inflamatorias intestinales.\nLa clave no es la rectorragia.\nLa clave es:\nLa presencia de granulomas no caseificantes y lesiones discontinuas.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Dolor abdominal crónico.\n• Diarrea persistente.\n• Pérdida significativa de peso.\n• Signos de desnutrición.\n• Compromiso de fosa ilíaca derecha.\nEstos hallazgos sugieren:\nEnfermedad inflamatoria intestinal.\nSin embargo, la información endoscópica e histológica permite establecer el diagnóstico específico.\n¿Qué hallazgos orientan a enfermedad de Crohn?\nLa colonoscopia demuestra:\n• Úlceras aftosas.\n• Lesiones salteadas (skip lesions).\n• Distribución discontinua.\nLa biopsia evidencia:\n• Granulomas no caseificantes.\nEstos hallazgos son altamente sugestivos de:\nEnfermedad de Crohn.\n¿Por qué se compromete la fosa ilíaca derecha?\nLa localización más frecuente de la enfermedad de Crohn es:\nÍleon terminal.\nPor esta razón es frecuente encontrar:\n• Dolor en cuadrante inferior derecho.\n• Masa inflamatoria.\n• Malabsorción.\n• Pérdida de peso.\n¿Qué importancia tienen los granulomas?\nLos granulomas no caseificantes constituyen uno de los hallazgos histológicos clásicos de la enfermedad de Crohn.\nAunque no siempre están presentes:\nCuando aparecen, apoyan fuertemente el diagnóstico.\n¿Por qué NO es colitis ulcerosa?\nLa colitis ulcerosa típicamente presenta:\n• Compromiso continuo.\n• Inicio en el recto.\n• Extensión proximal progresiva.\n• Inflamación limitada a mucosa y submucosa.\nAdemás:\nLos granulomas no caseificantes no son característicos de esta enfermedad.\n¿Por qué NO es enterocolitis necrotizante?\nLa enterocolitis necrotizante ocurre principalmente en:\n• Recién nacidos prematuros.\n• Neonatos críticamente enfermos.\nNo corresponde al contexto clínico presentado.\n¿Por qué NO es síndrome de intestino irritable?\nEl síndrome de intestino irritable no produce:\n• Pérdida de peso.\n• Desnutrición.\n• Rectorragia.\n• Úlceras intestinales.\n• Granulomas.\nLa presencia de signos de alarma descarta un trastorno funcional.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"Diarrea con sangre.\"\nY responden:\nColitis ulcerosa.\nSin embargo, el dato decisivo es:\nLa presencia de lesiones discontinuas y granulomas no caseificantes.\nEstos hallazgos son clásicos de:\nEnfermedad de Crohn.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar enfermedad inflamatoria intestinal.\n2.\tAnalizar el patrón endoscópico.\n3.\tBuscar lesiones continuas o discontinuas.\n4.\tRevisar la histología.\n5.\tReconocer los granulomas no caseificantes.\n6.\tDiagnosticar enfermedad de Crohn.\nPerlas de examen\n✅ La enfermedad de Crohn puede comprometer cualquier segmento del tubo digestivo.\n✅ El íleon terminal es una de las localizaciones más frecuentes.\n✅ Las lesiones salteadas son características de la enfermedad de Crohn.\n✅ Los granulomas no caseificantes apoyan fuertemente el diagnóstico.\n✅ La pérdida de peso y la desnutrición son frecuentes por malabsorción.\n✅ La colitis ulcerosa presenta compromiso continuo y comienza en el recto.\n✅ Los signos de alarma descartan síndrome de intestino irritable.\nReferencias\n• Harrison's Principles of Internal Medicine.\n• Sleisenger and Fordtran's Gastrointestinal and Liver Disease.\n• ECCO Guidelines on Crohn's Disease.\n• American College of Gastroenterology Guidelines.\n• UpToDate: Clinical Manifestations, Diagnosis and Pathology of Crohn Disease."
  },
  {
    "id": 163,
    "examArea": "GASTROENTEROLOGÍA",
    "topic": "GASTROENTEROLOGÍA",
    "slug": "gastroenterologia",
    "statement": "Con respecto a los factores de riesgo asociados al desarrollo de colitis ulcerativa, ¿cuál de los siguientes NO se considera un factor de riesgo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Tabaquismo."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Uso crónico de fármacos."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Infecciones gastrointestinales previas."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Dieta."
      }
    ],
    "correctOptionId": "A",
    "explanation": "A diferencia de la enfermedad de Crohn, el tabaquismo se ha asociado consistentemente con una menor incidencia de colitis ulcerativa. De hecho, la suspensión del hábito tabáquico se ha relacionado con un aumento del riesgo de desarrollar la enfermedad en individuos susceptibles.",
    "keyPoints": [
      "Cuando veas: Colitis ulcerativa. Factores de riesgo. Epidemiología. Tabaquismo.",
      "Debes pensar en: El tabaquismo tiene una relación inversa con la colitis ulcerativa.",
      "Tema: Epidemiología de la colitis ulcerativa."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las asociaciones epidemiológicas más llamativas de la enfermedad inflamatoria intestinal.\nLa clave no es la dieta.\nLa clave es:\nEl efecto paradójico del tabaquismo.\n¿Qué está ocurriendo realmente?\nLa colitis ulcerativa es una enfermedad inflamatoria intestinal crónica cuya aparición depende de la interacción entre:\n• Factores genéticos.\n• Factores inmunológicos.\n• Factores ambientales.\n• Alteraciones de la microbiota intestinal.\nEntre los factores ambientales existen asociaciones bien establecidas que suelen ser preguntadas en los exámenes.\n¿Qué ocurre con el tabaquismo?\nA diferencia de muchas enfermedades gastrointestinales:\nEl tabaquismo parece ejercer un efecto protector relativo frente al desarrollo de colitis ulcerativa.\nDiversos estudios han demostrado:\n• Menor incidencia en fumadores activos.\n• Mayor frecuencia en no fumadores.\n• Incremento del riesgo tras abandonar el hábito tabáquico.\nPor esta razón:\nNo se considera un factor de riesgo para desarrollar colitis ulcerativa.\n¿Por qué NO significa que fumar sea beneficioso?\nPorque los riesgos cardiovasculares, respiratorios y oncológicos del tabaquismo superan ampliamente cualquier posible efecto protector observado en esta enfermedad.\nPor lo tanto:\nNunca debe recomendarse fumar como estrategia preventiva.\n¿Por qué pueden influir las infecciones gastrointestinales?\nAlgunas infecciones entéricas pueden alterar:\n• La microbiota intestinal.\n• La permeabilidad mucosa.\n• La respuesta inmune intestinal.\nEstos mecanismos han sido implicados en el desarrollo de enfermedad inflamatoria intestinal.\n¿Por qué pueden influir ciertos fármacos?\nSe han descrito asociaciones con:\n• Antiinflamatorios no esteroideos.\n• Antibióticos.\n• Otros medicamentos que modifican la microbiota o la respuesta inflamatoria.\n¿Por qué puede influir la dieta?\nPatrones dietarios occidentales ricos en:\n• Grasas saturadas.\n• Alimentos ultraprocesados.\n• Azúcares refinados.\nHan sido relacionados con mayor riesgo de enfermedad inflamatoria intestinal.\n¿Cuál es la trampa de examen?\nMuchos estudiantes asocian:\nTabaquismo = factor de riesgo.\nY responden cualquiera de las otras opciones.\nSin embargo:\nLa colitis ulcerativa constituye una excepción epidemiológica clásica.\nEl dato decisivo es:\nEl tabaquismo tiene una asociación inversa con la enfermedad.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar que se pregunta por factores de riesgo.\n2.\tRecordar la relación entre tabaquismo y enfermedad inflamatoria intestinal.\n3.\tDiferenciar colitis ulcerativa de enfermedad de Crohn.\n4.\tReconocer que el tabaquismo protege relativamente frente a colitis ulcerativa.\n5.\tSeleccionar la excepción.\nPerlas de examen\n✅ El tabaquismo se asocia con menor riesgo de colitis ulcerativa.\n✅ La suspensión del tabaquismo puede preceder al inicio de la enfermedad.\n✅ El tabaquismo aumenta el riesgo y la gravedad de la enfermedad de Crohn.\n✅ La colitis ulcerativa resulta de la interacción entre factores genéticos y ambientales.\n✅ Las alteraciones de la microbiota participan en la fisiopatología de la enfermedad.\n✅ La dieta occidental se ha relacionado con mayor riesgo de enfermedad inflamatoria intestinal.\n✅ El tabaquismo nunca debe recomendarse como medida preventiva.\nReferencias\n• ECCO Guidelines on Ulcerative Colitis.\n• American College of Gastroenterology Clinical Guidelines.\n• Harrison's Principles of Internal Medicine.\n• Sleisenger and Fordtran's Gastrointestinal and Liver Disease.\n• UpToDate: Epidemiology, Risk Factors and Pathogenesis of Ulcerative Colitis."
  },
  {
    "id": 164,
    "examArea": "GASTROENTEROLOGÍA",
    "topic": "GASTROENTEROLOGÍA",
    "slug": "gastroenterologia",
    "statement": "Paciente de 32 años con antecedente de enfermedad inflamatoria intestinal consulta por dolor lumbar inflamatorio crónico y rigidez matutina prolongada. Tras estudio por reumatología se confirma el diagnóstico de espondilitis anquilosante asociada a enfermedad inflamatoria intestinal.\n¿Cuál de las siguientes afirmaciones es FALSA?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "La espondilitis anquilosante es más frecuente en pacientes con enfermedad de Crohn."
      },
      {
        "id": "B",
        "label": "B",
        "text": "La actividad de la espondilitis anquilosante guarda relación con la actividad inflamatoria de la enfermedad inflamatoria intestinal."
      },
      {
        "id": "C",
        "label": "C",
        "text": "La actividad de la espondilitis anquilosante no remite con glucocorticoides."
      },
      {
        "id": "D",
        "label": "D",
        "text": "La evolución de la espondilitis anquilosante es lenta y progresiva."
      }
    ],
    "correctOptionId": "B",
    "explanation": "La espondilitis anquilosante es una manifestación extraintestinal axial de la enfermedad inflamatoria intestinal. A diferencia de las manifestaciones articulares periféricas, su actividad suele evolucionar de manera independiente de la actividad intestinal.",
    "keyPoints": [
      "Cuando veas: Enfermedad inflamatoria intestinal. Dolor lumbar inflamatorio. Sacroileítis. Espondilitis anquilosante.",
      "Debes pensar en: Manifestación extraintestinal axial con evolución independiente de la actividad intestinal.",
      "Tema: Manifestaciones extraintestinales de la enfermedad inflamatoria intestinal."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una diferencia fundamental entre las manifestaciones articulares periféricas y axiales de la enfermedad inflamatoria intestinal.\nLa clave no es la enfermedad intestinal.\nLa clave es:\nEl compromiso axial.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Enfermedad inflamatoria intestinal.\n• Espondilitis anquilosante.\nLa espondilitis anquilosante forma parte del espectro de las:\nEspondiloartritis asociadas a enfermedad inflamatoria intestinal.\nSe caracteriza por:\n• Sacroileítis.\n• Dolor lumbar inflamatorio.\n• Rigidez matutina.\n• Limitación progresiva de la movilidad vertebral.\n¿Qué relación tiene con la actividad intestinal?\nUno de los conceptos más preguntados en los exámenes es:\nLa enfermedad axial suele evolucionar independientemente de la actividad intestinal.\nEsto significa que:\nUn paciente puede tener remisión digestiva completa y continuar con actividad reumatológica significativa.\nPor esta razón:\nLa opción B es falsa.\n¿Por qué la opción A es verdadera?\nLa espondilitis anquilosante puede presentarse tanto en colitis ulcerativa como en enfermedad de Crohn.\nSin embargo:\nLa afectación axial suele observarse con mayor frecuencia en pacientes con enfermedad de Crohn.\n¿Por qué la opción C es verdadera?\nLos glucocorticoides sistémicos tienen escasa eficacia en el tratamiento de la enfermedad axial.\nPor ello:\nNo constituyen tratamiento de elección para la espondilitis anquilosante.\nLos tratamientos más utilizados incluyen:\n• AINEs.\n• Terapias biológicas anti-TNF.\n• Inhibidores de IL-17 en escenarios seleccionados.\n¿Por qué la opción D es verdadera?\nLa evolución clásica de la espondilitis anquilosante es:\n• Crónica.\n• Lenta.\n• Progresiva.\nCon el tiempo puede producir:\n• Anquilosis vertebral.\n• Disminución de la movilidad.\n• Limitación funcional.\n¿Qué ocurre con la artritis periférica?\nAquí aparece la principal confusión de examen.\nLa artritis periférica asociada a enfermedad inflamatoria intestinal sí suele correlacionarse con:\nLa actividad inflamatoria intestinal.\nPero:\nLa enfermedad axial no.\n¿Cuál es la trampa de examen?\nMuchos estudiantes piensan:\n\"Todas las manifestaciones extraintestinales empeoran cuando empeora el intestino.\"\nSin embargo:\nLa espondilitis anquilosante es una excepción clásica.\nEl dato decisivo es:\nSu evolución independiente de la actividad digestiva.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar la manifestación extraintestinal.\n2.\tDiferenciar compromiso periférico de compromiso axial.\n3.\tRecordar que la artritis periférica suele seguir la actividad intestinal.\n4.\tRecordar que la espondilitis anquilosante no sigue la actividad intestinal.\n5.\tSeleccionar la afirmación falsa.\nPerlas de examen\n✅ La espondilitis anquilosante es una manifestación extraintestinal de la enfermedad inflamatoria intestinal.\n✅ La actividad de la enfermedad axial suele ser independiente de la actividad intestinal.\n✅ La artritis periférica sí suele correlacionarse con la actividad digestiva.\n✅ Los glucocorticoides tienen eficacia limitada en la enfermedad axial.\n✅ El compromiso axial puede preceder al diagnóstico intestinal.\n✅ La evolución suele ser lenta y progresiva.\n✅ El reconocimiento temprano mejora el pronóstico funcional.\nReferencias\n• ECCO Guidelines on Extraintestinal Manifestations in Inflammatory Bowel Disease.\n• American College of Gastroenterology Guidelines.\n• EULAR Recommendations for the Management of Axial Spondyloarthritis.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Musculoskeletal Manifestations of Inflammatory Bowel Disease."
  },
  {
    "id": 165,
    "examArea": "GASTROENTEROLOGÍA",
    "topic": "GASTROENTEROLOGÍA",
    "slug": "gastroenterologia",
    "statement": "Con respecto a los factores asociados al desarrollo de neoplasia colorrectal en pacientes con colitis ulcerosa, ¿cuál de los siguientes NO incrementa el riesgo de cáncer colorrectal?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "El tiempo de evolución de la enfermedad."
      },
      {
        "id": "B",
        "label": "B",
        "text": "La afectación extensa de la enfermedad."
      },
      {
        "id": "C",
        "label": "C",
        "text": "La coexistencia de cirrosis biliar primaria."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Los antecedentes familiares de cáncer colorrectal."
      }
    ],
    "correctOptionId": "C",
    "explanation": "La entidad asociada a un incremento del riesgo de cáncer colorrectal en pacientes con colitis ulcerosa es la colangitis esclerosante primaria y no la cirrosis biliar primaria. Por ello, esta opción constituye la respuesta incorrecta.",
    "keyPoints": [
      "Cuando veas: Colitis ulcerosa. Vigilancia endoscópica. Displasia. Cáncer colorrectal.",
      "Debes pensar en: Factores de riesgo para neoplasia colorrectal asociada a enfermedad inflamatoria intestinal.",
      "Tema: Cáncer colorrectal asociado a colitis ulcerosa."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa los principales factores de riesgo para cáncer colorrectal en pacientes con colitis ulcerosa.\nLa clave no es el cáncer.\nLa clave es:\nIdentificar qué factores aumentan realmente el riesgo.\n¿Qué está ocurriendo realmente?\nLos pacientes con colitis ulcerosa presentan:\n• Inflamación crónica de la mucosa colónica.\n• Incremento progresivo del riesgo de displasia.\n• Mayor probabilidad de desarrollar cáncer colorrectal.\nSin embargo:\nEl riesgo no es igual para todos los pacientes.\nExisten factores que aumentan significativamente la probabilidad de malignización.\n¿Por qué el tiempo de evolución aumenta el riesgo?\nLa inflamación mantenida durante años favorece:\n• Daño epitelial acumulativo.\n• Inestabilidad genética.\n• Aparición de displasia.\nPor ello:\nEl riesgo aumenta conforme progresa la duración de la enfermedad.\n¿Por qué la afectación extensa aumenta el riesgo?\nA mayor superficie colónica comprometida:\nMayor exposición de la mucosa a inflamación crónica.\nLos pacientes con pancolitis presentan un riesgo significativamente superior al de aquellos con enfermedad limitada al recto.\n¿Por qué los antecedentes familiares aumentan el riesgo?\nLa presencia de familiares con cáncer colorrectal añade:\nSusceptibilidad genética adicional.\nPor esta razón:\nEstos pacientes requieren vigilancia endoscópica más estricta.\n¿Por qué la opción C es falsa?\nLa pregunta menciona:\nCirrosis biliar primaria.\nSin embargo:\nLa asociación clásica de alto riesgo es con:\nColangitis esclerosante primaria (CEP).\nLa coexistencia de colitis ulcerosa y colangitis esclerosante primaria incrementa de manera importante el riesgo de:\n• Displasia.\n• Cáncer colorrectal.\nLa cirrosis biliar primaria no forma parte de los factores clásicos de riesgo en este contexto.\n¿Cuál es la importancia de la colangitis esclerosante primaria?\nEs una de las asociaciones más preguntadas en exámenes de gastroenterología.\nCuando un paciente presenta:\n• Colitis ulcerosa.\n• Colangitis esclerosante primaria.\nDebe iniciarse vigilancia colonoscópica intensiva desde el momento del diagnóstico.\n¿Cuál es la trampa de examen?\nMuchos estudiantes reconocen:\n\"Enfermedad hepática.\"\nY asumen que cualquier hepatopatía aumenta el riesgo.\nSin embargo:\nLa entidad específicamente asociada es la colangitis esclerosante primaria.\nNo la cirrosis biliar primaria.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar factores de riesgo para cáncer colorrectal.\n2.\tRecordar la importancia de la duración de la enfermedad.\n3.\tEvaluar la extensión del compromiso colónico.\n4.\tInvestigar antecedentes familiares.\n5.\tReconocer la asociación con colangitis esclerosante primaria.\n6.\tSeleccionar la excepción.\nPerlas de examen\n✅ El riesgo de cáncer colorrectal aumenta con la duración de la colitis ulcerosa.\n✅ La pancolitis tiene mayor riesgo que la enfermedad distal.\n✅ Los antecedentes familiares incrementan el riesgo neoplásico.\n✅ La colangitis esclerosante primaria es un factor de riesgo mayor para cáncer colorrectal.\n✅ Los pacientes con colitis ulcerosa requieren vigilancia endoscópica periódica.\n✅ La inflamación crónica favorece el desarrollo de displasia.\n✅ La cirrosis biliar primaria no forma parte de los factores clásicos de riesgo para cáncer colorrectal en colitis ulcerosa.\nReferencias\n• ECCO Guidelines on Colorectal Carcinoma Surveillance in Inflammatory Bowel Disease.\n• American College of Gastroenterology Guidelines for Ulcerative Colitis.\n• British Society of Gastroenterology Guidelines on IBD Surveillance.\n• Harrison's Principles of Internal Medicine.\n• UpToDate: Risk Factors and Prevention of Colorectal Cancer in Inflammatory Bowel Disease."
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
    difficulty: "medium",
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
const startMatch = content.match(/  \{\r?\n    id: "dr-q-156"/);
const endMatch = content.match(/  \{\r?\n    id: "dr-q-166"/);
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
console.log(`Patched dr-q-156 through dr-q-165 (${questions.length} questions) in ${coexamPath}`);
