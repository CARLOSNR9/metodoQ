import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Banco universal MetodoQ · Dr. Q — examen tipo Univalle/UdeA/Caldas/UCC Pasto/Unimilitar
 */
export const DR_Q_COEXAM_QUESTIONS: TrainingQuestion[] = [
  {
    id: "dr-q-156",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement:
      "Masculino de 25 años es llevado al servicio de urgencias tras sufrir una herida por arma de fuego durante un atraco. Al examen físico presenta una lesión por proyectil en el tercio distal de la pierna derecha, con orificio de entrada en la cara anterolateral y orificio de salida posteromedial. Refiere dolor intenso en la extremidad. Se evidencia edema progresivo, parestesias, palidez distal y disminución marcada de los pulsos pedio y tibial posterior. El dolor aumenta con la movilización pasiva del pie.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Solicitar ecografía Doppler arterial de la extremidad." },
      { id: "B", label: "B", text: "Realizar angiotomografía de miembro inferior." },
      { id: "C", label: "C", text: "Observación clínica y reevaluación seriada de pulsos." },
      { id: "D", label: "D", text: "Exploración quirúrgica vascular urgente." },
    ],
    correctOptionId: "D",
    explanation: "El paciente presenta trauma penetrante con signos duros de lesión vascular e isquemia aguda de extremidad, incluyendo disminución de pulsos, palidez, parestesias y dolor intenso. La presencia de estos hallazgos constituye indicación de exploración quirúrgica inmediata sin retrasar el manejo para realizar estudios diagnósticos adicionales.",
    keyPoints: [
      "Cuando veas: trauma penetrante en extremidad con signos duros de lesión vascular (pulsos disminuidos o ausentes, palidez, parestesias, dolor intenso y dolor con movilización pasiva).",
      "Debes pensar en: isquemia arterial aguda por lesión vascular mayor → exploración quirúrgica vascular urgente sin retrasar para estudios de imagen.",
      "Los signos duros obligan a cirugía inmediata; los signos blandos permiten estudios vasculares no invasivos antes de decidir.",
      "El dolor que aumenta con la movilización pasiva del pie es un signo precoz de síndrome compartimental o isquemia crítica.",
      "Tema: Trauma vascular periférico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cirugía general porque evalúa una trampa frecuente: solicitar ecografía Doppler o angiotomografía cuando ya existen signos duros de lesión vascular e isquemia aguda de extremidad.

La clave no es demorar el manejo para confirmar con estudios de imagen en presencia de signos duros.
La clave es:
Trauma penetrante + signos duros (pulsos disminuidos, palidez, parestesias, dolor intenso, dolor con movilización pasiva) → exploración quirúrgica vascular urgente.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Masculino de 25 años con herida por arma de fuego en tercio distal de pierna derecha (orificio de entrada anterolateral, salida posteromedial).
• Edema progresivo, parestesias y palidez distal.
• Disminución marcada de pulsos pedio y tibial posterior.
• Dolor intenso que aumenta con movilización pasiva del pie.
• Cuadro compatible con lesión vascular arterial mayor e isquemia aguda de extremidad.

Recordemos el trauma vascular periférico:
• Signos duros: pulsos ausentes o disminuidos, sangrado activo, hematoma expansivo, soplo o thrill, isquemia evidente (palidez, parestesias, parálisis, dolor desproporcionado).
• Signos duros = indicación de exploración quirúrgica inmediata sin estudios previos que retrasen el manejo.
• Signos blandos (historia de sangrado moderado, lesión en trayecto vascular, déficit neurológico leve) → estudios no invasivos (Doppler, angioTC) antes de decidir.
• ATLS y guías EAST/WTA: no retrasar cirugía cuando hay isquemia clínica evidente.

Por lo tanto:
No corresponde ecografía Doppler, angiotomografía ni observación seriada de pulsos.
La conducta más adecuada es exploración quirúrgica vascular urgente.

¿Por qué la opción D es la respuesta correcta?
La presencia de signos duros de lesión vascular (disminución de pulsos, palidez, parestesias, dolor intenso con movilización pasiva) constituye indicación absoluta de exploración quirúrgica inmediata para restaurar flujo y prevenir pérdida de la extremidad.

¿Por qué fallan las otras opciones?
Opción A (ecografía Doppler arterial): útil en signos blandos o evaluación selectiva, pero retrasa el manejo definitivo cuando ya hay isquemia clínica evidente.
Opción B (angiotomografía): puede definir anatomía vascular, pero no debe retrasar la cirugía ante signos duros de isquemia aguda.
Opción C (observación y reevaluación seriada): inaceptable con isquemia activa; cada minuto de retraso aumenta el riesgo de daño neuromuscular irreversible.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Antes de operar hay que confirmar la lesión con un estudio de imagen."
Pero el examen exige reconocer que los signos duros de lesión vascular son indicación quirúrgica inmediata.
El dato decisivo es:
Pulsos disminuidos + palidez + parestesias + dolor con movilización pasiva → cirugía urgente, no más estudios.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar extremidad tras trauma penetrante: pulsos, color, sensibilidad, movilidad y dolor.
2. Clasificar signos duros vs blandos de lesión vascular.
3. Ante signos duros → exploración quirúrgica vascular urgente sin retrasar.
4. Reservar estudios de imagen para pacientes hemodinámicamente estables con signos blandos o lesiones en zona de riesgo sin isquemia evidente.

Perlas de examen
✅ Signos duros = cirugía inmediata; no Doppler ni angioTC que retrasen el manejo.
✅ Pulsos disminuidos o ausentes + palidez + parestesias = isquemia arterial aguda hasta demostrar lo contrario.
✅ El dolor con movilización pasiva sugiere isquemia crítica o síndrome compartimental incipiente.
✅ Signos blandos permiten estudios no invasivos antes de decidir exploración quirúrgica.
✅ En trauma vascular, el tiempo isquémico determina la viabilidad de la extremidad.
✅ No confundir estabilidad hemodinámica sistémica con viabilidad de la extremidad.

Referencias
• ATLS 11th Edition — Manejo de trauma vascular periférico.
• Eastern Association for the Surgery of Trauma (EAST) Practice Management Guidelines.
• Western Trauma Association Critical Decisions in Trauma.
• Rutherford's Vascular Surgery and Endovascular Therapy.
• Feliciano DV. Peripheral Vascular Injuries. Trauma, 9th ed.`,
  },
  {
    id: "dr-q-157",
    examArea: "ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","endocrinologia"],
    statement:
      "Paciente masculino de 22 años consulta para estudio etiológico de diabetes mellitus diagnosticada recientemente. Tiene IMC de 21 kg/m², niega antecedentes familiares de diabetes tipo 2 y no presenta signos clínicos de resistencia a la insulina. Los niveles de glucosa permanecen elevados a pesar del tratamiento inicial. Usted sospecha una etiología autoinmune de la enfermedad.\n¿Cuál de los siguientes estudios tiene mayor utilidad para orientar la causa de la diabetes en este paciente?",
    options: [
      { id: "A", label: "A", text: "Anticuerpos anti GAD65." },
      { id: "B", label: "B", text: "Anticuerpos anti islote pancreático." },
      { id: "C", label: "C", text: "Péptido C." },
      { id: "D", label: "D", text: "Insulina basal." },
    ],
    correctOptionId: "A",
    explanation: "Los anticuerpos anti GAD65 constituyen uno de los marcadores más sensibles y utilizados para identificar diabetes autoinmune. Su detección permite diferenciar formas autoinmunes de diabetes de otros tipos de diabetes en pacientes jóvenes sin evidencia de resistencia a la insulina.",
    keyPoints: [
      "Cuando veas: paciente joven delgado (IMC normal) con diabetes reciente, sin antecedentes familiares de DM2 ni signos de resistencia a la insulina, y glucosa persistentemente elevada.",
      "Debes pensar en: diabetes autoinmune (DM1 o LADA) → solicitar autoanticuerpos, siendo anti-GAD65 el marcador más sensible y utilizado.",
      "El péptido C evalúa reserva funcional pancreática, no la etiología autoinmune de la enfermedad.",
      "La ausencia de obesidad e insulinorresistencia obliga a descartar DM2 y buscar etiología autoinmune.",
      "Tema: Clasificación etiológica de la diabetes mellitus.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de endocrinología porque evalúa una trampa frecuente: solicitar péptido C o insulina basal para clasificar etiológicamente la diabetes cuando el escenario clínico apunta a enfermedad autoinmune.

La clave no es medir reserva funcional pancreática (péptido C) ni niveles de insulina basal.
La clave es:
Paciente joven delgado + diabetes reciente + sin obesidad ni insulinorresistencia + sospecha de etiología autoinmune → anticuerpos anti-GAD65.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Masculino de 22 años con diabetes mellitus diagnosticada recientemente.
• IMC 21 kg/m² (peso normal), sin antecedentes familiares de DM2.
• Sin signos clínicos de resistencia a la insulina (acantosis, obesidad central, etc.).
• Glucosa persistentemente elevada a pesar del tratamiento inicial.
• Perfil clínico compatible con diabetes autoinmune (DM1 o LADA), no DM2.

Recordemos la clasificación etiológica de la diabetes:
• DM1 / autoinmune: destrucción de células beta mediada por autoanticuerpos (anti-GAD65, anti-IA2, anti-insulina, anti-ZnT8).
• Anti-GAD65: marcador más sensible y frecuentemente utilizado para identificar diabetes autoinmune.
• Péptido C: refleja secreción endógena de insulina (reserva funcional), no distingue etiología autoinmune de otras formas.
• Insulina basal: puede estar elevada por resistencia periférica o baja por destrucción beta; no es marcador de autoinmunidad.
• LADA: diabetes autoinmune de inicio tardío en adultos jóvenes con presentación similar.

Por lo tanto:
No corresponde péptido C ni insulina basal como primer estudio etiológico.
El estudio con mayor utilidad es anticuerpos anti-GAD65.

¿Por qué la opción A es la respuesta correcta?
Los anticuerpos anti-GAD65 constituyen uno de los marcadores más sensibles y utilizados para identificar diabetes autoinmune, permitiendo diferenciar formas autoinmunes de otros tipos de diabetes en pacientes jóvenes sin evidencia de resistencia a la insulina.

¿Por qué fallan las otras opciones?
Opción B (anticuerpos anti islote pancreático): menos estandarizados y con menor disponibilidad; anti-GAD65 es el marcador de referencia en la práctica clínica.
Opción C (péptido C): evalúa reserva funcional pancreática (cuánta insulina produce el páncreas), no confirma etiología autoinmune.
Opción D (insulina basal): refleja niveles circulantes en un momento dado; no identifica autoinmunidad y puede ser engañosa según la fase evolutiva.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"En un paciente joven con diabetes hay que medir péptido C para saber si es tipo 1 o tipo 2."
Pero el examen pregunta cuál estudio orienta la causa autoinmune, no la reserva funcional.
El dato decisivo es:
Joven delgado sin insulinorresistencia + sospecha autoinmune → autoanticuerpos (anti-GAD65), no péptido C.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Caracterizar fenotipo clínico: edad, IMC, antecedentes familiares, signos de insulinorresistencia.
2. Si el perfil no es de DM2 (delgado, joven, sin resistencia) → sospechar etiología autoinmune.
3. Solicitar autoanticuerpos (anti-GAD65 como primer marcador).
4. Reservar péptido C para evaluar reserva funcional, no para clasificar etiología autoinmune.

Perlas de examen
✅ Anti-GAD65 = marcador de referencia para diabetes autoinmune en el examen.
✅ Péptido C mide reserva funcional; no distingue autoinmune de otras etiologías.
✅ IMC normal + joven + sin FH de DM2 → pensar DM1/LADA, no DM2.
✅ La insulina basal sola no clasifica etiología; puede variar según fase de la enfermedad.
✅ Anti-islote pancreático existe pero anti-GAD65 es el estándar clínico.
✅ Clasificar etiología cambia el manejo: autoinmune requiere insulinoterapia precoz.

Referencias
• American Diabetes Association (ADA) Standards of Care in Diabetes.
• EASD Clinical Practice Recommendations.
• Harrison's Principles of Internal Medicine — Diabetes Mellitus.
• Williams Textbook of Endocrinology.
• Eisenbarth GS. Type 1 Diabetes: A Predictive and Preventive Disease.`,
  },
  {
    id: "dr-q-158",
    examArea: "ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","endocrinologia"],
    statement:
      "Mujer de 44 años con IMC de 29 kg/m² y diagnóstico reciente de diabetes mellitus tipo 2. Se encuentra en tratamiento con metformina en monoterapia. Acude a control aportando laboratorios que muestran HbA1c de 9% y glucemia en ayunas de 280 mg/dL. Niega pérdida de peso, poliuria severa, polidipsia intensa o síntomas sugestivos de catabolismo. Al examen físico no se encuentran hallazgos relevantes.\n¿Cómo se ajustaría su tratamiento?",
    options: [
      { id: "A", label: "A", text: "Cambios en estilo de vida, metformina a dosis plena y añadir un inhibidor del cotransportador sodio-glucosa tipo 2 (iSGLT2)." },
      { id: "B", label: "B", text: "Cambios en estilo de vida, metformina a dosis plena y añadir una sulfonilurea." },
      { id: "C", label: "C", text: "Cambios en estilo de vida, metformina a dosis plena y empezar insulinoterapia." },
      { id: "D", label: "D", text: "Cambios en estilo de vida, metformina a dosis plena, iniciar insulinoterapia y añadir un iSGLT2." },
    ],
    correctOptionId: "A",
    explanation: "La paciente presenta una diabetes mellitus tipo 2 insuficientemente controlada con metformina en monoterapia. Sin embargo, no presenta síntomas de hiperglucemia severa ni datos sugestivos de déficit importante de insulina. En este contexto, las guías actuales recomiendan intensificar el tratamiento con un segundo agente antihiperglucemiante antes de considerar insulinoterapia.",
    keyPoints: [
      "Cuando veas: DM2 con HbA1c ≥9% en monoterapia con metformina, glucemia elevada pero sin síntomas catabólicos (sin pérdida de peso, poliuria severa ni polidipsia intensa).",
      "Debes pensar en: intensificación con terapia dual (metformina a dosis plena + segundo agente) antes de insulinoterapia.",
      "La insulinoterapia se reserva cuando hay síntomas de hiperglucemia severa, catabolismo o fallo de terapia dual.",
      "Los iSGLT2 aportan beneficio adicional con pérdida de peso y bajo riesgo de hipoglucemia en monoterapia o combinación.",
      "Tema: Intensificación del tratamiento en diabetes mellitus tipo 2.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de endocrinología porque evalúa una trampa frecuente: iniciar insulinoterapia solo por cifras elevadas de HbA1c y glucemia en ayunas, sin evaluar si hay síntomas catabólicos que obliguen insulina.

La clave no es iniciar insulina de inmediato por una glucemia de 280 mg/dL o HbA1c del 9%.
La clave es:
DM2 insuficientemente controlada sin síntomas catabólicos → intensificar con terapia dual (metformina plena + iSGLT2) antes de considerar insulina.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 44 años con DM2, IMC 29 kg/m², en metformina en monoterapia.
• HbA1c 9% y glucemia en ayunas 280 mg/dL (control insuficiente).
• Niega pérdida de peso, poliuria severa, polidipsia intensa o síntomas de catabolismo.
• Examen físico sin hallazgos relevantes.
• Cuadro de hiperglucemia crónica mal controlada sin urgencia metabólica aguda.

Recordemos la intensificación en DM2 según ADA/EASD:
• HbA1c por encima de meta → intensificar tratamiento.
• Sin síntomas catabólicos ni déficit insulinico severo → agregar segundo agente antes de insulina.
• iSGLT2: indicados en DM2 con beneficio cardiovascular y renal; pérdida de peso modesta; bajo riesgo de hipoglucemia.
• Insulinoterapia: reservada para síntomas de hiperglucemia severa, catabolismo, contraindicación a otros fármacos o fallo de terapia dual/triple.
• Metformina debe optimizarse a dosis plena tolerada como base de cualquier escalada.

Por lo tanto:
No corresponde iniciar insulina ni insulinoterapia combinada con iSGLT2 de entrada.
La conducta adecuada es cambios en estilo de vida, metformina a dosis plena y añadir un iSGLT2.

¿Por qué la opción A es la respuesta correcta?
La paciente tiene DM2 mal controlada pero sin síntomas de hiperglucemia severa ni catabolismo; las guías actuales recomiendan intensificar con un segundo agente antihiperglucemiante (iSGLT2) antes de considerar insulinoterapia.

¿Por qué fallan las otras opciones?
Opción B (sulfonilurea): opción válida en algunos escenarios, pero los iSGLT2 tienen ventajas en peso y riesgo de hipoglucemia; en el contexto del examen, iSGLT2 es la escalada preferida según guías actuales.
Opción C (insulinoterapia): reservada para síntomas catabólicos o fallo de terapia oral; esta paciente no tiene poliuria severa, polidipsia intensa ni pérdida de peso.
Opción D (insulina + iSGLT2): combina insulinoterapia innecesaria con iSGLT2; no hay indicación de insulina en ausencia de síntomas severos.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Glucemia de 280 mg/dL e HbA1c del 9% = insulina inmediata."
Pero el examen exige distinguir hiperglucemia crónica mal controlada de urgencia metabólica con catabolismo.
El dato decisivo es:
HbA1c elevada + sin síntomas catabólicos → terapia dual, no insulina.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar DM2 mal controlada (HbA1c ≥9% o por encima de meta individual).
2. Evaluar síntomas de hiperglucemia severa o catabolismo (pérdida de peso, poliuria/polidipsia intensas).
3. Sin catabolismo → optimizar metformina y añadir segundo agente (iSGLT2, GLP-1 RA u otro según perfil).
4. Reservar insulinoterapia para síntomas severos, contraindicaciones o fallo de terapia combinada.

Perlas de examen
✅ HbA1c ≥9% requiere intensificación, pero no siempre insulina de inmediato.
✅ Sin síntomas catabólicos → terapia dual antes de insulina.
✅ iSGLT2: pérdida de peso, bajo riesgo de hipoglucemia, beneficio CV/renal.
✅ Insulina se indica con poliuria/polidipsia severas, pérdida de peso o catabolismo.
✅ Metformina a dosis plena es la base antes de cualquier escalada terapéutica.
✅ No confundir cifras altas crónicas con urgencia metabólica aguda.

Referencias
• American Diabetes Association (ADA) Standards of Care in Diabetes.
• European Association for the Study of Diabetes (EASD) Consensus Report.
• Harrison's Principles of Internal Medicine — Diabetes Mellitus.
• Williams Textbook of Endocrinology.
• Davies MJ et al. Management of Hyperglycemia in Type 2 Diabetes (ADA/EASD).`,
  },
  {
    id: "dr-q-159",
    examArea: "PEDIATRÍA",
    topic: "PEDIATRÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","pediatria"],
    statement:
      "Niño de 1 año es llevado a consulta de control por sus padres. La anamnesis no revela antecedentes de importancia y el examen físico general es normal. Durante la evaluación oftalmológica se documenta leucocoria en el ojo derecho. No se reportan otros hallazgos relevantes.\n¿Cuál es la impresión diagnóstica y la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Retinoblastoma, solicitar ecografía ocular." },
      { id: "B", label: "B", text: "Estrabismo, realizar oclusión con parche en el ojo sano." },
      { id: "C", label: "C", text: "Retinoblastoma, solicitar toma de biopsia con aguja fina." },
      { id: "D", label: "D", text: "Estrabismo, solicitar resonancia magnética contrastada." },
    ],
    correctOptionId: "A",
    explanation: "La leucocoria en un lactante o niño pequeño debe considerarse retinoblastoma hasta demostrar lo contrario. La ecografía ocular constituye una de las herramientas diagnósticas iniciales más importantes, ya que permite identificar masas intraoculares y calcificaciones características del tumor.",
    keyPoints: [
      "Cuando veas: leucocoria (reflejo blanco pupilar) en un lactante o niño pequeño aparentemente sano durante examen oftalmológico de rutina.",
      "Debes pensar en: retinoblastoma hasta demostrar lo contrario → ecografía ocular como estudio diagnóstico inicial.",
      "Nunca realizar biopsia con aguja fina en retinoblastoma por riesgo de diseminación extraocular.",
      "La leucocoria es el signo de presentación más frecuente del retinoblastoma, no confundir con estrabismo simple.",
      "Tema: Tumores oculares en pediatría.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de pediatría porque evalúa una trampa frecuente: minimizar la leucocoria como estrabismo benigno o proponer biopsia cuando se trata del tumor intraocular maligno más frecuente de la infancia.

La clave no es ocluir con parche ni solicitar biopsia con aguja fina.
La clave es:
Leucocoria en lactante → retinoblastoma hasta demostrar lo contrario → ecografía ocular como estudio inicial.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Niño de 1 año en consulta de control, aparentemente sano.
• Anamnesis y examen físico general normales.
• Durante evaluación oftalmológica: leucocoria en ojo derecho (reflejo pupilar blanco).
• Hallazgo ocular aislado sin otros signos sistémicos.
• Cuadro altamente sugestivo de retinoblastoma hasta demostrar lo contrario.

Recordemos el retinoblastoma en pediatría:
• Tumor intraocular maligno más frecuente en la infancia (pico 1-2 años).
• Leucocoria: signo de presentación más común (reflejo rojo ausente o blanco).
• Otras causas de leucocoria: catarata congénita, retinopatía de prematuridad, persistencia vítreo primario hiperplásico, endoftalmitis.
• Ecografía ocular: estudio inicial clave; identifica masa intraocular y calcificaciones características (hiperecogenicidad con sombra acústica).
• Biopsia con aguja fina: contraindicada por riesgo de siembra tumoral y diseminación extraocular.

Por lo tanto:
No corresponde manejo de estrabismo con parche ni biopsia con aguja fina.
La impresión diagnóstica es retinoblastoma y la conducta es solicitar ecografía ocular.

¿Por qué la opción A es la respuesta correcta?
La leucocoria en un lactante debe considerarse retinoblastoma hasta demostrar lo contrario; la ecografía ocular es una de las herramientas diagnósticas iniciales más importantes por su capacidad de identificar masas intraoculares y calcificaciones características.

¿Por qué fallan las otras opciones?
Opción B (estrabismo + oclusión con parche): la leucocoria no es estrabismo; ocluir sin diagnóstico retrasa la identificación de un tumor maligno.
Opción C (retinoblastoma + biopsia con aguja fina): aunque el diagnóstico es correcto, la biopsia está contraindicada por riesgo de diseminación tumoral extraocular.
Opción D (estrabismo + RM contrastada): diagnóstico erróneo; la RM puede ser complementaria pero no sustituye la ecografía inicial ni justifica ignorar la leucocoria.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"El niño está sano, probablemente es estrabismo leve."
Pero el examen exige reconocer que la leucocoria es una emergencia oncológica ocular hasta demostrar lo contrario.
El dato decisivo es:
Leucocoria en lactante = retinoblastoma hasta demostrar lo contrario → ecografía ocular, nunca biopsia.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar leucocoria en examen oftalmológico pediátrico.
2. Considerar retinoblastoma hasta demostrar lo contrario.
3. Solicitar ecografía ocular como estudio inicial (masa + calcificaciones).
4. Evitar biopsia; confirmar con oftalmología/oncología y estudios de extensión según hallazgos.

Perlas de examen
✅ Leucocoria en lactante = retinoblastoma hasta demostrar lo contrario.
✅ Ecografía ocular: calcificaciones intraoculares son altamente sugestivas.
✅ Nunca biopsiar retinoblastoma: riesgo de diseminación extraocular.
✅ No confundir leucocoria con estrabismo; son entidades diferentes.
✅ Retinoblastoma: tumor intraocular maligno más frecuente en la infancia.
✅ El examen del reflejo rojo en pediatría puede salvar la vida del niño.

Referencias
• Nelson Textbook of Pediatrics — Retinoblastoma.
• American Academy of Ophthalmology Guidelines.
• Shields CL, Shields JA. Retinoblastoma Review.
• UpToDate: Clinical Presentation and Diagnosis of Retinoblastoma.
• Kivela T. The Epidemiological Challenge of the Most Frequent Eye Cancer.`,
  },
  {
    id: "dr-q-160",
    examArea: "OFTALMOLOGÍA",
    topic: "OFTALMOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","oftalmologia"],
    statement:
      "Hombre de 25 años consulta al servicio de urgencias tras sufrir trauma contuso en el ojo izquierdo durante una riña callejera. Refiere visión borrosa posterior al evento. Al examen oftalmológico se evidencia hifema grado II. La presión intraocular se encuentra dentro de límites normales y no se identifican otras alteraciones oculares asociadas.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Manejo ambulatorio con tratamiento tópico, analgésicos, reposo y control por oftalmología." },
      { id: "B", label: "B", text: "Manejo intrahospitalario, realizar oclusión con parche, tratamiento tópico y antibiótico, analgésicos, reposo y observación." },
      { id: "C", label: "C", text: "Realizar lavado quirúrgico urgente de cámara anterior." },
      { id: "D", label: "D", text: "Traslado inmediato a quirófano." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un hifema traumático grado II. Debido al riesgo de resangrado, aumento de la presión intraocular y otras complicaciones durante los primeros días posteriores al trauma, se recomienda observación hospitalaria, reposo, protección ocular y seguimiento estrecho por oftalmología.",
    keyPoints: [
      "Cuando veas: hifema traumático grado II tras trauma ocular contuso, con presión intraocular normal pero riesgo de resangrado y complicaciones en los primeros días.",
      "Debes pensar en: hospitalización con reposo, protección ocular (parche), tratamiento tópico, analgésicos y observación estrecha por oftalmología.",
      "El hifema grado II (1/3 a 1/2 de la cámara anterior) requiere manejo intrahospitalario aunque la PIO esté normal al ingreso.",
      "El riesgo de resangrado y aumento de PIO es máximo durante los primeros 3-5 días post-trauma (rebleed).",
      "Tema: Hifema traumático.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de oftalmología porque evalúa una trampa frecuente: dar de alta al paciente con manejo ambulatorio solo porque la presión intraocular se encuentra normal al momento del examen.

La clave no es el manejo ambulatorio ni el lavado quirúrgico urgente de cámara anterior.
La clave es:
Hifema traumático grado II → hospitalización + reposo + protección ocular + tratamiento tópico + observación estrecha.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 25 años con trauma contuso en ojo izquierdo (riña callejera).
• Visión borrosa posterior al evento.
• Hifema grado II (sangre ocupa entre 1/3 y 1/2 de la cámara anterior).
• Presión intraocular dentro de límites normales al examen inicial.
• Sin otras alteraciones oculares asociadas identificadas.
• Cuadro de hifema traumático moderado con riesgo de complicaciones en días siguientes.

Recordemos el hifema traumático:
• Clasificación por grado: I (<1/3), II (1/3-1/2), III (>1/2), IV (total/"bola ocho").
• Complicaciones: resangrado (rebleed, pico días 3-5), hipertensión ocular, tinción hemática corneal, glaucoma secundario.
• Manejo grado I-II sin complicaciones: hospitalización, reposo en cama, elevación de cabecera, protección ocular (parche/escudo), cicloplejía, esteroides tópicos, analgésicos; evitar AAS/AINEs.
• PIO normal al ingreso no excluye aumento posterior; requiere monitorización seriada.
• Lavado quirúrgico: reservado para hifema total, PIO refractaria, tinción corneal o rebleed masivo.

Por lo tanto:
No corresponde manejo ambulatorio ni lavado quirúrgico urgente.
La conducta más adecuada es manejo intrahospitalario con oclusión, tratamiento tópico, analgésicos, reposo y observación.

¿Por qué la opción B es la respuesta correcta?
El hifema grado II conlleva riesgo significativo de resangrado, aumento de PIO y otras complicaciones durante los primeros días; se recomienda observación hospitalaria, reposo, protección ocular y seguimiento estrecho por oftalmología.

¿Por qué fallan las otras opciones?
Opción A (manejo ambulatorio): insuficiente para hifema grado II; el riesgo de rebleed y complicaciones requiere vigilancia hospitalaria.
Opción C (lavado quirúrgico urgente): indicado en hifema total, PIO refractaria o complicaciones severas; no en hifema grado II sin complicaciones iniciales.
Opción D (traslado inmediato a quirófano): no hay indicación quirúrgica urgente; el manejo inicial es conservador con observación hospitalaria.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"La presión intraocular está normal, puede irse a casa con gotas."
Pero el examen exige reconocer que el hifema grado II requiere hospitalización por riesgo de resangrado y complicaciones tardías.
El dato decisivo es:
Hifema grado II + trauma reciente → hospitalización y observación, independientemente de PIO normal inicial.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Clasificar el grado de hifema traumático (I-IV).
2. Evaluar PIO, extensión del sangrado y complicaciones asociadas.
3. Hifema grado II → hospitalización, reposo, protección ocular, tratamiento tópico y analgésicos.
4. Monitorizar PIO seriadamente; considerar cirugía solo ante hifema total, PIO refractaria o rebleed masivo.

Perlas de examen
✅ Hifema grado II → hospitalización, no manejo ambulatorio.
✅ PIO normal al ingreso no descarta hipertensión ocular posterior.
✅ Rebleed: máximo riesgo días 3-5 post-trauma; reposo y protección ocular son clave.
✅ Evitar AAS y AINEs por riesgo de resangrado.
✅ Lavado quirúrgico: hifema total ("bola ocho") o PIO refractaria, no grado II inicial.
✅ No confundir hifema moderado (grado II) con hifema total que requiere cirugía urgente.

Referencias
• American Academy of Ophthalmology Preferred Practice Pattern — Traumatic Hyphema.
• Kanski Clinical Ophthalmology.
• Vaughan & Asbury General Ophthalmology.
• UpToDate: Traumatic Hyphema.
• Gharaibeh A et al. Traumatic Hyphema Management Guidelines.`,
  },
  {
    id: "dr-q-161",
    examArea: "OFTALMOLOGÍA",
    topic: "OFTALMOLOGÍA",
    difficulty: "hard",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","oftalmologia"],
    statement:
      "Estudiante universitario consulta al servicio de urgencias tras sufrir trauma ocular contuso por impacto de una piedra durante una protesta pública. Refiere dolor ocular intenso (EVA 10/10), fotofobia y epífora. Al examen físico se evidencia un hifema en \"bola ocho\" (eight-ball hyphema) que ocupa completamente la cámara anterior. La tonometría digital sugiere aumento de la presión intraocular. No es posible evaluar adecuadamente las estructuras intraoculares debido a la magnitud del sangrado.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Realizar lavado quirúrgico urgente de cámara anterior." },
      { id: "B", label: "B", text: "Realizar oclusión con parche, lavado con solución salina y antibiótico oral." },
      { id: "C", label: "C", text: "Tratamiento ambulatorio con medicamentos tópicos y orales, con seguimiento estricto." },
      { id: "D", label: "D", text: "Hospitalización, tratamiento endovenoso e interconsulta con oftalmología." },
    ],
    correctOptionId: "A",
    explanation: "El hifema en \"bola ocho\" corresponde a un hifema total asociado frecuentemente a hipertensión ocular significativa. Este hallazgo representa una urgencia oftalmológica debido al alto riesgo de daño irreversible del nervio óptico, tinción hemática corneal y pérdida visual permanente, por lo que requiere manejo quirúrgico urgente.",
    keyPoints: [
      "Cuando veas: trauma ocular contuso con hifema en \"bola ocho\" (hifema total), hipertensión intraocular y imposibilidad de evaluar estructuras intraoculares.",
      "Debes pensar en: hifema traumático complicado — urgencia oftalmológica con indicación de lavado quirúrgico urgente de cámara anterior.",
      "El hifema en \"bola ocho\" ocupa completamente la cámara anterior y se asocia frecuentemente a hipertensión ocular significativa.",
      "La tinción hemática corneal y el daño irreversible del nervio óptico son complicaciones que exigen intervención quirúrgica inmediata, no manejo ambulatorio.",
      "Tema: Hifema traumático complicado.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de oftalmología porque evalúa el manejo del hifema traumático complicado, pidiendo diferenciar el hifema total en "bola ocho" con hipertensión ocular de formas menos graves que pueden manejarse de forma conservadora.

La clave no es reposo ambulatorio con parche, oclusión con lavado tópico ni hospitalización médica sin intervención quirúrgica.
La clave es:
Trauma ocular contuso + hifema en "bola ocho" (hifema total) + aumento de presión intraocular + imposibilidad de evaluar estructuras intraoculares → urgencia oftalmológica con indicación de lavado quirúrgico urgente de cámara anterior.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Estudiante universitario con trauma ocular contuso por impacto de piedra.
• Dolor ocular intenso (EVA 10/10), fotofobia y epífora.
• Hifema en "bola ocho" que ocupa completamente la cámara anterior.
• Tonometría digital con aumento de presión intraocular.
• Imposibilidad de evaluar adecuadamente las estructuras intraoculares por la magnitud del sangrado.

Recordemos hifema traumático y sus grados de gravedad:
• Hifema parcial: puede manejarse con reposo, cabecera elevada, cicloplejía y seguimiento estrecho.
• Hifema total ("eight-ball" o "bola ocho"): sangre ocupa toda la cámara anterior; forma grave asociada a hipertensión ocular significativa.
• Complicaciones del hifema total: hipertensión ocular → daño irreversible del nervio óptico; tinción hemática corneal → pérdida visual permanente; resangrado y glaucoma secundario.
• Indicación quirúrgica: hifema total con hipertensión ocular no controlada, riesgo de tinción corneal o imposibilidad de evaluar el segmento posterior.

Por lo tanto:
El hifema en "bola ocho" con hipertensión ocular representa una urgencia oftalmológica que requiere lavado quirúrgico urgente de cámara anterior para prevenir daño irreversible del nervio óptico y tinción hemática corneal.

¿Por qué la opción A es la respuesta correcta?
El lavado quirúrgico urgente de cámara anterior es la conducta indicada en hifema total ("bola ocho") con hipertensión ocular, porque elimina el sangre de la cámara anterior, reduce la presión intraocular y permite evaluar las estructuras intraoculares.

¿Por qué fallan las otras opciones?
Opción B (oclusión con parche, lavado con solución salina y antibiótico oral): manejo conservador para hifemas leves; el parche puede empeorar la hipertensión ocular y no resuelve un hifema total con presión elevada.
Opción C (tratamiento ambulatorio con medicamentos tópicos y orales): insuficiente ante hifema total con hipertensión ocular y riesgo de daño irreversible; requiere intervención quirúrgica urgente.
Opción D (hospitalización, tratamiento endovenoso e interconsulta con oftalmología): la hospitalización e interconsulta son apropiadas, pero sin lavado quirúrgico urgente no se resuelve la urgencia; la intervención quirúrgica es el paso decisivo.

¿Cuál es la trampa del examen?
Muchos estudiantes leen:
"Hifema traumático." Y responden: Reposo y observación.
Pero el hifema en "bola ocho" no es un hifema leve; es hifema total con hipertensión ocular y riesgo de pérdida visual permanente.
Aquí el dato decisivo es:
Hifema que ocupa completamente la cámara anterior + presión intraocular elevada = urgencia quirúrgica, no manejo conservador.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Clasificar la gravedad del hifema (parcial vs total/"bola ocho").
2. Medir presión intraocular y evaluar visibilidad de estructuras intraoculares.
3. Hifema total con hipertensión ocular → lavado quirúrgico urgente de cámara anterior.
4. Monitorizar complicaciones: resangrado, glaucoma, tinción hemática corneal.
5. No usar parche ocular en hifema con hipertensión ocular.

Perlas de examen
✅ "Bola ocho" = hifema total = urgencia oftalmológica quirúrgica.
✅ Hipertensión ocular + hifema total → riesgo de daño del nervio óptico.
✅ Tinción hemática corneal = secuela visual permanente si no se interviene.
✅ Hifema leve: reposo + cabecera elevada + seguimiento; hifema total: cirugía.
✅ Parche ocular contraindicado si hay hipertensión ocular asociada.

Referencias
• American Academy of Ophthalmology Preferred Practice Pattern: Traumatic Hyphema.
• Kanski Clinical Ophthalmology.
• Vaughan & Asbury General Ophthalmology.
• UpToDate: Traumatic hyphema — Treatment and prognosis.`,
  },
  {
    id: "dr-q-162",
    examArea: "GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","gastroenterologia"],
    statement:
      "Mujer de 25 años consulta por cuadro de dolor abdominal crónico acompañado de diarrea de larga evolución, rectorragia ocasional, urgencia rectal y pérdida de aproximadamente 7 kg de peso en los últimos 3 meses. Al examen físico presenta signos de desnutrición y dolor a la palpación de la fosa ilíaca derecha. Se realiza colonoscopia que evidencia úlceras aftosas y lesiones con distribución discontinua. En el estudio anatomopatológico se describen granulomas no caseificantes.\nCon base en estos hallazgos, ¿cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Enfermedad de Crohn." },
      { id: "B", label: "B", text: "Colitis ulcerosa." },
      { id: "C", label: "C", text: "Enterocolitis necrotizante." },
      { id: "D", label: "D", text: "Síndrome de intestino irritable." },
    ],
    correctOptionId: "A",
    explanation: "La paciente presenta manifestaciones clínicas, endoscópicas e histológicas características de enfermedad de Crohn. La presencia de lesiones salteadas, compromiso de la fosa ilíaca derecha y granulomas no caseificantes constituye un patrón clásico de esta entidad.",
    keyPoints: [
      "Cuando veas: mujer joven con diarrea crónica, rectorragia, urgencia rectal, pérdida de peso, dolor en fosa ilíaca derecha, úlceras aftosas con lesiones discontinuas y granulomas no caseificantes.",
      "Debes pensar en: enfermedad de Crohn — patrón clásico de EII con afectación segmentaria y granulomas no caseificantes.",
      "Las lesiones salteadas (distribución discontinua) son características de enfermedad de Crohn, no de colitis ulcerosa.",
      "Los granulomas no caseificantes en anatomopatología son un hallazgo clásico de enfermedad de Crohn.",
      "Tema: Enfermedad inflamatoria intestinal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de gastroenterología porque evalúa el diagnóstico diferencial de enfermedad inflamatoria intestinal, pidiendo identificar enfermedad de Crohn frente a colitis ulcerosa según hallazgos clínicos, endoscópicos e histológicos.

La clave no es asumir que toda diarrea con sangre es colitis ulcerosa ni confundir lesiones continuas con lesiones salteadas.
La clave es:
Mujer joven con diarrea crónica, rectorragia, urgencia rectal, pérdida de peso, dolor en fosa ilíaca derecha, úlceras aftosas con distribución discontinua y granulomas no caseificantes → enfermedad de Crohn.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 25 años con dolor abdominal crónico y diarrea de larga evolución.
• Rectorragia ocasional, urgencia rectal y pérdida de 7 kg en 3 meses.
• Signos de desnutrición y dolor a la palpación de fosa ilíaca derecha.
• Colonoscopia: úlceras aftosas con lesiones de distribución discontinua.
• Anatomopatología: granulomas no caseificantes.

Recordemos enfermedad de Crohn vs colitis ulcerosa:
• Crohn: afectación transmural segmentaria (cualquier segmento del TGI); lesiones salteadas; íleon terminal frecuente.
• Colitis ulcerosa: afectación continua del colon desde el recto; limitada a mucosa; sin granulomas no caseificantes.
• Hallazgos clásicos de Crohn: úlceras aftosas, lesiones discontinuas, granulomas no caseificantes, compromiso de íleon/fosa ilíaca derecha.
• Enterocolitis necrotizante: neonatos prematuros, no adultos jóvenes con cuadro crónico.
• Síndrome de intestino irritable: no produce rectorragia, úlceras ni granulomas.

Por lo tanto:
La paciente presenta manifestaciones clínicas, endoscópicas e histológicas características de enfermedad de Crohn: lesiones salteadas, compromiso de fosa ilíaca derecha y granulomas no caseificantes.

¿Por qué la opción A es la respuesta correcta?
La enfermedad de Crohn explica el cuadro completo: afectación segmentaria con úlceras aftosas discontinuas, compromiso ileal (fosa ilíaca derecha) y granulomas no caseificantes en anatomopatología.

¿Por qué fallan las otras opciones?
Opción B (colitis ulcerosa): afectación continua desde el recto, sin granulomas no caseificantes; las lesiones salteadas no son características de CU.
Opción C (enterocolitis necrotizante): entidad de neonatos prematuros con necrosis intestinal; no corresponde a mujer adulta con cuadro crónico.
Opción D (síndrome de intestino irritable): trastorno funcional sin inflamación, úlceras ni granulomas; no explica rectorragia ni pérdida de peso significativa.

¿Cuál es la trampa del examen?
Muchos estudiantes observan:
"Diarrea con sangre." Y responden: Colitis ulcerosa.
Pero la presencia de lesiones discontinuas, compromiso de fosa ilíaca derecha y granulomas no caseificantes orienta a enfermedad de Crohn, no a colitis ulcerosa.
Aquí el dato decisivo es:
Lesiones salteadas + granulomas no caseificantes + fosa ilíaca derecha = Crohn.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar cuadro de EII: diarrea crónica, sangre, pérdida de peso, dolor abdominal.
2. Diferenciar Crohn (segmentaria, transmural, granulomas) de CU (continua desde recto, mucosa).
3. Confirmar con colonoscopia + biopsias con granulomas no caseificantes.
4. Evaluar extensión y manifestaciones extraintestinales.
5. Iniciar tratamiento según localización y actividad.

Perlas de examen
✅ Lesiones salteadas = Crohn; afectación continua desde recto = colitis ulcerosa.
✅ Granulomas no caseificantes = Crohn (hallazgo clásico, aunque no siempre presente).
✅ Fosa ilíaca derecha dolorosa → pensar en íleon terminal (Crohn).
✅ Diarrea con sangre no es sinónimo de colitis ulcerosa.
✅ EII vs SII: SII no produce úlceras, granulomas ni desnutrición.

Referencias
• Harrison's Principles of Internal Medicine.
• Sleisenger and Fordtran's Gastrointestinal and Liver Disease.
• ECCO Guidelines on Crohn's Disease.
• American College of Gastroenterology Guidelines on IBD.`,
  },
  {
    id: "dr-q-163",
    examArea: "GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","gastroenterologia"],
    statement:
      "Con respecto a los factores de riesgo asociados al desarrollo de colitis ulcerativa, ¿cuál de los siguientes NO se considera un factor de riesgo?",
    options: [
      { id: "A", label: "A", text: "Tabaquismo." },
      { id: "B", label: "B", text: "Uso crónico de fármacos." },
      { id: "C", label: "C", text: "Infecciones gastrointestinales previas." },
      { id: "D", label: "D", text: "Dieta." },
    ],
    correctOptionId: "A",
    explanation: "A diferencia de la enfermedad de Crohn, el tabaquismo se ha asociado consistentemente con una menor incidencia de colitis ulcerativa. De hecho, la suspensión del hábito tabáquico se ha relacionado con un aumento del riesgo de desarrollar la enfermedad en individuos susceptibles.",
    keyPoints: [
      "Cuando veas: pregunta sobre factores de riesgo de colitis ulcerosa pidiendo identificar cuál NO es factor de riesgo.",
      "Debes pensar en: tabaquismo — tiene relación inversa con colitis ulcerosa (NO es factor de riesgo; incluso se asocia a menor incidencia).",
      "La suspensión del tabaquismo puede preceder al inicio de colitis ulcerosa en individuos susceptibles.",
      "A diferencia de colitis ulcerosa, el tabaquismo aumenta el riesgo y la gravedad de enfermedad de Crohn.",
      "Tema: Epidemiología de la colitis ulcerosa.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de gastroenterología porque evalúa los factores de riesgo epidemiológicos de la colitis ulcerosa, pidiendo identificar cuál NO incrementa el riesgo — con la trampa clásica del tabaquismo.

La clave no es asumir que el tabaquismo es factor de riesgo universal para todas las enfermedades inflamatorias intestinales.
La clave es:
En colitis ulcerosa, el tabaquismo tiene relación inversa: se asocia consistentemente con menor incidencia; la suspensión del hábito tabáquico puede desencadenar la enfermedad en individuos susceptibles.

¿Qué está ocurriendo realmente?
La pregunta evalúa:
• Factores de riesgo asociados al desarrollo de colitis ulcerosa.
• Se pide identificar cuál de las opciones NO se considera factor de riesgo.
• El tabaquismo es la excepción clásica: relación protectora/inversa en colitis ulcerosa.

Recordemos epidemiología de colitis ulcerosa:
• Factores de riesgo reconocidos: uso crónico de fármacos (AINEs, antibióticos), infecciones gastrointestinales previas, dieta (occidental, ultraprocesados), antecedentes familiares, predisposición genética.
• Tabaquismo y colitis ulcerosa: relación inversa consistente; fumadores tienen menor incidencia de CU.
• Suspensión del tabaco: puede preceder al debut de colitis ulcerosa en personas genéticamente susceptibles.
• Contraste con Crohn: el tabaquismo aumenta riesgo, gravedad y recurrencias postoperatorias en enfermedad de Crohn.

Por lo tanto:
El tabaquismo NO es factor de riesgo para colitis ulcerosa; de hecho, tiene una relación inversa con su incidencia.

¿Por qué la opción A es la respuesta correcta?
El tabaquismo se ha asociado consistentemente con menor incidencia de colitis ulcerosa, por lo que NO se considera factor de riesgo para esta enfermedad (a diferencia de Crohn, donde sí lo es).

¿Por qué fallan las otras opciones?
Opción B (uso crónico de fármacos): AINEs y ciertos fármacos se han asociado a mayor riesgo de colitis ulcerosa; sí es factor de riesgo.
Opción C (infecciones gastrointestinales previas): se postula como desencadenante en individuos predispuestos (mimetismo molecular); sí es factor de riesgo.
Opción D (dieta): dieta occidental y factores dietéticos se asocian a mayor incidencia de EII; sí es factor de riesgo.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Tabaquismo = factor de riesgo." Y responden cualquiera de las otras opciones.
Pero en colitis ulcerosa el tabaquismo es la excepción: relación inversa, no directa.
Aquí el dato decisivo es:
Tabaco protege (relativamente) contra CU pero empeora Crohn → siempre diferenciar ambas EII.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Conocer factores de riesgo de colitis ulcerosa: fármacos, infecciones, dieta, genética.
2. Recordar la paradoja del tabaco: protector en CU, deletéreo en Crohn.
3. Suspensión del tabaco puede desencadenar CU en susceptibles.
4. No extrapolar factores de riesgo de Crohn a colitis ulcerosa sin verificar.
5. En preguntas "NO es factor de riesgo", buscar la excepción clásica.

Perlas de examen
✅ Tabaquismo + CU = relación inversa (NO es factor de riesgo).
✅ Dejar de fumar puede preceder al debut de colitis ulcerosa.
✅ Tabaquismo + Crohn = mayor riesgo, mayor gravedad, más recurrencias.
✅ Paradoja del tabaco: diferencia clave entre CU y Crohn en exámenes.
✅ AINEs, infecciones GI y dieta occidental sí son factores de riesgo de CU.

Referencias
• ECCO Guidelines on Ulcerative Colitis.
• American College of Gastroenterology Clinical Guidelines.
• Harrison's Principles of Internal Medicine.
• Sleisenger and Fordtran's Gastrointestinal and Liver Disease.`,
  },
  {
    id: "dr-q-164",
    examArea: "GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","gastroenterologia"],
    statement:
      "Paciente de 32 años con antecedente de enfermedad inflamatoria intestinal consulta por dolor lumbar inflamatorio crónico y rigidez matutina prolongada. Tras estudio por reumatología se confirma el diagnóstico de espondilitis anquilosante asociada a enfermedad inflamatoria intestinal.\n¿Cuál de las siguientes afirmaciones es FALSA?",
    options: [
      { id: "A", label: "A", text: "La espondilitis anquilosante es más frecuente en pacientes con enfermedad de Crohn." },
      { id: "B", label: "B", text: "La actividad de la espondilitis anquilosante guarda relación con la actividad inflamatoria de la enfermedad inflamatoria intestinal." },
      { id: "C", label: "C", text: "La actividad de la espondilitis anquilosante no remite con glucocorticoides." },
      { id: "D", label: "D", text: "La evolución de la espondilitis anquilosante es lenta y progresiva." },
    ],
    correctOptionId: "B",
    explanation: "La espondilitis anquilosante es una manifestación extraintestinal axial de la enfermedad inflamatoria intestinal. A diferencia de las manifestaciones articulares periféricas, su actividad suele evolucionar de manera independiente de la actividad intestinal.",
    keyPoints: [
      "Cuando veas: paciente con EII y espondilitis anquilosante confirmada; pregunta pide identificar la afirmación FALSA.",
      "Debes pensar en: espondilitis anquilosante asociada a EII — la actividad axial evoluciona de forma independiente de la actividad intestinal.",
      "La espondilitis anquilosante es más frecuente en enfermedad de Crohn que en colitis ulcerosa.",
      "La artritis periférica sí suele correlacionarse con la actividad digestiva; la espondilitis anquilosante es la excepción clásica.",
      "Tema: Manifestaciones extraintestinales de la enfermedad inflamatoria intestinal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de gastroenterología porque evalúa las manifestaciones extraintestinales de la enfermedad inflamatoria intestinal, pidiendo identificar la afirmación FALSA sobre la espondilitis anquilosante asociada a EII.

La clave no es asumir que todas las manifestaciones extraintestinales correlacionan con la actividad intestinal.
La clave es:
La espondilitis anquilosante es una manifestación extraintestinal axial cuya actividad suele evolucionar de manera independiente de la actividad inflamatoria intestinal — a diferencia de la artritis periférica.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 32 años con antecedente de enfermedad inflamatoria intestinal.
• Dolor lumbar inflamatorio crónico y rigidez matutina prolongada.
• Diagnóstico confirmado de espondilitis anquilosante asociada a EII.
• La pregunta pide identificar cuál afirmación es FALSA.

Recordemos manifestaciones musculoesqueléticas de la EII:
• Espondilitis anquilosante (axial): dolor lumbar inflamatorio, rigidez matutina; más frecuente en enfermedad de Crohn.
• Actividad axial: evoluciona de forma independiente de la actividad intestinal (excepción clásica).
• Artritis periférica tipo 1: sí correlaciona con actividad intestinal; mejora al controlar la EII.
• Artritis periférica tipo 2: evolución independiente (similar a espondilitis).
• Espondilitis anquilosante: evolución lenta y progresiva; no remite completamente con glucocorticoides.

Por lo tanto:
La afirmación FALSA es que la actividad de la espondilitis anquilosante guarda relación con la actividad inflamatoria intestinal (opción B), porque su curso axial es independiente del intestino.

¿Por qué la opción B es la respuesta correcta?
La espondilitis anquilosante es una manifestación extraintestinal axial cuya actividad suele evolucionar de manera independiente de la actividad intestinal, por lo que afirmar que guarda relación con ella es FALSO.

¿Por qué fallan las otras opciones?
Opción A (más frecuente en Crohn): VERDADERO; la espondilitis anquilosante es más frecuente en pacientes con enfermedad de Crohn que con colitis ulcerosa.
Opción C (no remite con glucocorticoides): VERDADERO; la enfermedad axial no responde completamente a glucocorticoides, requiere AINEs y biológicos anti-TNF.
Opción D (evolución lenta y progresiva): VERDADERO; la espondilitis anquilosante tiene curso crónico, lento y progresivo con riesgo de anquilosis.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Todas las manifestaciones extraintestinales empeoran cuando empeora el intestino."
Pero la espondilitis anquilosante es una excepción clásica: su actividad axial es independiente de la actividad intestinal.
Aquí el dato decisivo es:
Artritis periférica tipo 1 = correlaciona con intestino; espondilitis anquilosante = NO correlaciona.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar manifestaciones extraintestinales de EII: articulares, cutáneas, oculares, hepáticas.
2. Diferenciar artritis periférica tipo 1 (correlaciona) de espondilitis anquilosante (independiente).
3. Espondilitis anquilosante: más frecuente en Crohn, evolución lenta, no remite con esteroides solos.
4. Tratamiento axial: AINEs, fisioterapia, biológicos anti-TNF (infliximab, adalimumab).
5. Controlar EII no garantiza control de espondilitis anquilosante.

Perlas de examen
✅ Espondilitis anquilosante + EII = actividad axial independiente del intestino.
✅ Artritis periférica tipo 1 = mejora al controlar la EII.
✅ Espondilitis anquilosante más frecuente en Crohn que en colitis ulcerosa.
✅ Glucocorticoides no controlan completamente la enfermedad axial.
✅ Evolución lenta y progresiva con riesgo de anquilosis vertebral.

Referencias
• ECCO Guidelines on Extraintestinal Manifestations in Inflammatory Bowel Disease.
• American College of Gastroenterology Guidelines.
• EULAR Recommendations for the Management of Axial Spondyloarthritis.
• Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-165",
    examArea: "GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","gastroenterologia"],
    statement:
      "Con respecto a los factores asociados al desarrollo de neoplasia colorrectal en pacientes con colitis ulcerosa, ¿cuál de los siguientes NO incrementa el riesgo de cáncer colorrectal?",
    options: [
      { id: "A", label: "A", text: "El tiempo de evolución de la enfermedad." },
      { id: "B", label: "B", text: "La afectación extensa de la enfermedad." },
      { id: "C", label: "C", text: "La coexistencia de cirrosis biliar primaria." },
      { id: "D", label: "D", text: "Los antecedentes familiares de cáncer colorrectal." },
    ],
    correctOptionId: "C",
    explanation: "La entidad asociada a un incremento del riesgo de cáncer colorrectal en pacientes con colitis ulcerosa es la colangitis esclerosante primaria y no la cirrosis biliar primaria. Por ello, esta opción constituye la respuesta incorrecta.",
    keyPoints: [
      "Cuando veas: pregunta sobre factores que incrementan riesgo de cáncer colorrectal en colitis ulcerosa pidiendo identificar cuál NO incrementa el riesgo.",
      "Debes pensar en: cirrosis biliar primaria — no es la entidad hepática asociada al incremento de riesgo (esa es colangitis esclerosante primaria).",
      "El riesgo de cáncer colorrectal aumenta con la duración de la enfermedad, la pancolitis y los antecedentes familiares.",
      "La colangitis esclerosante primaria coexiste frecuentemente con colitis ulcerosa y multiplica el riesgo de displasia/neoplasia colorrectal.",
      "Tema: Cáncer colorrectal asociado a colitis ulcerosa.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de gastroenterología porque evalúa los factores de riesgo de neoplasia colorrectal en pacientes con colitis ulcerosa, pidiendo identificar cuál NO incrementa el riesgo — con la trampa de confundir cirrosis biliar primaria con colangitis esclerosante primaria.

La clave no es asumir que cualquier hepatopatía incrementa el riesgo de cáncer colorrectal en colitis ulcerosa.
La clave es:
La entidad hepática asociada al incremento del riesgo de cáncer colorrectal en colitis ulcerosa es la colangitis esclerosante primaria (CEP), NO la cirrosis biliar primaria.

¿Qué está ocurriendo realmente?
La pregunta evalúa:
• Factores asociados al desarrollo de neoplasia colorrectal en pacientes con colitis ulcerosa.
• Se pide identificar cuál de las opciones NO incrementa el riesgo.
• La trampa clásica: confundir cirrosis biliar primaria (CBP) con colangitis esclerosante primaria (CEP).

Recordemos cáncer colorrectal en colitis ulcerosa:
• Factores de riesgo que SÍ incrementan el riesgo: duración de la enfermedad (>8-10 años), extensión (pancolitis > enfermedad distal), actividad inflamatoria persistente, antecedentes familiares de CCR, displasia previa, colangitis esclerosante primaria asociada.
• Colangitis esclerosante primaria (CEP): coexiste en ~5% de pacientes con CU; multiplica el riesgo de displasia y cáncer colorrectal; requiere vigilancia endoscópica más intensiva.
• Cirrosis biliar primaria (CBP): enfermedad autoinmune de vías biliares intrahepáticas; NO se asocia al incremento de riesgo de CCR en colitis ulcerosa.
• Vigilancia: colonoscopia con cromoendoscopia y biopsias dirigidas cada 1-5 años según riesgo.

Por lo tanto:
La cirrosis biliar primaria NO incrementa el riesgo de cáncer colorrectal en colitis ulcerosa; la entidad hepática relevante es la colangitis esclerosante primaria.

¿Por qué la opción C es la respuesta correcta?
La cirrosis biliar primaria no se asocia al incremento del riesgo de cáncer colorrectal en colitis ulcerosa; la entidad correcta es colangitis esclerosante primaria, por lo que esta opción NO incrementa el riesgo.

¿Por qué fallan las otras opciones?
Opción A (tiempo de evolución): el riesgo de CCR aumenta progresivamente con la duración de la colitis ulcerosa (>8-10 años); SÍ incrementa el riesgo.
Opción B (afectación extensa): la pancolitis tiene mayor riesgo que la enfermedad limitada al recto o colon distal; SÍ incrementa el riesgo.
Opción D (antecedentes familiares de CCR): los antecedentes familiares incrementan el riesgo neoplásico en pacientes con CU; SÍ incrementa el riesgo.

¿Cuál es la trampa del examen?
Muchos estudiantes reconocen:
"Enfermedad hepática." Y asumen que cualquier hepatopatía aumenta el riesgo.
Pero solo la colangitis esclerosante primaria (CEP), no la cirrosis biliar primaria (CBP), se asocia al incremento de riesgo de CCR en colitis ulcerosa.
Aquí el dato decisivo es:
CEP = riesgo ↑ de CCR en CU; CBP = entidad diferente, sin esa asociación.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Conocer factores de riesgo de CCR en CU: duración, extensión, CEP, antecedentes familiares, displasia previa.
2. Diferenciar CEP (colangitis esclerosante primaria) de CBP (cirrosis biliar primaria).
3. CEP + CU = vigilancia endoscópica intensificada (cromoendoscopia).
4. Iniciar vigilancia tras 8-10 años de enfermedad en pancolitis.
5. La remisión clínica no elimina el riesgo neoplásico.

Perlas de examen
✅ CEP (colangitis esclerosante primaria) ↑ riesgo CCR en CU; CBP no.
✅ Duración >8-10 años + pancolitis = mayor riesgo neoplásico.
✅ Antecedentes familiares de CCR incrementan el riesgo en pacientes con CU.
✅ Vigilancia con cromoendoscopia y biopsias dirigidas, no SOH.
✅ No confundir CEP con CBP: nombres similares, entidades distintas.

Referencias
• ECCO Guidelines on Colorectal Carcinoma Surveillance in Inflammatory Bowel Disease.
• American College of Gastroenterology Guidelines for Ulcerative Colitis.
• British Society of Gastroenterology Guidelines on IBD Surveillance.
• Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-166",
    examArea: "GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","gastroenterologia"],
    statement:
      "Un hombre de 60 años con antecedente de colitis ulcerosa extensa de 15 años de evolución consulta para conocer su riesgo de desarrollar cáncer colorrectal y las estrategias disponibles para su prevención. Refiere encontrarse en remisión clínica durante los últimos 3 años. No presenta antecedentes personales de displasia ni cáncer colorrectal.\n¿Cuál de las siguientes afirmaciones es correcta?",
    options: [
      { id: "A", label: "A", text: "La colitis ulcerosa sólo se asocia a un incremento en el riesgo de cáncer colorrectal en fumadores." },
      { id: "B", label: "B", text: "En su caso, dado que está en remisión de larga duración, se considera adecuado el tamizaje aconsejado a la población general." },
      { id: "C", label: "C", text: "En casos como el suyo se considera adecuado someterse a colonoscopia con cromoendoscopia y biopsias dirigidas a zonas sospechosas de malignidad." },
      { id: "D", label: "D", text: "En casos como el suyo se considera adecuado el tamizaje mediante estudios periódicos de sangre oculta en heces, pero con una frecuencia superior a la utilizada en la población general." },
    ],
    correctOptionId: "C",
    explanation: "Los pacientes con colitis ulcerosa extensa y larga evolución presentan un riesgo aumentado de desarrollar cáncer colorrectal. Las guías actuales recomiendan programas de vigilancia endoscópica mediante colonoscopia con cromoendoscopia y toma de biopsias dirigidas para detectar displasia precozmente.",
    keyPoints: [
      "Cuando veas: hombre de 60 años con colitis ulcerosa extensa de larga evolución (≥8-10 años) en remisión clínica, sin displasia previa.",
      "Debes pensar en: vigilancia endoscópica con colonoscopia + cromoendoscopia y biopsias dirigidas a zonas sospechosas.",
      "La remisión clínica NO elimina el riesgo de cáncer colorrectal en colitis ulcerosa extensa de larga evolución.",
      "El tamizaje poblacional general (SOH) o con mayor frecuencia NO sustituye la vigilancia endoscópica estructurada en CU de alto riesgo.",
      "Tema: Vigilancia de cáncer colorrectal en colitis ulcerosa.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de gastroenterología porque evalúa la estrategia de vigilancia de cáncer colorrectal en pacientes con colitis ulcerosa extensa y larga evolución, pidiendo identificar la afirmación correcta frente a opciones que confunden remisión clínica con bajo riesgo o tamizaje poblacional.

La clave no es asumir que la remisión clínica elimina el riesgo de cáncer colorrectal ni aplicar el tamizaje de población general.
La clave es:
Colitis ulcerosa extensa de larga evolución (15 años) → riesgo aumentado de cáncer colorrectal persistente → vigilancia endoscópica con colonoscopia, cromoendoscopia y biopsias dirigidas.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 60 años con colitis ulcerosa extensa de 15 años de evolución.
• Remisión clínica durante los últimos 3 años.
• Sin antecedentes personales de displasia ni cáncer colorrectal.
• Consulta para conocer su riesgo de cáncer colorrectal y estrategias de prevención.

Recordemos vigilancia de CCR en colitis ulcerosa:
• Factores de riesgo: extensión (pancolitis > colitis izquierda), duración ≥8-10 años, antecedente de displasia, EII activa crónica, PSC asociada.
• El riesgo de CCR aumenta con la duración de la enfermedad, independientemente de la remisión clínica.
• La remisión clínica NO reduce el riesgo neoplásico; la inflamación crónica previa ya generó daño mucoso.
• Vigilancia recomendada: colonoscopia periódica con cromoendoscopia (o colonoscopia de alta definición) y biopsias dirigidas a lesiones sospechosas.
• SOH (sangre oculta en heces) NO es el estándar de vigilancia en CU de alto riesgo.
• El tamizaje poblacional general (colonoscopia cada 10 años) es insuficiente para este perfil de riesgo.

Por lo tanto:
En casos como el suyo se considera adecuado someterse a colonoscopia con cromoendoscopia y biopsias dirigidas a zonas sospechosas de malignidad.

¿Por qué la opción C es la respuesta correcta?
Describe el estándar de vigilancia endoscópica en colitis ulcerosa extensa de larga evolución:
• La cromoendoscopia mejora la detección de displasia plana y lesiones no polipoides.
• Las biopsias dirigidas a zonas sospechosas permiten detectar displasia precoz antes de progresión a cáncer invasivo.
• Las guías ECCO, ACG y BSG recomiendan vigilancia endoscópica estructurada, no tamizaje con SOH.

¿Por qué fallan las otras opciones?
Opción A (solo en fumadores): el riesgo de CCR en colitis ulcerosa no depende del tabaquismo; es inherente a la inflamación crónica y la duración/extensión de la enfermedad.
Opción B (tamizaje población general): la remisión clínica de 3 años no elimina el riesgo; un paciente con CU extensa de 15 años requiere vigilancia intensificada, no el protocolo de población general.
Opción D (SOH con mayor frecuencia): la sangre oculta en heces no es el método de vigilancia recomendado en CU de alto riesgo; se requiere colonoscopia con técnicas de detección de displasia.

¿Cuál es la trampa del examen?
Muchos estudiantes leen:
"Remisión clínica durante 3 años" y concluyen que el riesgo desapareció o que basta el tamizaje general.
Pero la remisión clínica no elimina el riesgo neoplásico en CU extensa de larga evolución.
Aquí el dato decisivo es:
15 años de CU extensa = alto riesgo persistente → colonoscopia con cromoendoscopia y biopsias dirigidas.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar factores de riesgo: extensión, duración ≥8-10 años, displasia previa.
2. No confundir remisión clínica con bajo riesgo neoplásico.
3. Vigilancia con colonoscopia + cromoendoscopia + biopsias dirigidas.
4. NO usar SOH ni tamizaje poblacional general en CU de alto riesgo.

Perlas de examen
✅ CU extensa + larga evolución = riesgo aumentado de CCR independiente de remisión clínica.
✅ Vigilancia: colonoscopia con cromoendoscopia y biopsias dirigidas.
✅ SOH NO es el estándar en CU de alto riesgo.
✅ Remisión clínica ≠ remisión del riesgo neoplásico.
✅ El riesgo aumenta con duración ≥8-10 años y extensión (pancolitis > izquierda).

Referencias
• ECCO Guidelines on Colorectal Carcinoma Surveillance in Inflammatory Bowel Disease.
• American College of Gastroenterology Clinical Guidelines.
• British Society of Gastroenterology Guidelines for IBD Surveillance.
• Harrison's Principles of Internal Medicine.
• UpToDate: Colorectal cancer surveillance in inflammatory bowel disease.`,
  },
  {
    id: "dr-q-167",
    examArea: "HEMATOLOGÍA",
    topic: "HEMATOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","hematologia"],
    statement:
      "Mujer de 28 años consulta por fatiga progresiva, disnea de medianos esfuerzos y disminución de la tolerancia al ejercicio. Refiere antecedentes de metrorragias abundantes desde hace varios meses. Los estudios de laboratorio confirman anemia ferropénica secundaria a pérdida crónica de sangre.\n¿Cuál de los siguientes parámetros se espera encontrar aumentado?",
    options: [
      { id: "A", label: "A", text: "Concentración de ferritina en suero." },
      { id: "B", label: "B", text: "Concentración de hemoglobina en reticulocitos." },
      { id: "C", label: "C", text: "Volumen corpuscular medio de los hematíes." },
      { id: "D", label: "D", text: "Concentración de transferrina en suero." },
    ],
    correctOptionId: "D",
    explanation: "La anemia ferropénica se caracteriza por disminución de los depósitos corporales de hierro. Como mecanismo compensatorio, el hígado aumenta la síntesis de transferrina para maximizar la captación y el transporte del hierro disponible.",
    keyPoints: [
      "Cuando veas: mujer joven con metrorragias abundantes crónicas + anemia ferropénica confirmada por laboratorio.",
      "Debes pensar en: aumento de transferrina sérica como respuesta compensatoria ante depósitos de hierro disminuidos.",
      "La ferritina está DISMINUIDA (mejor marcador de reservas de hierro), no aumentada.",
      "El VCM y la hemoglobina reticulocitaria están disminuidos por microcitosis y ferropenia.",
      "Tema: Anemia ferropénica — parámetros de laboratorio.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hematología porque evalúa los parámetros de laboratorio en anemia ferropénica, pidiendo identificar cuál se encuentra AUMENTADO frente a opciones que confunden marcadores de reservas, producción eritrocitaria y transporte de hierro.

La clave no es buscar parámetros de producción eritrocitaria ni asumir que todos los valores relacionados con hierro están disminuidos.
La clave es:
Anemia ferropénica por pérdida crónica de sangre → depósitos de hierro agotados → el hígado aumenta la síntesis de transferrina para maximizar la captación del hierro disponible.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 28 años con fatiga progresiva, disnea de medianos esfuerzos y disminución de tolerancia al ejercicio.
• Metrorragias abundantes desde hace varios meses.
• Laboratorio confirma anemia ferropénica secundaria a pérdida crónica de sangre.
• La pregunta pide el parámetro que se espera encontrar AUMENTADO.

Recordemos perfil de laboratorio en anemia ferropénica:
• Ferritina: DISMINUIDA (mejor marcador de depósitos corporales de hierro).
• Transferrina (y capacidad total de fijación de hierro/TIBC): AUMENTADA (respuesta compensatoria hepática).
• Hierro sérico: DISMINUIDO.
• Saturación de transferrina: DISMINUIDA.
• VCM: DISMINUIDO (microcitosis).
• RDW: AUMENTADO (anisocitosis).
• Hemoglobina reticulocitaria (CHr): DISMINUIDA (refleja ferropenia en eritropoyesis).

Por lo tanto:
La concentración de transferrina en suero se encuentra aumentada como mecanismo compensatorio para maximizar la captación y el transporte del hierro disponible.

¿Por qué la opción D es la respuesta correcta?
La transferrina aumenta en anemia ferropénica porque:
• El hígado incrementa su síntesis en respuesta a la disminución de los depósitos de hierro.
• Aumenta la capacidad de transporte del hierro circulante escaso.
• Junto con TIBC elevado y saturación baja, confirma el patrón de ferropenia.

¿Por qué fallan las otras opciones?
Opción A (ferritina): está DISMINUIDA; es el mejor marcador de depósitos corporales de hierro y refleja agotamiento de reservas en ferropenia.
Opción B (hemoglobina reticulocitaria): está DISMINUIDA; refleja contenido de hierro en reticulocitos y ferropenia en la eritropoyesis activa.
Opción C (VCM): está DISMINUIDO por microcitosis; los eritrocitos son más pequeños por déficit de hierro en la hemoglobina.

¿Cuál es la trampa del examen?
Muchos estudiantes leen:
"Anemia" y buscan parámetros relacionados con la producción de eritrocitos (VCM, hemoglobina reticulocitaria).
Pero la pregunta pide el parámetro AUMENTADO, no disminuido.
La trampa es elegir ferritina (marcador de hierro) sin recordar que en ferropenia la ferritina está baja y la transferrina sube como compensación.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar anemia ferropénica: microcitosis + ferritina baja + saturación baja.
2. Recordar que la transferrina (y TIBC) AUMENTA como respuesta compensatoria.
3. La ferritina DISMINUYE (reservas agotadas).
4. VCM y hemoglobina reticulocitaria DISMINUYEN.

Perlas de examen
✅ Ferropenia: ferritina ↓, transferrina ↑, hierro sérico ↓, saturación ↓.
✅ La transferrina aumenta como mecanismo compensatorio hepático.
✅ Ferritina = mejor marcador de depósitos de hierro (baja en ferropenia).
✅ VCM bajo = microcitosis; no confundir con parámetro aumentado.
✅ Metrorragias abundantes = causa ginecológica frecuente de ferropenia en mujer joven.

Referencias
• Harrison's Principles of Internal Medicine.
• Hoffbrand's Essential Haematology.
• Williams Hematology.
• British Society for Haematology Guidelines.
• UpToDate: Causes and diagnosis of iron deficiency and iron deficiency anemia in adults.`,
  },
  {
    id: "dr-q-168",
    examArea: "HEMATOLOGÍA",
    topic: "HEMATOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","hematologia"],
    statement:
      "Hombre de 65 años, sin antecedentes médicos de importancia, consulta por astenia y adinamia de varios meses de evolución. Refiere no haber tenido seguimiento médico en los últimos años. Al examen físico presenta palidez conjuntival, sin otros hallazgos relevantes. Se realiza hemograma que reporta: hemoglobina 9.9 g/dL, hematocrito 29%, volumen corpuscular medio (VCM) 75 fL y RDW 19%.\n¿Cuál de los siguientes sería el paso inicial más apropiado?",
    options: [
      { id: "A", label: "A", text: "Tacto rectal y programar colonoscopia." },
      { id: "B", label: "B", text: "Espirometría y programar broncoscopia." },
      { id: "C", label: "C", text: "Medir haptoglobina y realizar prueba de Coombs." },
      { id: "D", label: "D", text: "Medir vitamina B12 y programar biopsia de médula ósea." },
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta una anemia microcítica con anisocitosis, hallazgos altamente sugestivos de anemia ferropénica. En hombres mayores de 50 años, la principal causa que debe descartarse es pérdida crónica de sangre por cáncer colorrectal hasta demostrar lo contrario.",
    keyPoints: [
      "Cuando veas: hombre mayor de 50 años con anemia microcítica (VCM bajo) y RDW elevado (anisocitosis).",
      "Debes pensar en: anemia ferropénica → descartar sangrado gastrointestinal oculto por cáncer colorrectal como paso inicial.",
      "En hombres mayores la ferropenia se trata como sangrado GI hasta demostrar lo contrario — NO iniciar con estudios hematológicos complejos.",
      "Tacto rectal + colonoscopia es el paso inicial; no espirometría, Coombs ni B12/biopsia medular.",
      "Tema: Anemia ferropénica en el adulto mayor.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hematología/medicina interna porque evalúa el abordaje inicial de anemia microcítica en un adulto mayor, pidiendo identificar el paso diagnóstico más apropiado frente a opciones que priorizan estudios hematológicos o de otros sistemas.

La clave no es buscar estudios hematológicos complejos ni descartar causas pulmonares o carenciales sin antes investigar sangrado gastrointestinal.
La clave es:
Hombre mayor de 65 años + anemia microcítica con anisocitosis (VCM 75, RDW 19%) → anemia ferropénica → en hombres >50 años la principal causa a descartar es sangrado GI oculto por cáncer colorrectal → tacto rectal y colonoscopia.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 65 años sin antecedentes médicos de importancia.
• Astenia y adinamia de varios meses de evolución.
• Sin seguimiento médico en los últimos años.
• Palidez conjuntival al examen físico.
• Hemograma: Hb 9.9 g/dL, Hto 29%, VCM 75 fL (microcitosis), RDW 19% (anisocitosis).
• La pregunta pide el paso inicial más apropiado.

Recordemos anemia ferropénica en el adulto mayor:
• VCM bajo + RDW elevado = patrón altamente sugestivo de ferropenia.
• En hombres mayores de 50 años y mujeres posmenopáusicas: la causa más importante es pérdida crónica de sangre por vía gastrointestinal.
• El cáncer colorrectal debe descartarse hasta demostrar lo contrario.
• El abordaje inicial incluye: ferritina, hierro, transferrina + investigación GI (tacto rectal, colonoscopia).
• NO iniciar con Coombs (anemia hemolítica), B12/biopsia medular (anemia megaloblástica) ni broncoscopia (vía respiratoria).

Por lo tanto:
El paso inicial más apropiado es tacto rectal y programar colonoscopia para descartar sangrado gastrointestinal oculto, especialmente cáncer colorrectal.

¿Por qué la opción A es la respuesta correcta?
El tacto rectal y la colonoscopia son el abordaje inicial indicado porque:
• En hombres mayores con anemia ferropénica, el sangrado GI oculto (CCR, pólipos, angiodisplasias) es la causa prioritaria a investigar.
• El tacto rectal puede detectar masas rectales y sangrado.
• La colonoscopia permite visualizar todo el colon y detectar neoplasias.

¿Por qué fallan las otras opciones?
Opción B (espirometría y broncoscopia): orientada a vía respiratoria; no es el paso inicial en anemia microcítica sin datos respiratorios.
Opción C (haptoglobina y Coombs): estudios para anemia hemolítica; el patrón microcítico con RDW elevado orienta a ferropenia, no hemólisis.
Opción D (vitamina B12 y biopsia de médula ósea): orientado a anemia megaloblástica o aplasia; el VCM bajo descarta megaloblastosis como causa principal.

¿Cuál es la trampa del examen?
Muchos estudiantes observan:
"Anemia" y buscan estudios hematológicos complejos (Coombs, biopsia medular, B12).
Pero en un hombre mayor con microcitosis, la prioridad es encontrar la fuente de sangrado, no clasificar el tipo de anemia con estudios avanzados.
Aquí el dato decisivo es:
Hombre >50 años + VCM bajo + RDW alto = ferropenia → sangrado GI → tacto rectal + colonoscopia.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar patrón microcítico con anisocitosis (VCM bajo, RDW alto).
2. Confirmar ferropenia con ferritina e índices de hierro.
3. En hombres >50 y mujeres posmenopáusicas: investigar sangrado GI.
4. Tacto rectal + colonoscopia como paso inicial prioritario.

Perlas de examen
✅ Hombre >50 años + anemia ferropénica = sangrado GI hasta demostrar lo contrario.
✅ VCM bajo + RDW alto = patrón clásico de ferropenia.
✅ Cáncer colorrectal es la causa más importante a descartar.
✅ NO iniciar con Coombs, B12 o biopsia medular en microcitosis sin investigar GI.
✅ Tacto rectal + colonoscopia = abordaje inicial correcto.

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• British Society of Gastroenterology Guidelines for Iron Deficiency Anaemia.
• American Gastroenterological Association Clinical Practice Guidelines.
• UpToDate: Approach to the adult patient with anemia.`,
  },
  {
    id: "dr-q-169",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement:
      "Con respecto a los mecanismos fisiopatológicos de las taquiarritmias, señale cuál de las siguientes NO se explica por un mecanismo de reentrada:",
    options: [
      { id: "A", label: "A", text: "Flutter o aleteo auricular." },
      { id: "B", label: "B", text: "Taquicardia ventricular polimórfica tipo torsade de pointes." },
      { id: "C", label: "C", text: "Taquicardia auriculoventricular recíproca en el síndrome de Wolff-Parkinson-White." },
      { id: "D", label: "D", text: "Taquicardias asociadas a defectos del tabique interauricular." },
    ],
    correctOptionId: "B",
    explanation: "La torsade de pointes es una taquicardia ventricular polimórfica asociada a prolongación del intervalo QT y se produce principalmente por actividad desencadenada secundaria a posdespolarizaciones tempranas (early afterdepolarizations), no por mecanismos de reentrada.",
    keyPoints: [
      "Cuando veas: pregunta que pide identificar qué arritmia NO se explica por mecanismo de reentrada.",
      "Debes pensar en: torsade de pointes = actividad desencadenada por posdespolarizaciones tempranas (EAP), NO reentrada.",
      "El flutter auricular típico es una macrorreentrada auricular (SÍ reentrada).",
      "La taquicardia AV recíproca en WPW y las taquicardias con defecto del tabique interauricular son por reentrada.",
      "Tema: Mecanismos electrofisiológicos de las arritmias.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa los mecanismos electrofisiológicos de las taquiarritmias, pidiendo identificar cuál NO se explica por reentrada frente a arritmias clásicamente mediadas por este mecanismo.

La clave no es asumir que todas las taquicardias ventriculares son por reentrada ni confundir mecanismos de actividad desencadenada con reentrada.
La clave es:
Torsade de pointes = taquicardia ventricular polimórfica asociada a QT prolongado → actividad desencadenada por posdespolarizaciones tempranas (EAP), NO reentrada.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Pregunta teórica sobre mecanismos fisiopatológicos de las taquiarritmias.
• Se pide identificar cuál de las opciones NO se explica por mecanismo de reentrada.

Recordemos mecanismos de arritmias:
• Reentrada: impulso que circula en un circuito cerrado (flutter auricular, TV monomórfica, taquicardia AV recíproca en WPW, taquicardias con defecto del tabique interauricular).
• Actividad desencadenada: despolarizaciones anómalas que ocurren durante o después de la repolarización (torsade de pointes por EAP).
• Automatismo anormal: células con despolarización diastólica espontánea acelerada.
• Torsade de pointes: TV polimórfica con QT prolongado; mecanismo = posdespolarizaciones tempranas (early afterdepolarizations), NO reentrada.

Por lo tanto:
La taquicardia ventricular polimórfica tipo torsade de pointes NO se explica por mecanismo de reentrada, sino por actividad desencadenada.

¿Por qué la opción B es la respuesta correcta?
La torsade de pointes se produce principalmente por:
• Prolongación del intervalo QT (congénita o adquirida).
• Posdespolarizaciones tempranas (EAP) durante la fase 2 de la repolarización.
• Actividad desencadenada, no circuito de reentrada.

¿Por qué fallan las otras opciones?
Opción A (flutter o aleteo auricular): es una macrorreentrada auricular típica; el impulso circula por un circuito reentrante en la aurícula derecha.
Opción C (taquicardia AV recíproca en WPW): es una arritmia por reentrada que utiliza la vía accesoria y el nodo AV como componentes del circuito.
Opción D (taquicardias asociadas a defectos del tabique interauricular): frecuentemente mediadas por reentrada a través del defecto y estructuras adyacentes.

¿Cuál es la trampa del examen?
Muchos estudiantes observan:
"Taquicardia ventricular" y asumen que todas las TV son por reentrada.
Pero la torsade de pointes es una TV polimórfica con mecanismo de actividad desencadenada (EAP), asociada a QT prolongado.
La trampa es elegir cualquier taquicardia ventricular sin distinguir el mecanismo electrofisiológico subyacente.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reentrada: flutter auricular, TV monomórfica, taquicardia AV recíproca (WPW), taquicardias con CIA.
2. Actividad desencadenada: torsade de pointes (EAP + QT prolongado).
3. La pregunta pide la que NO es reentrada → torsade de pointes.

Perlas de examen
✅ Torsade de pointes = actividad desencadenada (EAP), NO reentrada.
✅ Flutter auricular = macrorreentrada auricular clásica.
✅ Taquicardia AV recíproca en WPW = reentrada por vía accesoria.
✅ Taquicardias con defecto del tabique interauricular = reentrada.
✅ QT prolongado + TV polimórfica = pensar en torsade de pointes.

Referencias
• Braunwald's Heart Disease.
• ESC Guidelines for the Management of Ventricular Arrhythmias.
• ACC/AHA/HRS Guideline for Management of Arrhythmias.
• UpToDate: Acquired Long QT Syndrome and Torsades de Pointes.
• Zipes DP et al. Elucidation of reentrant circuits and mechanisms of arrhythmias.`,
  },
  {
    id: "dr-q-170",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement:
      "Paciente de 60 años con antecedente de síndrome coronario agudo consulta al servicio de urgencias por palpitaciones y deterioro del estado general. El electrocardiograma muestra una taquicardia regular de complejo ancho con duración del QRS mayor de 0.20 segundos. Al examen físico presenta presión arterial de 70/40 mmHg, diaforesis, piel fría y desorientación.\n¿Cuál es el tratamiento de elección?",
    options: [
      { id: "A", label: "A", text: "Lidocaína intravenosa." },
      { id: "B", label: "B", text: "Amiodarona intravenosa." },
      { id: "C", label: "C", text: "Procainamida intravenosa." },
      { id: "D", label: "D", text: "Cardioversión eléctrica urgente." },
    ],
    correctOptionId: "D",
    explanation: "El paciente presenta una taquicardia de complejo ancho asociada a inestabilidad hemodinámica manifestada por hipotensión y alteración del estado mental. En este contexto, la conducta inmediata indicada es la cardioversión eléctrica sincronizada urgente.",
    keyPoints: [
      "Cuando veas: taquicardia de complejo ancho + hipotensión + alteración del estado mental.",
      "Debes pensar en: taquicardia inestable → cardioversión eléctrica sincronizada urgente (NO antiarrítmicos IV primero).",
      "Todo paciente con taquicardia y hipotensión debe considerarse hemodinámicamente inestable.",
      "Lidocaína, amiodarona y procainamida son para pacientes ESTABLES con TV; en inestabilidad el tiempo es crítico.",
      "Tema: Taquicardia de complejo ancho inestable — manejo ACLS.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología/urgencias porque evalúa el manejo de taquicardia de complejo ancho con inestabilidad hemodinámica, pidiendo identificar el tratamiento de elección frente a opciones que priorizan antiarrítmicos intravenosos.

La clave no es buscar inmediatamente un antiarrítmico intravenoso ni diferenciar TV de TSV con aberrancia antes de estabilizar al paciente.
La clave es:
Taquicardia regular de complejo ancho + hipotensión (70/40) + alteración del estado mental = inestabilidad hemodinámica → cardioversión eléctrica sincronizada urgente.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 60 años con antecedente de síndrome coronario agudo.
• Palpitaciones y deterioro del estado general.
• ECG: taquicardia regular de complejo ancho con QRS >0.20 segundos.
• Examen físico: PA 70/40 mmHg, diaforesis, piel fría, desorientación.
• La pregunta pide el tratamiento de elección.

Recordemos manejo de taquiarritmias según ACLS:
• Criterios de inestabilidad hemodinámica: hipotensión, alteración del estado mental, dolor torácico isquémico, insuficiencia cardíaca aguda, choque.
• Taquicardia inestable con pulso → cardioversión eléctrica sincronizada INMEDIATA.
• Antiarrítmicos IV (lidocaína, amiodarona, procainamida) se reservan para pacientes ESTABLES con taquicardia de complejo ancho (probable TV).
• En inestabilidad, cada minuto de retraso empeora el pronóstico; no hay tiempo para prueba terapéutica con fármacos.

Por lo tanto:
El tratamiento de elección es cardioversión eléctrica urgente (sincronizada).

¿Por qué la opción D es la respuesta correcta?
La cardioversión eléctrica sincronizada urgente es el tratamiento indicado porque:
• El paciente cumple criterios de inestabilidad: hipotensión severa y alteración del estado mental.
• La taquicardia de complejo ancho inestable requiere restauración inmediata del ritmo sinular.
• Los antiarrítmicos no deben retrasar la cardioversión en pacientes inestables.

¿Por qué fallan las otras opciones?
Opción A (lidocaína IV): antiarrítmico para TV estable; no es primera línea en inestabilidad hemodinámica.
Opción B (amiodarona IV): útil en TV estable o como alternativa si la cardioversión falla; no debe retrasar la cardioversión en inestabilidad.
Opción C (procainamida IV): antiarrísmico para TV estable con QRS ancho; contraindicado como primera opción en paciente con hipotensión y alteración mental.

¿Cuál es la trampa del examen?
Muchos estudiantes observan:
"Taquicardia ventricular" y buscan inmediatamente un antiarrítmico (lidocaína, amiodarona).
Pero la prioridad en taquicardia INESTABLE es la cardioversión eléctrica, no la farmacoterapia.
Aquí el dato decisivo es:
PA 70/40 + desorientación = inestabilidad → cardioversión eléctrica urgente.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar estabilidad hemodinámica (PA, estado mental, perfusión).
2. Si inestable con pulso → cardioversión eléctrica sincronizada inmediata.
3. Si estable → entonces considerar antiarrítmicos (amiodarona, lidocaína, procainamida).
4. No retrasar cardioversión con fármacos en paciente inestable.

Perlas de examen
✅ Taquicardia inestable con pulso = cardioversión eléctrica sincronizada inmediata.
✅ Hipotensión + alteración mental = criterios de inestabilidad.
✅ Antiarrítmicos IV son para pacientes ESTABLES con TV.
✅ No diferenciar TV vs TSV con aberrancia antes de cardiovertir si hay inestabilidad.
✅ Antecedente de SCA aumenta la sospecha de arritmia ventricular, pero el manejo depende de la estabilidad.

Referencias
• ACLS Provider Manual – American Heart Association.
• ACC/AHA/HRS Guideline for the Management of Ventricular Arrhythmias.
• ESC Guidelines for the Management of Supraventricular Tachycardia.
• Braunwald's Heart Disease.
• UpToDate: Wide QRS complex tachycardias: Approach to management.`,
  },
  {
    id: "dr-q-171",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement:
      "Paciente de 76 años con antecedentes de hipertensión arterial y diabetes mellitus consulta al servicio de urgencias por cuadro de 72 horas de evolución consistente en palpitaciones y disminución progresiva de la tolerancia al esfuerzo. A su llegada se documenta fibrilación auricular con respuesta ventricular aproximada de 120 lpm. Se encuentra hemodinámicamente estable.\n¿Cuál de las siguientes afirmaciones es FALSA?",
    options: [
      { id: "A", label: "A", text: "Este paciente debe estar anticoagulado oralmente de por vida, salvo contraindicación." },
      { id: "B", label: "B", text: "Si decidimos realizar una cardioversión a su llegada a urgencias, sería necesario realizar previamente una ecocardiografía transesofágica." },
      { id: "C", label: "C", text: "Al ser el primer episodio de fibrilación auricular es el candidato idóneo para realizar una ablación con catéter." },
      { id: "D", label: "D", text: "Para controlar la frecuencia cardíaca podrían emplearse betabloqueantes." },
    ],
    correctOptionId: "C",
    explanation: "La ablación con catéter no constituye el manejo inicial rutinario de un primer episodio de fibrilación auricular. La indicación depende de múltiples factores clínicos, persistencia de síntomas, recurrencias y respuesta al tratamiento médico.",
    keyPoints: [
      "Cuando veas: FA de 72 h de evolución en anciano con HTA y DM, estable, pregunta cuál afirmación es FALSA.",
      "Debes pensar en: ablación NO es manejo inicial rutinario del primer episodio de FA.",
      "CHA₂DS₂-VASc elevado (edad, HTA, DM) indica anticoagulación oral de por vida salvo contraindicación.",
      "FA >48 h requiere ETE o anticoagulación previa antes de cardioversión; betabloqueantes son válidos para control de frecuencia.",
      "Tema: Fibrilación auricular — manejo y afirmaciones falsas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa una trampa frecuente: asumir que el primer episodio de fibrilación auricular obliga a ablación con catéter como tratamiento definitivo inicial.

La clave no es pensar que todo primer episodio de FA requiere ablación inmediata.
La clave es:
Primer episodio de FA ≠ candidato idóneo rutinario para ablación; la ablación depende de síntomas, recurrencias y respuesta al tratamiento médico.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 76 años con HTA y DM, FA de 72 horas de evolución.
• Palpitaciones y disminución de tolerancia al ejercicio; FC ~120 lpm, hemodinámicamente estable.
• Pregunta de afirmación FALSA sobre manejo de FA.

Recordemos el manejo de la fibrilación auricular:
• Anticoagulación oral según CHA₂DS₂-VASc (este paciente tiene múltiples puntos).
• Control de frecuencia con betabloqueantes es apropiado.
• Cardioversión si se decide: FA >48 h requiere ETE o anticoagulación previa adecuada.
• Ablación con catéter no es manejo inicial rutinario del primer episodio; se reserva según síntomas y falla terapéutica.

Por lo tanto:
La afirmación FALSA es que al ser el primer episodio es el candidato idóneo para ablación con catéter.

¿Por qué la opción C es la respuesta correcta (afirmación falsa)?
La ablación no constituye el manejo inicial rutinario de un primer episodio de FA.
Su indicación depende de múltiples factores: persistencia de síntomas, recurrencias, respuesta al tratamiento médico y preferencia del paciente.

¿Por qué fallan las otras opciones (son VERDADERAS)?
Opción A: con CHA₂DS₂-VASc elevado, la anticoagulación oral de por vida está indicada salvo contraindicación.
Opción B: con FA >48 h, la cardioversión requiere precaución; ETE previa es razonable para descartar trombo auricular.
Opción D: betabloqueantes son opción válida para control de frecuencia en FA.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "primer episodio" y piensan que debe corregirse definitivamente con ablación.
La ablación es una opción avanzada, no el paso inicial automático en todo primer episodio.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar estabilidad y duración de la FA.
2. Anticoagular según CHA₂DS₂-VASc.
3. Controlar frecuencia o ritmo según síntomas y contexto.
4. Reservar ablación para casos seleccionados, no como rutina del primer episodio.

Perlas de examen
✅ Primer episodio de FA ≠ ablación automática.
✅ CHA₂DS₂-VASc guía anticoagulación (edad, HTA, DM suman puntos).
✅ FA >48 h: ETE o anticoagulación antes de cardioversión.
✅ Betabloqueantes válidos para control de frecuencia.
✅ Preguntas de "afirmación FALSA" exigen identificar la excepción incorrecta.

Referencias
• ESC Guidelines for the Management of Atrial Fibrillation.
• ACC/AHA/HRS Guideline for the Management of Atrial Fibrillation.
• Braunwald's Heart Disease.
• UpToDate: Atrial Fibrillation in Adults.
• UpToDate: Catheter ablation for atrial fibrillation.`,
  },
  {
    id: "dr-q-172",
    examArea: "NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neumologia"],
    statement:
      "Hombre de 65 años con antecedente de enfermedad pulmonar obstructiva crónica (EPOC) y tabaquismo activo consulta por sensación de alza térmica, tos productiva y disnea de 3 días de evolución. En la radiografía de tórax se evidencia un infiltrado localizado en el lóbulo inferior izquierdo. Al examen físico se encuentra consciente, orientado y sin signos de choque.\n¿Cuál es la conducta más adecuada respecto al tratamiento y lugar de manejo?",
    options: [
      { id: "A", label: "A", text: "Tratamiento antibiótico oral y manejo ambulatorio." },
      { id: "B", label: "B", text: "Tratamiento antibiótico intravenoso y hospitalización." },
      { id: "C", label: "C", text: "Manejo en urgencias con observación por 6 horas y egreso sin antibióticos." },
      { id: "D", label: "D", text: "Ingreso a unidad de cuidados intensivos para ventilación mecánica." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta una neumonía adquirida en la comunidad asociada a una comorbilidad importante (EPOC), edad avanzada y compromiso radiológico pulmonar. Estos factores aumentan el riesgo de complicaciones y justifican manejo intrahospitalario con antibioticoterapia apropiada.",
    keyPoints: [
      "Cuando veas: neumonía en anciano con EPOC, infiltrado en Rx, estable pero sin choque.",
      "Debes pensar en: estratificación de riesgo → hospitalización con ATB IV, no manejo ambulatorio.",
      "EPOC + edad avanzada + neumonía confirmada aumentan riesgo de complicaciones.",
      "La ausencia de choque no significa automáticamente manejo ambulatorio en comorbilidades importantes.",
      "Tema: Neumonía adquirida en la comunidad — estratificación de riesgo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neumología porque evalúa una trampa frecuente: manejar ambulatoriamente toda neumonía en paciente "estable" sin estratificar comorbilidades y factores de riesgo.

La clave no es el infiltrado aislado ni la ausencia de choque como único criterio.
La clave es:
Neumonía + EPOC + edad 65 años + infiltrado en Rx → hospitalización con antibiótico intravenoso.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 65 años con EPOC y tabaquismo activo.
• Fiebre, tos productiva y disnea de 3 días; infiltrado en lóbulo inferior izquierdo.
• Consciente, orientado, sin signos de choque.
• Comorbilidad respiratoria importante que eleva el riesgo de complicaciones.

Recordemos la NAC y estratificación:
• La radiografía confirma neumonía; el manejo depende de gravedad y comorbilidades.
• EPOC y edad avanzada son factores que favorecen hospitalización.
• Escalas como CURB-65 o PSI ayudan a decidir lugar de manejo.
• ATB IV en hospitalizado; ambulatorio solo en bajo riesgo sin comorbilidades graves.

Por lo tanto:
La conducta más adecuada es tratamiento antibiótico intravenoso y hospitalización.

¿Por qué la opción B es la respuesta correcta?
El paciente tiene neumonía confirmada con factores de riesgo (EPOC, edad) que justifican manejo intrahospitalario y antibioticoterapia IV para reducir complicaciones.

¿Por qué fallan las otras opciones?
Opción A (ATB oral ambulatorio): subestima el riesgo por EPOC y edad; no es manejo apropiado en este escenario.
Opción C (observación 6 h sin ATB): inadecuado ante neumonía confirmada con síntomas y comorbilidad.
Opción D (UCI y VM): no hay criterios de insuficiencia respiratoria grave ni choque; es sobretratamiento.

¿Cuál es la trampa del examen?
Muchos estudiantes ven "sin signos de choque" y eligen manejo ambulatorio.
La estratificación integra edad, comorbilidades (EPOC) y extensión del cuadro, no solo estabilidad hemodinámica momentánea.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar neumonía (clínica + Rx).
2. Estratificar riesgo (edad, comorbilidades, gasometría si indicada).
3. Decidir lugar de manejo y vía de ATB.
4. EPOC + neumonía en anciano → típicamente hospitalización.

Perlas de examen
✅ EPOC + NAC en anciano → hospitalizar con ATB IV.
✅ Estabilidad hemodinámica ≠ bajo riesgo automático.
✅ UCI solo si insuficiencia respiratoria grave o choque.
✅ CURB-65/PSI guían decisión ambulatoria vs hospitalaria.
✅ Infiltrado en Rx confirma neumonía, no define gravedad sola.

Referencias
• IDSA/ATS Guidelines for Community-Acquired Pneumonia.
• GOLD Report.
• Harrison's Principles of Internal Medicine.
• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.
• UpToDate: Community-acquired pneumonia in adults.`,
  },
  {
    id: "dr-q-173",
    examArea: "ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","endocrinologia"],
    statement:
      "Paciente de 53 años con diabetes mellitus tipo 2 en tratamiento con metformina a dosis plena consulta por polidipsia, poliuria, polifagia y pérdida de peso no intencionada en los últimos meses. Los estudios de laboratorio muestran una HbA1c de 9.5%. No se documentan episodios de cetoacidosis ni otras complicaciones agudas.\n¿Cuál es el siguiente paso más apropiado en el manejo?",
    options: [
      { id: "A", label: "A", text: "Añadir un inhibidor del cotransportador sodio-glucosa tipo 2 (iSGLT2)." },
      { id: "B", label: "B", text: "Añadir un agonista del receptor GLP-1." },
      { id: "C", label: "C", text: "Iniciar insulinoterapia." },
      { id: "D", label: "D", text: "Añadir una sulfonilurea." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta hiperglucemia sintomática con manifestaciones clásicas de catabolismo metabólico, incluyendo poliuria, polidipsia, polifagia y pérdida de peso. En este escenario, las guías recomiendan iniciar insulinoterapia independientemente de que se encuentre recibiendo tratamiento oral.",
    keyPoints: [
      "Cuando veas: DM2 con poliuria, polidipsia, polifagia, pérdida de peso y HbA1c 9.5% pese a metformina plena.",
      "Debes pensar en: síntomas de catabolismo metabólico → insulinoterapia, no solo intensificar oral.",
      "La pérdida de peso involuntaria en DM mal controlada es dato de alarma de déficit de insulina.",
      "HbA1c elevada sin síntomas puede manejarse con terapia dual; con síntomas catabólicos → insulina.",
      "Tema: Indicaciones de insulinoterapia en diabetes mellitus tipo 2.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de endocrinología porque evalúa una trampa frecuente: intensificar con iSGLT2, GLP-1 o sulfonilurea solo por HbA1c elevada, ignorando síntomas de catabolismo metabólico.

La clave no es la cifra de HbA1c aislada.
La clave es:
Poliuria + polidipsia + polifagia + pérdida de peso = déficit de insulina → insulinoterapia aunque ya reciba metformina.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 53 años con DM2 en metformina a dosis plena.
• Polidipsia, poliuria, polifagia y pérdida de peso no intencionada.
• HbA1c 9.5%; sin cetoacidosis ni complicaciones agudas documentadas.
• Cuadro de hiperglucemia sintomática con manifestaciones catabólicas.

Recordemos indicaciones de insulina en DM2:
• HbA1c elevada sin síntomas: intensificar con segundo agente (iSGLT2, GLP-1, etc.).
• Síntomas de catabolismo (pérdida de peso, poliuria severa): insulinoterapia indicada.
• La pérdida de peso en DM mal controlada sugiere déficit relativo de insulina.
• La insulina corrige rápidamente el metabolismo y alivia síntomas.

Por lo tanto:
El siguiente paso más apropiado es iniciar insulinoterapia.

¿Por qué la opción C es la respuesta correcta?
Las guías recomiendan insulinoterapia ante hiperglucemia sintomática con manifestaciones de catabolismo metabólico, independientemente del tratamiento oral actual.

¿Por qué fallan las otras opciones?
Opción A (iSGLT2): apropiado para intensificación sin síntomas catabólicos; no es prioridad aquí.
Opción B (GLP-1): similar; útil para intensificación pero no sustituye insulina con catabolismo activo.
Opción D (sulfonilurea): no aborda el déficit de insulina con la misma eficacia; riesgo de hipoglucemia sin resolver catabolismo.

¿Cuál es la trampa del examen?
Muchos estudiantes ven HbA1c 9.5% y eligen terapia dual o triple oral.
Los síntomas catabólicos (especialmente pérdida de peso) cambian la indicación a insulina.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar síntomas además de HbA1c.
2. Si hay catabolismo (poliuria, polifagia, pérdida de peso) → insulina.
3. Si asintomático con HbA1c elevada → intensificar terapia oral.
4. Metformina plena no excluye necesidad de insulina con síntomas.

Perlas de examen
✅ Pérdida de peso + poliuria en DM2 = pensar insulina.
✅ HbA1c 9.5% sin síntomas ≠ misma conducta que con catabolismo.
✅ iSGLT2/GLP-1 son para intensificación sin déficit sintomático de insulina.
✅ ADA: insulina indicada con síntomas de hiperglucemia y catabolismo.
✅ No confundir con CAD: aquí no hay cetoacidosis pero sí déficit funcional.

Referencias
• American Diabetes Association (ADA) Standards of Care.
• EASD Consensus Report on Hyperglycemia Management.
• Williams Textbook of Endocrinology.
• Harrison's Principles of Internal Medicine.
• UpToDate: Insulin therapy in type 2 diabetes mellitus.`,
  },
  {
    id: "dr-q-174",
    examArea: "NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neumologia"],
    statement:
      "Hombre de 72 años con antecedente de enfermedad pulmonar obstructiva crónica (EPOC) en tratamiento con tiotropio. Durante los últimos 6 meses ha presentado dos exacerbaciones que han requerido atención médica. En los estudios de laboratorio presenta un recuento de eosinófilos de 150 células/μL.\n¿Cuál es el siguiente paso más apropiado en el manejo?",
    options: [
      { id: "A", label: "A", text: "Agregar un corticoide inhalado." },
      { id: "B", label: "B", text: "Cambiar a LAMA + LABA." },
      { id: "C", label: "C", text: "Iniciar roflumilast." },
      { id: "D", label: "D", text: "Mantener el tratamiento actual." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta EPOC con exacerbaciones persistentes pese al tratamiento con un LAMA en monoterapia. Según las recomendaciones actuales, el siguiente paso consiste en escalar a broncodilatación dual con LAMA + LABA. El recuento de eosinófilos de 150 células/μL no favorece el uso inicial de corticoides inhalados.",
    keyPoints: [
      "Cuando veas: EPOC con ≥2 exacerbaciones en 6 meses pese a LAMA (tiotropio) y eosinófilos 150/μL.",
      "Debes pensar en: escalar a LAMA + LABA antes de añadir corticoide inhalado.",
      "Eosinófilos ≥300/μL favorecen beneficio de ICS; con 150 no es el siguiente paso inicial.",
      "GOLD: exacerbaciones persistentes en monoterapia LAMA → doble broncodilatación.",
      "Tema: Tratamiento escalonado del EPOC.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neumología porque evalúa una trampa frecuente: añadir corticoide inhalado ante exacerbaciones sin verificar el recuento de eosinófilos adecuado.

La clave no es ICS automático por exacerbaciones.
La clave es:
EPOC no controlado con LAMA + ≥2 exacerbaciones → LAMA + LABA; eosinófilos 150/μL no favorecen ICS inicial.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 72 años con EPOC en tiotropio (LAMA) en monoterapia.
• Dos exacerbaciones en 6 meses que requirieron atención médica.
• Eosinófilos 150 células/μL (por debajo del umbral típico para ICS).
• Necesidad de escalamiento terapéutico según GOLD.

Recordemos el tratamiento escalonado del EPOC:
• LAMA en monoterapia es primer escalón en EPOC moderado-severo.
• Exacerbaciones persistentes → escalar a LAMA + LABA (doble broncodilatación).
• ICS se considera con eosinófilos ≥300/μL y exacerbaciones, o asma-EPOC overlap.
• Con eosinófilos 150, el beneficio de ICS es menor; no es el siguiente paso inicial.

Por lo tanto:
El siguiente paso más apropiado es cambiar a LAMA + LABA.

¿Por qué la opción B es la respuesta correcta?
Según GOLD, ante exacerbaciones persistentes pese a LAMA en monoterapia, el escalamiento inicial es doble broncodilatación (LAMA + LABA).

¿Por qué fallan las otras opciones?
Opción A (añadir ICS): eosinófilos 150 no favorecen ICS como siguiente paso; mayor beneficio con ≥300.
Opción C (roflumilast): indicado en bronquitis crónica con exacerbaciones frecuentes y FEV1 bajo, no como escalón estándar aquí.
Opción D (mantener actual): inadecuado con 2 exacerbaciones en 6 meses; requiere escalamiento.

¿Cuál es la trampa del examen?
Muchos estudiantes ven "dos exacerbaciones" y eligen corticoide inhalado automáticamente.
El recuento de eosinófilos guía la adición de ICS; con 150/μL se prioriza LAMA + LABA.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar adherencia y técnica inhalatoria.
2. Si exacerbaciones pese a LAMA → LAMA + LABA.
3. Considerar ICS si eosinófilos ≥300 y exacerbaciones persistentes.
4. Roflumilast en subgrupo específico (bronquitis crónica, FEV1 bajo).

Perlas de examen
✅ LAMA + exacerbaciones → escalar a LAMA + LABA.
✅ ICS en EPOC: eosinófilos ≥300/μL como guía.
✅ Eosinófilos 150 no justifican ICS como primer escalón.
✅ GOLD 2025: doble broncodilatación antes de triple terapia en muchos casos.
✅ No mantener monoterapia con exacerbaciones recurrentes.

Referencias
• GOLD Report 2025.
• Global Initiative for Chronic Obstructive Lung Disease.
• Harrison's Principles of Internal Medicine.
• Murray & Nadel's Textbook of Respiratory Medicine.
• UpToDate: COPD: Treatment of stable disease.`,
  },
  {
    id: "dr-q-175",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement:
      "Hombre de 25 años es llevado al servicio de urgencias tras sufrir un accidente de tránsito con trauma abdominal contuso. Al ingreso presenta dolor abdominal difuso, presión arterial de 85/50 mmHg y frecuencia cardíaca de 125 lpm. Durante la evaluación inicial se realiza un FAST que resulta positivo para líquido libre intraabdominal.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Realizar una tomografía abdominal contrastada." },
      { id: "B", label: "B", text: "Llevar a laparotomía exploratoria." },
      { id: "C", label: "C", text: "Observación en urgencias con reevaluación clínica seriada." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta trauma abdominal contuso asociado a inestabilidad hemodinámica y FAST positivo para líquido libre intraabdominal. Estos hallazgos sugieren hemorragia intraabdominal activa y constituyen indicación de exploración quirúrgica urgente.",
    keyPoints: [
      "Cuando veas: trauma abdominal contuso + inestabilidad hemodinámica (PA 85/50, FC 125) + FAST positivo.",
      "Debes pensar en: hemorragia intraabdominal activa → laparotomía exploratoria urgente.",
      "La estabilidad hemodinámica define el algoritmo: inestable + FAST (+) = cirugía, no TAC.",
      "FAST positivo en paciente inestable es indicación de exploración quirúrgica inmediata.",
      "Tema: Trauma abdominal cerrado.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cirugía de trauma porque evalúa una trampa frecuente: solicitar tomografía abdominal en paciente hemodinámicamente inestable con FAST positivo.

La clave no es TAC ni observación seriada.
La clave es:
Trauma abdominal contuso + inestabilidad hemodinámica + FAST positivo = laparotomía exploratoria urgente.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 25 años con trauma abdominal contuso por accidente de tránsito.
• Dolor abdominal difuso, PA 85/50 mmHg, FC 125 lpm (inestabilidad hemodinámica).
• FAST positivo para líquido libre intraabdominal.
• Cuadro compatible con hemorragia intraabdominal activa.

Recordemos el algoritmo de trauma abdominal cerrado:
• Estabilidad hemodinámica es el primer dato que define la conducta.
• Inestable + FAST positivo → laparotomía exploratoria urgente (no retrasar con TAC).
• Estable + FAST positivo o duda → TAC abdominal contrastada para caracterizar lesiones.
• Observación seriada solo en pacientes estables sin indicación quirúrgica clara.

Por lo tanto:
La conducta más adecuada es llevar a laparotomía exploratoria.

¿Por qué la opción B es la respuesta correcta?
La inestabilidad hemodinámica con FAST positivo sugiere hemorragia intraabdominal activa que requiere control quirúrgico urgente según ATLS y guías EAST.

¿Por qué fallan las otras opciones?
Opción A (TAC contrastada): contraindicada o inapropiada en paciente inestable; retrasa cirugía salvadora.
Opción C (observación seriada): inaceptable con shock y FAST positivo; riesgo de muerte por hemorragia no controlada.

¿Cuál es la trampa del examen?
Muchos estudiantes recuerdan "trauma abdominal = TAC" sin evaluar primero la estabilidad hemodinámica.
Inestable + FAST (+) = cirugía, no imagen.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar ABC y estabilidad hemodinámica.
2. FAST en trauma abdominal con inestabilidad o mecanismo de alto riesgo.
3. Inestable + FAST (+) → laparotomía.
4. Estable → TAC para manejo selectivo/no operativo si indicado.

Perlas de examen
✅ Inestabilidad + FAST (+) = laparotomía exploratoria.
✅ TAC se reserva para pacientes ESTABLES con trauma abdominal.
✅ No confundir trauma penetrante con contuso: algoritmo similar en inestabilidad.
✅ ATLS: no retrasar cirugía por estudios en paciente en shock.
✅ FC 125 + PA 85/50 = inestabilidad hemodinámica.

Referencias
• Advanced Trauma Life Support (ATLS) 11th Edition.
• Eastern Association for the Surgery of Trauma (EAST) Guidelines.
• Western Trauma Association Critical Decisions in Trauma.
• Sabiston Textbook of Surgery.
• UpToDate: Blunt abdominal trauma in adults.`,
  },
  {
    id: "dr-q-176",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement:
      "Mujer de 24 años con antecedente de alergia a la penicilina consulta por dolor en fosa ilíaca derecha de 24 horas de evolución, asociado a fiebre y leucocitosis. Al examen físico presenta signo de Rovsing positivo, McBurney negativo y talopercusión positiva. No presenta signos de irritación peritoneal. La ecografía abdominal reporta apéndice engrosado con líquido periapendicular.\n¿Cuál es el manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Manejo antibiótico ambulatorio y control en 48 horas." },
      { id: "B", label: "B", text: "Apendicectomía laparoscópica e inicio de antibioticoterapia preoperatoria." },
      { id: "C", label: "C", text: "Observación intrahospitalaria durante 24 horas y repetir ecografía." },
      { id: "D", label: "D", text: "Drenaje percutáneo guiado por imágenes." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un cuadro clínico e imagenológico compatible con apendicitis aguda no complicada. El tratamiento de elección es la apendicectomía temprana asociada a antibioticoterapia perioperatoria adecuada.",
    keyPoints: [
      "Cuando veas: mujer joven con dolor FID, fiebre, leucocitosis, ecografía con apéndice engrosado y líquido periapendicular.",
      "Debes pensar en: apendicitis aguda no complicada → apendicectomía laparoscópica + ATB perioperatorio.",
      "McBurney negativo no excluye apendicitis; la ecografía confirma el diagnóstico.",
      "Alergia a penicilina no contraindica cirugía; ajustar esquema antibiótico perioperatorio.",
      "Tema: Apendicitis aguda.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cirugía general porque evalúa una trampa frecuente: descartar apendicitis por McBurney negativo o postergar cirugía cuando la ecografía ya confirma el diagnóstico.

La clave no es observar ni manejo ambulatorio con ATB.
La clave es:
Dolor FID + fiebre + ecografía compatible (apéndice engrosado, líquido periapendicular) = apendicectomía temprana + ATB perioperatorio.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 24 años con dolor en fosa ilíaca derecha de 24 h, fiebre y leucocitosis.
• Rovsing positivo, talopercusión positiva; McBurney negativo (no excluye diagnóstico).
• Ecografía: apéndice engrosado con líquido periapendicular.
• Sin peritonitis generalizada; alergia a penicilina (ajustar ATB, no contraindica cirugía).

Recordemos la apendicitis aguda:
• Causa más frecuente de abdomen agudo quirúrgico.
• Diagnóstico clínico + imagen (ecografía o TAC); ecografía muy útil en mujeres jóvenes.
• Tratamiento de elección: apendicectomía temprana (laparoscópica preferida) + ATB perioperatorio.
• Un signo físico negativo no excluye apendicitis si la imagen confirma.

Por lo tanto:
El manejo más adecuado es apendicectomía laparoscópica e inicio de antibioticoterapia preoperatoria.

¿Por qué la opción B es la respuesta correcta?
Cuadro clínico e imagenológico compatible con apendicitis aguda no complicada; tratamiento estándar es cirugía temprana con ATB adecuado al contexto alérgico.

¿Por qué fallan las otras opciones?
Opción A (ATB ambulatorio): inadecuado; apendicitis aguda confirmada requiere apendicectomía.
Opción C (observación 24 h): retrasa tratamiento definitivo con riesgo de perforación.
Opción D (drenaje percutáneo): reservado para apendicitis complicada (absceso), no caso no complicado.

¿Cuál es la trampa del examen?
Muchos estudiantes ven McBurney negativo y dudan del diagnóstico.
La ecografía con apéndice engrosado y líquido periapendicular confirma apendicitis.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospecha clínica de apendicitis (dolor FID, fiebre, leucocitosis).
2. Confirmar con ecografía o TAC si duda diagnóstica.
3. Apendicectomía temprana + ATB perioperatorio.
4. No esperar signos clásicos perfectos si la imagen confirma.

Perlas de examen
✅ McBurney negativo no excluye apendicitis.
✅ Ecografía útil especialmente en mujeres jóvenes (diferencial ginecológico).
✅ Apendicectomía laparoscópica = tratamiento de elección no complicada.
✅ Drenaje percutáneo solo en apendicitis complicada con absceso.
✅ Alergia a penicilina: ajustar ATB, no evitar cirugía.

Referencias
• World Society of Emergency Surgery (WSES) Guidelines for Acute Appendicitis.
• Sabiston Textbook of Surgery.
• Schwartz's Principles of Surgery.
• UpToDate: Acute Appendicitis in Adults.
• WSES Jerusalem Guidelines.`,
  },
  {
    id: "dr-q-177",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement:
      "Hombre de 40 años, de profesión obrero, consulta por una masa en la región inguinal derecha que aumenta de tamaño con los esfuerzos físicos y disminuye en reposo. Al examen físico se evidencia una masa inguinal reductible, no dolorosa, sin cambios inflamatorios locales y sin signos de irritación peritoneal.\n¿Cuál es la fisiopatología del cuadro y el manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Persistencia del proceso peritoneo-vaginal con protrusión de contenido abdominal a través del anillo inguinal profundo; reparación quirúrgica electiva." },
      { id: "B", label: "B", text: "Debilidad adquirida de la pared posterior del canal inguinal con protrusión a través del triángulo de Hesselbach; reparación quirúrgica electiva." },
      { id: "C", label: "C", text: "Debilidad de la fascia transversalis con encarcelamiento intestinal; laparotomía exploratoria urgente." },
      { id: "D", label: "D", text: "Herniación secundaria a inflamación apendicular; manejo antibiótico y observación." },
    ],
    correctOptionId: "B",
    explanation: "La presentación clínica es compatible con una hernia inguinal directa, típica en adultos que realizan esfuerzos físicos repetitivos. Su fisiopatología se relaciona con debilidad adquirida de la pared posterior del canal inguinal, permitiendo la protrusión del contenido abdominal a través del triángulo de Hesselbach. El tratamiento definitivo es la corrección quirúrgica electiva.",
    keyPoints: [
      "Cuando veas: obrero adulto con masa inguinal reductible que aumenta con esfuerzo, no dolorosa.",
      "Debes pensar en: hernia inguinal directa (triángulo de Hesselbach) → reparación quirúrgica electiva.",
      "Hernia indirecta: proceso peritoneo-vaginal persistente, anillo inguinal profundo (jóvenes).",
      "Hernia directa: debilidad adquirida pared posterior, medial a vasos epigástricos (adultos con esfuerzo).",
      "Tema: Hernias inguinales.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cirugía general porque evalúa una trampa frecuente: clasificar toda hernia inguinal como indirecta sin considerar edad, mecanismo y fisiopatología.

La clave no es hernia indirecta por defecto.
La clave es:
Adulto con esfuerzos repetitivos + masa inguinal reductible = hernia directa por debilidad de pared posterior (triángulo de Hesselbach) → reparación electiva.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 40 años, obrero (esfuerzos físicos repetitivos).
• Masa inguinal derecha que aumenta con esfuerzo y disminuye en reposo.
• Reductible, no dolorosa, sin signos inflamatorios ni peritonitis.
• Cuadro típico de hernia inguinal adquirida.

Recordemos las hernias inguinales:
• Indirecta: persistencia del proceso peritoneo-vaginal; protrusión por anillo inguinal profundo; más frecuente en jóvenes.
• Directa: debilidad adquirida de la pared posterior del canal inguinal; protrusión por triángulo de Hesselbach; medial a vasos epigástricos.
• Ambas requieren reparación quirúrgica electiva si sintomáticas o para prevenir complicaciones.
• Encarcelamiento/estrangulación = urgencia quirúrgica.

Por lo tanto:
Fisiopatología de hernia directa con reparación quirúrgica electiva (opción B).

¿Por qué la opción B es la respuesta correcta?
La presentación en adulto con esfuerzos repetitivos corresponde a hernia inguinal directa por debilidad de la pared posterior; el tratamiento definitivo es corrección quirúrgica electiva.

¿Por qué fallan las otras opciones?
Opción A (proceso peritoneo-vaginal, anillo profundo): describe hernia indirecta, típica en niños/jóvenes, no este escenario.
Opción C (encarcelamiento, laparotomía urgente): no hay irreductibilidad ni signos de estrangulación; masa reductible.
Opción D (apendicitis): sin datos de abdomen agudo inflamatorio; diagnóstico es hernia.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen hernia indirecta ante cualquier masa inguinal.
La edad, ocupación y características clínicas orientan a hernia directa adquirida.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Caracterizar la hernia (reductible, dolorosa, irreductible).
2. Diferenciar directa vs indirecta (edad, mecanismo, anatomía).
3. Reparación electiva en hernia sintomática reductible.
4. Urgencia si encarcelada o estrangulada.

Perlas de examen
✅ Directa = triángulo de Hesselbach, adquirida, adultos con esfuerzo.
✅ Indirecta = anillo profundo, proceso peritoneo-vaginal, jóvenes.
✅ Reductible + no dolorosa = reparación electiva.
✅ Irreductible = encarcelada → cirugía urgente.
✅ Obrero + masa con esfuerzo = pensar hernia directa.

Referencias
• Schwartz's Principles of Surgery.
• Sabiston Textbook of Surgery.
• European Hernia Society Guidelines.
• UpToDate: Classification, Clinical Features and Diagnosis of Inguinal Hernias.
• Nyhus classification.`,
  },
  {
    id: "dr-q-178",
    examArea: "MEDICINA INTERNA – CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement:
      "Hombre de 50 años con antecedente de hipertensión arterial en tratamiento con losartán e hidroclorotiazida consulta por cefalea intensa y visión borrosa de inicio reciente. Al examen físico presenta presión arterial de 190/110 mmHg. No se documentan signos de focalización neurológica, dolor torácico, insuficiencia cardíaca aguda ni otras manifestaciones de daño agudo a órgano blanco.\n¿Cuál es el diagnóstico y el tratamiento inicial más adecuado?",
    options: [
      { id: "A", label: "A", text: "Urgencia hipertensiva; ajuste del tratamiento antihipertensivo por vía oral y observación." },
      { id: "B", label: "B", text: "Emergencia hipertensiva; iniciar nitroprusiato intravenoso y traslado a UCI." },
      { id: "C", label: "C", text: "Crisis hipertensiva; administrar fibrinolíticos y hospitalizar." },
      { id: "D", label: "D", text: "Hipertensión arterial resistente; agregar un tercer antihipertensivo y egreso." },
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta cifras tensionales severamente elevadas acompañadas de síntomas inespecíficos, pero sin evidencia objetiva de daño agudo a órgano blanco. Esto corresponde a una urgencia hipertensiva, cuyo manejo inicial consiste en reducción gradual de la presión arterial mediante tratamiento oral.",
    keyPoints: [
      "Cuando veas: PA 190/110 con cefalea y visión borrosa pero SIN daño agudo a órgano blanco.",
      "Debes pensar en: urgencia hipertensiva → ajuste oral gradual, no nitroprusiato IV.",
      "Emergencia hipertensiva requiere daño agudo a órgano blanco (EAP, ACV, LRA aguda, etc.).",
      "La cifra tensional aislada no define emergencia; importan los síntomas de órgano diana.",
      "Tema: Crisis hipertensivas — urgencia vs emergencia.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa una trampa frecuente: clasificar como emergencia hipertensiva toda PA muy elevada sin evidencia de daño agudo a órgano blanco.

La clave no es la cifra 190/110 aislada.
La clave es:
PA severamente elevada + síntomas inespecíficos SIN daño agudo a órgano blanco = urgencia hipertensiva → tratamiento oral gradual.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 50 años con HTA en tratamiento (losartán + HCTZ).
• Cefalea intensa y visión borrosa; PA 190/110 mmHg.
• Sin focalización neurológica, dolor torácico, EAP ni otras manifestaciones de daño agudo.
• Cuadro de urgencia hipertensiva, no emergencia.

Recordemos crisis hipertensivas:
• Urgencia hipertensiva: PA muy elevada sin daño agudo a órgano blanco; manejo oral gradual en horas-días.
• Emergencia hipertensiva: PA elevada CON daño agudo (EAP, ACV, disección aórtica, eclampsia, LRA aguda).
• Reducción brusca de PA puede ser perjudicial (hipoperfusión cerebral, coronaria).
• Nitroprusiato IV reservado para emergencias con daño orgánico.

Por lo tanto:
Diagnóstico de urgencia hipertensiva; ajuste del tratamiento antihipertensivo por vía oral y observación.

¿Por qué la opción A es la respuesta correcta?
No hay daño agudo a órgano blanco; el manejo es reforzar/ajustar antihipertensivos orales con reducción gradual, no IV agresiva.

¿Por qué fallan las otras opciones?
Opción B (nitroprusiato + UCI): indicado en emergencia hipertensiva con daño orgánico; no aquí.
Opción C (fibrinolíticos): no hay ACV ni indicación de trombólisis.
Opción D (tercer antihipertensivo y egreso): simplifica el manejo; requiere observación y ajuste, no egreso inmediato sin control.

¿Cuál es la trampa del examen?
Muchos estudiantes ven 190/110 y eligen emergencia hipertensiva con nitroprusiato.
El dato decisivo es la ausencia de daño agudo a órgano blanco.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Medir PA y evaluar síntomas.
2. Buscar daño agudo a órgano blanco (neurológico, cardíaco, renal, ocular agudo).
3. Sin daño agudo → urgencia: oral gradual.
4. Con daño agudo → emergencia: IV en UCI con meta controlada.

Perlas de examen
✅ Urgencia = PA alta sin daño agudo a órgano blanco.
✅ Emergencia = PA alta CON daño agudo (EAP, ACV, disección, eclampsia).
✅ No reducir PA bruscamente en urgencia hipertensiva.
✅ Cefalea + visión borrosa pueden ser inespecíficos sin emergencia.
✅ Nitroprusiato IV solo en emergencia hipertensiva.

Referencias
• ESC/ESH Guidelines for the Management of Arterial Hypertension.
• ACC/AHA Guideline for High Blood Pressure.
• Harrison's Principles of Internal Medicine.
• UpToDate: Hypertensive Urgency and Emergency in Adults.
• JNC Guidelines.`,
  },
  {
    id: "dr-q-179",
    examArea: "NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","nefrologia"],
    statement:
      "Mujer de 70 años con antecedente de enfermedad renal crónica estadio G4 (TFG: 27 mL/min/1.73m²) consulta por fatiga, somnolencia y disnea progresiva. En los estudios de laboratorio se documenta hemoglobina de 8 g/dL. No se reportan sangrados activos ni otras causas evidentes de anemia.\n¿Cuál es la aproximación diagnóstica y la conducta más adecuada frente a la anemia?",
    options: [
      { id: "A", label: "A", text: "Solicitar perfil férrico, índice de saturación de transferrina y ferritina sérica; si se descarta ferropenia significativa, iniciar agente estimulante de eritropoyesis." },
      { id: "B", label: "B", text: "Iniciar transfusión de glóbulos rojos de manera rutinaria en todos los pacientes con enfermedad renal crónica y hemoglobina menor de 10 g/dL." },
      { id: "C", label: "C", text: "Solicitar biopsia de médula ósea para confirmar anemia secundaria a enfermedad renal crónica." },
      { id: "D", label: "D", text: "Iniciar hierro oral empírico sin necesidad de estudios complementarios." },
    ],
    correctOptionId: "A",
    explanation: "La anemia asociada a enfermedad renal crónica se produce principalmente por disminución de la producción de eritropoyetina. Sin embargo, antes de iniciar tratamiento con agentes estimulantes de eritropoyesis es obligatorio descartar deficiencia de hierro mediante estudio férrico completo.",
    keyPoints: [
      "Cuando veas: ERC G4 (TFG 27) + anemia Hb 8 g/dL sin sangrado activo evidente.",
      "Debes pensar en: estudiar hierro (ferritina, saturación transferrina) antes de EPO; si no ferropenia → agente estimulante de eritropoyesis.",
      "Anemia en ERC = principalmente déficit de eritropoyetina; suele ser normocítica normocrómica.",
      "Transfusión no es rutina en ERC; reservar para síntomas severos o preparación quirúrgica.",
      "Tema: Anemia en enfermedad renal crónica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de nefrología porque evalúa una trampa frecuente: transfundir o iniciar EPO sin descartar deficiencia de hierro primero.

La clave no es transfusión rutinaria ni hierro oral empírico.
La clave es:
ERC G4 + anemia → perfil férrico completo; si no ferropenia significativa → agente estimulante de eritropoyesis (EPO).

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 70 años con ERC estadio G4 (TFG 27 mL/min).
• Fatiga, somnolencia y disnea progresiva.
• Hemoglobina 8 g/dL sin sangrados activos evidentes.
• Anemia secundaria a enfermedad renal crónica.

Recordemos la anemia en ERC:
• Causa principal: disminución de producción de eritropoyetina por falla renal.
• Suele ser normocítica y normocrómica.
• Antes de EPO: obligatorio evaluar estado del hierro (ferritina, saturación de transferrina).
• Deficiencia de hierro absoluta o funcional debe corregirse antes o junto con EPO.
• Transfusión no es rutina; reservar para síntomas severos o sangrado activo.

Por lo tanto:
Solicitar perfil férrico; si se descarta ferropenia significativa, iniciar agente estimulante de eritropoyesis.

¿Por qué la opción A es la respuesta correcta?
KDIGO recomienda evaluar hierro antes de EPO; la transfusión rutinaria o biopsia de médula no son el enfoque inicial estándar.

¿Por qué fallan las otras opciones?
Opción B (transfusión rutinaria): no indicada de forma sistemática en ERC; riesgo de aloimmunización y complicaciones.
Opción C (biopsia de médula): no necesaria para confirmar anemia de ERC cuando el contexto es claro.
Opción D (hierro oral empírico): debe basarse en estudios férricos; el hierro IV puede ser preferido en ERC avanzada si hay deficiencia.

¿Cuál es la trampa del examen?
Muchos estudiantes ven Hb 8 g/dL y eligen transfusión inmediata.
En ERC la prioridad es caracterizar hierro y considerar EPO según guías KDIGO.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar anemia en contexto de ERC.
2. Solicitar ferritina y saturación de transferrina.
3. Corregir deficiencia de hierro si existe.
4. Iniciar EPO si anemia persistente sin ferropenia significativa.

Perlas de examen
✅ ERC + anemia → eritropoyetina deficiente como causa principal.
✅ Siempre perfil férrico antes de EPO.
✅ Transfusión no rutinaria en ERC crónica.
✅ Biopsia de médula no es paso inicial en anemia de ERC.
✅ KDIGO guía manejo de anemia en ERC.

Referencias
• KDIGO Clinical Practice Guideline for Anemia in Chronic Kidney Disease.
• Brenner and Rector's The Kidney.
• Harrison's Principles of Internal Medicine.
• UpToDate: Anemia of Chronic Kidney Disease.
• UpToDate: Treatment of anemia in dialysis and CKD.`,
  },
  {
    id: "dr-q-180",
    examArea: "REUMATOLOGÍA",
    topic: "REUMATOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","reumatologia"],
    statement:
      "Mujer de 30 años con antecedente de lupus eritematoso sistémico consulta por cuadro clínico de una semana de evolución consistente en artralgias y aparición de rash malar. Al examen físico se encuentra hemodinámicamente estable, afebril, sin criterios de respuesta inflamatoria sistémica y sin evidencia de compromiso renal, neurológico, hematológico o cardiopulmonar.\n¿Cuál es el enfoque terapéutico más adecuado?",
    options: [
      { id: "A", label: "A", text: "Iniciar pulsos de metilprednisolona intravenosa." },
      { id: "B", label: "B", text: "Iniciar ciclofosfamida intravenosa." },
      { id: "C", label: "C", text: "Optimizar tratamiento con hidroxicloroquina y administrar glucocorticoides a dosis bajas." },
      { id: "D", label: "D", text: "Ingreso a unidad de cuidados intensivos para inmunosupresión agresiva." },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta una reactivación leve del lupus eritematoso sistémico manifestada por compromiso mucocutáneo y articular, sin evidencia de afectación orgánica mayor. En este escenario, el manejo recomendado consiste en optimizar la terapia de base e iniciar glucocorticoides a dosis bajas según la intensidad de los síntomas.",
    keyPoints: [
      "Cuando veas: brote leve de LES con rash malar y artralgias, sin afectación renal, neurológica, hematológica ni cardiopulmonar.",
      "Debes pensar en: hidroxicloroquina optimizada + glucocorticoides a dosis bajas, no inmunosupresión agresiva.",
      "Hidroxicloroquina es tratamiento de base del LES en todos los pacientes sin contraindicación.",
      "Pulsos de metilprednisolona o ciclofosfamida reservados para brotes graves con afectación orgánica mayor.",
      "Tema: Manejo de exacerbaciones del lupus eritematoso sistémico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de reumatología porque evalúa una trampa frecuente: iniciar inmunosupresión agresiva ante cualquier brote de LES sin graduar la severidad.

La clave no es pulsos de esteroides ni ciclofosfamida en brote leve.
La clave es:
Brote leve (cutáneo-articular) sin afectación orgánica mayor = optimizar hidroxicloroquina + glucocorticoides a dosis bajas.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 30 años con LES conocido.
• Brote de una semana: artralgias y rash malar.
• Estable hemodinámicamente, afebril, sin afectación renal, neurológica, hematológica ni cardiopulmonar.
• Reactivación leve del LES (compromiso mucocutáneo y articular).

Recordemos el manejo del LES:
• Hidroxicloroquina: tratamiento de base en todos los pacientes con LES (reduce brotes y mortalidad).
• Brotes leves: glucocorticoides a dosis bajas según intensidad sintomática.
• Brotes graves (nefritis, neurolupus, hemólisis, etc.): pulsos de metilprednisolona ± inmunosupresores (micofenolato, ciclofosfamida).
• El rash malar es manifestación clásica; las artralgias son frecuentes en brotes leves.

Por lo tanto:
Optimizar hidroxicloroquina y administrar glucocorticoides a dosis bajas.

¿Por qué la opción C es la respuesta correcta?
El brote es leve sin afectación orgánica mayor; el manejo según EULAR/ACR es reforzar terapia de base y esteroides a dosis bajas.

¿Por qué fallan las otras opciones?
Opción A (pulsos de metilprednisolona IV): reservado para brotes graves con afectación orgánica significativa.
Opción B (ciclofosfamida IV): inmunosupresión agresiva para nefritis lúpica grave u otras manifestaciones severas.
Opción D (UCI e inmunosupresión agresiva): no hay criterios de gravedad que lo justifiquen.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "lupus" y eligen inmunosupresión agresiva.
La severidad del brote (solo cutáneo-articular) define la intensidad del tratamiento.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Graduar severidad del brote (leve, moderado, grave).
2. Asegurar hidroxicloroquina en todos los pacientes.
3. Brote leve → esteroides bajos ± AINE; brote grave → pulsos ± inmunosupresor.
4. Evaluar afectación renal, neurológica, hematológica y cardíaca siempre.

Perlas de examen
✅ Hidroxicloroquina = base del LES en todos los pacientes.
✅ Brote leve = esteroides bajos, no ciclofosfamida.
✅ Rash malar + artralgias sin daño orgánico = manejo conservador.
✅ Pulsos de metilprednisolona para brotes graves.
✅ EULAR/ACR guían intensidad del tratamiento según manifestaciones.

Referencias
• EULAR Recommendations for the Management of Systemic Lupus Erythematosus.
• American College of Rheumatology Guidelines.
• Harrison's Principles of Internal Medicine.
• Kelley and Firestein's Textbook of Rheumatology.
• UpToDate: Overview of the management of systemic lupus erythematosus.`,
  },
  {
    id: "dr-q-181",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement:
      "Hombre de 70 años es llevado al servicio de urgencias por cuadro de dolor abdominal tipo cólico, vómitos y distensión abdominal de varias horas de evolución. Al examen físico presenta distensión abdominal y dolor a la palpación en mesogastrio, sin signos de irritación peritoneal. No presenta signos apendiculares. Se realiza radiografía simple de abdomen que evidencia múltiples niveles hidroaéreos.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Obstrucción intestinal mecánica." },
      { id: "B", label: "B", text: "Apendicitis aguda." },
      { id: "C", label: "C", text: "Pancreatitis aguda." },
      { id: "D", label: "D", text: "Peritonitis secundaria." },
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta la tríada clásica de obstrucción intestinal: dolor abdominal cólico, vómitos y distensión abdominal. La presencia de niveles hidroaéreos en la radiografía abdominal apoya fuertemente este diagnóstico.",
    keyPoints: [
      "Cuando veas: anciano con dolor cólico abdominal, vómitos, distensión y múltiples niveles hidroaéreos en Rx.",
      "Debes pensar en: obstrucción intestinal mecánica.",
      "Tríada clásica: dolor cólico + vómitos + distensión abdominal.",
      "Niveles hidroaéreos en radiografía simple apoyan obstrucción intestinal.",
      "Tema: Oclusión intestinal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cirugía general porque evalúa una trampa frecuente: confundir obstrucción intestinal con apendicitis, pancreatitis o peritonitis ante dolor abdominal y vómitos.

La clave no es apendicitis ni pancreatitis como primer diagnóstico.
La clave es:
Dolor cólico + vómitos + distensión + niveles hidroaéreos = obstrucción intestinal mecánica.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 70 años con dolor abdominal tipo cólico, vómitos y distensión de varias horas.
• Distensión y dolor en mesogastrio; sin irritación peritoneal ni signos apendiculares.
• Radiografía: múltiples niveles hidroaéreos.
• Cuadro clásico de obstrucción intestinal mecánica.

Recordemos la obstrucción intestinal:
• Tríada: dolor cólico intermitente, vómitos y distensión abdominal.
• Niveles hidroaéreos en Rx simple son hallazgo característico.
• Causas frecuentes en ancianos: adherencias, hernia, neoplasia, volvulo.
• Peritonitis sugiere perforación o isquemia; apendicitis tiene semiología diferente.

Por lo tanto:
El diagnóstico más probable es obstrucción intestinal mecánica.

¿Por qué la opción A es la respuesta correcta?
La clínica y la radiografía con niveles hidroaéreos son compatibles con oclusión intestinal mecánica.

¿Por qué fallan las otras opciones?
Opción B (apendicitis): típicamente dolor en FID, signos apendiculares; no niveles hidroaéreos difusos como hallazgo principal.
Opción C (pancreatitis): dolor epigástrico continuo irradiado a espalda; no patrón obstructivo con niveles hidroaéreos.
Opción D (peritonitis secundaria): habría irritación peritoneal; aquí no hay defensa ni rebote.

¿Cuál es la trampa del examen?
Muchos estudiantes ven "dolor abdominal y vómitos" y eligen apendicitis o pancreatitis.
Los niveles hidroaéreos orientan directamente a obstrucción.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar tríada obstructiva (cólico, vómitos, distensión).
2. Confirmar con Rx simple (niveles hidroaéreos).
3. Valorar signos de isquemia o perforación (peritonitis, lactato, gas en pared).
4. Manejo: descompresión, hidratación, investigar causa y tratar.

Perlas de examen
✅ Niveles hidroaéreos = obstrucción intestinal hasta demostrar lo contrario.
✅ Dolor cólico intermitente sugiere obstrucción mecánica.
✅ Sin irritación peritoneal favorece obstrucción simple vs perforada.
✅ Anciano + obstrucción: pensar adherencias y neoplasia.
✅ Rx simple es estudio inicial en sospecha de oclusión.

Referencias
• Schwartz's Principles of Surgery.
• Sabiston Textbook of Surgery.
• World Society of Emergency Surgery Guidelines.
• UpToDate: Mechanical Small Bowel Obstruction in Adults.
• UpToDate: Large bowel obstruction in adults.`,
  },
  {
    id: "dr-q-182",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement:
      "Paciente femenina de 45 años consulta por dolor de inicio súbito en la región inguinal derecha de 24 horas de evolución. Al examen físico se evidencia una masa inguinal palpable, irreductible y dolorosa. No presenta cambios en la coloración de la piel suprayacente ni signos de perforación intestinal. Se encuentra hemodinámicamente estable.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Intentar reducción manual y dar egreso con seguimiento ambulatorio." },
      { id: "B", label: "B", text: "Solicitar tomografía abdominal contrastada y observar evolución." },
      { id: "C", label: "C", text: "Programar reparación quirúrgica electiva en los próximos meses." },
      { id: "D", label: "D", text: "Realizar valoración quirúrgica urgente y herniorrafia de urgencia." },
    ],
    correctOptionId: "D",
    explanation: "La paciente presenta una hernia inguinal encarcelada, definida por la imposibilidad de reducir el contenido herniario. Aunque aún no existen signos claros de estrangulación intestinal, el riesgo de progresión a compromiso vascular intestinal obliga a realizar manejo quirúrgico urgente.",
    keyPoints: [
      "Cuando veas: masa inguinal irreductible y dolorosa, estable, sin cambios de coloración cutánea.",
      "Debes pensar en: hernia encarcelada → valoración quirúrgica urgente y herniorrafia.",
      "Irreductibilidad define hernia encarcelada; riesgo de progresión a estrangulación.",
      "Ausencia de cambios cutáneos no excluye urgencia; no esperar estrangulación para operar.",
      "Tema: Complicaciones de las hernias de la pared abdominal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cirugía general porque evalúa una trampa frecuente: postergar cirugía porque no hay cambios de coloración cutánea ni signos de estrangulación franca.

La clave no es reducción manual ambulatoria ni cirugía electiva programada.
La clave es:
Hernia irreductible y dolorosa = encarcelada → cirugía urgente antes de estrangulación.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 45 años con dolor súbito en región inguinal derecha de 24 h.
• Masa inguinal palpable, irreductible y dolorosa.
• Sin cambios de coloración de piel ni signos de perforación intestinal.
• Hemodinámicamente estable.
• Hernia inguinal encarcelada.

Recordemos complicaciones de hernias:
• Encarcelada: contenido herniario no reducible; requiere cirugía urgente.
• Estrangulada: compromiso vascular del contenido; isquemia intestinal, cambios cutáneos, peritonitis.
• Reducción manual riesgosa si encarcelada (contenido isquémico no evaluado).
• Toda hernia encarcelada necesita valoración quirúrgica urgente.

Por lo tanto:
Realizar valoración quirúrgica urgente y herniorrafia de urgencia.

¿Por qué la opción D es la respuesta correcta?
La irreductibilidad define encarcelamiento; el riesgo de estrangulación obliga a manejo quirúrgico urgente aunque aún no haya signos cutáneos.

¿Por qué fallan las otras opciones?
Opción A (reducción manual y egreso): peligroso; puede reducir intestino isquémico y retrasar tratamiento definitivo.
Opción B (TAC y observar): retrasa cirugía necesaria en encarcelamiento.
Opción C (cirugía electiva en meses): inadecuado; encarcelada es urgencia quirúrgica.

¿Cuál es la trampa del examen?
Muchos estudiantes observan "no hay cambios de coloración" y concluyen que no es urgente.
La encarcelación sola es indicación de cirugía urgente.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar si la hernia es reductible.
2. Irreductible + dolorosa = encarcelada → cirugía urgente.
3. Signos de estrangulación (cambios cutáneos, peritonitis) confirman gravedad.
4. No reducción manual de rutina en encarceladas.

Perlas de examen
✅ Encarcelada = irreductible → cirugía urgente.
✅ Estrangulada = compromiso vascular; puede haber cambios cutáneos.
✅ Estabilidad hemodinámica no excluye urgencia quirúrgica.
✅ No programar cirugía electiva en hernia encarcelada.
✅ Reducción manual ambulatoria es peligrosa.

Referencias
• Schwartz's Principles of Surgery.
• Sabiston Textbook of Surgery.
• European Hernia Society Guidelines.
• World Society of Emergency Surgery Guidelines.
• UpToDate: Overview of abdominal wall hernias in adults.`,
  },
  {
    id: "dr-q-183",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement:
      "Femenina de 60 años consulta por dolor abdominal epigástrico intenso de inicio súbito, irradiado hacia la espalda, acompañado de náuseas y vómitos. Al examen físico presenta dolor a la palpación en epigastrio y una equimosis importante a nivel periumbilical.\n¿A qué hallazgo semiológico corresponde este signo y cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Signo de Grey Turner; colecistitis aguda." },
      { id: "B", label: "B", text: "Signo de Cullen; pancreatitis aguda grave." },
      { id: "C", label: "C", text: "Signo de Cullen; perforación de úlcera péptica." },
      { id: "D", label: "D", text: "Signo de Grey Turner; obstrucción intestinal." },
    ],
    correctOptionId: "B",
    explanation: "La presencia de equimosis periumbilical corresponde al signo de Cullen, un hallazgo asociado a hemorragia retroperitoneal. En el contexto de dolor epigástrico irradiado a la espalda, náuseas y vómitos, orienta fuertemente hacia pancreatitis aguda grave, especialmente de tipo necrohemorrágico.",
    keyPoints: [
      "Cuando veas: dolor epigástrico súbito irradiado a espalda + equimosis periumbilical en mujer de 60 años.",
      "Debes pensar en: signo de Cullen + pancreatitis aguda grave (posible necrohemorrágica).",
      "Cullen = equimosis periumbilical por hemorragia retroperitoneal.",
      "Grey Turner = equimosis en flancos; no confundir con Cullen.",
      "Tema: Pancreatitis aguda — signos de gravedad.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cirugía/gastroenterología porque evalúa una trampa frecuente: confundir signo de Cullen (periumbilical) con signo de Grey Turner (flancos).

La clave no es colecistitis ni perforación de úlcera como diagnóstico principal.
La clave es:
Dolor epigástrico irradiado a espalda + equimosis periumbilical (Cullen) = pancreatitis aguda grave.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 60 años con dolor epigástrico intenso súbito irradiado a espalda.
• Náuseas y vómitos.
• Equimosis importante a nivel periumbilical (signo de Cullen).
• Cuadro compatible con pancreatitis aguda grave, posiblemente necrohemorrágica.

Recordemos pancreatitis aguda y signos de gravedad:
• Signo de Cullen: equimosis periumbilical por hemorragia retroperitoneal.
• Signo de Grey Turner: equimosis en flancos (también sugiere hemorragia retroperitoneal).
• Ambos indican pancreatitis grave o necrohemorrágica.
• Dolor epigástrico irradiado a espalda es síntoma cardinal de pancreatitis.

Por lo tanto:
Signo de Cullen; diagnóstico más probable: pancreatitis aguda grave (opción B).

¿Por qué la opción B es la respuesta correcta?
La equimosis periumbilical es signo de Cullen, asociado a hemorragia retroperitoneal en contexto de dolor epigástrico típico de pancreatitis aguda grave.

¿Por qué fallan las otras opciones?
Opción A (Grey Turner + colecistitis): Grey Turner es en flancos, no periumbilical; colecistitis no explica Cullen.
Opción C (Cullen + perforación úlcera): Cullen es correcto pero el cuadro clínico (dolor a espalda) orienta a pancreatitis, no perforación primaria.
Opción D (Grey Turner + obstrucción): localización incorrecta del signo y diagnóstico incompatible.

¿Cuál es la trampa del examen?
Muchos estudiantes recuerdan equimosis abdominal pero confunden Cullen (ombligo) con Grey Turner (flancos).

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Dolor epigástrico a espalda → sospechar pancreatitis.
2. Buscar signos de gravedad (Cullen, Grey Turner, hipotensión, falla orgánica).
3. Cullen = periumbilical; Grey Turner = flancos.
4. Confirmar con lipasa/amilasa y imagen según severidad.

Perlas de examen
✅ Cullen = equimosis periumbilical.
✅ Grey Turner = equimosis en flancos.
✅ Ambos sugieren pancreatitis grave/necrohemorrágica.
✅ Dolor epigástrico a espalda = pancreatitis hasta demostrar lo contrario.
✅ Atlanta Classification define severidad de pancreatitis aguda.

Referencias
• Atlanta Classification of Acute Pancreatitis.
• Harrison's Principles of Internal Medicine.
• Sabiston Textbook of Surgery.
• Schwartz's Principles of Surgery.
• UpToDate: Clinical manifestations and diagnosis of acute pancreatitis.`,
  },
  {
    id: "dr-q-184",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement:
      "Paciente masculino de 25 años es llevado al servicio de urgencias tras sufrir una herida por arma blanca en el abdomen durante un intento de atraco. Refiere dolor abdominal progresivo y náuseas. Al examen físico presenta signo de Blumberg positivo. La ecografía FAST evidencia líquido libre intraabdominal.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Solicitar tomografía abdominal contrastada." },
      { id: "B", label: "B", text: "Observación clínica seriada durante 24 horas." },
      { id: "C", label: "C", text: "Laparotomía exploratoria urgente." },
      { id: "D", label: "D", text: "Lavado peritoneal diagnóstico." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta trauma abdominal penetrante asociado a signos de irritación peritoneal y FAST positivo para hemoperitoneo. Estos hallazgos constituyen indicación de exploración quirúrgica urgente debido a la alta probabilidad de lesión visceral significativa.",
    keyPoints: [
      "Cuando veas: trauma abdominal penetrante (arma blanca) + peritonitis (Blumberg +) + FAST positivo.",
      "Debes pensar en: laparotomía exploratoria urgente, no TAC ni observación.",
      "Peritonitis en trauma penetrante = indicación absoluta de exploración quirúrgica.",
      "FAST positivo con líquido libre en penetrante sugiere hemoperitoneo y lesión visceral.",
      "Tema: Trauma abdominal penetrante.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cirugía de trauma porque evalúa una trampa frecuente: solicitar TAC u observar en trauma penetrante con peritonitis y FAST positivo.

La clave no es tomografía ni observación seriada.
La clave es:
Arma blanca abdominal + peritonitis (Blumberg +) + FAST positivo = laparotomía exploratoria urgente.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 25 años con herida por arma blanca en abdomen.
• Dolor abdominal progresivo, náuseas, signo de Blumberg positivo (irritación peritoneal).
• FAST positivo para líquido libre intraabdominal.
• Alta probabilidad de lesión visceral significativa y hemoperitoneo.

Recordemos trauma abdominal penetrante:
• Peritonitis es indicación absoluta de laparotomía exploratoria.
• FAST positivo identifica líquido libre; en penetrante suele ser sangre.
• TAC puede usarse en pacientes estables selectos sin peritonitis; no retrasa cirugía aquí.
• Lavado peritoneal diagnóstico está en desuso; FAST lo reemplazó.

Por lo tanto:
La conducta más adecuada es laparotomía exploratoria urgente.

¿Por qué la opción C es la respuesta correcta?
Peritonitis + FAST positivo en trauma penetrante constituye indicación de exploración quirúrgica urgente por alta probabilidad de lesión visceral.

¿Por qué fallan las otras opciones?
Opción A (TAC): retrasa cirugía salvadora; peritonitis obliga exploración inmediata.
Opción B (observación 24 h): inaceptable con peritonitis y líquido libre documentado.
Opción D (lavado peritoneal): obsoleto; además no trata la lesión, solo diagnostica.

¿Cuál es la trampa del examen?
Muchos estudiantes buscan estabilidad hemodinámica para elegir TAC.
La peritonitis es indicación quirúrgica independientemente de la presión arterial inicial.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar ABC en trauma penetrante abdominal.
2. FAST y examen físico (peritonitis, evisceración, impalpable).
3. Peritonitis o inestabilidad + FAST (+) → laparotomía.
4. Estable sin peritonitis → manejo selectivo con posible TAC.

Perlas de examen
✅ Peritonitis en penetrante = laparotomía urgente.
✅ Blumberg positivo = irritación peritoneal.
✅ FAST (+) + penetrante = hemoperitoneo probable.
✅ No TAC si hay indicación quirúrgica clara.
✅ ATLS/EAST: peritonitis es signo absoluto de exploración.

Referencias
• Advanced Trauma Life Support (ATLS) 11th Edition.
• Eastern Association for the Surgery of Trauma (EAST) Guidelines.
• Western Trauma Association Critical Decisions in Trauma.
• Sabiston Textbook of Surgery.
• UpToDate: Penetrating abdominal trauma in adults.`,
  },
  {
    id: "dr-q-185",
    examArea: "GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","gastroenterologia"],
    statement:
      "Paciente masculino de 50 años con antecedente de colecistectomía laparoscópica consulta por dolor epigástrico de varios meses de evolución. Refiere que el dolor aparece posterior al consumo de alimentos y ha sido progresivo en frecuencia. Niega pérdida de peso, disfagia, odinofagia, melena, hematemesis o consumo frecuente de antiinflamatorios no esteroideos. Recibió tratamiento con inhibidor de bomba de protones durante 3 semanas sin mejoría clínica.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Continuar inhibidor de bomba de protones por otros 6 meses." },
      { id: "B", label: "B", text: "Solicitar endoscopia digestiva alta." },
      { id: "C", label: "C", text: "Solicitar colonoscopia total." },
      { id: "D", label: "D", text: "Realizar manejo sintomático y control en un año." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta dispepsia persistente pese a tratamiento con inhibidores de bomba de protones y tiene más de 50 años. En este contexto está indicada la realización de endoscopia digestiva alta para descartar patología estructural del tracto gastrointestinal superior.",
    keyPoints: [
      "Cuando veas: dispepsia persistente en hombre >50 años sin respuesta a IBP tras 3 semanas.",
      "Debes pensar en: endoscopia digestiva alta para descartar patología estructural.",
      "Dispepsia alarmante o refractaria a IBP en >50 años requiere EDA.",
      "Colonoscopia no evalúa tracto gastrointestinal superior.",
      "Tema: Dispepsia — indicación de endoscopia.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de gastroenterología porque evalúa una trampa frecuente: continuar IBP meses o manejo sintomático en dispepsia persistente en paciente >50 años sin respuesta al tratamiento.

La clave no es prolongar IBP 6 meses ni control en un año.
La clave es:
Dispepsia persistente + >50 años + falla a IBP 3 semanas = endoscopia digestiva alta.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 50 años post-colecistectomía con dolor epigástrico postprandial de meses.
• Sin pérdida de peso, disfagia, melena ni uso frecuente de AINE.
• Tratamiento con IBP 3 semanas sin mejoría.
• Dispepsia persistente que requiere estudio estructural.

Recordemos la dispepsia:
• En pacientes >50 años o con síntomas de alarma: endoscopia digestiva alta indicada.
• Falta de respuesta a IBP obliga a reconsiderar diagnóstico (úlcera, H. pylori, neoplasia, etc.).
• EDA es estudio de elección para patología estructural del tracto superior.
• Colonoscopia no evalúa estómago ni duodeno.

Por lo tanto:
La conducta más adecuada es solicitar endoscopia digestiva alta.

¿Por qué la opción B es la respuesta correcta?
Las guías ACG/BSG indican EDA en dispepsia persistente en mayores de 50 años o refractaria a IBP para descartar patología orgánica.

¿Por qué fallan las otras opciones?
Opción A (IBP 6 meses más): inadecuado sin estudio; retrasa diagnóstico de patología estructural.
Opción C (colonoscopia): no evalúa epigastrio/duodeno; indicación incorrecta para dispepsia alta.
Opción D (sintomático y control en un año): inaceptable con dispepsia persistente y edad >50.

¿Cuál es la trampa del examen?
Muchos estudiantes ven "sin pérdida de peso" y eligen continuar IBP.
La edad >50 y la falta de respuesta a IBP son indicaciones de endoscopia.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar síntomas de alarma (peso, sangrado, disfagia).
2. Ensayo de IBP en dispepsia no investigada según edad y guía local.
3. Si persiste o >50 años → EDA.
4. Tratar según hallazgos (H. pylori, úlcera, etc.).

Perlas de examen
✅ >50 años + dispepsia persistente = EDA.
✅ Falla a IBP = reconsiderar diagnóstico, indicar EDA.
✅ Sin pérdida de peso no excluye necesidad de endoscopia por edad.
✅ Colonoscopia no sustituye EDA en dispepsia epigástrica.
✅ ACG/BSG guían manejo de dispepsia no investigada.

Referencias
• American College of Gastroenterology Guidelines on Dyspepsia.
• British Society of Gastroenterology Guidelines.
• Harrison's Principles of Internal Medicine.
• Sleisenger and Fordtran's Gastrointestinal and Liver Disease.
• UpToDate: Approach to dyspepsia in adults.`,
  },
  {
    id: "dr-q-186",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement:
      "Paciente masculino de 30 años con antecedente de miocardiopatía hipertrófica consulta para seguimiento de fibrilación auricular no valvular. No tiene antecedentes de accidente cerebrovascular ni otros eventos embólicos. El cálculo del puntaje CHA₂DS₂-VA es de 0 puntos.\n¿Cuál es el siguiente paso más adecuado en el manejo?",
    options: [
      { id: "A", label: "A", text: "Iniciar anticoagulación con warfarina." },
      { id: "B", label: "B", text: "Iniciar anticoagulación con apixabán." },
      { id: "C", label: "C", text: "No iniciar anticoagulación." },
      { id: "D", label: "D", text: "Iniciar aspirina." },
    ],
    correctOptionId: "B",
    explanation: "Los pacientes con fibrilación auricular asociada a miocardiopatía hipertrófica presentan un riesgo tromboembólico elevado independientemente del puntaje CHA₂DS₂-VA. Las guías actuales recomiendan anticoagulación oral crónica en todos estos pacientes, siendo los anticoagulantes orales directos la estrategia preferida en ausencia de contraindicaciones.",
    keyPoints: [
      "Anticoagulación obligatoria.",
      "Tema: Fibrilación auricular en miocardiopatía hipertrófica.",
      "La miocardiopatía hipertrófica aumenta significativamente el riesgo tromboembólico.",
      "La fibrilación auricular es una complicación frecuente de la miocardiopatía hipertrófica.",
      "El CHA₂DS₂-VA no guía la anticoagulación en estos pacientes.",
    ],
    theoryContent: `CARDIOLOGÍA — BY DR Q.
Fibrilación auricular en miocardiopatía hipertrófica.

Trampa:
Muchos estudiantes observan: "CHA₂DS₂-VA = 0." Y responden: "No anticoagular."

Referencias:
ESC Guidelines for the Management of Atrial Fibrillation.; AHA/ACC Guideline for the Diagnosis and Treatment of Hypertrophic Cardiomyopathy.; ACC/AHA/HRS Guideline for Atrial Fibrillation.; Braunwald's Heart Disease.`,
  },
  {
    id: "dr-q-187",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement:
      "Paciente masculino de 20 años es llevado al servicio de urgencias tras presentar una crisis epiléptica tónico-clónica generalizada de aproximadamente 2 minutos de duración. A su llegada se encuentra en fase posictal con somnolencia progresivamente reversible. No presenta actividad convulsiva activa. Niega antecedentes de epilepsia, consumo de sustancias psicoactivas o factores desencadenantes evidentes. Los signos vitales se encuentran dentro de límites normales.\n¿Cuál es el tratamiento inicial de elección en este paciente?",
    options: [
      { id: "A", label: "A", text: "Iniciar fenitoína intravenosa de inmediato." },
      { id: "B", label: "B", text: "Administrar lorazepam intravenoso." },
      { id: "C", label: "C", text: "Medidas de soporte, evaluación diagnóstica y observación clínica." },
      { id: "D", label: "D", text: "Intubación orotraqueal e inducción de coma farmacológico." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presentó una crisis convulsiva autolimitada que ya ha finalizado y actualmente se encuentra en fase posictal. En ausencia de actividad convulsiva persistente o estatus epiléptico, la conducta inicial consiste en estabilización, monitorización, búsqueda de causas precipitantes y estudio diagnóstico.",
    keyPoints: [
      "Medidas de soporte y estudio etiológico.",
      "Tema: Primera crisis epiléptica.",
      "La primera medida siempre es asegurar ABCDE.",
      "La glucemia capilar debe evaluarse en toda crisis convulsiva.",
      "Las benzodiacepinas son el tratamiento de elección de la convulsión activa.",
    ],
    theoryContent: `NEUROLOGÍA — BY DR Q.
Primera crisis epiléptica.

Trampa:
Muchos estudiantes leen: "Crisis epiléptica." Y responden: Lorazepam o fenitoína.

Referencias:
American Academy of Neurology Guidelines.; Neurocritical Care Society Guidelines for Status Epilepticus.; Harrison's Principles of Internal Medicine.; Adams and Victor's Principles of Neurology.`,
  },
  {
    id: "dr-q-188",
    examArea: "NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neumologia"],
    statement:
      "Paciente masculino de 30 años consulta por disnea súbita y dolor torácico intenso en el hemitórax derecho de inicio brusco. Al examen físico presenta hipotensión, taquicardia, timpanismo a la percusión y ausencia de ruidos respiratorios en el hemitórax derecho.\n¿Cuál es la fisiopatología más probable de este cuadro?",
    options: [
      { id: "A", label: "A", text: "Acumulación de líquido en el espacio pleural con colapso pulmonar progresivo." },
      { id: "B", label: "B", text: "Entrada de aire al espacio pleural con mecanismo valvular unidireccional que aumenta progresivamente la presión intratorácica." },
      { id: "C", label: "C", text: "Obstrucción arterial pulmonar secundaria a tromboembolismo venoso profundo." },
      { id: "D", label: "D", text: "Inflamación alveolar difusa con alteración de la membrana alveolocapilar.\n" },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un neumotórax a tensión. Su fisiopatología consiste en la entrada de aire al espacio pleural mediante un mecanismo valvular que permite el ingreso de aire durante la inspiración pero impide su salida durante la espiración, generando aumento progresivo de la presión intratorácica, colapso pulmonar y compromiso hemodinámico.",
    keyPoints: [
      "Neumotórax a tensión.",
      "Tema: Neumotórax a tensión.",
      "El neumotórax a tensión es una emergencia médica.",
      "Produce choque obstructivo por disminución del retorno venoso.",
      "El mecanismo fisiopatológico es una válvula unidireccional.",
    ],
    theoryContent: `NEUMOLOGÍA — BY DR Q.
Neumotórax a tensión.

Trampa:
Muchos estudiantes leen: "Dolor torácico súbito y disnea." Y responden: Tromboembolismo pulmonar.

Referencias:
Advanced Trauma Life Support (ATLS) 11th Edition.; Harrison's Principles of Internal Medicine.; Murray & Nadel's Textbook of Respiratory Medicine.; Tintinalli's Emergency Medicine.`,
  },
  {
    id: "dr-q-189",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement:
      "Paciente femenina de 25 años consulta por sangrado vaginal abundante y dolor pélvico de inicio súbito. No utiliza métodos anticonceptivos y no recuerda la fecha de su última menstruación debido a ciclos irregulares. La ecografía transvaginal evidencia una masa anexial compleja asociada a líquido libre en cavidad peritoneal.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Enfermedad inflamatoria pélvica." },
      { id: "B", label: "B", text: "Embarazo ectópico roto." },
      { id: "C", label: "C", text: "Quiste ovárico simple." },
      { id: "D", label: "D", text: "Aborto incompleto." },
    ],
    correctOptionId: "B",
    explanation: "La combinación de dolor pélvico agudo, sangrado vaginal, amenorrea incierta, masa anexial y líquido libre intraperitoneal es altamente sugestiva de embarazo ectópico roto, una emergencia ginecológica potencialmente mortal.",
    keyPoints: [
      "Embarazo ectópico roto.",
      "Tema: Embarazo ectópico.",
      "Toda mujer en edad fértil con dolor abdominal debe considerarse embarazada hasta demostrar lo contrario.",
      "La tríada clásica es dolor abdominal, amenorrea y sangrado vaginal.",
      "La masa anexial es un hallazgo característico del embarazo ectópico.",
    ],
    theoryContent: `GINECOLOGÍA Y OBSTETRICIA — BY DR Q.
Embarazo ectópico.

Trampa:
Muchos estudiantes leen: "Sangrado vaginal." Y responden: Aborto.

Referencias:
Williams Obstetrics.; ACOG Practice Bulletin: Tubal Ectopic Pregnancy.; Novak's Gynecology.; UpToDate: Ectopic Pregnancy Clinical Manifestations and Diagnosis.`,
  },
  {
    id: "dr-q-190",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement:
      "Paciente femenina de 27 años, primigesta, con embarazo de 12 semanas confirmado por ecografía, consulta por sangrado vaginal leve de 12 horas de evolución. Niega dolor abdominal significativo. La ecografía transvaginal evidencia un embarazo intrauterino viable con actividad cardíaca fetal presente.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Observación y seguimiento." },
      { id: "B", label: "B", text: "Legrado uterino." },
      { id: "C", label: "C", text: "Administración de misoprostol." },
      { id: "D", label: "D", text: "Derivación inmediata a quirófano de urgencias." },
    ],
    correctOptionId: "A",
    explanation: "La paciente presenta una amenaza de aborto. La presencia de sangrado vaginal durante el primer trimestre con embrión viable, actividad cardíaca fetal presente y cuello uterino cerrado indica un embarazo potencialmente viable que requiere vigilancia clínica y seguimiento obstétrico.",
    keyPoints: [
      "Amenaza de aborto.",
      "Tema: Hemorragia del primer trimestre.",
      "La amenaza de aborto cursa con sangrado vaginal y cuello uterino cerrado.",
      "La presencia de actividad cardíaca fetal indica viabilidad gestacional.",
      "No todo sangrado del primer trimestre implica pérdida del embarazo.",
    ],
    theoryContent: `GINECOLOGÍA Y OBSTETRICIA — BY DR Q.
Hemorragia del primer trimestre.

Trampa:
Muchos estudiantes leen: "Sangrado vaginal." Y responden: Legrado o misoprostol.

Referencias:
Williams Obstetrics.; ACOG Practice Bulletin: Early Pregnancy Loss.; Gabbe's Obstetrics: Normal and Problem Pregnancies.; Novak's Gynecology.`,
  },
  {
    id: "dr-q-191",
    examArea: "PSIQUIATRÍA",
    topic: "PSIQUIATRÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","psiquiatria"],
    statement:
      "Paciente masculino de 24 años, estudiante universitario, consulta acompañado por su madre debido a cambios de comportamiento de aproximadamente tres semanas de evolución. Refiere sentirse \"lleno de energía\", con disminución importante de la necesidad de sueño, durmiendo apenas 3 horas por noche sin presentar fatiga durante el día. Además, manifiesta múltiples proyectos de negocios simultáneos, planes de inversión de alto riesgo y gastos excesivos en apuestas en línea y compras innecesarias. La familia refiere que habla de manera acelerada, cambia constantemente de tema durante las conversaciones y se muestra más irritable de lo habitual. Niega antecedentes psiquiátricos previos, consumo de sustancias psicoactivas o síntomas depresivos recientes.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Trastorno bipolar." },
      { id: "B", label: "B", text: "Depresión mayor." },
      { id: "C", label: "C", text: "Trastorno de ansiedad." },
      { id: "D", label: "D", text: "Esquizofrenia." },
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta un episodio maníaco caracterizado por disminución de la necesidad de sueño, aumento de energía, verborrea, fuga de ideas, conductas de riesgo y deterioro funcional. La presencia de un episodio maníaco es suficiente para establecer el diagnóstico de trastorno bipolar tipo I.",
    keyPoints: [
      "Episodio maníaco.",
      "Tema: Trastorno bipolar.",
      "Un episodio maníaco establece el diagnóstico de trastorno bipolar tipo I.",
      "La disminución de la necesidad de sueño es un síntoma cardinal de manía.",
      "La verborrea y la fuga de ideas son hallazgos clásicos.",
    ],
    theoryContent: `PSIQUIATRÍA — BY DR Q.
Trastorno bipolar.

Trampa:
Muchos estudiantes observan: "Irritabilidad." Y responden: Ansiedad.

Referencias:
DSM-5-TR.; Kaplan & Sadock's Synopsis of Psychiatry.; Stahl's Essential Psychopharmacology.; American Psychiatric Association Practice Guideline for Bipolar Disorder.`,
  },
  {
    id: "dr-q-192",
    examArea: "PSIQUIATRÍA",
    topic: "PSIQUIATRÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","psiquiatria"],
    statement:
      "Paciente masculino de 26 años, sin antecedentes médicos de importancia, es llevado por su familia debido a cambios progresivos de comportamiento durante los últimos tres meses, caracterizados por aislamiento social, deterioro del autocuidado y dificultades en su desempeño laboral. En la última semana ha manifestado escuchar voces que le indican que no confíe en sus familiares porque están conspirando en su contra.\n¿Cuál es el tratamiento de primera línea para esta condición?",
    options: [
      { id: "A", label: "A", text: "Iniciar antipsicótico de segunda generación." },
      { id: "B", label: "B", text: "Iniciar sertralina." },
      { id: "C", label: "C", text: "Iniciar el litio." },
      { id: "D", label: "D", text: "Iniciar clonazepam en monoterapia." },
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta un primer episodio psicótico compatible con esquizofrenia. El tratamiento inicial de elección consiste en antipsicóticos de segunda generación debido a su eficacia sobre los síntomas psicóticos y su mejor perfil de efectos adversos extrapiramidales.",
    keyPoints: [
      "Esquizofrenia.",
      "Tema: Tratamiento inicial de la esquizofrenia.",
      "Las alucinaciones auditivas son el síntoma psicótico más frecuente en esquizofrenia.",
      "Los delirios persecutorios son una manifestación clásica.",
      "El afecto aplanado corresponde a un síntoma negativo.",
    ],
    theoryContent: `PSIQUIATRÍA — BY DR Q.
Tratamiento inicial de la esquizofrenia.

Trampa:
Muchos estudiantes observan: "Irritabilidad y agitación." Y responden: Benzodiacepinas.

Referencias:
DSM-5-TR.; Kaplan & Sadock's Synopsis of Psychiatry.; American Psychiatric Association Practice Guideline for Schizophrenia.; Stahl's Essential Psychopharmacology.`,
  },
  {
    id: "dr-q-193",
    examArea: "EPIDEMIOLOGÍA Y BIOESTADÍSTICA",
    topic: "EPIDEMIOLOGÍA Y BIOESTADÍSTICA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","epidemiologia_y_bioestadistica"],
    statement:
      "En un estudio de cohorte realizado en una población adulta se evaluó la relación entre el tabaquismo y el desarrollo de cáncer de pulmón. Tras un seguimiento de 7 años, se encontró que el riesgo relativo (RR) de desarrollar cáncer de pulmón en fumadores comparado con no fumadores fue de 15.\n¿Cómo se interpreta este resultado?",
    options: [
      { id: "A", label: "A", text: "Los fumadores tienen 15 veces más riesgo de desarrollar cáncer de pulmón que los no fumadores." },
      { id: "B", label: "B", text: "Los fumadores tienen un 15% más de riesgo de desarrollar cáncer de pulmón." },
      { id: "C", label: "C", text: "No hay asociación entre fumar y cáncer de pulmón." },
      { id: "D", label: "D", text: "Los fumadores tienen un riesgo 15 veces menor de desarrollar cáncer de pulmón." },
    ],
    correctOptionId: "A",
    explanation: "El riesgo relativo compara la incidencia de un evento entre un grupo expuesto y un grupo no expuesto. Un RR de 15 indica que los individuos expuestos al factor de riesgo presentan una probabilidad 15 veces mayor de desarrollar el desenlace estudiado.",
    keyPoints: [
      "Asociación positiva entre exposición y enfermedad.",
      "Tema: Interpretación del riesgo relativo.",
      "El riesgo relativo se calcula en estudios de cohorte.",
      "RR = 1 indica ausencia de asociación.",
      "RR > 1 indica factor de riesgo.",
    ],
    theoryContent: `EPIDEMIOLOGÍA Y BIOESTADÍSTICA — BY DR Q.
Interpretación del riesgo relativo.

Trampa:
Muchos estudiantes confunden: "15 veces más riesgo" con "15% más riesgo".

Referencias:
Gordis Epidemiology.; Rothman Epidemiology: An Introduction.; Fletcher & Fletcher Clinical Epidemiology.; Essentials of Medical Statistics.`,
  },
  {
    id: "dr-q-194",
    examArea: "MEDICINA PREVENTIVA Y SALUD PÚBLICA",
    topic: "MEDICINA PREVENTIVA Y SALUD PÚBLICA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","medicina_preventiva_y_salud_publica"],
    statement:
      "Paciente masculino de 53 años con antecedente de tabaquismo de 20 paquetes-año, fumador activo en la actualidad. Consulta acompañado por su esposa, quien solicita valoración médica para realizar tamizajes preventivos acordes a la edad. El paciente refiere encontrarse completamente asintomático y considera innecesaria la atención médica.\n¿Cuál es la conducta médica más apropiada en este paciente?",
    options: [
      { id: "A", label: "A", text: "Solicitar tomografía computarizada de tórax de baja dosis para tamizaje de cáncer de pulmón." },
      { id: "B", label: "B", text: "Solicitar radiografía de tórax anual." },
      { id: "C", label: "C", text: "Solicitar broncoscopia diagnóstica." },
      { id: "D", label: "D", text: "No realizar ningún estudio al encontrarse asintomático." },
    ],
    correctOptionId: "A",
    explanation: "El paciente es un fumador activo con antecedente significativo de tabaquismo y se encuentra dentro del grupo de riesgo para cáncer de pulmón. Las guías actuales recomiendan tamizaje mediante tomografía computarizada de tórax de baja dosis en pacientes seleccionados de alto riesgo, incluso en ausencia de síntomas.",
    keyPoints: [
      "Tamizaje para cáncer de pulmón con tomografía de baja dosis.",
      "Tema: Tamizaje de cáncer de pulmón.",
      "El cáncer de pulmón puede ser asintomático en etapas iniciales.",
      "La tomografía de baja dosis es el método recomendado para tamizaje.",
      "La radiografía de tórax no es una estrategia efectiva de cribado.",
    ],
    theoryContent: `MEDICINA PREVENTIVA Y SALUD PÚBLICA — BY DR Q.
Tamizaje de cáncer de pulmón.

Trampa:
Muchos estudiantes leen: "Paciente asintomático." Y responden: "No necesita estudios."

Referencias:
United States Preventive Services Task Force (USPSTF) Lung Cancer Screening Recommendations.; National Comprehensive Cancer Network (NCCN) Guidelines.; American Cancer Society Guidelines for Lung Cancer Screening.; Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-195",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement:
      "Paciente femenina de 77 años con antecedente de fibrilación auricular no valvular en tratamiento con betabloqueadores para control de la frecuencia cardíaca. Refiere antecedente de accidente cerebrovascular isquémico hace 5 años, sin secuelas neurológicas significativas. Niega antecedentes de hemorragia digestiva, hemorragia intracraneal u otras contraindicaciones para anticoagulación.\n¿Cuál es la conducta más adecuada para la prevención de eventos tromboembólicos?",
    options: [
      { id: "A", label: "A", text: "Mantener únicamente el tratamiento con betabloqueadores." },
      { id: "B", label: "B", text: "Iniciar ácido acetilsalicílico." },
      { id: "C", label: "C", text: "Iniciar anticoagulación oral con un anticoagulante oral directo." },
      { id: "D", label: "D", text: "No iniciar anticoagulación debido al antecedente de accidente cerebrovascular." },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta fibrilación auricular no valvular y antecedente de accidente cerebrovascular isquémico previo, lo que la ubica en un grupo de muy alto riesgo tromboembólico. En ausencia de contraindicaciones, la anticoagulación oral está claramente indicada para reducir el riesgo de nuevos eventos cerebrovasculares.",
    keyPoints: [
      "Anticoagulación oral obligatoria.",
      "Tema: Prevención tromboembólica en fibrilación auricular.",
      "El antecedente de ACV es uno de los factores de mayor peso en CHA₂DS₂-VASc.",
      "La fibrilación auricular aumenta significativamente el riesgo de embolia cerebral.",
      "Los anticoagulantes orales directos son preferidos en fibrilación auricular no valvular.",
    ],
    theoryContent: `CARDIOLOGÍA — BY DR Q.
Prevención tromboembólica en fibrilación auricular.

Trampa:
Muchos estudiantes leen: "Tuvo un accidente cerebrovascular." Y responden: "No anticoagular por riesgo de sangrado."

Referencias:
ESC Guidelines for the Management of Atrial Fibrillation.; ACC/AHA/HRS Guideline for Atrial Fibrillation.; Braunwald's Heart Disease.; Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-196",
    examArea: "NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","nefrologia"],
    statement:
      "Paciente masculino de 60 años con antecedente de enfermedad renal crónica consulta por debilidad muscular progresiva y parestesias en extremidades. Se realiza un electrocardiograma que evidencia alteraciones de la conducción cardíaca.\n¿Cuál es la alteración electrolítica más probable?",
    options: [
      { id: "A", label: "A", text: "Hipocalcemia." },
      { id: "B", label: "B", text: "Hipokalemia." },
      { id: "C", label: "C", text: "Hiperkalemia." },
      { id: "D", label: "D", text: "Hipernatremia." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta manifestaciones neuromusculares y cambios electrocardiográficos clásicos de hiperkalemia. La enfermedad renal crónica es uno de los principales factores de riesgo para el desarrollo de esta alteración electrolítica debido a la disminución de la excreción renal de potasio.",
    keyPoints: [
      "Hiperkalemia.",
      "Tema: Trastornos del potasio.",
      "Las ondas T picudas son el hallazgo más temprano de hiperkalemia.",
      "La enfermedad renal crónica es una causa frecuente de hiperkalemia.",
      "El ensanchamiento del QRS indica mayor gravedad.",
    ],
    theoryContent: `NEFROLOGÍA — BY DR Q.
Trastornos del potasio.

Trampa:
Muchos estudiantes observan: "Debilidad muscular." Y responden: Hipokalemia.

Referencias:
KDIGO Clinical Practice Guidelines.; Harrison's Principles of Internal Medicine.; Brenner and Rector's The Kidney.; UpToDate: Clinical Manifestations and Treatment of Hyperkalemia.`,
  },
  {
    id: "dr-q-197",
    examArea: "PEDIATRÍA",
    topic: "PEDIATRÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","pediatria"],
    statement:
      "Paciente masculino de 4 años, llevado a consulta por su madre. Tiene esquema de vacunación completo para la edad y no presenta antecedentes patológicos de importancia.Consulta por cuadro de fiebre de 4 días de evolución asociado a malestar general y mialgias. Ha recibido únicamente acetaminofén con mejoría parcial de la sintomatología.La madre refiere que durante las últimas 24 horas ha aparecido un exantema eritematoso intenso en ambas mejillas con apariencia de \"bofetada\". Posteriormente, las lesiones se han extendido al tronco y extremidades adoptando un patrón reticulado o en encaje. El paciente se encuentra en buen estado general, sin compromiso respiratorio, sin prurito y con adecuada tolerancia a la vía oral.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Sarampión." },
      { id: "B", label: "B", text: "Eritema infeccioso (quinta enfermedad)." },
      { id: "C", label: "C", text: "Rubéola." },
      { id: "D", label: "D", text: "Exantema súbito (roséola infantil)." },
    ],
    correctOptionId: "B",
    explanation: "El cuadro clínico es característico de eritema infeccioso, enfermedad causada por el Parvovirus B19. La aparición de eritema facial con aspecto de \"mejillas abofeteadas\" seguida de un exantema reticulado en tronco y extremidades constituye una presentación clásica.",
    keyPoints: [
      "Eritema infeccioso por Parvovirus B19.",
      "Tema: Exantemas virales de la infancia.",
      "El eritema infeccioso es causado por Parvovirus B19.",
      "El signo de \"mejillas abofeteadas\" es característico.",
      "El exantema reticulado es altamente sugestivo del diagnóstico.",
    ],
    theoryContent: `PEDIATRÍA — BY DR Q.
Exantemas virales de la infancia.

Trampa:
Muchos estudiantes leen: "Fiebre y exantema." Y responden: Sarampión.

Referencias:
Nelson Textbook of Pediatrics.; Red Book: American Academy of Pediatrics.; Rudolph's Pediatrics.; UpToDate: Erythema Infectiosum (Parvovirus B19 Infection).`,
  },
  {
    id: "dr-q-198",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement:
      "Paciente femenina de 50 años, con antecedentes de hipertensión arterial y diabetes mellitus, mal adherente al tratamiento, consulta por inicio súbito de debilidad en hemicuerpo derecho y dificultad para hablar de 2 horas de evolución. Al examen neurológico presenta hemiparesia derecha, desviación de la mirada y NIHSS de 12 puntos.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Administrar ácido acetilsalicílico inmediatamente." },
      { id: "B", label: "B", text: "Solicitar tomografía cerebral simple urgente y valorar trombólisis intravenosa." },
      { id: "C", label: "C", text: "Iniciar anticoagulación con heparina de bajo peso molecular." },
      { id: "D", label: "D", text: "Observación clínica durante 24 horas y repetir valoración neurológica." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un síndrome neurológico focal de inicio súbito altamente sugestivo de accidente cerebrovascular isquémico agudo dentro de la ventana terapéutica para reperfusión. La conducta inicial consiste en realizar neuroimagen urgente para descartar hemorragia intracraneal y determinar elegibilidad para trombólisis.",
    keyPoints: [
      "Código ACV y tomografía urgente.",
      "Tema: Accidente cerebrovascular isquémico agudo.",
      "Todo déficit neurológico focal súbito debe considerarse un ACV hasta demostrar lo contrario.",
      "La tomografía simple es el estudio inicial de elección.",
      "La ventana habitual para trombólisis intravenosa es de hasta 4.5 horas en pacientes seleccionados.",
    ],
    theoryContent: `NEUROLOGÍA — BY DR Q.
Accidente cerebrovascular isquémico agudo.

Trampa:
Muchos estudiantes leen: "Presión arterial 160/90 mmHg." Y responden: Control agresivo de la presión arterial.

Referencias:
American Heart Association/American Stroke Association Guidelines.; European Stroke Organisation Guidelines.; Adams and Victor's Principles of Neurology.; Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-199",
    examArea: "UROLOGÍA",
    topic: "UROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","urologia"],
    statement:
      "Paciente masculino de 35 años con tabaquismo activo e índice paquete-año de 20, consulta por hematuria macroscópica indolora de una semana de evolución. Niega síntomas urinarios irritativos, fiebre o dolor lumbar.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Iniciar tratamiento antibiótico empírico y control en 7 días." },
      { id: "B", label: "B", text: "Solicitar citología urinaria y cistoscopia." },
      { id: "C", label: "C", text: "Solicitar biopsia renal percutánea." },
      { id: "D", label: "D", text: "Iniciar manejo para litiasis urinaria y egreso." },
    ],
    correctOptionId: "B",
    explanation: "La hematuria macroscópica indolora en un paciente fumador debe considerarse carcinoma urotelial hasta demostrar lo contrario. La evaluación diagnóstica inicial incluye estudio del tracto urinario, siendo la cistoscopia el método fundamental para descartar neoplasia vesical.",
    keyPoints: [
      "Cáncer urotelial.",
      "Tema: Hematuria y cáncer de vejiga.",
      "La hematuria macroscópica indolora es el síntoma clásico del cáncer vesical.",
      "El tabaquismo es el principal factor de riesgo para carcinoma urotelial.",
      "La ausencia de eritrocitos dismórficos orienta a origen no glomerular.",
    ],
    theoryContent: `UROLOGÍA — BY DR Q.
Hematuria y cáncer de vejiga.

Trampa:
Muchos estudiantes leen: "Paciente joven." Y descartan malignidad. Sin embargo:

Referencias:
Campbell-Walsh-Wein Urology.; European Association of Urology (EAU) Guidelines on Non-Muscle-Invasive Bladder Cancer.; American Urological Association (AUA) Hematuria Guidelines.; Smith & Tanagho's General Urology.`,
  },
  {
    id: "dr-q-200",
    examArea: "NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","nefrologia"],
    statement:
      "Femenina de 22 años, con antecedente de cáncer renal en su padre diagnosticado a los 52 años, consulta por hematuria macroscópica de 6 meses de evolución. Ha sido valorada por urología con estudios de imagen y cistoscopia sin hallazgos patológicos. ¿Cuál es la conducta más apropiada a seguir?",
    options: [
      { id: "A", label: "A", text: "Seguimiento por medicina familiar sin estudios adicionales." },
      { id: "B", label: "B", text: "Remisión a nefrología para estudio de hematuria de origen glomerular." },
      { id: "C", label: "C", text: "Repetir cistoscopia en 6 meses." },
      { id: "D", label: "D", text: "Realizar nefrectomía profiláctica por antecedente familiar." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta hematuria persistente con estudio urológico completamente negativo. En este contexto debe sospecharse una causa nefrológica, especialmente de origen glomerular, que requiere estudio especializado.",
    keyPoints: [
      "Origen nefrológico de la hematuria.",
      "Tema: Hematuria glomerular.",
      "Toda hematuria persistente requiere estudio completo.",
      "Un estudio urológico negativo obliga a pensar en origen renal.",
      "La nefropatía por IgA es una causa frecuente de hematuria persistente.",
    ],
    theoryContent: `NEFROLOGÍA — BY DR Q.
Hematuria glomerular.

Trampa:
Muchos estudiantes leen: "Cáncer renal en el padre." Y responden: Continuar estudios urológicos.

Referencias:
KDIGO Clinical Practice Guidelines.; Brenner and Rector's The Kidney.; Campbell-Walsh-Wein Urology.; Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-201",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","infectologia"],
    statement:
      "Paciente masculino de 40 años, sin antecedentes de relevancia, consulta por fiebre persistente de dos semanas de evolución, acompañada de astenia y pérdida de peso no intencional. Al examen físico se identifica un soplo diastólico en foco aórtico.\n¿Cuál es el diagnóstico más probable y la conducta a seguir?",
    options: [
      { id: "A", label: "A", text: "Fiebre reumática aguda; iniciar antiinflamatorios." },
      { id: "B", label: "B", text: "Endocarditis infecciosa; solicitar hemocultivos y ecocardiograma." },
      { id: "C", label: "C", text: "Tuberculosis diseminada; solicitar baciloscopias seriadas." },
      { id: "D", label: "D", text: "Linfoma no Hodgkin; solicitar biopsia ganglionar." },
    ],
    correctOptionId: "B",
    explanation: "La presencia de fiebre prolongada asociada a un nuevo soplo cardíaco debe hacer sospechar endocarditis infecciosa hasta demostrar lo contrario. El estudio inicial incluye hemocultivos seriados y ecocardiografía para confirmar el diagnóstico e identificar compromiso valvular.",
    keyPoints: [
      "Endocarditis infecciosa.",
      "Tema: Endocarditis infecciosa.",
      "Fiebre más soplo cardíaco obliga a descartar endocarditis infecciosa.",
      "Los hemocultivos deben obtenerse antes de iniciar antibióticos.",
      "El ecocardiograma es fundamental para el diagnóstico.",
    ],
    theoryContent: `INFECTOLOGÍA — BY DR Q.
Endocarditis infecciosa.

Trampa:
Muchos estudiantes se enfocan en: La pérdida de peso. Y responden: Tuberculosis o neoplasia.

Referencias:
European Society of Cardiology Guidelines for Infective Endocarditis.; American Heart Association Scientific Statement on Infective Endocarditis.; Harrison's Principles of Internal Medicine.; Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.`,
  },
  {
    id: "dr-q-202",
    examArea: "PEDIATRÍA - CARDIOLOGÍA PEDIÁTRICA",
    topic: "CARDIOLOGÍA PEDIÁTRICA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia_pediatrica"],
    statement:
      "Paciente masculino de 6 años es llevado a consulta por sus padres debido a fatiga progresiva y disnea de esfuerzo en las últimas semanas. En la exploración física se ausculta un soplo mesosistólico en foco pulmonar asociado a desdoblamiento fijo del segundo ruido cardíaco.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Comunicación interauricular." },
      { id: "B", label: "B", text: "Comunicación interventricular." },
      { id: "C", label: "C", text: "Persistencia del conducto arterioso." },
      { id: "D", label: "D", text: "Tetralogía de Fallot." },
    ],
    correctOptionId: "A",
    explanation: "La presencia de desdoblamiento fijo del segundo ruido cardíaco asociado a un soplo sistólico eyectivo en foco pulmonar constituye el hallazgo clásico de la comunicación interauricular.",
    keyPoints: [
      "Comunicación interauricular.",
      "Tema: Cardiopatías congénitas acianóticas.",
      "El desdoblamiento fijo de S2 es el hallazgo clásico de la CIA.",
      "La CIA es una cardiopatía congénita acianótica.",
      "El soplo se produce por aumento del flujo pulmonar.",
    ],
    theoryContent: `CARDIOLOGÍA PEDIÁTRICA — BY DR Q.
Cardiopatías congénitas acianóticas.

Trampa:
Muchos estudiantes recuerdan: "Soplo pulmonar." Y responden: Persistencia del conducto arterioso.

Referencias:
Nelson Textbook of Pediatrics.; Moss & Adams' Heart Disease in Infants, Children, and Adolescents.; Braunwald's Heart Disease.; American Heart Association Guidelines for Congenital Heart Disease.`,
  },
  {
    id: "dr-q-203",
    examArea: "NEUROCIRUGÍA - URGENCIAS",
    topic: "URGENCIAS",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","urgencias"],
    statement:
      "Paciente masculino de 43 años es llevado a urgencias tras un accidente de tránsito con trauma craneoencefálico severo. Al ingreso presenta apertura ocular únicamente al dolor, emisión de sonidos incomprensibles y respuesta motora inadecuada al estímulo doloroso.\n¿Cuál es el puntaje de la escala de Glasgow?",
    options: [
      { id: "A", label: "A", text: "6 puntos." },
      { id: "B", label: "B", text: "7 puntos." },
      { id: "C", label: "C", text: "8 puntos." },
      { id: "D", label: "D", text: "9 puntos." },
    ],
    correctOptionId: "B",
    explanation: "La escala de Glasgow se calcula sumando la respuesta ocular, verbal y motora. En este paciente la apertura ocular al dolor corresponde a 2 puntos, los sonidos incomprensibles a 2 puntos y la respuesta motora inadecuada (retirada al dolor) a 3 puntos, para un total de 7 puntos.",
    keyPoints: [
      "Glasgow 7/15.",
      "Tema: Escala de Coma de Glasgow.",
      "Glasgow ≤ 8 indica trauma craneoencefálico grave.",
      "La respuesta motora es el componente con mayor valor pronóstico.",
      "La apertura ocular al dolor corresponde a 2 puntos.",
    ],
    theoryContent: `URGENCIAS — BY DR Q.
Escala de Coma de Glasgow.

Trampa:
Muchos estudiantes olvidan: La puntuación individual de cada componente. O confunden: Flexión anormal con retirada al dolor.

Referencias:
Advanced Trauma Life Support (ATLS).; Brain Trauma Foundation Guidelines.; Greenberg's Handbook of Neurosurgery.; Tintinalli's Emergency Medicine.`,
  },
  {
    id: "dr-q-204",
    examArea: "PEDIATRÍA - CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement:
      "Lactante masculino de 2 meses es llevado a urgencias por irritabilidad y disminución de la succión de inicio súbito. Al examen físico presenta taquicardia de 230 lpm. El electrocardiograma evidencia una taquicardia supraventricular de complejos estrechos, regular y sin ondas P visibles.\n¿Cuál es el tratamiento de elección?",
    options: [
      { id: "A", label: "A", text: "Amiodarona intravenosa." },
      { id: "B", label: "B", text: "Adenosina intravenosa." },
      { id: "C", label: "C", text: "Cardioversión eléctrica sincronizada." },
      { id: "D", label: "D", text: "Metoprolol intravenoso." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta una taquicardia supraventricular estable. En lactantes hemodinámicamente estables, la adenosina es el tratamiento farmacológico de elección debido a su capacidad para bloquear transitoriamente la conducción a través del nodo auriculoventricular.",
    keyPoints: [
      "Taquicardia supraventricular.",
      "Tema: Taquicardia supraventricular en pediatría.",
      "La TSV es la arritmia sintomática más frecuente en lactantes.",
      "La adenosina es el tratamiento farmacológico de elección en pacientes estables.",
      "Debe administrarse en bolo intravenoso rápido.",
    ],
    theoryContent: `CARDIOLOGÍA — BY DR Q.
Taquicardia supraventricular en pediatría.

Trampa:
Muchos estudiantes leen: "230 lpm." Y responden: Cardioversión.

Referencias:
Nelson Textbook of Pediatrics.; Pediatric Advanced Life Support (PALS).; Braunwald's Heart Disease.; Moss & Adams' Heart Disease in Infants, Children, and Adolescents.`,
  },
  {
    id: "dr-q-205",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement:
      "Paciente masculino de 57 años, con antecedentes de hipertensión arterial y obesidad, consulta por cefalea intensa de inicio súbito, asociada a náuseas y fotofobia. Al examen físico presenta rigidez de nuca sin focalización neurológica.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Meningitis bacteriana aguda." },
      { id: "B", label: "B", text: "Hemorragia subaracnoidea." },
      { id: "C", label: "C", text: "Migraña con aura." },
      { id: "D", label: "D", text: "Encefalitis viral." },
    ],
    correctOptionId: "B",
    explanation: "La hemorragia subaracnoidea clásicamente se presenta con cefalea intensa de inicio súbito (\"la peor cefalea de su vida\"), acompañada de signos de irritación meníngea como rigidez de nuca y fotofobia.",
    keyPoints: [
      "Hemorragia subaracnoidea.",
      "Tema: Hemorragia subaracnoidea.",
      "La hemorragia subaracnoidea produce la clásica \"cefalea en trueno\".",
      "La causa más frecuente es la ruptura de un aneurisma sacular.",
      "La rigidez de nuca es un signo de irritación meníngea.",
    ],
    theoryContent: `NEUROLOGÍA — BY DR Q.
Hemorragia subaracnoidea.

Trampa:
Muchos estudiantes leen: "Fotofobia." Y responden: Meningitis.

Referencias:
Adams and Victor's Principles of Neurology.; Greenberg's Handbook of Neurosurgery.; American Heart Association Guidelines for Aneurysmal Subarachnoid Hemorrhage.; Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-206",
    examArea: "PEDIATRÍA",
    topic: "PEDIATRÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","pediatria"],
    statement:
      "Paciente masculino de 1 año es llevado a urgencias por fiebre, tos y dificultad respiratoria progresiva de 2 días de evolución. Al examen físico presenta sibilancias difusas, tiraje intercostal y saturación de oxígeno de 92% al aire ambiente. No tiene antecedentes de episodios similares.\n¿Cuál es el tratamiento más adecuado?",
    options: [
      { id: "A", label: "A", text: "Salbutamol inhalado y prednisolona oral." },
      { id: "B", label: "B", text: "Oxígeno suplementario y medidas de soporte." },
      { id: "C", label: "C", text: "Ceftriaxona intravenosa." },
      { id: "D", label: "D", text: "Adrenalina intramuscular." },
    ],
    correctOptionId: "B",
    explanation: "El cuadro clínico es compatible con bronquiolitis aguda, cuyo tratamiento es fundamentalmente de soporte. La oxigenoterapia está indicada cuando existe hipoxemia y no se recomienda el uso rutinario de broncodilatadores, corticoides o antibióticos.",
    keyPoints: [
      "Bronquiolitis aguda.",
      "Tema: Bronquiolitis.",
      "El VSR es la principal causa de bronquiolitis.",
      "La bronquiolitis ocurre principalmente en menores de 2 años.",
      "El tratamiento es fundamentalmente de soporte.",
    ],
    theoryContent: `PEDIATRÍA — BY DR Q.
Bronquiolitis.

Trampa:
Muchos estudiantes leen: "Sibilancias." Y responden: Salbutamol.

Referencias:
Nelson Textbook of Pediatrics.; American Academy of Pediatrics Clinical Practice Guideline: Bronchiolitis.; Manual de Pediatría de la AEP.; UpToDate: Bronchiolitis in Infants and Children.`,
  },
  {
    id: "dr-q-207",
    examArea: "GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","gastroenterologia"],
    statement:
      "Paciente masculino de 55 años, con antecedente de gonalgia izquierda en manejo frecuente con antiinflamatorios no esteroideos, consulta por hematemesis abundante y melena de inicio reciente. Al examen físico presenta taquicardia sin hipotensión.\nLa endoscopia digestiva alta reporta:\n• Úlcera gástrica de 1.5 cm en curvatura menor.\n• Vaso visible no sangrante en el lecho ulceroso.\n• Sin sangrado activo al momento del procedimiento.\nLos laboratorios muestran:\n• Hemoglobina: 8 g/dL.\n• Nitrógeno ureico (BUN): 32 mg/dL.\n¿Cuál es la clasificación de Forrest, la puntuación de Glasgow-Blatchford y el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Forrest Ia, Glasgow-Blatchford bajo riesgo (<3), gastritis erosiva por AINE." },
      { id: "B", label: "B", text: "Forrest IIa, Glasgow-Blatchford alto riesgo (>7), úlcera péptica sangrante secundaria a AINE." },
      { id: "C", label: "C", text: "Forrest IIc, Glasgow-Blatchford bajo riesgo (<3), úlcera gástrica cicatrizada." },
      { id: "D", label: "D", text: "Forrest III, Glasgow-Blatchford intermedio, síndrome de Mallory-Weiss." },
    ],
    correctOptionId: "B",
    explanation: "El vaso visible no sangrante en el lecho ulceroso corresponde a Forrest IIa. La hemorragia digestiva alta con anemia significativa, taquicardia y contexto de AINEs eleva el Glasgow-Blatchford por encima de 7, orientando a úlcera péptica secundaria a antiinflamatorios.",
    keyPoints: [
      "Forrest IIa: vaso visible no sangrante en lecho ulceroso.",
      "Glasgow-Blatchford >7 indica alto riesgo de reintervención o mortalidad.",
      "Los AINEs son una causa frecuente de úlcera péptica complicada.",
      "Forrest Ia implica sangrado activo; Forrest IIc, mancha hemática adherida.",
      "El BUN elevado puede reflejar absorción de sangre digestiva.",
    ],
    theoryContent: `GASTROENTEROLOGÍA — BY DR Q.
Hemorragia digestiva alta y clasificación de Forrest.

La clave no es la hemoglobina aislada.
La clave es: vaso visible no sangrante = Forrest IIa.

Forrest:
• Ia/Ib: sangrado activo.
• IIa: vaso visible no sangrante.
• IIb: coágulo adherido.
• IIc: mancha hemática plana.
• III: base limpia.

Glasgow-Blatchford estratifica riesgo clínico; valores altos sugieren manejo hospitalario estrecho.

Trampa:
Confundir Forrest IIa (vaso visible) con Forrest Ia (sangrado activo).

Referencias:
ACG Guidelines on Upper GI Bleeding.; Sleisenger and Fordtran's Gastrointestinal and Liver Disease.`,
  },
  {
    id: "dr-q-208",
    examArea: "ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","endocrinologia"],
    statement:
      "Paciente femenina de 25 años consulta por fatiga progresiva, intolerancia al frío, aumento de peso no intencional y estreñimiento de varios meses de evolución. Refiere además caída del cabello y piel seca. Los estudios de laboratorio muestran TSH elevada y T4 libre disminuida.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Hipertiroidismo primario." },
      { id: "B", label: "B", text: "Hipotiroidismo primario." },
      { id: "C", label: "C", text: "Hipotiroidismo central." },
      { id: "D", label: "D", text: "Tiroiditis subaguda." },
    ],
    correctOptionId: "B",
    explanation: "La elevación de TSH asociada a disminución de T4 libre es el patrón bioquímico característico del hipotiroidismo primario, generalmente secundario a enfermedad tiroidea primaria.",
    keyPoints: [
      "Hipotiroidismo primario.",
      "Tema: Hipotiroidismo.",
      "TSH elevada y T4 libre baja = hipotiroidismo primario.",
      "La causa más frecuente es la tiroiditis de Hashimoto.",
      "La intolerancia al frío es un síntoma clásico.",
    ],
    theoryContent: `ENDOCRINOLOGÍA — BY DR Q.
Hipotiroidismo.

Trampa:
Muchos estudiantes memorizan: TSH alta = problema hipofisario. Sin embargo: El dato decisivo es:

Referencias:
Williams Textbook of Endocrinology.; Harrison's Principles of Internal Medicine.; American Thyroid Association Guidelines.; Greenspan's Basic and Clinical Endocrinology.`,
  },
  {
    id: "dr-q-209",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement:
      "Paciente masculino de 60 años, con antecedentes de fibrilación auricular en manejo para control del ritmo, consulta por disnea súbita y dolor torácico. Al ingreso presenta hipotensión e hipoxemia. El electrocardiograma muestra patrón S1Q3T3 y la angiotomografía pulmonar evidencia un defecto de llenado en la arteria pulmonar derecha.\n¿Cuál es el siguiente paso más adecuado en el manejo?",
    options: [
      { id: "A", label: "A", text: "Anticoagulación con heparina de bajo peso molecular y manejo ambulatorio." },
      { id: "B", label: "B", text: "Iniciar anticoagulación oral con apixabán." },
      { id: "C", label: "C", text: "Trombólisis sistémica." },
      { id: "D", label: "D", text: "Colocación de filtro de vena cava inferior." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un tromboembolismo pulmonar de alto riesgo (masivo), evidenciado por hipotensión arterial e inestabilidad hemodinámica. En ausencia de contraindicaciones, la trombólisis sistémica constituye el tratamiento de elección.",
    keyPoints: [
      "Tromboembolismo pulmonar de alto riesgo.",
      "Tema: Tromboembolismo pulmonar.",
      "La hipotensión define un TEP de alto riesgo.",
      "El patrón S1Q3T3 puede observarse en sobrecarga aguda del ventrículo derecho.",
      "La angioTAC es el estudio diagnóstico de elección en pacientes estables.",
    ],
    theoryContent: `CARDIOLOGÍA — BY DR Q.
Tromboembolismo pulmonar.

Trampa:
Muchos estudiantes leen: "Defecto de llenado en arteria pulmonar." Y responden: Anticoagulación.

Referencias:
European Society of Cardiology Guidelines for Pulmonary Embolism.; CHEST Guidelines for Venous Thromboembolism.; Harrison's Principles of Internal Medicine.; Braunwald's Heart Disease.`,
  },
  {
    id: "dr-q-210",
    examArea: "PEDIATRÍA - ALERGOLOGÍA",
    topic: "ALERGOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","alergologia"],
    statement:
      "Paciente masculino de 15 años es llevado a urgencias tras presentar urticaria generalizada y edema de labios aproximadamente 15 minutos después de ingerir mariscos. Al examen físico presenta hipotensión, taquicardia y estridor laríngeo.\n¿Cuál es el manejo de primera línea?",
    options: [
      { id: "A", label: "A", text: "Hidrocortisona intravenosa." },
      { id: "B", label: "B", text: "Clorfeniramina intravenosa." },
      { id: "C", label: "C", text: "Adrenalina intramuscular." },
      { id: "D", label: "D", text: "Salbutamol inhalado." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un cuadro de anafilaxia caracterizado por compromiso cutáneo, respiratorio y cardiovascular tras la exposición a un alérgeno. La adrenalina intramuscular es el tratamiento de primera línea y debe administrarse de forma inmediata.",
    keyPoints: [
      "Anafilaxia.",
      "Tema: Anafilaxia.",
      "La adrenalina intramuscular es el tratamiento de primera línea en anafilaxia.",
      "No existen contraindicaciones absolutas para administrar adrenalina en una anafilaxia.",
      "La hipotensión indica compromiso cardiovascular.",
    ],
    theoryContent: `ALERGOLOGÍA — BY DR Q.
Anafilaxia.

Trampa:
Muchos estudiantes leen: "Urticaria." Y responden: Antihistamínicos.

Referencias:
World Allergy Organization (WAO) Anaphylaxis Guidelines.; European Academy of Allergy and Clinical Immunology (EAACI) Guidelines.; Nelson Textbook of Pediatrics.; Tintinalli's Emergency Medicine.`,
  },
  {
    id: "dr-q-211",
    examArea: "DERMATOLOGÍA",
    topic: "DERMATOLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","dermatologia"],
    statement:
      "Mujer de 33 años, con antecedente de epilepsia en tratamiento con carbamazepina, consulta por malestar general, fiebre y edema palpebral, seguido de la aparición de un exantema máculo-papular pruriginoso que compromete aproximadamente el 17% de la superficie corporal.\n¿Cuál es el diagnóstico y tratamiento más adecuado?",
    options: [
      { id: "A", label: "A", text: "Síndrome de Stevens-Johnson; suspensión de carbamazepina y manejo de soporte hospitalario." },
      { id: "B", label: "B", text: "Síndrome DRESS; suspensión inmediata de carbamazepina e inicio de corticoides sistémicos." },
      { id: "C", label: "C", text: "Necrólisis epidérmica tóxica; desbridamiento quirúrgico urgente." },
      { id: "D", label: "D", text: "Exantema medicamentoso simple; continuar carbamazepina y administrar antihistamínicos." },
    ],
    correctOptionId: "B",
    explanation: "La combinación de fiebre, edema facial, exantema extenso y exposición a un fármaco de alto riesgo como la carbamazepina es altamente sugestiva de síndrome DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms), una reacción de hipersensibilidad potencialmente grave.",
    keyPoints: [
      "Síndrome DRESS.",
      "Tema: Reacciones cutáneas graves inducidas por medicamentos.",
      "La carbamazepina es una causa clásica de síndrome DRESS.",
      "El edema facial es uno de los hallazgos más característicos.",
      "La eosinofilia es frecuente pero no indispensable para sospechar el diagnóstico.",
    ],
    theoryContent: `DERMATOLOGÍA — BY DR Q.
Reacciones cutáneas graves inducidas por medicamentos.

Trampa:
Muchos estudiantes leen: "Exantema por medicamento." Y responden: Exantema medicamentoso simple.

Referencias:
Fitzpatrick's Dermatology.; Bolognia Dermatology.; Harrison's Principles of Internal Medicine.; UpToDate: Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS).`,
  },
  {
    id: "dr-q-212",
    examArea: "MEDICINA INTERNA - TOXICOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","toxicologia"],
    statement:
      "Un hombre de 20 años es encontrado inconsciente tras permanecer toda la noche dentro de una cochera con el motor de un automóvil encendido. Los gases arteriales muestran pH de 7.2, PaO₂ de 190 mmHg y saturación de oxígeno de 88%, mientras que la pulsioximetría registra una saturación de 98%.\n¿Cuál es la explicación más probable para esta disociación?",
    options: [
      { id: "A", label: "A", text: "Metahemoglobinemia secundaria a intoxicación por nitritos." },
      { id: "B", label: "B", text: "Intoxicación por monóxido de carbono con formación de carboxihemoglobina." },
      { id: "C", label: "C", text: "Error técnico de la pulsioximetría por hipotermia." },
      { id: "D", label: "D", text: "Hipoventilación alveolar secundaria a depresión respiratoria." },
    ],
    correctOptionId: "B",
    explanation: "La intoxicación por monóxido de carbono produce formación de carboxihemoglobina, la cual disminuye el transporte de oxígeno sin alterar significativamente la PaO₂. Además, la pulsioximetría convencional no diferencia adecuadamente entre oxihemoglobina y carboxihemoglobina, generando lecturas falsamente normales.",
    keyPoints: [
      "Intoxicación por monóxido de carbono.",
      "Tema: Intoxicación por monóxido de carbono.",
      "El monóxido de carbono produce carboxihemoglobina.",
      "La PaO₂ puede ser normal en la intoxicación por CO.",
      "La pulsioximetría puede ser falsamente normal.",
    ],
    theoryContent: `TOXICOLOGÍA — BY DR Q.
Intoxicación por monóxido de carbono.

Trampa:
Muchos estudiantes leen: "Saturación 98%." Y descartan hipoxia. Sin embargo:

Referencias:
Goldfrank's Toxicologic Emergencies.; Tintinalli's Emergency Medicine.; Harrison's Principles of Internal Medicine.; UpToDate: Carbon Monoxide Poisoning.`,
  },
  {
    id: "dr-q-213",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement:
      "Paciente femenina de 25 años, sexualmente activa, con antecedentes de relaciones sexuales de riesgo y no uso habitual de preservativo, consulta por dolor en hipogastrio y dolor pélvico de intensidad fluctuante. Al examen ginecológico se evidencia dolor a la movilización cervical sin dolor anexial.\n¿Cuál es la enfermedad más probable y el tratamiento inicial recomendado?",
    options: [
      { id: "A", label: "A", text: "Embarazo ectópico; manejo quirúrgico urgente." },
      { id: "B", label: "B", text: "Enfermedad inflamatoria pélvica; ceftriaxona más doxiciclina y metronidazol." },
      { id: "C", label: "C", text: "Endometriosis; anticonceptivos orales combinados." },
      { id: "D", label: "D", text: "Quiste ovárico funcional; observación clínica." },
    ],
    correctOptionId: "B",
    explanation: "La presencia de dolor pélvico asociado a dolor a la movilización cervical en una mujer con factores de riesgo para infecciones de transmisión sexual es altamente sugestiva de enfermedad inflamatoria pélvica (EIP). El tratamiento empírico debe iniciarse tan pronto como exista sospecha clínica.",
    keyPoints: [
      "Enfermedad inflamatoria pélvica.",
      "Tema: Enfermedad inflamatoria pélvica.",
      "El dolor a la movilización cervical es un criterio clínico importante para EIP.",
      "El tratamiento no debe retrasarse esperando resultados microbiológicos.",
      "Chlamydia y Gonococo son los agentes más frecuentes.",
    ],
    theoryContent: `GINECOLOGÍA Y OBSTETRICIA — BY DR Q.
Enfermedad inflamatoria pélvica.

Trampa:
Muchos estudiantes se enfocan en: El dolor pélvico. Sin embargo: El dato decisivo es:

Referencias:
CDC Sexually Transmitted Infections Treatment Guidelines.; ACOG Practice Bulletin: Pelvic Inflammatory Disease.; Novak's Gynecology.; Williams Gynecology.`,
  },
  {
    id: "dr-q-214",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement:
      "Joven de 16 años presenta episodios recurrentes de cefalea unilateral, pulsátil, acompañada de náuseas y fotofobia. Refiere que los síntomas suelen desencadenarse o exacerbarse después de realizar actividad física intensa.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Cefalea tensional." },
      { id: "B", label: "B", text: "Migraña." },
      { id: "C", label: "C", text: "Cefalea en racimos." },
      { id: "D", label: "D", text: "Hipertensión intracraneal idiopática." },
    ],
    correctOptionId: "B",
    explanation: "La migraña se caracteriza por episodios recurrentes de cefalea pulsátil, habitualmente unilateral, asociada a náuseas, fotofobia y empeoramiento con la actividad física.",
    keyPoints: [
      "Migraña.",
      "Tema: Migraña.",
      "La migraña suele ser unilateral y pulsátil.",
      "Las náuseas y la fotofobia son síntomas clásicos.",
      "La actividad física suele empeorar la crisis.",
    ],
    theoryContent: `NEUROLOGÍA — BY DR Q.
Migraña.

Trampa:
Muchos estudiantes leen: "Cefalea después del gimnasio." Y responden: Cefalea por esfuerzo.

Referencias:
International Classification of Headache Disorders (ICHD-3).; Adams and Victor's Principles of Neurology.; Harrison's Principles of Internal Medicine.; American Headache Society Guidelines.`,
  },
  {
    id: "dr-q-215",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement:
      "Paciente de 40 años, sin antecedentes de importancia, consulta por cefalea recurrente localizada en región occipital y cervical. Refiere que los episodios suelen aparecer durante periodos de alta carga laboral y estrés. Ha utilizado analgésicos con mejoría parcial de los síntomas.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Migraña." },
      { id: "B", label: "B", text: "Cefalea tensional." },
      { id: "C", label: "C", text: "Cefalea en racimos." },
      { id: "D", label: "D", text: "Neuralgia occipital." },
    ],
    correctOptionId: "B",
    explanation: "La cefalea tensional es la cefalea primaria más frecuente. Se caracteriza por dolor opresivo, habitualmente bilateral, localizado en región occipital, frontal o cervical, estrechamente relacionado con estrés emocional o tensión muscular.",
    keyPoints: [
      "Cefalea tensional.",
      "Tema: Cefaleas primarias.",
      "La cefalea tensional es la cefalea primaria más frecuente.",
      "El estrés emocional es uno de los principales desencadenantes.",
      "El dolor suele ser opresivo y no pulsátil.",
    ],
    theoryContent: `NEUROLOGÍA — BY DR Q.
Cefaleas primarias.

Trampa:
Muchos estudiantes leen: "Región occipital." Y responden: Neuralgia occipital.

Referencias:
International Classification of Headache Disorders (ICHD-3).; Adams and Victor's Principles of Neurology.; Harrison's Principles of Internal Medicine.; American Headache Society Guidelines.`,
  },
  {
    id: "dr-q-216",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement:
      "Paciente de 27 años consulta de forma recurrente al servicio de urgencias por episodios de dolor retroocular intenso, asociado a inyección conjuntival y epífora ipsilateral. Refiere múltiples consultas previas por el mismo cuadro. Durante una de las atenciones, un residente de neurología indica oxígeno suplementario, con mejoría rápida y significativa de los síntomas.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Migraña." },
      { id: "B", label: "B", text: "Neuralgia del trigémino." },
      { id: "C", label: "C", text: "Cefalea en racimos." },
      { id: "D", label: "D", text: "Cefalea tensional." },
    ],
    correctOptionId: "C",
    explanation: "La cefalea en racimos se caracteriza por crisis recurrentes de dolor orbitario o retroorbitario extremadamente intenso, asociado a síntomas autonómicos ipsilaterales como lagrimeo, inyección conjuntival y congestión nasal. El oxígeno al 100% es uno de los tratamientos abortivos de elección.",
    keyPoints: [
      "Cefalea en racimos.",
      "Tema: Cefaleas trigémino-autonómicas.",
      "La cefalea en racimos es una cefalea trigémino-autonómica.",
      "El dolor suele ser orbitario o retroorbitario.",
      "El lagrimeo y la inyección conjuntival son hallazgos clásicos.",
    ],
    theoryContent: `NEUROLOGÍA — BY DR Q.
Cefaleas trigémino-autonómicas.

Trampa:
Muchos estudiantes leen: "Dolor ocular." Y responden: Migraña.

Referencias:
International Classification of Headache Disorders (ICHD-3).; Adams and Victor's Principles of Neurology.; Harrison's Principles of Internal Medicine.; American Headache Society Guidelines.`,
  },
  {
    id: "dr-q-217",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement:
      "Posterior a un atraco callejero, una mujer consulta por imposibilidad para extender la muñeca, asociada a dolor en la región dorsal del antebrazo. Al examen físico presenta disminución del reflejo tricipital. Días después recupera completamente la movilidad de la extremidad.\n¿Cuál es la lesión neurológica más probable?",
    options: [
      { id: "A", label: "A", text: "Neuropraxia del nervio radial." },
      { id: "B", label: "B", text: "Axonotmesis del nervio cubital." },
      { id: "C", label: "C", text: "Neurotmesis del nervio mediano." },
      { id: "D", label: "D", text: "Lesión del nervio musculocutáneo." },
    ],
    correctOptionId: "A",
    explanation: "La combinación de \"muñeca caída\", compromiso transitorio del reflejo tricipital y recuperación completa posterior es característica de una neuropraxia del nervio radial, la forma más leve de lesión nerviosa periférica.",
    keyPoints: [
      "Neuropraxia del nervio radial.",
      "Tema: Lesiones de nervios periféricos.",
      "La neuropraxia es la lesión nerviosa periférica más leve.",
      "Existe bloqueo de conducción sin lesión axonal.",
      "La recuperación suele ser completa.",
    ],
    theoryContent: `NEUROLOGÍA — BY DR Q.
Lesiones de nervios periféricos.

Trampa:
Muchos estudiantes identifican: La lesión del nervio radial. Pero olvidan clasificar: El tipo de lesión nerviosa.

Referencias:
Adams and Victor's Principles of Neurology.; Bradley's Neurology in Clinical Practice.; Greenberg's Handbook of Neurosurgery.; Moore Clinically Oriented Anatomy.`,
  },
  {
    id: "dr-q-218",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement:
      "Primigestante de 26 años con embarazo de 37 semanas acude a control prenatal. La ecografía obstétrica reporta un peso fetal estimado en percentil 4 e índice de líquido amniótico de 6 cm. La paciente se encuentra asintomática, hemodinámicamente estable y sin trabajo de parto.\n¿Cuál es el manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Continuar control prenatal habitual y repetir ecografía en 4 semanas." },
      { id: "B", label: "B", text: "Hospitalización y maduración pulmonar fetal." },
      { id: "C", label: "C", text: "Interrupción inmediata del embarazo." },
      { id: "D", label: "D", text: "Realizar estudio Doppler fetal-materno para estratificación del riesgo y definir conducta obstétrica." },
    ],
    correctOptionId: "D",
    explanation: "La paciente presenta un feto pequeño para la edad gestacional (PEG), ya que el peso fetal estimado se encuentra por debajo del percentil 10. Sin embargo, un percentil 4 por sí solo no establece necesariamente una restricción del crecimiento intrauterino (RCIU) severa. Antes de decidir la interrupción del embarazo, es fundamental evaluar la circulación útero-placentaria y fetal mediante Doppler.",
    keyPoints: [
      "Completar estudio con Doppler obstétrico.",
      "Tema: Feto pequeño para la edad gestacional y restricción del crecimiento fetal.",
      "Un peso fetal estimado < percentil 10 define un feto pequeño para la edad gestacional.",
      "Un percentil <3 es altamente sugestivo de restricción del crecimiento fetal severa.",
      "Los percentiles entre 3 y 10 requieren evaluación Doppler.",
    ],
    theoryContent: `GINECOLOGÍA Y OBSTETRICIA — BY DR Q.
Feto pequeño para la edad gestacional y restricción del crecimiento fetal.

Trampa:
Muchos estudiantes leen: "Percentil 4." Y responden: "Interrumpir embarazo."

Referencias:
Williams Obstetrics.; ACOG Practice Bulletin: Fetal Growth Restriction.; ISUOG Practice Guidelines: Diagnosis and Management of Small-for-Gestational-Age Fetus and Fetal Growth Restriction.; FIGO Guidelines on Fetal Growth Restriction.`,
  },
  {
    id: "dr-q-219",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement:
      "Paciente de 37 años, multigestante G5A2C2V2, con embarazo de 29 semanas, acude a control prenatal. En la prueba de tolerancia oral a la glucosa presenta los siguientes resultados: glucemia en ayunas 92 mg/dL, glucemia a la hora 213 mg/dL y glucemia a las 2 horas 150 mg/dL.\n¿Cuál es el plan de manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Continuar control prenatal habitual y repetir la curva de tolerancia en 4 semanas." },
      { id: "B", label: "B", text: "Iniciar insulinoterapia de forma inmediata." },
      { id: "C", label: "C", text: "Diagnosticar diabetes gestacional, iniciar cambios en el estilo de vida y automonitoreo glucémico." },
      { id: "D", label: "D", text: "Diagnosticar diabetes pregestacional y finalizar la gestación." },
    ],
    correctOptionId: "C",
    explanation: "La paciente cumple criterios diagnósticos de diabetes gestacional. El manejo inicial consiste en intervención nutricional, ejercicio físico adaptado al embarazo y monitorización glucémica. La insulinoterapia se reserva para pacientes que no alcanzan metas glucémicas con medidas no farmacológicas.",
    keyPoints: [
      "Diabetes gestacional.",
      "Tema: Diabetes gestacional.",
      "Un solo valor alterado en la PTOG es suficiente para el diagnóstico.",
      "La diabetes gestacional aumenta el riesgo de macrosomía fetal.",
      "El tratamiento inicial es nutricional y conductual.",
    ],
    theoryContent: `GINECOLOGÍA Y OBSTETRICIA — BY DR Q.
Diabetes gestacional.

Trampa:
Muchos estudiantes observan: Glucemia >200 mg/dL a la hora. Y responden: Insulinoterapia inmediata.

Referencias:
American Diabetes Association (ADA) Standards of Care.; ACOG Practice Bulletin: Gestational Diabetes Mellitus.; Williams Obstetrics.; FIGO Guidelines on Gestational Diabetes.`,
  },
  {
    id: "dr-q-220",
    examArea: "ORTOPEDIA Y TRAUMATOLOGÍA",
    topic: "ORTOPEDIA Y TRAUMATOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ortopedia_y_traumatologia"],
    statement:
      "Un hombre presenta una fractura desplazada de la diáfisis media del húmero asociada a lesión del nervio radial.\n¿Cuál de los siguientes hallazgos clínicos es más probable encontrar?",
    options: [
      { id: "A", label: "A", text: "Incapacidad para extender la muñeca y los dedos, con hipoestesia en el dorso de la mano." },
      { id: "B", label: "B", text: "Incapacidad para flexionar los dedos cuarto y quinto, con hipoestesia del borde cubital de la mano." },
      { id: "C", label: "C", text: "Pérdida de la oposición del pulgar e hipoestesia de los tres primeros dedos." },
      { id: "D", label: "D", text: "Debilidad para la abducción del hombro con pérdida de sensibilidad en la cara lateral del hombro." },
    ],
    correctOptionId: "A",
    explanation: "La lesión del nervio radial en una fractura de la diáfisis humeral produce clásicamente \"muñeca caída\" debido a la pérdida de la extensión de la muñeca y los dedos, asociada a alteraciones sensitivas en el territorio radial.",
    keyPoints: [
      "Muñeca caída.",
      "Tema: Lesiones nerviosas periféricas.",
      "El nervio radial es el nervio más frecuentemente lesionado en fracturas de diáfisis humeral.",
      "La muñeca caída es el hallazgo clínico clásico.",
      "El primer espacio interdigital dorsal es clave para la exploración sensitiva.",
    ],
    theoryContent: `ORTOPEDIA Y TRAUMATOLOGÍA — BY DR Q.
Lesiones nerviosas periféricas.

Trampa:
Muchos estudiantes recuerdan: "Fractura de húmero." Pero olvidan: Qué nervio se relaciona con la diáfisis media.

Referencias:
Campbell's Operative Orthopaedics.; Rockwood and Green's Fractures in Adults.; Moore Clinically Oriented Anatomy.; Greenberg's Handbook of Neurosurgery.`,
  },
  {
    id: "dr-q-221",
    examArea: "ORTOPEDIA Y TRAUMATOLOGÍA",
    topic: "ORTOPEDIA Y TRAUMATOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ortopedia_y_traumatologia"],
    statement:
      "Paciente de 15 años consulta a urgencias tras sufrir un trauma en la muñeca. Se realiza radiografía anteroposterior (AP) sin evidencia de fracturas. Debido a la persistencia de la sospecha clínica de lesión ósea, se decide complementar el estudio radiológico.\n¿Cuál es la proyección radiográfica adicional más recomendada para descartar lesiones ocultas?",
    options: [
      { id: "A", label: "A", text: "Proyección lateral de muñeca." },
      { id: "B", label: "B", text: "Proyección oblicua de muñeca." },
      { id: "C", label: "C", text: "Proyección AP comparativa de ambas muñecas." },
      { id: "D", label: "D", text: "Proyección de escafoides (Stecher)." },
    ],
    correctOptionId: "D",
    explanation: "La fractura de escafoides es una de las lesiones ocultas más frecuentes tras trauma de muñeca. Cuando existe sospecha clínica y la radiografía AP inicial es normal, debe solicitarse una proyección específica para escafoides.",
    keyPoints: [
      "Fractura oculta de escafoides.",
      "Tema: Trauma de muñeca.",
      "El escafoides es el hueso del carpo que más se fractura.",
      "La radiografía inicial puede ser normal.",
      "La proyección de Stecher mejora la visualización del escafoides.",
    ],
    theoryContent: `ORTOPEDIA Y TRAUMATOLOGÍA — BY DR Q.
Trauma de muñeca.

Trampa:
Muchos estudiantes leen: "Radiografía normal." Y concluyen: Ausencia de fractura.

Referencias:
Rockwood and Green's Fractures in Adults.; Campbell's Operative Orthopaedics.; AO Trauma Principles.; Moore Clinically Oriented Anatomy.`,
  },
  {
    id: "dr-q-222",
    examArea: "DERMATOLOGÍA",
    topic: "DERMATOLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","dermatologia"],
    statement:
      "Un hombre de 80 años consulta por la aparición de placas amarillentas, pruriginosas y descamativas en cuero cabelludo y región de la barba.\n¿Cuál es el diagnóstico más probable y cuál es el agente etiológico más asociado?",
    options: [
      { id: "A", label: "A", text: "Psoriasis; Streptococcus pyogenes." },
      { id: "B", label: "B", text: "Dermatitis seborreica; Malassezia furfur." },
      { id: "C", label: "C", text: "Tiña capitis; Trichophyton rubrum." },
      { id: "D", label: "D", text: "Dermatitis atópica; Staphylococcus aureus." },
    ],
    correctOptionId: "B",
    explanation: "La dermatitis seborreica es una dermatosis inflamatoria crónica caracterizada por placas eritematodescamativas con escamas amarillentas y grasosas en áreas ricas en glándulas sebáceas. Se ha asociado a la proliferación de levaduras del género Malassezia.",
    keyPoints: [
      "Dermatitis seborreica.",
      "Tema: Dermatitis seborreica.",
      "La dermatitis seborreica se asocia a Malassezia spp.",
      "Las escamas suelen ser amarillentas y grasosas.",
      "El cuero cabelludo es la localización más frecuente.",
    ],
    theoryContent: `DERMATOLOGÍA — BY DR Q.
Dermatitis seborreica.

Trampa:
Muchos estudiantes leen: "Placas descamativas." Y responden: Psoriasis.

Referencias:
Fitzpatrick's Dermatology.; Bolognia Dermatology.; Andrews' Diseases of the Skin.; UpToDate: Seborrheic Dermatitis.`,
  },
  {
    id: "dr-q-223",
    examArea: "PEDIATRÍA",
    topic: "PEDIATRÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","pediatria"],
    statement:
      "Niño de 8 años consulta por fiebre de 6 días de evolución, asociada a astenia, adinamia, malestar general, exantema cutáneo, cambios en mucosas orales y adenopatías cervicales.\n¿Cuál es el diagnóstico más probable y el tratamiento de elección?",
    options: [
      { id: "A", label: "A", text: "Escarlatina; penicilina benzatínica." },
      { id: "B", label: "B", text: "Sarampión; vitamina A y manejo de soporte." },
      { id: "C", label: "C", text: "Enfermedad de Kawasaki; inmunoglobulina intravenosa y ácido acetilsalicílico." },
      { id: "D", label: "D", text: "Mononucleosis infecciosa; manejo sintomático." },
    ],
    correctOptionId: "C",
    explanation: "La enfermedad de Kawasaki es una vasculitis sistémica de vasos medianos caracterizada por fiebre prolongada, alteraciones mucocutáneas, adenopatías cervicales y exantema. El tratamiento temprano con inmunoglobulina intravenosa disminuye significativamente el riesgo de aneurismas coronarios.",
    keyPoints: [
      "Enfermedad de Kawasaki.",
      "Tema: Vasculitis en pediatría.",
      "Fiebre ≥ 5 días es un criterio indispensable para Kawasaki clásica.",
      "La lengua en fresa es un hallazgo frecuente.",
      "La adenopatía cervical suele ser unilateral.",
    ],
    theoryContent: `PEDIATRÍA — BY DR Q.
Vasculitis en pediatría.

Trampa:
Muchos estudiantes leen: "Lengua roja." Y responden: Escarlatina.

Referencias:
Nelson Textbook of Pediatrics.; American Heart Association Guidelines for Kawasaki Disease.; Red Book: American Academy of Pediatrics.; Rudolph's Pediatrics.`,
  },
  {
    id: "dr-q-224",
    examArea: "CIRUGÍA VASCULAR",
    topic: "CIRUGÍA VASCULAR",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_vascular"],
    statement:
      "Un habitante de calle es encontrado con una herida penetrante en el muslo izquierdo y es trasladado al servicio de urgencias. Al examen físico presenta disminución de pulsos distales y frialdad de la extremidad afectada.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Solicitar ecografía Doppler arterial de la extremidad." },
      { id: "B", label: "B", text: "Solicitar angiotomografía de miembro inferior." },
      { id: "C", label: "C", text: "Exploración quirúrgica vascular urgente." },
      { id: "D", label: "D", text: "Observación clínica y reevaluación en 6 horas." },
    ],
    correctOptionId: "C",
    explanation: "La presencia de signos duros de lesión vascular, como ausencia o disminución de pulsos y datos de isquemia distal, constituye una indicación de exploración quirúrgica inmediata sin retrasar el manejo con estudios diagnósticos adicionales.",
    keyPoints: [
      "Lesión vascular mayor.",
      "Tema: Trauma vascular.",
      "La ausencia o disminución de pulsos es un signo duro de lesión vascular.",
      "La frialdad distal indica compromiso de la perfusión.",
      "Los signos duros requieren cirugía inmediata.",
    ],
    theoryContent: `CIRUGÍA VASCULAR — BY DR Q.
Trauma vascular.

Trampa:
Muchos estudiantes leen: "Paciente estable." Y responden: AngioTAC.

Referencias:
Advanced Trauma Life Support (ATLS).; Rutherford's Vascular Surgery and Endovascular Therapy.; Eastern Association for the Surgery of Trauma (EAST) Guidelines.; Schwartz's Principles of Surgery.`,
  },
  {
    id: "dr-q-225",
    examArea: "ORTOPEDIA Y TRAUMATOLOGÍA",
    topic: "ORTOPEDIA Y TRAUMATOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ortopedia_y_traumatologia"],
    statement:
      "Un hombre de 30 años es llevado a urgencias tras ser atropellado. Refiere que las llantas de un vehículo pasaron por encima de su extremidad inferior. Al examen físico presenta fractura abierta de tibia y peroné, ausencia de pulsos distales y pérdida de la función motora de la extremidad afectada.\n¿Cuál es la clasificación de Gustilo y Anderson más probable?",
    options: [
      { id: "A", label: "A", text: "Gustilo I." },
      { id: "B", label: "B", text: "Gustilo II." },
      { id: "C", label: "C", text: "Gustilo IIIA." },
      { id: "D", label: "D", text: "Gustilo IIIC." },
    ],
    correctOptionId: "D",
    explanation: "La clasificación Gustilo IIIC corresponde a cualquier fractura abierta asociada a lesión vascular que requiere reparación quirúrgica, independientemente del tamaño de la herida o del compromiso de partes blandas.",
    keyPoints: [
      "Gustilo IIIC.",
      "Tema: Clasificación de Gustilo y Anderson.",
      "La lesión vascular define una fractura Gustilo IIIC.",
      "La tibia es el hueso largo más frecuentemente asociado a fracturas abiertas graves.",
      "Las fracturas Gustilo IIIC tienen alto riesgo de amputación.",
    ],
    theoryContent: `ORTOPEDIA Y TRAUMATOLOGÍA — BY DR Q.
Clasificación de Gustilo y Anderson.

Trampa:
Muchos estudiantes buscan: El tamaño de la herida. Sin embargo: El dato decisivo es:

Referencias:
Gustilo RB, Anderson JT. Prevention of Infection in the Treatment of Open Fractures.; Rockwood and Green's Fractures in Adults.; Campbell's Operative Orthopaedics.; ATLS (Advanced Trauma Life Support).`,
  },
  {
    id: "dr-q-226",
    examArea: "TOXICOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","toxicologia"],
    statement:
      "Adolescente de 17 años es llevada a urgencias después de ingerir 43 tabletas de acetaminofén en un intento autolítico. Al ingreso se encuentra hemodinámicamente estable y sin hallazgos relevantes en el examen físico.\n¿Cuál es la dosis tóxica de acetaminofén y cuál es el siguiente paso en el manejo?",
    options: [
      { id: "A", label: "A", text: "Dosis tóxica >75 mg/kg; observación clínica y egreso." },
      { id: "B", label: "B", text: "Dosis tóxica >100 mg/kg; administrar carbón activado únicamente." },
      { id: "C", label: "C", text: "Dosis tóxica >150 mg/kg; solicitar nivel sérico de acetaminofén e iniciar protocolo con N-acetilcisteína según nomograma de Rumack-Matthew." },
      { id: "D", label: "D", text: "Dosis tóxica >300 mg/kg; realizar hemodiálisis de urgencia." },
    ],
    correctOptionId: "C",
    explanation: "La dosis potencialmente tóxica de acetaminofén en una ingesta aguda única es ≥150 mg/kg (o aproximadamente ≥7.5 g en adultos). Ante una sobredosis intencional debe solicitarse concentración sérica de acetaminofén a las 4 horas de la ingesta (o tan pronto como sea posible si han transcurrido más de 4 horas) y valorar tratamiento con N-acetilcisteína.",
    keyPoints: [
      "Intoxicación por acetaminofén.",
      "Tema: Toxicología.",
      "La dosis tóxica clásica es ≥150 mg/kg.",
      "El antídoto es la N-acetilcisteína.",
      "La mayor eficacia del antídoto ocurre si se administra dentro de las primeras 8 horas.",
    ],
    theoryContent: `TOXICOLOGÍA — BY DR Q.
Toxicología.

Trampa:
Muchos estudiantes creen que: La ausencia de síntomas descarta gravedad. Sin embargo: La mayoría de los pacientes se encuentran clínicamente bien durante las primeras horas.

Referencias:
Goldfrank's Toxicologic Emergencies.; Tintinalli's Emergency Medicine.; Nelson Textbook of Pediatrics.; UpToDate: Acetaminophen Poisoning in Children and Adolescents.`,
  },
  {
    id: "dr-q-227",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement:
      "Un hombre consulta a urgencias por dolor torácico de 30 minutos de evolución. Al ingreso presenta frecuencia cardíaca de 70 lpm y presión arterial de 110/70 mmHg. Antes de iniciar manejo antiisquémico se realiza electrocardiograma, el cual evidencia una taquicardia regular de complejos anchos.\n¿Cuál es el tratamiento de elección para este cuadro?",
    options: [
      { id: "A", label: "A", text: "Adenosina intravenosa." },
      { id: "B", label: "B", text: "Amiodarona intravenosa." },
      { id: "C", label: "C", text: "Verapamilo intravenoso." },
      { id: "D", label: "D", text: "Nitroglicerina sublingual." },
    ],
    correctOptionId: "B",
    explanation: "Toda taquicardia regular de complejo ancho debe considerarse taquicardia ventricular hasta demostrar lo contrario. En un paciente hemodinámicamente estable, el tratamiento farmacológico de elección es la amiodarona intravenosa.",
    keyPoints: [
      "Taquicardia ventricular.",
      "Tema: Arritmias ventriculares.",
      "Toda taquicardia de complejo ancho es TV hasta demostrar lo contrario.",
      "La amiodarona es el antiarrítmico de elección en TV estable.",
      "La cardioversión sincronizada es el manejo de elección en TV inestable.",
    ],
    theoryContent: `CARDIOLOGÍA — BY DR Q.
Arritmias ventriculares.

Trampa:
Muchos estudiantes leen: "Dolor torácico." Y responden: Tratamiento antiisquémico.

Referencias:
ACLS American Heart Association.; Braunwald's Heart Disease.; Harrison's Principles of Internal Medicine.; ESC Guidelines for Ventricular Arrhythmias.`,
  },
  {
    id: "dr-q-228",
    examArea: "TOXICOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","toxicologia"],
    statement:
      "Paciente de 17 años es llevado a urgencias en estado de inconsciencia. Una amiga refiere que asistió a una fiesta rave durante toda la noche. Al ingreso presenta presión arterial de 70/40 mmHg, frecuencia cardíaca de 40 lpm, pupilas mióticas, sialorrea y aumento de los ruidos intestinales.\n¿Cuál es el toxíndrome más probable y cuál es el manejo de elección?",
    options: [
      { id: "A", label: "A", text: "Toxíndrome simpaticomimético; benzodiacepinas intravenosas." },
      { id: "B", label: "B", text: "Toxíndrome anticolinérgico; fisostigmina intravenosa." },
      { id: "C", label: "C", text: "Toxíndrome colinérgico; atropina y pralidoxima." },
      { id: "D", label: "D", text: "Toxíndrome opioide; naloxona intravenosa." },
    ],
    correctOptionId: "C",
    explanation: "La combinación de miosis, bradicardia, hipotensión, sialorrea e hiperperistaltismo es característica de un toxíndrome colinérgico, habitualmente secundario a exposición a organofosforados o carbamatos.",
    keyPoints: [
      "Toxíndrome colinérgico.",
      "Tema: Intoxicaciones agudas.",
      "Miosis + sialorrea + bradicardia = pensar en toxíndrome colinérgico.",
      "Los organofosforados inhiben la acetilcolinesterasa.",
      "La atropina es el tratamiento inicial más importante.",
    ],
    theoryContent: `TOXICOLOGÍA — BY DR Q.
Intoxicaciones agudas.

Trampa:
Muchos estudiantes leen: "Miosis." Y responden: Intoxicación por opioides.

Referencias:
Goldfrank's Toxicologic Emergencies.; Tintinalli's Emergency Medicine.; Harrison's Principles of Internal Medicine.; Olson's Poisoning & Drug Overdose.`,
  },
  {
    id: "dr-q-229",
    examArea: "PEDIATRÍA - DESARROLLO Y LENGUAJE",
    topic: "DESARROLLO Y LENGUAJE",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","desarrollo_y_lenguaje"],
    statement:
      "Un adolescente de 14 años presenta dificultades para articular ciertos fonemas, sin alteraciones en la comprensión, expresión o estructura general del lenguaje.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Dislalia." },
      { id: "B", label: "B", text: "Disfasia." },
      { id: "C", label: "C", text: "Disglosia." },
      { id: "D", label: "D", text: "Afasia." },
    ],
    correctOptionId: "A",
    explanation: "La dislalia es un trastorno de la articulación de los fonemas sin compromiso de la comprensión ni de la organización del lenguaje. El paciente sabe qué quiere decir, pero presenta dificultad para pronunciar correctamente determinados sonidos.",
    keyPoints: [
      "Dislalia.",
      "Tema: Trastornos del lenguaje.",
      "La dislalia afecta únicamente la articulación de los sonidos.",
      "No existe alteración de la comprensión del lenguaje.",
      "No existe alteración de la inteligencia.",
    ],
    theoryContent: `DESARROLLO Y LENGUAJE — BY DR Q.
Trastornos del lenguaje.

Trampa:
Muchos estudiantes confunden: Dislalia y disfasia. Sin embargo: El dato decisivo es:

Referencias:
Nelson Textbook of Pediatrics.; Developmental-Behavioral Pediatrics.; Manual de Pediatría de la AEP.; DSM-5-TR.`,
  },
  {
    id: "dr-q-230",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement:
      "Una mujer de 40 años se realiza una citología cervical de tamizaje, cuyo resultado reporta AGC-NOS (células glandulares atípicas de significado indeterminado).\n¿Cuál es el siguiente paso en el manejo?",
    options: [
      { id: "A", label: "A", text: "Colposcopia y biopsia." },
      { id: "B", label: "B", text: "Repetir citología en 6–12 meses." },
      { id: "C", label: "C", text: "Prueba de ADN para VPH." },
      { id: "D", label: "D", text: "Histeroscopia." },
    ],
    correctOptionId: "A",
    explanation: "Las células glandulares atípicas (AGC) se asocian a un riesgo significativo de lesiones premalignas o malignas del cuello uterino y del endometrio. Por ello, toda paciente con AGC-NOS requiere evaluación diagnóstica inmediata mediante colposcopia con toma de biopsias dirigidas y muestreo endocervical.",
    keyPoints: [
      "Colposcopia inmediata.",
      "Tema: Tamizaje y patología cervical.",
      "AGC significa células glandulares atípicas.",
      "Toda paciente con AGC requiere colposcopia.",
      "El riesgo de adenocarcinoma es mayor que en las alteraciones escamosas leves.",
    ],
    theoryContent: `GINECOLOGÍA Y OBSTETRICIA — BY DR Q.
Tamizaje y patología cervical.

Trampa:
Muchos estudiantes asocian: Citología anormal. Con: Repetición del examen.

Referencias:
ASCCP Risk-Based Management Guidelines.; ACOG Practice Bulletin: Cervical Cancer Screening.; Novak's Gynecology.; Berek & Novak's Gynecology.`,
  },
  {
    id: "dr-q-231",
    examArea: "NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neumologia"],
    statement:
      "Paciente hospitalizado por derrame pleural es sometido a toracocentesis diagnóstica. El análisis del líquido pleural reporta:\n• Proteínas líquido pleural: 4.8 g/dL.\n• Proteínas séricas: 6.0 g/dL.\n• LDH líquido pleural: 420 U/L.\n• LDH sérica: 180 U/L.\n• pH: 7.28.\n• Glucosa: 45 mg/dL.\n• Recuento celular: 3.500 leucocitos/mm³ con predominio de neutrófilos.\n¿Qué determinan estos hallazgos?",
    options: [
      { id: "A", label: "A", text: "Derrame pleural transudativo secundario a insuficiencia cardíaca." },
      { id: "B", label: "B", text: "Derrame pleural exudativo compatible con derrame parapneumónico complicado." },
      { id: "C", label: "C", text: "Derrame pleural secundario a síndrome nefrótico." },
      { id: "D", label: "D", text: "Derrame pleural transudativo secundario a cirrosis hepática." },
    ],
    correctOptionId: "B",
    explanation: "Los criterios de Light confirman un exudado (relación proteínas LP/suero >0.5 y relación LDH LP/suero >0.6). Además, la glucosa baja y el pH <7.30 sugieren un derrame parapneumónico complicado que generalmente requiere drenaje pleural.",
    keyPoints: [
      "Exudado complicado.",
      "Tema: Derrame pleural.",
      "Los criterios de Light son el estándar para diferenciar exudados y transudados.",
      "Glucosa <60 mg/dL sugiere exudado complicado.",
      "pH <7.30 orienta a drenaje pleural.",
    ],
    theoryContent: `NEUMOLOGÍA — BY DR Q.
Derrame pleural.

Trampa:
Muchos estudiantes observan: "Derrame pleural." Y responden: Insuficiencia cardíaca.

Referencias:
Light RW. Pleural Diseases.; ATS Guidelines for Pleural Disease.; Harrison's Principles of Internal Medicine.; Murray & Nadel's Textbook of Respiratory Medicine.`,
  },
  {
    id: "dr-q-232",
    examArea: "ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","endocrinologia"],
    statement:
      "Mujer de 35 años consulta por disfagia, odinofagia y sensación de masa cervical de 3 meses de evolución. Se realiza ecografía tiroidea que reporta un nódulo sólido de 1.5 cm, hipoecoico y con microcalcificaciones.\n¿Cuál es la clasificación ecográfica más probable y el siguiente paso diagnóstico?",
    options: [
      { id: "A", label: "A", text: "TI-RADS 2; seguimiento ecográfico anual." },
      { id: "B", label: "B", text: "TI-RADS 3; repetir ecografía en 12 meses." },
      { id: "C", label: "C", text: "TI-RADS 4; gammagrafía tiroidea." },
      { id: "D", label: "D", text: "TI-RADS 5; biopsia por aspiración con aguja fina (BACAF)." },
    ],
    correctOptionId: "D",
    explanation: "La presencia de un nódulo sólido, hipoecoico y con microcalcificaciones corresponde a características ecográficas altamente sospechosas de malignidad. Un nódulo TI-RADS 5 de 1.5 cm tiene indicación de estudio citológico mediante BACAF.",
    keyPoints: [
      "TI-RADS 5.",
      "Tema: Nódulo tiroideo.",
      "Las microcalcificaciones son un signo ecográfico de alta sospecha.",
      "El carcinoma papilar es el cáncer de tiroides más frecuente.",
      "TI-RADS 5 implica alto riesgo de malignidad.",
    ],
    theoryContent: `ENDOCRINOLOGÍA — BY DR Q.
Nódulo tiroideo.

Trampa:
Muchos estudiantes se enfocan en: Que el nódulo mide solo 1.5 cm. Sin embargo: El dato decisivo es:

Referencias:
American Thyroid Association Guidelines.; ACR TI-RADS White Paper.; Williams Textbook of Endocrinology.; UpToDate: Thyroid Nodules.`,
  },
  {
    id: "dr-q-233",
    examArea: "PEDIATRÍA - OFTALMOLOGÍA",
    topic: "OFTALMOLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","oftalmologia"],
    statement:
      "Niño de 2 años es llevado a consulta por su madre, quien refiere que \"el ojo se ve como el de un gato\". Durante el tamizaje visual se evidencia ausencia del reflejo rojo en un ojo.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Estrabismo convergente." },
      { id: "B", label: "B", text: "Retinoblastoma." },
      { id: "C", label: "C", text: "Catarata congénita." },
      { id: "D", label: "D", text: "Glaucoma congénito." },
    ],
    correctOptionId: "B",
    explanation: "La leucocoria (ausencia del reflejo rojo) en un niño pequeño debe considerarse retinoblastoma hasta demostrar lo contrario. Es el tumor intraocular maligno más frecuente de la infancia y constituye una urgencia diagnóstica.",
    keyPoints: [
      "Retinoblastoma.",
      "Tema: Retinoblastoma.",
      "La leucocoria es el signo más frecuente del retinoblastoma.",
      "El estrabismo es la segunda forma de presentación más común.",
      "Nunca debe realizarse biopsia intraocular por riesgo de diseminación.",
    ],
    theoryContent: `OFTALMOLOGÍA — BY DR Q.
Retinoblastoma.

Trampa:
Muchos estudiantes leen: "Entropión." Y se distraen. Sin embargo:

Referencias:
Nelson Textbook of Pediatrics.; American Academy of Ophthalmology.; Shields' Retinoblastoma.; UpToDate: Retinoblastoma.`,
  },
  {
    id: "dr-q-234",
    examArea: "GINECOLOGÍA - INFECTOLOGÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","infectologia"],
    statement:
      "Una mujer de 28 años consulta por la aparición de una úlcera vulvar indolora de bordes bien definidos. Refiere actividad sexual sin protección en los últimos meses. Como parte del estudio inicial se solicita VDRL, cuyo resultado es no reactivo.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Descartar sífilis y solicitar biopsia de la lesión." },
      { id: "B", label: "B", text: "Repetir VDRL en 6 meses." },
      { id: "C", label: "C", text: "Solicitar prueba treponémica específica (FTA-ABS o prueba rápida treponémica) e iniciar manejo según hallazgos." },
      { id: "D", label: "D", text: "Iniciar tratamiento para herpes genital." },
    ],
    correctOptionId: "C",
    explanation: "La lesión descrita es altamente sugestiva de chancro sifilítico. Durante la sífilis primaria temprana el VDRL puede ser negativo debido a que aún no se han desarrollado títulos detectables de anticuerpos no treponémicos.",
    keyPoints: [
      "Sífilis primaria temprana.",
      "Tema: Sífilis.",
      "El chancro sifilítico es típicamente indoloro.",
      "El VDRL puede ser negativo en fases muy tempranas.",
      "Las pruebas treponémicas son más sensibles en sífilis primaria.",
    ],
    theoryContent: `INFECTOLOGÍA — BY DR Q.
Sífilis.

Trampa:
Muchos estudiantes leen: "VDRL negativo." Y descartan sífilis. Sin embargo:

Referencias:
CDC Sexually Transmitted Infections Treatment Guidelines.; Harrison's Principles of Internal Medicine.; Mandell, Douglas and Bennett's Infectious Diseases.; WHO Guidelines for the Management of Sexually Transmitted Infections.`,
  },
  {
    id: "dr-q-235",
    examArea: "CIRUGÍA - QUEMADURAS",
    topic: "QUEMADURAS",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","quemaduras"],
    statement:
      "Hombre de 25 años, electricista, es traído al servicio de urgencias tras sufrir una descarga eléctrica de alto voltaje al manipular una antena en un tejado. Ingresa consciente, con una lesión de entrada en región occipital y una lesión de salida en el talón derecho. No presenta otras quemaduras cutáneas evidentes.\n¿Cuál es el porcentaje aproximado de superficie corporal quemada que debe estimarse inicialmente para realizar la reposición hídrica?",
    options: [
      { id: "A", label: "A", text: "1%." },
      { id: "B", label: "B", text: "5%." },
      { id: "C", label: "C", text: "20%." },
      { id: "D", label: "D", text: "No puede estimarse por la apariencia externa; debe considerarse una quemadura eléctrica profunda de alto voltaje con importante daño tisular oculto." },
    ],
    correctOptionId: "D",
    explanation: "Las quemaduras eléctricas de alto voltaje producen una extensa destrucción muscular y tisular profunda que no se correlaciona con la superficie cutánea visible. Por ello, la reanimación hídrica no debe basarse únicamente en la regla de los nueves o en las lesiones de entrada y salida.",
    keyPoints: [
      "Daño profundo oculto.",
      "Tema: Quemaduras eléctricas.",
      "Las quemaduras eléctricas suelen subestimar la lesión real.",
      "El daño muscular profundo puede ser masivo.",
      "La mioglobinuria es una complicación frecuente.",
    ],
    theoryContent: `QUEMADURAS — BY DR Q.
Quemaduras eléctricas.

Trampa:
Muchos estudiantes intentan: Calcular la superficie corporal quemada usando la regla de los nueves. Sin embargo: En quemaduras eléctricas de alto voltaje esto subestima gravemente la lesión.

Referencias:
Advanced Burn Life Support (ABLS).; American Burn Association Guidelines.; Schwartz's Principles of Surgery.; Tintinalli's Emergency Medicine.`,
  },
  {
    id: "dr-q-236",
    examArea: "PEDIATRÍA - CARDIOLOGÍA NEONATAL",
    topic: "CARDIOLOGÍA NEONATAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia_neonatal"],
    statement:
      "Neonato a término, sin antecedentes perinatales relevantes, con adecuada adaptación neonatal. Durante la evaluación previa al alta se realiza tamizaje para cardiopatías congénitas críticas mediante oximetría de pulso. Los resultados muestran saturación de oxígeno de 98% en la mano derecha y 92% en un miembro inferior, persistiendo la diferencia en una segunda medición.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Considerar tamizaje normal y otorgar egreso." },
      { id: "B", label: "B", text: "Repetir la oximetría en el control ambulatorio del recién nacido." },
      { id: "C", label: "C", text: "Considerar tamizaje positivo, realizar valoración cardiológica y ecocardiograma." },
      { id: "D", label: "D", text: "Administrar oxígeno suplementario y repetir la medición en 24 horas." },
    ],
    correctOptionId: "C",
    explanation: "Según las recomendaciones del Ministerio de Salud de Colombia y los protocolos de tamizaje neonatal para cardiopatías congénitas críticas, una diferencia mayor de 3% entre la saturación preductal (mano derecha) y postductal (miembro inferior), o una saturación menor de 95% en cualquiera de las extremidades tras mediciones repetidas, constituye un tamizaje positivo.",
    keyPoints: [
      "Tamizaje positivo para cardiopatía congénita crítica.",
      "Tema: Tamizaje neonatal cardiovascular.",
      "La mano derecha corresponde a la medición preductal.",
      "Los miembros inferiores corresponden a la medición postductal.",
      "Diferencia >3% es un tamizaje anormal.",
    ],
    theoryContent: `CARDIOLOGÍA NEONATAL — BY DR Q.
Tamizaje neonatal cardiovascular.

Trampa:
Muchos estudiantes leen: "No presenta cianosis." Y concluyen: Recién nacido sano.

Referencias:
Ministerio de Salud y Protección Social de Colombia. Lineamientos de Tamizaje Neonatal.; American Academy of Pediatrics.; Nelson Textbook of Pediatrics.; American Heart Association Guidelines.`,
  },
  {
    id: "dr-q-237",
    examArea: "GINECOLOGÍA Y PLANIFICACIÓN FAMILIAR",
    topic: "GINECOLOGÍA Y PLANIFICACIÓN FAMILIAR",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_planificacion_familiar"],
    statement:
      "Mujer de 20 años consulta por sangrado uterino irregular persistente desde hace 5 meses. Utiliza implante subdérmico de levonorgestrel como método anticonceptivo. Refiere afectación de su calidad de vida, pero desea continuar utilizando el método. El examen físico es normal y no existen signos de anemia.\n¿Cuál es la conducta terapéutica más adecuada?",
    options: [
      { id: "A", label: "A", text: "Retirar inmediatamente el implante subdérmico." },
      { id: "B", label: "B", text: "Iniciar anticonceptivos orales combinados por corto tiempo para control del sangrado." },
      { id: "C", label: "C", text: "Realizar legrado uterino diagnóstico." },
      { id: "D", label: "D", text: "Suspender toda intervención y explicar que es un efecto esperado." },
    ],
    correctOptionId: "B",
    explanation: "El sangrado uterino irregular es el efecto adverso más frecuente de los implantes de progestágeno. Cuando la paciente desea continuar con el método y se han descartado otras causas, puede realizarse tratamiento médico temporal con estrógenos o anticonceptivos combinados para mejorar el patrón de sangrado.",
    keyPoints: [
      "Manejo médico del sangrado asociado al implante.",
      "Tema: Anticoncepción hormonal.",
      "El sangrado irregular es el efecto adverso más frecuente de los implantes.",
      "No disminuye la eficacia anticonceptiva.",
      "Los anticonceptivos combinados pueden utilizarse temporalmente para controlar el sangrado.",
    ],
    theoryContent: `GINECOLOGÍA Y PLANIFICACIÓN FAMILIAR — BY DR Q.
Anticoncepción hormonal.

Trampa:
Muchos estudiantes leen: "5 meses de sangrado." Y responden: Retirar el implante.

Referencias:
WHO Family Planning Handbook.; CDC U.S. Selected Practice Recommendations for Contraceptive Use.; ACOG Long-Acting Reversible Contraception Guidelines.; Williams Gynecology.`,
  },
  {
    id: "dr-q-238",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement:
      "Hombre de 78 años consulta por dolor en fosa ilíaca izquierda, fiebre y náuseas. La tomografía abdominal reporta engrosamiento del colon sigmoide con infiltración de la grasa pericólica, sin evidencia de abscesos, fístulas, neumoperitoneo ni peritonitis.\n¿Cuál es la clasificación de Hinchey y el manejo inicial más adecuado?",
    options: [
      { id: "A", label: "A", text: "Hinchey Ia; manejo conservador con antibióticos y observación." },
      { id: "B", label: "B", text: "Hinchey Ib; drenaje percutáneo urgente." },
      { id: "C", label: "C", text: "Hinchey III; laparotomía exploratoria urgente." },
      { id: "D", label: "D", text: "Hinchey IV; procedimiento de Hartmann." },
    ],
    correctOptionId: "A",
    explanation: "La diverticulitis aguda no complicada con inflamación pericólica y ausencia de abscesos o perforación corresponde a un Hinchey Ia. El manejo inicial suele ser conservador con antibióticos, analgesia, hidratación y vigilancia clínica.",
    keyPoints: [
      "Diverticulitis aguda no complicada.",
      "Tema: Diverticulitis aguda.",
      "El dolor en fosa ilíaca izquierda es la presentación clásica.",
      "Hinchey Ia corresponde a inflamación pericólica.",
      "La TAC es el estudio diagnóstico de elección.",
    ],
    theoryContent: `CIRUGÍA GENERAL — BY DR Q.
Diverticulitis aguda.

Trampa:
Muchos estudiantes leen: "Paciente anciano con fiebre." Y responden: Cirugía.

Referencias:
Schwartz's Principles of Surgery.; Sabiston Textbook of Surgery.; ASCRS Guidelines for Diverticulitis.; UpToDate: Acute Colonic Diverticulitis.`,
  },
  {
    id: "dr-q-239",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement:
      "Mujer de 45 años presenta episodios recurrentes de desconexión del entorno de aproximadamente 3 minutos de duración. Durante los eventos presenta mirada fija y movimientos automáticos repetitivos de la boca. Al finalizar el episodio permanece desorientada y confusa durante varios minutos.\n¿Cuál es el tipo de crisis epiléptica más probable y cuál es el tratamiento de primera línea?",
    options: [
      { id: "A", label: "A", text: "Crisis de ausencia; etosuximida." },
      { id: "B", label: "B", text: "Crisis focal con alteración de la conciencia (focal compleja); levetiracetam." },
      { id: "C", label: "C", text: "Crisis tónico-clónica generalizada; fenitoína." },
      { id: "D", label: "D", text: "Crisis mioclónica; ácido valproico." },
    ],
    correctOptionId: "B",
    explanation: "La presencia de desconexión del medio, automatismos orales y período posictal confusional es altamente sugestiva de una crisis focal con alteración de la conciencia, frecuentemente originada en el lóbulo temporal.",
    keyPoints: [
      "Crisis focal con alteración de la conciencia.",
      "Tema: Epilepsia focal.",
      "Los automatismos orales sugieren epilepsia del lóbulo temporal.",
      "La confusión posictal es típica de las crisis focales complejas.",
      "Las ausencias no presentan período posictal.",
    ],
    theoryContent: `NEUROLOGÍA — BY DR Q.
Epilepsia focal.

Trampa:
Muchos estudiantes leen: "Desconexión del entorno." Y responden: Crisis de ausencia.

Referencias:
Adams and Victor's Principles of Neurology.; Bradley's Neurology in Clinical Practice.; ILAE Classification of Seizures.; Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-240",
    examArea: "PSIQUIATRÍA",
    topic: "PSIQUIATRÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","psiquiatria"],
    statement:
      "Mujer de 38 años con antecedente de trastorno depresivo mayor en tratamiento con un inhibidor selectivo de la recaptación de serotonina (ISRS), consulta a urgencias por llanto persistente, pensamientos negativos e ideación de muerte. Durante la valoración presenta agitación psicomotora, verborrea e insomnio de varios días de evolución.\n¿Cuál es el diagnóstico más probable y el tratamiento de urgencia más adecuado?",
    options: [
      { id: "A", label: "A", text: "Episodio depresivo mayor; aumentar la dosis del ISRS." },
      { id: "B", label: "B", text: "Trastorno bipolar en episodio mixto; suspender antidepresivo e iniciar estabilizador del ánimo y antipsicótico." },
      { id: "C", label: "C", text: "Delirium; haloperidol intravenoso." },
      { id: "D", label: "D", text: "Trastorno de ansiedad generalizada; benzodiacepina y egreso." },
    ],
    correctOptionId: "B",
    explanation: "La coexistencia de síntomas depresivos (llanto, desesperanza, ideación de muerte) con síntomas maniformes (verborrea, agitación psicomotora e insomnio con aumento de energía) es altamente sugestiva de un episodio mixto del trastorno bipolar. Los antidepresivos pueden precipitar o desenmascarar estos episodios.",
    keyPoints: [
      "Episodio mixto bipolar.",
      "Tema: Trastorno bipolar.",
      "El episodio mixto tiene uno de los mayores riesgos de suicidio en psiquiatría.",
      "Los ISRS pueden precipitar manía o episodios mixtos.",
      "El litio reduce el riesgo suicida.",
    ],
    theoryContent: `PSIQUIATRÍA — BY DR Q.
Trastorno bipolar.

Trampa:
Muchos estudiantes leen: "Depresión." Y responden: Aumentar el antidepresivo.

Referencias:
DSM-5-TR.; Kaplan & Sadock's Synopsis of Psychiatry.; American Psychiatric Association Guidelines.; Stahl's Essential Psychopharmacology.`,
  },
  {
    id: "dr-q-241",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement:
      "Hombre de 35 años consulta por dolor lumbar y parestesias progresivas en miembros inferiores una semana después de una infección respiratoria. En los días siguientes desarrolla debilidad ascendente y parálisis facial bilateral. Se encuentra alerta, orientado y sin alteraciones del estado de conciencia. Un estudio inicial de electromiografía no muestra hallazgos concluyentes.\n¿Cuál es el tratamiento inicial más adecuado?",
    options: [
      { id: "A", label: "A", text: "Metilprednisolona intravenosa en altas dosis." },
      { id: "B", label: "B", text: "Inmunoglobulina intravenosa." },
      { id: "C", label: "C", text: "Interferón beta." },
      { id: "D", label: "D", text: "Acetazolamida." },
    ],
    correctOptionId: "B",
    explanation: "El cuadro es altamente sugestivo de síndrome de Guillain-Barré, una polirradiculoneuropatía inflamatoria aguda autoinmune. El tratamiento de primera línea consiste en inmunoglobulina intravenosa o plasmaféresis.",
    keyPoints: [
      "Síndrome de Guillain-Barré.",
      "Tema: Neuropatías desmielinizantes.",
      "Campylobacter jejuni es el desencadenante clásico.",
      "La parálisis facial bilateral es frecuente.",
      "La EMG puede ser normal al inicio.",
    ],
    theoryContent: `NEUROLOGÍA — BY DR Q.
Neuropatías desmielinizantes.

Trampa:
Muchos estudiantes leen: "EMG normal." Y descartan Guillain-Barré. Sin embargo:

Referencias:
Adams and Victor's Principles of Neurology.; Bradley's Neurology in Clinical Practice.; Harrison's Principles of Internal Medicine.; UpToDate: Guillain-Barré Syndrome in Adults.`,
  },
  {
    id: "dr-q-242",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement:
      "Mujer de 27 años, secundigestante de 13 semanas de gestación, acude a control prenatal. Refiere antecedente de preeclampsia severa en un embarazo previo. Durante la valoración actual se documentan cifras tensionales de 150/90 mmHg en dos mediciones separadas. No presenta proteinuria ni datos de daño a órgano blanco.\n¿Cuál es el diagnóstico y el tratamiento más adecuado?",
    options: [
      { id: "A", label: "A", text: "Hipertensión gestacional; iniciar sulfato de magnesio." },
      { id: "B", label: "B", text: "Preeclampsia sin criterios de severidad; finalizar la gestación." },
      { id: "C", label: "C", text: "Hipertensión arterial crónica; iniciar antihipertensivo y ácido acetilsalicílico a baja dosis." },
      { id: "D", label: "D", text: "Hipertensión transitoria del embarazo; observación únicamente." },
    ],
    correctOptionId: "C",
    explanation: "La hipertensión diagnosticada antes de las 20 semanas de gestación corresponde a hipertensión arterial crónica. Además, esta paciente presenta alto riesgo de recurrencia de preeclampsia por antecedente de preeclampsia severa, por lo que requiere profilaxis con ácido acetilsalicílico a dosis bajas.",
    keyPoints: [
      "Hipertensión arterial crónica.",
      "Tema: Trastornos hipertensivos del embarazo.",
      "Hipertensión antes de las 20 semanas = hipertensión crónica.",
      "La preeclampsia suele aparecer después de las 20 semanas.",
      "Antecedente de preeclampsia severa es indicación de aspirina profiláctica.",
    ],
    theoryContent: `GINECOLOGÍA Y OBSTETRICIA — BY DR Q.
Trastornos hipertensivos del embarazo.

Trampa:
Muchos estudiantes leen: "Antecedente de preeclampsia." Y responden: Preeclampsia actual.

Referencias:
ACOG Practice Bulletin: Chronic Hypertension in Pregnancy.; ISSHP Guidelines for Hypertensive Disorders of Pregnancy.; Williams Obstetrics.; FIGO Recommendations on Preeclampsia Prevention.`,
  },
  {
    id: "dr-q-243",
    examArea: "BÁSICAS- ANATOMÍA - CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement:
      "¿Cuál de las siguientes estructuras atraviesa el conducto inguinal en el hombre y cuál en la mujer?",
    options: [
      { id: "A", label: "A", text: "Hombre: ligamento redondo del útero / Mujer: cordón espermático." },
      { id: "B", label: "B", text: "Hombre: cordón espermático / Mujer: ligamento redondo del útero." },
      { id: "C", label: "C", text: "Hombre: arteria epigástrica inferior / Mujer: vena safena magna." },
      { id: "D", label: "D", text: "Hombre: nervio femoral / Mujer: nervio obturador." },
    ],
    correctOptionId: "B",
    explanation: "El conducto inguinal contiene el cordón espermático en el hombre y el ligamento redondo del útero en la mujer. En ambos sexos también atraviesa el nervio ilioinguinal.",
    keyPoints: [
      "Cordón espermático y ligamento redondo.",
      "Tema: Conducto inguinal.",
      "Hombre → cordón espermático.",
      "Mujer → ligamento redondo del útero.",
      "El nervio ilioinguinal atraviesa el conducto en ambos sexos.",
    ],
    theoryContent: `CIRUGÍA GENERAL — BY DR Q.
Conducto inguinal.

Trampa:
Muchos estudiantes invierten: Los contenidos masculinos y femeninos. Por ello debes recordar: 👉 Hombre = cordón espermático.

Referencias:
Moore. Anatomía con Orientación Clínica.; Gray's Anatomy.; Netter Atlas de Anatomía Humana.; Schwartz's Principles of Surgery.`,
  },
  {
    id: "dr-q-244",
    examArea: "BÁSICAS-SEMIOLOGÍA - ONCOLOGÍA",
    topic: "ONCOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","oncologia"],
    statement:
      "Durante el examen físico de un paciente se identifica una adenopatía supraclavicular izquierda dura, fija e indolora, compatible con ganglio de Virchow.\n¿Con cuál de las siguientes patologías se asocia clásicamente este hallazgo?",
    options: [
      { id: "A", label: "A", text: "Cáncer de pulmón." },
      { id: "B", label: "B", text: "Linfoma de Hodgkin." },
      { id: "C", label: "C", text: "Adenocarcinoma gástrico." },
      { id: "D", label: "D", text: "Carcinoma de tiroides." },
    ],
    correctOptionId: "C",
    explanation: "El ganglio de Virchow corresponde a una adenopatía supraclavicular izquierda secundaria a diseminación metastásica por vía linfática. Clásicamente se asocia al cáncer gástrico avanzado.",
    keyPoints: [
      "Cáncer gástrico.",
      "Tema: Semiología oncológica.",
      "Ganglio de Virchow = adenopatía supraclavicular izquierda.",
      "También se denomina nódulo de Troisier.",
      "Sugiere metástasis abdominal.",
    ],
    theoryContent: `ONCOLOGÍA — BY DR Q.
Semiología oncológica.

Trampa:
Muchos estudiantes responden: Cáncer pulmonar. Porque asocian: Ganglio supraclavicular.

Referencias:
Bates' Guide to Physical Examination.; DeGowin's Diagnostic Examination.; Schwartz's Principles of Surgery.; Sabiston Textbook of Surgery.`,
  },
  {
    id: "dr-q-245",
    examArea: "BÁSICAS- EMBRIOLOGÍA Y OBSTETRICIA",
    topic: "EMBRIOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","embriologia_y_obstetricia"],
    statement:
      "¿Cuál de las siguientes estructuras embrionarias da origen a la placenta y se encuentra directamente implicada en la fisiopatología de trastornos hipertensivos del embarazo como la preeclampsia?",
    options: [
      { id: "A", label: "A", text: "Amnios." },
      { id: "B", label: "B", text: "Trofoblasto." },
      { id: "C", label: "C", text: "Saco vitelino." },
      { id: "D", label: "D", text: "Alantoides." },
    ],
    correctOptionId: "B",
    explanation: "El trofoblasto es la estructura embrionaria que participa en la formación de la placenta. La invasión inadecuada del trofoblasto extravelloso sobre las arterias espirales uterinas constituye uno de los mecanismos fisiopatológicos fundamentales en el desarrollo de la preeclampsia.",
    keyPoints: [
      "Trofoblasto.",
      "Tema: Embriología placentaria.",
      "El trofoblasto origina la porción fetal de la placenta.",
      "El citotrofoblasto y sincitiotrofoblasto derivan del trofoblasto.",
      "La invasión trofoblástica es esencial para la perfusión placentaria.",
    ],
    theoryContent: `EMBRIOLOGÍA Y OBSTETRICIA — BY DR Q.
Embriología placentaria.

Trampa:
Muchos estudiantes responden: Sincitiotrofoblasto. Sin embargo: La pregunta solicita la estructura embrionaria principal.

Referencias:
Langman's Embryology.; Moore. The Developing Human.; Williams Obstetrics.; Cunningham Obstetricia.`,
  },
  {
    id: "dr-q-246",
    examArea: "BÁSICAS-NEUROANATOMÍA",
    topic: "NEUROANATOMÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neuroanatomia"],
    statement:
      "Hombre de 30 años consulta por visión doble que empeora al mirar hacia la izquierda. Al examen neurológico se evidencia limitación para la abducción del ojo izquierdo. Los reflejos pupilares son normales.\nDurante la evaluación de los músculos extraoculares, además de los pares craneales III (oculomotor) y VI (abducens), ¿qué otro par craneal participa en la motilidad ocular?",
    options: [
      { id: "A", label: "A", text: "Par craneal II (óptico)." },
      { id: "B", label: "B", text: "Par craneal IV (troclear)." },
      { id: "C", label: "C", text: "Par craneal V (trigémino)." },
      { id: "D", label: "D", text: "Par craneal VII (facial)." },
    ],
    correctOptionId: "B",
    explanation: "La motilidad ocular extrínseca depende de tres pares craneales: III (oculomotor), IV (troclear) y VI (abducens). El nervio troclear inerva el músculo oblicuo superior.",
    keyPoints: [
      "Pares III, IV y VI.",
      "Tema: Pares craneales.",
      "El nervio troclear inerva exclusivamente el oblicuo superior.",
      "El troclear es el único par craneal que emerge por la cara dorsal del tronco encefálico.",
      "El abducens inerva el recto lateral.",
    ],
    theoryContent: `NEUROANATOMÍA — BY DR Q.
Pares craneales.

Trampa:
Muchos estudiantes recuerdan únicamente: III y VI. Pero olvidan: El IV par craneal.

Referencias:
Snell Neuroanatomía Clínica.; Moore Anatomía con Orientación Clínica.; Adams and Victor's Neurology.; Gray's Anatomy.`,
  },
  {
    id: "dr-q-247",
    examArea: "MEDICINA INTERNA",
    topic: "MEDICINA INTERNA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","medicina_interna"],
    statement:
      "Hombre de 62 años con diagnóstico reciente de hipertensión arterial inicia tratamiento farmacológico. Pocos días después presenta un episodio de síncope mientras caminaba. En el servicio de urgencias se documenta presión arterial de 140/90 mmHg y frecuencia cardíaca de 42 lpm. No presenta alteraciones neurológicas ni otros hallazgos relevantes.\n¿Cuál de los siguientes medicamentos es el más probable responsable del cuadro?",
    options: [
      { id: "A", label: "A", text: "Amlodipino." },
      { id: "B", label: "B", text: "Hidroclorotiazida." },
      { id: "C", label: "C", text: "Metoprolol." },
      { id: "D", label: "D", text: "Losartán." },
    ],
    correctOptionId: "C",
    explanation: "Los betabloqueadores disminuyen la frecuencia cardíaca al bloquear los receptores β1 cardíacos. Una de sus reacciones adversas más importantes es la bradicardia sintomática, que puede manifestarse con síncope.",
    keyPoints: [
      "Betabloqueadores.",
      "Tema: Antihipertensivos.",
      "Los betabloqueadores son causa frecuente de bradicardia medicamentosa.",
      "Metoprolol es un β1-selectivo.",
      "La bradicardia sintomática puede manifestarse con síncope.",
    ],
    theoryContent: `MEDICINA INTERNA — BY DR Q.
Antihipertensivos.

Trampa:
Muchos estudiantes leen: "Antihipertensivo." Y responden cualquier fármaco frecuente. Sin embargo:

Referencias:
Katzung. Basic and Clinical Pharmacology.; Goodman & Gilman's The Pharmacological Basis of Therapeutics.; Braunwald's Heart Disease.; Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-248",
    examArea: "PEDIATRÍA - INFECTOLOGÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","infectologia"],
    statement:
      "Niña de 10 años, previamente sana y con esquema de vacunación completo, consulta por fiebre, vómitos y aparición súbita de petequias y equimosis. Durante la valoración presenta rigidez de nuca y taquicardia.\n¿Cuál es la sospecha diagnóstica más probable y cuál es el microorganismo más frecuentemente implicado?",
    options: [
      { id: "A", label: "A", text: "Meningitis neumocócica; Streptococcus pneumoniae." },
      { id: "B", label: "B", text: "Meningococcemia con meningitis; Neisseria meningitidis." },
      { id: "C", label: "C", text: "Encefalitis viral; Virus herpes simple tipo 1." },
      { id: "D", label: "D", text: "Púrpura trombocitopénica inmune; Epstein-Barr virus." },
    ],
    correctOptionId: "B",
    explanation: "La combinación de fiebre, síndrome meníngeo y exantema petequial o purpúrico debe hacer sospechar meningococcemia invasiva hasta demostrar lo contrario. Neisseria meningitidis es el agente clásicamente asociado.",
    keyPoints: [
      "Meningococcemia.",
      "Tema: Meningitis bacteriana.",
      "Petequias + meningismo = meningococo hasta demostrar lo contrario.",
      "Neisseria meningitidis es un diplococo gramnegativo.",
      "Puede evolucionar rápidamente a shock séptico.",
    ],
    theoryContent: `INFECTOLOGÍA — BY DR Q.
Meningitis bacteriana.

Trampa:
Muchos estudiantes leen: "Rigidez de nuca." Y responden: Neumococo.

Referencias:
Nelson Textbook of Pediatrics.; Red Book: American Academy of Pediatrics.; Mandell, Douglas and Bennett's Infectious Diseases.; Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-249",
    examArea: "BÁSICAS- FARMACOLOGÍA - ORTOPEDIA",
    topic: "ORTOPEDIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ortopedia"],
    statement:
      "Paciente de 55 años consulta por dolor súbito en la región posterior del tobillo mientras caminaba. La evaluación confirma ruptura del tendón de Aquiles. Al revisar antecedentes farmacológicos se identifica el uso reciente de un antibiótico.\n¿Cuál de los siguientes antibióticos se asocia clásicamente con este evento adverso?",
    options: [
      { id: "A", label: "A", text: "Amoxicilina." },
      { id: "B", label: "B", text: "Azitromicina." },
      { id: "C", label: "C", text: "Ciprofloxacina." },
      { id: "D", label: "D", text: "Cefalexina." },
    ],
    correctOptionId: "C",
    explanation: "Las fluoroquinolonas se asocian a tendinopatía y ruptura tendinosa, especialmente del tendón de Aquiles. El riesgo es mayor en adultos mayores, pacientes con insuficiencia renal y usuarios concomitantes de corticoides.",
    keyPoints: [
      "Fluoroquinolonas.",
      "Tema: Reacciones adversas medicamentosas.",
      "Ciprofloxacina es la asociación clásica en exámenes.",
      "Las fluoroquinolonas pueden causar tendinitis y ruptura tendinosa.",
      "El tendón de Aquiles es el más frecuentemente afectado.",
    ],
    theoryContent: `ORTOPEDIA — BY DR Q.
Reacciones adversas medicamentosas.

Trampa:
Muchos estudiantes recuerdan: "Antibiótico." Pero olvidan: La reacción adversa específica.

Referencias:
Katzung. Basic and Clinical Pharmacology.; Goodman & Gilman's The Pharmacological Basis of Therapeutics.; Harrison's Principles of Internal Medicine.; FDA Safety Communication on Fluoroquinolones.`,
  },
  {
    id: "dr-q-250",
    examArea: "UROLOGÍA",
    topic: "UROLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","urologia"],
    statement:
      "Varón de 25 años, albañil, consulta por aparición progresiva de una masa escrotal indolora de varios meses de evolución. Refiere que aumenta de tamaño al permanecer de pie y durante esfuerzos físicos. Al examen físico el test de Valsalva es positivo y la transiluminación es negativa.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Hidrocele." },
      { id: "B", label: "B", text: "Hernia inguinoescrotal." },
      { id: "C", label: "C", text: "Varicocele." },
      { id: "D", label: "D", text: "Espermatocele." },
    ],
    correctOptionId: "C",
    explanation: "El varicocele corresponde a una dilatación anormal del plexo venoso pampiniforme. Se presenta típicamente como una masa escrotal que aumenta con el Valsalva y la bipedestación, con transiluminación negativa.",
    keyPoints: [
      "Varicocele.",
      "Tema: Patología escrotal.",
      "El varicocele es la causa corregible más frecuente de infertilidad masculina.",
      "Se origina por dilatación del plexo pampiniforme.",
      "Es más frecuente en el lado izquierdo.",
    ],
    theoryContent: `UROLOGÍA — BY DR Q.
Patología escrotal.

Trampa:
Muchos estudiantes leen: "Masa escrotal." Y responden: Hidrocele.

Referencias:
Campbell-Walsh Urology.; Smith & Tanagho's General Urology.; Nelson Textbook of Pediatrics.; EAU Guidelines on Male Infertility.`,
  },
  {
    id: "dr-q-251",
    examArea: "HEMATOLOGÍA - URGENCIAS",
    topic: "URGENCIAS",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","urgencias"],
    statement:
      "Hombre de 45 años con antecedente de fibrilación auricular en tratamiento crónico con warfarina consulta a urgencias tras sufrir una herida por arma de fuego en el brazo izquierdo. Presenta sangrado activo importante, aunque se encuentra hemodinámicamente estable. Los estudios iniciales reportan INR de 3.2.\n¿Cuál es la intervención más efectiva para revertir rápidamente la anticoagulación?",
    options: [
      { id: "A", label: "A", text: "Administrar vitamina K intravenosa como única medida." },
      { id: "B", label: "B", text: "Suspender warfarina y repetir INR en 24 horas." },
      { id: "C", label: "C", text: "Administrar plasma fresco congelado." },
      { id: "D", label: "D", text: "Administrar concentrado de complejo protrombínico de 4 factores asociado a vitamina K intravenosa." },
    ],
    correctOptionId: "D",
    explanation: "En pacientes con hemorragia mayor o trauma significativo bajo tratamiento con warfarina, la reversión más rápida y efectiva se logra con concentrado de complejo protrombínico (PCC de 4 factores) asociado a vitamina K intravenosa.",
    keyPoints: [
      "Reversión urgente de anticoagulación.",
      "Tema: Anticoagulación y reversión.",
      "PCC de 4 factores es el método de reversión más rápido para warfarina.",
      "La vitamina K siempre debe acompañar la reversión urgente.",
      "El plasma fresco congelado es alternativa cuando no hay PCC.",
    ],
    theoryContent: `URGENCIAS — BY DR Q.
Anticoagulación y reversión.

Trampa:
Muchos estudiantes leen: "INR 3.2" Y responden: Vitamina K.

Referencias:
Harrison's Principles of Internal Medicine.; Tintinalli's Emergency Medicine.; ACC Expert Consensus on Management of Bleeding in Patients on Oral Anticoagulants.; CHEST Guidelines on Antithrombotic Therapy.`,
  },
  {
    id: "dr-q-252",
    examArea: "HEMATOLOGÍA",
    topic: "HEMATOLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","hematologia"],
    statement:
      "Mujer de 23 años, sin antecedentes de importancia, consulta por aparición progresiva de petequias y equimosis espontáneas. Los estudios iniciales reportan plaquetas de 20.000/μL. El resto del hemograma es normal. El frotis de sangre periférica no evidencia hemólisis ni alteraciones en otras líneas celulares.\n¿Cuál es el diagnóstico más probable y la conducta inicial más adecuada?",
    options: [
      { id: "A", label: "A", text: "Púrpura trombótica trombocitopénica; plasmaféresis urgente." },
      { id: "B", label: "B", text: "Leucemia aguda; aspirado de médula ósea." },
      { id: "C", label: "C", text: "Púrpura trombocitopénica inmune (PTI); iniciar corticoides." },
      { id: "D", label: "D", text: "Coagulación intravascular diseminada; transfusión masiva." },
    ],
    correctOptionId: "C",
    explanation: "La PTI es una enfermedad autoinmune caracterizada por trombocitopenia aislada, con hemoglobina y leucocitos normales, sin evidencia de hemólisis ni alteraciones en otras series hematológicas. El tratamiento inicial en pacientes sintomáticos o con plaquetas <30.000/μL son los corticoides sistémicos.",
    keyPoints: [
      "PTI.",
      "Tema: Trastornos plaquetarios.",
      "PTI = trombocitopenia aislada.",
      "El resto del hemograma suele ser normal.",
      "Los corticoides son el tratamiento inicial de primera línea.",
    ],
    theoryContent: `HEMATOLOGÍA — BY DR Q.
Trastornos plaquetarios.

Trampa:
Muchos estudiantes leen: "Plaquetas 20.000." Y responden: Transfusión de plaquetas.

Referencias:
Williams Hematology.; Hoffbrand's Essential Haematology.; Harrison's Principles of Internal Medicine.; ASH Guidelines for Immune Thrombocytopenia.`,
  },
  {
    id: "dr-q-253",
    examArea: "NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","nefrologia"],
    statement:
      "Hombre de 55 años con diagnóstico reciente de síndrome nefrótico secundario a nefropatía membranosa. Los estudios muestran albúmina sérica de 2.2 g/dL. No presenta antecedentes de eventos trombóticos.\n¿Cuál es la complicación más probable a desarrollar?",
    options: [
      { id: "A", label: "A", text: "Hemorragia intracraneal espontánea." },
      { id: "B", label: "B", text: "Trombosis venosa profunda o trombosis de la vena renal." },
      { id: "C", label: "C", text: "Endocarditis infecciosa." },
      { id: "D", label: "D", text: "Crisis hipercalcémica." },
    ],
    correctOptionId: "B",
    explanation: "La nefropatía membranosa es la glomerulopatía que más se asocia a fenómenos tromboembólicos. La pérdida urinaria de anticoagulantes naturales (antitrombina III, proteínas C y S) y la hipoalbuminemia severa generan un importante estado de hipercoagulabilidad.",
    keyPoints: [
      "Trombosis.",
      "Tema: Complicaciones del síndrome nefrótico.",
      "La nefropatía membranosa es la glomerulopatía con mayor riesgo trombótico.",
      "La trombosis de la vena renal es una asociación clásica de examen.",
      "Albúmina <2.5 g/dL aumenta significativamente el riesgo.",
    ],
    theoryContent: `NEFROLOGÍA — BY DR Q.
Complicaciones del síndrome nefrótico.

Trampa:
Muchos estudiantes recuerdan: "Síndrome nefrótico = infecciones." Lo cual es cierto. Sin embargo:

Referencias:
Brenner & Rector's The Kidney.; KDIGO Glomerular Disease Guidelines.; Harrison's Principles of Internal Medicine.; UpToDate: Hypercoagulability in Nephrotic Syndrome.`,
  },
  {
    id: "dr-q-254",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement:
      "Mujer de 34 años consulta por dolor pélvico de inicio súbito durante actividad física intensa, asociado a náuseas. La ecografía transvaginal evidencia una masa anexial izquierda con signo de \"remolino\" (whirlpool sign).\n¿Cuál es el diagnóstico más probable y cuál es el manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Embarazo ectópico; metotrexato." },
      { id: "B", label: "B", text: "Quiste ovárico hemorrágico; observación." },
      { id: "C", label: "C", text: "Torsión ovárica; laparoscopia urgente con destorsión ovárica." },
      { id: "D", label: "D", text: "Enfermedad inflamatoria pélvica; antibióticos intravenosos." },
    ],
    correctOptionId: "C",
    explanation: "La torsión ovárica ocurre por rotación del ovario sobre su pedículo vascular, comprometiendo inicialmente el drenaje venoso y posteriormente el flujo arterial. El signo ecográfico de \"remolino\" es altamente sugestivo de torsión anexial y constituye una urgencia ginecológica.",
    keyPoints: [
      "Torsión ovárica.",
      "Tema: Abdomen agudo ginecológico.",
      "El signo de \"whirlpool\" es altamente sugestivo de torsión ovárica.",
      "El dolor suele ser súbito e intenso.",
      "Las náuseas y vómitos son frecuentes.",
    ],
    theoryContent: `GINECOLOGÍA Y OBSTETRICIA — BY DR Q.
Abdomen agudo ginecológico.

Trampa:
Muchos estudiantes leen: "Masa anexial." Y responden: Quiste ovárico.

Referencias:
Williams Gynecology.; Berek & Novak's Gynecology.; ACOG Committee Opinion on Adnexal Torsion.; UpToDate: Ovarian and Fallopian Tube Torsion.`,
  },
  {
    id: "dr-q-255",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement:
      "Mujer de 30 años, G1P1, consulta por fiebre y dolor mamario 8 días después de un parto vaginal. Refiere lactancia materna exclusiva. Al examen físico se evidencia una mama eritematosa, tumefacta y dolorosa a la palpación, sin fluctuación ni hallazgos sugestivos de colección.\n¿Cuál es la conducta inicial más adecuada?",
    options: [
      { id: "A", label: "A", text: "Suspender la lactancia e iniciar cabergolina." },
      { id: "B", label: "B", text: "Drenaje quirúrgico urgente." },
      { id: "C", label: "C", text: "Iniciar dicloxacilina o cefalexina y continuar la lactancia materna." },
      { id: "D", label: "D", text: "Observación ambulatoria sin tratamiento." },
    ],
    correctOptionId: "C",
    explanation: "El cuadro clínico es compatible con mastitis puerperal. El microorganismo más frecuentemente implicado es Staphylococcus aureus. El tratamiento inicial consiste en antibióticos dirigidos contra cocos grampositivos y el mantenimiento de la lactancia o extracción frecuente de leche.",
    keyPoints: [
      "Mastitis puerperal.",
      "Tema: Patología mamaria del puerperio.",
      "Staphylococcus aureus es el agente causal más frecuente.",
      "La lactancia NO debe suspenderse.",
      "Dicloxacilina y cefalexina son tratamientos de primera línea.",
    ],
    theoryContent: `GINECOLOGÍA Y OBSTETRICIA — BY DR Q.
Patología mamaria del puerperio.

Trampa:
Muchos estudiantes leen: "Fiebre y mama dolorosa." Y responden: Drenaje quirúrgico.

Referencias:
Williams Obstetrics.; ACOG Committee Opinion on Breastfeeding Challenges.; Academy of Breastfeeding Medicine Protocol #36.; Nelson Textbook of Pediatrics.`,
  },
];
