import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coexamPath = path.join(__dirname, "../src/data/dr-q-coexam-questions.ts");

const questions = [
  {
    "id": 156,
    "examArea": "ENDOCRINOLOGÍA",
    "topic": "ENDOCRINOLOGÍA",
    "slug": "endocrinologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "El diagnóstico de hipogonadismo masculino requiere síntomas compatibles y al menos dos determinaciones matutinas de testosterona disminuida. Una vez confirmada la alteración, debe establecerse si se trata de un hipogonadismo primario o secundario mediante la medición de gonadotropinas.",
    "keyPoints": [
      "Cuando veas: Disminución de la libido. Disfunción eréctil. Testosterona baja.",
      "Debes pensar en: Hipogonadismo masculino.",
      "Tema: Hipogonadismo."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el algoritmo diagnóstico del hipogonadismo masculino.\nLa clave no es la disfunción eréctil.\nLa clave es:\nConfirmar el diagnóstico antes de iniciar tratamiento.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Disminución de la libido.\n• Disfunción sexual.\n• Testosterona baja.\nEsto genera una alta sospecha de:\nHipogonadismo.\n¿Puede iniciarse testosterona inmediatamente?\nNo.\nLas guías recomiendan:\nConfirmar el hallazgo con una segunda medición matutina.\n¿Por qué?\nPorque los niveles de testosterona:\n• Presentan variación circadiana.\n• Pueden alterarse por enfermedades agudas.\n• Pueden disminuir transitoriamente.\n¿Qué exámenes deben solicitarse?\n• LH.\n• FSH.\n• Prolactina.\nPara determinar si el origen es:\nPrimario (testicular).\nO:\nSecundario (hipotálamo-hipófisis).\n¿Cuándo iniciar testosterona?\nUna vez:\n• Confirmado el hipogonadismo.\n• Establecida la etiología.\n• Evaluadas contraindicaciones.\n¿Por qué NO sildenafil?\nPorque corrige parcialmente la erección.\nPero:\nNo trata el déficit hormonal.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Testosterona 185 ng/dL.\"\nY responden:\n\"Iniciar testosterona.\"\nSin embargo:\nEl dato decisivo es:\nQue aún falta confirmar el diagnóstico y establecer la causa.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar síntomas compatibles.\n2.\tConfirmar testosterona baja en una segunda muestra.\n3.\tSolicitar LH, FSH y prolactina.\n4.\tClasificar el hipogonadismo.\n5.\tIniciar tratamiento según etiología.\nPerlas de examen\n✅ El diagnóstico requiere síntomas y testosterona baja confirmada.\n✅ La testosterona debe medirse en horas de la mañana.\n✅ LH y FSH diferencian hipogonadismo primario y secundario.\n✅ La prolactina elevada puede sugerir prolactinoma.\n✅ No debe iniciarse testosterona sin confirmar el diagnóstico.\n✅ El reemplazo hormonal puede afectar la fertilidad.\n✅ La disfunción eréctil no siempre implica hipogonadismo.\nReferencias\n• Endocrine Society Clinical Practice Guideline.\n• Harrison's Principles of Internal Medicine.\n• Williams Textbook of Endocrinology.\n• UpToDate: Clinical Features and Diagnosis of Male Hypogonadism.\n• American Urological Association Guidelines on Testosterone Deficiency.",
    "statement": "Hombre de 35 años consulta por disminución de la libido, disfunción eréctil y dificultades persistentes en su vida sexual. Refiere haber recibido psicoterapia sin mejoría. Se documenta testosterona total de 185 ng/dL.\n¿Cuál es el siguiente paso más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar inmediatamente terapia de reemplazo con testosterona."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Solicitar una segunda medición matutina de testosterona total y estudio etiológico con LH, FSH y prolactina."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Reiniciar psicoterapia y control en 6 meses."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Iniciar sildenafil como tratamiento definitivo."
      }
    ]
  },
  {
    "id": 157,
    "examArea": "NEUROCIRUGÍA",
    "topic": "NEUROCIRUGÍA",
    "slug": "neurocirugia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "Los pacientes con lesiones intracraneales traumáticas corticales presentan riesgo aumentado de crisis epilépticas tempranas. La profilaxis anticonvulsivante con levetiracetam o fenitoína suele recomendarse en presencia de lesiones estructurales cerebrales significativas mientras se completa la valoración neuroquirúrgica.",
    "keyPoints": [
      "Cuando veas: Trauma craneoencefálico. Lesión cortical. Déficit neurológico focal. Cambios de personalidad.",
      "Debes pensar en: Profilaxis anticonvulsivante.",
      "Tema: Trauma craneoencefálico."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa las complicaciones tardías del trauma craneoencefálico.\nLa clave no es el accidente.\nLa clave es:\nLa lesión cortical identificada en la tomografía.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Traumatismo reciente.\n• Déficit neurológico focal.\n• Alteración conductual.\n• Lesión frontal.\nEsto implica:\nIrritación cortical.\n¿Que complicación puede aparecer?\nLa más importante es:\nCrisis epiléptica postraumática.\n¿Por qué ocurre?\nLa sangre y el tejido lesionado:\nActúan como foco epileptógeno.\n¿Cuál es el medicamento más utilizado?\nActualmente:\n• Levetiracetam.\nTambién puede utilizarse:\n• Fenitoína.\n¿Cuál es el objetivo?\nPrevenir:\nCrisis epilépticas tempranas.\nMientras se define:\nTratamiento neuroquirúrgico.\n¿Por qué NO dexametasona?\nNo forma parte del manejo rutinario de lesiones traumáticas intracraneales.\n¿Por qué NO manitol?\nSe reserva para:\nHipertensión intracraneal aguda.\nNo para manejo ambulatorio.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Lesión cerebral.\"\nY responden:\nManitol.\nSin embargo:\nEl dato decisivo es:\nLa lesión cortical subaguda con riesgo convulsivo.\nEsto orienta a:\nProfilaxis anticonvulsivante.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar lesión intracraneal traumática.\n2.\tReconocer riesgo de convulsiones.\n3.\tIniciar profilaxis anticonvulsivante.\n4.\tRemitir a neurocirugía.\n5.\tVigilar progresión neurológica.\nPerlas de examen\n✅ Las lesiones corticales aumentan el riesgo de epilepsia postraumática.\n✅ Levetiracetam es ampliamente utilizado por su perfil de seguridad.\n✅ Los hematomas subdurales crónicos pueden manifestarse días o semanas después del trauma.\n✅ Los cambios de personalidad sugieren compromiso frontal.\n✅ La debilidad contralateral orienta a lesión hemisférica focal.\n✅ El tratamiento definitivo puede requerir drenaje neuroquirúrgico.\n✅ Todo deterioro neurológico tardío tras trauma obliga a neuroimagen.\nReferencias\n• Greenberg Handbook of Neurosurgery.\n• Brain Trauma Foundation Guidelines.\n• Adams and Victor's Principles of Neurology.\n• Tintinalli's Emergency Medicine.\n• UpToDate: Post-Traumatic Seizures and Epilepsy.",
    "statement": "Varón de 45 años consulta por cambios progresivos de personalidad y debilidad en el brazo izquierdo una semana después de sufrir un accidente de tránsito. Durante la evaluación se realiza tomografía computarizada de cráneo que evidencia una lesión en el lóbulo frontal derecho compatible con hematoma subdural crónico.\n¿Cuál es la conducta más adecuada además de la remisión a neurocirugía?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar dexametasona intravenosa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar ácido tranexámico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar levetiracetam para profilaxis anticonvulsivante."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar manitol de forma ambulatoria."
      }
    ]
  },
  {
    "id": 158,
    "examArea": "MEDICINA INTERNA - NEUMOLOGÍA",
    "topic": "NEUMOLOGÍA",
    "slug": "neumologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "La gasometría muestra acidemia (pH 7.30) con elevación de la PaCO₂ (61 mmHg), lo que indica una acidosis respiratoria. El bicarbonato elevado refleja compensación renal crónica, característica de pacientes con EPOC que desarrollan retención crónica de CO₂ y presentan una descompensación aguda.",
    "keyPoints": [
      "Cuando veas: pH bajo. PaCO₂ elevada. HCO₃⁻ elevado. Antecedente de EPOC.",
      "Debes pensar en: Acidosis respiratoria parcialmente compensada.",
      "Tema: Trastornos ácido-base."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la interpretación sistemática de la gasometría arterial.\nLa clave no es el bicarbonato.\nLa clave es:\nLa elevación del CO₂.\n¿Qué está ocurriendo realmente?\nPaso 1:\nEvaluar el pH.\n• pH = 7.30\nExiste:\nAcidemia.\nPaso 2:\nEvaluar la PaCO₂.\n• PaCO₂ = 61 mmHg\nEstá elevada.\nPor tanto:\nLa alteración primaria es respiratoria.\nPaso 3:\nEvaluar el bicarbonato.\n• HCO₃⁻ = 31 mEq/L\nEstá elevado.\nEsto indica:\nCompensación renal.\n¿Qué diagnóstico ácido-base tiene?\nAcidosis respiratoria parcialmente compensada.\n¿Cuál es la causa?\nEl antecedente de:\nEPOC.\nSugiere:\nHipoventilación alveolar y retención de CO₂.\n¿Por qué la PaO₂ está disminuida?\nPorque la exacerbación del EPOC produce:\n• Alteración V/Q.\n• Hipoxemia.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"Bicarbonato elevado.\"\nY responden:\nAlcalosis metabólica.\nSin embargo:\nEl dato decisivo es:\nLa PaCO₂ elevada con acidemia.\nEsto define:\nAcidosis respiratoria.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tRevisar pH.\n2.\tRevisar CO₂.\n3.\tRevisar bicarbonato.\n4.\tIdentificar compensación.\n5.\tBuscar la causa clínica.\nPerlas de examen\n✅ EPOC es una causa clásica de acidosis respiratoria crónica.\n✅ La compensación renal aumenta el bicarbonato sérico.\n✅ pH bajo + CO₂ alto = acidosis respiratoria.\n✅ La compensación nunca normaliza completamente el pH durante una exacerbación aguda.\n✅ La hipoxemia suele acompañar las exacerbaciones de EPOC.\n✅ El tratamiento se orienta a mejorar la ventilación alveolar.\n✅ La ventilación no invasiva puede ser necesaria en exacerbaciones graves.\nReferencias\n• Harrison's Principles of Internal Medicine.\n• GOLD Guidelines for COPD.\n• West's Respiratory Physiology.\n• Murray & Nadel's Textbook of Respiratory Medicine.\n• UpToDate: Acid-Base Disorders in COPD.",
    "statement": "Hombre de 61 años con antecedente de EPOC consulta por aumento progresivo de la disnea y limitación funcional. Se realiza gasometría arterial que reporta: pH 7.30, PaCO₂ 61 mmHg, HCO₃⁻ 31 mEq/L y PaO₂ 61 mmHg.\n¿Cuál es el trastorno ácido-base y la etiología más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Acidosis metabólica secundaria a sepsis."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Alcalosis respiratoria por hiperventilación."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Acidosis respiratoria parcialmente compensada secundaria a exacerbación de EPOC."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Alcalosis metabólica secundaria a uso de diuréticos."
      }
    ]
  },
  {
    "id": 159,
    "examArea": "FISIOLOGÍA RENAL",
    "topic": "FISIOLOGÍA RENAL",
    "slug": "nefrologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "La vasodilatación de la arteriola aferente aumenta el flujo sanguíneo renal y la presión hidrostática dentro de los capilares glomerulares, lo que incrementa la tasa de filtración glomerular.",
    "keyPoints": [
      "Cuando veas: Tasa de filtración glomerular. Presión glomerular. Arteriolas aferente y eferente.",
      "Debes pensar en: Cambios de presión intraglomerular.",
      "Tema: Hemodinámica glomerular."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa uno de los conceptos más importantes de fisiología renal.\nLa clave no es la filtración.\nLa clave es:\nLa presión hidrostática glomerular.\n¿Qué determina la TFG?\nPrincipalmente:\n• Presión hidrostática glomerular.\n• Presión oncótica plasmática.\n• Presión en la cápsula de Bowman.\nLa más importante para examen es:\nLa presión hidrostática glomerular.\n¿Qué ocurre si se dilata la arteriola aferente?\nAumenta:\n• El flujo sanguíneo renal.\n• La entrada de sangre al glomérulo.\nComo consecuencia:\nAumenta la presión dentro de los capilares glomerulares.\nResultado:\n↑ TFG.\n¿Qué ocurre con la vasoconstricción aferente?\nDisminuye:\n• Flujo sanguíneo renal.\n• Presión glomerular.\nResultado:\n↓ TFG.\n¿Qué ocurre con la vasodilatación eferente?\nLa sangre sale más fácilmente del glomérulo.\nDisminuye:\nLa presión intraglomerular.\nResultado:\n↓ TFG.\n¿Cuál es la trampa de examen?\nMuchos estudiantes confunden:\nAferente y eferente.\nPara recordar:\n👉 Abrir la aferente = entra más sangre = aumenta TFG.\n👉 Abrir la eferente = sale más sangre = disminuye TFG.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tEvaluar la arteriola afectada.\n2.\tDeterminar si aumenta o disminuye la presión glomerular.\n3.\tRelacionar el cambio con la TFG.\n4.\tIdentificar la respuesta fisiológica.\nPerlas de examen\n✅ Vasodilatación aferente → ↑ TFG.\n✅ Vasoconstricción aferente → ↓ TFG.\n✅ Vasoconstricción eferente moderada → ↑ TFG.\n✅ Vasodilatación eferente → ↓ TFG.\n✅ La angiotensina II produce vasoconstricción preferencial de la arteriola eferente.\n✅ Los AINE disminuyen la TFG por vasoconstricción aferente.\n✅ Los IECA y ARA-II pueden disminuir la TFG por vasodilatación eferente.\nReferencias\n• Guyton & Hall. Tratado de Fisiología Médica.\n• Boron & Boulpaep. Medical Physiology.\n• Ganong's Review of Medical Physiology.\n• Brenner & Rector's The Kidney.\n• Costanzo Physiology.",
    "statement": "En relación con la fisiología renal, ¿cuál de los siguientes cambios hemodinámicos provoca un aumento de la tasa de filtración glomerular (TFG)?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Vasoconstricción de la arteriola aferente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Vasodilatación de la arteriola eferente."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Vasodilatación de la arteriola aferente."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Disminución de la presión hidrostática glomerular."
      }
    ]
  },
  {
    "id": 160,
    "examArea": "FISIOLOGÍA RENAL",
    "topic": "FISIOLOGÍA RENAL",
    "slug": "nefrologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "La mácula densa corresponde a un grupo especializado de células localizadas en la porción inicial del túbulo contorneado distal, donde este entra en contacto con el polo vascular del glomérulo. Su función principal es detectar la concentración de cloruro de sodio tubular y participar en el mecanismo de retroalimentación tubuloglomerular.",
    "keyPoints": [
      "Cuando veas: Mácula densa. Aparato yuxtaglomerular. Renina. TFG.",
      "Debes pensar en: Retroalimentación tubuloglomerular.",
      "Tema: Aparato yuxtaglomerular."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la anatomía funcional del aparato yuxtaglomerular.\nLa clave no es la renina.\nLa clave es:\nLa ubicación de la mácula densa.\n¿Dónde se encuentra?\nEn:\nLa porción inicial del túbulo contorneado distal.\nJusto cuando este pasa entre:\n• Arteriola aferente.\n• Arteriola eferente.\n¿Qué estructura forma?\nJunto con:\n• Células yuxtaglomerulares.\n• Células mesangiales extraglomerulares.\nForma el:\nAparato yuxtaglomerular.\n¿Cuál es su función?\nDetectar:\nLa concentración de NaCl en el líquido tubular.\n¿Qué ocurre cuando disminuye el sodio tubular?\nLa mácula densa interpreta:\nDisminución de la perfusión renal.\nY estimula:\n• Liberación de renina.\n• Activación del sistema renina-angiotensina-aldosterona.\n¿Qué ocurre cuando aumenta el sodio tubular?\nDisminuye:\nLa liberación de renina.\nY reduce:\nLa tasa de filtración glomerular.\n¿Cuál es la trampa de examen?\nMuchos estudiantes responden:\n\"Asa de Henle.\"\nPorque la mácula densa se encuentra cerca de ella.\nSin embargo:\nLa localización anatómica correcta es:\nTúbulo contorneado distal.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar la mácula densa.\n2.\tUbicarla en el túbulo distal.\n3.\tRelacionarla con el aparato yuxtaglomerular.\n4.\tDetectar NaCl tubular.\n5.\tRegular la liberación de renina y la TFG.\nPerlas de examen\n✅ La mácula densa pertenece al túbulo contorneado distal.\n✅ Detecta la concentración de NaCl tubular.\n✅ Participa en la retroalimentación tubuloglomerular.\n✅ Estimula la liberación de renina cuando disminuye la perfusión renal.\n✅ Forma parte del aparato yuxtaglomerular.\n✅ Regula indirectamente la tasa de filtración glomerular.\n✅ Es un tema clásico de fisiología y nefrología.\nReferencias\n• Guyton & Hall. Tratado de Fisiología Médica.\n• Costanzo Physiology.\n• Boron & Boulpaep Medical Physiology.\n• Ganong's Review of Medical Physiology.\n• Brenner & Rector's The Kidney.",
    "statement": "En relación con la fisiología renal, ¿en cuál estructura anatómica se encuentra la mácula densa y cuál es su principal función?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Túbulo contorneado proximal; reabsorción de glucosa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Asa descendente de Henle; regulación de la osmolaridad medular."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Túbulo contorneado distal; detección de sodio y regulación de la tasa de filtración glomerular."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Conducto colector; regulación de la secreción de potasio."
      }
    ]
  },
  {
    "id": 161,
    "examArea": "MEDICINA INTERNA - NEFROLOGÍA",
    "topic": "NEFROLOGÍA",
    "slug": "nefrologia",
    "difficulty": "hard",
    "correctOptionId": "C",
    "explanation": "La neumonía es una de las causas más frecuentes de SIADH. La retención inapropiada de agua libre genera hiponatremia con osmolaridad plasmática baja y un estado clínico de euvolemia.",
    "keyPoints": [
      "Cuando veas: Neumonía. Hiponatremia. Osmolaridad baja. Euvolemia.",
      "Debes pensar en: SIADH.",
      "Tema: Hiponatremias."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el algoritmo diagnóstico de la hiponatremia.\nLa clave no es el sodio.\nLa clave es:\nEl estado de volumen.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Sodio bajo.\n• Osmolaridad plasmática baja.\nEsto confirma:\nHiponatremia hipotónica verdadera.\n¿Qué muestra el examen físico?\n• Sin edema.\n• Sin ascitis.\n• Sin deshidratación.\nPor tanto:\nLa paciente es euvolémica.\n¿Cuál es la causa más frecuente de hiponatremia euvolémica?\nLa respuesta clásica es:\nSIADH.\n¿Por qué una neumonía puede producir SIADH?\nLas infecciones pulmonares estimulan:\nLiberación inapropiada de ADH.\nComo consecuencia:\n• Retención de agua libre.\n• Dilución del sodio plasmático.\n¿Qué clasificación tiene?\n• Hiponatremia.\n• Hipotónica.\n• Euvolémica.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Hospitalizada.\"\nY responden:\nDeshidratación.\nSin embargo:\nEl dato decisivo es:\nLa ausencia de signos de hipovolemia.\nEsto orienta a:\nSIADH.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tConfirmar hiponatremia.\n2.\tRevisar osmolaridad.\n3.\tEvaluar estado de volumen.\n4.\tIdentificar euvolemia.\n5.\tSospechar SIADH.\nPerlas de examen\n✅ SIADH es la causa más frecuente de hiponatremia euvolémica.\n✅ La neumonía es un desencadenante clásico.\n✅ La osmolaridad plasmática está disminuida.\n✅ Los pacientes suelen estar clínicamente euvolémicos.\n✅ La osmolaridad urinaria suele estar inapropiadamente elevada.\n✅ El tratamiento inicial suele incluir restricción hídrica.\n✅ El carcinoma microcítico de pulmón es otra causa clásica de SIADH.\nReferencias\n• Harrison's Principles of Internal Medicine.\n• Brenner & Rector's The Kidney.\n• UpToDate: Causes of Hyponatremia.\n• European Clinical Practice Guideline on Hyponatremia.\n• Guyton & Hall. Tratado de Fisiología Médica.",
    "statement": "Mujer de 27 años, habitante de calle, hospitalizada por neumonía adquirida en la comunidad. Durante la hospitalización se documenta sodio sérico de 122 mEq/L y osmolaridad plasmática disminuida. Al examen físico no presenta signos de hipovolemia ni sobrecarga de volumen.\n¿Cuál es la causa más probable de este trastorno y cómo se clasifica esta hiponatremia?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Pérdidas gastrointestinales; hiponatremia hipovolémica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Insuficiencia cardíaca; hiponatremia hipervolémica."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Síndrome de secreción inadecuada de hormona antidiurética (SIADH); hiponatremia hipotónica euvolémica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Diabetes insípida; hipernatremia euvolémica."
      }
    ]
  },
  {
    "id": 162,
    "examArea": "NEFROLOGÍA",
    "topic": "NEFROLOGÍA",
    "slug": "nefrologia",
    "difficulty": "easy",
    "correctOptionId": "B",
    "explanation": "La nefropatía por IgA es la causa más frecuente de hematuria glomerular recurrente. Se caracteriza por episodios de hematuria macroscópica coincidentes o poco después de infecciones respiratorias, debido al depósito mesangial de inmunoglobulina A.",
    "keyPoints": [
      "Cuando veas: Adolescente o adulto joven. Hematuria recurrente. Infección respiratoria reciente. Función renal inicialmente normal.",
      "Debes pensar en: Nefropatía por IgA.",
      "Tema: Glomerulopatías."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la glomerulopatía más frecuente a nivel mundial.\nLa clave no es la hematuria.\nLa clave es:\nSu relación temporal con las infecciones respiratorias.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Hematuria recurrente.\n• Episodios posteriores a infecciones respiratorias.\n• Ausencia de insuficiencia renal significativa.\nEsto corresponde clásicamente a:\nNefropatía por IgA.\n¿Cuál es el mecanismo?\nExiste:\nProducción anormal de IgA.\nQue posteriormente se deposita en:\nEl mesangio glomerular.\nProduciendo:\nInflamación glomerular recurrente.\n¿Cómo se presenta típicamente?\nLa palabra clave de examen es:\n\"Sinfaringítica\".\nEs decir:\nLa hematuria aparece durante o pocos días después de la infección respiratoria.\n¿Por qué NO es glomerulonefritis postestreptocócica?\nPorque en esta:\nLa hematuria aparece típicamente:\n2 a 4 semanas después de la infección.\nAdemás suele asociarse a:\n• Edema.\n• Hipertensión.\n• Hipocomplementemia.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Infección respiratoria.\"\nY responden:\nGlomerulonefritis postestreptocócica.\nSin embargo:\nEl dato decisivo es:\nLa aparición casi inmediata de la hematuria.\nEsto orienta a:\nNefropatía por IgA.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar hematuria recurrente.\n2.\tRelacionarla con infección respiratoria.\n3.\tReconocer el patrón sinfaringítico.\n4.\tSospechar nefropatía por IgA.\n5.\tConfirmar con biopsia renal cuando esté indicada.\nPerlas de examen\n✅ Es la glomerulopatía primaria más frecuente del mundo.\n✅ Produce hematuria macroscópica recurrente.\n✅ La hematuria aparece simultáneamente o pocos días después de la infección.\n✅ El complemento suele ser normal.\n✅ La biopsia muestra depósitos mesangiales de IgA.\n✅ Existe asociación con enfermedad celíaca y otras enfermedades autoinmunes.\n✅ El pronóstico suele ser bueno en pacientes sin proteinuria ni deterioro renal.\nReferencias\n• Brenner & Rector's The Kidney.\n• KDIGO Glomerular Disease Guidelines.\n• Harrison's Principles of Internal Medicine.\n• Comprehensive Clinical Nephrology.\n• UpToDate: IgA Nephropathy.",
    "statement": "Adolescente de 16 años consulta por episodios recurrentes de hematuria macroscópica que suelen aparecer pocos días después de infecciones respiratorias altas. Niega edema, hipertensión o disminución del volumen urinario. Los estudios iniciales no muestran proteinuria significativa ni deterioro de la función renal.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Glomerulonefritis postestreptocócica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Nefropatía por IgA (Enfermedad de Berger)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Síndrome de Alport."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Enfermedad de cambios mínimos."
      }
    ]
  },
  {
    "id": 163,
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "GINECOLOGÍA Y OBSTETRICIA",
    "slug": "ginecologia_y_obstetricia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La paciente presenta una preeclampsia con criterios de severidad y compromiso neurológico. El manejo incluye estabilización materna con sulfato de magnesio para prevención de eclampsia, control de la hipertensión severa y finalización del embarazo una vez la madre se encuentre estabilizada.",
    "keyPoints": [
      "Cuando veas: Embarazo >20 semanas. Hipertensión severa. Cefalea intensa. Síntomas neurológicos. Edema cerebral.",
      "Debes pensar en: Preeclampsia severa.",
      "Tema: Trastornos hipertensivos del embarazo."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una emergencia obstétrica potencialmente mortal.\nLa clave no es la edad de la paciente.\nLa clave es:\nEl compromiso neurológico.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• TA 170/110 mmHg.\n• Cefalea intensa.\n• Vómitos.\n• Edema cerebral.\nEstos son:\nCriterios de severidad.\nPor tanto:\nEl diagnóstico es:\nPreeclampsia severa.\n¿Cuál es el tratamiento inmediato?\nPrimero:\nEstabilizar a la madre.\nCon:\n• Sulfato de magnesio.\n• Antihipertensivos de acción rápida (labetalol, hidralazina o nifedipino).\n¿Cuál es el tratamiento definitivo?\nLa única cura definitiva es:\nLa finalización del embarazo.\n¿Por qué NO continuar la gestación?\nPorque existe:\nAlto riesgo de:\n• Eclampsia.\n• Hemorragia cerebral.\n• Muerte materna.\n¿Por qué NO administrar solo manitol?\nEl problema principal no es neuroquirúrgico.\nEs una:\nEmergencia hipertensiva obstétrica.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"34 semanas.\"\nY responden:\nMaduración pulmonar y observación.\nSin embargo:\nEl dato decisivo es:\nLa presencia de criterios de severidad con compromiso cerebral.\nEsto obliga a:\nInterrupción del embarazo tras estabilización materna.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tReconocer hipertensión severa.\n2.\tIdentificar síntomas neurológicos.\n3.\tIniciar sulfato de magnesio.\n4.\tControlar la presión arterial.\n5.\tFinalizar la gestación.\nPerlas de examen\n✅ El sulfato de magnesio previene y trata la eclampsia.\n✅ TA ≥160/110 mmHg constituye hipertensión severa.\n✅ Cefalea persistente y edema cerebral son criterios de severidad.\n✅ El tratamiento definitivo de la preeclampsia es el parto.\n✅ La estabilización materna precede a la interrupción del embarazo.\n✅ El compromiso neurológico aumenta el riesgo de hemorragia intracraneal.\n✅ Toda preeclampsia severa requiere manejo hospitalario.\nReferencias\n• Williams Obstetrics.\n• ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia.\n• FIGO Guidelines on Hypertensive Disorders of Pregnancy.\n• Cunningham Obstetricia.\n• UpToDate: Preeclampsia with Severe Features.",
    "statement": "Adolescente de 15 años, primigesta de 34 semanas de gestación, es llevada al servicio de urgencias por cefalea intensa y vómitos de varias horas de evolución. Al ingreso presenta presión arterial de 170/110 mmHg. Durante la evaluación se documenta edema cerebral en estudios de neuroimagen.\n¿Cuál es la intervención más apropiada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Observación hospitalaria y control tensional ambulatorio."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administración de sulfato de magnesio, control de la presión arterial y finalización del embarazo."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administración de manitol como única medida terapéutica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Maduración pulmonar fetal y continuación del embarazo hasta la semana 37."
      }
    ]
  },
  {
    "id": 164,
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "GINECOLOGÍA Y OBSTETRICIA",
    "slug": "ginecologia_y_obstetricia",
    "difficulty": "hard",
    "correctOptionId": "B",
    "explanation": "Las pacientes con antecedente de preeclampsia severa constituyen un grupo de alto riesgo obstétrico. Durante el primer control prenatal debe documentarse una proteinuria basal para facilitar el diagnóstico diferencial entre hipertensión crónica, enfermedad renal previa y preeclampsia sobreagregada durante el embarazo.",
    "keyPoints": [
      "Cuando veas: Antecedente de preeclampsia severa. Primer control prenatal. Embarazo temprano.",
      "Debes pensar en: Proteinuria basal.",
      "Tema: Control prenatal de alto riesgo."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa las medidas iniciales en embarazos de alto riesgo para preeclampsia.\nLa clave no es la edad gestacional.\nLa clave es:\nEl antecedente obstétrico.\n¿Qué está ocurriendo realmente?\nLa paciente tiene:\n• Antecedente de preeclampsia severa.\n• Riesgo elevado de recurrencia.\nPor ello necesita:\nEvaluación basal materna.\n¿Qué estudio es fundamental?\nLa cuantificación basal de proteinuria.\n¿Por qué es importante?\nPorque si posteriormente desarrolla:\n• Hipertensión.\n• Proteinuria.\nSerá necesario determinar:\nSi la proteinuria ya existía previamente o apareció durante la gestación.\n¿Qué otras medidas deben realizarse?\nAdemás:\n• Iniciar ácido acetilsalicílico a baja dosis.\n• Solicitar función renal basal.\n• Realizar seguimiento estrecho.\n¿Por qué NO la curva de glucosa?\nSe realiza habitualmente:\nEntre las semanas 24 y 28.\n¿Por qué NO la cardiotocografía?\nNo tiene utilidad rutinaria a las 12 semanas.\n¿Por qué NO la amniocentesis?\nNo está indicada por el antecedente descrito.\n¿Cuál es la trampa de examen?\nMuchos estudiantes responden:\nAspirina.\nPorque recuerdan correctamente la prevención de preeclampsia.\nSin embargo:\nLa pregunta solicita una:\nPrueba diagnóstica obligatoria en la evaluación inicial.\nLa respuesta correcta es:\nProteinuria basal.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar antecedente de preeclampsia.\n2.\tClasificar embarazo de alto riesgo.\n3.\tSolicitar proteinuria basal.\n4.\tEvaluar función renal inicial.\n5.\tIniciar medidas preventivas.\nPerlas de examen\n✅ Antecedente de preeclampsia severa = alto riesgo de recurrencia.\n✅ La proteinuria basal facilita el diagnóstico de preeclampsia sobreagregada.\n✅ La relación proteína/creatinina urinaria es una alternativa válida a la recolección de 24 horas.\n✅ Debe iniciarse ácido acetilsalicílico entre las semanas 12 y 16.\n✅ El seguimiento prenatal debe ser más estrecho.\n✅ La función renal basal debe documentarse tempranamente.\n✅ La prevención temprana disminuye el riesgo de preeclampsia recurrente.\nReferencias\n• ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia.\n• FIGO Recommendations on Preeclampsia Prevention.\n• Williams Obstetrics.\n• ISSHP Guidelines for Hypertensive Disorders of Pregnancy.\n• Ministerio de Salud de Colombia. Ruta Integral Materno Perinatal.",
    "statement": "Mujer de 34 años, G2P1, cursando 12 semanas de gestación, acude a su primer control prenatal. Como antecedente de importancia refiere preeclampsia severa durante su primer embarazo, con requerimiento de manejo en unidad de cuidados intensivos.\n¿Cuál de las siguientes pruebas debe realizarse obligatoriamente en esta visita?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Prueba de tolerancia oral a la glucosa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Proteinuria basal mediante relación proteína/creatinina urinaria o proteinuria de 24 horas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Cardiotocografía fetal."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Amniocentesis."
      }
    ]
  },
  {
    "id": 165,
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "GINECOLOGÍA Y OBSTETRICIA",
    "slug": "ginecologia_y_obstetricia",
    "difficulty": "hard",
    "correctOptionId": "B",
    "explanation": "La presencia de proteinuria después de las 20 semanas asociada a trombocitopenia y síntomas sugestivos de compromiso materno obliga a descartar un trastorno hipertensivo del embarazo, aun cuando la presión arterial no sea marcadamente elevada en el momento de la consulta. La confirmación de proteinuria y la valoración especializada son prioritarias.",
    "keyPoints": [
      "Cuando veas: Embarazo >20 semanas. Proteinuria. Plaquetas bajas. Síntomas maternos.",
      "Debes pensar en: Preeclampsia y sus variantes.",
      "Tema: Trastornos hipertensivos del embarazo."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la sospecha temprana de complicaciones hipertensivas del embarazo.\nLa clave no es la presión arterial.\nLa clave es:\nLa proteinuria acompañada de trombocitopenia.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Embarazo de 28 semanas.\n• Proteinuria.\n• Plaquetas de 118.000/μL.\n• Disnea y edema.\nEstos hallazgos obligan a:\nDescartar preeclampsia.\n¿Qué debe hacerse primero?\nConfirmar la proteinuria mediante:\n• Relación proteína/creatinina urinaria.\no\n• Proteinuria de 24 horas.\nY realizar:\nValoración obstétrica especializada.\n¿Por qué NO dar egreso?\nPorque existe riesgo de:\n• Preeclampsia.\n• Síndrome HELLP.\n• Complicaciones maternas.\n¿Por qué NO tratar como anemia?\nLa hemoglobina es:\nPrácticamente normal para la gestación.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"TA 100/70 mmHg.\"\nY descartan preeclampsia.\nSin embargo:\nEl dato decisivo es:\nLa combinación de proteinuria y trombocitopenia.\nEsto obliga a:\nEstudio urgente y valoración por alto riesgo obstétrico.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar proteinuria.\n2.\tRevisar plaquetas.\n3.\tConfirmar cuantificación proteica.\n4.\tRemitir a obstetricia de alto riesgo.\n5.\tContinuar estudio de trastorno hipertensivo del embarazo.\nPerlas de examen\n✅ La tira reactiva positiva no confirma el diagnóstico.\n✅ La relación proteína/creatinina es una herramienta diagnóstica útil.\n✅ Plaquetas <150.000/μL obligan a vigilancia estrecha.\n✅ La preeclampsia puede debutar con manifestaciones sistémicas.\n✅ La disnea en embarazadas siempre requiere evaluación cuidadosa.\n✅ El síndrome HELLP puede iniciar con trombocitopenia.\n✅ Toda sospecha de preeclampsia requiere seguimiento especializado.\nReferencias\n• Williams Obstetrics.\n• ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia.\n• FIGO Guidelines on Hypertensive Disorders of Pregnancy.\n• ISSHP Recommendations.\n• Ministerio de Salud de Colombia. Ruta Integral Materno Perinatal.",
    "statement": "Mujer de 30 años, primigesta de 28 semanas de gestación, consulta por disnea progresiva, fatiga y edema en miembros inferiores. Durante la valoración se documenta presión arterial de 100/70 mmHg y frecuencia respiratoria de 26 rpm. Los estudios iniciales muestran plaquetas de 118.000/μL y proteinuria en tira reactiva.\n¿Cuál es el siguiente paso más apropiado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Indicar reposo domiciliario y control en una semana."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Solicitar relación proteína/creatinina urinaria y remitir a valoración por obstetricia de alto riesgo."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar hierro oral por sospecha de anemia gestacional."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar diuréticos y dar egreso."
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
