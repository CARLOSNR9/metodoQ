import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Banco universal MetodoQ · Dr. Q — extensión coexam dr-q-326 a dr-q-345.
 * PREGUNTA 1–20 (Univalle/UdeA/Caldas/UCC Pasto/Unimilitar) — adición neta al banco.
 */
export const DR_Q_COEXAM_EXTENSION_326_345_QUESTIONS: TrainingQuestion[] = [
  {
    id: "dr-q-326",
    examArea: "ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","endocrinologia"],
    statement: "Hombre de 35 años consulta por disminución de la libido, disfunción eréctil y dificultades persistentes en su vida sexual. Refiere haber recibido psicoterapia sin mejoría. Se documenta testosterona total de 185 ng/dL.\n¿Cuál es el siguiente paso más adecuado?",
    options: [
      { id: "A", label: "A", text: "Iniciar inmediatamente terapia de reemplazo con testosterona." },
      { id: "B", label: "B", text: "Solicitar una segunda medición matutina de testosterona total y estudio etiológico con LH, FSH y prolactina." },
      { id: "C", label: "C", text: "Reiniciar psicoterapia y control en 6 meses." },
      { id: "D", label: "D", text: "Iniciar sildenafil como tratamiento definitivo." },
    ],
    correctOptionId: "B",
    explanation: "El diagnóstico de hipogonadismo masculino requiere síntomas compatibles y al menos dos determinaciones matutinas de testosterona disminuida. Una vez confirmada la alteración, debe establecerse si se trata de un hipogonadismo primario o secundario mediante la medición de gonadotropinas.",
    keyPoints: [
      "Cuando veas: Disminución de la libido. Disfunción eréctil. Testosterona baja.",
      "Debes pensar en: Hipogonadismo masculino.",
      "Tema: Hipogonadismo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el algoritmo diagnóstico del hipogonadismo masculino.
La clave no es la disfunción eréctil.
La clave es:
Confirmar el diagnóstico antes de iniciar tratamiento.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Disminución de la libido.
• Disfunción sexual.
• Testosterona baja.
Esto genera una alta sospecha de:
Hipogonadismo.
¿Puede iniciarse testosterona inmediatamente?
No.
Las guías recomiendan:
Confirmar el hallazgo con una segunda medición matutina.
¿Por qué?
Porque los niveles de testosterona:
• Presentan variación circadiana.
• Pueden alterarse por enfermedades agudas.
• Pueden disminuir transitoriamente.
¿Qué exámenes deben solicitarse?
• LH.
• FSH.
• Prolactina.
Para determinar si el origen es:
Primario (testicular).
O:
Secundario (hipotálamo-hipófisis).
¿Cuándo iniciar testosterona?
Una vez:
• Confirmado el hipogonadismo.
• Establecida la etiología.
• Evaluadas contraindicaciones.
¿Por qué NO sildenafil?
Porque corrige parcialmente la erección.
Pero:
No trata el déficit hormonal.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Testosterona 185 ng/dL."
Y responden:
"Iniciar testosterona."
Sin embargo:
El dato decisivo es:
Que aún falta confirmar el diagnóstico y establecer la causa.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar síntomas compatibles.
2.	Confirmar testosterona baja en una segunda muestra.
3.	Solicitar LH, FSH y prolactina.
4.	Clasificar el hipogonadismo.
5.	Iniciar tratamiento según etiología.
Perlas de examen
✅ El diagnóstico requiere síntomas y testosterona baja confirmada.
✅ La testosterona debe medirse en horas de la mañana.
✅ LH y FSH diferencian hipogonadismo primario y secundario.
✅ La prolactina elevada puede sugerir prolactinoma.
✅ No debe iniciarse testosterona sin confirmar el diagnóstico.
✅ El reemplazo hormonal puede afectar la fertilidad.
✅ La disfunción eréctil no siempre implica hipogonadismo.
Referencias
• Endocrine Society Clinical Practice Guideline.
• Harrison's Principles of Internal Medicine.
• Williams Textbook of Endocrinology.
• UpToDate: Clinical Features and Diagnosis of Male Hypogonadism.
• American Urological Association Guidelines on Testosterone Deficiency.`,
  },
  {
    id: "dr-q-327",
    examArea: "NEUROCIRUGÍA",
    topic: "NEUROCIRUGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurocirugia"],
    statement: "Varón de 45 años consulta por cambios progresivos de personalidad y debilidad en el brazo izquierdo una semana después de sufrir un accidente de tránsito. Durante la evaluación se realiza tomografía computarizada de cráneo que evidencia una lesión en el lóbulo frontal derecho compatible con hematoma subdural crónico.\n¿Cuál es la conducta más adecuada además de la remisión a neurocirugía?",
    options: [
      { id: "A", label: "A", text: "Iniciar dexametasona intravenosa." },
      { id: "B", label: "B", text: "Iniciar ácido tranexámico." },
      { id: "C", label: "C", text: "Iniciar levetiracetam para profilaxis anticonvulsivante." },
      { id: "D", label: "D", text: "Administrar manitol de forma ambulatoria." },
    ],
    correctOptionId: "C",
    explanation: "Los pacientes con lesiones intracraneales traumáticas corticales presentan riesgo aumentado de crisis epilépticas tempranas. La profilaxis anticonvulsivante con levetiracetam o fenitoína suele recomendarse en presencia de lesiones estructurales cerebrales significativas mientras se completa la valoración neuroquirúrgica.",
    keyPoints: [
      "Cuando veas: Trauma craneoencefálico. Lesión cortical. Déficit neurológico focal. Cambios de personalidad.",
      "Debes pensar en: Profilaxis anticonvulsivante.",
      "Tema: Trauma craneoencefálico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa las complicaciones tardías del trauma craneoencefálico.
La clave no es el accidente.
La clave es:
La lesión cortical identificada en la tomografía.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Traumatismo reciente.
• Déficit neurológico focal.
• Alteración conductual.
• Lesión frontal.
Esto implica:
Irritación cortical.
¿Que complicación puede aparecer?
La más importante es:
Crisis epiléptica postraumática.
¿Por qué ocurre?
La sangre y el tejido lesionado:
Actúan como foco epileptógeno.
¿Cuál es el medicamento más utilizado?
Actualmente:
• Levetiracetam.
También puede utilizarse:
• Fenitoína.
¿Cuál es el objetivo?
Prevenir:
Crisis epilépticas tempranas.
Mientras se define:
Tratamiento neuroquirúrgico.
¿Por qué NO dexametasona?
No forma parte del manejo rutinario de lesiones traumáticas intracraneales.
¿Por qué NO manitol?
Se reserva para:
Hipertensión intracraneal aguda.
No para manejo ambulatorio.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Lesión cerebral."
Y responden:
Manitol.
Sin embargo:
El dato decisivo es:
La lesión cortical subaguda con riesgo convulsivo.
Esto orienta a:
Profilaxis anticonvulsivante.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar lesión intracraneal traumática.
2.	Reconocer riesgo de convulsiones.
3.	Iniciar profilaxis anticonvulsivante.
4.	Remitir a neurocirugía.
5.	Vigilar progresión neurológica.
Perlas de examen
✅ Las lesiones corticales aumentan el riesgo de epilepsia postraumática.
✅ Levetiracetam es ampliamente utilizado por su perfil de seguridad.
✅ Los hematomas subdurales crónicos pueden manifestarse días o semanas después del trauma.
✅ Los cambios de personalidad sugieren compromiso frontal.
✅ La debilidad contralateral orienta a lesión hemisférica focal.
✅ El tratamiento definitivo puede requerir drenaje neuroquirúrgico.
✅ Todo deterioro neurológico tardío tras trauma obliga a neuroimagen.
Referencias
• Greenberg Handbook of Neurosurgery.
• Brain Trauma Foundation Guidelines.
• Adams and Victor's Principles of Neurology.
• Tintinalli's Emergency Medicine.
• UpToDate: Post-Traumatic Seizures and Epilepsy.`,
  },
  {
    id: "dr-q-328",
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neumologia"],
    statement: "Hombre de 61 años con antecedente de EPOC consulta por aumento progresivo de la disnea y limitación funcional. Se realiza gasometría arterial que reporta: pH 7.30, PaCO₂ 61 mmHg, HCO₃⁻ 31 mEq/L y PaO₂ 61 mmHg.\n¿Cuál es el trastorno ácido-base y la etiología más probable?",
    options: [
      { id: "A", label: "A", text: "Acidosis metabólica secundaria a sepsis." },
      { id: "B", label: "B", text: "Alcalosis respiratoria por hiperventilación." },
      { id: "C", label: "C", text: "Acidosis respiratoria parcialmente compensada secundaria a exacerbación de EPOC." },
      { id: "D", label: "D", text: "Alcalosis metabólica secundaria a uso de diuréticos." },
    ],
    correctOptionId: "C",
    explanation: "La gasometría muestra acidemia (pH 7.30) con elevación de la PaCO₂ (61 mmHg), lo que indica una acidosis respiratoria. El bicarbonato elevado refleja compensación renal crónica, característica de pacientes con EPOC que desarrollan retención crónica de CO₂ y presentan una descompensación aguda.",
    keyPoints: [
      "Cuando veas: pH bajo. PaCO₂ elevada. HCO₃⁻ elevado. Antecedente de EPOC.",
      "Debes pensar en: Acidosis respiratoria parcialmente compensada.",
      "Tema: Trastornos ácido-base.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la interpretación sistemática de la gasometría arterial.
La clave no es el bicarbonato.
La clave es:
La elevación del CO₂.
¿Qué está ocurriendo realmente?
Paso 1:
Evaluar el pH.
• pH = 7.30
Existe:
Acidemia.
Paso 2:
Evaluar la PaCO₂.
• PaCO₂ = 61 mmHg
Está elevada.
Por tanto:
La alteración primaria es respiratoria.
Paso 3:
Evaluar el bicarbonato.
• HCO₃⁻ = 31 mEq/L
Está elevado.
Esto indica:
Compensación renal.
¿Qué diagnóstico ácido-base tiene?
Acidosis respiratoria parcialmente compensada.
¿Cuál es la causa?
El antecedente de:
EPOC.
Sugiere:
Hipoventilación alveolar y retención de CO₂.
¿Por qué la PaO₂ está disminuida?
Porque la exacerbación del EPOC produce:
• Alteración V/Q.
• Hipoxemia.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"Bicarbonato elevado."
Y responden:
Alcalosis metabólica.
Sin embargo:
El dato decisivo es:
La PaCO₂ elevada con acidemia.
Esto define:
Acidosis respiratoria.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Revisar pH.
2.	Revisar CO₂.
3.	Revisar bicarbonato.
4.	Identificar compensación.
5.	Buscar la causa clínica.
Perlas de examen
✅ EPOC es una causa clásica de acidosis respiratoria crónica.
✅ La compensación renal aumenta el bicarbonato sérico.
✅ pH bajo + CO₂ alto = acidosis respiratoria.
✅ La compensación nunca normaliza completamente el pH durante una exacerbación aguda.
✅ La hipoxemia suele acompañar las exacerbaciones de EPOC.
✅ El tratamiento se orienta a mejorar la ventilación alveolar.
✅ La ventilación no invasiva puede ser necesaria en exacerbaciones graves.
Referencias
• Harrison's Principles of Internal Medicine.
• GOLD Guidelines for COPD.
• West's Respiratory Physiology.
• Murray & Nadel's Textbook of Respiratory Medicine.
• UpToDate: Acid-Base Disorders in COPD.`,
  },
  {
    id: "dr-q-329",
    examArea: "FISIOLOGÍA RENAL",
    topic: "FISIOLOGÍA RENAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","nefrologia"],
    statement: "En relación con la fisiología renal, ¿cuál de los siguientes cambios hemodinámicos provoca un aumento de la tasa de filtración glomerular (TFG)?",
    options: [
      { id: "A", label: "A", text: "Vasoconstricción de la arteriola aferente." },
      { id: "B", label: "B", text: "Vasodilatación de la arteriola eferente." },
      { id: "C", label: "C", text: "Vasodilatación de la arteriola aferente." },
      { id: "D", label: "D", text: "Disminución de la presión hidrostática glomerular." },
    ],
    correctOptionId: "C",
    explanation: "La vasodilatación de la arteriola aferente aumenta el flujo sanguíneo renal y la presión hidrostática dentro de los capilares glomerulares, lo que incrementa la tasa de filtración glomerular.",
    keyPoints: [
      "Cuando veas: Tasa de filtración glomerular. Presión glomerular. Arteriolas aferente y eferente.",
      "Debes pensar en: Cambios de presión intraglomerular.",
      "Tema: Hemodinámica glomerular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los conceptos más importantes de fisiología renal.
La clave no es la filtración.
La clave es:
La presión hidrostática glomerular.
¿Qué determina la TFG?
Principalmente:
• Presión hidrostática glomerular.
• Presión oncótica plasmática.
• Presión en la cápsula de Bowman.
La más importante para examen es:
La presión hidrostática glomerular.
¿Qué ocurre si se dilata la arteriola aferente?
Aumenta:
• El flujo sanguíneo renal.
• La entrada de sangre al glomérulo.
Como consecuencia:
Aumenta la presión dentro de los capilares glomerulares.
Resultado:
↑ TFG.
¿Qué ocurre con la vasoconstricción aferente?
Disminuye:
• Flujo sanguíneo renal.
• Presión glomerular.
Resultado:
↓ TFG.
¿Qué ocurre con la vasodilatación eferente?
La sangre sale más fácilmente del glomérulo.
Disminuye:
La presión intraglomerular.
Resultado:
↓ TFG.
¿Cuál es la trampa de examen?
Muchos estudiantes confunden:
Aferente y eferente.
Para recordar:
👉 Abrir la aferente = entra más sangre = aumenta TFG.
👉 Abrir la eferente = sale más sangre = disminuye TFG.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Evaluar la arteriola afectada.
2.	Determinar si aumenta o disminuye la presión glomerular.
3.	Relacionar el cambio con la TFG.
4.	Identificar la respuesta fisiológica.
Perlas de examen
✅ Vasodilatación aferente → ↑ TFG.
✅ Vasoconstricción aferente → ↓ TFG.
✅ Vasoconstricción eferente moderada → ↑ TFG.
✅ Vasodilatación eferente → ↓ TFG.
✅ La angiotensina II produce vasoconstricción preferencial de la arteriola eferente.
✅ Los AINE disminuyen la TFG por vasoconstricción aferente.
✅ Los IECA y ARA-II pueden disminuir la TFG por vasodilatación eferente.
Referencias
• Guyton & Hall. Tratado de Fisiología Médica.
• Boron & Boulpaep. Medical Physiology.
• Ganong's Review of Medical Physiology.
• Brenner & Rector's The Kidney.
• Costanzo Physiology.`,
  },
  {
    id: "dr-q-330",
    examArea: "FISIOLOGÍA RENAL",
    topic: "FISIOLOGÍA RENAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","nefrologia"],
    statement: "En relación con la fisiología renal, ¿en cuál estructura anatómica se encuentra la mácula densa y cuál es su principal función?",
    options: [
      { id: "A", label: "A", text: "Túbulo contorneado proximal; reabsorción de glucosa." },
      { id: "B", label: "B", text: "Asa descendente de Henle; regulación de la osmolaridad medular." },
      { id: "C", label: "C", text: "Túbulo contorneado distal; detección de sodio y regulación de la tasa de filtración glomerular." },
      { id: "D", label: "D", text: "Conducto colector; regulación de la secreción de potasio." },
    ],
    correctOptionId: "C",
    explanation: "La mácula densa corresponde a un grupo especializado de células localizadas en la porción inicial del túbulo contorneado distal, donde este entra en contacto con el polo vascular del glomérulo. Su función principal es detectar la concentración de cloruro de sodio tubular y participar en el mecanismo de retroalimentación tubuloglomerular.",
    keyPoints: [
      "Cuando veas: Mácula densa. Aparato yuxtaglomerular. Renina. TFG.",
      "Debes pensar en: Retroalimentación tubuloglomerular.",
      "Tema: Aparato yuxtaglomerular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la anatomía funcional del aparato yuxtaglomerular.
La clave no es la renina.
La clave es:
La ubicación de la mácula densa.
¿Dónde se encuentra?
En:
La porción inicial del túbulo contorneado distal.
Justo cuando este pasa entre:
• Arteriola aferente.
• Arteriola eferente.
¿Qué estructura forma?
Junto con:
• Células yuxtaglomerulares.
• Células mesangiales extraglomerulares.
Forma el:
Aparato yuxtaglomerular.
¿Cuál es su función?
Detectar:
La concentración de NaCl en el líquido tubular.
¿Qué ocurre cuando disminuye el sodio tubular?
La mácula densa interpreta:
Disminución de la perfusión renal.
Y estimula:
• Liberación de renina.
• Activación del sistema renina-angiotensina-aldosterona.
¿Qué ocurre cuando aumenta el sodio tubular?
Disminuye:
La liberación de renina.
Y reduce:
La tasa de filtración glomerular.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
"Asa de Henle."
Porque la mácula densa se encuentra cerca de ella.
Sin embargo:
La localización anatómica correcta es:
Túbulo contorneado distal.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la mácula densa.
2.	Ubicarla en el túbulo distal.
3.	Relacionarla con el aparato yuxtaglomerular.
4.	Detectar NaCl tubular.
5.	Regular la liberación de renina y la TFG.
Perlas de examen
✅ La mácula densa pertenece al túbulo contorneado distal.
✅ Detecta la concentración de NaCl tubular.
✅ Participa en la retroalimentación tubuloglomerular.
✅ Estimula la liberación de renina cuando disminuye la perfusión renal.
✅ Forma parte del aparato yuxtaglomerular.
✅ Regula indirectamente la tasa de filtración glomerular.
✅ Es un tema clásico de fisiología y nefrología.
Referencias
• Guyton & Hall. Tratado de Fisiología Médica.
• Costanzo Physiology.
• Boron & Boulpaep Medical Physiology.
• Ganong's Review of Medical Physiology.
• Brenner & Rector's The Kidney.`,
  },
  {
    id: "dr-q-331",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","nefrologia"],
    statement: "Mujer de 27 años, habitante de calle, hospitalizada por neumonía adquirida en la comunidad. Durante la hospitalización se documenta sodio sérico de 122 mEq/L y osmolaridad plasmática disminuida. Al examen físico no presenta signos de hipovolemia ni sobrecarga de volumen.\n¿Cuál es la causa más probable de este trastorno y cómo se clasifica esta hiponatremia?",
    options: [
      { id: "A", label: "A", text: "Pérdidas gastrointestinales; hiponatremia hipovolémica." },
      { id: "B", label: "B", text: "Insuficiencia cardíaca; hiponatremia hipervolémica." },
      { id: "C", label: "C", text: "Síndrome de secreción inadecuada de hormona antidiurética (SIADH); hiponatremia hipotónica euvolémica." },
      { id: "D", label: "D", text: "Diabetes insípida; hipernatremia euvolémica." },
    ],
    correctOptionId: "C",
    explanation: "La neumonía es una de las causas más frecuentes de SIADH. La retención inapropiada de agua libre genera hiponatremia con osmolaridad plasmática baja y un estado clínico de euvolemia.",
    keyPoints: [
      "Cuando veas: Neumonía. Hiponatremia. Osmolaridad baja. Euvolemia.",
      "Debes pensar en: SIADH.",
      "Tema: Hiponatremias.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el algoritmo diagnóstico de la hiponatremia.
La clave no es el sodio.
La clave es:
El estado de volumen.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Sodio bajo.
• Osmolaridad plasmática baja.
Esto confirma:
Hiponatremia hipotónica verdadera.
¿Qué muestra el examen físico?
• Sin edema.
• Sin ascitis.
• Sin deshidratación.
Por tanto:
La paciente es euvolémica.
¿Cuál es la causa más frecuente de hiponatremia euvolémica?
La respuesta clásica es:
SIADH.
¿Por qué una neumonía puede producir SIADH?
Las infecciones pulmonares estimulan:
Liberación inapropiada de ADH.
Como consecuencia:
• Retención de agua libre.
• Dilución del sodio plasmático.
¿Qué clasificación tiene?
• Hiponatremia.
• Hipotónica.
• Euvolémica.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Hospitalizada."
Y responden:
Deshidratación.
Sin embargo:
El dato decisivo es:
La ausencia de signos de hipovolemia.
Esto orienta a:
SIADH.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar hiponatremia.
2.	Revisar osmolaridad.
3.	Evaluar estado de volumen.
4.	Identificar euvolemia.
5.	Sospechar SIADH.
Perlas de examen
✅ SIADH es la causa más frecuente de hiponatremia euvolémica.
✅ La neumonía es un desencadenante clásico.
✅ La osmolaridad plasmática está disminuida.
✅ Los pacientes suelen estar clínicamente euvolémicos.
✅ La osmolaridad urinaria suele estar inapropiadamente elevada.
✅ El tratamiento inicial suele incluir restricción hídrica.
✅ El carcinoma microcítico de pulmón es otra causa clásica de SIADH.
Referencias
• Harrison's Principles of Internal Medicine.
• Brenner & Rector's The Kidney.
• UpToDate: Causes of Hyponatremia.
• European Clinical Practice Guideline on Hyponatremia.
• Guyton & Hall. Tratado de Fisiología Médica.`,
  },
  {
    id: "dr-q-332",
    examArea: "NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","nefrologia"],
    statement: "Adolescente de 16 años consulta por episodios recurrentes de hematuria macroscópica que suelen aparecer pocos días después de infecciones respiratorias altas. Niega edema, hipertensión o disminución del volumen urinario. Los estudios iniciales no muestran proteinuria significativa ni deterioro de la función renal.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Glomerulonefritis postestreptocócica." },
      { id: "B", label: "B", text: "Nefropatía por IgA (Enfermedad de Berger)." },
      { id: "C", label: "C", text: "Síndrome de Alport." },
      { id: "D", label: "D", text: "Enfermedad de cambios mínimos." },
    ],
    correctOptionId: "B",
    explanation: "La nefropatía por IgA es la causa más frecuente de hematuria glomerular recurrente. Se caracteriza por episodios de hematuria macroscópica coincidentes o poco después de infecciones respiratorias, debido al depósito mesangial de inmunoglobulina A.",
    keyPoints: [
      "Cuando veas: Adolescente o adulto joven. Hematuria recurrente. Infección respiratoria reciente. Función renal inicialmente normal.",
      "Debes pensar en: Nefropatía por IgA.",
      "Tema: Glomerulopatías.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la glomerulopatía más frecuente a nivel mundial.
La clave no es la hematuria.
La clave es:
Su relación temporal con las infecciones respiratorias.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Hematuria recurrente.
• Episodios posteriores a infecciones respiratorias.
• Ausencia de insuficiencia renal significativa.
Esto corresponde clásicamente a:
Nefropatía por IgA.
¿Cuál es el mecanismo?
Existe:
Producción anormal de IgA.
Que posteriormente se deposita en:
El mesangio glomerular.
Produciendo:
Inflamación glomerular recurrente.
¿Cómo se presenta típicamente?
La palabra clave de examen es:
"Sinfaringítica".
Es decir:
La hematuria aparece durante o pocos días después de la infección respiratoria.
¿Por qué NO es glomerulonefritis postestreptocócica?
Porque en esta:
La hematuria aparece típicamente:
2 a 4 semanas después de la infección.
Además suele asociarse a:
• Edema.
• Hipertensión.
• Hipocomplementemia.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Infección respiratoria."
Y responden:
Glomerulonefritis postestreptocócica.
Sin embargo:
El dato decisivo es:
La aparición casi inmediata de la hematuria.
Esto orienta a:
Nefropatía por IgA.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar hematuria recurrente.
2.	Relacionarla con infección respiratoria.
3.	Reconocer el patrón sinfaringítico.
4.	Sospechar nefropatía por IgA.
5.	Confirmar con biopsia renal cuando esté indicada.
Perlas de examen
✅ Es la glomerulopatía primaria más frecuente del mundo.
✅ Produce hematuria macroscópica recurrente.
✅ La hematuria aparece simultáneamente o pocos días después de la infección.
✅ El complemento suele ser normal.
✅ La biopsia muestra depósitos mesangiales de IgA.
✅ Existe asociación con enfermedad celíaca y otras enfermedades autoinmunes.
✅ El pronóstico suele ser bueno en pacientes sin proteinuria ni deterioro renal.
Referencias
• Brenner & Rector's The Kidney.
• KDIGO Glomerular Disease Guidelines.
• Harrison's Principles of Internal Medicine.
• Comprehensive Clinical Nephrology.
• UpToDate: IgA Nephropathy.`,
  },
  {
    id: "dr-q-333",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Adolescente de 15 años, primigesta de 34 semanas de gestación, es llevada al servicio de urgencias por cefalea intensa y vómitos de varias horas de evolución. Al ingreso presenta presión arterial de 170/110 mmHg. Durante la evaluación se documenta edema cerebral en estudios de neuroimagen.\n¿Cuál es la intervención más apropiada?",
    options: [
      { id: "A", label: "A", text: "Observación hospitalaria y control tensional ambulatorio." },
      { id: "B", label: "B", text: "Administración de sulfato de magnesio, control de la presión arterial y finalización del embarazo." },
      { id: "C", label: "C", text: "Administración de manitol como única medida terapéutica." },
      { id: "D", label: "D", text: "Maduración pulmonar fetal y continuación del embarazo hasta la semana 37." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una preeclampsia con criterios de severidad y compromiso neurológico. El manejo incluye estabilización materna con sulfato de magnesio para prevención de eclampsia, control de la hipertensión severa y finalización del embarazo una vez la madre se encuentre estabilizada.",
    keyPoints: [
      "Cuando veas: Embarazo >20 semanas. Hipertensión severa. Cefalea intensa. Síntomas neurológicos. Edema cerebral.",
      "Debes pensar en: Preeclampsia severa.",
      "Tema: Trastornos hipertensivos del embarazo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una emergencia obstétrica potencialmente mortal.
La clave no es la edad de la paciente.
La clave es:
El compromiso neurológico.
¿Qué está ocurriendo realmente?
La paciente presenta:
• TA 170/110 mmHg.
• Cefalea intensa.
• Vómitos.
• Edema cerebral.
Estos son:
Criterios de severidad.
Por tanto:
El diagnóstico es:
Preeclampsia severa.
¿Cuál es el tratamiento inmediato?
Primero:
Estabilizar a la madre.
Con:
• Sulfato de magnesio.
• Antihipertensivos de acción rápida (labetalol, hidralazina o nifedipino).
¿Cuál es el tratamiento definitivo?
La única cura definitiva es:
La finalización del embarazo.
¿Por qué NO continuar la gestación?
Porque existe:
Alto riesgo de:
• Eclampsia.
• Hemorragia cerebral.
• Muerte materna.
¿Por qué NO administrar solo manitol?
El problema principal no es neuroquirúrgico.
Es una:
Emergencia hipertensiva obstétrica.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"34 semanas."
Y responden:
Maduración pulmonar y observación.
Sin embargo:
El dato decisivo es:
La presencia de criterios de severidad con compromiso cerebral.
Esto obliga a:
Interrupción del embarazo tras estabilización materna.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer hipertensión severa.
2.	Identificar síntomas neurológicos.
3.	Iniciar sulfato de magnesio.
4.	Controlar la presión arterial.
5.	Finalizar la gestación.
Perlas de examen
✅ El sulfato de magnesio previene y trata la eclampsia.
✅ TA ≥160/110 mmHg constituye hipertensión severa.
✅ Cefalea persistente y edema cerebral son criterios de severidad.
✅ El tratamiento definitivo de la preeclampsia es el parto.
✅ La estabilización materna precede a la interrupción del embarazo.
✅ El compromiso neurológico aumenta el riesgo de hemorragia intracraneal.
✅ Toda preeclampsia severa requiere manejo hospitalario.
Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia.
• FIGO Guidelines on Hypertensive Disorders of Pregnancy.
• Cunningham Obstetricia.
• UpToDate: Preeclampsia with Severe Features.`,
  },
  {
    id: "dr-q-334",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Mujer de 34 años, G2P1, cursando 12 semanas de gestación, acude a su primer control prenatal. Como antecedente de importancia refiere preeclampsia severa durante su primer embarazo, con requerimiento de manejo en unidad de cuidados intensivos.\n¿Cuál de las siguientes pruebas debe realizarse obligatoriamente en esta visita?",
    options: [
      { id: "A", label: "A", text: "Prueba de tolerancia oral a la glucosa." },
      { id: "B", label: "B", text: "Proteinuria basal mediante relación proteína/creatinina urinaria o proteinuria de 24 horas." },
      { id: "C", label: "C", text: "Cardiotocografía fetal." },
      { id: "D", label: "D", text: "Amniocentesis." },
    ],
    correctOptionId: "B",
    explanation: "Las pacientes con antecedente de preeclampsia severa constituyen un grupo de alto riesgo obstétrico. Durante el primer control prenatal debe documentarse una proteinuria basal para facilitar el diagnóstico diferencial entre hipertensión crónica, enfermedad renal previa y preeclampsia sobreagregada durante el embarazo.",
    keyPoints: [
      "Cuando veas: Antecedente de preeclampsia severa. Primer control prenatal. Embarazo temprano.",
      "Debes pensar en: Proteinuria basal.",
      "Tema: Control prenatal de alto riesgo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa las medidas iniciales en embarazos de alto riesgo para preeclampsia.
La clave no es la edad gestacional.
La clave es:
El antecedente obstétrico.
¿Qué está ocurriendo realmente?
La paciente tiene:
• Antecedente de preeclampsia severa.
• Riesgo elevado de recurrencia.
Por ello necesita:
Evaluación basal materna.
¿Qué estudio es fundamental?
La cuantificación basal de proteinuria.
¿Por qué es importante?
Porque si posteriormente desarrolla:
• Hipertensión.
• Proteinuria.
Será necesario determinar:
Si la proteinuria ya existía previamente o apareció durante la gestación.
¿Qué otras medidas deben realizarse?
Además:
• Iniciar ácido acetilsalicílico a baja dosis.
• Solicitar función renal basal.
• Realizar seguimiento estrecho.
¿Por qué NO la curva de glucosa?
Se realiza habitualmente:
Entre las semanas 24 y 28.
¿Por qué NO la cardiotocografía?
No tiene utilidad rutinaria a las 12 semanas.
¿Por qué NO la amniocentesis?
No está indicada por el antecedente descrito.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
Aspirina.
Porque recuerdan correctamente la prevención de preeclampsia.
Sin embargo:
La pregunta solicita una:
Prueba diagnóstica obligatoria en la evaluación inicial.
La respuesta correcta es:
Proteinuria basal.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar antecedente de preeclampsia.
2.	Clasificar embarazo de alto riesgo.
3.	Solicitar proteinuria basal.
4.	Evaluar función renal inicial.
5.	Iniciar medidas preventivas.
Perlas de examen
✅ Antecedente de preeclampsia severa = alto riesgo de recurrencia.
✅ La proteinuria basal facilita el diagnóstico de preeclampsia sobreagregada.
✅ La relación proteína/creatinina urinaria es una alternativa válida a la recolección de 24 horas.
✅ Debe iniciarse ácido acetilsalicílico entre las semanas 12 y 16.
✅ El seguimiento prenatal debe ser más estrecho.
✅ La función renal basal debe documentarse tempranamente.
✅ La prevención temprana disminuye el riesgo de preeclampsia recurrente.
Referencias
• ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia.
• FIGO Recommendations on Preeclampsia Prevention.
• Williams Obstetrics.
• ISSHP Guidelines for Hypertensive Disorders of Pregnancy.
• Ministerio de Salud de Colombia. Ruta Integral Materno Perinatal.`,
  },
  {
    id: "dr-q-335",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Mujer de 30 años, primigesta de 28 semanas de gestación, consulta por disnea progresiva, fatiga y edema en miembros inferiores. Durante la valoración se documenta presión arterial de 100/70 mmHg y frecuencia respiratoria de 26 rpm. Los estudios iniciales muestran plaquetas de 118.000/μL y proteinuria en tira reactiva.\n¿Cuál es el siguiente paso más apropiado?",
    options: [
      { id: "A", label: "A", text: "Indicar reposo domiciliario y control en una semana." },
      { id: "B", label: "B", text: "Solicitar relación proteína/creatinina urinaria y remitir a valoración por obstetricia de alto riesgo." },
      { id: "C", label: "C", text: "Iniciar hierro oral por sospecha de anemia gestacional." },
      { id: "D", label: "D", text: "Administrar diuréticos y dar egreso." },
    ],
    correctOptionId: "B",
    explanation: "La presencia de proteinuria después de las 20 semanas asociada a trombocitopenia y síntomas sugestivos de compromiso materno obliga a descartar un trastorno hipertensivo del embarazo, aun cuando la presión arterial no sea marcadamente elevada en el momento de la consulta. La confirmación de proteinuria y la valoración especializada son prioritarias.",
    keyPoints: [
      "Cuando veas: Embarazo >20 semanas. Proteinuria. Plaquetas bajas. Síntomas maternos.",
      "Debes pensar en: Preeclampsia y sus variantes.",
      "Tema: Trastornos hipertensivos del embarazo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la sospecha temprana de complicaciones hipertensivas del embarazo.
La clave no es la presión arterial.
La clave es:
La proteinuria acompañada de trombocitopenia.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Embarazo de 28 semanas.
• Proteinuria.
• Plaquetas de 118.000/μL.
• Disnea y edema.
Estos hallazgos obligan a:
Descartar preeclampsia.
¿Qué debe hacerse primero?
Confirmar la proteinuria mediante:
• Relación proteína/creatinina urinaria.
o
• Proteinuria de 24 horas.
Y realizar:
Valoración obstétrica especializada.
¿Por qué NO dar egreso?
Porque existe riesgo de:
• Preeclampsia.
• Síndrome HELLP.
• Complicaciones maternas.
¿Por qué NO tratar como anemia?
La hemoglobina es:
Prácticamente normal para la gestación.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"TA 100/70 mmHg."
Y descartan preeclampsia.
Sin embargo:
El dato decisivo es:
La combinación de proteinuria y trombocitopenia.
Esto obliga a:
Estudio urgente y valoración por alto riesgo obstétrico.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar proteinuria.
2.	Revisar plaquetas.
3.	Confirmar cuantificación proteica.
4.	Remitir a obstetricia de alto riesgo.
5.	Continuar estudio de trastorno hipertensivo del embarazo.
Perlas de examen
✅ La tira reactiva positiva no confirma el diagnóstico.
✅ La relación proteína/creatinina es una herramienta diagnóstica útil.
✅ Plaquetas <150.000/μL obligan a vigilancia estrecha.
✅ La preeclampsia puede debutar con manifestaciones sistémicas.
✅ La disnea en embarazadas siempre requiere evaluación cuidadosa.
✅ El síndrome HELLP puede iniciar con trombocitopenia.
✅ Toda sospecha de preeclampsia requiere seguimiento especializado.
Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia.
• FIGO Guidelines on Hypertensive Disorders of Pregnancy.
• ISSHP Recommendations.
• Ministerio de Salud de Colombia. Ruta Integral Materno Perinatal.`,
  },
  {
    id: "dr-q-336",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Hombre de 40 años consulta por una masa en región inguinal que aparece al realizar esfuerzos físicos y al toser, desapareciendo completamente cuando se encuentra en decúbito. Al examen físico la masa es reductible, aumenta con la maniobra de Valsalva y no existen signos de encarcelación ni estrangulación.\n¿Cuál es el diagnóstico más probable y el manejo más oportuno?",
    options: [
      { id: "A", label: "A", text: "Hernia inguinal reducible; remisión a cirugía general para hernioplastia electiva." },
      { id: "B", label: "B", text: "Hernia estrangulada; laparotomía urgente." },
      { id: "C", label: "C", text: "Hernia femoral encarcelada; observación ambulatoria." },
      { id: "D", label: "D", text: "Lipoma inguinal; manejo conservador indefinido." },
    ],
    correctOptionId: "A",
    explanation: "La presencia de una masa inguinal que aumenta con el esfuerzo, es reductible y desaparece en decúbito es altamente sugestiva de hernia inguinal reducible. En ausencia de signos de complicación, el manejo indicado es la corrección quirúrgica programada.",
    keyPoints: [
      "Cuando veas: Masa inguinal. Aumenta con el esfuerzo. Reducible. Valsalva positivo.",
      "Debes pensar en: Hernia inguinal reducible.",
      "Tema: Hernias de la pared abdominal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el diagnóstico y manejo de la hernia inguinal no complicada.
La clave no es la masa.
La clave es:
Que desaparece al acostarse.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Tumoración inguinal.
• Aparición con esfuerzo.
• Reducción espontánea en decúbito.
Esto corresponde a:
Hernia inguinal reducible.
¿Qué significa reducible?
Que el contenido herniario:
Puede regresar a la cavidad abdominal.
Por ello:
No existe encarcelación.
¿Requiere cirugía?
Sí.
El tratamiento definitivo es:
Hernioplastia electiva.
¿Por qué NO observación indefinida?
Porque las hernias:
No se resuelven espontáneamente.
Y pueden progresar a:
• Encarcelación.
• Estrangulación.
¿Por qué NO cirugía urgente?
Porque no existen:
• Dolor intenso.
• Eritema.
• Signos de isquemia.
• Imposibilidad de reducción.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Masa inguinal."
Y responden:
Cirugía urgente.
Sin embargo:
El dato decisivo es:
Que la hernia es reducible y no complicada.
Esto orienta a:
Corrección quirúrgica programada.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar masa inguinal.
2.	Evaluar reducibilidad.
3.	Buscar signos de complicación.
4.	Diagnosticar hernia reducible.
5.	Programar hernioplastia electiva.
Perlas de examen
✅ La hernia inguinal es la hernia de pared abdominal más frecuente.
✅ La maniobra de Valsalva aumenta la protrusión herniaria.
✅ Una hernia reducible no constituye una urgencia quirúrgica.
✅ El tratamiento definitivo es quirúrgico.
✅ El encarcelamiento implica imposibilidad de reducción.
✅ La estrangulación se asocia a compromiso vascular.
✅ Dolor intenso y cambios cutáneos sugieren complicación.
Referencias
• Schwartz's Principles of Surgery.
• Sabiston Textbook of Surgery.
• Townsend. Sabiston Surgery.
• European Hernia Society Guidelines.
• UpToDate: Adult Inguinal Hernia.`,
  },
  {
    id: "dr-q-337",
    examArea: "NEUROLOGÍA - URGENCIAS",
    topic: "NEUROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement: "Hombre de 45 años presenta movimientos tónico-clónicos generalizados continuos. Recibe una dosis inicial de benzodiacepina por vía intramuscular sin respuesta clínica. Un minuto después se obtiene acceso venoso periférico y se administra una benzodiacepina intravenosa, persistiendo la actividad convulsiva.\n¿Cuál es el diagnóstico y el siguiente paso más apropiado en el tratamiento?",
    options: [
      { id: "A", label: "A", text: "Convulsión febril; repetir benzodiacepina intravenosa indefinidamente." },
      { id: "B", label: "B", text: "Estado epiléptico convulsivo establecido; administrar levetiracetam, ácido valproico o fosfenitoína intravenosa." },
      { id: "C", label: "C", text: "Estado epiléptico refractario; iniciar anestesia general inmediatamente." },
      { id: "D", label: "D", text: "Crisis psicógena no epiléptica; suspender tratamiento anticonvulsivante." },
    ],
    correctOptionId: "B",
    explanation: "La persistencia de las convulsiones a pesar de benzodiacepinas iniciales corresponde a un estado epiléptico convulsivo establecido. El siguiente escalón terapéutico consiste en administrar un anticonvulsivante de segunda línea por vía intravenosa.",
    keyPoints: [
      "Cuando veas: Convulsión continua. Benzodiacepina sin respuesta. Persistencia de actividad convulsiva.",
      "Debes pensar en: Estado epiléptico establecido.",
      "Tema: Estado epiléptico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el algoritmo moderno del estado epiléptico.
La clave no es la duración exacta.
La clave es:
Que ya fracasó el tratamiento inicial con benzodiacepinas.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Crisis tónico-clónica persistente.
• Benzodiacepina IM.
• Benzodiacepina IV.
• Sin control de la crisis.
Esto corresponde a:
Estado epiléptico convulsivo establecido.
¿Cuál es el siguiente paso?
Administrar un anticonvulsivante de segunda línea:
• Levetiracetam IV.
• Ácido valproico IV.
• Fosfenitoína IV.
¿Cuándo se considera refractario?
Cuando persiste:
Después de benzodiacepinas y un anticonvulsivante de segunda línea.
En ese momento se considera:
Estado epiléptico refractario.
Y se requiere:
• Intubación.
• Sedación continua.
• UCI.
¿Por qué NO seguir administrando benzodiacepinas?
Porque aumenta:
• Depresión respiratoria.
• Hipotensión.
Sin mejorar significativamente el control de la crisis.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
"Intubación inmediata."
Sin embargo:
Todavía no ha recibido el:
Anticonvulsivante de segunda línea.
Esto orienta a:
Levetiracetam, valproato o fosfenitoína IV.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Benzodiacepina inicial.
2.	Persistencia de crisis.
3.	Anticonvulsivante de segunda línea.
4.	Reevaluación.
5.	Si continúa → estado epiléptico refractario.
Perlas de examen
✅ Estado epiléptico = crisis ≥5 minutos o crisis repetidas sin recuperación de conciencia.
✅ Las benzodiacepinas son la primera línea.
✅ Levetiracetam, valproato y fosfenitoína son tratamientos de segunda línea.
✅ La fosfenitoína tiene menos efectos adversos que la fenitoína.
✅ El estado epiléptico refractario requiere UCI.
✅ La hipoglucemia siempre debe descartarse precozmente.
✅ El retraso terapéutico aumenta la morbimortalidad.
Referencias
• American Epilepsy Society Guidelines.
• Adams and Victor's Principles of Neurology.
• Tintinalli's Emergency Medicine.
• UpToDate: Convulsive Status Epilepticus in Adults.
• Neurocritical Care Society Guidelines.`,
  },
  {
    id: "dr-q-338",
    examArea: "MEDICINA INTERNA - URGENCIAS",
    topic: "URGENCIAS",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","urgencias"],
    statement: "Hombre de 70 años con antecedente de EPOC consulta por cuadro de 2 días de evolución consistente en fiebre, tos productiva, disnea y deterioro del estado general. Durante la valoración presenta confusión aguda, hipoxemia y estudios de laboratorio compatibles con hipoperfusión tisular.\n¿Cuál es la conducta más adecuada en el servicio de urgencias?",
    options: [
      { id: "A", label: "A", text: "Iniciar broncodilatadores inhalados y dar egreso con antibiótico oral." },
      { id: "B", label: "B", text: "Administrar líquidos intravenosos, obtener cultivos, iniciar antibióticos de amplio espectro y oxigenoterapia temprana." },
      { id: "C", label: "C", text: "Solicitar tomografía de tórax antes de iniciar cualquier tratamiento." },
      { id: "D", label: "D", text: "Iniciar únicamente corticosteroides sistémicos y observación." },
    ],
    correctOptionId: "B",
    explanation: "El cuadro clínico es compatible con neumonía adquirida en la comunidad complicada con sepsis. La presencia de alteración del estado mental, hipoxemia y elevación del lactato obliga a iniciar de manera inmediata el paquete de manejo para sepsis, incluyendo reanimación temprana, toma de cultivos y antibióticos intravenosos.",
    keyPoints: [
      "Cuando veas: Neumonía. Confusión. Lactato elevado. Hipoxemia.",
      "Debes pensar en: Sepsis de origen pulmonar.",
      "Tema: Sepsis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el reconocimiento temprano de la sepsis.
La clave no es el EPOC.
La clave es:
La combinación de infección e hipoperfusión.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Infección respiratoria.
• Alteración del estado mental.
• Hipoxemia.
• Lactato elevado.
Esto cumple criterios de:
Sepsis.
¿Cuál es la conducta inmediata?
El paquete inicial incluye:
• Oxigenoterapia.
• Acceso venoso.
• Cultivos.
• Antibióticos intravenosos tempranos.
• Reanimación con cristaloides.
¿Por qué es tan importante el tiempo?
Porque:
Cada hora de retraso en el inicio de antibióticos aumenta la mortalidad.
¿Qué antibióticos podrían utilizarse?
Dependiendo del contexto:
• Ceftriaxona + azitromicina.
o
• Ampicilina/sulbactam + macrólido.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"EPOC."
Y responden:
Exacerbación aislada de EPOC.
Sin embargo:
El dato decisivo es:
La presencia de fiebre, confusión y lactato elevado.
Esto orienta a:
Sepsis secundaria a neumonía.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer infección.
2.	Identificar disfunción orgánica.
3.	Diagnosticar sepsis.
4.	Iniciar antibióticos tempranos.
5.	Realizar reanimación y monitorización.
Perlas de examen
✅ Lactato elevado es marcador de hipoperfusión tisular.
✅ La confusión constituye disfunción orgánica.
✅ Los antibióticos deben iniciarse lo antes posible.
✅ Los cultivos deben obtenerse antes de antibióticos si no retrasan el tratamiento.
✅ La neumonía es una de las causas más frecuentes de sepsis.
✅ La oxigenoterapia forma parte del manejo inicial.
✅ qSOFA alterado aumenta la sospecha de sepsis.
Referencias
• Surviving Sepsis Campaign Guidelines.
• Harrison's Principles of Internal Medicine.
• Tintinalli's Emergency Medicine.
• GOLD Guidelines.
• IDSA/ATS Guidelines for Community-Acquired Pneumonia.`,
  },
  {
    id: "dr-q-339",
    examArea: "MEDICINA INTERNA - CUIDADO CRÍTICO",
    topic: "MEDICINA INTERNA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","medicina_interna"],
    statement: "Hombre de 60 años consulta por deterioro progresivo del estado general. Días previos presentó síntomas urinarios y fiebre, recibiendo tratamiento antibiótico ambulatorio sin mejoría. Al ingreso presenta hipotensión, fiebre y alteración del estado de conciencia. Se inicia reanimación con cristaloides (30 mL/kg) y antibióticos de amplio espectro. Posteriormente persiste hipotenso y con elevación del lactato sérico.\n¿Cuál es el siguiente paso más apropiado y cuál es la razón para realizarlo?",
    options: [
      { id: "A", label: "A", text: "Administrar un segundo bolo de cristaloides y observar la respuesta." },
      { id: "B", label: "B", text: "Iniciar norepinefrina para mantener una PAM ≥65 mmHg debido a choque séptico." },
      { id: "C", label: "C", text: "Iniciar dopamina por el antecedente de infección urinaria." },
      { id: "D", label: "D", text: "Suspender líquidos e iniciar diuréticos intravenosos." },
    ],
    correctOptionId: "B",
    explanation: "La persistencia de hipotensión e hipoperfusión tisular después de una adecuada reanimación con líquidos define choque séptico. En este contexto se requiere el inicio temprano de vasopresores, siendo la norepinefrina el fármaco de primera línea.",
    keyPoints: [
      "Cuando veas: Infección. Hipotensión persistente. Lactato elevado. Líquidos adecuados.",
      "Debes pensar en: Choque séptico.",
      "Tema: Sepsis y choque séptico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la diferencia entre sepsis y choque séptico.
La clave no es la infección urinaria.
La clave es:
La persistencia de la hipotensión tras líquidos.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Infección probable de origen urinario.
• Hipotensión severa.
• Lactato elevado.
• Persistencia de hipoperfusión.
A pesar de:
• Cristaloides 30 mL/kg.
• Antibióticos adecuados.
Esto corresponde a:
Choque séptico.
¿Cuál es la definición práctica?
Hipotensión persistente que requiere:
Vasopresores para mantener PAM ≥65 mmHg.
Y generalmente:
Lactato >2 mmol/L.
¿Cuál es el vasopresor de elección?
La respuesta clásica es:
Norepinefrina.
¿Por qué norepinefrina?
Porque:
• Aumenta la resistencia vascular sistémica.
• Mejora la perfusión tisular.
• Tiene menor riesgo de arritmias que dopamina.
¿Cuál es el objetivo?
Mantener:
PAM ≥65 mmHg.
Para asegurar:
Perfusión cerebral, renal y coronaria.
¿Por qué NO más líquidos indefinidamente?
Porque ya recibió:
Reanimación inicial adecuada.
El problema ahora es:
Vasoplejía séptica.
No hay déficit de volumen.
¿Cuál es la trampa del examen?
Muchos estudiantes leen:
"Hipotensión."
Y responden:
Más líquidos.
Sin embargo:
El dato decisivo es:
La persistencia de hipotensión después de 30 mL/kg.
Esto define:
Choque séptico.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar infección.
2.	Administrar líquidos iniciales.
3.	Iniciar antibióticos tempranos.
4.	Reevaluar perfusión.
5.	Si persiste hipotensión → iniciar norepinefrina.
Perlas de examen
✅ La norepinefrina es el vasopresor de primera línea en choque séptico.
✅ PAM objetivo ≥65 mmHg.
✅ Lactato elevado indica hipoperfusión tisular.
✅ El choque séptico es una emergencia con alta mortalidad.
✅ Los antibióticos deben administrarse precozmente.
✅ La dopamina se asocia a más arritmias.
✅ El control del foco infeccioso es fundamental para la supervivencia.
Referencias
• Surviving Sepsis Campaign 2021.
• Harrison's Principles of Internal Medicine.
• Marino's The ICU Book.
• Tintinalli's Emergency Medicine.
• SCCM Guidelines for Septic Shock.`,
  },
  {
    id: "dr-q-340",
    examArea: "NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neumologia"],
    statement: "Hombre de 64 años con diagnóstico de EPOC GOLD B en tratamiento con tiotropio consulta por aumento progresivo de la disnea, incremento del volumen del esputo y cambio a expectoración purulenta. Se encuentra consciente y orientado. La gasometría arterial evidencia hipercapnia con acidemia e hipoxemia.\n¿Cuál es el manejo inicial más apropiado y cuál sería el manejo crónico posterior?",
    options: [
      { id: "A", label: "A", text: "Oxígeno suplementario, broncodilatadores de acción corta, corticosteroides sistémicos, antibióticos y posteriormente terapia dual LABA/LAMA." },
      { id: "B", label: "B", text: "Intubación orotraqueal inmediata y ventilación mecánica invasiva; posteriormente oxígeno domiciliario." },
      { id: "C", label: "C", text: "Antibióticos únicamente y continuar tiotropio como único tratamiento." },
      { id: "D", label: "D", text: "Oxígeno al 100% por mascarilla de no reinhalación y egreso con salbutamol inhalado." },
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta una exacerbación aguda de EPOC con insuficiencia respiratoria hipercápnica. El manejo inicial incluye oxigenoterapia titulada, broncodilatadores de acción corta, corticosteroides sistémicos y antibióticos debido a la presencia de esputo purulento. Una vez estabilizado, debe optimizarse el tratamiento de mantenimiento con doble broncodilatación LABA/LAMA.",
    keyPoints: [
      "Cuando veas: EPOC. Aumento de disnea. Esputo purulento. Acidosis respiratoria.",
      "Debes pensar en: Exacerbación aguda de EPOC.",
      "Tema: EPOC.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el manejo agudo y crónico del EPOC.
La clave no es el antecedente.
La clave es:
La gasometría.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Disnea.
• Sibilancias.
• Esputo purulento.
• pH 7.30.
• PaCO₂ elevada.
Esto corresponde a:
Exacerbación aguda de EPOC.
¿Cuál es el manejo inicial?
1.	Oxígeno suplementario titulado.
Meta:
SatO₂ 88-92%.
2.	Broncodilatadores de acción corta.
• Salbutamol.
• Ipratropio.
3.	Corticoides sistémicos.
Ejemplo:
• Prednisolona.
• Hidrocortisona.
4.	Antibióticos.
Porque presenta:
Esputo purulento.
¿Qué hacer con la gasometría?
El pH de 7.30 indica:
Acidosis respiratoria aguda sobre crónica.
Por ello:
Debe considerarse ventilación mecánica no invasiva (VNI) si la acidosis persiste o empeora.
¿Por qué NO intubarlo inmediatamente?
Porque:
• Está consciente.
• No presenta agotamiento respiratorio.
• No hay contraindicación para VNI.
¿Cuál es el manejo crónico?
Actualmente las guías GOLD recomiendan:
Doble broncodilatación:
• LABA + LAMA.
Ejemplos:
• Formoterol + tiotropio.
• Indacaterol + glicopirronio.
¿Cuándo agregar corticoide inhalado?
En pacientes con:
• Exacerbaciones frecuentes.
• Eosinofilia elevada.
¿Cuál es la trampa del examen?
Muchos estudiantes leen:
"PaO₂ 55."
Y responden:
Oxígeno al 100%.
Sin embargo:
El dato decisivo es:
La hipercapnia.
Esto obliga a:
Oxigenoterapia controlada.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer exacerbación.
2.	Administrar oxígeno titulado.
3.	Broncodilatadores de acción corta.
4.	Corticoides y antibióticos.
5.	Optimizar tratamiento crónico con LABA/LAMA.
Perlas de examen
✅ Los tres criterios de Anthonisen son: aumento de disnea, aumento del volumen del esputo y purulencia.
✅ SatO₂ objetivo en EPOC: 88-92%.
✅ La VNI disminuye mortalidad e intubación.
✅ LABA/LAMA es la terapia de mantenimiento preferida en muchos pacientes GOLD B.
✅ El oxígeno al 100% puede empeorar la hipercapnia.
✅ Los corticosteroides sistémicos acortan la recuperación.
✅ El abandono del tabaquismo es la medida más efectiva para modificar la progresión de la enfermedad.
Referencias
• GOLD Report 2025.
• Harrison's Principles of Internal Medicine.
• Murray & Nadel's Textbook of Respiratory Medicine.
• UpToDate: Acute Exacerbations of COPD.
• ERS/ATS Guidelines on COPD Exacerbations.`,
  },
  {
    id: "dr-q-341",
    examArea: "MEDICINA INTERNA - URGENCIAS",
    topic: "URGENCIAS",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","urgencias"],
    statement: "Hombre de 50 años consulta por dolor torácico súbito acompañado de disnea intensa de inicio reciente. Al examen físico se encuentra hemodinámicamente estable, con leve taquicardia y saturación de oxígeno de 93% al aire ambiente. Niega trauma reciente y no refiere antecedentes médicos de importancia.\n¿Cuál es el manejo inicial más apropiado?",
    options: [
      { id: "A", label: "A", text: "Solicitar dímero D y, si es positivo, realizar angiotomografía pulmonar." },
      { id: "B", label: "B", text: "Iniciar trombólisis sistémica inmediata." },
      { id: "C", label: "C", text: "Solicitar ecocardiograma transesofágico urgente." },
      { id: "D", label: "D", text: "Administrar antibióticos de amplio espectro." },
    ],
    correctOptionId: "A",
    explanation: "El cuadro clínico es sugestivo de tromboembolismo pulmonar (TEP). En un paciente hemodinámicamente estable, el abordaje inicial consiste en estimar la probabilidad clínica (Wells o Ginebra). Si la probabilidad es baja o intermedia, debe solicitarse dímero D y confirmar posteriormente con angiotomografía pulmonar cuando esté indicado.",
    keyPoints: [
      "Cuando veas: Dolor torácico súbito. Disnea aguda. Taquicardia. Estabilidad hemodinámica.",
      "Debes pensar en: Tromboembolismo pulmonar.",
      "Tema: Tromboembolismo pulmonar.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el algoritmo diagnóstico del TEP.
La clave no es el dolor torácico.
La clave es:
La combinación de disnea súbita y taquicardia.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Disnea aguda.
• Dolor torácico.
• Hipoxemia leve.
• Taquicardia.
Esto obliga a sospechar:
Tromboembolismo pulmonar.
¿Qué debe hacerse primero?
Determinar:
Probabilidad clínica.
Si es baja o intermedia:
Solicitar:
Dímero D.
Si resulta positivo:
Realizar:
Angiotomografía pulmonar.
¿Cuándo se tromboliza?
Solo en:
TEP de alto riesgo.
Es decir:
• Hipotensión.
• Choque.
• Inestabilidad hemodinámica.
Hallazgos ausentes en este caso.
¿Por qué NO antibióticos?
No existen datos que sugieran:
Infección respiratoria.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Disnea intensa."
Y responden:
Trombólisis inmediata.
Sin embargo:
El dato decisivo es:
La estabilidad hemodinámica.
Esto obliga primero a:
Confirmar el diagnóstico.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Sospechar TEP.
2.	Calcular probabilidad clínica.
3.	Solicitar dímero D si corresponde.
4.	Confirmar con angiotomografía.
5.	Iniciar anticoagulación según resultados.
Perlas de examen
✅ La angiotomografía pulmonar es el estudio diagnóstico de elección.
✅ El dímero D tiene alto valor predictivo negativo.
✅ La trombólisis se reserva para TEP de alto riesgo.
✅ La taquicardia es uno de los hallazgos más frecuentes.
✅ La radiografía de tórax puede ser normal.
✅ El ECG puede mostrar taquicardia sinusal.
✅ La estabilidad hemodinámica define gran parte del manejo inicial.
Referencias
• ESC Guidelines for Acute Pulmonary Embolism.
• Harrison's Principles of Internal Medicine.
• Tintinalli's Emergency Medicine.
• UpToDate: Diagnosis of Acute Pulmonary Embolism.
• Braunwald's Heart Disease.`,
  },
  {
    id: "dr-q-342",
    examArea: "GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","gastroenterologia"],
    statement: "Mujer de 45 años consulta por hematemesis abundante y melena de inicio reciente. Durante la valoración presenta signos clínicos de hipovolemia leve. Se realiza endoscopia digestiva alta que evidencia una úlcera duodenal con sangrado activo en chorro.\n¿Cuál es la clasificación de Forrest y cuál es el manejo inicial más adecuado?",
    options: [
      { id: "A", label: "A", text: "Forrest III; inhibidor de bomba de protones oral y egreso." },
      { id: "B", label: "B", text: "Forrest IIc; observación hospitalaria." },
      { id: "C", label: "C", text: "Forrest Ia; terapia endoscópica urgente asociada a inhibidor de bomba de protones intravenoso." },
      { id: "D", label: "D", text: "Forrest IIb; erradicación ambulatoria de Helicobacter pylori." },
    ],
    correctOptionId: "C",
    explanation: "El sangrado activo en chorro corresponde a una lesión Forrest Ia, la categoría con mayor riesgo de resangrado. Requiere tratamiento endoscópico inmediato (inyección, termocoagulación o hemoclips) junto con inhibidores de bomba de protones intravenosos y reanimación hemodinámica.",
    keyPoints: [
      "Cuando veas: Hematemesis. Melena. Úlcera con sangrado activo. Inestabilidad o hipovolemia.",
      "Debes pensar en: Forrest Ia.",
      "Tema: Hemorragia digestiva alta.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la clasificación de Forrest.
La clave no es la úlcera.
La clave es:
El tipo de sangrado observado en la endoscopia.
¿Cómo se clasifica Forrest?
Forrest Ia:
• Sangrado activo en chorro.
Forrest Ib:
• Sangrado activo en babeo.
Forrest IIa:
• Vaso visible no sangrante.
Forrest IIb:
• Coágulo adherido.
Forrest IIc:
• Mancha plana pigmentada.
Forrest III:
• Base limpia.
¿Qué tiene esta paciente?
La descripción clásica es:
Sangrado activo en chorro.
Por tanto corresponde a:
Forrest Ia.
¿Qué manejo requiere?
1.	Reanimación hemodinámica.
2.	Inhibidor de bomba de protones IV.
3.	Endoscopia terapéutica urgente.
¿Qué IBP se utiliza?
Frecuentemente:
• Omeprazol IV.
• Pantoprazol IV.
¿Y Helicobacter pylori?
Debe investigarse y erradicarse posteriormente.
Pero:
No es la prioridad inmediata.
¿Cuál es la trampa del examen?
Muchos estudiantes leen:
"Antecedente de H. pylori."
Y responden:
Erradicación antibiótica.
Sin embargo:
El dato decisivo es:
El sangrado activo.
Esto obliga a:
Control endoscópico urgente.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar hemorragia digestiva alta.
2.	Revisar clasificación Forrest.
3.	Reconocer Forrest Ia.
4.	Iniciar IBP IV.
5.	Realizar hemostasia endoscópica urgente.
Perlas de examen
✅ Forrest Ia = sangrado activo en chorro.
✅ Forrest Ib = sangrado activo en babeo.
✅ Forrest IIa = vaso visible.
✅ Forrest IIb = coágulo adherido.
✅ Forrest III = base limpia.
✅ Forrest Ia tiene alto riesgo de resangrado.
✅ La hemostasia endoscópica es el tratamiento de elección.
Referencias
• Sleisenger and Fordtran's Gastrointestinal Disease.
• Harrison's Principles of Internal Medicine.
• ESGE Guideline for Nonvariceal Upper GI Bleeding.
• UpToDate: Peptic Ulcer Bleeding.
• ASGE Guidelines on Upper Gastrointestinal Hemorrhage.`,
  },
  {
    id: "dr-q-343",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Hombre de 50 años consulta por dolor abdominal súbito e intenso de inicio reciente. Al examen físico presenta abdomen rígido con signos de irritación peritoneal generalizada. Una radiografía en decúbito lateral evidencia aire libre subdiafragmático.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Pancreatitis aguda grave." },
      { id: "B", label: "B", text: "Colecistitis aguda complicada." },
      { id: "C", label: "C", text: "Perforación de úlcera péptica con neumoperitoneo." },
      { id: "D", label: "D", text: "Obstrucción intestinal mecánica." },
    ],
    correctOptionId: "C",
    explanation: "La presencia de dolor abdominal súbito, abdomen en tabla y neumoperitoneo en una radiografía simple es altamente sugestiva de perforación de una víscera hueca, siendo la perforación de una úlcera péptica una de las causas más frecuentes.",
    keyPoints: [
      "Cuando veas: Dolor epigástrico súbito. Abdomen rígido. Peritonitis. Aire libre subdiafragmático.",
      "Debes pensar en: Perforación de úlcera péptica.",
      "Tema: Abdomen agudo quirúrgico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las urgencias quirúrgicas más importantes.
La clave no es el dolor.
La clave es:
El neumoperitoneo.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Dolor súbito.
• Signos de peritonitis.
• Aire libre intraperitoneal.
Esto significa:
Perforación de una víscera hueca.
¿Cuál es la causa más frecuente en los exámenes?
La respuesta clásica es:
Úlcera péptica perforada.
¿Por qué aparece aire bajo el diafragma?
Porque el contenido gaseoso del tubo digestivo:
Escapa hacia la cavidad peritoneal.
Produciendo:
Neumoperitoneo.
¿Qué hallazgo físico es característico?
Abdomen en tabla.
Debido a:
Irritación peritoneal generalizada.
¿Cuál es la conducta?
• Reanimación inicial.
• Antibióticos de amplio espectro.
• Inhibidor de bomba de protones.
• Valoración quirúrgica urgente.
¿Por qué NO pancreatitis?
La pancreatitis puede producir:
Dolor epigástrico intenso.
Pero:
No produce neumoperitoneo.
¿Por qué NO obstrucción intestinal?
La radiografía mostraría:
Niveles hidroaéreos.
No aire libre subdiafragmático.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Dolor epigástrico."
Y responden:
Pancreatitis.
Sin embargo:
El dato decisivo es:
El aire libre subdiafragmático.
Esto prácticamente confirma:
Perforación de víscera hueca.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar dolor abdominal súbito.
2.	Reconocer peritonitis.
3.	Detectar neumoperitoneo.
4.	Diagnosticar perforación de víscera hueca.
5.	Pensar primero en úlcera péptica perforada.
Perlas de examen
✅ Aire libre subdiafragmático = neumoperitoneo hasta demostrar lo contrario.
✅ La úlcera duodenal perforada es una causa clásica de abdomen agudo.
✅ El abdomen rígido sugiere irritación peritoneal.
✅ Es una urgencia quirúrgica.
✅ La TAC es el estudio más sensible para detectar neumoperitoneo.
✅ Deben iniciarse antibióticos de amplio espectro precozmente.
✅ El retraso quirúrgico aumenta significativamente la mortalidad.
Referencias
• Schwartz's Principles of Surgery.
• Sabiston Textbook of Surgery.
• Harrison's Principles of Internal Medicine.
• Tintinalli's Emergency Medicine.
• UpToDate: Perforated Peptic Ulcer.`,
  },
  {
    id: "dr-q-344",
    examArea: "GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","gastroenterologia"],
    statement: "Mujer de 60 años consulta por dolor epigástrico intenso irradiado a la espalda, asociado a náuseas y múltiples episodios de vómito. Refiere intolerancia completa a la vía oral durante las últimas 24 horas. Los estudios muestran elevación significativa de lipasa sérica y tomografía compatible con pancreatitis aguda intersticial sin necrosis ni colecciones.\n¿Cuál es la orden médica más adecuada respecto al soporte nutricional?",
    options: [
      { id: "A", label: "A", text: "Mantener ayuno absoluto hasta normalización de la lipasa." },
      { id: "B", label: "B", text: "Iniciar nutrición parenteral total de forma temprana." },
      { id: "C", label: "C", text: "Reiniciar alimentación enteral temprana tan pronto sea tolerada." },
      { id: "D", label: "D", text: "Mantener ayuno durante 7 días y repetir tomografía." },
    ],
    correctOptionId: "C",
    explanation: "En la pancreatitis aguda leve o moderada se recomienda reiniciar la alimentación enteral precoz una vez disminuyan las náuseas y el dolor, incluso dentro de las primeras 24-48 horas. La nutrición enteral reduce complicaciones infecciosas, estancia hospitalaria y mortalidad en comparación con la nutrición parenteral.",
    keyPoints: [
      "Cuando veas: Pancreatitis aguda. Sin necrosis. Sin colecciones. Estabilidad clínica.",
      "Debes pensar en: Nutrición enteral temprana.",
      "Tema: Pancreatitis aguda.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los cambios más importantes en el manejo moderno de la pancreatitis.
La clave no es la lipasa.
La clave es:
La ausencia de complicaciones locales.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Pancreatitis aguda.
• TAC sin necrosis.
• Sin colecciones.
• Sin falla orgánica.
Esto corresponde a:
Pancreatitis aguda leve.
¿Qué se hacía antes?
Durante años se indicaba:
Ayuno prolongado.
Esperando:
Normalización de enzimas.
Actualmente esto es incorrecto.
¿Qué recomiendan las guías?
Alimentación enteral temprana.
Tan pronto como el paciente la tolere.
¿Por qué?
Porque:
• Preserva la barrera intestinal.
• Disminuye translocación bacteriana.
• Reduce infecciones.
• Disminuye estancia hospitalaria.
¿Es necesario esperar que la lipasa se normalice?
No.
La evolución clínica es más importante que:
Los valores enzimáticos.
¿Cuándo usar nutrición parenteral?
Solo cuando:
La vía enteral no sea posible o esté contraindicada.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan:
"Pancreatitis = ayuno."
Sin embargo:
Las guías actuales recomiendan:
Realimentación temprana.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Diagnosticar pancreatitis.
2.	Clasificar gravedad.
3.	Evaluar tolerancia gastrointestinal.
4.	Reiniciar vía enteral precozmente.
5.	Reservar nutrición parenteral para casos seleccionados.
Perlas de examen
✅ La nutrición enteral es superior a la nutrición parenteral.
✅ No es necesario esperar la normalización de amilasa o lipasa.
✅ La alimentación oral temprana es segura en pancreatitis leve.
✅ La nutrición enteral disminuye complicaciones infecciosas.
✅ El ayuno prolongado ya no se recomienda de rutina.
✅ La pancreatitis intersticial tiene mejor pronóstico que la necrotizante.
✅ La hidratación intravenosa temprana sigue siendo fundamental.
Referencias
• American College of Gastroenterology Guidelines on Acute Pancreatitis.
• IAP/APA Evidence-Based Guidelines.
• Harrison's Principles of Internal Medicine.
• Sleisenger and Fordtran's Gastrointestinal Disease.
• UpToDate: Nutrition Support in Acute Pancreatitis.`,
  },
  {
    id: "dr-q-345",
    examArea: "HEMATOLOGÍA",
    topic: "HEMATOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","hematologia"],
    statement: "Hombre de 45 años consulta por fatiga progresiva, disnea de esfuerzo y disminución de la tolerancia al ejercicio. Los exámenes muestran hemoglobina de 9 g/dL, volumen corpuscular medio (VCM) de 78 fL, ferritina disminuida y capacidad total de fijación de hierro (TIBC) elevada.\n¿Cuál es el diagnóstico más probable, la etiología más frecuente y el manejo inicial adecuado?",
    options: [
      { id: "A", label: "A", text: "Anemia de enfermedad crónica; proceso inflamatorio; eritropoyetina." },
      { id: "B", label: "B", text: "Anemia ferropénica; pérdida crónica de sangre gastrointestinal; suplementación con hierro y estudio de la fuente de sangrado." },
      { id: "C", label: "C", text: "Talasemia menor; trastorno hereditario; transfusión sanguínea." },
      { id: "D", label: "D", text: "Anemia hemolítica autoinmune; destrucción eritrocitaria; corticosteroides." },
    ],
    correctOptionId: "B",
    explanation: "La combinación de anemia microcítica, ferritina baja y TIBC elevada es característica de anemia ferropénica. En hombres adultos debe considerarse pérdida crónica de sangre gastrointestinal hasta demostrar lo contrario, por lo que además de corregir el déficit de hierro debe investigarse la causa subyacente.",
    keyPoints: [
      "Cuando veas: VCM bajo. Ferritina baja. TIBC elevada. Adulto masculino.",
      "Debes pensar en: Anemia ferropénica por sangrado gastrointestinal oculto.",
      "Tema: Anemias microcíticas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la interpretación del perfil férrico.
La clave no es la hemoglobina.
La clave es:
La ferritina.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Hb 9 g/dL.
• VCM 78 fL.
• Ferritina baja.
• TIBC elevada.
Esto corresponde a:
Anemia ferropénica.
¿Qué significa una ferritina baja?
Disminución de:
Las reservas corporales de hierro.
Es el marcador más específico de:
Deficiencia de hierro.
¿Por qué el TIBC está elevado?
Porque el organismo intenta:
Captar más hierro circulante.
¿Qué causa debe sospecharse en un hombre adulto?
La respuesta clásica de examen es:
Sangrado gastrointestinal crónico.
Hasta demostrar lo contrario.
¿Qué estudios deben solicitarse?
Habitualmente:
• Colonoscopia.
• Endoscopia digestiva alta.
Según el contexto clínico.
¿Cuál es el tratamiento inicial?
• Hierro oral.
• Corrección de la causa subyacente.
¿Por qué NO transfundir?
Porque una Hb de 9 g/dL en un paciente estable:
No constituye indicación rutinaria de transfusión.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Anemia microcítica."
Y responden:
Talasemia.
Sin embargo:
El dato decisivo es:
Ferritina baja + TIBC elevada.
Patrón clásico de:
Ferropenia.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar anemia microcítica.
2.	Revisar ferritina.
3.	Confirmar ferropenia.
4.	Buscar la causa.
5.	Iniciar hierro y corregir el origen del sangrado.
Perlas de examen
✅ Ferritina baja es el hallazgo más específico de ferropenia.
✅ TIBC elevada es característica de anemia ferropénica.
✅ En hombres y mujeres posmenopáusicas debe descartarse sangrado digestivo.
✅ La anemia ferropénica es la causa más frecuente de anemia en el mundo.
✅ El VCM suele disminuir progresivamente.
✅ La ferritina puede elevarse falsamente en estados inflamatorios.
✅ El tratamiento debe corregir la deficiencia y la causa subyacente.
Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• UpToDate: Iron Deficiency Anemia in Adults.
• British Society of Gastroenterology Guidelines on Iron Deficiency Anemia.`,
  }
];
