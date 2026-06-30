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
      "Cuando veas: fibrilación auricular en paciente con miocardiopatía hipertrófica, incluso con CHA₂DS₂-VA de 0 puntos.",
      "Debes pensar en: anticoagulación oral crónica obligatoria → anticoagulantes orales directos (apixabán, rivaroxabán) como estrategia preferida.",
      "El CHA₂DS₂-VA no guía la anticoagulación en miocardiopatía hipertrófica; el riesgo tromboembólico es intrínsecamente elevado.",
      "La aspirina no es suficiente para prevención embólica en este escenario.",
      "Tema: Fibrilación auricular en miocardiopatía hipertrófica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa una trampa frecuente: aplicar el puntaje CHA₂DS₂-VA de forma literal en un paciente con miocardiopatía hipertrófica.

La clave no es el puntaje CHA₂DS₂-VA.
La clave es:
Fibrilación auricular + miocardiopatía hipertrófica = anticoagulación oral crónica en todos los pacientes, independientemente del puntaje.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 30 años con miocardiopatía hipertrófica en seguimiento.
• Fibrilación auricular no valvular.
• Sin antecedente de ACV ni eventos embólicos.
• CHA₂DS₂-VA = 0 puntos.
• Necesita anticoagulación a pesar del puntaje bajo.

Recordemos fibrilación auricular en miocardiopatía hipertrófica:
• La miocardiopatía hipertrófica aumenta significativamente el riesgo tromboembólico por estasis auricular, disfunción sistólica y arritmias.
• La fibrilación auricular es una complicación frecuente (hasta 20-25% de los pacientes).
• Las guías ESC y AHA/ACC recomiendan anticoagulación oral en todos los pacientes con FA + MCH, sin importar el CHA₂DS₂-VA.
• Los anticoagulantes orales directos (DOAC) son preferidos sobre warfarina en ausencia de contraindicaciones.
• La aspirina no proporciona protección embólica adecuada en FA.

Por lo tanto:
La conducta correcta es iniciar anticoagulación con apixabán (opción B), no omitir anticoagulación ni usar aspirina.

¿Por qué la opción B es la respuesta correcta?
Los DOAC son la estrategia preferida en FA no valvular. En miocardiopatía hipertrófica la anticoagulación está indicada independientemente del puntaje CHA₂DS₂-VA.

¿Por qué fallan las otras opciones?
Opción A (warfarina): anticoagulación correcta en concepto, pero los DOAC son preferidos por menor complejidad y mejor perfil en FA no valvular.
Opción C (no anticoagular): error clásico; el CHA₂DS₂-VA no aplica en MCH con FA.
Opción D (aspirina): insuficiente para prevención embólica en fibrilación auricular.

¿Cuál es la trampa del examen?
Muchos estudiantes observan "CHA₂DS₂-VA = 0" y responden "no anticoagular".
Pero en miocardiopatía hipertrófica el riesgo tromboembólico es intrínsecamente elevado y la anticoagulación es obligatoria.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar FA en paciente con miocardiopatía hipertrófica.
2. Anticoagular a todos, sin calcular CHA₂DS₂-VA.
3. Preferir DOAC (apixabán, rivaroxabán, edoxabán, dabigatrán).
4. No usar aspirina como sustituto de anticoagulación.

Perlas de examen
✅ FA + miocardiopatía hipertrófica = anticoagulación obligatoria, sin importar CHA₂DS₂-VA.
✅ Los DOAC son preferidos sobre warfarina en FA no valvular.
✅ La aspirina no es suficiente para prevención embólica en FA.
✅ La MCH es una de las pocas condiciones que anula el puntaje CHA₂DS₂-VA.
✅ El riesgo tromboembólico en MCH es independiente de la edad y comorbilidades.

Referencias
• ESC Guidelines for the Management of Atrial Fibrillation.
• AHA/ACC Guideline for the Diagnosis and Treatment of Hypertrophic Cardiomyopathy.
• ACC/AHA/HRS Guideline for Atrial Fibrillation.
• Braunwald's Heart Disease.
• UpToDate: Atrial fibrillation in hypertrophic cardiomyopathy.`,
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
      "Cuando veas: crisis convulsiva tónico-clónica generalizada ya finalizada, paciente en fase posictal, sin actividad convulsiva activa ni antecedente de epilepsia.",
      "Debes pensar en: medidas de soporte, evaluación diagnóstica y observación clínica, no antiepilépticos de inmediato.",
      "Las benzodiacepinas (lorazepam) son el tratamiento de elección solo ante convulsión activa o estatus epiléptico.",
      "La glucemia capilar debe evaluarse en toda crisis convulsiva.",
      "Tema: Primera crisis epiléptica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa una trampa frecuente: administrar antiepilépticos ante toda mención de "crisis epiléptica", sin distinguir si la convulsión ya terminó.

La clave no es iniciar fenitoína o lorazepam de inmediato.
La clave es:
Crisis autolimitada + fase posictal + sin actividad convulsiva activa = soporte, estudio etiológico y observación.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 20 años con crisis tónico-clónica generalizada de 2 minutos, ya finalizada.
• Fase posictal con somnolencia progresivamente reversible.
• Sin actividad convulsiva activa.
• Sin antecedentes de epilepsia ni factores desencadenantes evidentes.
• Signos vitales normales.

Recordemos manejo de la primera crisis epiléptica:
• La primera medida siempre es asegurar ABCDE (vía aérea, ventilación, circulación).
• Glucemia capilar obligatoria en toda crisis convulsiva.
• Benzodiacepinas IV (lorazepam) son tratamiento de elección de la convulsión activa o estatus epiléptico.
• Si la crisis ya terminó y el paciente está estable en posictal → no antiepilépticos de urgencia; estudio etiológico.
• Causas a descartar: hipoglucemia, infección del SNC, trauma, intoxicación, trastornos metabólicos.
• La fenitoína no se administra de inmediato en crisis ya resuelta sin recurrencia.

Por lo tanto:
La conducta correcta es medidas de soporte, evaluación diagnóstica y observación clínica (opción C).

¿Por qué la opción C es la respuesta correcta?
La crisis ya finalizó; el paciente está en fase posictal estable. La prioridad es identificar la causa y monitorizar, no tratar convulsión inexistente.

¿Por qué fallan las otras opciones?
Opción A (fenitoína IV): indicada en estatus epiléptico o crisis recurrentes, no en crisis única ya resuelta.
Opción B (lorazepam IV): tratamiento de convulsión activa; aquí no hay actividad convulsiva.
Opción D (intubación y coma farmacológico): reservado para estatus epiléptico refractario, no para posictal estable.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "crisis epiléptica" y responden lorazepam o fenitoína automáticamente.
El examen exige distinguir convulsión activa vs crisis ya finalizada en fase posictal.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Asegurar ABCDE y glucemia capilar.
2. Si convulsión activa → lorazepam IV.
3. Si crisis finalizada y posictal estable → soporte, estudio etiológico, observación.
4. Antiepilépticos de mantenimiento solo si se confirma epilepsia o riesgo alto de recurrencia.

Perlas de examen
✅ Convulsión activa = lorazepam IV; crisis resuelta en posictal = soporte y estudio.
✅ Glucemia capilar en toda crisis convulsiva.
✅ Primera crisis sin recurrencia no requiere fenitoína de urgencia.
✅ Estatus epiléptico = convulsión >5 min o crisis recurrentes sin recuperación.
✅ No intubar ni inducir coma en posictal estable sin estatus epiléptico.

Referencias
• American Academy of Neurology Guidelines.
• Neurocritical Care Society Guidelines for Status Epilepticus.
• Harrison's Principles of Internal Medicine.
• Adams and Victor's Principles of Neurology.
• UpToDate: Evaluation of the first seizure in adults.`,
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
      "Cuando veas: disnea súbita + dolor torácico unilateral + timpanismo + ausencia de ruidos respiratorios + hipotensión y taquicardia.",
      "Debes pensar en: neumotórax a tensión → mecanismo valvular unidireccional con aumento progresivo de presión intratorácica.",
      "Produce choque obstructivo por disminución del retorno venoso, no por falla de bomba.",
      "El neumotórax a tensión es una emergencia que requiere descompresión inmediata.",
      "Tema: Neumotórax a tensión.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neumología/urgencias porque evalúa el reconocimiento de la fisiopatología del neumotórax a tensión frente a otras causas de dolor torácico súbito.

La clave no es tromboembolismo pulmonar ni derrame pleural.
La clave es:
Disnea súbita + timpanismo + ausencia de ruidos respiratorios + inestabilidad hemodinámica = neumotórax a tensión por válvula unidireccional.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 30 años con disnea súbita y dolor torácico intenso hemitórax derecho.
• Hipotensión y taquicardia (compromiso hemodinámico).
• Timpanismo a la percusión en hemitórax derecho.
• Ausencia de ruidos respiratorios en el mismo lado.
• Cuadro compatible con neumotórax a tensión.

Recordemos fisiopatología del neumotórax a tensión:
• Entrada de aire al espacio pleural mediante mecanismo valvular unidireccional.
• El aire entra en inspiración pero no sale en espiración.
• Aumento progresivo de presión intratorácica → colapso pulmonar ipsilateral.
• Desviación traqueal contralateral (en casos avanzados).
• Choque obstructivo: disminución del retorno venoso por compresión de cavas.
• Emergencia que requiere descompresión con aguja seguida de tubo torácico.

Por lo tanto:
La fisiopatología más probable es entrada de aire con mecanismo valvular unidireccional (opción B).

¿Por qué la opción B es la respuesta correcta?
Describe exactamente el mecanismo del neumotórax a tensión: válvula unidireccional que incrementa presión intratorácica progresivamente.

¿Por qué fallan las otras opciones?
Opción A (derrame pleural): produce matidez, no timpanismo; no genera choque obstructivo valvular.
Opción C (TEP): causa dolor pleurítico y disnea, pero no timpanismo ni ausencia de ruidos respiratorios unilateral.
Opción D (SDRA/inflamación alveolar): cuadro bilateral difuso, no unilateral con timpanismo.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "dolor torácico súbito y disnea" y responden tromboembolismo pulmonar.
El examen exige correlacionar hallazgos semiológicos: timpanismo + silencio auscultatorio unilateral = neumotórax.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Disnea súbita unilateral → evaluar percusión y auscultación.
2. Timpanismo + silencio auscultatorio = neumotórax.
3. Si hay inestabilidad hemodinámica = neumotórax a tensión → descompresión inmediata.
4. Diferenciar de TEP (no timpanismo), derrame (matidez) y neumonía (crepitantes).

Perlas de examen
✅ Timpanismo + ausencia de ruidos respiratorios unilateral = neumotórax.
✅ Neumotórax a tensión = choque obstructivo por válvula unidireccional.
✅ Descompresión con aguja en 2º espacio intercostal línea medioclavicular antes del tubo torácico.
✅ No confundir con TEP: el TEP no produce timpanismo ni silencio auscultatorio.
✅ La hipotensión en neumotórax a tensión es por disminución del retorno venoso, no por falla cardíaca.

Referencias
• Advanced Trauma Life Support (ATLS) 11th Edition.
• Harrison's Principles of Internal Medicine.
• Murray & Nadel's Textbook of Respiratory Medicine.
• Tintinalli's Emergency Medicine.
• UpToDate: Tension pneumothorax in adults.`,
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
      "Cuando veas: mujer en edad fértil con dolor pélvico agudo + sangrado vaginal + amenorrea incierta + masa anexial + líquido libre intraperitoneal.",
      "Debes pensar en: embarazo ectópico roto → emergencia ginecológica potencialmente mortal.",
      "Toda mujer en edad fértil con dolor abdominal debe considerarse embarazada hasta demostrar lo contrario.",
      "La tríada clásica es dolor abdominal, amenorrea y sangrado vaginal.",
      "Tema: Embarazo ectópico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ginecología porque evalúa el reconocimiento del embarazo ectópico roto frente a otras causas de sangrado vaginal en mujer joven.

La clave no es aborto ni enfermedad inflamatoria pélvica.
La clave es:
Dolor pélvico agudo + sangrado + masa anexial + líquido libre intraperitoneal = embarazo ectópico roto.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 25 años con sangrado vaginal abundante y dolor pélvico súbito.
• Sin anticoncepción, ciclos irregulares (amenorrea incierta).
• Ecografía transvaginal: masa anexial compleja + líquido libre en cavidad peritoneal.
• Cuadro altamente sugestivo de embarazo ectópico roto.

Recordemos embarazo ectópico:
• Implantación del embrión fuera de la cavidad uterina (95% en trompa de Falopio).
• Tríada clásica: dolor abdominal, amenorrea, sangrado vaginal.
• La masa anexial es un hallazgo característico en ecografía.
• La rotura produce hemoperitoneo (líquido libre) y puede causar shock hipovolemico.
• β-hCG cuantitativa y ecografía transvaginal son estudios iniciales.
• Emergencia quirúrgica si hay inestabilidad hemodinámica o rotura confirmada.

Por lo tanto:
El diagnóstico más probable es embarazo ectópico roto (opción B).

¿Por qué la opción B es la respuesta correcta?
La combinación de dolor agudo, sangrado, masa anexial y líquido libre intraperitoneal es patognomónica de embarazo ectópico complicado con rotura.

¿Por qué fallan las otras opciones?
Opción A (EIP): fiebre, leucocitosis, dolor bilateral; no explica masa anexial con líquido libre hemático.
Opción C (quiste ovárico simple): no produce hemoperitoneo ni sangrado abundante agudo.
Opción D (aborto incompleto): requiere embarazo intrauterino visible; aquí hay masa anexial, no contenido intrauterino.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "sangrado vaginal" y responden aborto.
El examen exige correlacionar masa anexial + líquido libre intraperitoneal, que orienta a embarazo ectópico, no intrauterino.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Mujer en edad fértil con dolor pélvico → β-hCG siempre.
2. Si β-hCG positiva + masa anexial → embarazo ectópico hasta demostrar lo contrario.
3. Líquido libre intraperitoneal = rotura o hemoperitoneo → emergencia.
4. No confundir con aborto (embarazo intrauterino en ecografía).

Perlas de examen
✅ Masa anexial + líquido libre + sangrado = embarazo ectópico roto.
✅ Toda mujer fértil con dolor abdominal = β-hCG obligatoria.
✅ La tríada clásica: dolor + amenorrea + sangrado.
✅ El quiste ovárico simple no produce hemoperitoneo.
✅ La EIP no explica masa anexial con líquido libre hemático.

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
      "Cuando veas: sangrado vaginal leve en primer trimestre + embarazo intrauterino viable con actividad cardíaca fetal + cuello uterino cerrado.",
      "Debes pensar en: amenaza de aborto → observación y seguimiento, no intervención activa.",
      "La presencia de actividad cardíaca fetal indica viabilidad gestacional.",
      "No todo sangrado del primer trimestre implica pérdida del embarazo.",
      "Tema: Hemorragia del primer trimestre.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de obstetricia porque evalúa una trampa frecuente: intervenir quirúrgicamente o con misoprostol ante todo sangrado del primer trimestre.

La clave no es legrado ni misoprostol.
La clave es:
Sangrado leve + embrión viable con actividad cardíaca + cuello cerrado = amenaza de aborto → observación y seguimiento.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Primigesta de 27 años, embarazo de 12 semanas confirmado por ecografía.
• Sangrado vaginal leve de 12 horas, sin dolor abdominal significativo.
• Ecografía: embarazo intrauterino viable con actividad cardíaca fetal presente.
• Cuello uterino cerrado (implícito en amenaza de aborto).
• Cuadro compatible con amenaza de aborto.

Recordemos hemorragia del primer trimestre:
• Amenaza de aborto: sangrado + cuello cerrado + embrión viable → observación y seguimiento.
• Aborto incompleto: sangrado + cuello abierto + restos ovulares → legrado o misoprostol.
• Aborto inevitable: sangrado + cuello abierto + embrión no viable.
• Aborto completo: expulsión completa de productos de gestación.
• La actividad cardíaca fetal es el predictor más importante de viabilidad.

Por lo tanto:
La conducta correcta es observación y seguimiento (opción A).

¿Por qué la opción A es la respuesta correcta?
El embarazo es viable con actividad cardíaca fetal; el sangrado leve con cuello cerrado define amenaza de aborto, que se maneja expectante.

¿Por qué fallan las otras opciones?
Opción B (legrado): indicado en aborto incompleto o retenido, no en embarazo viable.
Opción C (misoprostol): mismo error; es para expulsión de productos no viables.
Opción D (quirófano de urgencias): no hay indicación quirúrgica con embarazo viable y sangrado leve.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "sangrado vaginal" y responden legrado o misoprostol.
El examen exige verificar viabilidad fetal antes de decidir manejo activo vs expectante.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sangrado en primer trimestre → ecografía transvaginal urgente.
2. Evaluar viabilidad fetal (actividad cardíaca) y estado del cuello uterino.
3. Viable + cuello cerrado = amenaza de aborto → observación.
4. No viable o incompleto = manejo activo (misoprostol o legrado).

Perlas de examen
✅ Amenaza de aborto = sangrado + cuello cerrado + embrión viable → observación.
✅ Actividad cardíaca fetal = predictor de viabilidad gestacional.
✅ Legrado/misoprostol solo si embarazo no viable o incompleto.
✅ No todo sangrado del primer trimestre implica pérdida gestacional.
✅ Reposo relativo y seguimiento ecográfico en amenaza de aborto.

Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Early Pregnancy Loss.
• Gabbe's Obstetrics: Normal and Problem Pregnancies.
• Novak's Gynecology.
• UpToDate: Threatened abortion.`,
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
      "Cuando veas: disminución de necesidad de sueño + aumento de energía + verborrea + fuga de ideas + conductas de riesgo (gastos excesivos, apuestas) de ~3 semanas.",
      "Debes pensar en: episodio maníaco → trastorno bipolar tipo I (un episodio maníaco basta para el diagnóstico).",
      "La disminución de la necesidad de sueño es un síntoma cardinal de manía.",
      "La verborrea y la fuga de ideas son hallazgos clásicos del episodio maníaco.",
      "Tema: Trastorno bipolar.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de psiquiatría porque evalúa el reconocimiento de un episodio maníaco frente a otros trastornos del estado de ánimo.

La clave no es depresión ni ansiedad.
La clave es:
Energía excesiva + disminución del sueño + verborrea + fuga de ideas + conductas de riesgo = episodio maníaco → trastorno bipolar tipo I.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 24 años con cambios de comportamiento de 3 semanas.
• Disminución importante de necesidad de sueño (3 h/noche sin fatiga).
• Múltiples proyectos de negocios, gastos excesivos, apuestas en línea.
• Verborrea, fuga de ideas, irritabilidad.
• Sin antecedentes psiquiátricos previos ni consumo de sustancias.
• Cuadro compatible con episodio maníaco.

Recordemos criterios del episodio maníaco (DSM-5):
• Estado de ánimo elevado, expansivo o irritable + aumento de energía.
• Duración mínima de 1 semana (o cualquier duración si requiere hospitalización).
• Síntomas cardinales: disminución de necesidad de sueño, verborrea, fuga de ideas, grandiosidad, distractibilidad, aumento de actividad dirigida a metas, conductas de riesgo.
• Un episodio maníaco establece diagnóstico de trastorno bipolar tipo I.
• Diferenciar de hipomanía (menor duración y sin deterioro funcional grave).

Por lo tanto:
El diagnóstico más probable es trastorno bipolar (opción A).

¿Por qué la opción A es la respuesta correcta?
Cumple criterios completos de episodio maníaco con deterioro funcional significativo; un episodio maníaco basta para diagnosticar trastorno bipolar tipo I.

¿Por qué fallan las otras opciones?
Opción B (depresión mayor): requiere ánimo depresivo, no elevado; no explica verborrea ni gastos excesivos.
Opción C (trastorno de ansiedad): no explica disminución del sueño con energía, fuga de ideas ni conductas de riesgo.
Opción D (esquizofrenia): requiere síntomas psicóticos (alucinaciones, delirios) y síntomas negativos, no presentes aquí.

¿Cuál es la trampa del examen?
Muchos estudiantes observan "irritabilidad" y responden trastorno de ansiedad.
La irritabilidad en contexto de energía elevada, verborrea y conductas de riesgo orienta a manía, no a ansiedad.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar estado de ánimo elevado/irritable + aumento de energía.
2. Buscar síntomas cardinales: sueño disminuido, verborrea, fuga de ideas, conductas de riesgo.
3. Si cumple criterios de manía → trastorno bipolar tipo I.
4. Diferenciar de hipomanía (menor gravedad) y esquizofrenia (psicosis).

Perlas de examen
✅ Un episodio maníaco = trastorno bipolar tipo I.
✅ Disminución de necesidad de sueño sin fatiga = síntoma cardinal de manía.
✅ Verborrea + fuga de ideas = manía, no ansiedad.
✅ Conductas de riesgo (gastos, apuestas) son criterio diagnóstico de manía.
✅ La esquizofrenia requiere alucinaciones o delirios, no solo cambio conductual.

Referencias
• DSM-5-TR.
• Kaplan & Sadock's Synopsis of Psychiatry.
• Stahl's Essential Psychopharmacology.
• American Psychiatric Association Practice Guideline for Bipolar Disorder.
• UpToDate: Bipolar disorder in adults — Clinical manifestations.`,
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
      "Cuando veas: primer episodio psicótico con alucinaciones auditivas (voces) + delirios persecutorios + deterioro funcional progresivo de ~3 meses.",
      "Debes pensar en: esquizofrenia → antipsicótico de segunda generación como tratamiento de primera línea.",
      "Las alucinaciones auditivas son el síntoma psicótico más frecuente en esquizofrenia.",
      "Los delirios persecutorios son una manifestación clásica del trastorno.",
      "Tema: Tratamiento inicial de la esquizofrenia.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de psiquiatría porque evalúa el tratamiento de primera línea del primer episodio psicótico compatible con esquizofrenia.

La clave no es antidepresivos, litio ni benzodiacepinas en monoterapia.
La clave es:
Alucinaciones auditivas + delirios persecutorios + deterioro funcional = primer episodio psicótico → antipsicótico de segunda generación.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 26 años con cambios progresivos de 3 meses.
• Aislamiento social, deterioro del autocuidado, dificultades laborales.
• Alucinaciones auditivas (voces que le indican no confiar en familiares).
• Delirios persecutorios (familiares conspirando en su contra).
• Cuadro compatible con primer episodio psicótico de esquizofrenia.

Recordemos tratamiento de la esquizofrenia:
• Los antipsicóticos de segunda generación (risperidona, olanzapina, quetiapina, aripiprazol) son primera línea.
• Mejor perfil de efectos adversos extrapiramidales que primera generación.
• Los ISRS (sertralina) no tratan síntomas psicóticos.
• El litio es para trastorno bipolar, no esquizofrenia.
• Las benzodiacepinas en monoterapia no controlan psicosis.
• Inicio precoz de antipsicóticos mejora pronóstico a largo plazo.

Por lo tanto:
El tratamiento de primera línea es iniciar antipsicótico de segunda generación (opción A).

¿Por qué la opción A es la respuesta correcta?
Los antipsicóticos de segunda generación son el estándar de tratamiento del primer episodio psicótico por eficacia sobre síntomas positivos y mejor tolerabilidad.

¿Por qué fallan las otras opciones?
Opción B (sertralina): antidepresivo; no trata alucinaciones ni delirios.
Opción C (litio): estabilizador del ánimo para trastorno bipolar, no esquizofrenia.
Opción D (clonazepam en monoterapia): no controla síntomas psicóticos; puede usarse como adjunto transitorio para agitación.

¿Cuál es la trampa del examen?
Muchos estudiantes confunden agitación o irritabilidad con indicación de benzodiacepinas como tratamiento principal.
El tratamiento de la psicosis es antipsicótico, no ansiolítico.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar síntomas psicóticos positivos (alucinaciones, delirios).
2. Confirmar deterioro funcional y duración compatible con esquizofrenia.
3. Iniciar antipsicótico de segunda generación como monoterapia.
4. Psicoeducación y seguimiento multidisciplinario.

Perlas de examen
✅ Primer episodio psicótico = antipsicótico de segunda generación.
✅ Alucinaciones auditivas son el síntoma psicótico más frecuente en esquizofrenia.
✅ Los ISRS no tratan psicosis.
✅ El litio es para trastorno bipolar, no esquizofrenia.
✅ Inicio precoz de antipsicóticos mejora pronóstico.

Referencias
• DSM-5-TR.
• Kaplan & Sadock's Synopsis of Psychiatry.
• American Psychiatric Association Practice Guideline for Schizophrenia.
• Stahl's Essential Psychopharmacology.
• UpToDate: Pharmacotherapy for schizophrenia — Initial approach.`,
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
      "Cuando veas: estudio de cohorte con riesgo relativo (RR) reportado.",
      "Debes pensar en: RR = incidencia en expuestos / incidencia en no expuestos; RR > 1 = factor de riesgo.",
      "RR de 15 significa 15 veces más riesgo, no 15% más riesgo.",
      "RR = 1 indica ausencia de asociación entre exposición y enfermedad.",
      "Tema: Interpretación del riesgo relativo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de epidemiología porque evalúa la interpretación correcta del riesgo relativo, una medida fundamental en estudios de cohorte.

La clave no es confundir "veces más" con "porcentaje más".
La clave es:
RR = 15 en estudio de cohorte = los fumadores tienen 15 veces más riesgo de cáncer de pulmón que los no fumadores.

¿Qué está ocurriendo realmente?
El estudio presenta:
• Estudio de cohorte con seguimiento de 7 años.
• Exposición: tabaquismo.
• Desenlace: cáncer de pulmón.
• RR = 15 (fumadores vs no fumadores).
• Asociación positiva fuerte entre tabaquismo y cáncer de pulmón.

Recordemos medidas de asociación en epidemiología:
• Riesgo relativo (RR): incidencia en expuestos / incidencia en no expuestos.
• Se calcula en estudios de cohorte y ensayos clínicos.
• RR = 1: ausencia de asociación.
• RR > 1: factor de riesgo (aumenta probabilidad del desenlace).
• RR < 1: factor protector (disminuye probabilidad del desenlace).
• RR de 15 = riesgo 15 veces mayor, NO 15% mayor.
• Diferenciar de odds ratio (OR), usado en estudios de casos y controles.

Por lo tanto:
La interpretación correcta es que los fumadores tienen 15 veces más riesgo (opción A).

¿Por qué la opción A es la respuesta correcta?
RR de 15 indica que la incidencia en fumadores es 15 veces la incidencia en no fumadores.

¿Por qué fallan las otras opciones?
Opción B (15% más riesgo): confunde riesgo relativo con diferencia porcentual; 15 veces ≠ 15%.
Opción C (no hay asociación): RR = 1 sería ausencia de asociación; aquí RR = 15.
Opción D (15 veces menor): RR < 1 indicaría factor protector; aquí RR > 1.

¿Cuál es la trampa del examen?
Muchos estudiantes confunden "15 veces más riesgo" con "15% más riesgo".
El examen exige distinguir medidas relativas (multiplicativas) de diferencias porcentuales (aditivas).

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar tipo de estudio (cohorte → RR; casos-controles → OR).
2. Interpretar magnitud: RR = 1 sin asociación; RR > 1 factor de riesgo; RR < 1 protector.
3. "N veces más" es multiplicativo, no porcentual.
4. No confundir RR con razón de prevalencia ni odds ratio.

Perlas de examen
✅ RR se calcula en estudios de cohorte.
✅ RR = 1: sin asociación; RR > 1: factor de riesgo; RR < 1: protector.
✅ RR de 15 = 15 veces más riesgo, no 15% más.
✅ OR se usa en casos-controles, no RR.
✅ La magnitud del RR no implica causalidad por sí sola.

Referencias
• Gordis Epidemiology.
• Rothman Epidemiology: An Introduction.
• Fletcher & Fletcher Clinical Epidemiology.
• Essentials of Medical Statistics.
• UpToDate: Overview of measures of association.`,
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
      "Cuando veas: fumador activo de 53 años con ≥20 paquetes-año, asintomático, en edad de tamizaje.",
      "Debes pensar en: tomografía computarizada de tórax de baja dosis para tamizaje de cáncer de pulmón.",
      "El cáncer de pulmón puede ser asintomático en etapas iniciales.",
      "La radiografía de tórax no es una estrategia efectiva de cribado.",
      "Tema: Tamizaje de cáncer de pulmón.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina preventiva porque evalúa una trampa frecuente: no tamizar porque el paciente está asintomático.

La clave no es "no hacer estudios" ni radiografía de tórax.
La clave es:
Fumador activo ≥20 paquetes-año + edad 50-80 años + asintomático = tamizaje con TC de tórax de baja dosis.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 53 años, fumador activo con 20 paquetes-año.
• Completamente asintomático.
• Esposa solicita tamizajes preventivos.
• Cumple criterios de alto riesgo para cáncer de pulmón.
• Indicación de tamizaje con TC de baja dosis.

Recordemos tamizaje de cáncer de pulmón:
• Criterios USPSTF: edad 50-80 años, ≥20 paquetes-año, fumador activo o dejó de fumar <15 años.
• TC de tórax de baja dosis (LDCT) es el único método con evidencia de reducción de mortalidad.
• La radiografía de tórax NO es efectiva para cribado (no reduce mortalidad).
• La broncoscopia es diagnóstica, no tamizaje en asintomáticos.
• El cáncer de pulmón es asintomático en etapas tempranas; el tamizaje detecta lesiones antes de síntomas.

Por lo tanto:
La conducta correcta es solicitar TC de tórax de baja dosis (opción A).

¿Por qué la opción A es la respuesta correcta?
El paciente cumple criterios de alto riesgo; las guías USPSTF y NCCN recomiendan LDCT anual en este grupo, incluso asintomático.

¿Por qué fallan las otras opciones?
Opción B (radiografía anual): no reduce mortalidad por cáncer de pulmón; no es estrategia de cribado recomendada.
Opción C (broncoscopia): procedimiento invasivo diagnóstico, no tamizaje en paciente asintomático sin lesión sospechosa.
Opción D (no realizar estudios): error clásico; la asintomatía no excluye tamizaje en grupo de alto riesgo.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "paciente asintomático" y responden "no necesita estudios".
El tamizaje se realiza precisamente en asintomáticos de alto riesgo para detectar enfermedad precoz.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar criterios de riesgo: edad, paquetes-año, estado de tabaquismo.
2. Si cumple criterios → LDCT anual.
3. No usar radiografía de tórax como tamizaje.
4. La asintomatía es indicación de tamizaje, no contraindicación.

Perlas de examen
✅ LDCT es el único tamizaje con evidencia de reducción de mortalidad en cáncer de pulmón.
✅ Criterios: ≥20 paquetes-año, edad 50-80, fumador activo o cesación <15 años.
✅ La radiografía de tórax NO sirve para cribado de cáncer de pulmón.
✅ Asintomático + alto riesgo = tamizaje indicado.
✅ La broncoscopia es diagnóstica, no tamizaje.

Referencias
• United States Preventive Services Task Force (USPSTF) Lung Cancer Screening Recommendations.
• National Comprehensive Cancer Network (NCCN) Guidelines.
• American Cancer Society Guidelines for Lung Cancer Screening.
• Harrison's Principles of Internal Medicine.
• UpToDate: Screening for lung cancer.`,
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
      "Cuando veas: fibrilación auricular no valvular + antecedente de ACV isquémico previo, sin contraindicaciones para anticoagulación.",
      "Debes pensar en: anticoagulación oral obligatoria → anticoagulante oral directo (DOAC) como estrategia preferida.",
      "El antecedente de ACV es uno de los factores de mayor peso en CHA₂DS₂-VASc (2 puntos).",
      "Un ACV previo es indicación de anticoagulación, no contraindicación.",
      "Tema: Prevención tromboembólica en fibrilación auricular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa una trampa frecuente: evitar anticoagulación en paciente con antecedente de ACV por miedo a sangrado.

La clave no es omitir anticoagulación ni usar solo aspirina.
La clave es:
FA no valvular + ACV isquémico previo = muy alto riesgo tromboembólico → anticoagulación oral con DOAC.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 77 años con fibrilación auricular no valvular en betabloqueadores.
• Antecedente de ACV isquémico hace 5 años, sin secuelas significativas.
• Sin contraindicaciones para anticoagulación (sin hemorragia digestiva ni intracraneal).
• CHA₂DS₂-VASc elevado (ACV previo = 2 puntos + edad + sexo femenino).
• Indicación clara de anticoagulación oral.

Recordemos prevención tromboembólica en FA:
• CHA₂DS₂-VASc ≥2 en hombres o ≥3 en mujeres → anticoagulación indicada.
• ACV previo es el factor de mayor peso (2 puntos) y indica anticoagulación independientemente del puntaje total.
• Los DOAC son preferidos sobre warfarina en FA no valvular.
• La aspirina no es suficiente para prevención secundaria en FA de alto riesgo.
• Un ACV previo aumenta el riesgo de recurrencia, no lo disminuye; la anticoagulación es preventiva.

Por lo tanto:
La conducta correcta es iniciar anticoagulación oral con DOAC (opción C).

¿Por qué la opción C es la respuesta correcta?
La paciente tiene FA + ACV previo sin contraindicaciones; la anticoagulación con DOAC reduce significativamente el riesgo de nuevo evento tromboembólico.

¿Por qué fallan las otras opciones?
Opción A (solo betabloqueadores): controlan frecuencia pero no previenen embolia.
Opción B (aspirina): insuficiente en FA de alto riesgo; no reemplaza anticoagulación.
Opción D (no anticoagular por ACV previo): error clásico; el ACV previo es indicación de anticoagulación, no contraindicación.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "tuvo un accidente cerebrovascular" y responden "no anticoagular por riesgo de sangrado".
El ACV previo es la razón principal para anticoagular, no para suspender.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Calcular CHA₂DS₂-VASc en todo paciente con FA.
2. ACV previo = anticoagulación obligatoria.
3. Preferir DOAC sobre warfarina en FA no valvular.
4. Evaluar HAS-BLED para riesgo de sangrado, pero no contraindica anticoagulación si beneficio supera riesgo.

Perlas de examen
✅ ACV previo en FA = anticoagulación obligatoria con DOAC.
✅ El ACV previo es indicación, no contraindicación para anticoagular.
✅ La aspirina no sustituye anticoagulación en FA de alto riesgo.
✅ CHA₂DS₂-VASc ≥2 (hombres) o ≥3 (mujeres) = anticoagular.
✅ Betabloqueadores controlan frecuencia, no previenen embolia.

Referencias
• ESC Guidelines for the Management of Atrial Fibrillation.
• ACC/AHA/HRS Guideline for Atrial Fibrillation.
• Braunwald's Heart Disease.
• Harrison's Principles of Internal Medicine.
• UpToDate: Atrial fibrillation — Anticoagulation.`,
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
      "Cuando veas: enfermedad renal crónica + debilidad muscular + parestesias + alteraciones de conducción en ECG.",
      "Debes pensar en: hiperkalemia → ondas T picudas como hallazgo más temprano en el ECG.",
      "La ERC es una causa frecuente de hiperkalemia por disminución de excreción renal de potasio.",
      "El ensanchamiento del QRS indica mayor gravedad de hiperkalemia.",
      "Tema: Trastornos del potasio.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de nefrología porque evalúa una trampa frecuente: asociar debilidad muscular solo con hipokalemia, sin considerar hiperkalemia en paciente con ERC.

La clave no es hipokalemia ni hipocalcemia.
La clave es:
ERC + debilidad muscular + parestesias + alteraciones de conducción en ECG = hiperkalemia.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 60 años con enfermedad renal crónica.
• Debilidad muscular progresiva y parestesias en extremidades.
• ECG con alteraciones de conducción cardíaca.
• Cuadro compatible con hiperkalemia en contexto de ERC.

Recordemos trastornos del potasio:
• Hiperkalemia: ERC es causa frecuente por disminución de excreción renal.
• Manifestaciones neuromusculares: debilidad, parestesias, parálisis flácida.
• Cambios ECG progresivos: ondas T picudas (más temprano) → ensanchamiento PR → ensanchamiento QRS → ondas sinusoidales → asistolia.
• Hipokalemia: también causa debilidad, pero ECG muestra ondas T aplanadas, aparición de onda U, depresión ST.
• La hiperkalemia es emergencia médica por riesgo de arritmias mortales.

Por lo tanto:
La alteración electrolítica más probable es hiperkalemia (opción C).

¿Por qué la opción C es la respuesta correcta?
La ERC predispone a hiperkalemia; las manifestaciones neuromusculares y los cambios de conducción en ECG son compatibles con elevación de potasio sérico.

¿Por qué fallan las otras opciones?
Opción A (hipocalcemia): causa prolongación QT, no alteraciones de conducción típicas de hiperkalemia; no se asocia tan directamente a ERC.
Opción B (hipokalemia): causa debilidad pero ECG muestra ondas T aplanadas y onda U, no alteraciones de conducción.
Opción D (hipernatremia): causa alteración neurológica (confusión, convulsiones), no debilidad con cambios de conducción típicos.

¿Cuál es la trampa del examen?
Muchos estudiantes observan "debilidad muscular" y responden hipokalemia automáticamente.
En paciente con ERC, la hiperkalemia es más probable y los cambios de conducción en ECG son la pista decisiva.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. ERC + síntomas neuromusculares → solicitar potasio sérico y ECG urgente.
2. Interpretar ECG: ondas T picudas = hiperkalemia temprana.
3. Tratar hiperkalemia agresivamente si hay cambios ECG (gluconato de calcio, insulina + glucosa, resinas).
4. No confundir con hipokalemia: el ECG es diferente.

Perlas de examen
✅ ERC + debilidad + alteraciones ECG = hiperkalemia hasta demostrar lo contrario.
✅ Ondas T picudas = hallazgo ECG más temprano de hiperkalemia.
✅ Ensanchamiento del QRS = hiperkalemia grave → emergencia.
✅ La hipokalemia produce ondas T aplanadas y onda U, no picudas.
✅ Hiperkalemia con cambios ECG requiere tratamiento urgente.

Referencias
• KDIGO Clinical Practice Guidelines.
• Harrison's Principles of Internal Medicine.
• Brenner and Rector's The Kidney.
• UpToDate: Clinical Manifestations and Treatment of Hyperkalemia.
• Braunwald's Heart Disease — Electrolyte disorders.`,
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
      "Cuando veas: fiebre de varios días + exantema eritematoso intenso en mejillas (\"bofetada\") + exantema reticulado en tronco y extremidades en niño con buen estado general.",
      "Debes pensar en: eritema infeccioso (quinta enfermedad) por Parvovirus B19.",
      "El signo de \"mejillas abofeteadas\" es característico y aparece antes del exantema corporal.",
      "El exantema reticulado o en encaje es altamente sugestivo del diagnóstico.",
      "Tema: Exantemas virales de la infancia.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de pediatría porque evalúa el reconocimiento del eritema infeccioso frente a otros exantemas virales de la infancia.

La clave no es sarampión ni rubéola.
La clave es:
Fiebre + eritema facial en \"bofetada\" + exantema reticulado en tronco/extremidades + buen estado general = eritema infeccioso (Parvovirus B19).

¿Qué está ocurriendo realmente?
El paciente presenta:
• Niño de 4 años con esquema de vacunación completo.
• Fiebre de 4 días con malestar y mialgias.
• Exantema eritematoso intenso en mejillas (\"bofetada\") de 24 h de evolución.
• Exantema reticulado en tronco y extremidades.
• Buen estado general, sin compromiso respiratorio ni prurito.
• Cuadro clásico de eritema infeccioso.

Recordemos exantemas virales de la infancia:
• Eritema infeccioso (5ª enfermedad): Parvovirus B19; eritema facial + exantema reticulado; autolimitado.
• Sarampión: manchas de Koplik, exantema morbiliforme cefalocaudal, fiebre alta, malestar intenso.
• Rubéola: adenopatías retroauriculares/occipitales, exantema maculopapular fino.
• Exantema súbito (roséola): fiebre alta 3-5 días que cede bruscamente, luego exantema.
• El eritema infeccioso es benigno; riesgo en embarazadas (anemia fetal) y pacientes con hemólisis crónica.

Por lo tanto:
El diagnóstico más probable es eritema infeccioso (opción B).

¿Por qué la opción B es la respuesta correcta?
La secuencia eritema facial en \"bofetada\" seguido de exantema reticulado con buen estado general es patognomónica de Parvovirus B19.

¿Por qué fallan las otras opciones?
Opción A (sarampión): requiere manchas de Koplik, exantema morbiliforme, mayor gravedad; vacunación completa lo hace improbable.
Opción C (rubéola): adenopatías características, exantema maculopapular fino, no patrón reticulado ni \"bofetada\".
Opción D (exantema súbito): la fiebre cede antes del exantema; aquí el exantema facial aparece durante la fiebre.

¿Cuál es la trampa del examen?
Muchos estudiantes leen \"fiebre y exantema\" y responden sarampión.
El patrón reticulado + mejillas abofeteadas + buen estado general orienta a eritema infeccioso, no sarampión.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Fiebre + exantema en niño → clasificar patrón del exantema.
2. Eritema facial en \"bofetada\" = eritema infeccioso hasta demostrar lo contrario.
3. Exantema reticulado confirma Parvovirus B19.
4. Manejo expectante; advertir riesgo en embarazadas contactadas.

Perlas de examen
✅ \"Mejillas abofeteadas\" + exantema reticulado = eritema infeccioso (Parvovirus B19).
✅ Buen estado general a pesar del exantema intenso.
✅ Sarampión: manchas de Koplik + exantema morbiliforme + mayor gravedad.
✅ Roséola: fiebre que cede, luego exantema (no simultáneos).
✅ Riesgo en embarazadas: anemia fetal por Parvovirus B19.

Referencias
• Nelson Textbook of Pediatrics.
• Red Book: American Academy of Pediatrics.
• Rudolph's Pediatrics.
• UpToDate: Erythema Infectiosum (Parvovirus B19 Infection).
• Harrison's Principles of Internal Medicine.`,
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
      "Cuando veas: déficit neurológico focal súbito (hemiparesia + afasia) de <4.5 horas en paciente con factores de riesgo vascular.",
      "Debes pensar en: código ACV → tomografía cerebral simple urgente y valorar trombólisis intravenosa.",
      "Todo déficit neurológico focal súbito debe considerarse ACV hasta demostrar lo contrario.",
      "La tomografía simple es el estudio inicial para descartar hemorragia intracraneal.",
      "Tema: Accidente cerebrovascular isquémico agudo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa el manejo urgente del ACV isquémico agudo dentro de la ventana terapéutica de reperfusión.

La clave no es aspirina inmediata ni anticoagulación ni observación.
La clave es:
Déficit neurológico focal súbito + NIHSS 12 + 2 horas de evolución = ACV isquémico agudo → TC urgente y valorar trombólisis.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 50 años con HTA y DM mal controladas.
• Inicio súbito de hemiparesia derecha y dificultad para hablar de 2 horas.
• Hemiparesia derecha, desviación de la mirada, NIHSS 12.
• Dentro de ventana terapéutica para trombólisis (≤4.5 horas).
• Cuadro altamente sugestivo de ACV isquémico agudo.

Recordemos manejo del ACV isquémico agudo:
• Todo déficit neurológico focal súbito = ACV hasta demostrar lo contrario.
• TC cerebral simple urgente: descartar hemorragia intracraneal antes de trombolizar.
• Trombólisis IV con alteplasa (rt-PA): ventana hasta 4.5 h en pacientes seleccionados.
• No administrar aspirina antes de descartar hemorragia.
• No anticoagular en fase aguda del ACV isquémico.
• Código ACV: tiempo es cerebro; cada minuto cuenta.

Por lo tanto:
La conducta correcta es solicitar TC cerebral simple urgente y valorar trombólisis IV (opción B).

¿Por qué la opción B es la respuesta correcta?
La paciente está dentro de la ventana terapéutica con déficit moderado (NIHSS 12); la TC descarta hemorragia y determina elegibilidad para trombólisis.

¿Por qué fallan las otras opciones?
Opción A (aspirina inmediata): no antes de TC; si hay hemorragia, la aspirina empeora el cuadro.
Opción C (anticoagulación con heparina): contraindicada en fase aguda del ACV isquémico sin TC previa.
Opción D (observación 24 h): inaceptable; retrasa reperfusión y empeora pronóstico neurológico.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan en control de presión arterial o administrar aspirina de inmediato.
La prioridad es neuroimagen urgente y reperfusión si está dentro de ventana terapéutica.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Déficit neurológico focal súbito → activar código ACV.
2. TC cerebral simple urgente (descartar hemorragia).
3. Si isquemia + dentro de ventana → trombólisis IV o trombectomía mecánica.
4. Aspirina después de descartar hemorragia (24-48 h).

Perlas de examen
✅ Déficit neurológico focal súbito = ACV hasta demostrar lo contrario.
✅ TC simple urgente antes de cualquier tratamiento.
✅ Ventana trombólisis IV: hasta 4.5 horas en pacientes seleccionados.
✅ No aspirina ni anticoagulación antes de descartar hemorragia.
✅ NIHSS cuantifica severidad y guía elegibilidad para reperfusión.

Referencias
• American Heart Association/American Stroke Association Guidelines.
• European Stroke Organisation Guidelines.
• Adams and Victor's Principles of Neurology.
• Harrison's Principles of Internal Medicine.
• UpToDate: Initial assessment and management of acute ischemic stroke.`,
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
      "Cuando veas: hematuria macroscópica indolora en fumador activo (≥20 paquetes-año), sin síntomas urinarios irritativos.",
      "Debes pensar en: carcinoma urotelial hasta demostrar lo contrario → citología urinaria y cistoscopia.",
      "La hematuria macroscópica indolora es el síntoma clásico del cáncer vesical.",
      "El tabaquismo es el principal factor de riesgo para carcinoma urotelial.",
      "Tema: Hematuria y cáncer de vejiga.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de urología porque evalúa el abordaje diagnóstico de la hematuria macroscópica indolora en paciente fumador.

La clave no es antibióticos empíricos ni manejo de litiasis.
La clave es:
Hematuria macroscópica indolora + fumador activo = carcinoma urotelial hasta demostrar lo contrario → citología + cistoscopia.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 35 años, fumador activo con 20 paquetes-año.
• Hematuria macroscópica indolora de una semana.
• Sin síntomas urinarios irritativos, fiebre ni dolor lumbar.
• Alto riesgo de carcinoma urotelial por tabaquismo.
• Requiere estudio completo del tracto urinario.

Recordemos hematuria y cáncer de vejiga:
• La hematuria macroscópica indolora es el síntoma clásico del cáncer vesical.
• El tabaquismo es el principal factor de riesgo (responsable del 50% de los casos).
• La edad joven no excluye malignidad en fumadores.
• Estudio inicial: citología urinaria + cistoscopia (método fundamental para vejiga).
• Ecografía renal y uroTC según hallazgos.
• No tratar empíricamente con antibióticos sin estudio completo.

Por lo tanto:
La conducta correcta es solicitar citología urinaria y cistoscopia (opción B).

¿Por qué la opción B es la respuesta correcta?
La cistoscopia es el método fundamental para descartar neoplasia vesical; la citología complementa la evaluación del tracto urinario superior.

¿Por qué fallan las otras opciones?
Opción A (antibióticos empíricos): la hematuria indolora sin síntomas irritativos no sugiere infección; retrasa diagnóstico oncológico.
Opción C (biopsia renal): la hematuria de origen glomerular cursa con eritrocitos dismórficos; aquí el cuadro es urológico.
Opción D (litiasis y egreso): no hay dolor cólico ni cólico renal; la hematuria indolora en fumador obliga a descartar cáncer.

¿Cuál es la trampa del examen?
Muchos estudiantes leen \"paciente joven\" y descartan malignidad.
El tabaquismo con 20 paquetes-año es factor de riesgo suficiente para estudio completo independientemente de la edad.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Hematuria macroscópica → estudio completo obligatorio.
2. Indolora + fumador = cáncer vesical hasta demostrar lo contrario.
3. Cistoscopia + citología como estudios iniciales.
4. No antibióticos empíricos ni egreso sin estudio.

Perlas de examen
✅ Hematuria macroscópica indolora en fumador = cáncer vesical hasta demostrar lo contrario.
✅ Cistoscopia es el estudio fundamental para vejiga.
✅ El tabaquismo es el principal factor de riesgo de carcinoma urotelial.
✅ La edad joven no excluye cáncer vesical en fumadores.
✅ No tratar empíricamente con antibióticos sin estudio completo.

Referencias
• Campbell-Walsh-Wein Urology.
• European Association of Urology (EAU) Guidelines on Non-Muscle-Invasive Bladder Cancer.
• American Urological Association (AUA) Hematuria Guidelines.
• Smith & Tanagho's General Urology.
• UpToDate: Evaluation of hematuria in adults.`,
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
      "Cuando veas: hematuria macroscópica persistente con estudio urológico completo negativo (imagen + cistoscopia).",
      "Debes pensar en: origen glomerular → remisión a nefrología para estudio de hematuria glomerular.",
      "Toda hematuria persistente requiere estudio completo de ambos compartimentos (urológico y nefrológico).",
      "Un estudio urológico negativo obliga a pensar en origen renal/glomerular.",
      "Tema: Hematuria glomerular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de nefrología porque evalúa el siguiente paso tras descartar causa urológica en hematuria persistente.

La clave no es repetir cistoscopia ni nefrectomía profiláctica.
La clave es:
Hematuria persistente + estudio urológico negativo = sospechar origen glomerular → remisión a nefrología.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 22 años con hematuria macroscópica de 6 meses de evolución.
• Antecedente familiar de cáncer renal en el padre (a los 52 años).
• Estudio urológico completo negativo: imagen y cistoscopia sin hallazgos.
• Hematuria persistente sin causa urológica identificada.
• Requiere estudio nefrológico de origen glomerular.

Recordemos hematuria glomerular:
• Toda hematuria persistente requiere estudio urológico Y nefrológico.
• Estudio urológico negativo → pensar en origen glomerular.
• La nefropatía por IgA es causa frecuente de hematuria macroscóscica persistente en jóvenes.
• Estudio nefrológico: sedimento urinario (eritrocitos dismórficos, cilindros eritrocitarios), proteinuria, función renal, complemento, autoanticuerpos, posible biopsia renal.
• El antecedente familiar de cáncer renal no justifica estudios urológicos repetidos ni nefrectomía profiláctica en ausencia de lesión.

Por lo tanto:
La conducta correcta es remisión a nefrología para estudio de hematuria de origen glomerular (opción B).

¿Por qué la opción B es la respuesta correcta?
Con estudio urológico agotado y negativo, el siguiente paso lógico es evaluación nefrológica para descartar glomerulopatía.

¿Por qué fallan las otras opciones?
Opción A (seguimiento sin estudios): inaceptable con hematuria persistente de 6 meses sin diagnóstico.
Opción C (repetir cistoscopia en 6 meses): ya fue negativa; no aporta información adicional.
Opción D (nefrectomía profiláctica): no indicada; el antecedente familiar no justifica cirugía sin lesión identificada.

¿Cuál es la trampa del examen?
Muchos estudiantes leen \"cáncer renal en el padre\" y continúan con estudios urológicos o consideran cirugía profiláctica.
El estudio urológico ya está completo y negativo; el siguiente paso es nefrología.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Hematuria persistente → estudio urológico completo (cistoscopia + imagen).
2. Si urológico negativo → estudio nefrológico (sedimento, proteinuria, complemento).
3. Eritrocitos dismórficos o cilindros eritrocitarios = origen glomerular.
4. Biopsia renal si se confirma sospecha glomerular.

Perlas de examen
✅ Hematuria persistente + urología negativa = estudio nefrológico.
✅ Nefropatía por IgA: causa frecuente de hematuria en jóvenes.
✅ Eritrocitos dismórficos y cilindros eritrocitarios = origen glomerular.
✅ No repetir cistoscopia si ya fue negativa sin nueva indicación.
✅ Antecedente familiar no justifica nefrectomía profiláctica sin lesión.

Referencias
• KDIGO Clinical Practice Guidelines.
• Brenner and Rector's The Kidney.
• Campbell-Walsh-Wein Urology.
• Harrison's Principles of Internal Medicine.
• UpToDate: Evaluation of hematuria in adults — Glomerular causes.`,
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
      "Cuando veas: fiebre prolongada (>2 semanas) + astenia + pérdida de peso + nuevo soplo diastólico en foco aórtico.",
      "Debes pensar en: endocarditis infecciosa → hemocultivos seriados y ecocardiograma antes de antibióticos.",
      "Fiebre + soplo cardíaco nuevo obliga a descartar endocarditis infecciosa.",
      "Los hemocultivos deben obtenerse antes de iniciar antibióticos.",
      "Tema: Endocarditis infecciosa.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de infectología porque evalúa una trampa frecuente: enfocarse en la pérdida de peso y pensar en tuberculosis o neoplasia, ignorando el soplo cardíaco nuevo.

La clave no es tuberculosis ni linfoma.
La clave es:
Fiebre prolongada + nuevo soplo cardíaco = endocarditis infecciosa hasta demostrar lo contrario → hemocultivos + ecocardiograma.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 40 años con fiebre de 2 semanas, astenia y pérdida de peso.
• Nuevo soplo diastólico en foco aórtico.
• Sin antecedentes relevantes.
• Cuadro altamente sugestivo de endocarditis infecciosa.

Recordemos endocarditis infecciosa:
• Fiebre + soplo cardíaco nuevo es la presentación clásica.
• Criterios de Duke: hemocultivos positivos + ecocardiograma con vegetación.
• Hemocultivos seriados (3 sets) antes de antibióticos.
• Ecocardiograma transtorácico y/o transesofágico.
• Complicaciones: embolia, insuficiencia valvular, absceso perivalvular.
• Staphylococcus aureus y estreptococos viridans son agentes frecuentes.

Por lo tanto:
Diagnóstico: endocarditis infecciosa; conducta: hemocultivos y ecocardiograma (opción B).

¿Por qué la opción B es la respuesta correcta?
El soplo nuevo con fiebre prolongada define sospecha alta; el estudio inicial obligatorio son hemocultivos seriados y ecocardiografía.

¿Por qué fallan las otras opciones?
Opción A (fiebre reumática): requiere antecedente estreptocócico, artritis migratoria, carditis; no explica fiebre prolongada en adulto sin contexto reumático.
Opción C (TB diseminada): no explica soplo cardíaco nuevo; baciloscopias no son estudio inicial ante soplo.
Opción D (linfoma): no explica soplo diastólico aórtico; biopsia ganglionar no es primera línea sin adenopatías.

¿Cuál es la trampa del examen?
Muchos estudiantes se enfocan en pérdida de peso y responden tuberculosis o neoplasia.
El soplo cardíaco nuevo es el dato que orienta a endocarditis infecciosa.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Fiebre prolongada + soplo nuevo → sospechar endocarditis.
2. Hemocultivos seriados antes de antibióticos.
3. Ecocardiograma para vegetaciones y complicaciones.
4. Iniciar antibióticos empíricos según guías tras hemocultivos.

Perlas de examen
✅ Fiebre + soplo nuevo = endocarditis hasta demostrar lo contrario.
✅ Hemocultivos antes de antibióticos siempre.
✅ Ecocardiograma es fundamental para diagnóstico y complicaciones.
✅ La pérdida de peso sola no define el diagnóstico; el soplo sí.
✅ Criterios de Duke guían confirmación diagnóstica.

Referencias
• European Society of Cardiology Guidelines for Infective Endocarditis.
• American Heart Association Scientific Statement on Infective Endocarditis.
• Harrison's Principles of Internal Medicine.
• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.
• UpToDate: Infective endocarditis in adults.`,
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
      "Cuando veas: niño con fatiga y disnea de esfuerzo + soplo mesosistólico en foco pulmonar + desdoblamiento fijo de S2.",
      "Debes pensar en: comunicación interauricular (CIA) → cardiopatía congénita acianótica más frecuente en adultos jóvenes.",
      "El desdoblamiento fijo de S2 es el hallazgo semiológico patognomónico de la CIA.",
      "El soplo se produce por aumento del flujo pulmonar, no por el defecto mismo.",
      "Tema: Cardiopatías congénitas acianóticas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología pediátrica porque evalúa el reconocimiento del hallazgo patognomónico de la comunicación interauricular.

La clave no es CIV ni conducto arterioso persistente.
La clave es:
Soplo mesosistólico pulmonar + desdoblamiento fijo de S2 = comunicación interauricular.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Niño de 6 años con fatiga y disnea de esfuerzo progresiva.
• Soplo mesosistólico en foco pulmonar.
• Desdoblamiento fijo del segundo ruido cardíaco.
• Cuadro clásico de CIA.

Recordemos cardiopatías congénitas acianóticas:
• CIA: defecto en tabique interauricular; desdoblamiento fijo de S2 es patognomónico.
• CIV: soplo holosistólico en borde esternal izquierdo, no desdoblamiento fijo.
• PCA: soplo continuo en \"maquinaria\", no desdoblamiento fijo.
• Tetralogía de Fallot: cianótica, no acianótica.
• La CIA puede ser asintomática en infancia y manifestarse en edad escolar.

Por lo tanto:
El diagnóstico más probable es comunicación interauricular (opción A).

¿Por qué la opción A es la respuesta correcta?
El desdoblamiento fijo de S2 es el hallazgo semiológico más específico de CIA; el soplo pulmonar refleja flujo aumentado.

¿Por qué fallan las otras opciones?
Opción B (CIV): soplo holosistólico, no mesosistólico pulmonar; no desdoblamiento fijo.
Opción C (PCA): soplo continuo tipo maquinaria, no mesosistólico con desdoblamiento fijo.
Opción D (Fallot): cardiopatía cianótica; no compatible con cuadro acianótico.

¿Cuál es la trampa del examen?
Muchos estudiantes recuerdan \"soplo pulmonar\" y responden conducto arterioso persistente.
El desdoblamiento fijo de S2 diferencia CIA de todas las demás.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Soplo en niño → clasificar tipo y localización.
2. Desdoblamiento fijo de S2 = CIA hasta demostrar lo contrario.
3. Confirmar con ecocardiograma.
4. Cerrar si hay repercusión hemodinámica.

Perlas de examen
✅ Desdoblamiento fijo de S2 = CIA (hallazgo patognomónico).
✅ Soplo mesosistólico pulmonar por flujo aumentado, no por el defecto.
✅ CIA es acianótica; Fallot es cianótica.
✅ PCA = soplo continuo, no mesosistólico.
✅ La CIA puede diagnosticarse tardíamente en edad escolar.

Referencias
• Nelson Textbook of Pediatrics.
• Moss & Adams' Heart Disease in Infants, Children, and Adolescents.
• Braunwald's Heart Disease.
• American Heart Association Guidelines for Congenital Heart Disease.
• UpToDate: Isolated atrial septal defects in children.`,
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
      "Cuando veas: trauma craneoencefálico severo con apertura ocular al dolor + sonidos incomprensibles + respuesta motora inadecuada al dolor.",
      "Debes pensar en: Glasgow 7/15 (2+2+3) → TCE grave con indicación de manejo avanzado de vía aérea.",
      "Glasgow ≤ 8 indica trauma craneoencefálico grave.",
      "La respuesta motora es el componente con mayor valor pronóstico.",
      "Tema: Escala de Coma de Glasgow.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de urgencias/neurocirugía porque evalúa el cálculo correcto de la escala de Glasgow, una herramienta fundamental en trauma craneoencefálico.

La clave no es confundir los componentes ni sumar incorrectamente.
La clave es:
Apertura ocular al dolor (2) + sonidos incomprensibles (2) + retirada al dolor (3) = Glasgow 7.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 43 años con TCE severo post-accidente de tránsito.
• Apertura ocular al dolor = 2 puntos.
• Emisión de sonidos incomprensibles = 2 puntos.
• Respuesta motora inadecuada (retirada al dolor) = 3 puntos.
• Total: Glasgow 7/15.

Recordemos escala de Glasgow:
• Apertura ocular: espontánea 4, a la voz 3, al dolor 2, ninguna 1.
• Respuesta verbal: orientado 5, confuso 4, palabras inapropiadas 3, sonidos incomprensibles 2, ninguna 1.
• Respuesta motora: obedece órdenes 6, localiza 5, retirada 4, flexión anormal (decorticación) 3, extensión anormal (descerebración) 2, ninguna 1.
• Glasgow ≤ 8 = TCE grave → considerar intubación.
• La respuesta motora tiene mayor valor pronóstico.

Por lo tanto:
El puntaje es 7 puntos (opción B).

¿Por qué la opción B es la respuesta correcta?
2 (ocular) + 2 (verbal) + 3 (motora) = 7; no confundir retirada al dolor (4) con flexión anormal (3).

¿Por qué fallan las otras opciones?
Opción A (6): suma incorrecta de componentes.
Opción C (8): confunde retirada (4) con flexión anormal (3) o verbal.
Opción D (9): sobreestima componentes motores o verbales.

¿Cuál es la trampa del examen?
Muchos estudiantes confunden flexión anormal (decorticación, 3 puntos) con retirada al dolor (4 puntos).
También confunden sonidos incomprensibles (2) con palabras inapropiadas (3).

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar apertura ocular, respuesta verbal y motora por separado.
2. Sumar los tres componentes (máximo 15).
3. Glasgow ≤ 8 → TCE grave, considerar intubación.
4. La respuesta motora es el predictor pronóstico más importante.

Perlas de examen
✅ Glasgow = ocular + verbal + motora (máx. 15).
✅ ≤ 8 = TCE grave → vía aérea definitiva.
✅ Retirada al dolor = 4; flexión anormal = 3; no confundir.
✅ Sonidos incomprensibles = 2; palabras inapropiadas = 3.
✅ La respuesta motora tiene mayor valor pronóstico.

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
      "Cuando veas: lactante con taquicardia de 230 lpm + TSV de complejos estrechos, regular, sin ondas P visibles, hemodinámicamente estable.",
      "Debes pensar en: adenosina IV como tratamiento farmacológico de elección en TSV estable.",
      "La TSV es la arritmia sintomática más frecuente en lactantes.",
      "La cardioversión sincronizada se reserva para inestabilidad hemodinámica.",
      "Tema: Taquicardia supraventricular en pediatría.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología pediátrica porque evalúa una trampa frecuente: cardioversión ante taquicardia rápida sin evaluar estabilidad hemodinámica.

La clave no es cardioversión ni amiodarona de primera línea.
La clave es:
TSV estable en lactante → adenosina IV en bolo rápido como tratamiento de elección.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Lactante de 2 meses con irritabilidad y disminución de succión súbita.
• Taquicardia de 230 lpm.
• ECG: TSV de complejos estrechos, regular, sin ondas P.
• Hemodinámicamente estable (no shock ni hipotensión).
• Cuadro compatible con TSV estable.

Recordemos TSV en pediatría:
• Arritmia sintomática más frecuente en lactantes.
• ECG: taquicardia regular de complejos estrechos, ondas P ausentes o retrogradas.
• Estable → adenosina IV (bloqueo transitorio AV).
• Inestable (shock, hipotensión, alteración de conciencia) → cardioversión sincronizada.
• Amiodarona es segunda línea, no primera en TSV estable.
• Betabloqueadores IV no son primera línea en lactantes.

Por lo tanto:
Tratamiento de elección: adenosina intravenosa (opción B).

¿Por qué la opción B es la respuesta correcta?
En TSV estable, la adenosina interrumpe el circuito de reentrada bloqueando transitoriamente el nodo AV.

¿Por qué fallan las otras opciones?
Opción A (amiodarona): segunda línea; no primera en TSV estable pediátrica.
Opción C (cardioversión sincronizada): reservada para inestabilidad hemodinámica.
Opción D (metoprolol): no es primera línea en lactantes con TSV estable.

¿Cuál es la trampa del examen?
Muchos estudiantes leen \"230 lpm\" y responden cardioversión automáticamente.
El examen exige distinguir TSV estable (adenosina) vs inestable (cardioversión).

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar TSV en ECG (complejos estrechos, regular, sin P).
2. Evaluar estabilidad hemodinámica.
3. Estable → adenosina IV en bolo rápido.
4. Inestable → cardioversión sincronizada inmediata.

Perlas de examen
✅ TSV estable en lactante = adenosina IV.
✅ Cardioversión solo si inestabilidad hemodinámica.
✅ TSV es la arritmia sintomática más frecuente en lactantes.
✅ Adenosina en bolo IV rápido seguido de flush salino.
✅ Amiodarona es segunda línea, no primera.

Referencias
• Nelson Textbook of Pediatrics.
• Pediatric Advanced Life Support (PALS).
• Braunwald's Heart Disease.
• Moss & Adams' Heart Disease in Infants, Children, and Adolescents.
• UpToDate: Supraventricular tachycardia in children.`,
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
      "Cuando veas: cefalea intensa de inicio súbito (\"en trueno\") + náuseas + fotofobia + rigidez de nuca sin focalización neurológica.",
      "Debes pensar en: hemorragia subaracnoidea → TC cerebral sin contraste urgente.",
      "La HSA produce la clásica \"cefalea en trueno\" o \"la peor cefalea de su vida\".",
      "La causa más frecuente es ruptura de aneurisma sacular.",
      "Tema: Hemorragia subaracnoidea.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa el reconocimiento de hemorragia subaracnoidea frente a meningitis u otras cefaleas primarias.

La clave no es meningitis ni migraña.
La clave es:
Cefalea súbita intensa + rigidez de nuca + fotofobia = hemorragia subaracnoidea hasta demostrar lo contrario.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 57 años con HTA y obesidad.
• Cefalea intensa de inicio súbito, náuseas, fotofobia.
• Rigidez de nuca sin focalización neurológica.
• Cuadro clásico de hemorragia subaracnoidea.

Recordemos hemorragia subaracnoidea:
• Cefalea en trueno: inicio súbito, máxima intensidad en segundos.
• Irritación meníngea: rigidez de nuca, fotofobia.
• Causa más frecuente: ruptura de aneurisma sacular (80%).
• TC cerebral sin contraste es estudio inicial (sensibilidad >95% en primeras 6 h).
• Si TC negativa → punción lumbar (xantocromía).
• Complicaciones: vasoespasmo, hidrocefalia, re-sangrado.

Por lo tanto:
Diagnóstico más probable: hemorragia subaracnoidea (opción B).

¿Por qué la opción B es la respuesta correcta?
La cefalea en trueno con irritación meníngea sin fiebre ni alteración del estado mental inicial orienta a HSA, no meningitis bacteriana.

¿Por qué fallan las otras opciones?
Opción A (meningitis bacteriana): requiere fiebre, alteración del estado mental; cefalea progresiva, no en trueno.
Opción C (migraña): cefalea pulsátil unilateral con aura; no rigidez de nuca ni inicio en trueno.
Opción D (encefalitis): alteración del estado mental, fiebre, convulsiones; no presentes aquí.

¿Cuál es la trampa del examen?
Muchos estudiantes leen \"fotofobia y rigidez de nuca\" y responden meningitis.
La cefalea de inicio súbito (trueno) diferencia HSA de meningitis.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Cefalea en trueno → HSA hasta demostrar lo contrario.
2. TC cerebral sin contraste urgente.
3. Si TC negativa y alta sospecha → punción lumbar.
4. Angiografía para localizar aneurisma si HSA confirmada.

Perlas de examen
✅ Cefalea en trueno = HSA hasta demostrar lo contrario.
✅ Causa más frecuente: aneurisma sacular.
✅ TC sin contraste es estudio inicial de elección.
✅ Meningitis: fiebre + cefalea progresiva, no en trueno.
✅ Vasoespasmo es complicación tardía (días 3-14).

Referencias
• Adams and Victor's Principles of Neurology.
• Greenberg's Handbook of Neurosurgery.
• American Heart Association Guidelines for Aneurysmal Subarachnoid Hemorrhage.
• Harrison's Principles of Internal Medicine.
• UpToDate: Aneurysmal subarachnoid hemorrhage.`,
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
      "Cuando veas: lactante <2 años con fiebre, tos, sibilancias, tiraje y SatO₂ 92%, sin antecedente de sibilancias recurrentes.",
      "Debes pensar en: bronquiolitis aguda → oxígeno suplementario y medidas de soporte, no broncodilatadores rutinarios.",
      "El VSR es la principal causa de bronquiolitis.",
      "El tratamiento es fundamentalmente de soporte; no broncodilatadores ni corticoides de rutina.",
      "Tema: Bronquiolitis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de pediatría porque evalúa una trampa frecuente: tratar bronquiolitis como asma con salbutamol y corticoides.

La clave no es salbutamol ni antibióticos.
La clave es:
Lactante con primer episodio de sibilancias + hipoxemia → bronquiolitis → oxígeno y soporte.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Lactante de 1 año con fiebre, tos y dificultad respiratoria de 2 días.
• Sibilancias difusas, tiraje intercostal.
• SatO₂ 92% al aire ambiente (hipoxemia).
• Sin antecedentes de episodios similares (primer episodio).
• Cuadro compatible con bronquiolitis aguda por VSR.

Recordemos bronquiolitis:
• Principal causa: virus sincitial respiratorio (VSR).
• Edad típica: <2 años, pico en <6 meses.
• Tratamiento: soporte (oxígeno, hidratación, aspiración de secreciones).
• No broncodilatadores de rutina (evidencia limitada).
• No corticoides sistémicos.
• No antibióticos (etiología viral).
• Criterios de hospitalización: hipoxemia, deshidratación, apnea.

Por lo tanto:
Tratamiento más adecuado: oxígeno suplementario y medidas de soporte (opción B).

¿Por qué la opción B es la respuesta correcta?
La hipoxemia (SatO₂ 92%) requiere oxigenoterapia; el manejo de bronquiolitis es fundamentalmente de soporte.

¿Por qué fallan las otras opciones?
Opción A (salbutamol + prednisolona): no recomendado de rutina en bronquiolitis según guías AAP.
Opción C (ceftriaxona): etiología viral; antibióticos no indicados sin sobreinfección bacteriana.
Opción D (adrenalina IM): indicada en anafilaxia, no bronquiolitis.

¿Cuál es la trampa del examen?
Muchos estudiantes leen \"sibilancias\" y responden salbutamol como en asma.
Bronquiolitis en lactante primer episodio = soporte, no broncodilatadores rutinarios.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Lactante con sibilancias primer episodio → bronquiolitis hasta demostrar lo contrario.
2. Evaluar hipoxemia y estado de hidratación.
3. Oxígeno si SatO₂ <90-92%.
4. No broncodilatadores, corticoides ni antibióticos de rutina.

Perlas de examen
✅ Bronquiolitis = soporte; no salbutamol de rutina.
✅ VSR es la causa principal.
✅ Hipoxemia (SatO₂ <90-92%) = indicación de oxígeno.
✅ Primer episodio de sibilancias en lactante ≠ asma.
✅ Antibióticos solo si sobreinfección bacteriana sospechada.

Referencias
• Nelson Textbook of Pediatrics.
• American Academy of Pediatrics Clinical Practice Guideline: Bronchiolitis.
• Manual de Pediatría de la AEP.
• UpToDate: Bronchiolitis in Infants and Children.
• WHO Pocket Book of Hospital Care for Children.`,
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
      "Cuando veas: hematemesis y melena en paciente con AINEs crónicos, endoscopia con vaso visible no sangrante, Hb 8 g/dL, BUN elevado y taquicardia.",
      "Debes pensar en: Forrest IIa + Glasgow-Blatchford alto riesgo (>7) → úlcera péptica secundaria a AINE.",
      "Forrest IIa implica vaso visible no sangrante; requiere hemostasia endoscópica por alto riesgo de resangrado.",
      "Glasgow-Blatchford >7 indica alto riesgo de reintervención o mortalidad.",
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
      "Cuando veas: mujer joven con fatiga, intolerancia al frío, aumento de peso, estreñimiento, caída del cabello, piel seca y TSH elevada con T4 libre baja.",
      "Debes pensar en: hipotiroidismo primario (tiroiditis de Hashimoto como causa más frecuente).",
      "TSH elevada + T4 libre disminuida = hipotiroidismo primario (falla tiroidea, retroalimentación positiva de TSH).",
      "La intolerancia al frío, estreñimiento y piel seca son síntomas clásicos de hipotiroidismo.",
      "Tema: Hipotiroidismo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de endocrinología porque evalúa una trampa frecuente: interpretar mal el patrón TSH-T4 o confundir hipotiroidismo primario con central.

La clave no es solo los síntomas inespecíficos de fatiga.
La clave es:
TSH elevada + T4 libre disminuida = hipotiroidismo primario.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 25 años con fatiga progresiva de varios meses.
• Intolerancia al frío, aumento de peso no intencional y estreñimiento.
• Caída del cabello y piel seca.
• TSH elevada y T4 libre disminuida.
• Cuadro clínico y bioquímico compatible con hipotiroidismo primario.

Recordemos hipotiroidismo:
• Hipotiroidismo primario: falla tiroidea → TSH ↑ y T4 libre ↓.
• Hipotiroidismo central: falla hipofisaria/hipotalámica → TSH inapropiadamente normal o baja con T4 libre ↓.
• Causa más frecuente de hipotiroidismo primario: tiroiditis de Hashimoto (autoinmune).
• Síntomas clásicos: intolerancia al frío, estreñimiento, bradicardia, piel seca, caída del cabello, aumento de peso.
• Tratamiento: levotiroxina oral.

Por lo tanto:
El diagnóstico más probable es hipotiroidismo primario (opción B).

¿Por qué la opción B es la respuesta correcta?
La elevación de TSH con disminución de T4 libre es el patrón bioquímico característico del hipotiroidismo primario, con enfermedad tiroidea primaria.

¿Por qué fallan las otras opciones?
Opción A (hipertiroidismo primario): presentaría TSH suprimida y T4 libre elevada, con intolerancia al calor y pérdida de peso.
Opción C (hipotiroidismo central): TSH inapropiadamente normal o baja con T4 libre disminuida.
Opción D (tiroiditis subaguda): cuadro agudo con dolor cervical, fiebre y fase inicial de hipertiroidismo por liberación hormonal.

¿Cuál es la trampa del examen?
Muchos estudiantes memorizan "TSH alta = problema hipofisario", pero TSH elevada con T4 baja indica hipotiroidismo primario (la glándula no responde y la hipófisis eleva TSH).

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Correlacionar síntomas (frío, estreñimiento, piel seca) con perfil tiroideo.
2. TSH ↑ + T4 libre ↓ = hipotiroidismo primario.
3. TSH baja/normal + T4 libre ↓ = sospechar hipotiroidismo central.
4. Iniciar levotiroxina y buscar causa (anticuerpos anti-TPO en Hashimoto).

Perlas de examen
✅ TSH elevada + T4 libre baja = hipotiroidismo primario.
✅ Hashimoto es la causa más frecuente de hipotiroidismo primario.
✅ Intolerancia al frío y estreñimiento son síntomas clásicos.
✅ Hipotiroidismo central: TSH inapropiadamente normal o baja.
✅ Tiroiditis subaguda: dolor cervical y fase inicial hipertiroidea.

Referencias
• Williams Textbook of Endocrinology.
• Harrison's Principles of Internal Medicine.
• American Thyroid Association Guidelines for Hypothyroidism.
• Greenspan's Basic and Clinical Endocrinology.
• UpToDate: Clinical manifestations of hypothyroidism.`,
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
      "Cuando veas: disnea súbita, dolor torácico, hipotensión, hipoxemia, FA, patrón S1Q3T3 y defecto de llenado en arteria pulmonar derecha en angioTAC.",
      "Debes pensar en: TEP de alto riesgo (masivo) → trombólisis sistémica si no hay contraindicaciones.",
      "La hipotensión define TEP de alto riesgo; la anticoagulación sola no es suficiente.",
      "El patrón S1Q3T3 sugiere sobrecarga aguda del ventrículo derecho.",
      "Tema: Tromboembolismo pulmonar.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa una trampa frecuente: indicar solo anticoagulación ante un TEP con inestabilidad hemodinámica.

La clave no es la anticoagulación ambulatoria ni el filtro de vena cava.
La clave es:
TEP confirmado + hipotensión = TEP de alto riesgo (masivo) → trombólisis sistémica.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 60 años con fibrilación auricular (fuente embólica potencial).
• Disnea súbita y dolor torácico.
• Hipotensión e hipoxemia (inestabilidad hemodinámica).
• ECG con patrón S1Q3T3 (sobrecarga de VD).
• AngioTAC: defecto de llenado en arteria pulmonar derecha (TEP confirmado).
• Cuadro compatible con TEP masivo de alto riesgo.

Recordemos tromboembolismo pulmonar:
• TEP de alto riesgo (masivo): hipotensión o shock; mortalidad elevada.
• TEP de riesgo intermedio: sin hipotensión pero con disfunción de VD o biomarcadores elevados.
• TEP de bajo riesgo: sin hipotensión ni disfunción de VD.
• Tratamiento TEP alto riesgo: trombólisis sistémica (alteplasa) si no hay contraindicaciones.
• Anticoagulación es el pilar del tratamiento pero insuficiente sola en TEP masivo.
• AngioTAC es el estudio de elección en pacientes hemodinámicamente estables.

Por lo tanto:
El siguiente paso más adecuado es trombólisis sistémica (opción C).

¿Por qué la opción C es la respuesta correcta?
El paciente presenta TEP de alto riesgo evidenciado por hipotensión arterial. En ausencia de contraindicaciones, la trombólisis sistémica constituye el tratamiento de elección.

¿Por qué fallan las otras opciones?
Opción A (anticoagulación y manejo ambulatorio): contraindicado en TEP con hipotensión; requiere hospitalización y reperfusión.
Opción B (apixabán oral): anticoagulación correcta en TEP no masivo, pero insuficiente ante inestabilidad hemodinámica.
Opción D (filtro de vena cava): reservado para contraindicación absoluta a anticoagulación, no como primera línea en TEP masivo.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "defecto de llenado en arteria pulmonar" y responden anticoagulación, sin valorar que la hipotensión define TEP de alto riesgo que requiere trombólisis.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar TEP (angioTAC o ecocardiograma en inestables).
2. Estratificar riesgo: hipotensión = alto riesgo (masivo).
3. TEP masivo sin contraindicaciones → trombólisis sistémica.
4. Anticoagulación posterior y buscar fuente embólica (FA en este caso).

Perlas de examen
✅ Hipotensión en TEP = alto riesgo (masivo) → trombólisis.
✅ S1Q3T3 sugiere sobrecarga aguda del ventrículo derecho.
✅ Anticoagulación sola no es suficiente en TEP masivo.
✅ AngioTAC es diagnóstico de elección en pacientes estables.
✅ Filtro de VCI solo si contraindicación absoluta a anticoagulación.

Referencias
• ESC Guidelines for the Diagnosis and Management of Acute Pulmonary Embolism.
• CHEST Guidelines for Antithrombotic Therapy in VTE.
• Harrison's Principles of Internal Medicine.
• Braunwald's Heart Disease.
• UpToDate: Treatment, prognosis, and follow-up of acute pulmonary embolism.`,
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
      "Cuando veas: urticaria generalizada, edema de labios, hipotensión, taquicardia y estridor laríngeo 15 minutos tras ingestión de mariscos.",
      "Debes pensar en: anafilaxia → adrenalina intramuscular de inmediato como primera línea.",
      "La adrenalina IM es el tratamiento de primera línea; no existen contraindicaciones absolutas en anafilaxia.",
      "El compromiso respiratorio (estridor) y cardiovascular (hipotensión) confirman anafilaxia grave.",
      "Tema: Anafilaxia.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de alergología porque evalúa una trampa frecuente: tratar anafilaxia con antihistamínicos o corticoides en lugar de adrenalina.

La clave no es la hidrocortisona ni los antihistamínicos.
La clave es:
Exposición alérgena + compromiso cutáneo, respiratorio y cardiovascular = anafilaxia → adrenalina IM inmediata.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Adolescente de 15 años con urticaria generalizada y edema de labios.
• Inicio 15 minutos tras ingestión de mariscos (exposición alérgena clara).
• Hipotensión y taquicardia (compromiso cardiovascular).
• Estridor laríngeo (compromiso respiratorio alto).
• Cuadro de anafilaxia con criterios de gravedad.

Recordemos anafilaxia:
• Definición: reacción alérgica sistémica grave con inicio rápido que compromete múltiples sistemas.
• Criterios: exposición alérgena + compromiso cutáneo/mucoso + respiratorio y/o cardiovascular.
• Tratamiento de primera línea: adrenalina intramuscular (vasto lateral, 0.3-0.5 mg en adultos/adolescentes).
• No existen contraindicaciones absolutas para adrenalina en anafilaxia.
• Antihistamínicos y corticoides son tratamiento adyuvante, nunca de primera línea.
• Posición supina con elevación de miembros inferiores si hay hipotensión.

Por lo tanto:
El manejo de primera línea es adrenalina intramuscular (opción C).

¿Por qué la opción C es la respuesta correcta?
La adrenalina IM es el único tratamiento que revierte rápidamente la broncoconstricción, el edema y la hipotensión en anafilaxia. Debe administrarse de forma inmediata.

¿Por qué fallan las otras opciones?
Opción A (hidrocortisona IV): adyuvante; no revierte la anafilaxia aguda; su inicio de acción es lento.
Opción B (clorfeniramina IV): antihistamínico adyuvante; no trata el compromiso cardiovascular ni respiratorio agudo.
Opción D (salbutamol inhalado): puede ayudar broncoespasmo pero no trata edema laríngeo ni hipotensión.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "urticaria" y responden antihistamínicos, sin reconocer que hipotensión + estridor definen anafilaxia grave que requiere adrenalina IM de inmediato.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer anafilaxia: alérgeno + compromiso multiorgánico.
2. Adrenalina IM inmediata (primera línea, sin demora).
3. Medidas de soporte: oxígeno, líquidos IV, posición supina.
4. Antihistamínicos y corticoides como adyuvantes, no como primera línea.

Perlas de examen
✅ Anafilaxia = adrenalina IM inmediata, sin excepciones.
✅ No hay contraindicaciones absolutas para adrenalina en anafilaxia.
✅ Hipotensión + estridor = anafilaxia grave.
✅ Antihistamínicos y corticoides son adyuvantes, no primera línea.
✅ Vía IM en vasto lateral; dosis 0.3-0.5 mg en adolescentes/adultos.

Referencias
• World Allergy Organization (WAO) Anaphylaxis Guidelines.
• EAACI Guidelines on Anaphylaxis.
• Nelson Textbook of Pediatrics.
• Tintinalli's Emergency Medicine.
• UpToDate: Anaphylaxis: Emergency treatment.`,
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
      "Cuando veas: fiebre, edema palpebral, exantema máculo-papular en ~17% de superficie corporal tras carbamazepina.",
      "Debes pensar en: síndrome DRESS → suspender carbamazepina e iniciar corticoides sistémicos.",
      "La carbamazepina es una causa clásica de DRESS; el edema facial es altamente característico.",
      "DRESS se diferencia de SJS/TEN por exantema máculo-papular extenso sin descamación ni afectación mucosa severa.",
      "Tema: Reacciones cutáneas graves inducidas por medicamentos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de dermatología porque evalúa una trampa frecuente: clasificar toda reacción cutánea por fármaco como exantema medicamentoso simple.

La clave no es continuar el fármaco ni desbridamiento quirúrgico.
La clave es:
Fiebre + edema facial + exantema extenso + fármaco de alto riesgo (carbamazepina) = DRESS → suspender fármaco y corticoides.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 33 años en tratamiento con carbamazepina por epilepsia.
• Malestar general, fiebre y edema palpebral.
• Exantema máculo-papular pruriginoso en ~17% de superficie corporal.
• Cuadro compatible con reacción de hipersensibilidad sistémica grave (DRESS).

Recordemos síndrome DRESS:
• Drug Reaction with Eosinophilia and Systemic Symptoms.
• Fármacos clásicos: antiepilépticos aromáticos (carbamazepina, fenitoína, fenobarbital), alopurinol, sulfonamidas.
• Tríada: fiebre + exantema + afectación de órganos internos (hígado, riñón, pulmón).
• Edema facial es uno de los hallazgos más característicos.
• Eosinofilia frecuente pero no indispensable para sospechar el diagnóstico.
• Tratamiento: suspensión inmediata del fármaco + corticoides sistémicos.
• Inicio tardío (2-8 semanas tras inicio del fármaco).

Por lo tanto:
Diagnóstico: síndrome DRESS; tratamiento: suspensión de carbamazepina e inicio de corticoides sistémicos (opción B).

¿Por qué la opción B es la respuesta correcta?
La combinación de fiebre, edema facial, exantema extenso y carbamazepina es altamente sugestiva de DRESS, que requiere suspensión del fármaco y corticoides sistémicos.

¿Por qué fallan las otras opciones?
Opción A (Stevens-Johnson): afectación mucosa severa y descamación; SJS involucra <10% de superficie corporal con lesiones bolhosas.
Opción C (NET): descamación epidérmica masiva (>30% SC); requiere manejo en UCI, no desbridamiento quirúrgico rutinario.
Opción D (exantema simple): subestima la gravedad; continuar carbamazepina puede ser fatal.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "exantema por medicamento" y responden exantema medicamentoso simple con antihistamínicos, sin reconocer fiebre + edema facial como DRESS.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar fármaco de alto riesgo (carbamazepina, alopurinol).
2. Buscar tríada: fiebre + exantema + edema facial/sistémico.
3. Suspender fármaco causal de inmediato.
4. Iniciar corticoides sistémicos y monitorizar función hepática y renal.

Perlas de examen
✅ Carbamazepina = causa clásica de DRESS.
✅ Edema facial es altamente característico de DRESS.
✅ DRESS ≠ exantema medicamentoso simple.
✅ Eosinofilia frecuente pero no obligatoria.
✅ Suspender fármaco y corticoides sistémicos es el manejo.

Referencias
• Fitzpatrick's Dermatology.
• Bolognia Dermatology.
• Harrison's Principles of Internal Medicine.
• UpToDate: Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS).
• RegiSCAR diagnostic criteria for DRESS.`,
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
      "Cuando veas: inconsciencia en cochera con motor encendido, pH 7.2, PaO₂ 190 mmHg, SatO₂ pulsioxímetro 98% vs 88% en gasometría.",
      "Debes pensar en: intoxicación por monóxido de carbono con carboxihemoglobina → disociación pulsioximetría/gasometría.",
      "El CO forma carboxihemoglobina que no transporta O₂; la PaO₂ puede ser normal.",
      "La pulsioximetría convencional no diferencia oxihemoglobina de carboxihemoglobina (lectura falsamente normal).",
      "Tema: Intoxicación por monóxido de carbono.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de toxicología porque evalúa una trampa frecuente: confiar en la pulsioximetría normal y descartar hipoxia en intoxicación por CO.

La clave no es la PaO₂ elevada ni la saturación del pulsioxímetro.
La clave es:
Exposición a CO + PaO₂ normal + pulsioximetría falsamente elevada = carboxihemoglobina.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 20 años inconsciente en cochera con motor encendido (exposición a CO).
• pH 7.2 (acidosis).
• PaO₂ 190 mmHg (normal o elevada).
• Saturación arterial 88% vs pulsioximetría 98% (disociación).
• Cuadro compatible con intoxicación por monóxido de carbono.

Recordemos intoxicación por monóxido de carbono:
• El CO se une a la hemoglobina con afinidad 200-250 veces mayor que el O₂.
• Forma carboxihemoglobina (COHb) que no transporta oxígeno.
• La PaO₂ mide oxígeno disuelto, no unido a hemoglobina → puede ser normal.
• La pulsioximetría convencional mide absorción en longitudes de onda de oxihemoglobina y desoxihemoglobina, no distingue COHb.
• Resultado: pulsioximetría falsamente normal o elevada con hipoxia tisular real.
• Tratamiento: oxígeno al 100% (cámara hiperbárica si COHb >25% o grave).

Por lo tanto:
La explicación más probable es intoxicación por monóxido de carbono con formación de carboxihemoglobina (opción B).

¿Por qué la opción B es la respuesta correcta?
El CO produce carboxihemoglobina que disminuye el transporte de oxígeno sin alterar significativamente la PaO₂, y la pulsioximetría no diferencia COHb de oxihemoglobina.

¿Por qué fallan las otras opciones?
Opción A (metahemoglobinemia): contexto de nitritos; pulsioximetría típicamente ~85% fija; no asociada a exposición en cochera.
Opción C (error por hipotermia): no explica la disociación sistemática ni el contexto de exposición a CO.
Opción D (hipoventilación alveolar): produciría PaO₂ baja, no elevada con saturación disociada.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "saturación 98%" en pulsioximetría y descartan hipoxia, sin reconocer que la pulsioximetría es falsamente normal en intoxicación por CO.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar CO ante exposición en espacio cerrado con motor/combustión.
2. No confiar en pulsioximetría convencional.
3. Medir carboxihemoglobina en cooximetría.
4. Tratar con O₂ 100%; cámara hiperbárica si indicado.

Perlas de examen
✅ CO → carboxihemoglobina; PaO₂ puede ser normal.
✅ Pulsioximetría falsamente normal en intoxicación por CO.
✅ Cooximetría es el estudio diagnóstico (mide COHb).
✅ O₂ 100% es tratamiento de primera línea.
✅ Cámara hiperbárica si COHb >25% o cuadro grave.

Referencias
• Goldfrank's Toxicologic Emergencies.
• Tintinalli's Emergency Medicine.
• Harrison's Principles of Internal Medicine.
• UpToDate: Carbon monoxide poisoning.
• AAPCC Guidelines on CO Poisoning.`,
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
      "Cuando veas: mujer joven sexualmente activa, sin preservativo, dolor hipogástrico/pélvico y dolor a la movilización cervical sin dolor anexial.",
      "Debes pensar en: enfermedad inflamatoria pélvica (EIP) → ceftriaxona + doxiciclina + metronidazol.",
      "El dolor a la movilización cervical (signo de Chandelier) es un criterio clínico clave para EIP.",
      "El tratamiento empírico no debe retrasarse esperando cultivos.",
      "Tema: Enfermedad inflamatoria pélvica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ginecología porque evalúa una trampa frecuente: enfocarse solo en el dolor pélvico sin valorar el signo de Chandelier ni los factores de riesgo de ITS.

La clave no es el embarazo ectópico ni la observación de un quiste.
La clave es:
Mujer joven con factores de riesgo de ITS + dolor pélvico + dolor a la movilización cervical = EIP → antibióticos empíricos.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 25 años, sexualmente activa, sin uso habitual de preservativo.
• Antecedentes de relaciones sexuales de riesgo.
• Dolor en hipogastrio y dolor pélvico fluctuante.
• Dolor a la movilización cervical (signo de Chandelier positivo).
• Sin dolor anexial a la palpación.
• Cuadro altamente sugestivo de enfermedad inflamatoria pélvica.

Recordemos enfermedad inflamatoria pélvica:
• Infección ascendente del tracto genital superior (útero, trompas, ovarios).
• Agentes: Chlamydia trachomatis y Neisseria gonorrhoeae (más frecuentes).
• Criterios mínimos CDC: dolor pélvico + dolor a movilización cervical o anexial.
• Tratamiento ambulatorio: ceftriaxona 500 mg IM dosis única + doxiciclina 100 mg VO c/12h + metronidazol 500 mg VO c/12h x 14 días.
• No retrasar tratamiento esperando cultivos o pruebas.
• Complicaciones: infertilidad, embarazo ectópico, dolor pélvico crónico.

Por lo tanto:
Enfermedad inflamatoria pélvica; tratamiento con ceftriaxona más doxiciclina y metronidazol (opción B).

¿Por qué la opción B es la respuesta correcta?
La presencia de dolor pélvico con dolor a la movilización cervical en una mujer con factores de riesgo para ITS es altamente sugestiva de EIP. El tratamiento empírico debe iniciarse de inmediato.

¿Por qué fallan las otras opciones?
Opción A (embarazo ectópico): requiere β-hCG positiva y hallazgos ecográficos; el signo de Chandelier orienta a EIP.
Opción C (endometriosis): cuadro crónico cíclico, no agudo con factores de riesgo de ITS.
Opción D (quiste ovárico funcional): no explica dolor a la movilización cervical ni factores de riesgo de ITS.

¿Cuál es la trampa del examen?
Muchos estudiantes se enfocan en el dolor pélvico aislado y no valoran el dolor a la movilización cervical como criterio diagnóstico clave de EIP.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar factores de riesgo de ITS y dolor pélvico.
2. Buscar signo de Chandelier (dolor a movilización cervical).
3. Iniciar tratamiento empírico sin esperar cultivos.
4. Ceftriaxona + doxiciclina + metronidazol x 14 días.

Perlas de examen
✅ Dolor a movilización cervical = signo de Chandelier (criterio EIP).
✅ Tratamiento empírico inmediato, sin esperar cultivos.
✅ Esquema: ceftriaxona + doxiciclina + metronidazol.
✅ Chlamydia y Gonococo son los agentes más frecuentes.
✅ Complicación principal: infertilidad por daño tubárico.

Referencias
• CDC Sexually Transmitted Infections Treatment Guidelines.
• ACOG Practice Bulletin: Pelvic Inflammatory Disease.
• Novak's Gynecology.
• Williams Gynecology.
• UpToDate: Pelvic inflammatory disease.`,
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
      "Cuando veas: joven con cefalea unilateral pulsátil, náuseas, fotofobia y empeoramiento con actividad física intensa.",
      "Debes pensar en: migraña (cefalea primaria más frecuente en jóvenes con este patrón).",
      "La migraña es unilateral, pulsátil, con náuseas y fotofobia; empeora con actividad física.",
      "Cumple criterios ICHD-3 de migraña sin aura.",
      "Tema: Migraña.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa una trampa frecuente: confundir migraña con cefalea por esfuerzo o cefalea tensional por el desencadenante físico.

La clave no es la cefalea tensional ni la cefalea en racimos.
La clave es:
Cefalea unilateral pulsátil + náuseas + fotofobia + empeoramiento con ejercicio = migraña.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Joven de 16 años con episodios recurrentes de cefalea.
• Cefalea unilateral y pulsátil.
• Náuseas y fotofobia asociadas.
• Empeoramiento tras actividad física intensa.
• Cuadro compatible con migraña sin aura (criterios ICHD-3).

Recordemos migraña:
• Cefalea primaria más frecuente en población joven.
• Características ICHD-3: ≥5 episodios de 4-72 h, unilateral, pulsátil, intensidad moderada-severa.
• Asociada a náuseas/vómitos y/o fotofobia/fonofobia.
• Empeora con actividad física rutinaria.
• Se diferencia de cefalea tensional (opresiva, bilateral) y cefalea en racimos (dolor extremo retroocular con síntomas autonómicos).
• Tratamiento agudo: AINEs, triptanes; profilaxis si frecuencia elevada.

Por lo tanto:
El diagnóstico más probable es migraña (opción B).

¿Por qué la opción B es la respuesta correcta?
La migraña se caracteriza por episodios recurrentes de cefalea pulsátil, habitualmente unilateral, asociada a náuseas, fotofobia y empeoramiento con actividad física.

¿Por qué fallan las otras opciones?
Opción A (cefalea tensional): dolor opresivo, bilateral, sin náuseas ni fotofobia típicamente.
Opción C (cefalea en racimos): dolor retroocular extremo con lagrimeo, inyección conjuntival y congestión nasal ipsilateral.
Opción D (hipertensión intracraneal idiopática): cefalea holocraneana con papiledema, más frecuente en mujeres obesas.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "cefalea después del gimnasio" y responden cefalea por esfuerzo, sin reconocer que el patrón pulsátil unilateral con náuseas y fotofobia define migraña.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar características: unilateral, pulsátil, náuseas, fotofobia.
2. Valorar desencadenantes (ejercicio empeora migraña, no la define).
3. Aplicar criterios ICHD-3 para migraña sin aura.
4. Diferenciar de cefalea tensional (opresiva, bilateral) y racimos (autonómica).

Perlas de examen
✅ Migraña = unilateral, pulsátil, náuseas, fotofobia.
✅ Empeora con actividad física (criterio ICHD-3).
✅ Cefalea tensional = opresiva, bilateral, sin náuseas típicas.
✅ Cefalea en racimos = dolor extremo + síntomas autonómicos ipsilaterales.
✅ Ejercicio como desencadenante no excluye migraña.

Referencias
• International Classification of Headache Disorders (ICHD-3).
• Adams and Victor's Principles of Neurology.
• Harrison's Principles of Internal Medicine.
• American Headache Society Guidelines.
• UpToDate: Migraine with and without aura.`,
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
      "Cuando veas: cefalea recurrente occipital/cervical, opresiva, relacionada con estrés laboral y mejoría parcial con analgésicos.",
      "Debes pensar en: cefalea tensional (cefalea primaria más frecuente).",
      "La cefalea tensional es opresiva, bilateral u occipital, relacionada con estrés y tensión muscular.",
      "Se diferencia de migraña por ausencia de pulsatilidad, náuseas y fotofobia.",
      "Tema: Cefaleas primarias.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa una trampa frecuente: diagnosticar neuralgia occipital o migraña ante cefalea occipital sin valorar el patrón opresivo y su relación con el estrés.

La clave no es la migraña ni la neuralgia occipital.
La clave es:
Cefalea opresiva occipital/cervical + estrés laboral + mejoría parcial con analgésicos = cefalea tensional.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 40 años sin antecedentes relevantes.
• Cefalea recurrente en región occipital y cervical.
• Episodios durante periodos de alta carga laboral y estrés.
• Mejoría parcial con analgésicos.
• Cuadro compatible con cefalea tensional episódica.

Recordemos cefalea tensional:
• Cefalea primaria más frecuente en la población general.
• Características: dolor opresivo o en banda, bilateral u occipital-frontal.
• Relacionada con estrés emocional y tensión muscular cervical.
• No pulsátil; sin náuseas, vómitos ni fotofobia típicamente.
• Mejoría con analgésicos simples (paracetamol, AINEs).
• Se diferencia de migraña (pulsátil, unilateral, con náuseas) y neuralgia occipital (dolor neuropático paroxístico en territorio de C2).

Por lo tanto:
El diagnóstico más probable es cefalea tensional (opción B).

¿Por qué la opción B es la respuesta correcta?
La cefalea tensional es la cefalea primaria más frecuente, caracterizada por dolor opresivo en región occipital o cervical, estrechamente relacionado con estrés emocional.

¿Por qué fallan las otras opciones?
Opción A (migraña): requiere cefalea pulsátil unilateral con náuseas y fotofobia, ausentes en este caso.
Opción C (cefalea en racimos): dolor retroocular extremo con síntomas autonómicos ipsilaterales.
Opción D (neuralgia occipital): dolor neuropático paroxístico, breve, en territorio del nervio occipital mayor, no cefalea opresiva recurrente.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "región occipital" y responden neuralgia occipital, sin reconocer el patrón opresivo crónico relacionado con estrés como cefalea tensional.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar patrón opresivo (no pulsátil) en región occipital/cervical.
2. Correlacionar con estrés y tensión muscular.
3. Descartar migraña (pulsátil, náuseas, fotofobia).
4. Manejo: analgésicos, manejo del estrés, fisioterapia cervical.

Perlas de examen
✅ Cefalea tensional = la cefalea primaria más frecuente.
✅ Dolor opresivo, occipital/cervical, relacionado con estrés.
✅ No pulsátil; sin náuseas ni fotofobia típicamente.
✅ Neuralgia occipital = dolor neuropático paroxístico, no opresivo.
✅ Mejoría parcial con analgésicos simples.

Referencias
• International Classification of Headache Disorders (ICHD-3).
• Adams and Victor's Principles of Neurology.
• Harrison's Principles of Internal Medicine.
• American Headache Society Guidelines.
• UpToDate: Tension-type headache.`,
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
      "Cuando veas: dolor retroocular intenso recurrente con inyección conjuntival, epífora ipsilateral y mejoría rápida con oxígeno al 100%.",
      "Debes pensar en: cefalea en racimos → oxígeno al 100% es tratamiento abortivo de elección.",
      "La cefalea en racimos es una cefalea trigémino-autonómica con síntomas autonómicos ipsilaterales.",
      "El dolor es orbitario/retroorbitario, extremadamente intenso y de corta duración.",
      "Tema: Cefaleas trigémino-autonómicas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa una trampa frecuente: diagnosticar migraña ante dolor ocular sin reconocer los síntomas autonómicos ipsilaterales y la respuesta al oxígeno.

La clave no es la migraña ni la neuralgia del trigémino.
La clave es:
Dolor retroocular extremo + lagrimeo + inyección conjuntival ipsilateral + mejoría con O₂ = cefalea en racimos.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 27 años con episodios recurrentes de dolor retroocular intenso.
• Inyección conjuntival y epífora ipsilateral.
• Múltiples consultas previas por el mismo cuadro.
• Mejoría rápida y significativa con oxígeno suplementario.
• Cuadro compatible con cefalea en racimos.

Recordemos cefalea en racimos:
• Cefalea trigémino-autonómica (grupo de cefaleas con dolor severo + síntomas autonómicos ipsilaterales).
• Dolor orbitario o retroorbitario extremadamente intenso (descrito como "el peor dolor de la vida").
• Síntomas autonómicos ipsilaterales: lagrimeo, inyección conjuntival, congestión nasal, rinorrea, miosis.
• Episodios cortos (15-180 minutos), frecuentes (hasta 8/día) en racimos.
• Tratamiento abortivo: oxígeno al 100% (12-15 L/min x 15 min) o triptanes subcutáneos.
• Más frecuente en hombres jóvenes.

Por lo tanto:
El diagnóstico más probable es cefalea en racimos (opción C).

¿Por qué la opción C es la respuesta correcta?
La cefalea en racimos se caracteriza por crisis recurrentes de dolor orbitario extremo con síntomas autonómicos ipsilaterales. El oxígeno al 100% es uno de los tratamientos abortivos de elección.

¿Por qué fallan las otras opciones?
Opción A (migraña): puede tener dolor ocular pero sin síntomas autonómicos prominentes ni respuesta característica al oxígeno.
Opción B (neuralgia del trigémino): dolor neuropático paroxístico breve (segundos), desencadenado por estímulos, sin síntomas autonómicos.
Opción D (cefalea tensional): dolor opresivo leve-moderado, bilateral, sin síntomas autonómicos.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "dolor ocular" y responden migraña, sin reconocer la tríada de dolor extremo + síntomas autonómicos ipsilaterales + respuesta al oxígeno.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar dolor retroocular extremo con síntomas autonómicos ipsilaterales.
2. Confirmar con respuesta al oxígeno al 100%.
3. Diferenciar de migraña (sin autonómicos prominentes) y neuralgia del trigémino (paroxística breve).
4. Tratamiento abortivo: O₂ 100% o triptán subcutáneo.

Perlas de examen
✅ Cefalea en racimos = dolor extremo + autonómicos ipsilaterales.
✅ Oxígeno al 100% es tratamiento abortivo de elección.
✅ Más frecuente en hombres jóvenes.
✅ Lagrimeo e inyección conjuntival ipsilateral son clásicos.
✅ Se diferencia de migraña por intensidad y síntomas autonómicos.

Referencias
• International Classification of Headache Disorders (ICHD-3).
• Adams and Victor's Principles of Neurology.
• Harrison's Principles of Internal Medicine.
• American Headache Society Guidelines.
• UpToDate: Cluster headache.`,
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
      "Cuando veas: imposibilidad para extender muñeca tras trauma, dolor dorsal de antebrazo, disminución del reflejo tricipital y recuperación completa en días.",
      "Debes pensar en: neuropraxia del nervio radial (lesión nerviosa más leve con recuperación completa).",
      "La neuropraxia implica bloqueo de conducción sin lesión axonal.",
      "Muñeca caída + reflejo tricipital disminuido + recuperación completa = neuropraxia radial.",
      "Tema: Lesiones de nervios periféricos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa una trampa frecuente: identificar la lesión del nervio radial pero olvidar clasificar el tipo de lesión según Seddon.

La clave no es axonotmesis ni neurotmesis.
La clave es:
Muñeca caída + reflejo tricipital disminuido + recuperación completa en días = neuropraxia del nervio radial.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer con trauma (atraco callejero).
• Imposibilidad para extender la muñeca (muñeca caída).
• Dolor en región dorsal del antebrazo.
• Disminución del reflejo tricipital.
• Recuperación completa de la movilidad en días.
• Cuadro compatible con neuropraxia del nervio radial.

Recordemos clasificación de Seddon:
• Neuropraxia (grado I): bloqueo de conducción sin lesión axonal; recuperación completa en días-semanas.
• Axonotmesis (grado II-III): lesión axonal con endoneuro intacto (II) o dañado (III); recuperación lenta (mm/día).
• Neurotmesis (grado IV-V): sección completa del nervio; requiere reparación quirúrgica.
• Nervio radial: extensión de muñeca y dedos, sensibilidad dorso de mano, reflejo tricipital.
• "Parálisis del sábado por la noche" es neuropraxia radial clásica por compresión.

Por lo tanto:
La lesión neurológica más probable es neuropraxia del nervio radial (opción A).

¿Por qué la opción A es la respuesta correcta?
La combinación de muñeca caída, compromiso transitorio del reflejo tricipital y recuperación completa posterior es característica de neuropraxia, la forma más leve de lesión nerviosa periférica.

¿Por qué fallan las otras opciones?
Opción B (axonotmesis cubital): afectaría flexión de 4°-5° dedos y sensibilidad cubital, no extensión de muñeca.
Opción C (neurotmesis mediano): causaría déficit de oposición del pulgar y sensibilidad palmar, sin recuperación espontánea completa.
Opción D (nervio musculocutáneo): afectaría flexión del codo y sensibilidad lateral del antebrazo.

¿Cuál es la trampa del examen?
Muchos estudiantes identifican correctamente la lesión del nervio radial pero olvidan clasificar el tipo de lesión; la recuperación completa en días define neuropraxia.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar el nervio afectado por el déficit motor y sensitivo.
2. Clasificar según Seddon: recuperación rápida y completa = neuropraxia.
3. Muñeca caída = nervio radial hasta demostrar lo contrario.
4. Neuropraxia no requiere intervención quirúrgica; manejo conservador.

Perlas de examen
✅ Recuperación completa en días = neuropraxia (Seddon I).
✅ Muñeca caída = lesión del nervio radial.
✅ Neuropraxia: bloqueo de conducción sin lesión axonal.
✅ Axonotmesis: recuperación lenta a ~1 mm/día.
✅ Neurotmesis: requiere reparación quirúrgica.

Referencias
• Adams and Victor's Principles of Neurology.
• Bradley's Neurology in Clinical Practice.
• Greenberg's Handbook of Neurosurgery.
• Moore Clinically Oriented Anatomy.
• UpToDate: Overview of peripheral nerve injuries.`,
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
      "Cuando veas: primigestante 37 semanas, peso fetal percentil 4, ILA 6 cm, asintomática y sin trabajo de parto.",
      "Debes pensar en: feto pequeño para edad gestacional (PEG) → completar estudio con Doppler antes de decidir interrupción.",
      "Percentil <10 define PEG; percentil 4 requiere Doppler para estratificar RCIU.",
      "La interrupción inmediata no está indicada sin evaluar circulación útero-placentaria y fetal.",
      "Tema: Feto pequeño para la edad gestacional y restricción del crecimiento fetal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de obstetricia porque evalúa una trampa frecuente: indicar interrupción inmediata del embarazo ante un percentil 4 sin completar estudio Doppler.

La clave no es la interrupción inmediata ni continuar control habitual.
La clave es:
PEG (percentil <10) a las 37 semanas + asintomática = Doppler fetal-materno para estratificar riesgo y definir conducta.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Primigestante de 26 años con embarazo de 37 semanas.
• Peso fetal estimado en percentil 4 (< percentil 10 = PEG).
• Índice de líquido amniótico de 6 cm (normal).
• Asintomática, hemodinámicamente estable, sin trabajo de parto.
• Requiere estratificación adicional antes de decidir interrupción.

Recordemos PEG y RCIU:
• PEG: peso fetal estimado < percentil 10 para edad gestacional.
• RCIU severa: percentil <3 o Doppler alterado con percentil 3-10.
• Percentil 4 por sí solo no establece RCIU severa ni indica interrupción inmediata.
• Doppler evalúa circulación útero-placentaria (arteria uterina) y fetal (ACM, ductus venoso).
• Doppler alterado con PEG confirma RCIU y guía timing de interrupción.
• A las 37 semanas, la decisión depende de hallazgos Doppler y bienestar fetal.

Por lo tanto:
El manejo más adecuado es realizar estudio Doppler fetal-materno para estratificación del riesgo (opción D).

¿Por qué la opción D es la respuesta correcta?
Un percentil 4 define PEG pero no necesariamente RCIU severa. Antes de decidir interrupción, es fundamental evaluar la circulación útero-placentaria y fetal mediante Doppler.

¿Por qué fallan las otras opciones?
Opción A (control habitual en 4 semanas): inadecuado a las 37 semanas con PEG; requiere evaluación inmediata.
Opción B (hospitalización y maduración pulmonar): indicada antes de 34 semanas, no a término con PEG aislado.
Opción C (interrupción inmediata): prematura sin Doppler; percentil 4 requiere estratificación de riesgo primero.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "percentil 4" y responden "interrumpir embarazo", sin reconocer que percentil 3-10 requiere Doppler antes de decidir conducta obstétrica.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Percentil <10 = PEG (feto pequeño para edad gestacional).
2. Percentil <3 o Doppler alterado = RCIU severa.
3. Percentil 3-10: completar Doppler antes de decidir interrupción.
4. A las 37 semanas: Doppler guía timing de finalización según riesgo.

Perlas de examen
✅ Percentil <10 = PEG; no equivale automáticamente a RCIU severa.
✅ Percentil <3 = altamente sugestivo de RCIU severa.
✅ Percentil 3-10 requiere Doppler obstétrico.
✅ No interrumpir de inmediato sin estratificar con Doppler.
✅ ILA 6 cm es normal (oligoamnios <5 cm).

Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Fetal Growth Restriction.
• ISUOG Practice Guidelines: Diagnosis and Management of Small-for-Gestational-Age Fetus.
• FIGO Guidelines on Fetal Growth Restriction.
• UpToDate: Fetal growth restriction.`,
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
      "Cuando veas: embarazo 29 semanas, PTOG con ayunas 92 mg/dL, 1 hora 213 mg/dL y 2 horas 150 mg/dL (un valor alterado).",
      "Debes pensar en: diabetes gestacional → cambios en estilo de vida y automonitoreo glucémico (no insulina de inmediato).",
      "Un solo valor alterado en la PTOG es suficiente para diagnosticar diabetes gestacional.",
      "El tratamiento inicial es nutricional y conductual; insulina si no se alcanzan metas.",
      "Tema: Diabetes gestacional.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de obstetricia porque evalúa una trampa frecuente: indicar insulinoterapia inmediata ante un valor elevado en la PTOG sin intentar medidas no farmacológicas primero.

La clave no es la insulinoterapia inmediata ni repetir la curva.
La clave es:
Un valor alterado en PTOG = diabetes gestacional → dieta, ejercicio y automonitoreo glucémico.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 37 años, multigestante, embarazo de 29 semanas.
• PTOG: ayunas 92 mg/dL (≥92), 1 hora 213 mg/dL (≥180), 2 horas 150 mg/dL (≥153).
• Múltiples valores alterados (diagnóstico confirmado de diabetes gestacional).
• Requiere manejo inicial no farmacológico.

Recordemos diabetes gestacional:
• Diagnóstico (criterios IADPSG/ADA): un solo valor alterado en PTOG 75 g es suficiente.
  - Ayunas ≥92 mg/dL, 1 h ≥180, 2 h ≥153 mg/dL.
• Tratamiento inicial: intervención nutricional, ejercicio adaptado al embarazo, automonitoreo glucémico.
• Insulinoterapia se reserva si no se alcanzan metas glucémicas con medidas no farmacológicas en 1-2 semanas.
• Aumenta riesgo de macrosomía, preeclampsia, parto cesáreo y hipoglucemia neonatal.
• Control glucémico objetivo: ayunas <95, 1 h postprandial <140, 2 h <120 mg/dL.

Por lo tanto:
Diagnosticar diabetes gestacional, iniciar cambios en estilo de vida y automonitoreo glucémico (opción C).

¿Por qué la opción C es la respuesta correcta?
La paciente cumple criterios diagnósticos de diabetes gestacional. El manejo inicial consiste en intervención nutricional, ejercicio y monitorización glucémica antes de considerar insulina.

¿Por qué fallan las otras opciones?
Opción A (control habitual y repetir en 4 semanas): el diagnóstico ya está confirmado; retrasar manejo es inadecuado.
Opción B (insulinoterapia inmediata): reservada para falla de medidas no farmacológicas; no es primera línea.
Opción D (diabetes pregestacional y finalizar gestación): no hay criterios de diabetes pregestacional (ayunas <126 en contexto no diagnóstico); embarazo de 29 semanas no debe finalizarse.

¿Cuál es la trampa del examen?
Muchos estudiantes observan glucemia >200 mg/dL a la hora y responden insulinoterapia inmediata, sin reconocer que el manejo inicial de la diabetes gestacional es siempre nutricional y conductual.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Un valor alterado en PTOG = diagnóstico de diabetes gestacional.
2. Iniciar dieta, ejercicio y automonitoreo glucémico.
3. Evaluar metas en 1-2 semanas.
4. Insulina solo si no se alcanzan metas con medidas no farmacológicas.

Perlas de examen
✅ Un solo valor alterado en PTOG = diabetes gestacional.
✅ Tratamiento inicial: dieta + ejercicio + automonitoreo.
✅ Insulina solo si fallan medidas no farmacológicas.
✅ Aumenta riesgo de macrosomía fetal.
✅ No finalizar embarazo de 29 semanas por DG.

Referencias
• American Diabetes Association (ADA) Standards of Care.
• ACOG Practice Bulletin: Gestational Diabetes Mellitus.
• Williams Obstetrics.
• FIGO Guidelines on Gestational Diabetes.
• UpToDate: Gestational diabetes mellitus.`,
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
      "Cuando veas: fractura desplazada de diáfisis media del húmero con lesión del nervio radial.",
      "Debes pensar en: muñeca caída → incapacidad para extender muñeca y dedos + hipoestesia dorso de mano.",
      "El nervio radial es el más frecuentemente lesionado en fracturas de diáfisis humeral.",
      "El primer espacio interdigital dorsal es clave para exploración sensitiva del radial.",
      "Tema: Lesiones nerviosas periféricas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ortopedia porque evalúa una trampa frecuente: recordar que la fractura de húmero afecta un nervio pero olvidar cuál y cuál es su presentación clínica.

La clave no es el nervio cubital ni el mediano.
La clave es:
Fractura de diáfisis humeral + lesión nerviosa = nervio radial → muñeca caída + hipoestesia dorso de mano.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Fractura desplazada de diáfisis media del húmero.
• Lesión asociada del nervio radial.
• Se pregunta por el hallazgo clínico más probable.
• El nervio radial inerva extensores de muñeca y dedos, y sensibilidad del dorso de la mano.

Recordemos nervio radial:
• Recorre el surco espiral del húmero en la diáfisis media.
• Es el nervio más frecuentemente lesionado en fracturas de diáfisis humeral (incidencia 10-18%).
• Motor: extensión de muñeca, dedos y codo (tríceps); reflejo tricipital.
• Sensitivo: dorso de mano, primer espacio interdigital dorsal (punto clave).
• Lesión → "muñeca caída" (pérdida de extensión de muñeca y dedos).
• La mayoría de lesiones radiales en fractura de húmero son neuropraxias con recuperación espontánea.

Por lo tanto:
El hallazgo más probable es incapacidad para extender muñeca y dedos con hipoestesia en dorso de mano (opción A).

¿Por qué la opción A es la respuesta correcta?
La lesión del nervio radial produce clásicamente muñeca caída por pérdida de extensión de muñeca y dedos, asociada a alteraciones sensitivas en el territorio radial.

¿Por qué fallan las otras opciones?
Opción B (flexión 4°-5° dedos, hipoestesia cubital): corresponde a lesión del nervio cubital.
Opción C (oposición del pulgar, sensibilidad 3 primeros dedos): corresponde a lesión del nervio mediano.
Opción D (abducción del hombro, sensibilidad cara lateral): corresponde a lesión del nervio axilar.

¿Cuál es la trampa del examen?
Muchos estudiantes recuerdan "fractura de húmero = lesión nerviosa" pero olvidan que la diáfisis media afecta específicamente al nervio radial, no al cubital ni al mediano.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Fractura diáfisis humeral → sospechar lesión del nervio radial.
2. Muñeca caída = extensión de muñeca y dedos perdida.
3. Explorar sensibilidad en primer espacio interdigital dorsal.
4. Mayoría son neuropraxias con recuperación espontánea en semanas.

Perlas de examen
✅ Diáfisis humeral = nervio radial (surco espiral).
✅ Muñeca caída = hallazgo clásico de lesión radial.
✅ Primer espacio interdigital dorsal = punto sensitivo clave.
✅ 10-18% de fracturas de húmero asocian lesión radial.
✅ Mayoría son neuropraxias con buen pronóstico.

Referencias
• Campbell's Operative Orthopaedics.
• Rockwood and Green's Fractures in Adults.
• Moore Clinically Oriented Anatomy.
• Greenberg's Handbook of Neurosurgery.
• UpToDate: Proximal humeral fractures in adults.`,
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
      "Cuando veas: trauma de muñeca en adolescente, radiografía AP normal pero persistencia de sospecha clínica de lesión ósea.",
      "Debes pensar en: fractura oculta de escafoides → proyección específica de escafoides (Stecher).",
      "El escafoides es el hueso del carpo que más se fractura y la radiografía inicial puede ser normal.",
      "La tabaquera anatómica dolorosa y el mecanismo de caída sobre mano extendida orientan al diagnóstico.",
      "Tema: Trauma de muñeca.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ortopedia porque evalúa una trampa frecuente: concluir ausencia de fractura cuando la radiografía AP inicial es normal pese a sospecha clínica persistente.

La clave no es dar por descartada la lesión con una sola proyección normal.
La clave es:
Trauma de muñeca con sospecha clínica + radiografía AP normal = complementar con proyección específica para escafoides (Stecher).

¿Qué está ocurriendo realmente?
El paciente presenta:
• Adolescente de 15 años con trauma de muñeca.
• Radiografía AP sin fracturas visibles.
• Persistencia de la sospecha clínica de lesión ósea.
• Necesidad de proyección adicional dirigida al escafoides.

Recordemos trauma de muñeca y fractura de escafoides:
• El escafoides es el hueso del carpo que más se fractura.
• Hasta el 20% de las fracturas de escafoides no son visibles en la radiografía inicial.
• La caída sobre mano extendida (FOOSH) es el mecanismo clásico.
• La proyección de Stecher (escafoides) mejora la visualización del hueso.
• Si persiste la sospecha con radiografías negativas, puede requerirse inmovilización y control o RM.

Por lo tanto:
La conducta correcta es solicitar proyección de escafoides (Stecher) (opción D), no limitarse a lateral, oblicua o comparativa.

¿Por qué la opción D es la respuesta correcta?
La proyección de Stecher es la proyección radiográfica adicional más recomendada para descartar fractura oculta de escafoides cuando la AP es normal pero la sospecha clínica persiste.

¿Por qué fallan las otras opciones?
Opción A (lateral): complemento útil pero no la proyección específica de elección para escafoides oculto.
Opción B (oblicua): puede ayudar pero no es la proyección estándar dirigida al escafoides.
Opción C (AP comparativa): útil en niños pequeños para evaluar epífisis, no la primera elección para escafoides en adolescente con trauma.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "radiografía normal" y concluyen ausencia de fractura.
Pero la fractura de escafoides es la lesión oculta más frecuente del trauma de muñeca y requiere proyección específica.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Ante trauma de muñeca con sospecha clínica, no descartar fractura con AP normal.
2. Pensar en fractura de escafoides como lesión oculta más frecuente.
3. Solicitar proyección de Stecher (escafoides).
4. Si persiste sospecha, inmovilizar y reevaluar o ampliar estudio.

Perlas de examen
✅ Fractura de escafoides = lesión oculta más frecuente del trauma de muñeca.
✅ La radiografía inicial puede ser normal en hasta el 20% de los casos.
✅ La proyección de Stecher es la proyección adicional de elección.
✅ FOOSH + dolor en tabaquera anatómica = sospecha de escafoides.
✅ No dar de alta sin inmovilización si la sospecha clínica persiste.

Referencias
• Rockwood and Green's Fractures in Adults.
• Campbell's Operative Orthopaedics.
• AO Trauma Principles.
• Moore Clinically Oriented Anatomy.
• UpToDate: Scaphoid fractures.`,
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
      "Cuando veas: hombre anciano con placas amarillentas, pruriginosas y descamativas en cuero cabelludo y barba.",
      "Debes pensar en: dermatitis seborreica → agente asociado Malassezia furfur.",
      "Las escamas son amarillentas y grasosas, no plateadas y secas como en psoriasis.",
      "Afecta áreas ricas en glándulas sebáceas: cuero cabelludo, cara, región presternal.",
      "Tema: Dermatitis seborreica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de dermatología porque evalúa una trampa frecuente: confundir placas descamativas del cuero cabelludo con psoriasis cuando las características clínicas orientan a dermatitis seborreica.

La clave no es asociar toda descamación del cuero cabelludo con psoriasis.
La clave es:
Placas eritematodescamativas amarillentas y grasosas en áreas seborreicas + anciano = dermatitis seborreica por Malassezia.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 80 años.
• Placas amarillentas, pruriginosas y descamativas.
• Localización en cuero cabelludo y región de la barba.
• Cuadro compatible con dermatitis seborreica inflamatoria crónica.

Recordemos dermatitis seborreica:
• Dermatosis inflamatoria crónica de áreas ricas en glándulas sebáceas.
• Se asocia a proliferación de levaduras del género Malassezia (M. furfur).
• Las escamas son amarillentas, grasosas y adheridas (no plateadas como en psoriasis).
• El cuero cabelludo es la localización más frecuente.
• El tratamiento incluye antifúngicos tópicos (ketoconazol) y corticoides tópicos de baja potencia.

Por lo tanto:
El diagnóstico más probable es dermatitis seborreica con Malassezia furfur (opción B).

¿Por qué la opción B es la respuesta correcta?
La clínica de placas amarillentas descamativas en cuero cabelludo y barba en un anciano es característica de dermatitis seborreica, cuyo agente más asociado es Malassezia furfur.

¿Por qué fallan las otras opciones?
Opción A (psoriasis; S. pyogenes): la psoriasis tiene escamas plateadas y secas; no se asocia a Streptococcus como agente etiológico principal.
Opción C (tiña capitis; T. rubrum): la tiña capitis causa alopecia con escamas y puede tener inflamación; no presenta placas amarillentas grasosas típicas de seborrea.
Opción D (dermatitis atópica; S. aureus): la dermatitis atópica predomina en pliegues y presenta xerosis; no es el patrón clásico del cuero cabelludo seborreico.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "placas descamativas" y responden psoriasis.
Pero las escamas amarillentas y grasosas en áreas seborreicas orientan a dermatitis seborreica, no a psoriasis.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar localización en áreas seborreicas (cuero cabelludo, barba).
2. Distinguir escamas amarillentas/grasosas (seborrea) de plateadas/secas (psoriasis).
3. Asociar dermatitis seborreica con Malassezia spp.
4. Tratar con antifúngicos tópicos y medidas de higiene.

Perlas de examen
✅ Dermatitis seborreica = placas amarillentas grasosas en áreas seborreicas.
✅ Malassezia furfur es el agente más asociado.
✅ Psoriasis: escamas plateadas, secas, bien delimitadas.
✅ Tiña capitis: alopecia, inflamación, más frecuente en niños.
✅ El cuero cabelludo es la localización más frecuente de seborrea.

Referencias
• Fitzpatrick's Dermatology.
• Bolognia Dermatology.
• Andrews' Diseases of the Skin.
• UpToDate: Seborrheic Dermatitis.
• James, Berger, Elston: Andrews' Diseases of the Skin.`,
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
      "Cuando veas: niño con fiebre ≥5 días, exantema, cambios mucosos, adenopatías cervicales y malestar general.",
      "Debes pensar en: enfermedad de Kawasaki → IVIG + ácido acetilsalicílico de forma temprana.",
      "La fiebre prolongada sin foco claro en pediatría debe incluir Kawasaki en el diferencial.",
      "El tratamiento precoz con IVIG reduce el riesgo de aneurismas coronarios.",
      "Tema: Vasculitis en pediatría.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de pediatría porque evalúa una trampa frecuente: confundir fiebre prolongada con exantema y cambios mucosos con escarlatina o sarampión cuando el cuadro cumple criterios de Kawasaki.

La clave no es tratar todo exantema febril como infección viral o estreptocócica.
La clave es:
Fiebre ≥5 días + alteraciones mucocutáneas + adenopatía cervical = enfermedad de Kawasaki → IVIG + AAS urgente.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Niño de 8 años con fiebre de 6 días.
• Astenia, adinamia y malestar general.
• Exantema cutáneo y cambios en mucosas orales.
• Adenopatías cervicales.
• Cuadro compatible con vasculitis sistémica de Kawasaki.

Recordemos enfermedad de Kawasaki:
• Vasculitis sistémica de vasos medianos que afecta principalmente niños <5 años (puede ocurrir en mayores).
• Criterio indispensable: fiebre ≥5 días + ≥4 de 5 criterios clínicos (exantema, cambios mucosos, conjuntivitis, adenopatía cervical, cambios extremidades).
• La complicación más temida son los aneurismas coronarios.
• Tratamiento: inmunoglobulina intravenosa (2 g/kg) + ácido acetilsalicílico en dosis antiinflamatorias, luego antitrombóticas.
• El tratamiento dentro de los primeros 10 días reduce significativamente el riesgo de aneurismas.

Por lo tanto:
El diagnóstico y tratamiento correctos son enfermedad de Kawasaki con IVIG y AAS (opción C).

¿Por qué la opción C es la respuesta correcta?
El cuadro cumple criterios de Kawasaki (fiebre prolongada, exantema, mucosas, adenopatía) y el tratamiento de elección es IVIG + ácido acetilsalicílico para prevenir aneurismas coronarios.

¿Por qué fallan las otras opciones?
Opción A (escarlatina; penicilina): la escarlatina tiene fiebre más corta, exantema arenoso y faringitis estreptocócica; la lengua en fresa puede confundir pero faltan otros criterios de Kawasaki.
Opción B (sarampión; soporte): el sarampión tiene manchas de Koplik, tos, conjuntivitis y evolución diferente; no requiere IVIG.
Opción D (mononucleosis; sintomático): la mono cursa con faringitis exudativa, linfadenopatía generalizada y fatiga; no presenta el patrón mucocutáneo de Kawasaki.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "lengua roja" o "exantema" y responden escarlatina.
Pero la fiebre de 6 días con múltiples criterios mucocutáneos orienta a Kawasaki, urgencia cardiológica.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Ante fiebre ≥5 días sin foco en pediatría, incluir Kawasaki.
2. Buscar criterios: exantema, mucosas, conjuntivitis, adenopatía, extremidades.
3. Iniciar IVIG + AAS lo antes posible (idealmente <10 días de fiebre).
4. Realizar ecocardiograma al diagnóstico y en seguimiento.

Perlas de examen
✅ Kawasaki = fiebre ≥5 días + ≥4 criterios clínicos.
✅ IVIG + AAS temprano reduce aneurismas coronarios.
✅ La adenopatía cervical suele ser unilateral y ≥1.5 cm.
✅ La lengua en fresa y los labios fisurados son hallazgos frecuentes.
✅ Es la causa más frecuente de cardiopatía adquirida en pediatría en países desarrollados.

Referencias
• Nelson Textbook of Pediatrics.
• American Heart Association Guidelines for Kawasaki Disease.
• Red Book: American Academy of Pediatrics.
• Rudolph's Pediatrics.
• UpToDate: Kawasaki disease.`,
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
      "Cuando veas: herida penetrante en muslo con disminución de pulsos distales y frialdad de la extremidad.",
      "Debes pensar en: signos duros de lesión vascular → exploración quirúrgica vascular urgente.",
      "Los signos duros no requieren estudios de imagen que retrasen el manejo quirúrgico.",
      "La isquemia distal (frialdad, palidez, ausencia de pulsos) es indicación de cirugía inmediata.",
      "Tema: Trauma vascular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cirugía vascular porque evalúa una trampa frecuente: solicitar estudios de imagen en un paciente con signos duros de lesión vascular que requiere intervención quirúrgica inmediata.

La clave no es confirmar con Doppler o angioTAC antes de operar.
La clave es:
Herida penetrante + signos duros de lesión vascular (pulsos disminuidos, frialdad distal) = exploración quirúrgica vascular urgente.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Habitante de calle con herida penetrante en muslo izquierdo.
• Disminución de pulsos distales.
• Frialdad de la extremidad afectada.
• Signos duros de lesión vascular con isquemia distal.

Recordemos trauma vascular de extremidades:
• Los signos duros incluyen: ausencia/disminución de pulsos, sangrado activo, hematoma expansivo, soplo o thrill, isquemia distal (6 Ps: pain, pallor, pulselessness, paresthesia, paralysis, poikilothermia).
• Los signos duros indican exploración quirúrgica inmediata sin retrasar con estudios de imagen.
• Los signos blandos (historia de sangrado, proximidad a vaso, lesión nerviosa) permiten estudios no invasivos.
• El tiempo isquémico determina la viabilidad de la extremidad.
• Las guías EAST recomiendan cirugía inmediata ante signos duros.

Por lo tanto:
La conducta correcta es exploración quirúrgica vascular urgente (opción C).

¿Por qué la opción C es la respuesta correcta?
La presencia de signos duros (pulsos disminuidos, frialdad distal) constituye indicación de exploración quirúrgica inmediata sin estudios diagnósticos adicionales que retrasen el manejo.

¿Por qué fallan las otras opciones?
Opción A (Doppler): estudio útil en signos blandos, pero retrasa cirugía en signos duros con isquemia activa.
Opción B (angioTAC): puede ser útil en trauma estable con signos blandos, no en isquemia distal con signos duros.
Opción D (observación 6 horas): inaceptable ante isquemia de extremidad; el tiempo isquémico aumenta riesgo de amputación.

¿Cuál es la trampa del examen?
Muchos estudiantes buscan confirmar con imagen antes de operar.
Pero los signos duros de lesión vascular obligan a exploración quirúrgica inmediata sin demora.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar pulsos, perfusión y sensibilidad distal en trauma penetrante.
2. Identificar signos duros vs blandos de lesión vascular.
3. Ante signos duros: cirugía inmediata, no imagen.
4. Ante signos blandos: Doppler o angioTAC según protocolo.

Perlas de examen
✅ Signos duros = cirugía inmediata, sin estudios que retrasen.
✅ Los 6 Ps orientan isquemia distal: pain, pallor, pulselessness, paresthesia, paralysis, poikilothermia.
✅ El Doppler y angioTAC son para signos blandos o trauma estable.
✅ Cada minuto de isquemia aumenta riesgo de amputación.
✅ La frialdad distal indica compromiso grave de perfusión.

Referencias
• Advanced Trauma Life Support (ATLS).
• Rutherford's Vascular Surgery and Endovascular Therapy.
• Eastern Association for the Surgery of Trauma (EAST) Guidelines.
• Schwartz's Principles of Surgery.
• UpToDate: Peripheral arterial trauma.`,
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
      "Cuando veas: fractura abierta de tibia/peroné tras atropello con ausencia de pulsos distales y pérdida de función motora.",
      "Debes pensar en: Gustilo IIIC (fractura abierta + lesión vascular que requiere reparación).",
      "En Gustilo, la lesión vascular define el grado IIIC independientemente del tamaño de la herida.",
      "Las fracturas Gustilo IIIC tienen alto riesgo de amputación y requieren manejo multidisciplinario.",
      "Tema: Clasificación de Gustilo y Anderson.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ortopedia porque evalúa una trampa frecuente: clasificar la fractura abierta solo por el tamaño de la herida sin considerar la lesión vascular asociada.

La clave no es el tamaño de la herida.
La clave es:
Fractura abierta + lesión vascular que requiere reparación quirúrgica = Gustilo IIIC, sin importar el tamaño de la herida.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 30 años atropellado con llantas pasando sobre la extremidad.
• Fractura abierta de tibia y peroné.
• Ausencia de pulsos distales.
• Pérdida de función motora de la extremidad.
• Lesión vascular asociada que define Gustilo IIIC.

Recordemos clasificación de Gustilo y Anderson:
• Tipo I: herida <1 cm, limpia, fractura simple.
• Tipo II: herida 1-10 cm, lesión moderada de partes blandas.
• Tipo IIIA: herida >10 cm, lesión extensa de partes blandas pero cobertura ósea posible.
• Tipo IIIB: lesión extensa con pérdida de cobertura ósea y necesidad de colgajo.
• Tipo IIIC: cualquier fractura abierta con lesión vascular que requiere reparación quirúrgica.
• La tibia es el hueso largo más frecuentemente asociado a fracturas abiertas graves.

Por lo tanto:
La clasificación correcta es Gustilo IIIC (opción D).

¿Por qué la opción D es la respuesta correcta?
La presencia de lesión vascular (ausencia de pulsos distales) que requiere reparación quirúrgica clasifica automáticamente la fractura como Gustilo IIIC, independientemente del tamaño de la herida.

¿Por qué fallan las otras opciones?
Opción A (Gustilo I): fractura de baja energía con herida pequeña y sin lesión vascular; no aplica aquí.
Opción B (Gustilo II): herida moderada sin lesión vascular significativa; ignora la ausencia de pulsos.
Opción C (Gustilo IIIA): lesión extensa de partes blandas pero sin lesión vascular; la lesión vascular eleva a IIIC.

¿Cuál es la trampa del examen?
Muchos estudiantes buscan el tamaño de la herida para clasificar.
Pero el dato decisivo es la lesión vascular que requiere reparación, que define Gustilo IIIC.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar fractura abierta y evaluar partes blandas.
2. Evaluar pulsos, perfusión y función neurológica distal.
3. Si hay lesión vascular que requiere reparación → Gustilo IIIC.
4. Manejo multidisciplinario: ortopedia + vascular + antibióticos + estabilización.

Perlas de examen
✅ Gustilo IIIC = fractura abierta + lesión vascular que requiere reparación.
✅ El tamaño de la herida no determina el grado cuando hay lesión vascular.
✅ La tibia es el hueso más frecuente en fracturas abiertas graves.
✅ Alto riesgo de amputación y infección en Gustilo IIIC.
✅ Requiere reparación vascular urgente y estabilización ósea.

Referencias
• Gustilo RB, Anderson JT. Prevention of Infection in the Treatment of Open Fractures.
• Rockwood and Green's Fractures in Adults.
• Campbell's Operative Orthopaedics.
• ATLS (Advanced Trauma Life Support).
• UpToDate: Open tibial fractures.`,
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
      "Cuando veas: adolescente con ingesta intencional masiva de acetaminofén (43 tabletas), asintomática al ingreso.",
      "Debes pensar en: dosis tóxica ≥150 mg/kg → nivel sérico a las 4 h y N-acetilcisteína según nomograma de Rumack-Matthew.",
      "La ausencia de síntomas iniciales no descarta hepatotoxicidad grave posterior.",
      "La NAC es más eficaz si se inicia dentro de las primeras 8 horas post-ingesta.",
      "Tema: Toxicología.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de toxicología porque evalúa una trampa frecuente: subestimar una sobredosis de acetaminofén por ausencia de síntomas al ingreso, cuando la hepatotoxicidad es tardía y potencialmente fatal.

La clave no es el estado clínico inicial.
La clave es:
Ingesta intencional masiva de acetaminofén + dosis potencial ≥150 mg/kg = solicitar nivel sérico y valorar N-acetilcisteína según nomograma.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Adolescente de 17 años con intento autolítico.
• Ingesta de 43 tabletas de acetaminofén.
• Hemodinámicamente estable sin hallazgos al examen.
• Fase asintomática inicial de intoxicación por paracetamol.

Recordemos intoxicación por acetaminofén:
• Dosis potencialmente tóxica en ingesta aguda única: ≥150 mg/kg o ≥7.5 g en adultos.
• 43 tabletas de 500 mg = ~21.5 g, claramente tóxico.
• La hepatotoxicidad es tardía (24-72 h); la mayoría están asintomáticos al ingreso.
• Nivel sérico a las 4 horas post-ingesta (o lo antes posible si >4 h) y nomograma de Rumack-Matthew.
• N-acetilcisteína (NAC) es el antídoto; máxima eficacia si se inicia <8 horas.
• La NAC repleta glutatión y previene necrosis hepatocelular.

Por lo tanto:
La conducta correcta es dosis tóxica >150 mg/kg, nivel sérico y protocolo con NAC según nomograma (opción C).

¿Por qué la opción C es la respuesta correcta?
La ingesta de 43 tabletas supera ampliamente la dosis tóxica; debe solicitarse nivel sérico de acetaminofén y valorarse N-acetilcisteína según el nomograma de Rumack-Matthew.

¿Por qué fallan las otras opciones?
Opción A (>75 mg/kg; observación): subestima la dosis tóxica y omite antídoto; la hepatotoxicidad puede ser fatal.
Opción B (>100 mg/kg; carbón activado): la dosis tóxica es ≥150 mg/kg; el carbón solo no es suficiente y debe darse precozmente (<1-2 h).
Opción D (>300 mg/kg; hemodiálisis): la hemodiálisis no es el manejo de elección; la NAC es el tratamiento estándar.

¿Cuál es la trampa del examen?
Muchos estudiantes creen que la ausencia de síntomas descarta gravedad.
Pero la mayoría de los pacientes están clínicamente bien durante las primeras horas y desarrollan falla hepática después.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Calcular dosis ingerida (mg/kg); ≥150 mg/kg = tóxico.
2. Solicitar nivel sérico a las 4 horas (nomograma Rumack-Matthew).
3. Iniciar N-acetilcisteína según nomograma (idealmente <8 h).
4. Monitorizar función hepática y considerar trasplante si falla grave.

Perlas de examen
✅ Dosis tóxica aguda: ≥150 mg/kg o ≥7.5 g en adultos.
✅ Fase I (0-24 h): asintomática o náusea leve.
✅ NAC es el antídoto; máxima eficacia <8 horas post-ingesta.
✅ Nomograma de Rumack-Matthew guía tratamiento con nivel a las 4 h.
✅ Nunca dar de alta sin valorar riesgo y nivel sérico en sobredosis intencional.

Referencias
• Goldfrank's Toxicologic Emergencies.
• Tintinalli's Emergency Medicine.
• Nelson Textbook of Pediatrics.
• UpToDate: Acetaminophen Poisoning in Children and Adolescents.
• Rumack BH, Matthew H. Acetaminophen poisoning and toxicity.`,
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
      "Cuando veas: dolor torácico con taquicardia regular de complejos anchos en ECG, paciente hemodinámicamente estable.",
      "Debes pensar en: taquicardia ventricular hasta demostrar lo contrario → amiodarona IV.",
      "Toda taquicardia de complejo ancho es TV hasta probar lo contrario (McConnell).",
      "Adenosina y verapamilo están contraindicados en TV por riesgo de deterioro hemodinámico.",
      "Tema: Arritmias ventriculares.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa una trampa frecuente: asociar dolor torácico con manejo antiisquémico cuando el ECG muestra taquicardia regular de complejo ancho que debe tratarse como TV.

La clave no es el dolor torácico.
La clave es:
Taquicardia regular de complejo ancho + estabilidad hemodinámica = taquicardia ventricular hasta demostrar lo contrario → amiodarona IV.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre con dolor torácico de 30 minutos.
• FC 70 lpm y PA 110/70 mmHg al ingreso (antes del ECG).
• ECG: taquicardia regular de complejos anchos.
• Cuadro compatible con taquicardia ventricular estable.

Recordemos taquicardia de complejo ancho:
• Regla de McConnell: toda taquicardia regular de QRS ancho es TV hasta demostrar lo contrario.
• Causas de TSV con aberrancia son menos frecuentes que TV en urgencias.
• Paciente estable: amiodarona IV 150 mg en bolo, luego infusión.
• Paciente inestable: cardioversión sincronizada inmediata.
• Adenosina y verapamilo están contraindicados en TV (pueden causar colapso).
• La nitroglicerina no trata arritmias ventriculares.

Por lo tanto:
El tratamiento de elección es amiodarona intravenosa (opción B).

¿Por qué la opción B es la respuesta correcta?
En taquicardia regular de complejo ancho hemodinámicamente estable, la amiodarona IV es el antiarrítmico de elección según ACLS para taquicardia ventricular.

¿Por qué fallan las otras opciones?
Opción A (adenosina): útil en TSV con aberrancia, pero arriesgado si es TV; no es primera línea en QRS ancho.
Opción C (verapamilo): contraindicado en TV; puede causar hipotensión severa y colapso cardiovascular.
Opción D (nitroglicerina): tratamiento antiisquémico, no antiarrítmico; no maneja taquicardia ventricular.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "dolor torácico" y responden tratamiento antiisquémico.
Pero el ECG muestra taquicardia de complejo ancho que debe manejarse como TV.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar taquicardia regular de complejo ancho en ECG.
2. Asumir TV hasta demostrar lo contrario.
3. Si estable: amiodarona IV.
4. Si inestable: cardioversión sincronizada inmediata.

Perlas de examen
✅ Toda taquicardia regular de QRS ancho = TV hasta demostrar lo contrario.
✅ Amiodarona IV es el fármaco de elección en TV estable.
✅ Verapamilo y adenosina están contraindicados en TV.
✅ Cardioversión sincronizada si inestabilidad hemodinámica.
✅ No confundir dolor torácico con indicación de nitroglicerina cuando hay arritmia ventricular.

Referencias
• ACLS American Heart Association.
• Braunwald's Heart Disease.
• Harrison's Principles of Internal Medicine.
• ESC Guidelines for Ventricular Arrhythmias.
• UpToDate: Wide QRS complex tachycardia.`,
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
      "Cuando veas: inconsciencia tras fiesta rave con miosis, bradicardia, hipotensión, sialorrea e hiperperistaltismo.",
      "Debes pensar en: toxíndrome colinérgico (organofosforados/carbamatos) → atropina + pralidoxima.",
      "Miosis + sialorrea + bradicardia diferencia del toxíndrome opioide (sin sialorrea ni hiperperistaltismo).",
      "La atropina es el tratamiento inicial más importante; la pralidoxima reactiva la acetilcolinesterasa.",
      "Tema: Intoxicaciones agudas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de toxicología porque evalúa una trampa frecuente: asociar miosis con intoxicación por opioides cuando el cuadro completo (sialorrea, bradicardia, hiperperistaltismo) es característico del toxíndrome colinérgico.

La clave no es la miosis aislada.
La clave es:
Miosis + bradicardia + hipotensión + sialorrea + hiperperistaltismo = toxíndrome colinérgico → atropina y pralidoxima.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Adolescente de 17 años inconsciente tras fiesta rave.
• Hipotensión (70/40 mmHg) y bradicardia (40 lpm).
• Pupilas mióticas, sialorrea y aumento de ruidos intestinales.
• Cuadro clásico de toxíndrome colinérgico por organofosforados o carbamatos.

Recordemos toxíndromes y síndrome colinérgico:
• El toxíndrome colinérgico se caracteriza por: SLUDGE (salivation, lacrimation, urination, defecation, GI upset, emesis) + miosis + bradicardia.
• Causas: organofosforados, carbamatos (inhiben acetilcolinesterasa).
• Tratamiento: atropina IV (dosis altas hasta secar secreciones) + pralidoxima (reactiva acetilcolinesterasa en organofosforados).
• Diferencia con opioides: estos causan miosis pero bradipnea, no sialorrea ni hiperperistaltismo.
• Diferencia con anticolinérgico: midriasis, piel seca, taquicardia (opuesto al colinérgico).

Por lo tanto:
El toxíndrome y manejo correctos son colinérgico con atropina y pralidoxima (opción C).

¿Por qué la opción C es la respuesta correcta?
La combinación de miosis, bradicardia, hipotensión, sialorrea e hiperperistaltismo es patognomónica de toxíndrome colinérgico, tratado con atropina y pralidoxima.

¿Por qué fallan las otras opciones?
Opción A (simpaticomimético; benzodiacepinas): cursa con midriasis, taquicardia, hipertensión y agitación; cuadro opuesto.
Opción B (anticolinérgico; fisostigmina): cursa con midriasis, piel seca, retención urinaria; fisostigmina es para anticolinérgico, no colinérgico.
Opción D (opioide; naloxona): los opioides causan miosis y depresión respiratoria, pero no sialorrea ni hiperperistaltismo.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "miosis" y responden intoxicación por opioides.
Pero la sialorrea y el hiperperistaltismo son claves del toxíndrome colinérgico, no del opioide.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer el toxíndrome por el patrón clínico (SLUDGE + miosis + bradicardia).
2. Identificar causa: organofosforados o carbamatos.
3. Iniciar atropina IV en dosis altas hasta secar secreciones.
4. Agregar pralidoxima si exposición a organofosforados.

Perlas de examen
✅ Colinérgico: miosis + sialorrea + bradicardia + hiperperistaltismo (SLUDGE).
✅ Opioide: miosis + bradipnea + depresión del SNC (sin sialorrea).
✅ Anticolinérgico: midriasis + piel seca + "loco como un sombrero".
✅ Simpaticomimético: midriasis + taquicardia + agitación.
✅ Atropina es el antídoto inicial más importante en colinérgico.

Referencias
• Goldfrank's Toxicologic Emergencies.
• Tintinalli's Emergency Medicine.
• Harrison's Principles of Internal Medicine.
• Olson's Poisoning & Drug Overdose.
• UpToDate: Organophosphate and carbamate poisoning.`,
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
      "Cuando veas: adolescente con dificultad para articular fonemas sin alteración de comprensión ni estructura del lenguaje.",
      "Debes pensar en: dislalia (trastorno de articulación aislado).",
      "La dislalia afecta solo la pronunciación; el lenguaje receptivo y expresivo están intactos.",
      "Diferenciar de disfasia (lenguaje) y afasia (adquirida por lesión cerebral).",
      "Tema: Trastornos del lenguaje.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de desarrollo y lenguaje porque evalúa una trampa frecuente: confundir dislalia con disfasia o afasia cuando el único déficit es la articulación de fonemas.

La clave no es asumir un trastorno global del lenguaje.
La clave es:
Dificultad para articular fonemas + comprensión y expresión normales = dislalia.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Adolescente de 14 años.
• Dificultades para articular ciertos fonemas.
• Sin alteraciones en comprensión, expresión o estructura general del lenguaje.
• Trastorno aislado de la articulación del habla.

Recordemos trastornos del lenguaje y habla:
• Dislalia: trastorno de articulación de fonemas; el paciente sabe qué decir pero no pronuncia correctamente.
• Disfasia: trastorno del desarrollo del lenguaje (comprensión y/o expresión afectadas).
• Disglosia: alteración anatómica que impide articulación (fisura palatina, anquiloglosia).
• Afasia: pérdida adquirida del lenguaje por lesión cerebral (adultos, post-ictus).
• La inteligencia no está afectada en dislalia.

Por lo tanto:
El diagnóstico más probable es dislalia (opción A).

¿Por qué la opción A es la respuesta correcta?
La dislalia es un trastorno exclusivo de la articulación de fonemas sin compromiso de comprensión ni organización del lenguaje, exactamente como describe el caso.

¿Por qué fallan las otras opciones?
Opción B (disfasia): implica alteración del desarrollo del lenguaje (comprensión y/o expresión), no solo articulación.
Opción C (disglosia): se debe a alteración anatómica estructural (paladar, lengua); no se describe en el caso.
Opción D (afasia): es adquirida por lesión cerebral en adultos; no aplica en adolescente con trastorno de articulación aislado.

¿Cuál es la trampa del examen?
Muchos estudiantes confunden dislalia y disfasia.
Pero el dato decisivo es que solo la articulación está afectada, no la comprensión ni la expresión.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar comprensión, expresión y articulación por separado.
2. Si solo la articulación está afectada → dislalia.
3. Si comprensión/expresión afectadas → disfasia.
4. Si hay lesión cerebral adquirida → afasia.

Perlas de examen
✅ Dislalia = solo articulación afectada, lenguaje intacto.
✅ Disfasia = trastorno del desarrollo del lenguaje (comprensión y/o expresión).
✅ Afasia = pérdida adquirida del lenguaje por lesión cerebral.
✅ Disglosia = causa anatómica (fisura, anquiloglosia).
✅ En dislalia, el paciente sabe qué quiere decir pero no puede pronunciarlo.

Referencias
• Nelson Textbook of Pediatrics.
• Developmental-Behavioral Pediatrics.
• Manual de Pediatría de la AEP.
• DSM-5-TR.
• UpToDate: Speech and language delay in children.`,
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
      "Cuando veas: citología cervical con AGC-NOS (células glandulares atípicas de significado indeterminado).",
      "Debes pensar en: evaluación diagnóstica inmediata → colposcopia con biopsia dirigida y muestreo endocervical.",
      "AGC se asocia a mayor riesgo de adenocarcinoma que las alteraciones escamosas leves.",
      "No repetir citología ni limitarse a prueba de VPH; requiere evaluación invasiva inmediata.",
      "Tema: Tamizaje y patología cervical.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ginecología porque evalúa una trampa frecuente: manejar AGC como una alteración citológica leve que puede repetirse, cuando requiere evaluación diagnóstica inmediata.

La clave no es repetir la citología o hacer solo prueba de VPH.
La clave es:
AGC-NOS en citología de tamizaje = colposcopia inmediata con biopsia dirigida y muestreo endocervical.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 40 años con citología de tamizaje.
• Resultado: AGC-NOS (células glandulares atípicas de significado indeterminado).
• Necesidad de evaluación diagnóstica urgente por riesgo de malignidad glandular.

Recordemos AGC y manejo cervical:
• AGC = células glandulares atípicas; pueden originarse del endocérvix o endometrio.
• Se asocian a riesgo significativo de adenocarcinoma cervical y endometrial.
• Las guías ASCCP recomiendan colposcopia inmediata con biopsia dirigida y curetaje endocervical.
• No se debe repetir citología ni limitarse a prueba de VPH como primer paso.
• La histeroscopia no es el estudio inicial de elección ante AGC.

Por lo tanto:
El siguiente paso es colposcopia y biopsia (opción A).

¿Por qué la opción A es la respuesta correcta?
Toda paciente con AGC-NOS requiere evaluación diagnóstica inmediata mediante colposcopia con toma de biopsias dirigidas y muestreo endocervical según guías ASCCP.

¿Por qué fallan las otras opciones?
Opción B (repetir citología en 6-12 meses): inadecuado; AGC requiere evaluación inmediata, no seguimiento citológico.
Opción C (prueba de VPH): complementaria pero no sustituye la colposcopia ante AGC.
Opción D (histeroscopia): no es el estudio inicial; la colposcopia con muestreo endocervical es el primer paso.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian citología anormal con repetición del examen.
Pero AGC tiene mayor riesgo de malignidad glandular y exige colposcopia inmediata.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar AGC en citología de tamizaje.
2. Referir a colposcopia inmediata (no repetir citología).
3. Realizar biopsia dirigida y curetaje endocervical.
4. Evaluar endometrio según edad y hallazgos (≥35 años o sangrado anormal).

Perlas de examen
✅ AGC = células glandulares atípicas → colposcopia inmediata.
✅ Mayor riesgo de adenocarcinoma que LSIL o ASC-US.
✅ Siempre incluir muestreo endocervical (curetaje).
✅ No repetir citología como manejo inicial de AGC.
✅ Evaluar endometrio en mujeres ≥35 años o con sangrado anormal.

Referencias
• ASCCP Risk-Based Management Guidelines.
• ACOG Practice Bulletin: Cervical Cancer Screening.
• Novak's Gynecology.
• Berek & Novak's Gynecology.
• UpToDate: Cervical cytology: Evaluation of atypical glandular cells.`,
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
      "Cuando veas: líquido pleural con criterios de Light positivos (exudado), pH <7.30, glucosa baja y predominio neutrofílico.",
      "Debes pensar en: derrame parapneumónico complicado que requiere drenaje pleural.",
      "Criterios de Light: proteína LP/suero >0.5 y/o LDH LP/suero >0.6 confirman exudado.",
      "pH <7.30 y glucosa <60 mg/dL orientan a derrame complicado con indicación de drenaje.",
      "Tema: Derrame pleural.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neumología porque evalúa una trampa frecuente: clasificar todo derrame pleural hospitalizado como transudado por insuficiencia cardíaca sin aplicar los criterios de Light y los marcadores de complicación.

La clave no es asumir transudado por contexto hospitalario.
La clave es:
Criterios de Light positivos + pH <7.30 + glucosa baja + neutrofilia = exudado parapneumónico complicado.

¿Qué está ocurriendo realmente?
El paciente presenta análisis de líquido pleural con:
• Proteínas LP/suero: 4.8/6.0 = 0.80 (>0.5 → exudado).
• LDH LP/suero: 420/180 = 2.33 (>0.6 → exudado).
• pH: 7.28 (<7.30 → complicado).
• Glucosa: 45 mg/dL (<60 → complicado).
• 3.500 leucocitos/mm³ con predominio neutrofílico.
• Cuadro compatible con derrame parapneumónico complicado.

Recordemos derrame pleural y criterios de Light:
• Criterios de Light (cualquiera positivo = exudado): proteína LP/suero >0.5, LDH LP/suero >0.6, LDH LP >2/3 del límite superior sérico.
• Derrame parapneumónico complicado: pH <7.30, glucosa <60 mg/dL, LDH >1000, empiema (pus).
• El derrame complicado generalmente requiere drenaje pleural (tubo torácico).
• Los transudados (ICC, cirrosis, síndrome nefrótico) tienen proteínas y LDH bajos.
• El predominio neutrofílico orienta a proceso infeccioso agudo.

Por lo tanto:
Los hallazgos determinan derrame pleural exudativo compatible con parapneumónico complicado (opción B).

¿Por qué la opción B es la respuesta correcta?
Los criterios de Light confirman exudado y la combinación de pH <7.30, glucosa baja y neutrofilia es compatible con derrame parapneumónico complicado que requiere drenaje.

¿Por qué fallan las otras opciones?
Opción A (transudado por ICC): los criterios de Light son positivos; no es transudado.
Opción C (síndrome nefrótico): causaría transudado con proteínas y LDH bajos; no coincide con los valores.
Opción D (transudado por cirrosis): igualmente sería transudado; los criterios de Light descartan esta posibilidad.

¿Cuál es la trampa del examen?
Muchos estudiantes observan "derrame pleural" en paciente hospitalizado y responden insuficiencia cardíaca.
Pero los criterios de Light y los marcadores bioquímicos confirman exudado complicado.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Aplicar criterios de Light para clasificar exudado vs transudado.
2. En exudado, evaluar pH, glucosa, LDH y aspecto del líquido.
3. pH <7.30 o glucosa <60 = parapneumónico complicado → drenaje.
4. Diferenciar transudado (ICC, cirrosis, nefrótico) de exudado (infección, malignidad).

Perlas de examen
✅ Criterios de Light: proteína >0.5, LDH >0.6, LDH LP >2/3 LSN.
✅ pH <7.30 en exudado = indicación de drenaje.
✅ Glucosa <60 mg/dL sugiere derrame complicado.
✅ Parapneumónico complicado requiere tubo de tórax.
✅ Transudado: ICC, cirrosis, síndrome nefrótico, hipoalbuminemia.

Referencias
• Light RW. Pleural Diseases.
• ATS Guidelines for Pleural Disease.
• Harrison's Principles of Internal Medicine.
• Murray & Nadel's Textbook of Respiratory Medicine.
• UpToDate: Pleural fluid analysis.`,
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
      "Cuando veas: nódulo tiroideo sólido, hipoecoico, con microcalcificaciones y síntomas compresivos (disfagia, odinofagia).",
      "Debes pensar en: TI-RADS 5 (alta sospecha de malignidad) → biopsia por aspiración con aguja fina (BACAF).",
      "Las microcalcificaciones son el signo ecográfico de mayor especificidad para carcinoma papilar.",
      "Un nódulo TI-RADS 5 ≥1 cm tiene indicación de BACAF independientemente del tamaño aparentemente pequeño.",
      "Tema: Nódulo tiroideo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de endocrinología porque evalúa una trampa frecuente: subestimar un nódulo de 1.5 cm con características de alta sospecha ecográfica, enfocándose en el tamaño en lugar de los criterios de malignidad.

La clave no es el tamaño aparentemente pequeño del nódulo.
La clave es:
Nódulo sólido + hipoecoico + microcalcificaciones = TI-RADS 5 → BACAF obligatoria.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 35 años con disfagia, odinofagia y masa cervical de 3 meses.
• Ecografía: nódulo sólido de 1.5 cm, hipoecoico, con microcalcificaciones.
• Características ecográficas de alta sospecha de malignidad (TI-RADS 5).

Recordemos nódulo tiroideo y TI-RADS:
• TI-RADS clasifica nódulos según composición, ecogenicidad, forma, márgenes y calcificaciones.
• Microcalcificaciones (psamommas) = alta especificidad para carcinoma papilar.
• Hipoecoicidad y nódulo sólido aumentan la sospecha.
• TI-RADS 5 = alto riesgo de malignidad; BACAF indicada en nódulos ≥1 cm.
• El carcinoma papilar es el cáncer de tiroides más frecuente (80-90%).
• La gammagrafía se reserva para nódulos con TSH suprimida (nódulo tóxico).

Por lo tanto:
La clasificación y conducta correctas son TI-RADS 5 con BACAF (opción D).

¿Por qué la opción D es la respuesta correcta?
Un nódulo sólido, hipoecoico con microcalcificaciones corresponde a TI-RADS 5, y a 1.5 cm tiene indicación de estudio citológico mediante BACAF.

¿Por qué fallan las otras opciones?
Opción A (TI-RADS 2; seguimiento): TI-RADS 2 es benigno; las características del nódulo son altamente sospechosas.
Opción B (TI-RADS 3; control 12 meses): TI-RADS 3 es de baja sospecha; las microcalcificaciones elevan a categoría 5.
Opción C (TI-RADS 4; gammagrafía): la gammagrafía no es el siguiente paso en nódulo con TSH normal y alta sospecha ecográfica.

¿Cuál es la trampa del examen?
Muchos estudiantes se enfocan en que el nódulo mide solo 1.5 cm.
Pero las microcalcificaciones y la hipoecoicidad definen TI-RADS 5 con indicación de BACAF.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar nódulo tiroideo con ecografía y clasificar TI-RADS.
2. Identificar signos de alta sospecha: microcalcificaciones, hipoecoicidad, márgenes irregulares.
3. TI-RADS 5 ≥1 cm → BACAF.
4. No usar gammagrafía como primer paso si TSH es normal.

Perlas de examen
✅ Microcalcificaciones = signo ecográfico de mayor especificidad para malignidad.
✅ TI-RADS 5 = alto riesgo; BACAF si nódulo ≥1 cm.
✅ Carcinoma papilar = cáncer de tiroides más frecuente.
✅ Gammagrafía solo si TSH suprimida (nódulo hiperfuncionante).
✅ El tamaño no atenúa la sospecha si hay criterios de alto riesgo.

Referencias
• American Thyroid Association Guidelines.
• ACR TI-RADS White Paper.
• Williams Textbook of Endocrinology.
• UpToDate: Thyroid Nodules.
• Haugen BR et al. 2015 ATA Management Guidelines.`,
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
      "Cuando veas: niño pequeño con leucocoria (ausencia del reflejo rojo), descrito como \"ojo de gato\".",
      "Debes pensar en: retinoblastoma hasta demostrar lo contrario — urgencia oncológica y oftalmológica.",
      "La leucocoria es el signo de presentación más frecuente del retinoblastoma.",
      "Nunca realizar biopsia intraocular por riesgo de diseminación extrarretiniana.",
      "Tema: Retinoblastoma.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de oftalmología pediátrica porque evalúa una trampa frecuente: no reconocer la leucocoria como signo de retinoblastoma, el tumor intraocular maligno más frecuente de la infancia.

La clave no es atribuir el hallazgo a causas benignas.
La clave es:
Leucocoria (ausencia de reflejo rojo) en niño <5 años = retinoblastoma hasta demostrar lo contrario.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Niño de 2 años.
• La madre refiere que "el ojo se ve como el de un gato".
• Tamizaje visual: ausencia del reflejo rojo en un ojo (leucocoria unilateral).
• Cuadro altamente sugestivo de retinoblastoma.

Recordemos retinoblastoma:
• Tumor intraocular maligno más frecuente de la infancia (incidencia ~1:15.000-20.000 nacidos vivos).
• La leucocoria (reflejo blanco) es el signo de presentación más frecuente (60%).
• El estrabismo es la segunda forma de presentación más común.
• Puede ser hereditario (40%, bilateral) o esporádico (60%, unilateral).
• NUNCA se debe biopsiar intraocularmente por riesgo de diseminación.
• Diagnóstico: examen oftalmológico bajo anestesia + ecografía ocular + RM.
• Tratamiento: quimioterapia, braquiterapia, enucleación según estadio.

Por lo tanto:
El diagnóstico más probable es retinoblastoma (opción B).

¿Por qué la opción B es la respuesta correcta?
La leucocoria unilateral en un niño de 2 años es el hallazgo clásico del retinoblastoma, que constituye una urgencia diagnóstica oncológica.

¿Por qué fallan las otras opciones?
Opción A (estrabismo convergente): puede ser segunda presentación del retinoblastoma, pero el signo descrito es leucocoria, no desviación ocular.
Opción C (catarata congénita): causa leucocoria pero suele ser bilateral y presente desde el nacimiento; menos probable a los 2 años con inicio referido.
Opción D (glaucoma congénito): cursa con epífora, fotofobia y aumento del tamaño ocular (buftalmos), no leucocoria aislada.

¿Cuál es la trampa del examen?
Muchos estudiantes no reconocen "ojo de gato" como leucocoria ni su asociación con retinoblastoma.
Pero toda leucocoria en la infancia debe considerarse retinoblastoma hasta demostrar lo contrario.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar leucocoria en tamizaje visual infantil.
2. Considerar retinoblastoma hasta demostrar lo contrario.
3. Referir urgente a oftalmología pediátrica.
4. Nunca biopsiar intraocularmente.

Perlas de examen
✅ Leucocoria en niño = retinoblastoma hasta demostrar lo contrario.
✅ Signo más frecuente: leucocoria (60%); segundo: estrabismo.
✅ NUNCA biopsia intraocular (riesgo de diseminación).
✅ Puede ser hereditario (RB1) o esporádico.
✅ El tamizaje con reflejo rojo detecta leucocoria precozmente.

Referencias
• Nelson Textbook of Pediatrics.
• American Academy of Ophthalmology.
• Shields' Retinoblastoma.
• UpToDate: Retinoblastoma.
• WHO Classification of Tumours: Retinoblastoma.`,
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
      "Cuando veas: úlcera vulvar indolora de bordes bien definidos con VDRL no reactivo y antecedente de relaciones sexuales sin protección.",
      "Debes pensar en: sífilis primaria temprana → prueba treponémica específica (FTA-ABS o prueba rápida treponémica).",
      "El chancro sifilítico es típicamente indoloro con base limpia y bordes elevados.",
      "El VDRL puede ser negativo en las primeras semanas de sífilis primaria.",
      "Tema: Sífilis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de infectología porque evalúa una trampa frecuente: descartar sífilis por VDRL negativo cuando la lesión clínica es un chancro sifilítico en fase primaria temprana.

La clave no es el VDRL negativo.
La clave es:
Úlcera vulvar indolora + VDRL negativo en fase temprana = solicitar prueba treponémica específica antes de descartar sífilis.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 28 años con úlcera vulvar indolora de bordes bien definidos.
• Actividad sexual sin protección en los últimos meses.
• VDRL no reactivo en estudio inicial.
• Cuadro compatible con sífilis primaria temprana con serología no treponémica aún negativa.

Recordemos sífilis primaria:
• El chancro sifilítico es una úlcera indolora, de bordes elevados y base limpia.
• Aparece 3-6 semanas tras la exposición en el sitio de inoculación.
• El VDRL (prueba no treponémica) puede ser negativo en las primeras 1-4 semanas.
• Las pruebas treponémicas (FTA-ABS, TP-PA, pruebas rápidas) son más sensibles en fase primaria.
• El algoritmo diagnóstico combina clínica + serología treponémica y no treponémica.
• El tratamiento de elección es penicilina benzatínica 2.4 millones UI IM dosis única.

Por lo tanto:
La conducta correcta es solicitar prueba treponémica específica e iniciar manejo según hallazgos (opción C).

¿Por qué la opción C es la respuesta correcta?
La lesión es altamente sugestiva de chancro sifilítico y el VDRL puede ser negativo en fase temprana; se requiere prueba treponémica más sensible antes de descartar sífilis.

¿Por qué fallan las otras opciones?
Opción A (descartar sífilis; biopsia): no se debe descartar sífilis con VDRL negativo en fase primaria temprana; la biopsia no es el primer paso.
Opción B (repetir VDRL en 6 meses): retrasa diagnóstico y tratamiento de una ITS curable; se necesita prueba treponémica ahora.
Opción D (tratamiento para herpes): la herpes genital causa vesículas dolorosas, no úlcera indolora de bordes definidos.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "VDRL negativo" y descartan sífilis.
Pero en sífilis primaria temprana las pruebas no treponémicas pueden ser negativas; las treponémicas son más sensibles.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar úlcera genital indolora como posible chancro sifilítico.
2. No descartar sífilis por VDRL negativo en fase temprana.
3. Solicitar prueba treponémica específica (FTA-ABS o rápida treponémica).
4. Tratar con penicilina benzatínica si se confirma.

Perlas de examen
✅ Chancro sifilítico = úlcera indolora, bordes elevados, base limpia.
✅ VDRL puede ser negativo en sífilis primaria temprana (1-4 semanas).
✅ Pruebas treponémicas son más sensibles en fase primaria.
✅ Herpes genital = vesículas dolorosas, no úlcera indolora.
✅ Tratamiento: penicilina benzatínica 2.4 millones UI IM dosis única.

Referencias
• CDC Sexually Transmitted Infections Treatment Guidelines.
• Harrison's Principles of Internal Medicine.
• Mandell, Douglas and Bennett's Infectious Diseases.
• WHO Guidelines for the Management of Sexually Transmitted Infections.
• UpToDate: Syphilis: Epidemiology, clinical manifestations, and diagnosis.`,
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
      "Cuando veas: quemadura eléctrica de alto voltaje con lesiones de entrada/salida mínimas y sin quemaduras cutáneas extensas visibles.",
      "Debes pensar en: daño tisular profundo oculto masivo — no estimar SCQ por regla de los nueves.",
      "Las quemaduras eléctricas de alto voltaje causan destrucción muscular profunda desproporcionada a la lesión cutánea.",
      "Riesgo de mioglobinuria, rabdomiolisis, arritmias y síndrome compartimental.",
      "Tema: Quemaduras eléctricas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cirugía de quemados porque evalúa una trampa frecuente: calcular la superficie corporal quemada (SCQ) con la regla de los nueves en una quemadura eléctrica de alto voltaje, subestimando gravemente la lesión real.

La clave no es la apariencia externa de las lesiones.
La clave es:
Quemadura eléctrica de alto voltaje = daño tisular profundo extenso que no se correlaciona con la superficie cutánea visible.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 25 años, electricista, descarga eléctrica de alto voltaje.
• Lesión de entrada en región occipital y salida en talón derecho.
• Sin otras quemaduras cutáneas evidentes.
• Daño muscular y tisular profundo oculto desproporcionado a la lesión visible.

Recordemos quemaduras eléctricas:
• Las de alto voltaje (>1000 V) producen destrucción muscular masiva a lo largo del trayecto del corriente.
• La lesión cutánea visible subestima enormemente el daño interno (regla del "iceberg").
• La regla de los nueves NO aplica para estimar reposición hídrica en quemaduras eléctricas.
• Complicaciones: rabdomiolisis, mioglobinuria, insuficiencia renal, arritmias, síndrome compartimental.
• La reanimación hídrica debe ser agresiva según diuresis y CPK, no solo por SCQ visible.
• Pueden requerir fasciotomía por síndrome compartimental.

Por lo tanto:
La respuesta correcta es que no puede estimarse por apariencia externa; debe considerarse quemadura eléctrica profunda de alto voltaje (opción D).

¿Por qué la opción D es la respuesta correcta?
Las quemaduras eléctricas de alto voltaje producen extensa destrucción tisular profunda no correlacionada con la superficie cutánea visible; la reposición hídrica no debe basarse en la regla de los nueves.

¿Por qué fallan las otras opciones?
Opción A (1%): subestima gravemente la lesión; solo considera puntos de entrada/salida.
Opción B (5%): igualmente insuficiente para una quemadura eléctrica de alto voltaje con trayecto occipital-talón.
Opción C (20%): aún subestima el daño muscular profundo que puede afectar gran parte del cuerpo a lo largo del trayecto de la corriente.

¿Cuál es la trampa del examen?
Muchos estudiantes intentan calcular la SCQ usando la regla de los nueves con las lesiones de entrada y salida.
Pero en quemaduras eléctricas de alto voltaje esto subestima gravemente la lesión y pone al paciente en riesgo de subrehidratación.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar quemadura eléctrica de alto voltaje.
2. No usar regla de los nueves para estimar SCQ.
3. Iniciar reanimación hídrica agresiva monitorizando diuresis y CPK.
4. Vigilar arritmias, rabdomiolisis y síndrome compartimental.

Perlas de examen
✅ Quemadura eléctrica alto voltaje = daño profundo oculto ("iceberg").
✅ La regla de los nueves NO aplica para reposición hídrica.
✅ Mioglobinuria y rabdomiolisis son complicaciones frecuentes.
✅ Monitorizar CPK, diuresis y función renal.
✅ Vigilar síndrome compartimental → fasciotomía.

Referencias
• Advanced Burn Life Support (ABLS).
• American Burn Association Guidelines.
• Schwartz's Principles of Surgery.
• Tintinalli's Emergency Medicine.
• UpToDate: Environmental and weapon-related electrical injuries.`,
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
      "Cuando veas: tamizaje neonatal con SpO₂ preductal (mano derecha) 98% y postductal (miembro inferior) 92%, diferencia >3% persistente.",
      "Debes pensar en: tamizaje positivo para cardiopatía congénita crítica → valoración cardiológica y ecocardiograma.",
      "La diferencia >3% entre preductal y postductal es criterio de tamizaje anormal.",
      "Las cardiopatías ducto-dependientes pueden presentarse sin cianosis evidente al nacimiento.",
      "Tema: Tamizaje neonatal cardiovascular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología neonatal porque evalúa una trampa frecuente: considerar normal un recién nacido sin cianosis evidente cuando el tamizaje con oximetría de pulso muestra diferencia significativa preductal-postductal.

La clave no es la ausencia de cianosis clínica.
La clave es:
Diferencia de SpO₂ >3% entre mano derecha (preductal) y miembro inferior (postductal) = tamizaje positivo → ecocardiograma urgente.

¿Qué está ocurriendo realmente?
El neonato presenta:
• Recién nacido a término con adaptación neonatal adecuada.
• Tamizaje con oximetría de pulso antes del alta.
• SpO₂ 98% en mano derecha (preductal) y 92% en miembro inferior (postductal).
• Diferencia de 6% persistente en segunda medición.
• Tamizaje positivo para cardiopatía congénita crítica.

Recordemos tamizaje neonatal cardiovascular:
• Protocolo de oximetría de pulso antes del alta hospitalaria (recomendado por AAP y Minsalud Colombia).
• Medición preductal: mano derecha (antes del conducto arterioso).
• Medición postductal: pie o miembro inferior (después del conducto arterioso).
• Tamizaje positivo: SpO₂ <95% en cualquier sitio O diferencia >3% preductal-postductal en dos mediciones.
• Detecta cardiopatías ducto-dependientes (coartación, TGA, atresia pulmonar, etc.).
• El ecocardiograma es el estudio diagnóstico de confirmación.

Por lo tanto:
La conducta correcta es considerar tamizaje positivo, realizar valoración cardiológica y ecocardiograma (opción C).

¿Por qué la opción C es la respuesta correcta?
La diferencia de 6% (>3%) entre mediciones preductal y postductal persistente constituye tamizaje positivo según protocolos de Minsalud Colombia y AAP, requiriendo evaluación cardiológica urgente.

¿Por qué fallan las otras opciones?
Opción A (tamizaje normal; egreso): la diferencia >3% es anormal; egresar sin estudio pone al neonato en riesgo.
Opción B (repetir en control ambulatorio): retrasa diagnóstico de cardiopatía crítica ducto-dependiente.
Opción D (oxígeno suplementario y repetir en 24 h): no es el manejo del tamizaje positivo; se requiere ecocardiograma, no oxígeno empírico.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "no presenta cianosis" y concluyen recién nacido sano.
Pero las cardiopatías ducto-dependientes pueden manifestarse solo con diferencia preductal-postductal antes del cierre del conducto.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Realizar oximetría preductal (mano derecha) y postductal (pie) antes del alta.
2. Tamizaje positivo si SpO₂ <95% o diferencia >3% en dos mediciones.
3. No egresar; realizar ecocardiograma urgente.
4. Iniciar prostaglandinas si cardiopatía ducto-dependiente confirmada.

Perlas de examen
✅ Preductal = mano derecha; postductal = pie/miembro inferior.
✅ Diferencia >3% o SpO₂ <95% = tamizaje positivo.
✅ Detecta cardiopatías críticas ducto-dependientes antes del cierre del conducto.
✅ La cianosis puede ausentarse inicialmente.
✅ Ecocardiograma es el estudio de confirmación.

Referencias
• Ministerio de Salud y Protección Social de Colombia. Lineamientos de Tamizaje Neonatal.
• American Academy of Pediatrics.
• Nelson Textbook of Pediatrics.
• American Heart Association Guidelines.
• UpToDate: Identifying newborns with critical congenital heart disease.`,
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
      "Cuando veas: sangrado uterino irregular persistente con implante de levonorgestrel, paciente desea continuar el método y sin anemia.",
      "Debes pensar en: efecto adverso esperado del implante → anticonceptivos orales combinados temporales para control del sangrado.",
      "El sangrado irregular es el efecto adverso más frecuente de los implantes de progestágeno.",
      "No es necesario retirar el implante si la paciente desea continuar y se descartaron otras causas.",
      "Tema: Anticoncepción hormonal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ginecología y planificación familiar porque evalúa una trampa frecuente: retirar el implante ante sangrado irregular prolongado cuando la paciente desea continuar el método y existe tratamiento médico para controlar el sangrado.

La clave no es retirar el implante automáticamente.
La clave es:
Sangrado irregular con implante de levonorgestrel + paciente desea continuar + sin anemia = tratamiento médico temporal con estrógenos o ACO combinados.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 20 años con sangrado uterino irregular de 5 meses.
• Usa implante subdérmico de levonorgestrel.
• Desea continuar con el método anticonceptivo.
• Examen físico normal, sin signos de anemia.
• Efecto adverso esperado del implante que afecta calidad de vida.

Recordemos implante de levonorgestrel y sangrado:
• El sangrado uterino irregular es el efecto adverso más frecuente de los implantes de progestágeno.
• No disminuye la eficacia anticonceptiva del implante.
• Cuando la paciente desea continuar y se descartaron otras causas (embarazo, patología uterina), se puede tratar con estrógenos o ACO combinados temporalmente.
• Los estrógenos estabilizan el endometrio y reducen el sangrado irregular.
• La retirada del implante solo se indica si la paciente no desea continuar o si el sangrado es inaceptable a pesar del tratamiento.

Por lo tanto:
La conducta terapéutica correcta es iniciar anticonceptivos orales combinados por corto tiempo (opción B).

¿Por qué la opción B es la respuesta correcta?
Ante sangrado irregular con implante de levonorgestrel en paciente que desea continuar el método, los ACO combinados temporales mejoran el patrón de sangrado sin comprometer la anticoncepción del implante.

¿Por qué fallan las otras opciones?
Opción A (retirar implante): no es necesario si la paciente desea continuar; existe tratamiento médico efectivo.
Opción C (legrado): inadecuado; no hay indicación de procedimiento invasivo ante sangrado por implante sin sospecha de patología.
Opción D (suspender intervención): el sangrado afecta su calidad de vida; no es adecuado solo explicar sin ofrecer tratamiento.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "5 meses de sangrado" y responden retirar el implante.
Pero si la paciente desea continuar el método, el tratamiento con estrógenos o ACO combinados es la conducta adecuada.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar sangrado relacionado con implante y descartar otras causas.
2. Evaluar deseo de la paciente de continuar el método.
3. Si desea continuar: ACO combinados o estrógenos temporales.
4. Retirar implante solo si no desea continuar o falla tratamiento médico.

Perlas de examen
✅ Sangrado irregular = efecto adverso más frecuente del implante de LNG.
✅ No reduce la eficacia anticonceptiva del implante.
✅ ACO combinados temporales controlan el sangrado sin retirar el implante.
✅ Retirar solo si la paciente no desea continuar.
✅ Descartar embarazo y patología uterina antes de atribuir al implante.

Referencias
• WHO Family Planning Handbook.
• CDC U.S. Selected Practice Recommendations for Contraceptive Use.
• ACOG Long-Acting Reversible Contraception Guidelines.
• Williams Gynecology.
• UpToDate: Implantable contraception: Management of bleeding irregularities.`,
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
      "Cuando veas: dolor en fosa ilíaca izquierda con fiebre, TAC con engrosamiento del sigmoide e infiltración de grasa pericólica sin absceso ni perforación.",
      "Debes pensar en: diverticulitis aguda Hinchey Ia (pericolicitis) → manejo conservador con antibióticos.",
      "El dolor en FII en anciano es diverticulitis hasta demostrar lo contrario.",
      "Hinchey Ia = inflamación pericólica sin absceso ni perforación; no requiere cirugía inicial.",
      "Tema: Diverticulitis aguda.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cirugía general porque evalúa una trampa frecuente: indicar cirugía urgente en un anciano con fiebre y dolor abdominal cuando la TAC muestra diverticulitis no complicada (Hinchey Ia).

La clave no es la edad avanzada ni la fiebre aisladas.
La clave es:
Diverticulitis con inflamación pericólica sin absceso, fístula, neumoperitoneo ni peritonitis = Hinchey Ia → manejo conservador.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 78 años con dolor en fosa ilíaca izquierda, fiebre y náuseas.
• TAC: engrosamiento del colon sigmoide con infiltración de grasa pericólica.
• Sin abscesos, fístulas, neumoperitoneo ni peritonitis.
• Diverticulitis aguda no complicada (Hinchey Ia).

Recordemos diverticulitis aguda y clasificación de Hinchey:
• Hinchey Ia: inflamación pericólica / flemón pericólico (sin absceso).
• Hinchey Ib: absceso pericólico o mesentérico pequeño (<4 cm).
• Hinchey II: absceso pélvico o retroperitoneal distante.
• Hinchey III: peritonitis purulenta generalizada.
• Hinchey IV: peritonitis fecal generalizada.
• Hinchey Ia-Ib: manejo conservador con antibióticos, analgesia, hidratación y vigilancia.
• La TAC es el estudio diagnóstico de elección.

Por lo tanto:
La clasificación y manejo correctos son Hinchey Ia con tratamiento conservador (opción A).

¿Por qué la opción A es la respuesta correcta?
La diverticulitis con inflamación pericólica sin abscesos ni signos de perforación corresponde a Hinchey Ia, cuyo manejo inicial es conservador con antibióticos y medidas de soporte.

¿Por qué fallan las otras opciones?
Opción B (Hinchey Ib; drenaje): Hinchey Ib requiere absceso pericólico; la TAC no muestra absceso.
Opción C (Hinchey III; laparotomía): Hinchey III implica peritonitis purulenta generalizada; no hay neumoperitoneo ni peritonitis.
Opción D (Hinchey IV; Hartmann): Hinchey IV es peritonitis fecal; el caso describe inflamación pericólica sin perforación franca.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "paciente anciano con fiebre" y responden cirugía.
Pero la TAC define la clasificación de Hinchey y Hinchey Ia se maneja médicamente.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar diverticulitis ante dolor en FII con fiebre.
2. Confirmar con TAC abdominal.
3. Clasificar según Hinchey modificado.
4. Hinchey Ia: antibióticos + soporte; cirugía solo si complicaciones o falla médica.

Perlas de examen
✅ Dolor en FII + fiebre en anciano = diverticulitis hasta demostrar lo contrario.
✅ Hinchey Ia = inflamación pericólica → manejo conservador.
✅ TAC es el estudio diagnóstico de elección.
✅ Absceso >4 cm (Hinchey II) → drenaje percutáneo.
✅ Hartmann reservado para Hinchey III-IV o peritonitis generalizada.

Referencias
• Schwartz's Principles of Surgery.
• Sabiston Textbook of Surgery.
• ASCRS Guidelines for Diverticulitis.
• UpToDate: Acute Colonic Diverticulitis.
• Hinchey EJ, Schaal PG, Richards GK. Treatment of perforated diverticular disease.`,
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
      "Cuando veas: desconexión del entorno de ~3 minutos, mirada fija, automatismos orales repetitivos y confusión posictal prolongada.",
      "Debes pensar en: crisis focal con alteración de la conciencia (focal compleja) → levetiracetam como tratamiento de primera línea.",
      "Los automatismos orales sugieren origen en el lóbulo temporal.",
      "La confusión posictal distingue la crisis focal compleja de la crisis de ausencia.",
      "Tema: Epilepsia focal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa una trampa frecuente: confundir una crisis focal compleja con una crisis de ausencia por la desconexión del entorno.

La clave no es asumir que toda desconexión breve es ausencia.
La clave es:
Automatismos orales + período posictal confusional = crisis focal con alteración de la conciencia, frecuentemente del lóbulo temporal.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 45 años con episodios recurrentes de ~3 minutos.
• Desconexión del entorno con mirada fija.
• Automatismos orales repetitivos durante el evento.
• Confusión y desorientación posictal de varios minutos.
• Cuadro compatible con crisis focal compleja, no con ausencia típica.

Recordemos clasificación de crisis epilépticas:
• Las crisis de ausencia son breves (~10-20 segundos), sin automatismos complejos ni posictal.
• La crisis focal con alteración de la conciencia incluye automatismos (orales, manuales) y posictal.
• El lóbulo temporal es el origen más frecuente de crisis focales complejas con automatismos orales.
• Levetiracetam, lamotrigina y carbamazepina son opciones de primera línea en epilepsia focal.
• La etosuximida es específica para crisis de ausencia, no para crisis focales.

Por lo tanto:
El diagnóstico más probable es crisis focal con alteración de la conciencia y el tratamiento de primera línea es levetiracetam (opción B).

¿Por qué la opción B es la respuesta correcta?
La tríada desconexión + automatismos orales + posictal confusional es altamente sugestiva de crisis focal compleja. Levetiracetam es un antiepiléptico de amplio espectro eficaz en epilepsia focal.

¿Por qué fallan las otras opciones?
Opción A (crisis de ausencia; etosuximida): las ausencias no tienen automatismos orales complejos ni período posictal confusional; la etosuximida no trata crisis focales.
Opción C (crisis tónico-clónica generalizada; fenitoína): no hay convulsiones generalizadas ni pérdida tónico-clónica descrita; el cuadro es focal.
Opción D (crisis mioclónica; ácido valproico): no hay descargas mioclónicas; el patrón es de desconexión con automatismos.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "desconexión del entorno" y responden crisis de ausencia.
Pero la confusión posictal y los automatismos orales excluyen la ausencia típica.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar automatismos y posictal como signos de crisis focal compleja.
2. Descartar ausencia (sin posictal, más breve, inicio en infancia/adolescencia típicamente).
3. Considerar origen temporal por automatismos orales.
4. Iniciar antiepiléptico de primera línea para epilepsia focal (levetiracetam).

Perlas de examen
✅ Automatismos orales + posictal = crisis focal compleja, no ausencia.
✅ Etosuximida solo para crisis de ausencia.
✅ Levetiracetam es opción de primera línea en epilepsia focal.
✅ El lóbulo temporal es el origen clásico de automatismos orales.
✅ La duración de ~3 minutos favorece crisis focal sobre ausencia.

Referencias
• Adams and Victor's Principles of Neurology.
• Bradley's Neurology in Clinical Practice.
• ILAE Classification of Seizures.
• Harrison's Principles of Internal Medicine.`,
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
      "Cuando veas: paciente con ISRS que presenta llanto, ideación de muerte junto con agitación, verborrea e insomnio de varios días.",
      "Debes pensar en: trastorno bipolar en episodio mixto → suspender antidepresivo e iniciar estabilizador del ánimo y antipsicótico.",
      "El episodio mixto tiene uno de los mayores riesgos de suicidio en psiquiatría.",
      "Los ISRS pueden precipitar o desenmascarar manía o episodios mixtos.",
      "Tema: Trastorno bipolar.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de psiquiatría porque evalúa una trampa frecuente: interpretar síntomas depresivos en un paciente con antidepresivo sin buscar síntomas maniformes concurrentes.

La clave no es aumentar el antidepresivo ante llanto e ideación de muerte.
La clave es:
Síntomas depresivos + síntomas maniformes simultáneos en paciente con ISRS = episodio mixto bipolar → suspender antidepresivo e iniciar estabilizador del ánimo y antipsicótico.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 38 años con trastorno depresivo mayor en tratamiento con ISRS.
• Síntomas depresivos: llanto persistente, pensamientos negativos, ideación de muerte.
• Síntomas maniformes: agitación psicomotora, verborrea, insomnio de varios días.
• Cuadro compatible con episodio mixto del trastorno bipolar.

Recordemos trastorno bipolar y episodio mixto:
• El episodio mixto combina criterios de manía/hipomanía y depresión mayor simultáneamente.
• Los antidepresivos (ISRS) pueden precipitar manía, hipomanía o episodios mixtos en pacientes bipolares no diagnosticados.
• El episodio mixto tiene uno de los mayores riesgos de suicidio en psiquiatría.
• El manejo incluye suspender el antidepresivo e iniciar estabilizador del ánimo (litio, valproato) ± antipsicótico.
• El litio reduce el riesgo suicida en trastorno bipolar.

Por lo tanto:
El diagnóstico más probable es trastorno bipolar en episodio mixto y la conducta de urgencia es suspender antidepresivo e iniciar estabilizador del ánimo y antipsicótico (opción B).

¿Por qué la opción B es la respuesta correcta?
La coexistencia de síntomas depresivos y maniformes define el episodio mixto. Los ISRS deben suspenderse y el tratamiento requiere estabilización del ánimo.

¿Por qué fallan las otras opciones?
Opción A (episodio depresivo mayor; aumentar ISRS): ignoraría los síntomas maniformes y podría empeorar el cuadro; aumentar el antidepresivo es peligroso en episodio mixto.
Opción C (delirium; haloperidol IV): la paciente no tiene alteración del sensorio ni desorientación fluctuante típica de delirium.
Opción D (TAG; benzodiacepina y egreso): no explica la verborrea, agitación ni insomnio maniforme; subestima el riesgo suicida.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "depresión" e "ideación de muerte" y responden aumentar el antidepresivo.
Pero la agitación, verborrea e insomnio indican componente maniforme concurrente.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Buscar siempre síntomas maniformes en pacientes depresivos con antidepresivos.
2. Diagnosticar episodio mixto si coexisten ambos polos.
3. Suspender el antidepresivo de inmediato.
4. Iniciar estabilizador del ánimo ± antipsicótico.

Perlas de examen
✅ Episodio mixto = depresión + manía simultáneas.
✅ ISRS pueden precipitar manía o episodios mixtos en bipolar no diagnosticado.
✅ Nunca aumentar antidepresivo ante síntomas maniformes.
✅ El episodio mixto tiene alto riesgo de suicidio.
✅ El litio reduce el riesgo suicida en trastorno bipolar.

Referencias
• DSM-5-TR.
• Kaplan & Sadock's Synopsis of Psychiatry.
• American Psychiatric Association Guidelines.
• Stahl's Essential Psychopharmacology.`,
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
      "Cuando veas: debilidad ascendente progresiva y parálisis facial bilateral tras infección respiratoria, con paciente alerta y EMG inicial no concluyente.",
      "Debes pensar en: síndrome de Guillain-Barré → inmunoglobulina intravenosa como tratamiento de primera línea.",
      "Campylobacter jejuni es el desencadenante infeccioso clásico, aunque aquí fue infección respiratoria.",
      "La parálisis facial bilateral es frecuente en Guillain-Barré y ayuda a diferenciarlo de ictus.",
      "Tema: Neuropatías desmielinizantes.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa una trampa frecuente: descartar Guillain-Barré por una electromiografía inicial normal o confundirlo con patología del SNC.

La clave no es esperar confirmación electromiográfica para tratar.
La clave es:
Debilidad ascendente + arreflexia + antecedente infeccioso + parálisis facial bilateral = Guillain-Barré → IVIG o plasmaféresis de inmediato.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 35 años con dolor lumbar y parestesias progresivas en MMII.
• Infección respiratoria una semana antes del inicio.
• Debilidad ascendente y parálisis facial bilateral.
• Alerta, orientado, sin alteración de conciencia.
• EMG inicial sin hallazgos concluyentes (normal al inicio del curso).

Recordemos síndrome de Guillain-Barré:
• Polirradiculoneuropatía inflamatoria aguda autoinmune postinfecciosa.
• Cuadro clásico: debilidad ascendente simétrica, arreflexia, parestesias.
• Campylobacter jejuni e infecciones respiratorias son desencadenantes frecuentes.
• La parálisis facial bilateral ocurre en ~50% de los casos.
• La EMG puede ser normal en la primera semana; el diagnóstico es clínico.
• Tratamiento de primera línea: IVIG o plasmaféresis dentro de las 2-4 semanas.

Por lo tanto:
El tratamiento inicial más adecuado es inmunoglobulina intravenosa (opción B).

¿Por qué la opción B es la respuesta correcta?
Guillain-Barré requiere tratamiento inmunomodulador urgente. IVIG y plasmaféresis son equivalentes en eficacia como primera línea.

¿Por qué fallan las otras opciones?
Opción A (metilprednisolona IV): los corticoides no están indicados en Guillain-Barré clásico y pueden empeorar el pronóstico.
Opción C (interferón beta): es tratamiento de esclerosis múltiple, no de neuropatía aguda postinfecciosa.
Opción D (acetazolamida): se usa en canalopatías como parálisis periódica, no en polineuropatía inflamatoria aguda.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "EMG normal" y descartan Guillain-Barré.
Pero la EMG puede ser normal al inicio; el cuadro clínico manda.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar debilidad ascendente postinfecciosa con arreflexia.
2. Notar parálisis facial bilateral como pista de polineuropatía, no de ictus.
3. No retrasar tratamiento por EMG inicial normal.
4. Iniciar IVIG o plasmaféresis de inmediato.

Perlas de examen
✅ Guillain-Barré = debilidad ascendente + arreflexia postinfecciosa.
✅ EMG normal al inicio no excluye el diagnóstico.
✅ IVIG y plasmaféresis son tratamientos equivalentes de primera línea.
✅ Los corticoides NO están indicados en Guillain-Barré clásico.
✅ Parálisis facial bilateral sugiere neuropatía periférica, no ictus.

Referencias
• Adams and Victor's Principles of Neurology.
• Bradley's Neurology in Clinical Practice.
• Harrison's Principles of Internal Medicine.
• UpToDate: Guillain-Barré Syndrome in Adults.`,
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
      "Cuando veas: gestante de 13 semanas con PA 150/90 mmHg, sin proteinuria ni daño a órgano blanco, y antecedente de preeclampsia severa previa.",
      "Debes pensar en: hipertensión arterial crónica → antihipertensivo + ácido acetilsalicílico a baja dosis para profilaxis de preeclampsia.",
      "Hipertensión diagnosticada antes de las 20 semanas = hipertensión crónica, no preeclampsia.",
      "Antecedente de preeclampsia severa es indicación de aspirina profiláctica desde el primer trimestre.",
      "Tema: Trastornos hipertensivos del embarazo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de obstetricia porque evalúa una trampa frecuente: diagnosticar preeclampsia actual por el antecedente, ignorando el momento gestacional del diagnóstico hipertensivo.

La clave no es el antecedente de preeclampsia para el diagnóstico actual.
La clave es:
Hipertensión antes de las 20 semanas + sin proteinuria = hipertensión arterial crónica → antihipertensivo + aspirina profiláctica por alto riesgo de recurrencia.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Secundigestante de 13 semanas de gestación.
• Antecedente de preeclampsia severa en embarazo previo.
• PA 150/90 mmHg en dos mediciones separadas.
• Sin proteinuria ni datos de daño a órgano blanco.
• Hipertensión antes de las 20 semanas = hipertensión crónica.

Recordemos trastornos hipertensivos del embarazo:
• Hipertensión crónica: diagnóstico antes de las 20 semanas o preexistente al embarazo.
• Preeclampsia: hipertensión después de las 20 semanas + proteinuria o disfunción orgánica.
• Hipertensión gestacional: hipertensión después de las 20 semanas sin proteinuria.
• Antecedente de preeclampsia severa indica aspirina 100-150 mg/día desde ~12-16 semanas.
• El sulfato de magnesio es para preeclampsia con criterios de severidad o eclampsia, no profilaxis.

Por lo tanto:
El diagnóstico es hipertensión arterial crónica y el tratamiento incluye antihipertensivo y ácido acetilsalicílico a baja dosis (opción C).

¿Por qué la opción C es la respuesta correcta?
La hipertensión a las 13 semanas es crónica. El antecedente de preeclampsia severa obliga profilaxis con aspirina además del control tensional.

¿Por qué fallan las otras opciones?
Opción A (hipertensión gestacional; sulfato de magnesio): la hipertensión gestacional se diagnostica después de las 20 semanas; el sulfato no es tratamiento de hipertensión crónica.
Opción B (preeclampsia; finalizar gestación): no hay proteinuria ni criterios de preeclampsia; a las 13 semanas no corresponde interrupción.
Opción D (hipertensión transitoria; observación): la PA persistente en dos mediciones requiere tratamiento, no solo observación.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "antecedente de preeclampsia" y responden preeclampsia actual.
Pero el timing (<20 semanas) define hipertensión crónica.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Determinar el momento del diagnóstico hipertensivo (<20 vs ≥20 semanas).
2. Clasificar: crónica, gestacional o preeclampsia.
3. Iniciar antihipertensivo seguro en embarazo si está indicado.
4. Ofrecer aspirina profiláctica si hay factores de alto riesgo de preeclampsia.

Perlas de examen
✅ Hipertensión antes de las 20 semanas = hipertensión crónica.
✅ Preeclampsia se diagnostica después de las 20 semanas.
✅ Antecedente de preeclampsia severa → aspirina profiláctica.
✅ El sulfato de magnesio no trata hipertensión crónica sin severidad.
✅ La proteinuria ausente excluye preeclampsia en este momento.

Referencias
• ACOG Practice Bulletin: Chronic Hypertension in Pregnancy.
• ISSHP Guidelines for Hypertensive Disorders of Pregnancy.
• Williams Obstetrics.
• FIGO Recommendations on Preeclampsia Prevention.`,
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
      "Cuando veas: pregunta sobre contenido del conducto inguinal según sexo.",
      "Debes pensar en: hombre → cordón espermático; mujer → ligamento redondo del útero.",
      "El nervio ilioinguinal atraviesa el conducto inguinal en ambos sexos.",
      "Confundir los contenidos es la trampa clásica de anatomía en exámenes.",
      "Tema: Conducto inguinal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de anatomía porque evalúa una trampa frecuente: invertir los contenidos masculinos y femeninos del conducto inguinal.

La clave no es memorizar ambos contenidos por separado sin asociación.
La clave es:
Conducto inguinal: hombre = cordón espermático; mujer = ligamento redondo del útero (+ nervio ilioinguinal en ambos).

¿Qué está ocurriendo realmente?
La pregunta evalúa:
• Conocimiento anatómico del conducto inguinal.
• Diferencia de contenidos según sexo.
• Estructuras que atraviesan el canal inguinal interno y externo.
• Base para comprender hernias inguinales directas e indirectas.

Recordemos anatomía del conducto inguinal:
• El conducto inguinal comunica el abdomen con la región inguinal.
• En el hombre contiene el cordón espermático (ducto deferente, vasos testiculares, nervios).
• En la mujer contiene el ligamento redondo del útero.
• El nervio ilioinguinal atraviesa el conducto en ambos sexos.
• La arteria epigástrica inferior forma el triángulo de Hesselbach (hernias directas).

Por lo tanto:
La respuesta correcta es hombre: cordón espermático / mujer: ligamento redondo del útero (opción B).

¿Por qué la opción B es la respuesta correcta?
Corresponde exactamente a la anatomía clásica del conducto inguinal según sexo.

¿Por qué fallan las otras opciones?
Opción A (invertida): intercambia los contenidos masculinos y femeninos; error clásico de examen.
Opción C (arteria epigástrica inferior / vena safena magna): la arteria epigástrica inferior bordea el conducto pero no lo atraviesa; la safena magna no pasa por el conducto inguinal.
Opción D (nervio femoral / nervio obturador): estos nervios no atraviesan el conducto inguinal; el femoral pasa por el canal femoral.

¿Cuál es la trampa del examen?
Muchos estudiantes invierten los contenidos masculinos y femeninos.
Debes recordar: hombre = cordón espermático.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar el conducto inguinal como vía de salida abdominal.
2. Hombre: cordón espermático.
3. Mujer: ligamento redondo del útero.
4. Ambos: nervio ilioinguinal.

Perlas de examen
✅ Hombre = cordón espermático; mujer = ligamento redondo.
✅ El nervio ilioinguinal atraviesa el conducto en ambos sexos.
✅ La arteria epigástrica inferior NO atraviesa el conducto.
✅ Base anatómica para hernias inguinales indirectas (por conducto) y directas.
✅ Invertir los contenidos es el error más frecuente.

Referencias
• Moore. Anatomía con Orientación Clínica.
• Gray's Anatomy.
• Netter Atlas de Anatomía Humana.
• Schwartz's Principles of Surgery.`,
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
      "Cuando veas: adenopatía supraclavicular izquierda dura, fija e indolora (ganglio de Virchow).",
      "Debes pensar en: adenocarcinoma gástrico avanzado con diseminación linfática.",
      "El ganglio de Virchow también se denomina nódulo de Troisier.",
      "La localización izquierda refleja drenaje linfático abdominal vía conducto torácico.",
      "Tema: Semiología oncológica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de semiología oncológica porque evalúa una trampa frecuente: asociar cualquier ganglio supraclavicular con cáncer de pulmón.

La clave no es la localización supraclavicular en general.
La clave es:
Adenopatía supraclavicular izquierda dura, fija e indolora = ganglio de Virchow → adenocarcinoma gástrico avanzado.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Adenopatía supraclavicular izquierda en examen físico.
• Características: dura, fija e indolora.
• Compatible con ganglio de Virchow (nódulo de Troisier).
• Sugiere metástasis linfática de tumor abdominal.

Recordemos ganglio de Virchow:
• Adenopatía supraclavicular izquierda por diseminación linfática retrograda.
• El conducto torácico drena el abdomen hacia la cadena linfática supraclavicular izquierda.
• Clásicamente asociado a adenocarcinoma gástrico avanzado.
• También puede verse en cáncer de páncreas, ovario u otros tumores abdominales.
• La adenopatía supraclavicular derecha se asocia más a tumores torácicos (pulmón, esófago).

Por lo tanto:
La patología clásicamente asociada es adenocarcinoma gástrico (opción C).

¿Por qué la opción C es la respuesta correcta?
El ganglio de Virchow es el signo semiológico clásico de metástasis linfática de cáncer gástrico avanzado.

¿Por qué fallan las otras opciones?
Opción A (cáncer de pulmón): las metástasis supraclavicular de cáncer pulmonar suelen ser derechas; el Virchow es izquierdo.
Opción B (linfoma de Hodgkin): puede causar adenopatías pero no es la asociación clásica del ganglio de Virchow.
Opción D (carcinoma de tiroides): las metástasis cervicales suelen ser centrales/laterales del cuello, no el patrón clásico de Virchow.

¿Cuál es la trampa del examen?
Muchos estudiantes responden cáncer pulmonar porque asocian ganglio supraclavicular con patología torácica.
Pero el ganglio de Virchow es izquierdo y refleja drenaje abdominal.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar adenopatía supraclavicular izquierda dura, fija e indolora.
2. Nombrar ganglio de Virchow o nódulo de Troisier.
3. Pensar en tumor abdominal, especialmente gástrico.
4. Complementar con endoscopia y estudios de imagen abdominal.

Perlas de examen
✅ Ganglio de Virchow = supraclavicular izquierdo = cáncer gástrico clásico.
✅ También llamado nódulo de Troisier.
✅ Supraclavicular derecho → más asociado a cáncer pulmonar.
✅ Metástasis por vía linfática vía conducto torácico.
✅ Hallazgo de mal pronóstico que sugiere enfermedad avanzada.

Referencias
• Bates' Guide to Physical Examination.
• DeGowin's Diagnostic Examination.
• Schwartz's Principles of Surgery.
• Sabiston Textbook of Surgery.`,
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
      "Cuando veas: pregunta sobre estructura embrionaria que origina la placenta e interviene en preeclampsia.",
      "Debes pensar en: trofoblasto → invasión inadecuada del trofoblasto extravelloso como mecanismo de preeclampsia.",
      "El citotrofoblasto y sincitiotrofoblasto derivan del trofoblasto.",
      "La invasión trofoblástica de arterias espirales uterinas es esencial para perfusión placentaria normal.",
      "Tema: Embriología placentaria.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de embriología porque evalúa una trampa frecuente: responder sincitiotrofoblasto cuando la pregunta pide la estructura embrionaria principal.

La clave no es confundir subtipos celulares con la estructura embrionaria madre.
La clave es:
Trofoblasto = estructura embrionaria que origina la placenta y cuya invasión deficiente causa preeclampsia.

¿Qué está ocurriendo realmente?
La pregunta evalúa:
• Conocimiento de estructuras embrionarias extraembrionarias.
• Origen de la porción fetal de la placenta.
• Mecanismo fisiopatológico de la preeclampsia.
• Diferencia entre trofoblasto, amnios, saco vitelino y alantoides.

Recordemos embriología placentaria:
• El trofoblasto es la capa externa del blastocisto que forma la placenta.
• Deriva en citotrofoblasto y sincitiotrofoblasto.
• El trofoblasto extravelloso invade el endometrio y remodela arterias espirales uterinas.
• La invasión trofoblástica inadecuada → isquemia placentaria → preeclampsia.
• El amnios forma la cavidad amniótica; el saco vitelino aporta nutrientes tempranos; el alantoides forma parte del cordón umbilical.

Por lo tanto:
La estructura correcta es el trofoblasto (opción B).

¿Por qué la opción B es la respuesta correcta?
El trofoblasto es la estructura embrionaria que origina la placenta y cuya disfunción invasiva explica la preeclampsia.

¿Por qué fallan las otras opciones?
Opción A (amnios): membrana que rodea al embrión y forma la cavidad amniótica, no la placenta.
Opción C (saco vitelino): estructura temprana de nutrición y hematopoyesis primitiva, no origina la placenta.
Opción D (alantoides): contribuye al cordón umbilical y vasos alantoideos, no es la estructura principal placentaria.

¿Cuál es la trampa del examen?
Muchos estudiantes responden sincitiotrofoblasto porque conocen su rol placentario.
Pero la pregunta solicita la estructura embrionaria principal: trofoblasto.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar el trofoblasto como origen de la placenta.
2. Recordar sus derivados: citotrofoblasto y sincitiotrofoblasto.
3. Comprender la invasión trofoblástica de arterias espirales.
4. Relacionar invasión deficiente con preeclampsia.

Perlas de examen
✅ Trofoblasto = estructura embrionaria que origina la placenta.
✅ Invasión trofoblástica deficiente → preeclampsia.
✅ Citotrofoblasto y sincitiotrofoblasto derivan del trofoblasto.
✅ El amnios forma la cavidad amniótica, no la placenta.
✅ Remodelación de arterias espirales es clave para perfusión placentaria.

Referencias
• Langman's Embryology.
• Moore. The Developing Human.
• Williams Obstetrics.
• Cunningham Obstetricia.`,
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
      "Cuando veas: visión doble que empeora al mirar a la izquierda, limitación de abducción del ojo izquierdo y pregunta sobre pares craneales de motilidad ocular.",
      "Debes pensar en: par craneal IV (troclear) como tercer nervio de motilidad ocular extrínseca junto con III y VI.",
      "El nervio troclear inerva exclusivamente el músculo oblicuo superior.",
      "El abducens (VI) inerva el recto lateral; la limitación de abducción sugiere su afectación.",
      "Tema: Pares craneales.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neuroanatomía porque evalúa una trampa frecuente: recordar solo los pares III y VI e olvidar el IV en la motilidad ocular extrínseca.

La clave no es detenerse en el caso clínico del abducens.
La clave es:
Motilidad ocular extrínseca = tres pares craneales: III (oculomotor), IV (troclear) y VI (abducens).

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 30 años con visión doble al mirar a la izquierda.
• Limitación de abducción del ojo izquierdo (afectación de VI).
• Reflejos pupilares normales.
• La pregunta evalúa el tercer par de motilidad ocular más allá de III y VI.

Recordemos pares craneales de motilidad ocular:
• III (oculomotor): inerva recto superior, inferior, medial, oblicuo inferior y músculo elevador del párpado; parasimpático pupilar.
• IV (troclear): inerva exclusivamente el oblicuo superior.
• VI (abducens): inerva el recto lateral (abducción).
• El II (óptico) es sensitivo visual, no motor ocular extrínseco.
• El troclear es el único par que emerge por la cara dorsal del tronco encefálico.

Por lo tanto:
El tercer par craneal de motilidad ocular es el IV (troclear) (opción B).

¿Por qué la opción B es la respuesta correcta?
La motilidad ocular extrínseca depende de III, IV y VI. El troclear inerva el oblicuo superior.

¿Por qué fallan las otras opciones?
Opción A (par II óptico): nervio sensitivo visual; no participa en motilidad ocular extrínseca.
Opción C (par V trigémino): sensitivo facial y motor de masticación; no inerva músculos extraoculares.
Opción D (par VII facial): expresión facial y gusto; no motilidad ocular.

¿Cuál es la trampa del examen?
Muchos estudiantes recuerdan únicamente III y VI.
Pero olvidan el IV par craneal (troclear) en la motilidad ocular.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Motilidad ocular extrínseca = III, IV y VI.
2. III: mayoría de músculos extraoculares + pupila.
3. IV: oblicuo superior exclusivamente.
4. VI: recto lateral (abducción).

Perlas de examen
✅ Motilidad ocular = pares III, IV y VI.
✅ Troclear (IV) inerva solo oblicuo superior.
✅ Abducens (VI) inerva recto lateral.
✅ El II es óptico (visión), no motor ocular.
✅ Troclear emerge por cara dorsal del tronco encefálico.

Referencias
• Snell Neuroanatomía Clínica.
• Moore Anatomía con Orientación Clínica.
• Adams and Victor's Neurology.
• Gray's Anatomy.`,
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
      "Cuando veas: síncope pocos días después de iniciar antihipertensivo, con PA relativamente normal pero FC 42 lpm.",
      "Debes pensar en: betabloqueador (metoprolol) como causa de bradicardia sintomática.",
      "Metoprolol es un betabloqueador β1-selectivo que reduce la frecuencia cardíaca.",
      "La bradicardia sintomática puede manifestarse con síncope por disminución del gasto cardíaco.",
      "Tema: Antihipertensivos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina interna porque evalúa una trampa frecuente: buscar hipotensión como causa de síncope e ignorar la bradicardia medicamentosa.

La clave no es la presión arterial en urgencias.
La clave es:
Síncope + bradicardia (FC 42 lpm) tras iniciar antihipertensivo = betabloqueador (metoprolol).

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 62 años con hipertensión recién diagnosticada.
• Inicio de tratamiento antihipertensivo hace pocos días.
• Episodio de síncope al caminar.
• PA 140/90 mmHg (no hipotensión marcada).
• FC 42 lpm (bradicardia significativa).
• Sin alteraciones neurológicas.

Recordemos betabloqueadores como antihipertensivos:
• Bloquean receptores β1 cardíacos → disminuyen FC y contractilidad.
• Metoprolol es β1-selectivo; atenolol, bisoprolol similares.
• La bradicardia sintomática es efecto adverso frecuente, especialmente en ancianos.
• Puede causar síncope por reducción del gasto cardíaco a pesar de PA aceptable.
• Amlodipino causa edema; tiazidas causan hiponatremia/hypokalemia; losartán causa hiperkalemia raramente síncope.

Por lo tanto:
El medicamento más probable es metoprolol (opción C).

¿Por qué la opción C es la respuesta correcta?
Los betabloqueadores causan bradicardia al bloquear β1. FC 42 lpm con síncope es el patrón clásico de toxicidad por betabloqueador.

¿Por qué fallan las otras opciones?
Opción A (amlodipino): bloqueador de canales de calcio; causa edema y reflujo, no bradicardia significativa.
Opción B (hidroclorotiazida): diurético tiazídico; puede causar hipovolemia pero no bradicardia a 42 lpm.
Opción D (losartán): ARA-II; raramente causa síncope; no explica bradicardia.

¿Cuál es la trampa del examen?
Muchos estudiantes buscan hipotensión como causa del síncope.
Pero la PA es 140/90; la bradicardia a 42 lpm es la pista clave.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Antihipertensivo nuevo + síncope → identificar efecto adverso del fármaco.
2. Evaluar FC: bradicardia sugiere betabloqueador.
3. No descartar betabloqueador si la PA no está muy baja.
4. Considerar reducción de dosis o cambio de fármaco.

Perlas de examen
✅ Betabloqueador + bradicardia + síncope = patrón clásico de examen.
✅ Metoprolol es β1-selectivo.
✅ La PA puede estar relativamente normal con bradicardia sintomática.
✅ Amlodipino no causa bradicardia significativa.
✅ Siempre correlacionar fármaco iniciado con efecto adverso esperado.

Referencias
• Katzung. Basic and Clinical Pharmacology.
• Goodman & Gilman's The Pharmacological Basis of Therapeutics.
• Braunwald's Heart Disease.
• Harrison's Principles of Internal Medicine.`,
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
      "Cuando veas: niña con fiebre, vómitos, rigidez de nuca y aparición súbita de petequias y equimosis.",
      "Debes pensar en: meningococcemia con meningitis → Neisseria meningitidis.",
      "Petequias + meningismo = meningococo hasta demostrar lo contrario.",
      "Neisseria meningitidis es un diplococo gramnegativo que puede evolucionar rápidamente a shock séptico.",
      "Tema: Meningitis bacteriana.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de infectología pediátrica porque evalúa una trampa frecuente: diagnosticar meningitis neumocócica solo por rigidez de nuca, ignorando el exantema petequial.

La clave no es el meningismo aislado.
La clave es:
Fiebre + rigidez de nuca + petequias/equimosis súbitas = meningococcemia invasiva hasta demostrar lo contrario.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Niña de 10 años previamente sana, vacunación completa.
• Fiebre, vómitos y aparición súbita de petequias y equimosis.
• Rigidez de nuca (síndrome meníngeo).
• Taquicardia.
• Cuadro altamente sugestivo de enfermedad meningocócica invasiva.

Recordemos meningococcemia y meningitis meningocócica:
• Neisseria meningitidis: diplococo gramnegativo.
• La tríada fiebre + meningismo + exantema petequial/purpúrico es patognomónica.
• Puede progresar rápidamente a shock séptico y coagulación intravascular diseminada.
• Requiere antibióticos empíricos de inmediato (cefalosporina de tercera generación ± vancomicina).
• El neumococo causa meningitis pero raramente exantema petequial súbito.
• La PTI no causa fiebre ni meningismo.

Por lo tanto:
La sospecha es meningococcemia con meningitis por Neisseria meningitidis (opción B).

¿Por qué la opción B es la respuesta correcta?
La combinación de síndrome meníngeo con exantema petequial súbito es clásica de meningococo.

¿Por qué fallan las otras opciones?
Opción A (meningitis neumocócica): el neumococo causa meningitis pero no el patrón clásico de petequias súbitas con meningococcemia.
Opción C (encefalitis por VHS-1): alteración de conciencia y focalidad neurológica predominan; no exantema petequial típico.
Opción D (PTI por EBV): trombocitopenia aislada sin meningismo ni fiebre con rigidez de nuca.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "rigidez de nuca" y responden neumococo.
Pero las petequias súbitas apuntan al meningococo.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Fiebre + meningismo → pensar meningitis bacteriana.
2. Si hay petequias/equimosis súbitas → meningococo hasta demostrar lo contrario.
3. Iniciar antibióticos empíricos de inmediato.
4. Aislamiento y profilaxis de contactos si se confirma.

Perlas de examen
✅ Petequias + meningismo = meningococo hasta demostrar lo contrario.
✅ Neisseria meningitidis = diplococo gramnegativo.
✅ Puede evolucionar a shock séptico en horas.
✅ El neumococo rara vez causa exantema petequial súbito.
✅ Emergencia infectológica que no admite demora.

Referencias
• Nelson Textbook of Pediatrics.
• Red Book: American Academy of Pediatrics.
• Mandell, Douglas and Bennett's Infectious Diseases.
• Harrison's Principles of Internal Medicine.`,
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
      "Cuando veas: ruptura del tendón de Aquiles con uso reciente de antibiótico en adulto mayor.",
      "Debes pensar en: fluoroquinolona (ciprofloxacina) → tendinopatía y ruptura tendinosa.",
      "Ciprofloxacina es la asociación clásica en exámenes de medicina.",
      "El tendón de Aquiles es el más frecuentemente afectado; el riesgo aumenta con edad, IRC y corticoides.",
      "Tema: Reacciones adversas medicamentosas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de farmacología porque evalúa una trampa frecuente: no asociar antibióticos con reacciones adversas musculoesqueléticas específicas.

La clave no es cualquier antibiótico reciente.
La clave es:
Ruptura de tendón de Aquiles + antibiótico reciente = fluoroquinolona (ciprofloxacina).

¿Qué está ocurriendo realmente?
El paciente presenta:
• Varón de 55 años con dolor súbito en región posterior del tobillo al caminar.
• Ruptura confirmada del tendón de Aquiles.
• Uso reciente de antibiótico identificado en antecedentes.
• Cuadro compatible con tendinopatía medicamentosa por fluoroquinolona.

Recordemos reacciones adversas de fluoroquinolonas:
• Las fluoroquinolonas (ciprofloxacina, levofloxacina, moxifloxacina) causan tendinitis y ruptura tendinosa.
• El tendón de Aquiles es el más frecuentemente afectado.
• Factores de riesgo: edad >60 años, insuficiencia renal, uso concomitante de corticoides.
• La FDA ha emitido advertencias de caja negra sobre este riesgo.
• Amoxicilina, azitromicina y cefalexina no causan tendinopatía.

Por lo tanto:
El antibiótico asociado clásicamente es ciprofloxacina (opción C).

¿Por qué la opción C es la respuesta correcta?
Las fluoroquinolonas tienen asociación bien documentada con ruptura del tendón de Aquiles.

¿Por qué fallan las otras opciones?
Opción A (amoxicilina): penicilina de amplio espectro; no causa tendinopatía.
Opción B (azitromicina): macrólido; no asociado a ruptura tendinosa.
Opción D (cefalexina): cefalosporina de primera generación; no causa tendinopatía.

¿Cuál es la trampa del examen?
Muchos estudiantes recuerdan "antibiótico" pero olvidan la reacción adversa específica.
Deben asociar fluoroquinolona con tendón de Aquiles.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Ruptura tendinosa + fármaco reciente → revisar medicamentos.
2. Asociar fluoroquinolona con tendón de Aquiles.
3. Identificar factores de riesgo adicionales (edad, corticoides, IRC).
4. Evitar fluoroquinolonas en pacientes con riesgo de tendinopatía.

Perlas de examen
✅ Fluoroquinolona + ruptura de Aquiles = asociación clásica de examen.
✅ Ciprofloxacina es el ejemplo más frecuente en preguntas.
✅ Riesgo mayor en ancianos, IRC y uso de corticoides.
✅ Advertencia de caja negra de la FDA.
✅ Penicilinas, macrólidos y cefalosporinas no causan tendinopatía.

Referencias
• Katzung. Basic and Clinical Pharmacology.
• Goodman & Gilman's The Pharmacological Basis of Therapeutics.
• Harrison's Principles of Internal Medicine.
• FDA Safety Communication on Fluoroquinolones.`,
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
      "Cuando veas: masa escrotal indolora progresiva que aumenta con Valsalva y bipedestación, con transiluminación negativa.",
      "Debes pensar en: varicocele → dilatación del plexo venoso pampiniforme.",
      "El varicocele es la causa corrigible más frecuente de infertilidad masculina.",
      "Transiluminación negativa diferencia de hidrocele (positiva); Valsalva positivo diferencia de tumor sólido.",
      "Tema: Patología escrotal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de urología porque evalúa una trampa frecuente: diagnosticar hidrocele ante cualquier masa escrotal indolora.

La clave no es la masa escrotal indolora sola.
La clave es:
Masa escrotal que aumenta con Valsalva/bipedestación + transiluminación negativa = varicocele.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Varón de 25 años, albañil (trabajo con esfuerzo físico y bipedestación).
• Masa escrotal indolora progresiva de varios meses.
• Aumenta de tamaño al estar de pie y con esfuerzo.
• Test de Valsalva positivo.
• Transiluminación negativa.
• Cuadro clásico de varicocele.

Recordemos patología escrotal:
• Varicocele: dilatación del plexo venoso pampiniforme; "bolsa de gusanos".
• Aumenta con Valsalva y bipedestación (mayor presión venosa).
• Transiluminación negativa (contenido vascular, no líquido).
• Más frecuente en lado izquierdo (~90%).
• Causa corregible más frecuente de infertilidad masculina.
• Hidrocele: transiluminación positiva; no cambia con Valsalva.
• Hernia inguinoescrotal: se reduce o impulsa por conducto inguinal.

Por lo tanto:
El diagnóstico más probable es varicocele (opción C).

¿Por qué la opción C es la respuesta correcta?
El patrón clínico (indoloro, aumenta con Valsalva, transiluminación negativa) es clásico de varicocele.

¿Por qué fallan las otras opciones?
Opción A (hidrocele): transiluminación positiva; colección de líquido seroso.
Opción B (hernia inguinoescrotal): masa que impulsa por conducto inguinal; no es patrón venoso pampiniforme.
Opción D (espermatocele): quiste paratesticular; transiluminación positiva; no aumenta típicamente con Valsalva.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "masa escrotal" y responden hidrocele.
Pero la transiluminación negativa y el Valsalva positivo apuntan a varicocele.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Caracterizar masa escrotal: dolor, transiluminación, Valsalva.
2. Transiluminación negativa + Valsalva positivo = varicocele.
3. Considerar infertilidad en varones jóvenes con varicocele.
4. Tratamiento quirúrgico si infertilidad o dolor.

Perlas de examen
✅ Varicocele = Valsalva positivo + transiluminación negativa.
✅ Hidrocele = transiluminación positiva.
✅ Causa corregible más frecuente de infertilidad masculina.
✅ Más frecuente en lado izquierdo.
✅ Común en varones jóvenes con trabajo de pie.

Referencias
• Campbell-Walsh Urology.
• Smith & Tanagho's General Urology.
• Nelson Textbook of Pediatrics.
• EAU Guidelines on Male Infertility.`,
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
      "Cuando veas: hemorragia mayor por trauma en paciente anticoagulado con warfarina (INR 3.2).",
      "Debes pensar en: reversión urgente con PCC de 4 factores + vitamina K IV.",
      "PCC de 4 factores es el método de reversión más rápido para warfarina.",
      "La vitamina K sola tarda horas en corregir el INR; no es suficiente en hemorragia activa.",
      "Tema: Anticoagulación y reversión.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de urgencias porque evalúa una trampa frecuente: usar vitamina K sola o suspender warfarina ante hemorragia mayor activa.

La clave no es el valor del INR ni suspender la warfarina.
La clave es:
Hemorragia mayor + warfarina = PCC de 4 factores + vitamina K IV para reversión inmediata.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 45 años con fibrilación auricular en warfarina crónica.
• Herida por arma de fuego en brazo con sangrado activo importante.
• Hemodinámicamente estable pero con hemorragia significativa.
• INR 3.2 (anticoagulación terapéutica).
• Requiere reversión rápida de anticoagulación.

Recordemos reversión de warfarina:
• Hemorragia mayor o trauma significativo requiere reversión inmediata.
• PCC de 4 factores (concentrado de complejo protrombínico): reversión en minutos.
• Vitamina K IV debe administrarse junto al PCC para reversión sostenida.
• Vitamina K sola tarda 12-24 horas en corregir INR; insuficiente en sangrado activo.
• Plasma fresco congelado es alternativa si no hay PCC, pero es más lento y voluminoso.
• Suspender warfarina sin reversión activa no corrige el INR de inmediato.

Por lo tanto:
La intervención más efectiva es PCC de 4 factores + vitamina K IV (opción D).

¿Por qué la opción D es la respuesta correcta?
El PCC restaura factores de coagulación de inmediato; la vitamina K IV asegura reversión sostenida al sintetizar nuevos factores.

¿Por qué fallan las otras opciones?
Opción A (vitamina K IV sola): demora horas en corregir INR; inadecuada para sangrado activo.
Opción B (suspender warfarina y repetir INR): no revierte la anticoagulación de inmediato; el INR permanece elevado días.
Opción C (plasma fresco congelado): alternativa válida pero más lenta, requiere mayor volumen y tiene riesgo de sobrecarga; PCC es preferido.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "INR 3.2" y responden vitamina K.
Pero en hemorragia mayor activa se necesita reversión inmediata con PCC.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar hemorragia mayor en paciente anticoagulado con warfarina.
2. Administrar PCC de 4 factores de inmediato.
3. Asociar siempre vitamina K IV para reversión sostenida.
4. Reservar PFC como alternativa si no hay PCC disponible.

Perlas de examen
✅ Hemorragia mayor + warfarina = PCC + vitamina K IV.
✅ Vitamina K sola tarda horas; no sirve en sangrado activo.
✅ PCC revierte en minutos.
✅ PFC es alternativa, no primera opción.
✅ Suspender warfarina no revierte el INR de inmediato.

Referencias
• Harrison's Principles of Internal Medicine.
• Tintinalli's Emergency Medicine.
• ACC Expert Consensus on Management of Bleeding in Patients on Oral Anticoagulants.
• CHEST Guidelines on Antithrombotic Therapy.`,
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
      "Cuando veas: petequias y equimosis espontáneas con plaquetas 20.000/μL y resto del hemograma normal sin hemólisis.",
      "Debes pensar en: púrpura trombocitopénica inmune (PTI) → corticoides como tratamiento inicial.",
      "PTI = trombocitopenia aislada con hemoglobina y leucocitos normales.",
      "Los corticoides son primera línea en pacientes sintomáticos o plaquetas <30.000/μL.",
      "Tema: Trastornos plaquetarios.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hematología porque evalúa una trampa frecuente: transfundir plaquetas o sospechar leucemia ante trombocitopenia aislada.

La clave no es la cifra de plaquetas sola.
La clave es:
Trombocitopenia aislada + hemograma normal + sin hemólisis = PTI → corticoides.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 23 años sin antecedentes relevantes.
• Petequias y equimosis espontáneas progresivas.
• Plaquetas 20.000/μL.
• Hemoglobina y leucocitos normales.
• Frotis sin hemólisis ni alteraciones en otras líneas.
• Cuadro clásico de PTI.

Recordemos púrpura trombocitopénica inmune:
• Enfermedad autoinmune con destrucción plaquetaria periférica.
• Trombocitopenia aislada: Hb y leucocitos normales.
• Frecuente en mujeres jóvenes; puede ser postinfecciosa.
• Tratamiento inicial: corticoides (prednisona) si sintomática o plaquetas <30.000/μL.
• La transfusión de plaquetas no es tratamiento de primera línea (se destruyen rápidamente).
• La TTP es diferente: anemia hemolítica microangiopática + fiebre + alteración neurológica.
• Leucemia aguda: alteración de múltiples líneas celulares y blastos.

Por lo tanto:
El diagnóstico es PTI y la conducta inicial es iniciar corticoides (opción C).

¿Por qué la opción C es la respuesta correcta?
La trombocitopenia aislada sin otras alteraciones hematológicas es clásica de PTI; los corticoides son tratamiento de primera línea.

¿Por qué fallan las otras opciones?
Opción A (PTT; plasmaféresis): requiere tríada de anemia hemolítica microangiopática, trombocitopenia y alteración neurológica/renal; no aplica aquí.
Opción B (leucemia aguda; aspirado): habría citopenias múltiples o blastos en frotis.
Opción D (CID; transfusión masiva): requiere consumo de factores de coagulación y alteración de TP/TTP; no es trombocitopenia aislada.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "plaquetas 20.000" y responden transfusión de plaquetas.
Pero en PTI el tratamiento es inmunosupresor (corticoides), no transfusión rutinaria.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar trombocitopenia aislada (Hb y leucocitos normales).
2. Descartar PTT, CID y leucemia por clínica y frotis.
3. Diagnosticar PTI si no hay otra causa.
4. Iniciar corticoides si sintomática o plaquetas <30.000/μL.

Perlas de examen
✅ PTI = trombocitopenia aislada + hemograma normal.
✅ Corticoides son tratamiento inicial de primera línea.
✅ No transfundir plaquetas rutinariamente en PTI.
✅ PTT tiene anemia hemolítica microangiopática y alteración neurológica.
✅ Mujer joven + petequias = pensar PTI.

Referencias
• Williams Hematology.
• Hoffbrand's Essential Haematology.
• Harrison's Principles of Internal Medicine.
• ASH Guidelines for Immune Thrombocytopenia.`,
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
      "Cuando veas: síndrome nefrótico por nefropatía membranosa con albúmina 2.2 g/dL.",
      "Debes pensar en: trombosis venosa profunda o trombosis de vena renal como complicación más probable.",
      "La nefropatía membranosa es la glomerulopatía con mayor riesgo trombótico.",
      "La hipoalbuminemia (<2.5 g/dL) y pérdida de anticoagulantes naturales generan hipercoagulabilidad.",
      "Tema: Complicaciones del síndrome nefrótico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de nefrología porque evalúa una trampa frecuente: recordar infecciones como complicación del síndrome nefrótico e ignorar el riesgo trombótico, especialmente en nefropatía membranosa.

La clave no es pensar solo en infecciones.
La clave es:
Nefropatía membranosa + hipoalbuminemia severa = alto riesgo de trombosis (DVT, trombosis de vena renal).

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 55 años con síndrome nefrótico secundario a nefropatía membranosa.
• Albúmina sérica 2.2 g/dL (hipoalbuminemia severa).
• Sin antecedentes de eventos trombóticos previos.
• En riesgo elevado de complicaciones tromboembólicas.

Recordemos complicaciones del síndrome nefrótico:
• Infecciones: por pérdida de inmunoglobulinas (IgG).
• Trombosis: por pérdida de antitrombina III, proteínas C y S + hipercoagulabilidad.
• La nefropatía membranosa tiene el mayor riesgo trombótico entre glomerulopatías.
• Trombosis de vena renal es asociación clásica de examen.
• Albúmina <2.5 g/dL incrementa significativamente el riesgo.
• También: edema, dislipidemia, insuficiencia renal progresiva.

Por lo tanto:
La complicación más probable es trombosis venosa profunda o trombosis de vena renal (opción B).

¿Por qué la opción B es la respuesta correcta?
La nefropatía membranosa con hipoalbuminemia severa genera estado de hipercoagulabilidad con riesgo trombótico superior a otras complicaciones en este contexto.

¿Por qué fallan las otras opciones?
Opción A (hemorragia intracraneal): el síndrome nefrótico causa hipercoagulabilidad, no sangrado espontáneo.
Opción C (endocarditis infecciosa): aunque hay riesgo infeccioso, la trombosis es más característica de nefropatía membranosa con hipoalbuminemia severa.
Opción D (crisis hipercalcémica): no es complicación típica del síndrome nefrótico.

¿Cuál es la trampa del examen?
Muchos estudiantes recuerdan "síndrome nefrótico = infecciones".
Lo cual es cierto, pero la nefropatía membranosa destaca por riesgo trombótico.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar síndrome nefrótico y su etiología (membranosa = alto riesgo trombótico).
2. Evaluar grado de hipoalbuminemia (<2.5 g/dL = mayor riesgo).
3. Considerar profilaxis anticoagulante en casos seleccionados.
4. Vigilar signos de trombosis (DVT, dolor lumbar/flanco por trombosis renal).

Perlas de examen
✅ Nefropatía membranosa = glomerulopatía con mayor riesgo trombótico.
✅ Trombosis de vena renal = asociación clásica de examen.
✅ Albúmina <2.5 g/dL aumenta riesgo de trombosis.
✅ Pérdida urinaria de antitrombina III, proteínas C y S → hipercoagulabilidad.
✅ Infecciones son complicación frecuente, pero la trombosis es la respuesta aquí.

Referencias
• Brenner & Rector's The Kidney.
• KDIGO Glomerular Disease Guidelines.
• Harrison's Principles of Internal Medicine.
• UpToDate: Hypercoagulability in Nephrotic Syndrome.`,
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
      "Cuando veas: dolor pélvico súbito durante ejercicio intenso, náuseas y masa anexial con signo de remolino (whirlpool sign).",
      "Debes pensar en: torsión ovárica → laparoscopia urgente con destorsión ovárica.",
      "El signo de whirlpool en ecografía es altamente sugestivo de torsión anexial.",
      "Es una urgencia ginecológica: el compromiso vascular progresa de venoso a arterial.",
      "Tema: Abdomen agudo ginecológico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ginecología porque evalúa una trampa frecuente: diagnosticar quiste ovárico hemorrágico ante cualquier masa anexial con dolor.

La clave no es la masa anexial sola.
La clave es:
Dolor súbito + masa anexial + signo de remolino (whirlpool) = torsión ovárica → cirugía urgente.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 34 años con dolor pélvico de inicio súbito durante actividad física intensa.
• Náuseas asociadas.
• Ecografía transvaginal: masa anexial izquierda con signo de "remolino".
• Cuadro compatible con torsión ovárica, urgencia ginecológica.

Recordemos torsión ovárica:
• Rotación del ovario (y/o trompa) sobre su pedículo vascular.
• Compromiso inicial del drenaje venoso → edema → compromiso arterial.
• Dolor súbito e intenso; náuseas y vómitos frecuentes.
• Signo ecográfico de "whirlpool" (remolino): altamente sugestivo.
• Manejo: laparoscopia urgente con destorsión; ooforectomía si necrosis.
• Factores de riesgo: masas anexiales, ovarios aumentados, actividad física.

Por lo tanto:
El diagnóstico es torsión ovárica y el manejo es laparoscopia urgente con destorsión (opción C).

¿Por qué la opción C es la respuesta correcta?
El signo de remolino es altamente específico de torsión anexial; requiere intervención quirúrgica urgente para preservar el ovario.

¿Por qué fallan las otras opciones?
Opción A (embarazo ectópico; metotrexato): no hay datos de embarazo; el signo de whirlpool apunta a torsión, no a gestación ectópica.
Opción B (quiste hemorrágico; observación): el signo de remolino no es típico de quiste hemorrágico; la torsión requiere cirugía urgente.
Opción D (EIP; antibióticos IV): no hay fiebre, leucocitosis ni hallazgos inflamatorios; el cuadro es vascular-quirúrgico.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "masa anexial" y responden quiste ovárico.
Pero el signo de whirlpool es patognomónico de torsión.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Dolor pélvico súbito + masa anexial → pensar torsión.
2. Buscar signo de whirlpool en ecografía.
3. Laparoscopia urgente, no observación.
4. Destorsión para preservar función ovárica si no hay necrosis.

Perlas de examen
✅ Whirlpool sign = torsión ovárica hasta demostrar lo contrario.
✅ Urgencia ginecológica que requiere cirugía, no manejo médico.
✅ El compromiso vascular progresa rápidamente.
✅ Dolor súbito durante ejercicio es presentación clásica.
✅ No confundir con quiste hemorrágico (manejo conservador).

Referencias
• Williams Gynecology.
• Berek & Novak's Gynecology.
• ACOG Committee Opinion on Adnexal Torsion.
• UpToDate: Ovarian and Fallopian Tube Torsion.`,
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
      "Cuando veas: fiebre y mama eritematosa, tumefacta y dolorosa al 8.º día postparto, sin fluctuación, con lactancia exclusiva.",
      "Debes pensar en: mastitis puerperal → dicloxacilina o cefalexina y continuar lactancia.",
      "Staphylococcus aureus es el agente causal más frecuente.",
      "La lactancia NO debe suspenderse; la extracción frecuente ayuda a resolver la mastitis.",
      "Tema: Patología mamaria del puerperio.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de obstetricia porque evalúa una trampa frecuente: indicar drenaje quirúrgico o suspender lactancia ante fiebre y mama dolorosa en el puerperio.

La clave no es suspender la lactancia ni drenar quirúrgicamente de inmediato.
La clave es:
Mama eritematosa y dolorosa postparto sin fluctuación = mastitis puerperal → antibiótico antiestafilocócico + continuar lactancia.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 30 años, G1P1, 8 días postparto vaginal.
• Fiebre y dolor mamario.
• Lactancia materna exclusiva.
• Mama eritematosa, tumefacta y dolorosa sin fluctuación.
• Sin colección (no absceso).
• Cuadro compatible con mastitis puerperal.

Recordemos mastitis puerperal:
• Infección del parénquima mamario, generalmente por Staphylococcus aureus.
• Ocurre por estasis láctea, fisuras del pezón o colonización bacteriana.
• Tratamiento: dicloxacilina o cefalexina (antibióticos antiestafilocócicos).
• La lactancia debe continuar o realizarse extracción frecuente.
• El drenaje quirúrgico solo si hay absceso (fluctuación).
• Suspender lactancia empeora la estasis y prolonga la infección.

Por lo tanto:
La conducta inicial es dicloxacilina o cefalexina y continuar lactancia (opción C).

¿Por qué la opción C es la respuesta correcta?
La mastitis sin absceso se trata con antibióticos y mantenimiento de la lactancia; es el manejo estándar según guías.

¿Por qué fallan las otras opciones?
Opción A (suspender lactancia y cabergolina): la lactancia no debe suspenderse; la cabergolina es para inhibición de lactación, no para mastitis.
Opción B (drenaje quirúrgico): reservado para absceso mamario con fluctuación; esta paciente no tiene colección.
Opción D (observación sin tratamiento): la mastitis requiere antibióticos; la observación puede progresar a absceso.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "fiebre y mama dolorosa" y responden drenaje quirúrgico.
Pero sin fluctuación es mastitis, no absceso.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Diagnosticar mastitis vs absceso (fluctuación = absceso).
2. Iniciar antibiótico antiestafilocócico (dicloxacilina o cefalexina).
3. Continuar lactancia o extracción frecuente.
4. Drenaje solo si hay absceso formado.

Perlas de examen
✅ Mastitis puerperal = antibiótico + continuar lactancia.
✅ Staphylococcus aureus es el agente más frecuente.
✅ Sin fluctuación = no drenaje quirúrgico.
✅ Suspender lactancia empeora la estasis.
✅ Dicloxacilina y cefalexina son tratamientos de primera línea.

Referencias
• Williams Obstetrics.
• ACOG Committee Opinion on Breastfeeding Challenges.
• Academy of Breastfeeding Medicine Protocol #36.
• Nelson Textbook of Pediatrics.`,
  },
];
