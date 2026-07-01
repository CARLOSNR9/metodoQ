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
    statement: "Un hombre de 60 años con antecedente de colitis ulcerosa extensa de 15 años de evolución consulta para conocer su riesgo de desarrollar cáncer colorrectal y las estrategias disponibles para su prevención. Refiere encontrarse en remisión clínica durante los últimos 3 años. No presenta antecedentes personales de displasia ni cáncer colorrectal.\n¿Cuál de las siguientes afirmaciones es correcta?",
    options: [
      { id: "A", label: "A", text: "La colitis ulcerosa sólo se asocia a un incremento en el riesgo de cáncer colorrectal en fumadores." },
      { id: "B", label: "B", text: "En su caso, dado que está en remisión de larga duración, se considera adecuado el tamizaje aconsejado a la población general." },
      { id: "C", label: "C", text: "En casos como el suyo se considera adecuado someterse a colonoscopia con cromoendoscopia y biopsias dirigidas a zonas sospechosas de malignidad." },
      { id: "D", label: "D", text: "En casos como el suyo se considera adecuado el tamizaje mediante estudios periódicos de sangre oculta en heces, pero con una frecuencia superior a la utilizada en la población general." },
    ],
    correctOptionId: "C",
    explanation: "Los pacientes con colitis ulcerosa extensa y larga evolución presentan un riesgo aumentado de desarrollar cáncer colorrectal. Las guías actuales recomiendan programas de vigilancia endoscópica mediante colonoscopia con cromoendoscopia y toma de biopsias dirigidas para detectar displasia precozmente.",
    keyPoints: [
      "Cuando veas: Colitis ulcerosa extensa. Más de 8 años de evolución. Vigilancia de cáncer colorrectal. Prevención secundaria.",
      "Debes pensar en: Colonoscopia periódica con cromoendoscopia.",
      "Tema: Vigilancia de cáncer colorrectal en colitis ulcerosa.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa las estrategias de vigilancia del cáncer colorrectal en pacientes con enfermedad inflamatoria intestinal.
La clave no es la remisión clínica.
La clave es:
La extensión y duración de la enfermedad.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Colitis ulcerosa extensa.
• 15 años de evolución.
• Remisión clínica actual.
Estos pacientes tienen:
Mayor riesgo acumulado de desarrollar displasia y cáncer colorrectal.
¿Por qué aumenta el riesgo?
La inflamación crónica mantenida favorece:
• Daño epitelial persistente.
• Inestabilidad genética.
• Aparición de displasia.
• Progresión a cáncer colorrectal.
El riesgo depende principalmente de:
• Duración de la enfermedad.
• Extensión del compromiso colónico.
• Grado de inflamación.
• Presencia de colangitis esclerosante primaria.
• Antecedentes familiares de cáncer colorrectal.
¿Por qué la cromoendoscopia es la estrategia recomendada?
La cromoendoscopia mejora la detección de:
• Displasia plana.
• Lesiones sutiles.
• Áreas sospechosas de transformación neoplásica.
Permite además:
Realizar biopsias dirigidas con mayor rendimiento diagnóstico.
Por ello constituye la estrategia preferida en la vigilancia moderna de pacientes con colitis ulcerosa de larga evolución.
¿Por qué NO es suficiente el tamizaje de la población general?
Porque el riesgo del paciente es:
Significativamente superior al de una persona sin enfermedad inflamatoria intestinal.
Por esta razón requiere:
Protocolos específicos de vigilancia.
¿Por qué NO sirve la sangre oculta en heces?
Las pruebas de sangre oculta pueden utilizarse en programas poblacionales.
Sin embargo:
No sustituyen la vigilancia endoscópica en pacientes con colitis ulcerosa.
La detección de displasia requiere:
Evaluación directa de la mucosa colónica.
¿Por qué la opción A es falsa?
La colitis ulcerosa aumenta el riesgo de cáncer colorrectal independientemente del hábito tabáquico.
El tabaquismo no condiciona la indicación de vigilancia.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Remisión clínica durante 3 años."
Y concluyen:
"El riesgo desapareció."
Sin embargo:
El riesgo está determinado principalmente por la duración y extensión de la enfermedad.
La remisión clínica no elimina la necesidad de vigilancia endoscópica.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar colitis ulcerosa extensa.
2.	Evaluar duración de la enfermedad.
3.	Reconocer aumento del riesgo de cáncer colorrectal.
4.	Indicar vigilancia endoscópica especializada.
5.	Utilizar cromoendoscopia con biopsias dirigidas.
Perlas de examen
✅ La colitis ulcerosa extensa de larga evolución aumenta el riesgo de cáncer colorrectal.
✅ La vigilancia suele iniciarse después de varios años de evolución de la enfermedad.
✅ La cromoendoscopia mejora la detección de displasia.
✅ Las biopsias dirigidas tienen mayor rendimiento diagnóstico.
✅ La remisión clínica no elimina el riesgo de neoplasia.
✅ La colonoscopia es superior a las pruebas de sangre oculta para vigilancia en estos pacientes.
✅ La detección precoz de displasia modifica significativamente el pronóstico.
Referencias
• ECCO Guidelines on Colorectal Carcinoma Surveillance in Inflammatory Bowel Disease.
• American College of Gastroenterology Clinical Guidelines.
• British Society of Gastroenterology Guidelines for IBD Surveillance.
• Harrison's Principles of Internal Medicine.
• UpToDate: Colorectal Cancer Surveillance in Patients with Inflammatory Bowel Disease.`,
  },
  {
    id: "dr-q-167",
    examArea: "HEMATOLOGÍA",
    topic: "HEMATOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","hematologia"],
    statement: "Mujer de 28 años consulta por fatiga progresiva, disnea de medianos esfuerzos y disminución de la tolerancia al ejercicio. Refiere antecedentes de metrorragias abundantes desde hace varios meses. Los estudios de laboratorio confirman anemia ferropénica secundaria a pérdida crónica de sangre.\n¿Cuál de los siguientes parámetros se espera encontrar aumentado?",
    options: [
      { id: "A", label: "A", text: "Concentración de ferritina en suero." },
      { id: "B", label: "B", text: "Concentración de hemoglobina en reticulocitos." },
      { id: "C", label: "C", text: "Volumen corpuscular medio de los hematíes." },
      { id: "D", label: "D", text: "Concentración de transferrina en suero." },
    ],
    correctOptionId: "D",
    explanation: "La anemia ferropénica se caracteriza por disminución de los depósitos corporales de hierro. Como mecanismo compensatorio, el hígado aumenta la síntesis de transferrina para maximizar la captación y el transporte del hierro disponible.",
    keyPoints: [
      "Cuando veas: Anemia ferropénica. Pérdidas sanguíneas crónicas. Metrorragia. Déficit de hierro.",
      "Debes pensar en: Aumento de transferrina y disminución de ferritina.",
      "Tema: Anemia ferropénica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa los cambios característicos del metabolismo del hierro en la anemia ferropénica.
La clave no es la anemia.
La clave es:
El comportamiento de los marcadores del hierro.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Pérdidas sanguíneas crónicas.
• Depleción progresiva de hierro.
• Disminución de reservas corporales.
Como consecuencia:
Se desarrolla anemia ferropénica.
¿Qué ocurre con la ferritina?
La ferritina refleja:
Los depósitos corporales de hierro.
En la anemia ferropénica:
La ferritina disminuye.
Por ello:
La opción A es incorrecta.
¿Qué ocurre con la transferrina?
La transferrina es la principal proteína transportadora de hierro.
Cuando el hierro corporal disminuye:
El hígado incrementa la síntesis de transferrina.
El objetivo es:
Optimizar la captación y distribución del hierro disponible.
Por tanto:
La transferrina aumenta.
¿Qué ocurre con el volumen corpuscular medio?
La anemia ferropénica produce:
Microcitosis.
Por ello:
El volumen corpuscular medio (VCM) disminuye.
La opción C es incorrecta.
¿Qué ocurre con la hemoglobina reticulocitaria?
La hemoglobina de los reticulocitos refleja el hierro disponible para la eritropoyesis.
En la deficiencia de hierro:
Tiende a disminuir.
Por ello:
La opción B es incorrecta.
¿Cuáles son los hallazgos clásicos de laboratorio?
En anemia ferropénica se observa:
• Ferritina disminuida.
• Hierro sérico disminuido.
• Saturación de transferrina disminuida.
• Capacidad total de fijación del hierro aumentada.
• Transferrina aumentada.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Anemia."
Y buscan parámetros relacionados con la producción de eritrocitos.
Sin embargo:
La pregunta está evaluando específicamente el metabolismo del hierro.
El dato decisivo es:
Déficit de hierro secundario a pérdidas crónicas.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la anemia ferropénica.
2.	Reconocer disminución de depósitos de hierro.
3.	Recordar que la ferritina disminuye.
4.	Recordar que la transferrina aumenta.
5.	Identificar el patrón bioquímico característico.
Perlas de examen
✅ La ferritina es el mejor marcador de depósitos corporales de hierro.
✅ La transferrina aumenta en la anemia ferropénica.
✅ El VCM suele estar disminuido por microcitosis.
✅ La saturación de transferrina disminuye.
✅ La capacidad total de fijación del hierro aumenta.
✅ La metrorragia es una causa frecuente de anemia ferropénica en mujeres jóvenes.
✅ La ferritina baja prácticamente confirma deficiencia de hierro en ausencia de inflamación.
Referencias
• Harrison's Principles of Internal Medicine.
• Hoffbrand's Essential Haematology.
• Williams Hematology.
• British Society for Haematology Guidelines.
• UpToDate: Causes and Diagnosis of Iron Deficiency and Iron Deficiency Anemia in Adults.`,
  },
  {
    id: "dr-q-168",
    examArea: "HEMATOLOGÍA",
    topic: "HEMATOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","hematologia"],
    statement: "Hombre de 65 años, sin antecedentes médicos de importancia, consulta por astenia y adinamia de varios meses de evolución. Refiere no haber tenido seguimiento médico en los últimos años. Al examen físico presenta palidez conjuntival, sin otros hallazgos relevantes. Se realiza hemograma que reporta: hemoglobina 9.9 g/dL, hematocrito 29%, volumen corpuscular medio (VCM) 75 fL y RDW 19%.\n¿Cuál de los siguientes sería el paso inicial más apropiado?",
    options: [
      { id: "A", label: "A", text: "Tacto rectal y programar colonoscopia." },
      { id: "B", label: "B", text: "Espirometría y programar broncoscopia." },
      { id: "C", label: "C", text: "Medir haptoglobina y realizar prueba de Coombs." },
      { id: "D", label: "D", text: "Medir vitamina B12 y programar biopsia de médula ósea." },
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta una anemia microcítica con anisocitosis, hallazgos altamente sugestivos de anemia ferropénica. En hombres mayores de 50 años, la principal causa que debe descartarse es pérdida crónica de sangre por cáncer colorrectal hasta demostrar lo contrario.",
    keyPoints: [
      "Cuando veas: Hombre mayor de 50 años. Anemia microcítica. RDW elevado. Sin causa evidente de pérdida sanguínea.",
      "Debes pensar en: Sangrado gastrointestinal oculto y descartar cáncer colorrectal.",
      "Tema: Anemia ferropénica en el adulto mayor.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el abordaje diagnóstico de la anemia ferropénica en adultos mayores.
La clave no es la hemoglobina.
La clave es:
La microcitosis en un hombre de edad avanzada.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Anemia.
• VCM disminuido.
• RDW elevado.
• Palidez conjuntival.
Este patrón es altamente sugestivo de:
Anemia ferropénica.
¿Qué indica el RDW elevado?
El RDW refleja:
Variabilidad en el tamaño de los eritrocitos.
En la anemia ferropénica suele encontrarse:
Aumentado.
Esto ocurre por la coexistencia de hematíes normales y microcíticos.
¿Por qué pensar en sangrado gastrointestinal?
En hombres y mujeres posmenopáusicas:
La ferropenia debe considerarse secundaria a pérdida sanguínea gastrointestinal hasta demostrar lo contrario.
Las causas más importantes incluyen:
• Cáncer colorrectal.
• Adenomas avanzados.
• Angiodisplasias.
• Úlceras gastrointestinales.
¿Por qué la colonoscopia es prioritaria?
Porque permite:
• Identificar lesiones sangrantes.
• Diagnosticar cáncer colorrectal.
• Detectar pólipos avanzados.
• Establecer tratamiento oportuno.
La evaluación digestiva forma parte del estudio inicial de estos pacientes.
¿Por qué NO realizar broncoscopia?
No existen datos que sugieran:
• Hemoptisis.
• Enfermedad pulmonar.
• Sangrado respiratorio.
Además:
La anemia es microcítica, orientando inicialmente hacia déficit de hierro.
¿Por qué NO solicitar haptoglobina y Coombs?
Estos estudios se utilizan para investigar:
Anemia hemolítica.
La hemólisis típicamente produce:
• Reticulocitosis.
• LDH elevada.
• Bilirrubina indirecta elevada.
No suele producir microcitosis.
¿Por qué NO medir vitamina B12?
La deficiencia de vitamina B12 genera:
Anemia macrocítica.
El paciente presenta:
VCM de 75 fL.
Por lo tanto:
No corresponde al patrón esperado.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"Anemia."
Y buscan estudios hematológicos complejos.
Sin embargo:
El dato decisivo es:
Microcitosis en un hombre de 65 años.
Hasta demostrar lo contrario debe asumirse pérdida crónica de sangre gastrointestinal.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar anemia microcítica.
2.	Sospechar ferropenia.
3.	Buscar pérdidas sanguíneas ocultas.
4.	Priorizar estudio gastrointestinal.
5.	Descartar cáncer colorrectal.
Perlas de examen
✅ La causa más importante de ferropenia en hombres mayores es el sangrado gastrointestinal oculto.
✅ El cáncer colorrectal debe descartarse en todo adulto mayor con anemia ferropénica.
✅ El VCM disminuido orienta hacia ferropenia.
✅ El RDW suele estar elevado en la anemia ferropénica.
✅ La colonoscopia forma parte del estudio inicial.
✅ La hemólisis generalmente no produce anemia microcítica.
✅ La deficiencia de vitamina B12 produce anemia macrocítica.
Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• British Society of Gastroenterology Guidelines for Iron Deficiency Anaemia.
• American Gastroenterological Association Clinical Practice Guidelines.
• UpToDate: Evaluation of Iron Deficiency Anemia in Adults.`,
  },
  {
    id: "dr-q-169",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement: "Con respecto a los mecanismos fisiopatológicos de las taquiarritmias, señale cuál de las siguientes NO se explica por un mecanismo de reentrada:",
    options: [
      { id: "A", label: "A", text: "Flutter o aleteo auricular." },
      { id: "B", label: "B", text: "Taquicardia ventricular polimórfica tipo torsade de pointes." },
      { id: "C", label: "C", text: "Taquicardia auriculoventricular recíproca en el síndrome de Wolff-Parkinson-White." },
      { id: "D", label: "D", text: "Taquicardias asociadas a defectos del tabique interauricular." },
    ],
    correctOptionId: "B",
    explanation: "La torsade de pointes es una taquicardia ventricular polimórfica asociada a prolongación del intervalo QT y se produce principalmente por actividad desencadenada secundaria a posdespolarizaciones tempranas (early afterdepolarizations), no por mecanismos de reentrada.",
    keyPoints: [
      "Cuando veas: QT prolongado. Torsade de pointes. Taquicardia ventricular polimórfica. Posdespolarizaciones tempranas.",
      "Debes pensar en: Actividad desencadenada y no en reentrada.",
      "Tema: Mecanismos electrofisiológicos de las arritmias.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa los principales mecanismos responsables de las arritmias cardíacas.
La clave no es la taquicardia.
La clave es:
El mecanismo electrofisiológico que la produce.
¿Qué mecanismos producen las arritmias?
Las arritmias pueden originarse por:
• Reentrada.
• Automatismo aumentado.
• Actividad desencadenada.
La mayoría de las taquicardias supraventriculares clínicas se producen por:
Mecanismos de reentrada.
¿Qué es la reentrada?
La reentrada ocurre cuando un impulso eléctrico circula repetidamente a través de un circuito anatómico o funcional.
Esto genera:
Activación continua del tejido cardíaco.
Es el mecanismo responsable de numerosas taquicardias.
¿Por qué el flutter auricular es una arritmia por reentrada?
El flutter auricular típico se origina por:
Un circuito macrorreentrante en la aurícula derecha.
Generalmente dependiente del:
Istmo cavotricuspídeo.
Por esta razón:
La opción A es verdadera.
¿Por qué la taquicardia del síndrome de Wolff-Parkinson-White es una arritmia por reentrada?
En la taquicardia auriculoventricular recíproca existe:
• Una vía normal de conducción.
• Una vía accesoria.
El impulso circula entre ambas estructuras formando:
Un circuito de reentrada.
Por ello:
La opción C es verdadera.
¿Por qué las taquicardias asociadas a defectos del tabique interauricular suelen ser por reentrada?
Los pacientes con defectos septales auriculares presentan:
• Dilatación auricular.
• Remodelado eléctrico.
• Circuitos de macrorreentrada.
Esto favorece especialmente:
• Flutter auricular.
• Taquicardias auriculares por reentrada.
Por lo tanto:
La opción D es verdadera.
¿Por qué la torsade de pointes NO es una arritmia por reentrada?
La torsade de pointes aparece en presencia de:
• QT prolongado.
• Alteraciones electrolíticas.
• Fármacos que prolongan la repolarización.
• Síndromes congénitos del QT largo.
Su mecanismo principal es:
Posdespolarizaciones tempranas.
Estas generan:
Actividad desencadenada.
No existe un circuito reentrante como mecanismo primario.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"Taquicardia ventricular."
Y asumen:
"Todas las taquicardias son por reentrada."
Sin embargo:
La torsade de pointes es una excepción clásica.
El dato decisivo es:
La prolongación del QT y las posdespolarizaciones tempranas.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar el tipo de arritmia.
2.	Analizar el mecanismo electrofisiológico.
3.	Reconocer cuáles dependen de reentrada.
4.	Identificar las asociadas a actividad desencadenada.
5.	Recordar que la torsade de pointes se produce por posdespolarizaciones tempranas.
Perlas de examen
✅ El flutter auricular típico es una macrorreentrada auricular.
✅ La taquicardia auriculoventricular recíproca del WPW es una arritmia por reentrada.
✅ La torsade de pointes se asocia a QT prolongado.
✅ Las posdespolarizaciones tempranas son el mecanismo principal de la torsade de pointes.
✅ La hipocalemia y la hipomagnesemia favorecen su aparición.
✅ Numerosos medicamentos pueden prolongar el QT.
✅ La torsade de pointes puede degenerar en fibrilación ventricular y muerte súbita.
Referencias
• Braunwald's Heart Disease.
• ESC Guidelines for the Management of Ventricular Arrhythmias.
• ACC/AHA/HRS Guideline for Management of Arrhythmias.
• UpToDate: Acquired Long QT Syndrome and Torsades de Pointes.
• Zipes and Jalife's Cardiac Electrophysiology.`,
  },
  {
    id: "dr-q-170",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement: "Paciente de 60 años con antecedente de síndrome coronario agudo consulta al servicio de urgencias por palpitaciones y deterioro del estado general. El electrocardiograma muestra una taquicardia regular de complejo ancho con duración del QRS mayor de 0.20 segundos. Al examen físico presenta presión arterial de 70/40 mmHg, diaforesis, piel fría y desorientación.\n¿Cuál es el tratamiento de elección?",
    options: [
      { id: "A", label: "A", text: "Lidocaína intravenosa." },
      { id: "B", label: "B", text: "Amiodarona intravenosa." },
      { id: "C", label: "C", text: "Procainamida intravenosa." },
      { id: "D", label: "D", text: "Cardioversión eléctrica urgente." },
    ],
    correctOptionId: "D",
    explanation: "El paciente presenta una taquicardia de complejo ancho asociada a inestabilidad hemodinámica manifestada por hipotensión y alteración del estado mental. En este contexto, la conducta inmediata indicada es la cardioversión eléctrica sincronizada urgente.",
    keyPoints: [
      "Cuando veas: Taquicardia de complejo ancho. Hipotensión. Alteración del estado mental. Signos de choque.",
      "Debes pensar en: Cardioversión eléctrica inmediata.",
      "Tema: Taquicardia inestable.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los algoritmos más importantes de urgencias cardiovasculares.
La clave no es el antecedente coronario.
La clave es:
La inestabilidad hemodinámica.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Taquicardia de complejo ancho.
• Hipotensión severa.
• Alteración del estado de conciencia.
• Hipoperfusión sistémica.
Esto corresponde a:
Taquiarritmia inestable.
¿Qué significa que esté inestable?
Las guías consideran inestabilidad cuando existe:
• Hipotensión.
• Alteración del estado mental.
• Choque.
• Dolor torácico isquémico.
• Insuficiencia cardíaca aguda.
Este paciente presenta:
Hipotensión y compromiso neurológico.
Por lo tanto:
La conducta debe ser inmediata.
¿Por qué la cardioversión es el tratamiento de elección?
La cardioversión sincronizada:
• Restablece rápidamente el ritmo organizado.
• Mejora el gasto cardíaco.
• Corrige la hipoperfusión.
• Disminuye el riesgo de paro cardíaco.
En pacientes inestables:
No debe retrasarse por administración de antiarrítmicos.
¿Por qué NO administrar amiodarona?
La amiodarona es útil en:
Taquicardias estables.
Sin embargo:
Su inicio de acción es más lento que la cardioversión eléctrica.
En presencia de choque o hipotensión:
No es el tratamiento inicial.
¿Por qué NO administrar procainamida?
La procainamida puede emplearse en ciertas taquicardias de complejo ancho estables.
Pero:
Está contraindicada o debe evitarse en pacientes con inestabilidad hemodinámica.
¿Por qué NO administrar lidocaína?
La lidocaína puede utilizarse en algunas taquicardias ventriculares.
Sin embargo:
No sustituye la cardioversión en pacientes inestables.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"Taquicardia ventricular."
Y buscan inmediatamente:
Un antiarrítmico.
Sin embargo:
Antes de identificar el fármaco, debe evaluarse la estabilidad hemodinámica.
El dato decisivo es:
TA 70/40 mmHg y desorientación.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la taquicardia.
2.	Evaluar estabilidad hemodinámica.
3.	Buscar hipotensión o alteración del estado mental.
4.	Reconocer la inestabilidad.
5.	Realizar cardioversión sincronizada urgente.
Perlas de examen
✅ Toda taquicardia con hipotensión debe considerarse inestable hasta demostrar lo contrario.
✅ La alteración del estado mental es un criterio de inestabilidad hemodinámica.
✅ La cardioversión sincronizada es el tratamiento de elección en taquiarritmias inestables con pulso.
✅ Los antiarrítmicos se reservan principalmente para pacientes estables.
✅ Ante una taquicardia de complejo ancho debe asumirse taquicardia ventricular hasta demostrar lo contrario.
✅ La demora en la cardioversión aumenta el riesgo de deterioro clínico.
✅ La evaluación de la estabilidad hemodinámica precede a la clasificación detallada de la arritmia.
Referencias
• ACLS Provider Manual – American Heart Association.
• ACC/AHA/HRS Guideline for the Management of Ventricular Arrhythmias.
• ESC Guidelines for the Management of Supraventricular Tachycardia.
• Braunwald's Heart Disease.
• UpToDate: Emergency Treatment of Sustained Ventricular Tachycardia.`,
  },
  {
    id: "dr-q-171",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement: "Paciente de 76 años con antecedentes de hipertensión arterial y diabetes mellitus consulta al servicio de urgencias por cuadro de 72 horas de evolución consistente en palpitaciones y disminución progresiva de la tolerancia al esfuerzo. A su llegada se documenta fibrilación auricular con respuesta ventricular aproximada de 120 lpm. Se encuentra hemodinámicamente estable.\n¿Cuál de las siguientes afirmaciones es FALSA?",
    options: [
      { id: "A", label: "A", text: "Este paciente debe estar anticoagulado oralmente de por vida, salvo contraindicación." },
      { id: "B", label: "B", text: "Si decidimos realizar una cardioversión a su llegada a urgencias, sería necesario realizar previamente una ecocardiografía transesofágica." },
      { id: "C", label: "C", text: "Al ser el primer episodio de fibrilación auricular es el candidato idóneo para realizar una ablación con catéter." },
      { id: "D", label: "D", text: "Para controlar la frecuencia cardíaca podrían emplearse betabloqueantes." },
    ],
    correctOptionId: "C",
    explanation: "La ablación con catéter no constituye el manejo inicial rutinario de un primer episodio de fibrilación auricular. La indicación depende de múltiples factores clínicos, persistencia de síntomas, recurrencias y respuesta al tratamiento médico.",
    keyPoints: [
      "Cuando veas: Fibrilación auricular. Paciente anciano. Hipertensión arterial. Diabetes mellitus. Duración mayor de 48 horas.",
      "Debes pensar en: Anticoagulación, control de frecuencia y valoración cuidadosa antes de cardioversión.",
      "Tema: Fibrilación auricular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa los principios fundamentales del manejo de la fibrilación auricular.
La clave no es la frecuencia cardíaca.
La clave es:
La duración de la arritmia y el riesgo tromboembólico.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Fibrilación auricular.
• Duración aproximada de 72 horas.
• Edad avanzada.
• Hipertensión arterial.
• Diabetes mellitus.
Estos factores aumentan significativamente:
El riesgo de eventos tromboembólicos.
¿Cuál es el riesgo tromboembólico?
Utilizando la escala CHA₂DS₂-VASc:
• Edad ≥75 años = 2 puntos.
• Hipertensión arterial = 1 punto.
• Diabetes mellitus = 1 punto.
Puntaje total:
4 puntos.
Esto implica:
Alto riesgo de accidente cerebrovascular.
¿Por qué la anticoagulación es correcta?
Las guías actuales recomiendan:
Anticoagulación oral crónica en pacientes con CHA₂DS₂-VASc elevado.
Salvo contraindicación:
El beneficio supera claramente el riesgo hemorrágico.
Por ello:
La opción A es verdadera.
¿Por qué es necesaria la ecocardiografía transesofágica antes de cardioversión?
La fibrilación auricular tiene:
Más de 48 horas de evolución.
En estos casos existe riesgo de:
Trombos en la aurícula izquierda o en la orejuela auricular izquierda.
La ecocardiografía transesofágica permite:
Descartar trombos antes de realizar cardioversión temprana.
Por ello:
La opción B es verdadera.
¿Por qué los betabloqueantes son apropiados?
Los betabloqueantes constituyen uno de los pilares para:
• Control de frecuencia ventricular.
• Mejoría sintomática.
• Reducción de la respuesta ventricular rápida.
Por lo tanto:
La opción D es verdadera.
¿Por qué la ablación NO es la mejor respuesta?
La ablación con catéter puede considerarse en:
• Pacientes sintomáticos.
• Episodios recurrentes.
• Fracaso o intolerancia al tratamiento farmacológico.
• Estrategias seleccionadas de control del ritmo.
Sin embargo:
El hecho de tratarse de un primer episodio no convierte automáticamente al paciente en candidato ideal para ablación.
Por ello:
La afirmación es falsa.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Primer episodio de fibrilación auricular."
Y concluyen:
"Debe corregirse definitivamente con ablación."
Sin embargo:
El manejo inicial suele centrarse en:
• Anticoagulación.
• Control de frecuencia.
• Estrategias individualizadas de control del ritmo.
El dato decisivo es:
La fibrilación auricular de 72 horas de evolución en un paciente de alto riesgo tromboembólico.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar fibrilación auricular.
2.	Estimar duración del episodio.
3.	Calcular riesgo tromboembólico.
4.	Definir necesidad de anticoagulación.
5.	Controlar frecuencia ventricular.
6.	Valorar cardioversión según evolución y riesgo.
Perlas de examen
✅ Un CHA₂DS₂-VASc elevado indica necesidad de anticoagulación oral.
✅ La fibrilación auricular de más de 48 horas requiere precaución antes de cardioversión.
✅ La ecocardiografía transesofágica permite descartar trombos auriculares.
✅ Los betabloqueantes son fármacos de primera línea para control de frecuencia.
✅ La edad avanzada incrementa significativamente el riesgo de accidente cerebrovascular.
✅ La ablación no constituye el tratamiento inicial rutinario del primer episodio de fibrilación auricular.
✅ La estrategia terapéutica debe individualizarse según síntomas y comorbilidades.
Referencias
• ESC Guidelines for the Management of Atrial Fibrillation.
• ACC/AHA/HRS Guideline for the Management of Atrial Fibrillation.
• Braunwald's Heart Disease.
• UpToDate: Atrial Fibrillation in Adults.
• Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-172",
    examArea: "NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neumologia"],
    statement: "Hombre de 65 años con antecedente de enfermedad pulmonar obstructiva crónica (EPOC) y tabaquismo activo consulta por sensación de alza térmica, tos productiva y disnea de 3 días de evolución. En la radiografía de tórax se evidencia un infiltrado localizado en el lóbulo inferior izquierdo. Al examen físico se encuentra consciente, orientado y sin signos de choque.\n¿Cuál es la conducta más adecuada respecto al tratamiento y lugar de manejo?",
    options: [
      { id: "A", label: "A", text: "Tratamiento antibiótico oral y manejo ambulatorio." },
      { id: "B", label: "B", text: "Tratamiento antibiótico intravenoso y hospitalización." },
      { id: "C", label: "C", text: "Manejo en urgencias con observación por 6 horas y egreso sin antibióticos." },
      { id: "D", label: "D", text: "Ingreso a unidad de cuidados intensivos para ventilación mecánica." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta una neumonía adquirida en la comunidad asociada a una comorbilidad importante (EPOC), edad avanzada y compromiso radiológico pulmonar. Estos factores aumentan el riesgo de complicaciones y justifican manejo intrahospitalario con antibioticoterapia apropiada.",
    keyPoints: [
      "Cuando veas: Adulto mayor. EPOC. Tos productiva. Fiebre. Infiltrado pulmonar en radiografía.",
      "Debes pensar en: Neumonía adquirida en la comunidad y necesidad de estratificación de riesgo.",
      "Tema: Neumonía adquirida en la comunidad.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el abordaje inicial de la neumonía adquirida en la comunidad.
La clave no es el tabaquismo.
La clave es:
La presencia de neumonía en un paciente con comorbilidades.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Fiebre.
• Tos productiva.
• Disnea.
• Infiltrado pulmonar.
Estos hallazgos cumplen criterios para:
Neumonía adquirida en la comunidad.
¿Por qué el EPOC es importante?
Los pacientes con EPOC tienen:
• Mayor riesgo de infección respiratoria.
• Mayor riesgo de insuficiencia respiratoria.
• Mayor probabilidad de evolución desfavorable.
Por esta razón:
La presencia de EPOC modifica la conducta terapéutica.
¿Cómo se decide el lugar de manejo?
La decisión debe basarse en:
• Edad.
• Comorbilidades.
• Estado hemodinámico.
• Escalas de gravedad (CURB-65 o PSI).
• Riesgo de complicaciones.
En este caso:
La edad avanzada y la enfermedad pulmonar crónica favorecen el manejo hospitalario.
¿Qué tratamiento debe iniciarse?
En pacientes hospitalizados sin criterios de UCI se recomienda:
• Antibióticos intravenosos.
• Monitorización clínica.
• Oxigenoterapia según necesidad.
• Manejo de la comorbilidad respiratoria.
¿Por qué NO manejo ambulatorio?
Muchos pacientes con neumonía leve pueden tratarse ambulatoriamente.
Sin embargo:
La combinación de edad avanzada y EPOC incrementa el riesgo clínico.
¿Por qué NO observación sin antibióticos?
La presencia de infiltrado pulmonar y síntomas infecciosos establece el diagnóstico de neumonía.
Por lo tanto:
El tratamiento antibiótico está indicado.
¿Por qué NO ingreso a UCI?
No existen datos de:
• Choque séptico.
• Necesidad de ventilación mecánica.
• Hipoxemia severa.
• Falla multiorgánica.
Por ello:
No cumple criterios de cuidado intensivo.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"Infiltrado pulmonar."
Y responden:
Manejo ambulatorio porque no se describen signos de gravedad extrema.
Sin embargo:
El dato decisivo es:
La presencia de EPOC y la edad avanzada.
Estos factores aumentan el riesgo de complicaciones y favorecen hospitalización.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar neumonía adquirida en la comunidad.
2.	Identificar factores de riesgo.
3.	Evaluar comorbilidades.
4.	Estratificar gravedad.
5.	Definir lugar de manejo.
6.	Iniciar antibioticoterapia adecuada.
Perlas de examen
✅ La radiografía de tórax confirma el diagnóstico de neumonía.
✅ El EPOC aumenta el riesgo de complicaciones infecciosas respiratorias.
✅ La edad avanzada es un factor pronóstico importante.
✅ CURB-65 y PSI ayudan a definir el lugar de manejo.
✅ La presencia de comorbilidades influye en la decisión de hospitalización.
✅ No toda neumonía requiere UCI.
✅ El tratamiento antibiótico debe iniciarse tempranamente.
Referencias
• IDSA/ATS Guidelines for Community-Acquired Pneumonia.
• GOLD Report.
• Harrison's Principles of Internal Medicine.
• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.
• UpToDate: Community-Acquired Pneumonia in Adults.`,
  },
  {
    id: "dr-q-173",
    examArea: "ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","endocrinologia"],
    statement: "Paciente de 53 años con diabetes mellitus tipo 2 en tratamiento con metformina a dosis plena consulta por polidipsia, poliuria, polifagia y pérdida de peso no intencionada en los últimos meses. Los estudios de laboratorio muestran una HbA1c de 9.5%. No se documentan episodios de cetoacidosis ni otras complicaciones agudas.\n¿Cuál es el siguiente paso más apropiado en el manejo?",
    options: [
      { id: "A", label: "A", text: "Añadir un inhibidor del cotransportador sodio-glucosa tipo 2 (iSGLT2)." },
      { id: "B", label: "B", text: "Añadir un agonista del receptor GLP-1." },
      { id: "C", label: "C", text: "Iniciar insulinoterapia." },
      { id: "D", label: "D", text: "Añadir una sulfonilurea." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta hiperglucemia sintomática con manifestaciones clásicas de catabolismo metabólico, incluyendo poliuria, polidipsia, polifagia y pérdida de peso. En este escenario, las guías recomiendan iniciar insulinoterapia independientemente de que se encuentre recibiendo tratamiento oral.",
    keyPoints: [
      "Cuando veas: HbA1c elevada. Pérdida de peso. Poliuria. Polidipsia. Polifagia. Hiperglucemia sintomática.",
      "Debes pensar en: Déficit significativo de insulina e indicación de insulinoterapia.",
      "Tema: Indicaciones de insulinoterapia en diabetes mellitus tipo 2.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las indicaciones más importantes para iniciar insulina en diabetes mellitus tipo 2.
La clave no es la HbA1c.
La clave es:
La presencia de síntomas catabólicos.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Diabetes mellitus tipo 2.
• HbA1c de 9.5%.
• Poliuria.
• Polidipsia.
• Polifagia.
• Pérdida de peso.
Estos hallazgos sugieren:
Deficiencia significativa de acción insulínica.
¿Por qué la pérdida de peso es importante?
La pérdida de peso en un paciente hiperglucémico indica:
Estado catabólico.
El organismo comienza a utilizar:
• Grasas.
• Proteínas.
Como fuente energética debido a la incapacidad para utilizar adecuadamente la glucosa.
Por ello:
Es un marcador de descompensación metabólica.
¿Qué recomiendan las guías actuales?
La insulinoterapia debe iniciarse cuando existe:
• Hiperglucemia sintomática.
• Pérdida de peso inexplicada.
• Evidencia de catabolismo.
• HbA1c marcadamente elevada.
• Sospecha de insuficiencia importante de células beta.
Este paciente cumple varios de estos criterios.
¿Por qué NO añadir un iSGLT2?
Los iSGLT2 son excelentes fármacos para:
• Control glucémico.
• Protección cardiovascular.
• Protección renal.
Sin embargo:
No son la mejor opción cuando existe hiperglucemia sintomática con catabolismo.
¿Por qué NO añadir un agonista GLP-1?
Los agonistas GLP-1 son muy eficaces para:
• Reducción de HbA1c.
• Pérdida de peso.
• Beneficio cardiovascular.
Pero:
En presencia de síntomas catabólicos la prioridad es corregir rápidamente el déficit de insulina.
¿Por qué NO añadir una sulfonilurea?
Las sulfonilureas pueden disminuir la glucemia.
Sin embargo:
Su efecto es insuficiente frente a un cuadro de descompensación metabólica con pérdida de peso.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"HbA1c de 9.5%."
Y responden:
Terapia dual o triple.
Sin embargo:
La pregunta aporta un dato mucho más importante.
La presencia de:
• Poliuria.
• Polidipsia.
• Polifagia.
• Pérdida de peso.
Estos hallazgos indican:
Hiperglucemia sintomática con catabolismo.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la diabetes descompensada.
2.	Buscar síntomas clásicos de hiperglucemia.
3.	Detectar pérdida de peso o catabolismo.
4.	Reconocer insuficiencia significativa de insulina.
5.	Iniciar insulinoterapia.
Perlas de examen
✅ La pérdida de peso es un dato de alarma en diabetes mal controlada.
✅ La poliuria, polidipsia y polifagia son síntomas clásicos de hiperglucemia.
✅ La insulinoterapia está indicada en presencia de catabolismo metabólico.
✅ La HbA1c elevada por sí sola no siempre obliga a iniciar insulina.
✅ Los síntomas clínicos son tan importantes como los valores de laboratorio.
✅ La corrección rápida de la hiperglucemia reduce complicaciones agudas.
✅ La metformina puede mantenerse una vez iniciada la insulinoterapia si no existen contraindicaciones.
Referencias
• American Diabetes Association (ADA) Standards of Care.
• EASD Consensus Report on Hyperglycemia Management.
• Williams Textbook of Endocrinology.
• Harrison's Principles of Internal Medicine.
• UpToDate: Initial Management of Hyperglycemia in Adults with Type 2 Diabetes Mellitus.`,
  },
  {
    id: "dr-q-174",
    examArea: "NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neumologia"],
    statement: "Hombre de 72 años con antecedente de enfermedad pulmonar obstructiva crónica (EPOC) en tratamiento con tiotropio. Durante los últimos 6 meses ha presentado dos exacerbaciones que han requerido atención médica. En los estudios de laboratorio presenta un recuento de eosinófilos de 150 células/μL.\n¿Cuál es el siguiente paso más apropiado en el manejo?",
    options: [
      { id: "A", label: "A", text: "Agregar un corticoide inhalado." },
      { id: "B", label: "B", text: "Cambiar a LAMA + LABA." },
      { id: "C", label: "C", text: "Iniciar roflumilast." },
      { id: "D", label: "D", text: "Mantener el tratamiento actual." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta EPOC con exacerbaciones persistentes pese al tratamiento con un LAMA en monoterapia. Según las recomendaciones actuales, el siguiente paso consiste en escalar a broncodilatación dual con LAMA + LABA. El recuento de eosinófilos de 150 células/μL no favorece el uso inicial de corticoides inhalados.",
    keyPoints: [
      "Cuando veas: EPOC. Tratamiento con LAMA. Exacerbaciones recurrentes. Eosinófilos <300 células/μL.",
      "Debes pensar en: Escalamiento inicial a doble broncodilatación.",
      "Tema: Tratamiento escalonado del EPOC.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el algoritmo actual de escalamiento terapéutico en EPOC.
La clave no es el número de exacerbaciones.
La clave es:
El recuento de eosinófilos.
¿Qué está ocurriendo realmente?
El paciente presenta:
• EPOC.
• Tratamiento con LAMA (tiotropio).
• Dos exacerbaciones recientes.
• Eosinófilos de 150 células/μL.
Esto indica:
Control insuficiente de la enfermedad.
Por lo tanto:
Se requiere intensificación terapéutica.
¿Qué recomiendan las guías GOLD?
Cuando un paciente recibe:
• LAMA en monoterapia.
Y continúa presentando:
• Exacerbaciones.
El siguiente paso habitual es:
Añadir un LABA.
Esto permite:
• Mejor control sintomático.
• Disminución de exacerbaciones.
• Mejor función pulmonar.
¿Por qué NO iniciar corticoides inhalados?
Los corticoides inhalados son más beneficiosos en pacientes con:
• Eosinofilia elevada.
• Exacerbaciones frecuentes.
• Fenotipo inflamatorio eosinofílico.
La mayor evidencia de beneficio se observa cuando los eosinófilos son:
≥300 células/μL.
Con 150 células/μL:
El beneficio es menor.
Por ello:
No constituyen el siguiente paso inicial.
¿Por qué NO iniciar roflumilast?
Roflumilast se reserva para pacientes con:
• EPOC grave o muy grave.
• Bronquitis crónica.
• Exacerbaciones persistentes pese a terapia inhalada optimizada.
No es el siguiente escalón terapéutico en este caso.
¿Por qué NO mantener el tratamiento actual?
El paciente ha presentado:
Dos exacerbaciones en seis meses.
Esto demuestra:
Control insuficiente de la enfermedad.
Por tanto:
Es necesario escalar el tratamiento.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"Dos exacerbaciones."
Y responden:
"Corticoide inhalado."
Sin embargo:
La decisión depende en gran medida del número de eosinófilos.
El dato decisivo es:
150 células/μL.
Por ello:
La broncodilatación dual es el siguiente paso recomendado.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar exacerbaciones persistentes.
2.	Revisar tratamiento actual.
3.	Evaluar eosinófilos.
4.	Escalar inicialmente a LAMA + LABA.
5.	Considerar corticoides inhalados según perfil eosinofílico.
Perlas de examen
✅ LAMA + LABA constituye el siguiente escalón terapéutico en muchos pacientes con EPOC no controlado.
✅ Los eosinófilos ayudan a seleccionar candidatos para corticoides inhalados.
✅ El mayor beneficio de los corticoides inhalados se observa con eosinófilos ≥300 células/μL.
✅ Los corticoides inhalados aumentan el riesgo de neumonía en algunos pacientes.
✅ Roflumilast se reserva para escenarios más avanzados.
✅ Las exacerbaciones son un marcador importante de progresión de la enfermedad.
✅ Las recomendaciones GOLD utilizan un enfoque individualizado basado en síntomas y exacerbaciones.
Referencias
• GOLD Report 2025.
• Global Initiative for Chronic Obstructive Lung Disease.
• Harrison's Principles of Internal Medicine.
• Murray & Nadel's Textbook of Respiratory Medicine.
• UpToDate: Stable COPD Pharmacologic Management.`,
  },
  {
    id: "dr-q-175",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Hombre de 25 años es llevado al servicio de urgencias tras sufrir un accidente de tránsito con trauma abdominal contuso. Al ingreso presenta dolor abdominal difuso, presión arterial de 85/50 mmHg y frecuencia cardíaca de 125 lpm. Durante la evaluación inicial se realiza un FAST que resulta positivo para líquido libre intraabdominal.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Realizar una tomografía abdominal contrastada." },
      { id: "B", label: "B", text: "Llevar a laparotomía exploratoria." },
      { id: "C", label: "C", text: "Observación en urgencias con reevaluación clínica seriada." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta trauma abdominal contuso asociado a inestabilidad hemodinámica y FAST positivo para líquido libre intraabdominal. Estos hallazgos sugieren hemorragia intraabdominal activa y constituyen indicación de exploración quirúrgica urgente.",
    keyPoints: [
      "Cuando veas: Trauma abdominal contuso. Hipotensión. Taquicardia. FAST positivo.",
      "Debes pensar en: Hemorragia intraabdominal con indicación quirúrgica urgente.",
      "Tema: Trauma abdominal cerrado.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el algoritmo inicial del trauma abdominal.
La clave no es el accidente de tránsito.
La clave es:
La inestabilidad hemodinámica.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Trauma abdominal cerrado.
• Hipotensión.
• Taquicardia.
• FAST positivo.
Estos hallazgos sugieren:
Sangrado intraabdominal significativo.
En el contexto de trauma:
Debe asumirse hemorragia activa hasta demostrar lo contrario.
¿Por qué es importante el FAST?
El FAST (Focused Assessment with Sonography in Trauma) permite detectar:
• Hemoperitoneo.
• Hemopericardio.
• Líquido libre asociado a trauma.
En pacientes inestables:
Es una herramienta rápida para la toma de decisiones.
¿Qué significa un FAST positivo en un paciente hipotenso?
La combinación de:
• Inestabilidad hemodinámica.
• Líquido libre abdominal.
Es altamente sugestiva de:
Hemorragia intraabdominal clínicamente significativa.
Por ello:
La conducta correcta es cirugía urgente.
¿Por qué NO realizar tomografía?
La tomografía es el estudio de elección en:
• Pacientes estables.
• Trauma abdominal con necesidad de caracterización anatómica.
Sin embargo:
El paciente se encuentra hipotenso.
Retrasar la cirugía para realizar imágenes puede aumentar la morbimortalidad.
¿Por qué NO observar?
La observación está indicada en pacientes:
• Estables.
• Sin evidencia de sangrado significativo.
• Con evaluación inicial tranquilizadora.
Este paciente presenta:
Datos claros de choque hemorrágico.
Por lo tanto:
La observación es inadecuada.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan:
"Trauma abdominal = TAC."
Sin embargo:
Antes de decidir el estudio diagnóstico debe evaluarse la estabilidad hemodinámica.
El dato decisivo es:
Hipotensión más FAST positivo.
Esto equivale a:
Laparotomía exploratoria urgente.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Evaluar estabilidad hemodinámica.
2.	Realizar FAST.
3.	Identificar líquido libre abdominal.
4.	Confirmar inestabilidad.
5.	Llevar a cirugía urgente.
Perlas de examen
✅ El FAST positivo en un paciente inestable es indicación de laparotomía exploratoria.
✅ La estabilidad hemodinámica determina el algoritmo diagnóstico en trauma.
✅ La tomografía abdominal se reserva principalmente para pacientes estables.
✅ La hipotensión y la taquicardia sugieren choque hemorrágico.
✅ El trauma abdominal cerrado puede producir lesiones esplénicas, hepáticas y mesentéricas graves.
✅ El FAST es una herramienta rápida y fundamental en la evaluación inicial del trauma.
✅ No deben retrasarse intervenciones salvadoras para obtener estudios complementarios.
Referencias
• Advanced Trauma Life Support (ATLS) 11th Edition.
• Eastern Association for the Surgery of Trauma (EAST) Guidelines.
• Western Trauma Association Critical Decisions in Trauma.
• Sabiston Textbook of Surgery.
• UpToDate: Initial Evaluation and Management of Blunt Abdominal Trauma.`,
  },
  {
    id: "dr-q-176",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Mujer de 24 años con antecedente de alergia a la penicilina consulta por dolor en fosa ilíaca derecha de 24 horas de evolución, asociado a fiebre y leucocitosis. Al examen físico presenta signo de Rovsing positivo, McBurney negativo y talopercusión positiva. No presenta signos de irritación peritoneal. La ecografía abdominal reporta apéndice engrosado con líquido periapendicular.\n¿Cuál es el manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Manejo antibiótico ambulatorio y control en 48 horas." },
      { id: "B", label: "B", text: "Apendicectomía laparoscópica e inicio de antibioticoterapia preoperatoria." },
      { id: "C", label: "C", text: "Observación intrahospitalaria durante 24 horas y repetir ecografía." },
      { id: "D", label: "D", text: "Drenaje percutáneo guiado por imágenes." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un cuadro clínico e imagenológico compatible con apendicitis aguda no complicada. El tratamiento de elección es la apendicectomía temprana asociada a antibioticoterapia perioperatoria adecuada.",
    keyPoints: [
      "Cuando veas: Dolor en fosa ilíaca derecha. Fiebre. Leucocitosis. Ecografía compatible con apendicitis. Ausencia de absceso o plastrón.",
      "Debes pensar en: Apendicectomía temprana.",
      "Tema: Apendicitis aguda.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el manejo definitivo de la apendicitis aguda.
La clave no es el signo de McBurney.
La clave es:
La confirmación ecográfica de apendicitis.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Dolor en fosa ilíaca derecha.
• Fiebre.
• Leucocitosis.
• Signos clínicos de irritación localizada.
• Ecografía compatible con inflamación apendicular.
Estos hallazgos son diagnósticos de:
Apendicitis aguda.
¿Qué aporta la ecografía?
La ecografía demuestra:
• Apéndice engrosado.
• Líquido periapendicular.
Estos hallazgos aumentan significativamente la probabilidad diagnóstica y permiten establecer conducta quirúrgica.
¿Por qué la cirugía es el tratamiento de elección?
La apendicectomía:
• Elimina el foco infeccioso.
• Disminuye el riesgo de perforación.
• Reduce recurrencias.
• Constituye el tratamiento definitivo.
Actualmente:
La vía laparoscópica es la estrategia preferida en la mayoría de los pacientes.
¿Qué antibióticos podrían utilizarse?
Debido al antecedente de alergia a penicilina pueden emplearse esquemas alternativos que cubran:
• Bacilos gramnegativos.
• Anaerobios intestinales.
Siempre según protocolos institucionales.
¿Por qué NO observación?
La paciente ya cumple criterios clínicos e imagenológicos de apendicitis.
Retrasar el tratamiento puede aumentar el riesgo de:
• Perforación.
• Absceso.
• Peritonitis.
¿Por qué NO manejo exclusivamente antibiótico?
Aunque algunos casos seleccionados pueden recibir manejo conservador, el tratamiento estándar de una apendicitis aguda confirmada continúa siendo:
La apendicectomía.
¿Por qué NO drenaje percutáneo?
El drenaje se reserva principalmente para:
• Abscesos apendiculares.
• Plastrones complicados.
Estos hallazgos no están presentes en el caso.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"McBurney negativo."
Y descartan apendicitis.
Sin embargo:
Ningún signo físico aislado excluye el diagnóstico.
El dato decisivo es:
La combinación de clínica compatible y ecografía positiva.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar síntomas compatibles.
2.	Confirmar inflamación apendicular mediante imágenes.
3.	Descartar complicaciones mayores.
4.	Iniciar antibioticoterapia perioperatoria.
5.	Realizar apendicectomía temprana.
Perlas de examen
✅ La apendicitis es la causa más frecuente de abdomen agudo quirúrgico.
✅ La ecografía es una herramienta diagnóstica útil especialmente en mujeres jóvenes.
✅ La ausencia de un signo físico específico no excluye el diagnóstico.
✅ La laparoscopia es el abordaje preferido en la mayoría de los casos.
✅ Los antibióticos forman parte del manejo perioperatorio.
✅ La demora terapéutica aumenta el riesgo de perforación.
✅ El tratamiento definitivo de la apendicitis aguda sigue siendo quirúrgico en la mayoría de los pacientes.
Referencias
• World Society of Emergency Surgery (WSES) Guidelines for Acute Appendicitis.
• Sabiston Textbook of Surgery.
• Schwartz's Principles of Surgery.
• UpToDate: Acute Appendicitis in Adults.
• American College of Surgeons Clinical Practice Guidelines.`,
  },
  {
    id: "dr-q-177",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Hombre de 40 años, de profesión obrero, consulta por una masa en la región inguinal derecha que aumenta de tamaño con los esfuerzos físicos y disminuye en reposo. Al examen físico se evidencia una masa inguinal reductible, no dolorosa, sin cambios inflamatorios locales y sin signos de irritación peritoneal.\n¿Cuál es la fisiopatología del cuadro y el manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Persistencia del proceso peritoneo-vaginal con protrusión de contenido abdominal a través del anillo inguinal profundo; reparación quirúrgica electiva." },
      { id: "B", label: "B", text: "Debilidad adquirida de la pared posterior del canal inguinal con protrusión a través del triángulo de Hesselbach; reparación quirúrgica electiva." },
      { id: "C", label: "C", text: "Debilidad de la fascia transversalis con encarcelamiento intestinal; laparotomía exploratoria urgente." },
      { id: "D", label: "D", text: "Herniación secundaria a inflamación apendicular; manejo antibiótico y observación." },
    ],
    correctOptionId: "B",
    explanation: "La presentación clínica es compatible con una hernia inguinal directa, típica en adultos que realizan esfuerzos físicos repetitivos. Su fisiopatología se relaciona con debilidad adquirida de la pared posterior del canal inguinal, permitiendo la protrusión del contenido abdominal a través del triángulo de Hesselbach. El tratamiento definitivo es la corrección quirúrgica electiva.",
    keyPoints: [
      "Cuando veas: Adulto mayor de 30 años. Trabajos con esfuerzo físico repetitivo. Masa inguinal reductible. Aumento con maniobras de Valsalva.",
      "Debes pensar en: Hernia inguinal directa.",
      "Tema: Hernias inguinales.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la fisiopatología y el manejo de las hernias inguinales.
La clave no es la masa.
La clave es:
Que sea reductible y aparezca con el esfuerzo.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Masa inguinal.
• Incremento con maniobras de presión abdominal.
• Reducción espontánea o manual.
• Ausencia de dolor intenso.
• Ausencia de signos de complicación.
Esto corresponde a:
Hernia inguinal no complicada.
¿Cuál es la fisiopatología?
Las hernias inguinales directas se producen por:
Debilidad adquirida de la pared posterior del canal inguinal.
La protrusión ocurre a través de:
El triángulo de Hesselbach.
Esta región está delimitada por:
• Borde lateral del músculo recto abdominal.
• Vasos epigástricos inferiores.
• Ligamento inguinal.
¿Por qué el trabajo del paciente es importante?
Los esfuerzos repetitivos aumentan:
• La presión intraabdominal.
• El estrés mecánico sobre la pared abdominal.
Favoreciendo:
La aparición de hernias adquiridas.
¿Cómo se diferencia de una hernia indirecta?
La hernia indirecta:
• Se relaciona con persistencia del proceso peritoneo-vaginal.
• Atraviesa el anillo inguinal profundo.
• Se localiza lateral a los vasos epigástricos inferiores.
La hernia directa:
• Es adquirida.
• Se localiza medial a los vasos epigástricos inferiores.
• Protruye por el triángulo de Hesselbach.
¿Por qué la cirugía es el tratamiento de elección?
La reparación quirúrgica:
• Elimina el defecto anatómico.
• Previene encarcelamiento.
• Disminuye recurrencias.
• Mejora la calidad de vida.
En ausencia de complicaciones:
Se realiza de forma electiva.
¿Por qué NO requiere cirugía urgente?
El paciente no presenta:
• Dolor intenso.
• Irreductibilidad.
• Obstrucción intestinal.
• Estrangulación.
Por ello:
No existe indicación de urgencia quirúrgica.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Masa inguinal."
Y responden:
Hernia indirecta.
Sin embargo:
El dato decisivo es:
Adulto con esfuerzo físico repetitivo y defecto adquirido de la pared abdominal.
Esto orienta a:
Hernia inguinal directa.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar una masa inguinal reductible.
2.	Evaluar presencia de complicaciones.
3.	Diferenciar hernia directa de indirecta.
4.	Reconocer el defecto anatómico.
5.	Programar reparación quirúrgica electiva.
Perlas de examen
✅ La hernia inguinal directa atraviesa el triángulo de Hesselbach.
✅ Se localiza medial a los vasos epigástricos inferiores.
✅ Es una hernia adquirida relacionada con debilidad de la pared abdominal.
✅ El esfuerzo físico repetitivo favorece su aparición.
✅ La masa suele aumentar con Valsalva y disminuir en reposo.
✅ La cirugía electiva es el tratamiento definitivo.
✅ La ausencia de encarcelamiento permite manejo programado.
Referencias
• Schwartz's Principles of Surgery.
• Sabiston Textbook of Surgery.
• European Hernia Society Guidelines.
• UpToDate: Classification, Clinical Features and Diagnosis of Inguinal Hernias.
• American College of Surgeons Guidelines for Groin Hernias.`,
  },
  {
    id: "dr-q-178",
    examArea: "MEDICINA INTERNA – CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement: "Hombre de 50 años con antecedente de hipertensión arterial en tratamiento con losartán e hidroclorotiazida consulta por cefalea intensa y visión borrosa de inicio reciente. Al examen físico presenta presión arterial de 190/110 mmHg. No se documentan signos de focalización neurológica, dolor torácico, insuficiencia cardíaca aguda ni otras manifestaciones de daño agudo a órgano blanco.\n¿Cuál es el diagnóstico y el tratamiento inicial más adecuado?",
    options: [
      { id: "A", label: "A", text: "Urgencia hipertensiva; ajuste del tratamiento antihipertensivo por vía oral y observación." },
      { id: "B", label: "B", text: "Emergencia hipertensiva; iniciar nitroprusiato intravenoso y traslado a UCI." },
      { id: "C", label: "C", text: "Crisis hipertensiva; administrar fibrinolíticos y hospitalizar." },
      { id: "D", label: "D", text: "Hipertensión arterial resistente; agregar un tercer antihipertensivo y egreso." },
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta cifras tensionales severamente elevadas acompañadas de síntomas inespecíficos, pero sin evidencia objetiva de daño agudo a órgano blanco. Esto corresponde a una urgencia hipertensiva, cuyo manejo inicial consiste en reducción gradual de la presión arterial mediante tratamiento oral.",
    keyPoints: [
      "Cuando veas: Presión arterial ≥180/120 mmHg. Cefalea. Visión borrosa. Ausencia de daño agudo a órgano blanco.",
      "Debes pensar en: Urgencia hipertensiva.",
      "Tema: Crisis hipertensivas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la diferencia entre urgencia y emergencia hipertensiva.
La clave no es la presión arterial.
La clave es:
La presencia o ausencia de daño agudo a órgano blanco.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Hipertensión arterial severa.
• Cefalea.
• Visión borrosa.
• Ausencia de datos de daño orgánico agudo.
Esto corresponde a:
Urgencia hipertensiva.
¿Cuál es la diferencia entre urgencia y emergencia hipertensiva?
Urgencia hipertensiva:
• Presión arterial severamente elevada.
• Sin daño agudo a órgano blanco.
Emergencia hipertensiva:
• Presión arterial severamente elevada.
• Daño agudo a órgano blanco demostrado.
Ejemplos:
• Encefalopatía hipertensiva.
• Disección aórtica.
• Edema agudo de pulmón.
• Infarto agudo de miocardio.
• Accidente cerebrovascular.
• Lesión renal aguda.
¿Por qué este paciente no tiene una emergencia hipertensiva?
Porque el caso no documenta:
• Alteración del estado de conciencia.
• Déficit neurológico.
• Edema pulmonar.
• Isquemia miocárdica.
• Falla renal aguda.
Por lo tanto:
No existe evidencia objetiva de lesión aguda de órgano blanco.
¿Cómo debe tratarse?
El objetivo es:
Reducir la presión arterial de forma gradual.
Se pueden utilizar:
• Ajustes de antihipertensivos orales.
• Observación clínica.
• Seguimiento estrecho.
¿Por qué NO usar nitroprusiato intravenoso?
Los antihipertensivos intravenosos se reservan para:
Emergencias hipertensivas.
Una reducción brusca en este paciente podría generar:
• Hipoperfusión cerebral.
• Hipoperfusión coronaria.
• Hipoperfusión renal.
¿Por qué NO es hipertensión resistente?
La hipertensión resistente requiere:
Persistencia de cifras elevadas pese al uso de múltiples antihipertensivos adecuadamente dosificados.
La pregunta está evaluando:
Una crisis hipertensiva aguda.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
190/110 mmHg.
Y responden:
Emergencia hipertensiva.
Sin embargo:
La presión arterial por sí sola no define una emergencia.
El dato decisivo es:
La ausencia de daño agudo a órgano blanco.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar cifras tensionales severamente elevadas.
2.	Buscar daño agudo a órgano blanco.
3.	Diferenciar urgencia de emergencia hipertensiva.
4.	Si no existe daño agudo, utilizar tratamiento oral.
5.	Reducir la presión arterial de manera progresiva.
Perlas de examen
✅ La presencia de daño agudo a órgano blanco define una emergencia hipertensiva.
✅ La cifra de presión arterial aislada no distingue urgencia de emergencia.
✅ La reducción brusca de la presión arterial puede ser perjudicial.
✅ Las urgencias hipertensivas suelen manejarse con medicamentos orales.
✅ Los antihipertensivos intravenosos se reservan para emergencias hipertensivas.
✅ La evaluación neurológica y cardiovascular es fundamental.
✅ Siempre debe buscarse evidencia de lesión aguda de órgano blanco.
Referencias
• ESC/ESH Guidelines for the Management of Arterial Hypertension.
• ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure.
• Harrison's Principles of Internal Medicine.
• UpToDate: Hypertensive Urgency and Emergency in Adults.
• Tintinalli's Emergency Medicine.`,
  },
  {
    id: "dr-q-179",
    examArea: "NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","nefrologia"],
    statement: "Mujer de 70 años con antecedente de enfermedad renal crónica estadio G4 (TFG: 27 mL/min/1.73m²) consulta por fatiga, somnolencia y disnea progresiva. En los estudios de laboratorio se documenta hemoglobina de 8 g/dL. No se reportan sangrados activos ni otras causas evidentes de anemia.\n¿Cuál es la aproximación diagnóstica y la conducta más adecuada frente a la anemia?",
    options: [
      { id: "A", label: "A", text: "Solicitar perfil férrico, índice de saturación de transferrina y ferritina sérica; si se descarta ferropenia significativa, iniciar agente estimulante de eritropoyesis." },
      { id: "B", label: "B", text: "Iniciar transfusión de glóbulos rojos de manera rutinaria en todos los pacientes con enfermedad renal crónica y hemoglobina menor de 10 g/dL." },
      { id: "C", label: "C", text: "Solicitar biopsia de médula ósea para confirmar anemia secundaria a enfermedad renal crónica." },
      { id: "D", label: "D", text: "Iniciar hierro oral empírico sin necesidad de estudios complementarios." },
    ],
    correctOptionId: "A",
    explanation: "La anemia asociada a enfermedad renal crónica se produce principalmente por disminución de la producción de eritropoyetina. Sin embargo, antes de iniciar tratamiento con agentes estimulantes de eritropoyesis es obligatorio descartar deficiencia de hierro mediante estudio férrico completo.",
    keyPoints: [
      "Cuando veas: Enfermedad renal crónica avanzada. Fatiga. Disnea. Hemoglobina disminuida.",
      "Debes pensar en: Anemia secundaria a déficit de eritropoyetina y necesidad de estudiar el estado del hierro.",
      "Tema: Anemia en enfermedad renal crónica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el abordaje de la anemia en pacientes con enfermedad renal crónica.
La clave no es la hemoglobina.
La clave es:
La enfermedad renal avanzada.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Enfermedad renal crónica estadio G4.
• TFG de 27 mL/min/1.73m².
• Hemoglobina de 8 g/dL.
• Síntomas compatibles con anemia.
Esto orienta fuertemente a:
Anemia secundaria a enfermedad renal crónica.
¿Por qué aparece la anemia en la enfermedad renal crónica?
El riñón es el principal órgano responsable de producir:
Eritropoyetina.
A medida que disminuye la función renal:
• Disminuye la producción de eritropoyetina.
• Disminuye la eritropoyesis medular.
• Aparece anemia normocítica normocrómica.
Además pueden coexistir:
• Ferropenia absoluta.
• Ferropenia funcional.
• Inflamación crónica.
¿Por qué solicitar ferritina y saturación de transferrina?
Porque antes de iniciar agentes estimulantes de eritropoyesis debe evaluarse:
La disponibilidad de hierro.
Las guías recomiendan medir:
• Ferritina sérica.
• Saturación de transferrina (TSAT).
Esto permite:
• Detectar déficit de hierro.
• Optimizar la respuesta al tratamiento.
¿Cuándo iniciar agentes estimulantes de eritropoyesis?
Una vez descartadas o corregidas las alteraciones del hierro.
Los agentes más utilizados son:
• Eritropoyetina.
• Darbepoetina.
Su objetivo es:
Reducir síntomas y disminuir la necesidad de transfusiones.
¿Por qué NO transfundir de rutina?
Las transfusiones se reservan para:
• Anemia severa.
• Inestabilidad clínica.
• Sangrado activo.
• Necesidad urgente de corrección.
No constituyen el tratamiento crónico estándar.
¿Por qué NO realizar biopsia de médula ósea?
La enfermedad renal crónica avanzada explica adecuadamente la anemia.
La biopsia medular se reserva para:
Casos con sospecha de enfermedad hematológica.
¿Por qué NO iniciar hierro empírico?
Porque primero debe determinarse:
Si existe déficit absoluto o funcional de hierro.
La evaluación diagnóstica precede al tratamiento.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
Hemoglobina de 8 g/dL.
Y responden:
Transfusión inmediata.
Sin embargo:
La pregunta está evaluando el manejo habitual de la anemia asociada a enfermedad renal crónica.
El dato decisivo es:
TFG de 27 mL/min/1.73m².
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar enfermedad renal crónica avanzada.
2.	Confirmar anemia.
3.	Solicitar ferritina y saturación de transferrina.
4.	Corregir déficit de hierro si existe.
5.	Iniciar agentes estimulantes de eritropoyesis cuando estén indicados.
Perlas de examen
✅ La causa principal de anemia en enfermedad renal crónica es la disminución de eritropoyetina.
✅ La anemia suele ser normocítica y normocrómica.
✅ Ferritina y saturación de transferrina deben evaluarse antes del tratamiento.
✅ Los agentes estimulantes de eritropoyesis son la base del manejo crónico.
✅ Las transfusiones no constituyen el tratamiento habitual de mantenimiento.
✅ La ferropenia funcional es frecuente en enfermedad renal crónica.
✅ El tratamiento adecuado reduce síntomas y necesidad transfusional.
Referencias
• KDIGO Clinical Practice Guideline for Anemia in Chronic Kidney Disease.
• Brenner and Rector's The Kidney.
• Harrison's Principles of Internal Medicine.
• UpToDate: Anemia of Chronic Kidney Disease.
• National Kidney Foundation KDOQI Guidelines.`,
  },
  {
    id: "dr-q-180",
    examArea: "REUMATOLOGÍA",
    topic: "REUMATOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","reumatologia"],
    statement: "Mujer de 30 años con antecedente de lupus eritematoso sistémico consulta por cuadro clínico de una semana de evolución consistente en artralgias y aparición de rash malar. Al examen físico se encuentra hemodinámicamente estable, afebril, sin criterios de respuesta inflamatoria sistémica y sin evidencia de compromiso renal, neurológico, hematológico o cardiopulmonar.\n¿Cuál es el enfoque terapéutico más adecuado?",
    options: [
      { id: "A", label: "A", text: "Iniciar pulsos de metilprednisolona intravenosa." },
      { id: "B", label: "B", text: "Iniciar ciclofosfamida intravenosa." },
      { id: "C", label: "C", text: "Optimizar tratamiento con hidroxicloroquina y administrar glucocorticoides a dosis bajas." },
      { id: "D", label: "D", text: "Ingreso a unidad de cuidados intensivos para inmunosupresión agresiva." },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta una reactivación leve del lupus eritematoso sistémico manifestada por compromiso mucocutáneo y articular, sin evidencia de afectación orgánica mayor. En este escenario, el manejo recomendado consiste en optimizar la terapia de base e iniciar glucocorticoides a dosis bajas según la intensidad de los síntomas.",
    keyPoints: [
      "Cuando veas: Lupus eritematoso sistémico. Rash malar. Artralgias. Ausencia de compromiso orgánico mayor. Paciente estable.",
      "Debes pensar en: Brote leve de lupus.",
      "Tema: Manejo de las exacerbaciones del lupus eritematoso sistémico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la clasificación de los brotes de lupus según su gravedad.
La clave no es el antecedente de lupus.
La clave es:
La ausencia de compromiso de órgano mayor.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Rash malar.
• Artralgias.
• Estabilidad hemodinámica.
• Ausencia de fiebre.
• Sin evidencia de daño orgánico significativo.
Esto corresponde a:
Un brote leve de lupus eritematoso sistémico.
¿Cómo se clasifican los brotes de lupus?
De manera general pueden clasificarse en:
• Leves.
• Moderados.
• Graves.
La clasificación depende del compromiso orgánico y del riesgo vital.
¿Qué caracteriza un brote leve?
Generalmente incluye:
• Artralgias.
• Artritis leve.
• Rash malar.
• Fotosensibilidad.
• Lesiones cutáneas limitadas.
Sin compromiso de:
• Riñón.
• Sistema nervioso central.
• Corazón.
• Pulmón.
• Sistema hematológico severo.
¿Por qué la hidroxicloroquina es fundamental?
La hidroxicloroquina constituye el tratamiento base del lupus porque:
• Disminuye la actividad de la enfermedad.
• Reduce recaídas.
• Mejora manifestaciones cutáneas y articulares.
• Disminuye el daño acumulado.
Por ello:
Debe mantenerse salvo contraindicación.
¿Por qué utilizar glucocorticoides a dosis bajas?
Permiten:
• Controlar rápidamente la actividad inflamatoria.
• Mejorar síntomas articulares.
• Disminuir la actividad cutánea.
En brotes leves:
Las dosis bajas suelen ser suficientes.
¿Por qué NO utilizar ciclofosfamida?
La ciclofosfamida se reserva para:
Manifestaciones graves.
Por ejemplo:
• Nefritis lúpica proliferativa.
• Neuro-lupus.
• Vasculitis severa.
• Hemorragia alveolar.
No existe ninguna de estas situaciones en el caso.
¿Por qué NO administrar pulsos de metilprednisolona?
Los pulsos intravenosos están indicados en:
Brotes graves con amenaza para órganos mayores.
La paciente presenta:
Compromiso exclusivamente mucocutáneo y articular.
¿Por qué NO requiere UCI?
No presenta:
• Inestabilidad hemodinámica.
• Falla orgánica.
• Sepsis.
• Compromiso neurológico.
Por tanto:
No existe indicación de manejo intensivo.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Lupus eritematoso sistémico."
Y responden:
Inmunosupresión agresiva.
Sin embargo:
El manejo depende de la gravedad del brote.
El dato decisivo es:
La ausencia de compromiso orgánico mayor.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar el brote lúpico.
2.	Determinar órganos comprometidos.
3.	Clasificar la gravedad.
4.	Si el brote es leve, optimizar tratamiento de base.
5.	Utilizar glucocorticoides a dosis bajas según necesidad.
Perlas de examen
✅ La hidroxicloroquina es el tratamiento de base del lupus eritematoso sistémico.
✅ El rash malar es una manifestación clásica del lupus.
✅ Las artralgias son frecuentes durante las exacerbaciones leves.
✅ La presencia de compromiso renal cambia completamente el enfoque terapéutico.
✅ Los pulsos de metilprednisolona se reservan para brotes graves.
✅ La ciclofosfamida se utiliza en manifestaciones severas con riesgo de daño orgánico.
✅ La gravedad del brote determina la intensidad del tratamiento.
Referencias
• EULAR Recommendations for the Management of Systemic Lupus Erythematosus.
• American College of Rheumatology Guidelines.
• Harrison's Principles of Internal Medicine.
• Kelley and Firestein's Textbook of Rheumatology.
• UpToDate: Treatment and Prognosis of Systemic Lupus Erythematosus.`,
  },
  {
    id: "dr-q-181",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Hombre de 70 años es llevado al servicio de urgencias por cuadro de dolor abdominal tipo cólico, vómitos y distensión abdominal de varias horas de evolución. Al examen físico presenta distensión abdominal y dolor a la palpación en mesogastrio, sin signos de irritación peritoneal. No presenta signos apendiculares. Se realiza radiografía simple de abdomen que evidencia múltiples niveles hidroaéreos.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Obstrucción intestinal mecánica." },
      { id: "B", label: "B", text: "Apendicitis aguda." },
      { id: "C", label: "C", text: "Pancreatitis aguda." },
      { id: "D", label: "D", text: "Peritonitis secundaria." },
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta la tríada clásica de obstrucción intestinal: dolor abdominal cólico, vómitos y distensión abdominal. La presencia de niveles hidroaéreos en la radiografía abdominal apoya fuertemente este diagnóstico.",
    keyPoints: [
      "Cuando veas: Dolor abdominal tipo cólico. Vómitos. Distensión abdominal. Niveles hidroaéreos.",
      "Debes pensar en: Obstrucción intestinal.",
      "Tema: Oclusión intestinal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el reconocimiento clínico de la obstrucción intestinal.
La clave no es el dolor abdominal.
La clave es:
La combinación de síntomas y la radiografía.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Dolor abdominal cólico.
• Vómitos.
• Distensión abdominal.
• Niveles hidroaéreos.
Este conjunto de hallazgos es altamente sugestivo de:
Obstrucción intestinal mecánica.
¿Por qué el dolor es cólico?
En la obstrucción intestinal el intestino intenta vencer el obstáculo mediante:
Contracciones peristálticas intensas.
Esto produce:
Dolor intermitente tipo cólico.
¿Qué producen los vómitos?
La acumulación de contenido intestinal proximal a la obstrucción genera:
• Náuseas.
• Vómitos.
• Alteraciones hidroelectrolíticas.
¿Por qué aparece la distensión abdominal?
La obstrucción provoca acumulación de:
• Líquidos.
• Gas intestinal.
Como consecuencia:
Se desarrolla distensión progresiva.
¿Qué significan los niveles hidroaéreos?
Son uno de los hallazgos radiológicos clásicos de:
Obstrucción intestinal.
Representan:
Acumulación simultánea de aire y líquido dentro de asas intestinales dilatadas.
¿Por qué NO es apendicitis?
La apendicitis suele presentarse con:
• Dolor localizado en fosa ilíaca derecha.
• Signos apendiculares.
• Fiebre.
Además:
Los niveles hidroaéreos no son un hallazgo característico.
¿Por qué NO es pancreatitis?
La pancreatitis típicamente produce:
• Dolor epigástrico irradiado a espalda.
• Elevación de amilasa y lipasa.
• Íleo reflejo ocasional.
Sin embargo:
La radiografía descrita orienta mucho más a obstrucción mecánica.
¿Por qué NO es peritonitis?
La peritonitis suele acompañarse de:
• Defensa abdominal.
• Rigidez.
• Signos de irritación peritoneal.
El caso especifica:
Ausencia de signos peritoneales.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"Dolor abdominal y vómitos."
Y responden:
Pancreatitis o apendicitis.
Sin embargo:
El dato decisivo es:
La presencia de niveles hidroaéreos.
Este hallazgo es clásico de:
Obstrucción intestinal.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar dolor cólico.
2.	Reconocer vómitos y distensión.
3.	Revisar la radiografía.
4.	Identificar niveles hidroaéreos.
5.	Diagnosticar obstrucción intestinal mecánica.
Perlas de examen
✅ La tríada clásica es dolor cólico, vómitos y distensión abdominal.
✅ Los niveles hidroaéreos son un hallazgo característico de obstrucción intestinal.
✅ El dolor suele ser intermitente al inicio.
✅ La ausencia de irritación peritoneal sugiere ausencia de perforación.
✅ Las adherencias posquirúrgicas son la causa más frecuente de obstrucción intestinal mecánica.
✅ La tomografía abdominal ayuda a identificar el sitio y la causa de la obstrucción.
✅ La aparición de signos peritoneales obliga a sospechar isquemia o perforación intestinal.
Referencias
• Schwartz's Principles of Surgery.
• Sabiston Textbook of Surgery.
• World Society of Emergency Surgery Guidelines.
• UpToDate: Mechanical Small Bowel Obstruction in Adults.
• Townsend: Sabiston Textbook of Surgery.`,
  },
  {
    id: "dr-q-182",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Paciente femenina de 45 años consulta por dolor de inicio súbito en la región inguinal derecha de 24 horas de evolución. Al examen físico se evidencia una masa inguinal palpable, irreductible y dolorosa. No presenta cambios en la coloración de la piel suprayacente ni signos de perforación intestinal. Se encuentra hemodinámicamente estable.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Intentar reducción manual y dar egreso con seguimiento ambulatorio." },
      { id: "B", label: "B", text: "Solicitar tomografía abdominal contrastada y observar evolución." },
      { id: "C", label: "C", text: "Programar reparación quirúrgica electiva en los próximos meses." },
      { id: "D", label: "D", text: "Realizar valoración quirúrgica urgente y herniorrafia de urgencia." },
    ],
    correctOptionId: "D",
    explanation: "La paciente presenta una hernia inguinal encarcelada, definida por la imposibilidad de reducir el contenido herniario. Aunque aún no existen signos claros de estrangulación intestinal, el riesgo de progresión a compromiso vascular intestinal obliga a realizar manejo quirúrgico urgente.",
    keyPoints: [
      "Cuando veas: Masa inguinal. Dolor súbito. Hernia irreductible. Ausencia de signos peritoneales.",
      "Debes pensar en: Hernia encarcelada.",
      "Tema: Complicaciones de las hernias de la pared abdominal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa las complicaciones agudas de las hernias abdominales.
La clave no es el dolor.
La clave es:
La irreductibilidad.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Masa inguinal.
• Dolor agudo.
• Imposibilidad para reducir la hernia.
• Ausencia de datos de perforación.
Esto corresponde a:
Hernia encarcelada.
¿Qué es una hernia encarcelada?
Es aquella en la que:
El contenido herniario queda atrapado fuera de la cavidad abdominal.
Como consecuencia:
No puede reducirse espontáneamente ni mediante maniobras simples.
¿Por qué es una urgencia?
Porque puede progresar hacia:
Hernia estrangulada.
Cuando esto ocurre aparece:
• Compromiso vascular.
• Isquemia intestinal.
• Necrosis.
• Perforación.
Por ello:
La corrección quirúrgica no debe retrasarse.
¿Cuál es la diferencia entre encarcelamiento y estrangulación?
Hernia encarcelada:
• Irreductible.
• Sin compromiso vascular demostrado.
Hernia estrangulada:
• Irreductible.
• Isquemia intestinal.
• Riesgo de necrosis.
• Mayor urgencia quirúrgica.
¿Qué hallazgos sugieren estrangulación?
• Eritema local.
• Cambios violáceos de la piel.
• Fiebre.
• Taquicardia.
• Irritación peritoneal.
• Obstrucción intestinal avanzada.
Estos datos no aparecen en el caso.
¿Por qué NO realizar observación?
La irreductibilidad implica:
Riesgo elevado de progresión a estrangulación.
Retrasar el tratamiento aumenta la morbimortalidad.
¿Por qué NO programar cirugía electiva?
Las hernias reductibles pueden repararse electivamente.
Sin embargo:
Una hernia encarcelada requiere intervención urgente.
¿Por qué NO dar egreso?
La paciente presenta una complicación quirúrgica establecida.
No es candidata a manejo ambulatorio.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"No hay cambios de coloración."
Y concluyen:
"No es urgente."
Sin embargo:
El dato decisivo es:
La irreductibilidad de la hernia.
Esto define:
Hernia encarcelada y necesidad de cirugía urgente.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la masa herniaria.
2.	Determinar si es reductible.
3.	Reconocer el encarcelamiento.
4.	Buscar signos de estrangulación.
5.	Realizar corrección quirúrgica urgente.
Perlas de examen
✅ La irreductibilidad define una hernia encarcelada.
✅ La estrangulación implica compromiso vascular del contenido herniario.
✅ Toda hernia encarcelada requiere valoración quirúrgica urgente.
✅ Los cambios cutáneos sugieren progresión a estrangulación.
✅ La demora terapéutica aumenta el riesgo de necrosis intestinal.
✅ Las hernias reductibles suelen manejarse de forma electiva.
✅ La evaluación temprana mejora el pronóstico quirúrgico.
Referencias
• Schwartz's Principles of Surgery.
• Sabiston Textbook of Surgery.
• European Hernia Society Guidelines.
• World Society of Emergency Surgery Guidelines.
• UpToDate: Management of Inguinal and Femoral Hernias.`,
  },
  {
    id: "dr-q-183",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Femenina de 60 años consulta por dolor abdominal epigástrico intenso de inicio súbito, irradiado hacia la espalda, acompañado de náuseas y vómitos. Al examen físico presenta dolor a la palpación en epigastrio y una equimosis importante a nivel periumbilical.\n¿A qué hallazgo semiológico corresponde este signo y cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Signo de Grey Turner; colecistitis aguda." },
      { id: "B", label: "B", text: "Signo de Cullen; pancreatitis aguda grave." },
      { id: "C", label: "C", text: "Signo de Cullen; perforación de úlcera péptica." },
      { id: "D", label: "D", text: "Signo de Grey Turner; obstrucción intestinal." },
    ],
    correctOptionId: "B",
    explanation: "La presencia de equimosis periumbilical corresponde al signo de Cullen, un hallazgo asociado a hemorragia retroperitoneal. En el contexto de dolor epigástrico irradiado a la espalda, náuseas y vómitos, orienta fuertemente hacia pancreatitis aguda grave, especialmente de tipo necrohemorrágico.",
    keyPoints: [
      "Cuando veas: Dolor epigástrico intenso. Irradiación a espalda. Náuseas y vómitos. Equimosis periumbilical.",
      "Debes pensar en: Signo de Cullen y pancreatitis aguda grave.",
      "Tema: Pancreatitis aguda.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa signos semiológicos de gravedad en pancreatitis aguda.
La clave no es el dolor.
La clave es:
La equimosis periumbilical.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Dolor epigástrico intenso.
• Irradiación dorsal.
• Náuseas.
• Vómitos.
• Equimosis periumbilical.
Estos hallazgos son altamente sugestivos de:
Pancreatitis aguda grave.
¿Qué es el signo de Cullen?
Es la presencia de:
Equimosis alrededor del ombligo.
Se produce por:
Extravasación de sangre hacia el tejido celular subcutáneo periumbilical.
Generalmente indica:
Hemorragia retroperitoneal o intraabdominal significativa.
¿Con qué patologías se asocia?
Clásicamente con:
• Pancreatitis aguda necrohemorrágica.
• Embarazo ectópico roto.
• Hemoperitoneo.
• Trauma abdominal severo.
Sin embargo:
En los exámenes suele asociarse principalmente a pancreatitis aguda grave.
¿Por qué el dolor irradia a la espalda?
La localización retroperitoneal del páncreas favorece:
La irradiación posterior del dolor.
Este es uno de los hallazgos clínicos más característicos de la enfermedad.
¿Qué indica la presencia del signo de Cullen?
Sugiere:
• Mayor gravedad.
• Necrosis pancreática.
• Compromiso hemorrágico.
• Mayor morbimortalidad.
Por ello requiere:
Evaluación y manejo hospitalario inmediato.
¿Qué es el signo de Grey Turner?
Es otro signo de hemorragia retroperitoneal.
Se caracteriza por:
Equimosis en los flancos.
La diferencia clásica es:
• Cullen → periumbilical.
• Grey Turner → flancos.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan:
"Equimosis abdominal."
Pero confunden:
Signo de Cullen con signo de Grey Turner.
El dato decisivo es:
La localización periumbilical.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar dolor epigástrico irradiado a espalda.
2.	Reconocer signos de pancreatitis.
3.	Observar la localización de la equimosis.
4.	Identificar signo de Cullen.
5.	Sospechar pancreatitis aguda grave o necrohemorrágica.
Perlas de examen
✅ El signo de Cullen corresponde a equimosis periumbilical.
✅ El signo de Grey Turner corresponde a equimosis en los flancos.
✅ Ambos sugieren hemorragia retroperitoneal.
✅ El dolor irradiado a espalda es típico de pancreatitis aguda.
✅ La pancreatitis necrohemorrágica se asocia a mayor mortalidad.
✅ La presencia de signos cutáneos indica enfermedad grave.
✅ Cullen y Grey Turner son hallazgos clásicos de examen médico.
Referencias
• Atlanta Classification of Acute Pancreatitis.
• Harrison's Principles of Internal Medicine.
• Sabiston Textbook of Surgery.
• Schwartz's Principles of Surgery.
• UpToDate: Clinical Manifestations and Diagnosis of Acute Pancreatitis.`,
  },
  {
    id: "dr-q-184",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Paciente masculino de 25 años es llevado al servicio de urgencias tras sufrir una herida por arma blanca en el abdomen durante un intento de atraco. Refiere dolor abdominal progresivo y náuseas. Al examen físico presenta signo de Blumberg positivo. La ecografía FAST evidencia líquido libre intraabdominal.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Solicitar tomografía abdominal contrastada." },
      { id: "B", label: "B", text: "Observación clínica seriada durante 24 horas." },
      { id: "C", label: "C", text: "Laparotomía exploratoria urgente." },
      { id: "D", label: "D", text: "Lavado peritoneal diagnóstico." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta trauma abdominal penetrante asociado a signos de irritación peritoneal y FAST positivo para hemoperitoneo. Estos hallazgos constituyen indicación de exploración quirúrgica urgente debido a la alta probabilidad de lesión visceral significativa.",
    keyPoints: [
      "Cuando veas: Trauma abdominal penetrante. Signo de Blumberg positivo. FAST positivo. Taquicardia. Tendencia a inestabilidad hemodinámica.",
      "Debes pensar en: Laparotomía exploratoria urgente.",
      "Tema: Trauma abdominal penetrante.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa las indicaciones absolutas de cirugía en trauma abdominal.
La clave no es la herida por arma blanca.
La clave es:
La presencia de peritonitis.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Trauma abdominal penetrante.
• Dolor abdominal progresivo.
• Taquicardia.
• Signo de Blumberg positivo.
• FAST positivo para líquido libre.
Estos hallazgos sugieren:
Lesión intraabdominal con probable compromiso visceral.
¿Qué significa el signo de Blumberg?
Corresponde a:
Dolor a la descompresión brusca.
Es un signo clásico de:
Irritación peritoneal.
En trauma abdominal:
La presencia de peritonitis constituye indicación quirúrgica.
¿Qué aporta el FAST?
El FAST demuestra:
• Líquido libre en espacio de Morrison.
• Líquido libre en pelvis.
En el contexto de trauma penetrante:
Debe asumirse hemoperitoneo hasta demostrar lo contrario.
¿Por qué la cirugía es la mejor conducta?
La combinación de:
• Peritonitis.
• Hemoperitoneo.
• Trauma penetrante.
Indica una probabilidad muy alta de:
• Lesión intestinal.
• Lesión hepática.
• Lesión vascular.
• Lesión mesentérica.
Por ello:
La exploración quirúrgica no debe retrasarse.
¿Por qué NO solicitar tomografía?
La tomografía es útil en pacientes:
• Hemodinámicamente estables.
• Sin signos de irritación peritoneal.
Sin embargo:
La presencia de peritonitis cambia completamente el algoritmo.
La cirugía es prioritaria.
¿Por qué NO observar?
La observación puede ser apropiada en algunos pacientes seleccionados con trauma penetrante.
Pero nunca cuando existe:
• Peritonitis.
• Hemoperitoneo documentado.
¿Por qué NO realizar lavado peritoneal diagnóstico?
Su utilidad actual es limitada debido a:
• Disponibilidad de FAST.
• Disponibilidad de tomografía.
Además:
El paciente ya presenta criterios quirúrgicos claros.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Normotenso."
Y responden:
Tomografía abdominal.
Sin embargo:
El dato decisivo es:
Signo de Blumberg positivo.
La peritonitis constituye una indicación de cirugía independientemente de la presión arterial.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Evaluar estabilidad hemodinámica.
2.	Buscar signos de irritación peritoneal.
3.	Realizar FAST.
4.	Identificar hemoperitoneo.
5.	Indicar laparotomía exploratoria urgente.
Perlas de examen
✅ La peritonitis es una indicación absoluta de laparotomía exploratoria.
✅ El FAST positivo identifica líquido libre intraabdominal.
✅ En trauma penetrante el líquido libre suele corresponder a hemoperitoneo.
✅ La taquicardia puede ser un signo temprano de choque hemorrágico.
✅ No todo trauma penetrante requiere cirugía inmediata.
✅ La presencia de irritación peritoneal modifica completamente la conducta.
✅ La tomografía está indicada principalmente en pacientes estables sin peritonitis.
Referencias
• Advanced Trauma Life Support (ATLS) 11th Edition.
• Eastern Association for the Surgery of Trauma (EAST) Guidelines.
• Western Trauma Association Critical Decisions in Trauma.
• Sabiston Textbook of Surgery.
• UpToDate: Initial Evaluation and Management of Penetrating Abdominal Trauma.`,
  },
  {
    id: "dr-q-185",
    examArea: "GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","gastroenterologia"],
    statement: "Paciente masculino de 50 años con antecedente de colecistectomía laparoscópica consulta por dolor epigástrico de varios meses de evolución. Refiere que el dolor aparece posterior al consumo de alimentos y ha sido progresivo en frecuencia. Niega pérdida de peso, disfagia, odinofagia, melena, hematemesis o consumo frecuente de antiinflamatorios no esteroideos. Recibió tratamiento con inhibidor de bomba de protones durante 3 semanas sin mejoría clínica.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Continuar inhibidor de bomba de protones por otros 6 meses." },
      { id: "B", label: "B", text: "Solicitar endoscopia digestiva alta." },
      { id: "C", label: "C", text: "Solicitar colonoscopia total." },
      { id: "D", label: "D", text: "Realizar manejo sintomático y control en un año." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta dispepsia persistente pese a tratamiento con inhibidores de bomba de protones y tiene más de 50 años. En este contexto está indicada la realización de endoscopia digestiva alta para descartar patología estructural del tracto gastrointestinal superior.",
    keyPoints: [
      "Cuando veas: Dolor epigástrico crónico. Dispepsia persistente. Edad mayor de 50 años. Falta de respuesta a IBP.",
      "Debes pensar en: Endoscopia digestiva alta.",
      "Tema: Dispepsia.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el algoritmo diagnóstico de la dispepsia.
La clave no es el antecedente de colecistectomía.
La clave es:
La edad y la persistencia de los síntomas.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Dolor epigástrico crónico.
• Relación con la ingesta.
• Ausencia de respuesta al tratamiento antisecretor.
• Edad de 50 años.
Esto corresponde a:
Síndrome dispéptico en estudio.
¿Qué es la dispepsia?
Es un conjunto de síntomas originados en el tracto gastrointestinal superior, incluyendo:
• Dolor epigástrico.
• Ardor epigástrico.
• Saciedad precoz.
• Plenitud posprandial.
¿Cuándo está indicada la endoscopia?
Las guías recomiendan realizar endoscopia en presencia de:
• Edad ≥50-60 años (según la guía).
• Síntomas persistentes.
• Falta de respuesta al tratamiento inicial.
• Signos de alarma.
Este paciente cumple:
Edad de riesgo y persistencia sintomática.
¿Qué busca la endoscopia?
Permite identificar:
• Úlcera gástrica.
• Úlcera duodenal.
• Gastritis erosiva.
• Neoplasias gástricas.
• Esofagitis.
• Otras lesiones estructurales.
¿Por qué NO continuar únicamente IBP?
El paciente ya recibió:
Tratamiento empírico.
La persistencia de síntomas obliga a:
Continuar el estudio diagnóstico.
¿Por qué NO solicitar colonoscopia?
La sintomatología corresponde al:
Tracto digestivo superior.
No existen datos que sugieran patología colónica.
¿Por qué NO realizar únicamente observación?
La persistencia del cuadro requiere:
Descartar enfermedad orgánica.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"No tiene pérdida de peso."
Y responden:
Continuar IBP.
Sin embargo:
El dato decisivo es:
Edad de 50 años y falta de respuesta al tratamiento inicial.
Esto justifica:
Endoscopia digestiva alta.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar síntomas dispépticos.
2.	Evaluar edad del paciente.
3.	Buscar signos de alarma.
4.	Valorar respuesta al tratamiento inicial.
5.	Solicitar endoscopia digestiva alta cuando esté indicada.
Perlas de examen
✅ La dispepsia persistente requiere evaluación etiológica.
✅ La endoscopia digestiva alta es el estudio de elección para descartar patología estructural.
✅ La falta de respuesta a IBP obliga a reconsiderar el diagnóstico.
✅ La edad mayor de 50 años modifica el algoritmo diagnóstico.
✅ La ausencia de pérdida de peso no excluye enfermedad orgánica.
✅ La úlcera péptica y las neoplasias deben descartarse en pacientes seleccionados.
✅ La endoscopia permite diagnóstico y toma de biopsias cuando sea necesario.
Referencias
• American College of Gastroenterology Guidelines on Dyspepsia.
• British Society of Gastroenterology Guidelines.
• Harrison's Principles of Internal Medicine.
• Sleisenger and Fordtran's Gastrointestinal and Liver Disease.
• UpToDate: Approach to the Adult with Dyspepsia.`,
  },
  {
    id: "dr-q-186",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement: "Paciente masculino de 30 años con antecedente de miocardiopatía hipertrófica consulta para seguimiento de fibrilación auricular no valvular. No tiene antecedentes de accidente cerebrovascular ni otros eventos embólicos. El cálculo del puntaje CHA₂DS₂-VA es de 0 puntos.\n¿Cuál es el siguiente paso más adecuado en el manejo?",
    options: [
      { id: "A", label: "A", text: "Iniciar anticoagulación con warfarina." },
      { id: "B", label: "B", text: "Iniciar anticoagulación con apixabán." },
      { id: "C", label: "C", text: "No iniciar anticoagulación." },
      { id: "D", label: "D", text: "Iniciar aspirina." },
    ],
    correctOptionId: "B",
    explanation: "Los pacientes con fibrilación auricular asociada a miocardiopatía hipertrófica presentan un riesgo tromboembólico elevado independientemente del puntaje CHA₂DS₂-VA. Las guías actuales recomiendan anticoagulación oral crónica en todos estos pacientes, siendo los anticoagulantes orales directos la estrategia preferida en ausencia de contraindicaciones.",
    keyPoints: [
      "Cuando veas: Miocardiopatía hipertrófica. Fibrilación auricular. CHA₂DS₂-VA bajo. Ausencia de eventos embólicos previos.",
      "Debes pensar en: Anticoagulación obligatoria.",
      "Tema: Fibrilación auricular en miocardiopatía hipertrófica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una excepción importante en el manejo de la fibrilación auricular.
La clave no es el CHA₂DS₂-VA.
La clave es:
La presencia de miocardiopatía hipertrófica.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Miocardiopatía hipertrófica.
• Fibrilación auricular.
• CHA₂DS₂-VA de 0.
En la mayoría de los pacientes con fibrilación auricular:
Un puntaje de 0 implica riesgo embólico bajo.
Sin embargo:
La miocardiopatía hipertrófica constituye una excepción.
¿Por qué aumenta el riesgo tromboembólico?
La miocardiopatía hipertrófica favorece:
• Dilatación auricular izquierda.
• Estasis sanguínea.
• Remodelado auricular.
• Mayor carga arrítmica.
Como consecuencia:
Existe incremento significativo del riesgo de accidente cerebrovascular.
¿Qué recomiendan las guías actuales?
Todo paciente con:
• Miocardiopatía hipertrófica.
• Fibrilación auricular.
Debe recibir:
Anticoagulación oral crónica.
Independientemente del CHA₂DS₂-VA.
¿Por qué elegir apixabán?
Los anticoagulantes orales directos han demostrado:
• Eficacia comparable o superior.
• Menor riesgo de hemorragia intracraneal.
• Mayor facilidad de uso.
Por ello:
Actualmente son la estrategia preferida en la mayoría de estos pacientes.
¿Por qué NO utilizar warfarina?
La warfarina sigue siendo eficaz.
Sin embargo:
Los anticoagulantes orales directos son actualmente la opción preferida cuando no existen contraindicaciones.
Por ello:
Apixabán es la mejor respuesta.
¿Por qué NO dejarlo sin anticoagulación?
La miocardiopatía hipertrófica anula el valor predictivo habitual del CHA₂DS₂-VA.
Por lo tanto:
La ausencia de factores clásicos de riesgo no excluye la necesidad de anticoagulación.
¿Por qué NO utilizar aspirina?
La aspirina:
No proporciona protección adecuada frente al riesgo cardioembólico asociado a fibrilación auricular.
No se considera una alternativa válida a la anticoagulación.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"CHA₂DS₂-VA = 0."
Y responden:
"No anticoagular."
Sin embargo:
La pregunta incluye un dato decisivo.
La presencia de:
Miocardiopatía hipertrófica.
Esto cambia completamente la conducta.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la fibrilación auricular.
2.	Buscar condiciones especiales.
3.	Reconocer la miocardiopatía hipertrófica.
4.	Recordar el alto riesgo tromboembólico.
5.	Iniciar anticoagulación oral crónica.
Perlas de examen
✅ La miocardiopatía hipertrófica aumenta significativamente el riesgo tromboembólico.
✅ La fibrilación auricular es una complicación frecuente de la miocardiopatía hipertrófica.
✅ El CHA₂DS₂-VA no guía la anticoagulación en estos pacientes.
✅ Los anticoagulantes orales directos son actualmente la estrategia preferida.
✅ La aspirina no previene adecuadamente el cardioembolismo en fibrilación auricular.
✅ La anticoagulación debe mantenerse de forma indefinida salvo contraindicación.
✅ La prevención del accidente cerebrovascular es uno de los pilares del tratamiento.
Referencias
• ESC Guidelines for the Management of Atrial Fibrillation.
• AHA/ACC Guideline for the Diagnosis and Treatment of Hypertrophic Cardiomyopathy.
• ACC/AHA/HRS Guideline for Atrial Fibrillation.
• Braunwald's Heart Disease.
• UpToDate: Atrial Fibrillation in Hypertrophic Cardiomyopathy.`,
  },
  {
    id: "dr-q-187",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement: "Paciente masculino de 20 años es llevado al servicio de urgencias tras presentar una crisis epiléptica tónico-clónica generalizada de aproximadamente 2 minutos de duración. A su llegada se encuentra en fase posictal con somnolencia progresivamente reversible. No presenta actividad convulsiva activa. Niega antecedentes de epilepsia, consumo de sustancias psicoactivas o factores desencadenantes evidentes. Los signos vitales se encuentran dentro de límites normales.\n¿Cuál es el tratamiento inicial de elección en este paciente?",
    options: [
      { id: "A", label: "A", text: "Iniciar fenitoína intravenosa de inmediato." },
      { id: "B", label: "B", text: "Administrar lorazepam intravenoso." },
      { id: "C", label: "C", text: "Medidas de soporte, evaluación diagnóstica y observación clínica." },
      { id: "D", label: "D", text: "Intubación orotraqueal e inducción de coma farmacológico." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presentó una crisis convulsiva autolimitada que ya ha finalizado y actualmente se encuentra en fase posictal. En ausencia de actividad convulsiva persistente o estatus epiléptico, la conducta inicial consiste en estabilización, monitorización, búsqueda de causas precipitantes y estudio diagnóstico.",
    keyPoints: [
      "Cuando veas: Crisis convulsiva única. Duración corta. Resolución espontánea. Fase posictal. Paciente estable.",
      "Debes pensar en: Medidas de soporte y estudio etiológico.",
      "Tema: Primera crisis epiléptica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el manejo inicial de una primera crisis convulsiva.
La clave no es la convulsión.
La clave es:
Que la crisis ya terminó.
¿Qué está ocurriendo realmente?
El paciente presentó:
• Crisis tónico-clónica generalizada.
• Duración aproximada de 2 minutos.
• Resolución espontánea.
• Estado posictal.
Esto corresponde a:
Primera crisis epiléptica en estudio.
¿Qué es la fase posictal?
Es el período posterior a la convulsión caracterizado por:
• Somnolencia.
• Confusión.
• Cefalea.
• Fatiga.
Generalmente:
Se resuelve espontáneamente.
¿Por qué no administrar benzodiacepinas?
Las benzodiacepinas son el tratamiento de elección cuando existe:
• Convulsión activa.
• Estatus epiléptico.
Sin embargo:
La crisis ya finalizó.
Por tanto:
No están indicadas inicialmente.
¿Por qué no administrar fenitoína?
Los anticonvulsivantes intravenosos se utilizan en:
• Estatus epiléptico.
• Convulsiones persistentes.
• Prevención de recurrencia inmediata en escenarios específicos.
No constituyen la primera medida tras una crisis aislada ya resuelta.
¿Qué debe hacerse inicialmente?
Las prioridades son:
• ABCDE.
• Monitorización.
• Glucemia capilar.
• Electrolitos.
• Evaluación neurológica.
• Identificación de causas precipitantes.
Posteriormente se consideran estudios como:
• Neuroimagen.
• Electroencefalograma.
• Estudios metabólicos.
¿Por qué NO intubar?
La intubación se reserva para:
• Compromiso de la vía aérea.
• Convulsiones prolongadas.
• Estatus epiléptico refractario.
Nada de esto ocurre en el caso.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Crisis epiléptica."
Y responden:
Lorazepam o fenitoína.
Sin embargo:
La pregunta especifica que el paciente se encuentra en:
Fase posictal.
El dato decisivo es:
Ausencia de actividad convulsiva activa.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar que la crisis terminó.
2.	Realizar estabilización inicial.
3.	Buscar causas reversibles.
4.	Iniciar estudio etiológico.
5.	Determinar posteriormente la necesidad de tratamiento antiepiléptico.
Perlas de examen
✅ La primera medida siempre es asegurar ABCDE.
✅ La glucemia capilar debe evaluarse en toda crisis convulsiva.
✅ Las benzodiacepinas son el tratamiento de elección de la convulsión activa.
✅ La fase posictal puede durar minutos u horas.
✅ No toda primera crisis epiléptica requiere anticonvulsivantes permanentes.
✅ El estudio etiológico es fundamental en pacientes sin antecedentes.
✅ El estatus epiléptico se define por actividad convulsiva prolongada o repetitiva sin recuperación de conciencia.
Referencias
• American Academy of Neurology Guidelines.
• Neurocritical Care Society Guidelines for Status Epilepticus.
• Harrison's Principles of Internal Medicine.
• Adams and Victor's Principles of Neurology.
• UpToDate: Evaluation After a First Seizure in Adults.`,
  },
  {
    id: "dr-q-188",
    examArea: "NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neumologia"],
    statement: "Paciente masculino de 30 años consulta por disnea súbita y dolor torácico intenso en el hemitórax derecho de inicio brusco. Al examen físico presenta hipotensión, taquicardia, timpanismo a la percusión y ausencia de ruidos respiratorios en el hemitórax derecho.\n¿Cuál es la fisiopatología más probable de este cuadro?",
    options: [
      { id: "A", label: "A", text: "Acumulación de líquido en el espacio pleural con colapso pulmonar progresivo." },
      { id: "B", label: "B", text: "Entrada de aire al espacio pleural con mecanismo valvular unidireccional que aumenta progresivamente la presión intratorácica." },
      { id: "C", label: "C", text: "Obstrucción arterial pulmonar secundaria a tromboembolismo venoso profundo." },
      { id: "D", label: "D", text: "Inflamación alveolar difusa con alteración de la membrana alveolocapilar." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un neumotórax a tensión. Su fisiopatología consiste en la entrada de aire al espacio pleural mediante un mecanismo valvular que permite el ingreso de aire durante la inspiración pero impide su salida durante la espiración, generando aumento progresivo de la presión intratorácica, colapso pulmonar y compromiso hemodinámico.",
    keyPoints: [
      "Cuando veas: Disnea súbita. Dolor torácico. Hipotensión. Timpanismo. Ausencia de ruidos respiratorios.",
      "Debes pensar en: Neumotórax a tensión.",
      "Tema: Neumotórax a tensión.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las emergencias respiratorias más importantes.
La clave no es la disnea.
La clave es:
La hipotensión asociada a ausencia de ruidos respiratorios.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Dolor torácico súbito.
• Disnea aguda.
• Hipotensión.
• Taquicardia.
• Timpanismo.
• Silencio auscultatorio unilateral.
Esto corresponde a:
Neumotórax a tensión.
¿Qué ocurre fisiopatológicamente?
Se desarrolla una comunicación entre:
• Pulmón.
• Espacio pleural.
Esta lesión funciona como:
Una válvula unidireccional.
Durante la inspiración:
El aire entra al espacio pleural.
Durante la espiración:
El aire no puede salir.
Como consecuencia:
La presión intrapleural aumenta progresivamente.
¿Qué efectos produce?
El aumento progresivo de presión genera:
• Colapso pulmonar ipsilateral.
• Desplazamiento mediastinal.
• Compresión pulmonar contralateral.
• Disminución del retorno venoso.
¿Por qué aparece la hipotensión?
La presión intratorácica elevada comprime:
• Vena cava superior.
• Vena cava inferior.
Esto reduce:
El retorno venoso al corazón.
Como consecuencia:
Disminuye el gasto cardíaco y aparece choque obstructivo.
¿Por qué hay timpanismo?
La acumulación de aire en el espacio pleural produce:
Hipersonoridad o timpanismo a la percusión.
Es uno de los hallazgos clásicos del examen físico.
¿Por qué desaparecen los ruidos respiratorios?
El pulmón colapsado:
Pierde ventilación efectiva.
Por ello:
Los ruidos respiratorios disminuyen o desaparecen.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Dolor torácico súbito y disnea."
Y responden:
Tromboembolismo pulmonar.
Sin embargo:
El dato decisivo es:
Timpanismo más ausencia unilateral de ruidos respiratorios.
Este hallazgo es prácticamente diagnóstico de:
Neumotórax a tensión.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar disnea súbita.
2.	Buscar compromiso hemodinámico.
3.	Detectar timpanismo.
4.	Identificar ausencia de ruidos respiratorios.
5.	Reconocer neumotórax a tensión.
6.	Comprender el mecanismo valvular unidireccional.
Perlas de examen
✅ El neumotórax a tensión es una emergencia médica.
✅ Produce choque obstructivo por disminución del retorno venoso.
✅ El mecanismo fisiopatológico es una válvula unidireccional.
✅ El timpanismo es un hallazgo clásico.
✅ La ausencia unilateral de ruidos respiratorios orienta al diagnóstico.
✅ No debe retrasarse el tratamiento para obtener imágenes.
✅ La descompresión inmediata salva la vida del paciente.
Referencias
• Advanced Trauma Life Support (ATLS) 11th Edition.
• Harrison's Principles of Internal Medicine.
• Murray & Nadel's Textbook of Respiratory Medicine.
• Tintinalli's Emergency Medicine.
• UpToDate: Tension Pneumothorax.`,
  },
  {
    id: "dr-q-189",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Paciente femenina de 25 años consulta por sangrado vaginal abundante y dolor pélvico de inicio súbito. No utiliza métodos anticonceptivos y no recuerda la fecha de su última menstruación debido a ciclos irregulares. La ecografía transvaginal evidencia una masa anexial compleja asociada a líquido libre en cavidad peritoneal.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Enfermedad inflamatoria pélvica." },
      { id: "B", label: "B", text: "Embarazo ectópico roto." },
      { id: "C", label: "C", text: "Quiste ovárico simple." },
      { id: "D", label: "D", text: "Aborto incompleto." },
    ],
    correctOptionId: "B",
    explanation: "La combinación de dolor pélvico agudo, sangrado vaginal, amenorrea incierta, masa anexial y líquido libre intraperitoneal es altamente sugestiva de embarazo ectópico roto, una emergencia ginecológica potencialmente mortal.",
    keyPoints: [
      "Cuando veas: Mujer en edad fértil. Dolor pélvico agudo. Sangrado vaginal. Masa anexial. Líquido libre en pelvis.",
      "Debes pensar en: Embarazo ectópico roto.",
      "Tema: Embarazo ectópico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las emergencias ginecológicas más importantes.
La clave no es el sangrado.
La clave es:
La presencia simultánea de masa anexial y líquido libre.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Dolor pélvico súbito.
• Sangrado vaginal.
• Ausencia de anticoncepción.
• Fecha de última menstruación incierta.
• Masa anexial compleja.
• Líquido libre intraperitoneal.
Estos hallazgos orientan fuertemente a:
Embarazo ectópico complicado.
¿Por qué sospechar embarazo ectópico?
Toda mujer en edad fértil con:
• Dolor abdominal o pélvico.
• Sangrado vaginal.
Debe considerarse embarazada hasta demostrar lo contrario.
La presencia de masa anexial aumenta aún más la sospecha.
¿Qué significa el líquido libre?
En este contexto el líquido libre corresponde probablemente a:
Hemoperitoneo.
Lo cual sugiere:
Rotura tubárica y sangrado intraabdominal.
¿Qué hallazgos ecográficos son clásicos?
• Ausencia de saco gestacional intrauterino.
• Masa anexial.
• Líquido libre en pelvis.
Esta combinación es altamente sugestiva de:
Embarazo ectópico.
¿Por qué NO es enfermedad inflamatoria pélvica?
La enfermedad inflamatoria pélvica suele asociarse con:
• Fiebre.
• Secreción vaginal.
• Dolor a la movilización cervical.
Además:
No suele producir hemoperitoneo importante.
¿Por qué NO es un quiste ovárico simple?
Los quistes simples generalmente presentan:
Contenido anecoico homogéneo.
No suelen asociarse con:
Sangrado vaginal y masa anexial compleja en este contexto.
¿Por qué NO es aborto incompleto?
En el aborto incompleto suele existir:
Evidencia de gestación intrauterina previa.
La masa anexial compleja orienta más hacia:
Gestación ectópica.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Sangrado vaginal."
Y responden:
Aborto.
Sin embargo:
El dato decisivo es:
La masa anexial asociada a líquido libre.
Esto es prácticamente una bandera roja para:
Embarazo ectópico roto.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar mujer en edad fértil.
2.	Reconocer dolor pélvico y sangrado vaginal.
3.	Buscar datos de embarazo.
4.	Identificar masa anexial.
5.	Detectar líquido libre.
6.	Diagnosticar embarazo ectópico roto.
Perlas de examen
✅ Toda mujer en edad fértil con dolor abdominal debe considerarse embarazada hasta demostrar lo contrario.
✅ La tríada clásica es dolor abdominal, amenorrea y sangrado vaginal.
✅ La masa anexial es un hallazgo característico del embarazo ectópico.
✅ El líquido libre puede corresponder a hemoperitoneo.
✅ La ruptura tubárica constituye una emergencia quirúrgica.
✅ La β-hCG es fundamental en el estudio diagnóstico.
✅ El embarazo ectópico es una causa importante de mortalidad materna en el primer trimestre.
Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Tubal Ectopic Pregnancy.
• Novak's Gynecology.
• UpToDate: Ectopic Pregnancy Clinical Manifestations and Diagnosis.
• Gabbe's Obstetrics: Normal and Problem Pregnancies.`,
  },
  {
    id: "dr-q-190",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Paciente femenina de 27 años, primigesta, con embarazo de 12 semanas confirmado por ecografía, consulta por sangrado vaginal leve de 12 horas de evolución. Niega dolor abdominal significativo. La ecografía transvaginal evidencia un embarazo intrauterino viable con actividad cardíaca fetal presente.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Observación y seguimiento." },
      { id: "B", label: "B", text: "Legrado uterino." },
      { id: "C", label: "C", text: "Administración de misoprostol." },
      { id: "D", label: "D", text: "Derivación inmediata a quirófano de urgencias." },
    ],
    correctOptionId: "A",
    explanation: "La paciente presenta una amenaza de aborto. La presencia de sangrado vaginal durante el primer trimestre con embrión viable, actividad cardíaca fetal presente y cuello uterino cerrado indica un embarazo potencialmente viable que requiere vigilancia clínica y seguimiento obstétrico.",
    keyPoints: [
      "Cuando veas: Sangrado vaginal en primer trimestre. Feto viable. Latidos cardíacos presentes. Cuello uterino cerrado.",
      "Debes pensar en: Amenaza de aborto.",
      "Tema: Hemorragia del primer trimestre.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el diagnóstico diferencial de los sangrados del primer trimestre.
La clave no es el sangrado.
La clave es:
La viabilidad fetal.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Embarazo de 12 semanas.
• Sangrado vaginal leve.
• Ausencia de dolor importante.
• Cuello uterino cerrado.
• Actividad cardíaca fetal presente.
Estos hallazgos corresponden a:
Amenaza de aborto.
¿Qué es una amenaza de aborto?
Se define como:
Sangrado vaginal antes de las 20 semanas de gestación con:
• Cuello uterino cerrado.
• Producto gestacional viable.
En estos casos:
El embarazo aún puede evolucionar normalmente.
¿Qué aporta la ecografía?
La ecografía confirma:
• Embarazo intrauterino.
• Viabilidad fetal.
• Ausencia de signos de aborto en curso.
La presencia de actividad cardíaca fetal es:
Un factor pronóstico favorable.
¿Cuál es el manejo?
La conducta habitual incluye:
• Observación.
• Educación sobre signos de alarma.
• Seguimiento obstétrico.
• Control ecográfico según evolución.
No existe indicación de evacuación uterina.
¿Por qué NO realizar legrado?
El legrado está indicado en:
• Aborto incompleto.
• Aborto retenido.
• Algunas pérdidas gestacionales no viables.
La paciente presenta:
Embarazo viable.
¿Por qué NO administrar misoprostol?
El misoprostol se utiliza para:
• Interrupción del embarazo.
• Aborto retenido.
• Evacuación uterina.
No está indicado cuando existe:
Viabilidad fetal demostrada.
¿Por qué NO requiere cirugía urgente?
No existen datos de:
• Inestabilidad hemodinámica.
• Hemorragia severa.
• Aborto inevitable.
• Embarazo ectópico.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Sangrado vaginal."
Y responden:
Legrado o misoprostol.
Sin embargo:
El dato decisivo es:
Latidos cardíacos fetales presentes.
Esto indica:
Embarazo viable.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar embarazo intrauterino.
2.	Evaluar viabilidad fetal.
3.	Revisar estado cervical.
4.	Diagnosticar amenaza de aborto.
5.	Realizar observación y seguimiento.
Perlas de examen
✅ La amenaza de aborto cursa con sangrado vaginal y cuello uterino cerrado.
✅ La presencia de actividad cardíaca fetal indica viabilidad gestacional.
✅ No todo sangrado del primer trimestre implica pérdida del embarazo.
✅ El legrado no está indicado en embarazos viables.
✅ El misoprostol está contraindicado cuando se desea continuar la gestación.
✅ La ecografía transvaginal es fundamental para el diagnóstico.
✅ El seguimiento obstétrico es la conducta estándar en pacientes estables.
Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Early Pregnancy Loss.
• Gabbe's Obstetrics: Normal and Problem Pregnancies.
• Novak's Gynecology.
• UpToDate: Threatened Miscarriage.`,
  },
  {
    id: "dr-q-191",
    examArea: "PSIQUIATRÍA",
    topic: "PSIQUIATRÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","psiquiatria"],
    statement: "Paciente masculino de 24 años, estudiante universitario, consulta acompañado por su madre debido a cambios de comportamiento de aproximadamente tres semanas de evolución. Refiere sentirse \"lleno de energía\", con disminución importante de la necesidad de sueño, durmiendo apenas 3 horas por noche sin presentar fatiga durante el día. Además, manifiesta múltiples proyectos de negocios simultáneos, planes de inversión de alto riesgo y gastos excesivos en apuestas en línea y compras innecesarias. La familia refiere que habla de manera acelerada, cambia constantemente de tema durante las conversaciones y se muestra más irritable de lo habitual. Niega antecedentes psiquiátricos previos, consumo de sustancias psicoactivas o síntomas depresivos recientes.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Trastorno bipolar." },
      { id: "B", label: "B", text: "Depresión mayor." },
      { id: "C", label: "C", text: "Trastorno de ansiedad." },
      { id: "D", label: "D", text: "Esquizofrenia." },
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta un episodio maníaco caracterizado por disminución de la necesidad de sueño, aumento de energía, verborrea, fuga de ideas, conductas de riesgo y deterioro funcional. La presencia de un episodio maníaco es suficiente para establecer el diagnóstico de trastorno bipolar tipo I.",
    keyPoints: [
      "Cuando veas: Disminución de la necesidad de sueño. Aumento de energía. Conductas riesgosas. Gastos excesivos. Verborrea. Fuga de ideas.",
      "Debes pensar en: Episodio maníaco.",
      "Tema: Trastorno bipolar.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el reconocimiento clínico de la manía.
La clave no es la irritabilidad.
La clave es:
La disminución de la necesidad de dormir.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Elevación patológica de la energía.
• Menor necesidad de sueño.
• Conductas impulsivas.
• Verborrea.
• Fuga de ideas.
• Aumento de actividades dirigidas a objetivos.
Esto corresponde a:
Episodio maníaco.
¿Qué caracteriza a la manía?
Los síntomas clásicos incluyen:
• Estado de ánimo elevado o irritable.
• Aumento de energía.
• Grandiosidad.
• Disminución de la necesidad de sueño.
• Verborrea.
• Fuga de ideas.
• Distractibilidad.
• Conductas de riesgo.
La presencia de estos síntomas genera:
Deterioro funcional significativo.
¿Por qué el sueño es tan importante?
En la manía el paciente:
No siente necesidad de dormir.
No se trata de insomnio.
El paciente duerme poco y:
Se siente descansado.
Este es uno de los hallazgos más característicos del diagnóstico.
¿Qué es la fuga de ideas?
Corresponde a:
Cambio rápido entre múltiples temas relacionados o no relacionados.
Produce la sensación de que:
El pensamiento corre más rápido de lo normal.
¿Por qué los gastos excesivos son importantes?
Las conductas impulsivas son frecuentes durante la manía:
• Compras innecesarias.
• Inversiones arriesgadas.
• Juegos de azar.
• Conductas sexuales de riesgo.
Estos comportamientos pueden generar:
Consecuencias económicas y sociales importantes.
¿Por qué NO es depresión mayor?
La depresión mayor se caracteriza por:
• Tristeza persistente.
• Anhedonia.
• Fatiga.
• Disminución de energía.
Este paciente presenta exactamente lo contrario.
¿Por qué NO es trastorno de ansiedad?
Aunque puede existir inquietud:
La ansiedad no produce típicamente:
• Disminución de la necesidad de sueño.
• Grandiosidad.
• Gastos excesivos.
• Fuga de ideas.
¿Por qué NO es esquizofrenia?
La esquizofrenia se caracteriza principalmente por:
• Delirios.
• Alucinaciones.
• Síntomas negativos.
• Desorganización persistente.
El cuadro descrito es predominantemente afectivo.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"Irritabilidad."
Y responden:
Ansiedad.
Sin embargo:
El dato decisivo es:
La disminución de la necesidad de sueño asociada a aumento de energía.
Esto es altamente sugestivo de:
Manía.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar aumento patológico de energía.
2.	Buscar disminución de la necesidad de sueño.
3.	Reconocer conductas impulsivas.
4.	Detectar fuga de ideas y verborrea.
5.	Diagnosticar episodio maníaco.
6.	Concluir trastorno bipolar tipo I.
Perlas de examen
✅ Un episodio maníaco establece el diagnóstico de trastorno bipolar tipo I.
✅ La disminución de la necesidad de sueño es un síntoma cardinal de manía.
✅ La verborrea y la fuga de ideas son hallazgos clásicos.
✅ Las conductas de riesgo son frecuentes durante los episodios maníacos.
✅ La irritabilidad puede reemplazar al ánimo eufórico.
✅ El deterioro funcional ayuda a diferenciar manía de hipomanía.
✅ Siempre debe descartarse consumo de sustancias como causa secundaria.
Referencias
• DSM-5-TR.
• Kaplan & Sadock's Synopsis of Psychiatry.
• Stahl's Essential Psychopharmacology.
• American Psychiatric Association Practice Guideline for Bipolar Disorder.
• UpToDate: Clinical Features and Diagnosis of Bipolar Disorder in Adults.`,
  },
  {
    id: "dr-q-192",
    examArea: "PSIQUIATRÍA",
    topic: "PSIQUIATRÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","psiquiatria"],
    statement: "Paciente masculino de 26 años, sin antecedentes médicos de importancia, es llevado por su familia debido a cambios progresivos de comportamiento durante los últimos tres meses, caracterizados por aislamiento social, deterioro del autocuidado y dificultades en su desempeño laboral. En la última semana ha manifestado escuchar voces que le indican que no confíe en sus familiares porque están conspirando en su contra.\n¿Cuál es el tratamiento de primera línea para esta condición?",
    options: [
      { id: "A", label: "A", text: "Iniciar antipsicótico de segunda generación." },
      { id: "B", label: "B", text: "Iniciar sertralina." },
      { id: "C", label: "C", text: "Iniciar el litio." },
      { id: "D", label: "D", text: "Iniciar clonazepam en monoterapia." },
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta un primer episodio psicótico compatible con esquizofrenia. El tratamiento inicial de elección consiste en antipsicóticos de segunda generación debido a su eficacia sobre los síntomas psicóticos y su mejor perfil de efectos adversos extrapiramidales.",
    keyPoints: [
      "Cuando veas: Alucinaciones auditivas. Delirios persecutorios. Pensamiento desorganizado. Afecto aplanado. Deterioro funcional.",
      "Debes pensar en: Esquizofrenia.",
      "Tema: Tratamiento inicial de la esquizofrenia.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el reconocimiento y tratamiento del primer episodio psicótico.
La clave no es la agitación.
La clave es:
La presencia de síntomas psicóticos positivos y negativos.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Alucinaciones auditivas.
• Delirios persecutorios.
• Pensamiento desorganizado.
• Aislamiento social.
• Afecto aplanado.
• Deterioro funcional.
Estos hallazgos son altamente sugestivos de:
Esquizofrenia.
¿Cuáles son los síntomas positivos?
Los síntomas positivos corresponden a fenómenos que aparecen y no deberían estar presentes.
Incluyen:
• Alucinaciones.
• Delirios.
• Pensamiento desorganizado.
• Conducta desorganizada.
Este paciente presenta varios de ellos.
¿Cuáles son los síntomas negativos?
Los síntomas negativos corresponden a pérdida o disminución de funciones normales.
Incluyen:
• Afecto aplanado.
• Aislamiento social.
• Abulia.
• Anhedonia.
También están presentes en el caso.
¿Cuál es el tratamiento inicial?
Los antipsicóticos de segunda generación son el tratamiento de elección.
Entre ellos:
• Risperidona.
• Olanzapina.
• Quetiapina.
• Aripiprazol.
• Paliperidona.
Estos medicamentos actúan principalmente mediante:
Bloqueo dopaminérgico.
¿Por qué NO utilizar sertralina?
La sertralina es un antidepresivo.
Está indicada para:
• Depresión.
• Trastornos de ansiedad.
No controla adecuadamente:
Los síntomas psicóticos.
¿Por qué NO utilizar litio?
El litio se utiliza principalmente en:
• Trastorno bipolar.
No constituye el tratamiento de primera línea para esquizofrenia.
¿Por qué NO utilizar clonazepam?
Las benzodiacepinas pueden ayudar a controlar:
• Agitación.
• Ansiedad.
Sin embargo:
No tratan la psicosis subyacente.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"Irritabilidad y agitación."
Y responden:
Benzodiacepinas.
Sin embargo:
El dato decisivo es:
La presencia de alucinaciones auditivas y delirios persecutorios.
Estos hallazgos definen:
Psicosis.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar síntomas psicóticos.
2.	Reconocer síntomas positivos y negativos.
3.	Diagnosticar esquizofrenia.
4.	Iniciar antipsicótico de segunda generación.
5.	Realizar seguimiento psiquiátrico integral.
Perlas de examen
✅ Las alucinaciones auditivas son el síntoma psicótico más frecuente en esquizofrenia.
✅ Los delirios persecutorios son una manifestación clásica.
✅ El afecto aplanado corresponde a un síntoma negativo.
✅ Los antipsicóticos de segunda generación son el tratamiento inicial de elección.
✅ El deterioro funcional es fundamental para el diagnóstico.
✅ Siempre debe descartarse consumo de sustancias como causa secundaria.
✅ La intervención temprana mejora el pronóstico a largo plazo.
Referencias
• DSM-5-TR.
• Kaplan & Sadock's Synopsis of Psychiatry.
• American Psychiatric Association Practice Guideline for Schizophrenia.
• Stahl's Essential Psychopharmacology.
• UpToDate: Schizophrenia in Adults: Clinical Features, Assessment and Diagnosis.`,
  },
  {
    id: "dr-q-193",
    examArea: "EPIDEMIOLOGÍA Y BIOESTADÍSTICA",
    topic: "EPIDEMIOLOGÍA Y BIOESTADÍSTICA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","epidemiologia_y_bioestadistica"],
    statement: "En un estudio de cohorte realizado en una población adulta se evaluó la relación entre el tabaquismo y el desarrollo de cáncer de pulmón. Tras un seguimiento de 7 años, se encontró que el riesgo relativo (RR) de desarrollar cáncer de pulmón en fumadores comparado con no fumadores fue de 15.\n¿Cómo se interpreta este resultado?",
    options: [
      { id: "A", label: "A", text: "Los fumadores tienen 15 veces más riesgo de desarrollar cáncer de pulmón que los no fumadores." },
      { id: "B", label: "B", text: "Los fumadores tienen un 15% más de riesgo de desarrollar cáncer de pulmón." },
      { id: "C", label: "C", text: "No hay asociación entre fumar y cáncer de pulmón." },
      { id: "D", label: "D", text: "Los fumadores tienen un riesgo 15 veces menor de desarrollar cáncer de pulmón." },
    ],
    correctOptionId: "A",
    explanation: "El riesgo relativo compara la incidencia de un evento entre un grupo expuesto y un grupo no expuesto. Un RR de 15 indica que los individuos expuestos al factor de riesgo presentan una probabilidad 15 veces mayor de desarrollar el desenlace estudiado.",
    keyPoints: [
      "Cuando veas: Estudio de cohorte. Riesgo relativo (RR). RR > 1.",
      "Debes pensar en: Asociación positiva entre exposición y enfermedad.",
      "Tema: Interpretación del riesgo relativo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la interpretación de una de las medidas epidemiológicas más utilizadas.
La clave no es el tabaquismo.
La clave es:
El valor del riesgo relativo.
¿Qué está ocurriendo realmente?
El estudio compara:
• Expuestos (fumadores).
• No expuestos (no fumadores).
Posteriormente evalúa:
La aparición de cáncer de pulmón.
El resultado obtenido fue:
RR = 15.
¿Qué es el riesgo relativo?
El riesgo relativo es una medida de asociación que compara:
La incidencia de enfermedad en expuestos
vs
La incidencia de enfermedad en no expuestos.
Su fórmula es:
RR = Incidencia en expuestos / Incidencia en no expuestos
¿Cómo se interpreta un RR de 15?
Significa que:
Los fumadores presentan 15 veces más riesgo de desarrollar cáncer de pulmón que los no fumadores.
También puede decirse que:
Existe una asociación positiva muy fuerte entre la exposición y la enfermedad.
¿Qué significa un RR igual a 1?
Indica:
Ausencia de asociación.
La exposición no modifica el riesgo.
¿Qué significa un RR mayor de 1?
Indica:
La exposición aumenta el riesgo de enfermedad.
Ejemplos:
• RR = 2 → el riesgo se duplica.
• RR = 5 → el riesgo es cinco veces mayor.
• RR = 15 → el riesgo es quince veces mayor.
¿Qué significa un RR menor de 1?
Indica:
Efecto protector.
Por ejemplo:
RR = 0.5 significa una reducción aproximada del 50% del riesgo.
¿Por qué la opción B es incorrecta?
Un RR de 15 no significa:
15% más riesgo.
Significa:
1500% del riesgo observado en los no expuestos o, dicho de manera práctica para el examen, 15 veces más riesgo.
¿Por qué la opción C es incorrecta?
La ausencia de asociación ocurre cuando:
RR = 1.
No es el caso.
¿Por qué la opción D es incorrecta?
Un riesgo menor implicaría:
RR < 1.
El valor encontrado es:
RR = 15.
¿Cuál es la trampa de examen?
Muchos estudiantes confunden:
"15 veces más riesgo"
con
"15% más riesgo".
El dato decisivo es:
El riesgo relativo expresa una razón, no un porcentaje.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar el tipo de medida.
2.	Revisar si RR es mayor, menor o igual a 1.
3.	Interpretar la dirección de la asociación.
4.	Cuantificar la magnitud del efecto.
5.	Concluir la relación entre exposición y enfermedad.
Perlas de examen
✅ El riesgo relativo se calcula en estudios de cohorte.
✅ RR = 1 indica ausencia de asociación.
✅ RR > 1 indica factor de riesgo.
✅ RR < 1 indica efecto protector.
✅ Mientras más se aleje de 1, mayor es la fuerza de asociación.
✅ El riesgo relativo compara incidencias.
✅ No debe confundirse una razón con un porcentaje.
Referencias
• Gordis Epidemiology.
• Rothman Epidemiology: An Introduction.
• Fletcher & Fletcher Clinical Epidemiology.
• Essentials of Medical Statistics.
• UpToDate: Measures of Association in Epidemiologic Studies.`,
  },
  {
    id: "dr-q-194",
    examArea: "MEDICINA PREVENTIVA Y SALUD PÚBLICA",
    topic: "MEDICINA PREVENTIVA Y SALUD PÚBLICA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","medicina_preventiva_y_salud_publica"],
    statement: "Paciente masculino de 53 años con antecedente de tabaquismo de 20 paquetes-año, fumador activo en la actualidad. Consulta acompañado por su esposa, quien solicita valoración médica para realizar tamizajes preventivos acordes a la edad. El paciente refiere encontrarse completamente asintomático y considera innecesaria la atención médica.\n¿Cuál es la conducta médica más apropiada en este paciente?",
    options: [
      { id: "A", label: "A", text: "Solicitar tomografía computarizada de tórax de baja dosis para tamizaje de cáncer de pulmón." },
      { id: "B", label: "B", text: "Solicitar radiografía de tórax anual." },
      { id: "C", label: "C", text: "Solicitar broncoscopia diagnóstica." },
      { id: "D", label: "D", text: "No realizar ningún estudio al encontrarse asintomático." },
    ],
    correctOptionId: "A",
    explanation: "El paciente es un fumador activo con antecedente significativo de tabaquismo y se encuentra dentro del grupo de riesgo para cáncer de pulmón. Las guías actuales recomiendan tamizaje mediante tomografía computarizada de tórax de baja dosis en pacientes seleccionados de alto riesgo, incluso en ausencia de síntomas.",
    keyPoints: [
      "Cuando veas: Edad entre 50 y 80 años. Antecedente de tabaquismo importante. Fumador activo. Paciente asintomático.",
      "Debes pensar en: Tamizaje para cáncer de pulmón con tomografía de baja dosis.",
      "Tema: Tamizaje de cáncer de pulmón.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa las recomendaciones actuales de tamizaje en pacientes fumadores.
La clave no es que el paciente esté asintomático.
La clave es:
El antecedente de tabaquismo.
¿Qué está ocurriendo realmente?
El paciente presenta:
• 53 años.
• Tabaquismo activo.
• 20 paquetes-año.
• Ausencia de síntomas.
Esto lo ubica en:
Un grupo con riesgo aumentado de cáncer de pulmón.
¿Qué recomiendan las guías?
Las recomendaciones actuales sugieren tamizaje anual con:
Tomografía computarizada de tórax de baja dosis.
En pacientes:
• Entre 50 y 80 años.
• Con al menos 20 paquetes-año.
• Fumadores activos o exfumadores recientes.
Este paciente cumple dichos criterios.
¿Por qué la tomografía de baja dosis?
Permite:
• Detectar lesiones tempranas.
• Disminuir mortalidad por cáncer de pulmón.
• Identificar tumores potencialmente curables.
Con una exposición menor a radiación que una tomografía convencional.
¿Por qué NO solicitar radiografía de tórax?
Los estudios demostraron que:
La radiografía de tórax no reduce la mortalidad por cáncer de pulmón.
Por ello:
No se recomienda como estrategia de tamizaje.
¿Por qué NO realizar broncoscopia?
La broncoscopia es un procedimiento diagnóstico.
No se utiliza para:
Tamizaje en pacientes asintomáticos.
¿Por qué NO omitir el estudio?
Precisamente el objetivo del tamizaje es:
Detectar enfermedad antes de que aparezcan síntomas.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Paciente asintomático."
Y responden:
"No necesita estudios."
Sin embargo:
El dato decisivo es:
Tabaquismo de 20 paquetes-año y edad de 53 años.
Esto cumple criterios de tamizaje.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar factores de riesgo.
2.	Cuantificar exposición al tabaco.
3.	Verificar edad.
4.	Determinar elegibilidad para tamizaje.
5.	Solicitar tomografía de tórax de baja dosis.
Perlas de examen
✅ El cáncer de pulmón puede ser asintomático en etapas iniciales.
✅ La tomografía de baja dosis es el método recomendado para tamizaje.
✅ La radiografía de tórax no es una estrategia efectiva de cribado.
✅ El tabaquismo sigue siendo el principal factor de riesgo para cáncer pulmonar.
✅ El tamizaje busca disminuir la mortalidad específica por cáncer de pulmón.
✅ Los fumadores activos continúan siendo candidatos a programas de detección precoz.
✅ La suspensión del tabaquismo sigue siendo la intervención preventiva más efectiva.
Referencias
• United States Preventive Services Task Force (USPSTF) Lung Cancer Screening Recommendations.
• National Comprehensive Cancer Network (NCCN) Guidelines.
• American Cancer Society Guidelines for Lung Cancer Screening.
• Harrison's Principles of Internal Medicine.
• UpToDate: Screening for Lung Cancer.`,
  },
  {
    id: "dr-q-195",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement: "Paciente femenina de 77 años con antecedente de fibrilación auricular no valvular en tratamiento con betabloqueadores para control de la frecuencia cardíaca. Refiere antecedente de accidente cerebrovascular isquémico hace 5 años, sin secuelas neurológicas significativas. Niega antecedentes de hemorragia digestiva, hemorragia intracraneal u otras contraindicaciones para anticoagulación.\n¿Cuál es la conducta más adecuada para la prevención de eventos tromboembólicos?",
    options: [
      { id: "A", label: "A", text: "Mantener únicamente el tratamiento con betabloqueadores." },
      { id: "B", label: "B", text: "Iniciar ácido acetilsalicílico." },
      { id: "C", label: "C", text: "Iniciar anticoagulación oral con un anticoagulante oral directo." },
      { id: "D", label: "D", text: "No iniciar anticoagulación debido al antecedente de accidente cerebrovascular." },
    ],
    correctOptionId: "C",
    explanation: "La paciente presenta fibrilación auricular no valvular y antecedente de accidente cerebrovascular isquémico previo, lo que la ubica en un grupo de muy alto riesgo tromboembólico. En ausencia de contraindicaciones, la anticoagulación oral está claramente indicada para reducir el riesgo de nuevos eventos cerebrovasculares.",
    keyPoints: [
      "Cuando veas: Fibrilación auricular. Accidente cerebrovascular previo. Ausencia de contraindicaciones para anticoagulación.",
      "Debes pensar en: Anticoagulación oral obligatoria.",
      "Tema: Prevención tromboembólica en fibrilación auricular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las indicaciones más importantes de anticoagulación en cardiología.
La clave no es la edad.
La clave es:
El antecedente de accidente cerebrovascular.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Fibrilación auricular no valvular.
• Edad avanzada.
• Evento cerebrovascular isquémico previo.
Estos hallazgos indican:
Riesgo extremadamente elevado de nuevos eventos embólicos.
¿Cómo se calcula el riesgo?
Mediante la escala CHA₂DS₂-VASc:
• Edad ≥75 años = 2 puntos.
• Accidente cerebrovascular previo = 2 puntos.
La paciente tiene al menos:
4 puntos.
Esto corresponde a:
Alto riesgo tromboembólico.
¿Por qué anticoagular?
La fibrilación auricular favorece:
• Estasis sanguínea auricular.
• Formación de trombos.
• Embolización sistémica.
La anticoagulación disminuye significativamente:
• Accidente cerebrovascular.
• Embolismo sistémico.
• Mortalidad cardiovascular.
¿Por qué preferir anticoagulantes orales directos?
Medicamentos como:
• Apixabán.
• Rivaroxabán.
• Dabigatrán.
• Edoxabán.
Han demostrado:
• Eficacia comparable o superior a warfarina.
• Menor riesgo de hemorragia intracraneal.
• Mayor facilidad de uso.
Por ello son la estrategia preferida en fibrilación auricular no valvular.
¿Por qué NO utilizar aspirina?
La aspirina:
No proporciona protección adecuada contra el cardioembolismo.
Actualmente:
No se recomienda como alternativa a la anticoagulación en fibrilación auricular.
¿Por qué NO dejar únicamente betabloqueadores?
Los betabloqueadores:
Controlan la frecuencia cardíaca.
Pero:
No previenen la formación de trombos.
¿Por qué el antecedente de ACV aumenta tanto el riesgo?
Porque identifica pacientes que ya demostraron:
Capacidad de desarrollar eventos embólicos clínicamente significativos.
Por ello:
Constituye uno de los factores de riesgo más importantes.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Tuvo un accidente cerebrovascular."
Y responden:
"No anticoagular por riesgo de sangrado."
Sin embargo:
El dato decisivo es:
Que el evento fue isquémico y no existen contraindicaciones para anticoagulación.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar fibrilación auricular.
2.	Calcular riesgo tromboembólico.
3.	Reconocer antecedente de ACV.
4.	Confirmar ausencia de contraindicaciones.
5.	Iniciar anticoagulación oral.
Perlas de examen
✅ El antecedente de ACV es uno de los factores de mayor peso en CHA₂DS₂-VASc.
✅ La fibrilación auricular aumenta significativamente el riesgo de embolia cerebral.
✅ Los anticoagulantes orales directos son preferidos en fibrilación auricular no valvular.
✅ Los betabloqueadores no previenen eventos tromboembólicos.
✅ La aspirina no sustituye la anticoagulación en fibrilación auricular.
✅ La prevención secundaria es fundamental tras un ACV isquémico.
✅ La anticoagulación reduce de forma importante el riesgo de recurrencia.
Referencias
• ESC Guidelines for the Management of Atrial Fibrillation.
• ACC/AHA/HRS Guideline for Atrial Fibrillation.
• Braunwald's Heart Disease.
• Harrison's Principles of Internal Medicine.
• UpToDate: Prevention of Stroke and Systemic Embolism in Atrial Fibrillation.`,
  },
  {
    id: "dr-q-196",
    examArea: "NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","nefrologia"],
    statement: "Paciente masculino de 60 años con antecedente de enfermedad renal crónica consulta por debilidad muscular progresiva y parestesias en extremidades. Se realiza un electrocardiograma que evidencia alteraciones de la conducción cardíaca.\n¿Cuál es la alteración electrolítica más probable?",
    options: [
      { id: "A", label: "A", text: "Hipocalcemia." },
      { id: "B", label: "B", text: "Hipokalemia." },
      { id: "C", label: "C", text: "Hiperkalemia." },
      { id: "D", label: "D", text: "Hipernatremia." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta manifestaciones neuromusculares y cambios electrocardiográficos clásicos de hiperkalemia. La enfermedad renal crónica es uno de los principales factores de riesgo para el desarrollo de esta alteración electrolítica debido a la disminución de la excreción renal de potasio.",
    keyPoints: [
      "Cuando veas: Enfermedad renal crónica. Debilidad muscular. Parestesias. Ondas T picudas. QRS ancho.",
      "Debes pensar en: Hiperkalemia.",
      "Tema: Trastornos del potasio.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los trastornos electrolíticos más preguntados en los exámenes.
La clave no es la enfermedad renal.
La clave es:
El electrocardiograma.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Enfermedad renal crónica.
• Debilidad muscular.
• Parestesias.
• Alteraciones características en el ECG.
Estos hallazgos orientan fuertemente hacia:
Hiperkalemia.
¿Por qué ocurre la hiperkalemia en la enfermedad renal crónica?
El riñón es el principal órgano encargado de:
Eliminar potasio.
Cuando disminuye la tasa de filtración glomerular:
• Disminuye la excreción de potasio.
• Se favorece su acumulación sérica.
Como consecuencia:
Aumenta el riesgo de hiperkalemia.
¿Cuáles son los cambios electrocardiográficos clásicos?
La progresión típica incluye:
1.	Ondas T picudas y simétricas.
2.	Aplanamiento o desaparición de la onda P.
3.	Prolongación del PR.
4.	Ensanchamiento del QRS.
5.	Patrón en onda sinusoidal.
6.	Fibrilación ventricular o asistolia.
Este paciente presenta varios de estos hallazgos.
¿Por qué aparecen síntomas neuromusculares?
El exceso de potasio altera:
La excitabilidad de membrana.
Produciendo:
• Debilidad muscular.
• Parestesias.
• Hiporreflexia.
• Parálisis en casos severos.
¿Por qué NO es hipokalemia?
La hipokalemia suele producir:
• Ondas U prominentes.
• Aplanamiento de la onda T.
• Depresión del ST.
No es el patrón descrito.
¿Por qué NO es hipocalcemia?
La hipocalcemia se asocia clásicamente con:
• Prolongación del QT.
• Tetania.
• Espasmos musculares.
No explica las ondas T picudas.
¿Por qué NO es hipernatremia?
La hipernatremia produce principalmente:
Alteraciones neurológicas.
No genera este patrón electrocardiográfico.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"Debilidad muscular."
Y responden:
Hipokalemia.
Sin embargo:
El dato decisivo es:
La presencia de ondas T picudas.
Este hallazgo es prácticamente clásico de:
Hiperkalemia.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar factores de riesgo.
2.	Analizar los hallazgos del ECG.
3.	Reconocer ondas T picudas.
4.	Identificar ensanchamiento del QRS.
5.	Diagnosticar hiperkalemia.
Perlas de examen
✅ Las ondas T picudas son el hallazgo más temprano de hiperkalemia.
✅ La enfermedad renal crónica es una causa frecuente de hiperkalemia.
✅ El ensanchamiento del QRS indica mayor gravedad.
✅ La desaparición de la onda P es un signo de progresión.
✅ La hiperkalemia severa puede causar paro cardíaco.
✅ Debilidad muscular y parestesias son manifestaciones frecuentes.
✅ El calcio intravenoso estabiliza la membrana miocárdica en casos graves.
Referencias
• KDIGO Clinical Practice Guidelines.
• Harrison's Principles of Internal Medicine.
• Brenner and Rector's The Kidney.
• UpToDate: Clinical Manifestations and Treatment of Hyperkalemia.
• Tintinalli's Emergency Medicine.`,
  },
  {
    id: "dr-q-197",
    examArea: "PEDIATRÍA",
    topic: "PEDIATRÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","pediatria"],
    statement: "Paciente masculino de 4 años, llevado a consulta por su madre. Tiene esquema de vacunación completo para la edad y no presenta antecedentes patológicos de importancia.Consulta por cuadro de fiebre de 4 días de evolución asociado a malestar general y mialgias. Ha recibido únicamente acetaminofén con mejoría parcial de la sintomatología.La madre refiere que durante las últimas 24 horas ha aparecido un exantema eritematoso intenso en ambas mejillas con apariencia de \"bofetada\". Posteriormente, las lesiones se han extendido al tronco y extremidades adoptando un patrón reticulado o en encaje. El paciente se encuentra en buen estado general, sin compromiso respiratorio, sin prurito y con adecuada tolerancia a la vía oral.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Sarampión." },
      { id: "B", label: "B", text: "Eritema infeccioso (quinta enfermedad)." },
      { id: "C", label: "C", text: "Rubéola." },
      { id: "D", label: "D", text: "Exantema súbito (roséola infantil)." },
    ],
    correctOptionId: "B",
    explanation: "El cuadro clínico es característico de eritema infeccioso, enfermedad causada por el Parvovirus B19. La aparición de eritema facial con aspecto de \"mejillas abofeteadas\" seguida de un exantema reticulado en tronco y extremidades constituye una presentación clásica.",
    keyPoints: [
      "Cuando veas: Niño escolar. Fiebre leve. Mejillas abofeteadas. Exantema reticulado. Buen estado general.",
      "Debes pensar en: Eritema infeccioso por Parvovirus B19.",
      "Tema: Exantemas virales de la infancia.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los exantemas virales más característicos de pediatría.
La clave no es la fiebre.
La clave es:
La apariencia de "bofetada" en las mejillas.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Fiebre leve.
• Malestar general.
• Exantema facial intenso.
• Patrón reticulado en extremidades y tronco.
• Buen estado general.
Estos hallazgos son clásicos de:
Eritema infeccioso.
¿Cuál es el agente causal?
La enfermedad es producida por:
Parvovirus B19.
Este virus tiene tropismo por:
Los precursores eritroides de la médula ósea.
¿Por qué aparecen las mejillas abofeteadas?
La fase exantemática se caracteriza por:
Eritema intenso en ambas mejillas.
Con palidez peribucal relativa.
Este hallazgo es prácticamente diagnóstico.
¿Cómo evoluciona el exantema?
Posteriormente aparece:
• Exantema reticulado.
• Patrón en encaje.
• Distribución en tronco y extremidades.
Puede fluctuar durante semanas.
¿Qué importancia clínica tiene?
La mayoría de los niños presentan:
Curso benigno y autolimitado.
Sin embargo, puede producir complicaciones en:
• Pacientes con hemoglobinopatías.
• Inmunosuprimidos.
• Mujeres embarazadas.
¿Por qué NO es sarampión?
El sarampión suele presentar:
• Tos.
• Coriza.
• Conjuntivitis.
• Manchas de Koplik.
Además:
El exantema inicia detrás de las orejas y progresa cefalocaudalmente.
¿Por qué NO es rubéola?
La rubéola se caracteriza por:
• Adenopatías retroauriculares.
• Exantema maculopapular difuso.
No produce típicamente:
Mejillas abofeteadas.
¿Por qué NO es roséola?
La roséola suele ocurrir en:
Menores de 2 años.
Además:
El exantema aparece después de la desaparición de la fiebre alta.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Fiebre y exantema."
Y responden:
Sarampión.
Sin embargo:
El dato decisivo es:
La apariencia de mejillas abofeteadas.
Este hallazgo es clásico de:
Parvovirus B19.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar el exantema facial.
2.	Reconocer el aspecto de bofetada.
3.	Observar el patrón reticulado.
4.	Evaluar el buen estado general.
5.	Diagnosticar eritema infeccioso.
Perlas de examen
✅ El eritema infeccioso es causado por Parvovirus B19.
✅ El signo de "mejillas abofeteadas" es característico.
✅ El exantema reticulado es altamente sugestivo del diagnóstico.
✅ La enfermedad suele ser autolimitada.
✅ Puede desencadenar crisis aplásica en pacientes con hemoglobinopatías.
✅ La infección durante el embarazo puede producir hidrops fetal.
✅ Es uno de los exantemas virales más preguntados en exámenes.
Referencias
• Nelson Textbook of Pediatrics.
• Red Book: American Academy of Pediatrics.
• Rudolph's Pediatrics.
• UpToDate: Erythema Infectiosum (Parvovirus B19 Infection).
• Manual de Infectología Pediátrica.`,
  },
  {
    id: "dr-q-198",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement: "Paciente femenina de 50 años, con antecedentes de hipertensión arterial y diabetes mellitus, mal adherente al tratamiento, consulta por inicio súbito de debilidad en hemicuerpo derecho y dificultad para hablar de 2 horas de evolución. Al examen neurológico presenta hemiparesia derecha, desviación de la mirada y NIHSS de 12 puntos.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Administrar ácido acetilsalicílico inmediatamente." },
      { id: "B", label: "B", text: "Solicitar tomografía cerebral simple urgente y valorar trombólisis intravenosa." },
      { id: "C", label: "C", text: "Iniciar anticoagulación con heparina de bajo peso molecular." },
      { id: "D", label: "D", text: "Observación clínica durante 24 horas y repetir valoración neurológica." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un síndrome neurológico focal de inicio súbito altamente sugestivo de accidente cerebrovascular isquémico agudo dentro de la ventana terapéutica para reperfusión. La conducta inicial consiste en realizar neuroimagen urgente para descartar hemorragia intracraneal y determinar elegibilidad para trombólisis.",
    keyPoints: [
      "Cuando veas: Déficit neurológico focal súbito. Menos de 4.5 horas de evolución. NIHSS elevado. Paciente potencialmente trombolizable.",
      "Debes pensar en: Código ACV y tomografía urgente.",
      "Tema: Accidente cerebrovascular isquémico agudo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el manejo inicial del accidente cerebrovascular agudo.
La clave no es la hipertensión.
La clave es:
La ventana terapéutica.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Hemiparesia.
• Disartria.
• Desviación de la mirada.
• Inicio súbito.
• Evolución de 2 horas.
Estos hallazgos son altamente sugestivos de:
Accidente cerebrovascular isquémico agudo.
¿Por qué es importante el tiempo?
En neurología existe un principio fundamental:
"Time is brain."
Cada minuto de retraso produce:
Pérdida neuronal irreversible.
Por ello:
La identificación temprana permite terapias de reperfusión.
¿Qué estudio debe realizarse inicialmente?
La tomografía cerebral simple permite:
• Excluir hemorragia intracraneal.
• Confirmar elegibilidad para trombólisis.
• Guiar decisiones terapéuticas.
Es el estudio inicial de elección.
¿Por qué podría ser candidata a trombólisis?
La paciente presenta:
• Déficit neurológico incapacitante.
• NIHSS de 12.
• Menos de 4.5 horas desde el inicio.
Además:
La presión arterial se encuentra por debajo del límite habitual para trombólisis (<185/110 mmHg).
Por lo tanto:
Podría ser candidata a alteplasa o tenecteplasa tras la neuroimagen.
¿Por qué NO administrar aspirina inmediatamente?
La aspirina se utiliza en ACV isquémico.
Sin embargo:
Primero debe descartarse hemorragia cerebral.
Administrarla antes de la imagen puede ser peligroso.
¿Por qué NO iniciar anticoagulación?
La anticoagulación no constituye el tratamiento inicial estándar del ACV isquémico agudo.
Además:
Aumenta el riesgo de transformación hemorrágica.
¿Por qué NO observar?
La paciente presenta:
Déficit neurológico significativo.
Retrasar el diagnóstico podría hacer perder la ventana terapéutica.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Presión arterial 160/90 mmHg."
Y responden:
Control agresivo de la presión arterial.
Sin embargo:
El dato decisivo es:
Inicio de síntomas hace 2 horas.
Esto obliga a activar protocolo de ACV.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer déficit neurológico focal.
2.	Determinar hora de inicio.
3.	Activar código ACV.
4.	Solicitar tomografía cerebral urgente.
5.	Valorar trombólisis intravenosa y/o trombectomía según hallazgos.
Perlas de examen
✅ Todo déficit neurológico focal súbito debe considerarse un ACV hasta demostrar lo contrario.
✅ La tomografía simple es el estudio inicial de elección.
✅ La ventana habitual para trombólisis intravenosa es de hasta 4.5 horas en pacientes seleccionados.
✅ La presión arterial de 160/90 mmHg no contraindica trombólisis.
✅ NIHSS ayuda a cuantificar la gravedad del evento.
✅ La aspirina se administra después de descartar hemorragia intracraneal.
✅ "Time is brain" es uno de los conceptos más importantes en neurología de urgencias.
Referencias
• American Heart Association/American Stroke Association Guidelines.
• European Stroke Organisation Guidelines.
• Adams and Victor's Principles of Neurology.
• Harrison's Principles of Internal Medicine.
• UpToDate: Initial Assessment and Management of Acute Stroke.`,
  },
  {
    id: "dr-q-199",
    examArea: "UROLOGÍA",
    topic: "UROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","urologia"],
    statement: "Paciente masculino de 35 años con tabaquismo activo e índice paquete-año de 20, consulta por hematuria macroscópica indolora de una semana de evolución. Niega síntomas urinarios irritativos, fiebre o dolor lumbar.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Iniciar tratamiento antibiótico empírico y control en 7 días." },
      { id: "B", label: "B", text: "Solicitar citología urinaria y cistoscopia." },
      { id: "C", label: "C", text: "Solicitar biopsia renal percutánea." },
      { id: "D", label: "D", text: "Iniciar manejo para litiasis urinaria y egreso." },
    ],
    correctOptionId: "B",
    explanation: "La hematuria macroscópica indolora en un paciente fumador debe considerarse carcinoma urotelial hasta demostrar lo contrario. La evaluación diagnóstica inicial incluye estudio del tracto urinario, siendo la cistoscopia el método fundamental para descartar neoplasia vesical.",
    keyPoints: [
      "Cuando veas: Hematuria macroscópica. Ausencia de dolor. Tabaquismo. Sin datos de origen glomerular.",
      "Debes pensar en: Cáncer urotelial.",
      "Tema: Hematuria y cáncer de vejiga.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los diagnósticos oncológicos más importantes en urología.
La clave no es la hematuria.
La clave es:
Que sea indolora.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Hematuria macroscópica.
• Ausencia de dolor.
• Tabaquismo activo.
• Ausencia de datos de enfermedad glomerular.
Estos hallazgos obligan a sospechar:
Neoplasia urotelial.
¿Por qué el tabaquismo es importante?
El principal factor de riesgo para cáncer de vejiga es:
El tabaquismo.
Los carcinógenos del cigarrillo se concentran en la orina y producen:
Daño crónico al urotelio.
Por ello:
Los fumadores tienen un riesgo significativamente aumentado.
¿Qué significa que no existan eritrocitos dismórficos?
Los eritrocitos dismórficos sugieren:
Origen glomerular.
La ausencia de estos hallazgos orienta hacia:
Origen urológico.
¿Por qué la hematuria es indolora?
El síntoma clásico del cáncer vesical es:
Hematuria macroscópica indolora.
De hecho:
Es una de las preguntas más frecuentes en exámenes médicos.
¿Qué estudio debe realizarse?
La evaluación incluye:
• Cistoscopia.
• Citología urinaria.
• Estudio de vía urinaria superior.
La cistoscopia permite:
Visualización directa de lesiones vesicales.
¿Por qué NO iniciar antibióticos?
El paciente no presenta:
• Disuria.
• Fiebre.
• Piuria.
• Bacteriuria.
No existen datos de infección urinaria.
¿Por qué NO realizar biopsia renal?
La biopsia renal se reserva para:
Sospecha de enfermedad glomerular.
El uroanálisis no apoya ese diagnóstico.
¿Por qué NO asumir litiasis urinaria?
La litiasis suele acompañarse de:
• Dolor lumbar intenso.
• Cólico renal.
• Irritación urinaria.
Nada de esto está presente.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Paciente joven."
Y descartan malignidad.
Sin embargo:
El dato decisivo es:
Hematuria macroscópica indolora en un fumador.
Esto debe considerarse:
Cáncer urotelial hasta demostrar lo contrario.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar hematuria.
2.	Determinar origen glomerular o urológico.
3.	Identificar factores de riesgo.
4.	Sospechar neoplasia urotelial.
5.	Realizar cistoscopia y estudio complementario.
Perlas de examen
✅ La hematuria macroscópica indolora es el síntoma clásico del cáncer vesical.
✅ El tabaquismo es el principal factor de riesgo para carcinoma urotelial.
✅ La ausencia de eritrocitos dismórficos orienta a origen no glomerular.
✅ La cistoscopia es el estudio diagnóstico fundamental.
✅ Toda hematuria macroscópica debe estudiarse completamente.
✅ La citología urinaria puede ayudar en el diagnóstico.
✅ El cáncer de vejiga debe descartarse antes de asumir causas benignas.
Referencias
• Campbell-Walsh-Wein Urology.
• European Association of Urology (EAU) Guidelines on Non-Muscle-Invasive Bladder Cancer.
• American Urological Association (AUA) Hematuria Guidelines.
• Smith & Tanagho's General Urology.
• UpToDate: Etiology and Evaluation of Hematuria in Adults.`,
  },
  {
    id: "dr-q-200",
    examArea: "NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","nefrologia"],
    statement: "Femenina de 22 años, con antecedente de cáncer renal en su padre diagnosticado a los 52 años, consulta por hematuria macroscópica de 6 meses de evolución. Ha sido valorada por urología con estudios de imagen y cistoscopia sin hallazgos patológicos. ¿Cuál es la conducta más apropiada a seguir?",
    options: [
      { id: "A", label: "A", text: "Seguimiento por medicina familiar sin estudios adicionales." },
      { id: "B", label: "B", text: "Remisión a nefrología para estudio de hematuria de origen glomerular." },
      { id: "C", label: "C", text: "Repetir cistoscopia en 6 meses." },
      { id: "D", label: "D", text: "Realizar nefrectomía profiláctica por antecedente familiar." },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta hematuria persistente con estudio urológico completamente negativo. En este contexto debe sospecharse una causa nefrológica, especialmente de origen glomerular, que requiere estudio especializado.",
    keyPoints: [
      "Cuando veas: Hematuria persistente. Estudios urológicos negativos. Cistoscopia normal. Imágenes normales.",
      "Debes pensar en: Origen nefrológico de la hematuria.",
      "Tema: Hematuria glomerular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el enfoque diagnóstico de la hematuria persistente.
La clave no es el antecedente familiar.
La clave es:
La negatividad del estudio urológico.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Hematuria macroscópica persistente.
• Ecografía normal.
• Tomografía normal.
• Cistoscopia normal.
Por tanto:
Las causas urológicas más frecuentes han sido razonablemente descartadas.
¿Qué sigue después de un estudio urológico negativo?
Debe investigarse:
Origen renal o glomerular.
Entre las causas más frecuentes se encuentran:
• Nefropatía por IgA.
• Enfermedad de membrana basal delgada.
• Síndrome de Alport.
• Otras glomerulopatías.
¿Por qué es importante el antecedente familiar?
Aunque el antecedente de cáncer renal debe considerarse, la ausencia de hallazgos en:
• Ecografía.
• Tomografía contrastada.
• Cistoscopia.
Hace menos probable una neoplasia activa detectable.
La prioridad es:
Descartar enfermedad renal.
¿Por qué NO repetir la cistoscopia?
Ya existe una evaluación urológica completa sin hallazgos.
La siguiente etapa diagnóstica corresponde a:
Nefrología.
¿Por qué NO realizar nefrectomía profiláctica?
No existe:
• Diagnóstico de cáncer.
• Masa renal.
• Síndrome hereditario confirmado.
Por tanto:
No tiene indicación.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Cáncer renal en el padre."
Y responden:
Continuar estudios urológicos.
Sin embargo:
El dato decisivo es:
La evaluación urológica completamente negativa.
Esto obliga a buscar:
Origen nefrológico.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar hematuria.
2.	Realizar estudio urológico.
3.	Descartar lesiones estructurales.
4.	Remitir a nefrología si el estudio es negativo.
5.	Investigar causas glomerulares.
Perlas de examen
✅ Toda hematuria persistente requiere estudio completo.
✅ Un estudio urológico negativo obliga a pensar en origen renal.
✅ La nefropatía por IgA es una causa frecuente de hematuria persistente.
✅ El síndrome de Alport puede asociarse a hematuria familiar.
✅ La enfermedad de membrana basal delgada es un diagnóstico diferencial importante.
✅ La cistoscopia normal no excluye enfermedad glomerular.
✅ Nefrología es el siguiente paso tras descartar causas urológicas.
Referencias
• KDIGO Clinical Practice Guidelines.
• Brenner and Rector's The Kidney.
• Campbell-Walsh-Wein Urology.
• Harrison's Principles of Internal Medicine.
• UpToDate: Evaluation of Hematuria in Adults.`,
  },
  {
    id: "dr-q-201",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","infectologia"],
    statement: "Paciente masculino de 40 años, sin antecedentes de relevancia, consulta por fiebre persistente de dos semanas de evolución, acompañada de astenia y pérdida de peso no intencional. Al examen físico se identifica un soplo diastólico en foco aórtico.\n¿Cuál es el diagnóstico más probable y la conducta a seguir?",
    options: [
      { id: "A", label: "A", text: "Fiebre reumática aguda; iniciar antiinflamatorios." },
      { id: "B", label: "B", text: "Endocarditis infecciosa; solicitar hemocultivos y ecocardiograma." },
      { id: "C", label: "C", text: "Tuberculosis diseminada; solicitar baciloscopias seriadas." },
      { id: "D", label: "D", text: "Linfoma no Hodgkin; solicitar biopsia ganglionar." },
    ],
    correctOptionId: "B",
    explanation: "La presencia de fiebre prolongada asociada a un nuevo soplo cardíaco debe hacer sospechar endocarditis infecciosa hasta demostrar lo contrario. El estudio inicial incluye hemocultivos seriados y ecocardiografía para confirmar el diagnóstico e identificar compromiso valvular.",
    keyPoints: [
      "Cuando veas: Fiebre prolongada. Pérdida de peso. Astenia. Soplo cardíaco.",
      "Debes pensar en: Endocarditis infecciosa.",
      "Tema: Endocarditis infecciosa.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las causas más importantes de fiebre de origen desconocido.
La clave no es la fiebre.
La clave es:
La presencia del soplo cardíaco.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Fiebre persistente.
• Síntomas constitucionales.
• Soplo aórtico.
Esta combinación obliga a sospechar:
Endocarditis infecciosa.
¿Por qué sospechar endocarditis?
La enfermedad suele manifestarse con:
• Fiebre.
• Astenia.
• Pérdida de peso.
• Soplos cardíacos nuevos o modificados.
En muchos pacientes:
La fiebre puede ser el síntoma predominante.
¿Cuál es el estudio inicial?
Los pilares diagnósticos son:
• Hemocultivos seriados.
• Ecocardiograma.
Los hemocultivos permiten:
Identificar el microorganismo causal.
La ecocardiografía permite:
Detectar vegetaciones y complicaciones valvulares.
¿Por qué NO iniciar tratamiento empírico inmediatamente?
Siempre que el paciente esté estable:
Deben obtenerse hemocultivos antes de iniciar antibióticos.
Esto aumenta significativamente el rendimiento diagnóstico.
¿Por qué NO pensar primero en tuberculosis?
La tuberculosis puede producir fiebre y pérdida de peso.
Sin embargo:
No explica adecuadamente la aparición de un soplo cardíaco.
¿Por qué NO pensar primero en linfoma?
El linfoma puede producir síntomas constitucionales.
Pero:
La presencia de un soplo orienta más hacia una causa cardíaca infecciosa.
¿Cuál es la trampa de examen?
Muchos estudiantes se enfocan en:
La pérdida de peso.
Y responden:
Tuberculosis o neoplasia.
Sin embargo:
El dato decisivo es:
El soplo cardíaco.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar fiebre prolongada.
2.	Buscar soplos cardíacos.
3.	Sospechar endocarditis.
4.	Obtener hemocultivos.
5.	Realizar ecocardiograma.
Perlas de examen
✅ Fiebre más soplo cardíaco obliga a descartar endocarditis infecciosa.
✅ Los hemocultivos deben obtenerse antes de iniciar antibióticos.
✅ El ecocardiograma es fundamental para el diagnóstico.
✅ La pérdida de peso y la astenia son frecuentes en cuadros subagudos.
✅ Staphylococcus aureus es una de las causas más frecuentes de endocarditis.
✅ Los criterios de Duke modificados son la herramienta diagnóstica de referencia.
✅ La sospecha temprana disminuye complicaciones embólicas y valvulares.
Referencias
• European Society of Cardiology Guidelines for Infective Endocarditis.
• American Heart Association Scientific Statement on Infective Endocarditis.
• Harrison's Principles of Internal Medicine.
• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.
• UpToDate: Clinical Manifestations and Evaluation of Infective Endocarditis.`,
  },
  {
    id: "dr-q-202",
    examArea: "PEDIATRÍA - CARDIOLOGÍA PEDIÁTRICA",
    topic: "CARDIOLOGÍA PEDIÁTRICA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia_pediatrica"],
    statement: "Paciente masculino de 6 años es llevado a consulta por sus padres debido a fatiga progresiva y disnea de esfuerzo en las últimas semanas. En la exploración física se ausculta un soplo mesosistólico en foco pulmonar asociado a desdoblamiento fijo del segundo ruido cardíaco.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Comunicación interauricular." },
      { id: "B", label: "B", text: "Comunicación interventricular." },
      { id: "C", label: "C", text: "Persistencia del conducto arterioso." },
      { id: "D", label: "D", text: "Tetralogía de Fallot." },
    ],
    correctOptionId: "A",
    explanation: "La presencia de desdoblamiento fijo del segundo ruido cardíaco asociado a un soplo sistólico eyectivo en foco pulmonar constituye el hallazgo clásico de la comunicación interauricular.",
    keyPoints: [
      "Cuando veas: Soplo mesosistólico en foco pulmonar. Desdoblamiento fijo del segundo ruido. Niño con intolerancia al ejercicio.",
      "Debes pensar en: Comunicación interauricular.",
      "Tema: Cardiopatías congénitas acianóticas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los hallazgos auscultatorios más característicos de cardiología pediátrica.
La clave no es el soplo.
La clave es:
El desdoblamiento fijo del segundo ruido.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Disnea de esfuerzo.
• Fatiga progresiva.
• Soplo pulmonar.
• Desdoblamiento fijo de S2.
Este conjunto de hallazgos es altamente sugestivo de:
Comunicación interauricular (CIA).
¿Por qué se produce el soplo?
La CIA genera:
Paso de sangre desde la aurícula izquierda hacia la aurícula derecha.
Esto ocasiona:
Aumento del flujo pulmonar.
El soplo auscultado no corresponde al defecto septal en sí, sino al:
Incremento del flujo a través de la válvula pulmonar.
¿Por qué ocurre el desdoblamiento fijo de S2?
El aumento constante del flujo hacia el ventrículo derecho produce:
Retraso persistente en el cierre de la válvula pulmonar.
Como consecuencia:
El segundo ruido permanece desdoblado durante inspiración y espiración.
Este hallazgo es:
Prácticamente clásico de CIA.
¿Por qué NO es comunicación interventricular?
La CIV típicamente produce:
Soplo holosistólico en borde esternal izquierdo.
No suele asociarse a:
Desdoblamiento fijo de S2.
¿Por qué NO es persistencia del conducto arterioso?
La PCA produce clásicamente:
Soplo continuo en maquinaria.
No un soplo mesosistólico aislado.
¿Por qué NO es tetralogía de Fallot?
La tetralogía de Fallot se caracteriza por:
• Cianosis.
• Crisis hipóxicas.
• Soplo por estenosis pulmonar.
No por desdoblamiento fijo del segundo ruido.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan:
"Soplo pulmonar."
Y responden:
Persistencia del conducto arterioso.
Sin embargo:
El dato decisivo es:
El desdoblamiento fijo de S2.
Este hallazgo orienta directamente hacia:
Comunicación interauricular.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar el soplo pulmonar.
2.	Evaluar el segundo ruido.
3.	Reconocer el desdoblamiento fijo.
4.	Sospechar cortocircuito izquierda-derecha.
5.	Diagnosticar comunicación interauricular.
Perlas de examen
✅ El desdoblamiento fijo de S2 es el hallazgo clásico de la CIA.
✅ La CIA es una cardiopatía congénita acianótica.
✅ El soplo se produce por aumento del flujo pulmonar.
✅ Muchos pacientes permanecen asintomáticos durante años.
✅ La ecocardiografía confirma el diagnóstico.
✅ La sobrecarga de cavidades derechas aparece con la evolución.
✅ Es una de las cardiopatías congénitas más preguntadas en exámenes.
Referencias
• Nelson Textbook of Pediatrics.
• Moss & Adams' Heart Disease in Infants, Children, and Adolescents.
• Braunwald's Heart Disease.
• American Heart Association Guidelines for Congenital Heart Disease.
• UpToDate: Clinical Manifestations and Diagnosis of Atrial Septal Defects.`,
  },
  {
    id: "dr-q-203",
    examArea: "NEUROCIRUGÍA - URGENCIAS",
    topic: "URGENCIAS",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","urgencias"],
    statement: "Paciente masculino de 43 años es llevado a urgencias tras un accidente de tránsito con trauma craneoencefálico severo. Al ingreso presenta apertura ocular únicamente al dolor, emisión de sonidos incomprensibles y respuesta motora inadecuada al estímulo doloroso.\n¿Cuál es el puntaje de la escala de Glasgow?",
    options: [
      { id: "A", label: "A", text: "6 puntos." },
      { id: "B", label: "B", text: "7 puntos." },
      { id: "C", label: "C", text: "8 puntos." },
      { id: "D", label: "D", text: "9 puntos." },
    ],
    correctOptionId: "B",
    explanation: "La escala de Glasgow se calcula sumando la respuesta ocular, verbal y motora. En este paciente la apertura ocular al dolor corresponde a 2 puntos, los sonidos incomprensibles a 2 puntos y la respuesta motora inadecuada (retirada al dolor) a 3 puntos, para un total de 7 puntos.",
    keyPoints: [
      "Cuando veas: Apertura ocular al dolor. Sonidos incomprensibles. Retirada al dolor.",
      "Debes pensar en: Glasgow 7/15.",
      "Tema: Escala de Coma de Glasgow.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los instrumentos más utilizados en urgencias y trauma.
La clave no es el trauma.
La clave es:
Conocer la puntuación de cada componente.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Apertura ocular al dolor.
• Sonidos incomprensibles.
• Retirada al dolor.
Debemos calcular:
La suma de las tres respuestas.
¿Cómo se puntúa la respuesta ocular?
• Espontánea = 4.
• A la voz = 3.
• Al dolor = 2.
• Ninguna = 1.
El paciente obtiene:
2 puntos.
¿Cómo se puntúa la respuesta verbal?
• Orientado = 5.
• Confuso = 4.
• Palabras inapropiadas = 3.
• Sonidos incomprensibles = 2.
• Ninguna = 1.
El paciente obtiene:
2 puntos.
¿Cómo se puntúa la respuesta motora?
• Obedece órdenes = 6.
• Localiza dolor = 5.
• Retirada al dolor = 4.
• Flexión anormal = 3.
• Extensión anormal = 2.
• Ninguna = 1.
El paciente obtiene:
3 puntos según el enunciado de la pregunta (respuesta motora inadecuada).
Por lo tanto:
2 + 2 + 3 = 7 puntos.
¿Cuál es la trampa de examen?
Muchos estudiantes olvidan:
La puntuación individual de cada componente.
O confunden:
Flexión anormal con retirada al dolor.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Evaluar respuesta ocular.
2.	Evaluar respuesta verbal.
3.	Evaluar respuesta motora.
4.	Sumar los tres componentes.
5.	Obtener el Glasgow total.
Perlas de examen
✅ Glasgow ≤ 8 indica trauma craneoencefálico grave.
✅ La respuesta motora es el componente con mayor valor pronóstico.
✅ La apertura ocular al dolor corresponde a 2 puntos.
✅ Los sonidos incomprensibles corresponden a 2 puntos.
✅ La escala máxima es 15 puntos.
✅ La escala mínima es 3 puntos.
✅ Glasgow ≤ 8 obliga a considerar protección de la vía aérea.
Referencias
• Advanced Trauma Life Support (ATLS).
• Brain Trauma Foundation Guidelines.
• Greenberg's Handbook of Neurosurgery.
• Tintinalli's Emergency Medicine.
• UpToDate: Glasgow Coma Scale.`,
  },
  {
    id: "dr-q-204",
    examArea: "PEDIATRÍA - CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement: "Lactante masculino de 2 meses es llevado a urgencias por irritabilidad y disminución de la succión de inicio súbito. Al examen físico presenta taquicardia de 230 lpm. El electrocardiograma evidencia una taquicardia supraventricular de complejos estrechos, regular y sin ondas P visibles.\n¿Cuál es el tratamiento de elección?",
    options: [
      { id: "A", label: "A", text: "Amiodarona intravenosa." },
      { id: "B", label: "B", text: "Adenosina intravenosa." },
      { id: "C", label: "C", text: "Cardioversión eléctrica sincronizada." },
      { id: "D", label: "D", text: "Metoprolol intravenoso." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta una taquicardia supraventricular estable. En lactantes hemodinámicamente estables, la adenosina es el tratamiento farmacológico de elección debido a su capacidad para bloquear transitoriamente la conducción a través del nodo auriculoventricular.",
    keyPoints: [
      "Cuando veas: Lactante. Taquicardia regular. Complejos estrechos. Ausencia de ondas P.",
      "Debes pensar en: Taquicardia supraventricular.",
      "Tema: Taquicardia supraventricular en pediatría.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las arritmias más frecuentes en pediatría.
La clave no es la frecuencia cardíaca.
La clave es:
La regularidad del ritmo y los complejos estrechos.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Frecuencia cardíaca muy elevada.
• Ritmo regular.
• Complejos estrechos.
• Ondas P no visibles.
Estos hallazgos son característicos de:
Taquicardia supraventricular.
¿Cuál es el tratamiento inicial?
Si el paciente se encuentra estable:
• Maniobras vagales.
• Adenosina intravenosa.
La adenosina constituye:
El tratamiento farmacológico de elección.
¿Cómo actúa la adenosina?
Produce:
Bloqueo transitorio del nodo auriculoventricular.
Esto interrumpe:
La mayoría de los circuitos de reentrada responsables de la TSV.
¿Por qué NO cardioversión eléctrica?
La cardioversión sincronizada está indicada cuando existe:
• Inestabilidad hemodinámica.
• Hipotensión significativa.
• Choque.
• Alteración importante del estado de conciencia.
No es el caso.
¿Por qué NO amiodarona?
La amiodarona puede utilizarse en algunas arritmias refractarias.
Sin embargo:
No es el tratamiento inicial de elección para una TSV estable.
¿Por qué NO metoprolol?
Los betabloqueadores pueden utilizarse en prevención o manejo crónico.
No constituyen la primera línea en el episodio agudo.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"230 lpm."
Y responden:
Cardioversión.
Sin embargo:
El dato decisivo es:
La estabilidad hemodinámica.
Por ello:
La adenosina es la respuesta correcta.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la TSV.
2.	Valorar estabilidad hemodinámica.
3.	Realizar maniobras vagales.
4.	Administrar adenosina.
5.	Considerar cardioversión si existe inestabilidad.
Perlas de examen
✅ La TSV es la arritmia sintomática más frecuente en lactantes.
✅ La adenosina es el tratamiento farmacológico de elección en pacientes estables.
✅ Debe administrarse en bolo intravenoso rápido.
✅ Las maniobras vagales pueden ser efectivas antes del tratamiento farmacológico.
✅ La cardioversión sincronizada se reserva para pacientes inestables.
✅ La ausencia de ondas P visibles es un hallazgo frecuente.
✅ La frecuencia cardíaca suele superar los 220 lpm en lactantes.
Referencias
• Nelson Textbook of Pediatrics.
• Pediatric Advanced Life Support (PALS).
• Braunwald's Heart Disease.
• Moss & Adams' Heart Disease in Infants, Children, and Adolescents.
• UpToDate: Supraventricular Tachycardia in Infants and Children.`,
  },
  {
    id: "dr-q-205",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement: "Paciente masculino de 57 años, con antecedentes de hipertensión arterial y obesidad, consulta por cefalea intensa de inicio súbito, asociada a náuseas y fotofobia. Al examen físico presenta rigidez de nuca sin focalización neurológica.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Meningitis bacteriana aguda." },
      { id: "B", label: "B", text: "Hemorragia subaracnoidea." },
      { id: "C", label: "C", text: "Migraña con aura." },
      { id: "D", label: "D", text: "Encefalitis viral." },
    ],
    correctOptionId: "B",
    explanation: "La hemorragia subaracnoidea clásicamente se presenta con cefalea intensa de inicio súbito (\"la peor cefalea de su vida\"), acompañada de signos de irritación meníngea como rigidez de nuca y fotofobia.",
    keyPoints: [
      "Cuando veas: Cefalea súbita intensa. Rigidez de nuca. Fotofobia. Ausencia de focalización neurológica.",
      "Debes pensar en: Hemorragia subaracnoidea.",
      "Tema: Hemorragia subaracnoidea.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las emergencias neurológicas más importantes.
La clave no es la hipertensión.
La clave es:
El inicio súbito de la cefalea.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Cefalea explosiva.
• Náuseas.
• Fotofobia.
• Rigidez de nuca.
Estos hallazgos son altamente sugestivos de:
Hemorragia subaracnoidea.
¿Por qué ocurre?
La causa más frecuente es:
Rotura de un aneurisma intracraneal sacular.
La sangre liberada al espacio subaracnoideo produce:
Irritación meníngea aguda.
¿Cuál es la presentación clásica?
La descripción típica es:
"La peor cefalea de la vida."
Además pueden aparecer:
• Náuseas.
• Vómitos.
• Rigidez de nuca.
• Fotofobia.
• Alteración del estado de conciencia.
¿Por qué NO es meningitis?
La meningitis suele asociarse a:
• Fiebre.
• Síndrome infeccioso.
• Evolución progresiva.
No suele iniciar con una cefalea explosiva.
¿Por qué NO es migraña?
La migraña generalmente tiene:
• Antecedentes previos similares.
• Evolución recurrente.
La rigidez de nuca obliga a descartar primero una causa grave.
¿Por qué NO es encefalitis?
La encefalitis suele producir:
• Alteración del estado mental.
• Convulsiones.
• Déficits neurológicos.
No es la presentación típica del caso.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Fotofobia."
Y responden:
Meningitis.
Sin embargo:
El dato decisivo es:
La cefalea de inicio súbito.
Esto orienta primero a:
Hemorragia subaracnoidea.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar cefalea explosiva.
2.	Buscar signos meníngeos.
3.	Sospechar hemorragia subaracnoidea.
4.	Solicitar tomografía cerebral urgente.
5.	Realizar punción lumbar si la tomografía es negativa y persiste la sospecha.
Perlas de examen
✅ La hemorragia subaracnoidea produce la clásica "cefalea en trueno".
✅ La causa más frecuente es la ruptura de un aneurisma sacular.
✅ La rigidez de nuca es un signo de irritación meníngea.
✅ La tomografía simple es el estudio inicial de elección.
✅ Una tomografía negativa no excluye completamente el diagnóstico.
✅ La punción lumbar puede confirmar el diagnóstico cuando la sospecha persiste.
✅ Constituye una emergencia neurológica potencialmente mortal.
Referencias
• Adams and Victor's Principles of Neurology.
• Greenberg's Handbook of Neurosurgery.
• American Heart Association Guidelines for Aneurysmal Subarachnoid Hemorrhage.
• Harrison's Principles of Internal Medicine.
• UpToDate: Clinical Presentation and Diagnosis of Subarachnoid Hemorrhage.`,
  },
  {
    id: "dr-q-206",
    examArea: "PEDIATRÍA",
    topic: "PEDIATRÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","pediatria"],
    statement: "Paciente masculino de 1 año es llevado a urgencias por fiebre, tos y dificultad respiratoria progresiva de 2 días de evolución. Al examen físico presenta sibilancias difusas, tiraje intercostal y saturación de oxígeno de 92% al aire ambiente. No tiene antecedentes de episodios similares.\n¿Cuál es el tratamiento más adecuado?",
    options: [
      { id: "A", label: "A", text: "Salbutamol inhalado y prednisolona oral." },
      { id: "B", label: "B", text: "Oxígeno suplementario y medidas de soporte." },
      { id: "C", label: "C", text: "Ceftriaxona intravenosa." },
      { id: "D", label: "D", text: "Adrenalina intramuscular." },
    ],
    correctOptionId: "B",
    explanation: "El cuadro clínico es compatible con bronquiolitis aguda, cuyo tratamiento es fundamentalmente de soporte. La oxigenoterapia está indicada cuando existe hipoxemia y no se recomienda el uso rutinario de broncodilatadores, corticoides o antibióticos.",
    keyPoints: [
      "Cuando veas: Lactante menor de 2 años. Primer episodio de sibilancias. Infección respiratoria viral. Dificultad respiratoria.",
      "Debes pensar en: Bronquiolitis aguda.",
      "Tema: Bronquiolitis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el manejo de la infección respiratoria baja más frecuente en lactantes.
La clave no son las sibilancias.
La clave es:
Que se trata del primer episodio.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Lactante de 1 año.
• Cuadro viral respiratorio.
• Sibilancias.
• Tiraje.
• Hipoxemia leve.
Estos hallazgos son compatibles con:
Bronquiolitis aguda.
¿Cuál es el agente causal más frecuente?
El principal agente es:
Virus sincitial respiratorio (VSR).
Aunque otros virus también pueden producir el cuadro.
¿Cuál es el tratamiento?
Las medidas recomendadas incluyen:
• Oxígeno si existe hipoxemia.
• Hidratación adecuada.
• Lavados nasales.
• Monitorización clínica.
¿Por qué NO usar salbutamol de rutina?
La evidencia actual demuestra:
Beneficio limitado o ausente en la mayoría de los pacientes.
Por ello:
No se recomienda de forma rutinaria.
¿Por qué NO utilizar corticoides?
Los corticoides:
No mejoran desenlaces clínicos relevantes en bronquiolitis.
Por tanto:
No forman parte del tratamiento habitual.
¿Por qué NO administrar antibióticos?
La bronquiolitis es:
Una infección viral.
Los antibióticos solo están indicados cuando existe:
Coinfección bacteriana documentada.
¿Por qué NO administrar adrenalina intramuscular?
La adrenalina intramuscular está indicada en:
Anafilaxia.
No corresponde al cuadro clínico presentado.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Sibilancias."
Y responden:
Salbutamol.
Sin embargo:
El dato decisivo es:
Primer episodio de sibilancias en un lactante con infección viral.
Esto orienta a:
Bronquiolitis.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar lactante con infección viral.
2.	Reconocer primer episodio de sibilancias.
3.	Diagnosticar bronquiolitis.
4.	Administrar medidas de soporte.
5.	Utilizar oxígeno cuando exista hipoxemia.
Perlas de examen
✅ El VSR es la principal causa de bronquiolitis.
✅ La bronquiolitis ocurre principalmente en menores de 2 años.
✅ El tratamiento es fundamentalmente de soporte.
✅ El oxígeno se administra en presencia de hipoxemia.
✅ Los broncodilatadores no se recomiendan de rutina.
✅ Los corticoides no forman parte del manejo estándar.
✅ Es una de las causas más frecuentes de hospitalización pediátrica.
Referencias
• Nelson Textbook of Pediatrics.
• American Academy of Pediatrics Clinical Practice Guideline: Bronchiolitis.
• Manual de Pediatría de la AEP.
• UpToDate: Bronchiolitis in Infants and Children.
• Red Book: American Academy of Pediatrics.`,
  },
  {
    id: "dr-q-207",
    examArea: "GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","gastroenterologia"],
    statement: "Paciente masculino de 55 años, con antecedente de gonalgia izquierda en manejo frecuente con antiinflamatorios no esteroideos, consulta por hematemesis abundante y melena de inicio reciente. Al examen físico presenta taquicardia sin hipotensión.\nLa endoscopia digestiva alta reporta:\n• Úlcera gástrica de 1.5 cm en curvatura menor.\n• Vaso visible no sangrante en el lecho ulceroso.\n• Sin sangrado activo al momento del procedimiento.\nLos laboratorios muestran:\n• Hemoglobina: 8 g/dL.\n• Nitrógeno ureico (BUN): 32 mg/dL.\n¿Cuál es la clasificación de Forrest, la puntuación de Glasgow-Blatchford y el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Forrest Ia, Glasgow-Blatchford bajo riesgo (<3), gastritis erosiva por AINE." },
      { id: "B", label: "B", text: "Forrest IIa, Glasgow-Blatchford alto riesgo (>7), úlcera péptica sangrante secundaria a AINE." },
      { id: "C", label: "C", text: "Forrest IIc, Glasgow-Blatchford bajo riesgo (<3), úlcera gástrica cicatrizada." },
      { id: "D", label: "D", text: "Forrest III, Glasgow-Blatchford intermedio, síndrome de Mallory-Weiss." },
    ],
    correctOptionId: "B",
    explanation: "Forrest IIa, Glasgow-Blatchford alto riesgo (>7), úlcera péptica sangrante secundaria a AINE.",
    keyPoints: [
      "Cuando veas: Hematemesis y melena en paciente con AINEs. Vaso visible no sangrante en endoscopia. Anemia y taquicardia.",
      "Debes pensar en: Forrest IIa, Glasgow-Blatchford alto riesgo, úlcera péptica por AINE.",
      "Tema: Hemorragia digestiva alta y clasificación de Forrest.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de gastroenterología porque evalúa una trampa frecuente: clasificar mal la lesión endoscópica o subestimar el riesgo clínico por no integrar Forrest con Glasgow-Blatchford.

La clave no es la hemoglobina aislada ni el antecedente de AINEs por sí solo.
La clave es:
Vaso visible no sangrante en lecho ulceroso = Forrest IIa + anemia significativa y taquicardia = Glasgow-Blatchford alto riesgo.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 55 años con uso frecuente de AINEs por gonalgia.
• Hematemesis abundante y melena de inicio reciente.
• Taquicardia sin hipotensión (inestabilidad hemodinámica incipiente).
• Endoscopia: úlcera gástrica 1.5 cm con vaso visible no sangrante, sin sangrado activo.
• Hb 8 g/dL y BUN 32 mg/dL (anemia significativa y absorción de sangre digestiva).

Recordemos hemorragia digestiva alta y Forrest:
• Forrest Ia/Ib: sangrado activo (chorro o babeo).
• Forrest IIa: vaso visible no sangrante (alto riesgo de resangrado).
• Forrest IIb: coágulo adherido; IIc: mancha hemática plana; III: base limpia.
• Glasgow-Blatchford estratifica riesgo clínico; >7 indica alto riesgo.
• Los AINEs inhiben prostaglandinas gástricas y son causa frecuente de úlcera péptica complicada.
• El BUN elevado puede reflejar absorción de hemoglobina en el intestino.

Por lo tanto:
Forrest IIa, Glasgow-Blatchford alto riesgo (>7) y úlcera péptica sangrante secundaria a AINE (opción B).

¿Por qué la opción B es la respuesta correcta?
El vaso visible no sangrante corresponde a Forrest IIa. La combinación de anemia (Hb 8), taquicardia, hematemesis y contexto de AINEs eleva el Glasgow-Blatchford por encima de 7.

¿Por qué fallan las otras opciones?
Opción A (Forrest Ia, bajo riesgo, gastritis erosiva): Forrest Ia implica sangrado activo; el Glasgow-Blatchford no es bajo con Hb 8 y taquicardia.
Opción C (Forrest IIc, bajo riesgo, úlcera cicatrizada): IIc es mancha hemática plana, no vaso visible; la úlcera no está cicatrizada.
Opción D (Forrest III, Mallory-Weiss): Forrest III es base limpia; Mallory-Weiss es desgarro mucoso, no úlcera con vaso visible.

¿Cuál es la trampa del examen?
Muchos estudiantes confunden Forrest IIa (vaso visible no sangrante) con Forrest Ia (sangrado activo) o subestiman el Glasgow-Blatchford al no integrar anemia y taquicardia.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar el hallazgo endoscópico: vaso visible = Forrest IIa.
2. Calcular Glasgow-Blatchford con datos clínicos y de laboratorio.
3. Relacionar AINEs con úlcera péptica complicada.
4. Forrest IIa requiere hemostasia endoscópica por alto riesgo de resangrado.

Perlas de examen
✅ Vaso visible no sangrante = Forrest IIa.
✅ Glasgow-Blatchford >7 = alto riesgo de reintervención o mortalidad.
✅ Forrest Ia = sangrado activo; no confundir con IIa.
✅ AINEs = causa frecuente de úlcera péptica complicada.
✅ BUN elevado puede reflejar absorción de sangre digestiva.

Referencias
• ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding.
• Sleisenger and Fordtran's Gastrointestinal and Liver Disease.
• Harrison's Principles of Internal Medicine.
• UpToDate: Approach to acute upper gastrointestinal bleeding.
• Baveno VII Consensus on Portal Hypertension.`,
  },
  {
    id: "dr-q-208",
    examArea: "ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","endocrinologia"],
    statement: "Paciente femenina de 25 años consulta por fatiga progresiva, intolerancia al frío, aumento de peso no intencional y estreñimiento de varios meses de evolución. Refiere además caída del cabello y piel seca. Los estudios de laboratorio muestran TSH elevada y T4 libre disminuida.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Hipertiroidismo primario." },
      { id: "B", label: "B", text: "Hipotiroidismo primario." },
      { id: "C", label: "C", text: "Hipotiroidismo central." },
      { id: "D", label: "D", text: "Tiroiditis subaguda." },
    ],
    correctOptionId: "B",
    explanation: "La elevación de TSH asociada a disminución de T4 libre es el patrón bioquímico característico del hipotiroidismo primario, generalmente secundario a enfermedad tiroidea primaria.",
    keyPoints: [
      "Cuando veas: Fatiga. Intolerancia al frío. Aumento de peso. TSH elevada. T4 libre baja.",
      "Debes pensar en: Hipotiroidismo primario.",
      "Tema: Hipotiroidismo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los trastornos endocrinológicos más frecuentes.
La clave no son los síntomas.
La clave es:
La combinación de TSH elevada y T4 libre baja.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Síntomas compatibles con disminución del metabolismo basal.
• TSH elevada.
• T4 libre disminuida.
Estos hallazgos corresponden a:
Hipotiroidismo primario.
¿Por qué aumenta la TSH?
Cuando la glándula tiroides produce menos hormonas:
• Disminuye la T4.
• Aumenta la secreción hipofisaria de TSH.
Esto ocurre por:
Retroalimentación negativa.
¿Cuál es la causa más frecuente?
En adultos, la causa más frecuente es:
Tiroiditis de Hashimoto.
Aunque también pueden producirlo:
• Cirugía tiroidea.
• Radioyodo.
• Déficit de yodo.
¿Por qué NO es hipotiroidismo central?
En el hipotiroidismo central suele encontrarse:
• T4 libre baja.
• TSH baja o inapropiadamente normal.
No elevada.
¿Por qué NO es hipertiroidismo?
El hipertiroidismo produce:
• Pérdida de peso.
• Intolerancia al calor.
• Taquicardia.
Hallazgos opuestos a los del caso.
¿Por qué NO es tiroiditis subaguda?
La tiroiditis subaguda típicamente cursa con:
• Dolor cervical.
• Fase inicial de hipertiroidismo.
No corresponde al cuadro presentado.
¿Cuál es la trampa de examen?
Muchos estudiantes memorizan:
TSH alta = problema hipofisario.
Sin embargo:
El dato decisivo es:
La T4 libre disminuida.
Esto indica:
Falla primaria de la glándula tiroides.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar síntomas compatibles.
2.	Interpretar TSH.
3.	Interpretar T4 libre.
4.	Diferenciar origen primario o central.
5.	Diagnosticar hipotiroidismo primario.
Perlas de examen
✅ TSH elevada y T4 libre baja = hipotiroidismo primario.
✅ La causa más frecuente es la tiroiditis de Hashimoto.
✅ La intolerancia al frío es un síntoma clásico.
✅ La piel seca y la caída del cabello son hallazgos frecuentes.
✅ El estreñimiento es una manifestación común.
✅ La bradicardia puede estar presente.
✅ El tratamiento de elección es la levotiroxina.
Referencias
• Williams Textbook of Endocrinology.
• Harrison's Principles of Internal Medicine.
• American Thyroid Association Guidelines.
• Greenspan's Basic and Clinical Endocrinology.
• UpToDate: Clinical Manifestations and Diagnosis of Hypothyroidism.`,
  },
  {
    id: "dr-q-209",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement: "Paciente masculino de 60 años, con antecedentes de fibrilación auricular en manejo para control del ritmo, consulta por disnea súbita y dolor torácico. Al ingreso presenta hipotensión e hipoxemia. El electrocardiograma muestra patrón S1Q3T3 y la angiotomografía pulmonar evidencia un defecto de llenado en la arteria pulmonar derecha.\n¿Cuál es el siguiente paso más adecuado en el manejo?",
    options: [
      { id: "A", label: "A", text: "Anticoagulación con heparina de bajo peso molecular y manejo ambulatorio." },
      { id: "B", label: "B", text: "Iniciar anticoagulación oral con apixabán." },
      { id: "C", label: "C", text: "Trombólisis sistémica." },
      { id: "D", label: "D", text: "Colocación de filtro de vena cava inferior." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un tromboembolismo pulmonar de alto riesgo (masivo), evidenciado por hipotensión arterial e inestabilidad hemodinámica. En ausencia de contraindicaciones, la trombólisis sistémica constituye el tratamiento de elección.",
    keyPoints: [
      "Cuando veas: Disnea súbita. Dolor torácico. Hipotensión. AngioTAC positiva para TEP.",
      "Debes pensar en: Tromboembolismo pulmonar de alto riesgo.",
      "Tema: Tromboembolismo pulmonar.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el manejo del tromboembolismo pulmonar según el riesgo de mortalidad.
La clave no es el patrón S1Q3T3.
La clave es:
La hipotensión.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Disnea súbita.
• Dolor torácico.
• Hipoxemia.
• Hipotensión.
• Confirmación imagenológica de TEP.
Esto corresponde a:
Tromboembolismo pulmonar de alto riesgo.
¿Por qué la hipotensión es tan importante?
La hipotensión indica:
Compromiso hemodinámico secundario a falla ventricular derecha aguda.
Esto aumenta significativamente:
La mortalidad.
Por ello:
Requiere reperfusión urgente.
¿Cuál es el tratamiento de elección?
En pacientes con:
• PAS <90 mmHg.
• Choque obstructivo.
• Inestabilidad hemodinámica.
La conducta indicada es:
Trombólisis sistémica.
¿Qué medicamentos pueden utilizarse?
Los más empleados son:
• Alteplasa.
• Tenecteplasa.
Su objetivo es:
Disolver rápidamente el trombo.
¿Por qué NO anticoagulación aislada?
La anticoagulación es el tratamiento estándar en:
TEP de riesgo bajo o intermedio.
Sin embargo:
En presencia de choque o hipotensión es insuficiente como único tratamiento.
¿Por qué NO iniciar directamente apixabán?
Los anticoagulantes orales directos tienen indicación en:
Tratamiento posterior y prevención secundaria.
No son la estrategia inicial en un TEP masivo.
¿Por qué NO colocar filtro de vena cava?
Los filtros se reservan principalmente para:
• Contraindicación absoluta para anticoagulación.
• Recurrencia tromboembólica pese a anticoagulación adecuada.
No es la indicación principal en este escenario.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Defecto de llenado en arteria pulmonar."
Y responden:
Anticoagulación.
Sin embargo:
El dato decisivo es:
La hipotensión arterial.
Esto convierte el cuadro en:
TEP de alto riesgo con indicación de trombólisis.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar el diagnóstico.
2.	Valorar estabilidad hemodinámica.
3.	Identificar hipotensión o choque.
4.	Clasificar como TEP de alto riesgo.
5.	Realizar trombólisis sistémica.
Perlas de examen
✅ La hipotensión define un TEP de alto riesgo.
✅ El patrón S1Q3T3 puede observarse en sobrecarga aguda del ventrículo derecho.
✅ La angioTAC es el estudio diagnóstico de elección en pacientes estables.
✅ La trombólisis reduce la obstrucción vascular rápidamente.
✅ La anticoagulación aislada no es suficiente en pacientes inestables.
✅ El ventrículo derecho es el principal determinante pronóstico en el TEP.
✅ El TEP masivo constituye una emergencia cardiovascular.
Referencias
• European Society of Cardiology Guidelines for Pulmonary Embolism.
• CHEST Guidelines for Venous Thromboembolism.
• Harrison's Principles of Internal Medicine.
• Braunwald's Heart Disease.
• UpToDate: Risk Stratification and Initial Management of Acute Pulmonary Embolism.`,
  },
  {
    id: "dr-q-210",
    examArea: "PEDIATRÍA - ALERGOLOGÍA",
    topic: "ALERGOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","alergologia"],
    statement: "Paciente masculino de 15 años es llevado a urgencias tras presentar urticaria generalizada y edema de labios aproximadamente 15 minutos después de ingerir mariscos. Al examen físico presenta hipotensión, taquicardia y estridor laríngeo.\n¿Cuál es el manejo de primera línea?",
    options: [
      { id: "A", label: "A", text: "Hidrocortisona intravenosa." },
      { id: "B", label: "B", text: "Clorfeniramina intravenosa." },
      { id: "C", label: "C", text: "Adrenalina intramuscular." },
      { id: "D", label: "D", text: "Salbutamol inhalado." },
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un cuadro de anafilaxia caracterizado por compromiso cutáneo, respiratorio y cardiovascular tras la exposición a un alérgeno. La adrenalina intramuscular es el tratamiento de primera línea y debe administrarse de forma inmediata.",
    keyPoints: [
      "Cuando veas: Exposición a alérgeno. Urticaria. Angioedema. Hipotensión. Estridor.",
      "Debes pensar en: Anafilaxia.",
      "Tema: Anafilaxia.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las emergencias alérgicas más importantes.
La clave no es la urticaria.
La clave es:
La hipotensión asociada a compromiso respiratorio.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Exposición reciente a mariscos.
• Urticaria generalizada.
• Edema de labios.
• Estridor.
• Hipotensión.
Esto corresponde a:
Anafilaxia.
¿Qué es la anafilaxia?
Es una reacción de hipersensibilidad sistémica grave que puede comprometer:
• Vía aérea.
• Respiración.
• Circulación.
Y puede causar:
Muerte si no se trata oportunamente.
¿Cuál es el tratamiento de elección?
La medida más importante es:
Adrenalina intramuscular.
Debe administrarse en:
La cara anterolateral del muslo.
¿Por qué funciona la adrenalina?
Produce:
• Vasoconstricción.
• Aumento de la presión arterial.
• Disminución del edema laríngeo.
• Broncodilatación.
Por ello:
Es el tratamiento de primera línea.
¿Por qué NO administrar antihistamínicos primero?
Los antihistamínicos:
Mejoran síntomas cutáneos.
Pero:
No corrigen la hipotensión ni el compromiso de la vía aérea.
¿Por qué NO administrar corticoides primero?
Los corticoides tienen:
Inicio de acción tardío.
No son útiles como tratamiento inicial de rescate.
¿Por qué NO usar únicamente salbutamol?
El salbutamol puede mejorar:
Broncoespasmo.
Pero:
No corrige el choque anafiláctico.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Urticaria."
Y responden:
Antihistamínicos.
Sin embargo:
El dato decisivo es:
La presencia de hipotensión y estridor.
Esto define:
Anafilaxia.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer la anafilaxia.
2.	Administrar adrenalina intramuscular.
3.	Asegurar vía aérea.
4.	Administrar oxígeno y líquidos intravenosos.
5.	Añadir antihistamínicos y corticoides como tratamiento complementario.
Perlas de examen
✅ La adrenalina intramuscular es el tratamiento de primera línea en anafilaxia.
✅ No existen contraindicaciones absolutas para administrar adrenalina en una anafilaxia.
✅ La hipotensión indica compromiso cardiovascular.
✅ El estridor sugiere edema de vía aérea superior.
✅ Los antihistamínicos son tratamientos coadyuvantes.
✅ Los corticoides no reemplazan la adrenalina.
✅ El retraso en la administración de adrenalina aumenta la mortalidad.
Referencias
• World Allergy Organization (WAO) Anaphylaxis Guidelines.
• European Academy of Allergy and Clinical Immunology (EAACI) Guidelines.
• Nelson Textbook of Pediatrics.
• Tintinalli's Emergency Medicine.
• UpToDate: Anaphylaxis Recognition and Management.`,
  },
  {
    id: "dr-q-211",
    examArea: "DERMATOLOGÍA",
    topic: "DERMATOLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","dermatologia"],
    statement: "Mujer de 33 años, con antecedente de epilepsia en tratamiento con carbamazepina, consulta por malestar general, fiebre y edema palpebral, seguido de la aparición de un exantema máculo-papular pruriginoso que compromete aproximadamente el 17% de la superficie corporal.\n¿Cuál es el diagnóstico y tratamiento más adecuado?",
    options: [
      { id: "A", label: "A", text: "Síndrome de Stevens-Johnson; suspensión de carbamazepina y manejo de soporte hospitalario." },
      { id: "B", label: "B", text: "Síndrome DRESS; suspensión inmediata de carbamazepina e inicio de corticoides sistémicos." },
      { id: "C", label: "C", text: "Necrólisis epidérmica tóxica; desbridamiento quirúrgico urgente." },
      { id: "D", label: "D", text: "Exantema medicamentoso simple; continuar carbamazepina y administrar antihistamínicos." },
    ],
    correctOptionId: "B",
    explanation: "La combinación de fiebre, edema facial, exantema extenso y exposición a un fármaco de alto riesgo como la carbamazepina es altamente sugestiva de síndrome DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms), una reacción de hipersensibilidad potencialmente grave.",
    keyPoints: [
      "Cuando veas: Carbamazepina. Fiebre. Edema facial o palpebral. Exantema extenso.",
      "Debes pensar en: Síndrome DRESS.",
      "Tema: Reacciones cutáneas graves inducidas por medicamentos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las farmacodermias graves más preguntadas en los exámenes.
La clave no es el exantema.
La clave es:
El edema facial asociado a fiebre.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Exposición a carbamazepina.
• Fiebre.
• Malestar general.
• Edema palpebral.
• Exantema máculo-papular extenso.
Estos hallazgos orientan fuertemente hacia:
Síndrome DRESS.
¿Qué es el síndrome DRESS?
Es una reacción de hipersensibilidad medicamentosa severa caracterizada por:
• Exantema cutáneo.
• Fiebre.
• Eosinofilia.
• Compromiso sistémico.
Puede afectar:
• Hígado.
• Riñones.
• Pulmones.
• Corazón.
¿Cuáles son los medicamentos más asociados?
Los más clásicos son:
• Carbamazepina.
• Fenitoína.
• Lamotrigina.
• Fenobarbital.
• Alopurinol.
¿Por qué el edema facial es importante?
El edema facial o palpebral es uno de los hallazgos más característicos de DRESS y suele aparecer tempranamente.
¿Qué tratamiento debe realizarse?
La conducta inicial es:
• Suspender inmediatamente el medicamento causal.
• Iniciar corticoides sistémicos cuando existe compromiso importante o riesgo de afectación visceral.
¿Por qué NO es síndrome de Stevens-Johnson?
El síndrome de Stevens-Johnson suele caracterizarse por:
• Lesiones en diana atípicas.
• Desprendimiento epidérmico.
• Compromiso mucoso prominente.
Datos que no se describen en este caso.
¿Por qué NO es necrólisis epidérmica tóxica?
La NET se caracteriza por:
• Desprendimiento epidérmico extenso.
• Compromiso >30% de superficie corporal.
No corresponde a la presentación descrita.
¿Por qué NO es un exantema medicamentoso simple?
La presencia de:
• Fiebre.
• Edema facial.
• Afectación sistémica potencial.
Descarta una reacción simple.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Exantema por medicamento."
Y responden:
Exantema medicamentoso simple.
Sin embargo:
El dato decisivo es:
La asociación de fiebre y edema facial con carbamazepina.
Esto orienta a:
Síndrome DRESS.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar el medicamento implicado.
2.	Reconocer fiebre y edema facial.
3.	Sospechar DRESS.
4.	Suspender el fármaco.
5.	Iniciar manejo sistémico oportuno.
Perlas de examen
✅ La carbamazepina es una causa clásica de síndrome DRESS.
✅ El edema facial es uno de los hallazgos más característicos.
✅ La eosinofilia es frecuente pero no indispensable para sospechar el diagnóstico.
✅ El compromiso hepático es la manifestación visceral más común.
✅ La suspensión inmediata del fármaco es obligatoria.
✅ Los corticoides sistémicos suelen emplearse en casos moderados o graves.
✅ El síndrome DRESS puede aparecer semanas después de iniciar el medicamento.
Referencias
• Fitzpatrick's Dermatology.
• Bolognia Dermatology.
• Harrison's Principles of Internal Medicine.
• UpToDate: Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS).
• European Academy of Dermatology and Venereology Guidelines.`,
  },
  {
    id: "dr-q-212",
    examArea: "MEDICINA INTERNA - TOXICOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","toxicologia"],
    statement: "Un hombre de 20 años es encontrado inconsciente tras permanecer toda la noche dentro de una cochera con el motor de un automóvil encendido. Los gases arteriales muestran pH de 7.2, PaO₂ de 190 mmHg y saturación de oxígeno de 88%, mientras que la pulsioximetría registra una saturación de 98%.\n¿Cuál es la explicación más probable para esta disociación?",
    options: [
      { id: "A", label: "A", text: "Metahemoglobinemia secundaria a intoxicación por nitritos." },
      { id: "B", label: "B", text: "Intoxicación por monóxido de carbono con formación de carboxihemoglobina." },
      { id: "C", label: "C", text: "Error técnico de la pulsioximetría por hipotermia." },
      { id: "D", label: "D", text: "Hipoventilación alveolar secundaria a depresión respiratoria." },
    ],
    correctOptionId: "B",
    explanation: "La intoxicación por monóxido de carbono produce formación de carboxihemoglobina, la cual disminuye el transporte de oxígeno sin alterar significativamente la PaO₂. Además, la pulsioximetría convencional no diferencia adecuadamente entre oxihemoglobina y carboxihemoglobina, generando lecturas falsamente normales.",
    keyPoints: [
      "Cuando veas: Exposición a humo o motores encendidos. Alteración del estado de conciencia. PaO₂ normal o elevada. Pulsioximetría falsamente normal.",
      "Debes pensar en: Intoxicación por monóxido de carbono.",
      "Tema: Intoxicación por monóxido de carbono.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los errores diagnósticos más frecuentes en toxicología.
La clave no es la hipoxemia.
La clave es:
La discrepancia entre los gases arteriales y la pulsioximetría.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Exposición prolongada a gases de combustión.
• Alteración del estado de conciencia.
• Acidosis.
• Saturación discordante.
Esto es altamente sugestivo de:
Intoxicación por monóxido de carbono (CO).
¿Cómo actúa el monóxido de carbono?
El CO posee una afinidad por la hemoglobina aproximadamente:
200 a 250 veces mayor que la del oxígeno.
Como consecuencia:
Se forma carboxihemoglobina.
¿Qué ocurre con la PaO₂?
La PaO₂ mide:
Oxígeno disuelto en plasma.
Por ello:
Puede encontrarse normal o incluso elevada.
¿Por qué la pulsioximetría es engañosa?
La mayoría de los pulsioxímetros convencionales:
No distinguen entre oxihemoglobina y carboxihemoglobina.
Como resultado:
Reportan saturaciones falsamente normales o elevadas.
¿Qué examen confirma el diagnóstico?
La prueba diagnóstica de elección es:
Cooximetría arterial o venosa.
La cual permite cuantificar:
Carboxihemoglobina.
¿Por qué NO es metahemoglobinemia?
La metahemoglobinemia suele asociarse a:
• Exposición a oxidantes.
• Saturaciones cercanas a 85%.
• Cianosis persistente.
No al antecedente clásico del caso.
¿Por qué NO es hipoventilación?
La hipoventilación produciría:
Disminución de la PaO₂.
Lo contrario de lo observado.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Saturación 98%."
Y descartan hipoxia.
Sin embargo:
El dato decisivo es:
La exposición a un motor encendido junto con la discordancia gasométrica.
Esto orienta a:
Intoxicación por monóxido de carbono.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la exposición.
2.	Reconocer la alteración neurológica.
3.	Detectar la discordancia entre pulsioximetría y gases arteriales.
4.	Sospechar carboxihemoglobina.
5.	Confirmar mediante cooximetría.
Perlas de examen
✅ El monóxido de carbono produce carboxihemoglobina.
✅ La PaO₂ puede ser normal en la intoxicación por CO.
✅ La pulsioximetría puede ser falsamente normal.
✅ La cooximetría es el método diagnóstico de elección.
✅ El tratamiento inicial es oxígeno al 100%.
✅ Algunos pacientes requieren oxigenoterapia hiperbárica.
✅ La intoxicación por CO es una causa frecuente de muerte accidental por inhalación.
Referencias
• Goldfrank's Toxicologic Emergencies.
• Tintinalli's Emergency Medicine.
• Harrison's Principles of Internal Medicine.
• UpToDate: Carbon Monoxide Poisoning.
• American College of Emergency Physicians Guidelines.`,
  },
  {
    id: "dr-q-213",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Paciente femenina de 25 años, sexualmente activa, con antecedentes de relaciones sexuales de riesgo y no uso habitual de preservativo, consulta por dolor en hipogastrio y dolor pélvico de intensidad fluctuante. Al examen ginecológico se evidencia dolor a la movilización cervical sin dolor anexial.\n¿Cuál es la enfermedad más probable y el tratamiento inicial recomendado?",
    options: [
      { id: "A", label: "A", text: "Embarazo ectópico; manejo quirúrgico urgente." },
      { id: "B", label: "B", text: "Enfermedad inflamatoria pélvica; ceftriaxona más doxiciclina y metronidazol." },
      { id: "C", label: "C", text: "Endometriosis; anticonceptivos orales combinados." },
      { id: "D", label: "D", text: "Quiste ovárico funcional; observación clínica." },
    ],
    correctOptionId: "B",
    explanation: "La presencia de dolor pélvico asociado a dolor a la movilización cervical en una mujer con factores de riesgo para infecciones de transmisión sexual es altamente sugestiva de enfermedad inflamatoria pélvica (EIP). El tratamiento empírico debe iniciarse tan pronto como exista sospecha clínica.",
    keyPoints: [
      "Cuando veas: Mujer joven sexualmente activa. Relaciones sexuales sin preservativo. Dolor pélvico. Dolor a la movilización cervical.",
      "Debes pensar en: Enfermedad inflamatoria pélvica.",
      "Tema: Enfermedad inflamatoria pélvica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los diagnósticos ginecológicos más frecuentes en mujeres jóvenes.
La clave no es el dolor pélvico.
La clave es:
El dolor a la movilización cervical.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Conductas sexuales de riesgo.
• Dolor hipogástrico.
• Dolor pélvico.
• Dolor cervical al tacto bimanual.
Estos hallazgos son altamente sugestivos de:
Enfermedad inflamatoria pélvica.
¿Qué es la EIP?
Corresponde a una infección ascendente del tracto genital femenino superior que puede comprometer:
• Endometrio.
• Trompas de Falopio.
• Ovarios.
• Peritoneo pélvico.
¿Cuáles son los microorganismos más frecuentes?
Los principales agentes implicados son:
• Neisseria gonorrhoeae.
• Chlamydia trachomatis.
Aunque suele ser una infección polimicrobiana.
¿Cuál es el tratamiento inicial?
El esquema ambulatorio recomendado incluye:
• Ceftriaxona.
• Doxiciclina.
• Metronidazol.
Este tratamiento cubre:
• Gonococo.
• Chlamydia.
• Anaerobios.
¿Por qué NO es embarazo ectópico?
Aunque puede producir dolor pélvico:
No existe información sugestiva de embarazo y el hallazgo característico es:
Dolor a la movilización cervical en un contexto de riesgo infeccioso.
¿Por qué NO es endometriosis?
La endometriosis suele producir:
• Dolor crónico.
• Dismenorrea.
• Dispareunia.
No se asocia típicamente a:
Dolor cervical sugestivo de infección.
¿Por qué NO es un quiste funcional?
No explica adecuadamente:
Los factores de riesgo sexuales ni el dolor a la movilización cervical.
¿Cuál es la trampa de examen?
Muchos estudiantes se enfocan en:
El dolor pélvico.
Sin embargo:
El dato decisivo es:
El dolor a la movilización cervical.
Este hallazgo es clásico de:
Enfermedad inflamatoria pélvica.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar factores de riesgo sexuales.
2.	Reconocer dolor pélvico.
3.	Buscar dolor a la movilización cervical.
4.	Sospechar EIP.
5.	Iniciar tratamiento antibiótico empírico.
Perlas de examen
✅ El dolor a la movilización cervical es un criterio clínico importante para EIP.
✅ El tratamiento no debe retrasarse esperando resultados microbiológicos.
✅ Chlamydia y Gonococo son los agentes más frecuentes.
✅ El metronidazol mejora la cobertura frente a anaerobios.
✅ La EIP puede causar infertilidad tubárica.
✅ El retraso terapéutico aumenta el riesgo de complicaciones.
✅ Toda mujer joven con dolor pélvico debe evaluarse para EIP.
Referencias
• CDC Sexually Transmitted Infections Treatment Guidelines.
• ACOG Practice Bulletin: Pelvic Inflammatory Disease.
• Novak's Gynecology.
• Williams Gynecology.
• UpToDate: Pelvic Inflammatory Disease.`,
  },
  {
    id: "dr-q-214",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement: "Joven de 16 años presenta episodios recurrentes de cefalea unilateral, pulsátil, acompañada de náuseas y fotofobia. Refiere que los síntomas suelen desencadenarse o exacerbarse después de realizar actividad física intensa.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Cefalea tensional." },
      { id: "B", label: "B", text: "Migraña." },
      { id: "C", label: "C", text: "Cefalea en racimos." },
      { id: "D", label: "D", text: "Hipertensión intracraneal idiopática." },
    ],
    correctOptionId: "B",
    explanation: "La migraña se caracteriza por episodios recurrentes de cefalea pulsátil, habitualmente unilateral, asociada a náuseas, fotofobia y empeoramiento con la actividad física.",
    keyPoints: [
      "Cuando veas: Cefalea unilateral. Dolor pulsátil. Náuseas. Fotofobia. Empeoramiento con ejercicio.",
      "Debes pensar en: Migraña.",
      "Tema: Migraña.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el reconocimiento clínico de la migraña.
La clave no es la edad.
La clave es:
La combinación de cefalea pulsátil con síntomas asociados.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Cefalea recurrente.
• Localización unilateral.
• Carácter pulsátil.
• Náuseas.
• Fotofobia.
• Empeoramiento con actividad física.
Estos hallazgos son característicos de:
Migraña.
¿Cuáles son las características típicas de la migraña?
Generalmente presenta:
• Dolor unilateral.
• Intensidad moderada o severa.
• Carácter pulsátil.
• Empeoramiento con actividad física.
• Náuseas o vómitos.
• Fotofobia y fonofobia.
¿Por qué el ejercicio empeora el dolor?
La actividad física aumenta:
La percepción del dolor durante la crisis migrañosa.
Por ello muchos pacientes:
Prefieren permanecer en reposo.
¿Por qué NO es cefalea tensional?
La cefalea tensional suele ser:
• Opresiva.
• Bilateral.
• No pulsátil.
Además:
No suele asociarse a náuseas importantes.
¿Por qué NO es cefalea en racimos?
La cefalea en racimos se caracteriza por:
• Dolor orbitario intenso.
• Lagrimeo.
• Congestión nasal.
No corresponde al cuadro descrito.
¿Por qué NO es hipertensión intracraneal idiopática?
Suele asociarse a:
• Papiledema.
• Alteraciones visuales.
• Cefalea más persistente.
No a episodios típicos de migraña.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Cefalea después del gimnasio."
Y responden:
Cefalea por esfuerzo.
Sin embargo:
El dato decisivo es:
La presencia de náuseas y fotofobia asociadas.
Esto orienta a:
Migraña.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar cefalea recurrente.
2.	Reconocer el carácter pulsátil.
3.	Buscar síntomas acompañantes.
4.	Evaluar desencadenantes.
5.	Diagnosticar migraña.
Perlas de examen
✅ La migraña suele ser unilateral y pulsátil.
✅ Las náuseas y la fotofobia son síntomas clásicos.
✅ La actividad física suele empeorar la crisis.
✅ Puede existir aura, aunque no es obligatoria.
✅ Es una de las cefaleas primarias más frecuentes.
✅ El diagnóstico es fundamentalmente clínico.
✅ Los desencadenantes incluyen estrés, ejercicio intenso, ayuno y privación de sueño.
Referencias
• International Classification of Headache Disorders (ICHD-3).
• Adams and Victor's Principles of Neurology.
• Harrison's Principles of Internal Medicine.
• American Headache Society Guidelines.
• UpToDate: Migraine in Adults.`,
  },
  {
    id: "dr-q-215",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement: "Paciente de 40 años, sin antecedentes de importancia, consulta por cefalea recurrente localizada en región occipital y cervical. Refiere que los episodios suelen aparecer durante periodos de alta carga laboral y estrés. Ha utilizado analgésicos con mejoría parcial de los síntomas.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Migraña." },
      { id: "B", label: "B", text: "Cefalea tensional." },
      { id: "C", label: "C", text: "Cefalea en racimos." },
      { id: "D", label: "D", text: "Neuralgia occipital." },
    ],
    correctOptionId: "B",
    explanation: "La cefalea tensional es la cefalea primaria más frecuente. Se caracteriza por dolor opresivo, habitualmente bilateral, localizado en región occipital, frontal o cervical, estrechamente relacionado con estrés emocional o tensión muscular.",
    keyPoints: [
      "Cuando veas: Estrés laboral. Dolor occipital o cervical. Cefalea recurrente. Mejoría parcial con analgésicos.",
      "Debes pensar en: Cefalea tensional.",
      "Tema: Cefaleas primarias.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la cefalea primaria más frecuente en la práctica clínica.
La clave no es la localización.
La clave es:
La asociación con estrés.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Cefalea recurrente.
• Localización occipital y cervical.
• Relación con estrés laboral.
• Ausencia de síntomas neurológicos asociados.
Estos hallazgos son compatibles con:
Cefalea tensional.
¿Cuáles son las características de la cefalea tensional?
Habitualmente presenta:
• Dolor opresivo.
• Sensación de banda o presión.
• Intensidad leve o moderada.
• Localización bilateral.
• Relación con estrés o fatiga.
Generalmente:
No empeora con la actividad física.
¿Por qué aparece en región cervical?
La tensión muscular de:
• Cuello.
• Hombros.
• Región occipital.
Participa en la fisiopatología del cuadro.
¿Por qué NO es migraña?
La migraña suele asociarse a:
• Náuseas.
• Fotofobia.
• Dolor pulsátil.
• Empeoramiento con ejercicio.
Datos ausentes en este caso.
¿Por qué NO es cefalea en racimos?
La cefalea en racimos produce:
• Dolor orbitario intenso.
• Lagrimeo.
• Rinorrea.
No corresponde al cuadro descrito.
¿Por qué NO es neuralgia occipital?
La neuralgia occipital suele manifestarse como:
Dolor lancinante o eléctrico.
No como cefalea relacionada con estrés.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Región occipital."
Y responden:
Neuralgia occipital.
Sin embargo:
El dato decisivo es:
La relación con estrés laboral.
Esto orienta a:
Cefalea tensional.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar el patrón de cefalea.
2.	Buscar factores desencadenantes.
3.	Evaluar síntomas acompañantes.
4.	Diferenciar cefaleas primarias.
5.	Diagnosticar cefalea tensional.
Perlas de examen
✅ La cefalea tensional es la cefalea primaria más frecuente.
✅ El estrés emocional es uno de los principales desencadenantes.
✅ El dolor suele ser opresivo y no pulsátil.
✅ Generalmente no se acompaña de náuseas ni vómitos.
✅ La exploración neurológica suele ser normal.
✅ Puede asociarse a contractura muscular cervical.
✅ El manejo incluye medidas no farmacológicas y analgésicos simples.
Referencias
• International Classification of Headache Disorders (ICHD-3).
• Adams and Victor's Principles of Neurology.
• Harrison's Principles of Internal Medicine.
• American Headache Society Guidelines.
• UpToDate: Tension-Type Headache in Adults.`,
  },
  {
    id: "dr-q-216",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement: "Paciente de 27 años consulta de forma recurrente al servicio de urgencias por episodios de dolor retroocular intenso, asociado a inyección conjuntival y epífora ipsilateral. Refiere múltiples consultas previas por el mismo cuadro. Durante una de las atenciones, un residente de neurología indica oxígeno suplementario, con mejoría rápida y significativa de los síntomas.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Migraña." },
      { id: "B", label: "B", text: "Neuralgia del trigémino." },
      { id: "C", label: "C", text: "Cefalea en racimos." },
      { id: "D", label: "D", text: "Cefalea tensional." },
    ],
    correctOptionId: "C",
    explanation: "La cefalea en racimos se caracteriza por crisis recurrentes de dolor orbitario o retroorbitario extremadamente intenso, asociado a síntomas autonómicos ipsilaterales como lagrimeo, inyección conjuntival y congestión nasal. El oxígeno al 100% es uno de los tratamientos abortivos de elección.",
    keyPoints: [
      "Cuando veas: Dolor retroocular intenso. Epífora. Inyección conjuntival. Mejoría con oxígeno.",
      "Debes pensar en: Cefalea en racimos.",
      "Tema: Cefaleas trigémino-autonómicas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las cefaleas primarias más incapacitantes.
La clave no es el dolor.
La clave es:
Los síntomas autonómicos asociados.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Dolor retroocular severo.
• Lagrimeo.
• Inyección conjuntival.
• Episodios recurrentes.
• Respuesta al oxígeno.
Estos hallazgos son característicos de:
Cefalea en racimos.
¿Por qué se llama cefalea en racimos?
Porque los episodios suelen agruparse en:
Períodos o "racimos" de semanas o meses.
Durante estos períodos:
Las crisis pueden repetirse varias veces al día.
¿Cuáles son los síntomas autonómicos típicos?
Los más frecuentes son:
• Epífora.
• Inyección conjuntival.
• Congestión nasal.
• Rinorrea.
• Ptosis.
• Miosis.
Todos del mismo lado del dolor.
¿Por qué mejora con oxígeno?
El oxígeno al 100%:
Es uno de los tratamientos abortivos más eficaces.
Produce alivio rápido en muchos pacientes.
¿Qué otros tratamientos se utilizan?
Para abortar la crisis:
• Oxígeno.
• Sumatriptán.
Para prevención:
• Verapamilo.
¿Por qué NO es migraña?
La migraña suele asociarse a:
• Náuseas.
• Fotofobia.
• Dolor pulsátil.
Y no suele presentar:
Síntomas autonómicos tan marcados.
¿Por qué NO es neuralgia del trigémino?
La neuralgia produce:
Dolor eléctrico de segundos de duración.
No crisis prolongadas con lagrimeo e inyección conjuntival.
¿Por qué NO es cefalea tensional?
La cefalea tensional es:
Opresiva y menos intensa.
No produce síntomas autonómicos.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Dolor ocular."
Y responden:
Migraña.
Sin embargo:
El dato decisivo es:
La combinación de epífora, inyección conjuntival y mejoría con oxígeno.
Esto orienta directamente a:
Cefalea en racimos.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar dolor orbitario intenso.
2.	Buscar síntomas autonómicos ipsilaterales.
3.	Reconocer el patrón recurrente.
4.	Recordar la respuesta al oxígeno.
5.	Diagnosticar cefalea en racimos.
Perlas de examen
✅ La cefalea en racimos es una cefalea trigémino-autonómica.
✅ El dolor suele ser orbitario o retroorbitario.
✅ El lagrimeo y la inyección conjuntival son hallazgos clásicos.
✅ El oxígeno al 100% es tratamiento abortivo de elección.
✅ El sumatriptán también es altamente eficaz.
✅ El verapamilo es el tratamiento preventivo más utilizado.
✅ Se considera una de las cefaleas más dolorosas descritas en medicina.
Referencias
• International Classification of Headache Disorders (ICHD-3).
• Adams and Victor's Principles of Neurology.
• Harrison's Principles of Internal Medicine.
• American Headache Society Guidelines.
• UpToDate: Cluster Headache.`,
  },
  {
    id: "dr-q-217",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement: "Posterior a un atraco callejero, una mujer consulta por imposibilidad para extender la muñeca, asociada a dolor en la región dorsal del antebrazo. Al examen físico presenta disminución del reflejo tricipital. Días después recupera completamente la movilidad de la extremidad.\n¿Cuál es la lesión neurológica más probable?",
    options: [
      { id: "A", label: "A", text: "Neuropraxia del nervio radial." },
      { id: "B", label: "B", text: "Axonotmesis del nervio cubital." },
      { id: "C", label: "C", text: "Neurotmesis del nervio mediano." },
      { id: "D", label: "D", text: "Lesión del nervio musculocutáneo." },
    ],
    correctOptionId: "A",
    explanation: "La combinación de \"muñeca caída\", compromiso transitorio del reflejo tricipital y recuperación completa posterior es característica de una neuropraxia del nervio radial, la forma más leve de lesión nerviosa periférica.",
    keyPoints: [
      "Cuando veas: Imposibilidad para extender la muñeca. Dolor dorsal del antebrazo. Recuperación espontánea. Déficit neurológico transitorio.",
      "Debes pensar en: Neuropraxia del nervio radial.",
      "Tema: Lesiones de nervios periféricos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa las lesiones traumáticas de nervios periféricos.
La clave no es el trauma.
La clave es:
La recuperación completa de la función.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Déficit motor radial.
• Alteración refleja.
• Recuperación posterior.
Esto corresponde a:
Neuropraxia.
¿Qué es una neuropraxia?
Es la lesión nerviosa más leve según la clasificación de Seddon.
Se caracteriza por:
• Bloqueo transitorio de la conducción nerviosa.
• Ausencia de degeneración axonal.
• Recuperación completa.
¿Por qué el nervio radial?
El nervio radial controla:
• Extensión de muñeca.
• Extensión de dedos.
• Extensión de codo (parcialmente).
La lesión produce:
La clásica "muñeca caída".
¿Por qué NO es axonotmesis?
La axonotmesis implica:
Daño axonal con degeneración walleriana.
La recuperación es:
Más lenta y generalmente incompleta en fases iniciales.
¿Por qué NO es neurotmesis?
La neurotmesis corresponde a:
Sección completa del nervio.
No presenta:
Recuperación espontánea temprana.
¿Por qué NO es lesión del nervio musculocutáneo?
El nervio musculocutáneo afecta principalmente:
• Flexión del codo.
• Sensibilidad lateral del antebrazo.
No explica:
La incapacidad para extender la muñeca.
¿Cuál es la trampa de examen?
Muchos estudiantes identifican:
La lesión del nervio radial.
Pero olvidan clasificar:
El tipo de lesión nerviosa.
El dato decisivo es:
La recuperación completa posterior.
Esto orienta a:
Neuropraxia.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar el déficit motor.
2.	Localizar el nervio comprometido.
3.	Evaluar la evolución clínica.
4.	Reconocer la recuperación espontánea.
5.	Diagnosticar neuropraxia.
Perlas de examen
✅ La neuropraxia es la lesión nerviosa periférica más leve.
✅ Existe bloqueo de conducción sin lesión axonal.
✅ La recuperación suele ser completa.
✅ El nervio radial es el más asociado a la "muñeca caída".
✅ La neurotmesis es la lesión más grave.
✅ La axonotmesis implica degeneración walleriana.
✅ La evolución clínica es fundamental para diferenciar los tipos de lesión nerviosa.
Referencias
• Adams and Victor's Principles of Neurology.
• Bradley's Neurology in Clinical Practice.
• Greenberg's Handbook of Neurosurgery.
• Moore Clinically Oriented Anatomy.
• UpToDate: Peripheral Nerve Injury Classification and Evaluation.`,
  },
  {
    id: "dr-q-218",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Primigestante de 26 años con embarazo de 37 semanas acude a control prenatal. La ecografía obstétrica reporta un peso fetal estimado en percentil 4 e índice de líquido amniótico de 6 cm. La paciente se encuentra asintomática, hemodinámicamente estable y sin trabajo de parto.\n¿Cuál es el manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Continuar control prenatal habitual y repetir ecografía en 4 semanas." },
      { id: "B", label: "B", text: "Hospitalización y maduración pulmonar fetal." },
      { id: "C", label: "C", text: "Interrupción inmediata del embarazo." },
      { id: "D", label: "D", text: "Realizar estudio Doppler fetal-materno para estratificación del riesgo y definir conducta obstétrica." },
    ],
    correctOptionId: "D",
    explanation: "La paciente presenta un feto pequeño para la edad gestacional (PEG), ya que el peso fetal estimado se encuentra por debajo del percentil 10. Sin embargo, un percentil 4 por sí solo no establece necesariamente una restricción del crecimiento intrauterino (RCIU) severa. Antes de decidir la interrupción del embarazo, es fundamental evaluar la circulación útero-placentaria y fetal mediante Doppler.",
    keyPoints: [
      "Cuando veas: Peso fetal estimado entre percentil 3 y 10. Embarazo a término. Paciente clínicamente estable. Sin datos de compromiso fetal agudo.",
      "Debes pensar en: Completar estudio con Doppler obstétrico.",
      "Tema: Feto pequeño para la edad gestacional y restricción del crecimiento fetal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los errores más frecuentes en obstetricia:
Confundir un feto pequeño para la edad gestacional con una restricción del crecimiento fetal establecida.
La clave no es la edad gestacional.
La clave es:
Que aún no se ha documentado compromiso hemodinámico fetal.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Embarazo de 37 semanas.
• Peso fetal estimado en percentil 4.
• Índice de líquido amniótico de 6 cm.
• Ausencia de síntomas maternos.
• Sin evidencia de sufrimiento fetal.
Con estos datos:
No puede concluirse automáticamente que exista una RCIU severa que obligue a finalizar la gestación.
¿Qué debe hacerse primero?
La siguiente conducta es:
Realizar Doppler obstétrico.
Idealmente evaluando:
• Arterias uterinas.
• Arteria umbilical.
• Arteria cerebral media.
• Relación cerebroplacentaria.
¿Por qué es importante el Doppler?
Porque permite diferenciar:
• Un feto constitucionalmente pequeño (PEG).
• Una verdadera restricción del crecimiento fetal secundaria a insuficiencia placentaria.
Esta diferenciación modifica completamente la conducta.
¿Cuándo se considera RCIU severa?
Las definiciones pueden variar según las guías, pero clásicamente:
• Percentil <3 es altamente sugestivo de RCIU severa.
• Percentiles entre 3 y 10 requieren evaluación Doppler para clasificación adecuada.
¿Por qué NO debe interrumpirse inmediatamente el embarazo?
Porque:
No existe evidencia presentada de deterioro fetal.
La interrupción debe basarse en:
• Hallazgos Doppler.
• Bienestar fetal.
• Perfil biofísico.
• Monitoreo fetal.
No únicamente en un percentil aislado.
¿Por qué NO continuar control rutinario?
Porque un percentil 4 requiere estudio adicional.
No es una gestación de bajo riesgo.
¿Por qué NO administrar maduración pulmonar?
Porque:
La paciente tiene 37 semanas.
La maduración pulmonar no está indicada en este contexto.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Percentil 4."
Y responden:
"Interrumpir embarazo."
Sin embargo:
El dato decisivo es que aún no se dispone de evaluación Doppler.
Antes de decidir la finalización del embarazo debe determinarse si existe insuficiencia placentaria.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar el percentil fetal.
2.	Diferenciar PEG de RCIU.
3.	Solicitar Doppler fetal-materno.
4.	Estratificar riesgo fetal.
5.	Definir conducta obstétrica según resultados.
Perlas de examen
✅ Un peso fetal estimado < percentil 10 define un feto pequeño para la edad gestacional.
✅ Un percentil <3 es altamente sugestivo de restricción del crecimiento fetal severa.
✅ Los percentiles entre 3 y 10 requieren evaluación Doppler.
✅ El Doppler de arteria umbilical es fundamental para valorar insuficiencia placentaria.
✅ La relación cerebroplacentaria aporta información pronóstica importante.
✅ No todo feto pequeño requiere interrupción inmediata del embarazo.
✅ La conducta obstétrica depende de la evaluación hemodinámica fetal y no únicamente del percentil de crecimiento.
Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Fetal Growth Restriction.
• ISUOG Practice Guidelines: Diagnosis and Management of Small-for-Gestational-Age Fetus and Fetal Growth Restriction.
• FIGO Guidelines on Fetal Growth Restriction.
• UpToDate: Fetal Growth Restriction: Evaluation and Management.`,
  },
  {
    id: "dr-q-219",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Paciente de 37 años, multigestante G5A2C2V2, con embarazo de 29 semanas, acude a control prenatal. En la prueba de tolerancia oral a la glucosa presenta los siguientes resultados: glucemia en ayunas 92 mg/dL, glucemia a la hora 213 mg/dL y glucemia a las 2 horas 150 mg/dL.\n¿Cuál es el plan de manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Continuar control prenatal habitual y repetir la curva de tolerancia en 4 semanas." },
      { id: "B", label: "B", text: "Iniciar insulinoterapia de forma inmediata." },
      { id: "C", label: "C", text: "Diagnosticar diabetes gestacional, iniciar cambios en el estilo de vida y automonitoreo glucémico." },
      { id: "D", label: "D", text: "Diagnosticar diabetes pregestacional y finalizar la gestación." },
    ],
    correctOptionId: "C",
    explanation: "La paciente cumple criterios diagnósticos de diabetes gestacional. El manejo inicial consiste en intervención nutricional, ejercicio físico adaptado al embarazo y monitorización glucémica. La insulinoterapia se reserva para pacientes que no alcanzan metas glucémicas con medidas no farmacológicas.",
    keyPoints: [
      "Cuando veas: PTOG alterada. Embarazo entre 24 y 28 semanas o posterior. Al menos un valor diagnóstico.",
      "Debes pensar en: Diabetes gestacional.",
      "Tema: Diabetes gestacional.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el diagnóstico y manejo inicial de la diabetes gestacional.
La clave no es la edad materna.
La clave es:
Interpretar correctamente la curva de tolerancia.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Ayunas: 92 mg/dL.
• 1 hora: 213 mg/dL.
• 2 horas: 150 mg/dL.
Según los criterios IADPSG/OMS:
Se diagnostica diabetes gestacional cuando se cumple uno o más de los siguientes:
• Ayunas ≥ 92 mg/dL.
• 1 hora ≥ 180 mg/dL.
• 2 horas ≥ 153 mg/dL.
La paciente cumple:
• Ayunas diagnósticas.
• Glucemia a la hora del diagnóstico.
Por tanto:
Presenta diabetes gestacional.
¿Cuál es el manejo inicial?
La primera intervención consiste en:
• Educación nutricional.
• Plan alimentario individualizado.
• Actividad física según condición obstétrica.
• Automonitoreo glucémico.
¿Qué metas glucémicas se buscan?
Generalmente:
• Ayunas <95 mg/dL.
• 1 hora posprandial <140 mg/dL.
• 2 horas posprandial <120 mg/dL.
¿Cuándo se utiliza insulina?
Cuando:
Las metas glucémicas no se alcanzan con medidas no farmacológicas.
O existe:
Hiperglucemia importante desde el diagnóstico.
¿Por qué NO iniciar insulina inmediatamente?
Porque:
La mayoría de las pacientes deben iniciar primero manejo conservador.
La respuesta terapéutica se evalúa posteriormente.
¿Por qué NO repetir la curva?
El diagnóstico ya está establecido.
No se requiere repetir la prueba.
¿Por qué NO es diabetes pregestacional?
No existen criterios diagnósticos de diabetes manifiesta en el embarazo.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
Glucemia >200 mg/dL a la hora.
Y responden:
Insulinoterapia inmediata.
Sin embargo:
La pregunta solicita el plan inicial.
Y el manejo inicial es:
Cambios en estilo de vida y monitorización glucémica.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Interpretar la PTOG.
2.	Confirmar diabetes gestacional.
3.	Iniciar medidas no farmacológicas.
4.	Realizar automonitoreo.
5.	Escalar a insulina si no se alcanzan metas.
Perlas de examen
✅ Un solo valor alterado en la PTOG es suficiente para el diagnóstico.
✅ La diabetes gestacional aumenta el riesgo de macrosomía fetal.
✅ El tratamiento inicial es nutricional y conductual.
✅ La insulina es el tratamiento farmacológico de elección cuando se requiere.
✅ El control glucémico reduce complicaciones maternas y fetales.
✅ Debe realizarse seguimiento obstétrico estrecho.
✅ Toda paciente con diabetes gestacional requiere reevaluación metabólica posparto.
Referencias
• American Diabetes Association (ADA) Standards of Care.
• ACOG Practice Bulletin: Gestational Diabetes Mellitus.
• Williams Obstetrics.
• FIGO Guidelines on Gestational Diabetes.
• UpToDate: Gestational Diabetes Mellitus: Screening, Diagnosis and Management.`,
  },
  {
    id: "dr-q-220",
    examArea: "ORTOPEDIA Y TRAUMATOLOGÍA",
    topic: "ORTOPEDIA Y TRAUMATOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ortopedia_y_traumatologia"],
    statement: "Un hombre presenta una fractura desplazada de la diáfisis media del húmero asociada a lesión del nervio radial.\n¿Cuál de los siguientes hallazgos clínicos es más probable encontrar?",
    options: [
      { id: "A", label: "A", text: "Incapacidad para extender la muñeca y los dedos, con hipoestesia en el dorso de la mano." },
      { id: "B", label: "B", text: "Incapacidad para flexionar los dedos cuarto y quinto, con hipoestesia del borde cubital de la mano." },
      { id: "C", label: "C", text: "Pérdida de la oposición del pulgar e hipoestesia de los tres primeros dedos." },
      { id: "D", label: "D", text: "Debilidad para la abducción del hombro con pérdida de sensibilidad en la cara lateral del hombro." },
    ],
    correctOptionId: "A",
    explanation: "La lesión del nervio radial en una fractura de la diáfisis humeral produce clásicamente \"muñeca caída\" debido a la pérdida de la extensión de la muñeca y los dedos, asociada a alteraciones sensitivas en el territorio radial.",
    keyPoints: [
      "Cuando veas: Fractura de diáfisis humeral. Lesión del nervio radial. Déficit motor distal.",
      "Debes pensar en: Muñeca caída.",
      "Tema: Lesiones nerviosas periféricas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la lesión nerviosa más frecuentemente asociada a las fracturas del húmero.
La clave no es la fractura.
La clave es:
El nervio comprometido.
¿Qué está ocurriendo realmente?
El nervio radial discurre por:
El surco espiral del húmero.
Por ello:
Las fracturas de la diáfisis media humeral pueden lesionarlo fácilmente.
¿Cuál es el déficit motor típico?
El nervio radial inerva:
• Extensores de la muñeca.
• Extensores de los dedos.
• Supinadores del antebrazo.
Su lesión produce:
• Muñeca caída.
• Imposibilidad para extender los dedos.
• Debilidad en la extensión del pulgar.
¿Cuál es el déficit sensitivo?
La alteración sensitiva clásica compromete:
• Dorso radial de la mano.
• Primer espacio interdigital dorsal.
¿Qué es la "muñeca caída"?
Es la incapacidad para mantener la muñeca en extensión debido a la parálisis de los músculos extensores.
Es uno de los hallazgos más preguntados en exámenes.
¿Por qué NO es nervio cubital?
El nervio cubital produce:
• Garra cubital.
• Déficit sensitivo del quinto dedo.
No muñeca caída.
¿Por qué NO es nervio mediano?
La lesión del mediano produce:
• Alteración de la oposición del pulgar.
• Mano de simio.
No pérdida de la extensión de muñeca.
¿Por qué NO es nervio axilar?
La lesión axilar afecta:
• Deltoides.
• Sensibilidad del hombro.
No la función extensora de la muñeca.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan:
"Fractura de húmero."
Pero olvidan:
Qué nervio se relaciona con la diáfisis media.
El dato decisivo es:
La lesión del nervio radial.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la localización de la fractura.
2.	Relacionar el nervio lesionado.
3.	Evaluar función motora.
4.	Buscar muñeca caída.
5.	Confirmar compromiso sensitivo radial.
Perlas de examen
✅ El nervio radial es el nervio más frecuentemente lesionado en fracturas de diáfisis humeral.
✅ La muñeca caída es el hallazgo clínico clásico.
✅ El primer espacio interdigital dorsal es clave para la exploración sensitiva.
✅ El nervio radial recorre el surco espiral del húmero.
✅ La mayoría de las lesiones son neuropraxias.
✅ La recuperación espontánea es frecuente.
✅ Siempre debe documentarse el examen neurovascular antes y después de la reducción.
Referencias
• Campbell's Operative Orthopaedics.
• Rockwood and Green's Fractures in Adults.
• Moore Clinically Oriented Anatomy.
• Greenberg's Handbook of Neurosurgery.
• UpToDate: Radial Nerve Injury Associated with Humeral Shaft Fractures.`,
  },
  {
    id: "dr-q-221",
    examArea: "ORTOPEDIA Y TRAUMATOLOGÍA",
    topic: "ORTOPEDIA Y TRAUMATOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ortopedia_y_traumatologia"],
    statement: "Paciente de 15 años consulta a urgencias tras sufrir un trauma en la muñeca. Se realiza radiografía anteroposterior (AP) sin evidencia de fracturas. Debido a la persistencia de la sospecha clínica de lesión ósea, se decide complementar el estudio radiológico.\n¿Cuál es la proyección radiográfica adicional más recomendada para descartar lesiones ocultas?",
    options: [
      { id: "A", label: "A", text: "Proyección lateral de muñeca." },
      { id: "B", label: "B", text: "Proyección oblicua de muñeca." },
      { id: "C", label: "C", text: "Proyección AP comparativa de ambas muñecas." },
      { id: "D", label: "D", text: "Proyección de escafoides (Stecher)." },
    ],
    correctOptionId: "D",
    explanation: "La fractura de escafoides es una de las lesiones ocultas más frecuentes tras trauma de muñeca. Cuando existe sospecha clínica y la radiografía AP inicial es normal, debe solicitarse una proyección específica para escafoides.",
    keyPoints: [
      "Cuando veas: Trauma de muñeca. Radiografía inicial normal. Persistencia de sospecha clínica.",
      "Debes pensar en: Fractura oculta de escafoides.",
      "Tema: Trauma de muñeca.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las fracturas más frecuentemente pasadas por alto en urgencias.
La clave no es la radiografía normal.
La clave es:
La sospecha clínica persistente.
¿Qué está ocurriendo realmente?
Tras un trauma de muñeca:
La radiografía AP inicial puede ser normal.
Sin embargo:
Algunas fracturas del escafoides pueden no visualizarse inicialmente.
¿Qué proyección debe solicitarse?
La proyección de Stecher:
Optimiza la visualización del escafoides.
Y aumenta:
La sensibilidad diagnóstica.
¿Por qué es importante diagnosticarla?
Porque el escafoides posee:
Irrigación retrógrada.
Las fracturas no diagnosticadas pueden evolucionar a:
• Pseudoartrosis.
• Necrosis avascular.
¿Por qué NO basta con la AP?
Porque:
Muchas fracturas no desplazadas pasan desapercibidas.
¿Por qué NO elegir únicamente la lateral?
La lateral complementa el estudio.
Pero:
La proyección específica de escafoides es más útil cuando se sospecha esta lesión.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Radiografía normal."
Y concluyen:
Ausencia de fractura.
Sin embargo:
El dato decisivo es:
La necesidad de descartar una lesión oculta.
Esto orienta a:
Proyección específica de escafoides.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar el trauma de muñeca.
2.	Evaluar sospecha clínica.
3.	Reconocer que la AP puede ser normal.
4.	Solicitar proyección de escafoides.
5.	Considerar inmovilización si persiste la sospecha.
Perlas de examen
✅ El escafoides es el hueso del carpo que más se fractura.
✅ La radiografía inicial puede ser normal.
✅ La proyección de Stecher mejora la visualización del escafoides.
✅ La necrosis avascular es una complicación clásica.
✅ La pseudoartrosis es frecuente cuando el diagnóstico se retrasa.
✅ El dolor en tabaquera anatómica aumenta la sospecha diagnóstica.
✅ Ante alta sospecha clínica debe inmovilizarse aunque la radiografía sea normal.
Referencias
• Rockwood and Green's Fractures in Adults.
• Campbell's Operative Orthopaedics.
• AO Trauma Principles.
• Moore Clinically Oriented Anatomy.
• UpToDate: Scaphoid Fractures.`,
  },
  {
    id: "dr-q-222",
    examArea: "DERMATOLOGÍA",
    topic: "DERMATOLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","dermatologia"],
    statement: "Un hombre de 80 años consulta por la aparición de placas amarillentas, pruriginosas y descamativas en cuero cabelludo y región de la barba.\n¿Cuál es el diagnóstico más probable y cuál es el agente etiológico más asociado?",
    options: [
      { id: "A", label: "A", text: "Psoriasis; Streptococcus pyogenes." },
      { id: "B", label: "B", text: "Dermatitis seborreica; Malassezia furfur." },
      { id: "C", label: "C", text: "Tiña capitis; Trichophyton rubrum." },
      { id: "D", label: "D", text: "Dermatitis atópica; Staphylococcus aureus." },
    ],
    correctOptionId: "B",
    explanation: "La dermatitis seborreica es una dermatosis inflamatoria crónica caracterizada por placas eritematodescamativas con escamas amarillentas y grasosas en áreas ricas en glándulas sebáceas. Se ha asociado a la proliferación de levaduras del género Malassezia.",
    keyPoints: [
      "Cuando veas: Escamas amarillentas. Cuero cabelludo. Barba. Prurito.",
      "Debes pensar en: Dermatitis seborreica.",
      "Tema: Dermatitis seborreica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las enfermedades dermatológicas más frecuentes.
La clave no es el prurito.
La clave es:
La localización y el aspecto de las escamas.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Placas descamativas.
• Escamas amarillentas y grasosas.
• Cuero cabelludo.
• Región de la barba.
Estos hallazgos son característicos de:
Dermatitis seborreica.
¿Cuál es el agente asociado?
La enfermedad se relaciona con:
Levaduras lipofílicas del género Malassezia.
Clásicamente en los exámenes se menciona:
Malassezia furfur.
¿Dónde aparece con mayor frecuencia?
En zonas ricas en glándulas sebáceas:
• Cuero cabelludo.
• Surcos nasogenianos.
• Cejas.
• Conducto auditivo externo.
• Región preesternal.
• Barba.
¿Por qué NO es psoriasis?
La psoriasis suele presentar:
• Escamas blanquecinas o plateadas.
• Bordes bien definidos.
Además:
Es menos frecuente que comprometa predominantemente barba y áreas seborreicas.
¿Por qué NO es tiña capitis?
La tiña suele asociarse a:
• Alopecia localizada.
• Cabellos rotos.
• Dermatofitos.
No a escamas grasosas amarillentas.
¿Por qué NO es dermatitis atópica?
La dermatitis atópica se caracteriza por:
• Xerosis intensa.
• Antecedentes atópicos.
• Distribución flexural.
No por placas seborreicas típicas.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Placas descamativas."
Y responden:
Psoriasis.
Sin embargo:
El dato decisivo es:
La presencia de escamas amarillentas y grasosas en áreas seborreicas.
Esto orienta a:
Dermatitis seborreica.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la localización.
2.	Evaluar el tipo de escama.
3.	Reconocer áreas seborreicas.
4.	Asociar Malassezia.
5.	Diagnosticar dermatitis seborreica.
Perlas de examen
✅ La dermatitis seborreica se asocia a Malassezia spp.
✅ Las escamas suelen ser amarillentas y grasosas.
✅ El cuero cabelludo es la localización más frecuente.
✅ Puede afectar barba, cejas y surcos nasogenianos.
✅ El prurito es variable.
✅ El tratamiento incluye antifúngicos tópicos y corticoides de baja potencia.
✅ Es más frecuente en lactantes y adultos mayores.
Referencias
• Fitzpatrick's Dermatology.
• Bolognia Dermatology.
• Andrews' Diseases of the Skin.
• UpToDate: Seborrheic Dermatitis.
• European Dermatology Forum Guidelines.`,
  },
  {
    id: "dr-q-223",
    examArea: "PEDIATRÍA",
    topic: "PEDIATRÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","pediatria"],
    statement: "Niño de 8 años consulta por fiebre de 6 días de evolución, asociada a astenia, adinamia, malestar general, exantema cutáneo, cambios en mucosas orales y adenopatías cervicales.\n¿Cuál es el diagnóstico más probable y el tratamiento de elección?",
    options: [
      { id: "A", label: "A", text: "Escarlatina; penicilina benzatínica." },
      { id: "B", label: "B", text: "Sarampión; vitamina A y manejo de soporte." },
      { id: "C", label: "C", text: "Enfermedad de Kawasaki; inmunoglobulina intravenosa y ácido acetilsalicílico." },
      { id: "D", label: "D", text: "Mononucleosis infecciosa; manejo sintomático." },
    ],
    correctOptionId: "C",
    explanation: "La enfermedad de Kawasaki es una vasculitis sistémica de vasos medianos caracterizada por fiebre prolongada, alteraciones mucocutáneas, adenopatías cervicales y exantema. El tratamiento temprano con inmunoglobulina intravenosa disminuye significativamente el riesgo de aneurismas coronarios.",
    keyPoints: [
      "Cuando veas: Fiebre ≥ 5 días. Lengua en fresa. Adenopatía cervical. Exantema. Cambios mucocutáneos.",
      "Debes pensar en: Enfermedad de Kawasaki.",
      "Tema: Vasculitis en pediatría.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las vasculitis pediátricas más preguntadas en los exámenes.
La clave no es el exantema.
La clave es:
La fiebre prolongada asociada a cambios mucocutáneos.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Fiebre de más de 5 días.
• Exantema.
• Lengua roja.
• Adenopatías cervicales.
• Compromiso mucoso.
Estos hallazgos son característicos de:
Enfermedad de Kawasaki.
¿Cuáles son los criterios clásicos?
Además de la fiebre prolongada:
• Conjuntivitis bilateral no purulenta.
• Cambios en mucosa oral.
• Alteraciones de extremidades.
• Exantema polimorfo.
• Adenopatía cervical.
¿Por qué es importante el diagnóstico?
Porque puede producir:
Aneurismas de arterias coronarias.
Esta es:
La complicación más temida.
¿Cuál es el tratamiento de elección?
Debe administrarse:
• Inmunoglobulina intravenosa (IVIG).
• Ácido acetilsalicílico.
Idealmente:
Dentro de los primeros 10 días de enfermedad.
¿Por qué NO es escarlatina?
La escarlatina puede producir:
• Lengua en fresa.
• Exantema.
Pero generalmente presenta:
Faringoamigdalitis estreptocócica previa.
Y no la constelación clásica de Kawasaki.
¿Por qué NO es sarampión?
El sarampión suele acompañarse de:
• Tos.
• Coriza.
• Conjuntivitis.
• Manchas de Koplik.
¿Por qué NO es mononucleosis?
La mononucleosis suele asociarse a:
• Faringitis.
• Adenopatías generalizadas.
• Hepatoesplenomegalia.
No a los hallazgos mucocutáneos típicos.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Lengua roja."
Y responden:
Escarlatina.
Sin embargo:
El dato decisivo es:
La fiebre prolongada con exantema y adenopatía cervical.
Esto orienta a:
Enfermedad de Kawasaki.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar fiebre prolongada.
2.	Buscar criterios clínicos.
3.	Reconocer la vasculitis.
4.	Iniciar inmunoglobulina intravenosa.
5.	Administrar ácido acetilsalicílico.
Perlas de examen
✅ Fiebre ≥ 5 días es un criterio indispensable para Kawasaki clásica.
✅ La lengua en fresa es un hallazgo frecuente.
✅ La adenopatía cervical suele ser unilateral.
✅ La complicación más importante son los aneurismas coronarios.
✅ La IVIG reduce significativamente el riesgo coronario.
✅ El AAS forma parte del tratamiento estándar.
✅ Es la principal causa de cardiopatía adquirida en niños en países desarrollados.
Referencias
• Nelson Textbook of Pediatrics.
• American Heart Association Guidelines for Kawasaki Disease.
• Red Book: American Academy of Pediatrics.
• Rudolph's Pediatrics.
• UpToDate: Kawasaki Disease Clinical Features and Diagnosis.`,
  },
  {
    id: "dr-q-224",
    examArea: "CIRUGÍA VASCULAR",
    topic: "CIRUGÍA VASCULAR",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_vascular"],
    statement: "Un habitante de calle es encontrado con una herida penetrante en el muslo izquierdo y es trasladado al servicio de urgencias. Al examen físico presenta disminución de pulsos distales y frialdad de la extremidad afectada.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Solicitar ecografía Doppler arterial de la extremidad." },
      { id: "B", label: "B", text: "Solicitar angiotomografía de miembro inferior." },
      { id: "C", label: "C", text: "Exploración quirúrgica vascular urgente." },
      { id: "D", label: "D", text: "Observación clínica y reevaluación en 6 horas." },
    ],
    correctOptionId: "C",
    explanation: "La presencia de signos duros de lesión vascular, como ausencia o disminución de pulsos y datos de isquemia distal, constituye una indicación de exploración quirúrgica inmediata sin retrasar el manejo con estudios diagnósticos adicionales.",
    keyPoints: [
      "Cuando veas: Trauma penetrante. Disminución o ausencia de pulsos. Frialdad distal. Sospecha de lesión arterial.",
      "Debes pensar en: Lesión vascular mayor.",
      "Tema: Trauma vascular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el manejo inicial del trauma vascular.
La clave no es el sangrado.
La clave es:
La presencia de signos duros de lesión vascular.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Herida penetrante.
• Disminución de pulsos.
• Frialdad distal.
Estos hallazgos sugieren:
Compromiso arterial significativo.
¿Cuáles son los signos duros de lesión vascular?
Los más importantes son:
• Sangrado pulsátil.
• Hematoma expansivo.
• Soplo o frémito.
• Ausencia de pulsos.
• Isquemia distal.
Cuando están presentes:
No se requieren estudios diagnósticos previos.
¿Cuál es la conducta correcta?
La conducta indicada es:
Exploración quirúrgica urgente.
¿Por qué NO solicitar Doppler?
El Doppler es útil en:
Pacientes con signos blandos.
No debe retrasar:
La cirugía cuando existen signos duros.
¿Por qué NO solicitar angioTAC?
La angioTAC es excelente para caracterizar lesiones vasculares.
Sin embargo:
No debe retrasar el tratamiento definitivo en pacientes con isquemia.
¿Por qué NO observar?
La demora terapéutica aumenta:
El riesgo de pérdida de la extremidad.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Paciente estable."
Y responden:
AngioTAC.
Sin embargo:
El dato decisivo es:
La disminución de pulsos y la frialdad distal.
Esto constituye:
Isquemia aguda secundaria a lesión vascular.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar trauma penetrante.
2.	Buscar signos duros vasculares.
3.	Reconocer isquemia distal.
4.	Evitar retrasos diagnósticos innecesarios.
5.	Realizar exploración quirúrgica urgente.
Perlas de examen
✅ La ausencia o disminución de pulsos es un signo duro de lesión vascular.
✅ La frialdad distal indica compromiso de la perfusión.
✅ Los signos duros requieren cirugía inmediata.
✅ La angioTAC se reserva para pacientes estables sin signos duros.
✅ El tiempo de isquemia determina el pronóstico funcional.
✅ La revascularización temprana mejora la viabilidad de la extremidad.
✅ En trauma vascular, la clínica dirige la conducta inicial.
Referencias
• Advanced Trauma Life Support (ATLS).
• Rutherford's Vascular Surgery and Endovascular Therapy.
• Eastern Association for the Surgery of Trauma (EAST) Guidelines.
• Schwartz's Principles of Surgery.
• UpToDate: Extremity Vascular Trauma.`,
  },
  {
    id: "dr-q-225",
    examArea: "ORTOPEDIA Y TRAUMATOLOGÍA",
    topic: "ORTOPEDIA Y TRAUMATOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ortopedia_y_traumatologia"],
    statement: "Un hombre de 30 años es llevado a urgencias tras ser atropellado. Refiere que las llantas de un vehículo pasaron por encima de su extremidad inferior. Al examen físico presenta fractura abierta de tibia y peroné, ausencia de pulsos distales y pérdida de la función motora de la extremidad afectada.\n¿Cuál es la clasificación de Gustilo y Anderson más probable?",
    options: [
      { id: "A", label: "A", text: "Gustilo I." },
      { id: "B", label: "B", text: "Gustilo II." },
      { id: "C", label: "C", text: "Gustilo IIIA." },
      { id: "D", label: "D", text: "Gustilo IIIC." },
    ],
    correctOptionId: "D",
    explanation: "La clasificación Gustilo IIIC corresponde a cualquier fractura abierta asociada a lesión vascular que requiere reparación quirúrgica, independientemente del tamaño de la herida o del compromiso de partes blandas.",
    keyPoints: [
      "Cuando veas: Fractura abierta. Ausencia de pulsos. Lesión vascular. Trauma de alta energía.",
      "Debes pensar en: Gustilo IIIC.",
      "Tema: Clasificación de Gustilo y Anderson.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las clasificaciones ortopédicas más preguntadas en trauma.
La clave no es la fractura.
La clave es:
La lesión vascular.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Trauma de alta energía.
• Fractura abierta de tibia y peroné.
• Ausencia de pulsos distales.
• Déficit neurológico.
Esto indica:
Compromiso vascular severo.
¿Cómo se clasifica?
Recordemos:
Gustilo I:
• Herida <1 cm.
• Baja energía.
Gustilo II:
• Herida >1 cm.
• Sin daño extenso.
Gustilo III:
• Trauma de alta energía.
• Amplio daño de partes blandas.
Se subdivide en:
IIIA:
• Cobertura ósea posible.
IIIB:
• Pérdida extensa de tejidos blandos con exposición ósea.
IIIC:
• Lesión vascular que requiere reparación.
¿Cuál es el dato decisivo?
La presencia de:
Ausencia de pulsos distales.
Esto implica:
Lesión arterial asociada.
Por definición:
La fractura es Gustilo IIIC.
¿Por qué NO es IIIA?
Porque en IIIA:
No existe lesión vascular significativa.
¿Por qué NO es IIIB?
Porque la característica fundamental del IIIB es:
La pérdida extensa de cobertura de partes blandas.
No necesariamente lesión arterial.
¿Cuál es la trampa de examen?
Muchos estudiantes buscan:
El tamaño de la herida.
Sin embargo:
El dato decisivo es:
La lesión vascular.
Siempre que exista lesión arterial que requiera reparación:
La respuesta será:
Gustilo IIIC.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar fractura abierta.
2.	Buscar compromiso vascular.
3.	Confirmar ausencia de pulsos.
4.	Clasificar como Gustilo IIIC.
5.	Realizar manejo ortopédico y vascular urgente.
Perlas de examen
✅ La lesión vascular define una fractura Gustilo IIIC.
✅ La tibia es el hueso largo más frecuentemente asociado a fracturas abiertas graves.
✅ Las fracturas Gustilo IIIC tienen alto riesgo de amputación.
✅ Requieren antibióticos tempranos y desbridamiento quirúrgico.
✅ Debe valorarse la viabilidad de la extremidad.
✅ El manejo suele requerir cirugía vascular y ortopédica conjunta.
✅ Son lesiones de alta energía con elevada morbimortalidad.
Referencias
• Gustilo RB, Anderson JT. Prevention of Infection in the Treatment of Open Fractures.
• Rockwood and Green's Fractures in Adults.
• Campbell's Operative Orthopaedics.
• ATLS (Advanced Trauma Life Support).
• UpToDate: Classification and Management of Open Fractures.`,
  },
  {
    id: "dr-q-226",
    examArea: "TOXICOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","toxicologia"],
    statement: "Adolescente de 17 años es llevada a urgencias después de ingerir 43 tabletas de acetaminofén en un intento autolítico. Al ingreso se encuentra hemodinámicamente estable y sin hallazgos relevantes en el examen físico.\n¿Cuál es la dosis tóxica de acetaminofén y cuál es el siguiente paso en el manejo?",
    options: [
      { id: "A", label: "A", text: "Dosis tóxica >75 mg/kg; observación clínica y egreso." },
      { id: "B", label: "B", text: "Dosis tóxica >100 mg/kg; administrar carbón activado únicamente." },
      { id: "C", label: "C", text: "Dosis tóxica >150 mg/kg; solicitar nivel sérico de acetaminofén e iniciar protocolo con N-acetilcisteína según nomograma de Rumack-Matthew." },
      { id: "D", label: "D", text: "Dosis tóxica >300 mg/kg; realizar hemodiálisis de urgencia." },
    ],
    correctOptionId: "C",
    explanation: "La dosis potencialmente tóxica de acetaminofén en una ingesta aguda única es ≥150 mg/kg (o aproximadamente ≥7.5 g en adultos). Ante una sobredosis intencional debe solicitarse concentración sérica de acetaminofén a las 4 horas de la ingesta (o tan pronto como sea posible si han transcurrido más de 4 horas) y valorar tratamiento con N-acetilcisteína.",
    keyPoints: [
      "Cuando veas: Intento autolítico. Ingesta masiva de acetaminofén. Paciente inicialmente asintomático.",
      "Debes pensar en: Intoxicación por acetaminofén.",
      "Tema: Toxicología.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la intoxicación medicamentosa más frecuente a nivel mundial.
La clave no es el examen físico.
La clave es:
La cantidad ingerida.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Ingesta voluntaria masiva.
• Riesgo de hepatotoxicidad grave.
• Examen físico inicialmente normal.
Esto ocurre porque:
La intoxicación por acetaminofén suele ser inicialmente asintomática.
¿Cuál es la dosis tóxica?
La cifra que debes recordar para examen es:
≥150 mg/kg.
También suele recordarse:
≥7.5 gramos en adultos.
¿Cuál es el siguiente paso?
1.	Determinar hora exacta de la ingesta.
2.	Solicitar nivel sérico de acetaminofén.
3.	Aplicar nomograma de Rumack-Matthew.
4.	Iniciar N-acetilcisteína cuando esté indicada.
¿Cuándo iniciar N-acetilcisteína inmediatamente?
Cuando:
• La dosis ingerida claramente supera el umbral tóxico.
• Se desconoce el tiempo de ingesta.
• No será posible obtener niveles oportunamente.
¿Por qué la paciente puede estar asintomática?
Porque la hepatotoxicidad suele desarrollarse:
Entre las 24 y 72 horas posteriores.
¿Cuál es la trampa de examen?
Muchos estudiantes creen que:
La ausencia de síntomas descarta gravedad.
Sin embargo:
La mayoría de los pacientes se encuentran clínicamente bien durante las primeras horas.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Calcular la dosis ingerida.
2.	Compararla con 150 mg/kg.
3.	Solicitar nivel sérico.
4.	Aplicar nomograma.
5.	Iniciar N-acetilcisteína cuando corresponda.
Perlas de examen
✅ La dosis tóxica clásica es ≥150 mg/kg.
✅ El antídoto es la N-acetilcisteína.
✅ La mayor eficacia del antídoto ocurre si se administra dentro de las primeras 8 horas.
✅ El nomograma de Rumack-Matthew se utiliza en intoxicaciones agudas únicas.
✅ La hepatotoxicidad puede aparecer después de 24 horas.
✅ El paciente puede estar inicialmente asintomático.
✅ El acetaminofén es una de las causas más frecuentes de falla hepática aguda.
Referencias
• Goldfrank's Toxicologic Emergencies.
• Tintinalli's Emergency Medicine.
• Nelson Textbook of Pediatrics.
• UpToDate: Acetaminophen Poisoning in Children and Adolescents.
• American Academy of Clinical Toxicology Guidelines.`,
  },
  {
    id: "dr-q-227",
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia"],
    statement: "Un hombre consulta a urgencias por dolor torácico de 30 minutos de evolución. Al ingreso presenta frecuencia cardíaca de 70 lpm y presión arterial de 110/70 mmHg. Antes de iniciar manejo antiisquémico se realiza electrocardiograma, el cual evidencia una taquicardia regular de complejos anchos.\n¿Cuál es el tratamiento de elección para este cuadro?",
    options: [
      { id: "A", label: "A", text: "Adenosina intravenosa." },
      { id: "B", label: "B", text: "Amiodarona intravenosa." },
      { id: "C", label: "C", text: "Verapamilo intravenoso." },
      { id: "D", label: "D", text: "Nitroglicerina sublingual." },
    ],
    correctOptionId: "B",
    explanation: "Toda taquicardia regular de complejo ancho debe considerarse taquicardia ventricular hasta demostrar lo contrario. En un paciente hemodinámicamente estable, el tratamiento farmacológico de elección es la amiodarona intravenosa.",
    keyPoints: [
      "Cuando veas: Taquicardia. QRS ancho (>120 ms). Paciente estable. Dolor torácico.",
      "Debes pensar en: Taquicardia ventricular.",
      "Tema: Arritmias ventriculares.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las emergencias cardiológicas más importantes.
La clave no es el dolor torácico.
La clave es:
La taquicardia de complejos anchos.
¿Qué está ocurriendo realmente?
El ECG muestra:
• Taquicardia.
• Complejos QRS anchos.
Hasta demostrar lo contrario:
Debe asumirse que se trata de una:
Taquicardia ventricular.
¿Por qué?
Porque aproximadamente:
El 80% de las taquicardias de complejo ancho en adultos corresponden a taquicardia ventricular.
¿Cuál es el tratamiento?
Si el paciente está estable:
• Amiodarona IV.
Si estuviera inestable:
• Cardioversión sincronizada inmediata.
¿Por qué NO adenosina?
La adenosina puede utilizarse en algunas TSV con aberrancia.
Sin embargo:
No es el tratamiento inicial de elección cuando se sospecha taquicardia ventricular.
¿Por qué NO verapamilo?
El verapamilo puede producir:
Colapso hemodinámico en taquicardia ventricular.
Por ello debe evitarse.
¿Por qué NO nitroglicerina?
La nitroglicerina puede ser útil en síndrome coronario agudo.
Pero:
No corrige la arritmia.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Dolor torácico."
Y responden:
Tratamiento antiisquémico.
Sin embargo:
El dato decisivo es:
La presencia de una taquicardia de complejo ancho.
La arritmia debe tratarse primero.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar QRS ancho.
2.	Asumir taquicardia ventricular.
3.	Evaluar estabilidad hemodinámica.
4.	Administrar amiodarona si está estable.
5.	Cardioversión si aparece inestabilidad.
Perlas de examen
✅ Toda taquicardia de complejo ancho es TV hasta demostrar lo contrario.
✅ La amiodarona es el antiarrítmico de elección en TV estable.
✅ La cardioversión sincronizada es el manejo de elección en TV inestable.
✅ El verapamilo está contraindicado en TV.
✅ El antecedente de cardiopatía estructural aumenta la probabilidad de TV.
✅ La estabilidad hemodinámica define la conducta inicial.
✅ El QRS ancho corresponde a una duración ≥120 ms.
Referencias
• ACLS American Heart Association.
• Braunwald's Heart Disease.
• Harrison's Principles of Internal Medicine.
• ESC Guidelines for Ventricular Arrhythmias.
• UpToDate: Sustained Monomorphic Ventricular Tachycardia.`,
  },
  {
    id: "dr-q-228",
    examArea: "TOXICOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","toxicologia"],
    statement: "Paciente de 17 años es llevado a urgencias en estado de inconsciencia. Una amiga refiere que asistió a una fiesta rave durante toda la noche. Al ingreso presenta presión arterial de 70/40 mmHg, frecuencia cardíaca de 40 lpm, pupilas mióticas, sialorrea y aumento de los ruidos intestinales.\n¿Cuál es el toxíndrome más probable y cuál es el manejo de elección?",
    options: [
      { id: "A", label: "A", text: "Toxíndrome simpaticomimético; benzodiacepinas intravenosas." },
      { id: "B", label: "B", text: "Toxíndrome anticolinérgico; fisostigmina intravenosa." },
      { id: "C", label: "C", text: "Toxíndrome colinérgico; atropina y pralidoxima." },
      { id: "D", label: "D", text: "Toxíndrome opioide; naloxona intravenosa." },
    ],
    correctOptionId: "C",
    explanation: "La combinación de miosis, bradicardia, hipotensión, sialorrea e hiperperistaltismo es característica de un toxíndrome colinérgico, habitualmente secundario a exposición a organofosforados o carbamatos.",
    keyPoints: [
      "Cuando veas: Miosis. Bradicardia. Sialorrea. Hipotensión. Hiperperistaltismo.",
      "Debes pensar en: Toxíndrome colinérgico.",
      "Tema: Intoxicaciones agudas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el reconocimiento de toxíndromes.
La clave no es la pérdida de conciencia.
La clave es:
La combinación de manifestaciones muscarínicas.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Miosis.
• Bradicardia.
• Hipotensión.
• Hipersecreciones.
• Aumento del peristaltismo.
Esto corresponde a:
Exceso de acetilcolina.
Por lo tanto:
Toxíndrome colinérgico.
¿Cuál es la causa más frecuente?
Clásicamente:
• Organofosforados.
• Carbamatos.
¿Qué síntomas produce?
Recuerda el clásico:
SLUDGE o DUMBELS.
• Salivación.
• Lagrimeo.
• Micción.
• Diarrea.
• Síntomas gastrointestinales.
• Emesis.
Además:
• Miosis.
• Bradicardia.
• Broncorrea.
• Broncoespasmo.
¿Cuál es el tratamiento?
Dos pilares:
• Atropina.
• Pralidoxima.
¿Qué hace la atropina?
Bloquea:
Los receptores muscarínicos.
Mejora:
• Bradicardia.
• Broncorrea.
• Hipersecreciones.
¿Qué hace la pralidoxima?
Reactiva:
La acetilcolinesterasa inhibida.
Especialmente útil en:
Intoxicación por organofosforados.
¿Por qué NO es opioide?
Los opioides producen:
• Miosis.
• Depresión respiratoria.
Pero no suelen producir:
• Sialorrea marcada.
• Hiperperistaltismo.
• Síndrome colinérgico completo.
¿Por qué NO es simpaticomimético?
Los simpaticomiméticos producen:
• Midriasis.
• Taquicardia.
• Hipertensión.
Lo contrario del caso.
¿Por qué NO es anticolinérgico?
El anticolinérgico produce:
• Midriasis.
• Piel seca.
• Retención urinaria.
No miosis ni hipersecreciones.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Miosis."
Y responden:
Intoxicación por opioides.
Sin embargo:
El dato decisivo es:
La presencia de sialorrea e hiperperistaltismo.
Esto orienta claramente a:
Toxíndrome colinérgico.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Reconocer el toxíndrome.
2.	Identificar signos colinérgicos.
3.	Asegurar vía aérea.
4.	Administrar atropina.
5.	Añadir pralidoxima.
Perlas de examen
✅ Miosis + sialorrea + bradicardia = pensar en toxíndrome colinérgico.
✅ Los organofosforados inhiben la acetilcolinesterasa.
✅ La atropina es el tratamiento inicial más importante.
✅ La pralidoxima regenera la enzima inhibida.
✅ La broncorrea es una causa frecuente de muerte.
✅ La descontaminación es parte fundamental del manejo.
✅ El diagnóstico suele ser clínico.
Referencias
• Goldfrank's Toxicologic Emergencies.
• Tintinalli's Emergency Medicine.
• Harrison's Principles of Internal Medicine.
• Olson's Poisoning & Drug Overdose.
• UpToDate: Organophosphate and Carbamate Poisoning.`,
  },
  {
    id: "dr-q-229",
    examArea: "PEDIATRÍA - DESARROLLO Y LENGUAJE",
    topic: "DESARROLLO Y LENGUAJE",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","desarrollo_y_lenguaje"],
    statement: "Un adolescente de 14 años presenta dificultades para articular ciertos fonemas, sin alteraciones en la comprensión, expresión o estructura general del lenguaje.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Dislalia." },
      { id: "B", label: "B", text: "Disfasia." },
      { id: "C", label: "C", text: "Disglosia." },
      { id: "D", label: "D", text: "Afasia." },
    ],
    correctOptionId: "A",
    explanation: "La dislalia es un trastorno de la articulación de los fonemas sin compromiso de la comprensión ni de la organización del lenguaje. El paciente sabe qué quiere decir, pero presenta dificultad para pronunciar correctamente determinados sonidos.",
    keyPoints: [
      "Cuando veas: Dificultad para pronunciar fonemas. Lenguaje conservado. Comprensión normal.",
      "Debes pensar en: Dislalia.",
      "Tema: Trastornos del lenguaje.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa las diferencias entre los trastornos del habla y del lenguaje.
La clave no es la edad.
La clave es:
Que el lenguaje está conservado.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Dificultad articulatoria.
• Comprensión normal.
• Expresión del lenguaje conservada.
Esto corresponde a:
Dislalia.
¿Qué es la dislalia?
Es una alteración en:
La pronunciación o articulación de uno o varios fonemas.
Ejemplos frecuentes:
• Sustitución de letras.
• Omisión de sonidos.
• Distorsión fonética.
¿Por qué NO es disfasia?
La disfasia implica:
Alteración en la adquisición y organización del lenguaje.
Afecta:
• Comprensión.
• Expresión.
• Estructuración lingüística.
¿Por qué NO es disglosia?
La disglosia es un trastorno articulatorio secundario a:
Alteraciones anatómicas.
Por ejemplo:
• Labio leporino.
• Fisura palatina.
• Malformaciones linguales.
El caso no menciona anomalías estructurales.
¿Por qué NO es afasia?
La afasia corresponde a:
Pérdida adquirida del lenguaje por lesión cerebral.
Generalmente aparece:
Después de un evento neurológico.
¿Cuál es la trampa de examen?
Muchos estudiantes confunden:
Dislalia y disfasia.
Sin embargo:
El dato decisivo es:
Que el lenguaje global está intacto.
Esto orienta a:
Dislalia.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Evaluar comprensión.
2.	Evaluar expresión.
3.	Identificar alteración aislada de fonemas.
4.	Confirmar lenguaje conservado.
5.	Diagnosticar dislalia.
Perlas de examen
✅ La dislalia afecta únicamente la articulación de los sonidos.
✅ No existe alteración de la comprensión del lenguaje.
✅ No existe alteración de la inteligencia.
✅ Es uno de los trastornos del habla más frecuentes en pediatría.
✅ Puede requerir terapia fonoaudiológica.
✅ La disfasia afecta el lenguaje, no solo la pronunciación.
✅ La afasia es un trastorno adquirido secundario a lesión cerebral.
Referencias
• Nelson Textbook of Pediatrics.
• Developmental-Behavioral Pediatrics.
• Manual de Pediatría de la AEP.
• DSM-5-TR.
• UpToDate: Speech and Language Disorders in Children.`,
  },
  {
    id: "dr-q-230",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Una mujer de 40 años se realiza una citología cervical de tamizaje, cuyo resultado reporta AGC-NOS (células glandulares atípicas de significado indeterminado).\n¿Cuál es el siguiente paso en el manejo?",
    options: [
      { id: "A", label: "A", text: "Colposcopia y biopsia." },
      { id: "B", label: "B", text: "Repetir citología en 6–12 meses." },
      { id: "C", label: "C", text: "Prueba de ADN para VPH." },
      { id: "D", label: "D", text: "Histeroscopia." },
    ],
    correctOptionId: "A",
    explanation: "Las células glandulares atípicas (AGC) se asocian a un riesgo significativo de lesiones premalignas o malignas del cuello uterino y del endometrio. Por ello, toda paciente con AGC-NOS requiere evaluación diagnóstica inmediata mediante colposcopia con toma de biopsias dirigidas y muestreo endocervical.",
    keyPoints: [
      "Cuando veas: AGC. Células glandulares atípicas. Citología cervical anormal.",
      "Debes pensar en: Colposcopia inmediata.",
      "Tema: Tamizaje y patología cervical.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los hallazgos citológicos de mayor relevancia clínica.
La clave no es la edad.
La clave es:
El reporte de AGC.
¿Qué está ocurriendo realmente?
La citología reporta:
AGC-NOS.
Esto significa:
Células glandulares atípicas de significado indeterminado.
¿Por qué es importante?
Porque las alteraciones glandulares tienen:
Mayor asociación con lesiones premalignas y adenocarcinoma.
¿Qué debe hacerse?
Toda paciente con AGC debe ser remitida a:
• Colposcopia.
• Biopsias dirigidas.
• Muestreo endocervical.
Dependiendo de la edad y factores de riesgo:
Puede requerirse evaluación endometrial adicional.
¿Por qué NO repetir la citología?
Porque:
AGC no es una alteración de bajo riesgo.
Repetir la citología retrasa el diagnóstico.
¿Por qué NO solicitar únicamente ADN-VPH?
La prueba de VPH puede complementar la evaluación.
Sin embargo:
No reemplaza la colposcopia.
¿Por qué NO realizar histeroscopia inicialmente?
La histeroscopia no constituye:
El estudio inicial estándar.
¿Cuál es la trampa de examen?
Muchos estudiantes asocian:
Citología anormal.
Con:
Repetición del examen.
Sin embargo:
El dato decisivo es:
La presencia de células glandulares atípicas.
Esto obliga a:
Estudio colposcópico inmediato.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar AGC.
2.	Reconocer alto riesgo de neoplasia.
3.	Realizar colposcopia.
4.	Tomar biopsias dirigidas.
5.	Completar estudio según hallazgos.
Perlas de examen
✅ AGC significa células glandulares atípicas.
✅ Toda paciente con AGC requiere colposcopia.
✅ El riesgo de adenocarcinoma es mayor que en las alteraciones escamosas leves.
✅ El muestreo endocervical suele formar parte de la evaluación.
✅ Puede requerirse estudio endometrial en mujeres mayores o con factores de riesgo.
✅ No debe manejarse con simple observación.
✅ Es una de las citologías que más obliga a estudio diagnóstico inmediato.
Referencias
• ASCCP Risk-Based Management Guidelines.
• ACOG Practice Bulletin: Cervical Cancer Screening.
• Novak's Gynecology.
• Berek & Novak's Gynecology.
• UpToDate: Management of Atypical Glandular Cells on Cervical Cytology.`,
  },
  {
    id: "dr-q-231",
    examArea: "NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neumologia"],
    statement: "Paciente hospitalizado por derrame pleural es sometido a toracocentesis diagnóstica. El análisis del líquido pleural reporta:\n• Proteínas líquido pleural: 4.8 g/dL.\n• Proteínas séricas: 6.0 g/dL.\n• LDH líquido pleural: 420 U/L.\n• LDH sérica: 180 U/L.\n• pH: 7.28.\n• Glucosa: 45 mg/dL.\n• Recuento celular: 3.500 leucocitos/mm³ con predominio de neutrófilos.\n¿Qué determinan estos hallazgos?",
    options: [
      { id: "A", label: "A", text: "Derrame pleural transudativo secundario a insuficiencia cardíaca." },
      { id: "B", label: "B", text: "Derrame pleural exudativo compatible con derrame parapneumónico complicado." },
      { id: "C", label: "C", text: "Derrame pleural secundario a síndrome nefrótico." },
      { id: "D", label: "D", text: "Derrame pleural transudativo secundario a cirrosis hepática." },
    ],
    correctOptionId: "B",
    explanation: "Los criterios de Light confirman un exudado (relación proteínas LP/suero >0.5 y relación LDH LP/suero >0.6). Además, la glucosa baja y el pH <7.30 sugieren un derrame parapneumónico complicado que generalmente requiere drenaje pleural.",
    keyPoints: [
      "Cuando veas: Proteínas LP/suero >0.5. LDH LP/suero >0.6. Glucosa baja. pH bajo.",
      "Debes pensar en: Exudado complicado.",
      "Tema: Derrame pleural.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la interpretación del líquido pleural mediante los criterios de Light.
La clave no es el derrame.
La clave es:
Determinar si es exudado o transudado.
¿Qué está ocurriendo realmente?
Calculemos:
Proteínas:
4.8 / 6.0 = 0.8
LDH:
420 / 180 = 2.3
Ambos cumplen:
Criterios de Light para exudado.
¿Qué sugieren el pH y la glucosa?
• pH 7.28.
• Glucosa 45 mg/dL.
Estos hallazgos sugieren:
Infección pleural significativa.
Por ello:
Debe sospecharse un derrame parapneumónico complicado.
¿Cuándo un derrame es exudativo?
Si cumple cualquiera de los siguientes:
• Proteínas LP/suero >0.5.
• LDH LP/suero >0.6.
• LDH LP > 2/3 del límite superior sérico.
¿Cuáles son las causas más frecuentes?
• Neumonía.
• Cáncer.
• Tuberculosis.
• Embolia pulmonar.
¿Por qué NO es transudado?
Los transudados típicamente presentan:
• Proteínas bajas.
• LDH baja.
• pH cercano a normalidad.
Y suelen aparecer en:
• Insuficiencia cardíaca.
• Cirrosis.
• Síndrome nefrótico.
¿Cuál es la trampa de examen?
Muchos estudiantes observan:
"Derrame pleural."
Y responden:
Insuficiencia cardíaca.
Sin embargo:
El dato decisivo es:
El cumplimiento de los criterios de Light.
Esto orienta claramente a:
Exudado.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Aplicar criterios de Light.
2.	Clasificar el derrame.
3.	Revisar glucosa y pH.
4.	Identificar complicación infecciosa.
5.	Considerar drenaje pleural.
Perlas de examen
✅ Los criterios de Light son el estándar para diferenciar exudados y transudados.
✅ Glucosa <60 mg/dL sugiere exudado complicado.
✅ pH <7.30 orienta a drenaje pleural.
✅ El derrame parapneumónico complicado suele ser neutrofílico.
✅ La insuficiencia cardíaca produce transudados.
✅ La tuberculosis suele producir exudado linfocitario.
✅ Todo derrame pleural debe interpretarse inicialmente con criterios de Light.
Referencias
• Light RW. Pleural Diseases.
• ATS Guidelines for Pleural Disease.
• Harrison's Principles of Internal Medicine.
• Murray & Nadel's Textbook of Respiratory Medicine.
• UpToDate: Diagnostic Evaluation of Pleural Effusion.`,
  },
  {
    id: "dr-q-232",
    examArea: "ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","endocrinologia"],
    statement: "Mujer de 35 años consulta por disfagia, odinofagia y sensación de masa cervical de 3 meses de evolución. Se realiza ecografía tiroidea que reporta un nódulo sólido de 1.5 cm, hipoecoico y con microcalcificaciones.\n¿Cuál es la clasificación ecográfica más probable y el siguiente paso diagnóstico?",
    options: [
      { id: "A", label: "A", text: "TI-RADS 2; seguimiento ecográfico anual." },
      { id: "B", label: "B", text: "TI-RADS 3; repetir ecografía en 12 meses." },
      { id: "C", label: "C", text: "TI-RADS 4; gammagrafía tiroidea." },
      { id: "D", label: "D", text: "TI-RADS 5; biopsia por aspiración con aguja fina (BACAF)." },
    ],
    correctOptionId: "D",
    explanation: "La presencia de un nódulo sólido, hipoecoico y con microcalcificaciones corresponde a características ecográficas altamente sospechosas de malignidad. Un nódulo TI-RADS 5 de 1.5 cm tiene indicación de estudio citológico mediante BACAF.",
    keyPoints: [
      "Cuando veas: Nódulo sólido. Hipoecogenicidad. Microcalcificaciones. Tamaño >1 cm.",
      "Debes pensar en: TI-RADS 5.",
      "Tema: Nódulo tiroideo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la estratificación ecográfica del riesgo de cáncer de tiroides.
La clave no es el tamaño.
La clave es:
Las características ecográficas sospechosas.
¿Qué está ocurriendo realmente?
La ecografía reporta:
• Nódulo sólido.
• Hipoecoico.
• Microcalcificaciones.
Estos son:
Hallazgos de alto riesgo para malignidad.
¿A qué categoría corresponde?
La combinación descrita es compatible con:
TI-RADS 5.
¿Qué significa TI-RADS 5?
Significa:
Alta sospecha de cáncer de tiroides.
Especialmente:
Carcinoma papilar.
¿Por qué las microcalcificaciones son importantes?
Representan frecuentemente:
Cuerpos de psammoma.
Hallazgo clásico de:
Carcinoma papilar de tiroides.
¿Cuál es el siguiente paso?
En nódulos sospechosos ≥1 cm:
Debe realizarse:
Biopsia por aspiración con aguja fina (BACAF).
¿Por qué NO solicitar gammagrafía?
La gammagrafía está indicada principalmente cuando existe:
TSH suprimida.
Para determinar si el nódulo es hiperfuncionante.
¿Por qué NO realizar solo seguimiento?
Porque:
La sospecha ecográfica es alta.
Y el tamaño supera el umbral para biopsia.
¿Cuál es la trampa de examen?
Muchos estudiantes se enfocan en:
Que el nódulo mide solo 1.5 cm.
Sin embargo:
El dato decisivo es:
La presencia de microcalcificaciones e hipoecogenicidad.
Esto obliga a:
Realizar BACAF.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Evaluar características ecográficas.
2.	Clasificar según TI-RADS.
3.	Identificar criterios de alto riesgo.
4.	Verificar el tamaño.
5.	Solicitar BACAF.
Perlas de examen
✅ Las microcalcificaciones son un signo ecográfico de alta sospecha.
✅ El carcinoma papilar es el cáncer de tiroides más frecuente.
✅ TI-RADS 5 implica alto riesgo de malignidad.
✅ La BACAF es el estudio diagnóstico inicial de elección.
✅ La gammagrafía se reserva para nódulos con TSH baja.
✅ Los nódulos sólidos tienen mayor riesgo que los quísticos.
✅ La ecografía es la herramienta principal para estratificar riesgo.
Referencias
• American Thyroid Association Guidelines.
• ACR TI-RADS White Paper.
• Williams Textbook of Endocrinology.
• UpToDate: Thyroid Nodules.
• Haugen BR et al. ATA Management Guidelines for Thyroid Nodules.`,
  },
  {
    id: "dr-q-233",
    examArea: "PEDIATRÍA - OFTALMOLOGÍA",
    topic: "OFTALMOLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","oftalmologia"],
    statement: "Niño de 2 años es llevado a consulta por su madre, quien refiere que \"el ojo se ve como el de un gato\". Durante el tamizaje visual se evidencia ausencia del reflejo rojo en un ojo.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Estrabismo convergente." },
      { id: "B", label: "B", text: "Retinoblastoma." },
      { id: "C", label: "C", text: "Catarata congénita." },
      { id: "D", label: "D", text: "Glaucoma congénito." },
    ],
    correctOptionId: "B",
    explanation: "La leucocoria (ausencia del reflejo rojo) en un niño pequeño debe considerarse retinoblastoma hasta demostrar lo contrario. Es el tumor intraocular maligno más frecuente de la infancia y constituye una urgencia diagnóstica.",
    keyPoints: [
      "Cuando veas: Leucocoria. \"Ojo de gato\". Ausencia de reflejo rojo. Niño pequeño.",
      "Debes pensar en: Retinoblastoma.",
      "Tema: Retinoblastoma.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las urgencias oftalmológicas pediátricas más importantes.
La clave no es el entropión.
La clave es:
La leucocoria.
¿Qué está ocurriendo realmente?
La madre describe:
"El ojo como el de un gato."
Y el examen confirma:
Ausencia del reflejo rojo.
Esto corresponde a:
Leucocoria.
¿Cuál es la causa más importante que debe descartarse?
Retinoblastoma.
Siempre que aparezca en un examen:
Leucocoria = Retinoblastoma hasta demostrar lo contrario.
¿Por qué?
Porque es:
El tumor intraocular maligno más frecuente en la infancia.
¿Cuál es la edad típica?
Generalmente:
Menores de 5 años.
Especialmente:
Entre 1 y 3 años.
¿Cuál es la manifestación más frecuente?
• Leucocoria.
• Estrabismo.
¿Cuál es el siguiente paso?
Remisión urgente a oftalmología pediátrica y estudio imagenológico ocular.
¿Por qué NO es catarata congénita?
También puede producir leucocoria.
Sin embargo:
En los exámenes la asociación clásica "ojo de gato" corresponde a retinoblastoma.
¿Por qué NO es glaucoma congénito?
Produce típicamente:
• Epífora.
• Fotofobia.
• Buftalmos.
No leucocoria.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Entropión."
Y se distraen.
Sin embargo:
El dato decisivo es:
La ausencia del reflejo rojo.
Esto orienta inmediatamente a:
Retinoblastoma.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar leucocoria.
2.	Sospechar retinoblastoma.
3.	Realizar valoración oftalmológica urgente.
4.	Solicitar ecografía ocular e imágenes complementarias.
5.	Confirmar el diagnóstico y estadificar.
Perlas de examen
✅ La leucocoria es el signo más frecuente del retinoblastoma.
✅ El estrabismo es la segunda forma de presentación más común.
✅ Nunca debe realizarse biopsia intraocular por riesgo de diseminación.
✅ La ecografía ocular suele ser el primer estudio de imagen.
✅ El retinoblastoma deriva de células retinianas primitivas.
✅ La mutación del gen RB1 se asocia a formas hereditarias.
✅ Toda leucocoria en pediatría es una urgencia diagnóstica.
Referencias
• Nelson Textbook of Pediatrics.
• American Academy of Ophthalmology.
• Shields' Retinoblastoma.
• UpToDate: Retinoblastoma.
• American Academy of Pediatrics Visual Screening Guidelines.`,
  },
  {
    id: "dr-q-234",
    examArea: "GINECOLOGÍA - INFECTOLOGÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","infectologia"],
    statement: "Una mujer de 28 años consulta por la aparición de una úlcera vulvar indolora de bordes bien definidos. Refiere actividad sexual sin protección en los últimos meses. Como parte del estudio inicial se solicita VDRL, cuyo resultado es no reactivo.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Descartar sífilis y solicitar biopsia de la lesión." },
      { id: "B", label: "B", text: "Repetir VDRL en 6 meses." },
      { id: "C", label: "C", text: "Solicitar prueba treponémica específica (FTA-ABS o prueba rápida treponémica) e iniciar manejo según hallazgos." },
      { id: "D", label: "D", text: "Iniciar tratamiento para herpes genital." },
    ],
    correctOptionId: "C",
    explanation: "La lesión descrita es altamente sugestiva de chancro sifilítico. Durante la sífilis primaria temprana el VDRL puede ser negativo debido a que aún no se han desarrollado títulos detectables de anticuerpos no treponémicos.",
    keyPoints: [
      "Cuando veas: Úlcera genital indolora. Bordes bien definidos. VDRL negativo.",
      "Debes pensar en: Sífilis primaria temprana.",
      "Tema: Sífilis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las limitaciones más importantes de las pruebas diagnósticas para sífilis.
La clave no es el VDRL.
La clave es:
La descripción de la úlcera.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Úlcera única.
• Indolora.
• Bordes regulares.
Esto corresponde clásicamente a:
Chancro sifilítico.
¿Por qué puede ser negativo el VDRL?
En la sífilis primaria temprana:
Los anticuerpos no treponémicos pueden no haberse elevado todavía.
Por ello:
El VDRL puede ser falsamente negativo.
¿Qué debe hacerse?
Solicitar:
• FTA-ABS.
• TPPA.
• Prueba rápida treponémica.
Según disponibilidad local.
¿Cuál es el diagnóstico más probable?
Sífilis primaria.
¿Debe descartarse la enfermedad por un VDRL negativo?
No.
La clínica tiene prioridad cuando la sospecha es alta.
¿Por qué NO es herpes genital?
El herpes típicamente produce:
• Úlceras múltiples.
• Lesiones dolorosas.
• Vesículas previas.
No corresponde al caso.
¿Por qué NO repetir simplemente el VDRL?
Porque:
La paciente requiere estudio confirmatorio inmediato.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"VDRL negativo."
Y descartan sífilis.
Sin embargo:
El dato decisivo es:
La presencia del chancro indoloro.
Esto obliga a:
Continuar el estudio con pruebas treponémicas.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar chancro sifilítico.
2.	Reconocer que el VDRL puede ser negativo.
3.	Solicitar prueba treponémica.
4.	Confirmar el diagnóstico.
5.	Iniciar tratamiento oportuno.
Perlas de examen
✅ El chancro sifilítico es típicamente indoloro.
✅ El VDRL puede ser negativo en fases muy tempranas.
✅ Las pruebas treponémicas son más sensibles en sífilis primaria.
✅ La penicilina benzatínica continúa siendo el tratamiento de elección.
✅ La sífilis debe notificarse y estudiarse en la pareja sexual.
✅ Un VDRL negativo no excluye sífilis primaria.
✅ La sospecha clínica sigue siendo fundamental para el diagnóstico.
Referencias
• CDC Sexually Transmitted Infections Treatment Guidelines.
• Harrison's Principles of Internal Medicine.
• Mandell, Douglas and Bennett's Infectious Diseases.
• WHO Guidelines for the Management of Sexually Transmitted Infections.
• UpToDate: Clinical Manifestations and Diagnosis of Syphilis.`,
  },
  {
    id: "dr-q-235",
    examArea: "CIRUGÍA - QUEMADURAS",
    topic: "QUEMADURAS",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","quemaduras"],
    statement: "Hombre de 25 años, electricista, es traído al servicio de urgencias tras sufrir una descarga eléctrica de alto voltaje al manipular una antena en un tejado. Ingresa consciente, con una lesión de entrada en región occipital y una lesión de salida en el talón derecho. No presenta otras quemaduras cutáneas evidentes.\n¿Cuál es el porcentaje aproximado de superficie corporal quemada que debe estimarse inicialmente para realizar la reposición hídrica?",
    options: [
      { id: "A", label: "A", text: "1%." },
      { id: "B", label: "B", text: "5%." },
      { id: "C", label: "C", text: "20%." },
      { id: "D", label: "D", text: "No puede estimarse por la apariencia externa; debe considerarse una quemadura eléctrica profunda de alto voltaje con importante daño tisular oculto." },
    ],
    correctOptionId: "D",
    explanation: "Las quemaduras eléctricas de alto voltaje producen una extensa destrucción muscular y tisular profunda que no se correlaciona con la superficie cutánea visible. Por ello, la reanimación hídrica no debe basarse únicamente en la regla de los nueves o en las lesiones de entrada y salida.",
    keyPoints: [
      "Cuando veas: Alto voltaje. Lesión de entrada y salida. Escaras pequeñas. Mecanismo eléctrico.",
      "Debes pensar en: Daño profundo oculto.",
      "Tema: Quemaduras eléctricas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las principales diferencias entre las quemaduras térmicas y las eléctricas.
La clave no es el tamaño de la quemadura.
La clave es:
El mecanismo de lesión.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Descarga eléctrica de alto voltaje.
• Punto de entrada.
• Punto de salida.
La corriente atravesó:
Gran cantidad de tejidos profundos.
¿Por qué la superficie visible engaña?
Porque la electricidad:
Produce necrosis muscular profunda.
Puede existir:
• Rabdomiólisis.
• Síndrome compartimental.
• Lesión vascular.
Con lesiones cutáneas aparentemente pequeñas.
¿Cómo se realiza la reposición hídrica?
Se inicia reanimación agresiva:
Guiada por:
• Diuresis.
• Estado hemodinámico.
• Presencia de mioglobinuria.
Más que por el porcentaje visible de SCQ.
¿Cuál es la trampa de examen?
Muchos estudiantes intentan:
Calcular la superficie corporal quemada usando la regla de los nueves.
Sin embargo:
En quemaduras eléctricas de alto voltaje esto subestima gravemente la lesión.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar quemadura eléctrica de alto voltaje.
2.	Reconocer daño profundo oculto.
3.	No confiar en la superficie visible.
4.	Iniciar reanimación hídrica intensiva.
5.	Vigilar rabdomiólisis y función renal.
Perlas de examen
✅ Las quemaduras eléctricas suelen subestimar la lesión real.
✅ El daño muscular profundo puede ser masivo.
✅ La mioglobinuria es una complicación frecuente.
✅ La diuresis es la principal guía de reanimación.
✅ Debe realizarse monitorización cardíaca.
✅ El síndrome compartimental es una complicación importante.
✅ Alto voltaje (>1000 V) se asocia a mayor mortalidad y amputaciones.
Referencias
• Advanced Burn Life Support (ABLS).
• American Burn Association Guidelines.
• Schwartz's Principles of Surgery.
• Tintinalli's Emergency Medicine.
• UpToDate: Electrical Injuries.`,
  },
  {
    id: "dr-q-236",
    examArea: "PEDIATRÍA - CARDIOLOGÍA NEONATAL",
    topic: "CARDIOLOGÍA NEONATAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cardiologia_neonatal"],
    statement: "Neonato a término, sin antecedentes perinatales relevantes, con adecuada adaptación neonatal. Durante la evaluación previa al alta se realiza tamizaje para cardiopatías congénitas críticas mediante oximetría de pulso. Los resultados muestran saturación de oxígeno de 98% en la mano derecha y 92% en un miembro inferior, persistiendo la diferencia en una segunda medición.\n¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Considerar tamizaje normal y otorgar egreso." },
      { id: "B", label: "B", text: "Repetir la oximetría en el control ambulatorio del recién nacido." },
      { id: "C", label: "C", text: "Considerar tamizaje positivo, realizar valoración cardiológica y ecocardiograma." },
      { id: "D", label: "D", text: "Administrar oxígeno suplementario y repetir la medición en 24 horas." },
    ],
    correctOptionId: "C",
    explanation: "Según las recomendaciones del Ministerio de Salud de Colombia y los protocolos de tamizaje neonatal para cardiopatías congénitas críticas, una diferencia mayor de 3% entre la saturación preductal (mano derecha) y postductal (miembro inferior), o una saturación menor de 95% en cualquiera de las extremidades tras mediciones repetidas, constituye un tamizaje positivo.",
    keyPoints: [
      "Cuando veas: Saturación preductal 98%. Saturación postductal 92%. Diferencia >3%. Recién nacido aparentemente sano.",
      "Debes pensar en: Tamizaje positivo para cardiopatía congénita crítica.",
      "Tema: Tamizaje neonatal cardiovascular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el tamizaje neonatal para cardiopatías congénitas críticas.
La clave no es la ausencia de síntomas.
La clave es:
La diferencia de saturación.
¿Qué está ocurriendo realmente?
El recién nacido presenta:
• Saturación preductal: 98%.
• Saturación postductal: 92%.
La diferencia es:
6%.
Esto supera:
El límite aceptado de 3%.
Por tanto:
El tamizaje es positivo.
¿Qué debe hacerse?
Ante un tamizaje positivo:
• Valoración pediátrica inmediata.
• Evaluación por cardiología pediátrica.
• Ecocardiograma.
¿Qué cardiopatías pueden detectarse?
Principalmente:
• Coartación de aorta.
• Transposición de grandes arterias.
• Tronco arterioso.
• Atresia pulmonar.
• Síndrome de corazón izquierdo hipoplásico.
¿Por qué NO dar egreso?
Porque:
Podría existir una cardiopatía congénita crítica aún asintomática.
¿Por qué NO esperar control ambulatorio?
Porque:
La detección temprana disminuye mortalidad neonatal.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"No presenta cianosis."
Y concluyen:
Recién nacido sano.
Sin embargo:
El dato decisivo es:
La diferencia preductal-postductal mayor de 3%.
Esto convierte el tamizaje en:
Positivo.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Comparar saturaciones pre y postductales.
2.	Identificar diferencia >3%.
3.	Considerar tamizaje positivo.
4.	Solicitar ecocardiograma.
5.	Descartar cardiopatía congénita crítica antes del alta.
Perlas de examen
✅ La mano derecha corresponde a la medición preductal.
✅ Los miembros inferiores corresponden a la medición postductal.
✅ Diferencia >3% es un tamizaje anormal.
✅ Saturación <95% también es criterio de positividad.
✅ El tamizaje se realiza antes del egreso neonatal.
✅ Un recién nacido puede tener cardiopatía crítica sin cianosis evidente.
✅ El ecocardiograma es el estudio confirmatorio de elección.
Referencias
• Ministerio de Salud y Protección Social de Colombia. Lineamientos de Tamizaje Neonatal.
• American Academy of Pediatrics.
• Nelson Textbook of Pediatrics.
• American Heart Association Guidelines.
• UpToDate: Screening for Critical Congenital Heart Disease in Newborns.`,
  },
  {
    id: "dr-q-237",
    examArea: "GINECOLOGÍA Y PLANIFICACIÓN FAMILIAR",
    topic: "GINECOLOGÍA Y PLANIFICACIÓN FAMILIAR",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_planificacion_familiar"],
    statement: "Mujer de 20 años consulta por sangrado uterino irregular persistente desde hace 5 meses. Utiliza implante subdérmico de levonorgestrel como método anticonceptivo. Refiere afectación de su calidad de vida, pero desea continuar utilizando el método. El examen físico es normal y no existen signos de anemia.\n¿Cuál es la conducta terapéutica más adecuada?",
    options: [
      { id: "A", label: "A", text: "Retirar inmediatamente el implante subdérmico." },
      { id: "B", label: "B", text: "Iniciar anticonceptivos orales combinados por corto tiempo para control del sangrado." },
      { id: "C", label: "C", text: "Realizar legrado uterino diagnóstico." },
      { id: "D", label: "D", text: "Suspender toda intervención y explicar que es un efecto esperado." },
    ],
    correctOptionId: "B",
    explanation: "El sangrado uterino irregular es el efecto adverso más frecuente de los implantes de progestágeno. Cuando la paciente desea continuar con el método y se han descartado otras causas, puede realizarse tratamiento médico temporal con estrógenos o anticonceptivos combinados para mejorar el patrón de sangrado.",
    keyPoints: [
      "Cuando veas: Implante subdérmico. Sangrado irregular persistente. Paciente desea conservar el método. Sin signos de alarma.",
      "Debes pensar en: Manejo médico del sangrado asociado al implante.",
      "Tema: Anticoncepción hormonal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los efectos adversos más frecuentes de los implantes anticonceptivos.
La clave no es el sangrado.
La clave es:
Que la paciente desea continuar con el método.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Sangrado irregular prolongado.
• Uso de implante de solo progestágeno.
• Ausencia de anemia.
• Examen normal.
Esto corresponde a:
Sangrado uterino asociado al implante.
¿Cuál es el manejo inicial?
Luego de descartar:
• Embarazo.
• Infección.
• Patología estructural.
Puede ofrecerse:
• Anticonceptivo oral combinado por corto tiempo.
• Estrógenos.
• Algunos protocolos utilizan AINEs.
¿Qué se busca?
Estabilizar el endometrio.
Y disminuir:
Los episodios de sangrado irregular.
¿Por qué NO retirar el implante?
Porque:
La paciente desea conservarlo.
Además:
La mayoría mejora con manejo médico.
¿Por qué NO realizar legrado?
No existe:
Sangrado severo ni sospecha de patología endometrial.
¿Por qué NO limitarse a observar?
Porque:
El sangrado está afectando significativamente su calidad de vida.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"5 meses de sangrado."
Y responden:
Retirar el implante.
Sin embargo:
El dato decisivo es:
La paciente desea continuar el método.
Esto orienta a:
Tratamiento médico antes de retirarlo.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar que el sangrado es secundario al implante.
2.	Descartar otras causas.
3.	Evaluar impacto clínico.
4.	Ofrecer manejo farmacológico.
5.	Mantener el método si la paciente lo desea.
Perlas de examen
✅ El sangrado irregular es el efecto adverso más frecuente de los implantes.
✅ No disminuye la eficacia anticonceptiva.
✅ Los anticonceptivos combinados pueden utilizarse temporalmente para controlar el sangrado.
✅ Los AINEs también pueden ser útiles en algunos casos.
✅ El retiro del implante no es la primera medida si la paciente desea conservarlo.
✅ Siempre debe descartarse embarazo antes de atribuir el sangrado al método.
✅ La consejería adecuada mejora la adherencia al implante.
Referencias
• WHO Family Planning Handbook.
• CDC U.S. Selected Practice Recommendations for Contraceptive Use.
• ACOG Long-Acting Reversible Contraception Guidelines.
• Williams Gynecology.
• UpToDate: Management of Bleeding Irregularities with Progestin-Only Contraceptives.`,
  },
  {
    id: "dr-q-238",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "Hombre de 78 años consulta por dolor en fosa ilíaca izquierda, fiebre y náuseas. La tomografía abdominal reporta engrosamiento del colon sigmoide con infiltración de la grasa pericólica, sin evidencia de abscesos, fístulas, neumoperitoneo ni peritonitis.\n¿Cuál es la clasificación de Hinchey y el manejo inicial más adecuado?",
    options: [
      { id: "A", label: "A", text: "Hinchey Ia; manejo conservador con antibióticos y observación." },
      { id: "B", label: "B", text: "Hinchey Ib; drenaje percutáneo urgente." },
      { id: "C", label: "C", text: "Hinchey III; laparotomía exploratoria urgente." },
      { id: "D", label: "D", text: "Hinchey IV; procedimiento de Hartmann." },
    ],
    correctOptionId: "A",
    explanation: "La diverticulitis aguda no complicada con inflamación pericólica y ausencia de abscesos o perforación corresponde a un Hinchey Ia. El manejo inicial suele ser conservador con antibióticos, analgesia, hidratación y vigilancia clínica.",
    keyPoints: [
      "Cuando veas: Dolor en fosa ilíaca izquierda. Engrosamiento sigmoideo. Inflamación de grasa pericólica. Sin absceso.",
      "Debes pensar en: Diverticulitis aguda no complicada.",
      "Tema: Diverticulitis aguda.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la clasificación tomográfica de Hinchey.
La clave no es el dolor.
La clave es:
La ausencia de complicaciones.
¿Qué está ocurriendo realmente?
La TAC muestra:
• Engrosamiento del sigmoides.
• Estriación de grasa pericólica.
Pero no evidencia:
• Absceso.
• Perforación.
• Peritonitis.
Esto corresponde a:
Hinchey Ia.
¿Cómo recordar la clasificación?
Hinchey Ia:
• Inflamación pericólica o flemón.
Hinchey Ib:
• Absceso pericólico.
Hinchey II:
• Absceso pélvico o a distancia.
Hinchey III:
• Peritonitis purulenta.
Hinchey IV:
• Peritonitis fecaloidea.
¿Cuál es el tratamiento?
Inicialmente:
• Antibióticos.
• Analgesia.
• Hidratación.
• Observación clínica.
¿Por qué NO drenaje percutáneo?
Porque:
No existe colección o absceso.
¿Por qué NO cirugía?
Porque:
No hay perforación ni peritonitis.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Paciente anciano con fiebre."
Y responden:
Cirugía.
Sin embargo:
El dato decisivo es:
La TAC sin abscesos ni neumoperitoneo.
Esto define:
Diverticulitis no complicada.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar diverticulitis.
2.	Buscar abscesos.
3.	Buscar perforación.
4.	Clasificar según Hinchey.
5.	Elegir manejo conservador o quirúrgico.
Perlas de examen
✅ El dolor en fosa ilíaca izquierda es la presentación clásica.
✅ Hinchey Ia corresponde a inflamación pericólica.
✅ La TAC es el estudio diagnóstico de elección.
✅ Los abscesos pequeños pueden manejarse conservadoramente.
✅ Los abscesos grandes suelen requerir drenaje.
✅ Hinchey III y IV generalmente requieren cirugía.
✅ La diverticulitis complicada se asocia a perforación, abscesos o peritonitis.
Referencias
• Schwartz's Principles of Surgery.
• Sabiston Textbook of Surgery.
• ASCRS Guidelines for Diverticulitis.
• UpToDate: Acute Colonic Diverticulitis.
• World Society of Emergency Surgery Guidelines.`,
  },
  {
    id: "dr-q-239",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement: "Mujer de 45 años presenta episodios recurrentes de desconexión del entorno de aproximadamente 3 minutos de duración. Durante los eventos presenta mirada fija y movimientos automáticos repetitivos de la boca. Al finalizar el episodio permanece desorientada y confusa durante varios minutos.\n¿Cuál es el tipo de crisis epiléptica más probable y cuál es el tratamiento de primera línea?",
    options: [
      { id: "A", label: "A", text: "Crisis de ausencia; etosuximida." },
      { id: "B", label: "B", text: "Crisis focal con alteración de la conciencia (focal compleja); levetiracetam." },
      { id: "C", label: "C", text: "Crisis tónico-clónica generalizada; fenitoína." },
      { id: "D", label: "D", text: "Crisis mioclónica; ácido valproico." },
    ],
    correctOptionId: "B",
    explanation: "La presencia de desconexión del medio, automatismos orales y período posictal confusional es altamente sugestiva de una crisis focal con alteración de la conciencia, frecuentemente originada en el lóbulo temporal.",
    keyPoints: [
      "Cuando veas: Mirada fija. Automatismos orales. Duración de minutos. Confusión posictal.",
      "Debes pensar en: Crisis focal con alteración de la conciencia.",
      "Tema: Epilepsia focal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el reconocimiento clínico de las crisis focales temporales.
La clave no es la desconexión.
La clave es:
Los automatismos y la confusión posterior.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Desconexión del entorno.
• Automatismos orales.
• Mirada fija.
• Estado posictal.
Estos hallazgos son característicos de:
Crisis focal con alteración de la conciencia.
¿Dónde suelen originarse?
Con mayor frecuencia en:
Lóbulo temporal.
¿Qué son los automatismos?
Movimientos involuntarios repetitivos como:
• Masticación.
• Chasquido de labios.
• Deglución.
• Manipulación de objetos.
Son muy característicos de:
Epilepsia temporal.
¿Cuál es el tratamiento de primera línea?
Actualmente uno de los fármacos más utilizados como primera línea es:
Levetiracetam.
También pueden emplearse:
• Lamotrigina.
• Carbamazepina.
¿Por qué NO es crisis de ausencia?
Las ausencias típicamente:
• Duran segundos.
• No presentan período posictal.
• Son más frecuentes en niños.
¿Por qué NO es crisis tónico-clónica?
No existen:
• Sacudidas generalizadas.
• Fase tónica.
• Fase clónica.
¿Por qué NO es crisis mioclónica?
Las mioclonías son:
Contracciones musculares breves.
No producen automatismos ni confusión prolongada.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Desconexión del entorno."
Y responden:
Crisis de ausencia.
Sin embargo:
El dato decisivo es:
La duración de varios minutos y la confusión posictal.
Esto orienta a:
Crisis focal con alteración de la conciencia.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la alteración de conciencia.
2.	Buscar automatismos.
3.	Evaluar período posictal.
4.	Reconocer origen focal temporal.
5.	Iniciar tratamiento antiepiléptico.
Perlas de examen
✅ Los automatismos orales sugieren epilepsia del lóbulo temporal.
✅ La confusión posictal es típica de las crisis focales complejas.
✅ Las ausencias no presentan período posictal.
✅ Levetiracetam es una terapia de primera línea ampliamente utilizada.
✅ La resonancia cerebral suele formar parte del estudio etiológico.
✅ El EEG puede mostrar descargas focales temporales.
✅ Las crisis focales son el tipo más frecuente de epilepsia en adultos.
Referencias
• Adams and Victor's Principles of Neurology.
• Bradley's Neurology in Clinical Practice.
• ILAE Classification of Seizures.
• Harrison's Principles of Internal Medicine.
• UpToDate: Focal Seizures in Adults.`,
  },
  {
    id: "dr-q-240",
    examArea: "PSIQUIATRÍA",
    topic: "PSIQUIATRÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","psiquiatria"],
    statement: "Mujer de 38 años con antecedente de trastorno depresivo mayor en tratamiento con un inhibidor selectivo de la recaptación de serotonina (ISRS), consulta a urgencias por llanto persistente, pensamientos negativos e ideación de muerte. Durante la valoración presenta agitación psicomotora, verborrea e insomnio de varios días de evolución.\n¿Cuál es el diagnóstico más probable y el tratamiento de urgencia más adecuado?",
    options: [
      { id: "A", label: "A", text: "Episodio depresivo mayor; aumentar la dosis del ISRS." },
      { id: "B", label: "B", text: "Trastorno bipolar en episodio mixto; suspender antidepresivo e iniciar estabilizador del ánimo y antipsicótico." },
      { id: "C", label: "C", text: "Delirium; haloperidol intravenoso." },
      { id: "D", label: "D", text: "Trastorno de ansiedad generalizada; benzodiacepina y egreso." },
    ],
    correctOptionId: "B",
    explanation: "La coexistencia de síntomas depresivos (llanto, desesperanza, ideación de muerte) con síntomas maniformes (verborrea, agitación psicomotora e insomnio con aumento de energía) es altamente sugestiva de un episodio mixto del trastorno bipolar. Los antidepresivos pueden precipitar o desenmascarar estos episodios.",
    keyPoints: [
      "Cuando veas: Síntomas depresivos. Verborrea. Agitación. Disminución de la necesidad de sueño. Uso de antidepresivos.",
      "Debes pensar en: Episodio mixto bipolar.",
      "Tema: Trastorno bipolar.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los cuadros psiquiátricos con mayor riesgo suicida.
La clave no es la depresión.
La clave es:
La presencia simultánea de síntomas maníacos.
¿Qué está ocurriendo realmente?
La paciente presenta:
Síntomas depresivos:
• Llanto.
• Pensamientos negativos.
• Ideación de muerte.
Y simultáneamente:
• Verborrea.
• Agitación psicomotora.
• Insomnio.
Esto corresponde a:
Episodio mixto bipolar.
¿Qué es un episodio mixto?
Es la coexistencia de:
Síntomas depresivos y maníacos al mismo tiempo.
¿Por qué es importante?
Porque tiene:
Mayor riesgo suicida.
Mayor impulsividad.
Mayor riesgo de hospitalización.
¿Cuál es la conducta inicial?
• Suspender o reevaluar el antidepresivo.
• Iniciar estabilizador del ánimo.
Ejemplos:
• Litio.
• Valproato.
Y frecuentemente:
• Antipsicóticos atípicos (quetiapina, olanzapina, risperidona, entre otros).
¿Qué hacer en urgencias?
Si existe:
• Riesgo suicida.
• Agitación importante.
• Episodio mixto severo.
Debe considerarse:
Hospitalización psiquiátrica.
¿Por qué NO aumentar el ISRS?
Porque:
Podría empeorar la descompensación bipolar.
¿Por qué NO es delirium?
El delirium cursa con:
• Alteración fluctuante de conciencia.
• Déficit atencional.
Datos ausentes en el caso.
¿Por qué NO es ansiedad generalizada?
La ansiedad no explica:
La verborrea ni el cuadro mixto afectivo.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Depresión."
Y responden:
Aumentar el antidepresivo.
Sin embargo:
El dato decisivo es:
La presencia simultánea de síntomas maníacos.
Esto orienta a:
Trastorno bipolar en episodio mixto.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar síntomas depresivos.
2.	Buscar síntomas maniformes.
3.	Reconocer episodio mixto.
4.	Suspender o reevaluar antidepresivos.
5.	Iniciar estabilizador del ánimo y antipsicótico.
Perlas de examen
✅ El episodio mixto tiene uno de los mayores riesgos de suicidio en psiquiatría.
✅ Los ISRS pueden precipitar manía o episodios mixtos.
✅ El litio reduce el riesgo suicida.
✅ Los antipsicóticos atípicos son útiles en el control agudo.
✅ La disminución de la necesidad de sueño es un síntoma cardinal de manía.
✅ La verborrea es un hallazgo clásico de activación maníaca.
✅ Todo paciente con ideación suicida requiere valoración urgente del riesgo.
Referencias
• DSM-5-TR.
• Kaplan & Sadock's Synopsis of Psychiatry.
• American Psychiatric Association Guidelines.
• Stahl's Essential Psychopharmacology.
• UpToDate: Bipolar Disorder in Adults.`,
  },
  {
    id: "dr-q-241",
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neurologia"],
    statement: "Hombre de 35 años consulta por dolor lumbar y parestesias progresivas en miembros inferiores una semana después de una infección respiratoria. En los días siguientes desarrolla debilidad ascendente y parálisis facial bilateral. Se encuentra alerta, orientado y sin alteraciones del estado de conciencia. Un estudio inicial de electromiografía no muestra hallazgos concluyentes.\n¿Cuál es el tratamiento inicial más adecuado?",
    options: [
      { id: "A", label: "A", text: "Metilprednisolona intravenosa en altas dosis." },
      { id: "B", label: "B", text: "Inmunoglobulina intravenosa." },
      { id: "C", label: "C", text: "Interferón beta." },
      { id: "D", label: "D", text: "Acetazolamida." },
    ],
    correctOptionId: "B",
    explanation: "El cuadro es altamente sugestivo de síndrome de Guillain-Barré, una polirradiculoneuropatía inflamatoria aguda autoinmune. El tratamiento de primera línea consiste en inmunoglobulina intravenosa o plasmaféresis.",
    keyPoints: [
      "Cuando veas: Infección respiratoria reciente. Parestesias ascendentes. Debilidad progresiva. Parálisis facial bilateral. Estado de conciencia conservado.",
      "Debes pensar en: Síndrome de Guillain-Barré.",
      "Tema: Neuropatías desmielinizantes.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la emergencia neurológica periférica más preguntada en los exámenes.
La clave no es la electromiografía.
La clave es:
La progresión ascendente de los síntomas.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Infección reciente.
• Dolor lumbar.
• Parestesias.
• Debilidad ascendente.
• Parálisis facial bilateral.
Estos hallazgos son típicos de:
Síndrome de Guillain-Barré.
¿Por qué puede ser normal la EMG?
Durante los primeros días:
La electromiografía puede ser completamente normal.
Por ello:
Un estudio inicial normal no descarta el diagnóstico.
¿Cuál es el tratamiento?
Las dos terapias efectivas son:
• Inmunoglobulina intravenosa (IVIG).
• Plasmaféresis.
Ambas tienen eficacia similar.
¿Qué debe vigilarse?
La principal complicación es:
Insuficiencia respiratoria.
Por ello debe monitorizarse:
• Capacidad vital forzada.
• Función bulbar.
• Saturación de oxígeno.
¿Por qué NO usar corticoides?
A diferencia de otras enfermedades autoinmunes:
Los corticoides no han demostrado beneficio clínico significativo en Guillain-Barré.
¿Por qué NO interferón beta?
Porque se utiliza en:
Esclerosis múltiple.
¿Por qué NO acetazolamida?
Se emplea en:
Hipertensión intracraneal idiopática.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"EMG normal."
Y descartan Guillain-Barré.
Sin embargo:
El dato decisivo es:
La debilidad ascendente posterior a infección.
Esto orienta claramente a:
Síndrome de Guillain-Barré.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar antecedente infeccioso.
2.	Reconocer debilidad ascendente.
3.	Buscar compromiso facial bilateral.
4.	Sospechar Guillain-Barré.
5.	Iniciar inmunoglobulina intravenosa o plasmaféresis.
Perlas de examen
✅ Campylobacter jejuni es el desencadenante clásico.
✅ La parálisis facial bilateral es frecuente.
✅ La EMG puede ser normal al inicio.
✅ El LCR suele mostrar disociación albúmino-citológica.
✅ La inmunoglobulina intravenosa es tratamiento de primera línea.
✅ Los corticoides no mejoran el pronóstico.
✅ La insuficiencia respiratoria es la principal causa de morbimortalidad.
Referencias
• Adams and Victor's Principles of Neurology.
• Bradley's Neurology in Clinical Practice.
• Harrison's Principles of Internal Medicine.
• UpToDate: Guillain-Barré Syndrome in Adults.
• American Academy of Neurology Guidelines.`,
  },
  {
    id: "dr-q-242",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Mujer de 27 años, secundigestante de 13 semanas de gestación, acude a control prenatal. Refiere antecedente de preeclampsia severa en un embarazo previo. Durante la valoración actual se documentan cifras tensionales de 150/90 mmHg en dos mediciones separadas. No presenta proteinuria ni datos de daño a órgano blanco.\n¿Cuál es el diagnóstico y el tratamiento más adecuado?",
    options: [
      { id: "A", label: "A", text: "Hipertensión gestacional; iniciar sulfato de magnesio." },
      { id: "B", label: "B", text: "Preeclampsia sin criterios de severidad; finalizar la gestación." },
      { id: "C", label: "C", text: "Hipertensión arterial crónica; iniciar antihipertensivo y ácido acetilsalicílico a baja dosis." },
      { id: "D", label: "D", text: "Hipertensión transitoria del embarazo; observación únicamente." },
    ],
    correctOptionId: "C",
    explanation: "La hipertensión diagnosticada antes de las 20 semanas de gestación corresponde a hipertensión arterial crónica. Además, esta paciente presenta alto riesgo de recurrencia de preeclampsia por antecedente de preeclampsia severa, por lo que requiere profilaxis con ácido acetilsalicílico a dosis bajas.",
    keyPoints: [
      "Cuando veas: Hipertensión antes de las 20 semanas. Antecedente de preeclampsia. Ausencia de proteinuria.",
      "Debes pensar en: Hipertensión arterial crónica.",
      "Tema: Trastornos hipertensivos del embarazo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la diferencia entre hipertensión crónica y preeclampsia.
La clave no es la presión arterial.
La clave es:
La edad gestacional.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Embarazo de 13 semanas.
• TA ≥140/90 mmHg.
• Sin proteinuria.
• Sin daño orgánico.
Por definición:
La hipertensión diagnosticada antes de las 20 semanas corresponde a:
Hipertensión arterial crónica.
¿Por qué NO es preeclampsia?
Porque la preeclampsia clásicamente aparece:
Después de las 20 semanas.
Salvo situaciones excepcionales.
¿Qué tratamiento debe recibir?
Control tensional con fármacos seguros en el embarazo:
• Labetalol.
• Nifedipino.
• Metildopa.
Además:
Ácido acetilsalicílico en dosis bajas (75-150 mg/día, habitualmente 100 mg/día).
¿Por qué usar aspirina?
Porque presenta:
Antecedente de preeclampsia severa.
Lo que la convierte en:
Paciente de alto riesgo.
¿Cuándo debe iniciarse?
Idealmente:
Entre las 12 y 16 semanas.
Y mantenerse hasta:
36-37 semanas según protocolo.
¿Por qué NO sulfato de magnesio?
El sulfato de magnesio se utiliza para:
• Prevención de eclampsia.
• Tratamiento de convulsiones.
No para hipertensión crónica aislada.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Antecedente de preeclampsia."
Y responden:
Preeclampsia actual.
Sin embargo:
El dato decisivo es:
La hipertensión antes de las 20 semanas.
Esto define:
Hipertensión arterial crónica.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar la edad gestacional.
2.	Clasificar la hipertensión.
3.	Reconocer factores de alto riesgo.
4.	Iniciar antihipertensivo seguro.
5.	Prescribir aspirina profiláctica.
Perlas de examen
✅ Hipertensión antes de las 20 semanas = hipertensión crónica.
✅ La preeclampsia suele aparecer después de las 20 semanas.
✅ Antecedente de preeclampsia severa es indicación de aspirina profiláctica.
✅ Labetalol y nifedipino son tratamientos de elección.
✅ Los IECA y ARA-II están contraindicados en embarazo.
✅ La aspirina disminuye el riesgo de recurrencia de preeclampsia.
✅ El seguimiento obstétrico debe ser estrecho por el alto riesgo materno-fetal.
Referencias
• ACOG Practice Bulletin: Chronic Hypertension in Pregnancy.
• ISSHP Guidelines for Hypertensive Disorders of Pregnancy.
• Williams Obstetrics.
• FIGO Recommendations on Preeclampsia Prevention.
• UpToDate: Chronic Hypertension in Pregnancy.`,
  },
  {
    id: "dr-q-243",
    examArea: "BÁSICAS- ANATOMÍA - CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","cirugia_general"],
    statement: "¿Cuál de las siguientes estructuras atraviesa el conducto inguinal en el hombre y cuál en la mujer?",
    options: [
      { id: "A", label: "A", text: "Hombre: ligamento redondo del útero / Mujer: cordón espermático." },
      { id: "B", label: "B", text: "Hombre: cordón espermático / Mujer: ligamento redondo del útero." },
      { id: "C", label: "C", text: "Hombre: arteria epigástrica inferior / Mujer: vena safena magna." },
      { id: "D", label: "D", text: "Hombre: nervio femoral / Mujer: nervio obturador." },
    ],
    correctOptionId: "B",
    explanation: "El conducto inguinal contiene el cordón espermático en el hombre y el ligamento redondo del útero en la mujer. En ambos sexos también atraviesa el nervio ilioinguinal.",
    keyPoints: [
      "Cuando veas: Conducto inguinal. Anatomía quirúrgica. Hernias inguinales.",
      "Debes pensar en: Cordón espermático y ligamento redondo.",
      "Tema: Conducto inguinal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las relaciones anatómicas más preguntadas en cirugía general.
La clave no es el conducto.
La clave es:
Su contenido.
¿Qué atraviesa el conducto inguinal en el hombre?
El principal contenido es:
• Cordón espermático.
Dentro de él transcurren:
• Conducto deferente.
• Arteria testicular.
• Plexo pampiniforme.
• Vasos cremastéricos.
• Ramas nerviosas.
¿Qué atraviesa el conducto inguinal en la mujer?
El principal contenido es:
• Ligamento redondo del útero.
Este se extiende:
Desde el útero hasta los labios mayores.
¿Qué estructura atraviesa el conducto en ambos sexos?
El:
• Nervio ilioinguinal.
Es una pregunta frecuente de examen.
¿Por qué es importante clínicamente?
Porque:
Las hernias inguinales siguen el trayecto del conducto inguinal.
Y durante la cirugía:
Deben identificarse estas estructuras para evitar lesiones.
¿Cuál es la trampa de examen?
Muchos estudiantes invierten:
Los contenidos masculinos y femeninos.
Por ello debes recordar:
👉 Hombre = cordón espermático.
👉 Mujer = ligamento redondo.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar el conducto inguinal.
2.	Recordar el contenido masculino.
3.	Recordar el contenido femenino.
4.	Reconocer el nervio ilioinguinal en ambos sexos.
5.	Relacionarlo con hernias inguinales.
Perlas de examen
✅ Hombre → cordón espermático.
✅ Mujer → ligamento redondo del útero.
✅ El nervio ilioinguinal atraviesa el conducto en ambos sexos.
✅ El anillo inguinal profundo se localiza lateral a los vasos epigástricos inferiores.
✅ Las hernias indirectas atraviesan el anillo inguinal profundo.
✅ Las hernias directas protruyen a través del triángulo de Hesselbach.
✅ Es una de las preguntas anatómicas más frecuentes en cirugía.
Referencias
• Moore. Anatomía con Orientación Clínica.
• Gray's Anatomy.
• Netter Atlas de Anatomía Humana.
• Schwartz's Principles of Surgery.
• Sabiston Textbook of Surgery.`,
  },
  {
    id: "dr-q-244",
    examArea: "BÁSICAS-SEMIOLOGÍA - ONCOLOGÍA",
    topic: "ONCOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","oncologia"],
    statement: "Durante el examen físico de un paciente se identifica una adenopatía supraclavicular izquierda dura, fija e indolora, compatible con ganglio de Virchow.\n¿Con cuál de las siguientes patologías se asocia clásicamente este hallazgo?",
    options: [
      { id: "A", label: "A", text: "Cáncer de pulmón." },
      { id: "B", label: "B", text: "Linfoma de Hodgkin." },
      { id: "C", label: "C", text: "Adenocarcinoma gástrico." },
      { id: "D", label: "D", text: "Carcinoma de tiroides." },
    ],
    correctOptionId: "C",
    explanation: "El ganglio de Virchow corresponde a una adenopatía supraclavicular izquierda secundaria a diseminación metastásica por vía linfática. Clásicamente se asocia al cáncer gástrico avanzado.",
    keyPoints: [
      "Cuando veas: Adenopatía supraclavicular izquierda. Ganglio duro. Ganglio indoloro.",
      "Debes pensar en: Cáncer gástrico.",
      "Tema: Semiología oncológica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa uno de los signos semiológicos más importantes en oncología.
La clave no es el ganglio.
La clave es:
Su localización.
¿Qué es el ganglio de Virchow?
Es una adenopatía localizada en:
La región supraclavicular izquierda.
¿Por qué aparece?
Porque recibe drenaje linfático proveniente de:
• Abdomen.
• Retroperitoneo.
• Tubo digestivo.
Por ello puede actuar como:
Sitio de metástasis a distancia.
¿Con qué cáncer se asocia clásicamente?
La asociación histórica más importante es:
Adenocarcinoma gástrico.
Por eso también se conoce como:
"Nódulo centinela de Troisier."
¿Qué otros tumores pueden producirlo?
También puede observarse en:
• Cáncer pancreático.
• Cáncer colorrectal.
• Cáncer de ovario.
• Linfomas.
Sin embargo, para examen:
Virchow = cáncer gástrico.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
Cáncer pulmonar.
Porque asocian:
Ganglio supraclavicular.
Sin embargo:
El dato decisivo es:
Que se encuentra en el lado izquierdo.
Esto orienta a:
Metástasis abdominal, especialmente gástrica.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar adenopatía supraclavicular izquierda.
2.	Reconocer ganglio de Virchow.
3.	Relacionarlo con drenaje linfático abdominal.
4.	Sospechar malignidad digestiva.
5.	Pensar principalmente en cáncer gástrico.
Perlas de examen
✅ Ganglio de Virchow = adenopatía supraclavicular izquierda.
✅ También se denomina nódulo de Troisier.
✅ Sugiere metástasis abdominal.
✅ La asociación clásica es adenocarcinoma gástrico.
✅ Es un hallazgo de enfermedad avanzada.
✅ Generalmente es duro, fijo e indoloro.
✅ Constituye un signo semiológico de alta relevancia oncológica.
Referencias
• Bates' Guide to Physical Examination.
• DeGowin's Diagnostic Examination.
• Schwartz's Principles of Surgery.
• Sabiston Textbook of Surgery.
• Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-245",
    examArea: "BÁSICAS- EMBRIOLOGÍA Y OBSTETRICIA",
    topic: "EMBRIOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","embriologia_y_obstetricia"],
    statement: "¿Cuál de las siguientes estructuras embrionarias da origen a la placenta y se encuentra directamente implicada en la fisiopatología de trastornos hipertensivos del embarazo como la preeclampsia?",
    options: [
      { id: "A", label: "A", text: "Amnios." },
      { id: "B", label: "B", text: "Trofoblasto." },
      { id: "C", label: "C", text: "Saco vitelino." },
      { id: "D", label: "D", text: "Alantoides." },
    ],
    correctOptionId: "B",
    explanation: "El trofoblasto es la estructura embrionaria que participa en la formación de la placenta. La invasión inadecuada del trofoblasto extravelloso sobre las arterias espirales uterinas constituye uno de los mecanismos fisiopatológicos fundamentales en el desarrollo de la preeclampsia.",
    keyPoints: [
      "Cuando veas: Placenta. Invasión de arterias espirales. Preeclampsia.",
      "Debes pensar en: Trofoblasto.",
      "Tema: Embriología placentaria.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque integra embriología y obstetricia.
La clave no es la placenta.
La clave es:
La invasión trofoblástica.
¿Qué ocurre normalmente?
El trofoblasto se diferencia en:
• Citotrofoblasto.
• Sincitiotrofoblasto.
Posteriormente:
El trofoblasto extravelloso invade las arterias espirales maternas.
¿Para qué sirve esta invasión?
Transforma arterias de:
• Alta resistencia.
En vasos de:
• Baja resistencia.
• Alto flujo.
Garantizando:
Adecuada perfusión placentaria.
¿Qué ocurre en la preeclampsia?
Existe:
Invasión trofoblástica incompleta.
Como consecuencia:
Las arterias espirales permanecen estrechas.
Esto produce:
• Hipoperfusión placentaria.
• Isquemia placentaria.
• Liberación de factores antiangiogénicos.
• Disfunción endotelial materna.
Resultado final:
Preeclampsia.
¿Por qué NO es el amnios?
El amnios forma:
La cavidad amniótica.
No participa en la formación de la placenta.
¿Por qué NO es el saco vitelino?
El saco vitelino participa en:
La hematopoyesis primitiva.
No en la invasión placentaria.
¿Por qué NO es el alantoides?
El alantoides contribuye a:
La formación del uraco.
No es el origen de la placenta.
¿Cuál es la trampa de examen?
Muchos estudiantes responden:
Sincitiotrofoblasto.
Sin embargo:
La pregunta solicita la estructura embrionaria principal.
La respuesta correcta es:
Trofoblasto.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Trofoblasto.
2.	Formación placentaria.
3.	Invasión de arterias espirales.
4.	Remodelación vascular uterina.
5.	Preeclampsia cuando este proceso falla.
Perlas de examen
✅ El trofoblasto origina la porción fetal de la placenta.
✅ El citotrofoblasto y sincitiotrofoblasto derivan del trofoblasto.
✅ La invasión trofoblástica es esencial para la perfusión placentaria.
✅ La falla de remodelación de arterias espirales es un mecanismo central de la preeclampsia.
✅ La placenta es el órgano clave en la fisiopatología de la preeclampsia.
✅ La resolución definitiva de la preeclampsia ocurre con la extracción de la placenta.
✅ Es una de las preguntas clásicas de embriología aplicada a obstetricia.
Referencias
• Langman's Embryology.
• Moore. The Developing Human.
• Williams Obstetrics.
• Cunningham Obstetricia.
• ACOG Practice Bulletin: Preeclampsia and Hypertension in Pregnancy.`,
  },
  {
    id: "dr-q-246",
    examArea: "BÁSICAS-NEUROANATOMÍA",
    topic: "NEUROANATOMÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","neuroanatomia"],
    statement: "Hombre de 30 años consulta por visión doble que empeora al mirar hacia la izquierda. Al examen neurológico se evidencia limitación para la abducción del ojo izquierdo. Los reflejos pupilares son normales.\nDurante la evaluación de los músculos extraoculares, además de los pares craneales III (oculomotor) y VI (abducens), ¿qué otro par craneal participa en la motilidad ocular?",
    options: [
      { id: "A", label: "A", text: "Par craneal II (óptico)." },
      { id: "B", label: "B", text: "Par craneal IV (troclear)." },
      { id: "C", label: "C", text: "Par craneal V (trigémino)." },
      { id: "D", label: "D", text: "Par craneal VII (facial)." },
    ],
    correctOptionId: "B",
    explanation: "La motilidad ocular extrínseca depende de tres pares craneales: III (oculomotor), IV (troclear) y VI (abducens). El nervio troclear inerva el músculo oblicuo superior.",
    keyPoints: [
      "Cuando veas: Movimientos oculares. Diplopía. Músculos extraoculares.",
      "Debes pensar en: Pares III, IV y VI.",
      "Tema: Pares craneales.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica de neuroanatomía.
La clave no es la diplopía.
La clave es:
Recordar la inervación de los músculos extraoculares.
¿Qué nervios controlan los movimientos oculares?
Existen tres:
• III par: Oculomotor.
• IV par: Troclear.
• VI par: Abducens.
¿Qué inerva cada uno?
III par:
• Recto superior.
• Recto inferior.
• Recto medial.
• Oblicuo inferior.
• Elevador del párpado.
IV par:
• Oblicuo superior.
VI par:
• Recto lateral.
¿Cómo recordarlo?
La regla clásica:
LR6 SO4 AO3
(Lateral Rectus VI, Superior Oblique IV, All Others III)
¿Qué lesión tiene este paciente?
La limitación de la abducción indica:
Compromiso del VI par craneal izquierdo.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan únicamente:
III y VI.
Pero olvidan:
El IV par craneal.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar alteración de la motilidad ocular.
2.	Recordar los músculos extraoculares.
3.	Asociar cada músculo a su nervio.
4.	Aplicar la regla LR6 SO4 AO3.
5.	Reconocer que participan III, IV y VI.
Perlas de examen
✅ El nervio troclear inerva exclusivamente el oblicuo superior.
✅ El troclear es el único par craneal que emerge por la cara dorsal del tronco encefálico.
✅ El abducens inerva el recto lateral.
✅ El oculomotor inerva todos los músculos extraoculares restantes.
✅ LR6 SO4 AO3 es una regla clásica de examen.
✅ La lesión del VI produce incapacidad para la abducción.
✅ La lesión del IV produce diplopía vertical que empeora al mirar hacia abajo.
Referencias
• Snell Neuroanatomía Clínica.
• Moore Anatomía con Orientación Clínica.
• Adams and Victor's Neurology.
• Gray's Anatomy.
• Netter Atlas de Anatomía Humana.`,
  },
  {
    id: "dr-q-247",
    examArea: "MEDICINA INTERNA",
    topic: "MEDICINA INTERNA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","medicina_interna"],
    statement: "Hombre de 62 años con diagnóstico reciente de hipertensión arterial inicia tratamiento farmacológico. Pocos días después presenta un episodio de síncope mientras caminaba. En el servicio de urgencias se documenta presión arterial de 140/90 mmHg y frecuencia cardíaca de 42 lpm. No presenta alteraciones neurológicas ni otros hallazgos relevantes.\n¿Cuál de los siguientes medicamentos es el más probable responsable del cuadro?",
    options: [
      { id: "A", label: "A", text: "Amlodipino." },
      { id: "B", label: "B", text: "Hidroclorotiazida." },
      { id: "C", label: "C", text: "Metoprolol." },
      { id: "D", label: "D", text: "Losartán." },
    ],
    correctOptionId: "C",
    explanation: "Los betabloqueadores disminuyen la frecuencia cardíaca al bloquear los receptores β1 cardíacos. Una de sus reacciones adversas más importantes es la bradicardia sintomática, que puede manifestarse con síncope.",
    keyPoints: [
      "Cuando veas: Síncope. Bradicardia. Inicio reciente de antihipertensivo.",
      "Debes pensar en: Betabloqueadores.",
      "Tema: Antihipertensivos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa los efectos adversos cardiovasculares de los antihipertensivos.
La clave no es el síncope.
La clave es:
La frecuencia cardíaca de 42 lpm.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Bradicardia marcada.
• Episodio sincopal.
• Inicio reciente de tratamiento.
Esto orienta a:
Exceso de bloqueo del nodo sinusal.
¿Qué medicamento produce esto?
El más clásico es:
Metoprolol.
¿Cómo actúa?
Bloquea receptores β1 cardíacos produciendo:
• Disminución de frecuencia cardíaca.
• Disminución de contractilidad.
• Disminución de conducción AV.
¿Cuáles son los efectos adversos más importantes?
• Bradicardia.
• Bloqueo AV.
• Hipotensión.
• Fatiga.
• Síncope.
¿Por qué NO es amlodipino?
El amlodipino produce:
• Vasodilatación.
• Edema periférico.
Generalmente no produce bradicardia significativa.
¿Por qué NO es hidroclorotiazida?
La hidroclorotiazida suele producir:
• Hipokalemia.
• Hiponatremia.
No bradicardia.
¿Por qué NO es losartán?
Los ARA-II no disminuyen directamente:
La frecuencia cardíaca.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Antihipertensivo."
Y responden cualquier fármaco frecuente.
Sin embargo:
El dato decisivo es:
La bradicardia marcada.
Esto orienta inmediatamente a:
Betabloqueadores.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar síncope.
2.	Revisar frecuencia cardíaca.
3.	Reconocer bradicardia significativa.
4.	Pensar en bloqueo β-adrenérgico.
5.	Identificar metoprolol como causa probable.
Perlas de examen
✅ Los betabloqueadores son causa frecuente de bradicardia medicamentosa.
✅ Metoprolol es un β1-selectivo.
✅ La bradicardia sintomática puede manifestarse con síncope.
✅ Los ARA-II no suelen alterar significativamente la frecuencia cardíaca.
✅ Los calcioantagonistas dihidropiridínicos producen vasodilatación más que bradicardia.
✅ La evaluación inicial incluye ECG para descartar trastornos de conducción.
✅ La suspensión o ajuste del fármaco suele resolver el cuadro.
Referencias
• Katzung. Basic and Clinical Pharmacology.
• Goodman & Gilman's The Pharmacological Basis of Therapeutics.
• Braunwald's Heart Disease.
• Harrison's Principles of Internal Medicine.
• ESC Guidelines for Arterial Hypertension.`,
  },
  {
    id: "dr-q-248",
    examArea: "PEDIATRÍA - INFECTOLOGÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","infectologia"],
    statement: "Niña de 10 años, previamente sana y con esquema de vacunación completo, consulta por fiebre, vómitos y aparición súbita de petequias y equimosis. Durante la valoración presenta rigidez de nuca y taquicardia.\n¿Cuál es la sospecha diagnóstica más probable y cuál es el microorganismo más frecuentemente implicado?",
    options: [
      { id: "A", label: "A", text: "Meningitis neumocócica; Streptococcus pneumoniae." },
      { id: "B", label: "B", text: "Meningococcemia con meningitis; Neisseria meningitidis." },
      { id: "C", label: "C", text: "Encefalitis viral; Virus herpes simple tipo 1." },
      { id: "D", label: "D", text: "Púrpura trombocitopénica inmune; Epstein-Barr virus." },
    ],
    correctOptionId: "B",
    explanation: "La combinación de fiebre, síndrome meníngeo y exantema petequial o purpúrico debe hacer sospechar meningococcemia invasiva hasta demostrar lo contrario. Neisseria meningitidis es el agente clásicamente asociado.",
    keyPoints: [
      "Cuando veas: Fiebre. Rigidez de nuca. Petequias o púrpura. Deterioro rápido.",
      "Debes pensar en: Meningococcemia.",
      "Tema: Meningitis bacteriana.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las emergencias infecciosas pediátricas más importantes.
La clave no es la fiebre.
La clave es:
La asociación entre meningismo y petequias.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Fiebre.
• Vómitos.
• Rigidez de nuca.
• Petequias.
• Equimosis.
Esta combinación es altamente sugestiva de:
Enfermedad meningocócica invasiva.
¿Cuál es el germen?
El agente clásico es:
Neisseria meningitidis.
¿Por qué aparecen las petequias?
Por:
• Endotoxemia.
• Vasculitis.
• Coagulación intravascular diseminada.
Esto explica la aparición de:
• Petequias.
• Púrpura.
• Equimosis.
¿Cuál es la complicación más temida?
• Shock séptico.
• Síndrome de Waterhouse-Friderichsen.
• Coagulación intravascular diseminada.
¿Cuál es el manejo inicial?
Ante la sospecha clínica:
• Hemocultivos.
• Antibióticos intravenosos inmediatos (ceftriaxona o cefotaxima).
• Soporte hemodinámico.
No debe retrasarse el tratamiento esperando estudios.
¿Por qué NO es neumococo?
Streptococcus pneumoniae es una causa frecuente de meningitis.
Sin embargo:
No se asocia clásicamente al exantema petequial fulminante.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Rigidez de nuca."
Y responden:
Neumococo.
Sin embargo:
El dato decisivo es:
La presencia de petequias y equimosis.
Esto orienta a:
Neisseria meningitidis.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar fiebre.
2.	Reconocer signos meníngeos.
3.	Buscar petequias o púrpura.
4.	Sospechar meningococcemia.
5.	Iniciar ceftriaxona inmediatamente.
Perlas de examen
✅ Petequias + meningismo = meningococo hasta demostrar lo contrario.
✅ Neisseria meningitidis es un diplococo gramnegativo.
✅ Puede evolucionar rápidamente a shock séptico.
✅ La ceftriaxona es tratamiento empírico de elección.
✅ La profilaxis de contactos cercanos es obligatoria.
✅ El síndrome de Waterhouse-Friderichsen es una complicación clásica.
✅ Es una verdadera emergencia pediátrica.
Referencias
• Nelson Textbook of Pediatrics.
• Red Book: American Academy of Pediatrics.
• Mandell, Douglas and Bennett's Infectious Diseases.
• Harrison's Principles of Internal Medicine.
• UpToDate: Meningococcal Infection.`,
  },
  {
    id: "dr-q-249",
    examArea: "BÁSICAS- FARMACOLOGÍA - ORTOPEDIA",
    topic: "ORTOPEDIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ortopedia"],
    statement: "Paciente de 55 años consulta por dolor súbito en la región posterior del tobillo mientras caminaba. La evaluación confirma ruptura del tendón de Aquiles. Al revisar antecedentes farmacológicos se identifica el uso reciente de un antibiótico.\n¿Cuál de los siguientes antibióticos se asocia clásicamente con este evento adverso?",
    options: [
      { id: "A", label: "A", text: "Amoxicilina." },
      { id: "B", label: "B", text: "Azitromicina." },
      { id: "C", label: "C", text: "Ciprofloxacina." },
      { id: "D", label: "D", text: "Cefalexina." },
    ],
    correctOptionId: "C",
    explanation: "Las fluoroquinolonas se asocian a tendinopatía y ruptura tendinosa, especialmente del tendón de Aquiles. El riesgo es mayor en adultos mayores, pacientes con insuficiencia renal y usuarios concomitantes de corticoides.",
    keyPoints: [
      "Cuando veas: Ruptura del tendón de Aquiles. Tendinopatía. Uso reciente de antibióticos.",
      "Debes pensar en: Fluoroquinolonas.",
      "Tema: Reacciones adversas medicamentosas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica de farmacología clínica.
La clave no es la ruptura.
La clave es:
La asociación medicamento-evento adverso.
¿Qué está ocurriendo realmente?
Las fluoroquinolonas pueden producir:
• Tendinitis.
• Degeneración del colágeno.
• Ruptura tendinosa.
El tendón más afectado es:
El tendón de Aquiles.
¿Cuál es el antibiótico clásico?
La respuesta más preguntada en los exámenes es:
Ciprofloxacina.
Aunque el efecto puede ocurrir con:
• Levofloxacina.
• Moxifloxacina.
• Otras fluoroquinolonas.
¿Quiénes tienen mayor riesgo?
• Mayores de 60 años.
• Pacientes con enfermedad renal.
• Trasplantados.
• Usuarios de corticoides sistémicos.
¿Por qué NO amoxicilina?
Las penicilinas no se asocian a:
Ruptura tendinosa.
¿Por qué NO azitromicina?
Los macrólidos se relacionan más con:
Prolongación del QT.
¿Por qué NO cefalexina?
Las cefalosporinas no presentan esta asociación clásica.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan:
"Antibiótico."
Pero olvidan:
La reacción adversa específica.
Siempre que aparezca:
Tendón de Aquiles + antibiótico
Debes pensar en:
Fluoroquinolonas.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar tendinopatía.
2.	Relacionarla con fármacos.
3.	Pensar en fluoroquinolonas.
4.	Recordar el tendón de Aquiles.
5.	Elegir ciprofloxacina.
Perlas de examen
✅ Ciprofloxacina es la asociación clásica en exámenes.
✅ Las fluoroquinolonas pueden causar tendinitis y ruptura tendinosa.
✅ El tendón de Aquiles es el más frecuentemente afectado.
✅ El riesgo aumenta con el uso concomitante de corticoides.
✅ Puede ocurrir incluso semanas después de iniciar el medicamento.
✅ La FDA mantiene advertencias específicas sobre este efecto adverso.
✅ Ante síntomas tendinosos debe suspenderse la fluoroquinolona.
Referencias
• Katzung. Basic and Clinical Pharmacology.
• Goodman & Gilman's The Pharmacological Basis of Therapeutics.
• Harrison's Principles of Internal Medicine.
• FDA Safety Communication on Fluoroquinolones.
• UpToDate: Fluoroquinolone Adverse Effects.`,
  },
  {
    id: "dr-q-250",
    examArea: "UROLOGÍA",
    topic: "UROLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","urologia"],
    statement: "Varón de 25 años, albañil, consulta por aparición progresiva de una masa escrotal indolora de varios meses de evolución. Refiere que aumenta de tamaño al permanecer de pie y durante esfuerzos físicos. Al examen físico el test de Valsalva es positivo y la transiluminación es negativa.\n¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Hidrocele." },
      { id: "B", label: "B", text: "Hernia inguinoescrotal." },
      { id: "C", label: "C", text: "Varicocele." },
      { id: "D", label: "D", text: "Espermatocele." },
    ],
    correctOptionId: "C",
    explanation: "El varicocele corresponde a una dilatación anormal del plexo venoso pampiniforme. Se presenta típicamente como una masa escrotal que aumenta con el Valsalva y la bipedestación, con transiluminación negativa.",
    keyPoints: [
      "Cuando veas: Masa escrotal indolora. Aumenta con el esfuerzo. Valsalva positivo. Transiluminación negativa.",
      "Debes pensar en: Varicocele.",
      "Tema: Patología escrotal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica de urología porque evalúa el diagnóstico diferencial de las masas escrotales.
La clave no es la masa.
La clave es:
Que aumenta con el Valsalva.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Masa escrotal.
• Incremento con la bipedestación.
• Incremento con el esfuerzo.
• Transiluminación negativa.
Esto corresponde a:
Dilatación venosa del plexo pampiniforme.
Es decir:
Varicocele.
¿Cómo se describe clásicamente?
Como una:
"Bolsa de gusanos."
¿Qué lado se afecta más?
Clásicamente:
El lado izquierdo.
Debido al drenaje de la vena gonadal izquierda hacia la vena renal izquierda.
¿Por qué NO es hidrocele?
Porque el hidrocele:
• Transilumina.
• No aumenta significativamente con Valsalva.
¿Por qué NO es hernia inguinoescrotal?
Puede aumentar con el esfuerzo.
Sin embargo:
El hallazgo clásico de examen con Valsalva positivo y masa venosa escrotal orienta más a varicocele.
¿Por qué NO es espermatocele?
El espermatocele suele ser:
• Quístico.
• Transiluminable.
• Dependiente del epidídimo.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Masa escrotal."
Y responden:
Hidrocele.
Sin embargo:
El dato decisivo es:
Valsalva positivo con transiluminación negativa.
Esto orienta a:
Varicocele.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar masa escrotal.
2.	Evaluar transiluminación.
3.	Realizar maniobra de Valsalva.
4.	Reconocer dilatación venosa.
5.	Diagnosticar varicocele.
Perlas de examen
✅ El varicocele es la causa corregible más frecuente de infertilidad masculina.
✅ Se origina por dilatación del plexo pampiniforme.
✅ Es más frecuente en el lado izquierdo.
✅ La ecografía Doppler confirma el diagnóstico.
✅ La masa aumenta con Valsalva y al estar de pie.
✅ La transiluminación es negativa.
✅ La descripción clásica es "bolsa de gusanos".
Referencias
• Campbell-Walsh Urology.
• Smith & Tanagho's General Urology.
• Nelson Textbook of Pediatrics.
• EAU Guidelines on Male Infertility.
• UpToDate: Clinical Manifestations and Diagnosis of Varicocele.`,
  },
  {
    id: "dr-q-251",
    examArea: "HEMATOLOGÍA - URGENCIAS",
    topic: "URGENCIAS",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","urgencias"],
    statement: "Hombre de 45 años con antecedente de fibrilación auricular en tratamiento crónico con warfarina consulta a urgencias tras sufrir una herida por arma de fuego en el brazo izquierdo. Presenta sangrado activo importante, aunque se encuentra hemodinámicamente estable. Los estudios iniciales reportan INR de 3.2.\n¿Cuál es la intervención más efectiva para revertir rápidamente la anticoagulación?",
    options: [
      { id: "A", label: "A", text: "Administrar vitamina K intravenosa como única medida." },
      { id: "B", label: "B", text: "Suspender warfarina y repetir INR en 24 horas." },
      { id: "C", label: "C", text: "Administrar plasma fresco congelado." },
      { id: "D", label: "D", text: "Administrar concentrado de complejo protrombínico de 4 factores asociado a vitamina K intravenosa." },
    ],
    correctOptionId: "D",
    explanation: "En pacientes con hemorragia mayor o trauma significativo bajo tratamiento con warfarina, la reversión más rápida y efectiva se logra con concentrado de complejo protrombínico (PCC de 4 factores) asociado a vitamina K intravenosa.",
    keyPoints: [
      "Cuando veas: Warfarina. Sangrado activo. INR elevado. Trauma.",
      "Debes pensar en: Reversión urgente de anticoagulación.",
      "Tema: Anticoagulación y reversión.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa el manejo de hemorragias en pacientes anticoagulados.
La clave no es el INR.
La clave es:
La presencia de sangrado activo.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Anticoagulación por warfarina.
• Sangrado traumático.
• INR supraterapéutico.
Esto requiere:
Reversión inmediata.
¿Cuál es la mejor estrategia?
La más rápida y efectiva es:
• PCC de 4 factores.
• Vitamina K intravenosa.
¿Por qué PCC?
Porque repone inmediatamente:
• Factor II.
• Factor VII.
• Factor IX.
• Factor X.
Corrigiendo el INR en minutos.
¿Por qué también vitamina K?
Porque:
La acción del PCC es temporal.
La vitamina K permite:
Restablecer la síntesis hepática de factores de coagulación.
¿Por qué NO vitamina K sola?
Porque tarda:
6 a 24 horas en ejercer efecto.
Insuficiente en un sangrado agudo.
¿Por qué NO plasma fresco congelado?
Puede utilizarse si no existe PCC disponible.
Sin embargo:
• Corrige más lentamente.
• Requiere grandes volúmenes.
• Tiene más complicaciones transfusionales.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"INR 3.2"
Y responden:
Vitamina K.
Sin embargo:
El dato decisivo es:
La hemorragia activa traumática.
Esto obliga a:
Reversión inmediata con PCC.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar sangrado mayor.
2.	Reconocer uso de warfarina.
3.	Solicitar INR.
4.	Administrar PCC de 4 factores.
5.	Asociar vitamina K intravenosa.
Perlas de examen
✅ PCC de 4 factores es el método de reversión más rápido para warfarina.
✅ La vitamina K siempre debe acompañar la reversión urgente.
✅ El plasma fresco congelado es alternativa cuando no hay PCC.
✅ El INR no determina por sí solo la gravedad; el sangrado sí.
✅ La corrección del INR con PCC ocurre en minutos.
✅ La warfarina inhibe los factores II, VII, IX y X dependientes de vitamina K.
✅ Toda hemorragia mayor en anticoagulados requiere reversión inmediata.
Referencias
• Harrison's Principles of Internal Medicine.
• Tintinalli's Emergency Medicine.
• ACC Expert Consensus on Management of Bleeding in Patients on Oral Anticoagulants.
• CHEST Guidelines on Antithrombotic Therapy.
• UpToDate: Reversal of Warfarin Anticoagulation.`,
  },
  {
    id: "dr-q-252",
    examArea: "HEMATOLOGÍA",
    topic: "HEMATOLOGÍA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","hematologia"],
    statement: "Mujer de 23 años, sin antecedentes de importancia, consulta por aparición progresiva de petequias y equimosis espontáneas. Los estudios iniciales reportan plaquetas de 20.000/μL. El resto del hemograma es normal. El frotis de sangre periférica no evidencia hemólisis ni alteraciones en otras líneas celulares.\n¿Cuál es el diagnóstico más probable y la conducta inicial más adecuada?",
    options: [
      { id: "A", label: "A", text: "Púrpura trombótica trombocitopénica; plasmaféresis urgente." },
      { id: "B", label: "B", text: "Leucemia aguda; aspirado de médula ósea." },
      { id: "C", label: "C", text: "Púrpura trombocitopénica inmune (PTI); iniciar corticoides." },
      { id: "D", label: "D", text: "Coagulación intravascular diseminada; transfusión masiva." },
    ],
    correctOptionId: "C",
    explanation: "La PTI es una enfermedad autoinmune caracterizada por trombocitopenia aislada, con hemoglobina y leucocitos normales, sin evidencia de hemólisis ni alteraciones en otras series hematológicas. El tratamiento inicial en pacientes sintomáticos o con plaquetas <30.000/μL son los corticoides sistémicos.",
    keyPoints: [
      "Cuando veas: Petequias. Equimosis. Trombocitopenia aislada. Hemograma normal.",
      "Debes pensar en: PTI.",
      "Tema: Trastornos plaquetarios.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la causa más frecuente de trombocitopenia aislada en adultos jóvenes.
La clave no es el número de plaquetas.
La clave es:
Que las demás líneas celulares son normales.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Petequias.
• Moretones espontáneos.
• Plaquetas 20.000/μL.
• Leucocitos normales.
• Hemoglobina normal.
Esto corresponde a:
Trombocitopenia aislada.
El diagnóstico más probable es:
Púrpura trombocitopénica inmune.
¿Cuál es el mecanismo?
Autoanticuerpos IgG contra:
Glicoproteínas plaquetarias.
Esto produce:
Destrucción esplénica acelerada.
¿Cuál es el tratamiento inicial?
Si existen síntomas hemorrágicos o:
Plaquetas <30.000/μL
Debe iniciarse:
• Prednisona.
o
• Dexametasona en dosis altas.
¿Cuándo usar inmunoglobulina intravenosa?
En:
• Sangrado importante.
• Necesidad de elevar rápidamente las plaquetas.
• Preparación para procedimientos urgentes.
¿Por qué NO es PTT?
La púrpura trombótica trombocitopénica produce:
• Anemia hemolítica microangiopática.
• Esquistocitos.
Hallazgos ausentes en el caso.
¿Por qué NO es leucemia?
La leucemia suele acompañarse de:
• Alteración de múltiples líneas celulares.
• Blastos.
No se describen en el caso.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Plaquetas 20.000."
Y responden:
Transfusión de plaquetas.
Sin embargo:
El dato decisivo es:
La trombocitopenia aislada compatible con PTI.
La conducta inicial es:
Corticoides.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Confirmar trombocitopenia aislada.
2.	Excluir hemólisis.
3.	Sospechar PTI.
4.	Iniciar corticoides.
5.	Reservar IVIG para casos seleccionados.
Perlas de examen
✅ PTI = trombocitopenia aislada.
✅ El resto del hemograma suele ser normal.
✅ Los corticoides son el tratamiento inicial de primera línea.
✅ La IVIG eleva rápidamente el conteo plaquetario.
✅ El riesgo hemorrágico aumenta marcadamente por debajo de 20.000/μL.
✅ La médula ósea suele mostrar aumento de megacariocitos.
✅ Es un diagnóstico de exclusión.
Referencias
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• Harrison's Principles of Internal Medicine.
• ASH Guidelines for Immune Thrombocytopenia.
• UpToDate: Immune Thrombocytopenia in Adults.`,
  },
  {
    id: "dr-q-253",
    examArea: "NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","nefrologia"],
    statement: "Hombre de 55 años con diagnóstico reciente de síndrome nefrótico secundario a nefropatía membranosa. Los estudios muestran albúmina sérica de 2.2 g/dL. No presenta antecedentes de eventos trombóticos.\n¿Cuál es la complicación más probable a desarrollar?",
    options: [
      { id: "A", label: "A", text: "Hemorragia intracraneal espontánea." },
      { id: "B", label: "B", text: "Trombosis venosa profunda o trombosis de la vena renal." },
      { id: "C", label: "C", text: "Endocarditis infecciosa." },
      { id: "D", label: "D", text: "Crisis hipercalcémica." },
    ],
    correctOptionId: "B",
    explanation: "La nefropatía membranosa es la glomerulopatía que más se asocia a fenómenos tromboembólicos. La pérdida urinaria de anticoagulantes naturales (antitrombina III, proteínas C y S) y la hipoalbuminemia severa generan un importante estado de hipercoagulabilidad.",
    keyPoints: [
      "Cuando veas: Síndrome nefrótico. Nefropatía membranosa. Albúmina <2.5 g/dL.",
      "Debes pensar en: Trombosis.",
      "Tema: Complicaciones del síndrome nefrótico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa la complicación más característica del síndrome nefrótico.
La clave no es la proteinuria.
La clave es:
La hipoalbuminemia.
¿Qué está ocurriendo realmente?
El paciente presenta:
• Síndrome nefrótico.
• Albúmina de 2.2 g/dL.
• Nefropatía membranosa.
Esto genera:
Estado de hipercoagulabilidad.
¿Por qué ocurre?
Por pérdida urinaria de:
• Antitrombina III.
• Proteína C.
• Proteína S.
Además existe:
• Aumento de fibrinógeno.
• Incremento de factores procoagulantes.
Resultado:
Mayor riesgo trombótico.
¿Cuál es la trombosis clásica?
La asociación más preguntada en exámenes es:
Trombosis de la vena renal.
También aumenta el riesgo de:
• TVP.
• Tromboembolismo pulmonar.
¿Qué glomerulopatía se asocia más?
La respuesta clásica es:
Nefropatía membranosa.
Especialmente cuando:
Albúmina <2.5 g/dL.
¿Por qué NO hemorragia?
El síndrome nefrótico produce:
Hipercoagulabilidad.
No tendencia hemorrágica.
¿Cuál es la trampa de examen?
Muchos estudiantes recuerdan:
"Síndrome nefrótico = infecciones."
Lo cual es cierto.
Sin embargo:
La nefropatía membranosa tiene una asociación particularmente fuerte con:
Eventos tromboembólicos.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar síndrome nefrótico.
2.	Revisar albúmina sérica.
3.	Reconocer estado hipercoagulable.
4.	Asociar nefropatía membranosa.
5.	Pensar en trombosis venosa renal o TVP.
Perlas de examen
✅ La nefropatía membranosa es la glomerulopatía con mayor riesgo trombótico.
✅ La trombosis de la vena renal es una asociación clásica de examen.
✅ Albúmina <2.5 g/dL aumenta significativamente el riesgo.
✅ Existe pérdida urinaria de antitrombina III.
✅ También aumenta el riesgo de embolia pulmonar.
✅ El síndrome nefrótico es un estado de hipercoagulabilidad adquirida.
✅ La profilaxis anticoagulante puede considerarse en pacientes seleccionados de alto riesgo.
Referencias
• Brenner & Rector's The Kidney.
• KDIGO Glomerular Disease Guidelines.
• Harrison's Principles of Internal Medicine.
• UpToDate: Hypercoagulability in Nephrotic Syndrome.
• Comprehensive Clinical Nephrology.`,
  },
  {
    id: "dr-q-254",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "easy",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Mujer de 34 años consulta por dolor pélvico de inicio súbito durante actividad física intensa, asociado a náuseas. La ecografía transvaginal evidencia una masa anexial izquierda con signo de \"remolino\" (whirlpool sign).\n¿Cuál es el diagnóstico más probable y cuál es el manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Embarazo ectópico; metotrexato." },
      { id: "B", label: "B", text: "Quiste ovárico hemorrágico; observación." },
      { id: "C", label: "C", text: "Torsión ovárica; laparoscopia urgente con destorsión ovárica." },
      { id: "D", label: "D", text: "Enfermedad inflamatoria pélvica; antibióticos intravenosos." },
    ],
    correctOptionId: "C",
    explanation: "La torsión ovárica ocurre por rotación del ovario sobre su pedículo vascular, comprometiendo inicialmente el drenaje venoso y posteriormente el flujo arterial. El signo ecográfico de \"remolino\" es altamente sugestivo de torsión anexial y constituye una urgencia ginecológica.",
    keyPoints: [
      "Cuando veas: Dolor pélvico súbito. Náuseas o vómitos. Masa anexial. Signo de remolino.",
      "Debes pensar en: Torsión ovárica.",
      "Tema: Abdomen agudo ginecológico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las emergencias ginecológicas más importantes.
La clave no es el dolor.
La clave es:
El signo ecográfico de remolino.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Dolor súbito.
• Náuseas.
• Masa anexial.
Y la ecografía reporta:
Signo de "whirlpool".
Esto corresponde a:
Torsión del pedículo anexial.
¿Qué sucede fisiopatológicamente?
Inicialmente se compromete:
• Retorno venoso.
Posteriormente:
• Flujo arterial.
Lo que puede producir:
• Isquemia.
• Necrosis ovárica.
¿Cuál es el tratamiento?
La conducta correcta es:
Laparoscopia urgente.
Con:
• Destorsión ovárica.
• Preservación del ovario si es viable.
¿Por qué NO observar?
Porque:
Cada hora aumenta el riesgo de pérdida ovárica.
¿Por qué NO administrar antibióticos?
No existen datos sugestivos de:
Enfermedad inflamatoria pélvica.
¿Por qué NO metotrexato?
No existen hallazgos sugestivos de:
Embarazo ectópico.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Masa anexial."
Y responden:
Quiste ovárico.
Sin embargo:
El dato decisivo es:
El signo de remolino.
Este hallazgo es prácticamente clásico de:
Torsión ovárica.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar dolor súbito.
2.	Reconocer masa anexial.
3.	Identificar signo de remolino.
4.	Diagnosticar torsión ovárica.
5.	Realizar laparoscopia urgente.
Perlas de examen
✅ El signo de "whirlpool" es altamente sugestivo de torsión ovárica.
✅ El dolor suele ser súbito e intenso.
✅ Las náuseas y vómitos son frecuentes.
✅ La ecografía Doppler puede mostrar disminución o ausencia de flujo.
✅ La presencia de flujo arterial NO excluye torsión.
✅ El tratamiento es quirúrgico urgente.
✅ Actualmente se recomienda preservar el ovario siempre que sea posible.
Referencias
• Williams Gynecology.
• Berek & Novak's Gynecology.
• ACOG Committee Opinion on Adnexal Torsion.
• UpToDate: Ovarian and Fallopian Tube Torsion.
• Campbell-Walsh Gynecology and Pelvic Surgery.`,
  },
  {
    id: "dr-q-255",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "medium",
    tags: ["dr-q","universal","metodoq","univalle","udea","caldas","ucc_pasto","unimilitar","ginecologia_y_obstetricia"],
    statement: "Mujer de 30 años, G1P1, consulta por fiebre y dolor mamario 8 días después de un parto vaginal. Refiere lactancia materna exclusiva. Al examen físico se evidencia una mama eritematosa, tumefacta y dolorosa a la palpación, sin fluctuación ni hallazgos sugestivos de colección.\n¿Cuál es la conducta inicial más adecuada?",
    options: [
      { id: "A", label: "A", text: "Suspender la lactancia e iniciar cabergolina." },
      { id: "B", label: "B", text: "Drenaje quirúrgico urgente." },
      { id: "C", label: "C", text: "Iniciar dicloxacilina o cefalexina y continuar la lactancia materna." },
      { id: "D", label: "D", text: "Observación ambulatoria sin tratamiento." },
    ],
    correctOptionId: "C",
    explanation: "El cuadro clínico es compatible con mastitis puerperal. El microorganismo más frecuentemente implicado es Staphylococcus aureus. El tratamiento inicial consiste en antibióticos dirigidos contra cocos grampositivos y el mantenimiento de la lactancia o extracción frecuente de leche.",
    keyPoints: [
      "Cuando veas: Posparto. Lactancia. Mama dolorosa y eritematosa. Fiebre. Sin absceso.",
      "Debes pensar en: Mastitis puerperal.",
      "Tema: Patología mamaria del puerperio.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta clásica porque evalúa una de las complicaciones más frecuentes de la lactancia.
La clave no es la fiebre.
La clave es:
La ausencia de absceso.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Posparto reciente.
• Lactancia activa.
• Dolor mamario.
• Eritema.
• Fiebre.
Esto corresponde a:
Mastitis puerperal.
¿Cuál es el germen más frecuente?
La respuesta clásica es:
Staphylococcus aureus.
¿Cuál es el tratamiento?
• Dicloxacilina.
o
• Cefalexina.
Además:
Continuar la lactancia materna.
¿Por qué continuar lactando?
Porque favorece:
• Vaciamiento mamario.
• Resolución de la infección.
• Disminución de la congestión.
¿Cuándo se realiza drenaje?
Solo cuando existe:
• Absceso mamario.
• Fluctuación.
• Colección documentada.
Hallazgos ausentes en este caso.
¿Por qué NO suspender la lactancia?
Porque:
No mejora la evolución y puede empeorar la congestión mamaria.
¿Cuál es la trampa de examen?
Muchos estudiantes leen:
"Fiebre y mama dolorosa."
Y responden:
Drenaje quirúrgico.
Sin embargo:
El dato decisivo es:
La ausencia de absceso.
Esto orienta a:
Manejo médico.
Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1.	Identificar mastitis puerperal.
2.	Buscar absceso.
3.	Si no existe colección → antibióticos.
4.	Mantener lactancia.
5.	Reevaluar respuesta clínica.
Perlas de examen
✅ Staphylococcus aureus es el agente causal más frecuente.
✅ La lactancia NO debe suspenderse.
✅ Dicloxacilina y cefalexina son tratamientos de primera línea.
✅ El vaciamiento frecuente de la mama es fundamental.
✅ El absceso mamario requiere drenaje.
✅ La mastitis suele aparecer durante las primeras semanas posparto.
✅ La ecografía mamaria se reserva para sospecha de absceso.
Referencias
• Williams Obstetrics.
• ACOG Committee Opinion on Breastfeeding Challenges.
• Academy of Breastfeeding Medicine Protocol #36.
• Nelson Textbook of Pediatrics.
• UpToDate: Lactational Mastitis.`,
  },

];
