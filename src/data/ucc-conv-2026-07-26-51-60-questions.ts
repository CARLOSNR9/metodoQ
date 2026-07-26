import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #4 (26 jul 2026) · Preguntas #51–#60.
 */
export const UCC_CONV_2026_07_26_51_60_QUESTIONS: TrainingQuestion[] = [
  {
    "id": "ucc-conv-2026-07-26-51",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - CARDIOLOGÍA / NEUMOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 68 años con antecedente de infarto agudo de miocardio antiguo y falla cardíaca (FEVI 28%). Consulta por empeoramiento progresivo de su disnea, la cual ahora se presenta a mínimos esfuerzos, asociada a ortopnea de 3 almohadas y edemas vespertinos en miembros inferiores. Al examen físico: PA 105/65 mmHg, FC 92 lpm, SatO2 90% al aire ambiente. Estertores crepitantes bilaterales en las bases pulmonares e ingurgitación yugular a 45 grados. Se realiza un ecocardiograma transtorácico de control que reporta, además de la FEVI de 28%, un ventrículo derecho severamente dilatado y una Presión Sistólica de la Arteria Pulmonar (PSAP) estimada en 65 mmHg (Hipertensión Pulmonar Severa). ¿Cuál es la conducta farmacológica MÁS apropiada para el manejo de su hipertensión pulmonar en este momento?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar Sildenafil oral a dosis plenas por tratarse de una hipertensión pulmonar severa (PSAP > 50 mmHg)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Optimizar el tratamiento médico para la falla cardíaca izquierda (Diuréticos, IECA/ARNI, Betabloqueadores) y evitar terapias vasodilatadoras pulmonares específicas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar Bosentán (antagonista del receptor de endotelina) con monitorización estricta de la función hepática."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar Epoprostenol en infusión continua debido al compromiso del ventrículo derecho y riesgo inminente de *cor pulmonale*."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con **Hipertensión Pulmonar del Grupo 2** (Secundaria a cardiopatía izquierda). La disfunción sistólica severa del ventrículo izquierdo (FEVI 28%) genera un aumento retrógrado masivo de las presiones de llenado hacia la aurícula izquierda y el lecho venoso pulmonar, lo que secundariamente eleva la presión arterial pulmonar. Según las guías de la ESC/ERS, el uso de terapias vasodilatadoras pulmonares específicas (Sildenafil, Bosentán, Prostaciclinas) está ABSOLUTAMENTE CONTRAINDICADO en la hipertensión pulmonar del Grupo 2. Si se dilata el lecho arterial pulmonar, el ventrículo derecho empujará más volumen de sangre hacia un lado izquierdo que está fallando y no puede recibirlo, precipitando un Edema Agudo de Pulmón cardiogénico fulminante. El único manejo indicado es optimizar la descarga del ventrículo izquierdo (diuréticos, vasodilatadores sistémicos y terapia fundacional de HFrEF).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un error trágico de los residentes de primer año, Elizabeth. Al ver \"Hipertensión Pulmonar\" en el reporte del ecocardiograma, la mano tiembla por formular Sildenafil (Viagra). Pero la hipertensión pulmonar no es una sola enfermedad, son 5 grupos. El Sildenafil solo sirve para el Grupo 1 (Idiopática/Arterial) donde las venas pulmonares están vacías. Si dilatas las arterias pulmonares de este abuelo, la sangre cruzará a toda velocidad hacia sus pulmones, pero al llegar a la aurícula izquierda chocará contra un ventrículo infartado y rígido. El agua se rebasará hacia los alvéolos y el paciente se ahogará en sus propios fluidos en 20 minutos. Trata su falla cardíaca, y la presión pulmonar bajará sola por pura física.\n\n* distractorProfile: deadly_group1_therapy_in_group2\n* incorrectFeedback: El Sildenafil incrementa bruscamente el flujo de sangre a través del lecho capilar pulmonar hacia las venas pulmonares. En presencia de una cardiopatía izquierda, esto precipita una sobrecarga de volumen auricular izquierda masiva y edema agudo de pulmón iatrogénico.\n* distractorProfile: wrong_pulmonary_hypertension_group_treatment\n* incorrectFeedback: El Bosentán está indicado exclusivamente para la Hipertensión Arterial Pulmonar (HAP Grupo 1); en falla cardíaca izquierda (Grupo 2), demostró en ensayos clínicos aumentar la mortalidad por empeoramiento de la retención hídrica y hepatotoxicidad.\n* distractorProfile: aggressive_inappropriate_rescue\n* incorrectFeedback: El Epoprostenol es el rescate vital del Grupo 1 en clase funcional IV, pero su potente efecto vasodilatador pulmonar causaría un colapso hemodinámico restrictivo izquierdo inmediato en un paciente con FEVI del 28%.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente con Falla Cardíaca Izquierda (FEVI baja o patología mitral/aórtica).",
      "• Ecocardiograma reportando Presión Sistólica de la Arteria Pulmonar (PSAP) muy alta.",
      "• Pregunta sobre el uso de Sildenafil o Bosentán.",
      "Debes pensar en:",
      "Hipertensión Pulmonar Grupo 2. Las terapias vasodilatadoras pulmonares específicas son letales (producen edema agudo de pulmón). El manejo es optimizar la falla izquierda.",
      "Tema: Cardiología / Hipertensión Pulmonar."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-52",
    "university": "UCC",
    "examArea": "PEDIATRÍA - ENDOCRINOLOGÍA / NEFROLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un niño de 4 años es traído a consulta por presentar baja talla, arqueamiento severo de las extremidades inferiores (*genu varum*) y un patrón de marcha anadeante. Su madre refiere que él fue un lactante sano, pero el arqueamiento óseo se hizo evidente cuando empezó a caminar al año y medio de vida. Al examen físico: talla en el percentil 3, prominencias frontales y ensanchamiento de las muñecas. Los paraclínicos en sangre muestran: Calcio sérico 9.2 mg/dL (Normal), **Fósforo sérico 1.8 mg/dL (Hipofosfatemia severa)**, Fosfatasa Alcalina 950 U/L (marcadamente elevada) y Hormona Paratiroidea intacta (PTHi) de 45 pg/mL (Normal). Los niveles de 25-OH-Vitamina D son normales. Un análisis de orina evidencia hiperfosfaturia masiva con reabsorción tubular de fósforo muy baja. Ante la sospecha de Raquitismo Hipofosfatémico ligado al cromosoma X (XLH), ¿cuál es la etiología molecular subyacente y el pilar terapéutico tradicional indispensable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Mutación que inactiva la 1-alfa-hidroxilasa renal; requiere suplementación exclusiva con altas dosis de Calcitriol.",
        "distractorProfile": "wrong_genetic_rickets_type",
        "incorrectFeedback": "Esta mutación describe el Raquitismo Dependiente de Vitamina D Tipo 1 (VDDR1). Aunque responde a Calcitriol, cursa característicamente con hipocalcemia severa y un hiperparatiroidismo secundario marcado, contrastando con el calcio y PTH normales del paciente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Producción excesiva de FGF23 (Factor de Crecimiento de Fibroblastos 23) que inhibe la reabsorción tubular de fósforo; requiere suplementación con Fósforo oral múltiple y Calcitriol."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Deficiencia grave y crónica de vitamina D nutricional; el tratamiento es la reposición masiva de Colecalciferol y exposición solar.",
        "distractorProfile": "nutritional_rickets_trap",
        "incorrectFeedback": "El raquitismo carencial cursa con 25-OH-Vitamina D baja, calcio bajo o en el límite inferior, y niveles de PTH muy elevados (hiperparatiroidismo secundario) para intentar mantener la calcemia robando del hueso. El paciente tiene 25-OH-VitD y PTH normales."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Tubulopatía proximal difusa por Síndrome de Fanconi; el manejo se basa en la reposición de bicarbonato y potasio intravenoso.",
        "distractorProfile": "wrong_tubulopathy",
        "incorrectFeedback": "El Síndrome de Fanconi es una tubulopatía global que causa pérdida de múltiples solutos, por lo que cursaría no solo con fosfaturia, sino con glucosuria masiva, aminoaciduria y acidosis tubular renal severa, hallazgos ausentes en el defecto aislado del fósforo."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con **Raquitismo Hipofosfatémico ligado al cromosoma X (XLH)**, la causa más común de raquitismo heredable. Fisiopatológicamente, se produce por mutaciones en el gen *PHEX*, lo cual resulta en una producción descontrolada y excesiva de **FGF23** por los osteocitos. El FGF23 es una hormona \"fosfatúrica\" que ataca el túbulo proximal del riñón bloqueando los transportadores Na/Pi, forzando al riñón a botar todo el fósforo del cuerpo a la orina. Sin fósforo, el hueso no puede mineralizarse (causando arqueamiento). Además, el FGF23 bloquea la enzima 1-alfa-hidroxilasa, impidiendo la activación de la vitamina D. La característica pivote del laboratorio es una hipofosfatemia severa con un **Calcio NORMAL y PTH NORMAL** (a diferencia del raquitismo nutricional, donde el calcio baja y la PTH se dispara). El tratamiento clásico exige dosis altísimas de **Fósforo oral** (fraccionado 4 a 6 veces al día) sumado siempre a **Calcitriol** (vitamina D activa) para contrarrestar la inhibición enzimática y evitar el hiperparatiroidismo secundario. (En centros de alta complejidad, la terapia biológica curativa es el Burosumab, un anti-FGF23).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un diagnóstico genético que castiga a quienes confían solo en la clínica visual. Si ves piernas arqueadas y piensas \"Raquitismo por falta de sol, démosle Vitamina D\" (Opción C), cometes un error. El raquitismo nutricional (carencial) baja el calcio, y eso desespera a la paratiroides que dispara la PTH a niveles altísimos. En el XLH, la paratiroides está tranquila porque el calcio está perfecto. El problema es una \"fuga\" exclusiva de fósforo en el riñón por culpa de la hormona FGF23 mutada. Reponerle vitamina D inactiva (Colecalciferol) no sirve porque la enzima que la activa en el riñón está apagada por el FGF23; tienes que darle directamente la pastilla de la vitamina D ya activa (Calcitriol) y toneladas de fósforo líquido.",
    "keyPoints": [
      "Cuando veas:",
      "• Niño con piernas arqueadas (Raquitismo) que NO mejora con vitamina D normal.",
      "• Calcio NORMAL, PTH NORMAL, pero Fósforo SÉRICO MUY BAJO.",
      "• Fosfaturia masiva confirmada.",
      "Debes pensar en:",
      "Raquitismo Hipofosfatémico ligado al X (Mutación PHEX/Exceso de FGF23). El tratamiento es con suplementos de Fósforo oral + Calcitriol (vitamina D ya activada).",
      "Tema: Metabolismo Óseo / Raquitismo Genético."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-53",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - ENDOCRINOLOGÍA / CIRUGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un hombre de 62 años, con antecedente de Artritis Reumatoide severa en tratamiento continuo con Prednisona 20 mg/día desde hace 5 años, es sometido a una laparotomía de urgencia por apendicitis aguda complicada con peritonitis. Durante la inducción anestésica, el paciente presentó un episodio de hipotensión que respondió a un bolo de cristaloides. Sin embargo, a los 30 minutos de iniciada la intervención intraoperatoria, la presión arterial cae abruptamente a 60/35 mmHg, con taquicardia de 135 lpm. Se administran masivamente cristaloides (3 Litros) y se inician altas dosis de Noradrenalina y Vasopresina sin lograr ABSOLUTAMENTE NINGUNA recuperación del tono vascular (choque vasopléjico refractario). Al revisar el protocolo preoperatorio de enfermería, se documenta que la dosis matutina de Prednisona de hoy fue omitida por el ayuno prequirúrgico. ¿Cuál es la terapia salvavidas OBLIGATORIA INMEDIATA que revertirá el choque de este paciente en el quirófano?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administración de pulsos de Metilprednisolona 1 g IV para apagar la liberación aguda de citoquinas sistémicas.",
        "distractorProfile": "wrong_steroid_formulation_for_shock",
        "incorrectFeedback": "La Metilprednisolona posee excelente actividad antiinflamatoria, pero carece de la retención salina y del perfil de actividad mineralocorticoide/glucocorticoide balanceado de la Hidrocortisona, siendo inferior para el rescate vascular agudo de una crisis addisoniana/suprarrenal."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Infusión en bolo de Dextrosa al 50% para revertir el choque neuroglucopénico silente.",
        "distractorProfile": "secondary_symptom_distractor",
        "incorrectFeedback": "Aunque la insuficiencia adrenal produce hipoglucemia, la glucosa no restaura el tono vascular (las resistencias periféricas) dependientes del acoplamiento catecolamina-receptor que requiere el cortisol; el choque persistiría igual."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Inyección intravenosa inmediata de Hidrocortisona a dosis de estrés (100 mg) seguida de una infusión continua."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Suspensión de la Noradrenalina e inicio de Adrenalina en infusión, asumiendo anafilaxia por los anestésicos.",
        "distractorProfile": "misdiagnosis_of_vasodilatory_shock",
        "incorrectFeedback": "Asumir anafilaxia y cambiar de vasopresor no solucionará el choque refractario. Las aminas presoras (tanto noradrenalina como adrenalina) fallarán sistemáticamente en constreñir las arterias si hay ausencia fisiológica de cortisol tisular."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente cursa con una **Insuficiencia Suprarrenal Secundaria (Crisis Adrenal Aguda)** desencadenada por la supresión del eje Hipotálamo-Hipófisis-Adrenal inducida por la corticoterapia exógena crónica (> 3 semanas de uso de esteroides suprime el eje). Al someterse a un estrés quirúrgico mayor (peritonitis + laparotomía), un cuerpo humano normal produciría picos masivos de cortisol para mantener el tono de las arterias frente al trauma. Este paciente tiene sus glándulas suprarrenales atrofiadas y, al habérsele omitido la dosis de esteroide matutina, se quedó con niveles de cortisol en cero. El cortisol es permisivo y absolutamente necesario para que los receptores alfa-1 de los vasos sanguíneos respondan a las catecolaminas (noradrenalina). Sin cortisol, los vasos se dilatan irremediablemente y el choque se vuelve refractario a litros de vasopresores. La inyección de **Hidrocortisona intravenosa a dosis de estrés (100 mg)** reactiva los receptores en minutos, permitiendo que la noradrenalina apriete los vasos y salvando la vida del paciente en el quirófano.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un escenario de pesadilla legal y clínica. Olvidar preguntar si un paciente toma \"pastillas para el dolor articular o el asma\" antes de abrirle la barriga es letal. Las glándulas suprarrenales de este señor son del tamaño de un maní seco. En la cirugía, el anestesiólogo le pondrá noradrenalina a litros (Opción D), pero sin cortisol, la noradrenalina no tiene \"cerraduras\" donde encajar en el endotelio porque los receptores alfa se internalizan. Tan pronto como le inyectas la hidrocortisona por la vena (Opción C), el monitor de presión salta de 60 a 110 mmHg en cuestión de cinco minutos. La Metilprednisolona (Opción A) es un potente antiinflamatorio puro, pero tiene muy baja actividad mineralocorticoide, por lo que la Hidrocortisona sigue siendo la reina indiscutible del rescate vascular adrenal.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente usuario crónico de esteroides (Prednisona > 5-7.5 mg/día por > 3 semanas).",
      "• Sometido a estrés extremo (Cirugía, Infección, Trauma).",
      "• Choque distributivo/vasopléjico que NO RESPONDE a líquidos ni a vasopresores a dosis altas.",
      "Debes pensar en:",
      "Crisis Adrenal por Supresión del Eje. La falta de cortisol inactiva los receptores vasculares. Terapia de oro: Hidrocortisona IV a dosis de estrés OBLIGATORIA.",
      "Tema: Urgencias Endocrinológicas / Supresión Adrenal Iatrogénica."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-54",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - HEMATOLOGÍA / NEUMOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un hombre de 62 años es hospitalizado en la unidad de medicina interna debido a una anemia severa sintomática (Hemoglobina de 6.1 g/dL) de origen carencial en estudio. Presenta signos vitales basales de PA 130/80 mmHg, FC 88 lpm, SatO2 96%, sin historia de cardiopatía. El médico ordena la transfusión de 2 unidades de Glóbulos Rojos Empaquetados (GRE). A la hora y media de iniciada la primera unidad, el paciente presenta escalofríos severos, seguidos de disnea súbita extrema, tos seca y cianosis. Al examen físico se documenta fiebre de 39.1°C, PA **85/50 mmHg (hipotensión aguda)**, y crepitantes difusos en ambos campos pulmonares sin ingurgitación yugular evidente. Los gases arteriales reportan una PaO2 de 50 mmHg. Un ecocardiograma rápido a la cabecera revela función ventricular izquierda y derecha conservada sin dilatación. Una radiografía de tórax portátil muestra **infiltrados alveolares algodonosos bilaterales masivos (patrón de SDRA o edema pulmonar difuso)**. ¿Cuál es la fisiopatología causante de este cuadro agudo letal asociado a la transfusión?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Sobrecarga hídrica aguda que precipitó un edema pulmonar cardiogénico hidrostático en un corazón previamente sano.",
        "distractorProfile": "taco_overlap_error",
        "incorrectFeedback": "La sobrecarga circulatoria (TACO) cursa invariablemente con hipertensión arterial, ingurgitación yugular, función cardíaca sobrecargada (BNP alto) y ausencia de fiebre, todo lo contrario al cuadro séptico-hipotensivo del paciente de la viñeta."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Reacción hemolítica intravascular mediada por IgM debido a incompatibilidad de grupo ABO en la unidad despachada.",
        "distractorProfile": "acute_hemolytic_trap",
        "incorrectFeedback": "La incompatibilidad ABO produce choque, fiebre y dolor lumbar, pero se asocia clásicamente a hemoglobinuria (orina oscura) y CID (sangrado difuso), y no justifica como evento principal un edema pulmonar agudo difuso masivo sin falla cardíaca subyacente."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Daño del endotelio capilar pulmonar secundario a la activación de neutrófilos del receptor por anticuerpos anti-HLA o anti-HNA presentes en el plasma del donante."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Reacción anafiláctica severa por deficiencia congénita de IgA en el receptor frente a las proteínas del plasma ajeno.",
        "distractorProfile": "allergic_reaction_misclassification",
        "incorrectFeedback": "La anafilaxia produce hipotensión profunda pero se caracteriza por broncoespasmo severo obstructivo (sibilancias y estridor) sin infiltrados alveolares algodonosos radiológicos bilaterales ni daño de membrana alvéolo-capilar."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente cursa con un **TRALI** (Lesión Pulmonar Aguda Relacionada con la Transfusión), que se define como el desarrollo de un Síndrome de Dificultad Respiratoria Aguda (SDRA) agudo y severo que inicia durante o en las primeras 6 horas posteriores a una transfusión de componentes sanguíneos. La fisiopatología del TRALI clásico se basa en la \"teoría del doble impacto\": el plasma del **donante** (usualmente mujeres multíparas que se sensibilizaron durante embarazos) contiene potentes anticuerpos (anti-HLA o anti-HNA) que atacan y activan explosivamente los neutrófilos del **receptor** que estaban marginados en los capilares pulmonares. Estos neutrófilos activados degranulan enzimas y radicales libres que destrozan la barrera alvéolo-capilar, generando un edema pulmonar **NO CARDIOGÉNICO** masivo. La clave para distinguirlo del TACO (sobrecarga circulatoria) es que en el TRALI el paciente cursa con fiebre, **hipotensión** (por fuga capilar) y el corazón está ecográficamente normal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un contraste vital con la pregunta 98 de la edición pasada. Si transfundes a una abuelita con falla cardíaca y se ahoga con la presión en 180/100, eso es TACO (sobrecarga, dale Furosemida). Pero si transfundes a este señor sin problemas de corazón y se ahoga con la presión desplomada en 85/50 y fiebre de 39°C, eso es TRALI. El TRALI es un \"Sepsis pulmonar inmune\". El plasma de la bolsa de sangre le metió anticuerpos que acribillaron sus propios pulmones desde adentro. Si a este señor en choque (Opción A) le pones Furosemida creyendo que lo sobrecargaste de volumen, el paciente morirá de choque hipovolémico severo inmediato, porque todo el plasma se fugó al espacio alveolar. El manejo es detener la transfusión y mandarlo a intubar a la UCI.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente recibiendo hemoderivados que hace Disnea Severa súbita en las primeras 6 horas.",
      "• Cuadro de SDRA: Infiltrados bilaterales \"en alas de mariposa\" en la Rx.",
      "• **Hipotensión (choque)**, fiebre y Eco-cardiograma normal (Ausencia de falla de bomba o ingurgitación yugular).",
      "Debes pensar en:",
      "TRALI (Daño pulmonar agudo por transfusión). Mecanismo: Anticuerpos del donante que activan neutrófilos en el pulmón. Tratamiento: Soporte ventilatorio agresivo en UCI; diuréticos contraindicados.",
      "Tema: Urgencias Transfusionales / TRALI vs TACO."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-55",
    "university": "UCC",
    "examArea": "PEDIATRÍA - NEUMOLOGÍA / INMUNOLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un escolar de 10 años, con diagnóstico conocido de Fibrosis Quística (colonizado crónicamente por *Staphylococcus aureus*), acude a neumología pediátrica por un cuadro de empeoramiento progresivo del asma y la tos en los últimos 3 meses, asociado a sibilancias refractarias a broncodilatadores y esputo ocasional de color marrón-dorado oscuro en \"tapones\". La radiografía de tórax evidencia la aparición de nuevas bronquiectasias de morfología **central y proximal**. El hemograma muestra una **Eosinofilia del 15%**. Los niveles de Inmunoglobulina E (IgE) total en suero se reportan estratosféricos en **1.500 UI/mL** (normal < 100 UI/mL). Se le realiza una prueba cutánea (Prick test) que resulta fuertemente positiva para antígenos fúngicos ambientales. ¿Cuál es el tratamiento de inducción dual MÁS efectivo para frenar este fenotipo inflamatorio pulmonar destructivo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Anfotericina B intravenosa por 14 días seguida de Voriconazol de mantenimiento crónico.",
        "distractorProfile": "invasive_fungal_therapy_mismatch",
        "incorrectFeedback": "Ese es el protocolo para la Aspergilosis Pulmonar INVASIVA (angioinvasiva) típica de pacientes oncológicos con neutropenia febril prolongada. La ABPA no invade el tejido vascular y someter al niño a la toxicidad renal de la Anfotericina por un cuadro hiperalérgico es iatrogénico."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Ciclos continuos de antibióticos antipseudomónicos inhalados para barrer la biopelícula subyacente.",
        "distractorProfile": "wrong_organism_target_for_exacerbation",
        "incorrectFeedback": "Aunque los pacientes con FQ reciben antibióticos inhalados profilácticos, estos no tienen actividad contra la carga antigénica de *Aspergillus* y carecen por completo de la potencia antiinflamatoria necesaria para detener la reacción inmunomediada eosinofílica de la ABPA."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Corticosteroides sistémicos orales (Prednisolona) asociados a Itraconazol o Voriconazol oral durante varias semanas."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Lavado broncoalveolar diagnóstico-terapéutico para extracción mecánica de los tapones mucosos fúngicos.",
        "distractorProfile": "procedural_illusion",
        "incorrectFeedback": "Aunque los tapones mucosos pueden ser extraídos broncoscópicamente en casos de atelectasia obstructiva refractaria severa, esto no apaga el motor inflamatorio autoinmune subyacente mediado por Th2/IgE que volverá a formar los tapones en días si no se usan corticoides sistémicos."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente cursa con un cuadro clásico de **Aspergilosis Broncopulmonar Alérgica (ABPA)**. Esta entidad es una reacción de hipersensibilidad extrema (alérgica, no una infección invasiva sistémica) a las esporas del hongo *Aspergillus fumigatus* que colonizan la vía aérea. Ocurre patognomónicamente en dos grandes grupos de pacientes: Asmáticos crónicos refractarios y pacientes con **Fibrosis Quística**. El diagnóstico se sella con el asma refractaria, los tapones de moco dorado/marrón, las singulares **bronquiectasias centrales** (a diferencia de las periféricas de otras causas), una eosinofilia marcada periférica y niveles astronómicos de **IgE total (> 1.000 UI/mL)**. Como se trata de una enfermedad puramente hiperalérgica/inmunomediada que destruye el bronquio por inflamación eosinofílica, el pilar absoluto del tratamiento son los **Corticosteroides Sistémicos** (Prednisolona oral) para apagar la reacción inmune destructiva, típicamente combinados con un antifúngico azólico (Itraconazol) que disminuye la carga de *Aspergillus* en la luz bronquial, atenuando así el estímulo antigénico alergénico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un diagnóstico que cambia la vida del niño. Muchos médicos ven a un niño con FQ empeorar y asumen \"otra exacerbación por *Pseudomonas*\" (Opción B) y le atacan con meropenem y tobramicina. Pero los antibióticos no sirven contra una alergia fúngica masiva; el niño seguirá ahogándose mientras sus bronquios centrales se dilatan irreversiblemente. El secreto está en la IgE de 1.500 y la eosinofilia. Si el hongo estuviese invadiendo la sangre o el tejido profundo (Aspergilosis Invasiva, como en la leucemia neutropénica), requeriría terapia intravenosa aguda agresiva (Opción A). Pero aquí el hongo está sentadito en el moco bronquial, provocando un \"shock alérgico crónico\" en el pulmón. Le das Prednisona para desinflamar e Itraconazol oral para envenenar lentamente al hongo en la luz bronquial.",
    "keyPoints": [
      "Cuando veas:",
      "• Niño con Asma corticodependiente o Fibrosis Quística que empeora de repente.",
      "• Marcadores pivote: IgE Total > 1000 UI/mL + Eosinofilia en sangre.",
      "• Radiología: Bronquiectasias CENTRALES o tapones de moco oscuro.",
      "Debes pensar en:",
      "Aspergilosis Broncopulmonar Alérgica (ABPA). NO es una infección invasiva de la sangre. Tratamiento dual: Corticosteroides sistémicos (apagan la alergia) + Itraconazol (disminuye el antígeno hongo).",
      "Tema: Neumología Pediátrica / ABPA."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-56",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - INFECTOLOGÍA / URGENCIAS",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 45 años, diabético de mal control, consulta a urgencias por presentar fiebre de 39°C, compromiso del estado general y dolor severo (10/10) en la pierna izquierda de 24 horas de evolución. Refiere que ayer sufrió un raspón mínimo trabajando en el jardín. Al examen físico: PA 90/55 mmHg, FC 125 lpm, confuso. La pierna izquierda presenta un eritema tenso y brillante que avanza rápidamente hacia el muslo, con bordes mal definidos. Llama poderosamente la atención la aparición de tres grandes **bulas hemorrágicas (ampollas violáceas)** sobre la piel afectada y la presencia de crepitación palpable a lo largo de la fascia. A pesar del aspecto superficial, el paciente grita de dolor ante el menor roce de la piel (\"dolor desproporcionado al hallazgo visual\"). Ante la alta sospecha etiológica de Fascitis Necrotizante Tipo II, ¿cuál es el abordaje interdisciplinario de salvamento MÁS crítico y el régimen empírico obligatorio?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Cirugía de desbridamiento y fasciotomía de extrema urgencia, asociada a cobertura con Penicilina G cristalina y Clindamicina a dosis máximas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Resonancia Magnética (RMN) del miembro inferior de urgencia para definir los planos fasciales comprometidos antes de planear el ingreso a quirófano.",
        "distractorProfile": "deadly_imaging_delay",
        "incorrectFeedback": "El diagnóstico de la fascitis necrotizante es eminentemente CLÍNICO y quirúrgico. La RMN tiene alta sensibilidad, pero el retraso logístico que implica su realización en una infección de progreso hiperagudo aumenta catastróficamente el riesgo de amputación o muerte."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Manejo médico exclusivo e intensivo en UCI con Vancomicina y Daptomicina ante el riesgo inminente de *S. aureus* meticilino-resistente (SAMR).",
        "distractorProfile": "passive_medical_overestimation",
        "incorrectFeedback": "La fascitis necrotizante NUNCA se trata con manejo médico exclusivo. Los antibióticos no logran penetrar los espacios fasciales necróticos avasculares y coagulados; sin desbridamiento quirúrgico, el foco séptico toxigénico persiste activo y letal."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Cámara hiperbárica de urgencia para oxigenación tisular bactericida seguida de un esquema de Ciprofloxacino oral extendido.",
        "distractorProfile": "unproven_adjuvant_therapy_first",
        "incorrectFeedback": "El oxígeno hiperbárico es una medida adyuvante debatida y de eficacia dudosa, aplicable en algunas gangrenas clostridiales, pero nunca debe preceder ni retrasar la remoción mecánica y quirúrgica del tejido muerto en la fascitis necrotizante."
      }
    ],
    "correctOptionId": "A",
    "explanation": "El paciente cursa con una **Fascitis Necrotizante (Tipo II)**. La triada cardinal en urgencias es: 1) Antecedente de trauma mínimo, 2) Dolor absolutamente **desproporcionado** al aspecto de la piel, y 3) Signos de toxicidad sistémica y toxicidad cutánea avanzada (bulas hemorrágicas, anestesia focal o crepitación). La Fascitis Tipo II es clásicamente monomicrobiana y causada por la \"bacteria comedora de carne\": **Streptococcus pyogenes (Estreptococo Beta-hemolítico del Grupo A, SGA)**. Esta infección se esparce como pólvora por debajo de la piel, derritiendo las fascias musculares a una velocidad de centímetros por hora mediante la liberación masiva de toxinas (exotoxinas pirogénicas). El abordaje de supervivencia es binario: la exploración quirúrgica agresiva y desbridamiento masivo por el cirujano es la intervención de ORO (remover el tejido muerto sin demoras diagnósticas). Antibióticamente, se debe asociar Penicilina G (que erradica la bacteria) MÁS **Clindamicina**. La clindamicina es mandatoria porque actúa en el ribosoma bacteriano (efecto anti-toxina) apagando instantáneamente la fábrica de toxinas destructivas que la penicilina sola no puede frenar (superando el efecto Eagle).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, aquí te enfrentas al \"paciente que pierde la pierna en el piso de hospitalización\". El médico lo ingresa con diagnóstico de \"celulitis\", le formula Cefazolina y lo manda a planta. Cuatro horas después, el paciente está en choque séptico con la pierna morada. Si un paciente tiene dolor desproporcionado o bulas llenas de sangre, la bacteria ya está pudriendo el tejido profundo. Retrasar la cirugía para pedir una Resonancia (Opción B) es un error letal de burocracia médica; mientras el paciente está en el tubo magnético, el estreptococo se comerá el muslo entero y la letalidad se disparará al 80%. Y nunca olvides la Clindamicina: matar a la bacteria no es suficiente si la bacteria ya soltó toxinas que derriten el músculo.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente con \"celulitis\" o trauma mínimo que hace fiebre altísima y dolor extremo/insoportable (desproporcionado).",
      "• Aparición rápida de ampollas violáceas (bulas hemorrágicas) o crepitación.",
      "Debes pensar en:",
      "Fascitis Necrotizante. El cirujano es el mejor antibiótico (Desbridamiento Quirúrgico de emergencia). Régimen antibiótico de elección para el Tipo II (S. pyogenes): Penicilina + Clindamicina (por su efecto antitoxina).",
      "Tema: Infecciones de Piel y Tejidos Blandos Graves."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-57",
    "university": "UCC",
    "examArea": "PEDIATRÍA - CARDIOLOGÍA / REUMATOLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un adolescente de 15 años acude a consulta de medicina interna pediátrica y cardiología infantil para control. A los 8 años de edad padeció un ataque agudo documentado de Fiebre Reumática. Durante aquel episodio, el ecocardiograma evidenció una insuficiencia mitral moderada compatible con carditis reumática aguda activa. A la fecha actual, el joven se encuentra completamente asintomático. El ecocardiograma de control de la semana pasada muestra una regurgitación (insuficiencia) mitral residual clasificada como LEVE a MODERADA, sin dilatación ventricular izquierda y ritmo sinusal conservado. El paciente ha recibido la profilaxis secundaria mensual religiosamente. Considerando el daño valvular residual persistente en el ecocardiograma, ¿cuál es la duración mínima recomendada por la guía de la AHA/ACC para mantener la profilaxis secundaria con Penicilina G Benzatínica intramuscular en este paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Debe mantenerse estrictamente hasta cumplir los 21 años de edad (o por 10 años desde el último episodio), ya que el daño valvular es leve.",
        "distractorProfile": "wrong_duration_for_residual_damage",
        "incorrectFeedback": "La regla de \"hasta los 21 años\" aplica única y exclusivamente para los pacientes que padecieron fiebre reumática sin carditis, o aquellos cuya carditis resolvió por completo sin dejar absolutamente ninguna secuela residual ecocardiográfica o clínica en el tiempo."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Debe mantenerse profilaxis obligatoria de manera vitalicia (para toda la vida) sin importar la edad, dado el antecedente de afectación valvular.",
        "distractorProfile": "overextended_prophylaxis_rule",
        "incorrectFeedback": "La profilaxis de por vida se considera pero no es una recomendación universal rígida; se reserva para escenarios extremos (daño valvular severo post-reemplazo valvular protésico que tienen exposiciones continuas a niños pequeños u ocupaciones de ultra-alto riesgo de exposición estreptocócica)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Se recomienda suspender al cumplir 18 años, prescribiendo profilaxis antibiótica únicamente antes de procedimientos dentales (profilaxis de endocarditis).",
        "distractorProfile": "endocarditis_vs_rheumatic_fever_confusion",
        "incorrectFeedback": "La profilaxis dental previene la Endocarditis Infecciosa transitoria (por *Streptococcus viridans* orales), lo cual es un protocolo distinto. La profilaxis secundaria de la fiebre reumática busca prevenir las faringitis por *S. pyogenes* comunitarias en la vida diaria."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Debe mantenerse profilaxis estricta hasta la edad de 40 años o por 10 años desde el último ataque agudo (lo que resulte en un periodo más largo)."
      }
    ],
    "correctOptionId": "D",
    "explanation": "La Fiebre Reumática requiere profilaxis secundaria estricta con Penicilina G Benzatínica IM cada 3 a 4 semanas para prevenir infecciones estreptocócicas futuras que desencadenen nuevas recaídas autoinmunes cruzadas (cada recaída destruye un poco más la válvula cardíaca). La duración de esta profilaxis depende estrictamente del daño inicial documentado, según las guías de la American Heart Association (AHA):\n\n1. **Fiebre reumática SIN carditis:** Profilaxis por 5 años o hasta los 21 años de edad (lo que sea más largo).\n2. **Fiebre reumática CON carditis pero SIN daño valvular residual** (eco actual normal): Profilaxis por 10 años o hasta los 21 años de edad (lo que sea más largo).\n3. **Fiebre reumática CON carditis Y CON daño valvular residual persistente** (como en este paciente que mantiene insuficiencia mitral en el eco actual): Profilaxis por **10 años o hasta los 40 años de edad (lo que sea más largo)**, e incluso profilaxis de por vida en pacientes con alto riesgo ocupacional o daño muy severo. Al tener 15 años de edad, la regla de \"hasta los 40 años\" domina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un tema \"hueso\" de memoria que le encanta a los tribunales de residencias. El estudiante novato marca \"21 años\" (Opción A) en automático porque es la regla general en pediatría. Pero fíjate bien en el detalle: el eco actual sigue mostrando daño (insuficiencia mitral leve). Esa válvula está cicatrizada e inmunológicamente \"caliente\". Si ese adolescente a los 25 años pesca un *Streptococcus pyogenes* faríngeo, los anticuerpos que se formen irán directamente a esa válvula ya pre-lesionada y la terminarán de mutilar. Hay que protegerlo por lo menos hasta los 40 años, edad donde la incidencia de faringitis estreptocócicas en la población general cae drásticamente.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente con antecedente de Fiebre Reumática buscando orientación de duración de profilaxis (Peni Benzatínica).",
      "• Ecocardiograma con secuela valvular residual (ej. Insuficiencia Mitral residual).",
      "Debes pensar en:",
      "Profilaxis extendida \"Hasta los 40 años o por 10 años\". Si el corazón hubiera sanado completamente, sería hasta los 21 años.",
      "Tema: Prevención Secundaria / Fiebre Reumática."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-58",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - REUMATOLOGÍA / CARDIOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 68 años con antecedente de un trastorno de células plasmáticas asintomático (Gammapatía Monoclonal de Significado Incierto - MGUS) detectado hace 2 años. Acude por disnea progresiva de esfuerzo, fatiga, pérdida de peso, aparición de equimosis periorbitales bilaterales espontáneas (Signo del \"ojo de mapache\") y macroglosia evidente al examen físico. Se documenta edema severo en miembros inferiores. El ecocardiograma revela una Falla Cardíaca con **Fracción de Eyección Preservada (FEVI 60%)**, pero con un engrosamiento marcado del tabique interventricular y la pared posterior (hipertrofia concéntrica severa) con un aspecto granulado brillante o \"centelleante\" (sparkling appearance). El electrocardiograma muestra sorpresivamente complejos QRS de **bajo voltaje** difuso en todas las derivaciones. El riñón cursa con proteinuria en rango nefrótico masiva. ¿Qué hallazgo histopatológico confirmará definitivamente la enfermedad de depósito subyacente y cuál es la biopsia menos invasiva de elección?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Depósitos de colágeno tipo I confirmados mediante biopsia endomiocárdica de urgencia.",
        "distractorProfile": "wrong_infiltrative_material_and_high_risk_procedure",
        "incorrectFeedback": "La fibrosis colágena causa rigidez, pero la amiloidosis no es una enfermedad colágena sino de plegamiento anormal de proteínas (cadenas ligeras en el caso AL). Además, la biopsia endomiocárdica se difiere si el diagnóstico se puede lograr con la grasa abdominal subcutánea, debido al alto riesgo de perforación y sangrado incontrolable por infiltración de los vasos cardíacos."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Granulomas no caseificantes difusos confirmados mediante biopsia de ganglio linfático mediastínico.",
        "distractorProfile": "sarcoidosis_overlap_trap",
        "incorrectFeedback": "Los granulomas no caseificantes definen la Sarcoidosis, la cual también puede causar miocardiopatía infiltrativa, pero típicamente cursa con adenopatías hiliares bilaterales, bloqueos AV severos, y no causa macroglosia masiva, síndrome nefrótico clásico ni ojos de mapache."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Depósitos de material amorfo extracelular con birrefringencia verde manzana bajo luz polarizada y tinción de Rojo Congo, idealmente en biopsia de grasa de la almohadilla abdominal."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Infiltración de células plasmáticas malignas confirmada exclusivamente mediante aspirado y biopsia de médula ósea.",
        "distractorProfile": "primary_disease_without_end_organ_confirmation",
        "incorrectFeedback": "La biopsia de médula ósea confirmará el clon productor (el mieloma oculto subyacente), pero no diagnostica el depósito extracelular en los órganos diana (amiloidosis), que es el evento fisiopatológico que está matando al paciente mediante falla cardíaca restrictiva."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente cursa con **Amiloidosis Primaria o Sistémica de Cadenas Ligeras (Amiloidosis AL)**, una de las causas más letales de miocardiopatía restrictiva infiltrativa. Es generada por la acumulación y precipitación tóxica de cadenas ligeras anormales producidas por un clon de células plasmáticas (usualmente un Mieloma o MGUS). El cuadro clínico es espectacularmente patognomónico: paciente mayor con Falla Cardíaca de FEVI preservada pero con paredes gruesas en el eco, disociado de un ECG de *bajo voltaje* (el corazón es grueso por el \"almidón/amiloide\" infiltrado, no por músculo, por eso no genera electricidad). A nivel sistémico, el amiloide se deposita en los capilares frágiles (causando equimosis periorbitaria/ojos de mapache), en la lengua (macroglosia) y en el riñón (síndrome nefrótico). La prueba diagnóstica de oro histológica inconfundible de cualquier tipo de Amiloidosis es la **tinción positiva con Rojo Congo, la cual produce una birrefringencia color verde manzana bajo luz polarizada**. Para evitar el riesgo de una biopsia de órgano profundo (biopsia renal o cardíaca, que conllevan altísimo riesgo de sangrado por la fragilidad de los vasos amiloideos), la biopsia de screening inicial más segura y rentable es la Aspiración de Grasa de la Almohadilla Abdominal (S.C. abdominal fat pad biopsy).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Esta es la reina de las miocardiopatías restrictivas en medicina interna. Si a un paciente con hipertensión se le engrosa el corazón (HVI), el músculo genera toneladas de electricidad y el ECG te tira ondas R altísimas que se salen del papel. Pero en la Amiloidosis, la pared del ventrículo mide 20 milímetros porque está rellena de la proteína \"basura\" amiloide; el músculo real está atrofiado y asfixiado. Por eso el corazón es grueso en la imagen pero no tiene electricidad en el papel (bajo voltaje). ¡Ese choque de hallazgos es el grito diagnóstico del amiloide! La biopsia de grasa de barriga salva al paciente del riesgo mortal de perforarle el corazón rígido con una aguja endomiocárdica.",
    "keyPoints": [
      "Cuando veas:",
      "• Falla cardíaca con hipertrofia en el ecocardiograma pero BAJO VOLTAJE en el ECG (disociación clásica).",
      "• Manifestaciones sistémicas \"raras\": Macroglosia (lengua grande), Ojos de mapache no traumáticos, Síndrome Nefrótico.",
      "Debes pensar en:",
      "Amiloidosis Cardíaca Sistémica (AL). Diagnóstico de oro: Tinción Rojo Congo (Birrefringencia verde manzana) usualmente en grasa abdominal.",
      "Tema: Miocardiopatías Restrictivas / Amiloidosis."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-59",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - GASTROENTEROLOGÍA / HEPATOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 35 años, nacido y residente en China hasta hace 5 años. Acude por chequeo médico rutinario encontrándose asintomático. El panel de laboratorio reporta transaminasas levemente elevadas (ALT 65 U/L, AST 52 U/L), función hepática normal y una ecografía hepatobiliar de aspecto sano. Un panel viral solicitado revela: Antígeno de superficie de Hepatitis B (HBsAg) Positivo; Antígeno \"e\" de Hepatitis B (HBeAg) Negativo; Anticuerpos anti-HBe (Anti-HBe) Positivos. Se cuantifica el ADN del Virus de la Hepatitis B (VHB) mediante PCR, resultando en una carga viral de **105,000 UI/mL**. Ante este escenario crónico, ¿cuál es la interpretación clínica de la fase de la infección y la indicación de inicio de tratamiento antiviral?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Fase de Portador Inactivo (Infección crónica HBeAg negativa inactiva); no requiere tratamiento antiviral, solo observación semestral.",
        "distractorProfile": "inactive_carrier_misinterpretation",
        "incorrectFeedback": "El portador inactivo tiene HBeAg negativo, pero requiere obligatoriamente una carga viral baja (<2,000 UI/mL) y transaminasas estrictamente normales. Este paciente incumple ambos criterios de inactividad, estando en fase destructiva."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Infección aguda resolviendo espontáneamente; se debe esperar 6 meses y vacunar al paciente si los títulos caen.",
        "distractorProfile": "acute_resolution_misdiagnosis",
        "incorrectFeedback": "La positividad de HBsAg por más de 6 meses descarta una infección aguda y define cronicidad; esperar 6 meses más sin antivirales ante una carga viral de 100,000 UI/mL acelera la progresión hacia fibrosis avanzada irreversible."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Fase Inmunoactiva HBeAg negativa (Hepatitis Crónica HBeAg negativa con mutante pre-core); existe indicación clara de inicio de tratamiento con Entecavir o Tenofovir."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Fase de Inmunotolerancia; el paciente está replicando el virus sin daño hepático y el tratamiento está contraindicado hasta que las transaminasas superen 1.000 U/L.",
        "distractorProfile": "immunotolerant_phase_confusion",
        "incorrectFeedback": "La inmunotolerancia cursa con altísimas cargas virales y transaminasas normales, pero el Antígeno \"e\" (HBeAg) debe ser obligatoriamente POSITIVO (típicamente en niños de transmisión vertical), no negativo como en este caso clínico mutante."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente cursa con una **Hepatitis B Crónica activa**. El análisis de las fases de la hepatitis B es uno de los temas más finos de la hepatología. Al tener HBsAg positivo por más de 6 meses, es crónico. Inicialmente, al ver un HBeAg Negativo y su anticuerpo (Anti-HBe) Positivo, se podría asumir erróneamente que el paciente es un \"portador inactivo\" benigno. SIN EMBARGO, para ser un portador inactivo, la carga viral debe estar suprimida (clásicamente < 2,000 UI/mL) y las transaminasas estrictamente normales. Este paciente tiene una carga viral astronómica (**105,000 UI/mL**) y las transaminasas elevadas (ALT > del límite superior normal, que es ~30-35). Esto configura la temida fase de **Hepatitis Crónica HBeAg negativa** (causada por una cepa viral mutante en la región *pre-core* o promotor *core* que le impide fabricar el antígeno 'e', pero que se replica agresivamente y destruye el hígado). Las guías internacionales (AASLD/EASL) dictan **Indicación Absoluta de Tratamiento Inmediato** con antivirales de alta barrera genética (Tenofovir o Entecavir) para evitar la progresión inexorable a cirrosis o carcinoma hepatocelular.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, aquí te enfrentas a la \"trampa del mutante de la Hepatitis B\" que destroza a los médicos generales. Si tú miras los exámenes y ves que el Antígeno e (HBeAg, marcador de alta replicación clásica) dice \"Negativo\", vas a querer darle la mano al paciente, decirle que el virus está \"dormido\" (Opción A) y mandarlo a su casa. Grave error. En Asia y el Mediterráneo (de ahí la pista del paciente chino), el virus de la Hepatitis B muta su genética para esconderse del sistema inmune: deja de fabricar la proteína del Antígeno \"e\", pero se multiplica brutalmente en silencio. ¿Quién desenmascara la mentira del virus? La Carga Viral por PCR. Si la PCR dice \"105.000 copias\" y la ALT está alta, el hígado se está incendiando. No esperes a la cirrosis, dale Tenofovir hoy.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente con Hepatitis B crónica con Antígeno \"e\" (HBeAg) NEGATIVO.",
      "• Pero Carga Viral (ADN VHB) alta (>2.000 o >20.000 UI/mL) y/o Transaminasas elevadas (ALT anormal).",
      "Debes pensar en:",
      "Hepatitis B Mutante Pre-Core (Fase Inmunoactiva HBeAg negativa). El virus es altamente destructivo a pesar de no marcar el antígeno \"e\". Indicación fuerte de inicio de Terapia Antiviral indefinida.",
      "Tema: Hepatología / Hepatitis B Crónica."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-60",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - URGENCIAS / TOXICOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un trabajador agrícola de 50 años es ingresado a urgencias por sus compañeros tras haber estado fumigando campos de cultivo con plaguicidas de venta libre. Al ingreso, el paciente se encuentra estuporoso, diaforético, y presenta incontinencia urinaria y fecal aguda. Al examen físico resaltan pupilas puntiformes (miosis extrema bilateral), bradicardia severa (FC 40 lpm), sibilancias diseminadas en ambos hemitórax, sialorrea profusa y fasciculaciones musculares visibles en los músculos gemelos. Un electrocardiograma revela un intervalo QTc prolongado. Se le administra Atropina intravenosa agresivamente, logrando revertir la bradicardia, la sialorrea y el broncoespasmo (secar las secreciones). Sin embargo, a los 30 minutos, el paciente desarrolla debilidad muscular extrema progresiva y parálisis respiratoria (falla diafragmática) inminente que requiere intubación de rescate. ¿Cuál es la terapia antidótica Específica y Adicional que DEBIÓ instaurarse tempranamente para prevenir esta parálisis muscular y evitar la intubación?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Pralidoxima (Oximas) intravenosa de manera precoz tras estabilizar con atropina."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Fisostigmina en infusión continua para competir por el receptor colinérgico periférico.",
        "distractorProfile": "poison_exacerbation_trap",
        "incorrectFeedback": "La Fisostigmina es un inhibidor de la acetilcolinesterasa (usada para toxicidad por anticolinérgicos como antidepresivos tricíclicos o atropina). Darle esto a un paciente intoxicado con organofosforados es echar gasolina al fuego colinérgico y causaría un paro cardiorrespiratorio inmediato."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar un bolo masivo de Gluconato de Calcio al 10% para reactivar la unión neuromuscular.",
        "distractorProfile": "wrong_antidote_mechanism",
        "incorrectFeedback": "El Gluconato de Calcio estabiliza la membrana en hiperpotasemia severa o se usa como antídoto en la intoxicación por bloqueadores de canales de calcio, pero no tiene ninguna actividad para romper el enlace fosforado sobre la enzima colinesterasa ni revierte la parálisis nicotínica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Flumazenil intravenoso, asumiendo intoxicación concomitante con sedantes organoclorados.",
        "distractorProfile": "wrong_toxidrome_reversal",
        "incorrectFeedback": "El Flumazenil revierte la sedación por benzodiacepinas. Su uso empírico en un paciente hipotenso y convulsivo por tóxicos no identificados plenamente puede desencadenar estatus epiléptico letal, y no repara en absoluto el daño neuromuscular causado por el exceso de acetilcolina."
      }
    ],
    "correctOptionId": "A",
    "explanation": "El paciente cursa con una **Intoxicación Aguda por Organofosforados** (Crisis Colinérgica por inhibición irreversible de la enzima acetilcolinesterasa). Este veneno hiperactiva de manera masiva dos tipos de receptores: los muscarínicos (provocando los signos DUMBELS: Diarrea, Urinación, Miosis, Bradicardia, Broncorrea, Emesis, Lagrimeo, Salivación) y los receptores **nicotínicos** (provocando fasciculaciones musculares, debilidad extrema y finalmente parálisis respiratoria diafragmática). El error conceptual más común en toxicología es creer que la Atropina lo cura todo. La **Atropina salva la vida** al bloquear los receptores muscarínicos (secando los pulmones y revirtiendo la bradicardia), PERO no tiene ABSOLUTAMENTE NINGÚN EFECTO sobre los receptores nicotínicos musculares. Por lo tanto, aunque el paciente esté seco y taquicárdico por la atropina, igual morirá por asfixia diafragmática si no se \"despega\" el veneno de la enzima a nivel de la placa motora muscular. El antídoto único que rescata al músculo y reactiva la enzima (si se da antes de que el enlace envejezca o se haga permanente) es la **Pralidoxima (Oxima)**.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, aquí te pongo la típica trampa de Urgencias y Cuidado Crítico. Tienes al granjero bañado en veneno, y el médico de urgencias se siente el héroe administrando Atropina hasta que las pupilas se dilatan y la boca se seca. \"Lo salvé\", piensa. Pero no se da cuenta de que el veneno sigue quemando las uniones neuromusculares (receptores nicotínicos). A los veinte minutos, el paciente que estaba despierto de repente deja de moverse, se ahoga y hace un paro respiratorio porque el diafragma se apagó por fatiga. ¡La Atropina no cura el músculo! Para reactivar la enzima que le devuelve la fuerza al tórax tienes que darle Pralidoxima, y dársela rápido, antes del fenómeno fisiológico del \"envejecimiento\" del enlace del veneno. Fisostigmina (Opción B) es exactamente lo contrario, empeoraría la crisis colinérgica mortalmente.",
    "keyPoints": [
      "Cuando veas:",
      "• Agricultor o persona con intento suicida con insecticidas que se presenta mojado/secretando (sialorrea, lagrimeo, broncorrea, diarrea).",
      "• Ojos en punta de alfiler (Miosis).",
      "• Administran Atropina, mejoran las secreciones, pero el paciente SE PARALIZA y deja de respirar.",
      "Debes pensar en:",
      "Intoxicación por Organofosforados. La Atropina resuelve los síntomas muscarínicos pero NO los nicotínicos (parálisis muscular). Para recuperar la fuerza muscular y diafragmática se debe usar Pralidoxima (Oxima).",
      "Tema: Toxicología / Síndrome Colinérgico (Organofosforados)."
    ]
  }
];
