import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Banco universal MetodoQ · Dr. Q — lote multispecialidad (examen Medicina Interna).
 * Aplica a cualquier universidad y especialidad.
 */
export const DR_Q_MULTISPECIALTY_QUESTIONS: TrainingQuestion[] = [
  {
    id: "dr-q-131",
    examArea: "Endocrinología / Cirugía metabólica",
    topic: "Endocrinología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "endocrinologia", "obesidad", "cirugia_metabolica", "dm2"],
    statement:
      "Paciente femenina de 40 años, asiste a consulta de control para patologías crónicas. Mide 1.70 m, pesa 95 kg (IMC 32.9 kg/m²) y presenta circunferencia abdominal de 110 cm. Tiene antecedente de diabetes mellitus tipo 2 en tratamiento con esquema basal-bolo de insulina, antidiabéticos orales y un agonista del receptor GLP-1 semanal. Laboratorios: HbA1c 13.5%, colesterol total 350 mg/dL, LDL 190 mg/dL, HDL 34 mg/dL. Refiere mala adherencia al plan de alimentación y ejercicio. Aporta registros de glucometrías persistentemente fuera de metas y refiere aumento de peso a pesar de más de 3 meses de tratamiento. ¿Cuál es la conducta más apropiada?",
    options: [
      { id: "A", label: "A", text: "Ajustar únicamente las dosis de insulina según el reporte glucométrico." },
      { id: "B", label: "B", text: "Realizar remisión a cirugía bariátrica/metabólica." },
      { id: "C", label: "C", text: "Aumentar la dosis del agonista GLP-1 a dosis para manejo de obesidad." },
      {
        id: "D",
        label: "D",
        text: "Realizar asesoría intensiva sobre medidas no farmacológicas y optimizar al máximo el tratamiento farmacológico actual antes de considerar otras estrategias.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La paciente presenta una DM2 severamente descontrolada (HbA1c 13.5%) con un IMC de 32.9 kg/m², a pesar de recibir tratamiento médico intensivo documentado (insulina basal-bolo, antidiabéticos orales, y un agonista GLP-1 semanal). Las guías recomiendan la cirugía metabólica/bariátrica como el paso a seguir ante el fracaso terapéutico en este escenario.\n\n¿Por qué se descartan las otras opciones?\n• Opción A (Ajustar solo insulina): Seguir aumentando la insulina empeorará la ganancia ponderal sin resolver la resistencia a la insulina de base, ignorando el fracaso terapéutico global.\n• Opción C (Aumentar dosis de GLP-1): La paciente ya recibe un análogo GLP-1 semanal y su descontrol persiste masivamente (HbA1c 13.5%). Escalar farmacológicamente cuando ya hay fracaso documentado retrasa la cirugía, que es más efectiva en este punto.\n• Opción D (Optimizar medidas no farmacológicas): Ha tenido más de 3 meses de polifarmacia óptima sin respuesta; insistir en la dieta y ejercicio de forma aislada, obviando el fracaso farmacológico, es insuficiente.",
    keyPoints: [
      "Cuando veas: IMC ≥30 + DM2 con HbA1c muy elevada pese a tratamiento médico intensivo (insulina, ADO, GLP-1) y ganancia de peso.",
      "Debes pensar en: fracaso terapéutico documentado → remisión a cirugía bariátrica/metabólica.",
      "Seguir aumentando insulina favorece más ganancia ponderal sin resolver el descontrol metabólico.",
      "La cirugía metabólica puede lograr remisión parcial o completa de DM2 en pacientes seleccionados.",
      "Tema: Obesidad y cirugía metabólica en diabetes mellitus tipo 2.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de endocrinología porque evalúa una trampa frecuente: seguir optimizando tratamiento médico o educación nutricional cuando ya existe fracaso terapéutico documentado con polifarmacia y descontrol metabólico severo.

La clave no es ajustar más dosis de insulina o insistir en medidas no farmacológicas aisladas.
La clave es:
IMC 32.9 + HbA1c 13.5% + fracaso de tratamiento médico completo (insulina basal-bolo, ADO, GLP-1) + ganancia de peso → indicación de cirugía metabólica.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 40 años con obesidad (IMC 32.9, circunferencia abdominal 110 cm).
• DM2 en tratamiento intensivo: insulina basal-bolo, antidiabéticos orales y agonista GLP-1 semanal.
• HbA1c 13.5% (descontrol severo) y dislipidemia marcada.
• Mala adherencia a dieta y ejercicio, pero más de 3 meses de tratamiento sin respuesta.
• Glucometrías persistentemente fuera de metas y aumento de peso a pesar del esquema farmacológico.

Recordemos las indicaciones de cirugía metabólica:
• IMC ≥40, o IMC 35-39.9 con comorbilidad grave.
• IMC 30-34.9 con DM2 no controlada pese a tratamiento médico óptimo (criterios actuales ADA/ASMBS).
• Fracaso terapéutico: HbA1c persistentemente elevada, polifarmacia, ganancia ponderal.
• La cirugía no sustituye el estilo de vida, pero es la siguiente escalera cuando el tratamiento médico falla.

Por lo tanto:
No corresponde solo ajustar insulina, subir GLP-1 ni reforzar educación nutricional como única estrategia.
La conducta más apropiada es remisión a cirugía bariátrica/metabólica.

¿Por qué la opción B es la respuesta correcta?
Cumple criterios de cirugía metabólica: IMC 32.9 con DM2 severamente descontrolada (HbA1c 13.5%) a pesar de tratamiento médico intensivo y documentado fracaso terapéutico con ganancia de peso.
Las guías actuales (ADA, ASMBS) recomiendan considerar cirugía metabólica en IMC 30-34.9 con DM2 refractaria al tratamiento médico óptimo.

¿Por qué fallan las otras opciones?
Opción A (ajustar insulina): más insulina puede empeorar la ganancia de peso sin resolver el descontrol metabólico de fondo; no aborda el fracaso terapéutico global.
Opción C (aumentar GLP-1 a dosis de obesidad): ya está en agonista GLP-1 semanal; el fracaso persiste con HbA1c 13.5%; no es la escalada adecuada ante fracaso documentado.
Opción D (asesoría intensiva y optimizar farmacológico): ya hay más de 3 meses de tratamiento intensivo sin respuesta; insistir solo en medidas no farmacológicas ignora el fracaso terapéutico establecido.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Primero hay que agotar todas las medidas médicas y de estilo de vida."
Pero el examen exige reconocer que el fracaso terapéutico ya está documentado: HbA1c muy elevada + polifarmacia + ganancia de peso + tiempo suficiente de tratamiento.
El dato decisivo es:
IMC 32.9 con DM2 refractaria pese a esquema completo → cirugía metabólica.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar obesidad con DM2 y evaluar el grado de control metabólico (HbA1c).
2. Verificar que el tratamiento médico ha sido intensivo y adecuado (insulina, ADO, GLP-1).
3. Documentar fracaso terapéutico (HbA1c persistentemente elevada, ganancia de peso).
4. Remitir a cirugía metabólica si cumple criterios (IMC ≥30 + DM2 refractaria).

Perlas de examen
✅ IMC 30-34.9 + DM2 no controlada pese a tratamiento óptimo → cirugía metabólica.
✅ Fracaso terapéutico = HbA1c muy elevada + polifarmacia + ganancia de peso.
✅ Más insulina sin abordar obesidad favorece más ganancia ponderal.
✅ La cirugía metabólica puede lograr remisión parcial o completa de DM2.
✅ No confundir mala adherencia con fracaso cuando hay meses de tratamiento intensivo sin respuesta.
✅ Las residencias preguntan cuándo escalar a cirugía, no solo ajustes farmacológicos.

Referencias
• ADA Standards of Medical Care in Diabetes.
• ASMBS/IFSO Guidelines on Metabolic and Bariatric Surgery.
• UpToDate: Bariatric Surgery for Management of Type 2 Diabetes Mellitus.
• Endocrine Society Clinical Practice Guideline on Obesity.
• Mechanick JI et al. Metabolic Surgery in the Treatment of Type 2 Diabetes.`,
  },
  {
    id: "dr-q-132",
    examArea: "Cirugía General / Trauma",
    topic: "Cirugía General",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "cirugia", "trauma", "abdomen", "atls"],
    statement:
      "Masculino de 30 años presenta trauma abdominal penetrante por arma de fuego. Se encuentra alerta, orientado y con signos vitales dentro de la normalidad. Al examen físico se evidencia herida de entrada en cuadrante superior derecho y herida de salida a nivel inferior derecho de la espalda. Presenta leve dolor difuso a la palpación abdominal sin signos de irritación peritoneal. ¿Qué medida considera de mayor utilidad en el abordaje inicial de este paciente?",
    options: [
      { id: "A", label: "A", text: "Laparotomía exploratoria inmediata." },
      { id: "B", label: "B", text: "Lavado peritoneal diagnóstico." },
      { id: "C", label: "C", text: "Tomografía abdominal contrastada." },
      { id: "D", label: "D", text: "Observación clínica exclusiva durante 24 horas." },
    ],
    correctOptionId: "C",
    explanation:
      "Trauma abdominal penetrante en paciente hemodinámicamente estable sin peritonitis. La tomografía contrastada es la herramienta de mayor utilidad para definir trayecto, órganos comprometidos y necesidad de cirugía.",
    keyPoints: [
      "Cuando veas: trauma abdominal penetrante por arma de fuego en paciente alerta, hemodinámicamente estable y sin peritonitis.",
      "Debes pensar en: evaluación con tomografía abdominal contrastada antes de decidir cirugía.",
      "Inestabilidad hemodinámica o peritonitis → laparotomía exploratoria inmediata, no TC.",
      "El lavado peritoneal diagnóstico ha sido reemplazado por TC en la mayoría de centros.",
      "Tema: Trauma abdominal penetrante — manejo selectivo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cirugía general porque evalúa una trampa frecuente: asociar automáticamente trauma penetrante por arma de fuego con laparotomía exploratoria inmediata, sin valorar la estabilidad hemodinámica ni los signos de irritación peritoneal.

La clave no es el mecanismo del trauma (arma de fuego) por sí solo.
La clave es:
Estabilidad hemodinámica + ausencia de peritonitis → tomografía abdominal contrastada para definir trayecto, órganos comprometidos y necesidad de cirugía.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 30 años con trauma abdominal penetrante por arma de fuego.
• Alerta, orientado, signos vitales normales (estable hemodinámicamente).
• Herida de entrada en cuadrante superior derecho y salida en espalda inferior derecha.
• Leve dolor difuso abdominal sin signos de irritación peritoneal.
• No hay indicación de cirugía de emergencia por inestabilidad o peritonitis.

Recordemos el abordaje del trauma abdominal penetrante:
• Inestable hemodinámicamente o peritonitis → laparotomía exploratoria inmediata.
• Estable sin peritonitis → evaluación selectiva con imagen (TC contrastada).
• La TC define trayecto del proyectil, lesión de vísceras huecas o sólidas y sangrado activo.
• Manejo selectivo evita laparotomías innecesarias con menor morbilidad.
• El lavado peritoneal diagnóstico (DPL) ha sido largamente reemplazado por TC en centros con disponibilidad.

Por lo tanto:
No corresponde laparotomía inmediata ni observación exclusiva sin estudio.
La medida de mayor utilidad es la tomografía abdominal contrastada.

¿Por qué la opción C es la respuesta correcta?
El paciente está hemodinámicamente estable y sin peritonitis.
La TC abdominal contrastada es la herramienta de mayor utilidad para evaluar trayecto, órganos comprometidos y decidir si requiere cirugía según hallazgos.
Es el estándar actual en el manejo selectivo del trauma penetrante estable.

¿Por qué fallan las otras opciones?
Opción A (laparotomía exploratoria inmediata): reservada para inestabilidad hemodinámica o peritonitis; en paciente estable genera cirugía innecesaria.
Opción B (lavado peritoneal diagnóstico): técnica obsoleta en la mayoría de centros; reemplazada por TC con mayor información anatómica.
Opción D (observación exclusiva 24 horas): insuficiente ante trauma penetrante; se necesita estudio de imagen para descartar lesión oculta antes de alta o manejo conservador.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Arma de fuego en abdomen = laparotomía inmediata."
Pero el examen exige correlacionar:
Estabilidad hemodinámica + examen físico (peritonitis sí/no) + disponibilidad de imagen.
El dato decisivo es:
Paciente estable, sin peritonitis → TC contrastada, no cirugía automática.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar estabilidad hemodinámica y signos vitales.
2. Buscar peritonitis o signos de sangrado activo en el examen físico.
3. Si estable sin peritonitis → TC abdominal contrastada.
4. Decidir cirugía, observación o alta según hallazgos imagenológicos.

Perlas de examen
✅ Estabilidad + no peritonitis → TC contrastada, no laparotomía automática.
✅ Inestabilidad o peritonitis → cirugía urgente sin demorar por imagen.
✅ El mecanismo (arma de fuego) no define la conducta; la fisiología y el examen sí.
✅ DPL está prácticamente obsoleto frente a TC en centros equipados.
✅ Manejo selectivo reduce laparotomías no terapéuticas.
✅ Las residencias preguntan algoritmos ATLS/EAST, no dogmas históricos.

Referencias
• ATLS (Advanced Trauma Life Support) — Abdominal Trauma.
• EAST Practice Management Guidelines: Selective Nonoperative Management of Penetrating Abdominal Trauma.
• UpToDate: Initial Evaluation and Management of Abdominal Gunshot Wounds in Adults.
• Moore EE et al. Trauma (9th ed).
• Feliciano DV et al. Trauma Management of Penetrating Abdominal Injury.`,
  },
  {
    id: "dr-q-133",
    examArea: "Pediatría / Infectología",
    topic: "Pediatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "pediatria", "lactante_febril", "infeccion"],
    statement:
      "Femenina de 2 meses y medio es llevada a urgencias por presentar desde el día anterior alza térmica no cuantificada. La madre la nota somnolienta y decaída. Tiene esquema de vacunación completo para la edad. Al examen físico se encuentra irritable; durante la otoscopia se evidencia eritema timpánico bilateral, aunque la valoración es difícil por la poca colaboración de la paciente. ¿Cuál es la conducta más adecuada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hospitalizar, solicitar hemograma, hemocultivos, punción lumbar e iniciar antibiótico intravenoso inmediato.",
      },
      { id: "B", label: "B", text: "Iniciar manejo con amoxicilina/clavulanato por otitis media aguda." },
      { id: "C", label: "C", text: "Manejo sintomático con acetaminofén y seguimiento en 24 horas." },
      {
        id: "D",
        label: "D",
        text: "Solicitar hemograma, proteína C reactiva, uroanálisis, Gram y urocultivo por sonda.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Lactante <3 meses con fiebre y compromiso del estado general. Prioridad: descartar infección bacteriana grave. El eritema timpánico no excluye ITU u otra fuente bacteriana significativa.",
    keyPoints: [
      "Cuando veas: lactante menor de 3 meses con fiebre y compromiso del estado general (somnolienta, irritable, decaída).",
      "Debes pensar en: infección bacteriana grave oculta → estudio sistemático antes de atribuir a otitis.",
      "La ITU es la causa bacteriana más frecuente en lactantes febriles; el eritema timpánico no la excluye.",
      "Urocultivo por sonda vesical reduce contaminación frente a bolsa recolectora.",
      "Tema: Lactante febril menor de 3 meses.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de pediatría porque evalúa una trampa frecuente: atribuir la fiebre a otitis media aguda por hallazgo de eritema timpánico bilateral, ignorando que en lactantes <3 meses la prioridad es descartar infección bacteriana grave sistémica.

La clave no es la otoscopia ni el hallazgo timpánico aislado.
La clave es:
Lactante de 2.5 meses con fiebre y compromiso del estado general → estudio sistemático (hemograma, PCR, uroanálisis, Gram y urocultivo) para descartar bacteriemia, meningitis o ITU.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Lactante de 2 meses y medio con fiebre de un día de evolución.
• Compromiso del estado general: somnolienta, decaída, irritable al examen.
• Vacunación completa para la edad (no excluye infección bacteriana grave).
• Eritema timpánico bilateral en otoscopia difícil por poca colaboración.
• No hay datos que permitan descartar ITU, bacteriemia u otra fuente grave sin estudio.

Recordemos el abordaje del lactante febril <3 meses:
• Alta prevalencia de infección bacteriana grave (bacteriemia, meningitis, ITU, osteomielitis).
• La ITU es la causa bacteriana más frecuente en este grupo etario.
• El eritema timpánico es inespecífico y frecuente; no confirma otitis ni excluye otra infección.
• Estudio inicial: hemograma, proteína C reactiva, uroanálisis, Gram y urocultivo por sonda.
• Antibiótico empírico IV e ingreso se reservan según resultados y gravedad clínica, no como primer paso automático en todos.

Por lo tanto:
No corresponde antibiótico oral por otitis ni manejo sintomático con seguimiento ambulatorio.
La conducta más adecuada es solicitar hemograma, PCR, uroanálisis, Gram y urocultivo por sonda.

¿Por qué la opción D es la respuesta correcta?
Aborda al lactante febril <3 meses con el estudio sistemático recomendado por guías (AAP): hemograma, PCR, uroanálisis y urocultivo por sonda.
Permite descartar ITU (causa más frecuente) y estratificar riesgo de infección bacteriana grave antes de decidir ingreso o antibiótico empírico.

¿Por qué fallan las otras opciones?
Opción A (hospitalizar + hemocultivos + PL + ATB IV inmediato): puede ser necesario según resultados y gravedad, pero no es el primer paso universal; el estudio escalonado comienza con hemograma, PCR y uroanálisis.
Opción B (amoxicilina/clavulanato por otitis): asume diagnóstico de otitis media sin estudio; el eritema timpánico en lactante pequeño no es suficiente y no excluye ITU u otra infección grave.
Opción C (acetaminofén y seguimiento 24 h): inaceptable en lactante <3 meses febril con compromiso del estado general; riesgo de bacteriemia o meningitis no diagnosticada.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Eritema timpánico bilateral = otitis media aguda → antibiótico oral."
Pero el examen exige priorizar:
La edad (<3 meses) + estado general alterado → estudio sistemático.
El dato decisivo es:
2.5 meses con fiebre y decaimiento → no atribuir a otitis sin descartar ITU y otras infecciones graves.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer lactante febril <3 meses como grupo de alto riesgo.
2. Evaluar estado general y buscar foco, sin confiar en otoscopia aislada.
3. Solicitar estudio sistemático: hemograma, PCR, uroanálisis y urocultivo por sonda.
4. Decidir ingreso, antibiótico empírico o manejo ambulatorio según resultados y clínica.

Perlas de examen
✅ Lactante <3 meses con fiebre → estudio sistemático obligatorio.
✅ ITU = causa bacteriana más frecuente en lactantes febriles.
✅ Eritema timpánico no confirma otitis ni excluye ITU o bacteriemia.
✅ Urocultivo por sonda vesical > bolsa recolectora (menos contaminación).
✅ Antibiótico empírico IV no es el primer paso en todos; depende del estudio y la gravedad.
✅ Las residencias preguntan algoritmos por edad, no diagnósticos focales precipitados.

Referencias
• AAP Clinical Practice Guideline: Febrile Infants 8 to 60 Days Old.
• Nelson Textbook of Pediatrics — Fever Without a Focus.
• UpToDate: Approach to the Febrile Infant (Age 0 to 90 Days).
• Pantell RH et al. Evaluation and Management of Well-Appearing Febrile Infants.
• Gomez B et al. Validation of Fever Without Source Prediction Rules in Infants.`,
  },
  {
    id: "dr-q-134",
    examArea: "Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "avr", "equivalente_st"],
    statement:
      "Paciente masculino de 50 años es llevado a urgencias por cuadro clínico de 40 minutos de evolución consistente en dolor torácico central, opresivo, irradiado a mandíbula y brazo izquierdo. Se realiza electrocardiograma que muestra depresión del segmento ST en DI, DII y V4-V6, asociada a elevación del segmento ST en aVR. ¿Cuál es el diagnóstico presuntivo?",
    options: [
      { id: "A", label: "A", text: "SCASEST." },
      { id: "B", label: "B", text: "SCACEST." },
      { id: "C", label: "C", text: "Angina inestable." },
      { id: "D", label: "D", text: "Pericarditis aguda." },
    ],
    correctOptionId: "B",
    explanation:
      "Elevación del ST en aVR con depresión difusa del ST en múltiples derivaciones es patrón de alto riesgo que sugiere isquemia transmural extensa, frecuentemente por lesión crítica del tronco coronario izquierdo. Equivalente de SCACEST.",
    keyPoints: [
      "Cuando veas: dolor torácico típico + elevación del ST en aVR + depresión difusa del ST en múltiples derivaciones.",
      "Debes pensar en: equivalente de SCACEST por lesión crítica del tronco coronario izquierdo o enfermedad multivaso.",
      "Este patrón implica isquemia transmural extensa y muy alto riesgo → estrategia invasiva urgente.",
      "Pericarditis: elevación difusa del ST con depresión del PR, no el patrón aVR + depresión difusa.",
      "Tema: Síndrome coronario agudo — equivalente de elevación del ST (aVR).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa una trampa frecuente: clasificar automáticamente cualquier depresión del ST como SCASEST (NSTEMI), sin reconocer que la elevación del ST en aVR con depresión difusa es un equivalente de SCACEST de muy alto riesgo.

La clave no es solo la depresión difusa del ST.
La clave es:
Elevación del ST en aVR + depresión difusa del ST en múltiples derivaciones (DI, DII, V4-V6) + dolor torácico típico → equivalente de SCACEST por isquemia transmural extensa.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 50 años con dolor torácico central opresivo de 40 minutos.
• Irradiación a mandíbula y brazo izquierdo (cuadro isquémico típico).
• ECG: depresión del ST en DI, DII y V4-V6.
• Elevación del ST en derivación aVR.
• Patrón sugestivo de isquemia subendocárdica global por lesión crítica coronaria proximal.

Recordemos los equivalentes de SCACEST:
• Elevación del ST en aVR con depresión difusa del ST = patrón de muy alto riesgo.
• Sugiere lesión crítica del tronco coronario izquierdo o enfermedad multivaso severa.
• Representa isquemia transmural extensa aunque no haya elevación del ST en derivaciones convencionales.
• Requiere estrategia invasiva urgente (coronariografía emergente), no manejo conservador de NSTEMI.
• Pericarditis: elevación difusa del ST con depresión del PR, sin el patrón característico en aVR.

Por lo tanto:
No es SCASEST (NSTEMI) ni angina inestable aislada.
El diagnóstico presuntivo es SCACEST (equivalente por patrón aVR).

¿Por qué la opción B es la respuesta correcta?
La elevación del ST en aVR con depresión difusa del ST en múltiples derivaciones es un equivalente reconocido de SCACEST.
Indica isquemia transmural extensa por lesión crítica del tronco izquierdo o multivaso, con indicación de reperfusión urgente según guías ESC/AHA.

¿Por qué fallan las otras opciones?
Opción A (SCASEST): la depresión difusa del ST sugiere isquemia, pero la elevación en aVR eleva el diagnóstico a equivalente de STEMI, no NSTEMI de riesgo intermedio.
Opción C (angina inestable): el patrón ECG con elevación en aVR y depresión difusa extensa indica lesión coronaria crítica con isquemia transmural, no angina sin elevación de marcadores.
Opción D (pericarditis aguda): cursa con elevación difusa del ST y depresión del PR; el dolor típico isquémico y el patrón aVR no son compatibles.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Depresión del ST sin elevación en derivaciones estándar = SCASEST."
Pero el examen exige identificar:
El patrón específico de elevación en aVR como equivalente de STEMI.
El dato decisivo es:
ST elevado en aVR + depresión difusa = muy alto riesgo, manejo como SCACEST.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar dolor torácico típico de síndrome coronario agudo.
2. Analizar el ECG buscando elevación del ST en derivaciones convencionales Y en aVR.
3. Reconocer elevación en aVR + depresión difusa como equivalente de SCACEST.
4. Indicar estrategia invasiva urgente (coronariografía emergente).

Perlas de examen
✅ ST elevado en aVR + depresión difusa del ST = equivalente de SCACEST.
✅ Sugiere lesión crítica del tronco coronario izquierdo o multivaso.
✅ No clasificar como NSTEMI de bajo riesgo ante este patrón.
✅ Pericarditis: elevación difusa del ST + depresión del PR (no patrón aVR).
✅ Requiere coronariografía emergente, no solo antiagregación y observación.
✅ Las residencias preguntan patrones ECG de alto riesgo, no solo STEMI clásico.

Referencias
• ESC Guidelines for the Management of Acute Coronary Syndromes.
• AHA/ACC Guideline for the Management of Patients With Acute Coronary Syndromes.
• Braunwald's Heart Disease — ST-Elevation in aVR.
• Tintinalli Emergency Medicine — Acute Coronary Syndromes.
• UpToDate: Diagnosis of ST-Elevation Myocardial Infarction.`,
  },
  {
    id: "dr-q-135",
    examArea: "Ciencias Básicas / Neuroanatomía",
    topic: "Ciencias Básicas",
    difficulty: "easy",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "neuroanatomia", "diafragma"],
    statement:
      "¿Cuál de los siguientes es el encargado de la inervación motora del músculo diafragma?",
    options: [
      { id: "A", label: "A", text: "Nervio frénico." },
      { id: "B", label: "B", text: "Nervio vago." },
      { id: "C", label: "C", text: "Nervio intercostal." },
      { id: "D", label: "D", text: "Nervio accesorio." },
    ],
    correctOptionId: "A",
    explanation:
      "El nervio frénico (C3-C5) es el principal responsable de la inervación motora del diafragma, músculo principal de la respiración.",
    keyPoints: [
      "Cuando veas: pregunta sobre inervación motora del músculo diafragma (músculo principal de la respiración).",
      "Debes pensar en: nervio frénico, con origen en raíces espinales C3, C4 y C5.",
      "Regla mnemotécnica: C3, C4 y C5 mantienen vivo al diafragma.",
      "Lesión bilateral del nervio frénico → parálisis diafragmática e insuficiencia respiratoria grave.",
      "Tema: Neuroanatomía — inervación del diafragma.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ciencias básicas porque evalúa una trampa frecuente: confundir los nervios que participan en la función respiratoria (vago, intercostales, accesorio) con el nervio responsable de la inervación motora del diafragma.

La clave no es el nervio vago ni los intercostales.
La clave es:
El nervio frénico (origen C3-C5) es el encargado de la inervación motora del diafragma, músculo principal de la ventilación.

¿Qué está ocurriendo realmente?
La pregunta evalúa:
• Conocimiento de neuroanatomía respiratoria básica.
• Identificación del nervio motor del diafragma entre distractores plausibles.
• Diferenciación entre función motora del diafragma vs inervación de pared torácica o músculos accesorios.
• Aplicación de la regla mnemotécnica C3-C5.

Recordemos la inervación del diafragma y estructuras relacionadas:
• Nervio frénico: ramas del plexo cervical (C3, C4, C5) → inervación motora del diafragma.
• C4 es la contribución principal ("C4 en el diafragma").
• Nervio vago (X par): función parasimpática torácica y abdominal; no inerva motoramente el diafragma.
• Nervios intercostales: pared torácica y músculos intercostales; no el diafragma.
• Nervio accesorio (XI par): trapecio y esternocleidomastoideo; músculo respiratorio accesorio, no diafragma.
• Lesión bilateral del nervio frénico → parálisis diafragmática e insuficiencia respiratoria.

Por lo tanto:
La respuesta es el nervio frénico.

¿Por qué la opción A es la respuesta correcta?
El nervio frénico es el principal responsable de la inervación motora del diafragma.
Se origina en las raíces espinales C3, C4 y C5, desciende por el mediastino y penetra el diafragma para inervarlo motoramente.

¿Por qué fallan las otras opciones?
Opción B (nervio vago): inerva vísceras torácicas y abdominales con función parasimpática; no es el nervio motor del diafragma.
Opción C (nervio intercostal): inerva músculos intercostales y pared torácica; participa en la respiración pero no inerva el diafragma.
Opción D (nervio accesorio): inerva trapecio y esternocleidomastoideo; es músculo respiratorio accesorio, no inervación diafragmática.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Cualquier nervio relacionado con respiración sirve" (vago, intercostal, accesorio).
Pero el examen exige conocer:
El nervio específico de inervación motora del diafragma.
El dato decisivo es:
Diafragma = nervio frénico (C3-C5), no vago ni intercostales.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar que el diafragma es el principal músculo de la ventilación.
2. Recordar que su inervación motora es el nervio frénico.
3. Asociar el origen C3, C4, C5 (C3, C4 y C5 mantienen vivo al diafragma).
4. Diferenciar del vago (parasimpático), intercostales (pared) y accesorio (músculos cervicales).

Perlas de examen
✅ Nervio frénico = inervación motora del diafragma.
✅ Origen: C3, C4, C5 — "C3, C4 y C5 mantienen vivo al diafragma".
✅ C4 es la raíz principal de contribución al nervio frénico.
✅ Lesión bilateral → parálisis diafragmática e insuficiencia respiratoria.
✅ Vago = parasimpático; intercostales = pared torácica; accesorio = trapecio/ECM.
✅ Las residencias repiten esta pregunta en ciencias básicas y neuroanatomía.

Referencias
• Moore's Clinically Oriented Anatomy.
• Snell's Clinical Neuroanatomy.
• Netter Atlas of Human Anatomy — Diaphragm and Phrenic Nerve.
• Gray's Anatomy — Respiratory Muscles and Innervation.
• Standring S. Gray's Anatomy: The Anatomical Basis of Clinical Practice.`,
  },
  {
    id: "dr-q-136",
    examArea: "Oftalmología / Urgencias",
    topic: "Oftalmología",
    difficulty: "easy",
    tags: ["dr-q", "universal", "metodoq", "oftalmologia", "abrasion_corneal", "urgencias"],
    statement:
      "Hombre de 30 años quien el día anterior, luego de retirarse un lente de contacto, presentó sensación de cuerpo extraño y dolor ocular. Niega secreción, disminución visual u otros síntomas asociados. Al examen físico se encuentra ojo rojo y en la tinción con fluoresceína se evidencia un defecto epitelial corneal. ¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Antibiótico en gotas con lente de contacto blando terapéutico." },
      { id: "B", label: "B", text: "Antibiótico en gotas con parche sin compresión." },
      { id: "C", label: "C", text: "Antibiótico en gotas con parche compresivo." },
      { id: "D", label: "D", text: "Antibiótico en gotas." },
    ],
    correctOptionId: "D",
    explanation:
      "Se trata de una abrasión corneal. En usuarios de lentes de contacto, el riesgo de queratitis por Pseudomonas aeruginosa es muy alto. El manejo indicado es retirar el lente de contacto e iniciar antibióticos tópicos de amplio espectro profilácticos.\n\n¿Por qué se descartan las otras opciones?\n• Opción A (Lente terapéutico): Mantener un lente de contacto en una abrasión reciente aumenta drásticamente el riesgo de infección severa.\n• Opciones B y C (Uso de parche): El parche ocular está contraindicado en usuarios de lentes de contacto y en trauma vegetal, ya que crear un ambiente cálido y cerrado favorece la proliferación bacteriana y no acelera la cicatrización.",
    keyPoints: [
      "Cuando veas: Dolor ocular + sensación de cuerpo extraño + tinción positiva con fluoresceína en usuario de lentes de contacto.",
      "Debes pensar en: Abrasión corneal con alto riesgo de infección por Pseudomonas.",
      "Manejo: Retiro del lente + Antibiótico tópico profiláctico.",
      "NUNCA usar parche ocular en abrasiones por lentes de contacto o trauma vegetal (aumenta el riesgo de úlcera bacteriana/fúngica).",
      "Tema: Abrasión corneal en usuarios de lentes de contacto.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de oftalmología porque evalúa una trampa histórica frecuente: asociar automáticamente toda abrasión corneal con parche oclusivo, sin considerar el contexto de lentes de contacto y las recomendaciones actuales.

La clave no es solo el defecto epitelial corneal.
La clave es:
Abrasión corneal en usuario de lentes de contacto → antibiótico tópico para prevenir sobreinfección (especialmente Pseudomonas), sin parche oclusivo de rutina.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 30 años con sensación de cuerpo extraño y dolor ocular tras retirar lente de contacto.
• Ojo rojo sin secreción ni disminución visual.
• Tinción con fluoresceína: defecto epitelial corneal (abrasión confirmada).
• Contexto de lente de contacto: mayor riesgo de infección por Pseudomonas aeruginosa.

Recordemos el manejo de la abrasión corneal:
• La fluoresceína identifica el defecto epitelial; el diagnóstico es clínico.
• En usuarios de lentes de contacto: antibiótico tópico profiláctico (cobertura antipseudomónica según protocolo local).
• El parche oclusivo ya no se recomienda de rutina: no acelera la cicatrización y puede aumentar el riesgo de infección.
• Retirar lentes de contacto y seguimiento clínico hasta resolución.
• Analgesia tópica y evitar frotar el ojo.

Por lo tanto:
No corresponde parche ocular (con o sin compresión) ni lente terapéutico.
La conducta más adecuada es antibiótico en gotas sin parche.

¿Por qué la opción D es la respuesta correcta?
La abrasión corneal asociada a lentes de contacto requiere antibiótico tópico para prevenir sobreinfección, especialmente por Pseudomonas.
Las guías actuales (AAO, AAFP, UpToDate) no recomiendan parche oclusivo de rutina en abrasiones corneales simples.
Antibiótico en gotas sin parche es el manejo estándar actual.

¿Por qué fallan las otras opciones?
Opción A (antibiótico + lente de contacto blando terapéutico): no se recomienda lente terapéutico en abrasión corneal con riesgo de infección; retirar lentes de contacto.
Opción B (antibiótico + parche sin compresión): el parche oclusivo ya no es rutina; no mejora desenlaces y puede favorecer infección.
Opción C (antibiótico + parche compresivo): mismo error; la compresión no cambia la indicación y el parche sigue desaconsejado de rutina.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Abrasión corneal = parche ocular para aliviar dolor y proteger."
Pero el examen exige conocer las recomendaciones actuales:
Parche oclusivo obsoleto de rutina + contexto de lente de contacto = antibiótico tópico sin parche.
El dato decisivo es:
Usuario de lente de contacto + defecto epitelial con fluoresceína → ATB tópico, no parche.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar abrasión corneal con fluoresceína.
2. Identificar factores de riesgo (lentes de contacto → Pseudomonas).
3. Iniciar antibiótico tópico profiláctico.
4. No parchear de rutina; retirar lentes y seguimiento clínico.

Perlas de examen
✅ Abrasión corneal + lente de contacto → antibiótico tópico sin parche.
✅ Pseudomonas es el germen de mayor preocupación en usuarios de lentes de contacto.
✅ El parche oclusivo ya no se recomienda de rutina en abrasiones simples.
✅ La fluoresceína confirma el defecto epitelial; el diagnóstico es clínico.
✅ Lente terapéutico no está indicado en abrasión con riesgo infeccioso.
✅ Las residencias preguntan manejo actualizado, no práctica histórica.

Referencias
• American Academy of Ophthalmology (AAO): Corneal Abrasion.
• UpToDate: Corneal Abrasions and Corneal Foreign Bodies.
• AAFP: Evaluation and Management of Corneal Abrasions.
• Wipfli CH et al. Curr Opin Ophthalmol: Contact Lens-Related Corneal Infection.
• Tintinalli Emergency Medicine: Eye Emergencies.`,
  },
  {
    id: "dr-q-137",
    examArea: "Neurología / Urgencias",
    topic: "Neurología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "acv", "trombolisis", "alteplase"],
    statement:
      "Mujer de 65 años, hipertensa y obesa, es evaluada en urgencias tras presentar hemiplejia derecha, afasia y asimetría facial de inicio súbito. Recibió trombólisis con alteplase dentro de la ventana terapéutica. Examen físico: PA 174/90 mmHg, FC 75 lpm, SatO₂ 97%, NIHSS 17 puntos. Glucometría 115 mg/dL. TAC cerebral sin evidencia de hemorragia intracerebral ni cambios isquémicos agudos. ECG: ritmo irregularmente irregular con ausencia de ondas P. ¿Cuál es el siguiente paso más apropiado en el manejo de esta paciente?",
    options: [
      { id: "A", label: "A", text: "Iniciar anticoagulación plena inmediata con heparina." },
      {
        id: "B",
        label: "B",
        text: "Administrar ácido acetilsalicílico inmediatamente después de la trombólisis.",
      },
      {
        id: "C",
        label: "C",
        text: "Realizar vigilancia neurológica estricta y repetir neuroimagen a las 24 horas antes de iniciar terapia antitrombótica.",
      },
      {
        id: "D",
        label: "D",
        text: "Disminuir la presión arterial a cifras menores de 120/80 mmHg en las próximas horas.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "ACV isquémico tratado con alteplase. Contraindicado iniciar antiagregantes o anticoagulantes en las primeras 24 horas hasta repetir neuroimagen y descartar transformación hemorrágica.",
    keyPoints: [
      "Cuando veas: ACV isquémico tratado con alteplase + TAC inicial sin hemorragia + FA en ECG.",
      "Debes pensar en: vigilancia neurológica estricta y repetir neuroimagen a las 24 h antes de antitrombóticos.",
      "Post-alteplase: contraindicado AAS y anticoagulación plena durante las primeras 24 horas por riesgo de transformación hemorrágica.",
      "La FA sugiere etiología cardioembólica pero no autoriza anticoagulación inmediata post-trombólisis.",
      "Tema: Manejo post-trombólisis en accidente cerebrovascular isquémico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa una trampa frecuente: ver fibrilación auricular en el ECG y pensar en anticoagulación inmediata, ignorando que la paciente acaba de recibir trombólisis con alteplase.

La clave no es la fibrilación auricular como primer paso.
La clave es:
ACV isquémico recién trombolizado → vigilancia neurológica estricta y repetir neuroimagen a las 24 horas antes de iniciar cualquier terapia antitrombótica.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 65 años, hipertensa y obesa, con ACV isquémico agudo (hemiplejia derecha, afasia, asimetría facial, NIHSS 17).
• Recibió trombólisis con alteplase dentro de la ventana terapéutica.
• TAC cerebral inicial: sin hemorragia intracerebral ni cambios isquémicos agudos.
• ECG: fibrilación auricular (ritmo irregularmente irregular, sin ondas P).
• PA 174/90 mmHg (elevada pero no indicación de descenso agresivo post-trombólisis).

Recordemos el manejo post-trombólisis:
• Riesgo principal en las primeras 24 h: transformación hemorrágica sintomática.
• Contraindicado iniciar antiagregantes (AAS) o anticoagulantes en las primeras 24 horas.
• Repetir TAC o RM a las 24 h antes de iniciar terapia antitrombótica.
• Vigilancia neurológica estricta en unidad de ictus.
• La FA sugiere etiología cardioembólica pero no modifica la contraindicación temporal post-alteplase.
• Control de PA sin descensos bruscos (evitar <120/80 mmHg agresivo).

Por lo tanto:
No corresponde anticoagulación inmediata, AAS inmediato ni descenso agresivo de PA.
El siguiente paso es vigilancia neurológica estricta y neuroimagen de control a las 24 h.

¿Por qué la opción C es la respuesta correcta?
Tras trombólisis con alteplase, las guías AHA/ASA exigen esperar 24 horas y repetir neuroimagen antes de iniciar anticoagulación o antiagregación.
Esto permite descartar transformación hemorrágica antes de exponer al paciente a mayor riesgo hemorrágico.
La vigilancia neurológica estricta detecta deterioro precoz.

¿Por qué fallan las otras opciones?
Opción A (anticoagulación plena inmediata con heparina): contraindicada en las primeras 24 h post-alteplase; alto riesgo de hemorragia intracerebral.
Opción B (AAS inmediatamente después de trombólisis): también contraindicado en las primeras 24 h; esperar neuroimagen de control.
Opción D (descender PA a <120/80 mmHg): descenso agresivo de presión arterial post-trombólisis puede comprometer perfusión del penumbra isquémica; no es el siguiente paso prioritario.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"FA en ACV = anticoagulación inmediata."
Pero el examen exige priorizar el contexto post-trombólisis:
Alteplase reciente → esperar 24 h + neuroimagen antes de antitrombóticos.
El dato decisivo es:
Acaba de recibir trombólisis, no la FA como indicación inmediata de anticoagulación.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar ACV isquémico tratado con alteplase y TAC inicial sin hemorragia.
2. Vigilancia neurológica estricta en unidad de ictus.
3. Repetir neuroimagen a las 24 horas.
4. Iniciar antitrombóticos solo si no hay transformación hemorrágica (FA → anticoagulación posterior).

Perlas de examen
✅ Post-alteplase: no AAS ni anticoagulación durante 24 h.
✅ Repetir TAC/RM a las 24 h antes de antitrombóticos.
✅ FA sugiere etiología cardioembólica pero no modifica contraindicación temporal.
✅ Transformación hemorrágica es el riesgo principal en las primeras 24 h.
✅ No descender PA agresivamente post-trombólisis (<120/80 mmHg).
✅ Las residencias preguntan el siguiente paso inmediato, no el manejo a largo plazo.

Referencias
• AHA/ASA Guidelines for the Early Management of Patients With Acute Ischemic Stroke.
• UpToDate: Initial Assessment and Management of Acute Stroke.
• UpToDate: Reperfusion Therapy for Acute Ischemic Stroke.
• Jauch EC et al. Stroke: Guidelines for the Early Management of Acute Ischemic Stroke.
• Tintinalli Emergency Medicine: Stroke and Transient Ischemic Attack.`,
  },
  {
    id: "dr-q-138",
    examArea: "Neurología / Cefaleas",
    topic: "Neurología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "migrana", "profilaxis", "asma"],
    statement:
      "Varón de 20 años, con antecedente de asma, consulta por crisis migrañosas persistentes de 6 meses de evolución. Refiere aproximadamente un episodio semanal que requiere tratamiento analgésico. Durante los episodios presenta fotofobia, fonofobia, náuseas y mareo. Ha utilizado naproxeno, ibuprofeno y acetaminofén con cafeína con alivio parcial. Debido a la frecuencia de los episodios, usted decide iniciar tratamiento preventivo. ¿Cuál es la opción más adecuada?",
    options: [
      { id: "A", label: "A", text: "AINEs a demanda." },
      { id: "B", label: "B", text: "Propranolol." },
      { id: "C", label: "C", text: "Venlafaxina." },
      { id: "D", label: "D", text: "Bisoprolol." },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente presenta criterios para iniciar profilaxis antimigrañosa debido a la frecuencia (4 al mes) e impacto funcional de las crisis. Sin embargo, su antecedente de asma es clave para la elección del fármaco.\n\n¿Por qué se descartan las otras opciones?\n• Opción A (AINEs a demanda): Son útiles para el manejo agudo, pero no previenen la aparición de nuevas crisis ni reducen su frecuencia a largo plazo.\n• Opciones B y D (Propranolol, Bisoprolol): Los betabloqueadores son de primera línea en profilaxis de migraña, pero están contraindicados de forma relativa o absoluta en pacientes asmáticos debido al riesgo de broncoespasmo (especialmente los no selectivos como el propranolol).\n\nPor tanto, la venlafaxina (un IRSN) o la amitriptilina son alternativas eficaces y seguras en pacientes con asma.",
    keyPoints: [
      "Cuando veas: Migraña con indicación de profilaxis (≥4 crisis/mes o gran impacto funcional) + Antecedente de Asma.",
      "Debes pensar en: Evitar betabloqueadores (como propranolol) por riesgo de broncoespasmo severo.",
      "Opciones seguras para profilaxis en asma: Venlafaxina, Amitriptilina, Topiramato o Ácido Valproico.",
      "El tratamiento a demanda (AINEs, triptanes) rescata del dolor, pero no reemplaza la necesidad de profilaxis cuando las crisis son frecuentes.",
      "Tema: Migraña — Profilaxis y contraindicaciones.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa una trampa muy frecuente: asociar automáticamente migraña con profilaxis = propranolol, sin revisar comorbilidades que contraindican betabloqueadores.

La clave no es elegir el profiláctico más citado en los libros.
La clave es:
Migraña con indicación de profilaxis + asma → evitar betabloqueadores (propranolol, bisoprolol) → venlafaxina como alternativa válida.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Varón de 20 años con antecedente de asma.
• Crisis migrañosas de 6 meses: ~1 episodio semanal con fotofobia, fonofobia, náuseas y mareo.
• Tratamiento agudo con AINEs y acetaminofén/cafeína con alivio parcial.
• Frecuencia e impacto funcional que justifican iniciar profilaxis.
• El médico decide tratamiento preventivo (no agudo).

Recordemos la profilaxis de migraña:
• Indicada con ≥4 crisis/mes o impacto funcional significativo (~1/semana cumple criterio).
• Primera línea clásica: betabloqueadores (propranolol), topiramato, valproato, amitriptilina.
• Propranolol y otros betabloqueadores: contraindicados en asma (bloqueo β2 → broncoespasmo).
• Venlafaxina: inhibidor de recaptación de serotonina y noradrenalina; alternativa eficaz cuando betabloqueadores están contraindicados.
• AINEs a demanda = tratamiento agudo, no preventivo.

Por lo tanto:
No corresponde propranolol ni bisoprolol por el asma.
No corresponde AINEs a demanda como profilaxis.
La opción más adecuada es venlafaxina.

¿Por qué la opción C es la respuesta correcta?
La venlafaxina es un profiláctico de migraña válido y seguro en pacientes con asma.
Evita el riesgo de broncoespasmo de los betabloqueadores.
Cumple el objetivo de reducir la frecuencia de crisis migrañosas.

¿Por qué fallan las otras opciones?
Opción A (AINEs a demanda): tratamiento agudo para crisis individuales, no profilaxis; no reduce la frecuencia semanal.
Opción B (propranolol): betabloqueador de primera línea en migraña pero contraindicado en asma por riesgo de broncoespasmo (bloqueo β2).
Opción D (bisoprolol): otro betabloqueador con la misma contraindicación relativa/absoluta en asma; no es alternativa segura.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Migraña = propranolol siempre."
Pero el examen exige revisar comorbilidades antes de elegir profiláctico:
Asma → betabloqueadores contraindicados → buscar alternativa (venlafaxina, topiramato, amitriptilina).
El dato decisivo es:
Antecedente de asma en el enunciado → descartar opciones B y D.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar indicación de profilaxis (frecuencia e impacto funcional).
2. Revisar comorbilidades (asma, depresión, obesidad, embarazo).
3. Descartar betabloqueadores si hay asma.
4. Elegir alternativa segura: venlafaxina, topiramato u otro según perfil.

Perlas de examen
✅ Migraña + asma → no betabloqueadores (propranolol, bisoprolol).
✅ Venlafaxina es alternativa válida para profilaxis de migraña.
✅ AINEs a demanda = agudo, no preventivo.
✅ Profilaxis indicada con ≥4 crisis/mes o impacto funcional significativo.
✅ Siempre revisar comorbilidades antes del profiláctico "clásico".
✅ Las residencias combinan neurología con medicina interna (asma).

Referencias
• American Headache Society: Evidence-Based Guidelines for Migraine Prevention.
• UpToDate: Preventive Treatment of Episodic Migraine in Adults.
• International Headache Society: Classification and Diagnosis of Migraine.
• Silberstein SD et al. Neurology: Evidence-Based Guideline Update: Pharmacologic Treatment for Episodic Migraine Prevention.
• Tintinalli Emergency Medicine: Headache and Migraine.`,
  },
  {
    id: "dr-q-139",
    examArea: "Endocrinología / Metabolismo calcio",
    topic: "Endocrinología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "endocrinologia", "hiperparatiroidismo", "calcio"],
    statement:
      "Mujer de 60 años en control de riesgo cardiovascular. Tiene antecedente de hipertensión arterial en tratamiento con losartán y amlodipino a dosis máximas. Signos vitales: PA 115/70 mmHg, FC 80 lpm. Laboratorios: calcio sérico 11.4 mg/dL, K+ 3.8 mEq/L, Na+ 136 mEq/L, creatinina 1.2 mg/dL, 25-hidroxivitamina D 30 ng/mL (VR: 20-40), PTH 60 pg/mL (VR: 12-65), calcio urinario 287 mg/24 h (VR: 100-300). ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Hipercalcemia hipocalciúrica familiar." },
      { id: "B", label: "B", text: "Consumo oculto de diuréticos tiazídicos." },
      { id: "C", label: "C", text: "Enfermedad renal crónica con hiperparatiroidismo secundario." },
      { id: "D", label: "D", text: "Hiperparatiroidismo primario." },
    ],
    correctOptionId: "D",
    explanation: "El diagnóstico más probable es hiperparatiroidismo primario. La paciente presenta hipercalcemia (calcio >10.5 mg/dL). Fisiológicamente, ante la hipercalcemia, la glándula paratiroides debería suprimirse (PTH <20 pg/mL). El hallazgo de una PTH de 60 pg/mL (dentro del rango de referencia del laboratorio, pero NO suprimida) en este contexto se denomina 'PTH inapropiadamente normal', lo cual indica una secreción autónoma de la glándula (hiperparatiroidismo primario).\n\n¿Por qué fallan las otras opciones?\n• Hipercalcemia hipocalciúrica familiar (A): También cursa con hipercalcemia y PTH normal, pero se distingue por una excreción urinaria de calcio muy baja (<100 mg/24h). La paciente tiene hipercalciuria relativa (287 mg/24h), lo que descarta esta opción.\n• Diuréticos tiazídicos (B): Generan hipercalcemia, pero la glándula paratiroides funcionaría bien y la PTH estaría suprimida.\n• Hiperparatiroidismo secundario (C): Es una respuesta compensatoria a la hipocalcemia (ej. por déficit de Vitamina D o falla renal). Se descarta porque la paciente tiene hipercalcemia y una función renal normal.",
    keyPoints: [
      "Cuando veas: hipercalcemia (Ca 11.4 mg/dL) + PTH en rango normal o elevada (no suprimida) + calcio urinario normal-alto.",
      "Debes pensar en: hiperparatiroidismo primario (PTH inapropiadamente normal o elevada ante hipercalcemia).",
      "En hipercalcemia, la PTH debería estar suprimida; PTH normal en ese contexto es inapropiadamente normal.",
      "La hipercalcemia hipocalciúrica familiar se descarta con calcio urinario normal o elevado (no bajo).",
      "Tema: Diagnóstico diferencial de hipercalcemia — hiperparatiroidismo primario.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de endocrinología porque evalúa una trampa muy frecuente: ver PTH dentro del rango de referencia y descartar hiperparatiroidismo, sin interpretar que en hipercalcemia una PTH normal es fisiológicamente anormal.

La clave no es solo el valor absoluto de PTH.
La clave es:
Hipercalcemia (Ca 11.4 mg/dL) + PTH no suprimida (60 pg/mL, en rango pero inapropiadamente normal) + calcio urinario normal-alto → hiperparatiroidismo primario.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 60 años en control de riesgo cardiovascular.
• Calcio sérico 11.4 mg/dL (hipercalcemia).
• PTH 60 pg/mL (VR 12-65): técnicamente normal pero no suprimida ante hipercalcemia.
• Calcio urinario 287 mg/24 h (VR 100-300): normal-alto, no hipocalciúrico.
• Vitamina D 30 ng/mL (suficiente); creatinina 1.2 mg/dL (función renal preservada).
• Sin evidencia de tiazidas ni ERC avanzada.

Recordemos el diagnóstico diferencial de hipercalcemia:
• Hiperparatiroidismo primario: hipercalcemia + PTH elevada o inapropiadamente normal + calcio urinario normal o alto.
• Hipercalcemia hipocalciúrica familiar: hipercalcemia + PTH normal + calcio urinario BAJO (<100 mg/24 h).
• Hiperparatiroidismo secundario: hipocalcemia o normocalcemia con ERC y PTH elevada por estimulación crónica.
• Tiazidas: hipercalcemia leve con PTH suprimida (no es el caso).
• Malignidad: hipercalcemia con PTH suprimida y PTHrP o lesión ósea.

Por lo tanto:
La PTH no está suprimida como debería ante hipercalcemia.
El calcio urinario normal-alto descarta hipercalcemia hipocalciúrica familiar.
El diagnóstico más probable es hiperparatiroidismo primario.

¿Por qué la opción D es la respuesta correcta?
Hipercalcemia con PTH inapropiadamente normal (debería estar suprimida) es el patrón clásico de hiperparatiroidismo primario.
El calcio urinario de 287 mg/24 h descarta la variante hipocalciúrica familiar.
Es la causa más frecuente de hipercalcemia ambulatoria en adultos.

¿Por qué fallan las otras opciones?
Opción A (hipercalcemia hipocalciúrica familiar): requiere calcio urinario bajo; aquí es 287 mg/24 h (normal-alto).
Opción B (tiazidas ocultas): las tiazidas causan hipercalcemia leve con PTH suprimida, no elevada/normal inapropiada.
Opción C (ERC con hiperparatiroidismo secundario): el secundario cursa con hipocalcemia o normocalcemia y ERC; aquí hay hipercalcemia con creatinina 1.2.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"PTH normal = descartar hiperparatiroidismo."
Pero el examen exige interpretar PTH en contexto:
Ante hipercalcemia, PTH debería estar suprimida (<20 pg/mL); PTH en rango normal es inapropiadamente normal.
El dato decisivo es:
Ca 11.4 + PTH 60 (no suprimida) + calcio urinario no bajo = hiperparatiroidismo primario.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar hipercalcemia (calcio sérico corregido si hay albumina baja).
2. Medir PTH: elevada o inapropiadamente normal → hiperparatiroidismo primario.
3. PTH suprimida → buscar malignidad, tiazidas, vitamina D, sarcoidosis.
4. Si PTH normal con hipercalcemia → calcio urinario 24 h para diferenciar primario de hipocalciúrica familiar.

Perlas de examen
✅ Hipercalcemia + PTH no suprimida = hiperparatiroidismo primario hasta demostrar lo contrario.
✅ PTH normal en hipercalcemia = inapropiadamente normal (trampa clásica).
✅ Hipocalciúrica familiar: calcio urinario bajo (<100 mg/24 h).
✅ Hiperparatiroidismo secundario: hipocalcemia/normocalcemia + ERC, no hipercalcemia.
✅ Tiazidas: hipercalcemia leve con PTH suprimida.
✅ Las residencias preguntan interpretación de PTH en contexto, no valores aislados.

Referencias
• UpToDate: Primary Hyperparathyroidism.
• Endocrine Society Clinical Practice Guideline on Primary Hyperparathyroidism.
• Bilezikian JP et al. J Clin Endocrinol Metab: Guidelines for the Management of Asymptomatic Primary Hyperparathyroidism.
• Harrison's Principles of Internal Medicine: Disorders of Serum Calcium.
• Williams Textbook of Endocrinology: Parathyroid Gland and Calcium Homeostasis.`,
  },
  {
    id: "dr-q-140",
    examArea: "Ginecología y Obstetricia / RPM",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "obstetricia", "rpm", "pretérmino"],
    statement:
      "Mujer de 20 años, gestación de 30 semanas y 3 días, consulta por cuadro clínico de 5 horas de evolución consistente en salida continua de líquido vaginal que moja la ropa y forma charco en el suelo. Niega contracciones uterinas, dolor pélvico o sangrado vaginal. Al examen físico no se encuentran hallazgos relevantes. Cardiotocografía: patrón reactivo categoría I (ACOG). A la evaluación con espéculo se observa salida de líquido claro a través del orificio cervical externo. ¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Inducir el trabajo de parto inmediatamente." },
      { id: "B", label: "B", text: "Realizar cesárea urgente por ruptura prematura de membranas." },
      {
        id: "C",
        label: "C",
        text: "Manejo expectante intrahospitalario con corticoides antenatales, antibióticos y vigilancia materno-fetal.",
      },
      { id: "D", label: "D", text: "Dar egreso con seguimiento ambulatorio en 48 horas." },
    ],
    correctOptionId: "C",
    explanation:
      "El manejo de la ruptura prematura de membranas (RPM) depende de la edad gestacional y la estabilidad materno-fetal. En una gestación pretérmino de 30 semanas (<34 semanas), sin evidencia de infección (corioamnionitis), sin trabajo de parto y con pruebas de bienestar fetal normales (patrón categoría I), la indicación es manejo expectante intrahospitalario.\n\n¿Por qué se descartan las otras opciones?\n• Opción A (Inducir el parto): No está indicado finalizar el embarazo antes de las 34 semanas si no hay complicaciones, ya que esto aumentaría la morbimortalidad por prematuridad.\n• Opción B (Cesárea urgente): La RPM por sí sola NO es indicación de cesárea. Esta vía se reserva para indicaciones obstétricas absolutas o compromiso fetal inminente.\n• Opción D (Egreso ambulatorio): El manejo de la RPM pretérmino debe ser intrahospitalario para vigilancia estrecha de signos de infección y administrar profilaxis (corticoides y antibióticos), los cuales prolongan el periodo de latencia.",
    keyPoints: [
      "Cuando veas: RPM en embarazo pretérmino (<34 semanas) sin signos de infección ni sufrimiento fetal.",
      "Debes pensar en: Manejo expectante intrahospitalario con corticoides y profilaxis antibiótica.",
      "Los antibióticos en RPM pretérmino prolongan el periodo de latencia y reducen la morbilidad infecciosa neonatal.",
      "La finalización inmediata (independiente de las semanas) se indica si hay: corioamnionitis clínica, desprendimiento de placenta, alteración grave del bienestar fetal o trabajo de parto avanzado.",
      "La RPM aislada nunca es una indicación por sí misma para realizar cesárea urgente.",
      "Tema: Ruptura prematura de membranas (RPM) pretérmino — manejo expectante.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de obstetricia porque evalúa una trampa frecuente: asociar automáticamente ruptura de membranas con finalización inmediata del embarazo, sin considerar la edad gestacional y la estabilidad clínica.

La clave no es solo confirmar la RPM.
La clave es:
RPM pretérmino a las 30 semanas + paciente estable (sin trabajo de parto, sin infección, bienestar fetal) → manejo expectante con corticoides, antibióticos y vigilancia.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 20 años, gestación de 30 semanas y 3 días.
• Salida continua de líquido vaginal (RPM confirmada con espéculo: líquido claro por orificio cervical externo).
• Sin contracciones uterinas, dolor pélvico ni sangrado vaginal.
• Cardiotocografía categoría I (patrón reactivo, bienestar fetal).
• Sin signos de corioamnionitis ni sufrimiento fetal.

Recordemos el manejo de RPM pretérmino:
• <34 semanas sin complicaciones → manejo expectante para prolongar gestación.
• Corticoides antenatales: maduración pulmonar fetal (betametasona o dexametasona).
• Antibióticos: prolongan latencia y reducen riesgo de corioamnionitis (esquema tipo ampicilina + azitromicina según protocolo).
• Vigilancia materno-fetal intrahospitalaria: temperatura, FC fetal, leucocitos, cultivo si indicado.
• Finalizar embarazo si: corioamnionitis, sufrimiento fetal, trabajo de parto establecido o maduración fetal completada según edad.
• RPM sola no es indicación de cesárea; la vía de parto depende de otras condiciones obstétricas.

Por lo tanto:
No corresponde inducir parto inmediatamente, cesárea urgente ni egreso ambulatorio.
La conducta más adecuada es manejo expectante intrahospitalario con corticoides, antibióticos y vigilancia.

¿Por qué la opción C es la respuesta correcta?
A las 30 semanas con RPM, sin trabajo de parto, sin infección y con bienestar fetal, el manejo expectante es el estándar según ACOG.
Los corticoides mejoran la madurez pulmonar fetal.
Los antibióticos prolongan la latencia y reducen morbilidad infecciosa.
La vigilancia materno-fetal detecta complicaciones que obliguen a finalizar el embarazo.

¿Por qué fallan las otras opciones?
Opción A (inducir trabajo de parto inmediatamente): prematuro extremo innecesario a las 30 semanas sin indicación obstétrica; aumenta morbimortalidad neonatal.
Opción B (cesárea urgente por RPM): la RPM sola no indica cesárea; no hay sufrimiento fetal ni otra indicación obstétrica urgente.
Opción D (egreso ambulatorio en 48 h): RPM pretérmino requiere vigilancia intrahospitalaria; riesgo de infección, trabajo de parto y complicaciones neonatales.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Ruptura de membranas = terminar el embarazo."
Pero el examen exige correlacionar:
Edad gestacional + estabilidad clínica + bienestar fetal.
Antes de 34 semanas sin complicaciones → expectante, no finalización inmediata.
El dato decisivo es:
30 semanas + estable + categoría I → expectante con corticoides y ATB.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar RPM pretérmino (espéculo, cristalografía/Nitrazina si disponible).
2. Evaluar edad gestacional, trabajo de parto, infección y bienestar fetal.
3. Si <34 semanas y estable → manejo expectante intrahospitalario.
4. Corticoides + antibióticos + vigilancia; finalizar si complicaciones.

Perlas de examen
✅ RPM pretérmino <34 semanas estable → manejo expectante.
✅ Corticoides: maduración pulmonar fetal.
✅ Antibióticos: prolongan latencia y reducen corioamnionitis.
✅ Finalizar si corioamnionitis, sufrimiento fetal o trabajo de parto.
✅ RPM sola no indica cesárea.
✅ Las residencias preguntan conducta según edad gestacional, no solo el diagnóstico.

Referencias
• ACOG Practice Bulletin: Prelabor Rupture of Membranes.
• Williams Obstetrics: Premature Rupture of Membranes.
• UpToDate: Preterm Prelabor Rupture of Membranes.
• NICE Guideline: Preterm Labour and Birth.
• Mercer BM. Obstet Gynecol: Preterm Premature Rupture of the Membranes.`,
  },
  {
    id: "dr-q-141",
    examArea: "Ginecología y Obstetricia / Puerperio",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "obstetricia", "endometritis", "puerperio"],
    statement:
      "Femenina de 27 años, en puerperio de parto vaginal con expulsivo prolongado. Fue dada de alta junto con su recién nacido el día anterior. Consulta por sensación de alza térmica, dolor pélvico y sangrado vaginal fétido. Al examen físico: FC 116 lpm, FR 22 rpm, PA 100/70 mmHg. Presenta dolor a la palpación del fondo uterino y al tacto vaginal se evidencia cérvix abierto con salida de material hemático de mal olor. ¿Cuál es la conducta más adecuada?",
    options: [
      { id: "A", label: "A", text: "Manejo ambulatorio con amoxicilina/clavulanato y control en 48 horas." },
      { id: "B", label: "B", text: "Legrado uterino inmediato sin medidas adicionales." },
      {
        id: "C",
        label: "C",
        text: "Solicitar ecografía transvaginal y esperar resultados antes de iniciar tratamiento.",
      },
      {
        id: "D",
        label: "D",
        text: "Hospitalización, inicio de antibióticos intravenosos de amplio espectro y evaluación de restos ovulares retenidos.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Endometritis puerperal: fiebre, taquicardia, dolor uterino, loquios fétidos, cérvix abierto. Hospitalización + ATB IV de amplio espectro + evaluación de restos retenidos.",
    keyPoints: [
      "Cuando veas: puerperio reciente + fiebre + dolor uterino + loquios fétidos + cérvix abierto.",
      "Debes pensar en: endometritis puerperal → hospitalización + antibióticos IV de amplio espectro + evaluación de restos retenidos.",
      "ATB IV inmediato (clindamicina + gentamicina); no retrasar tratamiento por ecografía.",
      "Restos placentarios retenidos perpetúan infección; el legrado sin ATB no es conducta inicial.",
      "Tema: Endometritis puerperal / infección postparto.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de obstetricia porque evalúa el reconocimiento y manejo inicial de la endometritis puerperal: una infección uterina postparto que requiere hospitalización, antibióticos intravenosos de amplio espectro y evaluación de restos ovulares retenidos.

La clave no es el manejo ambulatorio, el legrado inmediato ni retrasar antibióticos por estudios de imagen.
La clave es:
Hospitalización, inicio de antibióticos intravenosos de amplio espectro y evaluación de restos ovulares retenidos.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Femenina de 27 años, puerperio de parto vaginal con expulsivo prolongado (factor de riesgo).
• Dada de alta el día anterior; consulta por alza térmica, dolor pélvico y sangrado vaginal fétido.
• FC 116 lpm, FR 22 rpm, PA 100/70 mmHg (taquicardia compatible con infección).
• Dolor a la palpación del fondo uterino.
• Cérvix abierto con salida de material hemático de mal olor.

Recordemos la endometritis puerperal:
• Infección del endometrio en las primeras 6 semanas postparto.
• Factores de riesgo: parto prolongado, múltiples tactos vaginales, retención de restos placentarios, cesárea.
• Cuadro clínico: fiebre, taquicardia, dolor uterino, loquios fétidos, subinvolución uterina.
• Tratamiento: hospitalización + antibióticos IV de amplio espectro (clindamicina + gentamicina es esquema clásico).
• Evaluar restos retenidos con ecografía; si hay retención significativa, evacuar tras iniciar ATB.
• No retrasar antibióticos esperando resultados de imagen.

Por lo tanto:
El diagnóstico es endometritis puerperal y la conducta es hospitalización con ATB IV y evaluación de restos retenidos.

¿Por qué la opción D es la respuesta correcta?
Combina los tres pilares del manejo: ingreso hospitalario, antibióticos intravenosos de amplio espectro inmediatos y evaluación de restos ovulares retenidos que pueden perpetuar la infección.

¿Por qué fallan las otras opciones?
Opción A (manejo ambulatorio con amoxicilina/clavulanato): la endometritis puerperal requiere hospitalización y ATB IV; el manejo oral ambulatorio es insuficiente.
Opción B (legrado uterino inmediato sin medidas adicionales): evacuar restos sin tratar la infección sistémica primero aumenta el riesgo de complicaciones; el legrado se reserva si hay retención documentada, generalmente tras iniciar ATB.
Opción C (ecografía antes de iniciar tratamiento): no se debe retrasar el inicio de antibióticos por estudios de imagen; la ecografía es complementaria, no previa al tratamiento.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Sangrado postparto + cérvix abierto = retención de restos → legrado inmediato."
Pero la clave es el cuadro infeccioso completo (fiebre, taquicardia, dolor uterino, loquios fétidos).
Aquí el dato decisivo es:
Endometritis puerperal = ATB IV primero, no legrado ni ambulatorio.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer endometritis: fiebre + dolor uterino + loquios fétidos en puerperio.
2. Hospitalizar e iniciar ATB IV de amplio espectro sin demora.
3. Evaluar restos retenidos con ecografía de forma paralela.
4. Evacuar restos si están presentes, generalmente tras iniciar antibióticos.

Perlas de examen
✅ Dolor uterino + loquios fétidos en puerperio = endometritis, no solo sangrado anormal.
✅ ATB IV inmediato (clindamicina + gentamicina); no retrasar por ecografía.
✅ Hospitalización obligatoria; el manejo ambulatorio oral es insuficiente.
✅ Legrado sin ATB no es conducta inicial; primero tratar infección.
✅ Restos placentarios retenidos perpetúan infección → evaluar siempre.

Referencias
• ACOG Practice Bulletin: Postpartum Infections.
• Williams Obstetrics.
• UpToDate: Postpartum Endometritis.`,
  },
  {
    id: "dr-q-142",
    examArea: "Ginecología y Obstetricia / Medicina materno-fetal",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "obstetricia", "rcf", "crecimiento_fetal"],
    statement:
      "Mujer de 28 años, G2P1A0, con gestación actual de 33 semanas. Sin antecedentes de importancia. Durante control prenatal trae ecografía obstétrica que reporta índice de líquido amniótico (ILA) de 7 cm y peso fetal estimado en percentil 7 para la edad gestacional. Doppler fetal y Doppler de arterias uterinas dentro de parámetros normales. ¿Cuál es el diagnóstico y la conducta más adecuada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Restricción del crecimiento fetal tardía estadio I; vigilancia estrecha con Doppler y finalización alrededor de las 37-38 semanas.",
      },
      {
        id: "B",
        label: "B",
        text: "Pequeño para la edad gestacional constitucional; continuar control prenatal habitual sin vigilancia adicional.",
      },
      {
        id: "C",
        label: "C",
        text: "Restricción del crecimiento fetal severa; interrupción inmediata del embarazo por alto riesgo de muerte fetal.",
      },
      { id: "D", label: "D", text: "Oligohidramnios severo; hospitalización e inducción inmediata del parto." },
    ],
    correctOptionId: "A",
    explanation:
      "Peso fetal < percentil 10 sugiere RCF. Doppler fetal normal = estadio I. Vigilancia estrecha con Doppler y finalización alrededor de 37-38 semanas.",
    keyPoints: [
      "Cuando veas: peso fetal estimado < percentil 10 + Doppler fetal normal en gestación ≥32 semanas.",
      "Debes pensar en: RCF tardía estadio I → vigilancia estrecha con Doppler y finalización ~37-38 semanas.",
      "ILA 7 cm no es oligohidramnios severo (corte <5 cm); no indica interrupción inmediata.",
      "PEG constitucional sin alteraciones Doppler ni ILA no requiere vigilancia especializada intensiva.",
      "Tema: Restricción del crecimiento fetal tardía — estadios y conducta.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina materno-fetal porque evalúa la clasificación de la restricción del crecimiento fetal (RCF) tardía según el Doppler fetal y la conducta apropiada según el estadio.

La clave no es asumir PEG constitucional, interrumpir inmediatamente ni confundir ILA 7 cm con oligohidramnios severo.
La clave es:
RCF tardía estadio I (PFE < p10 + Doppler normal) → vigilancia estrecha con Doppler y finalización alrededor de las 37-38 semanas.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 28 años, G2P1A0, gestación de 33 semanas.
• ILA de 7 cm (líquido amniótico en rango normal; oligohidramnios severo <5 cm).
• Peso fetal estimado en percentil 7 para la edad gestacional (< percentil 10).
• Doppler fetal y Doppler de arterias uterinas normales.

Recordemos la clasificación de RCF tardía (≥32 semanas):
• RCF: PFE o circunferencia abdominal < percentil 10 (o < percentil 3 con otros criterios).
• Estadio I: Doppler de arteria umbilical normal → vigilancia estrecha con Doppler seriado.
• Estadio II: Doppler umbilical alterado (diástole cero o reversa) → vigilancia intensiva, considerar finalización según edad gestacional.
• Estadio III: Doppler de ducto venoso alterado o biometría estática → alto riesgo, finalización según contexto.
• Conducta en estadio I: vigilancia con Doppler cada 1-2 semanas; parto electivo ~37-38 semanas si estable.
• PEG constitucional: feto pequeño pero con Doppler normal, crecimiento paralelo y sin otros hallazgos; requiere criterios más estrictos.

Por lo tanto:
El diagnóstico es RCF tardía estadio I y la conducta es vigilancia estrecha con Doppler y finalización alrededor de 37-38 semanas.

¿Por qué la opción A es la respuesta correcta?
Identifica correctamente RCF tardía estadio I (PFE percentil 7 + Doppler normal) y propone la conducta estándar: vigilancia estrecha con Doppler seriado y finalización electiva ~37-38 semanas.

¿Por qué fallan las otras opciones?
Opción B (PEG constitucional sin vigilancia adicional): un PFE en percentil 7 requiere clasificar como RCF y vigilar con Doppler, no asumir variante constitucional sin seguimiento especializado.
Opción C (RCF severa con interrupción inmediata): la RCF severa implica Doppler alterado, biometría estática o compromiso fetal; con Doppler normal es estadio I, no severa.
Opción D (oligohidramnios severo con inducción inmediata): ILA 7 cm está en rango normal; oligohidramnios severo se define como ILA <5 cm.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Peso fetal bajo = interrumpir embarazo de inmediato."
Pero el estadio depende del Doppler fetal, no solo del percentil de peso.
Aquí el dato decisivo es:
PFE percentil 7 + Doppler normal = estadio I → vigilancia, no interrupción inmediata.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. PFE < percentil 10 → sospechar RCF (no solo PEG).
2. Clasificar estadio según Doppler fetal (umbilical, MCA, ducto venoso).
3. Estadio I con Doppler normal → vigilancia estrecha.
4. Finalizar electivamente ~37-38 semanas si estable.

Perlas de examen
✅ PFE < p10 + Doppler normal = RCF tardía estadio I → vigilancia.
✅ ILA 7 cm es normal; oligohidramnios severo <5 cm.
✅ No interrumpir inmediatamente si Doppler es normal (estadio I).
✅ PEG constitucional requiere criterios más estrictos que un solo percentil bajo.
✅ Doppler seriado cada 1-2 semanas en estadio I; parto ~37-38 semanas.

Referencias
• ISUOG Practice Guidelines: Diagnosis and Management of Fetal Growth Restriction.
• FIGO Consensus on FGR.
• Williams Obstetrics.
• UpToDate: Fetal Growth Restriction.`,
  },
  {
    id: "dr-q-143",
    examArea: "Ginecología y Obstetricia / Anticoncepción",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "les", "anticoncepcion"],
    statement:
      "Mujer de 25 años con diagnóstico de Lupus Eritematoso Sistémico en seguimiento por reumatología. Se encuentra en remisión clínica, sin brotes recientes y con adecuado control farmacológico. Acude a consulta para consejería anticonceptiva. ¿Cuál de los siguientes métodos anticonceptivos NO recomendaría de forma rutinaria?",
    options: [
      { id: "A", label: "A", text: "Dispositivo intrauterino de cobre." },
      { id: "B", label: "B", text: "Implante subdérmico de etonogestrel." },
      { id: "C", label: "C", text: "Anticonceptivos orales combinados con estrógenos." },
      { id: "D", label: "D", text: "Sistema intrauterino liberador de levonorgestrel." },
    ],
    correctOptionId: "C",
    explanation:
      "En LES, los anticonceptivos combinados con estrógenos son los menos recomendados de rutina por riesgo potencial de trombosis y exacerbación, especialmente con anticuerpos antifosfolípidos.",
    keyPoints: [
      "Cuando veas: mujer con LES (aunque en remisión) + consejería anticonceptiva.",
      "Debes pensar en: evitar anticonceptivos orales combinados con estrógenos por riesgo trombótico y de exacerbación.",
      "Preferir progestágenos solos, DIU de cobre o DIU-LNG en la mayoría de pacientes con LES.",
      "Anticuerpos antifosfolípidos modifican significativamente la elección anticonceptiva.",
      "Tema: Anticoncepción en lupus eritematoso sistémico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ginecología reumatológica porque evalúa la selección de métodos anticonceptivos en pacientes con lupus eritematoso sistémico, donde el riesgo trombótico y la posible exacerbación de la enfermedad condicionan la elección.

La clave no es asumir que la remisión clínica permite cualquier método ni que todos los métodos son igualmente seguros.
La clave es:
Evitar anticonceptivos orales combinados con estrógenos como opción de rutina en LES.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 25 años con diagnóstico de LES en seguimiento por reumatología.
• Remisión clínica, sin brotes recientes, adecuado control farmacológico.
• Consulta para consejería anticonceptiva.
• La pregunta pide el método que NO recomendaría de forma rutinaria.

Recordemos anticoncepción en LES:
• El LES confiere riesgo aumentado de eventos trombóticos, especialmente con anticuerpos antifosfolípidos.
• Los anticonceptivos combinados (estrógeno + progestágeno) aumentan el riesgo trombótico y pueden exacerbar el lupus.
• Métodos preferidos en LES estable: progestágenos solos (implante, inyectable, minipíldora), DIU de cobre, DIU-LNG.
• DIU de cobre: seguro en LES sin contraindicación; no contiene hormonas.
• Implante de etonogestrel y DIU-LNG: progestágenos solos, generalmente seguros en LES estable.
• La remisión clínica no elimina el riesgo trombótico basal del LES.
• Criterios de elegibilidad médica CDC/WHO: categoría 3-4 para combinados en LES con anticuerpos antifosfolípidos.

Por lo tanto:
El método que NO se recomienda de rutina es el anticonceptivo oral combinado con estrógenos.

¿Por qué la opción C es la respuesta correcta?
Los anticonceptivos orales combinados con estrógenos son los menos recomendados de rutina en LES por el riesgo potencial de trombosis y exacerbación, especialmente si hay anticuerpos antifosfolípidos.

¿Por qué fallan las otras opciones?
Opción A (DIU de cobre): método no hormonal, seguro y recomendado en LES; alta eficacia.
Opción B (implante de etonogestrel): progestágeno solo, generalmente seguro en LES estable; alta eficacia.
Opción D (DIU-LNG): progestágeno local, generalmente seguro en LES estable; reduce sangrado menstrual.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Paciente estable = puede usar cualquier anticonceptivo."
Pero el LES en sí confiere riesgo trombótico independiente de la actividad actual.
Aquí el dato decisivo es:
Tiene lupus, no solo que esté en remisión → evitar estrógenos de rutina.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar LES como condición que modifica la anticoncepción.
2. Evitar combinados con estrógenos como primera opción.
3. Preferir progestágenos solos, DIU de cobre o DIU-LNG.
4. Evaluar anticuerpos antifosfolípidos (modifican aún más la elegibilidad).

Perlas de examen
✅ LES + anticoncepción → evitar estrógenos cuando hay alternativas.
✅ Remisión clínica no elimina el riesgo trombótico del LES.
✅ DIU de cobre, implante y DIU-LNG son opciones seguras en la mayoría.
✅ Anticuerpos antifosfolípidos contraindican combinados (categoría 4 CDC/WHO).
✅ La pregunta pide el método NO recomendado → combinados con estrógenos.

Referencias
• EULAR Recommendations for Reproductive Health in SLE.
• CDC U.S. Medical Eligibility Criteria for Contraceptive Use.
• ACOG Practice Bulletin: Hormonal Contraception in Women with Coexisting Medical Conditions.
• UpToDate: Contraception in women with systemic lupus erythematosus.`,
  },
  {
    id: "dr-q-144",
    examArea: "Hematología / Anemias",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "anemia", "ferropenia"],
    statement:
      "Mujer de 35 años consulta por menstruaciones irregulares y abundantes de varios meses de evolución. Trae hemograma solicitado en consulta previa que reporta: Hb 11.2 g/dL, hematocrito 30.4%, reticulocitos 0.7%, VCM 82 fL, plaquetas 200.000/mm³ y leucocitos 5.800/mm³. ¿Cuál es el diagnóstico más probable y cuáles son las ayudas diagnósticas iniciales más apropiadas?",
    options: [
      { id: "A", label: "A", text: "Anemia hemolítica; solicitar LDH, haptoglobina y prueba de Coombs." },
      {
        id: "B",
        label: "B",
        text: "Anemia ferropénica secundaria a sangrado uterino anormal; solicitar perfil férrico con ferritina sérica.",
      },
      { id: "C", label: "C", text: "Anemia megaloblástica; solicitar vitamina B12 y ácido fólico." },
      { id: "D", label: "D", text: "Anemia de enfermedad crónica; solicitar VSG y proteína C reactiva." },
    ],
    correctOptionId: "B",
    explanation:
      "Menorragia + anemia leve + reticulocitos bajos orienta a anemia ferropénica por pérdidas crónicas. Confirmar con ferritina sérica.",
    keyPoints: [
      "Cuando veas: mujer premenopáusica + menorragia crónica + anemia leve + reticulocitos bajos.",
      "Debes pensar en: anemia ferropénica por pérdidas crónicas → perfil férrico con ferritina sérica.",
      "Ferropenia temprana puede tener VCM normal (normocrómica-normocítica inicial).",
      "Reticulocitos bajos excluyen hemólisis activa y orientan a déficit de producción por ferropenia.",
      "Tema: Anemia ferropénica secundaria a sangrado uterino anormal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hematología porque evalúa el abordaje inicial de la anemia en una mujer premenopáusica con sangrado uterino anormal, donde la causa más frecuente es la ferropenia por pérdidas crónicas.

La clave no es solicitar estudios de hemólisis, megabolastosis ni anemia de enfermedad crónica sin evidencia.
La clave es:
Anemia ferropénica secundaria a sangrado uterino anormal → perfil férrico con ferritina sérica.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 35 años con menstruaciones irregulares y abundantes de varios meses.
• Hb 11.2 g/dL, hematocrito 30.4% (anemia leve).
• Reticulocitos 0.7% (bajos → producción insuficiente, no hemólisis).
• VCM 82 fL (normocítica; la ferropenia temprana puede no ser microcítica aún).
• Plaquetas y leucocitos normales.

Recordemos el abordaje de anemia en mujeres premenopáusicas:
• Causa más frecuente de ferropenia: sangrado ginecológico crónico (menorragia, metrorragia).
• Ferropenia temprana: Hb levemente baja, VCM normal o ligeramente bajo, reticulocitos bajos.
• Ferropenia establecida: microcitosis (VCM <80 fL), hipocromía.
• Reticulocitos bajos: orienta a déficit de producción (ferropenia, enfermedad crónica, aplasia).
• Reticulocitos elevados: orienta a hemólisis o sangrado agudo con respuesta medular.
• Ferritina sérica: mejor marcador de depósitos de hierro (baja en ferropenia).
• Estudios de hemólisis (LDH, haptoglobina, Coombs): solo si reticulocitos elevados o sospecha clínica.

Por lo tanto:
El diagnóstico más probable es anemia ferropénica por sangrado uterino anormal y el estudio inicial es perfil férrico con ferritina sérica.

¿Por qué la opción B es la respuesta correcta?
La menorragia crónica con anemia leve, reticulocitos bajos y VCM normal orienta a ferropenia temprana por pérdidas; la ferritina confirma el diagnóstico y guía el tratamiento.

¿Por qué fallan las otras opciones?
Opción A (anemia hemolítica con LDH, haptoglobina, Coombs): los reticulocitos bajos (0.7%) excluyen hemólisis activa; la hemólisis produce reticulocitosis.
Opción C (anemia megaloblástica con B12 y folato): el VCM es normal (82 fL); la megaloblastosis produce macrocitosis (VCM >100 fL).
Opción D (anemia de enfermedad crónica con VSG y PCR): no hay evidencia de enfermedad inflamatoria crónica; la causa más probable es sangrado ginecológico.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Anemia = esperar VCM <80 para diagnosticar ferropenia."
Pero la ferropenia temprana puede presentarse con VCM normal y Hb levemente disminuida.
Aquí el dato decisivo es:
Menorragia crónica + reticulocitos bajos + Hb 11.2 = ferropenia, aunque VCM sea 82 fL.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar causa probable: sangrado ginecológico en mujer premenopáusica.
2. Interpretar reticulocitos: bajos = déficit de producción, no hemólisis.
3. No esperar microcitosis para sospechar ferropenia.
4. Confirmar con ferritina sérica e investigar/tratar sangrado uterino anormal.

Perlas de examen
✅ Causa más frecuente de ferropenia en premenopáusicas: sangrado ginecológico.
✅ Ferropenia temprana puede tener VCM normal (82 fL).
✅ Reticulocitos bajos = ↓ producción, no hemólisis.
✅ Ferritina confirma depósitos de hierro.
✅ Hemólisis produce reticulocitosis, no reticulocitos bajos.

Referencias
• BSH Guidelines for the Management of Iron Deficiency Anaemia.
• Williams Hematology.
• ACOG Committee Opinion: Abnormal Uterine Bleeding.
• UpToDate: Approach to the adult with anemia.`,
  },
  {
    id: "dr-q-145",
    examArea: "Urgencias / Reanimación",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "urgencias", "rcp", "aesp", "trauma"],
    statement:
      "Masculino de 33 años es traído por el servicio paramédico tras sufrir una caída desde un edificio en contexto de intento suicida. Durante el traslado se decide asegurar la vía aérea mediante secuencia rápida de intubación. Al llegar a urgencias, el monitor muestra ritmo sinusal organizado. Sin embargo, al examen físico usted verifica ausencia de pulso central. ¿Cuál es el paso a seguir en el manejo de este paciente?",
    options: [
      { id: "A", label: "A", text: "Desfibrilación inmediata a 200 J." },
      { id: "B", label: "B", text: "Administrar atropina intravenosa." },
      {
        id: "C",
        label: "C",
        text: "Iniciar reanimación cardiopulmonar de alta calidad y manejo del algoritmo de actividad eléctrica sin pulso.",
      },
      { id: "D", label: "D", text: "Realizar cardioversión sincronizada urgente." },
    ],
    correctOptionId: "C",
    explanation:
      "Ritmo organizado en monitor + ausencia de pulso = actividad eléctrica sin pulso (AESP). Ritmo no desfibrilable: RCP de alta calidad + adrenalina + buscar causas reversibles (H's y T's), especialmente en trauma.",
    keyPoints: [
      "Cuando veas: ritmo organizado en monitor + ausencia de pulso central.",
      "Debes pensar en: actividad eléctrica sin pulso (AESP/PEA) → RCP de alta calidad + algoritmo AESP.",
      "No desfibrilar ritmos no desfibrilables; la cardioversión sincronizada tampoco aplica sin pulso.",
      "En trauma: buscar causas reversibles (H's y T's), especialmente hipovolemia, neumotórax a tensión y taponamiento.",
      "Tema: Paro cardíaco — actividad eléctrica sin pulso (AESP/PEA).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de reanimación cardiopulmonar porque evalúa el reconocimiento de la actividad eléctrica sin pulso (AESP/PEA): un ritmo no desfibrilable que requiere RCP de alta calidad y búsqueda de causas reversibles.

La clave no es desfibrilar, administrar atropina ni realizar cardioversión sincronizada.
La clave es:
Iniciar reanimación cardiopulmonar de alta calidad y manejo del algoritmo de actividad eléctrica sin pulso.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Masculino de 33 años, trauma por caída desde edificio (contexto de intento suicida).
• Intubado con secuencia rápida durante traslado.
• Monitor: ritmo sinusal organizado.
• Examen físico: ausencia de pulso central (paro cardíaco confirmado).

Recordemos los ritmos en paro cardíaco (AHA ACLS):
• Ritmos desfibrilables: fibrilación ventricular (FV) y taquicardia ventricular sin pulso (TVSP) → desfibrilación inmediata.
• Ritmos no desfibrilables: asistolia y actividad eléctrica sin pulso (AESP/PEA) → RCP + adrenalina + causas reversibles.
• AESP/PEA: actividad eléctrica organizada en monitor sin pulso palpable.
• Manejo AESP: RCP de alta calidad, adrenalina 1 mg IV/IO cada 3-5 min, buscar y tratar causas reversibles.
• Causas reversibles (H's y T's): Hipovolemia, Hipoxia, Hidrogenión (acidosis), Hipo/Hiperkalemia, Hipotermia; Taponamiento, Neumotórax a tensión, Trombosis (coronaria/pulmonar), Tóxicos.
• Atropina: ya no se usa en AESP según ACLS actual.
• Cardioversión sincronizada: para taquiarritmias con pulso e inestabilidad, no para paro.

Por lo tanto:
El diagnóstico es AESP/PEA y el manejo es RCP de alta calidad con algoritmo de actividad eléctrica sin pulso.

¿Por qué la opción C es la respuesta correcta?
Ritmo organizado sin pulso central define AESP; la conducta según ACLS es RCP de alta calidad, adrenalina y búsqueda de causas reversibles, especialmente en trauma (hipovolemia, neumotórax, taponamiento).

¿Por qué fallan las otras opciones?
Opción A (desfibrilación inmediata a 200 J): la desfibrilación es para FV/TV sin pulso; el ritmo sinusal organizado no es desfibrilable.
Opción B (atropina intravenosa): la atropina ya no se recomienda en el algoritmo de AESP según ACLS actual.
Opción D (cardioversión sincronizada urgente): la cardioversión sincronizada requiere pulso e inestabilidad hemodinámica; sin pulso se realiza RCP, no cardioversión.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Ritmo organizado en monitor = el corazón funciona."
Pero siempre se debe verificar pulso; el monitor puede mostrar actividad eléctrica sin contracción mecánica efectiva.
Aquí el dato decisivo es:
Ritmo sinusal + sin pulso = AESP → RCP, no desfibrilación.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar paro: ritmo en monitor + ausencia de pulso central.
2. Clasificar ritmo: desfibrilable (FV/TVSP) vs no desfibrilable (AESP/asistolia).
3. AESP → RCP de alta calidad + adrenalina cada 3-5 min.
4. Buscar causas reversibles (H's y T's); en trauma priorizar hipovolemia, neumotórax y taponamiento.

Perlas de examen
✅ AESP = ritmo organizado sin pulso → RCP + adrenalina, no desfibrilación.
✅ Siempre verificar pulso; no confiar solo en el monitor.
✅ Atropina ya no se usa en AESP (ACLS actual).
✅ Cardioversión sincronizada requiere pulso; sin pulso = RCP.
✅ En trauma con AESP: buscar hipovolemia, neumotórax a tensión y taponamiento cardíaco.

Referencias
• AHA ACLS Guidelines — Adult Cardiac Arrest Algorithm.
• ATLS — Advanced Trauma Life Support.
• UpToDate: Advanced cardiac life support (ACLS) in adults.
• Tintinalli Emergency Medicine.`,
  },
  {
    id: "dr-q-146",
    examArea: "Cirugía General / Trauma cervical",
    topic: "Cirugía General",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cirugia", "trauma", "cuello", "vascular"],
    statement:
      "Paciente masculino de 17 años es trasladado a urgencias tras recibir impacto por arma de fuego en cuello durante un atraco callejero. Se encuentra hemodinámicamente estable. Al examen físico presenta orificio de entrada en zona I izquierda del cuello y orificio de salida en zona II derecha. Se evidencia ausencia de pulso carotídeo derecho, hematoma cervical no expansible y ausencia de sangrado activo. ¿Cuál es el manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Observación clínica y control seriado del hematoma." },
      { id: "B", label: "B", text: "Angiotomografía de cuello." },
      { id: "C", label: "C", text: "Exploración quirúrgica inmediata del cuello." },
      { id: "D", label: "D", text: "Ecografía Doppler carotídea ambulatoria." },
    ],
    correctOptionId: "C",
    explanation:
      "Ausencia de pulso carotídeo = signo duro de lesión vascular cervical. Obliga exploración quirúrgica urgente independientemente de la estabilidad hemodinámica.",
    keyPoints: [
      "Cuando veas: trauma penetrante de cuello con ausencia de pulso carotídeo, aunque el paciente esté hemodinámicamente estable.",
      "Debes pensar en: signo duro de lesión vascular cervical → exploración quirúrgica inmediata.",
      "La estabilidad hemodinámica no descarta lesión vascular grave ni retrasa la cirugía ante un signo duro.",
      "La angiotomografía se reserva para signos blandos; un signo duro obliga a ir directo al quirófano.",
      "Tema: Trauma penetrante de cuello y manejo de signos duros vasculares.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de trauma cervical porque evalúa una trampa frecuente: confundir estabilidad hemodinámica con ausencia de lesión vascular grave.

La clave no es la angiotomografía ni la observación clínica.
La clave es:
Ausencia de pulso carotídeo = signo duro → exploración quirúrgica inmediata del cuello, independientemente de la estabilidad hemodinámica.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Trauma penetrante por arma de fuego en cuello (zona I entrada, zona II salida).
• Hemodinámicamente estable, sin sangrado activo.
• Ausencia de pulso carotídeo derecho.
• Hematoma cervical no expansible.

Recordemos los signos duros del trauma penetrante de cuello:
• Hemorragia incontrolable o pulsátil.
• Hematoma expansivo o pulsátil.
• Soplo o frémito sobre la lesión.
• Déficit neurológico focal o isquemia distal.
• Ausencia de pulso o pulso disminuido en territorio carotídeo o vertebral.

Por lo tanto:
No corresponde observación seriada, angiotomografía previa ni ecografía Doppler ambulatoria.
La conducta más adecuada es exploración quirúrgica inmediata del cuello.

¿Por qué la opción C es la respuesta correcta?
La ausencia de pulso carotídeo es un signo duro que indica lesión vascular significativa con riesgo de isquemia cerebral y evolución tórpida.
Las guías de trauma cervical (ATLS, EAST) indican exploración quirúrgica urgente ante signos duros, sin necesidad de estudios de imagen previos que retrasen el manejo.

¿Por qué fallan las otras opciones?
Opción A (observación y control seriado del hematoma): inaceptable ante signo duro; retrasa el control de la lesión vascular y aumenta el riesgo de isquemia cerebral.
Opción B (angiotomografía de cuello): útil en pacientes estables con signos blandos; con signo duro, la imagen no debe retrasar la cirugía.
Opción D (ecografía Doppler ambulatoria): inadecuada en urgencias con sospecha de lesión vascular aguda; no reemplaza la exploración quirúrgica ante signo duro.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"El paciente está estable, entonces primero hago angio-TC."
Pero el examen exige reconocer que la estabilidad hemodinámica no excluye lesión vascular grave.
El dato decisivo es:
Ausencia de pulso carotídeo = signo duro → cirugía inmediata.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar vía aérea, respiración y circulación en trauma cervical penetrante.
2. Identificar signos duros vs signos blandos de lesión vascular.
3. Ante signo duro (ausencia de pulso, hemorragia pulsátil, hematoma expansivo, soplo, isquemia): exploración quirúrgica inmediata.
4. Reservar angiotomografía para pacientes estables con signos blandos o trayecto dudoso sin signos duros.

Perlas de examen
✅ Ausencia de pulso carotídeo = signo duro → cirugía, no angio-TC previa.
✅ Estabilidad hemodinámica no descarta lesión vascular cervical grave.
✅ Signos duros obligan exploración quirúrgica inmediata según ATLS y EAST.
✅ Angio-TC es útil en trauma cervical estable con signos blandos.
✅ No confundir hematoma no expansible con ausencia de lesión vascular si hay ausencia de pulso.
✅ Las residencias preguntan cuándo operar de inmediato, no cuándo pedir más estudios.

Referencias
• ATLS — Advanced Trauma Life Support: Penetrating Neck Trauma.
• EAST Guidelines — Management of Penetrating Neck Trauma.
• UpToDate: Penetrating Neck Trauma.
• Feliciano DV et al. Trauma, 8th ed.`,
  },
  {
    id: "dr-q-147",
    examArea: "Ortopedia / Trauma",
    topic: "Ortopedia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ortopedia", "sindrome_compartimental", "trauma"],
    statement:
      "Masculino de 32 años con diagnóstico de fractura cerrada de tibia y peroné derecho luego de sufrir un deslizamiento por un barranco. Es llevado exitosamente a manejo quirúrgico. Durante el postoperatorio presenta dolor intenso en la extremidad que no mejora con analgésicos. Signos vitales normales. Al examen físico presenta dolor exacerbado con el estiramiento pasivo de los músculos, palidez distal, parestesias y ausencia de pulsos distales. ¿Cuál es el manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Aumentar la analgesia con opioides y observación clínica." },
      { id: "B", label: "B", text: "Solicitar ecografía Doppler arterial de la extremidad." },
      { id: "C", label: "C", text: "Realizar fasciotomía urgente." },
      { id: "D", label: "D", text: "Retirar vendajes y reevaluar en 6 horas." },
    ],
    correctOptionId: "C",
    explanation:
      "Síndrome compartimental agudo: dolor desproporcionado, dolor al estiramiento pasivo, parestesias. Emergencia quirúrgica: fasciotomía urgente.",
    keyPoints: [
      "Cuando veas: fractura de tibia postoperatoria con dolor intenso desproporcionado, dolor al estiramiento pasivo y parestesias.",
      "Debes pensar en: síndrome compartimental agudo → fasciotomía urgente.",
      "El signo más precoz es dolor desproporcionado con dolor al estiramiento pasivo; la ausencia de pulsos es tardía.",
      "El diagnóstico es clínico; no retrasar fasciotomía por solicitar Doppler u observación.",
      "Tema: Síndrome compartimental agudo postraumático.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ortopedia y trauma porque evalúa una trampa frecuente: tratar el dolor como postoperatorio esperable o buscar estudios vasculares cuando el cuadro es neuromuscular por presión compartimental.

La clave no es aumentar opioides ni solicitar Doppler arterial.
La clave es:
Dolor desproporcionado + dolor con estiramiento pasivo + parestesias tras fractura de tibia → síndrome compartimental agudo → fasciotomía urgente.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Fractura cerrada de tibia y peroné tratada quirúrgicamente.
• Dolor intenso en postoperatorio que no mejora con analgésicos.
• Dolor exacerbado con estiramiento pasivo de los músculos.
• Palidez distal y parestesias.
• Ausencia de pulsos distales (signo tardío).
• Signos vitales normales (no descarta el diagnóstico).

Recordemos el síndrome compartimental agudo:
• Aumento de presión dentro de un compartimento osteofascial que compromete circulación y función neuromuscular.
• Causas frecuentes: fractura de tibia, trauma contuso, reperfusión, vendajes apretados.
• Los 6 P: Pain, Pain with passive stretch, Paresthesias, Pallor, Paralysis, Pulselessness (los dos últimos son tardíos).
• Diagnóstico principalmente clínico; la presión compartimental confirma pero no debe retrasar el tratamiento si la sospecha es alta.

Por lo tanto:
No corresponde solo aumentar opioides, retirar vendajes y esperar 6 horas, ni solicitar ecografía Doppler como paso inicial.
La conducta más adecuada es fasciotomía urgente.

¿Por qué la opción C es la respuesta correcta?
El cuadro cumple criterios clínicos de síndrome compartimental agudo con signos precoces (dolor desproporcionado, dolor al estiramiento pasivo, parestesias) y signos avanzados (palidez, ausencia de pulsos).
La fasciotomía urgente es el único tratamiento que previene necrosis muscular, contracturas, amputación y pérdida neurológica irreversible.

¿Por qué fallan las otras opciones?
Opción A (aumentar opioides y observar): retrasa un tratamiento quirúrgico de emergencia; el dolor desproporcionado y el dolor al estiramiento pasivo no se explican solo por dolor postoperatorio esperable.
Opción B (ecografía Doppler arterial): el problema principal es presión compartimental, no oclusión arterial primaria; el estudio no debe retrasar la fasciotomía ante alta sospecha clínica.
Opción D (retirar vendajes y reevaluar en 6 horas): 6 horas de retraso puede causar daño irreversible; la fasciotomía no puede postergarse ante signos claros.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Sin pulsos distales, primero debo descartar oclusión arterial con Doppler."
Pero el examen exige reconocer que la ausencia de pulsos en este contexto es signo tardío de síndrome compartimental, no indicación de estudio vascular previo.
El dato decisivo es:
Dolor al estiramiento pasivo + parestesias tras fractura de tibia → fasciotomía urgente.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar síndrome compartimental ante dolor desproporcionado tras trauma o cirugía de extremidad.
2. Confirmar signos clave: dolor con estiramiento pasivo, parestesias, tensión compartimental.
3. No esperar ausencia de pulsos ni parálisis para actuar.
4. Realizar fasciotomía urgente de todos los compartimentos afectados.

Perlas de examen
✅ El signo más precoz es dolor desproporcionado + dolor con estiramiento pasivo.
✅ Ausencia de pulsos = signo tardío; no esperar para diagnosticar ni tratar.
✅ Fractura de tibia = causa frecuente de síndrome compartimental.
✅ Diagnóstico clínico; no retrasar fasciotomía por Doppler o presión compartimental.
✅ Más opioides no tratan la causa; solo la fasciotomía libera la presión.
✅ Las residencias preguntan cuándo operar de emergencia, no cuándo observar.

Referencias
• ATLS — Acute Compartment Syndrome.
• UpToDate: Acute Compartment Syndrome.
• McQueen MM, Court-Brown CM. Compartment monitoring in tibial fractures.
• Tintinalli Emergency Medicine.`,
  },
  {
    id: "dr-q-148",
    examArea: "Cirugía Pediátrica / Urología",
    topic: "Pediatría",
    difficulty: "easy",
    tags: ["dr-q", "universal", "metodoq", "pediatria", "urologia", "criptorquidia"],
    statement:
      "Lactante masculino de 8 meses es llevado a consulta de control. Al examen físico se encuentra en buenas condiciones generales. En la evaluación genital se observan genitales externos normales para la edad. A la palpación se identifica testículo derecho dentro de la bolsa escrotal, mientras que el testículo izquierdo se encuentra palpable en el canal inguinal. ¿Cuál es el manejo más adecuado para este paciente?",
    options: [
      { id: "A", label: "A", text: "Observación clínica hasta los 2 años de edad." },
      { id: "B", label: "B", text: "Solicitar ecografía inguinoescrotal antes de tomar decisiones terapéuticas." },
      {
        id: "C",
        label: "C",
        text: "Remisión a cirugía pediátrica/urología pediátrica para corrección quirúrgica (orquidopexia).",
      },
      { id: "D", label: "D", text: "Iniciar tratamiento con testosterona intramuscular." },
    ],
    correctOptionId: "C",
    explanation:
      "Criptorquidia unilateral palpable a los 8 meses. Descenso espontáneo poco probable después de 6 meses. Remitir para orquidopexia idealmente entre 6-18 meses.",
    keyPoints: [
      "Cuando veas: lactante de 8 meses con testículo no descendido pero palpable en canal inguinal.",
      "Debes pensar en: criptorquidia unilateral palpable → remisión para orquidopexia.",
      "El descenso espontáneo es poco probable después de los 6 meses; no esperar hasta los 2 años.",
      "Si el testículo es palpable, el diagnóstico es clínico y no requiere ecografía previa.",
      "Tema: Criptorquidia y manejo quirúrgico en pediatría.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de pediatría y urología pediátrica porque evalúa una trampa frecuente: seguir observando o pedir ecografía cuando la edad y la palpabilidad ya definen el manejo.

La clave no es esperar hasta los 2 años ni solicitar ecografía inguinoescrotal.
La clave es:
Criptorquidia unilateral palpable a los 8 meses → descenso espontáneo improbable → remisión para orquidopexia entre 6-18 meses.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Lactante masculino de 8 meses en buenas condiciones generales.
• Genitales externos normales.
• Testículo derecho en bolsa escrotal.
• Testículo izquierdo palpable en canal inguinal (criptorquidia unilateral palpable).

Recordemos la criptorquidia:
• Testículo no descendido al escroto al nacer o en los primeros meses.
• La mayoría de testículos no descendidos al nacer descienden espontáneamente en el primer semestre de vida.
• Después de los 6 meses, el descenso espontáneo es poco probable.
• La orquidopexia ideal se realiza entre 6-18 meses para reducir riesgo de infertilidad, torsión y cáncer testicular.
• Testículo palpable: diagnóstico clínico; no requiere ecografía para confirmar.
• Testículo no palpable: requiere evaluación adicional para descartar testículo abdominal o ausente.

Por lo tanto:
No corresponde observar hasta los 2 años, solicitar ecografía de rutina ni iniciar testosterona.
La conducta más adecuada es remisión a cirugía pediátrica/urología pediátrica para orquidopexia.

¿Por qué la opción C es la respuesta correcta?
A los 8 meses, con testículo palpable en canal inguinal, el manejo es quirúrgico.
Las guías actuales (AUA, ESPU) recomiendan orquidopexia entre 6-18 meses para optimizar resultados funcionales y oncológicos a largo plazo.

¿Por qué fallan las otras opciones?
Opción A (observar hasta los 2 años): retrasa innecesariamente el tratamiento; después de 6 meses el descenso espontáneo es improbable y se pierde la ventana óptima quirúrgica.
Opción B (ecografía inguinoescrotal): innecesaria cuando el testículo es palpable; el diagnóstico es clínico y la ecografía no cambia la indicación de cirugía.
Opción D (testosterona intramuscular): no es tratamiento de elección; no sustituye la orquidopexia y no corrige de forma confiable la criptorquidia persistente.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Si el testículo es palpable, puedo observar más tiempo o confirmar con ecografía."
Pero el examen exige reconocer que la edad (8 meses) es el dato decisivo junto con la palpabilidad.
El dato decisivo es:
Más de 6 meses con criptorquidia persistente → orquidopexia, no observación prolongada.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar testículo no descendido al examen físico.
2. Determinar si es palpable o no palpable.
3. Si es palpable y tiene más de 6 meses: remitir para orquidopexia (ideal 6-18 meses).
4. Si es no palpable: evaluación adicional para localizar el testículo antes de cirugía.

Perlas de examen
✅ Descenso espontáneo raro después de los 6 meses.
✅ Testículo palpable → diagnóstico clínico, sin ecografía de rutina.
✅ Orquidopexia ideal entre 6-18 meses de edad.
✅ Riesgos de no tratar: infertilidad, torsión testicular, mayor riesgo de cáncer testicular.
✅ Testosterona no reemplaza la orquidopexia en criptorquidia persistente.
✅ Las residencias preguntan cuándo operar, no cuándo seguir observando.

Referencias
• AUA Guidelines on Cryptorchidism.
• ESPU Guidelines on Undescended Testes.
• Nelson Textbook of Pediatrics.
• UpToDate: Undescended Testes (Cryptorchidism).`,
  },
  {
    id: "dr-q-149",
    examArea: "Hematología / Anemias macrocíticas",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "macrocitosis", "hepatopatia"],
    statement:
      "Señale cuál de las siguientes anemias macrocíticas NO muestra rasgos megaloblásticos en la médula ósea:",
    options: [
      { id: "A", label: "A", text: "Anemia por déficit de vitamina B12." },
      { id: "B", label: "B", text: "Anemia por déficit de ácido fólico." },
      { id: "C", label: "C", text: "Anemia secundaria a hepatopatía crónica." },
      { id: "D", label: "D", text: "Anemia perniciosa." },
    ],
    correctOptionId: "C",
    explanation:
      "La hepatopatía crónica produce macrocitosis no megaloblástica por alteración de lípidos de membrana eritrocitaria, sin defecto en síntesis de ADN.",
    keyPoints: [
      "Cuando veas: anemia macrocítica y la pregunta pide cuál NO tiene rasgos megaloblásticos en médula.",
      "Debes pensar en: hepatopatía crónica → macrocitosis no megaloblástica.",
      "Las anemias megaloblásticas (B12, folato, anemia perniciosa) muestran asincronía nuclear-citoplasmática por defecto en síntesis de ADN.",
      "La hepatopatía altera lípidos de membrana eritrocitaria y produce macrocitosis sin megaloblastos.",
      "Tema: Macrocitosis megaloblástica vs no megaloblástica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hematología porque evalúa una trampa frecuente: asumir que toda macrocitosis es megaloblástica y debe atribuirse a déficit de B12 o folato.

La clave no es agrupar todas las macrocitosis como megaloblásticas.
La clave es:
Macrocitosis ≠ megaloblastosis; la hepatopatía crónica produce macrocitosis sin rasgos megaloblásticos en médula ósea.

¿Qué está ocurriendo realmente?
La pregunta solicita identificar cuál anemia macrocítica NO muestra megaloblastos en médula ósea.
Las opciones incluyen causas megaloblásticas clásicas y una causa no megaloblástica:
• Déficit de vitamina B12 → megaloblástica.
• Déficit de ácido fólico → megaloblástica.
• Anemia perniciosa → megaloblástica (por malabsorción de B12).
• Hepatopatía crónica → macrocitosis no megaloblástica.

Recordemos la diferencia:
• Megaloblastosis: asincronía nuclear-citoplasmática por defecto en síntesis de ADN (déficit de B12, folato, drogas antimetabólicas).
• Macrocitosis no megaloblástica: aumento del VCM sin alteración de la maduración nuclear en médula.
• Causas no megaloblásticas: hepatopatía crónica, alcoholismo, hipotiroidismo, reticulocitosis, mielodisplasia, algunas citostáticas.
• En hepatopatía: la macrocitosis se explica por alteración de lípidos de membrana eritrocitaria y mayor cantidad de reticulocitos, no por defecto de ADN.
• Neutrófilos hipersegmentados sugieren megaloblastosis, no hepatopatía.

Por lo tanto:
La respuesta correcta es anemia secundaria a hepatopatía crónica, la única opción sin rasgos megaloblásticos en médula.

¿Por qué la opción C es la respuesta correcta?
La hepatopatía crónica produce macrocitosis por mecanismos distintos al defecto de síntesis de ADN.
En aspirado de médula ósea no se observan eritroblastos megaloblásticos ni la asincronía nuclear-citoplasmática característica de las anemias por B12 o folato.

¿Por qué fallan las otras opciones?
Opción A (déficit de vitamina B12): anemia macrocítica megaloblástica clásica con megaloblastos en médula y neutrófilos hipersegmentados.
Opción B (déficit de ácido fólico): también megaloblástica; comparte el mismo mecanismo de defecto en síntesis de ADN.
Opción D (anemia perniciosa): forma de déficit de B12 por malabsorción; igualmente megaloblástica en médula.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Macrocitosis = siempre pensar en B12 o folato."
Pero el examen exige distinguir macrocitosis megaloblástica de no megaloblástica según el mecanismo y los hallazgos medulares.
El dato decisivo es:
La pregunta pide la que NO tiene megaloblastos → hepatopatía crónica.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar macrocitosis (VCM elevado).
2. Diferenciar megaloblástica (B12, folato, perniciosa) de no megaloblástica (hepatopatía, alcohol, hipotiroidismo, reticulocitosis).
3. Buscar neutrófilos hipersegmentados y otros signos de megaloblastosis si la sospecha es megaloblástica.
4. Recordar que hepatopatía crónica causa macrocitosis sin megaloblastos en médula.

Perlas de examen
✅ Megaloblásticas: déficit B12, folato, anemia perniciosa.
✅ No megaloblásticas: hepatopatía, alcoholismo, hipotiroidismo, reticulocitosis.
✅ Megaloblastosis = asincronía nuclear-citoplasmática por defecto de ADN.
✅ Neutrófilos hipersegmentados sugieren megaloblastosis.
✅ Hepatopatía altera membrana eritrocitaria, no la síntesis de ADN.
✅ Las residencias preguntan la excepción, no solo las causas más frecuentes.

Referencias
• Hoffbrand's Essential Haematology.
• Williams Hematology.
• UpToDate: Macrocytosis/Macrocytic Anemia.
• Kaferle J, Strzoda CE. Evaluation of macrocytosis.`,
  },
  {
    id: "dr-q-150",
    examArea: "Hematología / Hemoglobinopatías",
    topic: "Hematología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hematologia", "drepanocitosis", "anemia_hemolitica"],
    statement:
      "Paciente masculino de 24 años, con ascendencia afrodescendiente, consulta por cuadro de fatiga crónica, ictericia intermitente y episodios recurrentes de dolor intenso en extremidades que han requerido múltiples consultas a urgencias. Refiere antecedentes de úlceras maleolares de difícil cicatrización e infecciones respiratorias repetidas desde la infancia. Al examen físico presenta palidez mucocutánea y una cicatriz compatible con úlcera maleolar previa. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Esferocitosis hereditaria." },
      { id: "B", label: "B", text: "Deficiencia de glucosa-6-fosfato deshidrogenasa." },
      { id: "C", label: "C", text: "Drepanocitosis (anemia falciforme)." },
      { id: "D", label: "D", text: "Talasemia menor." },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente presenta una clásica enfermedad de células falciformes (Drepanocitosis). La combinación de anemia hemolítica crónica (ictericia, fatiga), crisis vasooclusivas (dolor recurrente en extremidades) y manifestaciones de daño orgánico crónico (úlceras maleolares y asplenia funcional evidenciada por infecciones a repetición) es patognomónica. El antecedente afrodescendiente es clave epidemiológicamente.\n\n¿Por qué se descartan las otras opciones?\n• Opción A (Esferocitosis hereditaria): Es un defecto de las proteínas de membrana (espectrina/anquirina) que causa hemólisis y esplenomegalia masiva, pero los eritrocitos esféricos no polimerizan ni se atascan en los capilares, por lo que jamás produce isquemia, crisis de dolor ni úlceras maleolares.\n• Opción B (Deficiencia de G6PD): Es un defecto enzimático que protege contra la malaria pero causa episodios agudos de hemólisis intravascular (con orina oscura) únicamente cuando el paciente se expone a estrés oxidativo (habas, primaquina, sulfas, infecciones agudas). Entre episodios, el paciente es totalmente asintomático, sin úlceras crónicas ni isquemia.\n• Opción D (Talasemia menor): Es un defecto cuantitativo de las cadenas de globina que produce un rasgo talasémico. Clínicamente, el paciente es asintomático o tiene una anemia microcítica leve confundible con ferropenia; nunca tiene crisis isquémicas ni asplenia.",
    keyPoints: [
      "Cuando veas: paciente joven afrodescendiente con anemia crónica, ictericia, crisis dolorosas recurrentes y úlceras maleolares.",
      "Debes pensar en: drepanocitosis (anemia falciforme).",
      "La clave no es solo la anemia hemolítica, sino los fenómenos vasooclusivos y la asplenia funcional.",
      "Úlceras maleolares e infecciones recurrentes desde la infancia son hallazgos clásicos de drepanocitosis.",
      "Tema: Drepanocitosis y diagnóstico diferencial de anemias hemolíticas.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hematología porque evalúa una trampa frecuente: diagnosticar solo anemia hemolítica sin reconocer el patrón clínico completo de vasooclusión, úlceras maleolares y asplenia funcional.

La clave no es esferocitosis, G6PD ni talasemia menor.
La clave es:
Anemia hemolítica crónica + crisis vasooclusivas dolorosas + úlceras maleolares + infecciones recurrentes desde la infancia → drepanocitosis.

¿Qué está ocurriendo realmente en la fisiopatología?
La drepanocitosis (anemia falciforme) es causada por una mutación puntual (sustitución de ácido glutámico por valina en la posición 6 de la cadena beta de la globina), creando la Hemoglobina S (HbS). 
Cuando la HbS se desoxigena (por hipoxia, acidosis, fiebre o deshidratación), polimeriza formando cristales intracelulares táctoides que deforman el eritrocito, dándole forma de hoz (falciforme) o medialuna. 
Esta deformación tiene dos consecuencias letales:
1. **Hemólisis:** El glóbulo rojo deforme y rígido es destruido prematuramente (sobrevida de 10-20 días vs 120 días).
2. **Vasooclusión:** Los eritrocitos falciformes pierden su flexibilidad, adhiriéndose al endotelio y atascándose en la microcirculación. Esto genera **microinfartos tisulares** que causan el dolor extremo en huesos/extremidades, necrosis papilar renal, y las clásicas **úlceras maleolares**. 

¿Por qué las infecciones a repetición?
El bazo sufre microinfartos repetidos desde la infancia por estas vasooclusiones. A los 4-5 años de edad, el bazo se auto-destruye y fibrosa (autoesplenectomía o **asplenia funcional**). Sin bazo, el paciente queda indefenso contra bacterias encapsuladas (*S. pneumoniae*, *N. meningitidis*, *H. influenzae*), siendo la sepsis neumocócica una causa principal de muerte en la infancia.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Anemia + ictericia = cualquier anemia hemolítica hereditaria." y dudan con esferocitosis o G6PD. 
Pero el examen exige reconocer los **fenómenos vasooclusivos**. Ni la esferocitosis ni el déficit de G6PD causan microtrombos, isquemia, ni infartos óseos.
El dato decisivo es:
Crisis dolorosas + úlceras maleolares + infecciones recurrentes desde la infancia = drepanocitosis.

Perlas de examen y práctica clínica:
✅ Anemia hemolítica + Vasooclusión isquémica = Drepanocitosis.
✅ Úlceras maleolares = hallazgo clásico cutáneo en adultos jóvenes con enfermedad falciforme.
✅ Dactilitis (Síndrome mano-pie) = primera manifestación vasooclusiva en lactantes (inflamación dolorosa de manos y pies).
✅ Asplenia funcional = alto riesgo de sepsis por neumococo. Requieren vacunación profiláctica agresiva y penicilina profiláctica hasta los 5 años.
✅ Tratamiento de mantenimiento principal: **Hidroxiurea** (aumenta la producción de Hemoglobina Fetal, la cual no polimeriza, diluyendo la HbS y evitando las crisis).

Referencias
• Williams Hematology.
• NHLBI Evidence-Based Management of Sickle Cell Disease.
• UpToDate: Overview of the clinical manifestations of sickle cell disease.`,
  },
  {
    id: "dr-q-151",
    examArea: "Cardiología / Fibrilación auricular",
    topic: "Cardiología",
    difficulty: "easy",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "fibrilacion_auricular", "anticoagulacion"],
    statement:
      "Paciente masculino de 58 años con diagnóstico reciente de fibrilación auricular no valvular. Al evaluar la necesidad de anticoagulación, ¿en cuál de las siguientes situaciones estaría MENOS indicada?",
    options: [
      { id: "A", label: "A", text: "Edad menor de 60 años." },
      { id: "B", label: "B", text: "Hipertensión arterial." },
      { id: "C", label: "C", text: "Edad superior a 75 años." },
      { id: "D", label: "D", text: "Insuficiencia cardíaca." },
    ],
    correctOptionId: "A",
    explanation:
      "La indicación de anticoagulación en la fibrilación auricular no valvular se determina mediante la escala CHA₂DS₂-VASc. En este score, una edad menor de 65 años (como en la opción A) aporta 0 puntos, por lo que de forma aislada, es la situación donde MENOS indicada estaría la anticoagulación.\n\n¿Por qué se descartan las otras opciones?\n• Opción B (Hipertensión): Aporta 1 punto (la 'H' del score).\n• Opción C (Edad >75 años): Aporta 2 puntos (la 'A₂' del score), siendo una indicación formal y fuerte de anticoagulación.\n• Opción D (Insuficiencia Cardíaca): Aporta 1 punto (la 'C' del score).",
    keyPoints: [
      "Cuando veas: Fibrilación auricular y decisión de anticoagular.",
      "Debes pensar en: Calcular de inmediato el CHA₂DS₂-VASc.",
      "Edad <65 años suma 0 puntos. Edad 65-74 años suma 1 punto. Edad ≥75 años suma 2 puntos.",
      "HTA (1), IC (1), Diabetes (1), ACV/AIT previo (2), Enf. vascular (1), Sexo femenino (1).",
      "Tema: Fibrilación auricular — Escala CHA₂DS₂-VASc.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa la indicación de anticoagulación en fibrilación auricular no valvular mediante CHA₂DS₂-VASc, pidiendo identificar la situación donde MENOS estaría indicada la anticoagulación.

La clave no es anticoagular a todo paciente con FA ni asumir que la edad joven siempre contraindica anticoagulación.
La clave es:
En FA no valvular, la anticoagulación se basa en CHA₂DS₂-VASc; edad <65 años aislada aporta 0 puntos y es la situación donde menos estaría indicada, frente a HTA, IC o edad ≥75 que sí incrementan el riesgo embólico.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 58 años con diagnóstico reciente de fibrilación auricular no valvular.
• Se evalúa la necesidad de anticoagulación según factores de riesgo embólico.
• La pregunta pide la situación donde MENOS estaría indicada la anticoagulación.

Recordemos CHA₂DS₂-VASc en FA no valvular:
• C: Insuficiencia cardíaca congestiva (1 punto).
• H: Hipertensión arterial (1 punto).
• A₂: Edad ≥75 años (2 puntos); edad 65-74 años (1 punto); edad <65 años (0 puntos).
• D: Diabetes mellitus (1 punto).
• S₂: ACV/AIT/tromboembolismo previo (2 puntos).
• V: Enfermedad vascular (1 punto).
• A: Edad 65-74 años (ya contabilizada arriba).
• Sc: Sexo femenino (1 punto).
• Score 0 en hombres o 1 en mujeres: generalmente no anticoagular; ≥2: anticoagulación recomendada.

Por lo tanto:
Edad menor de 60 años aislada no aporta puntos al CHA₂DS₂-VASc y representa la situación donde menos estaría indicada la anticoagulación.
HTA, IC y edad superior a 75 años sí incrementan el score y favorecen la anticoagulación.

¿Por qué la opción A es la respuesta correcta?
Edad menor de 60 años aislada no aporta puntos al CHA₂DS₂-VASc y es la situación donde menos estaría indicada la anticoagulación en FA no valvular.

¿Por qué fallan las otras opciones?
Opción B (hipertensión arterial): aporta 1 punto en CHA₂DS₂-VASc; aumenta la indicación de anticoagulación, no la disminuye.
Opción C (edad superior a 75 años): aporta 2 puntos; es uno de los factores de mayor peso para indicar anticoagulación.
Opción D (insuficiencia cardíaca): aporta 1 punto; incrementa el riesgo embólico y la indicación de anticoagulación.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Toda FA requiere anticoagulación automáticamente."
Pero la decisión se individualiza con CHA₂DS₂-VASc; edad joven sin otros factores puede no requerir anticoagulación.
Aquí el dato decisivo es:
La pregunta pide la situación MENOS indicada → edad <60 años aislada = 0 puntos.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar FA no valvular (no estenosis mitral moderada-grave ni prótesis mecánica).
2. Calcular CHA₂DS₂-VASc para estimar riesgo embólico.
3. Anticoagular si score ≥2 en hombres o ≥3 en mujeres (según guías actuales).
4. Edad <65 años aislada = menor indicación; HTA, IC y edad ≥75 aumentan la indicación.

Perlas de examen
✅ CHA₂DS₂-VASc guía anticoagulación en FA no valvular.
✅ Edad <65 años aislada = 0 puntos → menor indicación de anticoagulación.
✅ HTA, IC y edad ≥75 años incrementan el score y favorecen anticoagulación.
✅ No toda FA requiere anticoagulación automáticamente.
✅ La pregunta pide MENOS indicada → buscar el factor que no aporta puntos.

Referencias
• ESC Guidelines for the Management of Atrial Fibrillation.
• UpToDate: Atrial fibrillation: Anticoagulation therapy.
• January CT et al. 2019 AHA/ACC/HRS Focused Update on AF.
• CHA₂DS₂-VASc score — validación y aplicación clínica.`,
  },
  {
    id: "dr-q-152",
    examArea: "Gastroenterología / EII",
    topic: "Gastroenterología",
    difficulty: "easy",
    tags: ["dr-q", "universal", "metodoq", "gastroenterologia", "colitis_ulcerosa", "eii"],
    statement:
      "Paciente masculino de 28 años consulta por cuadro de varios meses de evolución caracterizado por deposiciones frecuentes con sangre y moco, asociadas a urgencia defecatoria y tenesmo rectal. Refiere pérdida de peso de 4 kg en los últimos meses. ¿Cuál es el síntoma más frecuente en la presentación de la colitis ulcerosa?",
    options: [
      { id: "A", label: "A", text: "Dolor abdominal tipo cólico." },
      { id: "B", label: "B", text: "Diarrea sanguinolenta." },
      { id: "C", label: "C", text: "Fiebre persistente." },
      { id: "D", label: "D", text: "Estreñimiento crónico." },
    ],
    correctOptionId: "B",
    explanation:
      "La manifestación clínica más frecuente y característica de la colitis ulcerosa es la diarrea con sangre, habitualmente con moco, urgencia y tenesmo.",
    keyPoints: [
      "Cuando veas: hombre joven con deposiciones frecuentes con sangre y moco, urgencia defecatoria, tenesmo rectal y pérdida de peso.",
      "Debes pensar en: colitis ulcerosa — la manifestación más frecuente es diarrea sanguinolenta.",
      "El dolor abdominal tipo cólico es más característico de enfermedad de Crohn que de colitis ulcerosa.",
      "La afectación en colitis ulcerosa es continua desde el recto hacia proximal.",
      "Tema: Colitis ulcerosa — presentación clínica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de gastroenterología porque evalúa la presentación clínica de la colitis ulcerosa, pidiendo identificar el síntoma más frecuente frente a otras manifestaciones menos características.

La clave no es asumir que el dolor abdominal es el síntoma cardinal ni confundir la presentación con enfermedad de Crohn.
La clave es:
Hombre joven con deposiciones frecuentes con sangre y moco, urgencia defecatoria y tenesmo → colitis ulcerosa, cuya manifestación clínica más frecuente y característica es la diarrea sanguinolenta.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 28 años con cuadro de varios meses de evolución.
• Deposiciones frecuentes con sangre y moco.
• Urgencia defecatoria y tenesmo rectal.
• Pérdida de peso de 4 kg en los últimos meses.
• Cuadro compatible con enfermedad inflamatoria intestinal (EII).

Recordemos colitis ulcerosa vs enfermedad de Crohn:
• Colitis ulcerosa: afectación continua del colon desde el recto; inflamación limitada a mucosa.
• Síntoma más frecuente en CU: diarrea sanguinolenta con moco, urgencia y tenesmo.
• Crohn: afectación transmural segmentaria (cualquier segmento del TGI); dolor abdominal tipo cólico más frecuente.
• Fiebre: presente en brotes graves, no es la manifestación más frecuente de presentación.
• Estreñimiento: no es característico de colitis ulcerosa activa.

Por lo tanto:
La manifestación clínica más frecuente y característica de la colitis ulcerosa es la diarrea con sangre, habitualmente con moco, urgencia y tenesmo.

¿Por qué la opción B es la respuesta correcta?
La diarrea sanguinolenta es el síntoma más frecuente y característico de la colitis ulcerosa, presente en la mayoría de los pacientes al inicio del cuadro.

¿Por qué fallan las otras opciones?
Opción A (dolor abdominal tipo cólico): puede estar presente pero no es el síntoma más frecuente; es más característico de enfermedad de Crohn.
Opción C (fiebre persistente): aparece en brotes graves o complicaciones, no es la presentación más frecuente.
Opción D (estreñimiento crónico): no es característico de colitis ulcerosa activa, que se manifiesta con diarrea.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"En EII el dolor abdominal es el síntoma principal."
Pero en colitis ulcerosa el síntoma cardinal es la diarrea sanguinolenta con urgencia y tenesmo; el dolor es más prominente en Crohn.
Aquí el dato decisivo es:
Sangre + moco + urgencia + tenesmo en hombre joven = colitis ulcerosa → diarrea sanguinolenta es el síntoma más frecuente.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar cuadro de EII: diarrea crónica con sangre, moco, urgencia y tenesmo.
2. Diferenciar CU (afectación continua desde recto, diarrea sanguinolenta) de Crohn (segmentaria, más dolor).
3. Recordar que la diarrea sanguinolenta es el síntoma más frecuente de presentación en colitis ulcerosa.
4. Confirmar con colonoscopia con biopsias.

Perlas de examen
✅ Colitis ulcerosa: diarrea sanguinolenta + tenesmo + urgencia = tríada cardinal.
✅ Afectación continua desde el recto hacia proximal.
✅ Crohn: más dolor abdominal y afectación transmural segmentaria.
✅ Fiebre en brotes graves, no presentación típica.
✅ No confundir dolor abdominal (más Crohn) con diarrea sanguinolenta (más CU).

Referencias
• ECCO Guidelines on Ulcerative Colitis.
• Sleisenger and Fordtran's Gastrointestinal and Liver Disease.
• UpToDate: Clinical manifestations and diagnosis of ulcerative colitis.
• Rubin DT et al. ACG Clinical Guideline: Ulcerative Colitis.`,
  },
  {
    id: "dr-q-153",
    examArea: "Cardiología / Electrocardiografía",
    topic: "Cardiología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "ecg", "bcrd"],
    statement:
      "Paciente masculino de 67 años con antecedente de hipertensión arterial. Durante valoración preoperatoria se realiza electrocardiograma que muestra un QRS de 0.14 segundos, morfología rSR' en V1 con una onda R' terminal ancha y una onda S ancha en derivaciones laterales (I, V5 y V6). ¿Cuál es el diagnóstico electrocardiográfico más probable?",
    options: [
      { id: "A", label: "A", text: "Bloqueo completo de rama izquierda." },
      { id: "B", label: "B", text: "Bloqueo incompleto de rama derecha." },
      { id: "C", label: "C", text: "Bloqueo completo de rama derecha." },
      { id: "D", label: "D", text: "Hemibloqueo anterior izquierdo." },
    ],
    correctOptionId: "C",
    explanation: "El electrocardiograma describe los tres criterios clásicos del bloqueo completo de rama derecha (BCRD):\n1. Ensanchamiento del QRS (≥0.12 segundos o 120 ms).\n2. Morfología en 'orejas de conejo' (patrón rSR') en la derivación precordial derecha V1.\n3. Retraso de la despolarización del ventrículo derecho que genera una onda S ancha y empastada en las derivaciones laterales (I, aVL, V5, V6).\n\n¿Por qué fallan las otras opciones?\n• Bloqueo incompleto de rama derecha (B): Presenta el mismo patrón morfológico (rSR' en V1), pero la duración del QRS es menor a 120 ms (típicamente 100-110 ms). En el caso clínico, el QRS es de 0.14 s (140 ms).\n• Bloqueo completo de rama izquierda (A): Se caracteriza por un QRS ≥120 ms pero con ondas R anchas y melladas en I, aVL, V5 y V6, y un patrón QS o rS en V1 (no rSR').\n• Hemibloqueo anterior izquierdo (D): Se manifiesta con una marcada desviación del eje eléctrico a la izquierda y morfología qR en I y aVL, sin causar un ensanchamiento significativo del QRS.",
    keyPoints: [
      "Cuando veas: QRS ≥120 ms con morfología rSR' en V1 y onda S ancha en derivaciones laterales (I, V5, V6).",
      "Debes pensar en: bloqueo completo de rama derecha (BCRD).",
      "BCRD incompleto: misma morfología rSR' en V1 pero QRS <120 ms.",
      "BRI: R ancha mellada en I/V6, no patrón rSR' en V1.",
      "Tema: Electrocardiografía — bloqueo completo de rama derecha.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología/electrocardiografía porque evalúa el reconocimiento del patrón morfológico del bloqueo completo de rama derecha (BCRD) frente a otros bloqueos de conducción.

La clave no es basarse solo en la duración del QRS ni confundir BCRD con BRI o bloqueo incompleto.
La clave es:
QRS de 0.14 s (≥120 ms) + morfología rSR' en V1 + onda S ancha en derivaciones laterales (I, V5, V6) = bloqueo completo de rama derecha.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 67 años con antecedente de hipertensión arterial.
• Electrocardiograma preoperatorio con hallazgos específicos.
• QRS de 0.14 segundos (140 ms, ≥120 ms).
• Morfología rSR' en V1 con onda R' terminal ancha.
• Onda S ancha en derivaciones laterales (I, V5 y V6).

Recordemos bloqueos de rama en el ECG:
• BCRD completo: QRS ≥120 ms + rSR' en V1/V2 ("orejas de conejo") + S ancha en I, aVL, V5, V6.
• BCRD incompleto: misma morfología rSR' en V1 pero QRS <120 ms (110-119 ms).
• BRI completo: QRS ≥120 ms + R ancha mellada en I, aVL, V5, V6 + ausencia de q en I/V6 + S ancha en V1.
• Hemibloqueo anterior izquierdo: desviación del eje a la izquierda, no patrón rSR' en V1.
• En BCRD: activación tardía del ventrículo derecho genera R' en V1 y retrasa la despolarización lateral → S ancha.

Por lo tanto:
El diagnóstico electrocardiográfico más probable es bloqueo completo de rama derecha, dado el QRS ≥120 ms con patrón rSR' en V1 y S ancha en derivaciones laterales.

¿Por qué la opción C es la respuesta correcta?
QRS ≥120 ms + patrón rSR' en V1 + S ancha en I y V6 cumple los criterios diagnósticos de bloqueo completo de rama derecha.

¿Por qué fallan las otras opciones?
Opción A (bloqueo completo de rama izquierda): presenta R ancha mellada en I/V6, no rSR' en V1; patrón opuesto al descrito.
Opción B (bloqueo incompleto de rama derecha): requiere misma morfología pero QRS <120 ms; aquí el QRS es 140 ms.
Opción D (hemibloqueo anterior izquierdo): se caracteriza por desviación del eje a la izquierda, no por rSR' en V1.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"Cualquier QRS ancho es bloqueo de rama izquierda."
Pero la morfología importa más que solo la duración: rSR' en V1 = rama derecha; R mellada en I/V6 = rama izquierda.
Aquí el dato decisivo es:
rSR' en V1 + S ancha lateral + QRS 140 ms = BCRD completo.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar duración del QRS (≥120 ms = bloqueo completo).
2. Identificar morfología en V1: rSR' → rama derecha; S ancha → rama izquierda.
3. Confirmar en derivaciones laterales: S ancha en I/V5/V6 (BCRD) vs R mellada (BRI).
4. Diferenciar completo (≥120 ms) de incompleto (<120 ms con misma morfología).

Perlas de examen
✅ BCRD: QRS ≥120 ms + rSR' en V1 + S ancha en I/V5/V6.
✅ rSR' en V1 = "orejas de conejo" → activación tardía del VD.
✅ BCRD incompleto: misma morfología pero QRS <120 ms.
✅ BRI: R ancha mellada en I/V6, no rSR' en V1.
✅ La morfología importa más que solo el QRS ancho.

Referencias
• Marriott's Practical Electrocardiography.
• Braunwald's Heart Disease — Electrocardiography.
• UpToDate: Right bundle branch block.
• Surawicz B, Knilans TK. Chou's Electrocardiography in Clinical Practice.`,
  },
  {
    id: "dr-q-154",
    examArea: "Cardiología / Fibrilación auricular",
    topic: "Cardiología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "fibrilacion_auricular", "cardioversion"],
    statement:
      "Mujer de 60 años, sin antecedentes cardiovasculares conocidos, consulta por palpitaciones de 2 semanas de evolución. Se realiza electrocardiograma que reporta fibrilación auricular con respuesta ventricular entre 100 y 120 lpm. Ecocardiograma transtorácico: aurícula izquierda de 34 mm, válvula mitral estructuralmente normal y sin evidencia de cardiopatía significativa. ¿Cuál es la conducta más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Control exclusivo de frecuencia con betabloqueador y anticoagulación indefinida.",
      },
      {
        id: "B",
        label: "B",
        text: "Cardioversión eléctrica o farmacológica para restaurar ritmo sinusal tras descartar trombo auricular o anticoagular adecuadamente.",
      },
      { id: "C", label: "C", text: "Ablación urgente de venas pulmonares." },
      { id: "D", label: "D", text: "Observación clínica sin tratamiento específico." },
    ],
    correctOptionId: "B",
    explanation:
      "FA de corta evolución (~2 semanas), aurícula izquierda normal (34 mm) y sin cardiopatía estructural. Alta probabilidad de éxito de cardioversión para control del ritmo.",
    keyPoints: [
      "Cuando veas: FA de corta evolución (~2 semanas), aurícula izquierda normal (34 mm) y sin cardiopatía estructural significativa.",
      "Debes pensar en: control del ritmo con cardioversión eléctrica o farmacológica tras descartar trombo o anticoagular adecuadamente.",
      "FA >48 h requiere anticoagulación previa (≥3 semanas) o ecocardiograma transesofágico para descartar trombo.",
      "Ablación de venas pulmonares no es conducta inicial de elección en FA reciente sin cardiopatía estructural.",
      "Tema: Fibrilación auricular — control del ritmo y cardioversión.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa la estrategia de control del ritmo en fibrilación auricular reciente con aurícula izquierda normal y sin cardiopatía estructural, favoreciendo la cardioversión sobre el control exclusivo de frecuencia.

La clave no es limitarse a betabloqueador y anticoagulación indefinida ni indicar ablación urgente como primera línea.
La clave es:
FA de 2 semanas de evolución + aurícula izquierda de 34 mm (normal) + sin cardiopatía estructural → alta probabilidad de éxito de cardioversión para restaurar ritmo sinusal, tras descartar trombo auricular o anticoagular adecuadamente.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 60 años sin antecedentes cardiovasculares conocidos.
• Palpitaciones de 2 semanas de evolución.
• ECG: fibrilación auricular con respuesta ventricular 100-120 lpm.
• Ecocardiograma: aurícula izquierda de 34 mm (normal), válvula mitral normal, sin cardiopatía significativa.

Recordemos estrategias en fibrilación auricular:
• Control del ritmo: cardioversión eléctrica o farmacológica, antiarrítmicos, ablación.
• Control de frecuencia: betabloqueadores, calcioantagonistas, digoxina.
• FA >48 h o duración desconocida: anticoagulación ≥3 semanas antes de cardioversión o ETE para descartar trombo.
• FA <48 h: cardioversión posible con anticoagulación periprocedimiento según guías.
• Candidatos ideales a control del ritmo: FA reciente, AI normal, sin cardiopatía estructural significativa.
• Ablación: reservada para FA recurrente refractaria, no como conducta inicial urgente.

Por lo tanto:
La conducta más apropiada es cardioversión eléctrica o farmacológica para restaurar ritmo sinusal, tras descartar trombo auricular o anticoagular adecuadamente.

¿Por qué la opción B es la respuesta correcta?
FA de corta evolución (~2 semanas), aurícula izquierda normal (34 mm) y ausencia de cardiopatía estructural configuran una paciente con alta probabilidad de éxito de cardioversión para control del ritmo.

¿Por qué fallan las otras opciones?
Opción A (control exclusivo de frecuencia con betabloqueador y anticoagulación indefinida): ignora que los datos favorecen restaurar ritmo sinusal; no es la conducta más apropiada en FA reciente con AI normal.
Opción C (ablación urgente de venas pulmonares): no es conducta inicial de elección; se reserva para FA recurrente refractaria al tratamiento médico.
Opción D (observación clínica sin tratamiento específico): inadecuada ante FA sintomática con respuesta ventricular elevada (100-120 lpm).

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"En FA siempre se controla la frecuencia con betabloqueador."
Pero en FA reciente con aurícula normal y sin cardiopatía estructural, el control del ritmo con cardioversión es razonable y tiene alta probabilidad de éxito.
Aquí el dato decisivo es:
FA 2 semanas + AI 34 mm + sin cardiopatía estructural = candidata a cardioversión.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar duración de la FA y presencia de cardiopatía estructural.
2. Si FA reciente + AI normal + sin cardiopatía → considerar control del ritmo (cardioversión).
3. Antes de cardioversión: anticoagular ≥3 semanas o realizar ETE para descartar trombo (si >48 h).
4. Ablación no es conducta inicial; reservar para FA recurrente refractaria.

Perlas de examen
✅ FA reciente + AI normal = buena candidata a control del ritmo.
✅ Cardioversión tras anticoagulación o ETE para descartar trombo.
✅ FA >48 h requiere anticoagulación previa o ETE.
✅ Ablación no es conducta inicial de elección.
✅ No confundir FA reciente sintomática con FA permanente de larga data.

Referencias
• ESC Guidelines for the Management of Atrial Fibrillation.
• UpToDate: Rhythm control versus rate control in atrial fibrillation.
• January CT et al. 2019 AHA/ACC/HRS Focused Update on AF.
• Van Gelder IC et al. Early rhythm-control therapy in patients with atrial fibrillation (EAST-AFNET 4).`,
  },
  {
    id: "dr-q-155",
    examArea: "Neumología / EPOC",
    topic: "Neumología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "neumologia", "epoc", "oxigenoterapia"],
    statement:
      "Paciente masculino de 68 años, fumador de larga data, consulta por disnea progresiva. Se realiza espirometría que reporta índice de Tiffeneau (FEV1/FVC) de 65% y FEV1 de 57% del predicho. Gasometría arterial: PaO₂ 53 mmHg. ¿Cuál es el tratamiento que ha demostrado aumentar la supervivencia en este paciente?",
    options: [
      { id: "A", label: "A", text: "Salmeterol inhalado." },
      { id: "B", label: "B", text: "Triple terapia inhalada (LABA/LAMA/ICS)." },
      { id: "C", label: "C", text: "Oxigenoterapia domiciliaria crónica." },
      { id: "D", label: "D", text: "Rehabilitación pulmonar." },
    ],
    correctOptionId: "C",
    explanation:
      "EPOC con hipoxemia severa (PaO₂ 53 mmHg ≤55 mmHg). Indicación clásica de oxigenoterapia domiciliaria crónica, una de las pocas intervenciones que reduce mortalidad.",
    keyPoints: [
      "Cuando veas: EPOC con PaO₂ ≤55 mmHg (o SatO₂ ≤88%) en gasometría arterial en reposo.",
      "Debes pensar en: oxigenoterapia domiciliaria crónica — una de las pocas intervenciones que reduce mortalidad en EPOC.",
      "Broncodilatadores (salmeterol, triple terapia) mejoran síntomas pero no demuestran reducción de mortalidad como el O₂ en hipoxemia severa.",
      "Idealmente ≥15 h/día de oxigenoterapia domiciliaria para beneficio en supervivencia.",
      "Tema: EPOC — oxigenoterapia domiciliaria crónica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neumología porque evalúa el tratamiento que ha demostrado aumentar la supervivencia en EPOC con hipoxemia severa, distinguiendo la oxigenoterapia domiciliaria de otras terapias que solo mejoran síntomas.

La clave no es enfocarse en la espirometría (FEV1 57%) ni elegir broncodilatadores o rehabilitación pulmonar como intervención que reduce mortalidad.
La clave es:
EPOC con PaO₂ de 53 mmHg (≤55 mmHg) en reposo → indicación clásica de oxigenoterapia domiciliaria crónica, una de las pocas intervenciones que reduce mortalidad en EPOC.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 68 años, fumador de larga data, con disnea progresiva.
• Espirometría: FEV1/FVC 65% (obstructivo) y FEV1 57% del predicho (EPOC moderada-grave).
• Gasometría arterial: PaO₂ 53 mmHg (hipoxemia severa en reposo).
• La pregunta pide el tratamiento que ha demostrado aumentar la supervivencia.

Recordemos oxigenoterapia domiciliaria en EPOC:
• Indicación clásica: PaO₂ ≤55 mmHg o SatO₂ ≤88% en reposo.
• Indicación relativa: PaO₂ 56-59 mmHg con cor pulmonale, policitemia o edema pulmonar.
• Beneficio demostrado: reducción de mortalidad (estudios NOTT, MRC).
• Duración ideal: ≥15 horas/día (incluyendo durante el sueño).
• Broncodilatadores (LABA, LAMA, ICS): mejoran síntomas y exacerbaciones, no reducen mortalidad como el O₂ en hipoxemia severa.
• Rehabilitación pulmonar: mejora calidad de vida y tolerancia al ejercicio, no es la respuesta principal para reducir mortalidad por hipoxemia.

Por lo tanto:
El tratamiento que ha demostrado aumentar la supervivencia en este paciente con PaO₂ 53 mmHg es la oxigenoterapia domiciliaria crónica.

¿Por qué la opción C es la respuesta correcta?
EPOC con hipoxemia severa (PaO₂ 53 mmHg ≤55 mmHg) cumple criterios de indicación de oxigenoterapia domiciliaria crónica, intervención con beneficio demostrado en supervivencia.

¿Por qué fallan las otras opciones?
Opción A (salmeterol inhalado): broncodilatador que mejora síntomas y función pulmonar, pero no ha demostrado reducir mortalidad en hipoxemia severa como la oxigenoterapia.
Opción B (triple terapia inhalada LABA/LAMA/ICS): mejora síntomas y reduce exacerbaciones, pero no es la intervención con mayor evidencia de reducción de mortalidad en hipoxemia severa.
Opción D (rehabilitación pulmonar): mejora calidad de vida y capacidad funcional, pero no es el tratamiento principal que reduce mortalidad en hipoxemia severa.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan:
"En EPOC el tratamiento se basa en la espirometría (FEV1)."
Pero la indicación de oxigenoterapia domiciliaria se define por la gasometría arterial (PaO₂), no por la espirometría.
Aquí el dato decisivo es:
PaO₂ 53 mmHg ≤55 mmHg → oxigenoterapia domiciliaria crónica, no el FEV1 57%.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar EPOC con espirometría (FEV1/FVC <70%).
2. Evaluar gasometría arterial en reposo para detectar hipoxemia severa.
3. Si PaO₂ ≤55 mmHg (o Sat ≤88%) → indicar oxigenoterapia domiciliaria crónica ≥15 h/día.
4. Broncodilatadores y rehabilitación son complementarios, pero no sustituyen el O₂ en hipoxemia severa.

Perlas de examen
✅ PaO₂ ≤55 mmHg (o Sat ≤88%) → oxigenoterapia domiciliaria crónica.
✅ Oxigenoterapia domiciliaria = una de las pocas intervenciones que reduce mortalidad en EPOC.
✅ Broncodilatadores mejoran síntomas pero no mortalidad como O₂ en hipoxemia severa.
✅ Rehabilitación pulmonar mejora calidad de vida, no es la respuesta principal aquí.
✅ La gasometría define la indicación de O₂, no la espirometría.

Referencias
• GOLD Report — Global Strategy for the Diagnosis, Management, and Prevention of COPD.
• ATS/ERS Standards for the Diagnosis and Management of Patients with COPD.
• UpToDate: Long-term supplemental oxygen therapy.
• Nocturnal Oxygen Therapy Trial (NOTT) Group; MRC Working Party.`,
  },
];
