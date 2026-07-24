import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Banco universal MetodoQ · Dr. Q.
 * Aplica a cualquier universidad y especialidad (entrenamiento, repaso, simulacros).
 */
export const DR_Q_UNIVERSAL_QUESTIONS: TrainingQuestion[] = [
  {
    id: "dr-q-01",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "nstemi", "angina_inestable"],
    statement:
      "Paciente masculino de 60 años hipertenso, con ERC estadio 3B, consulta al servicio de urgencias por cuadro clínico de 35 minutos de duración consistente en dolor opresivo retroesternal irradiado a mandíbula. En urgencias le es realizado un primer ECG y unas troponinas: rule out, es monitorizado con ECG que determina elevación transitoria del ST en pared inferior, pero inmediatamente se visualiza nuevamente monitor que determina ritmo sinusal, ahora el paciente mejora con analgésico oral, se encuentra sin dolor, le realizan delta troponinas y se encuentra rule out. ¿Cuál es la conducta a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Diagnóstico de SCA sin elevación del ST y requiere coronariografía en las primeras 24 horas.",
      },
      {
        id: "B",
        label: "B",
        text: "Diagnóstico de SCA sin elevación del ST y requiere trombólisis.",
      },
      {
        id: "C",
        label: "C",
        text: "Diagnóstico de SCA con elevación del ST y requiere coronariografía inmediata.",
      },
      {
        id: "D",
        label: "D",
        text: "Diagnóstico SCA con elevación del ST y requiere trombólisis.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Dolor precordial típico con elevación transitoria (no persistente) del ST y troponinas negativas: angina inestable de alto riesgo por cambios dinámicos del ST. Conducta: SCA sin elevación del ST de alto riesgo con coronariografía en las primeras 24 horas.",
    keyPoints: [
      "Cuando veas: dolor torácico típico + elevación TRANSITORIA del ST + troponinas negativas (rule out).",
      "Debes pensar en: angina inestable de alto riesgo → estrategia invasiva temprana.",
      "La elevación transitoria del ST no es STEMI; requiere persistencia para IAMCEST.",
      "Coronariografía en primeras 24 h en SCA sin elevación del ST de alto riesgo (no trombólisis).",
      "Tema: Síndrome coronario agudo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa el enfoque inicial del síndrome coronario agudo según la persistencia de la elevación del ST, las troponinas y la estratificación de riesgo.

La clave no es solo el dolor torácico.
La clave es:
Identificar que se trata de un SCA sin elevación persistente del ST, con signos de alto riesgo que obligan a estrategia invasiva temprana.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 60 años, hipertenso, con ERC estadio 3B.
• Dolor opresivo retroesternal irradiado a mandíbula (35 minutos).
• Elevación transitoria del ST en pared inferior en monitor, que desaparece.
• Mejoría del dolor con analgésico oral; asintomático al reevaluar.
• Troponinas iniciales y delta troponinas: rule out (negativas).

Recordemos la clasificación del SCA:
• STEMI: elevación persistente del ST con oclusión coronaria aguda → reperfusión inmediata (coronariografía o trombólisis).
• NSTEMI: troponinas elevadas sin elevación persistente del ST → estratificación de riesgo e invasión según criterios.
• Angina inestable: dolor isquémico sin elevación de troponinas, con o sin cambios dinámicos del ST.

Por lo tanto:
El paciente NO tiene STEMI (la elevación del ST no persistió).
NO tiene NSTEMI (troponinas negativas).
Tiene angina inestable de alto riesgo (dolor típico + cambios dinámicos del ST).

¿Cuáles son los criterios de alto riesgo en angina inestable?
Cambios dinámicos del ST (elevación o depresión transitoria).
Dolor torácico típico con factores de riesgo cardiovascular (HTA, ERC).
Inestabilidad hemodinámica o arritmias (no presentes aquí, pero siempre buscarlos).

¿Por qué la opción A es la respuesta correcta?
El diagnóstico es SCA sin elevación del ST (angina inestable de alto riesgo).
La conducta según guías ESC y AHA:
Estrategia invasiva temprana con coronariografía en las primeras 24 horas.
No requiere trombólisis (reservada para STEMI cuando no hay acceso oportuno a PCI).
No requiere coronariografía inmediata (<2 h), reservada para STEMI o shock cardiogénico.

¿Por qué fallan las otras opciones?
Opción B (trombólisis): la trombólisis es reperfusión para STEMI, no para angina inestable con troponinas negativas.
Opción C (STEMI + coronariografía inmediata): la elevación del ST fue transitoria; sin persistencia no se diagnostica IAMCEST.
Opción D (STEMI + trombólisis): mismo error de clasificación; además la trombólisis no está indicada sin diagnóstico de STEMI.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Elevación del ST" con STEMI automáticamente.
Pero el examen exige correlacionar:
Persistencia del ST + troponinas + contexto clínico.
Aquí el dato decisivo es:
Elevación TRANSITORIA del ST con troponinas rule out.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar el cuadro clínico (dolor típico de SCA).
2. Clasificar según ST persistente vs transitorio y troponinas.
3. Estratificar el riesgo (cambios dinámicos del ST = alto riesgo).
4. Elegir la conducta según la clasificación (invasión temprana vs reperfusión inmediata).

Perlas de examen
✅ Elevación transitoria del ST ≠ STEMI; requiere persistencia.
✅ Troponinas negativas + dolor típico + cambios dinámicos del ST = angina inestable de alto riesgo.
✅ Alto riesgo en SCA sin elevación del ST → coronariografía en primeras 24 h.
✅ La trombólisis es para STEMI, no para angina inestable.
✅ El ECG debe interpretarse siempre junto al contexto clínico y la evolución seriada.
✅ Las residencias preguntan conductas, no solo diagnósticos.

Referencias
• ESC Guidelines for the Management of Acute Coronary Syndromes.
• AHA/ACC Guideline for the Management of Patients With Acute Coronary Syndromes.
• Braunwald's Heart Disease.
• Tintinalli Emergency Medicine.
• UpToDate: Approach to the Initial Evaluation of Acute Chest Pain in Adults.`,
  },
  {
    id: "dr-q-02",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "stemi", "brd", "equivalentes_st"],
    statement:
      "Paciente masculino de 80 años hipertenso, dislipémico, obeso, antecedente de tabaquismo pesado persistente, consulta al servicio de urgencias por cuadro clínico de 1 hora de evolución consistente en dolor opresivo retroesternal irradiado a mandíbula. En urgencias le es realizado un primer ECG que muestra bloqueo de rama derecha, el dolor persiste a pesar del manejo analgésico. ¿Cuál es el diagnóstico y la conducta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Diagnóstico de SCA con elevación del ST y requiere tratamiento fármaco invasivo.",
      },
      {
        id: "B",
        label: "B",
        text: "Diagnóstico de SCA sin elevación del ST y requiere eco estrés ambulatorio.",
      },
      {
        id: "C",
        label: "C",
        text: "Diagnóstico de SCA con elevación del ST y requiere trombólisis.",
      },
      {
        id: "D",
        label: "D",
        text: "Diagnóstico de SCA sin elevación del ST y requiere coronariografía.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Dolor torácico típico persistente con bloqueo de rama derecha en contexto de SCA: equivalente de elevación del ST (IAMCEST). Conducta: reperfusión urgente; trombólisis si la PCI no está disponible en ≤120 minutos.",
    keyPoints: [
      "Cuando veas: dolor torácico típico + bloqueo de rama (BRI o BRD) nuevo o no conocido en contexto de SCA.",
      "Debes pensar en: equivalente de STEMI → reperfusión inmediata (PCI o trombólisis).",
      "El diagnóstico de SCA es primordialmente clínico; el ECG puede ocultar la elevación del ST.",
      "No estratificar como NSTEMI de bajo riesgo ni diferir con eco estrés ambulatorio.",
      "Tema: Síndrome coronario agudo — equivalentes de elevación del ST.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa el reconocimiento de los equivalentes de elevación del ST cuando el ECG no muestra el patrón típico de STEMI.

La clave no es buscar elevación del ST en derivaciones convencionales.
La clave es:
Identificar que el bloqueo de rama con dolor típico persistente equivale a un IAMCEST y exige reperfusión urgente.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 80 años con múltiples factores de riesgo cardiovascular (HTA, dislipidemia, obesidad, tabaquismo).
• Dolor opresivo retroesternal irradiado a mandíbula (1 hora de evolución).
• ECG con bloqueo de rama derecha (BRD).
• Dolor que persiste a pesar del manejo analgésico.

Recordemos los equivalentes de elevación del ST:
• Bloqueo de rama izquierda (BRI) nuevo o presumiblemente nuevo con dolor típico.
• Bloqueo de rama derecha (BRD) con dolor típico en contexto de SCA.
• Depresión difusa del ST con elevación en aVR (patrón del tronco).
• Patrón de De Winter, infarto posterior, signos de Wellens.

Por lo tanto:
El paciente tiene un IAMCEST equivalente, no un SCA sin elevación del ST de bajo riesgo.

¿Por qué la opción C es la respuesta correcta?
Diagnóstico: SCA con elevación del ST (equivalente por BRD).
Conducta: reperfusión urgente.
Si la angioplastia primaria no puede realizarse en ≤120 minutos desde el primer contacto médico, la trombólisis está indicada.
El dolor persistente confirma isquemia activa que no puede esperar estudios ambulatorios.

¿Por qué fallan las otras opciones?
Opción A (tratamiento fármaco invasivo): ambigua y no especifica reperfusión; además "fármaco invasivo" no es el término estándar para trombólisis o PCI urgente.
Opción B (NSTEMI + eco estrés ambulatorio): error grave de clasificación; un equivalente STEMI nunca se maneja con estratificación ambulatoria.
Opción D (NSTEMI + coronariografía): subestima la urgencia; equivale a STEMI y requiere reperfusión inmediata, no solo cateterismo programado.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Bloqueo de rama" con un hallazgo benigno o con NSTEMI.
Pero el examen exige correlacionar:
Contexto clínico (dolor típico persistente) + patrón ECG atípico.
Aquí el dato decisivo es:
Dolor torácico típico + BRD en paciente con alto riesgo cardiovascular.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar el cuadro clínico (¿dolor típico de isquemia?).
2. Buscar STEMI clásico o sus equivalentes en el ECG.
3. Clasificar como IAMCEST (directo o equivalente).
4. Indicar reperfusión urgente (PCI primaria o trombólisis según tiempos).

Perlas de examen
✅ BRI y BRD con dolor típico = equivalentes de STEMI.
✅ El diagnóstico de SCA es primordialmente clínico.
✅ Reperfusión urgente; no diferir con eco estrés ni manejo ambulatorio.
✅ Trombólisis si PCI no disponible en ≤120 minutos.
✅ Otros equivalentes: De Winter, infarto posterior, Wellens, patrón del tronco (aVR).

Referencias
• ESC Guidelines for the Management of Acute Coronary Syndromes.
• AHA/ACC Guideline for the Management of Patients With Acute Coronary Syndromes.
• Braunwald's Heart Disease.
• Tintinalli Emergency Medicine.
• UpToDate: Diagnosis of ST-elevation myocardial infarction.`,
  },
  {
    id: "dr-q-03",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "stemi", "farmacoinvasivo", "trombolisis"],
    statement:
      "Femenina de 67 años con antecedente de ACV isquémico hace 2 años, consulta al servicio de urgencias primer nivel, por dolor torácico típico de 40 minutos de evolución, ECG con elevación del ST en DII, DIII y AVF, el traslado a centro de hemodinamia dura 160 minutos. ¿Cuál es la opción de tratamiento antitrombótico inmediato y conducta a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "ASA + Atorvastatina + Clopidogrel + Enoxaparina SC + Trombólisis.",
      },
      {
        id: "B",
        label: "B",
        text: "Remitir a COROS sin tratamiento previo.",
      },
      {
        id: "C",
        label: "C",
        text: "ASA + Atorvastatina + Prasugrel + HNF + Traslado inmediato a COROS.",
      },
      {
        id: "D",
        label: "D",
        text: "ASA + Atorvastatina + Prasugrel + Enoxaparina SC + Trombólisis.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "STEMI inferior con retraso >120 minutos para PCI: indicada estrategia farmacoinvasiva (trombólisis + doble antiagregación + anticoagulación). Prasugrel está contraindicado por antecedente de ACV; usar clopidogrel.",
    keyPoints: [
      "Cuando veas: STEMI confirmado + tiempo de traslado a PCI >120 minutos + dolor <12 horas.",
      "Debes pensar en: estrategia farmacoinvasiva (trombólisis + remisión posterior a PCI).",
      "Prasugrel contraindicado en antecedente de ACV o AIT; usar clopidogrel.",
      "No remitir sin tratamiento previo ni usar prasugrel en este escenario.",
      "Tema: Síndrome coronario agudo — reperfusión en STEMI.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa la decisión de reperfusión en STEMI según los tiempos de acceso a PCI y las contraindicaciones de los antitrombóticos.

La clave no es solo confirmar el STEMI.
La clave es:
Calcular el tiempo hasta PCI y elegir la estrategia farmacoinvasiva con el antiagregante correcto.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 67 años con antecedente de ACV isquémico hace 2 años.
• Dolor torácico típico de 40 minutos.
• ECG con elevación del ST en DII, DIII y aVF (STEMI inferior).
• Traslado a hemodinamia estimado en 160 minutos (>120 min).
• Atención en urgencias de primer nivel (sin PCI disponible).

Recordemos las ventanas de reperfusión:
• PCI primaria ideal si puede realizarse en ≤120 minutos desde el primer contacto médico.
• Si el tiempo excede 120 minutos y el dolor tiene <12 horas: indicada trombólisis.
• Todo paciente trombolizado debe remitirse posteriormente a PCI (estrategia farmacoinvasiva).

Por lo tanto:
No se puede esperar 160 minutos para PCI sin reperfusión.
La trombólisis es la conducta inmediata correcta.

¿Por qué la opción A es la respuesta correcta?
Esquema farmacoinvasivo completo:
ASA + estatina de alta intensidad (atorvastatina) + clopidogrel + enoxaparina SC + trombólisis.
Clopidogrel (no prasugrel) porque el antecedente de ACV es contraindicación absoluta para prasugrel.
Enoxaparina SC es la anticoagulación de elección en la mayoría de protocolos de trombólisis.

¿Por qué fallan las otras opciones?
Opción B (remitir sin tratamiento): inaceptable; 160 minutos sin reperfusión aumenta mortalidad y tamaño del infarto.
Opción C (prasugrel + traslado sin trombólisis): prasugrel contraindicado por ACV previo; además no hay reperfusión inmediata.
Opción D (prasugrel + trombólisis): misma contraindicación de prasugrel; error farmacológico grave.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"STEMI = siempre PCI inmediata" o "potentes antiagregantes = siempre mejor".
Pero el examen exige correlacionar:
Tiempo hasta PCI + contraindicaciones del paciente + esquema antitrombótico completo.
Aquí los datos decisivos son:
160 minutos de traslado + antecedente de ACV.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar STEMI en el ECG.
2. Estimar tiempo hasta PCI (≤120 min vs >120 min).
3. Si >120 min y dolor <12 h → trombólisis + anticoagulación + DAPT.
4. Verificar contraindicaciones de prasugrel/ticagrelor (ACV, edad, peso).
5. Remitir a PCI posterior (farmacoinvasiva).

Perlas de examen
✅ PCI ideal si ≤120 min; si no, trombólisis si dolor <12 h.
✅ Prasugrel contraindicado en ACV o AIT previo.
✅ Todo paciente trombolizado debe remitirse posteriormente a PCI.
✅ No remitir sin tratamiento cuando el tiempo de traslado excede la ventana.
✅ La estrategia farmacoinvasiva combina trombólisis temprana + coronariografía posterior.

Referencias
• ESC Guidelines for the Management of Acute Coronary Syndromes.
• AHA/ACC Guideline for the Management of Patients With Acute Coronary Syndromes.
• Braunwald's Heart Disease.
• Tintinalli Emergency Medicine.
• UpToDate: Fibrinolytic (thrombolytic) therapy in acute ST elevation myocardial infarction.`,
  },
  {
    id: "dr-q-04",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "stemi", "farmacoinvasivo"],
    statement:
      "Masculino de 50 años, agricultor, residente en zona rural a 6 horas del hospital de tercer nivel más cercano, hipertenso, diabético, obeso, en hospital local le realizan ECG que reporta elevación del ST en cara anterolateral, se le administra trombólisis. ¿Qué conducta debería seguir con este paciente?",
    options: [
      { id: "A", label: "A", text: "Observación por 12 horas." },
      { id: "B", label: "B", text: "Remitir a PCI." },
      { id: "C", label: "C", text: "Repetir ECG si disminuye ST egreso." },
      { id: "D", label: "D", text: "Observación 24 horas, si dolor persiste, usar nitratos." },
    ],
    correctOptionId: "B",
    explanation:
      "La trombólisis no finaliza el tratamiento del STEMI. Todo paciente trombolizado debe remitirse para PCI dentro de las primeras 24 horas (estrategia farmacoinvasiva), incluso en zonas rurales.",
    keyPoints: [
      "Cuando veas: paciente con STEMI trombolizado en hospital sin hemodinamia.",
      "Debes pensar en: remisión obligatoria a PCI (estrategia farmacoinvasiva en 24 h).",
      "La trombólisis es puente, no tratamiento definitivo.",
      "Observación aislada sin PCI posterior aumenta reinfarto y mortalidad.",
      "Tema: Síndrome coronario agudo — conducta post-trombólisis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa la conducta posterior a la trombólisis en STEMI, un escenario frecuente en zonas rurales de Colombia.

La clave no es confirmar que la trombólisis se administró.
La clave es:
Reconocer que la trombólisis es solo el primer paso y que la PCI posterior es obligatoria.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 50 años con factores de riesgo cardiovascular (HTA, DM, obesidad).
• Residente en zona rural a 6 horas del hospital de tercer nivel.
• ECG con elevación del ST en cara anterolateral (STEMI).
• Trombólisis ya administrada en hospital local.
• La pregunta es sobre la conducta posterior, no sobre indicar trombólisis.

Recordemos la estrategia farmacoinvasiva:
• Trombólisis en centro sin PCI cuando el tiempo de traslado excede 120 minutos.
• Remisión obligatoria a coronariografía/PCI dentro de las primeras 24 horas.
• La PCI posterior reduce mortalidad, reinfarto y complicaciones vs trombólisis aislada.

Por lo tanto:
No basta con observar al paciente en el hospital local.
Debe trasladarse a PCI.

¿Por qué la opción B es la respuesta correcta?
Remitir a PCI es la conducta estándar post-trombólisis según guías ESC y AHA.
La coronariografía permite:
Evaluar reperfusión (¿trombólisis exitosa?).
Realizar PCI de rescate si hay trombólisis fallida.
Tratar lesiones residuales y optimizar el manejo.

¿Por qué fallan las otras opciones?
Opción A (observación 12 h): insuficiente; no cumple la estrategia farmacoinvasiva.
Opción C (repetir ECG y egreso si baja ST): el criterio de egreso no es solo resolución electrocardiográfica; se requiere PCI.
Opción D (observación 24 h con nitratos): retrasa o evita la PCI necesaria; manejo inadecuado.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Trombólisis exitosa = tratamiento completo" o "zona rural = solo observar".
Pero el examen exige recordar:
La trombólisis nunca cierra el manejo del STEMI.
Aquí el dato decisivo es:
Paciente ya trombolizado que necesita completar la estrategia farmacoinvasiva.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar STEMI y administrar trombólisis si PCI no está a ≤120 min.
2. Estabilizar y trasladar a centro con hemodinamia.
3. Realizar PCI dentro de las primeras 24 horas.
4. Si persistencia de dolor o ST sin resolución → considerar trombólisis fallida / PCI de rescate.

Perlas de examen
✅ Trombólisis + PCI en 24 h = estrategia farmacoinvasiva.
✅ Reduce mortalidad y reinfarto vs trombólisis aislada.
✅ Persistencia de dolor o ST sin resolución → trombólisis fallida / PCI rescate.
✅ La zona rural no exime de remisión a PCI.
✅ Observación sin cateterismo posterior es manejo incompleto.

Referencias
• ESC Guidelines for the Management of Acute Coronary Syndromes.
• AHA/ACC Guideline for the Management of Patients With Acute Coronary Syndromes.
• Braunwald's Heart Disease.
• Tintinalli Emergency Medicine.
• UpToDate: Acute ST-elevation myocardial infarction: Management of fibrinolysis.`,
  },
  {
    id: "dr-q-05",
    examArea: "Medicina Interna / Cardiología",
    topic: "Cardiología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "dapt", "sangrado"],
    statement:
      "Paciente a quien se le realizó angioplastia con stent, posterior a síndrome coronario agudo, tiene alto riesgo de sangrado. ¿Qué tratamiento debe recibir al egreso?",
    options: [
      { id: "A", label: "A", text: "DAPT con clopidogrel y ASA por 1 mes." },
      {
        id: "B",
        label: "B",
        text: "DAPT con ticagrelor y ASA por 1 mes y luego suspender ASA y continuar ticagrelor por 12 meses.",
      },
      { id: "C", label: "C", text: "DAPT con ticagrelor y ASA por 12 meses." },
      {
        id: "D",
        label: "D",
        text: "DAPT con clopidogrel y ASA por 1 mes y luego suspender clopidogrel y continuar ASA por 12 meses.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Post-SCA con stent y alto riesgo hemorrágico: las guías permiten DAPT abreviada (1 mes ASA + ticagrelor) seguida de monoterapia con inhibidor P2Y12 hasta completar 12 meses, reduciendo sangrado sin comprometer protección antiisquémica.",
    keyPoints: [
      "Cuando veas: paciente post-PCI por SCA + alto riesgo de sangrado.",
      "Debes pensar en: DAPT abreviada (1 mes) → monoterapia P2Y12 hasta 12 meses totales.",
      "DAPT estándar post-SCA: 12 meses ASA + inhibidor P2Y12.",
      "En alto riesgo hemorrágico se puede acortar la fase de doble terapia.",
      "Tema: Síndrome coronario agudo — terapia antiagregante dual (DAPT).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa la duración de la DAPT post-SCA según el balance isquemia-sangrado, un tema muy preguntado en residencias.

La clave no es suspender toda la antiagregación pronto.
La clave es:
Ajustar la duración de la DAPT sin perder la protección del inhibidor P2Y12 hasta completar 12 meses.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Angioplastia con stent posterior a síndrome coronario agudo.
• Alto riesgo de sangrado (dato explícito en el enunciado).
• La pregunta es sobre el tratamiento al egreso, no sobre la fase aguda.

Recordemos la DAPT estándar:
• ASA + inhibidor P2Y12 (clopidogrel, ticagrelor o prasugrel) durante 12 meses post-SCA con stent.
• En pacientes con alto riesgo hemorrágico, las guías ESC/AHA permiten estrategias abreviadas.
• Esquema: 1 mes de DAPT → suspender ASA → continuar inhibidor P2Y12 hasta completar 12 meses totales.

Por lo tanto:
No se suspende todo a 1 mes.
No se mantiene DAPT completa de 12 meses si el riesgo de sangrado es alto.

¿Por qué la opción B es la respuesta correcta?
DAPT con ticagrelor + ASA por 1 mes.
Luego suspender ASA y continuar ticagrelor hasta completar 12 meses.
Esta estrategia reduce eventos hemorrágicos sin aumentar significativamente eventos isquémicos en pacientes seleccionados con alto riesgo de sangrado.

¿Por qué fallan las otras opciones?
Opción A (clopidogrel + ASA 1 mes y fin): suspende toda la protección antiagregante potente demasiado pronto; solo 1 mes total es insuficiente.
Opción C (ticagrelor + ASA 12 meses): DAPT estándar completa, no adaptada al alto riesgo hemorrágico que plantea la pregunta.
Opción D (clopidogrel + ASA 1 mes, luego solo ASA): invierte la lógica; la monoterapia debe ser con inhibidor P2Y12, no con ASA sola post-stent.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Alto riesgo de sangrado = suspender todo antiagregante" o "siempre 12 meses de DAPT".
Pero el examen exige correlacionar:
Riesgo isquémico (SCA reciente + stent) + riesgo hemorrágico.
Aquí el dato decisivo es:
Alto riesgo de sangrado en paciente post-SCA con stent.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar que el paciente es post-SCA con stent (DAPT indicada).
2. Evaluar riesgo hemorrágico.
3. Si alto riesgo: DAPT abreviada 1 mes → monoterapia P2Y12 hasta 12 meses.
4. Si bajo riesgo: DAPT estándar 12 meses.

Perlas de examen
✅ DAPT estándar post-SCA: 12 meses.
✅ Alto riesgo hemorrágico: estrategia abreviada permitida.
✅ 1 mes DAPT → monoterapia P2Y12 hasta 12 meses totales.
✅ No suspender el inhibidor P2Y12 a los 30 días en paciente de alto riesgo isquémico.
✅ La monoterapia prolongada debe ser con P2Y12, no con ASA sola.

Referencias
• ESC Guidelines for the Management of Acute Coronary Syndromes.
• AHA/ACC Guideline on DAPT in CAD Patients.
• European Heart Journal — DAPT Duration Updates.
• Braunwald's Heart Disease.
• UpToDate: Long-term antiplatelet therapy after coronary stenting.`,
  },
  {
    id: "dr-q-06",
    examArea: "Medicina Interna / Cardiología",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "fa", "triple_terapia", "anticoagulacion"],
    statement:
      "Paciente a quien se le realizó angioplastia con stent, antecedente de FA y uso de apixabán. ¿Qué tratamiento debe recibir al egreso?",
    options: [
      { id: "A", label: "A", text: "Solo Apixabán." },
      { id: "B", label: "B", text: "Triple terapia ASA + clopidogrel + Apixabán por 12 meses." },
      { id: "C", label: "C", text: "DAPT con clopidogrel y ASA por 12 meses." },
      {
        id: "D",
        label: "D",
        text: "Triple terapia ASA + clopidogrel + Apixabán por 12 meses, suspendiendo ASA a la semana.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "FA + SCA post-PCI con stent: triple terapia corta (ASA + clopidogrel + apixabán) con suspensión de ASA a la semana, continuando apixabán + clopidogrel hasta 12 meses. Minimiza sangrado sin perder protección antitrombótica.",
    keyPoints: [
      "Cuando veas: fibrilación auricular anticoagulada + SCA tratado con angioplastia y stent.",
      "Debes pensar en: triple terapia mínima → suspender ASA a la semana → doble terapia (DOAC + clopidogrel).",
      "FA + SCA + stent = uno de los escenarios antitrombóticos más complejos del examen.",
      "El ASA se suspende pronto (≈1 semana); continúan DOAC + clopidogrel.",
      "Tema: Síndrome coronario agudo — manejo antitrombótico con FA.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa el manejo antitrombótico en la coexistencia de fibrilación auricular y SCA post-PCI, uno de los escenarios más preguntados en residencias.

La clave no es elegir entre anticoagulación o antiagregación.
La clave es:
Equilibrar riesgo trombótico coronario, riesgo cardioembólico y riesgo hemorrágico con triple terapia mínima.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Angioplastia con stent posterior a síndrome coronario agudo.
• Antecedente de fibrilación auricular en tratamiento con apixabán (DOAC).
• La pregunta es sobre el esquema al egreso.

Recordemos el algoritmo FA + SCA + stent:
• Fase aguda: triple terapia (ASA + clopidogrel + DOAC).
• Objetivo: minimizar duración de triple terapia por riesgo hemorrágico.
• Suspender ASA a la semana (≈7 días).
• Continuar apixabán + clopidogrel hasta 12 meses.
• Luego: anticoagulación a largo plazo según CHA₂DS₂-VASc.

Por lo tanto:
No se suspende el apixabán (riesgo cardioembólico).
No se mantiene triple terapia 12 meses (riesgo hemorrágico).
No se usa solo DAPT sin anticoagulación (riesgo de ACV).

¿Por qué la opción D es la respuesta correcta?
Triple terapia inicial: ASA + clopidogrel + apixabán.
Suspensión de ASA a la semana.
Continuación de apixabán + clopidogrel hasta completar 12 meses.
Es el esquema recomendado por guías ESC para equilibrar los tres riesgos.

¿Por qué fallan las otras opciones?
Opción A (solo apixabán): abandona la protección antiagregante post-stent; alto riesgo de trombosis del stent.
Opción B (triple terapia 12 meses): exposición prolongada a triple terapia aumenta sangrado mayor sin beneficio adicional demostrado.
Opción C (DAPT 12 meses sin apixabán): ignora la FA y el riesgo cardioembólico; el paciente requiere anticoagulación.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Stent = DAPT 12 meses" o "FA = solo anticoagulante".
Pero el examen exige integrar:
Los tres fármacos en fase aguda y la transición rápida a doble terapia.
Aquí el dato decisivo es:
FA anticoagulada + SCA reciente con stent.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer FA + SCA + stent como escenario de triple terapia.
2. Iniciar ASA + clopidogrel + DOAC.
3. Suspender ASA a la semana.
4. Mantener DOAC + clopidogrel hasta 12 meses.
5. Reevaluar anticoagulación a largo plazo según riesgo.

Perlas de examen
✅ FA + SCA + stent = escenario antitrombótico complejo.
✅ Triple terapia mínima: suspender ASA a la semana.
✅ Clopidogrel + DOAC preferido tras retirar ASA.
✅ Los DOAC son preferidos sobre warfarina cuando no hay contraindicación.
✅ La pregunta clásica es cuánto tiempo mantener el ASA (respuesta: ~1 semana).

Referencias
• ESC Guidelines for the Management of Acute Coronary Syndromes.
• ESC Guidelines for the Management of Atrial Fibrillation.
• AHA/ACC Guideline on Coronary Revascularization.
• Braunwald's Heart Disease.
• UpToDate: Antithrombotic therapy after coronary stenting in patients with AF.`,
  },
  {
    id: "dr-q-07",
    examArea: "Medicina Interna / Endocrinología",
    topic: "Endocrinología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "endocrinologia", "diabetes", "tamizaje", "ptog"],
    statement:
      "Paciente con clínica de novo de polidipsia, polifagia, poliuria, al examen físico con acantosis nigricans, tiene antecedentes de alcoholismo y obesidad. ¿Qué prueba de tamizaje para Diabetes mellitus es la más sensible para este paciente?",
    options: [
      { id: "A", label: "A", text: "Hemoglobina glicada." },
      { id: "B", label: "B", text: "Glucosa en ayunas." },
      { id: "C", label: "C", text: "Test de Sullivan." },
      { id: "D", label: "D", text: "Prueba de tolerancia oral a la glucosa con 75 g." },
    ],
    correctOptionId: "D",
    explanation:
      "La PTOG con 75 g es la prueba de tamizaje más sensible para detectar diabetes en fases tempranas, porque captura la hiperglucemia posprandial, alteración metabólica inicial en resistencia a la insulina.",
    keyPoints: [
      "Cuando veas: obesidad + acantosis nigricans + síntomas cardinales de diabetes (poliuria, polidipsia, polifagia).",
      "Debes pensar en: resistencia a la insulina → PTOG 75 g como prueba más sensible.",
      "La HbA1c es más práctica pero puede ser normal en fases tempranas.",
      "La glucemia en ayunas puede pasar por alto alteraciones posprandiales iniciales.",
      "Tema: Diabetes mellitus — diagnóstico y tamizaje.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de endocrinología porque evalúa la elección de la prueba diagnóstica más sensible según el mecanismo fisiopatológico de la diabetes tipo 2.

La clave no es elegir la prueba más práctica.
La clave es:
Identificar que la resistencia a la insulina altera primero la glucemia posprandial y que la PTOG la detecta antes.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Síntomas cardinales de novo: polidipsia, polifagia, poliuria.
• Acantosis nigricans (marcador clínico de resistencia a la insulina).
• Antecedentes de alcoholismo y obesidad.
• La pregunta pide la prueba de tamizaje más sensible, no la más conveniente.

Recordemos las pruebas diagnósticas según ADA:
• HbA1c ≥6.5%: refleja exposición crónica a glucosa (práctica, pero puede ser normal al inicio).
• Glucemia en ayunas ≥126 mg/dL: útil, pero puede ser normal con alteración posprandial aislada.
• PTOG 75 g: ≥200 mg/dL a las 2 h — mayor sensibilidad en fases tempranas.
• Glucemia aleatoria ≥200 mg/dL con síntomas: también diagnóstica, pero la pregunta pide tamizaje.

Por lo tanto:
La alteración metabólica más temprana es la hiperglucemia posprandial.
La PTOG es la prueba que mejor la captura.

¿Por qué la opción D es la respuesta correcta?
La prueba de tolerancia oral a la glucosa con 75 g evalúa la respuesta glucémica postcarga.
En resistencia a la insulina, la glucemia en ayunas puede permanecer normal mientras la posprandial ya está alterada.
Por eso la PTOG tiene la mayor sensibilidad para detectar diabetes en fases tempranas.

¿Por qué fallan las otras opciones?
Opción A (HbA1c): excelente para seguimiento y tamizaje poblacional, pero refleja promedio de 2-3 meses; puede ser normal al inicio.
Opción B (glucosa en ayunas): buena especificidad, pero menor sensibilidad que la PTOG en etapas tempranas.
Opción C (test de Sullivan): prueba de función hepática, no tiene relación con el diagnóstico de diabetes.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"HbA1c = prueba de elección siempre" o "glucemia en ayunas = suficiente".
Pero el examen exige distinguir:
Sensibilidad vs practicidad según el contexto clínico.
Aquí el dato decisivo es:
La pregunta pide la prueba MÁS SENSIBLE, no la más usada en consulta.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar factores de riesgo y síntomas (obesidad, acantosis, poliuria).
2. Diferenciar sensibilidad de practicidad de cada prueba.
3. Si buscan sensibilidad máxima → PTOG 75 g.
4. Si buscan tamizaje poblacional práctico → HbA1c o glucemia en ayunas.

Perlas de examen
✅ PTOG: prueba más sensible en fases tempranas.
✅ HbA1c: prueba más práctica para tamizaje y seguimiento.
✅ Acantosis nigricans = marcador clínico de resistencia a la insulina.
✅ La alteración posprandial precede a la elevación de HbA1c y glucemia en ayunas.
✅ Síntomas cardinales + glucemia aleatoria ≥200 mg/dL también diagnostican.

Referencias
• ADA Standards of Care in Diabetes.
• Endocrine Society Clinical Practice Guidelines.
• Harrison's Principles of Internal Medicine.
• Williams Textbook of Endocrinology.
• UpToDate: Screening for type 2 diabetes mellitus.`,
  },
  {
    id: "dr-q-08",
    examArea: "Medicina Interna / Neumología",
    topic: "Neumología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "neumologia", "epoc", "gold"],
    statement:
      "Un hombre de 60 años con EPOC en tratamiento con tiotropio presenta dos exacerbaciones en los últimos 6 meses. ¿Cuál es el siguiente paso en el manejo?",
    options: [
      { id: "A", label: "A", text: "Agregar un corticoide inhalado." },
      { id: "B", label: "B", text: "Cambiar a LAMA + LABA." },
      { id: "C", label: "C", text: "Iniciar roflumilast." },
      { id: "D", label: "D", text: "Mantener el tratamiento actual." },
    ],
    correctOptionId: "B",
    explanation:
      "≥2 exacerbaciones en 6 meses reclasifica al paciente como GOLD E (alto riesgo). Tratamiento inicial recomendado: LABA + LAMA; debe añadirse LABA al tiotropio (LAMA) que ya usa.",
    keyPoints: [
      "Cuando veas: EPOC con ≥2 exacerbaciones en el último año (o 2 en 6 meses).",
      "Debes pensar en: GOLD E → escalonar a LABA + LAMA.",
      "El paciente ya usa tiotropio (LAMA); el paso es añadir LABA, no solo ICS.",
      "Los corticoides inhalados no se indican de forma indiscriminada; los eosinófilos orientan.",
      "Tema: EPOC — clasificación GOLD y tratamiento.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neumología porque evalúa la escalada terapéutica en EPOC según la clasificación GOLD actual, que prioriza el riesgo de exacerbaciones sobre la disnea aislada.

La clave no es agregar corticoides inhalados por defecto.
La clave es:
Identificar que las exacerbaciones frecuentes reclasifican al paciente como GOLD E y obligan a LABA + LAMA.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 60 años con EPOC.
• Tratamiento actual: tiotropio (LAMA — antagonista muscarínico de acción prolongada).
• Dos exacerbaciones en los últimos 6 meses.
• La pregunta es sobre el siguiente paso terapéutico.

Recordemos la clasificación GOLD 2023-2025:
• Se evalúa síntomas (mMRC o CAT) y riesgo de exacerbaciones.
• ≥2 exacerbaciones en 1 año (o ≥1 con hospitalización) = grupo E (alto riesgo).
• Tratamiento inicial en GOLD E: LABA + LAMA (doble broncodilatación).
• ICS se añade selectivamente si eosinófilos ≥300 cél/µL o asma-EPOC overlap.

Por lo tanto:
El paciente pasó de manejo con monoterapia LAMA a necesidad de doble broncodilatación.
No debe mantenerse el mismo tratamiento ni añadirse ICS sin criterio.

¿Por qué la opción B es la respuesta correcta?
Cambiar a LAMA + LABA (o añadir LABA al esquema).
El paciente ya usa tiotropio (LAMA); el escalonamiento correcto es añadir un LABA.
Esta combinación mejora función pulmonar, síntomas y reduce exacerbaciones en GOLD E.

¿Por qué fallan las otras opciones?
Opción A (agregar corticoide inhalado): no es el primer escalonamiento en GOLD E sin eosinofilia elevada; los ICS aumentan riesgo de neumonía.
Opción C (roflumilast): indicado en EPOC grave con bronquitis crónica y exacerbaciones frecuentes refractarias, no como segundo paso estándar.
Opción D (mantener tratamiento): inadecuado ante 2 exacerbaciones en 6 meses; el paciente requiere escalada.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Exacerbaciones = corticoides inhalados" o "EPOC = solo un broncodilatador".
Pero el examen exige conocer:
La clasificación GOLD actual y el algoritmo de escalada.
Aquí el dato decisivo es:
2 exacerbaciones en 6 meses con monoterapia LAMA insuficiente.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Contar exacerbaciones en el último año.
2. Clasificar según GOLD (grupo E si ≥2 exacerbaciones).
3. Escalonar a LABA + LAMA como combinación inicial en grupo E.
4. Considerar ICS solo si eosinófilos elevados o componente asmático.

Perlas de examen
✅ 2+ exacerbaciones → GOLD E.
✅ GOLD E: LABA + LAMA como combinación inicial.
✅ ICS no de forma indiscriminada; eosinófilos orientan indicación.
✅ Roflumilast es tercera línea en subgrupo seleccionado.
✅ La disnea sola no define el grupo; las exacerbaciones sí cambian el tratamiento.

Referencias
• GOLD Report 2025 — Global Initiative for Chronic Obstructive Lung Disease.
• Harrison's Principles of Internal Medicine.
• GINA/GOLD Overlap Document.
• UpToDate: Stable COPD: Overview of management.`,
  },
  {
    id: "dr-q-09",
    examArea: "Medicina Interna / Urgencias / Cirugía",
    topic: "Urgencias",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "urgencias", "trauma", "atls", "abdomen"],
    statement:
      "Un paciente sufre trauma abdominal cerrado posterior a un accidente de tránsito, en el servicio de trauma presenta hemoperitoneo masivo, signos de irritación peritoneal y shock hipovolémico. ¿Qué conducta es más adecuada?",
    options: [
      { id: "A", label: "A", text: "Laparotomía exploradora." },
      { id: "B", label: "B", text: "TAC abdominal." },
      { id: "C", label: "C", text: "Tratamiento médico." },
      { id: "D", label: "D", text: "Observación clínica." },
    ],
    correctOptionId: "A",
    explanation:
      "Shock hipovolémico + irritación peritoneal + hemoperitoneo masivo = lesión intraabdominal grave con inestabilidad hemodinámica. Según ATLS: laparotomía exploradora inmediata sin retrasar por TAC u observación.",
    keyPoints: [
      "Cuando veas: trauma abdominal cerrado + shock hipovolémico + peritonitis + hemoperitoneo.",
      "Debes pensar en: laparotomía exploradora inmediata (no TAC ni observación).",
      "El TAC está reservado para pacientes hemodinámicamente estables.",
      "FAST confirma líquido libre pero no debe retrasar cirugía si hay inestabilidad.",
      "Tema: Trauma abdominal — manejo según ATLS.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de urgencias y cirugía porque evalúa la decisión quirúrgica inmediata en trauma abdominal según la estabilidad hemodinámica, un principio fundamental del ATLS.

La clave no es confirmar la lesión con TAC.
La clave es:
Reconocer que la inestabilidad hemodinámica con peritonitis obliga a cirugía sin demora.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Trauma abdominal cerrado por accidente de tránsito.
• Hemoperitoneo masivo.
• Signos de irritación peritoneal (peritonitis).
• Shock hipovolémico (inestabilidad hemodinámica).

Recordemos el algoritmo ATLS para trauma abdominal:
• Paciente inestable + peritonitis o evidencia de sangrado intraabdominal → laparotomía exploradora inmediata.
• Paciente estable → TAC abdominal con contraste para caracterizar lesiones.
• FAST (ecografía focalizada): útil para detectar líquido libre rápidamente, pero no retrasa cirugía si hay inestabilidad.

Por lo tanto:
Este paciente no es candidato a TAC, observación ni manejo médico.
Requiere control quirúrgico del sangrado de inmediato.

¿Por qué la opción A es la respuesta correcta?
Laparotomía exploradora es la conducta salvadora.
Permite identificar y controlar la fuente de sangrado (bazo, hígado, mesenterio, etc.).
Cada minuto de retraso aumenta la mortalidad por shock refractario.

¿Por qué fallan las otras opciones?
Opción B (TAC abdominal): contraindicado en paciente inestable; el traslado al TAC retrasa cirugía y empeora el pronóstico.
Opción C (tratamiento médico): inaceptable ante shock hemorrágico con peritonitis; requiere intervención quirúrgica.
Opción D (observación clínica): peligroso; la observación es para pacientes estables sin signos de peritonitis ni inestabilidad.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Trauma abdominal = siempre TAC" o "confirmar antes de operar".
Pero el examen exige correlacionar:
Estabilidad hemodinámica + hallazgos peritoneales.
Aquí los datos decisivos son:
Shock + peritonitis + hemoperitoneo masivo.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar ABCDE (vía aérea, respiración, circulación).
2. Determinar estabilidad hemodinámica.
3. Si inestable + peritonitis/sangrado → quirófano inmediato.
4. Si estable → TAC para estratificar lesiones y decidir manejo conservador vs quirúrgico.

Perlas de examen
✅ Shock + peritonitis = quirófano.
✅ TAC reservado para pacientes hemodinámicamente estables.
✅ FAST confirma líquido libre; no retrasa cirugía si inestable.
✅ El examen físico (peritonitis) sigue siendo fundamental.
✅ Un TAC nunca debe retrasar una cirugía necesaria.

Referencias
• ATLS — Advanced Trauma Life Support, 11th Edition.
• EAST Trauma Guidelines — Blunt Abdominal Trauma.
• Schwartz Principles of Surgery.
• Tintinalli Emergency Medicine.
• UpToDate: Blunt abdominal trauma in adults: Initial evaluation and management.`,
  },
  {
    id: "dr-q-10",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "sca", "stemi", "patron_tronco", "avr"],
    statement:
      "Un paciente masculino de 55 años, llevado a urgencias por cuadro clínico de 50 minutos de evolución consistente en dolor torácico, central, opresivo, que se irradia a brazo izquierdo, le toman un ECG que reporta depresión del segmento ST en derivadas DI, DII, V4-V6 con elevación del segmento ST en AVR. ¿Cuál es el diagnóstico presuntivo?",
    options: [
      { id: "A", label: "A", text: "SCASEST." },
      { id: "B", label: "B", text: "SCACEST." },
      { id: "C", label: "C", text: "Angina inestable." },
      { id: "D", label: "D", text: "Pericarditis." },
    ],
    correctOptionId: "B",
    explanation:
      "Depresión difusa del ST con elevación en aVR (patrón del tronco) sugiere isquemia subendocárdica extensa por lesión crítica del tronco coronario izquierdo o enfermedad multivaso severa. Equivalente de elevación del ST → SCACEST.",
    keyPoints: [
      "Cuando veas: dolor torácico típico + depresión difusa del ST + elevación en aVR.",
      "Debes pensar en: patrón del tronco coronario izquierdo → SCACEST (equivalente STEMI).",
      "aVR es la derivación clave que muchos olvidan en el examen.",
      "Requiere valoración invasiva urgente, no manejo como NSTEMI de bajo riesgo.",
      "Tema: Síndrome coronario agudo — patrón electrocardiográfico del tronco.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa el reconocimiento del patrón electrocardiográfico del tronco coronario izquierdo, uno de los hallazgos de mayor riesgo en urgencias.

La clave no es buscar elevación del ST en derivaciones precordiales.
La clave es:
Identificar la depresión difusa del ST con elevación en aVR como equivalente de STEMI.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 55 años con dolor torácico central opresivo irradiado a brazo izquierdo (50 minutos).
• ECG con depresión del segmento ST en DI, DII, V4-V6.
• Elevación del segmento ST en aVR.
• Cuadro clínico compatible con isquemia miocárdica aguda.

Recordemos el patrón del tronco (left main pattern):
• Depresión difusa del ST en múltiples derivaciones (isquemia subendocárdica extensa).
• Elevación del ST en aVR (derivación que mira al tronco coronario izquierdo).
• Sugiere lesión crítica del tronco coronario izquierdo o enfermedad multivaso severa.
• Se clasifica como equivalente de elevación del ST (SCACEST).

Por lo tanto:
No es angina inestable de bajo riesgo.
No es pericarditis (aunque puede haber depresión difusa, la clínica y aVR orientan diferente).
No es SCASEST clásico (no hay elevación persistente en derivaciones convencionales).

¿Por qué la opción B es la respuesta correcta?
SCACEST (síndrome coronario agudo con elevación del ST).
El patrón del tronco es un equivalente de STEMI que requiere valoración invasiva urgente y reperfusión según protocolo de IAMCEST.

¿Por qué fallan las otras opciones?
Opción A (SCASEST): aunque no hay elevación clásica del ST, el patrón del tronco se maneja como SCACEST, no como NSTEMI convencional.
Opción C (angina inestable): subestima la gravedad; este patrón indica isquemia extensa con lesión crítica del tronco.
Opción D (pericarditis): el dolor es isquémico típico; en pericarditis suele haber dolor pleurítico, roce pericárdico y elevación cóncava difusa del ST (no patrón de aVR).

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"STEMI = solo si hay elevación del ST en precordiales" o "depresión del ST = siempre NSTEMI".
Pero el examen exige conocer:
Los equivalentes electrocardiográficos de elevación del ST.
Aquí el dato decisivo es:
Elevación en aVR + depresión difusa del ST + dolor típico.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar el cuadro clínico (dolor isquémico típico).
2. Analizar todas las derivaciones, incluyendo aVR.
3. Reconocer el patrón del tronco (depresión difusa + elevación aVR).
4. Clasificar como SCACEST equivalente y activar protocolo de reperfusión urgente.

Perlas de examen
✅ Depresión ST difusa + elevación aVR = patrón del tronco.
✅ Equivalente STEMI; valoración invasiva urgente.
✅ aVR es derivación clave frecuentemente olvidada en examen.
✅ El diagnóstico siempre integra clínica + ECG completo.
✅ Otros equivalentes: BRI/BRD, De Winter, infarto posterior, Wellens.

Referencias
• ESC Guidelines for the Management of Acute Coronary Syndromes.
• AHA/ACC Guideline for the Management of Patients With Acute Coronary Syndromes.
• Braunwald's Heart Disease.
• Tintinalli Emergency Medicine.
• UpToDate: Electrocardiogram in the diagnosis of myocardial ischemia and infarction.`,
  },
  {
    id: "dr-q-11",
    examArea: "Neurología / Neurointensivismo / ACV",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "acv", "trombectomia", "wake_up_stroke", "gran_vaso"],
    statement:
      "Hombre de 68 años con fibrilación auricular paroxística e hipertensión, sin anticoagulación. Hemiplejía derecha y afasia global al despertar (Wake-up Stroke). Visto normal por última vez a las 22:00; despierta con déficit a las 07:00; ingresa a las 08:30. Glasgow 11, NIHSS 22: hemianopsia homónima derecha, desviación conjugada de la mirada a la izquierda, hemiplejía derecha 0/5, afasia global. PA 175/95 mmHg. TAC simple sin hemorragia; ASPECTS 8 con pérdida sutil gris/blanca en ínsula izquierda. AngioTAC: oclusión total M1 ACM izquierda. TAC perfusión: core (rCBF <30%) 15 cc; penumbra (Tmax >6s) 110 cc; mismatch 95 cc. ¿Cuál es la conducta de reperfusión inmediata MÁS indicada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Trombólisis IV inmediata (Alteplasa) por ventana extendida, seguida de traslado a angiografía.",
      },
      {
        id: "B",
        label: "B",
        text: "Omitir trombólisis IV y trasladar directamente a hemodinamia para trombectomía mecánica endovascular inmediata.",
      },
      {
        id: "C",
        label: "C",
        text: "Heparina de bajo peso molecular a dosis plenas e impregnación con amiodarona por origen cardioembólico.",
      },
      {
        id: "D",
        label: "D",
        text: "Abstenerse de reperfusión porque supera 4.5 h y hay infarto establecido irreversible en áreas de Wernicke y Broca.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Wake-up stroke con ~10.5 h desde última vez normal: fuera de ventana para trombólisis IV (<4.5 h). Oclusión M1 con core pequeño (15 cc) y mismatch volumétrico grande (95 cc): candidato ideal a trombectomía mecánica según DAWN/DEFUSE-3 (6–24 h con discordancia clínico-imagenológica).",
    keyPoints: [
      "Cuando veas: wake-up stroke + oclusión de gran vaso (M1) + core pequeño y penumbra grande en perfusión.",
      "Debes pensar en: trombectomía mecánica (DAWN/DEFUSE-3), no trombólisis IV fuera de ventana.",
      "Tejido salvable, no reloj: la perfusión define candidatos fuera de las 4.5 h.",
      "Alteplasa >4.5 h sin protocolo WAKE-UP con RM aumenta riesgo hemorrágico.",
      "Tema: ACV isquémico — reperfusión en oclusión de gran vaso.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa la reperfusión en wake-up stroke con oclusión de gran vaso, donde la perfusión importa más que el reloj.

La clave no es calcular solo las horas desde el inicio.
La clave es:
Identificar tejido salvable (mismatch volumétrico) y elegir trombectomía mecánica sobre trombólisis IV fuera de ventana.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 68 años con FA sin anticoagular.
• Wake-up stroke: última vez normal 22:00, déficit al despertar 07:00 (~10.5 h).
• NIHSS 22, Glasgow 11.
• AngioTAC: oclusión total M1 ACM izquierda.
• TAC perfusión: core 15 cc, penumbra 110 cc, mismatch 95 cc.
• ASPECTS 8; sin hemorragia en TAC simple.

Recordemos las ventanas de reperfusión:
• Trombólisis IV: ≤4.5 h desde inicio conocido (o protocolo WAKE-UP con RM).
• Trombectomía mecánica: hasta 6-24 h según DAWN y DEFUSE-3 con discordancia clínico-imagenológica.
• En oclusión de gran vaso: "el tiempo es cerebro, pero la perfusión es tiempo".

Por lo tanto:
Fuera de ventana para alteplasa IV estándar.
Candidato ideal a trombectomía por core pequeño y penumbra grande.

¿Por qué la opción B es la respuesta correcta?
Trasladar directamente a hemodinamia para trombectomía mecánica endovascular.
DAWN y DEFUSE-3 demostraron beneficio de trombectomía entre 6-24 h con mismatch en oclusión de gran vaso.
Core pequeño (15 cc) + penumbra grande (95 cc) = perfil ideal.

¿Por qué fallan las otras opciones?
Opción A (trombólisis IV): >4.5 h sin protocolo WAKE-UP con RM; mayor riesgo hemorrágico sin beneficio claro vs trombectomía directa.
Opción C (heparina + amiodarona): no es reperfusión en ACV agudo; anticoagulación se difiere.
Opción D (abstenerse): ignora evidencia de trombectomía extendida; el core es pequeño, hay tejido salvable.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
">4.5 h = no reperfundir" o "wake-up stroke = siempre trombólisis".
Pero el examen exige integrar:
Imagen de perfusión + oclusión de gran vaso + ensayos DAWN/DEFUSE-3.
Aquí el dato decisivo es:
Mismatch volumétrico grande con core pequeño en M1 ocluida.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar ACV isquémico y descartar hemorragia.
2. Identificar oclusión de gran vaso (angioTAC).
3. Evaluar core vs penumbra (perfusión).
4. Si mismatch favorable fuera de ventana IV → trombectomía mecánica.

Perlas de examen
✅ Tejido, no tiempo: perfusión define candidatos fuera de ventana IV.
✅ DAWN/DEFUSE-3: trombectomía 6-24 h con mismatch en gran vaso.
✅ Alteplasa >4.5 h sin WAKE-UP con RM ↑ riesgo hemorrágico.
✅ Oclusión M1 con NIHSS alto y mismatch = trombectomía, no esperar.
✅ La anticoagulación en FA se reinicia después, no en fase aguda de reperfusión.

Referencias
• AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke.
• DAWN Trial; DEFUSE-3 Trial.
• European Stroke Organisation (ESO) Guidelines.
• Tintinalli Emergency Medicine.
• UpToDate: Mechanical thrombectomy for acute ischemic stroke.`,
  },
  {
    id: "dr-q-12",
    examArea: "Neurología / Neurointensivismo / Epilepsia",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "epilepsia", "estado_epileptico", "eenc"],
    statement:
      "Mujer de 35 años con epilepsia estructural por displasia cortical, abandono de medicación. Convulsiones generalizadas persistentes. En ambulancia: Midazolam 10 mg IM. En reanimación: Lorazepam 4 mg IV + Levetiracetam 60 mg/kg IV. Quince minutos después cesa el componente motor, pero permanece en coma (Glasgow 3) con sacudidas rítmicas en comisura labial derecha y nistagmo horizontal rítmico. Glucosa 110 mg/dL; sodio 138 mEq/L. ¿Cuál es la conducta neurológica y de soporte más urgente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Observación estrecha: ausencia de movimientos tónico-clónicos indica resolución; estado post-ictal prolongado por benzodiacepinas.",
      },
      {
        id: "B",
        label: "B",
        text: "Segunda línea de anticonvulsivantes IV (valproato o fenitoína) y observación en sala general.",
      },
      {
        id: "C",
        label: "C",
        text: "Intubación orotraqueal inmediata, infusión continua de anestésicos (propofol o midazolam), UCI y EEG continuo urgente.",
      },
      {
        id: "D",
        label: "D",
        text: "Punción lumbar inmediata y aciclovir IV por fiebre 38 °C y sacudidas faciales focales.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Tras benzodiacepina + segunda línea (levetiracetam) persiste coma con signos sutiles (mioclonías faciales, nistagmo): sospechar estado epiléptico no convulsivo/refractario. Conducta: vía aérea definitiva, anestésicos IV continuos titulados con EEG hasta supresión de brotes.",
    keyPoints: [
      "Cuando veas: convulsiones tratadas con BDZ + 2.ª línea, pero persiste coma con mioclonías o nistagmo.",
      "Debes pensar en: estado epiléptico no convulsivo refractario → intubar + anestésico IV + EEG.",
      "Cese motor ≠ fin de crisis: desacople electro-mecánico.",
      "El EEG continuo es la única forma de confirmar y titular el tratamiento.",
      "Tema: Epilepsia — estado epiléptico refractario.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa el estado epiléptico no convulsivo: cesar los movimientos tónico-clónicos no significa que la crisis haya terminado a nivel eléctrico.

La clave no es asumir estado post-ictal prolongado.
La clave es:
Reconocer el desacople electro-mecánico y tratar con anestesia y EEG continuo.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 35 años con epilepsia estructural (displasia cortical), abandono de medicación.
• Convulsiones generalizadas persistentes.
• Tratamiento recibido: midazolam IM, lorazepam IV, levetiracetam 60 mg/kg.
• Cesa el componente motor pero permanece en coma (GCS 3).
• Sacudidas rítmicas en comisura labial y nistagmo horizontal rítmico.
• Glucosa y sodio normales (descartar causas metabólicas).

Recordemos la clasificación del estado epiléptico:
• Establecido: crisis >5 min o crisis repetidas sin recuperación.
• Refractario: persiste tras benzodiacepina + anticrisis de segunda línea.
• No convulsivo: actividad epileptiforme continua sin manifestaciones motoras típicas.
• El EEG continuo confirma y guía el tratamiento.

Por lo tanto:
No es resolución de la crisis.
Es estado epiléptico no convulsivo refractario que requiere UCI.

¿Por qué la opción C es la respuesta correcta?
Intubación orotraqueal inmediata (protección de vía aérea).
Infusión continua de anestésicos (propofol o midazolam) titulados con EEG.
UCI con EEG continuo urgente hasta supresión de brotes epileptiformes.

¿Por qué fallan las otras opciones?
Opción A (observación post-ictal): peligroso; puede ser EENC con riesgo de daño cerebral irreversible.
Opción B (segunda línea adicional en sala): ya recibió levetiracetam; necesita anestesia y monitorización en UCI.
Opción D (BiPAP y test de edrofonio): no sustituye intubación con coma persistente; edrofonio es diagnóstico en miastenia, no manejo de EENC.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Sin convulsiones visibles = crisis terminada".
Pero el examen exige reconocer:
Signos sutiles (mioclonías faciales, nistagmo) + coma persistente post-tratamiento.
Aquí el dato decisivo es:
Coma GCS 3 con actividad motora sutil tras BDZ + levetiracetam.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Tratar con benzodiacepina de primera línea.
2. Si persiste → anticrisis de segunda línea (levetiracetam, valproato, fenitoína).
3. Si persiste o hay coma con signos sutiles → asumir EENC refractario.
4. Intubar + anestésico IV + EEG continuo en UCI.

Perlas de examen
✅ Cese motor ≠ fin de crisis: desacople electro-mecánico.
✅ Refractario = falla BDZ + 2.ª línea → anestésicos + EEG continuo.
✅ EEG es la única forma de confirmar y titular EENC.
✅ Mioclonías faciales y nistagmo en coma post-convulsión = alarma.
✅ No retrasar intubación esperando "despertar espontáneo".

Referencias
• Neurocritical Care Society Guidelines for Status Epilepticus.
• American Epilepsy Society Guidelines.
• Tintinalli Emergency Medicine.
• UpToDate: Convulsive status epilepticus in adults.`,
  },
  {
    id: "dr-q-13",
    examArea: "Neurología / Neurointensivismo / HSA",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "hsa", "vasoespasmo", "dci"],
    statement:
      "Mujer de 48 años, día 7 de hospitalización por HSA por aneurisma de ACoA (Hunt & Hess II, Fisher 3), asegurado con coiling al día 2. Días 1–6: Glasgow 15, orientada, sin déficit. Día 7: deterioro súbito, Glasgow 12, nueva paresia crural derecha 2/5 (brazo 4/5), apatía marcada. PA 105/65 mmHg. TAC control: sin re-sangrado ni hidrocefalia. ¿Cuál es la intervención hemodinámica inmediata recomendada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nimodipino IV a altas dosis para vasodilatación directa del vaso espástico.",
      },
      {
        id: "B",
        label: "B",
        text: "Inducir hipertensión farmacológica con vasopresores (norepinefrina) para forzar flujo cerebral.",
      },
      {
        id: "C",
        label: "C",
        text: "Nitroprusiato de sodio para disminuir resistencia vascular y facilitar paso de sangre oxigenada.",
      },
      { id: "D", label: "D", text: "Derivación ventrículo-peritoneal urgente por falla de reabsorción de LCR." },
    ],
    correctOptionId: "B",
    explanation:
      "Deterioro focal días 4–14 post-HSA sin re-sangrado ni hidrocefalia: isquemia cerebral retardada (DCI) por vasoespasmo. Tratamiento sintomático: euvolemia + vasopresores (norepinefrina/fenilefrina) para elevar PAM y perfusión cerebral.",
    keyPoints: [
      "Cuando veas: HSA + deterioro neurológico entre días 4-14 + TAC sin re-sangrado ni hidrocefalia.",
      "Debes pensar en: vasoespasmo (DCI) → euvolemia + vasopresores para elevar PAM.",
      "Día 1 deterioro → re-sangrado; días 4-14 + focal → vasoespasmo.",
      "Nimodipino oral es neuroprotector, no revierte vasoespasmo agudo.",
      "Tema: Hemorragia subaracnoidea — vasoespasmo e isquemia cerebral retardada.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurointensivismo porque evalúa el vasoespasmo post-HSA: el deterioro entre días 4-14 sin re-sangrado suele ser isquemia cerebral retardada (DCI).

La clave no es buscar nuevo sangrado o hidrocefalia.
La clave es:
Reconocer la ventana del vasoespasmo y elevar la presión arterial con vasopresores.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 48 años, día 7 de hospitalización por HSA por aneurisma de ACoA.
• Hunt & Hess II, Fisher 3; coilada al día 2.
• Días 1-6 estables; día 7 deterioro súbito con nueva paresia crural derecha y apatía.
• Glasgow baja de 15 a 12.
• TAC control: sin re-sangrado ni hidrocefalia.

Recordemos la cronología post-HSA:
• Días 0-3: riesgo de re-sangrado, hidrocefalia aguda.
• Días 4-14: ventana clásica de vasoespasmo y DCI.
• DCI: el cerebro vasoespástico pierde autorregulación y depende de la PAM.
• Nimodipino oral 60 mg c/4 h × 21 días: neuroprotección, no trata espasmo agudo.

Por lo tanto:
No es re-sangrado (TAC limpio).
No es hidrocefalia (TAC la descartó).
Es vasoespasmo con isquemia cerebral retardada.

¿Por qué la opción B es la respuesta correcta?
Inducir hipertensión farmacológica con vasopresores (norepinefrina).
Objetivo: elevar PAM y forzar flujo cerebral a través de vasos espásticos.
Complementar con euvolemia (no hipovolemia).

¿Por qué fallan las otras opciones?
Opción A (nimodipino IV): no revierte vasoespasmo agudo; vía IV puede causar hipotensión peligrosa.
Opción C (nitroprusiato): vasodilatador sistémico que roba flujo del cerebro vasoespástico y empeora isquemia.
Opción D (derivación VP): indicada si hay hidrocefalia; el TAC la descartó.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"HSA = nimodipino para todo" o "deterioro = nuevo sangrado".
Pero el examen exige correlacionar:
Día de evolución + TAC + déficit focal nuevo.
Aquí el dato decisivo es:
Día 7 post-HSA con TAC sin re-sangrado ni hidrocefalia.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar día de evolución post-HSA.
2. Si deterioro días 4-14 + TAC limpio → vasoespasmo.
3. Confirmar con angiografía o Doppler transcraneal si disponible.
4. Tratamiento hemodinámico: euvolemia + vasopresores (norepinefrina/fenilefrina).

Perlas de examen
✅ Día 1 deterioro → re-sangrado; días 4-14 + focal → vasoespasmo (DCI).
✅ Nimodipino oral es neuroprotector, no revierte vasoespasmo agudo.
✅ Vasodilatadores sistémicos (nitroprusiato) empeoran isquemia.
✅ El cerebro vasoespástico depende de la presión de perfusión sistémica.
✅ Angioplastia intraarterial es rescate si falla terapia hemodinámica.

Referencias
• AHA/ASA Guidelines for the Management of Aneurysmal Subarachnoid Hemorrhage.
• Neurocritical Care Society Guidelines.
• Tintinalli Emergency Medicine.
• UpToDate: Cerebral vasospasm and delayed cerebral ischemia after aneurysmal SAH.`,
  },
  {
    id: "dr-q-14",
    examArea: "Neurología / Neurointensivismo / Urgencias",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "miastenia", "crisis_miastenica"],
    statement:
      "Mujer de 28 años con miastenia gravis (piridostigmina, prednisona). Infección urinaria tratada con ciprofloxacina hace 3 días. Disnea severa, imposibilidad para deglutir, debilidad generalizada. Ptosis bilateral masiva, disartria flácida, debilidad proximal 3/5, respiración paradójica abdominal, reflejo tusígeno inefectivo. CVF 10 mL/kg (normal >60), NIF -15 cmH2O (crítico < -20). Gases: pH 7.28, PaCO2 58, PaO2 65. ¿Cuál es el paso de rescate primario e intervención modificadora correcta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Incrementar piridostigmina a 120 mg c/4 h y oxígeno por cánula nasal.",
      },
      {
        id: "B",
        label: "B",
        text: "Bolo de metilprednisolona 1 g IV y observación en urgencias.",
      },
      {
        id: "C",
        label: "C",
        text: "Intubación orotraqueal expedita seguida de plasmaféresis o IGIV temprana.",
      },
      {
        id: "D",
        label: "D",
        text: "BiPAP como única medida respiratoria y test de edrofonio (Tensilon).",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Crisis miasténica con falla bulbar e insuficiencia ventilatoria hipercápnica (CVF <15 mL/kg, NIF peor que -20, PaCO2 58): intubación electiva temprana. Luego PLEX o IGIV. Suspender piridostigmina en ventilación mecánica.",
    keyPoints: [
      "Cuando veas: miastenia gravis + CVF <15 mL/kg o NIF peor que -20 + hipercapnia.",
      "Debes pensar en: crisis miasténica → intubación electiva temprana + PLEX o IGIV.",
      "Regla de los 20: CVF <15 mL/kg o NIF peor que -20 → intubar.",
      "Suspender piridostigmina en ventilación mecánica; no aumentar dosis.",
      "Tema: Miastenia gravis — crisis miasténica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa la crisis miasténica y la regla de los 20, que define cuándo intubar antes del colapso respiratorio.

La clave no es aumentar la piridostigmina ni usar BiPAP como única medida.
La clave es:
Reconocer la insuficiencia ventilatoria inminente e intubar de forma electiva temprana.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 28 años con miastenia gravis (piridostigmina, prednisona).
• Precipitante: ciprofloxacina (antibiótico que puede bloquear canal de acetilcolina).
• Disnea severa, imposibilidad para deglutir, debilidad generalizada.
• Respiración paradójica abdominal, reflejo tusígeno inefectivo.
• CVF 10 mL/kg (crítico <15), NIF -15 cmH2O (crítico < -20).
• Gases: pH 7.28, PaCO2 58 (hipercapnia = falla ventilatoria).

Recordemos la crisis miasténica:
• Debilidad bulbar y respiratoria que amenaza la vida.
• Regla de los 20: CVF <15 mL/kg o NIF peor que -20 → intubación electiva.
• Tratamiento: PLEX o IGIV (igual eficacia) tras asegurar vía aérea.
• Suspender piridostigmina en VM (aumenta secreciones y broncoespasmo).

Por lo tanto:
No es una exacerbación leve manejable con mestinón.
Es crisis miasténica con falla ventilatoria hipercápnica.

¿Por qué la opción C es la respuesta correcta?
Intubación orotraqueal expedita (antes del arresto respiratorio).
Seguida de plasmaféresis o IGIV temprana.
La intubación electiva es más segura que la emergente tras paro.

¿Por qué fallan las otras opciones?
Opción A (aumentar piridostigmina + O2 nasal): insuficiente ante hipercapnia; la piridostigmina empeora secreciones en VM.
Opción B (metilprednisolona sola): en fase aguda puede empeorar debilidad 7-10 días; no trata la crisis respiratoria.
Opción D (BiPAP y test de edrofonio): CVF demasiado baja para BiPAP como única medida; edrofonio es diagnóstico, no rescate.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Miastenia = más piridostigmina" o "BiPAP antes de intubar".
Pero el examen exige aplicar:
La regla de los 20 con parámetros ventilatorios objetivos.
Aquí los datos decisivos son:
CVF 10 mL/kg + PaCO2 58 + falla bulbar.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar CVF y NIF en todo paciente miasténico con disnea.
2. Si CVF <15 o NIF peor que -20 → intubar.
3. Suspender piridostigmina, iniciar PLEX o IGIV.
4. Evitar nuevos fármacos que bloqueen ACh (aminoglucósidos, fluoroquinolonas).

Perlas de examen
✅ Regla de los 20: CVF <15 mL/kg o NIF peor que -20 → intubar.
✅ PLEX o IGIV de primera línea; igual eficacia.
✅ No más piridostigmina ni esteroides altos en fase aguda aislada.
✅ La hipercapnia confirma falla ventilatoria, no solo fatiga muscular.
✅ Ciprofloxacina y aminoglucósidos pueden precipitar crisis.

Referencias
• AAN Practice Guidelines — Myasthenic Crisis.
• Neurocritical Care Society Guidelines.
• Tintinalli Emergency Medicine.
• UpToDate: Management of myasthenic crisis.`,
  },
  {
    id: "dr-q-15",
    examArea: "Neurología / Neurointensivismo / Urgencias",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "herniacion", "hic", "uncal"],
    statement:
      "Hombre de 58 años con HIC por HTA maligna. Ingreso hace 2 h: Glasgow 12, hemiparesia izquierda 3/5. Deterioro súbito: Glasgow 5 (decorticación). Pupila derecha 7 mm arrefléctica (midriasis paralítica), ojo derecho desviado abajo y afuera; pupila izquierda 2 mm reactiva. Hemiplejía izquierda densa, Babinski bilateral. PA 230/120, FC 45, FR 10 (Tríada de Cushing). TAC inicial: hematoma ganglios basales derechos 70 cc con desviación de línea media. ¿Cuál alteración anatómica explica la midriasis derecha y el manejo hiperosmolar de primer orden?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Herniación subfalcina derecha; manejo con hiperventilación agresiva a PaCO2 25 mmHg.",
      },
      {
        id: "B",
        label: "B",
        text: "Herniación uncal derecha comprimiendo III par derecho; manitol 20% o solución salina hipertónica inmediata.",
      },
      {
        id: "C",
        label: "C",
        text: "Herniación amigdalina derecha; corticosteroides IV a dosis altas.",
      },
      {
        id: "D",
        label: "D",
        text: "Herniación central transtentorial; catéter PIC y pentobarbital.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Midriasis paralítica ipsilateral + ojo caído abajo/afuera + hemiplejía contralateral + Tríada de Cushing: herniación uncal que comprime III par (fibras parasimpáticas externas). Emergencia: manitol o salina hipertónica de inmediato, incluso antes de TAC de control.",
    keyPoints: [
      "Cuando veas: HIC + midriasis paralítica ipsilateral fija + ojo «caído» + Tríada de Cushing.",
      "Debes pensar en: herniación uncal → manitol o salina hipertónica de inmediato.",
      "Uncus temporal comprime III par ipsilateral → midriasis paralítica.",
      "Terapia puente hiperosmolar antes de cirugía; no esperar TAC de control.",
      "Tema: Hipertensión intracraneal — herniación uncal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurointensivismo porque evalúa la herniación uncal: la midriasis ipsilateral fija es compresión del III par, y el manejo puente es hiperosmolar de inmediato.

La clave no es hiperventilación agresiva ni corticosteroides.
La clave es:
Reconocer herniación uncal y administrar manitol o salina hipertónica sin demora.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 58 años con HIC por HTA maligna.
• Hematoma ganglios basales derechos de 70 cc con desviación de línea media.
• Deterioro súbito a Glasgow 5 con postura de decorticación.
• Pupila derecha 7 mm arrefléctica (midriasis paralítica).
• Ojo derecho desviado abajo y afuera (oftalmoplejía del III par).
• Tríada de Cushing: PA 230/120, FC 45, FR 10.

Recordemos la anatomía de la herniación uncal:
• El uncus temporal hernia por la incisura tentorial.
• Comprime el III par craneal ipsilateral.
• Fibras parasimpáticas periféricas del III → midriasis ipsilateral primero.
• Progresión → compromiso del tronco encefálico (Tríada de Cushing).

Por lo tanto:
No es herniación subfalcina ni central.
Es herniación uncal derecha con isquemia de tronco inminente.

¿Por qué la opción B es la respuesta correcta?
Herniación uncal derecha comprimiendo III par derecho.
Manejo hiperosmolar de primer orden: manitol 20% o solución salina hipertónica inmediata.
Terapia puente para reducir PIC mientras se prepara cirugía evacuadora.

¿Por qué fallan las otras opciones?
Opción A (herniación subfalcina + hiperventilación): no explica el patrón pupilar del III par; hiperventilación agresiva es segunda línea.
Opción C (herniación amigdalina + esteroides): los corticoides no benefician edema citotóxico/hemorrágico agudo.
Opción D (herniación central + pentobarbital): el cuadro pupilar lateralizado orienta a uncal, no central.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"HIC = esteroides" o "herniación = hiperventilar siempre primero".
Pero el examen exige correlacionar:
Patrón pupilar + postura + Tríada de Cushing.
Aquí el dato decisivo es:
Midriasis paralítica ipsilateral al hematoma.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer signos de herniación (pupila, postura, Cushing).
2. Administrar hiperosmolar de inmediato (manitol o SSH).
3. Mantener cabecera 30°, sedación, evitar hipotensión.
4. Cirugía evacuadora urgente; no retrasar por TAC de control.

Perlas de examen
✅ Uncus temporal → III par ipsilateral → midriasis paralítica.
✅ Terapia puente: hiperosmolar (manitol o SSH) antes de cirugía.
✅ Corticosteroides no en edema citotóxico/hemorrágico agudo.
✅ La Tríada de Cushing indica compromiso de tronco encefálico.
✅ Ojo «caído abajo y afuera» = parálisis del III par completo.

Referencias
• Neurocritical Care Society Guidelines on Elevated ICP.
• Brain Trauma Foundation Guidelines.
• Tintinalli Emergency Medicine.
• UpToDate: Management of acute moderate and severe traumatic brain injury.`,
  },
  {
    id: "dr-q-16",
    examArea: "Neurología / Infectología / Urgencias",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "encefalitis", "hsv", "infectologia"],
    statement:
      "Hombre de 42 años, previamente sano. Fiebre, confusión, palabras incoherentes, no reconoce a su esposa. Episodio de mirada fija, chasquido labial y movimientos rítmicos de mano derecha con amnesia; refirió olor a caucho quemado. Temp 38.7 °C. Desorientado, afasia sensitiva (Wernicke), Kernig y Brudzinski negativos. LCR: 150 leuc/mm³ (90% linfocitos), 450 eritrocitos, glucosa 55 mg/dL (sérica 90), proteínas 90 mg/dL. RM: hiperintensidad FLAIR/DWI en polos temporales, hipocampo y cara orbitaria frontal izquierda. ¿Agente etiológico y tratamiento de primera línea en los primeros 30 minutos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Meningitis por Streptococcus pneumoniae; ceftriaxona, vancomicina y dexametasona.",
      },
      {
        id: "B",
        label: "B",
        text: "Encefalitis autoinmune anti-NMDA; metilprednisolona y plasmaféresis inmediata.",
      },
      {
        id: "C",
        label: "C",
        text: "Encefalitis por HSV-1; aciclovir IV inmediato (retraso = daño cognitivo permanente o muerte).",
      },
      {
        id: "D",
        label: "D",
        text: "Toxoplasmosis cerebral; sulfadiazina y pirimetamina.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Tropismo temporal (RM), crisis focales con alucinaciones olfatorias, LCR linfocitario con eritrocitos y glucosa relativamente normal: encefalitis herpética por HSV-1. Aciclovir IV 10 mg/kg c/8 h empírico de inmediato, antes de PCR en LCR.",
    keyPoints: [
      "Cuando veas: fiebre + confusión + alucinaciones olfatorias + RM con afectación temporal/hipocampo.",
      "Debes pensar en: encefalitis herpética por HSV-1 → aciclovir IV empírico de inmediato.",
      "LCR: linfocitos + eritrocitos + glucosa relativamente normal (vs meningitis bacteriana).",
      "No esperar PCR en LCR para iniciar aciclovir; el retraso causa daño permanente o muerte.",
      "Tema: Encefalitis — encefalitis herpética por HSV-1.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología e infectología porque evalúa el reconocimiento de la encefalitis herpética, una emergencia neurológica donde cada hora de retraso en aciclovir aumenta la mortalidad.

La clave no es esperar confirmación microbiológica.
La clave es:
Iniciar aciclovir IV empírico en los primeros 30 minutos ante el patrón clínico-radiológico típico.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 42 años previamente sano.
• Fiebre, confusión, afasia sensitiva (área de Wernicke).
• Crisis con automatismos orales, chasquido labial y olor a caucho quemado (alucinación olfatoria).
• Kernig y Brudzinski negativos (no es meningitis pura).
• LCR: 150 leuc/mm³ (90% linfocitos), 450 eritrocitos, glucosa 55 mg/dL (sérica 90).
• RM: hiperintensidad FLAIR/DWI en polos temporales, hipocampo y cara orbitaria frontal izquierda.

Recordemos la encefalitis por HSV-1:
• Ascenso por tracto olfatorio o trigémino.
• Tropismo por lóbulo temporal medial e hipocampo.
• Necrosis hemorrágica del parénquima temporal.
• LCR: pleocitosis linfocitaria + eritrocitos + glucosa relativamente conservada.

Por lo tanto:
No es meningitis bacteriana (neutrófilos, glucosa muy baja).
No es encefalitis anti-NMDA (cuadro psiquiátrico, teratoma ovárico).
Es encefalitis herpética que requiere tratamiento inmediato.

¿Por qué la opción C es la respuesta correcta?
Agente: HSV-1.
Tratamiento: aciclovir IV 10 mg/kg c/8 h de inmediato.
El retraso en iniciar aciclovir se asocia a daño cognitivo permanente o muerte.
La PCR en LCR confirma, pero no debe retrasar el inicio del tratamiento.

¿Por qué fallan las otras opciones?
Opción A (meningitis neumocócica): LCR con neutrófilos predominantes y glucosa muy baja; ceftriaxona no cubre HSV.
Opción B (encefalitis anti-NMDA): cuadro psiquiátrico/ovario teratoma; RM temporal no es el patrón clásico aquí.
Opción D (toxoplasmosis): en inmunosuprimidos con lesiones multifocales; no en paciente previamente sano.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Fiebre + LCR alterado = meningitis bacteriana" o "esperar PCR para tratar".
Pero el examen exige reconocer:
Tropismo temporal + alucinaciones olfatorias + eritrocitos en LCR.
Aquí los datos decisivos son:
Olor a caucho quemado + RM en polos temporales e hipocampo.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar encefalitis ante fiebre + alteración conductual + crisis focales.
2. Solicitar RM cerebral y punción lumbar.
3. Iniciar aciclovir IV empírico sin esperar PCR.
4. Continuar mínimo 14-21 días según evolución.

Perlas de examen
✅ HSV-1: lóbulos temporales + olor/sabor extraño + automatismos orales.
✅ LCR: linfocitos + eritrocitos + glucosa normal vs bacteriana.
✅ Aciclovir empírico sin esperar PCR.
✅ Kernig/Brudzinski negativos no excluyen encefalitis.
✅ El olor a caucho quemado es alucinación olfatoria por afectación temporal.

Referencias
• IDSA Guidelines for the Management of Encephalitis.
• AAN Practice Guidelines — Viral Encephalitis.
• Harrison's Principles of Internal Medicine.
• Tintinalli Emergency Medicine.
• UpToDate: Herpes simplex virus type 1 encephalitis.`,
  },
  {
    id: "dr-q-17",
    examArea: "Neurología / ACV / Tallo Cerebral",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "acv", "wallenberg", "pica"],
    statement:
      "Hombre de 65 años, HTA y tabaquismo. Vértigo incapacitante y disfagia súbita hace 2 h. Consciente, lenguaje normal. Vértigo y nistagmo rotatorio. Ptosis leve y miosis ojo izquierdo (Horner izquierdo). Reflejo nauseoso ausente, voz ronca. ↓ dolor/temperatura hemicara izquierda y hemicuerpo derecho. Propiocepción y fuerza 5/5 en cuatro extremidades. Ataxia marcha severa hacia la izquierda, dismetría brazo izquierdo. ¿Diagnóstico topográfico y vaso ocluido?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome bulbar medial izquierdo por oclusión de arteria espinal anterior.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome pontino lateral izquierdo por oclusión de AICA.",
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome bulbar lateral izquierdo (Wallenberg) por oclusión de arteria vertebral o PICA izquierda.",
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome mesencefálico ventral izquierdo (Weber) por ramas paramedianas de PCA.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Síndrome alterno (cara ipsilateral + cuerpo contralateral) + disfagia/ronquera (IX-X) + Horner + ataxia ipsilateral + fuerza intacta = bulbo lateral izquierdo (Wallenberg), típicamente por oclusión de PICA o vertebral ipsilateral.",
    keyPoints: [
      "Cuando veas: síndrome alterno (cara ipsilateral + cuerpo contralateral) + disfagia + Horner + ataxia sin debilidad.",
      "Debes pensar en: síndrome de Wallenberg (bulbo lateral) → oclusión de PICA o arteria vertebral.",
      "Fuerza intacta → lesión lateral del bulbo, no medial (piramides preservadas).",
      "AICA afecta VII-VIII (pontino); PICA afecta IX-X (bulbar lateral).",
      "Tema: ACV — localización en tronco encefálico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa la localización topográfica en el tronco encefálico mediante el síndrome alterno de sensitividad.

La clave no es buscar debilidad motora.
La clave es:
Identificar el patrón alterno (cara ipsilateral, cuerpo contralateral) con fuerza conservada como Wallenberg.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 65 años con HTA y tabaquismo.
• Vértigo incapacitante y disfagia súbita (2 horas).
• Horner izquierdo, voz ronca, reflejo nauseoso ausente (IX-X).
• ↓ dolor/temperatura hemicara izquierda y hemicuerpo derecho (síndrome alterno).
• Ataxia ipsilateral severa; fuerza 5/5 en cuatro extremidades.

Recordemos la anatomía del bulbo lateral:
• Núcleo espinal del V → ↓ dolor/temperatura facial ipsilateral.
• Tracto espinotalámico → ↓ dolor/temperatura corporal contralateral.
• Núcleo ambiguo (IX-X) → disfagia, ronquera, reflejo nauseoso ausente.
• Vía simpática descendente → síndrome de Horner ipsilateral.
• Pedúnculo cerebeloso inferior → ataxia ipsilateral.
• Pirámides intactas → fuerza conservada.

Por lo tanto:
Lesión bulbar lateral izquierda = síndrome de Wallenberg.
Vaso típico: arteria vertebral o PICA izquierda.

¿Por qué la opción C es la respuesta correcta?
Síndrome bulbar lateral izquierdo (Wallenberg).
Por oclusión de arteria vertebral o PICA (posterior inferior cerebelosa) izquierda.
Es el ACV de tronco encefálico más preguntado en residencias.

¿Por qué fallan las otras opciones?
Opción A (bulbar medial + arteria espinal anterior): afecta pirámides → habría debilidad motora.
Opción B (pontino lateral + AICA): afecta VII-VIII (facial/auditivo), no el patrón bulbar con IX-X.
Opción D (mesencefálico de Weber + PCA): III par + hemiplejía contralateral; no disfagia ni síndrome alterno sensitivo.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Vértigo = vestibular periférico" o "disfagia = ACV bulbar medial".
Pero el examen exige integrar:
Síndrome alterno + núcleos craneales bajos + ataxia sin debilidad.
Aquí el dato decisivo es:
↓ sensibilidad cara izquierda + cuerpo derecho + fuerza intacta.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar síndrome alterno (localización en tronco).
2. Evaluar fuerza: intacta → lesión lateral; débil → lesión medial.
3. Correlacionar núcleos craneales (IX-X = bulbo, VII-VIII = puente).
4. Asociar vaso: PICA/vertebral = Wallenberg.

Perlas de examen
✅ Alterno cara/cuerpo = tronco encefálico.
✅ Fuerza intacta → lesión lateral (no piramidal).
✅ AICA afecta VII-VIII; PICA afecta IX-X.
✅ Horner + disfagia + ataxia ipsilateral = tríada de Wallenberg.
✅ El vértigo en ACV de tronco suele ser incapacitante y con nistagmo central.

Referencias
• AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke.
• European Stroke Organisation (ESO) Guidelines.
• Harrison's Principles of Internal Medicine.
• Tintinalli Emergency Medicine.
• UpToDate: Posterior circulation cerebrovascular syndromes.`,
  },
  {
    id: "dr-q-18",
    examArea: "Neurología / Neurointensivismo / Hemorragia",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "hic", "doac", "apixaban", "reversion"],
    statement:
      "Mujer de 75 años con FA y TVP previa en apixabán 5 mg c/12 h (última dosis hace 3 h). Hemiplejía derecha y desviación de mirada a la izquierda súbitas. TAC: HIC putaminal izquierda 40 cc, volcado intraventricular, spot sign. PT/PTT discretamente prolongados, INR 1.2. ¿Agente hemostático de reversión específico prioritario para este inhibidor directo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Idarucizumab 5 g IV + descenso tensional a PAS <140 mmHg.",
      },
      {
        id: "B",
        label: "B",
        text: "Andexanet alfa o, en su defecto, complejo protrombínico de 4 factores (CCP4) + labetalol IV.",
      },
      {
        id: "C",
        label: "C",
        text: "Vitamina K 10 mg IV y 4 unidades de plasma fresco congelado.",
      },
      { id: "D", label: "D", text: "Sulfato de protamina en bolo urgente e hiperventilación profiláctica." },
    ],
    correctOptionId: "B",
    explanation:
      "HIC en paciente con apixabán (inhibidor directo del factor Xa): andexanet alfa es antídoto específico de primera línea; si no disponible, CCP4. Control PA objetivo PAS 140 mmHg. Idarucizumab solo para dabigatrán; vitamina K/PFC para warfarina; protamina para heparina.",
    keyPoints: [
      "Cuando veas: HIC en paciente anticoagulado con apixabán/rivaroxabán (inhibidor del factor Xa).",
      "Debes pensar en: andexanet alfa o CCP4 + control de PA (PAS ~140 mmHg).",
      "Idarucizumab solo para dabigatrán (anti-IIa); protamina para heparina; vitamina K para warfarina.",
      "PT/INR no reflejan bien la anticoagulación por DOAC.",
      "Tema: Hemorragia intracraneal — reversión de anticoagulación.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurointensivismo porque evalúa la reversión específica de anticoagulantes en HIC: cada fármaco tiene su antídoto y confundirlos es un error grave de examen.

La clave no es usar el antídoto de otro anticoagulante.
La clave es:
Identificar el DOAC específico (apixabán = anti-Xa) y reversar con andexanet alfa o CCP4.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 75 años con FA y TVP previa en apixabán 5 mg c/12 h.
• Última dosis hace 3 horas.
• Hemiplejía derecha y desviación de mirada súbitas.
• TAC: HIC putaminal izquierda 40 cc, volcado intraventricular, spot sign.
• PT/PTT discretamente prolongados, INR 1.2 (no refleja bien DOAC).

Recordemos los antídotos por anticoagulante:
• Apixabán/rivaroxabán (anti-Xa) → andexanet alfa (1.ª línea) o CCP4.
• Dabigatrán (anti-IIa) → idarucizumab.
• Warfarina → vitamina K + plasma fresco/concentrado de complejo protrombínico.
• Heparina → protamina sulfato.

Por lo tanto:
No se usa idarucizumab (es para dabigatrán).
No se usa vitamina K (es para warfarina).
Se requiere reversión específica del inhibidor del factor Xa.

¿Por qué la opción B es la respuesta correcta?
Andexanet alfa (antídoto específico de apixabán/rivaroxabán).
Si no disponible: complejo protrombínico de 4 factores (CCP4).
Simultáneamente: control agresivo de PA con labetalol IV (objetivo PAS ~140 mmHg).

¿Por qué fallan las otras opciones?
Opción A (idarucizumab): antídoto específico solo para dabigatrán (anti-IIa), no para apixabán.
Opción C (vitamina K + PFC): indicado para warfarina, no para DOAC.
Opción D (protamina): revierte heparina, no apixabán.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Anticoagulado con HIC = vitamina K" o "DOAC = idarucizumab para todos".
Pero el examen exige distinguir:
Anti-Xa vs anti-IIa vs warfarina vs heparina.
Aquí el dato decisivo es:
Apixabán (última dosis hace 3 h) con HIC expansiva.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar HIC en TAC.
2. Identificar el anticoagulante específico del paciente.
3. Administrar antídoto correspondiente + control de PA.
4. Evaluación neuroquirúrgica urgente si indicada.

Perlas de examen
✅ Apixabán/rivaroxabán = anti-Xa → andexanet o CCP4.
✅ Dabigatrán = anti-IIa → idarucizumab.
✅ PT/INR no reflejan bien anticoagulación por DOAC.
✅ Control de PA (PAS <140 mmHg) es simultáneo a la reversión.
✅ Spot sign sugiere expansión hematómica activa.

Referencias
• AHA/ASA 2022 Guidelines for the Management of Spontaneous ICH.
• Neurocritical Care Society Antithrombotic Reversal Guidelines.
• Tintinalli Emergency Medicine.
• UpToDate: Management of warfarin-associated intracerebral hemorrhage and reversal of DOACs.`,
  },
  {
    id: "dr-q-19",
    examArea: "Neurología / Oncología / Urgencias",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "compresion_medular", "oncologia"],
    statement:
      "Hombre de 65 años con cáncer de próstata metastásico. Debilidad progresiva en piernas e imposibilidad para orinar en 24 h. Fuerza EESS normal; paraplejía 0/5 en EEII. ROT arrefléxicos bilaterales, tono flácido, plantar neutra. Pérdida sensitiva total desde ombligo hacia abajo. Vejiga distendida (retención urinaria). ¿Segmento medular afectado y neuroimagen inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nivel T4 (pezones); compresión cauda equina; RM lumbosacra urgente.",
      },
      {
        id: "B",
        label: "B",
        text: "Nivel T10 (ombligo); lesión compresiva/intrínseca médula torácica baja; RM columna torácica urgente.",
      },
      {
        id: "C",
        label: "C",
        text: "Nivel L1 (ingle); compresión pontina; RM cerebro y tallo cerebral.",
      },
      {
        id: "D",
        label: "D",
        text: "Nivel T12; infarto arteria de Adamkiewicz; angiografía medular inmediata.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Síndrome medular completo agudo con choque espinal (arreflexia, flacidez). Ombligo = dermatoma T10. Cáncer prostático osteofílico: compresión medular maligna hasta demostrar lo contrario → RM torácica urgente con contraste.",
    keyPoints: [
      "Cuando veas: cáncer metastásico + paraplejía aguda + nivel sensitivo al ombligo + retención urinaria.",
      "Debes pensar en: compresión medular maligna T10 → RM torácica urgente con contraste.",
      "Niveles: pezones T4, ombligo T10, pliegue inguinal L1.",
      "Choque espinal agudo: arreflexia y flacidez iniciales (no asumir lesión permanente sin RM).",
      "Tema: Oncología — compresión medular maligna.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología y oncología porque evalúa la compresión medular maligna, una emergencia oncológica donde el retraso en RM causa paraplejía permanente.

La clave no es confundir con cauda equina ni demorar la neuroimagen.
La clave es:
Correlacionar el nivel sensitivo (ombligo = T10) con RM torácica urgente en paciente oncológico.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 65 años con cáncer de próstata metastásico (osteofílico).
• Debilidad progresiva en piernas e imposibilidad para orinar (24 h).
• Paraplejía 0/5 en EEII con arreflexia y tono flácido (choque espinal agudo).
• Pérdida sensitiva total desde ombligo hacia abajo.
• Vejiga distendida (retención urinaria).
• Fuerza EESS normal.

Recordemos los niveles dermatómicos:
• Pezones = T4.
• Ombligo = T10.
• Pliegue inguinal = L1.
• Cáncer prostático metastásico → metástasis óseas vertebrales torácicas frecuentes.

Por lo tanto:
Nivel sensitivo al ombligo = lesión medular T10.
No es cauda equina (sacral, arreflexia tardía).
Es compresión medular maligna hasta demostrar lo contrario.

¿Por qué la opción B es la respuesta correcta?
Nivel T10 (ombligo).
Lesión compresiva/intrínseca de médula torácica baja.
RM de columna torácica urgente con contraste.
Define si cirugía descompresiva o radioterapia urgente; iniciar dexametasona empírica.

¿Por qué fallan las otras opciones?
Opción A (T4 + RM lumbosacra): nivel sensitivo más bajo (T10); cauda equina no explica nivel umbilical con choque espinal medular.
Opción C (L1 + RM cerebro): nivel y localización de imagen incorrectos.
Opción D (T12 + angiografía): angiografía no es estudio de primera línea; la compresión epidural se confirma con RM.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Paraplejía + cáncer = cauda equina" o "arreflexia = lesión irreversible, no operar".
Pero el examen exige:
Nivel sensitivo preciso + RM urgente antes de que sea irreversible.
Aquí el dato decisivo es:
Ombligo como nivel sensitivo en cáncer de próstata.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar compresión medular en cáncer + déficit medular agudo.
2. Determinar nivel sensitivo (ombligo = T10).
3. RM torácica urgente con contraste.
4. Dexametasona empírica + derivación urinaria + tratamiento definitivo.

Perlas de examen
✅ Niveles: pezones T4, ombligo T10, pliegue inguinal L1.
✅ Cáncer + déficit medular agudo = metástasis epidural hasta demostrar lo contrario.
✅ RM define cirugía vs radioterapia; retraso = paraplejía permanente.
✅ Choque espinal inicial (flacidez) no significa lesión irreversible.
✅ Cáncer de próstata metastatiza frecuentemente a columna torácica.

Referencias
• AAN Guidelines — Management of Metastatic Spinal Cord Compression.
• NCCN Guidelines — Central Nervous System Cancers.
• Harrison's Principles of Internal Medicine.
• UpToDate: Evaluation and management of cancer of unknown primary site with spinal cord compression.`,
  },
  {
    id: "dr-q-20",
    examArea: "Neurología / Neurointensivismo / Neuromuscular",
    topic: "Neurología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "neuro", "guillain_barre", "sgb", "disautonomia"],
    statement:
      "Hombre de 30 años. Debilidad ascendente en 5 días tras diarrea por Campylobacter hace 3 semanas. Inestabilidad hemodinámica autónoma severa: taquicardia 150 y PA 210/110 que cae a FC 40 y PA 70/40. Paraplejía flácida 0/5, debilidad proximal EESS 2/5, arreflexia universal. NIF -30 al límite. LCR: proteínas 125 mg/dL, 2 leucocitos/mm³ (disociación albúmino-citológica). Asistolia transitoria en monitor. ¿Mecanismo de la disautonomía letal y terapia inmunomoduladora estándar?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Extensión bacteriana al centro vasomotor bulbar; esteroides intratecales y ceftriaxona.",
      },
      {
        id: "B",
        label: "B",
        text: "Desmielinización autoinmune de ganglios autonómicos periféricos; IGIV o plasmaféresis en primeros días.",
      },
      {
        id: "C",
        label: "C",
        text: "Miocarditis viral fulminante; marcapasos definitivo, sin IGIV por sobrecarga volumétrica.",
      },
      {
        id: "D",
        label: "D",
        text: "Muerte neuronal medular por citocinas; metilprednisolona en pulsos imperativa.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "SGB clásico (AIDP) con disociación albúmino-citológica. Disautonomía periférica (ataque a nervios autonómicos) explica oscilaciones HTA/taquicardia ↔ hipotensión/bradicardia/asistolia. Tratamiento: IGIV o PLEX en primeras 2 semanas; esteroides no eficaces en SGB clásico.",
    keyPoints: [
      "Cuando veas: debilidad ascendente + arreflexia + disociación albúmino-citológica + antecedente de Campylobacter.",
      "Debes pensar en: Guillain-Barré (AIDP) → IGIV o plasmaféresis en primeras 2 semanas.",
      "Disautonomía severa (oscilaciones PA/FC, asistolia) = causa principal de muerte no respiratoria en SGB.",
      "Corticosteroides no benefician SGB clásico.",
      "Tema: Neuropatía — síndrome de Guillain-Barré.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología porque evalúa el síndrome de Guillain-Barré con disautonomía, donde la inestabilidad hemodinámica es por daño autonómico periférico y el tratamiento es inmunomodulador, no esteroides.

La clave no es asumir miocarditis ni tratar con corticosteroides.
La clave es:
Reconocer SGB clásico con disautonomía letal y tratar con IGIV o plasmaféresis precoz.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 30 años con debilidad ascendente en 5 días.
• Antecedente de diarrea por Campylobacter hace 3 semanas.
• Paraplejía flácida 0/5, debilidad proximal EESS 2/5, arreflexia universal.
• Disautonomía severa: taquicardia 150 y PA 210/110 ↔ FC 40 y PA 70/40.
• Asistolia transitoria en monitor.
• LCR: proteínas 125 mg/dL, 2 leucocitos/mm³ (disociación albúmino-citológica).

Recordemos el SGB (AIDP):
• Polineuropatía desmielinizante inflamatoria aguda post-infecciosa.
• Disociación albúmino-citológica: proteínas elevadas con celularidad normal.
• Disautonomía: daño de ganglios autonómicos periféricos → barorreflejos destruidos.
• Tratamiento: IGIV o plasmaféresis en primeras 2 semanas (equivalentes).
• Esteroides: no son eficaces en SGB clásico.

Por lo tanto:
No es extensión bacteriana al bulbo.
No es miocarditis viral primaria.
Es SGB con compromiso autonómico letal.

¿Por qué la opción B es la respuesta correcta?
Mecanismo: desmielinización autoinmune de ganglios autonómicos periféricos.
Terapia: IGIV o plasmaféresis en los primeros días/semanas.
La disautonomía explica las oscilaciones simpáticas/parasimpáticas y la asistolia.

¿Por qué fallan las otras opciones?
Opción A (extensión bacteriana + esteroides intratecales): SGB es autoinmune periférico, no infección bulbar.
Opción C (miocarditis + marcapasos sin IGIV): el cuadro encaja con neuropatía autonómica del SGB, no miocarditis aislada.
Opción D (metilprednisolona en pulsos): ensayos demuestran que esteroides no benefician SGB clásico.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Asistolia = marcapasos" o "polineuropatía = esteroides".
Pero el examen exige reconocer:
Disociación albúmino-citológica + Campylobacter + disautonomía = SGB.
Aquí el dato decisivo es:
Oscilaciones hemodinámicas extremas con arreflexia y LCR característico.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar SGB ante debilidad ascendente + arreflexia.
2. Confirmar con LCR (disociación albúmino-citológica) y neuroconducción.
3. Monitorizar función respiratoria (CVF, NIF) y disautonomía.
4. Iniciar IGIV o PLEX en primeras 2 semanas; UCI si disautonomía severa.

Perlas de examen
✅ Disautonomía = causa principal de muerte no respiratoria en SGB.
✅ IGIV o plasmaféresis equivalentes; iniciar precoz (<2 semanas).
✅ Corticosteroides no benefician SGB clásico.
✅ Campylobacter es el antecedente infeccioso más clásico.
✅ Vigilar hiperreactividad vagal al intubar.

Referencias
• AAN Guidelines for Treatment of Guillain-Barré Syndrome.
• European Academy of Neurology Guidelines.
• Harrison's Principles of Internal Medicine.
• Tintinalli Emergency Medicine.
• UpToDate: Guillain-Barré syndrome in adults.`,
  },
  {
    id: "dr-q-21",
    examArea: "Geriatría / Medicina Interna / Farmacología",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "polifarmacia", "beers", "fa"],
    statement:
      "Mujer de 84 años con caída desde su propia altura, TCE leve e hipoglucemia severa (45 mg/dL) en domicilio. FA no valvular, DM2, osteoartritis, ERGE. Medicamentos: glibenclamida 5 mg/día, rivaroxabán 20 mg/día, aspirina 100 mg/día (prevención primaria), omeprazol 20 mg/día (5 años). TAC: hematoma subdural laminar crónico agudizado. Sangrado digestivo oculto positivo. Barthel 85, FRAIL 2 (pre-frágil), TUG 18 s. Hb 9.2 g/dL, VCM 82, TFG 45 mL/min. Aplicando Criterios de Beers AGS 2023, ¿cuál es la conducta farmacológica integral prioritaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender glibenclamida y aspirina, retirar omeprazol e iniciar warfarina sustituyendo rivaroxabán por riesgo de sangrado de DOACs.",
      },
      {
        id: "B",
        label: "B",
        text: "Suspender glibenclamida, suspender aspirina (sin indicación en prevención primaria), retirar omeprazol gradualmente y cambiar rivaroxabán por apixabán.",
      },
      {
        id: "C",
        label: "C",
        text: "Mantener glibenclamida, aspirina y rivaroxabán (doble terapia) y omeprazol para proteger contra sangrado GI.",
      },
      {
        id: "D",
        label: "D",
        text: "Cambiar glibenclamida por iSGLT2 independiente de TFG, suspender aspirina, digoxina para FA y suspender rivaroxabán.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Iatrogenia en cascada: hipoglucemia por sulfonilurea → caída → hematoma en anticoagulada/antiagregada sin indicación. Beers 2023: evitar aspirina en prevención primaria >65 años; evitar rivaroxabán crónico en FA (mayor sangrado GI vs otros DOAC); evitar glibenclamida; evitar IBP crónico >8 semanas sin indicación.",
    keyPoints: [
      "Cuando veas: anciana con caída + hipoglucemia + polifarmacia (glibenclamida, aspirina primaria, rivaroxabán, IBP crónico).",
      "Debes pensar en: cascada iatrogénica → deprescripción según Criterios de Beers 2023.",
      "Beers: aspirina NO en prevención primaria >65 años; evitar glibenclamida y rivaroxabán crónico en FA.",
      "Suspender glibenclamida, aspirina, IBP; cambiar rivaroxabán por apixabán si anticoagulación indicada.",
      "Tema: Geriatría — polifarmacia y Criterios de Beers.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de geriatría porque evalúa la polifarmacia iatrogénica con Criterios de Beers 2023: una caída con hipoglucemia revela una cascada de fármacos inapropiados que exige deprescripción selectiva.

La clave no es cambiar a warfarina ni mantener la doble terapia.
La clave es:
Identificar cada fármaco inapropiado según Beers y corregir la cascada iatrogénica.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 84 años con caída, TCE y hematoma subdural agudizado.
• Hipoglucemia severa (45 mg/dL) en domicilio → causa probable de la caída.
• FA no valvular anticoagulada con rivaroxabán + aspirina (prevención primaria).
• Glibenclamida (sulfonilurea de acción prolongada).
• Omeprazol crónico 5 años sin indicación clara.
• Sangrado digestivo oculto, Hb 9.2, TFG 45, pre-frágil (FRAIL 2).

Recordemos Beers 2023:
• Glibenclamida: evitar (hipoglucemia prolongada letal en anciano).
• Aspirina: evitar en prevención primaria >65 años (riesgo hemorrágico sin beneficio).
• Rivaroxabán: evitar en FA crónica (mayor sangrado GI vs apixabán/dabigatrán).
• IBP crónico >8 semanas sin indicación: evitar (fracturas, déficit B12, infecciones).

Por lo tanto:
La caída fue precipitada por hipoglucemia (glibenclamida).
El hematoma se agravó por anticoagulación/antiagregación inapropiada.
Requiere deprescripción múltiple, no más fármacos.

¿Por qué la opción B es la respuesta correcta?
Suspender glibenclamida (causa de hipoglucemia).
Suspender aspirina (sin indicación en prevención primaria).
Retirar omeprazol gradualmente (sin indicación crónica).
Cambiar rivaroxabán por apixabán (menor sangrado GI, anticoagulación sí indicada en FA).

¿Por qué fallan las otras opciones?
Opción A (cambiar a warfarina): warfarina no es superior a DOACs; aumenta complejidad y riesgo de caídas por INR.
Opción C (mantener todo + omeprazol "protector"): perpetúa la cascada iatrogénica; omeprazol no previene sangrado por DOAC.
Opción D (iSGLT2 con TFG 45, digoxina, suspender rivaroxabán): FA sí requiere anticoagulación; digoxina no es sustituto.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"FA = siempre anticoagular + antiagregar" o "IBP protege de sangrado".
Pero el examen exige aplicar:
Beers 2023 fármaco por fármaco en contexto clínico.
Aquí la cascada es:
Hipoglucemia → caída → sangrado en paciente sobre-anticoagulada/antiagregada.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar el evento desencadenante (hipoglucemia por glibenclamida).
2. Revisar cada fármaco con Beers/STOPP.
3. Deprescribir lo inapropiado (glibenclamida, aspirina primaria, IBP).
4. Optimizar lo que sí está indicado (apixabán en lugar de rivaroxabán).

Perlas de examen
✅ Beers 2023: aspirina NO en prevención primaria >65 años.
✅ Rivaroxabán → evitar en FA crónica; preferir apixabán si sangrado/fragilidad.
✅ Glibenclamida: hipoglucemia prolongada letal en anciano con TFG reducida.
✅ IBP crónico sin indicación: deprescribir gradualmente.
✅ La caída en anciano siempre obliga a revisar polifarmacia.

Referencias
• AGS Beers Criteria 2023.
• STOPP/START Criteria v3.
• AHA/ACC Guidelines on Antithrombotic Therapy in AF.
• UpToDate: Drug prescribing for older adults.`,
  },
  {
    id: "dr-q-22",
    examArea: "Geriatría / Neurología / Urgencias",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "delirium", "cuerpos_lewy", "dcl"],
    statement:
      "Hombre de 78 años con demencia de 2 años (fluctuaciones cognitivas, alucinaciones visuales estructuradas, parkinsonismo rígido-acinético sin temblor). Levodopa/carbidopa y donepezilo. Agitación, agresividad y fluctuación extrema de conciencia en 48 h. Temp 37.8 °C, SpO2 93%. Rigidez en rueda dentada, globo vesical palpable. Leucocitos 13,000, PCR 45, creatinina 1.6 (basal 0.9). EGO: piuria masiva, nitritos (+). Delirium hiperactivo sobre DCL. ¿Conducta antipsicótica y de soporte INICIAL obligatoria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Haloperidol 5 mg IM inmediato para control rápido de agitación severa.",
      },
      {
        id: "B",
        label: "B",
        text: "Risperidona 2 mg oral y aumentar levodopa/carbidopa para mejorar parkinsonismo.",
      },
      {
        id: "C",
        label: "C",
        text: "Evitar antipsicóticos típicos/atípicos con alto bloqueo D2; medidas no farmacológicas, tratar infección, drenar globo vesical y, si ineludible, quetiapina a dosis ultrabajas.",
      },
      {
        id: "D",
        label: "D",
        text: "Midazolam IV para sedación profunda; benzodiacepinas responden bien en DCL.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "DCL: sensibilidad neuroléptica severa (~50%). Haloperidol/risperidona contraindicados (rigidez, coma, muerte). Delirium por ITU + retención urinaria: tratar causa. Si farmacológico inevitable: quetiapina o clozapina (rápida disociación D2). Benzodiacepinas empeoran delirium en ancianos.",
    keyPoints: [
      "Cuando veas: demencia por cuerpos de Lewy (DCL) + delirium agudo + ITU/retención urinaria.",
      "Debes pensar en: tratar causa primero; evitar haloperidol/risperidona (sensibilidad neuroléptica).",
      "DCL: alucinaciones visuales + parkinsonismo + fluctuaciones cognitivas.",
      "Si farmacológico inevitable: quetiapina en dosis ultrabajas (rápida disociación D2).",
      "Tema: Geriatría — delirium sobre demencia por cuerpos de Lewy.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de geriatría porque evalúa el delirium sobre demencia por cuerpos de Lewy, donde la sensibilidad neuroléptica severa hace que haloperidol pueda ser letal.

La clave no es sedar con antipsicóticos de alto bloqueo D2.
La clave es:
Tratar la causa reversible (ITU + retención urinaria) antes que medicar el delirium.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 78 años con DCL (fluctuaciones, alucinaciones visuales estructuradas, parkinsonismo rígido-acinético).
• Agitación y fluctuación extrema de conciencia en 48 h sobre demencia basal.
• ITU: piuria masiva, nitritos (+), leucocitos 13,000, PCR 45.
• Globo vesical palpable: retención urinaria como desencadenante adicional.
• Delirium hiperactivo = epifenómeno de espina irritativa, no psicosis nueva.

Recordemos la DCL:
• Fluctuaciones cognitivas + alucinaciones visuales + parkinsonismo.
• Deficiencia colinérgica y dopaminérgica simultánea.
• Sensibilidad neuroléptica severa (~50%): rigidez, coma, muerte con antipsicóticos típicos/atípicos potentes.
• Haloperidol y risperidona: contraindicados.

Por lo tanto:
No es empeoramiento de la demencia que requiere neurolépticos.
Es delirium por infección y retención urinaria tratable.

¿Por qué la opción C es la respuesta correcta?
Evitar antipsicóticos típicos/atípicos con alto bloqueo D2.
Medidas no farmacológicas (entorno, reorientación).
Tratar infección urinaria con antibióticos.
Drenar globo vesical.
Si farmacológico ineludible: quetiapina a dosis ultrabajas (rápida disociación D2).

¿Por qué fallan las otras opciones?
Opción A (haloperidol 5 mg IM): típico de alto potencia D2 → síndrome neuroléptico-like letal en DCL.
Opción B (risperidona + aumentar levodopa): risperidona empeora parkinsonismo; no trata la causa.
Opción D (midazolam IV): benzodiacepinas contraindicadas en delirium geriátrico (Beers); empeoran confusión.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Agitación = haloperidol" en todo anciano confuso.
Pero el examen exige reconocer:
DCL + delirium agudo con causa identificable = tratar causa primero.
Aquí los datos decisivos son:
ITU + globo vesical + DCL conocida.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar DCL (no confundir con Alzheimer).
2. Buscar causa reversible de delirium (infección, retención, dolor, fármacos).
3. Tratar causa antes de sedar.
4. Si antipsicótico inevitable en DCL: quetiapina ultrabaja, nunca haloperidol.

Perlas de examen
✅ DCL: alucinaciones visuales + parkinsonismo + fluctuaciones.
✅ Haloperidol en DCL = contraindicado (sensibilidad neuroléptica).
✅ Delirium: corregir causa (infección, retención) antes que sedar.
✅ Benzodiacepinas empeoran delirium en ancianos (Beers).
✅ El delirium hiperactivo no es psicosis primaria en anciano con infección.

Referencias
• AGS Clinical Practice Guideline on Delirium.
• NICE Guidelines — Dementia with Lewy Bodies.
• Beers Criteria 2023.
• UpToDate: Delirium and acute confusional states in adults.`,
  },
  {
    id: "dr-q-23",
    examArea: "Geriatría / Cardiología / Valoración Preoperatoria",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "fragilidad", "vgi", "tavi"],
    statement:
      "Hombre de 88 años, valoración preoperatoria para reemplazo valvular aórtico (TAVI vs quirúrgico) por estenosis aórtica severa sintomática (síncope). NYHA III, EPOC, artrosis severa. Barthel 35/100, Lawton 1/8, MMSE 12/30, pérdida 8 kg/6 meses, handgrip 14 kg, pantorrilla <31 cm, Fried 5/5, SPPB 2/12. Albúmina 2.8 g/dL. ¿Recomendación terapéutica más ética y basada en evidencia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reemplazo valvular quirúrgico abierto para mejorar gasto cardíaco y permitir rehabilitación postoperatoria.",
      },
      {
        id: "B",
        label: "B",
        text: "Frágil terminal (demencia severa, dependencia ABVD, SPPB <4): intervenciones invasivas fútiles; manejo conservador y cuidados paliativos.",
      },
      {
        id: "C",
        label: "C",
        text: "TAVI urgente; procedimiento mínimamente invasivo revertirá automáticamente fragilidad y dependencia funcional.",
      },
      {
        id: "D",
        label: "D",
        text: "Testosterona y hormona de crecimiento para revertir caquexia; posponer cirugía hasta SPPB >8.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Fragilidad extrema (Fried 5/5, SPPB 2), dependencia severa (Barthel 35) y demencia avanzada (MMSE 12): reparar válvula no revierte colapso multidominio. TAVI y cirugía contraindicados por futilidad, alta mortalidad periprocedimiento y sin beneficio funcional.",
    keyPoints: [
      "Cuando veas: estenosis aórtica severa + Fried 5/5 + Barthel <40 + MMSE <15 + SPPB <4.",
      "Debes pensar en: fragilidad terminal → manejo conservador/paliativo, no TAVI ni cirugía.",
      "La edad cronológica no contraindica cirugía; la fragilidad severa sí.",
      "TAVI no revierte sarcopenia, demencia ni dependencia funcional.",
      "Tema: Geriatría — fragilidad y decisiones de fin de vida.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de geriatría porque evalúa la fragilidad extrema en la decisión valvular: reparar la válvula no revierte el colapso multidominio y la intervención invasiva es fútil.

La clave no es la edad ni la gravedad de la estenosis aórtica aislada.
La clave es:
Integrar fragilidad, dependencia y demencia para determinar futilidad terapéutica.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 88 años con estenosis aórtica severa sintomática (síncope, NYHA III).
• Fragilidad terminal: Fried 5/5, SPPB 2/12.
• Dependencia severa: Barthel 35/100, Lawton 1/8.
• Demencia avanzada: MMSE 12/30.
• Caquexia: pérdida 8 kg/6 meses, albúmina 2.8, handgrip 14 kg, pantorrilla <31 cm.

Recordemos la evaluación geriátrica preoperatoria:
• Fragilidad = homeostenosis: reserva fisiológica agotada.
• SPPB <4 + demencia + dependencia ABVD = alta mortalidad periprocedimiento.
• TAVI no revierte sarcopenia, demencia ni dependencia.
• La edad cronológica no contraindica cirugía; la fragilidad severa sí.

Por lo tanto:
Reparar la válvula no restaurará función ni calidad de vida.
La intervención invasiva es fútil y potencialmente dañina.

¿Por qué la opción B es la respuesta correcta?
Frágil terminal (demencia severa, dependencia ABVD, SPPB <4).
Intervenciones invasivas fútiles.
Manejo conservador de síntomas y cuidados paliativos.
Decisión ética y basada en evidencia.

¿Por qué fallan las otras opciones?
Opción A (cirugía abierta): mortalidad y morbilidad inaceptables sin recuperación funcional esperable.
Opción C (TAVI urgente): procedimiento mínimamente invasivo no revierte fragilidad ni dependencia.
Opción D (testosterona/hormona de crecimiento): sin evidencia de revertir caquexia terminal; retrasa cuidados paliativos.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Estenosis aórtica severa sintomática = siempre operar/TAVI".
Pero el examen exige integrar:
Escalas de fragilidad, funcionalidad y cognición.
Aquí los datos decisivos son:
Fried 5/5 + Barthel 35 + MMSE 12 + SPPB 2.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar estenosis aórtica (síntomas, gradiente).
2. Valoración geriátrica integral (Barthel, MMSE, SPPB, Fried).
3. Si fragilidad terminal → paliativos, no invasión.
4. Tratar al paciente, no solo al ecocardiograma.

Perlas de examen
✅ Edad cronológica no contraindica cirugía; fragilidad severa sí.
✅ SPPB <4 + demencia + dependencia = futilidad para TAVI/cirugía.
✅ TAVI no revierte sarcopenia, demencia ni dependencia.
✅ Fried 5/5 indica fragilidad extrema.
✅ La decisión debe ser compartida con familia y enfoque en calidad de vida.

Referencias
• AGS Guidelines — Surgical Treatment in Older Adults.
• ACC/AHA Guidelines for Valvular Heart Disease in Older Adults.
• ESC/EACTS Guidelines on Valvular Heart Disease.
• UpToDate: Management of severe aortic stenosis in older adults.`,
  },
  {
    id: "dr-q-24",
    examArea: "Geriatría / Medicina Interna / Urgencias",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "polifarmacia", "stopp", "hipotension_ortostatica"],
    statement:
      "Hombre de 76 años con síncope postprandial y mareo ortostático matutino. HTA, insomnio, neuropatía diabética, HPB. Amlodipino 10 mg, tamsulosina 0.4 mg AM, amitriptilina 25 mg noche, enalapril 20 mg. Decúbito: PA 145/80, FC 70. Ortostatismo: PA 105/60 (↓40 sistólica), FC 72 (sin taquicardia compensatoria). Mucosas secas, retención fecal. ¿Intervención farmacológica inicial según STOPP/Beers?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fludrocortisona y midodrina, manteniendo antihipertensivos de base.",
      },
      {
        id: "B",
        label: "B",
        text: "Suspender de golpe tamsulosina, amitriptilina, amlodipino y enalapril; reposo estricto 48 h.",
      },
      {
        id: "C",
        label: "C",
        text: "Deprescripción STOPP: suspender amitriptilina, ajustar/suspender tamsulosina, reducir amlodipino e hidratación/medias compresivas.",
      },
      {
        id: "D",
        label: "D",
        text: "Marcapasos bicameral urgente por bloqueo AV inminente independiente de fármacos.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Hipotensión ortostática iatrogénica: tamsulosina (alfa-bloqueador), amlodipino y amitriptilina (anticolinérgica + anti-alfa-1). STOPP/Beers: evitar amitriptilina >65 años. Deprescripción escalonada superior a cascada con fludrocortisona/midodrina.",
    keyPoints: [
      "Cuando veas: anciano con síncope ortostático + amitriptilina + tamsulosina + amlodipino + IECA.",
      "Debes pensar en: hipotensión ortostática iatrogénica → deprescripción STOPP/Beers escalonada.",
      "Caída sistólica ≥20 mmHg (o ≥40 en este caso) en ortostatismo = hipotensión ortostática.",
      "No prescribir fludrocortisona/midodrina sin retirar los fármacos culpables.",
      "Tema: Geriatría — hipotensión ortostática y polifarmacia.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de geriatría porque evalúa la hipotensión ortostática iatrogénica: antes de prescribir fludrocortisona o marcapasos, hay que deprescribir los fármacos culpables según STOPP/Beers.

La clave no es añadir vasopresores ni suspender todo de golpe.
La clave es:
Identificar la polifarmacia causal y deprescribir de forma escalonada.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 76 años con síncope postprandial y mareo ortostático matutino.
• Decúbito: PA 145/80, FC 70.
• Ortostatismo: PA 105/60 (↓40 mmHg sistólica), FC 72 (sin taquicardia compensatoria).
• Polifarmacia: amlodipino, enalapril, tamsulosina (alfa-bloqueador), amitriptilina (anticolinérgica).
• Mucosas secas, retención fecal: toxidrome anticolinérgico parcial.

Recordemos STOPP/Beers:
• Amitriptilina: evitar en >65 años (alta carga anticolinérgica + bloqueo alfa-1).
• Tamsulosina: alfa-bloqueador → vasodilatación, empeora ortostatismo.
• Amlodipino + enalapril: hipotensores que contribuyen.
• Barorreflejos envejecidos: sin taquicardia compensatoria.

Por lo tanto:
Hipotensión ortostática iatrogénica, no bloqueo AV.
No se trata con fludrocortisona sin corregir causa.

¿Por qué la opción C es la respuesta correcta?
Deprescripción STOPP escalonada:
Suspender amitriptilina (mayor culpable anticolinérgico).
Ajustar/suspender tamsulosina (alfa-bloqueador).
Reducir amlodipino (no suspender todo de golpe).
Hidratación y medias compresivas como soporte.

¿Por qué fallan las otras opciones?
Opción A (fludrocortisona + midodrina manteniendo antihipertensivos): cascada de prescripción sin corregir causa.
Opción B (suspender todo de golpe): riesgo de crisis hipertensiva por rebote.
Opción D (marcapasos): no hay bloqueo AV; FC estable en ortostatismo.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Ortostatismo = fludrocortisona" o "síncope = marcapasos".
Pero el examen exige:
Revisar polifarmacia antes de añadir fármacos.
Aquí los culpables son:
Amitriptilina + tamsulosina + amlodipino.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar hipotensión ortostática (medición en decúbito y ortostatismo).
2. Revisar fármacos con STOPP/Beers.
3. Deprescribir escalonadamente (no todo de golpe).
4. Medidas no farmacológicas: hidratación, medias, levantarse lentamente.

Perlas de examen
✅ Hipotensión ortostática en anciano = iatrogenia hasta probar lo contrario.
✅ Amitriptilina: alta carga anticolinérgica; evitar en >65 años.
✅ No cascada de prescripción (fludrocortisona) sin retirar culpables.
✅ Sin taquicardia compensatoria = barorreflejos envejecidos.
✅ Síncope postprandial: redistribución esplácnica + fármacos hipotensores.

Referencias
• STOPP/START Criteria v3.
• AGS Beers Criteria 2023.
• AGS Clinical Practice Guideline on Preventing Falls.
• UpToDate: Treatment of orthostatic and postprandial hypotension.`,
  },
  {
    id: "dr-q-25",
    examArea: "Geriatría / Medicina Interna / Rehabilitación",
    topic: "Geriatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "sarcopenia", "had", "hospitalizacion"],
    statement:
      "Hombre de 82 años al alta tras 14 días por NAC resuelta. Previo al ingreso: Barthel 95, caminaba 1 km/día. Hospitalización con reposo en cama, sonda vesical preventiva (retirada), ingesta pobre. Actual: Barthel 45, no se levanta solo, claudicación, atrofia cuádriceps, SARC-F >4. Fuerza 3/5 simétrica, reflejos conservados. ¿Plan de alta de máxima prioridad para recuperar trayectoria funcional?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reposo relativo en casa; deambulación limitada al baño con caminador.",
      },
      {
        id: "B",
        label: "B",
        text: "Rehabilitación multicomponente (fuerza/resistencia), proteína 1.2–1.5 g/kg/día y corrección de déficit de vitamina D.",
      },
      {
        id: "C",
        label: "C",
        text: "Megestrol acetato y esteroides anabólicos para ganancia ponderal y regeneración muscular.",
      },
      {
        id: "D",
        label: "D",
        text: "Institucionalización definitiva; deterioro Barthel 50 puntos es irreversible a los 82 años.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Discapacidad asociada a hospitalización (HAD) y sarcopenia aguda: ~10 días de cama ≈ envejecimiento muscular acelerado. Tratamiento gold standard (EWGSOP2): ejercicio de fuerza progresivo + proteína 1.2–1.5 g/kg/día + vitamina D.",
    keyPoints: [
      "Cuando veas: anciano post-hospitalización con caída marcada de Barthel + atrofia muscular + SARC-F elevado.",
      "Debes pensar en: discapacidad asociada a hospitalización (HAD) + sarcopenia → rehabilitación + proteína.",
      "~10 días de cama en hospital ≈ sarcopenia aguda severa.",
      "Gold standard EWGSOP2: ejercicio de fuerza + proteína 1.2-1.5 g/kg/día + vitamina D.",
      "Tema: Geriatría — sarcopenia y discapacidad post-hospitalización.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de geriatría porque evalúa la discapacidad asociada a hospitalización (HAD) y la sarcopenia aguda: la cama es veneno iatrogénico y el tratamiento es ejercicio de fuerza más proteína.

La clave no es reposo ni institucionalización.
La clave es:
Reconocer que la HAD es potencialmente reversible con rehabilitación agresiva precoz.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 82 años al alta tras 14 días por NAC resuelta.
• Previo: Barthel 95, caminaba 1 km/día.
• Actual: Barthel 45, no se levanta solo, claudicación.
• Reposo en cama durante hospitalización + ingesta pobre.
• Atrofia cuádriceps, SARC-F >4, fuerza 3/5 simétrica, reflejos conservados.

Recordemos HAD y sarcopenia:
• ~10 días de cama ≈ envejecimiento muscular acelerado equivalente a años de sarcopenia.
• EWGSOP2 gold standard: ejercicio de resistencia progresivo + proteína 1.2-1.5 g/kg/día.
• Corrección de déficit de vitamina D si presente.
• Megestrol (Beers: evitar): ganancia de grasa, trombosis, sin beneficio muscular.

Por lo tanto:
No es neuropatía periférica (reflejos conservados, simétrico).
Es sarcopenia aguda post-hospitalización reversible.

¿Por qué la opción B es la respuesta correcta?
Rehabilitación multicomponente (fuerza y resistencia).
Proteína 1.2-1.5 g/kg/día.
Corrección de déficit de vitamina D.
Plan de alta de máxima prioridad para recuperar trayectoria funcional.

¿Por qué fallan las otras opciones?
Opción A (reposo relativo limitado al baño): perpetúa la miopatía por inmovilidad.
Opción C (megestrol/esteroides anabólicos): no son tratamiento de sarcopenia; megestrol aumenta mortalidad.
Opción D (institucionalización definitiva): el deterioro de Barthel no es irreversible a los 82 con rehabilitación.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Anciano de 82 con Barthel 45 = irreversible" o "alta = reposo en casa".
Pero el examen exige conocer:
La HAD como síndrome iatrogénico tratable.
Aquí el dato decisivo es:
Caída de Barthel de 95 a 45 tras hospitalización con reposo en cama.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar HAD al alta hospitalaria.
2. Evaluar sarcopenia (SARC-F, fuerza, marcha).
3. Prescribir rehabilitación de fuerza + nutrición proteica.
4. Evitar reposo prolongado y fármacos inapropiados (megestrol).

Perlas de examen
✅ 10 días de cama en hospital ≈ sarcopenia aguda severa.
✅ Sarcopenia: fuerza + proteína; no reposo ni megestrol.
✅ HAD es potencialmente reversible con rehabilitación agresiva.
✅ Proteína 1.2-1.5 g/kg/día en anciano con sarcopenia.
✅ La prevención de HAD incluye movilización precoz en hospital.

Referencias
• EWGSOP2 — European Working Group on Sarcopenia in Older People.
• AGS Guidelines on Mobility and Falls Prevention.
• Hospital Medicine Guidelines on Functional Decline.
• UpToDate: Failure to thrive and weight loss in older adults.`,
  },
  {
    id: "dr-q-26",
    examArea: "Geriatría / Medicina Interna / Farmacología",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "anticolinergico", "delirium", "incontinencia"],
    statement:
      "Mujer de 80 años con confusión aguda, xerostomía, constipación 5 días e intolerancia oral. Incontinencia de urgencia diagnosticada hace 2 semanas; inició oxibutinina 5 mg c/8 h. MCI previo. CAM positivo (delirium). Globo vesical masivo, fecaloma impactado. ¿Fisiopatología del evento adverso y alternativa con mejor perfil de seguridad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Toxicidad colinérgica excesiva; suspender e iniciar betanecol procinético.",
      },
      {
        id: "B",
        label: "B",
        text: "Antagonista muscarínico anticolinérgico que cruza BHE (delirium) y bloquea parasimpático periférico (retención urinaria/fecaloma); suspender, derivar orina y a futuro considerar mirabegrón.",
      },
      {
        id: "C",
        label: "C",
        text: "IAM silente por vasoconstricción de oxibutinina; ECG y trombólisis.",
      },
      {
        id: "D",
        label: "D",
        text: "Desenmascara Alzheimer; donepezilo alto + mantener oxibutinina.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Oxibutinina: antimuscarínico lipofílico de 1.ª generación. Cruza BHE → delirium en cerebro con baja reserva colinérgica. Periféricamente: retención urinaria y estreñimiento. Beers: evitar fuertemente. Alternativa en anciano: mirabegrón (agonista beta-3, sin actividad anticolinérgica).",
    keyPoints: [
      "Cuando veas: anciana con MCI + oxibutinina reciente + delirium + globo vesical + estreñimiento.",
      "Debes pensar en: toxidrome anticolinérgico → suspender oxibutinina; a futuro mirabegrón.",
      "Oxibutinina cruza BHE (delirium central) y bloquea M3 periférico (retención urinaria).",
      "Paradoja: trató incontinencia y empeoró con retención urinaria.",
      "Tema: Geriatría — toxidrome anticolinérgico y vejiga hiperactiva.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de geriatría porque evalúa el toxidrome anticolinérgico por oxibutinina: un fármaco lipofílico de primera generación cruza la BHE y causa delirium central más retención urinaria periférica.

La clave no es confundir con toxicidad colinérgica ni mantener el anticolinérgico.
La clave es:
Reconocer la paradoja: trató incontinencia y empeoró con retención y delirium.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 80 años con confusión aguda, xerostomía, constipación e intolerancia oral.
• Inició oxibutinina hace 2 semanas por incontinencia de urgencia.
• MCI previo: cerebro con baja reserva colinérgica.
• CAM positivo (delirium) + globo vesical masivo + fecaloma impactado.
• Evento adverso farmacológico predecible, no desenmascaramiento de Alzheimer.

Recordemos oxibutinina (Beers):
• Antimuscarínico lipofílico de 1.ª generación.
• Central (M1): cruza BHE → delirium en cerebro con reserva colinérgica reducida.
• Periférico (M3): retención urinaria y estreñimiento.
• Beers 2023: evitar fuertemente anticolinérgicos potentes en ancianos.
• Alternativa segura: mirabegrón (agonista beta-3 vesical, sin actividad anticolinérgica).

Por lo tanto:
No es toxicidad colinérgica excesiva (sería lo opuesto).
No es IAM silente.
Es toxidrome anticolinérgico por oxibutinina.

¿Por qué la opción B es la respuesta correcta?
Fisiopatología: antagonista muscarínico anticolinérgico que cruza BHE.
Causa delirium central y bloqueo parasimpático periférico (retención urinaria/fecaloma).
Conducta: suspender oxibutinina, derivar orina (cateterismo).
A futuro: considerar mirabegrón para vejiga hiperactiva.

¿Por qué fallan las otras opciones?
Opción A (toxicidad colinérgica + betanecol): oxibutinina bloquea colina, no la estimula; betanecol empeoraría el cuadro si hubiera obstrucción.
Opción C (IAM silente + trombólisis): no hay datos cardíacos; cuadro es anticolinérgico clásico.
Opción D (donepezilo + mantener oxibutinina): colinérgico + anticolinérgico se anulan; no resuelve retención.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Incontinencia urinaria = oxibutinina siempre" o "confusión = Alzheimer progresivo".
Pero el examen exige reconocer:
Temporalidad (2 semanas desde inicio) + toxidrome anticolinérgico completo.
Aquí el dato decisivo es:
Oxibutinina nueva + MCI + globo vesical + delirium.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar toxidrome anticolinérgico (seco, retenido, confuso).
2. Revisar fármacos con carga anticolinérgica (Beers).
3. Suspender culpable y tratar complicaciones (derivación urinaria).
4. Elegir alternativa segura (mirabegrón) si se requiere farmacoterapia.

Perlas de examen
✅ Toxidrome anticolinérgico: delirium, seco, retención urinaria, estreñimiento.
✅ Oxibutinina contraindicada en anciano con deterioro cognitivo.
✅ Mirabegrón: 1.ª línea farmacológica geriátrica para vejiga hiperactiva.
✅ La retención urinaria es paradoja del tratamiento de incontinencia.
✅ Betanecol estimula colina; no usar si hay obstrucción urinaria.

Referencias
• AGS Beers Criteria 2023.
• NICE Guidelines — Urinary Incontinence in Women.
• AGS Choosing Wisely — Anticholinergic Medications.
• UpToDate: Treatment of urinary incontinence in women.`,
  },
  {
    id: "dr-q-27",
    examArea: "Geriatría / Cuidados Paliativos / Medicina Interna",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "paliativos", "ulceras", "kennedy"],
    statement:
      "Mujer de 92 años, Alzheimer FAST 7F (postrada, disfagia severa, sin sonda por decisión anticipada). Cambios posición c/2 h, colchón alterno, cuidados óptimos. PA 85/50, perfusión periférica decaída. En 48 h: úlcera sacra en mariposa/pera, de mácula púrpura a escara necrótica estadio IV pese a prevención perfecta. Albúmina 2.1, colesterol 105. ¿Diagnóstico conceptual y meta de cuidado ética?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Úlcera por presión negligente; desbridamiento quirúrgico extenso y colgajo miocutáneo.",
      },
      {
        id: "B",
        label: "B",
        text: "Úlcera terminal de Kennedy (falla cutánea al fin de vida); manejo paliativo local (dolor, exudado, olor).",
      },
      {
        id: "C",
        label: "C",
        text: "Fascitis necrotizante; amputación e carbapenémicos IV.",
      },
      {
        id: "D",
        label: "D",
        text: "Déficit nutricional reversible; PEG urgente para hiperalimentar y cicatrizar.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Falla cutánea terminal (skin failure): úlcera de Kennedy en sacro, aparición fulminante pese a cuidado óptimo, en caquexia e hipoperfusión periférica. Marca mortalidad inminente. Manejo paliativo; desbridamiento quirúrgico o PEG en FAST 7F son fútiles/contraindicados (AGS/ESPEN).",
    keyPoints: [
      "Cuando veas: FAST 7F + úlcera sacra fulminante en mariposa/pera pese a prevención óptima.",
      "Debes pensar en: úlcera terminal de Kennedy (skin failure) → manejo paliativo, no cirugía.",
      "La piel también claudica al fin de vida (hipoperfusión periférica).",
      "Aparición en 48 h pese a cuidados correctos = no es negligencia.",
      "Tema: Geriatría — cuidados paliativos y falla cutánea terminal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de geriatría y cuidados paliativos porque evalúa la úlcera terminal de Kennedy (skin failure): una lesión sacra fulminante pese a prevención óptima marca mortalidad inminente, no negligencia.

La clave no es desbridamiento quirúrgico ni PEG para hiperalimentar.
La clave es:
Reconocer falla cutánea terminal y orientar el manejo a confort.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 92 años con Alzheimer FAST 7F (postrada, disfagia severa).
• Sin sonda por decisión anticipada.
• Cuidados de prevención óptimos: cambios c/2 h, colchón alterno.
• En 48 h: úlcera sacra en mariposa/pera, estadio IV pese a medidas correctas.
• PA 85/50, perfusión periférica decaída, albúmina 2.1, colesterol 105 (caquexia).

Recordemos la úlcera de Kennedy:
• Falla cutánea terminal (skin failure) al fin de vida.
• Aparición fulminante en sacro con forma de mariposa/pera.
• Ocurre pese a prevención perfecta → no es negligencia.
• Marca mortalidad inminente: la piel también claudica (perfusión centralizada).
• PEG en FAST 7F: contraindicada (AGS Choosing Wisely).

Por lo tanto:
No es úlcera por presión evitable con más cuidados.
No es fascitis necrotizante ni déficit nutricional reversible.
Es marcador de fin de vida.

¿Por qué la opción B es la respuesta correcta?
Úlcera terminal de Kennedy (falla cutánea al fin de vida).
Manejo paliativo local: control de dolor, exudado y olor.
Meta ética: confort, no curación ni mutilación quirúrgica.

¿Por qué fallan las otras opciones?
Opción A (negligencia + desbridamiento/colgajo): la prevención fue óptima; mutilar no ayuda.
Opción C (fascitis necrotizante + amputación): no hay fiebre, eritema extendido ni crepitación.
Opción D (PEG urgente para hiperalimentar): no revierte caquexia terminal ni cicatriza úlceras de Kennedy.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Úlcera por presión = mala práctica" o "albúmina baja = nutrir con PEG".
Pero el examen exige reconocer:
FAST 7F + úlcera fulminante pese a cuidados = Kennedy.
Aquí el dato decisivo es:
Aparición en 48 h con prevención perfecta e hipoperfusión.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar contexto (demencia terminal, decisiones anticipadas).
2. Diferenciar úlcera por presión evitable vs falla cutánea terminal.
3. Si Kennedy: paliativos (dolor, exudado, olor).
4. No intervenciones fútiles (cirugía extensa, PEG).

Perlas de examen
✅ Úlcera Kennedy: mariposa sacra fulminante pese a prevención = fin de vida.
✅ La piel también claudica (perfusión centralizada).
✅ PEG en demencia avanzada no prolonga vida ni cicatriza.
✅ FAST 7F = demencia terminal; enfoque paliativo.
✅ Caquexia terminal no se revierte con nutrición artificial.

Referencias
• AGS Choosing Wisely — Feeding Tubes in Advanced Dementia.
• NPUAP Guidelines on Skin Failure at End of Life.
• WHO Palliative Care Guidelines.
• UpToDate: Palliative care for patients with dementia.`,
  },
  {
    id: "dr-q-28",
    examArea: "Geriatría / Cardiología / Medicina Interna",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "hfpef", "stopp", "aines"],
    statement:
      "Mujer de 85 años con disnea NYHA III y edema EEII. HFpEF (FEVI 55%, disfunción diastólica II). Empagliflozina y losartán. Hace 10 días inició naproxeno 500 mg c/12 h por artrosis de cadera. PA 165/90, JVP elevada, crépitos, edema foveolar II. Creatinina 1.8 (basal 1.0), NT-proBNP 2500. ¿Modificación farmacológica causal y tratamiento descongestivo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aumentar losartán y mantener naproxeno con IBP protector.",
      },
      {
        id: "B",
        label: "B",
        text: "Suspender naproxeno, furosemida IV titulable y analgesia no nefrotóxica (acetaminofén/parches).",
      },
      {
        id: "C",
        label: "C",
        text: "Suspender empagliflozina e iniciar digoxina oral.",
      },
      {
        id: "D",
        label: "D",
        text: "Dobutamina para mejorar diástole y mantener analgésicos.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "AINE (naproxeno) en HFpEF: inhibe prostaglandinas renales → retención Na/H2O + LRA. STOPP v3: detener AINEs en falla cardíaca. Retirar naproxeno + furosemida IV. Mantener empagliflozina (piedra angular HFpEF). Digoxina inútil en FEVI preservada.",
    keyPoints: [
      "Cuando veas: HFpEF descompensada + AINE reciente (naproxeno) + edema + LRA.",
      "Debes pensar en: suspender AINE + furosemida IV; mantener empagliflozina.",
      "STOPP: AINEs contraindicados en falla cardíaca (sistólica o diastólica).",
      "AINE + ARA II = riesgo de colapso glomerular («triple whammy» con diurético).",
      "Tema: Geriatría — descompensación de HFpEF por AINE.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de geriatría y cardiología porque evalúa la descompensación de HFpEF por AINE: el naproxeno inhibe prostaglandinas renales y desencadena retención hídrica; STOPP manda suspender el AINE, no la empagliflozina.

La clave no es aumentar antihipertensivos ni suspender el iSGLT2.
La clave es:
Identificar el AINE como toxina causal y retirarlo con descongestión IV.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 85 años con HFpEF (FEVI 55%, disfunción diastólica II) en NYHA III.
• Tratamiento: empagliflozina y losartán.
• Inició naproxeno hace 10 días por artrosis de cadera.
• Descompensación aguda: JVP elevada, crépitos, edema foveolar II, PA 165/90.
• LRA: creatinina 1.8 (basal 1.0), NT-proBNP 2500.
• Corazón rígido diastólico + retención de volumen por AINE.

Recordemos STOPP y fisiopatología:
• STOPP v3: AINEs contraindicados en falla cardíaca (sistólica o diastólica).
• Naproxeno inhibe prostaglandinas renales → vasoconstricción aferente + retención Na/H2O.
• AINE + ARA II = riesgo de colapso glomerular.
• Empagliflozina: piedra angular en HFpEF (EMPEROR-Preserved); no suspender.
• Digoxina no beneficia FEVI preservada.

Por lo tanto:
El naproxeno es la causa de la descompensación.
La empagliflozina debe mantenerse.

¿Por qué la opción B es la respuesta correcta?
Suspender naproxeno (causa de retención hídrica y LRA).
Furosemida IV titulable para descongestión.
Analgesia no nefrotóxica: acetaminofén o parches tópicos.

¿Por qué fallan las otras opciones?
Opción A (aumentar losartán + mantener naproxeno + IBP): el AINE es la toxina; IBP no protege riñón.
Opción C (suspender empagliflozina + digoxina): quita el fármaco que sí ayuda en HFpEF.
Opción D (dobutamina + mantener analgésicos): inotrópico no indicado en HFpEF descompensada por volumen.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Artrosis en anciano = AINE seguro" o "descompensación = aumentar diurético oral sin retirar causa".
Pero el examen exige correlacionar:
Inicio reciente de AINE + edema + LRA en paciente con HFpEF.
Aquí el dato decisivo es:
Naproxeno iniciado hace 10 días con descompensación aguda.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar HFpEF descompensada.
2. Revisar fármacos nuevos (AINE es culpable frecuente).
3. Suspender AINE + descongestionar con diurético IV.
4. Mantener empagliflozina; analgesia alternativa no nefrotóxica.

Perlas de examen
✅ STOPP: AINEs contraindicados en falla cardíaca (sistólica o diastólica).
✅ AINE + ARA II = riesgo colapso glomerular.
✅ Empagliflozina beneficia HFpEF; no suspender.
✅ Digoxina inútil en FEVI preservada.
✅ IBP no protege de nefrotoxicidad por AINE.

Referencias
• STOPP/START Criteria v3.
• AGS Beers Criteria 2023.
• ESC/ACC HFpEF Guidelines.
• EMPEROR-Preserved Trial.
• UpToDate: Treatment of heart failure with preserved ejection fraction.`,
  },
  {
    id: "dr-q-29",
    examArea: "Geriatría / Infectología / Medicina Interna",
    topic: "Geriatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "bacteriuria", "itu", "choosing_wisely"],
    statement:
      "Mujer de 89 años con Alzheimer moderado, incontinencia crónica con pañal, HTA. Asintomática: come bien, camina, sin fiebre ni delirium. Familia solicita urocultivo por olor fuerte a amoníaco en pañal. Cultivo: E. coli >100,000 UFC/mL sensible. Parcial: esterasa leucocitaria (+), 15 leucocitos/campo. ¿Conducta correcta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "ITU atípica geriátrica; ciprofloxacino 7 días por >100,000 UFC y leucocitos.",
      },
      {
        id: "B",
        label: "B",
        text: "Bacteriuria asintomática; olor y leucocitos no justifican antibióticos (resistencia, C. difficile).",
      },
      {
        id: "C",
        label: "C",
        text: "Profilaxis con nitrofurantoína nocturna 6 meses para esterilizar vía urinaria.",
      },
      {
        id: "D",
        label: "D",
        text: "Hemocultivos e ingreso hospitalario con ceftriaxona IV por pielonefritis silente.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Bacteriuria asintomática: cultivo positivo sin síntomas genitourinarios ni sistémicos (fiebre, delirium agudo). Olor a amoníaco en pañal ≠ ITU. AGS Choosing Wisely / IDSA: no tratar BA; no previene urosepsis pero sí resistencia y colitis por C. difficile.",
    keyPoints: [
      "Cuando veas: anciana asintomática con urocultivo positivo solicitado por olor en pañal.",
      "Debes pensar en: bacteriuria asintomática → NO tratar con antibióticos.",
      "Cultivo (+) sin síntomas genitourinarios ni sistémicos = colonización, no ITU.",
      "Tratar BA aumenta resistencia y C. difficile sin prevenir urosepsis.",
      "Tema: Geriatría — bacteriuria asintomática (Choosing Wisely).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de geriatría e infectología porque evalúa la bacteriuria asintomática en anciana con pañal: cultivo positivo sin síntomas no es ITU y tratar genera iatrogenia sin beneficio.

La clave no es el recuento de UFC ni la piuria aislada.
La clave es:
Diferenciar colonización comensal de infección urinaria sintomática.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 89 años con Alzheimer moderado e incontinencia crónica con pañal.
• Completamente asintomática: come bien, camina, sin fiebre ni delirium.
• Urocultivo solicitado por olor a amoníaco en pañal (no es indicación válida).
• E. coli >100,000 UFC/mL, esterasa leucocitaria (+), 15 leucocitos/campo.
• Bacteriuria asintomática: colonización en vejiga neurogénica/pañal.

Recordemos bacteriuria asintomática (BA):
• Prevalencia 20-50% en ancianos institucionalizados o con pañal.
• Olor fétido en pañal ≠ infección urinaria activa.
• AGS Choosing Wisely / IDSA: no tratar BA.
• No previene urosepsis; sí aumenta resistencia y colitis por C. difficile.
• ITU requiere síntomas: disuria, urgencia nueva, fiebre o delirium agudo claro.

Por lo tanto:
No es ITU atípica geriátrica.
No requiere profilaxis ni hospitalización.
No tratar.

¿Por qué la opción B es la respuesta correcta?
Bacteriuria asintomática.
Olor y leucocitos en pañal no justifican antibióticos.
Conducta: no tratar; evitar cultivos de rutina sin indicación.

¿Por qué fallan las otras opciones?
Opción A (ciprofloxacino 7 días): tratar colonización sin síntomas es iatrogenia; genera resistencia.
Opción C (nitrofurantoína profiláctica 6 meses): no esteriliza vía urinaria; resistencia crónica.
Opción D (hemocultivos + ceftriaxona IV): no hay datos de pielonefritis ni sepsis (afebril, estable).

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Cultivo positivo = ITU" o "leucocitos en orina = antibiótico".
Pero el examen exige integrar:
Síntomas clínicos + contexto (pañal, asintomática).
Aquí el dato decisivo es:
Paciente completamente asintomática con cultivo solicitado por olor en pañal.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar síntomas (fiebre, disuria, delirium agudo).
2. Si asintomática → no cultivar ni tratar (Choosing Wisely).
3. Si sintomática → tratar según guías IDSA.
4. Piuria sola no diagnostica ITU en anciano con pañal.

Perlas de examen
✅ Cultivo (+) sin síntomas = bacteriuria asintomática; no tratar.
✅ Choosing Wisely: no cultivar/tratar orina sin síntomas locales o sistémicos.
✅ Piuria sola no diagnostica ITU en anciano con pañal.
✅ Olor en pañal no es indicación de urocultivo.
✅ Tratar BA no previene urosepsis pero sí C. difficile.

Referencias
• IDSA Guidelines — Asymptomatic Bacteriuria.
• AGS Choosing Wisely — Urinary Tract Infections.
• Beers Criteria 2023.
• UpToDate: Asymptomatic bacteriuria in adults.`,
  },
  {
    id: "dr-q-30",
    examArea: "Geriatría / Neurogeriatría / Medicina Interna",
    topic: "Geriatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "geriatria", "geriatr", "demencia", "bpsd", "dolor"],
    statement:
      "Hombre de 86 años con Alzheimer severo (GDS 6). Agitación vespertina, agresividad al baño/cambio de pañal y deambulación nocturna (sundowning). Agresividad solo cuando flexionan rodillas o desvisten para ducha. Contracturas en rodillas, dolor evidente al movilizar caderas/rodillas. ¿Intervención de primera línea para mitigar agresividad en cuidados básicos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Haloperidol 1 mg gotas 30 min antes del baño para sedación química.",
      },
      {
        id: "B",
        label: "B",
        text: "Memantina 20 mg + citalopram para modular afecto disfórico.",
      },
      {
        id: "C",
        label: "C",
        text: "Presumir dolor no tratado o miedo; ensayo analgésico programado (acetaminofén horario) e higiene no forzada.",
      },
      {
        id: "D",
        label: "D",
        text: "Unidad psiquiátrica con sujeción mecánica y ECT.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "BPSD con desencadenante mecánico (flexión articular dolorosa): agresión = lenguaje de necesidad no cubierta (dolor). AGS: 1.ª línea = buscar causa + ensayo analgésico programado, no antipsicóticos de rutina (black box: ACV y muerte en demencia).",
    keyPoints: [
      "Cuando veas: agresividad en demencia severa solo al flexionar rodillas o durante el baño.",
      "Debes pensar en: dolor no verbalizado → ensayo analgésico programado (acetaminofén horario).",
      "BPSD con desencadenante mecánico = buscar causa somática antes que antipsicóticos.",
      "Haloperidol de rutina en demencia = black box FDA (ACV y muerte aumentados).",
      "Tema: Geriatría — síntomas neuropsiquiátricos de la demencia (BPSD).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de geriatría porque evalúa los BPSD con desencadenante mecánico: la agresividad al baño es lenguaje de dolor no verbalizado; acetaminofén programado va antes que antipsicóticos.

La clave no es haloperidol como «chaleco químico».
La clave es:
Presumir dolor no tratado o miedo y adaptar los cuidados antes de medicar.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 86 años con Alzheimer severo (GDS 6).
• Agitación vespertina, deambulación nocturna (sundowning).
• Agresividad solo cuando flexionan rodillas o desvisten para ducha.
• Contracturas en rodillas, dolor evidente al movilizar caderas/rodillas.
• BPSD por dolor no tratado, no psicosis primaria.

Recordemos BPSD y manejo AGS:
• Demencia severa: afasia y agnosia impiden verbalizar dolor → agresión instintiva de defensa.
• 1.ª línea: buscar causa reversible + ensayo analgésico programado (scheduled analgesic trial).
• Higiene no forzada: adaptar rutinas para minimizar movimientos dolorosos.
• Antipsicóticos solo si psicosis o riesgo letal tras fallar medidas no farmacológicas.
• Black box FDA: antipsicóticos en demencia → ACV y muerte aumentados.

Por lo tanto:
No es psicosis que requiere haloperidol de rutina.
Es dolor mecánico desencadenado por cuidados básicos.

¿Por qué la opción C es la respuesta correcta?
Presumir dolor no tratado o miedo.
Ensayo analgésico programado: acetaminofén horario antes del baño.
Higiene no forzada: adaptar técnica y horario.
Intervención de primera línea según guías AGS.

¿Por qué fallan las otras opciones?
Opción A (haloperidol 1 mg antes del baño): sedación química sin tratar dolor; aumenta mortalidad (black box).
Opción B (memantina + citalopram): no abordan dolor mecánico agudo; citalopram puede empeorar caídas.
Opción D (unidad psiquiátrica + sujeción + ECT): desproporcionado; causa somática tratable.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Agitación en demencia = antipsicótico" o "sundowning = haloperidol".
Pero el examen exige identificar:
Desencadenante mecánico (flexión articular = dolor).
Aquí el dato decisivo es:
Agresión solo durante movimientos que causan dolor en rodillas/caderas.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar BPSD y su desencadenante (¿cuándo ocurre?).
2. Si desencadenante mecánico → buscar dolor, infección, estreñimiento.
3. Ensayo analgésico programado antes de procedimientos dolorosos.
4. Antipsicóticos solo como último recurso, con consentimiento informado.

Perlas de examen
✅ Agitación en demencia severa = dolor o infección hasta probar lo contrario.
✅ Scheduled analgesic trial superior a antipsicóticos en BPSD por dolor.
✅ Haloperidol como "chaleco químico" = antiético y mortal.
✅ La agresión puede ser el único lenguaje del dolor en demencia avanzada.
✅ Higiene adaptada: no forzar baño completo si causa agitación.

Referencias
• AGS Guidelines for Management of Behavioral and Psychological Symptoms of Dementia.
• APA Practice Guideline on Use of Antipsychotics in Dementia.
• NICE Dementia Guidelines.
• UpToDate: Management of behavioral symptoms in dementia.`,
  },
  {
    id: "dr-q-31",
    examArea: "Medicina Interna / Medicina Hospitalaria / Infectología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "nap", "vap", "sepsis", "mdr"],
    statement:
      "Hombre de 68 años, hospitalizado día 9 por IAMCEST complicado con insuficiencia cardíaca. Intubado días 2–6, extubado hace 48 h. Antecedentes: DM2, ERC estadio 3b. Actual: fiebre 39.2 °C, tos productiva purulenta, disnea. PA 88/52 mmHg, FC 118 lpm, FR 28 rpm, SpO2 89% con VMK 40%. MV disminuido base derecha, estertores crepitantes. Rx tórax: consolidación lobar derecha nueva. Laboratorios: leucocitos 18,500/mm³, PCR 280 mg/L, procalcitonina 8 ng/mL, lactato 3.8 mmol/L, creatinina 2.4 mg/dL (basal 1.6), pH 7.28, PaCO2 32, HCO3 16. Cultivo esputo preliminar: Pseudomonas aeruginosa. Antibióticos previos en UCI: piperacilina-tazobactam 5 días. ¿Diagnóstico prioritario y esquema empírico inmediato más apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Neumonía adquirida en la comunidad superinfectada; reiniciar amoxicilina-ácido clavulánico oral y observar 48 h.",
      },
      {
        id: "B",
        label: "B",
        text: "Neumonía asociada a ventilación mecánica activa; meropenem + vancomicina sin ajuste por función renal.",
      },
      {
        id: "C",
        label: "C",
        text: "Neumonía asociada a atención en salud (NAC-H) con shock séptico; iniciar meropenem + amikacina ajustados a TFG y reanimación con cristaloides + vasopresores según respuesta.",
      },
      {
        id: "D",
        label: "D",
        text: "Edema pulmonar cardiogénico recurrente; diuréticos IV en bolo y suspender antibióticos hasta hemocultivos definitivos.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Consolidación nueva >48 h post-extubación en paciente con factores de riesgo hospitalario = NAC-H/VAP tardía. Shock séptico (hipotensión + lactato elevado). Exposición previa a anti-pseudomónicos obliga cobertura MDR: carbapenémico + aminoglucósido/amikacina según IDSA/ATS, ajustados a ERC. Reanimación séptica inmediata (Surviving Sepsis).",
    keyPoints: [
      "Cuando veas: consolidación pulmonar nueva >48 h post-extubación + shock séptico + exposición previa a pip-tazo.",
      "Debes pensar en: NAC-H con Pseudomonas MDR → meropenem + amikacina ajustados a TFG + reanimación séptica.",
      "No es VAP activa si el paciente ya no está intubado.",
      "Exposición previa a anti-pseudomónicos obliga escalar cobertura MDR.",
      "Tema: Medicina hospitalaria — neumonía asociada a atención en salud (NAC-H).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa la neumonía asociada a atención en salud (NAC-H) con shock séptico por Pseudomonas multirresistente, donde la exposición previa a antibióticos define el esquema empírico.

La clave no es tratar como NAC comunitaria ni como VAP activa.
La clave es:
Clasificar como NAC-H post-UCI y escalar a carbapenémico + aminoglucósido con reanimación séptica inmediata.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 68 años, día 9 de hospitalización por IAMCEST complicado con IC.
• Intubado días 2-6, extubado hace 48 h (ya no ventilado activamente).
• Fiebre 39.2 °C, consolidación lobar derecha nueva, tos purulenta, disnea.
• Shock séptico: PA 88/52, lactato 3.8, acidosis metabólica (pH 7.28, HCO3 16).
• Cultivo esputo preliminar: Pseudomonas aeruginosa; pip-tazo 5 días previos.
• ERC estadio 3b: ajustar antibióticos a TFG.

Recordemos la clasificación de neumonía hospitalaria:
• VAP: neumonía ≥48 h de ventilación mecánica (paciente aún intubado).
• NAC-H: neumonía ≥48 h de hospitalización o ≤48 h post-alta.
• Post-extubación con consolidación nueva = NAC-H/VAP tardía, no VAP activa.
• Exposición previa a anti-pseudomónicos selecciona resistencia → carbapenémico + amikacina.

Por lo tanto:
No es NAC comunitaria (amoxicilina-clavulánico oral inadecuado).
No es VAP activa (no está intubado).
Es NAC-H con shock séptico por Pseudomonas MDR.

¿Por qué la opción C es la respuesta correcta?
Neumonía asociada a atención en salud (NAC-H) con shock séptico.
Meropenem + amikacina ajustados a TFG (ERC estadio 3b).
Reanimación con cristaloides + vasopresores según Surviving Sepsis Campaign.
Antibiótico IV en menos de 1 hora.

¿Por qué fallan las otras opciones?
Opción A (amoxicilina-clavulánico oral): NAC comunitaria no explica cronología ni gravedad; ATB oral inadecuado en shock.
Opción B (meropenem + vancomicina sin ajuste renal): VAP activa no aplica; vancomicina sin indicación MRSA clara.
Opción D (edema pulmonar + suspender ATB): Rx y clínica son infecciosas; retrasar ATB en shock séptico aumenta mortalidad.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Neumonía post-UCI = siempre VAP" o "Pseudomonas = solo pip-tazo".
Pero el examen exige correlacionar:
Estado ventilatorio actual + exposición antibiótica previa + gravedad hemodinámica.
Aquí los datos decisivos son:
Extubado hace 48 h + pip-tazo previo + shock + Pseudomonas.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Clasificar neumonía hospitalaria (VAP vs NAC-H).
2. Evaluar exposición antibiótica previa (MDR).
3. Iniciar reanimación séptica + ATB IV empírico en <1 h.
4. Ajustar dosis a función renal.

Perlas de examen
✅ NAC-H: neumonía ≥48 h de hospitalización o ≤48 h post-alta.
✅ Exposición previa a anti-pseudomónicos → cubrir MDR (Pseudomonas).
✅ Shock séptico: antibiótico IV precoz + fluidos + vasopresores.
✅ Post-UCI + fiebre + consolidación nueva = NAC-H hasta demostrar lo contrario.
✅ Vancomicina no rutinaria si solo Gram negativo en cultivo preliminar.

Referencias
• IDSA/ATS Guidelines for HAP and VAP.
• Surviving Sepsis Campaign.
• Society of Hospital Medicine (SHM) Guidelines.
• UpToDate: Treatment of hospital-acquired and ventilator-associated pneumonia.`,
  },
  {
    id: "dr-q-32",
    examArea: "Medicina Interna / Medicina Hospitalaria / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "aki", "hiperkalemia", "kdigo"],
    statement:
      "Hombre de 72 años, día 4 de hospitalización por descompensación de IC (FEVI 30%). Medicamentos: furosemida IV, enalapril, espironolactona 25 mg, apixabán. Oliguria 12 h, somnolencia. PA 98/60 mmHg, FC 52 lpm irregular. Edema ++. ECG: ondas T picudas simétricas, ensanchamiento QRS 130 ms, desaparición de onda P. Laboratorios: K+ 7.1 mEq/L, Na+ 132, creatinina 3.8 mg/dL (basal 1.2), BUN 88, pH 7.18, HCO3 14, glucosa 110. ¿Conducta inmediata prioritaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender espironolactona y enalapril; iniciar diálisis de urgencia como única medida; no administrar calcio ni insulina hasta confirmar K+ en gasometría.",
      },
      {
        id: "B",
        label: "B",
        text: "Gluconato de calcio IV, insulina regular + dextrosa, beta-2 inhalado; suspender espironolactona/enalapril; evaluar diálisis urgente; evitar bicarbonato salvo acidosis severa con QRS prolongado según protocolo.",
      },
      {
        id: "C",
        label: "C",
        text: "Kayexalato oral 30 g y furosemida 80 mg IV; mantener enalapril para protección renal; repetir K+ en 24 h.",
      },
      {
        id: "D",
        label: "D",
        text: "Bicarbonato de sodio 150 mEq IV en bolo rápido como primera línea; iniciar amiodarona por bradicardia.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Emergencia hiperkalemica con cambios ECG (T picudas, QRS ancho, ondas P ausentes) + AKI sobre IC. Prioridad: estabilizar membrana (gluconato calcio IV), shift intracelular (insulina-dextrosa, beta-2), eliminar espironolactona/ACEi. Kayexalato no es medida de rescate aguda. Diálisis si refractaria o AKI oligúrica severa (KDIGO).",
    keyPoints: [
      "Cuando veas: K+ >6.5 con cambios ECG (T picudas, QRS ancho, ondas P ausentes) en paciente hospitalizado con IC.",
      "Debes pensar en: emergencia hiperkalemica → gluconato de calcio IV primero, luego insulina-dextrosa.",
      "Triada AKI en IC: diuréticos + ACEi + espironolactona.",
      "Kayexalato no salva en minutos; no retrasa medidas IV.",
      "Tema: Medicina hospitalaria — hiperkalemia grave con cambios ECG.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa la hiperkalemia grave con cambios electrocardiográficos en paciente con IC descompensada, donde el calcio IV va primero para estabilizar la membrana.

La clave no es esperar diálisis ni usar kayexalato como rescate agudo.
La clave es:
Secuencia KDIGO: calcio IV → insulina-dextrosa → suspender ahorradores de potasio.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 72 años, día 4 por descompensación de IC (FEVI 30%).
• Oliguria 12 h, somnolencia: AKI sobre IC.
• Medicamentos: furosemida IV + enalapril + espironolactona 25 mg.
• K+ 7.1 mEq/L con cambios ECG: T picudas simétricas, QRS 130 ms, ondas P ausentes.
• Acidosis metabólica (pH 7.18, HCO3 14), creatinina 3.8 (basal 1.2).

Recordemos el manejo de hiperkalemia con ECG alterado:
• Emergencia con riesgo de arritmia letal inmediata.
• 1) Gluconato de calcio IV: estabiliza membrana cardíaca (no baja K+).
• 2) Insulina + dextrosa: shift intracelular de K+.
• 3) Beta-2 inhalado (salbutamol): shift adicional.
• Suspender espironolactona y enalapril (bloquean aldosterona / reducen GFR).
• Kayexalato oral: acción lenta (horas), no es rescate agudo.
• Diálisis si refractaria o AKI oligúrica severa.

Por lo tanto:
No es manejo ambulatorio ni solo diálisis sin estabilización previa.
Es emergencia electrocardiográfica con AKI multifactorial.

¿Por qué la opción B es la respuesta correcta?
Gluconato de calcio IV (protección de membrana cardíaca).
Insulina regular + dextrosa + beta-2 inhalado.
Suspender espironolactona y enalapril.
Evaluar diálisis urgente; evitar bicarbonato salvo pH <6.9 con QRS prolongado.

¿Por qué fallan las otras opciones?
Opción A (solo diálisis sin calcio/insulina): retrasa estabilización de membrana → riesgo de paro.
Opción C (kayexalato + mantener enalapril): kayexalato lento; ACEi empeora hiperkalemia.
Opción D (bicarbonato en bolo + amiodarona): bicarbonato solo si acidosis severa; amiodarona no trata hiperkalemia.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Hiperkalemia = kayexalato" o "K+ alto = diálisis inmediata sin calcio".
Pero el examen exige la secuencia:
Calcio primero si hay cambios ECG, independientemente del valor de K+.
Aquí el dato decisivo es:
Ondas T picudas + QRS ancho + ondas P ausentes.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar cambios ECG (emergencia).
2. Gluconato de calcio IV de inmediato.
3. Insulina + dextrosa + beta-2 inhalado.
4. Suspender ahorradores de K+; considerar diálisis.

Perlas de examen
✅ ECG cambiado + K+ >6.5 = emergencia; calcio IV primero.
✅ Triada AKI en IC: diuréticos + ACEi + espironolactona.
✅ Kayexalato no salva en minutos; no retrasa medidas IV.
✅ IC descompensada + espironolactona + oliguria + T picuda = hiperkalemia hasta demostrar lo contrario.
✅ Bicarbonato solo si pH <6.9 con inestabilidad.

Referencias
• KDIGO Clinical Practice Guideline for Acute Kidney Injury.
• ACP/SHM Electrolyte Emergencies Guidelines.
• Tintinalli Emergency Medicine.
• UpToDate: Treatment and prevention of hyperkalemia in adults.`,
  },
  {
    id: "dr-q-33",
    examArea: "Medicina Interna / Medicina Hospitalaria / Endocrinología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "hiponatremia", "siadh"],
    statement:
      "Mujer de 58 años, día 6 post-cirugía de meningioma. Recibe morfina PCA, ondansetrón, sertralina. Somnolencia progresiva. PA 125/70, FC 88, SpO2 97%. Neurológico: GCS 13, sin focalidad nueva. Na+ inicial al ingreso 138; hoy Na+ 118 mEq/L, osmolalidad sérica 248 mOsm/kg, osmolalidad urinaria 520 mOsm/kg, Na urinario 65 mEq/L, volumen extracelular euvolémico al examen. TSH y cortisol normales. ¿Diagnóstico principal y manejo inicial más apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hiponatremia hipervolémica por SIADH; restricción hídrica estricta 800 mL/día y furosemida 40 mg IV.",
      },
      {
        id: "B",
        label: "B",
        text: "Pseudohiaponatremia por hiperglucemia; corregir Na+ con fórmula y administrar insulina.",
      },
      {
        id: "C",
        label: "C",
        text: "SIADH intrahospitalaria euvolémica; restricción hídrica, suspender fármacos desencadenantes y, si síntomas neurológicos, considerar suero salino hipertónico 3% bajo monitorización estrecha con meta de corrección ≤8 mEq/L en 24 h.",
      },
      {
        id: "D",
        label: "D",
        text: "Hiponatremia por depleción volémica postquirúrgica; expansión agresiva con SF 0.9% 2 L en 2 h.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Hiponatremia hipotónica euvolémica con orina inapropiadamente concentrada (Uosm >100, Na urinario >30) = SIADH (cirugía SNC, SSRI, morfina). GCS 13 = sintomática. Manejo: restricción hídrica, retirar desencadenantes; si sintomática, SSH 3% con corrección lenta (≤8 mEq/L/24 h) para evitar mielinolisis osmótica.",
    keyPoints: [
      "Cuando veas: hiponatremia hipotónica euvolémica post-neurocirugía + orina inapropiadamente concentrada (Uosm >100, Na urinario >30).",
      "Debes pensar en: SIADH intrahospitalaria → restricción hídrica + suspender desencadenantes; si sintomática, SSH 3% con corrección lenta.",
      "GCS 13 = hiponatremia sintomática; meta corrección ≤8 mEq/L/24 h para evitar mielinolisis osmótica.",
      "No expansión volémica ni furosemida de 1.ª línea en euvolemia (agrava dilución o depleciona sin corregir ADH).",
      "Tema: Hiponatremia intrahospitalaria / SIADH.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa el diagnóstico y manejo de SIADH euvolémica intrahospitalaria con hiponatremia sintomática.

La clave no es corregir rápido el sodio con volumen o diuréticos.
La clave es:
Identificar SIADH euvolémica sintomática y corregir de forma controlada (≤8 mEq/L/24 h) tras restricción hídrica y retirada de desencadenantes.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 58 años, día 6 post-cirugía de meningioma.
• Na+ cayó de 138 al ingreso a 118 mEq/L con osmolalidad sérica 248 (hipotónica verdadera).
• Osmolalidad urinaria 520, Na urinario 65: orina inapropiadamente concentrada.
• Euvolemia al examen; TSH y cortisol normales (descarta hipotiroidismo e insuficiencia adrenal).
• Desencadenantes: morfina PCA, ondansetrón, sertralina (SSRI) + cirugía SNC.
• GCS 13: hiponatremia sintomática (somnolencia progresiva).

Recordemos el diagnóstico de SIADH:
• Hiponatremia hipotónica con euvolemia clínica.
• Osmolalidad urinaria >100 mOsm/kg con sodio urinario >30 mEq/L.
• Función tiroidea y adrenal normales.
• Desencadenantes frecuentes intrahospitalarios: neurocirugía, SSRI, opioides.

Por lo tanto:
El diagnóstico es SIADH intrahospitalaria euvolémica sintomática que requiere restricción hídrica, suspensión de fármacos desencadenantes y, dado GCS 13, considerar suero salino hipertónico 3% bajo monitorización estrecha.

¿Por qué la opción C es la respuesta correcta?
Aborda el diagnóstico correcto (SIADH euvolémica) y el manejo escalonado: restricción hídrica + retirada de desencadenantes; si síntomas neurológicos, SSH 3% con meta de corrección ≤8 mEq/L/24 h para evitar mielinolisis osmótica.

¿Por qué fallan las otras opciones?
Opción A (furosemida + restricción hídrica): clasifica erróneamente como hipervolémica; furosemida no es 1.ª línea en SIADH euvolémica y puede deplecionar sin corregir ADH inapropiada.
Opción B (pseudohiaponatremia por glucosa): glucosa normal (110 mg/dL); no aplica fórmula de corrección.
Opción D (expansión agresiva con SF 0.9%): en euvolemia agrava dilución y empeora hiponatremia.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Hiponatremia sintomática" con expansión volémica agresiva o corrección rápida del sodio.
Pero el examen exige distinguir el volumen extracelular y la velocidad segura de corrección.
Aquí el dato decisivo es:
Euvolemia + Uosm 520 + Na urinario 65 + GCS 13 = SIADH sintomática, no depleción volémica.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar hiponatremia hipotónica verdadera (osmolalidad sérica baja).
2. Clasificar según volumen: euvolémica → SIADH.
3. Restricción hídrica + suspender desencadenantes (SSRI, opioides).
4. Si sintomática: SSH 3% con corrección ≤8 mEq/L/24 h.

Perlas de examen
✅ SIADH = euvolemia + Uosm >100 + Na urinario >30 + hipotónica.
✅ Post-neurocirugía + SSRI = SIADH intrahospitalaria clásica.
✅ GCS <15 o convulsiones = hiponatremia sintomática → SSH 3%.
✅ Corrección >10-12 mEq/L/24 h → mielinolisis pontina irreversible.
✅ No expandir volumen en euvolemia; empeora la dilución.
✅ Las residencias preguntan velocidad de corrección, no solo el diagnóstico.

Referencias
• European Clinical Practice Guideline on Hyponatremia.
• ACP/SHM Hospital Medicine Hyponatremia Guidelines.
• UpToDate: Treatment of hyponatremia.`,
  },
  {
    id: "dr-q-34",
    examArea: "Medicina Interna / Medicina Hospitalaria / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "acido_base", "gasometria"],
    statement:
      "Hombre de 55 años, día 3 de hospitalización por exacerbación de EPOC. Intubado hace 6 h por acidosis respiratoria. Ventilación mecánica: Vt 450 mL, FR 16, PEEP 5. Recibe furosemida y cloruro de potasio por hipokalemia previa. Gasometría actual: pH 7.52, PaCO2 28 mmHg, PaO2 88, HCO3 32 mEq/L, Na+ 138, K+ 2.9, Cl- 88. Anion gap 18. ¿Interpretación del trastorno ácido-base y conducta ventilatoria prioritaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Alcalosis respiratoria compensada; aumentar FR a 22 para mantener PaCO2 35 y corregir alcalosis.",
      },
      {
        id: "B",
        label: "B",
        text: "Alcalosis metabólica hipoclorémica (vómitos/diuréticos) con alcalosis respiratoria concomitante por hiperventilación iatrogénica; reducir ventilación al mínimo tolerado, reponer K+/Cl- y tratar causa.",
      },
      {
        id: "C",
        label: "C",
        text: "Acidosis metabólica con alcalosis respiratoria; administrar bicarbonato IV 100 mEq.",
      },
      {
        id: "D",
        label: "D",
        text: "Acidosis respiratoria crónica descompensada; aumentar PEEP a 12 y sedación profunda.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "pH alto + PaCO2 baja + HCO3 elevado = trastorno mixto: alcalosis respiratoria (sobreventilación mecánica/iATROGénica) + alcalosis metabólica hipoclorémica (Cl 88, K 2.9, diuréticos). Anion gap levemente elevado puede ser albumina/lactato. Conducta: ajustar ventilador (↓ FR/Vt), reponer KCl, no bicarbonato.",
    keyPoints: [
      "Cuando veas: pH elevado + PaCO2 baja + HCO3 elevado en paciente intubado con diuréticos.",
      "Debes pensar en: trastorno mixto alcalótico (respiratorio iatrogénico + metabólico hipoclorémico) → ajustar ventilador y reponer K+/Cl-.",
      "Cl- bajo + K+ bajo con furosemida = alcalosis metabólica de contracción por pérdida de Cl-/K+.",
      "pH >7.48 con hipokalemia: riesgo de arritmias y vasoespasmo cerebral; no administrar bicarbonato.",
      "Tema: Trastornos ácido-base intrahospitalarios.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa la interpretación de un trastorno ácido-base mixto alcalótico en un paciente intubado con diuréticos.

La clave no es tratar solo el componente respiratorio o administrar bicarbonato.
La clave es:
Reconocer alcalosis respiratoria iatrogénica superpuesta a alcalosis metabólica hipoclorémica y corregir ventilador + electrolitos.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 55 años, día 3 por exacerbación de EPOC, intubado hace 6 h.
• Gasometría: pH 7.52, PaCO2 28, HCO3 32 → trastorno mixto alcalótico.
• Cl- 88, K+ 2.9: alcalosis metabólica hipoclorémica por furosemida (pérdida Cl-/K+).
• PaCO2 baja: sobreventilación mecánica post-intubación (iatrogénica).
• Anion gap 18 levemente elevado: puede ser albumina/lactato, no acidosis metabólica dominante.

Recordemos la interpretación de trastornos mixtos:
• pH ↑ + PaCO2 ↓ = alcalosis respiratoria.
• HCO3 ↑ con Cl- bajo = alcalosis metabólica hipoclorémica (diuréticos, vómitos).
• Ambos coexisten cuando pH está muy elevado con PaCO2 baja Y bicarbonato alto.
• pH >7.48: riesgo de arritmias, vasoespasmo cerebral, hipokalemia refractaria.

Por lo tanto:
El paciente tiene alcalosis metabólica hipoclorémica por diuréticos con alcalosis respiratoria concomitante por hiperventilación iatrogénica; la conducta es reducir ventilación al mínimo tolerado, reponer K+/Cl- y tratar la causa.

¿Por qué la opción B es la respuesta correcta?
Identifica correctamente el trastorno mixto y prioriza ajustar el ventilador (↓ FR/Vt), reponer potasio y cloruro, y evitar bicarbonato que empeoraría la alcalosis metabólica.

¿Por qué fallan las otras opciones?
Opción A (aumentar FR a 22): agrava alcalosis respiratoria al aumentar hiperventilación mecánica.
Opción C (bicarbonato IV 100 mEq): pH ya alcalino; bicarbonato empeoraría alcalosis metabólica.
Opción D (aumentar PEEP + sedación profunda): PaCO2 está baja, no hay acidosis respiratoria crónica descompensada.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"EPOC intubado" con acidosis respiratoria y buscan aumentar ventilación.
Pero el examen exige leer la gasometría completa: pH, PaCO2 Y bicarbonato.
Aquí el dato decisivo es:
pH 7.52 + PaCO2 28 + HCO3 32 + Cl- 88 + K+ 2.9 = alcalosis mixta, no acidosis.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar el trastorno primario según pH y compensación esperada.
2. Buscar trastornos mixtos cuando pH y compensación no cuadran.
3. Correlacionar con contexto clínico (ventilador, diuréticos).
4. Ajustar VM + reponer electrolitos; evitar bicarbonato en alcalosis.

Perlas de examen
✅ pH ↑ + PaCO2 ↓ + HCO3 ↑ = alcalosis respiratoria + metabólica simultáneas.
✅ Furosemida → pérdida Cl-/K+ → alcalosis metabólica de contracción.
✅ VM agresiva post-intubación → alcalosis respiratoria iatrogénica aditiva.
✅ EPOC intubado + diuréticos + pH >7.48 = revisa ventilador ANTES de más gasometrías.
✅ Bicarbonato contraindicado cuando pH ya está alcalino.
✅ Siempre correlacionar gasometría con medicamentos y ventilador.

Referencias
• ACP Acid-Base Disorders Guidelines.
• SHM Critical Care Acid-Base Management.
• UpToDate: Simple and mixed acid-base disorders.`,
  },
  {
    id: "dr-q-35",
    examArea: "Medicina Interna / Medicina Hospitalaria / Geriatría",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "delirium", "postoperatorio"],
    statement:
      "Mujer de 81 años, día 2 post-fractura de cadera operada. Antecedentes: demencia leve, HTA, cataratas. Medicamentos hospitalarios: tramadol PRN, dipirona, quetiapina 25 mg noche (prescrita por insomnio), lorazepam 1 mg noche. Familia reporta agitación nocturna, desorientación fluctuante, alucinaciones visuales (\"insectos en la pared\"), inversión sueño-vigilia. PA 150/85, FC 98, Temp 37.4 °C. Deshidratación leve. Hemograma normal, Na+ 151, BUN 48, creatinina 1.4 (basal 0.9), Ca++ 8.2, glucosa 142. Rx tórax y EGO normales. CAM positivo. ¿Plan inicial prioritario?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aumentar quetiapina a 100 mg y mantener lorazepam; aplicar contención física nocturna.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar TAC cerebral urgente y EEG; iniciar aciclovir empírico por alucinaciones visuales.",
      },
      {
        id: "C",
        label: "C",
        text: "Suspender benzodiacepinas y antipsicóticos no indicados; corregir hipernatremia/deshidratación; reorientación, movilización precoz, corregir déficit sensorial, analgesia adecuada y búsqueda activa de infección; antipsicótico solo si riesgo inminente.",
      },
      {
        id: "D",
        label: "D",
        text: "Derivar a psiquiatría para inicio de haloperidol depot mensual.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Delirium hipoactivo/hiperactivo postquirúrgico multifactorial: benzodiacepinas (lorazepam), antipsicótico innecesario, opioides, deshidratación/hipernatremia, dolor, entorno. Manejo SHM/AGS: medidas no farmacológicas + corregir precipitantes + suspender fármacos delirógenos. Antipsicótico dosis mínima solo si riesgo de daño.",
    keyPoints: [
      "Cuando veas: anciano postoperatorio con agitación fluctuante, alucinaciones visuales y CAM positivo.",
      "Debes pensar en: delirium intrahospitalario multifactorial → medidas no farmacológicas + corregir precipitantes (DEDHIPTIS).",
      "Benzodiacepinas (lorazepam) empeoran y prolongan delirium en ancianos; suspender de inmediato.",
      "Hipernatremia/deshidratación post-op es precipitante metabólico frecuente y delirógeno.",
      "Tema: Delirium intrahospitalario / geriatría.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa el manejo inicial del delirium postoperatorio intrahospitalario en un paciente geriátrico.

La clave no es sedar con más benzodiacepinas o antipsicóticos profilácticos.
La clave es:
Identificar delirium agudo multifactorial, retirar fármacos delirógenos y corregir precipitantes antes de considerar antipsicóticos.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 81 años, día 2 post-fractura de cadera operada.
• Agitación nocturna, desorientación fluctuante, alucinaciones visuales, inversión sueño-vigilia.
• CAM positivo: delirium agudo, no demencia pura.
• Fármacos delirógenos: lorazepam 1 mg noche, quetiapina 25 mg (por insomnio), tramadol PRN.
• Hipernatremia (Na+ 151) + deshidratación leve: precipitante metabólico frecuente post-op.
• Demencia leve previa + déficit sensorial (cataratas): factor de riesgo base.

Recordemos el enfoque DEDHIPTIS para precipitantes de delirium:
• Drugs (fármacos delirógenos: BZD, antipsicóticos innecesarios, opioides).
• Electrolytes, Dehydration, Hypoxia, Infection, Pain, Trauma, Immobility, Sleep.
• Medidas no farmacológicas: reorientación, movilización precoz, corregir déficit sensorial.
• Antipsicótico dosis mínima solo si riesgo inminente de daño.

Por lo tanto:
El plan prioritario es suspender benzodiacepinas y antipsicóticos no indicados, corregir hipernatremia/deshidratación, aplicar medidas no farmacológicas y buscar infección activamente.

¿Por qué la opción C es la respuesta correcta?
Aborda el delirium como emergencia geriátrica multifactorial: retira fármacos delirógenos, corrige precipitantes metabólicos, implementa reorientación y movilización, y reserva antipsicóticos solo para riesgo inminente.

¿Por qué fallan las otras opciones?
Opción A (aumentar quetiapina + mantener lorazepam + contención): lorazepam empeora delirium; contención física es último recurso.
Opción B (TAC urgente + aciclovir empírico): no hay focalidad neurológica ni datos de encefalitis; delirium es multifactorial.
Opción D (haloperidol depot mensual): inaceptable en delirium agudo reversible.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Alucinaciones visuales" con encefalitis o patología SNC que requiere TAC urgente.
Pero el examen exige reconocer delirium postoperatorio con CAM positivo y precipitantes corregibles.
Aquí el dato decisivo es:
Fractura de cadera + lorazepam noche + hipernatremia + CAM (+) = delirium multifactorial, no psicosis primaria.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar delirium (CAM positivo, fluctuación, inicio agudo).
2. Retirar benzodiacepinas y antipsicóticos profilácticos.
3. Corregir precipitantes (deshidratación, electrolitos, dolor, infección).
4. Medidas no farmacológicas; antipsicótico solo si riesgo vital.

Perlas de examen
✅ Delirium intrahospitalario = emergencia geriátrica; buscar precipitantes (DEDHIPTIS).
✅ Benzodiacepinas empeoran delirium en ancianos (Beers/SHM).
✅ Fractura de cadera + lorazepam noche = delirium casi garantizado.
✅ Hipernatremia post-op es precipitante metabólico frecuente y corregible.
✅ TAC/EEG no son 1.ª línea sin focalidad neurológica o fiebre alta.
✅ Antipsicótico depot nunca en delirium agudo reversible.

Referencias
• SHM Delirium Guidelines.
• AGS Clinical Practice Guideline for Postoperative Delirium in Older Adults.
• UpToDate: Delirium and acute confusional states.`,
  },
  {
    id: "dr-q-36",
    examArea: "Medicina Interna / Medicina Hospitalaria / Neumología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "tep", "tromboprofilaxis", "chest"],
    statement:
      "Mujer de 64 años, día 10 de hospitalización por linfoma difuso de células B en quimioterapia (R-CHOP ciclo 2). Recibió enoxaparina 40 mg SC diaria desde ingreso. Plaquetas hoy 48,000/mm³ (basales 220,000). De forma súbita: disnea, dolor pleurítico, taquicardia. PA 90/55 mmHg, FC 128 lpm, FR 26, SpO2 88% aire ambiente, Temp 37.1 °C. MV conservado, ingurgitación yugular leve. D-dímero 4,500 ng/mL. TAC angio pulmonar: defecto de repleción en arteria lobar derecha + sobrecarga VD. Troponina I elevada. ¿Conducta inmediata prioritaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender toda anticoagulación por plaquetopenia; colocar filtro de vena cava y observar en piso.",
      },
      {
        id: "B",
        label: "B",
        text: "TEP submasivo/ alto riesgo; anticoagulación plena con heparina no fraccionada IV (ajustada) o fondaparinux según plaquetas; evaluar trombólisis si inestabilidad hemodinámica; evitar suspender profilaxis sin reevaluar riesgo trombótico vs sangrado según guías CHEST/oncología.",
      },
      {
        id: "C",
        label: "C",
        text: "Neumonía atípica por inmunosupresión; azitromicina y ceftriaxona; repetir TAC en 72 h.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar aspirina 325 mg y clopidogrel por troponina elevada; diferir anticoagulación hasta plaquetas >100,000.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "TEP agudo con sobrecarga VD y taquicardia/hipotensión leve = riesgo intermedio-alto (submasivo). Plaquetas 48,000 no contraindican anticoagulación absoluta en TEP alto riesgo; HNF IV permite control y reversión. Trombólisis si choque. Profilaxis previa falló; reevaluar dosis/ método. Filtro de VC no trata TEP establecido.",
    keyPoints: [
      "Cuando veas: disnea súbita + TAC con TEP + sobrecarga de VD + troponina elevada en paciente oncológico hospitalizado.",
      "Debes pensar en: TEP submasivo (riesgo intermedio-alto) → anticoagulación plena inmediata (HNF IV si plaquetopenia).",
      "Plaquetas 48,000 no contraindican anticoagulación absoluta en TEP de alto riesgo; balance según guías CHEST.",
      "Filtro de vena cava no trata TEP establecido; observar sin anticoagular es mortal en submasivo.",
      "Tema: TEP intrahospitalario / tromboprofilaxis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa el manejo inmediato del TEP submasivo en un paciente oncológico con trombocitopenia moderada.

La clave no es suspender anticoagulación por plaquetopenia ni colocar filtro de vena cava.
La clave es:
Anticoagular de inmediato el TEP con sobrecarga de VD y troponina elevada, ajustando el esquema según plaquetas (HNF IV permite control).

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 64 años, día 10 por linfoma difuso de células B en quimioterapia (R-CHOP).
• Disnea súbita, dolor pleurítico, taquicardia; PA 90/55, SpO2 88%.
• TAC angio: defecto de repleción en arteria lobar derecha + sobrecarga de VD.
• Troponina I elevada: TEP submasivo (riesgo intermedio-alto).
• Plaquetas 48,000 (basales 220,000): trombocitopenia por quimioterapia, no contraindicación absoluta.

Recordemos la estratificación del TEP:
• TEP masivo: choque hemodinámico → trombólisis si indicada.
• TEP submasivo: sobrecarga VD + troponina elevada sin choque → anticoagulación plena urgente.
• Cáncer + quimioterapia + inmovilización = estado pro-trombótico elevado.
• Filtro de VC no disuelve TEP; reservado para TVP proximal con contraindicación absoluta a AC.

Por lo tanto:
El paciente tiene TEP submasivo que requiere anticoagulación plena inmediata con heparina no fraccionada IV (ajustada) o fondaparinux según plaquetas, evaluando trombólisis si inestabilidad hemodinámica.

¿Por qué la opción B es la respuesta correcta?
Reconoce TEP submasivo/alto riesgo, indica anticoagulación plena con esquema ajustable (HNF IV), contempla trombólisis si inestabilidad, y evita suspender profilaxis sin reevaluar riesgo trombótico vs sangrado según guías CHEST.

¿Por qué fallan las otras opciones?
Opción A (suspender AC + filtro + observar): filtro no trata TEP establecido; observar es mortal en submasivo.
Opción C (neumonía atípica + ATB): TAC confirma TEP, no neumonía.
Opción D (aspirina + clopidogrel + diferir AC): antiagregación no trata TEP; retrasar anticoagulación aumenta mortalidad.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Plaquetas <50,000" con contraindicación absoluta a anticoagulación.
Pero el examen exige balancear riesgo trombótico vs sangrado en TEP de alto riesgo.
Aquí el dato decisivo es:
TEP lobar + sobrecarga VD + troponina + plaquetas 48k = anticoagular (HNF IV), no filtrar y observar.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar TEP con angioTAC.
2. Estratificar riesgo (masivo vs submasivo vs bajo riesgo).
3. Anticoagulación inmediata (HNF si plaquetopenia/balance fino).
4. Trombólisis si choque; revisar profilaxis fallida.

Perlas de examen
✅ TEP + sobrecarga VD + troponina = submasivo; anticoagular de inmediato.
✅ Oncológico hospitalizado con disnea súbita = TEP hasta demostrar lo contrario.
✅ Plaquetas 48k no es excusa automática para no anticoagular en TEP alto riesgo.
✅ Filtro de VC no trata TEP agudo sin contraindicación absoluta a AC.
✅ HNF IV permite control y reversión en trombocitopenia moderada.
✅ Antiagregación (AAS/clopidogrel) no sustituye anticoagulación en TEP.

Referencias
• CHEST Antithrombotic Therapy for VTE Disease Guidelines.
• SHM VTE Prevention and Management.
• UpToDate: Treatment, prognosis, and follow-up of acute pulmonary embolism.`,
  },
  {
    id: "dr-q-37",
    examArea: "Medicina Interna / Medicina Hospitalaria / Hepatología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "cirrosis", "pbe", "sepsis"],
    statement:
      "Hombre de 59 años, cirrosis por alcohol Child-Pugh C (13), día 5 de hospitalización por ascitis refractaria. Fiebre 38.8 °C, confusión nueva. PA 92/58 mmHg, FC 110 lpm. Abdomen distendido, dolor difuso, signo de rebote leve. Paracentesis diagnóstica: líquido turbio, PMN 680 cel/mm³, proteínas 0.8 g/dL, cultivo en curso. Creatinina 2.6 mg/dL (basal 1.4), bilirrubina 12 mg/dL, INR 2.1, Na+ 126. ¿Manejo inicial integral prioritario?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Peritonitis bacteriana espontánea; ceftriaxona 1 g/día sola, albúmina solo si creatinina >4, sin paracentesis de control.",
      },
      {
        id: "B",
        label: "B",
        text: "PBE con criterios de PBE grave; ceftriaxona + albúmina 1.5 g/kg día 1 y 1 g/kg día 3, expansión si hipotensión, evitar AINEs/nefrotóxicos, evaluar trasplante/ UCI según respuesta; paracentesis de control si no mejora en 48 h.",
      },
      {
        id: "C",
        label: "C",
        text: "Peritonitis secundaria por perforación; laparotomía exploradora inmediata sin antibióticos.",
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome hepatorrenal tipo 1; iniciar terlipresina y deferir antibióticos hasta descartar infección.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "PMN ≥250 = PBE. Child C + fiebre + confusión + AKI + hipotensión = PBE grave. Manejo: ceftriaxona (o según guía local) + albúmina para prevenir síndrome hepatorrenal (1.5 g/kg d1, 1 g/kg d3), soporte hemodinámico, evitar nefrotóxicos. Paracentesis control si no responde. Perforación menos probable con PMN moderado sin datos septicos focales extremos.",
    keyPoints: [
      "Cuando veas: cirrótico febril confuso con ascitis y PMN ≥250 en paracentesis.",
      "Debes pensar en: PBE grave (Child C + fiebre + encefalopatía + AKI) → ceftriaxona + albúmina en protocolo completo.",
      "PMN ≥250/mm³ en líquido ascítico confirma PBE; paracentesis no debe retrasar antibióticos.",
      "Albúmina 1.5 g/kg día 1 y 1 g/kg día 3 reduce síndrome hepatorrenal y mortalidad en PBE grave.",
      "Tema: Peritonitis bacteriana espontánea / cirrosis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa el manejo integral de la PBE grave en un cirrótico Child-Pugh C con disfunción orgánica.

La clave no es ceftriaxona sola ni diferir antibióticos para descartar hepatorenal.
La clave es:
Reconocer PBE grave y aplicar protocolo completo: antibiótico IV + albúmina + soporte hemodinámico.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 59 años, cirrosis por alcohol Child-Pugh C (13), ascitis refractaria.
• Fiebre 38.8 °C, confusión nueva, hipotensión (PA 92/58).
• Paracentesis: PMN 680 cel/mm³ (≥250 = PBE), proteínas 0.8 g/dL.
• AKI: creatinina 2.6 (basal 1.4), Na+ 126, bilirrubina 12, INR 2.1.
• PBE grave: Child C + fiebre + encefalopatía + AKI + hipotensión.

Recordemos el manejo de PBE según guías EASL/AASLD:
• PMN ≥250/mm³ en ascitis = PBE; iniciar ATB empírico de inmediato.
• PBE grave: Child C, AKI, encefalopatía, hipotensión → albúmina 1.5 g/kg día 1 y 1 g/kg día 3.
• Albúmina reduce síndrome hepatorrenal y mortalidad.
• Paracentesis de control si no mejora en 48 h (descartar peritonitis secundaria).

Por lo tanto:
El manejo prioritario es ceftriaxona + albúmina en protocolo completo, expansión si hipotensión, evitar nefrotóxicos/AINEs, y evaluar trasplante/UCI según respuesta.

¿Por qué la opción B es la respuesta correcta?
Aborda PBE grave con el protocolo integral: antibiótico IV, albúmina en dosis completas, soporte hemodinámico, evitar nefrotóxicos, y paracentesis de control si no responde en 48 h.

¿Por qué fallan las otras opciones?
Opción A (ceftriaxona sola + albúmina solo si Cr >4): subdosis de albúmina; PBE grave requiere protocolo completo desde Cr 1.4.
Opción C (laparotomía inmediata): PMN 680 sin datos de perforación típica; ATB primero, cirugía si no responde.
Opción D (terlipresina deferiendo ATB): hepatorenal es consecuencia; tratar infección primero.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"PBE" con ceftriaxona sola como manejo suficiente.
Pero el examen exige identificar PBE grave y el protocolo de albúmina que reduce mortalidad.
Aquí el dato decisivo es:
Child C + confusión + AKI + PMN 680 = PBE grave → ceftriaxona + albúmina, no solo ATB.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Cirrótico febril confuso = paracentesis diagnóstica YA.
2. PMN ≥250 → PBE; ATB empírico IV sin demora.
3. Si PBE grave/AKI → albúmina 1.5 g/kg d1 + 1 g/kg d3.
4. Paracentesis control si no mejora en 48 h.

Perlas de examen
✅ PBE: PMN ≥250/mm³ en líquido ascítico.
✅ Cirrótico confuso + fiebre = paracentesis antes de esperar cultivos.
✅ Albúmina + ATB reduce hepatorenal y mortalidad en PBE grave.
✅ AKI en cirrótico febril = PBE hasta demostrar lo contrario.
✅ Peritonitis secundaria si no responde en 48 h o PMN muy elevado con datos septicos focales.
✅ No diferir antibióticos para "descartar" hepatorenal primero.

Referencias
• EASL Clinical Practice Guidelines on Ascites and Spontaneous Bacterial Peritonitis.
• AASLD Practice Guidance on Ascites and SBP.
• UpToDate: Spontaneous bacterial peritonitis in adults.`,
  },
  {
    id: "dr-q-38",
    examArea: "Medicina Interna / Medicina Hospitalaria / Endocrinología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "cad", "dm", "corticoides"],
    statement:
      "Mujer de 45 años con SLE en brote, día 3 de hospitalización recibiendo metilprednisolona 60 mg IV/día. Antecedente DM1. Ayer suspendió bomba de insulina por extravasación del catéter. Hoy: náuseas, vómitos, Kussmaul. PA 95/60, FC 120, FR 32, Temp 37.2 °C. Glicemia 485 mg/dL, pH 7.05, PaCO2 18, HCO3 5, Na+ 130, K+ 5.8, creatinina 1.5, cetonas séricas 5.2 mmol/L. ¿Secuencia terapéutica inmediata correcta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Insulina regular 0.1 U/kg/h IV de inmediato + bicarbonato 100 mEq en bolo + SF 0.9% después.",
      },
      {
        id: "B",
        label: "B",
        text: "SF 0.9% 1 L primera hora; si K+ <3.3 posponer insulina y reponer potasio; si K+ 3.3–5.2 iniciar insulina 0.1 U/kg/h + K+ según protocolo; bicarbonato solo si pH <6.9; buscar precipitante (infección/esteroide).",
      },
      {
        id: "C",
        label: "C",
        text: "Insulina subcutánea basal 20 U y alta con control ambulatorio; reducir esteroide a 20 mg.",
      },
      {
        id: "D",
        label: "D",
        text: "Suspender insulina por K+ 5.8; hidratación con SF 0.45% hipotónico exclusivamente.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "CAD severa (pH 7.05, HCO3 5) en DM1 por suspensión de insulina + esteroides. Prioridad ADA: volumen SF 0.9% primero; K+ 5.8 permite insulina con monitorización de K+. Bicarbonato solo si pH <6.9. Insulina IV 0.1 U/kg/h. K+ 5.8 no contraindica insulina pero requiere K+ concurrente cuando baje.",
    keyPoints: [
      "Cuando veas: DM1 hospitalizado con CAD severa (pH 7.05, cetonas elevadas) tras suspensión de insulina + esteroides.",
      "Debes pensar en: protocolo ADA → volumen SF 0.9% primero; insulina IV 0.1 U/kg/h si K+ ≥3.3.",
      "K+ inicial alto en CAD (desplazamiento extracellular) cae con insulina; no contraindica tratamiento.",
      "Bicarbonato solo si pH <6.9; no en pH 7.05 (riesgo edema cerebral).",
      "Tema: Cetoacidosis diabética intrahospitalaria.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa la secuencia terapéutica correcta de la CAD severa en un paciente DM1 con insulopenia por suspensión de bomba y esteroides.

La clave no es iniciar insulina antes de volumen ni suspender insulina por K+ alto inicial.
La clave es:
Seguir protocolo ADA: fluidos primero, insulina IV cuando K+ ≥3.3, y monitorización horaria de potasio.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 45 años con SLE en brote, metilprednisolona 60 mg IV/día.
• DM1 con bomba de insulina suspendida ayer por extravasación del catéter.
• CAD severa: glicemia 485, pH 7.05, HCO3 5, cetonas 5.2 mmol/L, Kussmaul.
• K+ 5.8 (desplazamiento extracellular por acidosis; caerá con insulina).
• Precipitante clásico intrahospitalario: insulopenia absoluta + glucocorticoides.

Recordemos el protocolo ADA para CAD:
• Paso 1: SF 0.9% 1 L en la primera hora (volumen antes de insulina).
• Paso 2: insulina regular 0.1 U/kg/h IV si K+ ≥3.3 mEq/L.
• Si K+ <3.3: posponer insulina y reponer potasio primero (riesgo arritmia).
• Bicarbonato solo si pH <6.9 (no rutinario en pH 7.05).
• Buscar precipitante: catéter, infección, adherencia, esteroides.

Por lo tanto:
La secuencia correcta es hidratación con SF 0.9%, iniciar insulina IV dado K+ 5.8 con monitorización de K+, y bicarbonato solo si pH <6.9.

¿Por qué la opción B es la respuesta correcta?
Sigue el protocolo ADA completo: volumen primero, insulina IV si K+ ≥3.3 con reposición según protocolo, bicarbonato solo en acidosis extrema, y búsqueda de precipitante.

¿Por qué fallan las otras opciones?
Opción A (insulina + bicarbonato en bolo + SF después): bicarbonato rutinario no indicado en pH 7.05; volumen debe ir primero.
Opción C (insulina SC basal + alta ambulatoria): CAD severa con vómitos requiere insulina IV y monitorización en UCI.
Opción D (suspender insulina por K+ 5.8): error clásico; K+ alto inicial en CAD cae con tratamiento.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"K+ 5.8" con contraindicación a insulina en CAD.
Pero el examen exige entender el desplazamiento extracellular de potasio por acidosis que se corrige con insulina.
Aquí el dato decisivo es:
K+ 5.8 en CAD severa permite insulina IV con monitorización horaria; caerá con shift intracelular.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. SF 0.9% agresivo (1 L primera hora).
2. Insulina IV 0.1 U/kg/h si K+ ≥3.3.
3. Monitorizar K+ cada hora; reponer según protocolo.
4. Bicarbonato solo si pH <6.9; buscar precipitante.

Perlas de examen
✅ CAD: fluidos primero; insulina IV cuando K+ ≥3.3 mEq/L.
✅ K+ inicial alto en CAD por desplazamiento extracellular; cae con insulina.
✅ DM1 hospitalizado + esteroide + bomba detenida = CAD en 24 h.
✅ Bicarbonato rutinario no indicado en pH 7.05; riesgo edema cerebral.
✅ Insulina SC inadecuada en CAD severa con vómitos.
✅ Siempre buscar precipitante intrahospitalario (catéter, infección, esteroides).

Referencias
• ADA Standards of Care in Diabetes — DKA Management.
• SHM Glycemic Management in Hospitalized Patients.
• UpToDate: Diabetic ketoacidosis and hyperosmolar hyperglycemic state in adults.`,
  },
  {
    id: "dr-q-39",
    examArea: "Medicina Interna / Medicina Hospitalaria / Infectología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "bacteriemia", "clabsi", "mdr"],
    statement:
      "Hombre de 70 años, UCI día 14, catéter venoso central yugular derecho día 10, ventilación mecánica, ERC estadio 4. Fiebre 39 °C, escalofríos. PA 82/48 mmHg tras 30 mL/kg cristaloides, FC 125, lactato 4.5. Dos hemocultivos periféricos y del catéter pendientes. Preliminar: bacilos Gram-negativos BLEE en hemocultivo del catéter 2 h antes que periférico. Plaquetas 92,000. ¿Manejo inmediato del catéter y antibiótico empírico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Mantener catéter y cambiar antibiótico a vancomicina; esperar antibiograma 72 h.",
      },
      {
        id: "B",
        label: "B",
        text: "Retirar catéter central de inmediato (CLABSI), hemocultivos de control, meropenem IV empírico ajustado a TFG + reanimación séptica; no usar carbapenémico + vancomicina rutinario sin indicación Gram positivo.",
      },
      {
        id: "C",
        label: "C",
        text: "Intercambio sobre guía del catéter con mismo lumen; continuar ceftriaxona previa.",
      },
      {
        id: "D",
        label: "D",
        text: "Retirar catéter y administrar piperacilina-tazobactam exclusivamente por 7 días ambulatorio al alta.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "CLABSI con choque séptico y crecimiento diferencial más rápido en catéter = retirar catéter urgente (IDSA). BLEE → carbapenémico empírico ajustado a ERC. Vancomicina no necesaria si solo GN. Intercambio sobre guía no indicado en inestabilidad/BLEE. Duración IV en UCI, no ambulatorio prematuro.",
    keyPoints: [
      "Cuando veas: choque séptico en UCI con catéter central y hemocultivo del catéter positivo antes que periférico.",
      "Debes pensar en: CLABSI con BLEE → retirar catéter de inmediato + meropenem empírico ajustado a TFG.",
      "Crecimiento diferencial más rápido en catéter vs periférico confirma origen intraluminal.",
      "Vancomicina no necesaria si preliminar solo muestra Gram negativo; no esperar antibiograma en shock.",
      "Tema: CLABSI / bacteriemia intrahospitalaria.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa el manejo inmediato de CLABSI con choque séptico por bacilos Gram-negativos BLEE en un paciente de UCI.

La clave no es mantener el catéter ni esperar antibiograma de 72 horas.
La clave es:
Retirar el catéter central de inmediato y cubrir con carbapenémico empírico ajustado a función renal.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 70 años, UCI día 14, catéter venoso central yugular día 10.
• Fiebre 39 °C, choque séptico: PA 82/48 tras 30 mL/kg, lactato 4.5.
• Hemocultivo del catéter positivo 2 h antes que periférico: bacilos GN BLEE.
• Biofilm intraluminal → bacteriemia continua → sepsis persistente si se mantiene catéter.
• ERC estadio 4: ajustar meropenem a TFG.

Recordemos el manejo de CLABSI según IDSA:
• CLABSI confirmada: crecimiento diferencial más rápido en catéter vs periférico.
• Choque séptico + inestabilidad = retirar catéter urgente; intercambio sobre guía contraindicado.
• BLEE → carbapenémico empírico (meropenem); ceftriaxona/pip-tazo ineficaces.
• Vancomicina solo si indicación de Gram positivo; no rutinaria si solo GN.
• Duración IV en UCI 7–14 días según respuesta; no alta ambulatoria prematura.

Por lo tanto:
El manejo inmediato es retirar catéter central, hemocultivos de control, meropenem IV empírico ajustado a TFG, y reanimación séptica continua.

¿Por qué la opción B es la respuesta correcta?
Retira catéter de inmediato (CLABSI), inicia meropenem empírico ajustado a TFG, continúa reanimación séptica, y evita vancomicina rutinaria sin indicación de Gram positivo.

¿Por qué fallan las otras opciones?
Opción A (mantener catéter + vancomicina + esperar antibiograma): perpetúa bacteriemia; vancomicina innecesaria si solo GN.
Opción C (intercambio sobre guía + ceftriaxona): contraindicado en CLABSI complicada; ceftriaxona ineficaz vs BLEE.
Opción D (retirar catéter + pip-tazo ambulatorio 7 días): pip-tazo ineficaz vs BLEE; duración ambulatoria inadecuada en shock.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Bacteriemia en UCI" con mantener catéter y ajustar antibiótico según antibiograma.
Pero el examen exige retirar catéter en CLABSI con choque y cubrir MDR de inmediato.
Aquí el dato decisivo es:
Hemocultivo del catéter 2 h antes que periférico + GN BLEE + choque = retira catéter + meropenem YA.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reanimación séptica (cristaloides, lactato).
2. Retirar catéter central (salvo excepciones muy limitadas).
3. ATB empírico MDR según institución (meropenem si BLEE).
4. Hemocultivos de control; duración IV según IDSA.

Perlas de examen
✅ CLABSI + inestabilidad = retirar catéter, no intercambio sobre guía.
✅ Crecimiento más rápido en catéter vs periférico confirma origen intraluminal.
✅ BLEE → carbapenémico; evitar ceftriaxona/pip-tazo empírico fallido.
✅ UCI + fiebre + catéter + GN en cultivo = retira catéter y cubre MDR.
✅ Esperar antibiograma no es opción en choque séptico.
✅ Vancomicina no rutinaria si preliminar solo muestra Gram negativo.

Referencias
• IDSA Clinical Practice Guidelines for CLABSI.
• Surviving Sepsis Campaign Guidelines.
• SHM Hospital-Acquired Infection Management.`,
  },
  {
    id: "dr-q-40",
    examArea: "Medicina Interna / Medicina Hospitalaria / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "aki", "kdigo", "nefrotoxicidad"],
    statement:
      "Hombre de 63 años, hospitalizado por bacteriemia por E. coli sensible tratada con ceftriaxona (día 8). Recibió contrasto yodado para TAC abdomen día 5. Antecedente: HTA, DM2. Medicamentos: metformina 850 mg c/12 h, enalapril, ibuprofeno PRN (3 dosis en 48 h por dolor). Oliguria 18 h. Creatinina 4.2 mg/dL (basal 1.0), BUN 72, K+ 5.6, pH 7.30, HCO3 18. Sedimento: cilindros granulosos marrón, eosinófilos ausentes. FENA 1.8%. Ecografía: riñones de tamaño normal sin obstrucción. ¿Diagnóstico principal de AKI y conducta inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nefritis intersticial aguda por ceftriaxona; iniciar esteroides 1 mg/kg y biopsia renal urgente.",
      },
      {
        id: "B",
        label: "B",
        text: "AKI intrínseca aguda multifactorial (NTA por sepsis + AINE + contraste); suspender metformina, enalapril, AINE; hidratación cautelosa, monitorizar K+ y balance; evitar nefrotóxicos adicionales; considerar diálisis si criterios urémicos/refractaria hiperkalemia.",
      },
      {
        id: "C",
        label: "C",
        text: "AKI prerrenal por depleción; SF 0.9% 3 L en 6 h y reiniciar ibuprofeno con omeprazol.",
      },
      {
        id: "D",
        label: "D",
        text: "Obstrucción postrenal tardía; cateterismo vesical es prioritario antes de cualquier medida.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "FENA >1% + cilindros granulosos = NTA intrínseca. Multifactorial hospitalaria: sepsis, AINE, contraste, ACEi. Suspender nefrotóxicos y metformina (riesgo acidosis láctica si empeora). Hidratación prudente sin sobrecarga. Diálisis según criterios KDIGO. NIA menos probable (sin eosinófilos, sin fiebre/rash típico).",
    keyPoints: [
      "Cuando veas: AKI hospitalaria con FENA >1% + cilindros granulosos marrón + múltiples nefrotóxicos.",
      "Debes pensar en: NTA intrínseca multifactorial (sepsis + AINE + contraste + RAAS) → suspender nefrotóxicos.",
      "FENA >1% descarta AKI prerrenal; cilindros marrón confirman NTA.",
      "Suspender metformina en AKI (riesgo acidosis láctica; KDIGO/ADA).",
      "Tema: AKI intrahospitalaria / nefrotoxicidad.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa el diagnóstico y manejo de AKI intrínseca multifactorial en un paciente con múltiples nefrotóxicos hospitalarios.

La clave no es expandir volumen agresivamente ni iniciar esteroides para NIA.
La clave es:
Identificar NTA multifactorial, retirar nefrotóxicos (AINE, metformina, ACEi) y monitorizar criterios de diálisis.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 63 años, día 8 por bacteriemia por E. coli sensible (ceftriaxona).
• Oliguria 18 h, creatinina 4.2 (basal 1.0): AKI aguda severa.
• Multifactorial: sepsis reciente + contraste yodado día 5 + ibuprofeno PRN (3 dosis/48 h) + enalapril + metformina.
• Sedimento: cilindros granulosos marrón, eosinófilos ausentes.
• FENA 1.8% (>1% = intrínseca); ecografía sin obstrucción.

Recordemos la clasificación de AKI según KDIGO:
• Prerrenal: FENA <1%, cilindros hialinos, responde a volumen.
• Intrínseca (NTA): FENA >1%, cilindros granulosos marrón.
• Postrenal: obstrucción en ecografía (descartada aquí).
• AKI hospitalaria suele ser multifactorial: sepsis + AINE + contraste + bloqueo RAAS.

Por lo tanto:
El diagnóstico es AKI intrínseca aguda multifactorial (NTA); la conducta es suspender metformina, enalapril y AINE, hidratación cautelosa, y considerar diálisis si criterios urémicos.

¿Por qué la opción B es la respuesta correcta?
Identifica NTA multifactorial, indica suspensión de nefrotóxicos (metformina, ACEi, AINE), hidratación cautelosa con monitorización de K+ y balance, y diálisis según criterios KDIGO.

¿Por qué fallan las otras opciones?
Opción A (NIA por ceftriaxona + esteroides + biopsia): datos insuficientes para NIA (sin eosinófilos, sin fiebre/rash); esteroides no empíricos.
Opción C (AKI prerrenal + SF 3 L + reiniciar ibuprofeno): FENA 1.8% descarta prerrenal; AINE empeora.
Opción D (obstrucción postrenal + cateterismo): ecografía descarta obstrucción.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Oliguria + Cr elevada post-sepsis" con AKI prerrenal y expansión agresiva.
Pero el examen exige interpretar FENA y sedimento para distinguir prerrenal de NTA.
Aquí el dato decisivo es:
FENA 1.8% + cilindros granulosos marrón = NTA intrínseca, no prerrenal.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Calcular FENA y revisar sedimento urinario.
2. Identificar y retirar nefrotóxicos (AINE, metformina, ACEi).
3. Hidratación cautelosa sin sobrecarga.
4. Diálisis si hiperkalemia refractaria, acidosis, sobrecarga o uremia sintomática.

Perlas de examen
✅ FENA >1% + cilindros marrón = NTA, no prerrenal.
✅ AKI hospitalaria suele ser multifactorial: sepsis + AINE + contraste + RAAS.
✅ Suspender metformina en AKI (riesgo acidosis láctica; KDIGO/ADA).
✅ Sepsis + contraste + AINE PRN + enalapril = AKI garantizada → quita nefrotóxicos.
✅ NIA requiere eosinófilos, rash o fiebre; no esteroides empíricos.
✅ Ecografía normal descarta postrenal; cateterismo no prioritario.

Referencias
• KDIGO Clinical Practice Guideline for Acute Kidney Injury.
• SHM Hospital Medicine Nephrotoxicity Guidelines.
• ACP Hospital Medicine AKI Management.`,
  },
  {
    id: "dr-q-41",
    examArea: "Medicina Interna / Medicina Hospitalaria / UCI",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "sepsis", "ssc", "news2"],
    statement:
      "Hombre de 75 años, día 5 de hospitalización por pancreatitis aguda biliar previamente estable. Guardia: letargo. PA 85/50 mmHg, FC 115 lpm, FR 24 rpm, Temp 38.5 °C, SpO2 92%. Llenado capilar 4 s, piel moteada. Lactato 4.2 mmol/L, leucocitos 18,000/uL. Choque séptico de probable origen biliar/pancreático. Según Surviving Sepsis Campaign (actualización 2026), ¿conducta inmediata prioritaria sobre cribado institucional y antimicrobianos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Calcular qSOFA; confirmar sepsis e iniciar reanimación con coloides.",
      },
      {
        id: "B",
        label: "B",
        text: "Activar Code Sepsis con escalas sensibles (NEWS2), reanimación hídrica temprana, ATB amplio espectro IV, con desescalamiento condicional posterior aunque no se aísle patógeno.",
      },
      {
        id: "C",
        label: "C",
        text: "Retrasar ATB hasta procalcitonina y PCR multiplex gastrointestinal.",
      },
      {
        id: "D",
        label: "D",
        text: "Vasopresina periférica como 1.ª línea y omitir bolos de cristaloides para evitar SDRA.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Choque séptico con hipotensión, hiperlactatemia y disfunción orgánica: activación inmediata multidisciplinar (Code Sepsis), cristaloides balanceados, ATB IV precoz. SSC 2026: NEWS2 > qSOFA para cribado; desescalamiento condicional permitido. Coloides almidón contraindicados; norepinefrina es 1.ª línea vasopresora, no vasopresina inicial.",
    keyPoints: [
      "Cuando veas: choque séptico hospitalario con hipotensión, lactato elevado y disfunción orgánica.",
      "Debes pensar en: activación inmediata Code Sepsis con NEWS2 + cristaloides balanceados + ATB IV en <1 h.",
      "SSC 2026: NEWS2 preferido sobre qSOFA para cribado hospitalario (mayor sensibilidad).",
      "No retrasar ATB hasta biomarcadores; desescalamiento condicional permitido aunque cultivo negativo.",
      "Tema: Sepsis hospitalaria / Surviving Sepsis Campaign.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa la conducta inmediata en choque séptico hospitalario según Surviving Sepsis Campaign 2026.

La clave no es calcular qSOFA ni retrasar antibióticos hasta biomarcadores.
La clave es:
Activación inmediata multidisciplinar con NEWS2, reanimación hídrica temprana y ATB amplio espectro IV en la primera hora.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 75 años, día 5 por pancreatitis aguda biliar previamente estable.
• Letargo, hipotensión (PA 85/50), taquicardia, fiebre 38.5 °C, SpO2 92%.
• Llenado capilar 4 s, piel moteada, lactato 4.2 mmol/L, leucocitos 18,000.
• Choque séptico de probable origen biliar/pancreático con disfunción orgánica.

Recordemos SSC 2026 para sepsis hospitalaria:
• NEWS2 preferido sobre qSOFA para cribado (mayor sensibilidad en entorno hospitalario).
• Code Sepsis multidisciplinar con reanimación hídrica con cristaloides balanceados.
• ATB amplio espectro IV en <1 h en choque séptico; no esperar procalcitonina/PCR.
• Desescalamiento condicional permitido aunque cultivo negativo.
• Coloides almidón contraindicados; norepinefrina es 1.ª línea vasopresora.

Por lo tanto:
La conducta prioritaria es activar Code Sepsis con NEWS2, reanimación hídrica temprana, ATB IV de amplio espectro, y desescalamiento condicional posterior.

¿Por qué la opción B es la respuesta correcta?
Activa Code Sepsis con escalas sensibles (NEWS2), inicia reanimación hídrica temprana y ATB amplio espectro IV con desescalamiento condicional, alineado con SSC 2026.

¿Por qué fallan las otras opciones?
Opción A (qSOFA + coloides): qSOFA tiene baja sensibilidad para cribado; coloides almidón dañan riñón en sepsis.
Opción C (retrasar ATB hasta procalcitonina/PCR): cada hora de retraso aumenta mortalidad ~8%.
Opción D (vasopresina periférica sin cristaloides): norepinefrina es 1.ª línea; omitir volumen en shock es error.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Sepsis" con qSOFA como herramienta principal de cribado.
Pero el examen exige conocer la actualización SSC 2026 que prioriza NEWS2 en entorno hospitalario.
Aquí el dato decisivo es:
Choque séptico con lactato 4.2 = ATB IV inmediato, no esperar biomarcadores.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocimiento cero-demoras (NEWS2 + lactato).
2. Activar Code Sepsis multidisciplinar.
3. Cristaloides balanceados + ATB IV en <1 h.
4. Vasopresores (norepinefrina 1.ª línea) si persiste hipotensión.

Perlas de examen
✅ SSC 2026: NEWS2 preferido sobre qSOFA para screening hospitalario.
✅ ATB en <1 h en choque séptico; no esperar biomarcadores.
✅ Cristaloides balanceados; coloides almidón no en sepsis.
✅ Desescalamiento condicional permitido aunque cultivo negativo.
✅ Norepinefrina es 1.ª línea vasopresora, no vasopresina inicial.
✅ Cada hora de retraso en ATB aumenta mortalidad significativamente.

Referencias
• Surviving Sepsis Campaign Guidelines 2026.
• SHM Sepsis Recognition and Management.
• UpToDate: Evaluation and management of suspected sepsis in adults.`,
  },
  {
    id: "dr-q-42",
    examArea: "Medicina Interna / Medicina Hospitalaria / Neumología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "acido_base", "gasometria", "epoc"],
    statement:
      "Mujer de 68 años, día 3 por exacerbación EPOC GOLD D con cor pulmonale, furosemida crónica. Somnolencia, mioclonías, FR 10 rpm, SpO2 86% con O2 2 L/min. Na+ 142, K+ 2.5, Cl- 82, HCO3 36, BUN 45, Cr 1.6. GSA (FiO2 28%): pH 7.22, pCO2 90, pO2 55. ¿Diagnóstico ácido-base completo que explica la encefalopatía?",
    options: [
      { id: "A", label: "A", text: "Acidosis respiratoria crónica descompensada pura por EPOC." },
      {
        id: "B",
        label: "B",
        text: "Trastorno triple: acidosis respiratoria aguda sobre crónica + alcalosis metabólica por contracción/hypokalemia (furosemida) + acidosis metabólica de anion gap elevado (AG 24).",
      },
      { id: "C", label: "C", text: "Acidosis metabólica hiperclorémica con alcalosis respiratoria compensatoria." },
      { id: "D", label: "D", text: "Alcalosis metabólica primaria con acidosis respiratoria compensatoria extrema." },
    ],
    correctOptionId: "B",
    explanation:
      "pH 7.22 + pCO2 90 = acidosis respiratoria. AG = 142-(82+36)=24 (elevado) = acidosis metabólica adicional (láctica/urémica). HCO3 36 excesivo vs esperado → alcalosis metabólica superpuesta (furosemida, hipokalemia, hipocloremia). Trastorno triple clásico en paciente crítico hospitalizado.",
    keyPoints: [
      "Cuando veas: EPOC descompensado con pH bajo, pCO2 alto, HCO3 elevado y Cl-/K+ bajos con furosemida.",
      "Debes pensar en: trastorno ácido-base triple → calcular anion gap y delta gap siempre.",
      "pH 7.22 + pCO2 90 = acidosis respiratoria; AG 24 = acidosis metabólica de gap elevado adicional.",
      "HCO3 36 excesivo vs esperado (~12) → alcalosis metabólica superpuesta por furosemida.",
      "Tema: Trastornos ácido-base triple / EPOC.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa la identificación de un trastorno ácido-base triple en un paciente EPOC con furosemida crónica.

La clave no es detenerse en la acidosis respiratoria pura del EPOC.
La clave es:
Calcular siempre anion gap y delta gap para detectar trastornos metabólicos superpuestos ocultos.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 68 años, día 3 por exacerbación EPOC GOLD D con cor pulmonale.
• Somnolencia, mioclonías, FR 10 rpm, SpO2 86% con O2 2 L/min (encefalopatía hipercápnica).
• GSA: pH 7.22, pCO2 90, pO2 55; K+ 2.5, Cl- 82, HCO3 36.
• Furosemida crónica + hipokalemia + hipocloremia: trastorno triple superpuesto.

Recordemos la interpretación de trastornos triples:
• pH 7.22 + pCO2 90 = acidosis respiratoria (aguda sobre crónica en EPOC).
• Anion gap = 142 - (82 + 36) = 24 → acidosis metabólica de gap elevado (láctica/urémica).
• HCO3 36 es excesivo vs esperado (~12 con pCO2 90) → alcalosis metabólica superpuesta (furosemida, contracción).
• Delta gap revela alcalosis oculta cuando HCO3 parece "compensado".

Por lo tanto:
El diagnóstico es trastorno triple: acidosis respiratoria aguda sobre crónica + alcalosis metabólica por furosemida + acidosis metabólica de anion gap elevado.

¿Por qué la opción B es la respuesta correcta?
Identifica correctamente los tres componentes: acidosis respiratoria, alcalosis metabólica hipoclorémica por diuréticos, y acidosis metabólica de gap elevado (AG 24).

¿Por qué fallan las otras opciones?
Opción A (acidosis respiratoria pura): error novato al ignorar electrolitos y anion gap.
Opción C (acidosis metabólica hiperclorémica): Cl está bajo (82), no alto; el gap está elevado.
Opción D (alcalosis metabólica primaria): el pH está ácido (7.22), no alcalino.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"EPOC + pCO2 alto" con acidosis respiratoria pura y se detienen ahí.
Pero el examen exige calcular anion gap y correlacionar con diuréticos y electrolitos.
Aquí el dato decisivo es:
HCO3 36 con pCO2 90 (esperado ~12) + AG 24 + Cl- 82 + K+ 2.5 = trastorno triple.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar trastorno respiratorio (pH + pCO2).
2. Calcular anion gap SIEMPRE.
3. Comparar HCO3 observado vs esperado (delta gap).
4. Correlacionar con medicamentos (furosemida) y contexto clínico.

Perlas de examen
✅ Siempre calcular anion gap aunque el pH sugiera trastorno respiratorio puro.
✅ Delta gap revela alcalosis metabólica oculta cuando HCO3 está "alto".
✅ Hipokalemia + Cl bajo + furosemida = alcalosis de contracción superpuesta.
✅ EPOC + furosemida + pH 7.22 + pCO2 90 = calcula SIEMPRE anion gap.
✅ pH 7.40 puede ocultar trastornos opuestos que se cancelan.
✅ Encefalopatía hipercápnica explica somnolencia y mioclonías.

Referencias
• ACP Acid-Base Disorders Guidelines.
• SHM Critical Care Acid-Base Management.
• UpToDate: Simple and mixed acid-base disorders.`,
  },
  {
    id: "dr-q-43",
    examArea: "Medicina Interna / Medicina Hospitalaria / Infectología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "hap", "idsa"],
    statement:
      "Hombre de 72 años, día 6 post-colecistectomía por tumor de colon. Fiebre 39 °C, tos purulenta, desaturación. Rx: infiltrado alveolar basal derecho nuevo. HAP no asociada a ventilador. Según IDSA HAP/VAP, ¿recomendación para inicio de ATB antipseudomónico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "BAL invasivo con sTREM-1; diferir ATB hasta positividad.",
      },
      {
        id: "B",
        label: "B",
        text: "ATB empírico por criterios clínicos-radiológicos; guiar con muestras respiratorias no invasivas (esputo) antes/después de 1.ª dosis según protocolo local.",
      },
      { id: "C", label: "C", text: "Iniciar ATB solo si procalcitonina >0.5 ng/mL." },
      { id: "D", label: "D", text: "Profilaxis con fluoroquinolonas en todo postoperatorio abdominal." },
    ],
    correctOptionId: "B",
    explanation:
      "IDSA: usar criterios clínicos solos para decidir inicio de ATB, no sTREM-1 en BAL. HAP no-VAP: cultivos no invasivos (esputo espontáneo/inducido) preferidos sobre broncoscopia agresiva. ATB empírico precoz (cefepime/pip-tazo) y desescalar a 72 h.",
    keyPoints: [
      "Cuando veas: fiebre + tos purulenta + infiltrado alveolar nuevo en paciente hospitalizado no ventilado.",
      "Debes pensar en: HAP no ventilatoria → ATB empírico por criterios clínicos-radiológicos + cultivo no invasivo.",
      "IDSA: criterios clínicos + Rx deciden inicio de ATB; no sTREM-1 en BAL ni procalcitonina para negar inicio.",
      "Mortalidad aumenta si se retrasa ATB; desescalar a 72 h según antibiograma.",
      "Tema: Neumonía asociada a atención en salud (HAP).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa el abordaje de HAP no ventilatoria según guías IDSA/ATS.

La clave no es diferir antibióticos hasta BAL con sTREM-1 ni procalcitonina.
La clave es:
Iniciar ATB empírico antipseudomónico por criterios clínicos-radiológicos y guiar con cultivos no invasivos.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 72 años, día 6 post-colecistectomía por tumor de colon.
• Fiebre 39 °C, tos purulenta, desaturación.
• Rx: infiltrado alveolar basal derecho nuevo (consolidación hospitalaria).
• HAP no asociada a ventilador mecánico.

Recordemos las guías IDSA/ATS para HAP/VAP:
• Usar criterios clínicos + radiológicos para decidir inicio de ATB, no sTREM-1 en BAL.
• Mortalidad aumenta si se retrasa ATB; empírico antipseudomónico (cefepime/pip-tazo).
• Cultivos no invasivos preferidos: esputo espontáneo/inducido sobre broncoscopia agresiva.
• Procalcitonina útil para suspender ATB, no para negar inicio en sepsis respiratoria clara.
• Desescalar a 72 h según antibiograma.

Por lo tanto:
La recomendación es ATB empírico por criterios clínicos-radiológicos, guiado con muestras respiratorias no invasivas (esputo) según protocolo local.

¿Por qué la opción B es la respuesta correcta?
Inicia ATB empírico basado en criterios clínicos-radiológicos y obtiene cultivos no invasivos (esputo) antes/después de la primera dosis, alineado con IDSA.

¿Por qué fallan las otras opciones?
Opción A (BAL con sTREM-1 antes de ATB): sTREM-1 no recomendado vs juicio clínico; retrasa tratamiento mortal.
Opción C (ATB solo si procalcitonina >0.5): no negar inicio en paciente febril con infiltrado nuevo y desaturación.
Opción D (profilaxis con fluoroquinolonas en todo post-op): no es profilaxis estándar; genera resistencia.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Neumonía hospitalaria" con broncoscopia invasiva y biomarcadores antes de antibióticos.
Pero el examen exige priorizar criterios clínicos y no retrasar ATB empírico.
Aquí el dato decisivo es:
Fiebre + infiltrado nuevo + desaturación post-op = HAP → ATB empírico YA, esputo para guiar.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar HAP con criterios clínicos + Rx (infiltrado nuevo).
2. Obtener cultivo no invasivo (esputo) si es posible.
3. ATB empírico antipseudomónico sin demora.
4. Desescalar a 72 h según antibiograma.

Perlas de examen
✅ HAP: clínica + Rx > biomarcadores invasivos para decidir ATB.
✅ sTREM-1 en BAL no recomendado vs juicio clínico (IDSA).
✅ Procalcitonina útil para suspender, no para negar inicio en sepsis respiratoria.
✅ Mortalidad aumenta si ATB se retrasa en HAP.
✅ Cultivo no invasivo + ATB empírico rápido → desescalar 72 h.
✅ Profilaxis con fluoroquinolonas en todo post-op no es estándar.

Referencias
• IDSA/ATS Guidelines for HAP and VAP.
• SHM Hospital-Acquired Pneumonia Management.
• UpToDate: Treatment of hospital-acquired and ventilator-associated pneumonia.`,
  },
  {
    id: "dr-q-44",
    examArea: "Medicina Interna / Medicina Hospitalaria / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "aki", "akd", "kdigo"],
    statement:
      "Hombre de 58 años, día 18 post-pielonefritis enfisematosa y choque séptico. AKI KDIGO 3 al ingreso (Cr pico 4.5, oliguria). Infección resuelta; diuresis 1.5 L/día; Cr estancada 2.1 mg/dL (TFGe 35) durante 1 semana. Cr basal 0.8. ¿Diagnóstico nefrológico actual y conducta preventiva al egreso según KDIGO 2026?",
    options: [
      { id: "A", label: "A", text: "ERC estadio 3b; programar fístula AV temprana." },
      { id: "B", label: "B", text: "Falla prerrenal persistente; albúmina + cristaloides hasta Cr 0.8." },
      {
        id: "C",
        label: "C",
        text: "Enfermedad renal aguda (AKD): continuo entre AKI y ERC (7–90 días); seguimiento estrecho y evitar nefrotóxicos por riesgo de cronicidad.",
      },
      { id: "D", label: "D", text: "AKI persistente hasta 6 meses post-evento." },
    ],
    correctOptionId: "C",
    explanation:
      "KDIGO 2026 formaliza AKD: alteración renal funcional/estructural 7–90 días post-AKI. ERC requiere >90 días. Cr estancada 2.1 con diuresis conservada = fase subaguda post-isquémica, no prerrenal (fluidos empeorarían congestión). Seguimiento nefrológico y deprescripción nefrotóxica.",
    keyPoints: [
      "Cuando veas: día 18 post-AKI severo con creatinina estancada y diuresis conservada.",
      "Debes pensar en: AKD (enfermedad renal aguda 7–90 días post-AKI) → seguimiento estrecho y evitar nefrotóxicos.",
      "AKI <7 días; AKD 7–90 días; ERC >90 días.",
      "No es prerrenal: fluidos empeorarían congestión; es daño estructural subagudo post-isquémico.",
      "Tema: Transición AKI → AKD / KDIGO 2026.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa la transición AKI → AKD según KDIGO 2026 en un sobreviviente de sepsis con daño renal persistente.

La clave no es clasificar como ERC ni tratar como falla prerrenal con expansión volémica.
La clave es:
Reconocer AKD como fase subaguda post-AKI que requiere protección nefronas restantes y seguimiento estrecho.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 58 años, día 18 post-pielonefritis enfisematosa y choque séptico.
• AKI KDIGO 3 al ingreso (Cr pico 4.5, oliguria); infección resuelta.
• Diuresis 1.5 L/día pero Cr estancada 2.1 mg/dL (TFGe 35) durante 1 semana.
• Cr basal 0.8: riñón no ha normalizado pese a diuresis conservada.

Recordemos la clasificación KDIGO 2026:
• AKI: alteración renal aguda <7 días.
• AKD (Acute Kidney Disease): alteración renal funcional/estructural 7–90 días post-AKI.
• ERC: alteración persistente >90 días.
• AKD = ventana crítica para prevenir cronicidad (fibrosis/inflamación temprana).

Por lo tanto:
El diagnóstico es enfermedad renal aguda (AKD) en fase subaguda post-isquémica; la conducta es seguimiento estrecho y evitar nefrotóxicos por riesgo de cronicidad.

¿Por qué la opción C es la respuesta correcta?
Identifica AKD como continuo entre AKI y ERC (7–90 días), indica seguimiento estrecho y evitar nefrotóxicos por riesgo de progresión a ERC.

¿Por qué fallan las otras opciones?
Opción A (ERC estadio 3b + fístula AV): requiere >90 días de alteración persistente; es demasiado pronto en día 18.
Opción B (falla prerrenal + albúmina/critaloides hasta Cr 0.8): diuresis conservada descarta prerrenal; sobrecarga empeora.
Opción D (AKI persistente hasta 6 meses): AKD formalmente es 7–90 días según KDIGO 2026.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Creatinina aún elevada con diuresis normal" con falla prerrenal que requiere más volumen.
Pero el examen exige distinguir AKD post-isquémica de prerrenal en día 18 post-AKI severo.
Aquí el dato decisivo es:
Día 18 + Cr estancada 2.1 + diuresis 1.5 L/día = AKD subaguda, no prerrenal ni ERC.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Clasificar según tiempo: AKI (<7 d), AKD (7–90 d), ERC (>90 d).
2. AKD = ventana crítica para prevenir cronicidad.
3. No sobrecargar con volumen en daño estructural subagudo.
4. Deprescripción nefrotóxicos + seguimiento nefrológico al egreso.

Perlas de examen
✅ AKI <7 días; AKD 7–90 días; ERC >90 días.
✅ AKD = ventana crítica para prevenir ERC.
✅ Sobreviviente AKI severo en día 18 con Cr alta = AKD, no curado.
✅ Diuresis conservada no descarta daño estructural persistente.
✅ No sobrecargar con volumen en AKD post-isquémica.
✅ Prohibir AINEs; ajustar fármacos; control ambulatorio nefrológico.

Referencias
• KDIGO Clinical Practice Guideline for AKI and AKD 2026 Update.
• SHM Post-AKI Care Guidelines.
• UpToDate: Definition and staging of acute kidney injury in adults.`,
  },
  {
    id: "dr-q-45",
    examArea: "Medicina Interna / Medicina Hospitalaria / Neumología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "tep", "chest", "subsegmentario"],
    statement:
      "Mujer de 45 años, día 5 post-colecistectomía complicada con íleo paralítico. Dolor pleurítico leve al deambular; FC 80, SpO2 96%, hemodinámicamente estable. AngioTAC: defecto subsegmentario aislado LID; sin sobrecarga VD. Doppler EEII negativo bilateral. Según CHEST, ¿abordaje de máxima calidad?",
    options: [
      { id: "A", label: "A", text: "Anticoagulación terapéutica HBPM puente a warfarina." },
      { id: "B", label: "B", text: "Filtro de vena cava por contraindicación relativa post-cirugía." },
      {
        id: "C",
        label: "C",
        text: "Observación clínica estrecha sin anticoagulación sistémica: TEP subsegmentario aislado, estable, sin TVP proximal.",
      },
      { id: "D", label: "D", text: "Trombólisis sistémica con alteplasa." },
    ],
    correctOptionId: "C",
    explanation:
      "CHEST: margen para observación exclusiva en TEP subsegmentario aislado, paciente estable, bajo riesgo clínico, Doppler negativo. Anticoagulación post-op reciente: riesgo sangrado puede superar beneficio. Filtro VCI solo con TVP proximal + contraindicación absoluta a AC.",
    keyPoints: [
      "Cuando veas: TEP subsegmentario aislado en paciente estable post-operatorio con Doppler EEII negativo.",
      "Debes pensar en: observación clínica estrecha sin anticoagulación sistémica según CHEST.",
      "No todo defecto en angioTAC exige anticoagulación automática.",
      "Anticoagulación post-op reciente: riesgo sangrado puede superar beneficio en TEP pequeño.",
      "Tema: TEP subsegmentario incidental / CHEST.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa el abordaje de TEP subsegmentario incidental en un paciente estable post-operatorio según guías CHEST.

La clave no es anticoagular automáticamente todo TEP detectado en angioTAC.
La clave es:
Estratificar riesgo clínico; en subsegmentario aislado, estable, sin TVP proximal, la observación es opción válida.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 45 años, día 5 post-colecistectomía complicada con íleo paralítico.
• Dolor pleurítico leve al deambular; FC 80, SpO2 96%, hemodinámicamente estable.
• AngioTAC: defecto subsegmentario aislado en LID; sin sobrecarga de VD.
• Doppler EEII negativo bilateral: sin TVP proximal.

Recordemos las guías CHEST para TEP subsegmentario:
• Tomógrafos de alta resolución aumentan diagnósticos de microembolia incidental.
• Margen para observación en TEP subsegmentario aislado, paciente estable, bajo riesgo clínico.
• Sin TVP proximal en Doppler: menor beneficio de anticoagulación.
• Anticoagulación post-op reciente: riesgo sangrado puede superar beneficio en TEP pequeño.
• Filtro VCI solo con TVP proximal + contraindicación absoluta a AC, no como profilaxis.

Por lo tanto:
El abordaje de máxima calidad es observación clínica estrecha sin anticoagulación sistémica, dado TEP subsegmentario aislado, estabilidad hemodinámica y Doppler negativo.

¿Por qué la opción C es la respuesta correcta?
Aplica el margen CHEST para observación exclusiva en TEP subsegmentario aislado con paciente estable, bajo riesgo clínico y sin TVP proximal.

¿Por qué fallan las otras opciones?
Opción A (HBPM puente a warfarina): anticoagulación automática no indicada en subsegmentario estable sin TVP.
Opción B (filtro de vena cava): contraindicación relativa post-cirugía no justifica filtro sin TVP proximal.
Opción D (trombólisis sistémica): contraindicada en TEP subsegmentario hemodinámicamente estable.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Cualquier TEP en TAC" con anticoagulación terapéutica obligatoria.
Pero el examen exige estratificar según tamaño, estabilidad hemodinámica y presencia de TVP.
Aquí el dato decisivo es:
Subsegmentario aislado + estable + Doppler (-) + post-op reciente = observación, no AC a ciegas.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar TEP con angioTAC y evaluar extensión (segmentario vs subsegmentario).
2. Evaluar estabilidad hemodinámica y sobrecarga de VD.
3. Doppler EEII para descartar TVP proximal.
4. Decidir anticoagulación vs observación según CHEST.

Perlas de examen
✅ No todo TEP en TAC exige anticoagulación automática.
✅ Subsegmentario + estable + sin TVP = observación seleccionada (CHEST).
✅ TEP subsegmentario aislado + piernas limpias + estable = observar.
✅ Anticoagulación post-op reciente: balance sangrado vs beneficio en TEP pequeño.
✅ Filtro VCI: TVP proximal + AC contraindicada, no profilaxis.
✅ Trombólisis contraindicada en TEP subsegmentario estable.

Referencias
• CHEST Antithrombotic Therapy for VTE Disease Guidelines.
• SHM VTE Management in Hospitalized Patients.
• UpToDate: Treatment of acute pulmonary embolism in adults.`,
  },
  {
    id: "dr-q-46",
    examArea: "Medicina Interna / Medicina Hospitalaria / Cardiología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "ic", "wrf", "diureticos"],
    statement:
      "Hombre de 78 años, IC descompensada perfil B (FEVI 35%). Día 3: peso 80 kg (-5 kg), duerme plano, disnea casi resuelta; aún edema maleolar leve. Creatinina 1.9 (basal 1.4), BUN 45. Buena perfusión periférica. Residente sugiere suspender furosemida y dar SF por 'AKI prerrenal'. ¿Interpretación y orden correcta?",
    options: [
      { id: "A", label: "A", text: "Residente correcto: depleción; suspender diuréticos." },
      { id: "B", label: "B", text: "Cardiorenal irreversible; hemodiálisis ultrafiltrante hoy." },
      {
        id: "C",
        label: "C",
        text: "Empeoramiento renal permisivo durante descongestión efectiva; continuar diuréticos mientras persista congestión clínica.",
      },
      { id: "D", label: "D", text: "Nefritis intersticial por furosemida; esteroides IV." },
    ],
    correctOptionId: "C",
    explanation:
      "Worsening renal function (WRF) durante descongestión exitosa (↓5 kg, ↓disnea, aún edema) es frecuente y se asocia a mejor pronóstico si se completa descongestión. Suspender diuréticos por Cr +30% con congestión residual empeora outcomes. Diálisis no indicada con buena diuresis y Cr 1.9.",
    keyPoints: [
      "Cuando veas: IC descompensada con ↓ peso (-5 kg), ↓ disnea, aún edema + Cr sube ~30% con buena perfusión.",
      "Debes pensar en: empeoramiento renal permisivo (WRF) durante descongestión efectiva → continuar diuréticos.",
      "Trata la clínica, no solo la creatinina; ↑ Cr hasta ~30–50% tolerable si perfundido y aún congesto.",
      "Suspender diuréticos por Cr +30% con congestión residual empeora outcomes.",
      "Tema: WRF permisivo en IC / síndrome cardiorenal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa el empeoramiento renal permisivo (WRF) durante descongestión de IC: tratar la clínica, no solo el número de creatinina.

La clave no es suspender diuréticos y dar volumen por una creatinina que sube levemente.
La clave es:
Reconocer descongestión efectiva en curso con WRF permisivo y continuar diuréticos mientras persista congestión clínica.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 78 años, IC descompensada perfil B (FEVI 35%), día 3 de hospitalización.
• Peso 80 kg (-5 kg), duerme plano, disnea casi resuelta; aún edema maleolar leve.
• Creatinina 1.9 (basal 1.4, +36%), BUN 45; buena perfusión periférica.
• Descongestión efectiva en curso con empeoramiento renal transitorio (fisiología cardiorenal).

Recordemos el concepto de WRF permisivo:
• WRF durante descongestión exitosa (↓ peso, ↓ disnea, aún edema) es frecuente y se asocia a mejor pronóstico si se completa descongestión.
• ↓ precarga → ↓ filtración transitoria durante diuresis agresiva.
• Aún hay edema = aún hay congestión venosa renal → continuar furosemida.
• ↑ Cr hasta ~30–50% tolerable si perfundido y clínicamente descongestionando.

Por lo tanto:
La interpretación correcta es empeoramiento renal permisivo durante descongestión efectiva; continuar diuréticos mientras persista congestión clínica.

¿Por qué la opción C es la respuesta correcta?
Identifica WRF permisivo con descongestión en curso y prioriza completar descongestión sobre tratar el número de creatinina aisladamente.

¿Por qué fallan las otras opciones?
Opción A (suspender diuréticos + SF): no hay depleción; hay descongestión en curso con WRF permisivo.
Opción B (hemodiálisis ultrafiltrante): no indicada con buena diuresis, Cr 1.9 y perfusión conservada.
Opción D (nefritis intersticial + esteroides): no hay fiebre, rash ni eosinofilia; es fisiología cardiorenal.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Creatinina sube = AKI prerrenal = suspender diuréticos y dar volumen."
Pero el examen exige integrar clínica: pierde peso, respira mejor, aún edema = descongestión en curso.
Aquí el dato decisivo es:
↓5 kg + disnea casi resuelta + edema residual + Cr +36% con buena perfusión = WRF permisivo, no depleción.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar congestión clínica (peso, edema, disnea, ortopnea).
2. Interpretar cambio de creatinina en contexto de descongestión.
3. Si descongestiona efectivamente con WRF leve → continuar diuréticos.
4. Reevaluar diariamente; diálisis solo si falla manejo médico o uremia refractaria.

Perlas de examen
✅ Pierde peso + respira mejor + Cr sube leve + aún edema = continúa diuréticos.
✅ WRF permisivo se asocia a mejor pronóstico si se completa descongestión.
✅ Trata la clínica, no solo la creatinina.
✅ ↑ Cr ~30–50% tolerable si perfundido y aún congesto.
✅ Suspender diurético por número = perpetuar congestión venosa renal.

Referencias
• ACC/AHA Heart Failure Guidelines.
• HFA Consensus on Cardiorenal Syndrome.
• UpToDate: Worsening renal function during decongestion in heart failure.`,
  },
  {
    id: "dr-q-47",
    examArea: "Medicina Interna / Medicina Hospitalaria / Infectología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "c_diff", "megacolon"],
    statement:
      "Mujer de 65 años, día 14 meropenem por neumonía necrotizante. Diarrea acuosa masiva; día 16: diarrea cesa, abdomen distendido en tabla, doloroso. PA 80/45, FC 130, Temp 39.5 °C. Leucocitos 35,000, lactato 4.5, Cr 2.5. Toxina C. difficile (+). Rx: megacolon (colon transverso 10 cm). ¿Esquema de rescate empírico mientras valoración quirúrgica?",
    options: [
      { id: "A", label: "A", text: "Metronidazol IV en monoterapia." },
      {
        id: "B",
        label: "B",
        text: "Vancomicina oral/NG 500 mg c/6 h + metronidazol IV 500 mg c/8 h + cirugía urgente.",
      },
      { id: "C", label: "C", text: "Loperamida alta dosis + fidaxomicina oral." },
      { id: "D", label: "D", text: "Trasplante fecal inmediato como 1.ª línea." },
    ],
    correctOptionId: "B",
    explanation:
      "C. difficile fulminante (hipotensión, megacolon, íleo): vancomicina enteral alta dosis (PO/NG/enema retención) + metronidazol IV (única indicación dual). Metronidazol solo es insuficiente. Loperamida contraindicada (retención toxinas). FMT para recurrencia, no choque agudo.",
    keyPoints: [
      "Cuando veas: post-ATB + diarrea que cesa + abdomen distendido en tabla + toxina C. diff (+).",
      "Debes pensar en: C. difficile fulminante con íleo/megacolon tóxico → vanco enteral + metro IV + cirugía.",
      "Diarrea que para + abdomen distendido = íleo/megacolon, no mejoría clínica.",
      "Loperamida contraindicada en C. diff activo (retención de toxinas → perforación).",
      "Tema: C. difficile fulminante / megacolon tóxico (IDSA/SHEA).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa C. difficile fulminante con megacolon: cuando la diarrea cesa y el abdomen se distiende, es íleo/megacolon tóxico, no mejoría.

La clave no es metronidazol IV en monoterapia ni antimotilidad.
La clave es:
Vancomicina enteral alta dosis (PO/NG/enema) + metronidazol IV (única indicación dual) mientras se valora cirugía urgente.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 65 años, día 14 meropenem por neumonía necrotizante.
• Diarrea acuosa masiva; día 16: diarrea cesa, abdomen distendido en tabla, doloroso.
• Shock séptico: PA 80/45, FC 130, Temp 39.5 °C, lactato 4.5, leucocitos 35,000, Cr 2.5.
• Toxina C. difficile (+); Rx: megacolon (colon transverso 10 cm).

Recordemos C. difficile fulminante (IDSA/SHEA):
• Diarrea que para + abdomen distendido = íleo/megacolon tóxico (no "mejoría").
• Fulminante: vancomicina enteral alta dosis + metronidazol IV (única indicación de terapia dual).
• Íleo impide tránsito de vanco PO → metro IV aporta excreción biliar/intestinal.
• Megacolon + shock = colectomía en evaluación urgente.
• Loperamida contraindicada (retención de toxinas → perforación).

Por lo tanto:
El esquema de rescate empírico es vancomicina oral/NG 500 mg c/6 h + metronidazol IV 500 mg c/8 h + cirugía urgente en evaluación.

¿Por qué la opción B es la respuesta correcta?
Aplica terapia dual IDSA/SHEA para C. diff fulminante con megacolon e íleo, donde vanco enteral sola no alcanza el colon y metro IV complementa vía biliar.

¿Por qué fallan las otras opciones?
Opción A (metronidazol IV solo): insuficiente en C. diff fulminante/megacolon.
Opción C (loperamida + fidaxomicina): antimotilidad proscrita en C. diff activo; fidaxomicina no es 1.ª línea en fulminante.
Opción D (trasplante fecal inmediato): indicado en recurrencia, no en choque agudo con megacolon.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Diarrea cesa = mejoría clínica."
Pero en C. diff post-ATB, cese de diarrea + distensión = íleo/megacolon tóxico.
Aquí el dato decisivo es:
Post-ATB + diarrea que para + barriga en tabla + megacolon en Rx = fulminante, no alivio.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar C. diff en diarrea post-ATB; confirmar toxina.
2. Si fulminante (shock, megacolon, íleo): vanco enteral + metro IV.
3. Consulta quirúrgica urgente si megacolon o deterioro.
4. Nunca antimotilidad; FMT solo en recurrencia, no en choque agudo.

Perlas de examen
✅ Diarrea post-ATB que se detiene y barriga se infla = megacolon, no mejoría.
✅ Fulminante: vanco enteral + metro IV (única indicación dual).
✅ Íleo impide tránsito de vanco PO → añadir metro IV.
✅ Loperamida = perforación en C. diff activo.
✅ Megacolon + shock = colectomía en evaluación.

Referencias
• IDSA/SHEA C. difficile Clinical Practice Guidelines.
• UpToDate: Clostridioides difficile in adults — Treatment.
• SHEA Infection Prevention Guidelines.`,
  },
  {
    id: "dr-q-48",
    examArea: "Medicina Interna / Medicina Hospitalaria / Hepatología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "hrs", "cirrosis", "terlipresina"],
    statement:
      "Hombre de 52 años, cirrosis alcohólica Child C. Paracentesis evacuatoria 9 L sin albúmina post-procedimiento. Día 3: anuria; PA 110/70. Cr 3.2 (basal 0.8), Na 126, Na urinario <10, FENa 0.1%, sedimento limpio. Eco renal normal. Síndrome hepatorenal-AKI precipitado por paracentesis sin albúmina. ¿Vasoconstrictor de elección según EASL/AASLD?",
    options: [
      { id: "A", label: "A", text: "Furosemida en infusión continua." },
      { id: "B", label: "B", text: "Terlipresina IV continua + albúmina humana." },
      { id: "C", label: "C", text: "Dopamina a dosis renal." },
      { id: "D", label: "D", text: "Diálisis peritoneal urgente." },
    ],
    correctOptionId: "B",
    explanation:
      "HRS-AKI: vasodilatación espláncnica + hipovolemia efectiva; riñón estructuralmente intacto (FENa <1%, Na urinario bajo). Terlipresina + albúmina revierte perfusión renal. Diuréticos empeoran isquemia. Dopamina 'renal' ineficaz.",
    keyPoints: [
      "Cuando veas: cirrosis Child C + paracentesis >5 L sin albúmina + anuria + Na urinario <10 + FENa <1%.",
      "Debes pensar en: HRS-AKI precipitado por disfunción circulatoria post-paracentesis → terlipresina + albúmina.",
      "Riñón estructuralmente intacto: sedimento limpio, eco normal, orina concentrada.",
      "Albúmina 20 g/L por cada >5 L evacuados previene este cuadro.",
      "Tema: HRS-AKI post-paracentesis (EASL/AASLD).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa síndrome hepatorenal-AKI precipitado por paracentesis sin albúmina: anuria con FENa bajo = riñón hemodinámicamente desconectado, no NTA.

La clave no es diuréticos, dopamina renal ni diálisis como primera línea.
La clave es:
Terlipresina IV continua + albúmina humana para revertir vasodilatación espláncnica y restaurar perfusión renal.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 52 años, cirrosis alcohólica Child C.
• Paracentesis evacuatoria 9 L sin albúmina post-procedimiento (error iatrogénico).
• Día 3: anuria; PA 110/70 (presión preservada pero perfusión renal colapsada).
• Cr 3.2 (basal 0.8), Na 126, Na urinario <10, FENa 0.1%, sedimento limpio, eco renal normal.

Recordemos HRS-AKI (EASL/AASLD):
• Paracentesis >5 L sin albúmina → disfunción circulatoria post-paracentesis → HRS-AKI.
• Vasodilatación espláncnica + hipovolemia arterial efectiva; riñón estructuralmente intacto.
• FENa <1%, Na urinario bajo, sedimento limpio = fallo hemodinámico, no necrosis tubular.
• Terlipresina + albúmina revierte perfusión renal; albúmina 20 g/L si >5 L evacuados previene.

Por lo tanto:
El vasoconstrictor de elección es terlipresina IV continua + albúmina humana.

¿Por qué la opción B es la respuesta correcta?
Aplica el estándar EASL/AASLD para HRS-AKI: terlipresina esplácnica + reposición con albúmina.

¿Por qué fallan las otras opciones?
Opción A (furosemida en infusión): empeora isquemia renal en HRS.
Opción C (dopamina a dosis renal): ineficaz; no revierte vasodilatación espláncnica.
Opción D (diálisis peritoneal urgente): no trata la causa hemodinámica; terlipresina primero.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Anuria + Cr alta en cirrótico = NTA → diuréticos o diálisis."
Pero FENa <1% + Na urinario <10 + sedimento limpio = HRS hemodinámico.
Aquí el dato decisivo es:
Paracentesis 9 L sin albúmina + anuria + orina concentrada = HRS-AKI post-paracentesis.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Paracentesis >5 L → albúmina 20 g/L (prevención).
2. Si HRS-AKI: terlipresina + albúmina.
3. No diuréticos ni dopamina renal.
4. Diálisis solo si falla vasoconstrictor o indicaciones absolutas.

Perlas de examen
✅ Cirrosis + anuria + Na urinario bajo = HRS, no NTA.
✅ Terlipresina esplácnica + albúmina = estándar EASL/AASLD.
✅ Paracentesis >5 L sin albúmina = error iatrogénico prevenible.
✅ Furosemida empeora isquemia renal en HRS.
✅ Riñón "desconectado" hemodinámicamente, no necrosis tubular.

Referencias
• EASL Clinical Practice Guidelines on Ascites and HRS.
• AASLD Practice Guidance on Ascites and HRS.
• UpToDate: Hepatorenal syndrome in adults.`,
  },
  {
    id: "dr-q-49",
    examArea: "Medicina Interna / Medicina Hospitalaria / Endocrinología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "hiponatremia", "siadh", "sal_hipertónica"],
    statement:
      "Mujer de 65 años con carcinoma microcítico de pulmón. Convulsión tónico-clónica en triage. Euvolémica. Na+ 108, Osm plasmática 230, Osm urinaria 600, Na urinario 60. TSH/cortisol normales. SIADH paraneoplásico con hiponatremia severa sintomática. ¿Intervención inmediata que detiene edema cerebral?",
    options: [
      { id: "A", label: "A", text: "Restricción hídrica <800 mL/día + tolvaptán oral." },
      {
        id: "B",
        label: "B",
        text: "Bolo IV 100–150 mL SSH 3% en 10–20 min (repetir si persiste), meta +4 a 6 mEq/L en primeras horas; luego corrección ≤8 mEq/L/24 h.",
      },
      { id: "C", label: "C", text: "SF 0.9% 200 mL/h para diluir ADH circulante." },
      { id: "D", label: "D", text: "Corrección rápida a Na 135 mEq/L en 12 h con bolos continuos." },
    ],
    correctOptionId: "B",
    explanation:
      "Hiponatremia sintomática grave (convulsiones): bolos SSH 3% 100–150 mL para ↑ Na 4–6 mEq/L rápido y deshinchar cerebro. Restricción/tolvaptán demasiado lentos. SF 0.9% en SIADH puede empeorar (desalinización). Corrección >8 mEq/L/24 h → mielinolisis osmótica.",
    keyPoints: [
      "Cuando veas: hiponatremia severa (Na <120) + convulsión/coma + SIADH euvolémica confirmada.",
      "Debes pensar en: emergencia neurológica → bolos SSH 3% 100–150 mL (+4–6 mEq/L en horas), luego ≤8 mEq/L/24 h.",
      "SF 0.9% en SIADH puede empeorar por desalinización.",
      "Restricción hídrica/tolvaptán demasiado lentos en crisis aguda.",
      "Tema: Hiponatremia severa sintomática / SIADH paraneoplásico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa hiponatremia severa sintomática por SIADH paraneoplásico: convulsión con Na+ 108 exige bolos de SSH 3% inmediatos.

La clave no es restricción hídrica, tolvaptán ni SF 0.9%.
La clave es:
Bolo IV 100–150 mL SSH 3% en 10–20 min (repetir si persiste) para ↑ Na 4–6 mEq/L en primeras horas y deshinchar el cerebro.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 65 años con carcinoma microcítico de pulmón (SIADH paraneoplásico).
• Convulsión tónico-clónica en triage; euvolémica al examen.
• Na+ 108, osmolalidad plasmática 230, osmolalidad urinaria 600, Na urinario 60.
• TSH y cortisol normales: SIADH euvolémica con hiponatremia severa sintomática.

Recordemos manejo de hiponatremia sintomática grave:
• Na+ <120 + convulsión/coma = emergencia neurológica por edema cerebral.
• Bolos SSH 3% 100–150 mL en 10–20 min; meta +4 a 6 mEq/L en primeras horas.
• Luego corrección ≤8 mEq/L/24 h para evitar mielinolisis osmótica.
• Restricción hídrica/tolvaptán: manejo crónico, no detiene edema cerebral agudo.
• SF 0.9% en SIADH puede empeorar (desalinización → Na más bajo).

Por lo tanto:
La intervención inmediata es bolos IV de SSH 3% con meta de corrección controlada (+4–6 mEq/L agudo, ≤8 mEq/L/24 h).

¿Por qué la opción B es la respuesta correcta?
Aplica el protocolo de hiponatremia sintomática grave: bolos SSH 3% para deshinchar cerebro rápidamente con límite de corrección posterior.

¿Por qué fallan las otras opciones?
Opción A (restricción + tolvaptán): manejo crónico; demasiado lento en crisis aguda.
Opción C (SF 0.9% 200 mL/h): en SIADH puede bajar Na aún más por desalinización.
Opción D (corrección rápida a Na 135 en 12 h): riesgo de mielinolisis osmótica (locked-in).

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"SIADH = restricción hídrica siempre."
Pero convulsión/coma cambia la prioridad: deshinchar cerebro primero.
Aquí el dato decisivo es:
Na+ 108 + convulsión = SSH 3% a chorro (+5 puntos rápido), luego despacio.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar hiponatremia hipotónica verdadera y volumen (euvolémica).
2. Si sintomática grave: bolos SSH 3% inmediatos.
3. Monitorizar Na+ cada 2–4 h; meta +4–6 mEq/L en horas.
4. Luego corrección ≤8 mEq/L/24 h; manejo crónico de causa (SIADH paraneoplásico).

Perlas de examen
✅ Hiponatremia + convulsión = SSH 3% a chorro (+5 puntos rápido), luego despacio.
✅ Meta aguda: +4–6 mEq/L; luego ≤8 mEq/L/24 h.
✅ SF 0.9% en SIADH puede bajar Na aún más.
✅ Restricción/tolvaptán demasiado lentos en crisis aguda.
✅ Corrección >8 mEq/L/24 h → mielinolisis osmótica.

Referencias
• European/American Hyponatremia Guidelines.
• SHM Hyponatremia Management Guidelines.
• UpToDate: Treatment of hyponatremia in adults.`,
  },
  {
    id: "dr-q-50",
    examArea: "Medicina Interna / Medicina Hospitalaria / Endocrinología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_hospitalaria", "hospitalaria", "dm", "esteroides", "insulina"],
    statement:
      "Hombre de 60 años, crisis asmática grave, transferido de UCI a piso. DM2 en metformina (suspendida). Prednisona 50 mg AM. Glucemias ayunas 110–130 mg/dL; post-almuerzo y 16:00 h 350–400 mg/dL consistentemente. Solo escala móvil insulina regular. Según ADA/SHM, ¿esquema de insulina de mayor impacto fisiológico?",
    options: [
      { id: "A", label: "A", text: "Reiniciar metformina máxima para evitar insulina." },
      { id: "B", label: "B", text: "Insulina glargina nocturna para control uniforme 24 h." },
      {
        id: "C",
        label: "C",
        text: "Insulina NPH matutina junto con prednisona para sincronizar pico hiperglucémico vespertino con pico de NPH.",
      },
      { id: "D", label: "D", text: "Solo sliding scale con lispro vs regular." },
    ],
    correctOptionId: "C",
    explanation:
      "Prednisona matutina: hiperglucemia pico 8–12 h post-dosis (tarde). NPH AM sincroniza pico insulínico con pico esteroide. Glargina plana → hipoglucemia nocturna con ayunas normales. Metformina contraindicada/relativa hospitalizada inestable. Solo sliding scale inadecuado (persigue, no previene).",
    keyPoints: [
      "Cuando veas: prednisona AM + glucemias ayunas normales (110–130) + picos vespertinos 350–400 mg/dL.",
      "Debes pensar en: hiperglucemia esteroidea con pico 8–12 h post-dosis → NPH matutina sincronizada con prednisona.",
      "Glargina nocturna = perfil plano → riesgo hipoglucemia 3 AM con ayunas OK.",
      "Solo sliding scale persigue, no previene picos predecibles.",
      "Tema: Hiperglucemia esteroidea intrahospitalaria (ADA/SHM).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina hospitalaria porque evalúa hiperglucemia esteroidea intrahospitalaria: prednisona matutina produce pico hiperglucémico vespertino que exige NPH matutina, no glargina nocturna.

La clave no es glargina nocturna, metformina ni solo sliding scale.
La clave es:
Insulina NPH matutina junto con prednisona AM para sincronizar pico insulínico con pico hiperglucémico esteroide (8–12 h post-dosis).

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 60 años, crisis asmática grave, transferido de UCI a piso.
• DM2 en metformina (suspendida al ingreso); prednisona 50 mg AM.
• Glucemias ayunas 110–130 mg/dL (normales); post-almuerzo y 16:00 h 350–400 mg/dL consistentemente.
• Solo escala móvil insulina regular (inadecuada: persigue, no previene).

Recordemos hiperglucemia esteroidea (ADA/SHM):
• Glucocorticoides ↑ gluconeogénesis; pico hiperglucémico 8–12 h post-dosis matutina (tarde).
• NPH matutina junto con prednisona AM empareja pico insulínico con pico esteroide.
• Glargina nocturna = perfil plano 24 h → hipoglucemia nocturna con ayunas normales.
• Metformina contraindicada/relativa en hospitalizado inestable.
• Basal-bolus o NPH + corrección; no solo sliding scale.

Por lo tanto:
El esquema de mayor impacto fisiológico es insulina NPH matutina junto con prednisona.

¿Por qué la opción C es la respuesta correcta?
Sincroniza farmacocinéticamente el pico de NPH (~8–12 h) con el pico hiperglucémico vespertino de prednisona matutina.

¿Por qué fallan las otras opciones?
Opción A (metformina máxima): contraindicada/relativa en hospitalizado; no cubre pico vespertino esteroide.
Opción B (glargina nocturna): perfil plano no coincide con pico vespertino; riesgo hipoglucemia 3 AM.
Opción D (solo sliding scale): reactivo, no preventivo; no controla picos predecibles.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"DM hospitalizado = glargina basal nocturna siempre."
Pero el patrón temporal importa: ayunas OK + tarde alta = esteroide AM.
Aquí el dato decisivo es:
Prednisona AM + azúcar alta tarde + ayunas OK = NPH a primera hora con el esteroide.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar patrón temporal de glucemias (ayunas vs tarde).
2. Si esteroide matutino con pico vespertino → NPH AM.
3. Añadir corrección con insulina rápida según escala.
4. Reevaluar al reducir/suspender esteroides.

Perlas de examen
✅ Prednisona AM + azúcar alta tarde = NPH a primera hora con el esteroide.
✅ Esteroides AM → hiperglucemia vespertina, ayunas OK.
✅ Glargina nocturna riesgo hipoglucemia 3 AM en este patrón.
✅ Solo sliding scale inadecuado: persigue, no previene.
✅ Metformina contraindicada/relativa en hospitalizado inestable.

Referencias
• ADA Standards of Care — Inpatient Glycemic Management.
• SHM Glycemic Management Guidelines.
• UpToDate: Management of hyperglycemia in hospitalized patients.`,
  },
  {
    id: "dr-q-51",
    examArea: "Medicina Crítica / UCI / Reanimación",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "sepsis", "andromeda", "perfusion"],
    statement:
      "Mujer de 68 años, día 1 postoperatorio por peritonitis fecal (choque séptico abdominal). Cirrosis Child A. PA 105/65 (PAM 78), FC 95, VM. Norepinefrina 0.1 mcg/kg/min. TRC 2 s, mottling 0. POCUS: VTI normal, VCI 22 mm, variabilidad 5%. Lactato ingreso 6.5 → 6 h después 5.8 (<20% aclaramiento). ScvO2 76%, delta CO2 4 mmHg. Residente propone 1000 mL cristaloides para \"lavar lactato\". ¿Diagnóstico fisiopatológico y orden inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Disoxia celular persistente; reto de fluidos y aumentar vasopresina.",
      },
      {
        id: "B",
        label: "B",
        text: "Hemodinámicamente resucitada y normoperfundida; hiperlactatemia por aclaramiento hepático/adrenérgico; prohibir más fluidos y continuar destete vasopresor.",
      },
      {
        id: "C",
        label: "C",
        text: "Choque distributivo oculto; ScvO2 76% = shunt masivo; iniciar dobutamina.",
      },
      { id: "D", label: "D", text: "Falla VD por sobrecarga; diuréticos en infusión para excretar lactato." },
    ],
    correctOptionId: "B",
    explanation:
      "TRC normal, ScvO2 >70%, delta CO2 <6, PAM adecuada = perfusión restaurada (ANDROMEDA-SHOCK). Lactato puede persistir por beta-2/adrenérgico y aclaramiento hepático (cirrosis). VCI dilatada sin variabilidad = no respondedora a volumen. Más fluidos → edema pulmonar/congestión.",
    keyPoints: [
      "Cuando veas: sepsis post-reanimación con PAM OK, TRC <3 s, ScvO2 >70%, delta CO2 <6 + lactato persistente.",
      "Debes pensar en: hemodinámicamente resucitada y normoperfundida → prohibir más fluidos, continuar destete vasopresor.",
      "Lactato no es único marcador de hipoxia en sepsis post-reanimación (puede ser adrenérgico/hepático).",
      "VCI dilatada sin variabilidad = no respondedora a volumen.",
      "Tema: Fin de reanimación guiada por perfusión clínica (ANDROMEDA-SHOCK).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina crítica porque evalúa el fin de reanimación guiada por perfusión clínica (ANDROMEDA-SHOCK): lactato persistente con TRC normal, ScvO2 >70% y PAM adecuada no justifica más fluidos.

La clave no es perseguir lactato con más cristaloides.
La clave es:
Reconocer perfusión restaurada (TRC, ScvO2, delta CO2, PAM) y prohibir más fluidos mientras se continúa destete vasopresor.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 68 años, día 1 post-op peritonitis fecal (choque séptico abdominal), cirrosis Child A.
• PAM 78, norepinefrina 0.1 mcg/kg/min, TRC 2 s, mottling 0.
• POCUS: VTI normal, VCI 22 mm, variabilidad 5% (euvolemia/no respondedora a volumen).
• Lactato 6.5 → 5.8 en 6 h (<20% aclaramiento); ScvO2 76%, delta CO2 4 mmHg.

Recordemos ANDROMEDA-SHOCK y fin de reanimación:
• TRC <3 s + ScvO2 >70% + delta CO2 <6 + PAM adecuada = perfusión restaurada.
• Hiperlactatemia puede ser aeróbica/adrenérgica + ↓ aclaramiento hepático (cirrosis).
• VCI dilatada sin variabilidad = no respondedora a volumen; más fluidos → edema pulmonar/congestión.
• Lactato no es único marcador de hipoxia en sepsis post-reanimación.

Por lo tanto:
El diagnóstico es hemodinámicamente resucitada y normoperfundida; prohibir más fluidos y continuar destete vasopresor.

¿Por qué la opción B es la respuesta correcta?
Integra marcadores de perfusión clínica cumplidos (TRC, ScvO2, delta CO2) y reconoce lactato persistente sin indicación de más volumen.

¿Por qué fallan las otras opciones?
Opción A (más fluidos + vasopresina): perfusión ya normalizada; VCI no colapsable descarta beneficio de volumen.
Opción C (dobutamina por ScvO2 76%): ScvO2 >70% no indica shunt masivo; IC ya adecuado.
Opción D (diuréticos para "excretar lactato"): no hay sobrecarga VD; el lactato no se excreta con diuréticos.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Lactato alto = más fluidos hasta normalizar."
Pero perfusión clínica normalizada cambia la prioridad.
Aquí el dato decisivo es:
PAM OK + TRC <3 + ScvO2 >70% + delta CO2 <6 = REANIMADA → detén líquidos.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar perfusión clínica (TRC, mottling, diuresis, conciencia).
2. Complementar con ScvO2 y delta CO2.
3. Si objetivos cumplidos → no más fluidos aunque lactato persista.
4. Continuar destete vasopresor y tratar causa.

Perlas de examen
✅ PAM OK + TRC <3 + ScvO2 >70% + delta CO2 <6 = REANIMADA. Detén líquidos.
✅ Lactato no es único marcador de hipoxia en sepsis post-reanimación.
✅ Hiperlactatemia puede ser adrenérgica + ↓ aclaramiento hepático.
✅ VCI 22 mm, variabilidad 5% = euvolemia/no respondedora.
✅ ANDROMEDA-SHOCK: TRC guía segura vs lactato solo.

Referencias
• ANDROMEDA-SHOCK Trial (JAMA).
• Surviving Sepsis Campaign Guidelines.
• ESICM Fluid Stewardship Recommendations.`,
  },
  {
    id: "dr-q-52",
    examArea: "Medicina Crítica / UCI / Ventilación Mecánica",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "auto_peep", "epoc", "vm"],
    statement:
      "Hombre de 65 años, EPOC GOLD D + neumonía, intubado hace 15 min. Post-conexión VM: PA 60/30, FC 140, SpO2 88%. Vt 500 mL, RR 24, flujo 40 L/min, PEEP 5. Ppico 45, Pplat 20. Curva flujo-tiempo expiratorio no llega a cero antes de la siguiente inspiración. POCUS: VD severamente dilatado comprimiendo VI; VCI ingurgitada fija. ¿Diagnóstico y rescate inmediato?",
    options: [
      { id: "A", label: "A", text: "Neumotórax a tensión; toracostomía con aguja 2.º EIC." },
      { id: "B", label: "B", text: "IAM de VD; dobutamina + 1000 mL cristaloides." },
      {
        id: "C",
        label: "C",
        text: "Auto-PEEP severo colapsando retorno venoso y ↑ poscarga VD; desconectar VM transitoriamente y reprogramar (↑ tiempo espiratorio: ↓ FR, ↑ flujo).",
      },
      { id: "D", label: "D", text: "Broncoespasmo crítico; rocuronio + ketamina + aminofilina." },
    ],
    correctOptionId: "C",
    explanation:
      "Flujo expiratorio no a cero = auto-PEEP/hiperinsuflación dinámica. Pplat normal (20) descarta neumotórax/SDRA; Ppico-Pplat elevado = resistencia vía aérea + atrapamiento. Auto-PEEP ↑ presión intratorácica → ↓ retorno venoso, VD dilatado, choque obstructivo. Rescate: desconexión VM, apnea permisiva, ↑ tiempo espiratorio (I:E 1:4-1:5).",
    keyPoints: [
      "Cuando veas: EPOC intubado reciente + hipotensión post-VM + flujo expiratorio que no llega a cero + Pplat normal.",
      "Debes pensar en: auto-PEEP severo colapsando retorno venoso → desconectar VM y reprogramar (↑ tiempo espiratorio).",
      "Pplat normal (20) descarta neumotórax/SDRA; Ppico-Pplat elevado = resistencia + atrapamiento.",
      "Hipotensión post-intubación EPOC → desconectar tubo primero.",
      "Tema: Auto-PEEP y choque obstructivo post-intubación.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina crítica porque evalúa auto-PEEP severo post-intubación en EPOC: flujo expiratorio que no llega a cero + Pplat normal = atrapamiento aéreo, no neumotórax.

La clave no es toracostomía, cristaloides ni broncodilatadores como primera medida.
La clave es:
Desconectar VM transitoriamente y reprogramar (↑ tiempo espiratorio: ↓ FR, ↑ flujo) para aliviar auto-PEEP.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 65 años, EPOC GOLD D + neumonía, intubado hace 15 min.
• Post-conexión VM: PA 60/30, FC 140, SpO2 88%.
• VM: Vt 500 mL, RR 24, flujo 40 L/min → FR alta + flujo bajo = atrapamiento.
• Curva flujo-tiempo expiratorio no llega a cero antes de la siguiente inspiración.
• POCUS: VD severamente dilatado comprimiendo VI; VCI ingurgitada fija; Pplat 20 (normal).

Recordemos auto-PEEP y choque obstructivo:
• Auto-PEEP: flujo no retorna a cero en EPOC/asma.
• Pplat normal descarta neumotórax/SDRA; Ppico-Pplat elevado = resistencia vía aérea + atrapamiento.
• Auto-PEEP ↑ presión intratorácica → ↓ retorno venoso → VD dilatado → choque obstructivo.
• Rescate: desconexión VM transitoria, apnea permisiva, ↑ tiempo espiratorio (I:E 1:4-1:5).

Por lo tanto:
El diagnóstico es auto-PEEP severo colapsando retorno venoso; desconectar VM y reprogramar espiración.

¿Por qué la opción C es la respuesta correcta?
Identifica el patrón de atrapamiento aéreo y aplica rescate ventilatorio inmediato (desconexión + reprogramación).

¿Por qué fallan las otras opciones?
Opción A (neumotórax a tensión): Pplat subiría también; aquí Pplat 20 es normal.
Opción B (IAM de VD + cristaloides): empeoraría congestión; el cuadro es ventilatorio, no cardíaco primario.
Opción D (broncoespasmo + aminofilina): el patrón clave es flujo no a cero, no sibilancias aisladas.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Hipotensión post-intubación = neumotórax a tensión."
Pero Pplat normal y flujo no a cero apuntan a auto-PEEP.
Aquí el dato decisivo es:
Flujo que no llega a cero + hipotensión post-VM en EPOC = desconecta el tubo y reprograma espiración.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Revisar curva flujo-tiempo expiratorio (¿llega a cero?).
2. Si auto-PEEP: desconectar VM, comprimir tórax suavemente.
3. Reprogramar: ↓ FR, ↑ flujo, ↑ tiempo espiratorio.
4. Reconectar y monitorizar hemodinamia.

Perlas de examen
✅ Flujo que no llega a cero + hipotensión post-VM = desconecta el tubo.
✅ Auto-PEEP: flujo no retorna a cero en EPOC/asma.
✅ Pplat normal descarta neumotórax (sube Pplat también).
✅ FR alta + flujo bajo en EPOC = atrapamiento aéreo.
✅ Auto-PEEP transmite presión a VD → interdependencia ventricular → colapso VI.

Referencias
• ESICM/ATS Obstructive Ventilation Guidelines.
• UpToDate: Intrinsic PEEP in adults.
• Marini JJ — Dynamic Hyperinflation.`,
  },
  {
    id: "dr-q-53",
    examArea: "Medicina Crítica / UCI / SDRA",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "sda", "driving_pressure", "prono"],
    statement:
      "Mujer de 40 años, SDRA severo por neumonía viral. VM AC-V: Vt 350 mL (5.5 mL/kg), PEEP 14, FR 28, FiO2 80%. Ppico 38, Pplat 32. GSA: pH 7.28, pCO2 55, PaO2 60 (PaFi 75). Sedación profunda + BNM. ¿Análisis mecánico y conducta mandatoria (Amato/ESICM)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Driving pressure 18 cmH2O (Pplat-PEEP); pronación inmediata ≥16 h/día para homogenizar ventilación y ↓ VILI.",
      },
      { id: "B", label: "B", text: "Pplat >30; reducir PEEP a 5 aceptando hipercapnia extrema." },
      { id: "C", label: "C", text: "Reclutamiento sostenido CPAP 40×40 s como maniobra rutinaria." },
      { id: "D", label: "D", text: "VV-ECMO inmediata omitiendo medidas convencionales." },
    ],
    correctOptionId: "A",
    explanation:
      "Driving pressure = Pplat - PEEP = 32-14 = 18 cmH2O (>15 = alto riesgo VILI/mortalidad, Amato). SDRA severo PaFi 75 con PEEP optimizada → pronación temprana (ESICM fuerte). ↓ PEEP causa atelectrauma. Reclutamiento 40×40 (ART) ↑ mortalidad. ECMO rescate tras prono/BNM (EOLIA).",
    keyPoints: [
      "Cuando veas: SDRA severo con Pplat 32, PEEP 14, PaFi 75 → calcular ΔP = Pplat - PEEP.",
      "Debes pensar en: driving pressure 18 cmH2O (>15) + PaFi <150 → pronación inmediata ≥16 h/día.",
      "No reclutamiento rutinario 40×40 s (ART trial negativo ↑ mortalidad).",
      "ECMO es rescate tras prono/BNM (EOLIA), no primera línea.",
      "Tema: SDRA severo / driving pressure y pronación (Amato/ESICM).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina crítica porque evalúa SDRA severo con driving pressure y pronación: ΔP = Pplat - PEEP; si >15 cmH2O con PaFi <150, pronación temprana ≥16 h/día es mandatoria.

La clave no es bajar PEEP, reclutamiento rutinario 40×40 ni ECMO inmediata.
La clave es:
Calcular driving pressure (18 cmH2O >15) e iniciar pronación inmediata ≥16 h/día para homogenizar ventilación y ↓ VILI.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 40 años, SDRA severo por neumonía viral.
• VM: Vt 350 mL (5.5 mL/kg), PEEP 14, FR 28, FiO2 80%.
• Pplat 32, PEEP 14 → driving pressure = 18 cmH2O (>15 = alto riesgo VILI).
• GSA: PaO2 60, PaFi 75 (SDRA severo pese a PEEP optimizada).
• Sedación profunda + BNM.

Recordemos SDRA y driving pressure (Amato/ESICM):
• Driving pressure (ΔP) = Pplat - PEEP; objetivo <15 cmH2O.
• ΔP >15 predice mortalidad independiente de Vt y PEEP.
• PaFi <150 post-optimización → pronación temprana ≥16 h/día (ESICM fuerte, PROSEVA).
• No reclutamiento rutinario 40×40 s (ART trial negativo ↑ mortalidad).
• ECMO es rescate tras prono/BNM (EOLIA), no primera línea.

Por lo tanto:
El análisis mecánico es driving pressure 18 cmH2O; la conducta mandatoria es pronación inmediata ≥16 h/día.

¿Por qué la opción A es la respuesta correcta?
Calcula correctamente ΔP = 32-14 = 18 y aplica pronación temprana según PROSEVA/ESICM en SDRA severo refractario.

¿Por qué fallan las otras opciones?
Opción B (reducir PEEP a 5): causa atelectrauma; empeora reclutamiento.
Opción C (reclutamiento 40×40): rutina contraindicada por ART trial.
Opción D (VV-ECMO inmediata): omitir medidas convencionales (prono) es error.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Pplat >30 = bajar PEEP siempre."
Pero en SDRA severo con PaFi <150, prono es la intervención clave antes de ECMO.
Aquí el dato decisivo es:
ΔP = Pplat - PEEP; si >15 en SDRA severo → prono ≥16 h, no bajes PEEP ni reclutamiento 40×40.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Optimizar Vt (6 mL/kg), PEEP y FiO2.
2. Calcular driving pressure = Pplat - PEEP.
3. Si PaFi <150 con ΔP >15 → pronación ≥16 h/día.
4. ECMO solo si falla prono + medidas convencionales.

Perlas de examen
✅ ΔP = Pplat - PEEP. Si >15: ↓ Vt o prono.
✅ PaFi <150 post-optimización → prono ≥16 h (PROSEVA).
✅ No reclutamiento rutinario 40×40 (ART negativo).
✅ ECMO es rescate, no primera línea (EOLIA).
✅ Baby lung: alta elastancia, VILI por distensión cíclica.

Referencias
• Amato et al. — Driving Pressure and Mortality in ARDS (NEJM).
• ESICM/ATS ARDS Clinical Practice Guidelines.
• PROSEVA Trial; EOLIA Trial.`,
  },
  {
    id: "dr-q-54",
    examArea: "Medicina Crítica / UCI / Gasometría",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "acido_base", "anion_gap"],
    statement:
      "Hombre de 50 años, sepsis abdominal + ileostomía 3 L/día. Reanimado con 4 L SF 0.9% en 12 h. PA 90/60, FC 115. GSA: pH 7.20, pCO2 25, HCO3 9. Na 135, K 3.0, Cl 114, lactato 5.5, albúmina 2.0, Cr 1.8. ¿Ecosistema ácido-base real (AG ajustado + delta ratio)?",
    options: [
      { id: "A", label: "A", text: "Acidosis de AG elevado pura compensada por alcalosis respiratoria." },
      { id: "B", label: "B", text: "Acidosis hiperclorémica de AG normal exclusiva por diarrea y SF 0.9%." },
      {
        id: "C",
        label: "C",
        text: "Trastorno triple: acidosis AG elevado (láctica/urémica ajustada) + acidosis hiperclorémica + componente respiratorio.",
      },
      { id: "D", label: "D", text: "Acidosis AG elevado + alcalosis metabólica masiva oculta." },
    ],
    correctOptionId: "C",
    explanation:
      "AG aparente 12; AG ajustado albúmina +5 = 17 (lactato/urémia). HCO3 9 con Cl 114 (diarrea + SF hiperclorémico) = acidosis hiperclorémica superpuesta. Delta ratio 5/15 ≈ 0.33 (<0.4 = AG normal adicional). pCO2 25 con acidosis metabólica severa = hiperventilación sepsis/compensación mixta.",
    keyPoints: [
      "Cuando veas: sepsis + ileostomía alta + reanimación con SF 0.9% masivo + albúmina baja + HCO3 muy bajo.",
      "Debes pensar en: trastorno triple → corregir AG por albúmina + delta ratio para detectar hipercloremia superpuesta.",
      "SF 0.9% en sepsis → acidosis hiperclorémica iatrogénica (SSC 2026: cristaloides balanceados).",
      "Delta ratio <0.4 = acidosis hiperclorémica concomitante.",
      "Tema: Trastorno ácido-base triple en UCI.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina crítica porque evalúa trastorno ácido-base triple en UCI: corregir anion gap por hipoalbuminemia, calcular delta ratio y detectar acidosis hiperclorémica iatrogénica.

La clave no es interpretar el AG aparente ni asumir un solo trastorno.
La clave es:
Corregir AG por albúmina (+2.5 mEq/L por cada 1 g/dL ↓), calcular delta ratio y reconocer tres componentes superpuestos.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 50 años, sepsis abdominal + ileostomía 3 L/día.
• Reanimado con 4 L SF 0.9% en 12 h (carga de cloruro masiva).
• GSA: pH 7.20, pCO2 25, HCO3 9; Na 135, Cl 114, lactato 5.5, albúmina 2.0, Cr 1.8.

Recordemos análisis ácido-base avanzado:
• AG aparente 12; AG ajustado albúmina +5 = 17 (lactato/urémia ocultos).
• Corregir AG: +2.5 mEq/L por cada 1 g/dL ↓ de albúmina.
• HCO3 9 con Cl 114 (diarrea + SF hiperclorémico) = acidosis hiperclorémica superpuesta.
• Delta ratio 5/15 ≈ 0.33 (<0.4 = AG normal adicional concomitante).
• pCO2 25 con acidosis metabólica severa = componente respiratorio/compensación mixta.

Por lo tanto:
El ecosistema ácido-base real es trastorno triple: AG elevado + hiperclorémico + componente respiratorio.

¿Por qué la opción C es la respuesta correcta?
Integra AG ajustado, delta ratio y reconoce los tres componentes superpuestos.

¿Por qué fallan las otras opciones?
Opción A (AG elevado puro compensado respiratorio): ignora hipercloremia y AG ajustado.
Opción B (hiperclorémica exclusiva): AG ajustado está elevado (lactato/urémia).
Opción D (alcalosis metabólica masiva oculta): delta ratio <0.4 indica acidosis hiperclorémica adicional, no alcalosis.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"AG normal = no hay acidosis láctica."
Pero hipoalbuminemia enmascara AG elevado.
Aquí el dato decisivo es:
Sepsis + SF 0.9% + albúmina baja = corrige AG + delta ratio → trastorno triple.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Calcular AG y corregir por albúmina.
2. Calcular delta AG y delta HCO3; obtener delta ratio.
3. Interpretar pCO2 esperado vs observado.
4. Usar cristaloides balanceados en sepsis (SSC 2026).

Perlas de examen
✅ Albúmina baja = gap oculto. Sepsis + SF 0.9% = hipercloremia.
✅ Corregir AG: +2.5 mEq/L por cada 1 g/dL ↓ de albúmina.
✅ Delta ratio <0.4 = acidosis hiperclorémica concomitante.
✅ SF 0.9% en sepsis → acidosis hiperclorémica iatrogénica.
✅ SSC 2026: cristaloides balanceados (RL/Plasmalyte).

Referencias
• SCCM/SSC Fluid Resuscitation Guidelines.
• Stewart/Classic Acid-Base Physiology.
• UpToDate: Approach to the adult with metabolic acidosis.`,
  },
  {
    id: "dr-q-55",
    examArea: "Medicina Crítica / UCI / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "aki", "crrt", "starr"],
    statement:
      "Hombre de 75 años, día 3 post-choque séptico urológico. Extubado, sin vasopresores 12 h. Balance +7 L, JVP elevada, crépitos leves. Oliguria 150 mL/24 h. Cr 4.5 (basal 1.0), BUN 110, K 5.3, pH 7.30, HCO3 16. AKI KDIGO 3. Residente pide CRRT inmediata \"para citoquinas\". Según STARRT-AKI/AKIKI, ¿decisión?",
    options: [
      { id: "A", label: "A", text: "HDI preventiva hoy; urea >100 = indicación absoluta." },
      {
        id: "B",
        label: "B",
        text: "Estrategia conservadora: diuréticos + vigilancia; diferir TRR hasta indicaciones absolutas (K+ >6.5, pH <7.15, EAP refractario, uremia sintomática).",
      },
      { id: "C", label: "C", text: "CVVHDF inmediata; inicio temprano ↓ dependencia dialítica." },
      { id: "D", label: "D", text: "Diálisis peritoneal urgente." },
    ],
    correctOptionId: "B",
    explanation:
      "STARRT-AKI y AKIKI: inicio temprano de TRR no mejora mortalidad 90 días y puede ↑ dependencia dialítica. K 5.3, pH 7.30, estable, sin EAP refractario → manejo médico + furosemida. TRR cuando falla manejo conservador (KDIGO).",
    keyPoints: [
      "Cuando veas: AKI KDIGO 3 estable sin vasopresores + K 5.3, pH 7.30, sin EAP refractario + residente pide CRRT 'para citoquinas'.",
      "Debes pensar en: estrategia conservadora según STARRT-AKI/AKIKI → diferir TRR hasta indicaciones absolutas (AEIOU).",
      "Diálisis temprana profiláctica: sin beneficio mortalidad (STARRT-AKI).",
      "Urea >100 sin síntomas no es indicación absoluta sola.",
      "Tema: Timing de TRR en AKI UCI (STARRT-AKI/AKIKI).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina crítica porque evalúa el timing de TRR en AKI UCI según STARRT-AKI/AKIKI: diálisis temprano profiláctico no mejora mortalidad.

La clave no es CRRT inmediata por urea elevada ni "lavar citoquinas".
La clave es:
Estrategia conservadora con diuréticos y vigilancia; diferir TRR hasta indicaciones absolutas (K+ >6.5, pH <7.15, EAP refractario, uremia sintomática).

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 75 años, día 3 post-choque séptico urológico.
• Extubado, sin vasopresores 12 h; balance +7 L, JVP elevada, crépitos leves.
• Oliguria 150 mL/24 h; Cr 4.5 (basal 1.0), BUN 110, K 5.3, pH 7.30, HCO3 16.
• AKI KDIGO 3 pero hemodinámicamente estable sin emergencia dialítica inmediata.

Recordemos STARRT-AKI y AKIKI:
• Inicio temprano de TRR no mejora mortalidad 90 días; puede ↑ dependencia dialítica.
• K 5.3, pH 7.30, estable, sin EAP refractario → manejo médico + furosemida primero.
• TRR cuando falla manejo conservador: K+ >6.5, pH <7.15, EAP refractario, uremia sintomática.
• Urea >100 sin síntomas no es indicación absoluta sola.
• CRRT "para citoquinas" no tiene evidencia de beneficio profiláctico.

Por lo tanto:
La decisión correcta es estrategia conservadora: diuréticos + vigilancia; diferir TRR hasta indicaciones absolutas.

¿Por qué la opción B es la respuesta correcta?
Aplica evidencia STARRT-AKI/AKIKI de no iniciar TRR temprana sin indicaciones absolutas.

¿Por qué fallan las otras opciones?
Opción A (HDI preventiva por urea >100): sin beneficio mortalidad (STARRT-AKI negativo).
Opción C (CVVHDF inmediata): inicio temprano no ↓ dependencia dialítica ni mortalidad.
Opción D (diálisis peritoneal urgente): no es modalidad de elección en UCI post-sepsis con congestión.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"AKI KDIGO 3 = dializar ya."
Pero estabilidad hemodinámica sin AEIOU cambia la indicación.
Aquí el dato decisivo es:
AKI KDIGO 3 estable sin AEIOU = estrategia conservadora + diuréticos; no dialices profilácticamente.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar indicaciones absolutas (AEIOU: Acidosis, Electrolytes, Intoxication, Overload, Uremia).
2. Intentar manejo médico (diuréticos, corrección electrolitos).
3. Iniciar TRR solo si falla manejo conservador.
4. No CRRT profiláctica "para citoquinas".

Perlas de examen
✅ No dialices profilácticamente. Espera AEIOU graves.
✅ STARRT-AKI: inicio temprano no mejora mortalidad 90 días.
✅ Urea >100 sin síntomas no es indicación absoluta sola.
✅ Máquina sustituye, no cura túbulo post-isquémico.
✅ Intentar diuresis antes de CRRT si estable.

Referencias
• STARRT-AKI Trial (NEJM).
• AKIKI Trial (NEJM).
• KDIGO AKI Clinical Practice Guidelines.`,
  },
  {
    id: "dr-q-56",
    examArea: "Medicina Crítica / UCI / Cardiología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "choque_cardiogenico", "swan_ganz"],
    statement:
      "Hombre de 60 años, IAMCEST anterior extenso post-ICP (isquemia 6 h). Anuria, lactato ↑, alteración sensorio. Swan-Ganz: RAP 18, PAP 55/30, PAOP 26, IC 1.5, RVS 2200, SvO2 45%. PA 75/55, FC 110. Eco: FEVI 20%, IM severa funcional. Perfil choque cardiogénico Stevenson C. ¿Soporte inmediato correcto?",
    options: [
      { id: "A", label: "A", text: "Norepinefrina sola a dosis altas para PAM >80." },
      { id: "B", label: "B", text: "Milrinona + diuréticos; tolerar hipotensión." },
      {
        id: "C",
        label: "C",
        text: "Norepinefrina para PAM ≥65 + dobutamina para ↑ IC; candidato a BCIA/ECMO-VA.",
      },
      { id: "D", label: "D", text: "Cristaloides para ↑ precarga + nitroprusiato." },
    ],
    correctOptionId: "C",
    explanation:
      "Choque cardiogénico: IC bajo, PAOP/CVP altos (congestión), SvO2 45% (hipoperfusión). Norepinefrina defiende perfusión coronaria; dobutamina ↑ contractilidad. Inotrópico solo empeora hipotensión. Líquidos en PAOP 26/RAP 18 → edema pulmonar. Soporte mecánico si refractario (AHA/ESC).",
    keyPoints: [
      "Cuando veas: choque cardiogénico hipotenso con PAOP 26, IC 1.5, SvO2 45%, IM severa funcional.",
      "Debes pensar en: perfil C (Stevenson) → norepinefrina para PAM ≥65 + dobutamina para ↑ IC.",
      "Inotrópico solo empeora hipotensión; no líquidos con PAOP 26.",
      "Candidato a BCIA/Impella/ECMO-VA si refractario (AHA/ESC).",
      "Tema: Choque cardiogénico perfil C / soporte farmacológico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina crítica porque evalúa choque cardiogénico perfil C (Stevenson): IC bajo con congestión (PAOP 26) e hipotensión — norepinefrina + dobutamina, no inotrópico solo.

La clave no es norepinefrina sola, inotrópico desnudo ni cristaloides con PAOP elevada.
La clave es:
Norepinefrina para PAM ≥65 + dobutamina para ↑ IC; candidato a soporte mecánico si refractario.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 60 años, IAMCEST anterior extenso post-ICP (isquemia 6 h).
• Anuria, lactato ↑, alteración sensorio; FEVI 20%, IM severa funcional.
• Swan-Ganz: RAP 18, PAP 55/30, PAOP 26, IC 1.5, RVS 2200, SvO2 45%.
• PA 75/55, FC 110: choque cardiogénico perfil C (frío y húmedo).

Recordemos choque cardiogénico (AHA/ESC, SCAI):
• Choque cardiogénico hipotensivo: norepinefrina defiende perfusión coronaria + dobutamina ↑ contractilidad.
• Inotrópico solo (milrinona/dobutamina sin vasopresor) empeora hipotensión.
• PAOP 26/RAP 18 = congestión; cristaloides → edema pulmonar.
• PPC = PAM - PAOP; mantener perfusión coronaria.
• BCIA/Impella/ECMO-VA si refractario (SCAI staging).

Por lo tanto:
El soporte inmediato correcto es norepinefrina para PAM ≥65 + dobutamina para ↑ IC; candidato a soporte mecánico.

¿Por qué la opción C es la respuesta correcta?
Combina vasopresor para mantener perfusión coronaria con inotrópico para mejorar IC en perfil C hipotenso.

¿Por qué fallan las otras opciones?
Opción A (norepinefrina sola a dosis altas): no ↑ IC; SvO2 45% requiere inotrópico.
Opción B (milrinona + diuréticos tolerando hipotensión): vasodilatador/inotrópico empeora PAM.
Opción D (cristaloides + nitroprusiato): PAOP ya 26; volumen empeora congestión pulmonar.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Choque cardiogénico = dobutamina sola."
Pero hipotensión exige vasopresor primero para proteger perfusión coronaria.
Aquí el dato decisivo es:
Choque cardiogénico hipotenso = norepi + dobu, no inotrópico desnudo; no líquidos con PAOP 26.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar perfil hemodinámico (Swan-Ganz/eco).
2. Norepinefrina para PAM ≥65 (perfusión coronaria).
3. Dobutamina para ↑ IC si SvO2 bajo/hipoperfusión.
4. Soporte mecánico (Impella/ECMO-VA) si refractario.

Perlas de examen
✅ Inotrópico desnudo mata al cardiópata hipotenso. Norepi + dobu.
✅ Choque cardiogénico hipotensivo: norepi + dobutamina, no inotrópico solo.
✅ PAOP 26 = congestión; no líquidos.
✅ PPC = PAM - PAOP; mantener perfusión coronaria.
✅ Perfil frío y húmedo: IC ↓, congestión ↑.

Referencias
• AHA/ESC Cardiogenic Shock Guidelines.
• SCAI Shock Staging Classification.
• UpToDate: Management of cardiogenic shock.`,
  },
  {
    id: "dr-q-57",
    examArea: "Medicina Crítica / UCI / Trauma",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "trauma", "transfusion", "hipocalcemia"],
    statement:
      "Hombre de 25 años, trauma abdominal, laparotomía control daños, sangrado activo. PTM: 6 CH, 6 PFC, 1 plaquetas. PA 65/40, FC 145, Temp 34.5 °C. ECG: QRS ancho, QTc 550 ms, EV. pH 7.15, lactato 8, fibrinógeno 100, calcio ionizado 0.65 mmol/L. ¿Terapia inmediata metabólica/neurohumoral?",
    options: [
      { id: "A", label: "A", text: "Bicarbonato 8.4% en bolo para revertir acidemia." },
      {
        id: "B",
        label: "B",
        text: "Cloruro o gluconato de calcio IV inmediato para hipocalcemia por citrato transfusional.",
      },
      { id: "C", label: "C", text: "Epinefrina en bolo por choque distributivo hipotérmico." },
      { id: "D", label: "D", text: "Ácido tranexámico 2 g como prioridad sobre calcio." },
    ],
    correctOptionId: "B",
    explanation:
      "Transfusión masiva → acumulación citrato → hipocalcemia ionizada severa (0.65). Ca++ es factor IV coagulación y contráctilidad miocárdica; QTc largo → riesgo FV. Repetir Ca++ cada 4-6 U hemoderivados (ATLS). Bicarbonato empeora Ca ionizado; epinefrina ineficaz con Ca bajo; TXA no resuelve paro inminente por Ca.",
    keyPoints: [
      "Cuando veas: PTM (6 CH + 6 PFC) + calcio ionizado 0.65 + QTc 550 ms + QRS ancho + hipotensión.",
      "Debes pensar en: hipocalcemia por citrato transfusional → cloruro o gluconato de calcio IV inmediato.",
      "Tríada letal + hipocalcemia por citrato = cuarto jinete.",
      "Ca++ antes de subir vasopresores si QT prolongado; repetir cada 4–6 U hemoderivados (ATLS).",
      "Tema: Toxicidad por citrato en transfusión masiva (PTM).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina crítica porque evalúa hipocalcemia por citrato en transfusión masiva (PTM): calcio ionizado 0.65 con QTc 550 ms exige calcio IV inmediato.

La clave no es bicarbonato, epinefrina ni TXA como primera prioridad.
La clave es:
Cloruro o gluconato de calcio IV inmediato para hipocalcemia por citrato transfusional — el cuarto jinete de la tríada letal.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 25 años, trauma abdominal, laparotomía control de daños, sangrado activo.
• PTM: 6 CH, 6 PFC, 1 plaquetas; PA 65/40, FC 145, Temp 34.5 °C.
• ECG: QRS ancho, QTc 550 ms, extrasístoles ventriculares.
• pH 7.15, lactato 8, fibrinógeno 100, calcio ionizado 0.65 mmol/L (<1 = crítico).

Recordemos toxicidad por citrato en PTM (ATLS):
• Transfusión masiva → acumulación citrato (PFC) → hipocalcemia ionizada severa.
• Ca++ es factor IV coagulación y contráctilidad miocárdica; QTc largo → riesgo FV.
• Hígado isquémico en shock no metaboliza citrato → acumulación rápida.
• Repetir Ca++ cada 4-6 U hemoderivados.
• Bicarbonato empeora Ca ionizado; epinefrina ineficaz con Ca bajo.

Por lo tanto:
La terapia inmediata es cloruro o gluconato de calcio IV para corregir hipocalcemia crítica.

¿Por qué la opción B es la respuesta correcta?
Corrige la causa metabólica inmediata (hipocalcemia por citrato) que explica QT prolongado, coagulopatía y falla miocárdica.

¿Por qué fallan las otras opciones?
Opción A (bicarbonato para acidemia): empeora Ca ionizado y no corrige coagulopatía.
Opción C (epinefrina en bolo): ineficaz con Ca ionizado 0.65; riesgo arritmia sin calcio.
Opción D (TXA como prioridad): TXA no resuelve paro inminente por hipocalcemia.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Choque + acidosis = bicarbonato primero."
Pero en PTM, hipocalcemia por citrato es la emergencia metabólica inmediata.
Aquí el dato decisivo es:
PTM + QT largo + hipotensión = calcio IV ya, no más vasopresores ni bicarbonato primero.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Monitorizar Ca ionizado en todo PTM.
2. Repetir Ca++ cada 4-6 U hemoderivados.
3. Corregir Ca antes de escalar vasopresores si QT prolongado.
4. Continuar protocolo PTM (1:1:1) y control de sangrado.

Perlas de examen
✅ Sangre masiva + QT largo + hipotensión = calcio IV ya, no más noradrenalina.
✅ Tríada letal + hipocalcemia por citrato = cuarto jinete.
✅ Ca ionizado <1 mmol/L → coagulopatía + falla miocárdica.
✅ PFC acumula citrato; hígado isquémico no metaboliza.
✅ Bicarbonato empeora Ca ionizado.

Referencias
• ATLS 10th Edition — Massive Transfusion Protocol.
• Trauma Coagulopathy Guidelines.
• UpToDate: Massive blood transfusion in adults.`,
  },
  {
    id: "dr-q-58",
    examArea: "Medicina Crítica / UCI / Ventilación Mecánica",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "destete", "wipo", "extubacion"],
    statement:
      "Mujer de 72 años, día 8 VM post-sepsis respiratoria resuelta. HVI, FEVI preservada. SBT tubo en T 15 min: agitación, diaforesis, musculatura accesoria. PA 180/100 (previa 120/70), FC 135, FR 38, SpO2 84%. POCUS: líneas B difusas nuevas, VI hiperdinámico pletórico. GSA T-piece: pH 7.28, pCO2 50, pO2 55. ¿Etiología de falla y estrategia?",
    options: [
      { id: "A", label: "A", text: "Debilidad diafragmática; traqueostomía temprana." },
      {
        id: "B",
        label: "B",
        text: "Edema pulmonar inducido por destete (WIPO); reconectar VM, diuréticos/vasodilatadores, próximo intento con VNI profiláctica.",
      },
      { id: "C", label: "C", text: "Broncoespasmo con auto-PEEP; sedación + broncodilatadores." },
      { id: "D", label: "D", text: "Sepsis recurrente; reiniciar vasopresores y ATB." },
    ],
    correctOptionId: "B",
    explanation:
      "Retiro PEEP → ↑ retorno venoso (precarga) + ↑ poscarga VI rígido (HVI) → EAP hiperagudo (WIPO). HTA rebote + líneas B + VI pletórico confirman. Reconectar presión positiva, furosemida/nitroglicerina, balance negativo, extubar a BiPAP (CHEST/ATS weaning).",
    keyPoints: [
      "Cuando veas: cardiópata rígido (HVI) + falla SBT tubo en T + HTA rebote + líneas B nuevas + VI pletórico.",
      "Debes pensar en: edema pulmonar inducido por destete (WIPO) → reconectar VM + diuréticos + VNI profiláctica.",
      "VM actúa como asistente cardíaco en cardiópata rígido; retiro PEEP descompensa hemodinámica.",
      "Reconectar PEEP revierte edema rápidamente.",
      "Tema: WIPO / falla cardiovascular del destete (CHEST/ATS).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina crítica porque evalúa edema pulmonar inducido por destete (WIPO): falla SBT con HTA rebote, líneas B y VI pletórico en cardiópata rígido.

La clave no es traqueostomía por debilidad diafragmática ni broncodilatadores.
La clave es:
Reconectar VM, diuréticos/vasodilatadores y próximo intento con VNI profiláctica post-extubación.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 72 años, día 8 VM post-sepsis respiratoria resuelta; HVI, FEVI preservada.
• SBT tubo en T 15 min: agitación, diaforesis, musculatura accesoria.
• PA 180/100 (previa 120/70), FC 135, FR 38, SpO2 84%.
• POCUS: líneas B difusas nuevas, VI hiperdinámico pletórico; GSA: pO2 55.

Recordemos WIPO (weaning-induced pulmonary edema):
• Retiro PEEP → ↑ retorno venoso (precarga) + ↑ poscarga transmural VI rígido (HVI) → EAP hiperagudo.
• VM actúa como asistente cardíaco en cardiópata rígido; tubo en T descompensa hemodinámica.
• HTA rebote + líneas B + VI pletórico confirman WIPO, no debilidad diafragmática.
• Manejo: reconectar presión positiva, furosemida/nitroglicerina, balance negativo, extubar a BiPAP (CHEST/ATS).

Por lo tanto:
La etiología es WIPO; la estrategia es reconectar VM, diuréticos/vasodilatadores y VNI profiláctica en próximo intento.

¿Por qué la opción B es la respuesta correcta?
Identifica falla cardiovascular del destete (no muscular) y aplica manejo hemodinámico con presión positiva y diuresis.

¿Por qué fallan las otras opciones?
Opción A (debilidad diafragmática + traqueostomía): líneas B y HTA indican falla cardiovascular, no muscular.
Opción C (broncoespasmo + auto-PEEP): no hay patrón obstructivo; hay congestión pulmonar aguda.
Opción D (sepsis recurrente + vasopresores): sepsis resuelta; el cuadro es hemodinámico por destete.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Falla SBT = debilidad diafragmática → traqueostomía."
Pero HTA rebote + líneas B apuntan a WIPO en cardiópata rígido.
Aquí el dato decisivo es:
Cardiópata rígido + falla SBT + líneas B + HTA = WIPO → reconecta VM + diuresis + VNI post-extubación.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Antes de SBT: evaluar riesgo WIPO (HVI, HTA, balance positivo).
2. Si falla SBT con HTA + líneas B: reconectar VM inmediatamente.
3. Diuréticos/vasodilatadores para balance negativo.
4. Próximo intento con VNI profiláctica post-extubación.

Perlas de examen
✅ Cardiópata rígido + falla SBT con líneas B = WIPO. Reconecta y diuresis.
✅ VM = asistente cardíaco en cardiópata rígido.
✅ WIPO: HTA + edema pulmonar súbito en SBT.
✅ PEEP ↓ precarga y poscarga transmural VI.
✅ Tubo en T en HVI = inundación pulmonar aguda.

Referencias
• CHEST/ATS Weaning and Discontinuation Guidelines.
• UpToDate: Weaning from mechanical ventilation.
• Lemaire F — Weaning-induced pulmonary edema.`,
  },
  {
    id: "dr-q-59",
    examArea: "Medicina Crítica / UCI / Reanimación",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "sepsis", "fluidos", "perfusion"],
    statement:
      "Hombre de 55 años, choque séptico neumonía bilateral, hora 4 reanimación. PAM 70, diuresis 0.8 mL/kg/h, TRC 2.5 s, mottling 0, alerta. Lactato 7.0→6.2 (<20% aclaramiento). POCUS: VI hiperdinámicos, VCI colapsable. Residente propone fluidos por VCI colapsable y lactato alto. ¿Por qué es iatrogénico?",
    options: [
      { id: "A", label: "A", text: "Requiere Hb >10 g/dL antes de más volumen." },
      {
        id: "B",
        label: "B",
        text: "Respondedor a volumen ≠ necesita volumen; perfusión clínica normalizada; perseguir lactato con fluidos causa daño pulmonar/renal.",
      },
      { id: "C", label: "C", text: "Lactato solo por falla hepática; azul de metileno." },
      { id: "D", label: "D", text: "Norepinefrina falsea TRC; solo tonometría gástrica válida." },
    ],
    correctOptionId: "B",
    explanation:
      "VCI colapsable indica capacidad de responder a volumen (Starling), no indicación de administrarlo. Objetivos de perfusión cumplidos (diuresis, conciencia, TRC). Lactato persistente puede ser adrenérgico/washout. Fluidos extra → SDRA, congestión, daño glicocálix (ESICM).",
    keyPoints: [
      "Cuando veas: sepsis hora 4 con PAM OK, diuresis 0.8 mL/kg/h, TRC 2.5 s, alerta + VCI colapsable + lactato persistente.",
      "Debes pensar en: respondedor a volumen ≠ necesita volumen → no más fluidos; perseguir lactato es iatrogénico.",
      "Perfusión clínica (diuresis, conciencia, TRC) > número de lactato tardío.",
      "Fluidos extra → SDRA, congestión, daño glicocálix (ESICM fluid stewardship).",
      "Tema: Fin de reanimación hídrica en sepsis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina crítica porque evalúa el fin de reanimación hídrica en sepsis: VCI colapsable indica capacidad de responder a volumen, no necesidad de administrarlo.

La clave no es seguir fluidos por VCI colapsable ni perseguir lactato hasta normalizar.
La clave es:
Reconocer perfusión clínica normalizada y evitar fluidos iatrogénicos que causan daño pulmonar/renal.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 55 años, choque séptico neumonía bilateral, hora 4 de reanimación.
• PAM 70, diuresis 0.8 mL/kg/h, TRC 2.5 s, mottling 0, alerta.
• Lactato 7.0 → 6.2 (<20% aclaramiento); POCUS: VI hiperdinámicos, VCI colapsable.
• Objetivos de perfusión clínicos cumplidos pero lactato aún alto.

Recordemos fin de reanimación (ESICM fluid stewardship):
• VCI colapsable = respondedor a volumen (Starling), no indicación de administrarlo.
• Puede recibir fluido ≠ necesita fluido.
• Perfusión clínica (diuresis, conciencia, TRC) > número de lactato tardío.
• Lactato persistente puede ser adrenérgico/washout post-reanimación.
• Fluidos extra → SDRA, congestión, daño glicocálix.

Por lo tanto:
Es iatrogénico porque perfusión clínica está normalizada; perseguir lactato con fluidos causa daño pulmonar/renal.

¿Por qué la opción B es la respuesta correcta?
Explica que respondedor a volumen no implica necesidad de volumen cuando perfusión clínica ya está restaurada.

¿Por qué fallan las otras opciones?
Opción A (Hb >10 antes de volumen): TRISS objetivo Hb 7, no 10; no es la razón principal de detener fluidos.
Opción C (lactato por falla hepática + azul de metileno): perfusión clínica normalizada descarta hipoxia persistente.
Opción D (norepinefrina falsea TRC): TRC 2.5 s con diuresis y alerta = reanimación completa.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"VCI colapsable = dar más fluidos."
Pero capacidad de responder no implica beneficio cuando perfusión ya está normalizada.
Aquí el dato decisivo es:
Orina + lúcido + piel caliente + TRC OK = reanimación terminada → no trates lactato con más fluidos.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar perfusión clínica (diuresis, TRC, conciencia, mottling).
2. Si objetivos cumplidos → detener fluidos aunque lactato persista.
3. No usar VCI colapsable como indicación automática de volumen.
4. Monitorizar balance hídrico; evitar sobrecarga (CLASSIC/ESICM).

Perlas de examen
✅ Orina + lúcido + piel caliente = reanimación terminada. No trates lactato.
✅ Puede recibir fluido ≠ necesita fluido.
✅ VCI colapsable = respondedor, no indicación automática.
✅ Perfusión clínica > número de lactato tardío.
✅ ESICM: sobrecarga hídrica ↑ mortalidad post-resucitación.

Referencias
• ESICM Fluid Stewardship Recommendations.
• CLASSIC Trial (NEJM).
• Surviving Sepsis Campaign Guidelines.`,
  },
  {
    id: "dr-q-60",
    examArea: "Medicina Crítica / UCI / Neumología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "medicina_critica", "uci", "tep", "rcp", "trombolisis"],
    statement:
      "Mujer de 48 años, TEP masivo, paro en AESP durante RCP. ETE: VD masivamente dilatado, hipocinesia, VI colapsado. Ya 1 mg epinefrina IV. ¿Intervención farmacológica de rescate según ACLS/CHEST?",
    options: [
      { id: "A", label: "A", text: "2 L cristaloides bajo compresión para destapar AP." },
      { id: "B", label: "B", text: "Detener compresiones e iniciar VA-ECMO como única terapia." },
      {
        id: "C",
        label: "C",
        text: "Trombólisis sistémica intra-paro (alteplasa 50 mg o equivalente) y continuar RCP ≥15–20 min adicionales.",
      },
      { id: "D", label: "D", text: "Toracotomía de reanimación con clampeo aórtico." },
    ],
    correctOptionId: "C",
    explanation:
      "TEP masivo causa AESP por obstrucción pulmonar aguda (VD falla, VI sin precarga). Fibrinólisis intra-paro indicada con sospecha/confirmación alta (AHA/CHEST). Continuar RCP 15-20 min para permitir lisis. Volumen empeora VD; ECMO no sustituye trombolisis universal; toracotomía para trauma/taponamiento, no TEP.",
    keyPoints: [
      "Cuando veas: TEP masivo + paro AESP + ETE con VD masivamente dilatado + VI colapsado durante RCP.",
      "Debes pensar en: trombolisis sistémica intra-paro (alteplasa 50 mg) + continuar RCP ≥15–20 min adicionales.",
      "AESP por obstrucción AP: VD falla, VI sin precarga; volumen empeora VD.",
      "No detener compresiones para ECMO sin trombolisis; toracotomía para trauma/taponamiento, no TEP.",
      "Tema: TEP masivo en paro / trombolisis intra-RCP (AHA ACLS/CHEST).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina crítica porque evalúa TEP masivo en paro AESP: ETE con VD gigante confirma obstrucción pulmonar aguda — trombolisis sistémica intra-RCP y continuar compresiones.

La clave no es cristaloides, ECMO sola ni toracotomía de reanimación.
La clave es:
Trombolisis sistémica intra-paro (alteplasa 50 mg o equivalente) y continuar RCP ≥15–20 min adicionales.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 48 años, TEP masivo, paro en AESP durante RCP.
• ETE: VD masivamente dilatado, hipocinesia, VI colapsado (obstrucción AP → falla VD → AESP).
• Ya 1 mg epinefrina IV; compresiones en curso.

Recordemos TEP masivo en paro (AHA ACLS/CHEST):
• TEP masivo causa AESP por obstrucción pulmonar aguda: VD falla, VI sin precarga.
• Fibrinólisis intra-paro indicada con sospecha/confirmación alta.
• Alteplasa 50 mg (o tenecteplasa equivalente) durante RCP; continuar ≥15–20 min post-dosis.
• Volumen empeora VD dilatado; ECMO no sustituye trombolisis universal.
• Toracotomía para trauma/taponamiento, no TEP.

Por lo tanto:
La intervención farmacológica de rescate es trombolisis sistémica intra-paro con RCP prolongada.

¿Por qué la opción C es la respuesta correcta?
Aplica indicación ACLS/CHEST de fibrinólisis durante RCP con TEP masivo confirmado y extensión de compresiones post-alteplasa.

¿Por qué fallan las otras opciones?
Opción A (2 L cristaloides bajo compresión): empeora sobrecarga VD en TEP masivo.
Opción B (detener compresiones para VA-ECMO sola): no sustituye trombolisis; compresiones deben continuar.
Opción D (toracotomía con clampeo aórtico): indicada en trauma/taponamiento, no TEP.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Paro = RCP + epinefrina, nunca trombolisis."
Pero TEP masivo confirmado con VD gigante es indicación específica de alteplasa intra-RCP.
Aquí el dato decisivo es:
AESP + VD gigante en paro = alteplasa ya + no pares de comprimir 15–20 min.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. RCP de alta calidad + epinefrina según ACLS.
2. Si TEP masivo probable/confirmado (ETE/angioTAC): alteplasa 50 mg IV.
3. Continuar RCP ≥15–20 min post-dosis.
4. Considerar ECMO-VA como puente si disponible, no en lugar de trombolisis.

Perlas de examen
✅ AESP + VD gigante en paro = alteplasa ya + no pares de comprimir 15-20 min.
✅ TEP masivo causa AESP por obstrucción AP → falla VD → VI colapsado.
✅ No detener compresiones para ECMO sin trombolisis.
✅ Volumen empeora VD dilatado en TEP masivo.
✅ Toracotomía para trauma/taponamiento, no TEP.

Referencias
• AHA ACLS Guidelines — Cardiac Arrest in Special Situations.
• CHEST Pulmonary Embolism Guidelines.
• UpToDate: Management of acute pulmonary embolism.`,
  },
  {
    id: "dr-q-61",
    examArea: "Medicina Interna / Fisiopatología / UCI",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "sepsis", "vasoplejia", "glicocalix"],
    statement:
      "Hombre de 65 años, choque séptico por neumonía multilobar. PA 70/40, FC 130, Temp 39.5 °C. Extremidades calientes, pulsos saltones, anasarca en 12 h con balance +2 L. Lactato 6.5, ScvO2 82%. Eco: VI hiperdinámico FEVI 75%, GC 8 L/min. ¿Mecanismo molecular primario que explica vasoplejía y fuga capilar simultáneas?",
    options: [
      { id: "A", label: "A", text: "Histamina por mastocitos → parálisis precapilar y ↑ presión hidrostática." },
      {
        id: "B",
        label: "B",
        text: "Citoquinas (TNF-α, IL-1) → iNOS → NO tóxico + daño glicocálix y uniones estrechas → vasoplejía y fuga capilar.",
      },
      { id: "C", label: "C", text: "Toxina bloquea Na+/K+ ATPasa vascular → ruptura osmótica endotelial." },
      { id: "D", label: "D", text: "Acidosis láctica bloquea α-1 adrenérgicos; hipoalbuminemia causa edema." },
    ],
    correctOptionId: "B",
    explanation:
      "PAMPs → TLR-4 → NF-κB → citoquinas → iNOS → NO masivo → vasorelajación vía GMPc. Peroxinitrito/citoquinas destruyen glicocálix y cadherinas VE → fuga capilar. ScvO2 alta por shunt microvascular (flujo rápido, extracción baja). Extremidades calientes = vasoplejía.",
    keyPoints: [
      "Cuando veas: choque séptico + extremidades calientes + anasarca rápida + GC alto + ScvO2 elevada.",
      "Debes pensar en: citoquinas (TNF-α, IL-1) → iNOS → NO tóxico + daño glicocálix → vasoplejía y fuga capilar simultáneas.",
      "Choque séptico = enfermedad del endotelio; iNOS >> eNOS.",
      "ScvO2 alta no siempre indica hipoperfusión: puede ser shunt microvascular con extracción baja.",
      "Tema: sepsis / vasoplejía / daño glicocálix endotelial.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de fisiopatología / UCI porque evalúa el mecanismo molecular que explica vasoplejía y fuga capilar simultáneas en choque séptico.

La clave no es histamina, toxinas bacterianas ni acidosis láctica como causa primaria.
La clave es:
Citoquinas (TNF-α, IL-1) → iNOS → NO tóxico + daño glicocálix y uniones estrechas → vasoplejía y fuga capilar.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 65 años, choque séptico por neumonía multilobar.
• PA 70/40, extremidades calientes, pulsos saltones (vasoplejía caliente, no choque frío).
• Anasarca en 12 h con balance +2 L (fuga capilar masiva).
• Eco: VI hiperdinámico FEVI 75%, GC 8 L/min; ScvO2 82% (shunt microvascular).

Recordemos fisiopatología del choque séptico:
• PAMPs → TLR-4 → NF-κB → citoquinas (TNF-α, IL-1) → iNOS → NO masivo → vasorelajación vía GMPc.
• Peroxinitrito/citoquinas destruyen glicocálix y cadherinas VE → fuga capilar (altera Starling).
• Choque séptico = enfermedad del endotelio, no solo hipovolemia.
• ScvO2 alta no siempre = hipoperfusión; puede ser flujo rápido con extracción baja.

Por lo tanto:
El mecanismo molecular primario es citoquinas → iNOS → NO tóxico + daño glicocálix endotelial.

¿Por qué la opción B es la respuesta correcta?
Integra la cascada inflamatoria séptica (citoquinas → iNOS → NO) con destrucción del glicocálix y uniones estrechas, explicando vasoplejía caliente y edema masivo simultáneos.

¿Por qué fallan las otras opciones?
Opción A (histamina por mastocitos): mecanismo de anafilaxia, no explica vasoplejía + fuga capilar masiva en sepsis.
Opción C (toxina bloquea Na+/K+ ATPasa): no es el mecanismo principal de sepsis bacteriana.
Opción D (acidosis láctica bloquea α-1 + hipoalbuminemia): la hipoalbuminemia agrava edema pero no explica vasoplejía caliente.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Choque = extremidades frías y vasoconstricción."
Pero en sepsis avanzada predomina vasoplejía con extremidades calientes y GC alto.
Aquí el dato decisivo es:
Extremidades calientes + anasarca rápida + GC 8 L/min = iNOS + glicocálix destruido, no choque hipovolémico frío.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. PAMPs activan TLR-4 → NF-κB → citoquinas.
2. Citoquinas inducen iNOS → NO tóxico → vasoplejía vía GMPc.
3. Peroxinitrito/citoquinas destruyen glicocálix → fuga capilar masiva.
4. ScvO2 alta puede reflejar shunt microvascular, no oxigenación adecuada.

Perlas de examen
✅ Choque séptico = enfermedad del endotelio.
✅ iNOS >> eNOS; extremidades calientes = vasoplejía.
✅ Glicocálix destruido convierte capilares en coladores (altera Starling).
✅ ScvO2 alta no siempre = hipoperfusión en vasoplejía.
✅ GC alto + PA baja = vasoplejía, no hipovolemia pura.
✅ Sepsis + anasarca rápida = fuga capilar por daño endotelial.

Referencias
• Surviving Sepsis Campaign Guidelines.
• UpToDate: Pathophysiology of sepsis.
• Critical Care Reviews: Endothelial dysfunction in sepsis.`,
  },
  {
    id: "dr-q-62",
    examArea: "Medicina Interna / Fisiopatología / Neumología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "sda", "shunt", "vq"],
    statement:
      "Mujer de 45 años, SDRA post-pancreatitis severa. Cianosis, crépitos difusos, Rx pulmón blanco. GSA ambiente: pH 7.48, PaCO2 30, PaO2 45. FiO2 100% 30 min: PaO2 50 mmHg (+5). ¿Explicación fisiopatológica de hipoxemia refractaria al O2?",
    options: [
      { id: "A", label: "A", text: "↑ espacio muerto (V/Q infinito) por microtrombos capilares." },
      {
        id: "B",
        label: "B",
        text: "Shunt intrapulmonar verdadero (V/Q=0): alvéolos inundados perfundidos; sangre venosa no oxigenada se mezcla con la arterial.",
      },
      { id: "C", label: "C", text: "Defecto de difusión puro que no corrige con FiO2 alta." },
      { id: "D", label: "D", text: "Efecto Bohr inverso por hiperventilación impide liberación de O2." },
    ],
    correctOptionId: "B",
    explanation:
      "SDRA: alvéolos llenos de exudado (V=0) con perfusión intacta (Q normal) = shunt verdadero. FiO2 100% satura Hb en zonas ventiladas pero no oxigena sangre del shunt; PaO2 final permanece baja. Solución: PEEP recluta alvéolos, no más O2.",
    keyPoints: [
      "Cuando veas: SDRA + hipoxemia severa + FiO2 100% con PaO2 que apenas sube (+5 mmHg).",
      "Debes pensar en: shunt intrapulmonar verdadero (V/Q=0): alvéolos inundados perfundidos.",
      "PaO2 no corrige con FiO2 100% = shunt verdadero, no defecto de difusión.",
      "Solución: PEEP recluta alvéolos, no más oxígeno.",
      "Tema: SDRA / shunt V/Q=0 / hipoxemia refractaria.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de fisiopatología / neumología porque evalúa la explicación de hipoxemia refractaria al oxígeno en SDRA.

La clave no es espacio muerto, defecto de difusión puro ni efecto Bohr inverso.
La clave es:
Shunt intrapulmonar verdadero (V/Q=0): alvéolos inundados perfundidos; sangre venosa no oxigenada se mezcla con la arterial.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 45 años, SDRA post-pancreatitis severa; Rx pulmón blanco.
• GSA ambiente: pH 7.48, PaCO2 30, PaO2 45.
• FiO2 100% 30 min: PaO2 50 mmHg (+5 mmHg apenas).
• Cianosis, crépitos difusos: alvéolos inundados de exudado.

Recordemos fisiología V/Q en SDRA:
• SDRA: alvéolos llenos de exudado (V=0) con perfusión intacta (Q normal) = shunt verdadero.
• FiO2 100% satura Hb en zonas ventiladas pero no oxigena sangre del shunt.
• PaO2 final permanece baja porque sangre venosa se mezcla con arterial.
• Espacio muerto (V/Q infinito) causa hipercapnia, no hipoxemia refractaria severa.
• Solución: PEEP recluta alvéolos colapsados, no más oxígeno.

Por lo tanto:
La hipoxemia refractaria se explica por shunt intrapulmonar verdadero (V/Q=0).

¿Por qué la opción B es la respuesta correcta?
Describe perfusión sin ventilación en alvéolos inundados: la sangre pasa sin oxigenarse y se mezcla con la arterial, sin corrección con FiO2 alta.

¿Por qué fallan las otras opciones?
Opción A (↑ espacio muerto V/Q infinito): causa hipercapnia, no hipoxemia refractaria severa.
Opción C (defecto de difusión puro): mejora parcialmente con FiO2 alta; aquí PaO2 sube solo +5 mmHg.
Opción D (efecto Bohr inverso): no explica hipoxemia refractaria en SDRA.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Hipoxemia refractaria = subir más FiO2."
Pero en shunt verdadero el oxígeno no llega a la sangre del shunt; más O2 no corrige PaO2.
Aquí el dato decisivo es:
FiO2 100% con PaO2 que sube solo +5 mmHg = shunt verdadero → PEEP, no más oxígeno.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. SDRA → exudado alveolar → V=0 con Q mantenida.
2. Sangre venosa no oxigenada se mezcla con arterial → PaO2 baja.
3. FiO2 100% no corrige shunt verdadero.
4. PEEP recluta unidades colapsadas y reduce shunt.

Perlas de examen
✅ PaO2 no corrige con FiO2 100% = shunt verdadero.
✅ V/Q=0: perfusión sin ventilación.
✅ Espacio muerto → hipercapnia, no hipoxemia refractaria severa.
✅ Defecto de difusión mejora parcialmente con FiO2 alta.
✅ Hipoxemia refractaria a FiO2 100% = shunt; usa PEEP.
✅ Más oxígeno no sirve en shunt verdadero masivo.

Referencias
• West: Respiratory Physiology — The Essentials (V/Q relationships).
• ARDSNet Protocol.
• UpToDate: Pathophysiology and diagnosis of ARDS.`,
  },
  {
    id: "dr-q-63",
    examArea: "Medicina Interna / Fisiopatología / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "aki", "triple_whammy", "autorregulacion"],
    statement:
      "Hombre de 75 años, diarrea 3 días + ibuprofeno + losartán. PA 90/60, deshidratado. Cr 1.1→4.8 en 72 h, BUN 120, Na urinario <10, FENa <1%. ¿Cómo los fármacos colapsan la autorregulación glomerular?",
    options: [
      {
        id: "A",
        label: "A",
        text: "AINE vasoconstrictor eferente; ARA II dilata aferente → ↑ presión intraglomerular.",
      },
      {
        id: "B",
        label: "B",
        text: "AINE bloquea prostaglandinas (↓ dilatación aferente); ARA II bloquea vasoconstricción eferente → colapso presión intraglomerular.",
      },
      { id: "C", label: "C", text: "Nefritis intersticial con cilindros leucocitarios." },
      { id: "D", label: "D", text: "Losartán inhibe ADH; ibuprofeno diurético directo." },
    ],
    correctOptionId: "B",
    explanation:
      "Hipovolemia: riñón dilata aferente (PG) y constriñe eferente (Ang II) para mantener TFG. AINE bloquea PG → aferente constriñida. Losartán bloquea Ang II → eferente dilatada. Sin entrada y salida abierta → presión glomerular ~0 → AKI prerrenal (FENa <1%).",
    keyPoints: [
      "Cuando veas: diarrea + deshidratación + ibuprofeno + losartán + Cr que sube rápido + FENa <1%.",
      "Debes pensar en: triple whammy — AINE cierra aferente (PG) y ARA II abre eferente → colapso presión intraglomerular.",
      "Aferente = Prostaglandinas (A-A). Eferente = Angiotensina II (E-E).",
      "FENa bajo = túbulos intactos, fallo hemodinámico prerrenal.",
      "Tema: triple whammy / autorregulación glomerular / AKI prerrenal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de fisiopatología / nefrología porque evalúa cómo los fármacos colapsan la autorregulación glomerular en hipovolemia.

La clave no es nefritis intersticial, efectos diuréticos de losartán ni inversión de la fisiología aferente/eferente.
La clave es:
AINE bloquea prostaglandinas (↓ dilatación aferente); ARA II bloquea vasoconstricción eferente → colapso presión intraglomerular.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 75 años, diarrea 3 días + ibuprofeno + losartán; deshidratado PA 90/60.
• Cr 1.1→4.8 en 72 h; BUN 120, Na urinario <10, FENa <1%.
• Hipovolemia activa mecanismos de rescate renal que ambos fármacos bloquean.

Recordemos autorregulación glomerular:
• Aferente = prostaglandinas (dilatación); eferente = angiotensina II (constricción).
• Hipovolemia: riñón dilata aferente (PG) y constriñe eferente (Ang II) para mantener TFG.
• AINE bloquea PG → aferente constriñida; losartán bloquea Ang II → eferente dilatada.
• Sin entrada ni salida abierta → presión glomerular ~0 → anuria.
• Triple whammy: AINE + IECA/ARA II + diurético en hipovolemia.

Por lo tanto:
Los fármacos colapsan la autorregulación cerrando la aferente y abriendo la eferente → AKI prerrenal.

¿Por qué la opción B es la respuesta correcta?
Describe el mecanismo fisiológico exacto: AINE impide dilatación aferente por PG y losartán impide constricción eferente por Ang II → caída de presión intraglomerular.

¿Por qué fallan las otras opciones?
Opción A (AINE vasoconstrictor eferente + ARA II dilata aferente): invierte la fisiología real.
Opción C (nefritis intersticial): FENa bajo y Na urinario <10 descartan NTA/NIA.
Opción D (losartán inhibe ADH + ibuprofeno diurético): no es el mecanismo de AKI aguda hemodinámica.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"AINE daña riñón por nefritis intersticial."
Pero con FENa <1% y Na urinario <10 el fallo es hemodinámico prerrenal, no tubular.
Aquí el dato decisivo es:
Deshidratación + AINE + losartán + FENa <1% = cierra entrada y abre salida → AKI prerrenal.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Hipovolemia activa PG (aferente) y Ang II (eferente) para mantener TFG.
2. AINE bloquea PG → aferente constriñida.
3. Losartán bloquea Ang II → eferente dilatada.
4. Presión intraglomerular ~0 → AKI prerrenal con FENa <1%.

Perlas de examen
✅ Aferente = Prostaglandinas (A-A). Eferente = Angiotensina (E-E).
✅ AINE cierra entrada; IECA/ARA II abren salida.
✅ Triple whammy: AINE + IECA/ARA II + diurético en hipovolemia.
✅ FENa bajo = túbulos intactos, fallo hemodinámico.
✅ En deshidratación = anuria si bloqueas ambas vías de rescate.
✅ Na urinario <10 + FENa <1% descartan NTA.

Referencias
• KDIGO Clinical Practice Guideline for Acute Kidney Injury.
• UpToDate: NSAIDs and nephrotoxicity.
• Brenner & Rector: The Kidney — Glomerular hemodynamics.`,
  },
  {
    id: "dr-q-64",
    examArea: "Medicina Interna / Fisiopatología / Endocrinología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "cad", "potasio", "insulina"],
    statement:
      "Hombre de 22 años, debut DM1, CAD severa. pH 7.05, HCO3 5, AG 26, K+ 5.2 mEq/L. Médico inicia insulina 0.1 U/kg/h prioritariamente; 30 min después FV por K+ 1.8. ¿Mecanismo de caída catastrófica del potasio?",
    options: [
      {
        id: "A",
        label: "A",
        text: "K+ sérico falsamente normal por intercambio H+/K+ y déficit corporal total por diuresis osmótica; insulina activa Na+/K+ ATPasa secuestrando K+ intracelular.",
      },
      { id: "B", label: "B", text: "Pseudohiperkalemia hemolítica; insulina diurética distal." },
      { id: "C", label: "C", text: "Insulina activa ROMK y aldosterona expulsa K+ en 30 min." },
      { id: "D", label: "D", text: "Insulina corrige pH rápido abriendo canales miocárdicos." },
    ],
    correctOptionId: "A",
    explanation:
      "CAD: déficit total K+ masivo (diuresis osmótica) enmascarado por acidosis (H+ entra, K+ sale) e insulopenia. K+ 5.2 es espejismo. Insulina → Na+/K+ ATPasa → K+ plasmático colapsa en minutos. ADA: no insulina si K+ <3.3; reponer K+ antes/durante.",
    keyPoints: [
      "Cuando veas: CAD severa + K+ aparentemente normal-alto + insulina iniciada → FV por hipokalemia en minutos.",
      "Debes pensar en: paradoja del potasio — déficit corporal masivo enmascarado por acidosis e insulopenia.",
      "K+ normal-alto en CAD = déficit corporal total; insulina desplaza K+ intracelular en minutos.",
      "Nunca insulina sin asegurar K+ si ≤5.2 con acidosis (ADA: no insulina si K+ <3.3).",
      "Tema: CAD / paradoja del potasio / Na+/K+ ATPasa.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de fisiopatología / endocrinología porque evalúa el mecanismo de caída catastrófica del potasio tras insulina en CAD.

La clave no es pseudohiperkalemia hemolítica, ROMK/aldosterona en 30 min ni corrección rápida de pH por canales miocárdicos.
La clave es:
K+ sérico falsamente normal por intercambio H+/K+ y déficit corporal total por diuresis osmótica; insulina activa Na+/K+ ATPasa secuestrando K+ intracelular.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 22 años, debut DM1, CAD severa (pH 7.05, HCO3 5, AG 26).
• K+ 5.2 mEq/L aparentemente normal; insulina 0.1 U/kg/h iniciada.
• 30 min después: FV por K+ 1.8 mEq/L (caída catastrófica).

Recordemos paradoja del potasio en CAD:
• CAD: déficit total K+ masivo (diuresis osmótica) enmascarado por acidosis (H+ entra, K+ sale) e insulopenia.
• K+ 5.2 en CAD es espejismo; déficit corporal puede ser 300–600 mEq.
• Insulina → Na+/K+ ATPasa → K+ plasmático colapsa en minutos.
• ADA: no insulina si K+ <3.3; reponer K+ antes/durante si ≤5.2 con acidosis.
• Acidosis corrige parcialmente K+ al subir pH, pero insulina lo desplaza más rápido.

Por lo tanto:
La caída catastrófica se explica por déficit corporal enmascarado + internalización aguda de K+ por insulina vía Na+/K+ ATPasa.

¿Por qué la opción A es la respuesta correcta?
Integra el enmascaramiento del déficit (intercambio H+/K+, diuresis osmótica) con el mecanismo agudo de hipokalemia post-insulina (Na+/K+ ATPasa).

¿Por qué fallan las otras opciones?
Opción B (pseudohiperkalemia hemolítica): la caída post-insulina confirma déficit real, no artefacto.
Opción C (insulina activa ROMK y aldosterona en 30 min): el mecanismo principal es Na+/K+ ATPasa, no vía distal.
Opción D (insulina corrige pH rápido abriendo canales miocárdicos): no es el mecanismo de hipokalemia aguda.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"K+ 5.2 = seguro iniciar insulina de inmediato."
Pero en CAD el K+ sérico miente: déficit corporal masivo enmascarado por acidosis.
Aquí el dato decisivo es:
K+ ≤5.2 con acidosis en CAD → repón K+ ANTES de insulina; la caída puede ser letal en 30 min.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. CAD causa déficit total K+ por diuresis osmótica.
2. Acidosis e insulopenia enmascaran el déficit (K+ sérico falsamente normal-alto).
3. Insulina activa Na+/K+ ATPasa → K+ intracelular en minutos.
4. Repón K+ antes/durante insulina si ≤5.2 con acidosis; no insulina si K+ <3.3.

Perlas de examen
✅ K+ normal-alto en CAD = déficit corporal total.
✅ Insulina desplaza K+ intracelular en minutos vía Na+/K+ ATPasa.
✅ Nunca insulina sin asegurar K+ si ≤5.2 con acidosis.
✅ ADA: no insulina si K+ <3.3.
✅ K+ en CAD miente — repón ANTES de insulina.
✅ FV por hipokalemia puede ocurrir en 30 min post-insulina.

Referencias
• ADA Standards of Care — Diabetic Ketoacidosis.
• UpToDate: Treatment of diabetic ketoacidosis and hyperosmolar hyperglycemic state.
• Harrison's Principles of Internal Medicine — Fluid and electrolyte disturbances in DKA.`,
  },
  {
    id: "dr-q-65",
    examArea: "Medicina Interna / Fisiopatología / Cardiología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "hfref", "laplace", "remodelado"],
    statement:
      "Hombre de 72 años, HFrEF terminal. VI dilatado (DDVI 70 mm), pared 8 mm, FEVI 20%, IM funcional severa, soplo holosistólico ápex. ¿Principio físico que explica ↑ consumo O2 miocárdico e IM funcional simultáneamente?",
    options: [
      { id: "A", label: "A", text: "Efecto Venturi succiona valvas mitrales." },
      { id: "B", label: "B", text: "Frank-Starling optimiza contracción con estiramiento excesivo." },
      {
        id: "C",
        label: "C",
        text: "Ley de Laplace (σ=P×r/2h): ↑ radio y ↓ grosor ↑ tensión parietal/MVO2; dilatación anillo mitral separa papilares → IM funcional.",
      },
      { id: "D", label: "D", text: "Poiseuille: coronarias estrechas causan isquemia papilar." },
    ],
    correctOptionId: "C",
    explanation:
      "Remodelado excéntrico: radio ↑, h ↓ → estrés parietal (Laplace) ↑ → MVO2 ↑. Dilatación esferoidal estira anillo mitral y desplaza papilares → coaptación fallida → IM funcional → sobrecarga volumen (círculo vicioso). Starling en fase descendente (sarcómeras sobre-estiradas).",
    keyPoints: [
      "Cuando veas: HFrEF terminal + VI dilatado + pared delgada + IM funcional severa + soplo holosistólico en ápex.",
      "Debes pensar en: Ley de Laplace (σ=P×r/2h) — ↑ radio y ↓ grosor ↑ tensión parietal/MVO2 + IM funcional por geometría.",
      "Laplace: tensión = (P×r)/(2×h); VI esferoidal = agonía energética.",
      "IM funcional = geometría (anillo estirado, papilares desplazados), no valva enferma.",
      "Tema: HFrEF / Ley de Laplace / IM funcional / remodelado excéntrico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de fisiopatología / cardiología porque evalúa el principio físico que explica ↑ consumo O2 miocárdico e IM funcional simultáneamente en HFrEF terminal.

La clave no es efecto Venturi, Frank-Starling optimizador ni Poiseuille en coronarias.
La clave es:
Ley de Laplace (σ=P×r/2h): ↑ radio y ↓ grosor ↑ tensión parietal/MVO2; dilatación anillo mitral separa papilares → IM funcional.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 72 años, HFrEF terminal; VI dilatado (DDVI 70 mm), pared 8 mm, FEVI 20%.
• IM funcional severa, soplo holosistólico en ápex.
• Remodelado excéntrico: radio ↑, grosor ↓ → estrés parietal ↑ + coaptación mitral fallida.

Recordemos Ley de Laplace y remodelado en HFrEF:
• Ley de Laplace: σ = (P×r)/(2×h); ↑ radio y ↓ grosor → tensión parietal y MVO2 ↑.
• Dilatación esferoidal estira anillo mitral y desplaza papilares → IM funcional (geometría, no valva enferma).
• IM funcional → sobrecarga volumen → círculo vicioso de remodelado.
• Frank-Starling en fase descendente: sarcómeras sobre-estiradas, no optimización.
• IECA/BB ↓ presión y radio → ↓ MVO2 y frenan remodelado.

Por lo tanto:
Laplace explica simultáneamente el ↑ MVO2 por tensión parietal y la IM funcional por tracción papilar/anillo estirado.

¿Por qué la opción C es la respuesta correcta?
Aplica el principio físico de Laplace al VI esferoidal y delgado, vinculando ↑ tensión parietal/MVO2 con falla de coaptación mitral por geometría alterada.

¿Por qué fallan las otras opciones?
Opción A (efecto Venturi): no explica ↑ MVO2 ni geometría papilar.
Opción B (Frank-Starling optimiza con estiramiento excesivo): en fase descendente empeora contracción.
Opción D (Poiseuille en coronarias): isquemia papilar contribuye pero Laplace explica ambos fenómenos simultáneos.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"IM = valvulopatía estructural primaria."
Pero IM funcional en HFrEF es por geometría: anillo estirado y papilares desplazados, no valva enferma.
Aquí el dato decisivo es:
VI esferoidal (DDVI 70 mm) + pared 8 mm = Laplace → ↑ MVO2 + IM funcional simultáneos.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Remodelado excéntrico: radio ↑, grosor ↓.
2. Laplace: ↑ tensión parietal → ↑ MVO2 (agonía energética).
3. Dilatación esferoidal estira anillo mitral y desplaza papilares.
4. IM funcional → sobrecarga volumen → círculo vicioso; IECA/BB frenan remodelado.

Perlas de examen
✅ Laplace: tensión = (P×r)/(2×h).
✅ VI esferoidal y delgado = agonía energética (Laplace).
✅ IM funcional = geometría, no valva enferma.
✅ Frank-Starling en fase descendente con estiramiento excesivo.
✅ IECA/BB ↓ presión y radio → ↓ MVO2.
✅ IM funcional → sobrecarga volumen → círculo vicioso.

Referencias
• Braunwald's Heart Disease — Heart Failure and Remodeling.
• UpToDate: Pathophysiology of heart failure with reduced ejection fraction.
• Otto: Functional mitral regurgitation in dilated cardiomyopathy.`,
  },
  {
    id: "dr-q-66",
    examArea: "Medicina Interna / Fisiopatología / Gasometría",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "acido_base", "stewart", "hipercloremia"],
    statement:
      "Mujer de 40 años post-peritonitis, 8 L SF 0.9% en 24 h. Euvolémica, lactato 1.2, Cr 0.9. Na 154, Cl 126, pH 7.22, HCO3 14, AG aparente 14. ¿Alteración iónica primaria según modelo Stewart?",
    options: [
      { id: "A", label: "A", text: "Exceso Cl- obliga riñón a reabsorber H+." },
      { id: "B", label: "B", text: "SF 0.9% aporta H+ libres in vitro." },
      {
        id: "C",
        label: "C",
        text: "Infusión masiva ↓ SID (Na-Cl); electroneutralidad fuerza disociación H2O → ↑ H+ libre → acidosis hiperclorémica.",
      },
      { id: "D", label: "D", text: "Na+ hiperactiva Na+/H+ expulsa H+ al plasma." },
    ],
    correctOptionId: "C",
    explanation:
      "Stewart: pH depende de SID, pCO2, ácidos débiles. SF 0.9% (Na 154, Cl 154) SID=0 diluye SID plasmático. SID ↓ → agua se disocia → ↑ H+ → consume HCO3 → acidosis hiperclorémica con AG normal. Lactato normal descarta hipoperfusión.",
    keyPoints: [
      "Cuando veas: 8 L SF 0.9% en 24 h + acidosis + AG aparente normal + Cl elevado + lactato normal.",
      "Debes pensar en: acidosis hiperclorémica iatrogénica según Stewart — ↓ SID (Na-Cl) → disociación H2O → ↑ H+.",
      "SID normal ~40 (Na-Cl gap); SF 0.9% tiene SID=0.",
      "Usar cristaloides balanceados (RL/Plasmalyte) en reanimación masiva.",
      "Tema: modelo Stewart / acidosis hiperclorémica / SF 0.9% iatrogénica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de fisiopatología / gasometría porque evalúa la alteración iónica primaria según el modelo Stewart tras infusión masiva de solución salina.

La clave no es exceso de Cl- obligando reabsorción de H+, H+ libres exógenos del SF ni Na+ hiperactivo.
La clave es:
Infusión masiva ↓ SID (Na-Cl); electroneutralidad fuerza disociación H2O → ↑ H+ libre → acidosis hiperclorémica.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 40 años post-peritonitis, 8 L SF 0.9% en 24 h.
• Euvolémica; lactato 1.2, Cr 0.9 (no hipoperfusión).
• Na 154, Cl 126, pH 7.22, HCO3 14, AG aparente 14 (normal).

Recordemos modelo Stewart de equilibrio ácido-base:
• Stewart: pH depende de SID (strong ion difference), pCO2 y ácidos débiles.
• SF 0.9% (Na 154, Cl 154) tiene SID=0; infusión masiva diluye SID plasmático (~40).
• SID ↓ → agua se disocia → ↑ H+ → consume HCO3 → acidosis hiperclorémica con AG normal.
• Lactato normal descarta acidosis por hipoperfusión.
• SSC: cristaloides balanceados (RL/Plasmalyte) en reanimación.

Por lo tanto:
La alteración iónica primaria es ↓ SID por infusión de solución con SID=0 → acidosis hiperclorémica iatrogénica.

¿Por qué la opción C es la respuesta correcta?
Describe el mecanismo Stewart completo: dilución del SID plasmático fuerza disociación de agua para mantener electroneutralidad → ↑ H+ libre → acidosis con AG normal.

¿Por qué fallan las otras opciones?
Opción A (exceso Cl- obliga riñón a reabsorber H+): simplificación incorrecta del mecanismo Stewart.
Opción B (SF 0.9% aporta H+ libres in vitro): el ácido viene de disociación de agua, no de H+ exógeno.
Opción D (Na+ hiperactiva Na+/H+ expulsa H+): no es el mecanismo de acidosis hiperclorémica.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Acidosis con AG normal = solo acidosis tubular renal."
Pero 8 L de SF 0.9% con Cl 126 y lactato normal = acidosis hiperclorémica iatrogénica por ↓ SID.
Aquí el dato decisivo es:
AG aparente 14 (normal) + Cl 126 + 8 L salina = ↓ SID, no acidosis metabólica con AG elevado.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. SF 0.9% (Na 154, Cl 154) tiene SID=0.
2. Infusión masiva diluye SID plasmático (~40 → menor).
3. SID ↓ → disociación de H2O → ↑ H+ libre → consume HCO3.
4. Acidosis hiperclorémica con AG normal; usar cristaloides balanceados.

Perlas de examen
✅ SID normal ~40 (Na-Cl gap).
✅ SF 0.9% SID=0 → acidosis hiperclorémica iatrogénica.
✅ Salina "normal" no es normal para el pH.
✅ AG normal + Cl elevado post-salina = Stewart, no hipoperfusión.
✅ Lactato normal descarta acidosis por shock.
✅ Usar cristaloides balanceados (RL/Plasmalyte) en reanimación masiva.

Referencias
• Stewart's Textbook of Acid-Base — Strong Ion Difference.
• Surviving Sepsis Campaign — Fluid resuscitation guidelines.
• UpToDate: Strong ion difference and acid-base disorders.`,
  },
  {
    id: "dr-q-67",
    examArea: "Medicina Interna / Fisiopatología / Cardiología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "eap", "diastolica", "serca"],
    statement:
      "Hombre de 55 años, crisis HTA 200/120, EAP fulminante, infradesnivel ST V3-V6, FEVI 60% preservada. ¿Proceso molecular interrumpido por isquemia que colapsa relajación diastólica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Isquemia depleta ATP → puentes actina-miosina no disocian y SERCA2a no reupta Ca2+ → rigidez diastólica → ↑ presión telediastólica → EAP con FEVI preservada.",
      },
      { id: "B", label: "B", text: "Glicólisis anaerobia bloquea Na+ rápido fase 0." },
      { id: "C", label: "C", text: "Noradrenalina prolonga potencial acción acortando diástole." },
      { id: "D", label: "D", text: "Citoquinas destruyen elastina instantáneamente." },
    ],
    correctOptionId: "A",
    explanation:
      "Relajación diastólica consume más ATP que sístole. Isquemia subendocárdica → ↓ ATP → falla SERCA2a (Ca2+ citosólico persistente) + rigor reversible → VI rígido → PTDVI ↑ → transmisión retrógrada → EAP. FEVI puede estar normal (disfunción diastólica aguda).",
    keyPoints: [
      "Cuando veas: crisis HTA + EAP fulminante + infradesnivel ST + FEVI preservada (60%).",
      "Debes pensar en: isquemia subendocárdica → ↓ ATP → falla SERCA2a → rigidez diastólica → EAP con FEVI normal.",
      "Diástole es activa y ATP-dependiente; relajación gasta más ATP que contracción.",
      "Isquemia afecta lusitropismo antes que inotropismo.",
      "Tema: EAP con FEVI preservada / SERCA2a / disfunción diastólica isquémica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de fisiopatología / cardiología porque evalúa el proceso molecular interrumpido por isquemia que colapsa la relajación diastólica con FEVI preservada.

La clave no es glicólisis anaerobia bloqueando Na+ fase 0, noradrenalina prolongando potencial de acción ni citoquinas destruyendo elastina.
La clave es:
Isquemia depleta ATP → puentes actina-miosina no disocian y SERCA2a no reupta Ca2+ → rigidez diastólica → ↑ presión telediastólica → EAP con FEVI preservada.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 55 años, crisis HTA 200/120, EAP fulminante.
• Infradesnivel ST V3-V6, FEVI 60% preservada.
• Isquemia subendocárdica interrumpe relajación diastólica activa (ATP-dependiente).

Recordemos disfunción diastólica isquémica aguda:
• Relajación diastólica consume más ATP que sístole.
• Isquemia → ↓ ATP → falla SERCA2a (Ca2+ citosólico persistente) + rigor reversible.
• Puentes actina-miosina no disocian → VI rígido → PTDVI ↑.
• Transmisión retrógrada de presión → EAP.
• FEVI puede estar normal: disfunción diastólica aguda antes que inotropismo caiga.
• Isquemia afecta lusitropismo antes que inotropismo.

Por lo tanto:
El proceso molecular interrumpido es la función de SERCA2a por depleción de ATP isquémica → rigidez diastólica → EAP con FEVI preservada.

¿Por qué la opción A es la respuesta correcta?
Integra depleción de ATP isquémica con falla de SERCA2a y rigidez diastólica, explicando EAP fulminante con FEVI aún normal.

¿Por qué fallan las otras opciones?
Opción B (glicólisis anaerobia bloquea Na+ fase 0): afecta contracción, no explica EAP con FEVI normal primero.
Opción C (noradrenalina prolonga potencial acción): no es el mecanismo de rigidez diastólica isquémica.
Opción D (citoquinas destruyen elastina): no es proceso instantáneo en crisis HTA aguda.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"EAP = FEVI baja siempre."
Pero EAP fulminante con FEVI preservada indica disfunción diastólica isquémica aguda, no falla sistólica.
Aquí el dato decisivo es:
EAP + FEVI 60% + infradesnivel ST = isquemia apaga SERCA2a → VI rígido → EAP por disfunción diastólica.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Crisis HTA → ↑ demanda O2 subendocárdico → isquemia.
2. ↓ ATP → falla SERCA2a + puentes actina-miosina no disocian.
3. Rigidez diastólica → PTDVI ↑ → transmisión retrógrada → EAP.
4. FEVI preservada porque inotropismo aún no colapsa (lusitropismo afectado primero).

Perlas de examen
✅ Diástole es activa y ATP-dependiente.
✅ Relajación gasta más ATP que contracción.
✅ Isquemia afecta lusitropismo antes que inotropismo.
✅ EAP + FEVI normal = piensa disfunción diastólica isquémica.
✅ SERCA2a falla → Ca2+ citosólico persistente → rigidez.
✅ Crisis HTA + EAP + FEVI preservada = isquemia subendocárdica.

Referencias
• ACC/AHA Heart Failure Guidelines — HFpEF and acute decompensation.
• Braunwald's Heart Disease — Diastolic heart failure.
• UpToDate: Pathophysiology of diastolic dysfunction and heart failure with preserved ejection fraction.`,
  },
  {
    id: "dr-q-68",
    examArea: "Medicina Interna / Fisiopatología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "taponamiento", "pulso_paradoxo"],
    statement:
      "Hombre de 30 años, trauma torácico, taponamiento cardíaco. PA 65/40, FC 145, JVP extrema, pulso desaparece en inspiración. POCUS: derrame pericárdico colapsa VD en diástole; septum abomba a izquierda en inspiración. ¿Mecanismo del pulso paradójico?",
    options: [
      { id: "A", label: "A", text: "Inspiración succiona líquido pericárdico a pleura." },
      {
        id: "B",
        label: "B",
        text: "↑ retorno venoso al VD en inspiración; pericardio rígido impide expansión externa → septum empuja VI → ↓ llenado VI → ↓ gasto sistémico.",
      },
      { id: "C", label: "C", text: "Presión negativa colapsa aurícula izquierda." },
      { id: "D", label: "D", text: "Reflejo Bezold-Jarisch bloquea AV en inspiración." },
    ],
    correctOptionId: "B",
    explanation:
      "Interdependencia ventricular patológica: inspiración ↑ retorno al VD pero pericardio a tensión impide dilatación externa → volumen empuja septum hacia VI → ↓ precarga VI → ↓ volumen sistólico → caída PA >10 mmHg (pulso paradójico).",
    keyPoints: [
      "Cuando veas: taponamiento cardíaco + JVP extrema + pulso que desaparece en inspiración + septum abomba a izquierda en POCUS.",
      "Debes pensar en: interdependencia ventricular patológica — inspiración ↑ retorno al VD pero pericardio rígido impide expansión → septum empuja VI.",
      "Pericardio a tensión = coraza; pelea VD vs VI por volumen finito.",
      "Pulso paradójico: caída PA sistólica >10 mmHg en inspiración.",
      "Tema: taponamiento cardíaco / pulso paradójico / interdependencia ventricular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de fisiopatología / urgencias porque evalúa el mecanismo del pulso paradójico en taponamiento cardíaco.

La clave no es succión de líquido pericárdico a pleura, colapso de aurícula izquierda ni reflejo Bezold-Jarisch.
La clave es:
↑ retorno venoso al VD en inspiración; pericardio rígido impide expansión externa → septum empuja VI → ↓ llenado VI → ↓ gasto sistémico.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 30 años, trauma torácico, taponamiento cardíaco.
• PA 65/40, FC 145, JVP extrema, pulso desaparece en inspiración.
• POCUS: derrame colapsa VD en diástole; septum abomba a izquierda en inspiración.

Recordemos interdependencia ventricular en taponamiento:
• Pericardio a tensión = coraza inelástica; volumen total cardíaco fijo.
• Inspiración ↑ retorno venoso al VD; pericardio impide dilatación externa.
• Volumen empuja septum hacia VI → ↓ precarga VI → ↓ volumen sistólico.
• Caída PA sistólica >10 mmHg en inspiración = pulso paradójico.
• Bezold-Jarisch = bradicardia por estímulo ventricular, no pulso paradójico con taquicardia.

Por lo tanto:
El pulso paradójico se explica por batalla de volumen en coraza inelástica: VD gana en inspiración a costa del VI.

¿Por qué la opción B es la respuesta correcta?
Describe la interdependencia ventricular patológica: ↑ retorno al VD en inspiración sin espacio pericárdico → desplazamiento septal → ↓ llenado y gasto del VI.

¿Por qué fallan las otras opciones?
Opción A (inspiración succiona líquido a pleura): no explica interdependencia ventricular.
Opción C (presión negativa colapsa aurícula izquierda): el mecanismo es septum shift VD→VI.
Opción D (reflejo Bezold-Jarisch bloquea AV): causa bradicardia, no pulso paradójico con taquicardia.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Pulso paradójico = cualquier caída de pulso en inspiración sin mecanismo."
Pero en taponamiento es interdependencia ventricular: VD se llena más y empuja septum contra VI rígido.
Aquí el dato decisivo es:
POCUS con septum abombando a izquierda en inspiración = batalla de volumen en coraza → pulso paradójico.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Taponamiento → pericardio a tensión = coraza inelástica.
2. Inspiración ↑ retorno venoso al VD.
3. Sin expansión externa → septum empuja VI → ↓ precarga VI.
4. ↓ volumen sistólico → caída PA >10 mmHg = pulso paradójico.

Perlas de examen
✅ Pericardio a tensión = coraza; pelea VD vs VI por volumen.
✅ Pulso paradójico: caída PA sistólica >10 mmHg en inspiración.
✅ Septum abomba a izquierda en inspiración en POCUS = interdependencia patológica.
✅ Bezold-Jarisch = bradicardia, no pulso rítmico con taquicardia.
✅ Pulso paradójico = batalla de volumen en coraza inelástica.
✅ VD colapsado en diástole + JVP extrema = taponamiento.

Referencias
• ATLS — Cardiac tamponade management.
• UpToDate: Cardiac tamponade — Pathophysiology and clinical features.
• Braunwald's Heart Disease — Pericardial diseases.`,
  },
  {
    id: "dr-q-69",
    examArea: "Medicina Interna / Fisiopatología / Endocrinología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "hipocalcemia", "trousseau", "canales_sodio"],
    statement:
      "Mujer de 35 años, 48 h post-tiroidectomía, Ca total 6.5 mg/dL. Parestesias, Trousseau y Chvostek (+). ¿Mecanismo biofísico de hiperexcitabilidad neuromuscular?",
    options: [
      { id: "A", label: "A", text: "Ca2+ activa acetilcolinesterasa; déficit → ACh acumulada." },
      { id: "B", label: "B", text: "Falla liberación calcio inducida por calcio en retículo." },
      { id: "C", label: "C", text: "Ca2+ bloquea K+ en reposo; hipocalcemia hiperpolariza." },
      {
        id: "D",
        label: "D",
        text: "Ca2+ extracelular estabiliza canales Na+ voltaje-dependientes; hipocalcemia ↓ umbral → descargas espontáneas → tetania.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Ca2+ extracelular blinda canales Na+ en reposo, elevando umbral de disparo. Hipocalcemia desestabiliza membrana → apertura espontánea Na+ → potenciales de acción repetitivos → tetania, Trousseau, Chvostek. Ca2+ excita menos la placa motora sin Ca presináptico (parálisis), no tetania.",
    keyPoints: [
      "Cuando veas: hipocalcemia post-tiroidectomía (Ca <8 mg/dL) + parestesias + Trousseau y Chvostek positivos.",
      "Debes pensar en: Ca2+ extracelular estabiliza canales Na+ voltaje-dependientes → hipocalcemia ↓ umbral → descargas espontáneas → tetania.",
      "Trousseau/Chvostek = hiperexcitabilidad neuromuscular periférica, no placa motora ni acumulación de ACh.",
      "Calcio tranquiliza el nervio; sin él, canales Na+ disparan solos (tetania, no parálisis flácida).",
      "Tema: Hipocalcemia — fisiopatología de la hiperexcitabilidad neuromuscular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de fisiopatología endocrina porque evalúa el mecanismo biofísico de la tetania por hipocalcemia post-tiroidectomía: Ca2+ extracelular estabiliza canales Na+ voltaje-dependientes, y su déficit genera hiperexcitabilidad neuromuscular.

La clave no es confundir tetania con parálisis por placa motora, falla de liberación de Ca2+ en retículo o bloqueo de K+ en reposo.
La clave es:
Reconocer que Ca2+ extracelular blinda canales Na+ en reposo, elevando el umbral de disparo; hipocalcemia desestabiliza la membrana → apertura espontánea de Na+ → potenciales de acción repetitivos → Trousseau, Chvostek y tetania.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 35 años, 48 h post-tiroidectomía; Ca total 6.5 mg/dL.
• Parestesias periféricas, signos de Trousseau y Chvostek positivos.
• Hipoparatiroidismo post-quirúrgico → ↓ PTH → ↓ Ca2+ extracelular → hiperexcitabilidad neuromuscular.

Recordemos la fisiología del calcio y la excitabilidad de membrana:
• Ca2+ extracelular se une a la superficie externa de canales Na+ voltaje-dependientes en reposo.
• Este "blindaje" eleva el umbral de disparo y estabiliza el potencial de membrana.
• Hipocalcemia ↓ blindaje → canales Na+ se abren con menor estímulo → descargas espontáneas.
• Trousseau (espasmo carpopedal con manguito) y Chvostek (contracción facial) = signos clínicos de hiperexcitabilidad periférica.
• Tetania es origen nervio periférico/muscular, no placa motora (ACh acumulada → parálisis flácida, no tetania).

Por lo tanto:
El mecanismo biofísico correcto es desestabilización de canales Na+ por hipocalcemia → hiperexcitabilidad neuromuscular con tetania.

¿Por qué la opción D es la respuesta correcta?
Describe con precisión que Ca2+ extracelular estabiliza canales Na+ voltaje-dependientes; hipocalcemia ↓ umbral → descargas espontáneas → tetania, Trousseau y Chvostek.

¿Por qué fallan las otras opciones?
Opción A (Ca2+ activa acetilcolinesterasa): déficit de AChE causaría acumulación de ACh y parálisis flácida, no tetania espástica.
Opción B (falla liberación Ca2+ en retículo): afecta contracción muscular excitación-contracción, no hiperexcitabilidad de membrana en reposo.
Opción C (Ca2+ bloquea K+ hiperpolarizando): mecanismo incorrecto; Ca2+ estabiliza Na+, no bloquea K+ en reposo.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Hipocalcemia = problemas en la placa motora o contracción muscular."
Pero Trousseau y Chvostek son signos de hiperexcitabilidad de nervio periférico por desestabilización de Na+.
Aquí el dato decisivo es:
Post-tiroidectomía + Ca 6.5 + signos de Trousseau/Chvostek = tetania por ↓ estabilización de canales Na+.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar hipocalcemia sintomática (parestesias, espasmo carpopedal, signos de Chvostek/Trousseau).
2. Recordar que Ca2+ extracelular estabiliza canales Na+ voltaje-dependientes.
3. Hipocalcemia → ↓ umbral de disparo → descargas espontáneas → tetania.
4. Diferenciar de parálisis por placa motora (ACh acumulada) o falla de contracción (retículo).

Perlas de examen
✅ Ca2+ extracelular = estabilizador de membrana vía canales Na+.
✅ Hipocalcemia → hiperexcitabilidad neuromuscular (Trousseau, Chvostek, tetania).
✅ Tetania = origen nervio periférico, no placa motora.
✅ Post-tiroidectomía: hipoparatiroidismo → ↓ PTH → ↓ Ca2+ en 24-48 h.
✅ Parálisis flácida por ACh acumulada ≠ tetania espástica por hipocalcemia.

Referencias
• Endocrine surgery complications — hypoparathyroidism.
• Guyton & Hall — membrane excitability and calcium.
• Harrison's Principles of Internal Medicine — disorders of calcium metabolism.
• UpToDate: Clinical manifestations of hypocalcemia.`,
  },
  {
    id: "dr-q-70",
    examArea: "Medicina Interna / Fisiopatología / UCI",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "fisiopatologia", "cor_pulmonale", "vph", "peep"],
    statement:
      "Hombre de 50 años con neumonía bilateral grave por Influenza A. Ingresa con fiebre alta, disnea intensa, saturación de oxígeno de 82% pese a oxígeno suplementario y extensa afectación pulmonar en la radiografía de tórax. Requiere ventilación mecánica por insuficiencia respiratoria aguda. ¿Cuál es el tratamiento antibiótico empírico más apropiado y en qué área del hospital debe manejarse inicialmente este paciente?",
    options: [
      { id: "A", label: "A", text: "Amoxicilina-clavulanato más claritromicina y manejo en sala de hospitalización convencional." },
      { id: "B", label: "B", text: "Ceftriaxona más azitromicina y manejo en Unidad de Cuidados Intensivos (UCI)." },
      { id: "C", label: "C", text: "Levofloxacino en monoterapia y observación en urgencias." },
      { id: "D", label: "D", text: "Cefotaxima más claritromicina y manejo en sala de hospitalización convencional." },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta una Neumonía Adquirida en la Comunidad (NAC) grave con insuficiencia respiratoria que requiere intubación, siendo esto un criterio mayor de la ATS/IDSA para ingreso a UCI. Aunque la infección viral primaria sea Influenza, las guías internacionales recomiendan agregar siempre un esquema antibiótico empírico (como Betalactámico + Macrólido, ej. Ceftriaxona + Azitromicina) debido a la altísima incidencia y mortalidad de la sobreinfección bacteriana por S. aureus o S. pneumoniae en estos casos graves.\n\n¿Por qué se descartan las otras opciones?\n• Opciones A, C y D: Plantean manejo en hospitalización convencional u observación en urgencias, lo cual es inaceptable en un paciente que ya requiere ventilación mecánica invasiva (Criterio mayor absoluto para UCI). Además, la monoterapia con fluoroquinolona (Opción C) suele reservarse para salas de hospitalización o manejo ambulatorio, no para NAC grave en UCI.",
    keyPoints: [
      "Necesidad de Ventilación Mecánica = Criterio Mayor de la ATS/IDSA para ingreso obligatorio a UCI.",
      "Neumonía por Influenza A grave = Alto riesgo de sobreinfección bacteriana letal (S. aureus, Neumococo).",
      "Tratamiento Empírico NAC Grave en UCI = Betalactámico IV (Ceftriaxona/Cefotaxima) + Macrólido (Azitromicina) O Fluoroquinolona respiratoria.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una de esas preguntas de medicina interna y UCI que busca romper un preconcepto peligroso en los estudiantes: "Si es un virus, no doy antibióticos". 

La clave no es enfocarse solo en el diagnóstico de Influenza A.
La clave es:
Paciente crítico intubado + Infección viral pulmonar extensa = Co-infección bacteriana hasta que se demuestre lo contrario.

¿Qué está ocurriendo realmente en la fisiopatología?
El paciente tiene un cuadro de Neumonía Adquirida en la Comunidad (NAC) que ha progresado a Síndrome de Dificultad Respiratoria Aguda (SDRA), requiriendo Ventilación Mecánica. Según los criterios ATS/IDSA, necesitar ventilación mecánica o soporte vasopresor son **Criterios Mayores** que obligan al ingreso a la Unidad de Cuidados Intensivos (UCI).
Respecto al cuestionamiento válido del estudiante: *"Si es influenza, ¿por qué tirar antibióticos?"*. Excelente observación, pero en el paciente CRÍTICO, la infección por el virus de la influenza daña severamente el epitelio respiratorio ciliado, alterando el clearance mucociliar y deprimiendo localmente a los macrófagos alveolares. Esto crea el caldo de cultivo perfecto para una **sobreinfección bacteriana secundaria**. Los agentes clásicos que "aprovechan" este daño viral son el *Staphylococcus aureus* y el *Streptococcus pneumoniae*. La mortalidad de una sobreinfección no tratada empíricamente en las primeras horas en un paciente ventilado supera el 50%. 
Por ello, TODO paciente con NAC que ingresa a UCI recibe empíricamente un esquema de amplio espectro, típicamente **Betalactámico (Ceftriaxona) + Macrólido (Azitromicina)** o Betalactámico + Quinolona respiratoria, independientemente de que se haya aislado un virus, al menos hasta tener procalcitonina baja repetida o cultivos negativos a las 48-72h.

¿Cuál es la trampa del examen?
Poner un diagnóstico viral inicial para que el estudiante suspenda o no marque los antibióticos por miedo a "crear resistencia". En urgencias y en UCI, la prioridad es salvar la vida: se dispara primero (antibiótico empírico agresivo) y se averigua después (desescalamiento con cultivos).

Perlas de examen y práctica clínica:
✅ **Criterios Mayores de NAC grave (ATS/IDSA):** Shock séptico que requiere vasopresores o Falla respiratoria que requiere ventilación mecánica invasiva. Con 1 solo criterio mayor el paciente va a UCI.
✅ **Sobrinfección bacteriana post-Influenza:** Sospechar fuertemente de *S. aureus* (incluso MRSA si hay factores de riesgo) y *S. pneumoniae*.
✅ **Esquema de Oro NAC en UCI:** Ceftriaxona + Azitromicina. (Y agregar Oseltamivir por la Influenza documentada).

Referencias
• ATS/IDSA Clinical Practice Guidelines for the Management of Community-Acquired Pneumonia in Adults.
• Surviving Sepsis Campaign Guidelines.
• Harrison's Principles of Internal Medicine.`,
  },
  {
    id: "dr-q-71",
    examArea: "Medicina Interna / Infectología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "endocarditis", "duke"],
    statement:
      "Hombre de 28 años, consumidor de heroína IV, fiebre 39 °C de 10 días, disnea y tos con expectoración sanguinolenta. FC 115, soplo holosistólico en foco tricuspídeo que aumenta con inspiración. Rx tórax: múltiples infiltrados nodulares cavitados bilaterales periféricos. Hemocultivos pendientes. ¿Conducta inmediata más adecuada?",
    options: [
      { id: "A", label: "A", text: "Esperar hemocultivos 48 h antes de antibióticos para no enmascarar el germen." },
      {
        id: "B",
        label: "B",
        text: "Iniciar vancomicina + gentamicina empírica tras tomar ≥2 pares de hemocultivos; ecocardiograma urgente.",
      },
      { id: "C", label: "C", text: "Anticoagulación plena por sospecha de TEP masivo." },
      { id: "D", label: "D", text: "Ceftriaxona monoterapia ambulatoria por neumonía comunitaria." },
    ],
    correctOptionId: "B",
    explanation:
      "Endocarditis tricuspídea por S. aureus en usuario de drogas IV: fiebre + soplo + émbolos sépticos pulmonares (infiltrados cavitados periféricos). Conducta: hemocultivos (≥2 pares) y antibióticos empíricos sin demora (<1 h en shock). Vancomicina cubre MRSA; gentamicina sinergia (según guía). Eco transtorácica/transesofágica urgente.",
    keyPoints: [
      "Cuando veas: usuario de drogas IV + fiebre + soplo tricuspídeo (aumenta con inspiración) + infiltrados cavitados pulmonares periféricos.",
      "Debes pensar en: endocarditis tricuspídea por S. aureus → hemocultivos (≥2 pares) + ATB empírico sin demora + eco urgente.",
      "Endocarditis derecha: émbolos pulmonares (infiltrados cavitados), no émbolos sistémicos como en válvula izquierda.",
      "Hemocultivos antes de ATB, pero nunca retrasar tratamiento >1 h si inestable o sospecha alta.",
      "Tema: Endocarditis tricuspídea en usuario de drogas IV — manejo empírico inmediato.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de infectología porque evalúa endocarditis tricuspídea en usuario de drogas IV: la tríada de fiebre + soplo tricuspídeo + émbolos sépticos pulmonares exige hemocultivos y antibióticos empíricos sin demora.

La clave no es esperar 48 h de hemocultivos, anticoagular por TEP ni tratar como neumonía comunitaria ambulatoria.
La clave es:
Tomar ≥2 pares de hemocultivos e iniciar vancomicina + gentamicina empírica de inmediato, con ecocardiograma urgente.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 28 años, consumidor de heroína IV, fiebre 39 °C de 10 días.
• Disnea, tos con expectoración sanguinolenta; FC 115.
• Soplo holosistólico en foco tricuspídeo que aumenta con inspiración (signo de Carvallo).
• Rx tórax: múltiples infiltrados nodulares cavitados bilaterales periféricos (émbolos sépticos pulmonares).
• Hemocultivos pendientes; endocarditis derecha por S. aureus hasta demostrar lo contrario.

Recordemos endocarditis tricuspídea en usuarios de drogas IV:
• Tríada clásica: fiebre + soplo tricuspídeo + émbolos pulmonares (no sistémicos).
• S. aureus = germen #1 en usuarios de drogas IV (MRSA frecuente).
• Conducta: hemocultivos ≥2 pares ANTES de ATB, pero nunca retrasar tratamiento si sospecha alta.
• ATB empírico: vancomicina (cubre MRSA) ± gentamicina (sinergia según guía ESC/IDSA).
• Ecocardiograma transtorácico/transesofágico urgente para confirmar vegetaciones.

Por lo tanto:
La conducta inmediata es iniciar vancomicina + gentamicina empírica tras tomar hemocultivos, con ecocardiograma urgente.

¿Por qué la opción B es la respuesta correcta?
Integra la secuencia correcta: hemocultivos (≥2 pares) + ATB empírico sin demora (vanco + gentamicina) + ecocardiograma urgente, según guías de endocarditis.

¿Por qué fallan las otras opciones?
Opción A (esperar hemocultivos 48 h): retrasa tratamiento en endocarditis con émbolos pulmonares activos; riesgo de empeoramiento y nuevos émbolos.
Opción C (anticoagulación plena por TEP): contraindicada en endocarditis (riesgo de émbolos hemorrágicos y complicaciones).
Opción D (ceftriaxona ambulatoria): neumonía comunitaria no explica soplo tricuspídeo + émbolos cavitados periféricos en IVDA.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Infiltrados pulmonares + fiebre = neumonía comunitaria."
Pero infiltrados cavitados periféricos + soplo + IVDA = endocarditis derecha con émbolos sépticos pulmonares.
Aquí el dato decisivo es:
Soplo tricuspídeo + émbolos pulmonares cavitados + fiebre prolongada en IVDA = endocarditis → ATB ya, no esperar cultivo.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer tríada: fiebre + soplo tricuspídeo + émbolos pulmonares en IVDA.
2. Tomar ≥2 pares de hemocultivos antes de ATB.
3. Iniciar vancomicina + gentamicina empírica sin demora (<1 h si inestable).
4. Solicitar ecocardiograma urgente (TTE/TEE) para confirmar vegetaciones.

Perlas de examen
✅ Endocarditis derecha: émbolos pulmonares, no sistémicos.
✅ S. aureus = germen #1 en usuarios de drogas IV.
✅ Hemocultivos antes de ATB, pero nunca retrasar tratamiento.
✅ Vancomicina cubre MRSA; gentamicina aporta sinergia.
✅ Anticoagulación contraindicada en endocarditis activa.

Referencias
• ESC Guidelines for the Management of Infective Endocarditis.
• IDSA Clinical Practice Guidelines for endocarditis.
• Duke criteria for infective endocarditis.
• UpToDate: Tricuspid valve endocarditis in injection drug users.`,
  },
  {
    id: "dr-q-72",
    examArea: "Medicina Interna / Infectología / Neumología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "neumonia", "legionella"],
    statement:
      "Hombre de 62 años, fumador, fiebre alta, tos seca, confusión. PA 90/55, FR 28, SatO2 88% ambiente. Na 128, transaminasas 3× LSN, LDH elevada. Rx: consolidación lobar derecha. Antibióticos comunitarios (amoxicilina) 48 h sin mejoría. ¿Ajuste empírico más apropiado?",
    options: [
      { id: "A", label: "A", text: "Agregar azitromicina por posible atípica leve ambulatoria." },
      {
        id: "B",
        label: "B",
        text: "Legionella probable: levofloxacino o azitromicina IV + betalactámico; investigar exposición (agua/aire acondicionado).",
      },
      { id: "C", label: "C", text: "Metronidazol por anaerobios; el olor a podrido confirma diagnóstico." },
      { id: "D", label: "D", text: "Vancomicina + piperacilina-tazobactam solo si hay derrame pleural." },
    ],
    correctOptionId: "B",
    explanation:
      "Neumonía grave con hiponatremia, transaminitis, LDH↑ y falla a betalactámico: Legionella pneumophila. Tratamiento: fluoroquinolona respiratoria o macrólido IV. Legionella no cultiva en medios habituales; antigenuria en orina confirma. HipoNa + diarrea + alteración neurológica = pistas clásicas.",
    keyPoints: [
      "Cuando veas: neumonía grave + hipoNa + transaminitis + confusión + falla a amoxicilina/betalactámico en 48 h.",
      "Debes pensar en: Legionella pneumophila → levofloxacino o azitromicina IV + betalactámico; investigar exposición hídrica.",
      "Legionella no responde a betalactámicos solos; requiere macrólido o fluoroquinolona respiratoria.",
      "Antigenuria en orina es diagnóstico rápido; no cultiva en medios habituales de neumonía.",
      "Tema: Neumonía por Legionella — ajuste empírico tras falla a betalactámico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de infectología/neumología porque evalúa neumonía por Legionella: hipoNa + transaminitis + alteración neurológica + falla a amoxicilina obligan a cambiar el esquema empírico a levofloxacino o azitromicina IV.

La clave no es agregar macrólido ambulatorio leve, tratar anaerobios con metronidazol ni reservar cobertura amplia solo para derrame pleural.
La clave es:
Reconocer Legionella como causa probable y escalar a levofloxacino o azitromicina IV con betalactámico, investigando exposición hídrica/aire acondicionado.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 62 años, fumador, fiebre alta, tos seca, confusión.
• PA 90/55, FR 28, SatO2 88% ambiente (neumonía grave/inestabilidad).
• Na 128 (hiponatremia), transaminasas 3× LSN, LDH elevada.
• Rx: consolidación lobar derecha; amoxicilina 48 h sin mejoría.

Recordemos neumonía por Legionella pneumophila:
• Pistas clásicas: hipoNa, transaminitis, alteración neurológica (confusión), diarrea, LDH↑.
• Exposición: agua (torres de enfriamiento, duchas, aire acondicionado, hoteles).
• No responde a betalactámicos solos (amoxicilina, ampicilina); requiere macrólido o fluoroquinolona.
• Antigenuria en orina = diagnóstico rápido; cultivo requiere medio especial (carbono-levadura).
• Neumonía grave con hipotensión: tratamiento IV, no ambulatorio.

Por lo tanto:
El ajuste empírico más apropiado es Legionella probable → levofloxacino o azitromicina IV + betalactámico, con investigación de exposición.

¿Por qué la opción B es la respuesta correcta?
Identifica Legionella como causa probable tras falla a betalactámico, con pistas clínicas clásicas (hipoNa, transaminitis, confusión) y propone tratamiento IV adecuado (fluoroquinolona o macrólido).

¿Por qué fallan las otras opciones?
Opción A (agregar azitromicina ambulatoria leve): paciente inestable (PA 90/55, SatO2 88%) requiere IV; ya falló betalactámico solo.
Opción C (metronidazol por anaerobios): olor a podrido no confirma anaerobios; Legionella es bacteria acuática intracelular.
Opción D (vanco + pip-tazo solo con derrame): no cubre Legionella como esquema empírico adecuado ante sospecha clínica alta.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Neumonía comunitaria = amoxicilina o agregar macrólido ambulatorio."
Pero hipoNa + transaminitis + confusión + falla a betalactámico = Legionella hasta demostrar lo contrario.
Aquí el dato decisivo es:
Amoxicilina 48 h sin mejoría + Na 128 + transaminasas 3× + confusión = cambiar a levofloxacino/azitromicina IV.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar neumonía grave con signos de inestabilidad (hipotensión, hipoxemia).
2. Buscar pistas de Legionella: hipoNa, transaminitis, CNS, LDH↑, exposición hídrica.
3. Si falla betalactámico → sospechar Legionella y escalar a macrólido/fluoroquinolona IV.
4. Confirmar con antigenuria en orina; no depender de cultivo convencional.

Perlas de examen
✅ Legionella: hipoNa + hepatitis + CNS + falla a amoxicilina.
✅ No responde a betalactámicos solos; requiere macrólido o fluoroquinolona.
✅ Antigenuria en orina = diagnóstico rápido.
✅ Exposición hídrica/aire acondicionado = pista epidemiológica.
✅ Neumonía grave inestable → tratamiento IV, no ambulatorio.

Referencias
• ATS/IDSA Guidelines for Community-Acquired Pneumonia.
• ESCMID Guidelines for Legionella infection.
• Mandell — Legionella pneumophila pneumonia.
• UpToDate: Clinical manifestations and diagnosis of Legionella infection.`,
  },
  {
    id: "dr-q-73",
    examArea: "Medicina Interna / Infectología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "fascitis_necrotizante", "lrinec"],
    statement:
      "Mujer de 55 años, diabética, dolor intenso en muslo derecho tras mínimo trauma. FC 125, PA 85/50. Piel eritematosa con equimosis progresiva; dolor desproporcionado al examen. No crepitación palpable. Leucocitos 22.000, creatinina 2.1, Na 130, glucosa 380, CRP muy elevada. ¿Conducta?",
    options: [
      { id: "A", label: "A", text: "Cefalexina VO y control ambulatorio en 48 h." },
      { id: "B", label: "B", text: "Drenaje quirúrgico urgente (desbridamiento) + antibióticos de amplio espectro IV; no esperar estudios de imagen si alta sospecha." },
      { id: "C", label: "C", text: "Antibióticos solamente; la ausencia de crepitación descarta fascitis necrotizante." },
      { id: "D", label: "D", text: "Anticoagulación por trombosis venosa profunda complicada." },
    ],
    correctOptionId: "B",
    explanation:
      "Fascitis necrotizante: dolor desproporcionado, progresión rápida, shock, LRINEC elevado (leucocitosis, Cr↑, Na↓, glucosa↑). Crepitación ausente no excluye (es signo tardío). Conducta: cirugía URGENTE + piperacilina-tazobactam + vancomicina ± clindamicina (toxina). TC solo si no retrasa cirugía.",
    keyPoints: [
      "Cuando veas: dolor desproporcionado al examen cutáneo + progresión rápida + shock + LRINEC elevado (leucocitosis, Cr↑, Na↓, glucosa↑).",
      "Debes pensar en: fascitis necrotizante → desbridamiento quirúrgico urgente + ATB amplio espectro IV; no esperar crepitación ni TC.",
      "Dolor >> hallazgos cutáneos = bandera roja; la piel miente, el dolor no.",
      "Crepitación es signo tardío; su ausencia NO excluye fascitis necrotizante.",
      "Tema: Fascitis necrotizante — LRINEC y manejo quirúrgico urgente.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de infectología/urgencias porque evalúa fascitis necrotizante: dolor desproporcionado al examen + shock + LRINEC elevado exige desbridamiento quirúrgico urgente sin esperar crepitación ni estudios de imagen.

La clave no es tratar ambulatoriamente con cefalexina, confiar en ATB solos sin cirugía ni anticoagular por TVP.
La clave es:
Reconocer fascitis necrotizante como emergencia quirúrgica → desbridamiento urgente + piperacilina-tazobactam + vancomicina ± clindamicina (antitoxina estreptocócica).

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 55 años, diabética, dolor intenso en muslo derecho tras mínimo trauma.
• FC 125, PA 85/50 (shock); piel eritematosa con equimosis progresiva.
• Dolor desproporcionado al examen físico; no crepitación palpable.
• Leucocitos 22,000, creatinina 2.1, Na 130, glucosa 380, CRP muy elevada (LRINEC ≥6).

Recordemos fascitis necrotizante y score LRINEC:
• LRINEC ≥6: alta sospecha de fascitis necrotizante.
• Dolor desproporcionado >> hallazgos cutáneos = bandera roja clásica.
• Crepitación por gas subcutáneo es signo tardío; ausencia NO excluye diagnóstico.
• Shock + progresión rápida + equimosis progresiva = operar ya.
• ATB: betalactámico (pip-tazo) + vancomicina + clindamicina (↓ producción de toxinas estreptocócicas).
• TC solo si no retrasa cirugía; cada hora de demora ↑ mortalidad.

Por lo tanto:
La conducta correcta es desbridamiento quirúrgico urgente + antibióticos de amplio espectro IV, sin esperar imagen si la sospecha es alta.

¿Por qué la opción B es la respuesta correcta?
Prioriza desbridamiento quirúrgico urgente + ATB amplio espectro IV y enfatiza no esperar estudios de imagen ante alta sospecha clínica (LRINEC ≥6, shock, dolor desproporcionado).

¿Por qué fallan las otras opciones?
Opción A (cefalexina VO ambulatoria): shock + progresión rápida = emergencia quirúrgica, no manejo ambulatorio.
Opción C (ATB solamente; sin crepitación no hay fascitis): la ausencia de crepitación no descarta fascitis necrotizante (signo tardío).
Opción D (anticoagulación por TVP complicada): el cuadro es infección necrotizante de tejidos blandos, no trombosis venosa.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Fascitis necrotizante = crepitación subcutánea obligatoria."
Pero la crepitación es tardía; el dato temprano es dolor desproporcionado al examen.
Aquí el dato decisivo es:
Dolor intenso >> hallazgos cutáneos + shock + LRINEC ≥6 = operar ya, con o sin crepitación.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar fascitis necrotizante ante dolor desproporcionado + progresión rápida.
2. Calcular LRINEC (leucocitos, Cr, Na, glucosa, CRP); ≥6 = alta sospecha.
3. Desbridamiento quirúrgico urgente + ATB amplio espectro (pip-tazo + vanco + clindamicina).
4. TC solo si no retrasa cirugía; cada hora cuenta.

Perlas de examen
✅ Dolor >> hallazgos cutáneos = bandera roja de fascitis necrotizante.
✅ Crepitación es tardía; su ausencia no excluye diagnóstico.
✅ LRINEC ≥6: alta sospecha; operar sin demora.
✅ Clindamicina ↓ producción de toxinas estreptocócicas (antitoxina).
✅ Cada hora de demora quirúrgica ↑ mortalidad.

Referencias
• IDSA Guidelines for Skin and Soft Tissue Infections.
• LRINEC score validation studies (Wong et al.).
• Stevens DL — Necrotizing soft tissue infections.
• UpToDate: Necrotizing soft tissue infections.`,
  },
  {
    id: "dr-q-74",
    examArea: "Medicina Interna / Infectología / Neurología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "meningitis", "dexametasona"],
    statement:
      "Hombre de 19 años, fiebre, cefalea intensa, rigidez de nuca, petequias en tronco. TAC cerebral sin contraste: normal. Se confirma punción lumbar: LCR turbio, glucosa 15 mg/dL, proteínas 280 mg/dL, PMN 95%. ¿Secuencia terapéutica correcta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Dexametasona 0.15 mg/kg IV + ceftriaxona + vancomicina lo antes posible; idealmente dexametasona antes o con la primera dosis de antibiótico.",
      },
      { id: "B", label: "B", text: "Esperar resultado de cultivo para elegir antibiótico dirigido." },
      { id: "C", label: "C", text: "Dexametasona solo si hay Streptococcus pneumoniae confirmado en Gram." },
      { id: "D", label: "D", text: "Aciclovir exclusivo por sospecha de herpes." },
    ],
    correctOptionId: "A",
    explanation:
      "Meningitis bacteriana aguda: ceftriaxona + vancomicina empíricos (cubrir S. pneumoniae resistente y N. meningitidis). Dexametasona reduce mortalidad/secuelas neurológicas en meningitis neumocócica si se administra ANTES o CON la primera dosis de ATB. Petequias sugieren meningococo; mismo esquema empírico.",
    keyPoints: [
      "Cuando veas: meningitis bacteriana aguda (LCR turbio, glucosa baja, PMN >90%) + petequias (sugiere meningococo).",
      "Debes pensar en: ceftriaxona + vancomicina empíricos + dexametasona 0.15 mg/kg ANTES o CON la primera dosis de ATB.",
      "Dexametasona después del primer ATB pierde beneficio en reducción de mortalidad/secuelas neurológicas.",
      "TAC antes de PL si focalidad, inmunosupresión o alteración mental (aquí TAC ya normal → PL confirmada).",
      "Tema: Meningitis bacteriana aguda — timing de dexametasona y ATB empírico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de infectología/neurología porque evalúa la secuencia terapéutica en meningitis bacteriana aguda: dexametasona debe administrarse ANTES o CON la primera dosis de ceftriaxona + vancomicina, no después.

La clave no es esperar cultivo para ATB dirigido, reservar dexametasona solo tras Gram confirmado ni tratar con aciclovir exclusivo.
La clave es:
Administrar dexametasona 0.15 mg/kg IV junto con ceftriaxona + vancomicina empíricos lo antes posible, idealmente antes o con la primera dosis de antibiótico.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 19 años, fiebre, cefalea intensa, rigidez de nuca, petequias en tronco.
• TAC cerebral sin contraste: normal (no contraindicación para PL).
• PL: LCR turbio, glucosa 15 mg/dL, proteínas 280 mg/dL, PMN 95%.
• Meningitis bacteriana aguda; petequias sugieren meningococo (mismo esquema empírico que neumococo).

Recordemos meningitis bacteriana aguda en adultos:
• ATB empírico: ceftriaxona + vancomicina (cubre S. pneumoniae resistente y N. meningitidis).
• Dexametasona 0.15 mg/kg IV c/6 h × 4 días reduce mortalidad/secuelas en meningitis neumocócica.
• Timing crítico: dexametasona ANTES o CON primera dosis ATB; después pierde beneficio (estudios van de Beek).
• Petequias sugieren meningococo, pero dexametasona se administra empíricamente si sospecha neumocócica.
• TAC antes de PL si focalidad neurológica, inmunosupresión o alteración mental (aquí TAC normal).

Por lo tanto:
La secuencia correcta es dexametasona + ceftriaxona + vancomicina lo antes posible, con dexametasona antes o con la primera dosis de ATB.

¿Por qué la opción A es la respuesta correcta?
Integra la triple terapia empírica (dexametasona + ceftriaxona + vancomicina) con el timing correcto: dexametasona antes o con la primera dosis de antibiótico.

¿Por qué fallan las otras opciones?
Opción B (esperar cultivo para ATB dirigido): retrasa tratamiento en emergencia neurológica con alto riesgo de muerte/secuelas.
Opción C (dexametasona solo si Gram confirma neumococo): en práctica se administra empíricamente ante sospecha de meningitis bacteriana con criterios de neumococo.
Opción D (aciclovir exclusivo): LCR bacteriano con PMN 95% y glucosa 15 descarta herpes como causa primaria.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Dexametasona solo si confirmo neumococo en Gram o cultivo."
Pero el beneficio depende del timing: debe darse antes o con el primer ATB, no después.
Aquí el dato decisivo es:
Meningitis bacteriana confirmada → dexametasona + ceftriaxona + vanco YA, con dexametasona antes/con primer ATB.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar meningitis bacteriana (LCR: glucosa baja, PMN↑, proteínas↑).
2. Administrar dexametasona 0.15 mg/kg IV.
3. Iniciar ceftriaxona + vancomicina empíricos simultáneamente (dexametasona antes o con primer ATB).
4. No retrasar ATB esperando cultivo; ajustar según antibiograma posterior.

Perlas de examen
✅ ATB empírico adultos: ceftriaxona + vancomicina.
✅ Dexametasona 0.15 mg/kg c/6 h × 4 días si sospecha neumocócica.
✅ Timing: dexametasona ANTES o CON primer ATB; después pierde beneficio.
✅ Petequias = meningococo probable; mismo esquema empírico inicial.
✅ TAC antes de PL si focalidad, inmunosupresión o ↓ conciencia.

Referencias
• IDSA Bacterial Meningitis Guidelines.
• van de Beek et al. — Dexamethasone in adults with bacterial meningitis (NEJM).
• Tunkel — Acute bacterial meningitis in adults.
• UpToDate: Treatment of bacterial meningitis in adults.`,
  },
  {
    id: "dr-q-75",
    examArea: "Medicina Interna / Infectología / Gastroenterología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "cdiff", "colitis"],
    statement:
      "Mujer de 70 años, hospitalizada por neumonía, recibió ceftriaxona 7 días. Día 10: diarrea acuosa >10/día, dolor abdominal, leucocitos 18.000. PCR toxina C. difficile positiva. PA 90/55, distensión abdominal, timpanismo. Rx abdomen: dilatación colónica >12 cm. ¿Tratamiento?",
    options: [
      { id: "A", label: "A", text: "Metronidazol VO 500 mg c/8 h ambulatorio." },
      {
        id: "B",
        label: "B",
        text: "Colitis fulminante: vancomicina oral 500 mg c/6 h ± vancomicina rectal + metronidazol IV; cirugía si no responde.",
      },
      { id: "C", label: "C", text: "Loperamida para controlar diarrea y evitar deshidratación." },
      { id: "D", label: "D", text: "Fidaxomicina VO como primera línea en colitis fulminante con megacolon." },
    ],
    correctOptionId: "B",
    explanation:
      "C. difficile fulminante: shock, leucocitosis marcada, íleo/megacolon (colón >10-12 cm). Metronidazol VO ya no es primera línea. Fulminante: vancomicina oral alta dosis ± enema de vancomicina + metro IV; colectomía si refractario. Loperamida está contraindicada (retención toxina). Fidaxomicina es 1.ª línea en formas no fulminantes.",
    keyPoints: [
      "Cuando veas: C. difficile post-antibióticos + shock + leucocitosis >15.000 + megacolon (>10-12 cm) + distensión abdominal.",
      "Debes pensar en: colitis fulminante → vancomicina oral 500 mg c/6 h ± vancomicina rectal + metronidazol IV; cirugía si refractaria.",
      "Metronidazol VO ya no es primera línea en formas graves/fulminantes.",
      "Loperamida está contraindicada en colitis infecciosa activa (retención de toxinas → megacolon/toxicidad).",
      "Tema: C. difficile fulminante — megacolon y manejo escalonado.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de infectología/gastroenterología porque evalúa C. difficile fulminante con megacolon: shock + leucocitosis marcada + dilatación colónica >12 cm exige vancomicina oral alta dosis ± rectal + metronidazol IV, no metronidazol VO ni loperamida.

La clave no es tratar ambulatoriamente con metronidazol VO, usar loperamida para controlar diarrea ni fidaxomicina como primera línea en fulminante con megacolon.
La clave es:
Reconocer colitis fulminante con megacolon y disfunción orgánica → vancomicina oral 500 mg c/6 h ± enema de retención + metronidazol IV, con colectomía si no responde.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 70 años, hospitalizada por neumonía, ceftriaxona 7 días.
• Día 10: diarrea acuosa >10/día, dolor abdominal, leucocitos 18,000.
• PCR toxina C. difficile positiva; PA 90/55 (shock), distensión abdominal, timpanismo.
• Rx abdomen: dilatación colónica >12 cm (megacolon tóxico).
• Colitis fulminante con disfunción orgánica.

Recordemos C. difficile: clasificación y tratamiento:
• Leve-moderada: fidaxomicina o vancomicina oral (1.ª línea según IDSA/SHEA 2021).
• Fulminante: WBC >15,000, Cr↑, shock, íleo/megacolon (>10-12 cm), lactato↑.
• Fulminante: vancomicina oral 500 mg c/6 h ± enema de vancomicina de retención + metronidazol IV.
• Metronidazol VO ya no es 1.ª línea en formas graves (inferior a vanco oral).
• Colectomía subtotal si refractario a tratamiento médico máximo.
• Loperamida contraindicada: retención de toxinas → riesgo megacolon/toxicidad sistémica.

Por lo tanto:
El tratamiento correcto es vancomicina oral alta dosis ± vancomicina rectal + metronidazol IV, con cirugía si no responde.

¿Por qué la opción B es la respuesta correcta?
Identifica colitis fulminante con megacolon y propone el esquema escalonado correcto: vancomicina oral ± rectal + metronidazol IV, con colectomía si refractaria.

¿Por qué fallan las otras opciones?
Opción A (metronidazol VO ambulatorio): insuficiente en colitis fulminante con megacolon, shock y leucocitosis marcada.
Opción C (loperamida): contraindicada en colitis infecciosa activa; retención de toxinas empeora megacolon.
Opción D (fidaxomicina VO en fulminante): reservada para formas leve-moderada; no es 1.ª línea en megacolon con shock.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"C. diff = metronidazol oral siempre."
Pero en formas fulminantes con megacolon y shock, vancomicina oral (± rectal) + metro IV es el estándar.
Aquí el dato decisivo es:
Megacolon >12 cm + PA 90/55 + WBC 18,000 + toxina (+) = fulminante → vanco oral ± rectal + metro IV.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Clasificar severidad: leve-moderada vs grave vs fulminante (WBC, Cr, shock, megacolon).
2. Fulminante: vancomicina oral 500 mg c/6 h ± enema de retención.
3. Agregar metronidazol IV en formas fulminantes con disfunción orgánica.
4. Colectomía subtotal si falla tratamiento médico; nunca loperamida.

Perlas de examen
✅ Fulminante: WBC >15,000, Cr↑, shock, megacolon (>10-12 cm), íleo.
✅ Fulminante: vancomicina oral ± rectal + metro IV (no metro VO).
✅ Fidaxomicina = 1.ª línea leve-moderada, no fulminante con megacolon.
✅ Loperamida contraindicada en colitis infecciosa activa.
✅ Colectomía si refractario a tratamiento médico máximo.

Referencias
• IDSA/SHEA C. difficile Clinical Practice Guidelines 2021.
• McDonald et al. — Clinical Practice Guidelines for C. difficile Infection.
• Surawicz — Antibiotic-associated diarrhea and C. difficile infection.
• UpToDate: Clostridioides difficile infection in adults: Treatment.`,
  },
  {
    id: "dr-q-76",
    examArea: "Medicina Interna / Infectología / HIV",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "hiv", "pcp", "sida"],
    statement:
      "Hombre de 34 años, VIH no diagnosticado, disnea progresiva, tos seca, fiebre baja. SatO2 88% ambiente, FC 105. Rx: infiltrados intersticiales bilaterales perihiliares en \"mariposa\". LDH 650 U/L. CD4 85 cél/μL. ¿Diagnóstico y manejo inicial?",
    options: [
      { id: "A", label: "A", text: "Neumonía bacteriana típica: ceftriaxona + azitromicina." },
      {
        id: "B",
        label: "B",
        text: "Neumonía por Pneumocystis jirovecii: TMP-SMX IV/VO + corticoides si PaO2 <70 mmHg o gradiente A-a >35; no iniciar TARV en fase aguda grave sin estabilizar.",
      },
      { id: "C", label: "C", text: "Tuberculosis pulmonar: RIPE inmediato sin confirmar." },
      { id: "D", label: "D", text: "Profilaxis primaria con pentamidina inhalada y alta." },
    ],
    correctOptionId: "B",
    explanation:
      "PCP: CD4 <200, disnea subaguda, SatO2 baja, infiltrados intersticiales perihiliares, LDH↑. Tratamiento: TMP-SMX (dosis elevada). Corticoides si PaO2 <70 mmHg o A-a ≥35 mmHg (reduce mortalidad). Pentamidina es alternativa por alergia, no profilaxis en enfermedad activa. TARV se inicia tras mejoría clínica (2-4 semanas en PCP grave).",
    keyPoints: [
      "Cuando veas: VIH no diagnosticado + CD4 <200 + disnea subaguda + infiltrados intersticiales perihiliares en \"mariposa\" + LDH↑ + hipoxemia.",
      "Debes pensar en: neumonía por Pneumocystis jirovecii (PCP) → TMP-SMX dosis elevada + corticoides si PaO2 <70 mmHg o gradiente A-a ≥35.",
      "LDH elevado con infiltrados intersticiales en VIH avanzado es muy sugestivo de PCP hasta demostrar lo contrario.",
      "Pentamidina inhalada es profilaxis primaria, no tratamiento de enfermedad activa; TARV se inicia tras mejoría clínica (2-4 semanas en PCP grave).",
      "Tema: Infectología / VIH — neumonía por Pneumocystis jirovecii (PCP).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de infectología/VIH porque evalúa el reconocimiento y manejo inicial de neumonía por Pneumocystis jirovecii en inmunosupresión avanzada: CD4 <200, disnea subaguda, hipoxemia, LDH↑ e infiltrados en mariposa.

La clave no es tratar como neumonía bacteriana típica, iniciar RIPE empírico sin confirmar TB activa ni dar profilaxis con pentamidina inhalada.
La clave es:
Identificar PCP en VIH avanzado → TMP-SMX (dosis elevada) + corticoides si hipoxemia moderada-grave; posponer TARV hasta estabilización clínica.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 34 años, VIH no diagnosticado, disnea progresiva, tos seca, fiebre baja.
• SatO2 88% ambiente, FC 105; CD4 85 cél/μL (inmunosupresión grave).
• Rx: infiltrados intersticiales bilaterales perihiliares en "mariposa".
• LDH 650 U/L (marcador indirecto de daño pulmonar en PCP).

Recordemos PCP en VIH:
• Ocurre típicamente con CD4 <200 cél/μL (profilaxis primaria con TMP-SMX cuando CD4 <200).
• Cuadro: disnea subaguda, tos seca, fiebre baja, hipoxemia desproporcionada al examen físico.
• Rx: infiltrados intersticiales bilaterales perihiliares ("mariposa"); puede ser inicialmente normal.
• LDH frecuentemente elevado (>500 U/L).
• Tratamiento: TMP-SMX 15-20 mg/kg/día (trimethoprim) IV/VO × 21 días.
• Corticoides (prednisona 40 mg VO c/12 h × 5 días, luego taper) si PaO2 <70 mmHg o gradiente A-a ≥35 mmHg (reduce mortalidad).
• Pentamidina IV/IM es alternativa por alergia a sulfa, no profilaxis inhalada en enfermedad activa.
• TARV: iniciar tras mejoría clínica (2-4 semanas en PCP grave), no en fase aguda inestable (IRIS).

Por lo tanto:
El diagnóstico es PCP y el manejo inicial es TMP-SMX + evaluar indicación de corticoides por hipoxemia; no iniciar TARV en fase aguda grave sin estabilizar.

¿Por qué la opción B es la respuesta correcta?
Identifica PCP como diagnóstico más probable (CD4 85 + cuadro clínico-radiológico clásico + LDH↑) y propone el tratamiento de elección (TMP-SMX) con criterios correctos para corticoides (PaO2 <70 o A-a >35), además de la conducta adecuada respecto al TARV (no iniciar en fase aguda grave).

¿Por qué fallan las otras opciones?
Opción A (ceftriaxona + azitromicina): esquema de neumonía bacteriana adquirida en la comunidad; no cubre Pneumocystis jirovecii (hongo, no bacteria).
Opción C (RIPE inmediato sin confirmar): TB requiere confirmación; el cuadro (disnea subaguda + infiltrados intersticiales + CD4 bajo + LDH↑) es clásico de PCP, no de TB activa primoinfección.
Opción D (pentamidina inhalada profiláctica + alta): pentamidina inhalada es profilaxis primaria/secundaria, no tratamiento de enfermedad activa con hipoxemia; el paciente requiere hospitalización y TMP-SMX sistémico.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Infiltrados intersticiales + fiebre = TB en VIH."
Pero el examen exige correlacionar:
CD4 <200 + disnea subaguda + hipoxemia + LDH↑ + patrón en mariposa = PCP hasta demostrar lo contrario.
Aquí el dato decisivo es:
CD4 85 + SatO2 88% + LDH 650 + infiltrados perihiliares = PCP → TMP-SMX + esteroides si criterios de hipoxemia.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar inmunosupresión grave (CD4 <200) con cuadro respiratorio subagudo.
2. Reconocer patrón clínico-radiológico de PCP (disnea + hipoxemia + infiltrados mariposa + LDH↑).
3. Iniciar TMP-SMX dosis elevada; agregar corticoides si PaO2 <70 mmHg o A-a ≥35.
4. Posponer TARV hasta estabilización clínica (2-4 semanas en PCP grave).

Perlas de examen
✅ PCP: CD4 <200; profilaxis con TMP-SMX cuando CD4 <200.
✅ Tratamiento: TMP-SMX dosis elevada × 21 días; pentamidina IV si alergia a sulfa.
✅ Corticoides si PaO2 <70 mmHg o gradiente A-a ≥35 mmHg (reduce mortalidad).
✅ LDH↑ + disnea + CD4 bajo = PCP hasta demostrar lo contrario.
✅ No iniciar TARV en PCP grave aguda (riesgo IRIS); esperar mejoría clínica.
✅ Pentamidina inhalada = profilaxis, no tratamiento de enfermedad activa.

Referencias
• DHHS Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV.
• ATS/IDSA Clinical Practice Guideline: Diagnosis and Treatment of Pneumocystis Pneumonia.
• Kaplan et al. — Guidelines for prevention and treatment of opportunistic infections in HIV-infected adults.
• UpToDate: Treatment and prevention of Pneumocystis pneumonia in patients without HIV.`,
  },
  {
    id: "dr-q-77",
    examArea: "Medicina Interna / Infectología / Hepatología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "sbP", "cirrosis"],
    statement:
      "Hombre de 58 años, cirrosis por alcohol, ascitis conocida. Fiebre 38.5 °C, dolor abdominal difuso, encefalopatía grado II. Paracentesis: líquido ascítico turbio, PMN 450 cél/μL, proteínas 0.8 g/dL, cultivo pendiente. Creatinina 1.4 (basal 0.9). ¿Manejo?",
    options: [
      { id: "A", label: "A", text: "Observación; PMN <500 descarta peritonitis bacteriana espontánea." },
      {
        id: "B",
        label: "B",
        text: "Peritonitis bacteriana espontánea: ceftriaxona IV + albúmina 1.5 g/kg día 1 y 1 g/kg día 3 si creatinina elevada; suspender betabloqueador si shock.",
      },
      { id: "C", label: "C", text: "Metronidazol solo por posible translocación anaerobia." },
      { id: "D", label: "D", text: "Paracentesis de alivio masiva sin antibióticos." },
    ],
    correctOptionId: "B",
    explanation:
      "PBE: PMN ascítico ≥250 cél/μL (aquí 450). Tratamiento empírico: ceftriaxona 1-2 g/día (cubrir Enterobacteriaceae). Albúmina reduce síndrome hepatorrenal en pacientes con Creat↑ o BUN↑. Repetir paracentesis a 48 h si no mejora (PMN debe bajar >25%). Profilaxis secundaria con norfloxacino tras episodio.",
    keyPoints: [
      "Cuando veas: cirrótico con ascitis + fiebre + dolor abdominal + encefalopatía + PMN ascítico ≥250 cél/μL + creatinina elevada.",
      "Debes pensar en: peritonitis bacteriana espontánea (PBE) → ceftriaxona IV empírica + albúmina si riesgo de síndrome hepatorrenal.",
      "El umbral diagnóstico de PBE es PMN ≥250, no 500; el cultivo es positivo solo en ~40% — tratar por PMN, no esperar cultivo.",
      "Albúmina 1.5 g/kg día 1 y 1 g/kg día 3 reduce síndrome hepatorrenal en pacientes con Creat↑, BUN↑ o bilirrubina >4.",
      "Tema: Hepatología / Infectología — peritonitis bacteriana espontánea en cirrosis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hepatología/infectología porque evalúa el diagnóstico y manejo de peritonitis bacteriana espontánea (PBE) en cirrosis: PMN ascítico ≥250 exige tratamiento empírico inmediato con ceftriaxona y albúmina si hay riesgo de síndrome hepatorrenal.

La clave no es observar porque "PMN <500", tratar solo con metronidazol ni hacer paracentesis de alivio sin antibióticos.
La clave es:
Reconocer PBE (PMN ≥250) en cirrótico febril → ceftriaxona empírica + albúmina si creatinina elevada; no esperar cultivo.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 58 años, cirrosis por alcohol con ascitis conocida.
• Fiebre 38.5 °C, dolor abdominal difuso, encefalopatía grado II.
• Paracentesis: líquido ascítico turbio, PMN 450 cél/μL (≥250 = PBE), proteínas 0.8 g/dL.
• Creatinina 1.4 mg/dL (basal 0.9): riesgo de síndrome hepatorrenal (SHR).
• Cultivo pendiente (positivo solo en ~40% de los casos).

Recordemos PBE en cirrosis:
• Diagnóstico: PMN ascítico ≥250 cél/μL (independiente del recuento total de leucocitos).
• Cultivo positivo en solo ~40%; el tratamiento se basa en PMN, no en cultivo.
• Germen más frecuente: E. coli, Klebsiella, Streptococcus pneumoniae (translocación bacteriana).
• Tratamiento empírico: ceftriaxona 1-2 g/día IV (cubre Enterobacteriaceae) × 5-7 días.
• Albúmina IV: 1.5 g/kg día 1 + 1 g/kg día 3 si Creat >1, BUN >30 o bilirrubina >4 (reduce SHR y mortalidad).
• Repetir paracentesis a 48 h si no mejora clínica (PMN debe bajar >25%).
• Profilaxis secundaria con norfloxacino 400 mg/día tras episodio.
• Suspender betabloqueador si shock (reduce perfusión renal).

Por lo tanto:
El manejo correcto es ceftriaxona IV empírica + albúmina por creatinina elevada, sin esperar cultivo.

¿Por qué la opción B es la respuesta correcta?
Identifica PBE (PMN 450 ≥250), propone ceftriaxona empírica como tratamiento de elección y albúmina en dosis correctas (1.5 g/kg día 1, 1 g/kg día 3) por creatinina elevada con riesgo de SHR; además menciona suspender betabloqueador si shock.

¿Por qué fallan las otras opciones?
Opción A (observación; PMN <500 descarta PBE): el umbral diagnóstico es PMN ≥250, no 500; aquí PMN 450 confirma PBE y requiere tratamiento inmediato.
Opción C (metronidazol solo): PBE es principalmente infección por Gram negativos entéricos (E. coli, Klebsiella); metronidazol solo no cubre el espectro causal.
Opción D (paracentesis de alivio masiva sin antibióticos): no trata la infección; aumenta riesgo de recurrencia, SHR y mortalidad.

¿Cuál es la trampa del examen?
Muchos estudiantes confunden:
"PMN <500 = no PBE" o esperan cultivo positivo para tratar.
Pero el examen exige recordar:
Umbral diagnóstico PMN ≥250; cultivo positivo solo ~40%; tratar empíricamente de inmediato.
Aquí el dato decisivo es:
Cirrótico febril + PMN 450 + Creat 1.4 (basal 0.9) = PBE + riesgo SHR → ceftriaxona + albúmina ya.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar PBE en cirrótico con ascitis + fiebre/dolor/encefalopatía → paracentesis diagnóstica.
2. Confirmar con PMN ≥250 (no esperar cultivo).
3. Iniciar ceftriaxona empírica + albúmina si Creat↑, BUN↑ o bilirrubina >4.
4. Repetir paracentesis a 48 h si no mejora; profilaxis secundaria con norfloxacino tras episodio.

Perlas de examen
✅ PBE: PMN ascítico ≥250 cél/μL (umbral diagnóstico, no 500).
✅ Cultivo positivo solo ~40%; tratar por PMN, no esperar cultivo.
✅ Ceftriaxona 1-2 g/día empírica (Enterobacteriaceae).
✅ Albúmina 1.5/1 g/kg reduce SHR si Creat >1, BUN >30 o bilirrubina >4.
✅ Profilaxis secundaria: norfloxacino 400 mg/día tras episodio.
✅ Suspender betabloqueador si shock (↓ perfusión renal).

Referencias
• EASL Clinical Practice Guidelines on the management of ascites, spontaneous bacterial peritonitis, and hepatorenal syndrome.
• AASLD Practice Guidance on the management of ascites and spontaneous bacterial peritonitis.
• Runyon — Management of adult patients with ascites due to cirrhosis.
• UpToDate: Spontaneous bacterial peritonitis in adults: Treatment and prophylaxis.`,
  },
  {
    id: "dr-q-78",
    examArea: "Medicina Interna / Infectología / Nefrología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "itu", "pielonefritis", "resistencia"],
    statement:
      "Mujer de 45 años, pielonefritis complicada. Fiebre 39.5 °C, dolor costovertebral, náuseas. Antecedente: ITU recurrente, uso previo de ciprofloxacino. UC previo: E. coli BLEE (ESBL). Creatinina 1.0, no alergia a betalactámicos. ¿Antibiótico empírico?",
    options: [
      { id: "A", label: "A", text: "Ciprofloxacino 500 mg VO c/12 h." },
      { id: "B", label: "B", text: "Nitrofurantoína 100 mg c/12 h." },
      { id: "C", label: "C", text: "Ertapenem IV o ceftriaxona según antibiograma local; evitar fluoroquinolonas por resistencia documentada." },
      { id: "D", label: "D", text: "Amoxicilina-ácido clavulánico VO como monoterapia empírica universal." },
    ],
    correctOptionId: "C",
    explanation:
      "Pielonefritis complicada con E. coli ESBL previa: fluoroquinolonas contraindicadas por resistencia. Nitrofurantoína no alcanza concentración renal parenquimatosa. Carbapenem (ertapenem) o betalactámico-β-lactamasa según sensibilidad local. Pielonefritis grave = IV inicialmente. Ajustar por antibiograma.",
    keyPoints: [
      "Cuando veas: pielonefritis complicada + historial de ITU recurrente + E. coli BLEE (ESBL) documentada + uso previo de fluoroquinolonas.",
      "Debes pensar en: infección por Enterobacteriaceae productora de BLEE → evitar fluoroquinolonas y amoxicilina-clavulánico; ertapenem IV o betalactámico según antibiograma local.",
      "Nitrofurantoína y fosfomicina no alcanzan concentración adecuada en parénquima renal; solo sirven para cistitis no complicada.",
      "Pielonefritis complicada con fiebre alta y dolor costovertebral requiere hospitalización e antibiótico IV inicialmente.",
      "Tema: Infectología / Nefrología — pielonefritis complicada por E. coli BLEE (ESBL).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de infectología porque evalúa la selección de antibiótico empírico en pielonefritis complicada con resistencia documentada: historial de E. coli ESBL contraindica fluoroquinolonas y obliga carbapenem o betalactámico según antibiograma local.

La clave no es repetir ciprofloxacino, usar nitrofurantoína en pielonefritis ni amoxicilina-clavulánico como monoterapia universal empírica.
La clave es:
Reconocer pielonefritis complicada por ESBL → ertapenem IV (o betalactámico-β-lactamasa según sensibilidad local) + hospitalización; ajustar por antibiograma.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 45 años, pielonefritis complicada; fiebre 39.5 °C, dolor costovertebral, náuseas.
• Antecedente de ITU recurrente con uso previo de ciprofloxacino.
• UC previo: E. coli BLEE (ESBL) documentada.
• Creatinina 1.0, sin alergia a betalactámicos.

Recordemos resistencia BLEE (ESBL) y pielonefritis:
• ESBL: betalactamasas de espectro extendido (E. coli, Klebsiella); resistencia a penicilinas, cefalosporinas y aztreonam.
• Resistencia frecuente coexistente a fluoroquinolonas (historial de ciprofloxacino ↑ riesgo).
• Amoxicilina-clavulánico: ineficaz empíricamente contra ESBL (clavulanato no neutraliza todas las BLEE).
• Tratamiento empírico ESBL: carbapenem (ertapenem 1 g/día IV) o piperacilina-tazobactam/cefepime según antibiograma y resistencia local.
• Nitrofurantoína: concentración insuficiente en parénquima renal → solo cistitis no complicada.
• Fosfomicina: similar limitación; no indicada en pielonefritis complicada.
• Pielonefritis complicada: hospitalización + ATB IV inicialmente; desescalar según evolución y antibiograma.

Por lo tanto:
El antibiótico empírico correcto es ertapenem IV (o betalactámico según antibiograma local), evitando fluoroquinolonas por resistencia documentada.

¿Por qué la opción C es la respuesta correcta?
Propone ertapenem IV o ceftriaxona según antibiograma local (ajustado a resistencia local) y enfatiza correctamente evitar fluoroquinolonas por resistencia documentada previa; cubre el espectro de ESBL en pielonefritis complicada que requiere vía IV.

¿Por qué fallan las otras opciones?
Opción A (ciprofloxacino 500 mg VO): resistencia documentada por ESBL previo; repetir fluoroquinolona es ineficaz y peligroso.
Opción B (nitrofurantoína 100 mg c/12 h): no alcanza concentración terapéutica en parénquima renal; indicada solo en cistitis no complicada.
Opción D (amoxicilina-clavulánico VO universal): ineficaz empíricamente contra ESBL; no es monoterapia adecuada en pielonefritis complicada con resistencia documentada.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"ITU = ciprofloxacino o nitrofurantoína siempre."
Pero el examen exige correlacionar:
Historial de ESBL + uso previo de quinolonas + pielonefritis complicada = evitar quinolonas y nitrofurantoína → carbapenem IV.
Aquí el dato decisivo es:
UC previo E. coli BLEE + pielonefritis complicada = no repitas cipro → ertapenem IV según antibiograma local.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Clasificar ITU: cistitis vs pielonefritis vs complicada (fiebre alta, dolor costovertebral, náuseas).
2. Revisar historial microbiológico (ESBL previo) y antibióticos previos (quinolonas).
3. Evitar fluoroquinolonas y amoxicilina-clavulánico empírico si ESBL documentada.
4. Iniciar ertapenem IV (o betalactámico según antibiograma local) + hospitalización; ajustar por cultivo.

Perlas de examen
✅ ESBL: evitar fluoroquinolonas, cefalosporinas de 3.ª generación y amoxicilina-clavulánico empírico.
✅ Tratamiento ESBL: carbapenem (ertapenem) o betalactámico-β-lactamasa según antibiograma.
✅ Nitrofurantoína y fosfomicina: solo cistitis no complicada (no alcanzan parénquima renal).
✅ Pielonefritis complicada = IV + hospitalización inicialmente.
✅ Historia de ESBL = no repitas ciprofloxacino; piensa carbapenem.
✅ Ajustar siempre por antibiograma y resistencia local.

Referencias
• IDSA/SHEA Guidelines for the Diagnosis and Management of Complicated Urinary Tract Infections.
• Pitout — Infections with extended-spectrum β-lactamase-producing Enterobacteriaceae.
• Tamma et al. — Infectious Diseases Society of America guidance on ESBL-producing Enterobacteriaceae.
• UpToDate: Extended-spectrum beta-lactamases and treatment of ESBL-producing Enterobacteriaceae.`,
  },
  {
    id: "dr-q-79",
    examArea: "Medicina Interna / Infectología",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "tuberculosis", "latente"],
    statement:
      "Mujer de 30 años, asintomática, PPD 18 mm (lectura a las 48 h). Rx tórax normal. Contacto domiciliario de paciente con TB pulmonar bacilífera confirmada. VIH negativo. ¿Conducta?",
    options: [
      { id: "A", label: "A", text: "RIPE (rifampicina, isoniazida, pirazinamida, etambutol) 6 meses por TB activa." },
      {
        id: "B",
        label: "B",
        text: "Infección latente por TB (ILTB): isoniazida + rifapentina semanal 3 meses (3HP) o isoniazida 9 meses según guía local; descartar activa antes de tratar.",
      },
      { id: "C", label: "C", text: "No tratamiento; PPD <20 mm en contacto no requiere profilaxis." },
      { id: "D", label: "D", text: "Vacuna BCG revacunación." },
    ],
    correctOptionId: "B",
    explanation:
      "PPD ≥5 mm en contacto estrecho = ILTB (independiente del cutoff general de 10-15 mm). Rx normal descarta activa. Tratamiento ILTB: 3HP (isoniazida + rifapentina 12 dosis semanales) preferido por adherencia, o isoniazida 6-9 meses. RIPE es para TB activa. BCG no revacunar en adultos contactos.",
    keyPoints: [
      "Cuando veas: contacto estrecho de TB pulmonar bacilífera + PPD positivo (≥5 mm en contacto) + Rx tórax normal + asintomático + VIH negativo.",
      "Debes pensar en: infección latente por tuberculosis (ILTB) → profilaxis con 3HP (isoniazida + rifapentina 12 semanas) o isoniazida 9 meses, no RIPE.",
      "En contacto estrecho el umbral de PPD positivo es ≥5 mm, independiente del cutoff general de 10-15 mm.",
      "RIPE es esquema de TB activa; BCG no se revacuna en adultos contactos de TB.",
      "Tema: Infectología — infección latente por tuberculosis (ILTB) en contacto estrecho.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de infectología/tuberculosis porque evalúa la diferenciación entre TB activa e infección latente en contacto estrecho: PPD positivo + Rx normal + asintomático = ILTB que requiere profilaxis, no tratamiento con RIPE.

La clave no es iniciar RIPE como TB activa, omitir tratamiento porque "PPD <20 mm" ni revacunar con BCG.
La clave es:
Reconocer ILTB en contacto estrecho (PPD ≥5 mm + Rx normal + asintomático) → profilaxis con 3HP o isoniazida; descartar activa antes de tratar.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 30 años, asintomática, PPD 18 mm (lectura a las 48 h).
• Rx tórax normal (sin evidencia de enfermedad activa).
• Contacto domiciliario de paciente con TB pulmonar bacilífera confirmada.
• VIH negativo; sin síntomas respiratorios ni constitucionales.

Recordemos ILTB vs TB activa:
• Contacto estrecho: conviviente o exposición prolongada a TB bacilífera confirmada.
• En contacto estrecho: PPD ≥5 mm = positivo (umbral más bajo que población general 10-15 mm).
• ILTB: infección por M. tuberculosis sin enfermedad activa (Rx normal + asintomático).
• TB activa: síntomas (tos >2 semanas, fiebre, sudoración nocturna, pérdida peso) + Rx anormal o baciloscopia/cultivo positivo.
• Tratamiento ILTB preferido: 3HP (isoniazida + rifapentina semanal × 12 dosis en 3 meses) por mejor adherencia.
• Alternativa: isoniazida 300 mg/día × 6-9 meses (9 meses preferido en contactos).
• RIPE (rifampicina, isoniazida, pirazinamida, etambutol): esquema de TB activa, no profilaxis.
• BCG: no revacunar en adultos contactos; no sustituye tratamiento de ILTB.

Por lo tanto:
La conducta correcta es tratar ILTB con 3HP o isoniazida 9 meses, tras descartar enfermedad activa.

¿Por qué la opción B es la respuesta correcta?
Identifica ILTB (contacto + PPD positivo + Rx normal + asintomática) y propone profilaxis con 3HP (isoniazida + rifapentina 12 semanas) o isoniazida 9 meses según guía local, enfatizando descartar TB activa antes de tratar.

¿Por qué fallan las otras opciones?
Opción A (RIPE 6 meses por TB activa): RIPE es tratamiento de TB activa pulmonar; aquí no hay enfermedad activa (Rx normal, asintomática).
Opción C (no tratamiento; PPD <20 mm): en contacto estrecho el umbral es ≥5 mm, no 20 mm; PPD 18 mm es positivo y requiere profilaxis.
Opción D (vacuna BCG revacunación): BCG no se revacuna en adultos contactos; no trata ILTB ni previene reactivación.

¿Cuál es la trampa del examen?
Muchos estudiantes confunden:
"PPD positivo = TB activa = RIPE siempre" o aplican cutoff general de 10-15 mm sin considerar contacto estrecho.
Pero el examen exige correlacionar:
Contacto estrecho + PPD ≥5 mm + Rx normal + asintomático = ILTB → profilaxis, no RIPE.
Aquí el dato decisivo es:
Contacto bacilífero + PPD 18 mm + Rx normal = ILTB → 3HP o isoniazida 9 meses.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar contacto estrecho de TB bacilífera confirmada.
2. Evaluar PPD (≥5 mm = positivo en contacto) y Rx tórax + síntomas.
3. Si Rx normal + asintomático = ILTB → profilaxis (3HP preferido o isoniazida 9 meses).
4. RIPE solo si TB activa confirmada o altamente probable.

Perlas de examen
✅ Contacto estrecho: PPD ≥5 mm = positivo (umbral más bajo).
✅ Rx normal + asintomático + PPD (+) = ILTB, no TB activa.
✅ Profilaxis preferida: 3HP (12 dosis semanales en 3 meses) por adherencia.
✅ RIPE = TB activa; nunca profilaxis de ILTB.
✅ BCG no revacunar en adultos contactos.
✅ Descartar TB activa (Rx, síntomas, baciloscopia si indicada) antes de tratar ILTB.

Referencias
• WHO Guidelines on the Management of Latent Tuberculosis Infection.
• CDC Treatment of Latent Tuberculosis Infection (LTBI).
• Sterling et al. — Three months of rifapentine and isoniazid for latent tuberculosis infection (3HP trial).
• UpToDate: Latent tuberculosis infection: Diagnosis and treatment.`,
  },
  {
    id: "dr-q-80",
    examArea: "Medicina Interna / Infectología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "colangitis", "tokyo", "sepsis"],
    statement:
      "Hombre de 67 años, ictericia dolorosa, fiebre 39.8 °C, escalofríos. PA 78/45, FC 130, bilirrubina total 12 mg/dL, directa 10, leucocitos 22.000, lactato 4.2. Eco: dilatación vía biliar + cálculo en colédoco. ¿Manejo inmediato?",
    options: [
      { id: "A", label: "A", text: "Antibióticos VO y colecistectomía electiva en 6 semanas." },
      {
        id: "B",
        label: "B",
        text: "Colangitis grave (Tokyo III): reanimación séptica + piperacilina-tazobactam IV + drenaje biliar urgente (CPRE o drenaje percutáneo) en <24-48 h.",
      },
      { id: "C", label: "C", text: "CPRE diferida tras 2 semanas de antibióticos para evitar pancreatitis." },
      { id: "D", label: "D", text: "Metronidazol monoterapia por anaerobios biliares." },
    ],
    correctOptionId: "B",
    explanation:
      "Colangitis aguda grave (criterios Tokyo): disfunción cardiovascular (shock), respiratoria, renal, hepática, hematológica o neurológica. Tríada de Charcot (fiebre, ictericia, dolor) + shock = Tokyo III. ATB IV de amplio espectro (Enterobacteriaceae + anaerobios) + drenaje biliar urgente. CPRE es gold standard si disponible; drenaje percutáneo si CPRE no factible.",
    keyPoints: [
      "Cuando veas: tríada de Charcot (fiebre + ictericia + dolor) + shock (PA 78/45) + dilatación vía biliar + cálculo en colédoco + lactato elevado.",
      "Debes pensar en: colangitis aguda grave (Tokyo III) → reanimación séptica + piperacilina-tazobactam IV + drenaje biliar urgente (<24-48 h).",
      "Colangitis = antibióticos + drenaje biliar; no uno sin el otro; CPRE diferida en Tokyo III aumenta mortalidad.",
      "Piperacilina-tazobactam o carbapenem cubren Enterobacteriaceae y anaerobios biliares; metronidazol monoterapia es insuficiente.",
      "Tema: Infectología / Urgencias — colangitis aguda grave (Tokyo Guidelines III).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de infectología/urgencias porque evalúa colangitis aguda grave (Tokyo III): tríada de Charcot + shock + obstrucción biliar confirmada exige reanimación séptica, antibióticos IV de amplio espectro y drenaje biliar urgente en <24-48 h.

La clave no es antibióticos VO con colecistectomía electiva diferida, CPRE diferida 2 semanas ni metronidazol monoterapia.
La clave es:
Reconocer colangitis Tokyo III (disfunción orgánica + obstrucción biliar) → ATB IV + drenaje biliar urgente (CPRE o percutáneo); no diferir descompresión.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 67 años, ictericia dolorosa, fiebre 39.8 °C, escalofríos.
• PA 78/45, FC 130, lactato 4.2 (shock séptico).
• Bilirrubina total 12 mg/dL (directa 10), leucocitos 22,000.
• Eco: dilatación vía biliar + cálculo en colédoco (obstrucción confirmada).
• Colangitis aguda grave con disfunción cardiovascular (Tokyo III).

Recordemos colangitis aguda y Tokyo Guidelines:
• Tríada de Charcot: fiebre + ictericia + dolor en hipocondrio derecho.
• Pentada de Reynolds: Charcot + hipotensión + alteración del estado mental.
• Tokyo I (leve): sin disfunción orgánica → ATB + drenaje electivo (<24-48 h).
• Tokyo II (moderada): leucocitosis >12,000, fiebre >39 °C, edad >75, bilirrubina >5 → ATB + drenaje urgente.
• Tokyo III (grave): disfunción cardiovascular, respiratoria, renal, hepática, hematológica o neurológica → ATB IV + drenaje urgente <24-48 h.
• ATB empírico: piperacilina-tazobactam o carbapenem (Enterobacteriaceae + anaerobios biliares).
• Drenaje: CPRE (gold standard) si disponible; drenaje percutáneo transhepático si CPRE no factible.
• Colangitis = ATB + drenaje; la descompresión biliar es tan crítica como los antibióticos.

Por lo tanto:
El manejo inmediato es reanimación séptica + piperacilina-tazobactam IV + drenaje biliar urgente (CPRE o percutáneo) en <24-48 h.

¿Por qué la opción B es la respuesta correcta?
Identifica colangitis grave (Tokyo III) por shock + disfunción orgánica, propone reanimación séptica, piperacilina-tazobactam IV (amplio espectro biliar) y drenaje biliar urgente (<24-48 h) por CPRE o drenaje percutáneo.

¿Por qué fallan las otras opciones?
Opción A (ATB VO + colecistectomía electiva 6 semanas): shock y Tokyo III requieren drenaje urgente y ATB IV; colecistectomía electiva no descomprime vía biliar obstruida agudamente.
Opción C (CPRE diferida 2 semanas): mortalidad ↑ significativamente sin descompresión biliar en colangitis grave; Tokyo III exige drenaje <24-48 h.
Opción D (metronidazol monoterapia): no cubre Gram negativos entéricos (E. coli, Klebsiella) causales principales; monoterapia anaerobicida insuficiente.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Colangitis = antibióticos primero, drenaje después" o "CPRE puede esperar si doy ATB."
Pero el examen exige recordar:
Colangitis = ATB + drenaje; Tokyo III con shock no espera CPRE "mañana".
Aquí el dato decisivo es:
Shock (PA 78/45) + cálculo en colédoco + lactato 4.2 = Tokyo III → pip-tazo + drenaje biliar hoy.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer tríada de Charcot ± Pentada de Reynolds (shock + alteración mental).
2. Confirmar obstrucción biliar (eco: dilatación + cálculo en colédoco).
3. Clasificar severidad Tokyo (III si disfunción orgánica).
4. Reanimación séptica + ATB IV amplio espectro + drenaje biliar urgente (<24-48 h).

Perlas de examen
✅ Tríada Charcot: fiebre + ictericia + dolor; Pentada si shock + alteración mental.
✅ Tokyo III: disfunción orgánica → ATB IV + drenaje urgente <24-48 h.
✅ Colangitis = ATB + drenaje; no uno sin el otro.
✅ CPRE = gold standard; drenaje percutáneo si CPRE no factible.
✅ Pip-tazo o carbapenem cubren espectro biliar (GN + anaerobios).
✅ Colangitis con shock no espera CPRE "mañana"; drena hoy.

Referencias
• Tokyo Guidelines 2018/2019: Management of Acute Cholangitis and Choledocholithiasis.
• Kiriyama et al. — Tokyo Guidelines for the management of acute cholangitis and cholecystitis.
• ASGE Standards of Practice: Role of ERCP in choledocholithiasis.
• UpToDate: Acute cholangitis: Clinical manifestations, diagnosis, and management.`,
  },
  {
    id: "dr-q-81",
    examArea: "Medicina Interna / Neumología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "tep", "choque_obstructivo", "trombolisis", "urgencias"],
    statement:
      "Paciente de 68 años con antecedente de hipertensión, quien consulta por disnea súbita y dolor torácico pleurítico. Al examen físico: PA 85/50 mmHg, FC 120 lpm, FR 28 rpm, SatO₂ 88%. Ingurgitación yugular presente. Electrocardiograma: taquicardia sinusal con patrón S1Q3T3. Ante la inestabilidad hemodinámica, ¿cuál es la conducta inicial más adecuada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anticoagulación con heparina de bajo peso molecular y observación.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar angiotomografía pulmonar antes de iniciar tratamiento.",
      },
      {
        id: "C",
        label: "C",
        text: "Trombólisis sistémica inmediata.",
      },
      {
        id: "D",
        label: "D",
        text: "Colocación de filtro de vena cava inferior.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Cuadro altamente sugestivo de tromboembolismo pulmonar de alto riesgo (masivo), con hipotensión e inestabilidad hemodinámica. La reperfusión inmediata mediante trombólisis sistémica es el tratamiento de elección.",
    keyPoints: [
      "Cuando veas: disnea súbita + dolor pleurítico + hipotensión (PA 85/50) + ingurgitación yugular + signos de sobrecarga derecha (S1Q3T3).",
      "Debes pensar en: tromboembolismo pulmonar de alto riesgo (masivo) con choque obstructivo → trombólisis sistémica inmediata.",
      "La clave no es S1Q3T3; la clave es la hipotensión arterial que define alto riesgo y obliga reperfusión urgente.",
      "No esperar angio-TC en paciente hemodinámicamente inestable; anticoagulación sola no basta en TEP con choque.",
      "Tema: Neumología / Urgencias — TEP de alto riesgo y trombólisis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neumología/urgencias porque evalúa TEP de alto riesgo (masivo): la hipotensión arterial define choque obstructivo y obliga trombólisis sistémica inmediata, no anticoagulación sola ni angio-TC antes de tratar.

La clave no es el patrón S1Q3T3 ni la anticoagulación con HBPM y observación.
La clave es:
Identificar TEP de alto riesgo por hipotensión (PA 85/50) → trombólisis sistémica inmediata para reperfusión; no retrasar tratamiento esperando confirmación imagenológica en paciente inestable.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 68 años, HTA, disnea súbita y dolor torácico pleurítico.
• PA 85/50 mmHg, FC 120 lpm, FR 28 rpm, SatO2 88%.
• Ingurgitación yugular presente (sobrecarga de cavidades derechas).
• ECG: taquicardia sinusal con patrón S1Q3T3 (sobrecarga aguda del VD).
• Inestabilidad hemodinámica: cuadro altamente sugestivo de TEP masivo.

Recordemos estratificación de riesgo en TEP (ESC):
• Alto riesgo (masivo): hipotensión (PAS <90 mmHg o necesidad de vasopresores) → mortalidad 25-65%.
• Intermedio-alto riesgo: normotenso pero biomarcadores ↑ + disfunción VD → monitorización UCI.
• Bajo riesgo: normotenso, sin disfunción VD ni biomarcadores ↑ → anticoagulación y posible alta precoz.
• Fisiopatología del choque obstructivo: trombo ocluye circulación pulmonar → ↑ RVP → dilatación VD → ↓ llenado VI → ↓ gasto cardíaco.
• Tratamiento alto riesgo: trombólisis sistémica (alteplase 100 mg IV en 2 h) o embolectomía si contraindicación.
• Anticoagulación sola: insuficiente en choque; no disuelve trombo agudo.
• Angio-TC: confirmatoria, pero no debe retrasar reperfusión en paciente inestable.
• Filtro de VCI: no trata TEP establecido agudo; reservado para contraindicación absoluta a anticoagulación.

Por lo tanto:
La conducta inicial más adecuada es trombólisis sistémica inmediata por TEP de alto riesgo con hipotensión.

¿Por qué la opción C es la respuesta correcta?
Identifica inestabilidad hemodinámica como criterio de TEP de alto riesgo y propone trombólisis sistémica inmediata, que es el tratamiento de elección para reperfusión rápida y reducción de mortalidad en choque obstructivo.

¿Por qué fallan las otras opciones?
Opción A (HBPM + observación): anticoagulación sola no basta en TEP masivo con hipotensión; no disuelve el trombo ni revierte el choque obstructivo.
Opción B (angio-TC antes de tratar): retrasa reperfusión en paciente inestable; la trombólisis no debe esperar confirmación imagenológica si hay alta sospecha clínica con hipotensión.
Opción D (filtro de VCI): no trata TEP agudo establecido; no disuelve trombo pulmonar; indicado en contraindicación a anticoagulación, no como primera línea en TEP masivo.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"S1Q3T3 = TEP → siempre anticoagulación" o "confirmar con angio-TC antes de tratar."
Pero el examen exige correlacionar:
Hipotensión + disnea súbita + signos de sobrecarga derecha = alto riesgo → trombólisis ya.
Aquí el dato decisivo es:
PA 85/50 mmHg (hipotensión) define alto riesgo independientemente del ECG; la decisión se basa en estabilidad hemodinámica.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar TEP ante disnea súbita + dolor pleurítico + factores de riesgo.
2. Valorar estabilidad hemodinámica (PAS <90 = alto riesgo).
3. Identificar signos de sobrecarga derecha (ingurgitación yugular, S1Q3T3).
4. Alto riesgo → trombólisis sistémica inmediata; no esperar angio-TC si inestable.

Perlas de examen
✅ TEP alto riesgo: hipotensión (PAS <90) o vasopresores → trombólisis inmediata.
✅ La clave no es S1Q3T3; la clave es la hipotensión arterial.
✅ Choque obstructivo: trombo → ↑ RVP → dilatación VD → ↓ GC.
✅ No esperar angio-TC en paciente hemodinámicamente inestable.
✅ Anticoagulación sola no basta en TEP con choque.
✅ Filtro VCI no trata TEP agudo; reservado para contraindicación a anticoagulación.

Referencias
• Konstantinides et al. — 2019 ESC Guidelines for the Diagnosis and Management of Acute Pulmonary Embolism.
• Kearon et al. — Antithrombotic Therapy for VTE Disease: CHEST Guideline and Expert Panel Report.
• Jaff et al. — Management of massive and submassive pulmonary embolism.
• UpToDate: Treatment, prognosis, and follow-up of acute pulmonary embolism in adults.`,
  },
  {
    id: "dr-q-82",
    examArea: "Medicina Interna / Endocrinología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "endocrinologia", "cad", "cetoacidosis", "urgencias"],
    statement:
      "Mujer de 45 años con antecedente de diabetes mellitus tipo 1 consulta por náuseas, vómito y dolor abdominal. Glucometría: 450 mg/dL. Gasometría arterial: pH 7.1, HCO₃⁻ 8 mEq/L, anion gap 22 mEq/L. ¿Cuál es el orden lógico del manejo inicial?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Insulina intravenosa → líquidos intravenosos → corrección de potasio.",
      },
      {
        id: "B",
        label: "B",
        text: "Bicarbonato intravenoso → insulina intravenosa → líquidos intravenosos.",
      },
      {
        id: "C",
        label: "C",
        text: "Líquidos intravenosos → evaluación/corrección de potasio → insulina intravenosa.",
      },
      {
        id: "D",
        label: "D",
        text: "Insulina subcutánea → líquidos intravenosos → bicarbonato intravenoso.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Cetoacidosis diabética. El manejo inicial debe comenzar con expansión de volumen mediante cristaloides, seguido de evaluación del potasio sérico y posteriormente administración de insulina intravenosa.",
    keyPoints: [
      "Cuando veas: DM1 + hiperglucemia (450 mg/dL) + acidosis metabólica (pH 7.1, HCO3 8) + anion gap elevado (22) + náuseas/vómitos.",
      "Debes pensar en: cetoacidosis diabética (CAD) → secuencia: líquidos IV → evaluar/corregir K+ → insulina IV.",
      "La insulina desplaza K+ intracelularmente; si K+ <3.3 mEq/L, posponer insulina y reponer potasio primero (hipokalemia letal).",
      "Bicarbonato solo si pH <6.9 (rara vez indicado en pH 7.1); insulina SC inadecuada en CAD severa con vómitos.",
      "Tema: Endocrinología / Urgencias — cetoacidosis diabética: secuencia de manejo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de endocrinología/urgencias porque evalúa la secuencia correcta de manejo en cetoacidosis diabética: volumen primero, evaluar potasio antes de insulina IV — la insulina sin reponer K+ puede causar hipokalemia letal.

La clave no es la glucosa ni iniciar insulina inmediatamente.
La clave es:
Identificar CAD y aplicar la secuencia ADA: 1) líquidos IV (crialoides isotónicos), 2) evaluar/corregir K+, 3) insulina regular IV; bicarbonato solo en acidosis extrema (pH <6.9).

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 45 años, DM1, náuseas, vómito y dolor abdominal.
• Glucometría 450 mg/dL (hiperglucemia severa).
• Gasometría: pH 7.1, HCO3 8 mEq/L, anion gap 22 mEq/L.
• CAD severa con deshidratación osmótica por diuresis (vómitos agravan pérdida de volumen).

Recordemos manejo de CAD (ADA/Endocrine Society):
• Criterios CAD: hiperglucemia (>250 mg/dL) + pH <7.3 + HCO3 <18 + anion gap >10 + cetonemia/cetonuria.
• Fisiopatología: deficiencia insulina → lipólisis → cuerpos cetónicos → acidosis + diuresis osmótica → deshidratación severa.
• Secuencia de manejo:
  1. Líquidos IV: cristaloides isotónicos (SF 0.9%) 15-20 mL/kg primera hora (restaurar perfusión y filtración glomerular).
  2. Evaluar K+ sérico: si K+ <3.3 → posponer insulina y reponer K+ primero; si 3.3-5.2 → iniciar insulina + reponer K+ simultáneamente; si >5.2 → insulina sin K+ hasta descenso.
  3. Insulina regular IV: 0.1 U/kg bolus + infusión 0.1 U/kg/h (después de volumen y K+ evaluado).
• Bicarbonato: solo si pH <6.9 (acidosis extrema con riesgo de arritmias); no indicado rutinariamente en pH 7.1.
• Insulina SC: inadecuada en CAD severa con vómitos (absorción errática, no titulable).
• Identificar y tratar factor desencadenante (infección, omisión insulina, IAM, etc.).

Por lo tanto:
El orden lógico del manejo inicial es líquidos IV → evaluación/corrección de potasio → insulina IV.

¿Por qué la opción C es la respuesta correcta?
Propone la secuencia ADA correcta: primero expansión de volumen con cristaloides (restaura perfusión), luego evaluación/corrección de K+ (previene hipokalemia letal con insulina), y finalmente insulina regular IV (reduce glucosa y cetogénesis de forma controlada).

¿Por qué fallan las otras opciones?
Opción A (insulina IV → líquidos → K+): insulina sin reponer volumen agrava deshidratación; insulina sin evaluar K+ puede causar hipokalemia grave/arritmias letales.
Opción B (bicarbonato → insulina → líquidos): bicarbonato no es primera línea en pH 7.1; secuencia invertida (volumen debe ir primero); bicarbonato puede empeorar acidosis intracelular y hipokalemia.
Opción D (insulina SC → líquidos → bicarbonato): insulina SC inadecuada en CAD severa con vómitos; bicarbonato no indicado en pH 7.1; volumen no es prioridad en esta secuencia.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"CAD = glucosa alta = insulina inmediata" o "acidosis = bicarbonato siempre."
Pero el examen exige recordar:
Volumen primero → K+ evaluado → insulina IV; bicarbonato solo pH <6.9.
Aquí el dato decisivo es:
La secuencia de intervenciones, no la cifra de glucosa; insulina sin K+ evaluado puede matar por hipokalemia.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Líquidos intravenosos (crialoides isotónicos) — restaurar perfusión.
2. Evaluar y corregir potasio (insulina desplaza K+ intracelularmente).
3. Insulina regular intravenosa (infusión continua titulable).
4. Identificar y tratar el factor desencadenante; bicarbonato solo si pH <6.9.

Perlas de examen
✅ CAD: hiperglucemia + pH <7.3 + HCO3 <18 + anion gap ↑.
✅ Secuencia: líquidos → K+ → insulina IV (no al revés).
✅ Si K+ <3.3: posponer insulina y reponer K+ primero.
✅ Bicarbonato solo si pH <6.9 (rara vez en pH 7.1).
✅ Insulina SC inadecuada en CAD severa con vómitos.
✅ La trampa: iniciar insulina sin reponer volumen ni evaluar K+.

Referencias
• American Diabetes Association Standards of Care in Diabetes.
• Kitabchi et al. — Hyperglycemic crises in adult patients with diabetes (ADA consensus).
• Joint British Diabetes Societies: The Management of Diabetic Ketoacidosis in Adults.
• UpToDate: Diabetic ketoacidosis and hyperosmolar hyperglycemic state in adults: Treatment.`,
  },
  {
    id: "dr-q-83",
    examArea: "Medicina Interna / Infectología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "sepsis", "choque_septico", "urgencias", "antibioticos"],
    statement:
      "Paciente de 72 años, antecedente de DM2 y ERC estadio 3, ingresa por cuadro de 48 horas de fiebre, disuria y alteración del estado de conciencia. Al examen: PA 88/50 mmHg, FC 115 lpm, FR 24 rpm, temperatura 38.5°C. Laboratorios: lactato 4.2 mmol/L, creatinina 2.1 mg/dL (basal 1.2), leucocitosis con desviación a la izquierda. Tras asegurar la vía aérea, ¿cuál es la medida con mayor impacto en la supervivencia del paciente en la primera hora?",
    options: [
      { id: "A", label: "A", text: "Administrar bicarbonato intravenoso." },
      { id: "B", label: "B", text: "Iniciar vasopresores inmediatamente." },
      {
        id: "C",
        label: "C",
        text: "Administrar antibióticos de amplio espectro dentro de la primera hora.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar urocultivo y esperar resultados antes de iniciar tratamiento.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Choque séptico de origen urinario. La administración precoz de antibióticos adecuados es una de las intervenciones con mayor impacto demostrado en la reducción de la mortalidad.",
    keyPoints: [
      "Cuando veas: fiebre + hipotensión + lactato elevado + alteración del estado de conciencia + disfunción orgánica (creatinina en ascenso).",
      "Debes pensar en: choque séptico de origen urinario → antibióticos de amplio espectro en la primera hora.",
      "Cada hora de retraso en antibióticos ↑ mortalidad ~8%; los cultivos se toman pero no retrasan el tratamiento.",
      "Vasopresores solo si persiste hipotensión tras reanimación con cristaloides, no como primera medida.",
      "Tema: Sepsis y choque séptico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de urgencias e infectología porque evalúa la intervención con mayor impacto en supervivencia durante la primera hora del choque séptico.

La clave no es la hipotensión aislada.
La clave es:
Identificar choque séptico y administrar antibióticos de amplio espectro dentro de la primera hora, sin retrasar el tratamiento por cultivos.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 72 años, DM2, ERC estadio 3.
• Fiebre, disuria y alteración del estado de conciencia de 48 horas.
• PA 88/50 mmHg, FC 115 lpm, FR 24 rpm, temperatura 38.5 °C.
• Lactato 4.2 mmol/L, creatinina 2.1 mg/dL (basal 1.2), leucocitosis con desviación a la izquierda.
• Choque séptico de probable origen urinario con disfunción orgánica aguda.

Recordemos los criterios de choque séptico (Sepsis-3):
• Infección sospechada o documentada.
• Hipotensión persistente que requiere vasopresores para mantener PAM ≥65 mmHg (o lactato >2 mmol/L pese a reanimación).
• Disfunción orgánica aguda (aquí: alteración mental + lesión renal aguda).

Por lo tanto:
El paciente tiene choque séptico de origen urinario.
La intervención con mayor impacto demostrado en mortalidad en la primera hora es la administración precoz de antibióticos de amplio espectro.

¿Por qué la opción C es la respuesta correcta?
Los antibióticos de amplio espectro dentro de la primera hora reducen la mortalidad de forma significativa en sepsis y choque séptico.
Cada hora de retraso en el inicio de antibióticos aumenta la mortalidad aproximadamente un 8%.
Los hemocultivos y urocultivos deben obtenerse antes de la administración, pero nunca deben retrasar el tratamiento empírico.
En foco urinario probable: ceftriaxona, piperacilina-tazobactam o carbapenémico según riesgo de multirresistencia.

¿Por qué fallan las otras opciones?
Opción A (bicarbonato IV): no es la intervención de mayor impacto en supervivencia en la primera hora; su uso es excepcional en acidosis severa.
Opción B (vasopresores inmediatamente): los vasopresores no sustituyen el tratamiento antimicrobiano; se indican si persiste hipotensión tras reanimación con cristaloides.
Opción D (esperar urocultivo): retrasa los antibióticos y aumenta la mortalidad; el tratamiento empírico debe iniciarse de inmediato.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian choque con vasopresores como primera medida.
Pero en sepsis, la intervención con mayor impacto en supervivencia demostrado es el antibiótico precoz.
La secuencia correcta es: ABC + cultivos (sin retrasar ATB) + cristaloides + antibióticos + vasopresores si persiste hipotensión.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer choque séptico (infección + hipotensión/lactato + disfunción orgánica).
2. Obtener cultivos sin retrasar antibióticos.
3. Administrar antibióticos de amplio espectro en la primera hora.
4. Reanimar con cristaloides y agregar vasopresores si persiste hipotensión.

Perlas de examen
✅ Choque séptico = infección + hipotensión/lactato >2 + disfunción orgánica.
✅ Antibióticos en la primera hora: mayor impacto en mortalidad de sepsis.
✅ Cada hora de retraso en ATB ↑ mortalidad ~8%.
✅ Cultivos sí, pero nunca retrasar el tratamiento empírico.
✅ Vasopresores después de volumen, no como sustituto de antibióticos.
✅ Las residencias preguntan prioridades de la primera hora, no el manejo completo.

Referencias
• Surviving Sepsis Campaign Guidelines.
• SCCM/ESICM Sepsis Definitions (Sepsis-3).
• IDSA Guidelines on Sepsis.
• Harrison's Principles of Internal Medicine.
• UpToDate: Evaluation and Management of Suspected Sepsis and Septic Shock in Adults.`,
  },
  {
    id: "dr-q-84",
    examArea: "Medicina Interna / Neurología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "neurologia", "estatus_epileptico", "urgencias"],
    statement:
      "Paciente masculino de 25 años sin antecedentes conocidos, traído a urgencias por convulsión tónico-clónica generalizada que persiste por 12 minutos. Al examen físico no recupera el estado de conciencia entre episodios convulsivos. Tras asegurar la vía aérea y permeabilizar acceso venoso, ¿cuál es el siguiente paso farmacológico correcto?",
    options: [
      { id: "A", label: "A", text: "Administrar fenitoína intravenosa como primera medida." },
      { id: "B", label: "B", text: "Administrar lorazepam o diazepam intravenoso." },
      { id: "C", label: "C", text: "Iniciar infusión de propofol inmediatamente." },
      { id: "D", label: "D", text: "Administrar levetiracetam oral." },
    ],
    correctOptionId: "B",
    explanation:
      "Estatus epiléptico convulsivo. Tras las medidas iniciales de soporte, el tratamiento farmacológico de primera línea son las benzodiacepinas intravenosas.",
    keyPoints: [
      "Cuando veas: convulsión tónico-clónica ≥5 minutos sin recuperación de conciencia entre episodios.",
      "Debes pensar en: estatus epiléptico convulsivo → benzodiacepina IV como primera línea farmacológica.",
      "Lorazepam o diazepam IV potencian GABA y detienen la actividad convulsiva; fenitoína es segunda línea.",
      "Propofol se reserva para estatus refractario tras fallar BZD + segunda línea; levetiracetam oral no es viable en convulsión activa.",
      "Tema: Estatus epiléptico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de neurología y urgencias porque evalúa la secuencia farmacológica del estatus epiléptico convulsivo tras las medidas iniciales de soporte.

La clave no es cualquier antiepiléptico.
La clave es:
Administrar benzodiacepina intravenosa (lorazepam o diazepam) como primera línea farmacológica, no fenitoína ni propofol.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 25 años sin antecedentes conocidos.
• Convulsión tónico-clónica generalizada que persiste 12 minutos.
• No recupera el estado de conciencia entre episodios convulsivos.
• Estatus epiléptico convulsivo (≥5 minutos debe tratarse como tal).
• Vía aérea asegurada y acceso venoso permeabilizado.

Recordemos la definición y clasificación del estatus epiléptico:
• Convulsión ≥5 minutos o convulsiones repetidas sin recuperación de conciencia entre ellas.
• Estatus establecido: persiste tras benzodiacepina → segunda línea (fenitoína, levetiracetam, valproato).
• Estatus refractario: persiste tras segunda línea → anestésicos (propofol, midazolam, tiopental).

Por lo tanto:
Tras ABC y acceso venoso, el siguiente paso farmacológico correcto es benzodiacepina IV.

¿Por qué la opción B es la respuesta correcta?
Lorazepam o diazepam IV son el tratamiento de primera línea del estatus epiléptico convulsivo.
Potencian la acción del GABA en el receptor GABA-A, deteniendo rápidamente la actividad convulsiva.
La fenitoína, levetiracetam y valproato son segunda línea si la convulsión persiste tras la benzodiacepina.
El propofol se reserva para estatus refractario que no responde a primera y segunda línea.

¿Por qué fallan las otras opciones?
Opción A (fenitoína IV como primera medida): es segunda línea, no tratamiento inicial; no sustituye la benzodiacepina.
Opción C (propofol inmediato): reservado para estatus refractario con anestesia; no es primera medida farmacológica.
Opción D (levetiracetam oral): vía oral inadecuada en convulsión activa; no es primera línea y la vía oral no es viable.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen fenitoína como primera medida porque la asocian con epilepsia.
Pero la secuencia correcta es siempre benzodiacepina primero.
El examen pregunta el siguiente paso tras ABC, no el manejo del estatus refractario.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. ABC + glucemia capilar (descartar hipoglucemia).
2. Benzodiacepina IV (lorazepam o diazepam) — primera línea.
3. Segunda línea si persiste: levetiracetam, valproato o fosfenitoína.
4. Refractario: anestésicos (propofol, midazolam).

Perlas de examen
✅ Convulsión ≥5 min o sin recuperación de conciencia = estatus epiléptico.
✅ Primera línea: benzodiacepina IV (lorazepam o diazepam).
✅ Fenitoína, levetiracetam, valproato: segunda línea.
✅ Propofol: estatus refractario, no primera medida.
✅ Siempre descartar hipoglucemia antes de antiepilépticos.
✅ Las residencias preguntan la secuencia, no solo el diagnóstico.

Referencias
• Neurocritical Care Society Guidelines on Status Epilepticus.
• American Epilepsy Society Treatment Guidelines.
• ILAE Classification of Status Epilepticus.
• Harrison's Principles of Internal Medicine.
• UpToDate: Convulsive Status Epilepticus in Adults.`,
  },
  {
    id: "dr-q-85",
    examArea: "Medicina Interna / Nefrología / Urgencias",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "nefrologia", "hiperpotasemia", "electrolitos", "urgencias"],
    statement:
      "Paciente de 60 años con enfermedad renal crónica estadio 4, consulta por debilidad muscular progresiva. Al examen físico se encuentra hemodinámicamente estable. ECG: ondas T picudas y simétricas, desaparición de la onda P y ensanchamiento del complejo QRS. Potasio sérico: 7.4 mEq/L. ¿Cuál es la intervención terapéutica inicial para prevenir una arritmia fatal?",
    options: [
      { id: "A", label: "A", text: "Administrar insulina regular con dextrosa." },
      { id: "B", label: "B", text: "Iniciar hemodiálisis urgente." },
      { id: "C", label: "C", text: "Administrar gluconato de calcio intravenoso." },
      { id: "D", label: "D", text: "Administrar salbutamol nebulizado." },
    ],
    correctOptionId: "C",
    explanation:
      "Hiperpotasemia grave con cambios electrocardiográficos que amenazan la vida. La primera medida es estabilizar la membrana miocárdica mediante calcio intravenoso.",
    keyPoints: [
      "Cuando veas: potasio >6.5 mEq/L + ondas T picudas + desaparición de onda P + QRS ensanchado en ECG.",
      "Debes pensar en: hiperpotasemia grave con toxicidad cardíaca → gluconato de calcio IV primero.",
      "El calcio estabiliza la membrana miocárdica pero no disminuye el potasio sérico; insulina y diálisis vienen después.",
      "Progresión ECG: T picuda → PR prolongado → onda P ausente → QRS ancho → asistolia; actuar antes del paro.",
      "Tema: Hiperpotasemia grave.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de nefrología y urgencias porque evalúa la prioridad terapéutica en hiperpotasemia grave con cambios electrocardiográficos que amenazan la vida.

La clave no es el valor del potasio.
La clave es:
Proteger el miocardio con gluconato de calcio IV antes de cualquier medida que disminuya el potasio sérico.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 60 años con ERC estadio 4.
• Debilidad muscular progresiva.
• Potasio sérico 7.4 mEq/L.
• ECG: ondas T picudas y simétricas, desaparición de la onda P, ensanchamiento del complejo QRS.
• Hiperpotasemia grave con toxicidad cardíaca inminente.

Recordemos la progresión electrocardiográfica de la hiperpotasemia:
• T picudas simétricas (hallazgo temprano).
• Prolongación del PR y aplanamiento de la onda P.
• Desaparición de la onda P y ensanchamiento del QRS.
• Patrón de onda sinusoidal → asistolia o fibrilación ventricular.

Por lo tanto:
La intervención inicial para prevenir arritmia fatal es estabilizar la membrana miocárdica con calcio IV, no disminuir el potasio.

¿Por qué la opción C es la respuesta correcta?
El gluconato de calcio IV antagoniza los efectos del potasio elevado sobre la membrana miocárdica.
Protege contra arritmias ventriculares letales de forma inmediata (efecto en minutos).
No disminuye el potasio sérico, pero estabiliza el corazón mientras se implementan medidas de eliminación y redistribución.
Debe administrarse antes de insulina, salbutamol o diálisis cuando hay cambios ECG.

¿Por qué fallan las otras opciones?
Opción A (insulina + dextrosa): reduce el potasio por redistribución intracelular, pero no protege la membrana cardíaca de inmediato.
Opción B (hemodiálisis urgente): es el tratamiento definitivo de eliminación en ERC avanzada, pero no es la primera medida ante riesgo de arritmia inminente.
Opción D (salbutamol nebulizado): redistribuye potasio al interior celular de forma lenta; no estabiliza la membrana miocárdica como el calcio.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen insulina + dextrosa primero porque "baja el potasio".
Pero la pregunta pide la intervención para prevenir arritmia fatal, no para disminuir el potasio.
La secuencia correcta es: calcio primero (proteger corazón) → redistribución (insulina, salbutamol) → eliminación (diálisis).

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Gluconato de calcio IV (estabiliza membrana; no baja K+).
2. Redistribución intracelular: insulina + dextrosa, salbutamol nebulizado.
3. Eliminación: resinas, diuréticos o hemodiálisis (definitivo en ERC avanzada).
4. Monitorizar ECG continuamente y repetir calcio si persiste toxicidad cardíaca.

Perlas de examen
✅ K+ >6.5 + cambios ECG = emergencia con riesgo de arritmia letal.
✅ Calcio IV primero: estabiliza membrana, no disminuye K+ sérico.
✅ Insulina + dextrosa baja K+ pero no protege el corazón inmediatamente.
✅ Hemodiálisis es definitiva en ERC avanzada, pero después del calcio.
✅ Progresión ECG: T picuda → QRS ancho → onda sinusoidal → paro.
✅ Las residencias preguntan la prioridad, no el manejo completo.

Referencias
• KDIGO Clinical Practice Guideline for CKD.
• European Resuscitation Council Guidelines.
• Harrison's Principles of Internal Medicine.
• Rosen's Emergency Medicine.
• UpToDate: Treatment and Prevention of Hyperkalemia in Adults.`,
  },
  {
    id: "dr-q-86",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "stemi", "iamcest", "reperfusion"],
    statement:
      "Paciente de 55 años consulta por dolor torácico opresivo de 60 minutos de evolución, irradiado a miembro superior izquierdo y acompañado de diaforesis. ECG: elevación del segmento ST de 3 mm en V1-V4. PA 130/80 mmHg, FC 90 lpm. ¿Cuál es el objetivo principal del manejo inicial?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Disminuir el consumo miocárdico de oxígeno mediante betabloqueadores.",
      },
      {
        id: "B",
        label: "B",
        text: "Lograr la reperfusión coronaria lo más rápido posible.",
      },
      { id: "C", label: "C", text: "Controlar el dolor con opioides intravenosos." },
      {
        id: "D",
        label: "D",
        text: "Prevenir arritmias ventriculares mediante amiodarona profiláctica.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "IAM con elevación del ST (IAMCEST) de localización anterior. El objetivo principal del manejo inicial es restaurar el flujo coronario para limitar el tamaño del infarto y preservar miocardio viable.",
    keyPoints: [
      "Cuando veas: dolor torácico típico + elevación del ST ≥1 mm en ≥2 derivaciones contiguas (V1-V4 = anterior).",
      "Debes pensar en: IAMCEST → reperfusión coronaria lo más rápido posible (tiempo es músculo).",
      "PCI primaria preferida si disponible en ≤120 min; fibrinólisis si PCI no oportuna.",
      "Aspirina, analgesia y betabloqueadores son coadyuvantes, no el objetivo principal del manejo inicial.",
      "Tema: IAM con elevación del ST (IAMCEST).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología porque evalúa el objetivo principal del manejo inicial del infarto agudo de miocardio con elevación del ST.

La clave no es la localización del infarto.
La clave es:
Restaurar el flujo coronario lo más rápido posible, porque cada minuto de oclusión aumenta la necrosis miocárdica.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 55 años con dolor torácico opresivo de 60 minutos.
• Irradiación a miembro superior izquierdo y diaforesis.
• ECG: elevación del segmento ST de 3 mm en V1-V4 (IAMCEST anterior).
• PA 130/80 mmHg, FC 90 lpm: hemodinámicamente estable pero con oclusión coronaria aguda.

Recordemos la fisiopatología del IAMCEST:
• Oclusión coronaria aguda → isquemia transmural → necrosis miocárdica progresiva.
• La elevación del ST refleja lesión transmural en curso.
• El tiempo de isquemia determina el tamaño del infarto y la supervivencia.

Por lo tanto:
El objetivo principal del manejo inicial es la reperfusión coronaria urgente, no el alivio sintomático ni la prevención de arritmias.

¿Por qué la opción B es la respuesta correcta?
Lograr la reperfusión coronaria lo más rápido posible es el objetivo principal del IAMCEST.
Estrategias: angioplastia primaria (PCI) preferida si disponible en ≤120 min desde el primer contacto médico.
Si PCI no está disponible oportunamente: fibrinólisis IV en ≤30 min (puerta-aguja).
La reperfusión limita el tamaño del infarto, preserva miocardio viable y reduce mortalidad.

¿Por qué fallan las otras opciones?
Opción A (betabloqueadores para ↓ consumo de O₂): medida coadyuvante útil, pero no reperfunde la arteria ocluida; no es el objetivo principal.
Opción C (control del dolor con opioides): alivia síntomas pero no restaura el flujo coronario; es medida de soporte, no reperfusión.
Opción D (amiodarona profiláctica): no es objetivo principal en IAMCEST agudo; la profilaxis antiarrítmica no sustituye la reperfusión.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen medidas útiles pero secundarias (morfina, betabloqueadores, amiodarona).
Pero la pregunta pide el objetivo principal, no medidas coadyuvantes.
En IAMCEST, "tiempo es músculo": reperfusión primero, todo lo demás es complementario.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer IAMCEST (dolor típico + elevación ST en derivaciones contiguas).
2. Activar reperfusión urgente (PCI primaria o fibrinólisis).
3. Administrar antitrombóticos (aspirina, P2Y12, anticoagulante).
4. Medidas coadyuvantes (analgesia, betabloqueadores según hemodinamia).

Perlas de examen
✅ Dolor típico + elevación ST en derivaciones contiguas = IAMCEST.
✅ Objetivo principal: reperfusión coronaria urgente (tiempo es músculo).
✅ PCI primaria preferida; fibrinólisis si PCI no disponible en ≤120 min.
✅ Aspirina, morfina, betabloqueadores: coadyuvantes, no objetivo principal.
✅ No esperar troponinas para iniciar reperfusión si el ECG es diagnóstico.
✅ Las residencias preguntan prioridades, no el protocolo completo de SCA.

Referencias
• ESC Guidelines for the Management of Acute Myocardial Infarction in Patients Presenting with ST-Segment Elevation.
• AHA/ACC Guideline for the Management of Patients With STEMI.
• Braunwald's Heart Disease.
• Tintinalli Emergency Medicine.
• UpToDate: Overview of the Acute Management of ST-Elevation Myocardial Infarction.`,
  },
  {
    id: "dr-q-87",
    examArea: "Medicina Interna / Infectología / Neurología",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "infectologia", "meningitis", "snc", "puncion_lumbar"],
    statement:
      "Paciente de 35 años consulta por fiebre, cefalea intensa y rigidez nucal de varios días de evolución. Tiene antecedente de infección por VIH sin tratamiento antirretroviral. Al examen físico se encuentra somnoliento y presenta ptosis palpebral derecha. ¿Cuál es la conducta inicial correcta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar ceftriaxona y vancomicina inmediatamente sin estudios adicionales.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar punción lumbar de forma inmediata antes de cualquier imagen.",
      },
      {
        id: "C",
        label: "C",
        text: "Solicitar tomografía cerebral antes de realizar la punción lumbar.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar dexametasona y dar de alta con seguimiento ambulatorio.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Síndrome meníngeo con alteración del estado de conciencia, inmunosupresión y focalización neurológica. Debe descartarse lesión ocupante de espacio o hipertensión intracraneal antes de la punción lumbar.",
    keyPoints: [
      "Cuando veas: síndrome meníngeo + alteración del estado de conciencia + déficit focal (ptosis) + inmunosupresión (VIH sin TARV).",
      "Debes pensar en: posible lesión ocupante de espacio → tomografía cerebral antes de punción lumbar.",
      "La PL con efecto de masa o hipertensión intracraneal puede provocar herniación cerebral.",
      "El tratamiento empírico con ATB no debe retrasarse, pero la PL requiere seguridad diagnóstica previa.",
      "Tema: Meningitis bacteriana.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de infectología y neurología porque evalúa cuándo realizar neuroimagen antes de la punción lumbar en el síndrome meníngeo.

La clave no es la fiebre ni la rigidez nucal.
La clave es:
La focalización neurológica y la inmunosupresión obligan a descartar lesión ocupante de espacio con TAC antes de la punción lumbar.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 35 años con fiebre, cefalea intensa y rigidez nucal de varios días.
• Antecedente de infección por VIH sin tratamiento antirretroviral.
• Somnolencia (alteración del estado de conciencia).
• Ptosis palpebral derecha (déficit neurológico focal).
• Síndrome meníngeo con signos de alerta para neuroimagen previa a PL.

Recordemos las indicaciones de TAC antes de punción lumbar:
• Alteración del estado mental o nivel de conciencia.
• Déficit neurológico focal (ptosis, hemiparesia, etc.).
• Papiledema o signos de hipertensión intracraneal.
• Convulsiones recientes.
• Inmunosupresión significativa (VIH sin TARV, trasplante, quimioterapia).

Por lo tanto:
La conducta inicial correcta es solicitar tomografía cerebral antes de realizar la punción lumbar.

¿Por qué la opción C es la respuesta correcta?
La ptosis + somnolencia + VIH sin TARV sugieren posible lesión ocupante de espacio (toxoplasmosis cerebral, linfoma primario del SNC).
La punción lumbar con efecto de masa o hipertensión intracraneal puede provocar herniación cerebral (transtentorial o tonsilar).
La TAC descarta lesión ocupante de espacio antes de PL segura.
El tratamiento empírico con antibióticos no debe retrasarse, pero la PL requiere seguridad diagnóstica.

¿Por qué fallan las otras opciones?
Opción A (ceftriaxona + vancomicina sin estudios): los ATB empíricos son correctos, pero la PL sin TAC es peligrosa con focalización neurológica.
Opción B (PL inmediata antes de imagen): contraindicada con déficit focal + inmunosupresión; riesgo de herniación cerebral.
Opción D (dexametasona + alta ambulatoria): meningitis con focalización requiere hospitalización, neuroimagen y tratamiento IV; no es manejo ambulatorio.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian meningitis con punción lumbar inmediata siempre.
Pero en presencia de signos de alerta (focalización, alteración mental, inmunosupresión), la neuroimagen precede a la PL.
El examen pregunta la conducta inicial segura, no el protocolo completo de meningitis.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer síndrome meníngeo con signos de alerta.
2. Solicitar TAC cerebral antes de PL si hay focalización, alteración mental o inmunosupresión.
3. Iniciar ATB empíricos sin retrasar (ceftriaxona + vancomicina ± ampicilina).
4. Realizar PL solo si la TAC descarta lesión ocupante de espacio.

Perlas de examen
✅ Meningitis + focalización + inmunosupresión = TAC antes de PL.
✅ PL con efecto de masa puede causar herniación cerebral.
✅ VIH sin TARV: riesgo de toxoplasmosis y linfoma primario del SNC.
✅ ATB empíricos no deben retrasarse, pero PL requiere seguridad.
✅ Indicaciones TAC: alteración mental, déficit focal, papiledema, convulsiones, inmunosupresión.
✅ Las residencias preguntan cuándo NO hacer PL inmediata.

Referencias
• IDSA Guidelines on the Management of Community-Acquired Bacterial Meningitis.
• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.
• Harrison's Principles of Internal Medicine.
• Tintinalli Emergency Medicine.
• UpToDate: Clinical Features and Diagnosis of Acute Bacterial Meningitis in Adults.`,
  },
  {
    id: "dr-q-88",
    examArea: "Medicina Interna / Cardiología / Nefrología",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "hipertension", "emergencia_hipertensiva", "urgencias"],
    statement:
      "Paciente de 60 años consulta por cefalea intensa y visión borrosa. Al examen físico presenta PA 230/130 mmHg. Laboratorios: creatinina 2.5 mg/dL (basal 1.0 mg/dL). Fondo de ojo con retinopatía hipertensiva avanzada. ¿Cuál es la meta de reducción de la presión arterial durante la primera hora de tratamiento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reducir la presión arterial hasta valores normales (<120/80 mmHg).",
      },
      {
        id: "B",
        label: "B",
        text: "Disminuir la presión arterial media aproximadamente un 20-25% durante la primera hora.",
      },
      {
        id: "C",
        label: "C",
        text: "Reducir la presión arterial sistólica por debajo de 140 mmHg en los primeros 30 minutos.",
      },
      {
        id: "D",
        label: "D",
        text: "Reducir la presión arterial diastólica por debajo de 90 mmHg en la primera hora.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Emergencia hipertensiva con lesión aguda de órgano diana (insuficiencia renal aguda e hipertensión severa). La reducción de la presión arterial debe ser controlada y progresiva para evitar hipoperfusión de órganos vitales.",
    keyPoints: [
      "Cuando veas: PA ≥180/120 mmHg + cefalea intensa + alteración visual + lesión aguda de órgano diana (LRA, retinopatía).",
      "Debes pensar en: emergencia hipertensiva → reducir PAM ~20-25% en la primera hora, no normalizar bruscamente.",
      "La reducción brusca de PA puede causar isquemia cerebral, miocárdica y renal por pérdida de autorregulación.",
      "Fármacos IV de elección: nicardipino, labetalol o nitroprusiato según el escenario clínico.",
      "Tema: Emergencia hipertensiva.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de medicina interna y urgencias porque evalúa la meta de reducción de presión arterial en la emergencia hipertensiva con daño agudo de órgano diana.

La clave no es el valor absoluto de la PA.
La clave es:
Reducir la presión arterial media aproximadamente un 20-25% en la primera hora, evitando normalización brusca que cause isquemia de órganos vitales.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 60 años con cefalea intensa y visión borrosa.
• PA 230/130 mmHg (hipertensión severa).
• Creatinina 2.5 mg/dL (basal 1.0): lesión renal aguda.
• Fondo de ojo con retinopatía hipertensiva avanzada.
• Emergencia hipertensiva con daño agudo de órgano diana (renal + ocular).

Recordemos la diferencia entre urgencia y emergencia hipertensiva:
• Urgencia hipertensiva: PA elevada sin daño agudo de órgano diano → reducción gradual con fármacos orales.
• Emergencia hipertensiva: PA elevada + daño agudo de órgano diano → reducción controlada con fármacos IV.
• La autorregulación vascular crónica se adapta a PA elevada; descenso brusco → hipoperfusión.

Por lo tanto:
La meta de la primera hora es reducir la PAM aproximadamente un 20-25%, no normalizar la PA de inmediato.

¿Por qué la opción B es la respuesta correcta?
En emergencia hipertensiva, la reducción de PA debe ser controlada y progresiva.
Meta inicial: disminuir la PAM ~20-25% durante la primera hora.
Descenso gradual en las horas siguientes hacia la meta ambulatoria individualizada.
Fármacos IV: nicardipino, labetalol o nitroprusiato según escenario (encefalopatía, disección, eclampsia, etc.).

¿Por qué fallan las otras opciones?
Opción A (PA <120/80 mmHg inmediato): descenso brusco → riesgo de isquemia cerebral, miocárdica y renal por pérdida de autorregulación vascular.
Opción C (PAS <140 mmHg en 30 min): demasiado rápido y agresivo para la primera hora; puede causar hipoperfusión de órganos vitales.
Opción D (PAD <90 mmHg en primera hora): meta incorrecta; se usa reducción porcentual de PAM, no valores absolutos de diastólica.

¿Cuál es la trampa del examen?
Muchos estudiantes piensan que PA muy alta = bajar a normal lo más rápido posible.
Pero en emergencia hipertensiva, la velocidad de descenso es tan importante como el objetivo.
Reducir demasiado rápido puede ser tan peligroso como no tratar.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer emergencia hipertensiva (PA severa + daño agudo de órgano diano).
2. Iniciar fármaco IV de acción rápida (nicardipino, labetalol o nitroprusiato).
3. Meta primera hora: ↓ PAM 20-25%.
4. Descenso gradual en horas siguientes hacia meta ambulatoria.

Perlas de examen
✅ Emergencia hipertensiva = PA severa + daño agudo de órgano diano.
✅ Meta primera hora: ↓ PAM 20-25%, no normalizar bruscamente.
✅ Descenso brusco → isquemia por pérdida de autorregulación vascular.
✅ Fármacos IV: nicardipino, labetalol, nitroprusiato según escenario.
✅ Urgencia hipertensiva (sin daño agudo): fármacos orales, no IV.
✅ Las residencias preguntan la meta de reducción, no el fármaco específico.

Referencias
• European Society of Hypertension Guidelines on Hypertensive Emergencies.
• AHA Scientific Statement on Management of Hypertensive Emergencies.
• Harrison's Principles of Internal Medicine.
• Rosen's Emergency Medicine.
• UpToDate: Evaluation and Treatment of Hypertensive Emergencies in Adults.`,
  },
  {
    id: "dr-q-89",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "eap", "insuficiencia_cardiaca", "urgencias"],
    statement:
      "Paciente de 68 años con antecedente de hipertensión arterial consulta por disnea severa de inicio súbito. Refiere ortopnea y sensación de ahogo progresiva. Al examen físico: PA 190/110 mmHg, FC 115 lpm, SatO₂ 84% al aire ambiente. Presenta estertores crepitantes bilaterales hasta campos medios y uso de musculatura accesoria. ¿Qué medida terapéutica impacta más rápidamente en la precarga y postcarga?",
    options: [
      { id: "A", label: "A", text: "Furosemida intravenosa." },
      { id: "B", label: "B", text: "Nitroglicerina intravenosa." },
      { id: "C", label: "C", text: "Dobutamina intravenosa." },
      { id: "D", label: "D", text: "Digoxina intravenosa." },
    ],
    correctOptionId: "B",
    explanation:
      "Edema agudo de pulmón hipertensivo. Los nitratos intravenosos producen una rápida reducción de la precarga y, a dosis mayores, también disminuyen la postcarga, mejorando rápidamente la congestión pulmonar.",
    keyPoints: [
      "Cuando veas: disnea súbita + ortopnea + estertores bilaterales + hipoxemia + hipertensión arterial (PA 190/110).",
      "Debes pensar en: edema agudo de pulmón cardiogénico hipertensivo → nitroglicerina IV para ↓ precarga y postcarga.",
      "Nitroglicerina actúa en minutos por venodilatación (↓ precarga) y vasodilatación arterial a dosis altas (↓ postcarga).",
      "Furosemida es importante pero su efecto hemodinámico tarda más; dobutamina es para bajo gasto, no EAP hipertensivo.",
      "Tema: Edema agudo de pulmón cardiogénico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología y urgencias porque evalúa la medida terapéutica con mayor impacto rápido en precarga y postcarga en el edema agudo de pulmón hipertensivo.

La clave no es el edema pulmonar aislado.
La clave es:
La hipertensión severa con congestión pulmonar obliga a reducir precarga y postcarga de forma inmediata con nitratos IV.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 68 años con antecedente de hipertensión arterial.
• Disnea severa de inicio súbito con ortopnea y sensación de ahogo progresiva.
• PA 190/110 mmHg, FC 115 lpm, SatO₂ 84% al aire ambiente.
• Estertores crepitantes bilaterales hasta campos medios y uso de musculatura accesoria.
• EAP cardiogénico hipertensivo: ↑ presiones de llenado VI → congestión pulmonar.

Recordemos la fisiopatología del EAP cardiogénico:
• Falla del VI → ↑ presión telediastólica → ↑ presión hidrostática pulmonar.
• Transudación de líquido a alvéolos → hipoxemia y disnea.
• En el EAP hipertensivo, la postcarga elevada agrava la falla ventricular.

Por lo tanto:
La medida con mayor impacto rápido en precarga y postcarga es la nitroglicerina intravenosa.

¿Por qué la opción B es la respuesta correcta?
La nitroglicerina IV produce venodilatación rápida (↓ precarga) en minutos.
A dosis mayores, también disminuye la postcarga por vasodilatación arterial.
Mejora la congestión pulmonar y la hemodinamia de forma más rápida que los diuréticos.
Es la medida de elección en EAP hipertensivo con PA elevada.

¿Por qué fallan las otras opciones?
Opción A (furosemida IV): elimina volumen y reduce precarga, pero su efecto hemodinámico tarda más que los nitratos; no es la respuesta más rápida.
Opción C (dobutamina IV): indicada en bajo gasto cardíaco y choque cardiogénico, no en EAP hipertensivo con PA 190/110 mmHg.
Opción D (digoxina IV): no tiene beneficio agudo en descompensación de EAP; su acción inotrópica es lenta e inadecuada en este escenario.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen furosemida porque la asocian con edema pulmonar y congestión.
Pero la furosemida elimina volumen de forma más lenta y no modifica tan rápido la hemodinamia.
La pregunta pide el impacto más rápido en precarga y postcarga, no la eliminación de volumen.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Oxigenación y posición (semisentado).
2. Nitroglicerina IV (↓ precarga y postcarga en minutos).
3. Furosemida IV según situación clínica (eliminación de volumen).
4. Identificar y tratar la causa subyacente (IAM, arritmia, crisis hipertensiva).

Perlas de examen
✅ Disnea súbita + ortopnea + estertores + hipoxemia + hipertensión = EAP cardiogénico hipertensivo.
✅ Nitroglicerina IV: ↓ precarga (venodilatación) + ↓ postcarga (dosis altas) en minutos.
✅ Furosemida elimina volumen pero efecto hemodinámico más lento.
✅ Dobutamina: bajo gasto/choque, no EAP hipertensivo con PA elevada.
✅ Digoxina: sin utilidad aguda en descompensación de EAP.
✅ Las residencias preguntan la medida de impacto más rápido, no el manejo completo.

Referencias
• ESC Guidelines for the Diagnosis and Treatment of Acute and Chronic Heart Failure.
• AHA Scientific Statement on Management of Heart Failure.
• Braunwald's Heart Disease.
• Tintinalli Emergency Medicine.
• UpToDate: Treatment of Acute Decompensated Heart Failure.`,
  },
  {
    id: "dr-q-90",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "cardiologia", "choque_cardiogenico", "iam", "urgencias"],
    statement:
      "Paciente de 64 años hospitalizado por infarto agudo de miocardio de cara anterior. Durante su evolución presenta PA 80/50 mmHg, frecuencia cardíaca 115 lpm, llenado capilar de 4 segundos, oliguria y estertores bilaterales en ambos campos pulmonares. ¿Cuál es la conducta más apropiada?",
    options: [
      { id: "A", label: "A", text: "Administrar bolo rápido de solución salina al 0.9%." },
      {
        id: "B",
        label: "B",
        text: "Iniciar nitroglicerina intravenosa para disminuir la congestión pulmonar.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar soporte inotrópico urgente y activar estrategia de reperfusión/revascularización.",
      },
      { id: "D", label: "D", text: "Administrar furosemida como única medida inicial." },
    ],
    correctOptionId: "C",
    explanation:
      "Choque cardiogénico secundario a infarto agudo de miocardio. La prioridad es restaurar la perfusión sistémica y corregir la causa subyacente mediante revascularización precoz.",
    keyPoints: [
      "Cuando veas: IAM reciente + hipotensión (PA 80/50) + oliguria + estertores bilaterales + llenado capilar prolongado.",
      "Debes pensar en: choque cardiogénico post-IAM → soporte inotrópico urgente + revascularización.",
      "Hipoperfusión sistémica y congestión pulmonar simultáneas definen el choque cardiogénico.",
      "Líquidos y nitratos empeoran el cuadro; furosemida sola no corrige el bajo gasto cardíaco.",
      "Tema: Choque cardiogénico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de cardiología y urgencias porque evalúa el manejo del choque cardiogénico secundario a infarto agudo de miocardio.

La clave no es la congestión pulmonar aislada.
La clave es:
Hipoperfusión sistémica y congestión pulmonar simultáneas obligan a soporte inotrópico urgente y revascularización, no a volumen ni nitratos.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 64 años hospitalizado por IAM de cara anterior.
• PA 80/50 mmHg, FC 115 lpm (hipotensión y taquicardia compensatoria).
• Llenado capilar de 4 segundos (hipoperfusión periférica).
• Oliguria (hipoperfusión renal).
• Estertores bilaterales en ambos campos pulmonares (congestión pulmonar).
• Choque cardiogénico: hipoperfusión sistémica + edema pulmonar simultáneos.

Recordemos la fisiopatología del choque cardiogénico post-IAM:
• Infarto extenso (cara anterior) → ↓ función del VI → ↓ gasto cardíaco.
• Hipoperfusión sistémica (oliguria, llenado capilar prolongado, hipotensión).
• Congestión pulmonar por ↑ presiones de llenado (estertores bilaterales).
• Revascularización precoz mejora supervivencia de forma significativa.

Por lo tanto:
La conducta más apropiada es soporte inotrópico urgente y activar estrategia de reperfusión/revascularización.

¿Por qué la opción C es la respuesta correcta?
El choque cardiogénico requiere restaurar la perfusión sistémica y corregir la causa subyacente.
Soporte inotrópico urgente (dobutamina, milrinona) mejora el gasto cardíaco y la perfusión.
Revascularización precoz (PCI urgente o cirugía de revascularización) tiene el mayor impacto en supervivencia.
La prioridad es tratar la causa (oclusión coronaria) mientras se estabiliza hemodinámicamente.

¿Por qué fallan las otras opciones?
Opción A (bolo rápido de SF 0.9%): empeora la congestión pulmonar con estertores bilaterales; el choque cardiogénico no se trata con volumen agresivo.
Opción B (nitroglicerina IV): agrava la hipotensión (PA 80/50) al reducir la precarga y postcarga; contraindicada en choque cardiogénico hipotenso.
Opción D (furosemida como única medida): no corrige el bajo gasto cardíaco; la diuresis sola no restaura perfusión ni trata la causa.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen furosemida por los estertores pulmonares o nitroglicerina por la congestión.
Pero en choque cardiogénico, la hipoperfusión es tan grave como la congestión.
Volumen y nitratos empeoran el cuadro; se necesita inotrópico + revascularización.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer choque cardiogénico (IAM + hipotensión + oliguria + congestión pulmonar).
2. Iniciar soporte inotrópico urgente (dobutamina, milrinona).
3. Activar revascularización urgente (PCI o cirugía).
4. Evitar volumen agresivo y nitratos en paciente hipotenso.

Perlas de examen
✅ Choque cardiogénico = IAM + hipotensión + oliguria + congestión pulmonar.
✅ Hipoperfusión + congestión simultáneas definen el cuadro.
✅ Prioridad: inotrópico urgente + revascularización precoz.
✅ Líquidos empeoran congestión; nitratos agravan hipotensión.
✅ Furosemida sola no corrige bajo gasto cardíaco.
✅ Las residencias preguntan la conducta más apropiada, no el manejo de la congestión aislada.

Referencias
• ESC Guidelines for the Management of Acute Myocardial Infarction in Patients Presenting with ST-Segment Elevation.
• AHA Scientific Statement on Cardiogenic Shock Complicating Acute Coronary Syndrome.
• Braunwald's Heart Disease.
• Tintinalli Emergency Medicine.
• UpToDate: Prognosis and Treatment of Cardiogenic Shock Complicating Acute Myocardial Infarction.`,
  },
  {
    id: "dr-q-91",
    examArea: "Ginecología y Obstetricia / Urgencias",
    topic: "Ginecología y Obstetricia",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "obstetricia", "embarazo_ectopico", "urgencias"],
    statement:
      "Mujer de 26 años, G2P1, consulta al servicio de urgencias por dolor abdominal bajo de aparición súbita irradiado a hombro derecho. Refiere amenorrea de 7 semanas. Al examen físico se encuentra pálida y diaforética. Signos vitales: TA 80/50 mmHg, FC 125 lpm, FR 22 rpm. Abdomen con resistencia muscular y signos de irritación peritoneal difusa. Tacto vaginal: dolor intenso a la movilización cervical y abombamiento del fondo de saco de Douglas. Prueba de embarazo positiva. Ecografía FAST a pie de cama: útero vacío y abundante líquido libre ecogénico intraabdominal. ¿Cuál es la conducta inicial más apropiada?",
    options: [
      { id: "A", label: "A", text: "Solicitar β-hCG cuantitativa seriada y observación hospitalaria." },
      { id: "B", label: "B", text: "Administrar metotrexato intramuscular." },
      { id: "C", label: "C", text: "Realizar laparoscopia diagnóstica programada." },
      {
        id: "D",
        label: "D",
        text: "Reanimación hemodinámica inmediata y laparotomía exploratoria urgente.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Embarazo ectópico roto con choque hemorrágico e irritación peritoneal generalizada. La prioridad es estabilización hemodinámica y control quirúrgico urgente de la hemorragia.",
    keyPoints: [
      "Cuando veas: amenorrea + embarazo positivo + útero vacío + líquido libre ecogénico + hipotensión (TA 80/50) + irritación peritoneal.",
      "Debes pensar en: embarazo ectópico roto con choque hemorrágico → reanimación inmediata y laparotomía exploratoria urgente.",
      "Dolor irradiado a hombro derecho = signo de Kehr por irritación diafragmática (hemoperitoneo).",
      "Metotrexato está contraindicado en pacientes inestables con ruptura y hemoperitoneo.",
      "Tema: Embarazo ectópico roto.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ginecología y obstetricia / urgencias porque evalúa el manejo del embarazo ectópico roto con choque hemorrágico.

La clave no es el embarazo positivo aislado.
La clave es:
Amenorrea + útero vacío + líquido libre ecogénico + inestabilidad hemodinámica obligan a reanimación inmediata y laparotomía urgente, no a metotrexato ni observación.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 26 años, G2P1, amenorrea de 7 semanas, prueba de embarazo positiva.
• Dolor abdominal bajo súbito irradiado a hombro derecho (signo de Kehr).
• Pálida, diaforética; TA 80/50 mmHg, FC 125 lpm (choque hemorrágico).
• Irritación peritoneal difusa y abombamiento del fondo de saco de Douglas.
• FAST: útero vacío + abundante líquido libre ecogénico intraabdominal (hemoperitoneo).
• Embarazo ectópico roto con sangrado activo hacia cavidad peritoneal.

Recordemos la fisiopatología del embarazo ectópico roto:
• Implantación fuera de cavidad uterina (trompa de Falopio en >90% de casos).
• Ruptura tubárica → hemorragia masiva intraabdominal.
• Irritación del diafragma por sangre → dolor referido en hombro (signo de Kehr).
• Hipovolemia progresiva → choque hemorrágico si no se interviene de inmediato.

Por lo tanto:
La conducta inicial más apropiada es reanimación hemodinámica inmediata y laparotomía exploratoria urgente.

¿Por qué la opción D es la respuesta correcta?
El paciente está en choque hemorrágico con hemoperitoneo confirmado.
La prioridad absoluta es estabilización hemodinámica (accesos venosos calibrosos, cristaloides, hemoderivados) y control quirúrgico urgente del sangrado.
La laparotomía permite acceso rápido y control definitivo en paciente inestable.
Cada minuto de demora incrementa el riesgo de muerte por hipovolemia.

¿Por qué fallan las otras opciones?
Opción A (β-hCG cuantitativa seriada y observación): retrasa el tratamiento definitivo en choque hemorrágico activo; la β-hCG seriada es para pacientes estables con diagnóstico incierto.
Opción B (metotrexato intramuscular): contraindicado con ruptura, hemoperitoneo e inestabilidad hemodinámica; reservado para ectópicos no rotos en pacientes estables.
Opción C (laparoscopia diagnóstica programada): demora inaceptable en choque; en inestabilidad, la laparotomía suele ser más rápida y segura para control del sangrado.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen metotrexato porque asocian embarazo ectópico con tratamiento médico.
Pero el metotrexato solo aplica en pacientes estables, sin ruptura y sin hemoperitoneo.
Ante choque hemorrágico, la cirugía urgente es la única opción correcta.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer embarazo ectópico roto (embarazo (+) + útero vacío + líquido libre + inestabilidad).
2. Reanimación hemodinámica inmediata (cristaloides, hemoderivados, acceso venoso).
3. Laparotomía exploratoria urgente para control del sangrado.
4. Salpingectomía o salpingostomía según hallazgos intraoperatorios y deseo reproductivo.

Perlas de examen
✅ Amenorrea + embarazo (+) + útero vacío + líquido libre + hipotensión = ectópico roto hasta demostrar lo contrario.
✅ Signo de Kehr: dolor en hombro por irritación diafragmática por hemoperitoneo.
✅ Metotrexato: solo en pacientes estables, sin ruptura, sin hemoperitoneo, β-hCG adecuada.
✅ En choque hemorrágico: laparotomía > laparoscopia programada por velocidad de acceso.
✅ No retrasar por β-hCG seriada en paciente hemodinámicamente inestable.
✅ Las residencias preguntan la conducta urgente, no el algoritmo de seguimiento ambulatorio.

Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Tubal Ectopic Pregnancy.
• UpToDate: Ectopic Pregnancy: Clinical Manifestations and Diagnosis.
• UpToDate: Ectopic Pregnancy: Choosing a treatment.`,
  },
  {
    id: "dr-q-92",
    examArea: "Ginecología y Obstetricia / Trastornos hipertensivos",
    topic: "Ginecología y Obstetricia",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "obstetricia", "preeclampsia", "hellp"],
    statement:
      "Primigestante de 17 años, con embarazo de 33 semanas confirmado por ecografía de primer trimestre, es llevada a urgencias por cefalea occipital intensa y fosfenos de 6 horas de evolución. Refiere además dolor epigástrico tipo ardor. Al ingreso presenta TA 165/115 mmHg (confirmada 15 minutos después), FC 90 lpm. Al examen físico se documenta hiperreflexia patelar (+++/++++), dolor a la palpación profunda en hipocondrio derecho. RCTG: feto reactivo sin desaceleraciones. Laboratorios: AST 180 U/L, ALT 210 U/L, plaquetas 75.000/μL, creatinina 1.1 mg/dL. ¿Cuál es el siguiente paso más apropiado en el manejo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo expectante con vigilancia materno-fetal hasta completar 37 semanas.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar sulfato de magnesio, controlar la hipertensión e iniciar finalización del embarazo una vez estabilizada la madre.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar corticoides para maduración pulmonar y dar egreso con seguimiento estrecho.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar proteinuria de 24 horas antes de establecer conducta definitiva.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Preeclampsia con criterios de gravedad asociada a síndrome HELLP. Estabilizar a la madre con sulfato de magnesio y antihipertensivos, y proceder a la finalización del embarazo independientemente del bienestar fetal.",
    keyPoints: [
      "Cuando veas: TA ≥160/110 + cefalea occipital + fosfenos + epigastralgia + plaquetas <100.000 + transaminasas elevadas en embarazo de 33 semanas.",
      "Debes pensar en: preeclampsia grave con síndrome HELLP → sulfato de magnesio + control de PA + finalización del embarazo tras estabilizar.",
      "Sulfato de magnesio previene eclampsia; la única cura definitiva de la preeclampsia es la finalización del embarazo.",
      "La proteinuria de 24 horas no es indispensable cuando existe daño orgánico materno evidente (HELLP).",
      "Tema: Preeclampsia grave con síndrome HELLP.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ginecología y obstetricia / trastornos hipertensivos porque evalúa el manejo de la preeclampsia grave con síndrome HELLP en el tercer trimestre.

La clave no es la presión arterial aislada.
La clave es:
Criterios de gravedad (cefalea, fosfenos, epigastralgia, hiperreflexia) + daño orgánico (plaquetopenia, transaminasas elevadas) obligan a estabilizar con sulfato de magnesio y finalizar el embarazo, no a conducta expectante.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Primigestante de 17 años, embarazo de 33 semanas confirmado por ecografía.
• Cefalea occipital intensa y fosfenos de 6 horas + dolor epigástrico tipo ardor.
• TA 165/115 mmHg confirmada; hiperreflexia patelar ++++, dolor en hipocondrio derecho.
• AST 180 U/L, ALT 210 U/L, plaquetas 75.000/μL (síndrome HELLP).
• RCTG: feto reactivo sin desaceleraciones (bienestar fetal aparentemente conservado).
• Preeclampsia grave con compromiso hepático y hematológico materno.

Recordemos la fisiopatología del síndrome HELLP:
• Variante grave de preeclampsia: Hemólisis, Elevated Liver enzymes, Low Platelets.
• Vasoespasmo y activación endotelial → microangiopatía y daño hepático.
• Riesgo de eclampsia, coagulación intravascular diseminada (CID), desprendimiento placentario y muerte materna.
• La única cura definitiva es la finalización del embarazo; el tratamiento es de soporte hasta lograrlo.

Por lo tanto:
El siguiente paso más apropiado es administrar sulfato de magnesio, controlar la hipertensión e iniciar finalización del embarazo una vez estabilizada la madre.

¿Por qué la opción B es la respuesta correcta?
El sulfato de magnesio es el fármaco de elección para prevenir eclampsia en preeclampsia grave.
Los antihipertensivos (labetalol, nifedipino, hidralazina) controlan la PA y reducen el riesgo de complicaciones cerebrovasculares.
Con HELLP a las 33 semanas y criterios de gravedad, la finalización del embarazo está indicada tras estabilización materna.
La condición materna tiene prioridad sobre el bienestar fetal aparentemente normal.

¿Por qué fallan las otras opciones?
Opción A (manejo expectante hasta 37 semanas): contraindicado con HELLP y criterios de gravedad; prolongar la gestación incrementa riesgo de eclampsia, CID y muerte materna.
Opción C (corticoides para maduración pulmonar y egreso): inaceptable ante preeclampsia grave con síntomas neurológicos y HELLP; el egreso expone a eclampsia y complicaciones letales.
Opción D (proteinuria de 24 horas antes de decidir): retrasa el tratamiento; la proteinuria no es indispensable para diagnosticar preeclampsia grave cuando hay daño orgánico evidente.

¿Cuál es la trampa del examen?
Muchos estudiantes prolongan la gestación por edad gestacional (33 semanas) o bienestar fetal normal en el RCTG.
Pero con HELLP y criterios de gravedad, la madre está en riesgo inmediato.
El bienestar fetal no contraindica la finalización cuando la vida materna está en peligro.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer preeclampsia grave con HELLP (TA ≥160/110 + síntomas + plaquetopenia + transaminasas ↑).
2. Iniciar sulfato de magnesio IV para profilaxis de eclampsia.
3. Controlar PA con antihipertensivos de acción rápida.
4. Finalizar el embarazo (parto o cesárea) una vez estabilizada la madre.

Perlas de examen
✅ HELLP: Hemólisis + transaminasas elevadas + plaquetas <100.000/μL.
✅ Sulfato de magnesio: profilaxis de eclampsia en preeclampsia grave, no antihipertensivo.
✅ La única cura de la preeclampsia es la finalización del embarazo.
✅ Proteinuria ≥300 mg/24 h no es obligatoria si hay criterios de gravedad con daño orgánico.
✅ Conducta expectante: solo en casos seleccionados sin criterios de gravedad, antes de 34 semanas.
✅ Las residencias preguntan prioridad materna vs fetal en preeclampsia grave.

Referencias
• ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia.
• Williams Obstetrics.
• UpToDate: HELLP Syndrome (Hemolysis, Elevated Liver Enzymes, and Low Platelets).
• UpToDate: Preeclampsia: Clinical Features and Diagnosis.`,
  },
  {
    id: "dr-q-93",
    examArea: "Ginecología y Obstetricia / Hemorragias obstétricas",
    topic: "Ginecología y Obstetricia",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "obstetricia", "dppni", "hemorragia"],
    statement:
      "Mujer de 35 años, G4P3, con embarazo de 36 semanas y antecedente de tabaquismo pesado, consulta por inicio súbito de dolor abdominal intenso y continuo, acompañado de sangrado vaginal rojo oscuro de moderada cantidad. Al examen físico: TA 150/90 mmHg, FC 110 lpm. Se evidencia útero hipertónico (\"leñoso\"), doloroso a la palpación y que no relaja entre contracciones. La altura uterina actual es de 38 cm, habiendo sido de 34 cm en el control previo. La cardiotocografía muestra frecuencia cardíaca fetal basal de 100 lpm, pérdida de la variabilidad y desaceleraciones tardías repetitivas. ¿Cuál es el diagnóstico más probable y la conducta inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Placenta previa sangrante; realizar ecografía transvaginal urgente antes de cualquier intervención.",
      },
      {
        id: "B",
        label: "B",
        text: "Desprendimiento prematuro de placenta normoinserta (DPPNI) grave; estabilización materna y cesárea urgente.",
      },
      {
        id: "C",
        label: "C",
        text: "Rotura uterina; inducción del trabajo de parto para finalizar rápidamente la gestación.",
      },
      {
        id: "D",
        label: "D",
        text: "Trabajo de parto pretérmino con sufrimiento fetal; administrar tocolíticos y corticoides antenatales.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Cuadro clásico de DPPNI grave: dolor abdominal intenso, sangrado oscuro, útero leñoso, aumento de altura uterina por hematoma retroplacentario y compromiso fetal agudo. Estabilización materna y cesárea urgente.",
    keyPoints: [
      "Cuando veas: dolor abdominal intenso continuo + sangrado vaginal rojo oscuro + útero hipertónico (leñoso) + aumento de altura uterina + sufrimiento fetal agudo.",
      "Debes pensar en: desprendimiento prematuro de placenta normoinserta (DPPNI) grave → estabilización materna y cesárea urgente.",
      "Placenta previa: sangrado rojo brillante, indoloro, útero blando (cuadro opuesto al DPPNI).",
      "El DPPNI es diagnóstico clínico; la ecografía no debe retrasar la intervención quirúrgica.",
      "Tema: Desprendimiento prematuro de placenta normoinserta (DPPNI).",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ginecología y obstetricia / hemorragias obstétricas porque evalúa el reconocimiento y manejo del DPPNI grave con sufrimiento fetal agudo.

La clave no es el sangrado vaginal aislado.
La clave es:
Dolor abdominal intenso + útero hipertónico (leñoso) + sangrado oscuro + sufrimiento fetal obligan a cesárea urgente sin esperar ecografía, no a descartar placenta previa.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 35 años, G4P3, embarazo de 36 semanas, antecedente de tabaquismo pesado.
• Inicio súbito de dolor abdominal intenso y continuo + sangrado vaginal rojo oscuro moderado.
• TA 150/90 mmHg, FC 110 lpm; útero hipertónico ("leñoso"), doloroso, no relaja entre contracciones.
• Altura uterina 38 cm (previamente 34 cm) = hematoma retroplacentario oculto.
• CTG: FCF basal 100 lpm, variabilidad perdida, desaceleraciones tardías repetitivas (sufrimiento fetal agudo).
• DPPNI grave con compromiso fetal inminente.

Recordemos la fisiopatología del DPPNI:
• Separación prematura de placenta normoinserta antes del nacimiento.
• Sangre se acumula retroplacentariamente → hematoma → ↑ presión intrauterina.
• Hipoxia fetal aguda por compresión placentaria y desplazamiento.
• El sangrado vaginal puede subestimar la hemorragia real (hemorragia oculta retroplacentaria).
• Tabaquismo, HTA, trauma y preeclampsia son factores de riesgo importantes.

Por lo tanto:
El diagnóstico más probable es DPPNI grave y la conducta inmediata es estabilización materna y cesárea urgente.

¿Por qué la opción B es la respuesta correcta?
El cuadro clínico es patognomónico de DPPNI: dolor intenso, útero leñoso, sangrado oscuro y sufrimiento fetal.
El DPPNI es diagnóstico clínico; no se debe retrasar la intervención por estudios imagenológicos.
La cesárea urgente es la vía de extracción fetal más rápida ante sufrimiento fetal agudo.
Simultáneamente se estabiliza a la madre (acceso venoso, laboratorios, hemoderivados si necesario).

¿Por qué fallan las otras opciones?
Opción A (placenta previa + ecografía transvaginal urgente): cuadro opuesto — placenta previa es sangrado indoloro, rojo brillante, útero blando; la eco no debe retrasar cesárea en DPPNI.
Opción C (rotura uterina + inducción del trabajo de parto): la inducción empeoraría el sufrimiento fetal agudo; además el cuadro no sugiere rotura uterina (sin antecedente de cicatriz uterina).
Opción D (trabajo de parto pretérmino + tocolíticos y corticoides): los tocolíticos están contraindicados en DPPNI con sufrimiento fetal; retrasar la extracción aumenta riesgo de muerte fetal.

¿Cuál es la trampa del examen?
Muchos estudiantes solicitan ecografía transvaginal ante todo sangrado del tercer trimestre.
Pero en DPPNI con cuadro clínico clásico y sufrimiento fetal, la ecografía no debe retrasar la cesárea.
Además confunden DPPNI (doloroso, leñoso) con placenta previa (indoloro, blando).

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer DPPNI (dolor + útero leñoso + sangrado oscuro ± sufrimiento fetal).
2. Estabilización materna (vía venosa, tipo y cruzada, laboratorios, coagulación).
3. Cesárea urgente si sufrimiento fetal o inestabilidad materna.
4. Corregir coagulopatía si presente (CID secundaria a DPPNI masivo).

Perlas de examen
✅ DPPNI: dolor intenso + útero leñoso + sangrado oscuro + sufrimiento fetal.
✅ Placenta previa: sangrado rojo brillante, indoloro, útero blando (cuadro opuesto).
✅ DPPNI = diagnóstico clínico; ecografía no debe retrasar intervención.
✅ Altura uterina mayor a la esperada sugiere hematoma retroplacentario oculto.
✅ Tabaquismo es factor de riesgo importante para DPPNI.
✅ Las residencias preguntan diferenciación clínica DPPNI vs placenta previa, no el estudio imagenológico.

Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Placental Abruption.
• UpToDate: Placental Abruption: Clinical Features and Diagnosis.
• UpToDate: Placental Abruption: Management and Outcome.`,
  },
  {
    id: "dr-q-94",
    examArea: "Ginecología y Obstetricia / Hemorragia posparto",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "obstetricia", "hpp", "atonia_uterina"],
    statement:
      "Mujer de 28 años, con diagnóstico de hipertensión gestacional en seguimiento prenatal, acaba de tener un parto vaginal de un recién nacido macrosómico de 4.200 g tras 14 horas de trabajo de parto y uso de oxitocina. Quince minutos después del alumbramiento presenta sangrado vaginal profuso. Al examen físico: TA 150/95 mmHg, FC 115 lpm. Se palpa un fondo uterino supraumbilical, flácido y de consistencia blanda. Se realiza masaje uterino bimanual y se optimiza la infusión de oxitocina sin lograr control del sangrado. ¿Cuál es el uterotónico de segunda línea más adecuado y seguro como siguiente paso?",
    options: [
      { id: "A", label: "A", text: "Metilergonovina." },
      { id: "B", label: "B", text: "Misoprostol." },
      { id: "C", label: "C", text: "Carboprost trometamina." },
      { id: "D", label: "D", text: "Ácido tranexámico." },
    ],
    correctOptionId: "B",
    explanation:
      "Hemorragia posparto por atonía uterina. Antecedente de hipertensión gestacional contraindica metilergonovina por riesgo de crisis hipertensiva. El misoprostol es una alternativa segura y eficaz como uterotónico de segunda línea.",
    keyPoints: [
      "Cuando veas: sangrado vaginal profuso postparto + fondo uterino supraumbilical flácido + fallo de masaje uterino y oxitocina + antecedente de hipertensión gestacional.",
      "Debes pensar en: hemorragia posparto por atonía uterina → misoprostol como uterotónico de segunda línea seguro (metilergonovina contraindicada).",
      "Secuencia HPP por atonía: masaje uterino → oxitocina → segundo uterotónico → medidas adicionales si persiste.",
      "Metilergonovina causa vasoconstricción intensa y está contraindicada en hipertensión gestacional/preeclampsia.",
      "Tema: Hemorragia posparto por atonía uterina.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ginecología y obstetricia / hemorragia posparto porque evalúa la elección del uterotónico de segunda línea en atonía uterina con comorbilidad hipertensiva.

La clave no es la atonía uterina aislada.
La clave es:
Hemorragia posparto por atonía con hipertensión gestacional obliga a elegir misoprostol como segundo uterotónico, no metilergonovina por riesgo de crisis hipertensiva.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 28 años con hipertensión gestacional en seguimiento prenatal.
• Parto vaginal de recién nacido macrosómico (4.200 g) tras 14 horas de trabajo de parto con oxitocina.
• Sangrado vaginal profuso 15 minutos después del alumbramiento.
• Fondo uterino supraumbilical, flácido y blando (atonía uterina).
• Masaje uterino bimanual + oxitocina optimizada sin control del sangrado.
• HPP por atonía uterina refractaria a medidas de primera línea.

Recordemos la fisiopatología y manejo de la HPP por atonía:
• Atonía uterina: miometrio no se contrae → vasos espiralados abiertos → sangrado profuso.
• Factores de riesgo presentes: trabajo de parto prolongado, oxitocina prolongada, macrosomía, multiparidad.
• Secuencia: masaje uterino → oxitocina IV → segundo uterotónico → balón intrauterino/cirugía.
• Metilergonovina: excelente uterotónico pero vasoconstrictor → contraindicada en HTA gestacional/preeclampsia.
• Misoprostol: prostaglandina E1, ↑ tono uterino sin riesgo significativo de crisis hipertensiva.

Por lo tanto:
El uterotónico de segunda línea más adecuado y seguro es misoprostol.

¿Por qué la opción B es la respuesta correcta?
Tras fallo de masaje uterino y oxitocina, se requiere un segundo uterotónico.
La metilergonovina, aunque muy eficaz, está contraindicada por el antecedente de hipertensión gestacional (riesgo de crisis hipertensiva por vasoconstricción).
El misoprostol (800-1000 mcg vía rectal o sublingual) es seguro y eficaz en pacientes hipertensas.
Es la alternativa de elección cuando la ergonovina está contraindicada.

¿Por qué fallan las otras opciones?
Opción A (metilergonovina): excelente uterotónico de segunda línea, pero contraindicada en hipertensión gestacional/preeclampsia por vasoconstricción periférica y riesgo de crisis hipertensiva.
Opción C (carboprost trometamina): prostaglandina F2α eficaz, pero también puede elevar la presión arterial y causar broncoespasmo; menos preferido que misoprostol en pacientes hipertensas.
Opción D (ácido tranexámico): antifibrinolítico complementario, no es uterotónico; no corrige la atonía y no sustituye al segundo uterotónico.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen metilergonovina automáticamente ante atonía uterina porque es el uterotónico clásico de segunda línea.
Pero siempre deben revisar comorbilidades: HTA gestacional, cardiopatía, enfermedad vascular.
En hipertensas, misoprostol es la alternativa segura.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer HPP por atonía (sangrado + útero blando + fondo uterino elevado).
2. Masaje uterino bimanual + oxitocina IV (primera línea).
3. Segundo uterotónico según comorbilidades: misoprostol si HTA, metilergonovina si normotensa.
4. Si persiste: balón intrauterino, ácido tranexámico, embolización o cirugía.

Perlas de examen
✅ Atonía uterina: sangrado profuso + útero blando + fondo uterino supraumbilical.
✅ Secuencia: masaje → oxitocina → segundo uterotónico → medidas invasivas.
✅ Metilergonovina: contraindicada en HTA gestacional, preeclampsia, cardiopatía.
✅ Misoprostol: alternativa segura en pacientes hipertensas.
✅ Ácido tranexámico: complemento antifibrinolítico, no sustituye uterotónico.
✅ Las residencias preguntan la contraindicación de ergonovina, no solo el algoritmo de HPP.

Referencias
• ACOG Practice Bulletin: Postpartum Hemorrhage.
• WHO Recommendations for Prevention and Treatment of Postpartum Hemorrhage.
• Williams Obstetrics.
• UpToDate: Postpartum Hemorrhage: Medical and Surgical Management.`,
  },
  {
    id: "dr-q-95",
    examArea: "Ginecología y Obstetricia / Urgencias ginecológicas",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "torsión_ovarica", "urgencias"],
    statement:
      "Mujer de 24 años, sin antecedentes de importancia, consulta por dolor abdominal bajo de aparición súbita, localizado predominantemente en fosa ilíaca derecha, de intensidad severa, tipo punzante, que la despertó durante la noche. Se acompaña de náuseas y dos episodios de vómito. Al examen físico presenta dolor a la palpación profunda en fosa ilíaca derecha con defensa voluntaria, sin signos claros de irritación peritoneal. Ecografía transvaginal: útero normal, ovario derecho aumentado de tamaño (7 x 5 cm) con múltiples folículos periféricos y quiste simple de 5 cm. Doppler: flujo arterial conservado, ausencia de flujo venoso en ovario derecho. Prueba de embarazo negativa. ¿Cuál es la conducta inicial de elección?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Observación hospitalaria y repetición de ecografía Doppler en 24 horas.",
      },
      {
        id: "B",
        label: "B",
        text: "Inicio de antibióticos de amplio espectro por sospecha de enfermedad pélvica inflamatoria.",
      },
      {
        id: "C",
        label: "C",
        text: "Laparoscopia urgente con detorsión ovárica y preservación del ovario si es viable.",
      },
      { id: "D", label: "D", text: "Ooforectomía derecha inmediata." },
    ],
    correctOptionId: "C",
    explanation:
      "Cuadro altamente sugestivo de torsión ovárica. La ausencia de flujo venoso es uno de los hallazgos más precoces. El tratamiento es laparoscopia urgente para preservar la función ovárica.",
    keyPoints: [
      "Cuando veas: dolor pélvico súbito intenso que despierta al paciente + náuseas/vómitos + ovario aumentado con folículos periféricos + ausencia de flujo venoso en Doppler.",
      "Debes pensar en: torsión ovárica → laparoscopia urgente con detorsión y preservación del ovario si es viable.",
      "Flujo arterial conservado en Doppler NO excluye torsión (obstrucción venosa ocurre primero).",
      "Ausencia de flujo venoso es uno de los hallazgos Doppler más precoces y sugestivos de torsión.",
      "Tema: Torsión ovárica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ginecología y obstetricia / urgencias ginecológicas porque evalúa el reconocimiento y manejo urgente de la torsión ovárica.

La clave no es el quiste ovárico aislado.
La clave es:
Dolor pélvico súbito intenso + ovario aumentado + ausencia de flujo venoso en Doppler obligan a laparoscopia urgente con detorsión, no a observación ni antibióticos.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 24 años, dolor abdominal bajo súbito en fosa ilíaca derecha, severo, punzante, que la despertó.
• Náuseas y dos episodios de vómito.
• Dolor a palpación profunda en FID con defensa voluntaria, sin irritación peritoneal clara.
• Ecografía: ovario derecho 7 × 5 cm con múltiples folículos periféricos y quiste simple de 5 cm.
• Doppler: flujo arterial conservado, ausencia de flujo venoso en ovario derecho.
• Prueba de embarazo negativa.
• Cuadro altamente sugestivo de torsión ovárica parcial o completa.

Recordemos la fisiopatología de la torsión ovárica:
• El ovario gira sobre su pedículo vascular (trompa + ligamento infundíbulo-pélvico).
• Obstrucción venosa ocurre primero → congestión → edema → isquemia progresiva.
• Obstrucción arterial es tardía; flujo arterial conservado NO excluye torsión.
• Ausencia de flujo venoso es hallazgo Doppler precoz y altamente sugestivo.
• Cada hora de demora incrementa el riesgo de necrosis ovárica y pérdida de función.

Por lo tanto:
La conducta inicial de elección es laparoscopia urgente con detorsión ovárica y preservación del ovario si es viable.

¿Por qué la opción C es la respuesta correcta?
La torsión ovárica es una urgencia quirúrgica que requiere intervención inmediata.
La laparoscopia permite detorsión del pedículo, evaluación de viabilidad ovárica y preservación si es posible.
La preservación ovárica es preferible incluso si el ovario parece necrótico (revascularización puede ocurrir).
Retrasar el tratamiento aumenta significativamente el riesgo de ooforectomía.

¿Por qué fallan las otras opciones?
Opción A (observación y repetir Doppler en 24 horas): demora inaceptable; la isquemia progresa y cada hora incrementa riesgo de pérdida ovárica irreversible.
Opción B (antibióticos por sospecha de EIP): cuadro no sugiere infección (sin fiebre, flujo patológico ni dolor a movilización cervical); el patrón ecográfico y Doppler apuntan a torsión.
Opción D (ooforectomía derecha inmediata): excesiva como conducta inicial; siempre intentar detorsión y preservación ovárica si el tejido es viable o dudoso.

¿Cuál es la trampa del examen?
Muchos estudiantes descartan torsión porque el Doppler muestra flujo arterial conservado.
Pero la obstrucción venosa precede a la arterial; ausencia de flujo venoso es hallazgo precoz.
Otra trampa: confundir con apendicitis o EIP por dolor en FID, ignorando los hallazgos ecográficos.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar torsión ante dolor pélvico súbito intenso + náuseas + ovario aumentado.
2. Confirmar con Doppler: ausencia de flujo venoso es hallazgo clave (arterial conservado no excluye).
3. Laparoscopia urgente (<8 horas idealmente) con detorsión ovárica.
4. Preservar el ovario siempre que sea posible; ooforectomía solo si necrosis franca.

Perlas de examen
✅ Torsión ovárica: dolor súbito intenso + náuseas/vómitos + ovario aumentado.
✅ Ausencia de flujo venoso en Doppler = hallazgo precoz y sugestivo.
✅ Flujo arterial conservado NO excluye torsión (obstrucción venosa ocurre primero).
✅ Laparoscopia urgente con detorsión; preservar ovario siempre que sea posible.
✅ No observar 24 h: cada hora incrementa riesgo de necrosis y ooforectomía.
✅ Las residencias preguntan el hallazgo Doppler precoz, no la apariencia del ovario en ecografía.

Referencias
• ACOG Committee Opinion: Adnexal Torsion.
• Williams Gynecology.
• UpToDate: Ovarian Torsion: Clinical Features and Diagnosis.
• UpToDate: Ovarian Torsion: Management and Outcome.`,
  },
  {
    id: "dr-q-96",
    examArea: "Ginecología y Obstetricia / Infectología ginecológica",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "eip", "infecciones"],
    statement:
      "Mujer de 25 años, nulípara, sin métodos anticonceptivos, consulta por dolor pélvico progresivo bilateral de 4 días de evolución, acompañado de fiebre de 38.5°C, malestar general y flujo vaginal amarillento de mal olor. Refiere nueva pareja sexual hace 3 semanas. Al examen físico: abdomen inferior doloroso a la palpación. A la especuloscopia se observa cérvix eritematoso y friable con secreción mucopurulenta. Al tacto vaginal presenta intenso dolor a la movilización cervical y anexos dolorosos bilateralmente. Ecografía pélvica: útero y ovarios normales, sin masas anexiales ni líquido libre. Prueba de embarazo negativa. ¿Cuál es el manejo empírico inicial más apropiado?",
    options: [
      { id: "A", label: "A", text: "Azitromicina oral en dosis única y control ambulatorio." },
      {
        id: "B",
        label: "B",
        text: "Ceftriaxona intramuscular más doxiciclina y metronidazol.",
      },
      { id: "C", label: "C", text: "Legrado uterino diagnóstico." },
      { id: "D", label: "D", text: "Histerectomía subtotal urgente." },
    ],
    correctOptionId: "B",
    explanation:
      "Cuadro compatible con enfermedad inflamatoria pélvica (EIP). Tratamiento empírico inmediato cubriendo Neisseria gonorrhoeae, Chlamydia trachomatis y flora anaerobia.",
    keyPoints: [
      "Cuando veas: dolor pélvico bilateral + fiebre + flujo mucopurulento + dolor a movilización cervical + anexos dolorosos.",
      "Debes pensar en: enfermedad inflamatoria pélvica (EIP) → tratamiento empírico inmediato de amplio espectro.",
      "La ecografía puede ser normal en EIP temprana; el diagnóstico es clínico, no ecográfico.",
      "Esquema estándar: ceftriaxona (gonococo) + doxiciclina (clamidia) + metronidazol (anaerobios).",
      "Tema: Enfermedad inflamatoria pélvica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ginecología e infectología porque evalúa el reconocimiento clínico de la EIP y la elección del esquema antibiótico empírico cuando la ecografía es normal.

La clave no es la ecografía.
La clave es:
Dolor a la movilización cervical + fiebre + flujo mucopurulento = EIP clínica que requiere ceftriaxona + doxiciclina + metronidazol de inmediato, aunque la ecografía no muestre alteraciones.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 25 años, nulípara, nueva pareja sexual hace 3 semanas.
• Dolor pélvico bilateral progresivo de 4 días + fiebre de 38.5°C + malestar general.
• Flujo vaginal amarillento de mal olor; cérvix eritematoso y friable con secreción mucopurulenta.
• Dolor intenso a la movilización cervical y anexos dolorosos bilateralmente.
• Ecografía pélvica normal (útero y ovarios sin masas ni líquido libre); embarazo negativo.

Recordemos la EIP:
• Infección ascendente del tracto genital superior (útero, trompas, ovarios, peritoneo pélvico).
• Diagnóstico clínico mínimo: dolor pélvico + dolor a movilización cervical ± fiebre ± flujo mucopurulento.
• La ecografía es útil para detectar absceso tuboovárico, pero una eco normal NO excluye EIP temprana.
• Retrasar el tratamiento aumenta el riesgo de infertilidad tubárica, embarazo ectópico y dolor pélvico crónico.

Por lo tanto:
El manejo empírico inicial más apropiado es ceftriaxona intramuscular más doxiciclina y metronidazol.

¿Por qué la opción B es la respuesta correcta?
La EIP requiere cobertura empírica simultánea de los tres patógenos principales:
• Ceftriaxona IM: Neisseria gonorrhoeae (resistencia creciente a otros esquemas).
• Doxiciclina oral: Chlamydia trachomatis (causa frecuente y silenciosa).
• Metronidazol: flora anaerobia (Bacteroides, otros anaerobios pélvicos).
Este es el esquema recomendado por CDC y ACOG para EIP ambulatoria sin absceso tuboovárico.

¿Por qué fallan las otras opciones?
Opción A (azitromicina dosis única): insuficiente para EIP; no cubre adecuadamente gonococo ni anaerobios; esquema para cervicitis, no infección del tracto superior.
Opción C (legrado uterino): no hay indicación; el cuadro es infección ascendente, no retención de productos ni patología endometrial que requiera legrado.
Opción D (histerectomía subtotal urgente): excesiva y contraindicada como manejo inicial; la EIP se trata con antibióticos de amplio espectro, reservando cirugía para complicaciones (absceso roto, no respuesta).

¿Cuál es la trampa del examen?
Muchos estudiantes descartan EIP porque la ecografía es normal.
Pero la ecografía normal es compatible con EIP temprana o leve.
El dato decisivo es la tríada clínica: dolor pélvico + movilización cervical dolorosa + fiebre/flujo mucopurulento.
Otra trampa: elegir azitromicina dosis única (esquema de cervicitis/EPI leve) en lugar del triple esquema para EIP.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer criterios clínicos de EIP (dolor pélvico + movilización cervical dolorosa ± fiebre ± flujo).
2. Confirmar que no hay absceso tuboovárico complicado (eco útil pero no excluyente).
3. Iniciar tratamiento empírico inmediato sin esperar cultivos.
4. Cubrir gonococo + clamidia + anaerobios con ceftriaxona + doxiciclina + metronidazol.

Perlas de examen
✅ EIP es diagnóstico clínico; ecografía normal no excluye la enfermedad.
✅ Movilización cervical dolorosa (signo de Chandelier) es hallazgo clave.
✅ Esquema triple: ceftriaxona + doxiciclina + metronidazol.
✅ Azitromicina dosis única es para cervicitis, no para EIP.
✅ Retrasar ATB aumenta riesgo de secuelas tubáricas e infertilidad.
✅ Las residencias preguntan el esquema empírico correcto, no solo el diagnóstico.

Referencias
• CDC Sexually Transmitted Infections Treatment Guidelines.
• ACOG Practice Bulletin: Pelvic Inflammatory Disease.
• Williams Gynecology.
• UpToDate: Pelvic Inflammatory Disease: Clinical Manifestations and Diagnosis.`,
  },
  {
    id: "dr-q-97",
    examArea: "Ginecología y Obstetricia / Hemorragias del tercer trimestre",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "obstetricia", "placenta_previa", "hemorragia"],
    statement:
      "Mujer de 33 años, G3P2, con embarazo de 32 semanas, consulta a urgencias porque despertó en medio de un charco de sangre. Refiere sangrado vaginal rojo rutilante, de moderada cantidad, completamente indoloro. Niega contracciones, pérdida de líquido amniótico o antecedente traumático. Al examen físico: TA 110/70 mmHg, FC 88 lpm. Abdomen blando, no doloroso, útero con tono normal. Registro cardiotocográfico reactivo. Ante la sospecha clínica, ¿cuál es el paso diagnóstico inicial más apropiado?",
    options: [
      { id: "A", label: "A", text: "Tacto vaginal para determinar dilatación cervical." },
      { id: "B", label: "B", text: "Amnioscopia diagnóstica." },
      {
        id: "C",
        label: "C",
        text: "Ecografía obstétrica con evaluación de la localización placentaria.",
      },
      { id: "D", label: "D", text: "Inducción inmediata del trabajo de parto." },
    ],
    correctOptionId: "C",
    explanation:
      "Cuadro clínico altamente sugestivo de placenta previa. El estudio inicial de elección es la ecografía para determinar la relación de la placenta con el orificio cervical interno.",
    keyPoints: [
      "Cuando veas: sangrado vaginal rojo brillante, indoloro, en tercer trimestre + útero blando con tono normal.",
      "Debes pensar en: placenta previa → ecografía obstétrica para localización placentaria, nunca tacto vaginal.",
      "El tacto vaginal está contraindicado ante sospecha de placenta previa (puede desencadenar hemorragia masiva).",
      "DPPNI se diferencia por sangrado oscuro, dolor y útero leñoso/hipertono.",
      "Tema: Hemorragias del tercer trimestre · placenta previa.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de obstetricia porque evalúa el reconocimiento de placenta previa y la conducta diagnóstica inicial ante sangrado indoloro en el tercer trimestre.

La clave no es el tacto vaginal para evaluar dilatación.
La clave es:
Sangrado rojo brillante indoloro en tercer trimestre con útero blando = sospecha de placenta previa → ecografía obstétrica, nunca tacto vaginal.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 33 años, G3P2, embarazo de 32 semanas.
• Despertó en un charco de sangre: sangrado vaginal rojo rutilante, moderado, completamente indoloro.
• Sin contracciones, sin RPM, sin trauma; TA 110/70 mmHg, FC 88 lpm.
• Abdomen blando, no doloroso; útero con tono normal.
• Registro cardiotocográfico reactivo (bienestar fetal conservado).

Recordemos las hemorragias del tercer trimestre:
• Placenta previa: placenta en segmento inferior → distensión uterina → separación parcial → sangrado rojo brillante, indoloro, útero blando.
• DPPNI: desprendimiento de placenta normoinserta → sangrado oscuro, dolor intenso, útero leñoso/hipertono.
• El tacto vaginal está contraindicado ante sospecha de placenta previa porque puede desencadenar hemorragia masiva al contactar la placenta sobre el orificio cervical interno.
• La ecografía obstétrica transabdominal o transvaginal (modificada) es el estudio diagnóstico inicial de elección para determinar la relación placenta–OCI.

Por lo tanto:
El paso diagnóstico inicial más apropiado es ecografía obstétrica con evaluación de la localización placentaria.

¿Por qué la opción C es la respuesta correcta?
Ante sospecha clínica de placenta previa, la ecografía obstétrica confirma o descarta la localización placentaria.
Es el estudio de elección antes de cualquier manipulación cervical o vaginal.
Permite clasificar la previa (total, parcial, marginal) y planificar el manejo según edad gestacional y estabilidad materna.
La paciente está hemodinámicamente estable con CTG reactivo, lo que permite realizar ecografía de forma segura.

¿Por qué fallan las otras opciones?
Opción A (tacto vaginal): peligroso y contraindicado; puede provocar sangrado masivo al contactar placenta sobre OCI; nunca realizar tacto vaginal ante sospecha de previa.
Opción B (amnioscopia): no es el estudio inicial para localización placentaria; no responde la pregunta diagnóstica del caso.
Opción D (inducción inmediata del trabajo de parto): prematura como conducta inicial; primero confirmar diagnóstico con ecografía y evaluar estabilidad; la previa no siempre requiere parto urgente si la paciente está estable.

¿Cuál es la trampa del examen?
Muchos estudiantes realizan tacto vaginal en todo sangrado obstétrico para evaluar dilatación cervical.
Pero en placenta previa, el tacto vaginal es peligroso y puede ser fatal.
Otra trampa: confundir con DPPNI; recuerde que la previa es indolora con útero blando, mientras el DPPNI es doloroso con útero leñoso.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer el cuadro clínico (sangrado indoloro brillante + útero blando en tercer trimestre).
2. Sospechar placenta previa y evitar tacto vaginal.
3. Realizar ecografía obstétrica para confirmar localización placentaria.
4. Estabilizar hemodinámicamente y planificar manejo según edad gestacional y gravedad.

Perlas de examen
✅ Placenta previa = sangrado rojo brillante + indoloro + útero blando.
✅ DPPNI = sangrado oscuro + dolor + útero leñoso (cuadro opuesto).
✅ Tacto vaginal contraindicado ante sospecha de placenta previa.
✅ Ecografía obstétrica es el estudio diagnóstico inicial de elección.
✅ CTG reactivo no excluye previa; evalúa bienestar fetal, no localización placentaria.
✅ Las residencias preguntan la conducta diagnóstica segura, no la intervención más agresiva.

Referencias
• Williams Obstetrics.
• ACOG Practice Bulletin: Placenta Previa and Placenta Accreta Spectrum.
• UpToDate: Placenta Previa: Epidemiology, Clinical Features, Diagnosis, and Prognosis.
• FIGO Guidelines on Obstetric Hemorrhage.`,
  },
  {
    id: "dr-q-98",
    examArea: "Ginecología y Obstetricia / Sangrado uterino anormal",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ginecologia", "sua", "cancer_endometrio"],
    statement:
      "Mujer de 48 años, con IMC de 36 kg/m² y diagnóstico de diabetes mellitus tipo 2, consulta por sangrado menstrual abundante y prolongado desde hace 6 meses. Refiere uso de 6 a 8 toallas higiénicas al día y ciclos cada vez más irregulares. Nunca ha estado embarazada. Al examen físico: PA 130/80 mmHg, examen pélvico sin alteraciones anatómicas evidentes, útero de tamaño normal. Ecografía transvaginal: útero de morfología normal, ovarios sin alteraciones y línea endometrial heterogénea de 17 mm. Prueba de embarazo negativa. ¿Cuál es el paso diagnóstico más importante a seguir?",
    options: [
      { id: "A", label: "A", text: "Solicitar niveles séricos de FSH y estradiol." },
      {
        id: "B",
        label: "B",
        text: "Iniciar tratamiento hormonal empírico y reevaluar en 6 meses.",
      },
      { id: "C", label: "C", text: "Realizar biopsia endometrial." },
      { id: "D", label: "D", text: "Solicitar resonancia magnética pélvica." },
    ],
    correctOptionId: "C",
    explanation:
      "Sangrado uterino anormal con múltiples factores de riesgo para hiperplasia y cáncer de endometrio (obesidad, diabetes, nuliparidad, edad >45 años) y endometrio engrosado heterogéneo. La biopsia endometrial es obligatoria.",
    keyPoints: [
      "Cuando veas: mujer ≥45 años con sangrado uterino anormal + obesidad + diabetes + endometrio engrosado (>4 mm postmenopáusica o >8-10 mm premenopáusica).",
      "Debes pensar en: descartar cáncer de endometrio → biopsia endometrial antes de cualquier tratamiento hormonal.",
      "Obesidad → aromatización periférica → exposición estrogénica sin oposición progesterónica.",
      "No iniciar tratamiento hormonal empírico sin excluir malignidad en pacientes de alto riesgo.",
      "Tema: Sangrado uterino anormal y cáncer de endometrio.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de ginecología porque evalúa la estratificación del riesgo de cáncer endometrial en sangrado uterino anormal y la indicación de biopsia endometrial.

La clave no es iniciar tratamiento hormonal empírico.
La clave es:
Mujer de alto riesgo (obesidad, diabetes, nuliparidad, edad >45 años) con endometrio engrosado heterogéneo de 17 mm = biopsia endometrial obligatoria antes de cualquier manejo.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 48 años, IMC 36 kg/m², diabetes mellitus tipo 2, nulípara.
• Sangrado menstrual abundante y prolongado desde hace 6 meses (6-8 toallas/día).
• Ciclos cada vez más irregulares; examen pélvico sin alteraciones; útero de tamaño normal.
• Ecografía transvaginal: endometrio heterogéneo de 17 mm; ovarios normales; embarazo negativo.

Recordemos la fisiopatología del cáncer endometrial:
• Obesidad → aromatización periférica de andrógenos en estrógenos → exposición estrogénica crónica sin oposición progesterónica.
• Diabetes, nuliparidad y edad avanzada son factores de riesgo adicionales.
• La secuencia clásica: hiperplasia endometrial → hiperplasia con atipia → adenocarcinoma endometrial.
• En mujeres premenopáusicas con factores de riesgo, endometrio >8-10 mm o engrosamiento asimétrico requiere evaluación histológica.
• FSH/estradiol no descartan malignidad ni explican un endometrio de 17 mm en paciente de alto riesgo.

Por lo tanto:
El paso diagnóstico más importante a seguir es realizar biopsia endometrial.

¿Por qué la opción C es la respuesta correcta?
La biopsia endometrial (aspiración endometrial o histeroscopia con biopsia dirigida) es el estándar de oro para descartar hiperplasia y carcinoma endometrial.
La paciente concentra múltiples factores de riesgo (obesidad, DM2, nuliparidad, edad >45 años) y tiene endometrio engrosado de 17 mm.
Sin biopsia, no se puede iniciar tratamiento hormonal empírico de forma segura.
ACOG recomienda evaluación endometrial en toda mujer ≥45 años con SUA y en mujeres <45 con factores de riesgo.

¿Por qué fallan las otras opciones?
Opción A (FSH y estradiol): no descartan malignidad; pueden orientar perimenopausia pero no explican endometrio de 17 mm ni sustituyen la biopsia en alto riesgo.
Opción B (tratamiento hormonal empírico + reevaluación en 6 meses): peligroso; puede enmascarar carcinoma endometrial y retrasar diagnóstico; nunca iniciar hormonas sin excluir malignidad.
Opción D (RM pélvica): no sustituye biopsia endometrial como paso diagnóstico fundamental; la RM puede complementar estadiaje pero no confirma histología.

¿Cuál es la trampa del examen?
Muchos estudiantes atribuyen el sangrado a perimenopausia fisiológica y eligen tratamiento hormonal empírico.
Pero en paciente obesa, diabética y nulípara con endometrio de 17 mm, la prioridad es descartar cáncer endometrial.
Otra trampa: solicitar FSH/estradiol pensando en menopausia, cuando lo que se necesita es histología endometrial.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar factores de riesgo de cáncer endometrial (obesidad, diabetes, nuliparidad, edad).
2. Evaluar grosor y morfología endometrial con ecografía transvaginal.
3. Realizar biopsia endometrial si hay factores de riesgo y/o endometrio engrosado.
4. Solo después de descartar malignidad, planificar tratamiento médico o quirúrgico del SUA.

Perlas de examen
✅ SUA + obesidad + endometrio engrosado = biopsia endometrial obligatoria.
✅ Obesidad → aromatización periférica → estrógenos sin oposición → hiperplasia → carcinoma.
✅ No iniciar tratamiento hormonal empírico sin excluir malignidad.
✅ FSH/estradiol no sustituyen biopsia en pacientes de alto riesgo.
✅ Endometrio >8-10 mm en premenopáusicas con factores de riesgo requiere evaluación histológica.
✅ Las residencias preguntan el paso diagnóstico prioritario, no el tratamiento sintomático.

Referencias
• ACOG Committee Opinion: Abnormal Uterine Bleeding Associated With Ovulatory Dysfunction.
• NCCN Clinical Practice Guidelines: Uterine Neoplasms.
• Williams Gynecology.
• UpToDate: Endometrial Cancer: Epidemiology, Risk Factors, and Prevention.
• FIGO Classification of Endometrial Carcinoma.`,
  },
  {
    id: "dr-q-99",
    examArea: "Ginecología y Obstetricia / Infecciones obstétricas",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "obstetricia", "corioamnionitis", "infecciones"],
    statement:
      "Mujer de 21 años, primigestante, con embarazo de 38 semanas, consulta por pérdida de líquido claro y abundante por vagina desde hace 24 horas. Refiere disminución de movimientos fetales. Al examen físico: TA 110/70 mmHg, FC materna 115 lpm, temperatura 38.6°C. Altura uterina 34 cm. Útero doloroso a la palpación profunda e irritable. Tacto vaginal: cérvix borrado 80%, dilatación 3 cm, salida de líquido amniótico de mal olor. Registro cardiotocográfico: frecuencia cardíaca fetal basal de 175 lpm, variabilidad mínima, sin desaceleraciones. ¿Cuál es el diagnóstico más probable y la conducta terapéutica indicada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ruptura prematura de membranas sin infección; manejo expectante.",
      },
      {
        id: "B",
        label: "B",
        text: "Corioamnionitis clínica; iniciar antibióticos intravenosos de amplio espectro y finalizar el embarazo.",
      },
      {
        id: "C",
        label: "C",
        text: "Desprendimiento prematuro de placenta normoinserta; cesárea urgente.",
      },
      { id: "D", label: "D", text: "Preeclampsia grave; iniciar sulfato de magnesio." },
    ],
    correctOptionId: "B",
    explanation:
      "Criterios clínicos de corioamnionitis: fiebre materna, taquicardia materna y fetal, útero doloroso e irritable y líquido amniótico fétido. Antibioticoterapia IV inmediata y finalización del embarazo.",
    keyPoints: [
      "Cuando veas: RPM prolongada + fiebre materna + taquicardia materna/fetal + líquido amniótico fétido + útero doloroso e irritable.",
      "Debes pensar en: corioamnionitis clínica → antibióticos IV de amplio espectro + finalizar el embarazo.",
      "La taquicardia fetal (FCF >160 lpm) es hallazgo frecuente de infección intraamniótica.",
      "Corioamnionitis no es indicación absoluta de cesárea; la vía de parto depende de condiciones obstétricas.",
      "Tema: Corioamnionitis clínica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de obstetricia e infectología porque evalúa el reconocimiento de corioamnionitis clínica y la conducta terapéutica ante infección intraamniótica establecida.

La clave no es el manejo expectante de la ruptura prematura de membranas.
La clave es:
RPM + fiebre + taquicardia materna/fetal + líquido amniótico fétido + útero doloroso = corioamnionitis clínica → ATB IV + finalizar el embarazo.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Primigestante de 21 años, embarazo de 38 semanas.
• RPM de líquido claro y abundante hace 24 horas + disminución de movimientos fetales.
• Fiebre materna de 38.6°C, FC materna 115 lpm (taquicardia).
• Útero doloroso a la palpación profunda e irritable; líquido amniótico de mal olor al tacto vaginal.
• Cérvix borrado 80%, dilatación 3 cm.
• CTG: FCF basal 175 lpm, variabilidad mínima, sin desaceleraciones (taquicardia fetal por infección).

Recordemos la corioamnionitis clínica:
• Infección de membranas, líquido amniótico, placenta y feto, generalmente por ascenso bacteriano tras RPM prolongada.
• Criterios clínicos: fiebre materna (≥38°C) + taquicardia materna (>100 lpm) + taquicardia fetal (>160 lpm) + dolor uterino + líquido amniótico purulento/fétido.
• El tratamiento requiere dos acciones simultáneas: antibioticoterapia IV de amplio espectro + finalización del embarazo (la fuente infecciosa persiste mientras continúe la gestación).
• Esquema clásico: ampicilina + gentamicina (± clindamicina si cesárea).
• Corioamnionitis no es indicación absoluta de cesárea; el parto vaginal es preferible si las condiciones lo permiten.

Por lo tanto:
El diagnóstico más probable es corioamnionitis clínica y la conducta es iniciar antibióticos intravenosos de amplio espectro y finalizar el embarazo.

¿Por qué la opción B es la respuesta correcta?
La paciente cumple criterios clínicos de corioamnionitis establecida (no solo RPM sin infección).
El manejo expectante está contraindicado: la infección progresará y aumenta riesgo de sepsis materna, bacteriemia neonatal y asfixia fetal.
Los antibióticos IV (ampicilina + gentamicina) deben iniciarse de inmediato.
Finalizar el embarazo elimina la fuente infecciosa; con 3 cm de dilatación y cérvix borrado, el parto vaginal es viable.

¿Por qué fallan las otras opciones?
Opción A (RPM sin infección + manejo expectante): incorrecto; hay fiebre, taquicardia materna y fetal, líquido fétido y dolor uterino = infección establecida, no RPM aislada.
Opción C (DPPNI + cesárea urgente): cuadro incompatible; DPPNI presenta sangrado oscuro, dolor intenso y útero leñoso/hipertono, no fiebre con líquido fétido.
Opción D (preeclampsia grave + sulfato de magnesio): no hay hipertensión ni proteinuria; el cuadro es infeccioso, no hipertensivo.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen manejo expectante ante RPM prolongada.
Pero la presencia de fiebre, taquicardia y líquido fétido transforma el escenario de RPM a corioamnionitis clínica, donde el expectante está contraindicado.
Otra trampa: indicar cesárea automática; la corioamnionitis no es indicación absoluta de cesárea si el parto vaginal es factible.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer criterios clínicos de corioamnionitis (fiebre + taquicardia + dolor uterino + líquido fétido).
2. Iniciar antibioticoterapia IV de amplio espectro de inmediato.
3. Finalizar el embarazo (parto vaginal preferible si condiciones favorables).
4. Monitorizar madre y recién nacido por riesgo de sepsis.

Perlas de examen
✅ RPM + fiebre + taquicardia materna/fetal + líquido fétido = corioamnionitis clínica.
✅ Taquicardia fetal (>160 lpm) es hallazgo frecuente de infección intraamniótica.
✅ Tratamiento: ATB IV (ampicilina + gentamicina) + finalizar embarazo.
✅ Corioamnionitis no es indicación absoluta de cesárea.
✅ Manejo expectante contraindicado cuando hay infección establecida.
✅ Las residencias preguntan diagnóstico + conducta, no solo el diagnóstico.

Referencias
• ACOG Committee Opinion: Intraamniotic Infection.
• Williams Obstetrics.
• UpToDate: Clinical Chorioamnionitis.
• CDC Guidelines for Prevention of Perinatal Group B Streptococcal Disease.
• FIGO Guidelines on Intrapartum Fetal Monitoring.`,
  },
  {
    id: "dr-q-100",
    examArea: "Ginecología y Obstetricia / Trastornos hipertensivos",
    topic: "Ginecología y Obstetricia",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "obstetricia", "eclampsia", "puerperio", "sulfato_magnesio"],
    statement:
      "Mujer de 19 años, nulípara, cursando la primera semana de puerperio tras un parto institucional sin complicaciones aparentes, es llevada a urgencias por presentar convulsiones en domicilio. Su madre describe un episodio de movimientos tónico-clónicos generalizados de aproximadamente 2 minutos de duración, asociado a relajación de esfínteres y cianosis peribucal. La paciente llega somnolienta y confusa. Signos vitales: TA 160/110 mmHg, FC 105 lpm, SatO₂ 96% con oxígeno suplementario. Durante la valoración médica presenta una nueva convulsión tónico-clónica generalizada. ¿Cuál es la primera intervención farmacológica indicada para controlar y prevenir nuevas crisis?",
    options: [
      { id: "A", label: "A", text: "Diazepam intravenoso." },
      { id: "B", label: "B", text: "Fenitoína intravenosa." },
      { id: "C", label: "C", text: "Sulfato de magnesio intravenoso." },
      { id: "D", label: "D", text: "Levetiracetam intravenoso." },
    ],
    correctOptionId: "C",
    explanation:
      "Eclampsia posparto. El tratamiento de elección para controlar y prevenir nuevas convulsiones es el sulfato de magnesio, superior a fenitoína y benzodiacepinas en este contexto.",
    keyPoints: [
      "Cuando veas: convulsiones tónico-clónicas + hipertensión severa + puerperio reciente (incluso días después del parto).",
      "Debes pensar en: eclampsia posparto → sulfato de magnesio IV como primera intervención farmacológica.",
      "La eclampsia puede debutar en embarazo, parto o puerperio, incluso con parto aparentemente sin complicaciones.",
      "Sulfato de magnesio es superior a diazepam, fenitoína y levetiracetam en eclampsia obstétrica.",
      "Tema: Eclampsia posparto.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de obstetricia porque evalúa una trampa frecuente de residencia: ante convulsiones en una puérpera, no pensar primero en epilepsia sino en eclampsia y en el anticonvulsivante específico de la enfermedad hipertensiva del embarazo.

La clave no es tratar como crisis epiléptica con benzodiacepinas o fenitoína.
La clave es:
Convulsiones + hipertensión severa + puerperio reciente = eclampsia posparto → sulfato de magnesio IV como primera intervención farmacológica.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 19 años, nulípara, primera semana de puerperio tras parto institucional sin complicaciones aparentes.
• Convulsiones tónico-clónicas generalizadas en domicilio (2 minutos) con relajación de esfínteres y cianosis peribucal.
• Llega somnolienta y confusa; durante valoración presenta nueva convulsión tónico-clónica.
• TA 160/110 mmHg, FC 105 lpm, SatO₂ 96% con oxígeno suplementario.
• Cuadro compatible con eclampsia posparto, no con crisis epiléptica primaria.

Recordemos la eclampsia:
• Convulsión tónico-clónica generalizada en contexto de preeclampsia/eclampsia (HTA + proteinuria ± otros signos de gravedad).
• Puede ocurrir en embarazo, parto o puerperio (hasta 48-72 h o más después del parto).
• Un parto sin complicaciones aparentes NO excluye eclampsia posparto.
• El sulfato de magnesio IV es el tratamiento de elección para controlar y prevenir nuevas convulsiones en eclampsia.
• Estudios clínicos (Magpie trial) demuestran superioridad del sulfato de magnesio sobre fenitoína y diazepam en eclampsia.

Por lo tanto:
La primera intervención farmacológica indicada es sulfato de magnesio intravenoso.

¿Por qué la opción C es la respuesta correcta?
El sulfato de magnesio IV controla las convulsiones activas y previene recurrencias en eclampsia.
Es superior a diazepam (menor recurrencia, menor mortalidad materna) y a fenitoína (inferior en prevención de nuevas crisis).
Se administra con esquema de carga (4-6 g IV) seguido de infusión de mantenimiento (1-2 g/h).
Además del magnesio, se requiere: vía aérea, oxigenación, control de hipertensión severa y monitorización materno-fetal.

¿Por qué fallan las otras opciones?
Opción A (diazepam IV): útil en estado epiléptico generalizado, pero no es el anticonvulsivante de elección en eclampsia; inferior al sulfato de magnesio en prevención de recurrencias y mortalidad materna.
Opción B (fenitoína IV): tratamiento clásico de epilepsia, no de eclampsia; estudios demuestran inferioridad al sulfato de magnesio en este contexto obstétrico.
Opción D (levetiracetam IV): antiepiléptico moderno sin evidencia de superioridad sobre sulfato de magnesio en eclampsia; no sustituye al tratamiento específico de la enfermedad hipertensiva del embarazo.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen diazepam o fenitoína ante cualquier convulsión, aplicando el algoritmo de estado epiléptico generalizado.
Pero en puérpera con hipertensión severa, la eclampsia es el diagnóstico hasta demostrar lo contrario.
Otra trampa: asumir que un parto sin complicaciones excluye eclampsia; puede debutar días después en el puerperio.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer eclampsia posparto (convulsión + HTA + contexto obstétrico reciente).
2. Administrar sulfato de magnesio IV de inmediato (carga + mantenimiento).
3. Asegurar vía aérea, oxigenación y posición lateral de seguridad.
4. Controlar hipertensión severa con antihipertensivos IV seguros (labetalol, hidralazina).

Perlas de examen
✅ Convulsión + puerperio + HTA severa = eclampsia hasta demostrar lo contrario.
✅ Eclampsia puede aparecer días después del parto, incluso con parto sin complicaciones.
✅ Sulfato de magnesio IV es el tratamiento de elección, no diazepam ni fenitoína.
✅ Magpie trial: magnesio superior a fenitoína en eclampsia.
✅ Además del anticonvulsivante: vía aérea, oxigenación y control de HTA severa.
✅ Las residencias preguntan el fármaco específico de eclampsia, no el algoritmo general de convulsiones.

Referencias
• ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia.
• Williams Obstetrics.
• The Magpie Trial Collaborative Group: Magnesium Sulphate for Eclampsia.
• UpToDate: Eclampsia.
• WHO Recommendations for Prevention and Treatment of Pre-eclampsia and Eclampsia.`,
  },
  {
    id: "dr-q-101",
    examArea: "Psiquiatría / Medicina Interna",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "delirium", "medicina_interna"],
    statement:
      "Hombre de 74 años, con antecedentes de hipertensión arterial y diabetes mellitus, cursa su segundo día postoperatorio tras un reemplazo total de cadera. Durante la noche, el personal de enfermería reporta comportamiento agresivo, intento de retiro de la sonda vesical y alucinaciones visuales (\"veía insectos en las sábanas\"). En la evaluación de la mañana se encuentra somnoliento, orientado únicamente en persona, con marcada dificultad para mantener la atención durante la entrevista. Signos vitales: TA 145/90 mmHg, FC 88 lpm, T 37.2°C, SpO₂ 94%. Creatinina 1.4 mg/dL. ¿Cuál es la conducta inicial más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar resonancia magnética cerebral urgente para descartar accidente cerebrovascular.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar haloperidol intravenoso de forma rutinaria y permanente.",
      },
      {
        id: "C",
        label: "C",
        text: "Diagnosticar demencia de inicio reciente e iniciar inhibidores de acetilcolinesterasa.",
      },
      {
        id: "D",
        label: "D",
        text: "Identificar y corregir causas precipitantes, implementar medidas no farmacológicas para delirium y reservar antipsicóticos solo si existe riesgo para el paciente o el personal.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Cuadro típico de delirium postoperatorio: inicio agudo, curso fluctuante, alteración de la atención, desorientación y alteraciones perceptivas. El manejo inicial debe centrarse en identificar causas reversibles y aplicar medidas no farmacológicas.",
    keyPoints: [
      "Cuando veas: anciano postoperatorio con inicio agudo de agitación, alucinaciones visuales, desorientación fluctuante y alteración marcada de la atención.",
      "Debes pensar en: delirium postoperatorio → identificar causas precipitantes, medidas no farmacológicas y reservar antipsicóticos solo si hay riesgo.",
      "La alteración de la atención es el hallazgo cardinal del delirium; sin ella no se cumple el criterio diagnóstico.",
      "Los antipsicóticos no son rutina en delirium; se reservan para agitación severa o riesgo para el paciente o el personal.",
      "Tema: Delirium postoperatorio.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de psiquiatría de enlace porque evalúa una trampa frecuente de residencia: ante un anciano postoperatorio agitado con alucinaciones, no pensar primero en demencia, esquizofrenia o urgencia neurológica, sino en delirium agudo reversible.

La clave no es iniciar antipsicóticos de forma rutinaria o solicitar neuroimagen de inmediato.
La clave es:
Anciano postoperatorio + inicio agudo + fluctuación + alteración de atención = delirium → buscar causas reversibles y aplicar medidas no farmacológicas antes de medicar.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 74 años, segundo día postoperatorio tras reemplazo total de cadera (cirugía mayor).
• Comportamiento agresivo nocturno, intento de retirar sonda vesical y alucinaciones visuales ("insectos en las sábanas").
• Somnoliento por la mañana, orientado únicamente en persona, marcada dificultad para mantener la atención.
• Curso fluctuante típico de delirium: agitación nocturna alternada con somnolencia diurna.
• SpO₂ 94%: posible hipoxemia como factor precipitante; creatinina 1.4 mg/dL sin focalidad neurológica.

Recordemos el delirium:
• Trastorno neurocognitivo agudo con inicio súbito, curso fluctuante y alteración de la atención como hallazgo cardinal.
• Factores precipitantes en postoperatorio: hipoxemia, infección, dolor, retención urinaria, fármacos, privación del sueño, deshidratación.
• El manejo inicial se centra en identificar y corregir causas reversibles e implementar medidas no farmacológicas (reorientación, presencia familiar, normalizar ciclo sueño-vigilia, corregir déficits sensoriales).
• Los antipsicóticos (haloperidol) se reservan para agitación severa con riesgo para el paciente o el personal, no como tratamiento rutinario y permanente.
• No confundir con demencia (inicio insidioso, curso progresivo) ni con trastorno psiquiátrico primario (sin contexto médico-quirúrgico agudo).

Por lo tanto:
La conducta inicial más apropiada es identificar y corregir causas precipitantes, implementar medidas no farmacológicas para delirium y reservar antipsicóticos solo si existe riesgo.

¿Por qué la opción D es la respuesta correcta?
El cuadro es típico de delirium postoperatorio hiperactivo con componente mixto (agitación nocturna + somnolencia diurna).
La prioridad es el enfoque multicomponente: buscar y tratar causas reversibles (hipoxemia, retención urinaria, infección, dolor, fármacos) e implementar intervenciones no farmacológicas.
Los antipsicóticos no son primera línea; se reservan para agitación severa o riesgo inminente para el paciente o el personal.
Este enfoque está alineado con las guías AGS y DSM-5-TR para manejo del delirium.

¿Por qué fallan las otras opciones?
Opción A (RM cerebral urgente): no es la prioridad ante un cuadro típico de delirium sin focalidad neurológica; primero corregir causas precipitantes y estabilizar al paciente.
Opción B (haloperidol IV rutinario y permanente): los antipsicóticos no son tratamiento de base; uso rutinario y prolongado aumenta riesgo de efectos adversos sin abordar la causa subyacente.
Opción C (demencia + inhibidores de acetilcolinesterasa): la demencia tiene inicio insidioso y curso progresivo; los inhibidores de acetilcolinesterasa no tratan el delirium agudo postoperatorio.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen haloperidol ante cualquier paciente agitado con alucinaciones, aplicando el algoritmo de psicosis aguda.
Pero en anciano postoperatorio con alteración de atención y curso fluctuante, el delirium es el diagnóstico hasta demostrar lo contrario.
Otra trampa: solicitar neuroimagen urgente o iniciar tratamiento para demencia sin buscar primero causas reversibles del delirium.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer delirium (inicio agudo + fluctuación + alteración de atención + contexto médico-quirúrgico).
2. Buscar y corregir causas precipitantes (hipoxemia, infección, retención urinaria, fármacos, dolor).
3. Implementar medidas no farmacológicas (reorientación, ciclo sueño-vigilia, presencia familiar).
4. Reservar antipsicóticos solo si hay agitación severa o riesgo para paciente/personal.

Perlas de examen
✅ Alteración de la atención es el hallazgo cardinal del delirium.
✅ Inicio agudo + fluctuación + contexto postoperatorio = delirium hasta demostrar lo contrario.
✅ Primero buscar causas reversibles y medidas no farmacológicas, no antipsicóticos rutinarios.
✅ Haloperidol se reserva para agitación severa con riesgo, no como tratamiento permanente de base.
✅ No confundir delirium agudo con demencia ni iniciar inhibidores de acetilcolinesterasa.
✅ SpO₂ 94% en postoperatorio: siempre considerar hipoxemia como factor precipitante.

Referencias
• DSM-5-TR: Delirium.
• American Geriatrics Society: Postoperative Delirium in Older Adults.
• Harrison's Principles of Internal Medicine.
• UpToDate: Delirium in adults.
• NICE Guidelines: Delirium.`,
  },
  {
    id: "dr-q-102",
    examArea: "Psiquiatría / Urgencias",
    topic: "Psiquiatría",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "snm", "neuroleptico", "urgencias"],
    statement:
      "Mujer de 28 años con diagnóstico conocido de esquizofrenia, es llevada a urgencias por cuadro de 48 horas de evolución caracterizado por estupor, mutismo y rechazo de la vía oral. Al examen físico presenta FC 110 lpm, diaforesis profusa y temperatura de 39.4°C. Se evidencia rigidez muscular generalizada en \"tubo de plomo\". Laboratorios: leucocitos 15.000/mm³ y CPK 12.500 U/L. Recibe actualmente haloperidol 10 mg/día. ¿Cuál es el diagnóstico más probable y la conducta inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Catatonia maligna; administrar benzodiacepinas y continuar haloperidol.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome serotoninérgico; suspender haloperidol e iniciar ciproeptadina.",
      },
      {
        id: "C",
        label: "C",
        text: "Meningoencefalitis bacteriana; iniciar antibióticos de amplio espectro.",
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome neuroléptico maligno; suspender inmediatamente el antipsicótico e iniciar tratamiento de soporte intensivo.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Hipertermia, rigidez en tubo de plomo, alteración del estado mental, disautonomía y CPK muy elevada en paciente con haloperidol = síndrome neuroléptico maligno. Suspender el antipsicótico e iniciar soporte intensivo.",
    keyPoints: [
      "Cuando veas: paciente con antipsicótico + fiebre alta + rigidez en tubo de plomo + CPK muy elevada + alteración del estado mental.",
      "Debes pensar en: síndrome neuroléptico maligno (SNM) → suspender inmediatamente el antipsicótico e iniciar soporte intensivo.",
      "La rigidez en tubo de plomo orienta a SNM; el clonus inducible orienta a síndrome serotoninérgico.",
      "La suspensión inmediata del antipsicótico causal es obligatoria; continuarlo empeora el cuadro y aumenta la mortalidad.",
      "Tema: Síndrome neuroléptico maligno.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de urgencias psiquiátricas porque evalúa el reconocimiento del síndrome neuroléptico maligno (SNM), una emergencia médica potencialmente letal que exige diferenciarlo de catatonia, síndrome serotoninérgico e infección del SNC.

La clave no es continuar el antipsicótico ni confundir con síndrome serotoninérgico o meningoencefalitis.
La clave es:
Antipsicótico + hipertermia + rigidez en tubo de plomo + CPK muy elevada + disautonomía = SNM → suspender el neuroléptico de inmediato e iniciar soporte intensivo.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 28 años con esquizofrenia en tratamiento con haloperidol 10 mg/día.
• Cuadro de 48 horas con estupor, mutismo y rechazo de la vía oral.
• FC 110 lpm, diaforesis profusa, temperatura 39.4°C (disautonomía).
• Rigidez muscular generalizada en "tubo de plomo" (lead-pipe rigidity).
• Leucocitosis 15.000/mm³ y CPK 12.500 U/L (daño muscular masivo).
• Cuadro compatible con SNM inducido por haloperidol.

Recordemos el SNM:
• Emergencia iatrogénica asociada a antipsicóticos (típicos > atípicos, pero ambos pueden causarlo).
• Tetrad: hipertermia + rigidez muscular extrema + alteración del estado mental + disautonomía (taquicardia, labilidad TA, diaforesis).
• CPK muy elevada por rabdomiólisis; riesgo de insuficiencia renal aguda y muerte.
• Tratamiento: suspensión inmediata del antipsicótico causal + soporte intensivo (hidratación, enfriamiento, monitorización).
• Diferencial clave: rigidez en tubo de plomo (SNM) vs clonus inducible + hiperreflexia (síndrome serotoninérgico).

Por lo tanto:
El diagnóstico más probable es síndrome neuroléptico maligno y la conducta inmediata es suspender el antipsicótico e iniciar tratamiento de soporte intensivo.

¿Por qué la opción D es la respuesta correcta?
Todos los elementos del SNM están presentes: antipsicótico reciente, hipertermia, rigidez extrema, alteración del estado mental, disautonomía y CPK masivamente elevada.
La suspensión inmediata del haloperidol es el paso terapéutico más importante y no puede postergarse.
El soporte intensivo incluye hidratación IV agresiva (prevención de rabdomiólisis), enfriamiento activo, monitorización hemodinámica y corrección de complicaciones.
El dantrolene o bromocriptina pueden considerarse como tratamiento adyuvante en casos severos.

¿Por qué fallan las otras opciones?
Opción A (catatonia maligna + benzodiacepinas + continuar haloperidol): la catatonia puede simular SNM, pero continuar haloperidol empeoraría el cuadro; el antipsicótico debe suspenderse de inmediato.
Opción B (síndrome serotoninérgico + ciproheptadina): se asocia a ISRS, tramadol u otros serotoninérgicos; cursa con clonus inducible e hiperreflexia, no con rigidez en tubo de plomo.
Opción C (meningoencefalitis bacteriana + antibióticos): puede causar fiebre y alteración mental, pero no explica rigidez extrema + CPK 12.500 U/L en paciente con haloperidol.

¿Cuál es la trampa del examen?
Muchos estudiantes confunden SNM con síndrome serotoninérgico porque ambos cursan con fiebre y alteración del estado mental.
La clave diferencial es la rigidez en tubo de plomo + CPK muy elevada (SNM) vs clonus inducible + hiperreflexia (serotoninérgico).
Otra trampa: proponer continuar el antipsicótico en catatonia sin reconocer que el haloperidol es la causa del cuadro.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer SNM (antipsicótico + fiebre + rigidez + CPK elevada + disautonomía).
2. Suspender inmediatamente el antipsicótico causal.
3. Iniciar soporte intensivo (hidratación, enfriamiento, monitorización).
4. Considerar tratamiento adyuvante (dantrolene, bromocriptina) en casos severos.

Perlas de examen
✅ Antipsicótico + fiebre + rigidez en tubo de plomo + CPK elevada = SNM hasta demostrar lo contrario.
✅ Suspensión inmediata del antipsicótico es el paso terapéutico más importante.
✅ Rigidez en tubo de plomo = SNM; clonus inducible = síndrome serotoninérgico.
✅ CPK muy elevada indica rabdomiólisis; hidratación IV agresiva es esencial.
✅ No confundir con meningoencefalitis ni catatonia sin suspender el neuroléptico.
✅ El SNM es potencialmente letal; requiere UCI y monitorización estrecha.

Referencias
• UpToDate: Neuroleptic Malignant Syndrome.
• Harrison's Principles of Internal Medicine.
• Kaplan & Sadock's Comprehensive Textbook of Psychiatry.
• DSM-5-TR: Medication-Induced Movement Disorders.
• Stahl's Essential Psychopharmacology.`,
  },
  {
    id: "dr-q-103",
    examArea: "Psiquiatría / Trastorno bipolar",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "bipolar", "mania", "valproato"],
    statement:
      "Hombre de 32 años con antecedente conocido de Trastorno Bipolar tipo I. Ingresa por cuadro de 5 días de evolución caracterizado por logorrea, fuga de ideas, hiperactividad, compras compulsivas, gastos excesivos y marcada disminución de la necesidad de sueño (duerme aproximadamente 2 horas por noche y refiere sentirse lleno de energía). Durante la entrevista manifiesta ser \"el enviado para salvar la economía del país\". Al examen físico se encuentra hemodinámicamente estable y sin signos de falla orgánica aguda. Laboratorios: creatinina 2.2 mg/dL. ¿Cuál es el estabilizador del ánimo de elección en este paciente?",
    options: [
      { id: "A", label: "A", text: "Litio." },
      { id: "B", label: "B", text: "Valproato." },
      { id: "C", label: "C", text: "Carbamazepina." },
      { id: "D", label: "D", text: "Lamotrigina." },
    ],
    correctOptionId: "B",
    explanation:
      "El paciente cursa con un episodio maníaco agudo clásico (logorrea, hiperactividad, delirio de grandiosidad) en el contexto de un Trastorno Bipolar tipo I. Sin embargo, presenta una creatinina de 2.2 mg/dL (Insuficiencia Renal). Dado que el litio se excreta de forma casi exclusiva por el riñón, administrarlo en este momento causará una intoxicación grave. El Ácido Valproico (valproato), de metabolismo hepático, es el estabilizador del ánimo de primera línea más seguro y efectivo en este escenario clínico.\n\n¿Por qué se descartan las otras opciones?\n• Opción A (Litio): Aunque es el gold standard histórico para el trastorno bipolar, el 95% se depura por el riñón. En falla renal aguda o crónica (creatinina 2.2), su vida media se prolonga exponencialmente, llevando a neurotoxicidad letal, arritmias, coma y mayor daño tubular renal (nefritis intersticial). Está absolutamente contraindicado aquí.\n• Opción C (Carbamazepina): Es una alternativa válida y de metabolismo hepático, pero el valproato tiene mayor peso de evidencia (Nivel 1) en las guías CANMAT para el tratamiento de primera línea de la manía aguda comparado con la carbamazepina.\n• Opción D (Lamotrigina): Es un excelente neuromodulador, pero su principal indicación es la profilaxis y el tratamiento de las fases depresivas del trastorno bipolar. Es ineficaz y de titulación demasiado lenta para controlar un episodio maníaco agudo.",
    keyPoints: [
      "Cuando veas: episodio maníaco agudo con síntomas psicóticos de grandiosidad + creatinina elevada (insuficiencia renal).",
      "Debes pensar en: trastorno bipolar tipo I en manía → valproato como estabilizador de elección (litio contraindicado por IRC).",
      "El litio se elimina casi exclusivamente por vía renal; con creatinina 2.2 mg/dL aumenta el riesgo de toxicidad grave.",
      "La lamotrigina es excelente para prevención de fases depresivas, pero no es tratamiento de elección para manía aguda.",
      "Tema: Manía bipolar con insuficiencia renal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de psicofarmacología porque evalúa una trampa frecuente de residencia: ante manía aguda en trastorno bipolar, no elegir automáticamente litio sin evaluar primero la función del órgano que lo excreta (el riñón).

La clave no es recetar litio por acto reflejo al leer "bipolar".
La clave es:
Manía aguda + Creatinina alta = Prohibido el Litio = Usar Valproato (Ácido Valproico).

¿Qué está ocurriendo realmente en la farmacocinética?
El catión Litio (Li+) es una molécula diminuta que no se une a proteínas plasmáticas, no se metaboliza en el hígado y se filtra libremente por el glomérulo, reabsorbiéndose en el túbulo proximal competitivo con el sodio. Si el paciente tiene insuficiencia renal (creatinina 2.2 mg/dL) o depleción de volumen (deshidratación, uso de tiazidas o AINEs), el riñón reabsorberá masivamente el litio intentando retener sodio, disparando la litemia a rangos tóxicos (>1.5 mEq/L).
Por tanto, el Ácido Valproico, que sufre glucuronidación y oxidación en el hígado, evade completamente la dependencia renal y logra estabilizar el estado de ánimo al aumentar los niveles de GABA y bloquear canales de sodio voltaje dependientes.

¿Cuál es la trampa del examen?
El distractor principal es el Litio (Opción A). El estudiante ve un paciente hiperactivo, que no duerme, gasta dinero y se cree el mesías, y rápidamente marca "Litio" sin haber leído la última línea del caso clínico: "creatinina 2.2 mg/dL". ¡Boom! Caíste en la trampa. Siempre lee los laboratorios en psiquiatría. 
La segunda trampa es la Lamotrigina (Opción D); recuerda que la lamotrigina sirve para levantar la depresión bipolar, no para bajar la manía (carece de propiedades antimaníacas agudas).

Perlas de examen y práctica clínica:
✅ Estabilizadores del ánimo de 1ra línea en Manía Aguda (CANMAT): Litio, Valproato, o Antipsicóticos Atípicos (Quetiapina, Aripiprazol, Asenapina, Risperidona, Paliperidona, Cariprazina).
✅ Contraindicaciones formales del Litio: Insuficiencia Renal, Enfermedad del Nodo Sinusal, Insuficiencia Cardíaca severa, Hipotiroidismo no controlado (relativa), Embarazo (Anomalía de Ebstein en primer trimestre).
✅ Interacciones fatales del Litio: Tiazidas, AINEs, IECAs/ARA-II (todos disminuyen su excreción y causan toxicidad).
✅ Rango terapéutico del litio: 0.6 - 1.2 mEq/L.
✅ Valproato: Precaución con hepatotoxicidad, pancreatitis y teratogenicidad (defectos del tubo neural).

Referencias
• CANMAT and ISBD Bipolar Disorder Guidelines.
• APA Practice Guideline for the Treatment of Patients With Bipolar Disorder.
• Stahl's Essential Psychopharmacology.`,
  },
  {
    id: "dr-q-104",
    examArea: "Psiquiatría / Psicofarmacología",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "serotoninergico", "isrs", "tramadol"],
    statement:
      "Mujer de 45 años, con antecedentes de obesidad y dolor crónico, consulta por tristeza profunda, anhedonia, sentimientos de culpa e ideación de muerte de 3 semanas de evolución. Ha perdido 5 kg de peso. Recibe tramadol 50 mg cada 8 horas por lumbalgia crónica. Se inicia sertralina 50 mg/día. Veinticuatro horas después es llevada a urgencias por presentar temblor, inquietud motora intensa, diaforesis, diarrea y clonus inducible en miembros inferiores. ¿Cuál es el mecanismo fisiopatológico más probable del cuadro actual?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Bloqueo masivo de receptores dopaminérgicos D2 en sistema nervioso central.",
      },
      {
        id: "B",
        label: "B",
        text: "Hiperestimulación serotoninérgica central y periférica por exceso de serotonina sináptica.",
      },
      {
        id: "C",
        label: "C",
        text: "Disminución aguda de la actividad gabaérgica cortical.",
      },
      {
        id: "D",
        label: "D",
        text: "Hiperactividad colinérgica secundaria a inhibición de la acetilcolinesterasa.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Síndrome serotoninérgico precipitado por sertralina + tramadol (ambos con actividad serotoninérgica). El exceso de serotonina produce hiperactividad neuromuscular, alteraciones autonómicas y cambios del estado mental.",
    keyPoints: [
      "Cuando veas: inicio reciente de ISRS + paciente con tramadol + cuadro agudo de temblor, diaforesis, diarrea y clonus inducible.",
      "Debes pensar en: síndrome serotoninérgico por interacción ISRS + tramadol → hiperestimulación serotoninérgica central y periférica.",
      "El clonus inducible en miembros inferiores es un hallazgo muy característico del síndrome serotoninérgico.",
      "Tramadol no es solo un opioide: inhibe la recaptación de serotonina y puede precipitar síndrome serotoninérgico con ISRS.",
      "Tema: Síndrome serotoninérgico por interacción ISRS-tramadol.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de psicofarmacología porque evalúa una interacción farmacológica muy preguntada en residencias: ISRS + tramadol puede precipitar síndrome serotoninérgico en horas, no en semanas.

La clave no es buscar bloqueo dopaminérgico (SNM) ni disminución gabaérgica (delirium tremens).
La clave es:
ISRS recién iniciado + tramadol crónico + clonus inducible + hiperactividad autonómica = síndrome serotoninérgico por exceso de serotonina sináptica.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 45 años con cuadro depresivo (tristeza, anhedonia, ideación de muerte, pérdida de 5 kg).
• Recibe tramadol 50 mg c/8 h por lumbalgia crónica (actividad serotoninérgica además de opioide).
• Se inicia sertralina 50 mg/día; a las 24 horas presenta cuadro agudo.
• Temblor, inquietud motora intensa, diaforesis, diarrea y clonus inducible en miembros inferiores.
• Cuadro de hiperactividad neuromuscular y disautonomía tras sumar dos fármacos serotoninérgicos.

Recordemos el síndrome serotoninérgico:
• Resultado de hiperestimulación serotoninérgica central y periférica por exceso de serotonina sináptica.
• Fármacos implicados: ISRS, IRSN, tramadol, linezolid, triptanes, IMAO, fentanilo, ondansetrón.
• Tríada: alteración del estado mental + hiperactividad neuromuscular + hiperactividad autonómica.
• Hallazgo distintivo: clonus inducible (especialmente en miembros inferiores) e hiperreflexia.
• Diferencial con SNM: clonus + hiperreflexia (serotoninérgico) vs rigidez en tubo de plomo + hiporreflexia (SNM).
• Tratamiento: suspender fármacos causales, soporte, ciproheptadina en casos moderados-severos.

Por lo tanto:
El mecanismo fisiopatológico más probable es hiperestimulación serotoninérgica central y periférica por exceso de serotonina sináptica.

¿Por qué la opción B es la respuesta correcta?
La sertralina (ISRS) inhibe la recaptación de serotonina; el tramadol también tiene actividad serotoninérgica (inhibe recaptación de serotonina y noradrenalina).
La combinación produce acumulación de serotonina sináptica que hiperestimula receptores 5-HT central y periféricos.
El cuadro clínico (clonus inducible, diarrea, diaforesis, temblor) es patognomónico de síndrome serotoninérgico.
El inicio a las 24 horas de iniciar sertralina confirma la relación temporal con la interacción farmacológica.

¿Por qué fallan las otras opciones?
Opción A (bloqueo dopaminérgico D2): mecanismo del síndrome neuroléptico maligno; cursa con rigidez en tubo de plomo e hiporreflexia, no con clonus inducible.
Opción C (disminución gabaérgica): mecanismo del delirium tremens por abstinencia alcohólica; no se relaciona con interacción ISRS-tramadol.
Opción D (hiperactividad colinérgica): se observa en intoxicación por inhibidores de colinesterasa (organofosforados, donepezilo); no aplica aquí.

¿Cuál es la trampa del examen?
Muchos estudiantes no reconocen que el tramadol tiene actividad serotoninérgica además de ser un opioide.
Otra trampa: confundir con SNM porque ambos cursan con fiebre y alteración del estado mental; la clave es el clonus inducible vs rigidez en tubo de plomo.
El inicio a las 24 horas (no semanas) es la pista temporal de interacción aguda, no de efecto terapéutico tardío del ISRS.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer síndrome serotoninérgico (ISRS + fármaco serotoninérgico + clonus inducible).
2. Suspender todos los fármacos serotoninérgicos causales (sertralina y tramadol).
3. Proporcionar soporte (hidratación, enfriamiento, benzodiacepinas para agitación).
4. Considerar ciproheptadina (antagonista serotoninérgico) en casos moderados-severos.

Perlas de examen
✅ ISRS + tramadol = interacción clásica de síndrome serotoninérgico.
✅ Clonus inducible es el hallazgo más característico del síndrome serotoninérgico.
✅ Tramadol no es "solo un opioide": tiene actividad serotoninérgica significativa.
✅ Inicio agudo (horas) tras añadir ISRS, no semanas de tratamiento.
✅ Diferencial: clonus + hiperreflexia (serotoninérgico) vs rigidez + hiporreflexia (SNM).
✅ Siempre revisar analgésicos con actividad serotonérgica antes de iniciar ISRS.

Referencias
• UpToDate: Serotonin Syndrome.
• Stahl's Essential Psychopharmacology.
• Harrison's Principles of Internal Medicine.
• Hunter Serotonin Toxicity Criteria.
• Micromedex Drug Interactions.`,
  },
  {
    id: "dr-q-105",
    examArea: "Psiquiatría / Trastornos por consumo",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "delirium_tremens", "alcohol", "urgencias"],
    statement:
      "Hombre de 50 años con antecedente de consumo crónico de alcohol equivalente a una botella de aguardiente diaria. Su última ingesta fue hace 48 horas luego de ser hospitalizado por una neumonía adquirida en la comunidad. Presenta agitación intensa, desorientación, diaforesis profusa, midriasis, hipertensión arterial y taquicardia. Refiere además que \"las paredes se están moviendo\". Signos vitales: TA 170/110 mmHg, FC 125 lpm. Laboratorios: AST 120 U/L, ALT 90 U/L. ¿Cuál es el tratamiento de elección para el control de los síntomas?",
    options: [
      { id: "A", label: "A", text: "Haloperidol intravenoso." },
      { id: "B", label: "B", text: "Lorazepam." },
      { id: "C", label: "C", text: "Fenitoína intravenosa." },
      { id: "D", label: "D", text: "Carbamazepina." },
    ],
    correctOptionId: "B",
    explanation:
      "Delirium tremens: forma más grave del síndrome de abstinencia alcohólica. Las benzodiacepinas son el tratamiento de elección. Lorazepam es especialmente útil con posible compromiso hepático (AST/ALT elevadas).",
    keyPoints: [
      "Cuando veas: consumo crónico de alcohol + abstinencia 48-96 h + agitación + alucinaciones visuales + inestabilidad autonómica (HTA, taquicardia, diaforesis).",
      "Debes pensar en: delirium tremens → lorazepam como tratamiento de elección (especialmente con hepatopatía).",
      "Las benzodiacepinas sustituyen el efecto GABAérgico perdido y previenen convulsiones en abstinencia alcohólica.",
      "El lorazepam es preferido con disfunción hepática (AST/ALT elevadas) por metabolismo por glucuronidación, no por hígado.",
      "Tema: Delirium tremens.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de psiquiatría de urgencias porque evalúa el delirium tremens, la forma más grave del síndrome de abstinencia alcohólica, y por qué las benzodiacepinas —no los antipsicóticos— son el tratamiento de elección.

La clave no es usar haloperidol como tratamiento principal ni fenitoína para controlar síntomas.
La clave es:
Abstinencia alcohólica 48 h + alucinaciones + agitación + inestabilidad autonómica = delirium tremens → lorazepam como tratamiento de elección.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 50 años con consumo crónico de alcohol (botella de aguardiente diaria).
• Hospitalizado por neumonía; última ingesta hace 48 horas (ventana típica del delirium tremens).
• Agitación intensa, desorientación, alucinaciones visuales ("las paredes se están moviendo").
• Disautonomía marcada: diaforesis profusa, midriasis, TA 170/110 mmHg, FC 125 lpm.
• AST 120 U/L, ALT 90 U/L: hepatopatía alcohólica asociada.

Recordemos el delirium tremens:
• Forma más grave del síndrome de abstinencia alcohólica; aparece entre 48-96 horas tras la última ingesta.
• Mecanismo: hiperexcitabilidad del SNC por adaptación GABA/glutamato al suspender el alcohol crónico.
• Tríada: alteración del estado mental + hiperactividad autonómica + alucinaciones (típicamente visuales).
• Mortalidad sin tratamiento: 5-15%; con benzodiacepinas adecuadas: <5%.
• Tratamiento de elección: benzodiacepinas (lorazepam, diazepam, clordiazepóxido) en dosis altas tituladas al síntoma.
• Lorazepam preferido con hepatopatía: metabolismo por glucuronidación, no por hígado (a diferencia de diazepam).

Por lo tanto:
El tratamiento de elección para el control de los síntomas es lorazepam.

¿Por qué la opción B es la respuesta correcta?
Las benzodiacepinas sustituyen el efecto GABAérgico perdido por la abstinencia alcohólica y previenen convulsiones.
El lorazepam es especialmente útil con posible compromiso hepático (AST/ALT elevadas) porque se metaboliza por glucuronidación renal, no por el hígado.
Se administra en dosis tituladas al síntoma (protocolo de síntomas) con monitorización estrecha en unidad de cuidados intensivos.
Además del lorazepam, se requiere: tiamina IV (prevención de encefalopatía de Wernicke), hidratación, corrección de electrolitos y tratamiento de comorbilidades (neumonía).

¿Por qué fallan las otras opciones?
Opción A (haloperidol IV): puede controlar agitación superficialmente, pero no trata la abstinencia ni previene convulsiones; además, reduce el umbral convulsivo.
Opción C (fenitoína IV): no es tratamiento de la abstinencia alcohólica ni del delirium tremens; no sustituye el efecto GABAérgico perdido.
Opción D (carbamazepina): puede usarse en abstinencia leve-moderada ambulatoria, pero en delirium tremens grave las benzodiacepinas IV son el estándar de oro.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen haloperidol ante agitación con alucinaciones, aplicando el algoritmo de psicosis aguda.
Pero en abstinencia alcohólica grave, las benzodiacepinas son el tratamiento específico, no los antipsicóticos.
Otra trampa: elegir diazepam sin considerar la hepatopatía; con AST/ALT elevadas, lorazepam es más seguro por su metabolismo independiente del hígado.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer delirium tremens (abstinencia 48-96 h + alucinaciones + disautonomía).
2. Administrar lorazepam IV titulado al síntoma en unidad monitorizada.
3. Administrar tiamina IV antes de glucosa (prevención de Wernicke).
4. Tratar comorbilidades (neumonía) y corregir desequilibrios hidroelectrolíticos.

Perlas de examen
✅ Abstinencia 48-96 h + alucinaciones + HTA/taquicardia = delirium tremens.
✅ Benzodiacepinas son el tratamiento de elección, no antipsicóticos.
✅ Lorazepam preferido con hepatopatía (metabolismo por glucuronidación).
✅ Haloperidol no previene convulsiones y puede reducir umbral convulsivo.
✅ Siempre administrar tiamina IV antes de glucosa en paciente alcohólico.
✅ Mortalidad del DT es significativa sin tratamiento adecuado con benzodiacepinas.

Referencias
• UpToDate: Alcohol Withdrawal.
• ASAM Clinical Practice Guideline on Alcohol Withdrawal.
• Harrison's Principles of Internal Medicine.
• Tintinalli's Emergency Medicine.
• DSM-5-TR: Alcohol Withdrawal Delirium.`,
  },
  {
    id: "dr-q-106",
    examArea: "Psiquiatría / Urgencias",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "suicidio", "riesgo", "urgencias"],
    statement:
      "Mujer de 19 años, estudiante universitaria, es llevada por sus padres a urgencias luego de que encontraran una carta de despedida en su habitación. Hace dos meses terminó una relación sentimental. Refiere tristeza persistente, anhedonia, insomnio de conciliación y abandono de sus actividades académicas. Durante la entrevista manifiesta: \"Nada va a mejorar, ya tengo las pastillas guardadas para esta noche\". Niega intentos suicidas previos. ¿Cuál es el nivel de riesgo y la conducta más segura?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Riesgo bajo; manejo ambulatorio con cita prioritaria por psiquiatría.",
      },
      {
        id: "B",
        label: "B",
        text: "Riesgo moderado; iniciar antidepresivo y control semanal.",
      },
      {
        id: "C",
        label: "C",
        text: "Riesgo alto; hospitalización psiquiátrica y medidas de protección inmediata.",
      },
      {
        id: "D",
        label: "D",
        text: "Riesgo bajo porque no tiene intentos suicidas previos.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Ideación suicida activa con plan específico, acceso a método potencialmente letal y conducta preparatoria (carta de despedida). Riesgo suicida alto que requiere hospitalización y protección inmediata.",
    keyPoints: [
      "Cuando veas: ideación suicida activa + plan específico + acceso al método letal + conducta preparatoria (carta de despedida).",
      "Debes pensar en: riesgo suicida alto → hospitalización psiquiátrica y medidas de protección inmediata.",
      "La carta de despedida es una conducta preparatoria que eleva significativamente el riesgo suicida.",
      "La ausencia de intentos suicidas previos NO excluye riesgo elevado cuando hay plan activo con acceso al método.",
      "Tema: Evaluación de riesgo suicida.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de psiquiatría de urgencias porque evalúa la estratificación del riesgo suicida: no basta con diagnosticar depresión; hay que identificar plan, método y conductas preparatorias que obligan a hospitalizar.

La clave no es manejar ambulatoriamente ni subestimar el riesgo por ausencia de intentos previos.
La clave es:
Ideación activa + plan concreto + acceso al método + conducta preparatoria (carta de despedida) = riesgo alto → hospitalización inmediata.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 19 años, estudiante universitaria, llevada por sus padres.
• Episodio depresivo de 2 meses tras ruptura sentimental: tristeza, anhedonia, insomnio, abandono académico.
• Carta de despedida encontrada en su habitación: conducta preparatoria de alto riesgo.
• Ideación suicida activa con plan específico: "ya tengo las pastillas guardadas para esta noche".
• Acceso al método potencialmente letal confirmado; intención expresada en la entrevista.
• Niega intentos suicidas previos, pero el riesgo actual es inminente.

Recordemos la evaluación del riesgo suicida:
• Factores de riesgo alto: ideación activa, plan específico, acceso al método, intención declarada, conductas preparatorias.
• Conductas preparatorias: carta de despedida, regalar pertenencias, poner asuntos en orden, despedirse de seres queridos.
• Factores protectores (insuficientes aquí): apoyo familiar, ausencia de intentos previos, edad joven.
• Riesgo bajo: ideación pasiva sin plan ni intención → manejo ambulatorio con seguimiento cercano.
• Riesgo moderado: ideación activa sin plan concreto → intensificar seguimiento, considerar hospitalización parcial.
• Riesgo alto: plan + método + intención → hospitalización psiquiátrica con supervisión continua y restricción de medios letales.

Por lo tanto:
El nivel de riesgo es alto y la conducta más segura es hospitalización psiquiátrica con medidas de protección inmediata.

¿Por qué la opción C es la respuesta correcta?
Concurren todos los elementos de riesgo suicida alto: ideación activa, plan específico ("esta noche"), acceso al método (pastillas guardadas) e intención declarada.
La carta de despedida es una conducta preparatoria que indica que el paciente ha avanzado más allá de la ideación hacia la planificación concreta.
La hospitalización psiquiátrica con supervisión continua y restricción de medios letales es la única conducta que garantiza la protección inmediata de la vida.
El objetivo primordial es proteger la vida del paciente; el tratamiento farmacológico puede iniciarse durante la hospitalización.

¿Por qué fallan las otras opciones?
Opción A (riesgo bajo + manejo ambulatorio): inaceptable con plan activo, acceso a pastillas e intención declarada; el riesgo es inminente, no bajo.
Opción B (riesgo moderado + antidepresivo + control semanal): subestima gravemente el riesgo; un control semanal no protege contra un intento planificado para "esta noche".
Opción D (riesgo bajo por ausencia de intentos previos): error grave; el riesgo actual depende del plan, la intención y el acceso al método, no del historial de intentos.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen manejo ambulatorio porque la paciente es joven, tiene apoyo familiar y no tiene intentos previos.
Pero la carta de despedida + plan concreto + acceso a pastillas + intención para "esta noche" configura riesgo alto independientemente de esos factores.
Otra trampa: iniciar antidepresivo ambulatorio sin proteger primero la vida; los ISRS pueden aumentar energía antes de reducir ideación suicida.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar ideación, plan, intención, acceso al método y conductas preparatorias.
2. Clasificar riesgo: plan + método + intención = alto → hospitalizar.
3. Restringir medios letales y garantizar supervisión continua.
4. Iniciar tratamiento (farmacológico y psicoterapéutico) en entorno seguro.

Perlas de examen
✅ Plan suicida + acceso al método + intención = riesgo alto → hospitalizar.
✅ Carta de despedida = conducta preparatoria de alto riesgo.
✅ Ausencia de intentos previos NO excluye riesgo elevado actual.
✅ El objetivo primordial es proteger la vida, no solo tratar la depresión.
✅ No manejar ambulatoriamente cuando hay plan activo con acceso al método.
✅ Los ISRS pueden aumentar energía antes de reducir ideación; hospitalizar primero.

Referencias
• APA Practice Guideline for Assessment and Treatment of Suicidal Behaviors.
• DSM-5-TR: Suicidal Behavior.
• UpToDate: Suicide Risk Assessment and Management.
• Columbia Suicide Severity Rating Scale (C-SSRS).
• NICE Guidelines: Self-harm and Suicide Prevention.`,
  },
  {
    id: "dr-q-107",
    examArea: "Psiquiatría / Psiquiatría de enlace",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "cotard", "psicosis", "neoplasia"],
    statement:
      "Hombre de 65 años, con antecedente de tabaquismo pesado, consulta acompañado por su esposa por cambios progresivos en el comportamiento durante los últimos meses. Refiere pérdida involuntaria de 10 kg en los últimos 3 meses. La esposa lo nota \"muy deprimido\", lento para hablar y cada vez más aislado. Durante la entrevista expresa que sus órganos \"se están pudriendo\" y afirma que ya está muerto. Al examen mental presenta marcado enlentecimiento psicomotor y delirios nihilistas compatibles con síndrome de Cotard. ¿Cuál es la prioridad diagnóstica inicial?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar inmediatamente un ISRS y control ambulatorio en 4 semanas.",
      },
      {
        id: "B",
        label: "B",
        text: "Diagnosticar trastorno delirante persistente y solicitar psicoterapia.",
      },
      {
        id: "C",
        label: "C",
        text: "Buscar activamente una causa médica u orgánica subyacente, especialmente una neoplasia.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar benzodiacepinas por posible trastorno de ansiedad.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "En psiquiatría geriátrica, el debut de síntomas psicóticos (como los delirios nihilistas del Síndrome de Cotard) asociados a \"banderas rojas\" sistémicas (pérdida de 10 kg, inicio tardío a los 65 años, tabaquismo pesado) es un cuadro orgánico o paraneoplásico hasta que se demuestre lo contrario. La prioridad absoluta e indelegable es buscar una neoplasia oculta (ej. cáncer de pulmón) o una patología neurológica mediante neuroimagen, TC de tórax y laboratorios exhaustivos.\n\n¿Por qué se descartan las otras opciones?\n• Opción A (ISRS y control ambulatorio): Iniciar sertralina o fluoxetina en un anciano con banderas rojas oncológicas, enviándolo a su casa por 4 semanas, es una negligencia que retrasará el diagnóstico de un posible cáncer tratable y empeorará dramáticamente su pronóstico vital.\n• Opción B (Trastorno delirante persistente): Los trastornos psicóticos primarios rara vez debutan a los 65 años sin causa orgánica. Además, esta opción ignora por completo la pérdida severa de peso y el tabaquismo, asumiendo un origen puramente psiquiátrico de forma prematura.\n• Opción D (Benzodiacepinas): No abordan la gravedad del cuadro psicótico, no descartan la causa subyacente y pueden causar delirium, caídas o depresión respiratoria en un adulto mayor.",
    keyPoints: [
      "Cuando veas: psicosis de inicio tardío (>60 años) + pérdida de peso inexplicada + tabaquismo + delirios nihilistas (síndrome de Cotard).",
      "Debes pensar en: descartar causa médica u orgánica subyacente, especialmente neoplasia, antes de cerrar diagnóstico psiquiátrico.",
      "El síndrome de Cotard (creencia de estar muerto, órganos pudriéndose) puede ser manifestación de depresión psicótica, enfermedad neurológica o neoplasia.",
      "Psicosis nueva en anciano con síntomas sistémicos (baja de peso, tabaquismo) obliga a estudio médico completo antes de ISRS ambulatorio.",
      "Tema: Síndrome de Cotard y psicosis de inicio tardío.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una de las preguntas de oro en psiquiatría de enlace. Evalúa el pilar más importante de la psiquiatría clínica: el diagnóstico de exclusión. Nunca asumas un trastorno psiquiátrico primario si el paciente tiene "banderas rojas" orgánicas.

La clave no es diagnosticar rápido la depresión psicótica.
La clave es:
Psicosis de inicio tardío + Baja de peso severa + Tabaquismo = Buscar Cáncer (Síndrome Paraneoplásico u Orgánico).

¿Qué está ocurriendo realmente en la fisiopatología?
El paciente presenta el clásico **Síndrome de Cotard** (delirio nihilista: el paciente afirma estar muerto, vacío, o que sus órganos se pudren). Históricamente, este síndrome se ha asociado a la depresión mayor con síntomas psicóticos.
Sin embargo, el cerebro del adulto mayor es altamente vulnerable a noxas sistémicas. Un tumor oculto (ej. carcinoma microcítico de pulmón en un fumador pesado) puede generar anticuerpos onconeurales o alteraciones metabólicas que cruzan la barrera hematoencefálica, desencadenando psicosis, letargo y cuadros seudodepresivos antes de que aparezcan los síntomas respiratorios clásicos. Por ello, la pérdida de 10 kg en 3 meses grita "¡Neoplasia!" y no "¡Falta de serotonina!".

¿Cuál es la trampa del examen?
El distractor principal (Opción A) busca apelar al "reflejo medular" del estudiante: "Paciente deprimido = Dar ISRS". Pero en psiquiatría geriátrica, recetar antidepresivos sin hacer un tamizaje orgánico frente a pérdida de peso es un error imperdonable que retrasa el diagnóstico oncológico.

Perlas de examen y práctica clínica:
✅ **Banderas rojas en Psiquiatría que obligan a neuroimagen y laboratorios completos:**
1. Inicio tardío de psicosis o manía (mayores de 40-50 años).
2. Síntomas atípicos (alucinaciones visuales u olfatorias; en esquizofrenia suelen ser auditivas).
3. Alteración del sensorio (confusión, letargo, fluctuación de conciencia = Delirium).
4. Síntomas constitucionales (fiebre, baja de peso extrema, diaforesis nocturna).
5. Examen neurológico focal anormal.
✅ **Síndrome de Cotard:** Delirio nihilista ("no tengo sangre", "estoy muerto").
✅ **Síndrome de Capgras:** Delirio de que un familiar ha sido reemplazado por un impostor idéntico. Frecuente en demencia por cuerpos de Lewy o esquizofrenia.

Referencias
• Harrison's Principles of Internal Medicine (Paraneoplastic Syndromes).
• UpToDate: New-onset psychosis in older adults.
• Kaplan & Sadock's Comprehensive Textbook of Psychiatry.`,
  },
  {
    id: "dr-q-108",
    examArea: "Psiquiatría / Psicofarmacología",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "clozapina", "agranulocitosis"],
    statement:
      "Paciente de 24 años con diagnóstico de esquizofrenia refractaria, en tratamiento con clozapina 300 mg/día desde hace 3 meses. Consulta por fiebre de 38.5°C, odinofagia y malestar general de inicio reciente. Niega tos, disuria, diarrea u otros síntomas infecciosos focales. ¿Cuál es la conducta inmediata más importante?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar antibiótico empírico ambulatorio y continuar la clozapina.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar hemograma urgente con recuento absoluto de neutrófilos y suspender temporalmente la clozapina hasta aclarar el diagnóstico.",
      },
      {
        id: "C",
        label: "C",
        text: "Aumentar la dosis de clozapina por posible recaída psicótica.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar únicamente proteína C reactiva y dar seguimiento ambulatorio.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Fiebre y odinofagia en paciente con clozapina deben hacer sospechar agranulocitosis o neutropenia grave. Prioridad: hemograma urgente con recuento absoluto de neutrófilos y suspensión temporal de clozapina.",
    keyPoints: [
      "Cuando veas: paciente con clozapina + fiebre + odinofagia sin foco infeccioso claro.",
      "Debes pensar en: agranulocitosis inducida por clozapina → hemograma urgente con RAN y suspensión temporal de clozapina.",
      "La agranulocitosis es el efecto adverso más temido de la clozapina; puede ser fatal si no se detecta a tiempo.",
      "Ante fiebre en paciente con clozapina, el hemograma urgente va antes que cualquier antibiótico empírico ambulatorio.",
      "Tema: Monitorización de clozapina y agranulocitosis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de psicofarmacología porque evalúa el efecto adverso más temido de la clozapina: la agranulocitosis. Ante fiebre en un paciente con clozapina, el hemograma urgente va antes que cualquier antibiótico empírico.

La clave no es continuar clozapina con antibiótico empírico ni aumentar la dosis por recaída psicótica.
La clave es:
Clozapina + fiebre + odinofagia sin foco claro = agranulocitosis hasta demostrar lo contrario → hemograma urgente con RAN + suspensión temporal de clozapina.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 24 años con esquizofrenia refractaria en clozapina 300 mg/día desde hace 3 meses.
• Fiebre 38.5°C, odinofagia y malestar general de inicio reciente.
• Niega tos, disuria, diarrea u otros síntomas infecciosos focales claros.
• Cuadro compatible con neutropenia grave o agranulocitosis inducida por clozapina.
• La odinofagia en paciente neutropénico puede ser la primera manifestación de infección faringea grave.

Recordemos la clozapina y la agranulocitosis:
• Clozapina: antipsicótico atípico reservado para esquizofrenia refractaria; superior en eficacia pero con perfil de efectos adversos único.
• Agranulocitosis: incidencia 0.5-2%; puede ocurrir en cualquier momento, pero mayor riesgo en primeros 6 meses.
• Síntomas de alarma: fiebre, odinofagia, aftas, infecciones recurrentes, malestar general.
• Monitorización obligatoria: hemograma semanal las primeras 6 semanas, quincenal hasta 6 meses, mensual después.
• Criterio de agranulocitosis: RAN <500/mm³; neutropenia: RAN <1500/mm³.
• Conducta ante fiebre: hemograma urgente + suspensión temporal de clozapina hasta aclarar recuento de neutrófilos.
• Si se confirma agranulocitosis: suspensión definitiva, aislamiento, factores estimulantes de colonias (G-CSF), antibióticos IV de amplio espectro.

Por lo tanto:
La conducta inmediata más importante es solicitar hemograma urgente con recuento absoluto de neutrófilos y suspender temporalmente la clozapina hasta aclarar el diagnóstico.

¿Por qué la opción B es la respuesta correcta?
Fiebre y odinofagia en paciente con clozapina deben hacer sospechar agranulocitosis o neutropenia grave hasta demostrar lo contrario.
El hemograma urgente con recuento absoluto de neutrófilos (RAN) es el estudio diagnóstico prioritario e inmediato.
La suspensión temporal de clozapina es obligatoria mientras se aclara el diagnóstico; continuarla puede agravar la neutropenia.
Si el RAN es normal, se puede reanudar clozapina; si está deprimido, se inicia manejo de agranulocitosis/neutropenia.

¿Por qué fallan las otras opciones?
Opción A (antibiótico empírico ambulatorio + continuar clozapina): retrasa el diagnóstico de agranulocitosis y mantiene la droga causal; el paciente necesita evaluación urgente, no ambulatoria.
Opción C (aumentar clozapina por recaída psicótica): absurdo ante fiebre con sospecha de agranulocitosis; la fiebre no es recaída psicótica sino posible efecto adverso hematológico.
Opción D (solo PCR + seguimiento ambulatorio): insuficiente; se requiere hemograma urgente con RAN, no solo un marcador inflamatorio inespecífico.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen antibiótico empírico porque hay fiebre y odinofagia, interpretándolo como faringitis bacteriana común.
Pero en paciente con clozapina, la fiebre debe hacer sospechar agranulocitosis primero; el hemograma urgente es prioritario.
Otra trampa: continuar clozapina "porque funciona bien" sin reconocer que la fiebre puede ser la señal de un efecto adverso potencialmente mortal.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer fiebre en paciente con clozapina como posible agranulocitosis.
2. Solicitar hemograma urgente con recuento absoluto de neutrófilos.
3. Suspender temporalmente clozapina hasta aclarar el RAN.
4. Si se confirma agranulocitosis: suspensión definitiva, G-CSF, antibióticos IV, aislamiento.

Perlas de examen
✅ Clozapina + fiebre = agranulocitosis hasta demostrar lo contrario.
✅ Hemograma urgente con RAN es obligatorio ante fiebre en paciente con clozapina.
✅ Suspender clozapina temporalmente mientras se aclara el diagnóstico.
✅ Agranulocitosis: RAN <500/mm³; mayor riesgo en primeros 6 meses de tratamiento.
✅ No continuar clozapina ni dar antibiótico ambulatorio sin hemograma urgente.
✅ La odinofagia en neutropénico puede ser infección faringea grave, no faringitis simple.

Referencias
• UpToDate: Clozapine Monitoring and Adverse Effects.
• Maudsley Prescribing Guidelines in Psychiatry.
• Stahl's Essential Psychopharmacology.
• FDA Clozapine REMS Program.
• Leponex/clozapine prescribing information.`,
  },
  {
    id: "dr-q-109",
    examArea: "Psiquiatría / Urgencias",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "agitacion", "urgencias", "psicosis"],
    statement:
      "Mujer de 30 años, sin antecedentes psiquiátricos conocidos, es llevada a urgencias por la policía tras ser encontrada en un parque gritando que \"los extraterrestres están drenando la energía de la ciudad a través de los postes de luz\". Se encuentra extremadamente agitada, agresiva y poco colaboradora. Al examen físico presenta midriasis bilateral, FC 130 lpm, TA 160/100 mmHg y diaforesis leve. ¿Cuál es la conducta inicial más adecuada en urgencias?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar risperidona oral y programar valoración ambulatoria por psiquiatría.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar resonancia magnética cerebral antes de cualquier intervención.",
      },
      {
        id: "C",
        label: "C",
        text: "Controlar primero la agitación mediante sedación farmacológica y garantizar la seguridad del paciente y del personal.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar inmediatamente tratamiento de mantenimiento para esquizofrenia.",
      },
    ],
    correctOptionId: "C",
    explanation: "La prioridad inicial en un paciente con agitación psicomotora severa y agresividad en urgencias es garantizar la seguridad del paciente y del personal médico mediante la contención farmacológica (y física si es necesario). No es seguro ni ético proceder con estudios de imagen, laboratorios o intentar medicación oral hasta que el paciente esté sedado. Los signos autonómicos obligan a descartar etiologías orgánicas o tóxicas (ej. cocaína, anfetaminas) antes de diagnosticar una psicosis primaria.\n\n¿Por qué se descartan las otras opciones?\n• Opción A (Risperidona oral): En un paciente con agitación extrema, poco colaborador y agresivo, la vía oral es inviable por el alto riesgo de aspiración, rechazo y agresión al personal.\n• Opción B (RM cerebral): Es imposible realizar una resonancia magnética en un paciente agitado y no colaborador. Primero debe lograrse la sedación.\n• Opción D (Tratamiento de esquizofrenia): Es un error grave diagnosticar esquizofrenia en el servicio de urgencias durante un primer episodio de psicosis sin haber descartado antes causas tóxicas (ej. inducida por estimulantes) o médicas (encefalitis, lupus).",
    keyPoints: [
      "Agitación psicomotora extrema = Urgencia médica. Primera prioridad: Seguridad (sedación IM/IV rápida).",
      "Síntomas psicóticos + Alteraciones autonómicas (midriasis, taquicardia) = Alta sospecha de Intoxicación o Abstinencia.",
      "Nunca diagnosticar un trastorno psiquiátrico primario en urgencias sin descartar causas secundarias.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta pregunta de psiquiatría de urgencias evalúa un escenario de la vida real donde el instinto clínico básico debe priorizar el control de daños.

La clave no es llegar a un diagnóstico etiológico en los primeros 5 minutos.
La clave es:
Agitación agresiva = Asegurar el área (Sedación) -> Estudiar al paciente.

¿Qué está ocurriendo realmente en la clínica?
Nos enfrentamos a una mujer joven cursando con un episodio de psicosis aguda ("extraterrestres") acompañado de severa agitación psicomotora. 
Cualquier estudiante podría pensar apresuradamente: "Mujer joven con delirios = Esquizofrenia o Trastorno Bipolar". Sin embargo, un clínico astuto nota de inmediato las **banderas rojas autonómicas**: Midriasis, Taquicardia y Cifras Tensionales Altas. Esta tríada grita "Síndrome Simpaticomimético" (intoxicación por cocaína, anfetaminas, tusi, metanfetaminas). 
Frente a un paciente en este estado, intentar tomar laboratorios o realizar imágenes es riesgoso tanto para el personal (agresiones) como para el paciente. El protocolo (ej. Guías BETA) dicta que la primera intervención es el "Verbal De-escalation" (Contención verbal) y, si falla como en este caso, se debe proceder inmediatamente a la contención farmacológica (usualmente Haloperidol IM o Olanzapina IM, a menudo combinados con Midazolam o Lorazepam).

¿Cuál es la trampa del examen?
La trampa es la Opción D (Esquizofrenia). En psiquiatría, los diagnósticos primarios (como la esquizofrenia) son diagnósticos de exclusión. NO puedes rotular a un paciente como esquizofrénico en urgencias sin antes hacer un toxicológico en orina, panel metabólico y, si hay focalización, neuroimagen.

Perlas de examen y práctica clínica:
✅ **El Protocolo de Agitación:** 1. Seguridad/Contención verbal -> 2. Contención farmacológica -> 3. Contención física (último recurso) -> 4. Evaluación médica completa.
✅ **Cóctel lítico clásico:** Haloperidol 5mg + Lorazepam 2mg intramuscular.
✅ **Diagnóstico Diferencial del "Primer Episodio Psicótico":** Siempre descartar drogas (estimulantes, cannabis sintético), infecciones (encefalitis herpética, sífilis terciaria) y causas autoinmunes (Encefalitis por anticuerpos anti-NMDA).

Referencias
• American Association for Emergency Psychiatry (AAEP): Project BETA Guidelines.
• Tintinalli's Emergency Medicine: A Comprehensive Study Guide.
• Kaplan & Sadock's Synopsis of Psychiatry.`,
  },
  {
    id: "dr-q-110",
    examArea: "Psiquiatría / Medicina Interna",
    topic: "Psiquiatría",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "psiquiatria", "delirium", "haloperidol", "agitacion"],
    statement:
      "Hombre de 82 años con antecedentes de insuficiencia cardíaca y fibrilación auricular, es llevado a urgencias por cuadro de desorientación fluctuante de 12 horas de evolución. Durante la valoración presenta marcada alteración de la atención, períodos de somnolencia alternados con agitación y comportamiento agresivo. Intenta golpear al personal de salud y no responde a las medidas de reorientación verbal. Se decide realizar contención farmacológica. ¿Cuál es el fármaco de elección para el control de la agitación en este paciente?",
    options: [
      { id: "A", label: "A", text: "Diazepam." },
      { id: "B", label: "B", text: "Haloperidol." },
      { id: "C", label: "C", text: "Amitriptilina." },
      { id: "D", label: "D", text: "Fenitoína." },
    ],
    correctOptionId: "B",
    explanation:
      "Delirium hiperactivo con riesgo para el paciente y el personal. Cuando las medidas no farmacológicas fracasan, el haloperidol es el fármaco clásicamente utilizado para control de agitación en delirium (dosis bajas, monitorización).",
    keyPoints: [
      "Cuando veas: anciano con desorientación fluctuante de inicio agudo + alteración de atención + agitación/agresividad que no responde a medidas no farmacológicas.",
      "Debes pensar en: delirium hiperactivo con riesgo → haloperidol como fármaco de elección para contención farmacológica (dosis bajas).",
      "Las benzodiacepinas pueden empeorar el delirium en ancianos; se reservan para abstinencia alcohólica.",
      "El tratamiento de base del delirium siempre incluye buscar causas reversibles y medidas no farmacológicas antes de medicar.",
      "Tema: Delirium hiperactivo y contención farmacológica.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de psiquiatría de enlace porque evalúa el manejo farmacológico del delirium hiperactivo en el anciano: cuando la reorientación verbal falla y hay riesgo inmediato, ¿qué sedante usar sin empeorar el cuadro?

La clave no es usar benzodiacepinas (empeoran delirium) ni antidepresivos anticolinérgicos.
La clave es:
Delirium hiperactivo + agresividad + fracaso de medidas no farmacológicas = haloperidol en dosis bajas como contención farmacológica de elección.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 82 años con insuficiencia cardíaca y fibrilación auricular.
• Desorientación fluctuante de 12 horas de evolución (inicio agudo).
• Alteración marcada de la atención con períodos de somnolencia alternados con agitación.
• Comportamiento agresivo: intenta golpear al personal; no responde a reorientación verbal.
• Cuadro típico de delirium hiperactivo que requiere contención farmacológica tras fracaso de medidas no farmacológicas.

Recordemos el delirium hiperactivo:
• Subtipo de delirium con predominio de agitación, agresividad, alucinaciones e hiperactividad psicomotora.
• Criterios diagnósticos: inicio agudo, curso fluctuante, alteración de atención y conciencia, cambio cognitivo.
• Tratamiento escalonado: (1) buscar causas reversibles, (2) medidas no farmacológicas, (3) antipsicóticos si hay riesgo.
• Haloperidol: antipsicótico clásico para agitación grave en delirium; dosis bajas (0.5-1 mg IV/IM), monitorización de QT.
• Benzodiacepinas: empeoran confusión y delirium en ancianos; solo indicadas en abstinencia alcohólica o benzodiacepínica.
• Evitar: anticolinérgicos (amitriptilina), benzodiacepinas y sedantes que prolonguen el delirium.

Por lo tanto:
El fármaco de elección para el control de la agitación en este paciente es haloperidol.

¿Por qué la opción B es la respuesta correcta?
El cuadro es delirium hiperactivo con riesgo para el paciente y el personal tras fracaso de medidas no farmacológicas.
El haloperidol es el antipsicótico clásicamente utilizado para contención farmacológica en delirium (dosis bajas: 0.5-1 mg IV/IM).
Tiene menor efecto anticolinérgico y sedante que benzodiacepinas, lo que facilita la recuperación cognitiva.
Debe administrarse con monitorización de QT y en dosis mínima efectiva, reevaluando frecuentemente.

¿Por qué fallan las otras opciones?
Opción A (diazepam): las benzodiacepinas empeoran el delirium y la confusión en ancianos; se reservan exclusivamente para abstinencia alcohólica o benzodiacepínica, no para delirium de otra etiología.
Opción C (amitriptilina): antidepresivo tricíclico con marcado efecto anticolinérgico que puede agravar significativamente el delirium en adultos mayores.
Opción D (fenitoína): antiepiléptico sin rol alguno en el control de agitación por delirium; no tiene propiedades sedantes ni antipsicóticas.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen diazepam porque es un sedante conocido y el paciente está agitado.
Pero las benzodiacepinas empeoran el delirium en ancianos (excepto abstinencia alcohólica); el haloperidol es la opción correcta.
Otra trampa: no reconocer que las medidas no farmacológicas ya fracasaron, lo que justifica la contención farmacológica con haloperidol.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer delirium hiperactivo (inicio agudo + fluctuación + alteración de atención + agitación).
2. Buscar causas reversibles e implementar medidas no farmacológicas.
3. Si hay riesgo y fracasan medidas no farmacológicas: haloperidol en dosis bajas.
4. Monitorizar QT, reevaluar frecuentemente y suspender cuando la agitación ceda.

Perlas de examen
✅ Delirium hiperactivo: agitación + agresividad + alteración de atención + fluctuación.
✅ Haloperidol en dosis bajas es el fármaco clásico para agitación grave en delirium.
✅ Benzodiacepinas empeoran delirium en ancianos (excepto abstinencia alcohólica).
✅ Amitriptilina y fármacos anticolinérgicos agravan delirium; evitar en ancianos.
✅ Siempre buscar causas reversibles antes de medicar; antipsicóticos son segunda línea.
✅ Monitorizar QT con haloperidol IV; usar dosis mínima efectiva.

Referencias
• American Geriatrics Society: Clinical Practice Guideline for Postoperative Delirium.
• Harrison's Principles of Internal Medicine.
• UpToDate: Delirium in Older Adults.
• DSM-5-TR: Delirium.
• NICE Guidelines: Delirium.`,
  },
  {
    id: "dr-q-111",
    examArea: "Atención Primaria en Salud / Tamización",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "tamizacion", "cuello_uterino", "vph", "colombia"],
    statement:
      "Paciente femenina de 34 años, G2P2, asintomática. Consulta para chequeo general. Antecedentes: fumadora activa (5 cigarrillos/día). Última citología cervical realizada hace 2 años, con resultado negativo para lesión intraepitelial o malignidad. Según las guías de práctica clínica vigentes en Colombia (Ruta de Promoción y Mantenimiento de la Salud), ¿cuál es la conducta de tamización para cáncer de cuello uterino más apropiada?",
    options: [
      { id: "A", label: "A", text: "Realizar citología cervical anual por ser fumadora." },
      {
        id: "B",
        label: "B",
        text: "Realizar prueba de ADN para VPH de alto riesgo y continuar tamización según resultado.",
      },
      {
        id: "C",
        label: "C",
        text: "Repetir citología cervical ahora y posteriormente cada 3 años si continúa siendo negativa.",
      },
      { id: "D", label: "D", text: "No requiere ninguna prueba hasta cumplir 50 años." },
    ],
    correctOptionId: "B",
    explanation:
      "Entre 30 y 65 años, la estrategia preferida de tamización en Colombia es la prueba de ADN para VPH de alto riesgo, independientemente de tabaquismo o citologías previas negativas.",
    keyPoints: [
      "Cuando veas: mujer 30-65 años en chequeo APS con citología previa negativa y factor de riesgo (tabaquismo).",
      "Debes pensar en: tamización por edad según Res. 3280 Colombia → ADN VPH de alto riesgo como estrategia preferida.",
      "El tabaquismo aumenta riesgo de progresión de lesiones, pero NO cambia la estrategia de tamización por edad.",
      "25-29 años: citología; 30-65 años: ADN VPH; VPH negativo permite ampliar intervalos con riesgo muy bajo.",
      "Tema: Tamización cáncer de cuello uterino — ADN VPH en Colombia.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de APS y tamización porque evalúa una trampa frecuente: ante una fumadora con citología negativa reciente, no cambiar la estrategia por el tabaquismo sino aplicar la ruta por edad vigente en Colombia.

La clave no es citología anual ni repetir citología cada 3 años solo porque ya la tuvo.
La clave es:
Mujer 34 años (30-65) + consulta preventiva en Colombia = prueba de ADN para VPH de alto riesgo como estrategia preferida, independiente del tabaquismo.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 34 años, G2P2, asintomática, en consulta de chequeo general en APS.
• Fumadora activa (5 cigarrillos/día), pero sin síntomas ni lesiones cervicales previas.
• Citología cervical negativa hace 2 años.
• Según Res. 3280 (Ruta de Promoción y Mantenimiento de la Salud), la edad define la estrategia de tamización, no el tabaquismo ni la citología previa sola.

Recordemos la tamización de cuello uterino en Colombia:
• 25-29 años: citología cervical cada 3 años.
• 30-65 años: prueba de ADN para VPH de alto riesgo como estrategia preferida.
• El VPH persistente es causa necesaria del cáncer de cuello uterino; la prueba de ADN tiene mayor sensibilidad que la citología.
• VPH negativo = riesgo muy bajo; permite ampliar intervalos de seguimiento.
• El tabaquismo es cofactor de progresión, pero no modifica la estrategia por edad.

Por lo tanto:
La conducta más apropiada es realizar prueba de ADN para VPH de alto riesgo y continuar tamización según resultado.

¿Por qué la opción B es la respuesta correcta?
La prueba de ADN para VPH de alto riesgo es la estrategia preferida entre 30 y 65 años según guías colombianas vigentes.
Tiene mayor sensibilidad que la citología para detectar lesiones precursoras y permite estratificar riesgo según el resultado (negativo = intervalos más amplios; positivo = derivación según algoritmo).
El tabaquismo no justifica cambiar a citología anual ni omitir la estrategia por edad.

¿Por qué fallan las otras opciones?
Opción A (citología anual por ser fumadora): la edad define la estrategia; no se indica citología anual solo por tabaquismo en una mujer de 34 años.
Opción C (repetir citología ahora y cada 3 años): esquema más propio del rango 25-29 años con citología, no la estrategia preferida a los 34 en Colombia.
Opción D (no tamizar hasta los 50 años): incorrecto; la tamización inicia mucho antes y esta paciente ya está en ventana activa (30-65 años).

¿Cuál es la trampa del examen?
Muchos estudiantes eligen citología anual porque la paciente es fumadora, confundiendo cofactor de progresión con cambio de estrategia de tamización.
Otra trampa: repetir citología porque ya la tuvo hace 2 años, sin reconocer que a los 34 años la preferida es ADN VPH, no citología rutinaria.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar edad de la paciente (34 años → ventana 30-65).
2. Aplicar estrategia preferida: ADN VPH de alto riesgo (Res. 3280 Colombia).
3. No modificar la estrategia por tabaquismo ni por citología previa negativa.
4. Continuar seguimiento según resultado de VPH (negativo = ampliar intervalo; positivo = algoritmo de derivación).

Perlas de examen
✅ 30-65 años en Colombia = ADN VPH de alto riesgo como estrategia preferida.
✅ 25-29 años = citología cervical cada 3 años.
✅ Tabaquismo aumenta progresión, pero NO cambia la estrategia de tamización por edad.
✅ Citología negativa previa no exime de tamización actual si está en ventana etaria.
✅ VPH negativo = riesgo muy bajo; permite intervalos más amplios.
✅ Res. 3280 es la referencia clave para tamización en APS colombiana.

Referencias
• Resolución 3280 de 2018 — Ruta de Promoción y Mantenimiento de la Salud (Colombia).
• OMS: Cervical Cancer Screening Guidelines.
• INC Colombia — Guías de tamización de cáncer de cuello uterino.
• USPSTF: Cervical Cancer Screening.
• UpToDate: Screening for cervical cancer.`,
  },
  {
    id: "dr-q-112",
    examArea: "Atención Primaria en Salud / Prevención cardiovascular",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "prevencion", "cardiovascular", "estilo_vida"],
    statement:
      "Hombre de 52 años con diagnóstico reciente de hipertensión arterial. Al examen físico presenta IMC de 31 kg/m². Trae laboratorios que muestran glucemia en ayunas de 108 mg/dL, HbA1c de 5.9%, creatinina de 0.9 mg/dL y colesterol LDL de 155 mg/dL. No refiere síntomas cardiovasculares ni limitación funcional. ¿Cuál es la intervención de prevención primaria más costo-efectiva y prioritaria en este escenario?",
    options: [
      { id: "A", label: "A", text: "Iniciar aspirina a dosis baja de forma indefinida." },
      {
        id: "B",
        label: "B",
        text: "Solicitar prueba de esfuerzo para descartar enfermedad coronaria silente.",
      },
      {
        id: "C",
        label: "C",
        text: "Implementar un programa estructurado de modificación del estilo de vida con reducción de peso, actividad física regular y cambios dietarios.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar ecografía Doppler carotídea como tamización cardiovascular.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Obesidad, hipertensión, prediabetes y dislipidemia coexisten. La modificación intensiva del estilo de vida es la intervención con mayor impacto poblacional, mejor relación costo-beneficio y capacidad de modificar simultáneamente todos los factores de riesgo.",
    keyPoints: [
      "Cuando veas: paciente asintomático con HTA + obesidad + prediabetes + dislipidemia coexistiendo.",
      "Debes pensar en: prevención primaria CV → modificación estructurada del estilo de vida como intervención más costo-efectiva.",
      "Pérdida del 5-10% del peso mejora simultáneamente PA, glucemia y perfil lipídico.",
      "Aspirina en prevención primaria tiene beneficio limitado vs riesgo de sangrado; no es la prioridad aquí.",
      "Tema: Prevención cardiovascular primaria — estilo de vida en APS.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de prevención cardiovascular en APS porque evalúa una trampa frecuente: ante múltiples factores de riesgo, no iniciar farmacoterapia agresiva ni estudios invasivos, sino la intervención con mayor impacto poblacional y mejor relación costo-beneficio.

La clave no es aspirina, prueba de esfuerzo ni Doppler carotídeo en un asintomático.
La clave es:
Múltiples factores de riesgo modificables + asintomático = programa estructurado de modificación del estilo de vida como intervención prioritaria.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 52 años con hipertensión arterial recién diagnosticada.
• Obesidad (IMC 31 kg/m²), prediabetes (glucemia 108 mg/dL, HbA1c 5.9%) y dislipidemia (LDL 155 mg/dL).
• Sin síntomas cardiovasculares ni limitación funcional.
• Cuatro factores de riesgo modificables coexistiendo en un escenario típico de prevención primaria en APS.

Recordemos la prevención cardiovascular primaria:
• La modificación del estilo de vida impacta simultáneamente peso, presión arterial, glucemia y lípidos.
• Pérdida del 5-10% del peso corporal mejora de forma significativa todos estos parámetros.
• Es la intervención con mayor impacto poblacional y mejor relación costo-beneficio antes de farmacoterapia agresiva.
• Aspirina en prevención primaria: beneficio limitado frente al riesgo de sangrado en pacientes de riesgo intermedio.
• No se recomienda tamización cardiovascular indiscriminada (prueba de esfuerzo, Doppler carotídeo) en asintomáticos.

Por lo tanto:
La intervención más costo-efectiva y prioritaria es implementar un programa estructurado de modificación del estilo de vida.

¿Por qué la opción C es la respuesta correcta?
Un programa estructurado de reducción de peso, actividad física regular y cambios dietarios modifica simultáneamente todos los factores de riesgo presentes.
Tiene la mejor relación costo-beneficio, es accesible en APS y debe preceder a intervenciones farmacológicas agresivas o estudios de imagen en un paciente asintomático.
La evidencia (AHA, ADA, ESC) posiciona el estilo de vida como piedra angular de la prevención primaria.

¿Por qué fallan las otras opciones?
Opción A (aspirina a dosis baja indefinida): en prevención primaria el beneficio es limitado frente al riesgo de sangrado; no es la prioridad con factores de riesgo modificables no tratados.
Opción B (prueba de esfuerzo): no se indica tamización cardiovascular indiscriminada en asintomáticos sin indicación específica.
Opción D (Doppler carotídeo): tamización no recomendada de forma rutinaria en prevención primaria sin indicación clínica concreta.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen aspirina porque ven múltiples factores de riesgo y piensan en prevención farmacológica inmediata.
Otra trampa: solicitar prueba de esfuerzo o Doppler carotídeo como "tamización cardiovascular", cuando la prioridad es modificar factores de riesgo antes de investigar enfermedad silente.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar factores de riesgo modificables coexistentes (HTA, obesidad, prediabetes, dislipidemia).
2. Priorizar intervención sobre estilo de vida estructurada (peso, dieta, actividad física).
3. Evaluar necesidad de farmacoterapia según metas individuales tras intervención sobre estilo de vida.
4. Reservar estudios invasivos y aspirina para indicaciones específicas, no como primera línea.

Perlas de examen
✅ Múltiples factores de riesgo modificables = estilo de vida primero, no aspirina ni estudios.
✅ Pérdida del 5-10% del peso mejora PA, glucemia y lípidos simultáneamente.
✅ Aspirina en prevención primaria: beneficio limitado vs riesgo de sangrado.
✅ No tamización CV indiscriminada (prueba de esfuerzo, Doppler) en asintomáticos.
✅ Prevención primaria en APS = intervención más costo-efectiva antes de farmacoterapia agresiva.
✅ AHA, ADA y ESC posicionan estilo de vida como piedra angular de prevención primaria.

Referencias
• AHA/ACC Guideline on the Primary Prevention of Cardiovascular Disease.
• ADA Standards of Care in Diabetes.
• ESC Guidelines on Cardiovascular Disease Prevention.
• USPSTF: Statin Use for Primary Prevention.
• UpToDate: Overview of primary prevention of coronary heart disease.`,
  },
  {
    id: "dr-q-113",
    examArea: "Atención Primaria en Salud / Inmunizaciones",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "vacunacion", "influenza", "neumococo"],
    statement:
      "Mujer de 68 años con antecedente de EPOC (GOLD B) y diabetes mellitus tipo 2 compensada. Acude a consulta externa en el mes de abril. Al revisar su carné de vacunación se evidencia que recibió la vacuna contra influenza hace 14 meses y una dosis de vacuna conjugada antineumocócica (PCV13) a los 65 años. ¿Cuál es la recomendación de inmunización inmediata más adecuada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "No requiere ninguna vacuna en este momento porque ya recibió PCV13.",
      },
      { id: "B", label: "B", text: "Aplicar únicamente una nueva dosis anual de vacuna contra influenza." },
      {
        id: "C",
        label: "C",
        text: "Aplicar vacuna contra influenza y completar el esquema antineumocócico con PPSV23.",
      },
      { id: "D", label: "D", text: "Repetir PCV13 y diferir cualquier otra vacunación." },
    ],
    correctOptionId: "C",
    explanation:
      "Factores de riesgo importantes (≥65 años, EPOC, diabetes). Debe recibir vacunación anual contra influenza (última dosis hace 14 meses) y completar protección antineumocócica con PPSV23 tras PCV13 previa.",
    keyPoints: [
      "Cuando veas: adulto ≥65 años con EPOC + diabetes y carné con influenza caducada (>12 meses) + PCV13 previa sin PPSV23.",
      "Debes pensar en: influenza anual obligatoria + completar esquema antineumocócico con PPSV23 tras PCV13.",
      "Esquema clásico adultos: PCV13 seguida de PPSV23 para ampliar cobertura serológica.",
      "No repetir PCV13 rutinariamente; tener solo PCV13 no significa esquema completo.",
      "Tema: Vacunación adulto mayor — influenza anual y esquema antineumocócico.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de inmunizaciones en APS porque evalúa una trampa frecuente: ante un adulto mayor con PCV13 previa, asumir que el esquema antineumocócico está completo e ignorar la influenza caducada.

La clave no es omitir vacunas ni repetir PCV13.
La clave es:
≥65 años + EPOC + diabetes + influenza caducada + PCV13 sin PPSV23 = aplicar influenza anual y completar con PPSV23 ahora.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 68 años con EPOC GOLD B y diabetes mellitus tipo 2 compensada.
• Consulta en abril con carné de vacunación desactualizado.
• Última vacuna contra influenza hace 14 meses (caducada para protección óptima).
• Recibió PCV13 a los 65 años, pero nunca recibió PPSV23.
• Alto riesgo de complicaciones respiratorias graves por edad y comorbilidades.

Recordemos el esquema de vacunación en adultos con comorbilidades:
• Influenza: vacunación anual obligatoria; la protección disminuye con el tiempo.
• Esquema antineumocócico clásico: PCV13 (conjugada) seguida de PPSV23 (polisacárida) para ampliar cobertura.
• Tener solo PCV13 NO significa esquema antineumocócico completo.
• No se repite PCV13 rutinariamente; lo pendiente es PPSV23.
• EPOC + diabetes + edad avanzada = alto riesgo de complicaciones por influenza y neumococo.

Por lo tanto:
La recomendación inmediata es aplicar vacuna contra influenza y completar el esquema antineumocócico con PPSV23.

¿Por qué la opción C es la respuesta correcta?
La influenza requiere dosis anual; la última fue hace 14 meses y debe renovarse.
El esquema antineumocócico está incompleto: PCV13 sin PPSV23 no ofrece cobertura serológica amplia.
Ambas vacunas son prioritarias en un adulto mayor con EPOC y diabetes, sin contraindicación aparente.

¿Por qué fallan las otras opciones?
Opción A (no requiere vacuna porque ya recibió PCV13): el esquema está incompleto sin PPSV23 y la influenza está caducada.
Opción B (solo influenza): omite completar la protección antineumocócica pendiente con PPSV23.
Opción D (repetir PCV13): no se indica repetir PCV13 rutinariamente; lo que falta es PPSV23, no una segunda dosis de conjugada.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen "no requiere vacuna" porque ven PCV13 en el carné y asumen esquema completo.
Otra trampa: aplicar solo influenza e ignorar PPSV23 pendiente, o repetir PCV13 en lugar de completar con polisacárida.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Verificar fecha de última influenza (anual obligatoria).
2. Revisar esquema antineumocócico: PCV13 → PPSV23 (secuencia clásica).
3. Aplicar ambas vacunas pendientes si no hay contraindicación.
4. No repetir PCV13 rutinariamente; completar con PPSV23.

Perlas de examen
✅ Influenza = vacunación anual obligatoria en adultos de riesgo.
✅ PCV13 + PPSV23 = esquema clásico antineumocócico en adultos.
✅ Tener PCV13 NO significa esquema completo; falta PPSV23.
✅ No repetir PCV13 rutinariamente.
✅ EPOC + diabetes + ≥65 años = alto riesgo; vacunar ambas (influenza + PPSV23).
✅ Revisar carné de vacunación en cada consulta de APS.

Referencias
• CDC Adult Immunization Schedule.
• PAI Colombia — Esquema de vacunación.
• GOLD Report — EPOC y vacunación.
• ACIP Recommendations: Pneumococcal and Influenza Vaccines.
• UpToDate: Pneumococcal vaccination in adults.`,
  },
  {
    id: "dr-q-114",
    examArea: "Atención Primaria en Salud / Tamización",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "tamizacion", "colorrectal", "cribado"],
    statement:
      "Hombre de 45 años que consulta por primera vez para evaluación preventiva. Niega antecedentes médicos de importancia, síntomas gastrointestinales o antecedentes familiares conocidos de cáncer colorrectal. Presión arterial promedio de dos tomas: 138/88 mmHg. Riesgo cardiovascular a 10 años calculado mediante ASCVD Score: 4.5%. ¿Cuál es la conducta de tamización para cáncer colorrectal más indicada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "No realizar tamización hasta los 50 años porque es un paciente de bajo riesgo.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar colonoscopia inmediata como única estrategia válida de tamización.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar tamización para cáncer colorrectal desde este momento mediante una estrategia validada de cribado.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar sangre oculta en materia fecal únicamente si desarrolla síntomas digestivos.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Se recomienda iniciar tamización del cáncer colorrectal en adultos de riesgo promedio a partir de los 45 años, incluso sin síntomas ni factores de riesgo adicionales.",
    keyPoints: [
      "Cuando veas: adulto de 45 años en consulta preventiva, asintomático, sin antecedentes familiares de cáncer colorrectal.",
      "Debes pensar en: iniciar tamización colorrectal desde los 45 años en riesgo promedio con cualquier estrategia validada.",
      "USPSTF y ACS bajaron la edad de inicio de cribado de 50 a 45 años en personas de riesgo promedio.",
      "Colonoscopia no es la única estrategia válida: SOH, FIT, ADN fecal y colonoscopia son opciones aceptadas.",
      "Tema: Tamización de cáncer colorrectal — inicio a los 45 años en APS.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de tamización en APS porque evalúa un cambio reciente en las guías: el cáncer colorrectal ya no se pospone hasta los 50 años en personas de riesgo promedio.

La clave no es esperar hasta los 50 años, reservar colonoscopia como única opción ni tamizar solo cuando aparezcan síntomas.
La clave es:
Adulto de 45 años + riesgo promedio + asintomático = iniciar cribado colorrectal ya con una estrategia validada (SOH, FIT, ADN fecal o colonoscopia).

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 45 años en primera consulta preventiva, sin síntomas gastrointestinales.
• Sin antecedentes familiares conocidos de cáncer colorrectal.
• Riesgo cardiovascular bajo (ASCVD 4.5%) pero edad que ya activa tamización colorrectal.
• Escenario típico de cribado en persona de riesgo promedio: detectar lesiones antes de síntomas.

Recordemos la tamización colorrectal:
• USPSTF y ACS recomiendan iniciar tamización a los 45 años en adultos de riesgo promedio.
• Estrategias válidas: sangre oculta en heces (SOH), FIT, ADN fecal o colonoscopia según disponibilidad y preferencia.
• La colonoscopia no es la única opción aceptada; hay múltiples métodos de cribado equivalentes según guía.
• La tamización busca detectar adenomas y cáncer en fase precoz en personas asintomáticas.
• El riesgo cardiovascular calculado no modifica la indicación de cribado colorrectal por edad.

Por lo tanto:
La conducta más indicada es iniciar tamización para cáncer colorrectal desde este momento mediante una estrategia validada de cribado.

¿Por qué la opción C es la respuesta correcta?
A los 45 años, en riesgo promedio y sin síntomas, las guías actuales (USPSTF, ACS, Res. 3280 Colombia) indican iniciar cribado.
Cualquier estrategia validada (SOH, FIT, ADN fecal o colonoscopia) es aceptable según contexto y recursos disponibles.

¿Por qué fallan las otras opciones?
Opción A (no tamizar hasta los 50 años): desactualizado; el inicio recomendado bajó a los 45 años en riesgo promedio.
Opción B (colonoscopia como única estrategia válida): hay múltiples métodos de cribado aceptados; colonoscopia no es obligatoria como primera línea.
Opción D (SOH solo si hay síntomas): la tamización es precisamente en personas asintomáticas para detectar enfermedad precoz.

¿Cuál es la trampa del examen?
Muchos estudiantes recuerdan "tamización colorrectal a los 50" y eligen esperar cinco años más.
Otra trampa: pensar que colonoscopia es la única estrategia válida, cuando FIT, SOH y ADN fecal también son opciones aceptadas.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar edad y riesgo (45 años, riesgo promedio, asintomático).
2. Recordar el cambio de guía: inicio a los 45 años, no a los 50.
3. Ofrecer cualquier estrategia validada de cribado según disponibilidad.
4. No condicionar la tamización a síntomas digestivos ni a riesgo cardiovascular.

Perlas de examen
✅ Tamización colorrectal inicia a los 45 años en riesgo promedio (USPSTF, ACS).
✅ Estrategias válidas: SOH, FIT, ADN fecal, colonoscopia.
✅ Colonoscopia no es la única opción válida.
✅ Tamización = detectar enfermedad antes de síntomas en asintomáticos.
✅ El ASCVD score no modifica la indicación de cribado colorrectal por edad.
✅ Res. 3280 Colombia alinea tamización colorrectal con guías internacionales.

Referencias
• USPSTF: Colorectal Cancer Screening.
• ACS Guidelines for Colorectal Cancer Screening.
• Resolución 3280 de 2018 — Tamización en Colombia.
• UpToDate: Screening for colorectal cancer.`,
  },
  {
    id: "dr-q-115",
    examArea: "Atención Primaria en Salud / Salud Pública",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "salud_publica", "brote", "vigilancia"],
    statement:
      "En una comunidad rural se reporta un aumento inusual de casos de fiebre, mialgias y exantema durante las últimas dos semanas. Como médico de Atención Primaria en Salud (APS), usted identifica que el 60% de los afectados viven cerca de un depósito de agua estancada. ¿Cuál es la primera acción de Salud Pública que debe liderar?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar tratamiento antibiótico empírico masivo a toda la población expuesta.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar pruebas diagnósticas individuales a todos los habitantes de la comunidad antes de intervenir.",
      },
      {
        id: "C",
        label: "C",
        text: "Notificar inmediatamente el posible brote al sistema de vigilancia epidemiológica e iniciar la investigación de campo y control de la fuente.",
      },
      {
        id: "D",
        label: "D",
        text: "Esperar la confirmación etiológica de todos los casos antes de implementar medidas comunitarias.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Aumento inusual de casos con características epidemiológicas comunes = sospecha de brote. Prioridad: activar vigilancia epidemiológica e implementar medidas de control oportunas sin esperar confirmación de todos los casos.",
    keyPoints: [
      "Cuando veas: aumento inusual de casos con características epidemiológicas comunes y posible fuente compartida.",
      "Debes pensar en: brote epidémico → notificar inmediatamente al sistema de vigilancia e iniciar investigación de campo.",
      "Brote = número de casos superior al esperado para población, lugar y periodo.",
      "No esperar confirmación etiológica completa para implementar medidas de control comunitario.",
      "Tema: Respuesta a brotes — vigilancia epidemiológica en APS.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de salud pública en APS porque evalúa una trampa frecuente: ante un posible brote, tratar masivamente o esperar confirmación etiológica antes de actuar, en lugar de activar vigilancia y control de la fuente.

La clave no es antibiótico empírico masivo ni pruebas diagnósticas a toda la población antes de intervenir.
La clave es:
Aumento inusual de casos + fuente común sospechada = notificar al sistema de vigilancia epidemiológica e iniciar investigación de campo y control de la fuente de inmediato.

¿Qué está ocurriendo realmente?
El escenario presenta:
• Aumento inusual de casos de fiebre, mialgias y exantema en una comunidad rural en las últimas 2 semanas.
• El 60% de los afectados vive cerca de un depósito de agua estancada: posible fuente común.
• El médico de APS detecta un patrón epidemiológico que supera lo esperado para esa población y periodo.
• Cuadro compatible con brote epidémico (dengue, leptospirosis u otro arbovirus/zoonosis según contexto).

Recordemos la respuesta ante un posible brote:
• Brote = número de casos superior al esperado para población, lugar y tiempo.
• La primera acción es notificar al sistema de vigilancia epidemiológica (INS en Colombia).
• Debe iniciarse investigación de campo y control de la fuente sin esperar confirmación etiológica de todos los casos.
• El médico de APS tiene rol clave en detección temprana y protección comunitaria.
• Tratamiento masivo empírico o tamización universal retrasa el control de la transmisión.

Por lo tanto:
La primera acción de salud pública es notificar inmediatamente el posible brote al sistema de vigilancia epidemiológica e iniciar la investigación de campo y control de la fuente.

¿Por qué la opción C es la respuesta correcta?
La notificación oportuna activa la cadena de respuesta epidemiológica (investigación, confirmación selectiva, control vectorial/fuente).
No se debe esperar confirmación etiológica de todos los casos para implementar medidas comunitarias de control.
El APS es la primera línea de detección y debe liderar la respuesta inicial coordinada con vigilancia.

¿Por qué fallan las otras opciones?
Opción A (antibiótico empírico masivo a toda la población): inadecuado sin caracterizar el brote; puede ser inútil o dañino si la etiología es viral o zoonótica.
Opción B (pruebas diagnósticas a todos antes de intervenir): retrasa el control de la transmisión; la investigación selectiva es suficiente inicialmente.
Opción D (esperar confirmación etiológica completa): viola el principio de respuesta oportuna en salud pública; cada hora de retraso amplifica la transmisión.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen tratamiento masivo empírico pensando en "proteger a la población".
Otra trampa: esperar confirmación de todos los casos antes de actuar, confundiendo rigor diagnóstico individual con respuesta epidemiológica comunitaria.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer patrón de brote (casos > esperado + posible fuente común).
2. Notificar inmediatamente al sistema de vigilancia epidemiológica.
3. Iniciar investigación de campo y control de la fuente (ej. eliminar agua estancada).
4. Confirmar etiología selectivamente, sin retrasar medidas de control comunitario.

Perlas de examen
✅ Brote = casos superiores al esperado para población, lugar y periodo.
✅ Primera acción: notificar + investigación de campo + control de fuente.
✅ No esperar confirmación etiológica completa para actuar.
✅ No antibiótico masivo empírico sin caracterizar el brote.
✅ APS = detección temprana y protección comunitaria.
✅ Fuente común (agua estancada) orienta medidas de control vectorial/ambiental.

Referencias
• INS Colombia — Protocolo de Vigilancia Epidemiológica.
• OPS: Investigación de Brotes Epidemiológicos.
• CDC: Principles of Epidemiology in Public Health Practice.
• Ley 09 de 1979 — Sistema Nacional de Vigilancia Epidemiológica (Colombia).
• UpToDate: Approach to the patient with fever in the tropics.`,
  },
  {
    id: "dr-q-116",
    examArea: "Atención Primaria en Salud / Accesibilidad",
    topic: "Atención Primaria en Salud",
    difficulty: "easy",
    tags: ["dr-q", "universal", "metodoq", "aps", "accesibilidad", "barreras", "cronicos"],
    statement:
      "Paciente femenina de 58 años con antecedentes de hipertensión arterial y diabetes mellitus. Durante una consulta de control se evidencia que no ha reclamado sus medicamentos en los últimos 3 meses. Al indagar, refiere que el centro de salud se encuentra a aproximadamente 2 horas de su vivienda, no dispone de recursos económicos para el transporte y vive sola. Desde la perspectiva de Atención Primaria en Salud (APS), este caso representa principalmente una falla en:",
    options: [
      { id: "A", label: "A", text: "Calidad técnico-científica de la atención." },
      { id: "B", label: "B", text: "Seguridad del paciente." },
      { id: "C", label: "C", text: "Accesibilidad a los servicios de salud." },
      { id: "D", label: "D", text: "Vigilancia epidemiológica." },
    ],
    correctOptionId: "C",
    explanation:
      "La principal barrera es la dificultad geográfica y económica para acceder a servicios y medicamentos. Corresponde a una falla en el acceso efectivo al sistema de salud.",
    keyPoints: [
      "Cuando veas: paciente crónico que no reclama medicamentos por distancia geográfica y falta de recursos para transporte.",
      "Debes pensar en: barrera de accesibilidad al sistema de salud, no desobediencia ni mala calidad clínica.",
      "Accesibilidad = posibilidad real de utilizar servicios cuando se necesitan.",
      "Barreras: geográfica, económica, organizacional y cultural → abandono involuntario del tratamiento.",
      "Tema: Accesibilidad a servicios de salud en APS.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de APS porque evalúa una trampa frecuente: cuando el paciente no recoge medicamentos, atribuirlo a desobediencia o mala calidad clínica en lugar de identificar barreras estructurales de acceso.

La clave no es calidad técnico-científica, seguridad del paciente ni vigilancia epidemiológica.
La clave es:
Paciente crónico + no reclama medicamentos + distancia geográfica + sin recursos para transporte = falla en accesibilidad a los servicios de salud.

¿Qué está ocurriendo realmente?
La paciente presenta:
• Mujer de 58 años con HTA y diabetes en consulta de control.
• No ha reclamado medicamentos en los últimos 3 meses.
• El centro de salud está a 2 horas de su vivienda.
• No dispone de recursos económicos para transporte y vive sola.
• Abandono involuntario del tratamiento por barreras geográficas y económicas, no por mala prescripción.

Recordemos la accesibilidad en APS:
• Accesibilidad = posibilidad real de utilizar los servicios de salud cuando se necesitan.
• Las barreras pueden ser geográficas (distancia), económicas (transporte), organizacionales (horarios, trámites) o culturales.
• Este caso es falla de acceso al sistema, no de calidad técnico-científica ni de seguridad del paciente.
• Las barreras de acceso generan inequidades y abandono involuntario del tratamiento crónico.
• El médico de APS debe identificar y abordar barreras estructurales, no solo ajustar la prescripción.

Por lo tanto:
Este caso representa principalmente una falla en la accesibilidad a los servicios de salud.

¿Por qué la opción C es la respuesta correcta?
La principal barrera es la dificultad geográfica y económica para acceder a servicios y medicamentos.
La paciente no puede utilizar el sistema de salud de forma efectiva a pesar de tener indicación correcta.
Accesibilidad es uno de los atributos esenciales de la APS según Starfield y la OMS.

¿Por qué fallan las otras opciones?
Opción A (calidad técnico-científica): el tratamiento puede ser correcto; el problema es que la paciente no puede acceder a él por barreras estructurales.
Opción B (seguridad del paciente): no hay error médico ni evento adverso por mala práctica clínica; es un problema de acceso, no de seguridad.
Opción D (vigilancia epidemiológica): no corresponde; es un problema de acceso individual/comunitario, no de detección de brotes.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen "calidad técnico-científica" porque la paciente no está controlada, confundiendo mal control por inaccesibilidad con mala prescripción.
Otra trampa: atribuir el abandono a desobediencia del paciente sin indagar barreras geográficas y económicas.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Indagar por qué el paciente no reclama medicamentos (no asumir desobediencia).
2. Identificar barreras de acceso (geográfica, económica, organizacional).
3. Clasificar como problema de accesibilidad, no de calidad clínica.
4. Proponer soluciones (medicina domiciliaria, entrega en punto cercano, apoyo social).

Perlas de examen
✅ No reclamar medicamentos ≠ desobediencia; indagar barreras de acceso.
✅ Accesibilidad = posibilidad real de utilizar servicios cuando se necesitan.
✅ Barreras: geográfica, económica, organizacional, cultural.
✅ Abandono involuntario del tratamiento crónico por barreras estructurales.
✅ Distancia + sin transporte = accesibilidad, no calidad técnica.
✅ APS debe identificar y abordar determinantes del acceso.

Referencias
• OMS: Primary Health Care — Now More Than Ever.
• OPS: Renovación de la Atención Primaria de Salud en las Américas.
• Starfield B: Primary Care — Concept, Evaluation, and Policy.
• Ley 1438 de 2011 — Sistema General de Seguridad Social en Salud (Colombia).
• UpToDate: Social determinants of health.`,
  },
  {
    id: "dr-q-117",
    examArea: "Atención Primaria en Salud / Salud mental",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "depresion", "adulto_mayor", "yesavage"],
    statement:
      "Hombre de 72 años consulta por cansancio y \"olvidos frecuentes\" de 6 meses de evolución. Vive solo desde que enviudó hace un año. Tiene antecedente de hipertensión arterial controlada. Al examen mental presenta afecto hiponímico, lenguaje enlentecido y escasa iniciativa. No se identifican ideas delirantes ni síntomas psicóticos. Se aplica la Escala de Depresión Geriátrica de Yesavage obteniendo 9/15 puntos, resultado sugestivo de depresión. ¿Cuál es la conducta más adecuada en Atención Primaria en Salud (APS)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Diagnosticar demencia y remitir a neurología para inicio de tratamiento específico.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar resonancia magnética cerebral urgente para descartar enfermedad neurodegenerativa.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar abordaje integral de depresión en el adulto mayor, evaluar riesgo suicida, apoyo social y seguimiento estrecho.",
      },
      {
        id: "D",
        label: "D",
        text: "Considerar los síntomas como cambios normales asociados al envejecimiento.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Síntomas compatibles con depresión en el adulto mayor y Yesavage sugestivo. En APS: confirmar diagnóstico clínico, valorar riesgo suicida, intervenir factores psicosociales y establecer seguimiento.",
    keyPoints: [
      "Cuando veas: adulto mayor con olvidos + viudez reciente + afecto hiponímico + Yesavage positivo (≥5 puntos).",
      "Debes pensar en: depresión geriátrica (pseudodemencia depresiva) antes que demencia neurodegenerativa.",
      "Yesavage es tamización, no diagnóstico definitivo; requiere abordaje clínico integral en APS.",
      "Evaluar riesgo suicida en adultos mayores que viven solos; tristeza persistente NO es envejecimiento normal.",
      "Tema: Depresión geriátrica — abordaje integral en APS.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de salud mental en APS porque evalúa una trampa frecuente: ante olvidos en el anciano, diagnosticar demencia y remitir a neurología sin considerar depresión reversible con contexto afectivo claro.

La clave no es demencia de entrada, RM cerebral urgente ni normalizar los síntomas como envejecimiento.
La clave es:
Olvidos + viudez reciente + afecto depresivo + Yesavage positivo = abordaje integral de depresión en APS con evaluación de riesgo suicida y apoyo social.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 72 años con cansancio y olvidos frecuentes de 6 meses de evolución.
• Viudez hace un año; vive solo desde entonces.
• Afecto hiponímico, lenguaje enlentecido y escasa iniciativa al examen mental.
• Sin ideas delirantes ni síntomas psicóticos.
• Escala de Depresión Geriátrica de Yesavage: 9/15 puntos, sugestiva de depresión.

Recordemos la depresión en el adulto mayor:
• La depresión puede manifestarse con quejas cognitivas que simulan demencia (pseudodemencia depresiva).
• Yesavage (GDS-15) es herramienta de tamización, no diagnóstico definitivo.
• Viudez reciente y aislamiento social son factores de riesgo importantes.
• En APS: confirmar diagnóstico clínico, evaluar riesgo suicida, intervenir factores psicosociales y establecer seguimiento estrecho.
• La tristeza persistente y el deterioro funcional NO son cambios normales del envejecimiento.

Por lo tanto:
La conducta más adecuada es iniciar abordaje integral de depresión en el adulto mayor, evaluar riesgo suicida, apoyo social y seguimiento estrecho.

¿Por qué la opción C es la respuesta correcta?
Los síntomas son compatibles con depresión geriátrica y el Yesavage es sugestivo (≥5 puntos indica tamización positiva).
El abordaje integral en APS incluye: confirmación clínica, valoración de riesgo suicida (especialmente en quien vive solo), intervención psicosocial y seguimiento.
Tratar depresión primero puede revertir las quejas cognitivas antes de etiquetar demencia irreversible.

¿Por qué fallan las otras opciones?
Opción A (diagnosticar demencia y remitir a neurología): prematuro sin tratar depresión reversible primero; la pseudodemencia depresiva mejora con tratamiento.
Opción B (RM cerebral urgente): no es la prioridad ante cuadro depresivo con contexto afectivo claro (viudez, aislamiento); la neuroimagen no es urgente.
Opción D (cambios normales del envejecimiento): la tristeza persistente, el Yesavage positivo y el deterioro funcional no son envejecimiento normal.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen demencia ante cualquier queja de olvidos en el anciano, sin considerar depresión con pseudodemencia.
Otra trampa: normalizar los síntomas como "parte del envejecimiento" e ignorar un Yesavage positivo con contexto de duelo reciente.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Aplicar Yesavage como tamización de depresión geriátrica.
2. Evaluar contexto psicosocial (viudez, aislamiento, duelo).
3. Iniciar abordaje integral de depresión con evaluación de riesgo suicida.
4. Reservar estudio de demencia para casos que no mejoran tras tratar depresión.

Perlas de examen
✅ Olvidos + viudez + Yesavage positivo = depresión primero, no demencia de entrada.
✅ Pseudodemencia depresiva: depresión simula deterioro cognitivo reversible.
✅ Yesavage ≥5 puntos = tamización positiva; requiere abordaje clínico integral.
✅ Evaluar riesgo suicida en adultos mayores que viven solos.
✅ Tristeza persistente NO es envejecimiento normal.
✅ Tratar depresión antes de etiquetar demencia irreversible.

Referencias
• Yesavage JA: Geriatric Depression Scale (GDS-15).
• OMS: Mental Health of Older Adults.
• Guías de Salud Mental en APS — Colombia.
• APA Practice Guideline: Treatment of Major Depressive Disorder.
• UpToDate: Diagnosis of depression in older adults.`,
  },
  {
    id: "dr-q-118",
    examArea: "Atención Primaria en Salud / Hipertensión",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "hipertension", "mapa", "diagnostico"],
    statement:
      "Paciente masculino de 48 años, con obesidad (IMC 32 kg/m²), consulta para valoración cardiovascular. En dos consultas diferentes presenta cifras tensionales de 146/94 mmHg y 142/92 mmHg. No presenta evidencia clínica de daño de órgano blanco ni síntomas cardiovasculares. Usted sospecha hipertensión arterial. ¿Cuál es el estándar de oro actual para confirmar el diagnóstico según la evidencia disponible en Atención Primaria en Salud?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Repetir la presión arterial en el consultorio durante tres consultas adicionales.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar monitoreo ambulatorio de presión arterial de 24 horas (MAPA).",
      },
      { id: "C", label: "C", text: "Solicitar ecocardiograma transtorácico." },
      {
        id: "D",
        label: "D",
        text: "Iniciar tratamiento antihipertensivo y reevaluar la respuesta clínica.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El MAPA es el método de referencia para confirmar hipertensión arterial. Permite detectar hipertensión sostenida, de bata blanca y enmascarada antes de etiquetar al paciente como hipertenso.",
    keyPoints: [
      "Cuando veas: PA elevada en consultorio en dos ocasiones distintas, sin daño de órgano blanco ni síntomas.",
      "Debes pensar en: confirmar HTA con MAPA de 24 horas antes de etiquetar e iniciar tratamiento crónico.",
      "MAPA = estándar de referencia para confirmar HTA; detecta HTA de bata blanca y enmascarada.",
      "Ecocardiograma evalúa daño orgánico, NO confirma el diagnóstico hipertensivo.",
      "Tema: Diagnóstico de hipertensión arterial — MAPA en APS.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de HTA en APS porque evalúa una trampa frecuente: ante cifras elevadas en consultorio, iniciar tratamiento crónico o repetir PA en consultorio, sin confirmar con el método de referencia actual.

La clave no es repetir PA en consultorio ni iniciar tratamiento empírico.
La clave es:
PA elevada en consultorio (146/94 y 142/92) + sospecha de HTA = confirmar diagnóstico con MAPA de 24 horas antes de etiquetar e iniciar terapia indefinida.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 48 años con obesidad (IMC 32 kg/m²) en valoración cardiovascular.
• Dos mediciones elevadas en consultorio en fechas diferentes: 146/94 y 142/92 mmHg.
• Sin evidencia clínica de daño de órgano blanco ni síntomas cardiovasculares.
• Sospecha de hipertensión arterial que requiere confirmación antes de tratamiento crónico.
• Posible componente de HTA de bata blanca o enmascarada que solo el MAPA detecta.

Recordemos el diagnóstico de HTA en APS:
• El monitoreo ambulatorio de presión arterial (MAPA) de 24 horas es el método de referencia para confirmar HTA.
• Permite distinguir HTA sostenida, de bata blanca y enmascarada.
• Confirmar el diagnóstico antes de etiquetar al paciente e iniciar terapia antihipertensiva indefinida.
• Ecocardiograma evalúa daño orgánico por HTA (hipertrofia ventricular), no confirma el diagnóstico.
• Repetir PA en consultorio es estrategia histórica, pero ya no es el estándar de oro.

Por lo tanto:
El estándar de oro actual para confirmar el diagnóstico es realizar MAPA de 24 horas.

¿Por qué la opción B es la respuesta correcta?
El MAPA es el método de referencia según guías actuales (ESH, ISH, guías locales).
Detecta patrones que las mediciones en consultorio no capturan: HTA de bata blanca (elevada solo en consultorio) y enmascarada (normal en consultorio, elevada fuera).
Permite tomar decisiones informadas sobre inicio de tratamiento crónico.

¿Por qué fallan las otras opciones?
Opción A (repetir PA en consultorio tres veces más): estrategia histórica válida, pero ya no es el estándar de oro; no detecta HTA enmascarada.
Opción C (ecocardiograma transtorácico): evalúa daño orgánico por HTA (hipertrofia ventricular izquierda), no confirma el diagnóstico hipertensivo.
Opción D (iniciar tratamiento y reevaluar): se debe confirmar antes de terapia crónica, salvo emergencia hipertensiva con daño de órgano blanco agudo.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen repetir PA en consultorio porque "ya la midieron dos veces", sin reconocer que MAPA es el estándar actual.
Otra trampa: solicitar ecocardiograma pensando en "confirmar HTA", cuando evalúa daño orgánico, no el diagnóstico mismo.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Detectar PA elevada en consultorio en al menos dos ocasiones.
2. Confirmar con MAPA de 24 horas (estándar de referencia).
3. Clasificar patrón: HTA sostenida, de bata blanca o enmascarada.
4. Iniciar tratamiento según confirmación, no antes (salvo emergencia).

Perlas de examen
✅ MAPA de 24 h = estándar de referencia para confirmar HTA.
✅ Detecta HTA de bata blanca y enmascarada.
✅ Ecocardiograma evalúa daño orgánico, NO confirma diagnóstico.
✅ Confirmar antes de terapia crónica indefinida.
✅ Repetir PA en consultorio ya no es el estándar de oro.
✅ ESH e ISH posicionan MAPA como método de referencia.

Referencias
• ESH/ESC Guidelines for the Management of Arterial Hypertension.
• ISH Global Hypertension Practice Guidelines.
• Guías de HTA en APS — Colombia.
• UpToDate: Ambulatory blood pressure monitoring.
• USPSTF: Screening for Hypertension in Adults.`,
  },
  {
    id: "dr-q-119",
    examArea: "Atención Primaria en Salud / Diabetes",
    topic: "Atención Primaria en Salud",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "aps", "diabetes", "albuminuria", "nefropatia"],
    statement:
      "Durante una jornada de salud enfocada en riesgo cardiovascular, un paciente de 55 años con diabetes mellitus adecuadamente controlada pregunta por qué debe realizarse una prueba anual de albuminuria si no presenta síntomas urinarios ni alteraciones evidentes en su estado de salud. Como médico de Atención Primaria en Salud, ¿cuál es la mejor explicación para justificar esta recomendación?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Porque la albuminuria permite diagnosticar infecciones urinarias asintomáticas antes de que produzcan complicaciones.",
      },
      {
        id: "B",
        label: "B",
        text: "Porque la albuminuria es un marcador temprano de daño renal y de riesgo cardiovascular, incluso antes de que aparezcan síntomas o aumente la creatinina sérica.",
      },
      {
        id: "C",
        label: "C",
        text: "Porque la albuminuria predice el desarrollo de cáncer renal en pacientes diabéticos.",
      },
      {
        id: "D",
        label: "D",
        text: "Porque la albuminuria es necesaria para decidir la dosis de insulina utilizada por el paciente.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La albuminuria detecta precozmente enfermedad renal diabética y estratifica riesgo cardiovascular, permitiendo intervenciones oportunas antes de manifestaciones clínicas o elevación de creatinina.",
    keyPoints: [
      "Cuando veas: paciente diabético asintomático que pregunta por qué necesita albuminuria anual sin síntomas urinarios.",
      "Debes pensar en: albuminuria = primer marcador detectable de nefropatía diabética y de riesgo cardiovascular.",
      "Puede aparecer con creatinina sérica normal; la nefropatía progresa silenciosamente años antes.",
      "Tamización anual de albuminuria en diabetes = prevención secundaria oportuna, no diagnóstico de ITU.",
      "Tema: Albuminuria en diabetes — tamización y riesgo cardiovascular.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de diabetes en APS porque evalúa una trampa frecuente: pensar que la albuminuria sirve para detectar infecciones urinarias o ajustar insulina, cuando su valor es detectar daño renal y riesgo CV de forma precoz.

La clave no es diagnosticar ITU asintomática, predecir cáncer renal ni decidir dosis de insulina.
La clave es:
Diabetes asintomática + albuminuria anual = detectar daño renal y riesgo cardiovascular antes de síntomas o elevación de creatinina.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 55 años con diabetes mellitus adecuadamente controlada.
• Sin síntomas urinarios ni alteraciones evidentes en su estado de salud.
• Pregunta por qué necesita prueba anual de albuminuria si se siente bien.
• La nefropatía diabética puede progresar silenciosamente años antes de elevar la creatinina.
• La albuminuria refleja daño glomerular y disfunción endotelial sistémica.

Recordemos la albuminuria en diabetes:
• La microalbuminuria es el primer hallazgo detectable de enfermedad renal diabética.
• Puede estar presente con creatinina sérica normal (filtrado glomerular aún preservado).
• También es marcador de disfunción endotelial y riesgo cardiovascular sistémico, no solo renal.
• La tamización anual en diabetes es prevención secundaria oportuna (ADA, KDIGO).
• Permite intervenciones tempranas: IECA/ARA-II, control glucémico estricto, control de PA.

Por lo tanto:
La mejor explicación es que la albuminuria es un marcador temprano de daño renal y de riesgo cardiovascular, incluso antes de síntomas o elevación de creatinina.

¿Por qué la opción B es la respuesta correcta?
La albuminuria detecta precozmente enfermedad renal diabética cuando la creatinina aún es normal.
También estratifica riesgo cardiovascular al reflejar disfunción endotelial sistémica.
La tamización anual permite intervenciones oportunas (IECA/ARA-II, control metabólico) antes de manifestaciones clínicas irreversibles.

¿Por qué fallan las otras opciones?
Opción A (diagnosticar ITU asintomáticas): la albuminuria no es prueba de infección urinaria; su propósito es detectar daño glomerular diabético.
Opción C (predecir cáncer renal): no es el propósito de la tamización de albuminuria en diabetes; no tiene valor predictivo para neoplasia renal.
Opción D (decidir dosis de insulina): la albuminuria no guía ajuste de insulina; orienta protección renal y cardiovascular.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen ITU asintomática porque la prueba es urinaria, confundiendo tamización de daño glomerular con diagnóstico infeccioso.
Otra trampa: pensar que si la creatinina es normal no hay daño renal, ignorando que la albuminuria precede a la elevación de creatinina por años.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Tamizar albuminuria anual en todo paciente diabético (ADA, KDIGO).
2. Interpretar como marcador precoz de nefropatía diabética y riesgo CV.
3. Iniciar IECA/ARA-II si albuminuria persistente, independiente de PA.
4. No esperar síntomas urinarios ni elevación de creatinina para actuar.

Perlas de examen
✅ Albuminuria = primer hallazgo detectable de nefropatía diabética.
✅ Puede aparecer con creatinina normal (filtrado preservado).
✅ También es marcador de riesgo cardiovascular sistémico.
✅ Tamización anual en diabetes = prevención secundaria oportuna.
✅ No es prueba de ITU ni guía dosis de insulina.
✅ IECA/ARA-II indicados si albuminuria persistente.

Referencias
• ADA Standards of Care in Diabetes.
• KDIGO Clinical Practice Guideline for CKD.
• Resolución 3280 de 2018 — Tamización en diabetes (Colombia).
• UpToDate: Diabetic kidney disease — Prevention and treatment.
• DCCT/EDIC Study: Albuminuria and cardiovascular risk.`,
  },
  {
    id: "dr-q-120",
    examArea: "Atención Primaria en Salud / Promoción de la salud",
    topic: "Atención Primaria en Salud",
    difficulty: "easy",
    tags: ["dr-q", "universal", "metodoq", "aps", "promocion", "determinantes_sociales", "obesidad"],
    statement:
      "Durante la implementación de una estrategia de promoción de la salud en un barrio con alta prevalencia de obesidad, usted decide trabajar con las tiendas locales para aumentar la disponibilidad de frutas y verduras y disminuir la visibilidad de bebidas azucaradas. ¿Cómo se clasifica este tipo de intervención?",
    options: [
      { id: "A", label: "A", text: "Prevención terciaria." },
      { id: "B", label: "B", text: "Tamización poblacional." },
      {
        id: "C",
        label: "C",
        text: "Intervención sobre determinantes sociales y ambientales de la salud.",
      },
      { id: "D", label: "D", text: "Prevención cuaternaria." },
    ],
    correctOptionId: "C",
    explanation:
      "La estrategia modifica el entorno comunitario para facilitar elecciones saludables, actuando sobre determinantes sociales y ambientales de la salud, no sobre el tratamiento individual.",
    keyPoints: [
      "Cuando veas: intervención comunitaria que modifica el entorno alimentario (más frutas/verduras, menos bebidas azucaradas visibles) en barrio con alta obesidad.",
      "Debes pensar en: intervención sobre determinantes sociales y ambientales de la salud, no prevención clínica individual.",
      "Los determinantes sociales son las condiciones donde las personas nacen, crecen, trabajan y envejecen.",
      "Promoción de la salud poblacional facilita elecciones saludables; no es tamización ni prevención terciaria.",
      "Tema: Promoción de la salud — determinantes sociales en APS.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de promoción de la salud en APS porque evalúa una trampa frecuente: clasificar como prevención terciaria o tamización una intervención que modifica el entorno comunitario, no el tratamiento individual.

La clave no es prevención terciaria, tamización poblacional ni prevención cuaternaria.
La clave es:
Intervención comunitaria que modifica disponibilidad y visibilidad de alimentos = actuar sobre determinantes sociales y ambientales de la salud.

¿Qué está ocurriendo realmente?
El escenario presenta:
• Estrategia de promoción de la salud en un barrio con alta prevalencia de obesidad.
• Intervención comunitaria con tiendas locales: aumentar frutas y verduras, disminuir visibilidad de bebidas azucaradas.
• Se modifica el entorno donde las personas toman decisiones alimentarias diarias.
• No es consulta clínica individual, tamización de enfermedad ni rehabilitación de pacientes con obesidad establecida.

Recordemos determinantes sociales y promoción de la salud:
• Los determinantes sociales son las condiciones en las que nacen, crecen, trabajan y envejecen (OMS).
• Modificar el entorno alimentario es intervención sobre determinantes ambientales que facilitan o dificultan elecciones saludables.
• La promoción de la salud actúa sobre factores poblacionales antes de que aparezca enfermedad individual.
• Prevención terciaria: reduce discapacidad de enfermedad ya establecida (rehabilitación, control de complicaciones).
• Tamización: busca enfermedad en aparentemente sanos; aquí no se diagnostica, se modifica el entorno.

Por lo tanto:
Esta intervención se clasifica como actuación sobre determinantes sociales y ambientales de la salud.

¿Por qué la opción C es la respuesta correcta?
Trabajar con tiendas locales para cambiar disponibilidad y visibilidad de alimentos modifica el entorno comunitario donde ocurren las decisiones alimentarias.
Es promoción de la salud poblacional orientada a facilitar elecciones saludables, alineada con la Carta de Ottawa y el enfoque de APS.

¿Por qué fallan las otras opciones?
Opción A (prevención terciaria): reduce discapacidad de enfermedad ya establecida; aquí se actúa sobre factores de riesgo poblacionales antes del tratamiento individual.
Opción B (tamización poblacional): busca enfermedad en aparentemente sanos; esta estrategia no diagnostica obesidad, modifica el entorno alimentario.
Opción D (prevención cuaternaria): evita intervenciones médicas innecesarias; no aplica a una estrategia comunitaria de promoción de la salud.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen prevención terciaria porque el barrio tiene alta prevalencia de obesidad y confunden "enfermedad frecuente" con "rehabilitación de enfermedad establecida".
Otra trampa: clasificar como tamización cualquier intervención poblacional, cuando tamizar implica buscar enfermedad, no modificar el entorno.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar si la intervención es individual o comunitaria (aquí: comunitaria con tiendas locales).
2. Preguntar si modifica el entorno, detecta enfermedad o trata complicaciones.
3. Si modifica condiciones donde las personas viven y eligen → determinantes sociales.
4. Diferenciar promoción de la salud (facilitar elecciones) de prevención terciaria (rehabilitar) y tamización (detectar).

Perlas de examen
✅ Modificar entorno alimentario = determinantes sociales/ambientales.
✅ Promoción de la salud facilita elecciones saludables a nivel poblacional.
✅ Prevención terciaria = reducir discapacidad de enfermedad establecida.
✅ Tamización = buscar enfermedad en aparentemente sanos.
✅ Prevención cuaternaria = evitar intervenciones médicas innecesarias.
✅ APS comunitaria actúa sobre condiciones donde viven las personas (Carta de Ottawa).

Referencias
• Carta de Ottawa para la Promoción de la Salud.
• OMS: Social Determinants of Health.
• OPS: Atención Primaria en Salud y promoción comunitaria.
• Resolución 3280 de 2018 — Promoción y prevención en Colombia.
• UpToDate: Overview of preventive medicine and health promotion.`,
  },
  {
    id: "dr-q-121",
    examArea: "Ciencias Básicas / Farmacología cardiovascular",
    topic: "Ciencias Básicas",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "fisiologia", "dobutamina", "inotropicos"],
    statement:
      "Paciente masculino de 68 años que ingresa a urgencias por dolor torácico opresivo de 3 horas de evolución. Al examen físico presenta PA 70/40 mmHg, FC 115 lpm, extremidades frías, diaforesis y llenado capilar de 5 segundos. El ECG evidencia supradesnivel del ST en V1-V6. Se diagnostica choque cardiogénico secundario a infarto agudo de miocardio anterior extenso y se inicia infusión de dobutamina. Quince minutos después se observa mejoría de la presión arterial y aumento del gasto cardíaco. A nivel celular, ¿cuál es el mecanismo fisiológico directo mediante el cual este fármaco incrementa la contractilidad miocárdica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Inhibición de la Na+/K+ ATPasa con aumento secundario del calcio intracelular.",
      },
      {
        id: "B",
        label: "B",
        text: "Estimulación de receptores β1 cardíacos con incremento de AMPc y entrada de calcio a la célula.",
      },
      {
        id: "C",
        label: "C",
        text: "Bloqueo de receptores muscarínicos cardíacos con aumento de la frecuencia cardíaca.",
      },
      {
        id: "D",
        label: "D",
        text: "Inhibición de la fosfodiesterasa con aumento primario de GMPc intracelular.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La dobutamina es un agonista β1 predominante. Su efecto inotrópico positivo ocurre por aumento del AMPc intracelular, favoreciendo apertura de canales de calcio y mayor disponibilidad de calcio para la contracción miocárdica.",
    keyPoints: [
      "Cuando veas: choque cardiogénico post-IAM con dobutamina y mejora de PA/gasto cardíaco, pregunta por mecanismo celular del efecto inotrópico.",
      "Debes pensar en: agonismo β1 cardíaco → ↑ AMPc → entrada de Ca²⁺ → mayor contractilidad miocárdica.",
      "Digoxina inhibe Na⁺/K⁺ ATPasa; milrinona inhibe fosfodiesterasa 3 (↑ GMPc). No confundir con dobutamina.",
      "El calcio intracelular regula la interacción actina-miosina; dobutamina es inotrópico de elección en bajo gasto con choque cardiogénico.",
      "Tema: Farmacología cardiovascular — mecanismo celular de la dobutamina.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de farmacología cardiovascular porque evalúa una trampa frecuente: confundir el mecanismo de la dobutamina con el de digoxina (Na⁺/K⁺ ATPasa) o milrinona (fosfodiesterasa 3).

La clave no es memorizar nombres de fármacos inotrópicos sin su vía molecular.
La clave es:
Dobutamina = β1 → AMPc → Ca²⁺ → contractilidad miocárdica.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 68 años con IAM anterior extenso (supradesnivel del ST en V1-V6).
• Choque cardiogénico: PA 70/40 mmHg, FC 115 lpm, extremidades frías, llenado capilar 5 s.
• Se inicia infusión de dobutamina; a los 15 min mejora PA y aumenta el gasto cardíaco.
• La pregunta pide el mecanismo fisiológico directo del efecto inotrópico positivo a nivel celular.

Recordemos la dobutamina y la señal β1-adrenérgica:
• Dobutamina es agonista β1 predominante en el miocardio.
• β1 → proteína Gs → activación de adenilato ciclasa → ↑ AMPc intracelular.
• PKA fosforila canales de calcio tipo L → mayor entrada de Ca²⁺ al miocito.
• Más calcio disponible para actina-miosina → mayor fuerza de contracción (inotropismo positivo).

Por lo tanto:
El mecanismo directo es estimulación de receptores β1 cardíacos con incremento de AMPc y entrada de calcio a la célula.

¿Por qué la opción B es la respuesta correcta?
La dobutamina actúa como agonista β1 en el miocardio, activando la vía adenilato ciclasa–AMPc–PKA que aumenta la entrada de calcio por canales tipo L. Este es el mecanismo celular clásico del efecto inotrópico positivo de la dobutamina en choque cardiogénico.

¿Por qué fallan las otras opciones?
Opción A (inhibición Na⁺/K⁺ ATPasa): mecanismo de la digoxina, no de la dobutamina; la digoxina inhibe la bomba sodio-potasio y eleva calcio por intercambiador Na/Ca.
Opción C (bloqueo muscarínico cardíaco): aumentaría FC por vía parasimpática, pero no explica el mecanismo inotrópico principal de la dobutamina.
Opción D (inhibición fosfodiesterasa ↑ GMPc): mecanismo de milrinona (inotrópico tipo PDE3), no de la dobutamina; la dobutamina actúa vía AMPc, no GMPc.

¿Cuál es la trampa del examen?
Muchos estudiantes mezclan los tres inotrópicos clásicos sin distinguir su vía molecular: digoxina = Na/K ATPasa, milrinona = PDE3 (↑ GMPc), dobutamina = β1 (↑ AMPc).
Otra trampa: elegir bloqueo muscarínico porque la dobutamina también puede aumentar FC, pero la pregunta pide el mecanismo inotrópico directo.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar el fármaco: dobutamina = agonista β1 predominante.
2. Seguir la cascada: β1 → Gs → adenilato ciclasa → AMPc.
3. Conectar con calcio: PKA → canales Ca²⁺ tipo L → ↑ calcio intracelular.
4. Resultado clínico: mayor contractilidad miocárdica en choque cardiogénico.

Perlas de examen
✅ Dobutamina = β1 → AMPc → Ca²⁺ → contractilidad.
✅ Digoxina = inhibe Na⁺/K⁺ ATPasa → ↑ Ca²⁺ por intercambiador Na/Ca.
✅ Milrinona = inhibe PDE3 → ↑ GMPc → inotropismo + vasodilatación.
✅ Inotrópico de elección en choque cardiogénico con bajo gasto cardíaco.
✅ El calcio regula la interacción actina-miosina en el miocardio.
✅ No confundir AMPc (β1/dobutamina) con GMPc (PDE3/milrinona).

Referencias
• Katzung & Trevor's Basic & Clinical Pharmacology.
• Goodman & Gilman's: The Pharmacological Basis of Therapeutics.
• Guyton & Hall: Textbook of Medical Physiology.
• Braunwald's Heart Disease.
• UpToDate: Use of inotropes in heart failure and cardiogenic shock.`,
  },
  {
    id: "dr-q-122",
    examArea: "Ciencias Básicas / Fisiopatología del choque",
    topic: "Ciencias Básicas",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "fisiopatologia", "sepsis", "vasoplejia", "inos"],
    statement:
      "Mujer de 72 años, procedente de un asilo, es llevada a urgencias por fiebre, obnubilación y disuria. Al examen físico presenta PA 75/40 mmHg, FC 125 lpm, temperatura de 39.2°C, extremidades calientes y rubicundas. Los gases arteriales muestran lactato de 5.5 mmol/L. Se diagnostica choque séptico. Tras recibir 3 litros de cristaloides persiste hipotensa y requiere vasopresores a dosis elevadas. ¿Cuál es la alteración fisiopatológica celular principal responsable de la vasoplejía refractaria observada en esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Inhibición de la síntesis de AMPc en el músculo liso vascular.",
      },
      {
        id: "B",
        label: "B",
        text: "Sobreexpresión de la óxido nítrico sintasa inducible (iNOS) con producción excesiva de óxido nítrico.",
      },
      {
        id: "C",
        label: "C",
        text: "Bloqueo de los canales de calcio tipo L del músculo liso vascular.",
      },
      {
        id: "D",
        label: "D",
        text: "Disminución de la producción de prostaciclinas por el endotelio vascular.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "En choque séptico, citoquinas inducen iNOS con producción masiva de NO. El NO activa guanilato ciclasa → ↑ GMPc → relajación del músculo liso vascular → vasoplejía refractaria.",
    keyPoints: [
      "Cuando veas: choque séptico con extremidades calientes, hipotensión refractaria pese a cristaloides y vasopresores a dosis altas.",
      "Debes pensar en: vasoplejía por sobreexpresión de iNOS → NO masivo → ↑ GMPc → relajación del músculo liso vascular.",
      "Choque séptico = choque distributivo; extremidades calientes y rubicundas reflejan ↓ resistencia vascular periférica.",
      "Hiporreactividad a catecolaminas contribuye a la hipotensión refractaria, pero la vía molecular central es iNOS–NO–GMPc.",
      "Tema: Fisiopatología del choque — vasoplejía en sepsis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de fisiopatología del choque porque evalúa una trampa frecuente: atribuir la vasoplejía séptica a falla de bomba cardíaca o a bloqueo de canales de calcio, cuando el mecanismo central es la sobreproducción de óxido nítrico vía iNOS.

La clave no es pensar en choque cardiogénico (extremidades frías) ni en falla de la vía AMPc.
La clave es:
Sepsis → iNOS → NO → GMPc → vasoplejía refractaria.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 72 años con fiebre (39.2°C), obnubilación, disuria y choque séptico.
• PA 75/40 mmHg, FC 125 lpm, lactato 5.5 mmol/L.
• Extremidades calientes y rubicundas: patrón de choque distributivo con vasodilatación periférica.
• Persiste hipotensa tras 3 litros de cristaloides; requiere vasopresores a dosis elevadas (vasoplejía refractaria).

Recordemos la vasoplejía en sepsis:
• Citoquinas proinflamatorias (TNF-α, IL-1, IL-6) inducen sobreexpresión de óxido nítrico sintasa inducible (iNOS) en músculo liso vascular y endotelio.
• iNOS produce NO masivo y sostenido (a diferencia de eNOS fisiológica).
• NO activa guanilato ciclasa soluble → ↑ GMPc → relajación del músculo liso vascular → vasodilatación generalizada.
• Resultado: resistencia vascular sistémica muy baja, hipotensión refractaria e hiporreactividad a catecolaminas.

Por lo tanto:
La alteración fisiopatológica celular principal es la sobreexpresión de iNOS con producción excesiva de óxido nítrico.

¿Por qué la opción B es la respuesta correcta?
En choque séptico avanzado, las citoquinas inducen iNOS, que genera NO en cantidades patológicas. El NO eleva GMPc en el músculo liso vascular, provocando vasodilatación masiva y vasoplejía refractaria que no responde adecuadamente a fluidos ni a dosis convencionales de vasopresores.

¿Por qué fallan las otras opciones?
Opción A (inhibición de síntesis de AMPc): el problema en sepsis es la vía GMPc por NO, no la inhibición de AMPc; de hecho, la vía β-adrenérgica (AMPc) está comprometida por hiporreactividad, no por inhibición primaria de síntesis.
Opción C (bloqueo de canales de calcio tipo L): los bloqueadores de calcio empeoran la hipotensión en choque séptico; no explican la vasoplejía, la agravan.
Opción D (disminución de prostaciclinas): aunque el endotelio puede estar disfuncional, la disminución de prostaciclinas no es el mecanismo principal de la vasoplejía refractaria en sepsis.

¿Cuál es la trampa del examen?
Muchos estudiantes confunden choque séptico (caliente, vasodilatado) con choque cardiogénico (frío, vasoconstricto).
Otra trampa: elegir bloqueo de canales de calcio porque "relajan" el músculo liso, sin reconocer que la vasoplejía séptica se explica por la vía NO–GMPc inducida por iNOS.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer choque séptico distributivo (extremidades calientes + hipotensión).
2. Identificar vasoplejía refractaria (hipotensión persistente pese a fluidos y vasopresores).
3. Recordar la cascada molecular: citoquinas → iNOS → NO → guanilato ciclasa → GMPc.
4. Conectar con clínica: vasodilatación generalizada e hiporreactividad a catecolaminas.

Perlas de examen
✅ Choque séptico caliente = distributivo con vasoplejía, no falla de bomba.
✅ iNOS → NO masivo → GMPc → relajación del músculo liso vascular.
✅ Vasoplejía refractaria: hipotensión pese a cristaloides y vasopresores altos.
✅ NO es el mediador central de la vasodilatación en sepsis avanzada.
✅ Bloqueadores de calcio empeoran la hipotensión en choque séptico.
✅ La hiporreactividad a catecolaminas es consecuencia, pero iNOS–NO es el mecanismo primario preguntado.

Referencias
• Harrison's Principles of Internal Medicine.
• Surviving Sepsis Campaign Guidelines.
• Marino's The ICU Book.
• UpToDate: Pathophysiology of sepsis.
• Vincent JL et al.: Sepsis and septic shock (Lancet).`,
  },
  {
    id: "dr-q-123",
    examArea: "Ciencias Básicas / Trastornos ácido-base",
    topic: "Ciencias Básicas",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "acidosis", "cad", "hipercloremica"],
    statement:
      "Hombre de 25 años con Diabetes Mellitus tipo 1, ingresa por cetoacidosis diabética severa. Gasometría inicial: pH 7.10, HCO₃⁻ 8 mEq/L, pCO₂ 25 mmHg, Na⁺ 140 mEq/L, Cl⁻ 98 mEq/L. Recibe reanimación con 6 litros de solución salina al 0.9% e infusión de insulina. Veinticuatro horas después, las cetonas son negativas, pero la gasometría muestra: pH 7.25, HCO₃⁻ 14 mEq/L, pCO₂ 30 mmHg, Na⁺ 145 mEq/L, Cl⁻ 118 mEq/L. ¿Cuál es el mecanismo fisiopatológico que explica la persistencia de la acidosis?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Producción persistente de cuerpos cetónicos por resistencia a la insulina.",
      },
      {
        id: "B",
        label: "B",
        text: "Acumulación de ácido láctico secundaria a hipoperfusión tisular persistente.",
      },
      {
        id: "C",
        label: "C",
        text: "Desarrollo de acidosis metabólica hiperclorémica por expansión del compartimento extracelular con solución salina.",
      },
      {
        id: "D",
        label: "D",
        text: "Retención renal de fosfatos con aumento del anión gap.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La cetoacidosis fue corregida (cetonas negativas). La administración masiva de NaCl 0.9% elevó el cloro sérico, produciendo acidosis metabólica hiperclorémica con anión gap normal.",
    keyPoints: [
      "Cuando veas: CAD resuelta (cetonas negativas) con acidosis persistente y Cl⁻ elevado tras reanimación con NaCl 0.9%.",
      "Debes pensar en: acidosis metabólica hiperclorémica por expansión del compartimento extracelular con solución salina.",
      "NaCl 0.9% aporta 154 mEq/L de Cl⁻; grandes volúmenes elevan cloro sérico y reducen bicarbonato por electroneutralidad.",
      "Persistencia de acidosis ≠ CAD activa si las cetonas ya son negativas y el anión gap se normalizó.",
      "Tema: Trastornos ácido-base — acidosis hiperclorémica post-CAD.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de trastornos ácido-base porque evalúa una trampa frecuente: asumir que la acidosis persistente tras tratar una CAD significa cetonas activas o acidosis láctica, cuando en realidad es acidosis hiperclorémica inducida por solución salina al 0.9%.

La clave no es buscar cetonas persistentes ni acidosis láctica.
La clave es:
CAD resuelta (cetonas negativas) + Cl⁻ elevado + acidosis = hipercloremia por NaCl 0.9%.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 25 años con DM1 y CAD severa inicial: pH 7.10, HCO₃⁻ 8 mEq/L, pCO₂ 25 mmHg, Cl⁻ 98 mEq/L.
• Recibe 6 litros de NaCl 0.9% e infusión de insulina.
• A las 24 h: cetonas negativas (CAD resuelta), pero persiste acidosis: pH 7.25, HCO₃⁻ 14 mEq/L.
• El cloro subió de 98 a 118 mEq/L: patrón de acidosis metabólica hiperclorémica con anión gap normal.

Recordemos acidosis hiperclorémica post-reanimación:
• NaCl 0.9% contiene 154 mEq/L de Na⁺ y 154 mEq/L de Cl⁻ (cloro suprafisiológico).
• Grandes volúmenes expanden el compartimento extracelular con exceso de Cl⁻.
• Por equilibrio de electroneutralidad, el exceso de Cl⁻ se compensa con ↓ bicarbonato → acidosis metabólica hiperclorémica.
• Cetonas negativas confirman resolución de la CAD; la acidosis restante no es por cuerpos cetónicos.

Por lo tanto:
El mecanismo es desarrollo de acidosis metabólica hiperclorémica por expansión del compartimento extracelular con solución salina.

¿Por qué la opción C es la respuesta correcta?
La CAD fue corregida (cetonas negativas, anión gap normalizado), pero la administración masiva de NaCl 0.9% elevó el cloro sérico de 98 a 118 mEq/L, produciendo acidosis metabólica hiperclorémica con anión gap normal. Este es un efecto iatrogénico bien documentado en el manejo de la CAD.

¿Por qué fallan las otras opciones?
Opción A (cetonas persistentes por resistencia a insulina): las cetonas ya son negativas; la CAD activa se resolvió con insulina.
Opción B (acidosis láctica por hipoperfusión): no explica el cloro de 118 mEq/L ni el patrón hiperclorémico con anión gap normal.
Opción D (retención de fosfatos con anión gap elevado): el anión gap se normalizó; el problema es el exceso de cloro, no un anión gap elevado.

¿Cuál es la trampa del examen?
Muchos estudiantes ven "acidosis persistente en CAD" y eligen cetonas activas o acidosis láctica, sin revisar que las cetonas ya son negativas y el cloro subió marcadamente.
Otra trampa: no reconocer que NaCl 0.9% es una fuente masiva de cloro que puede mantener acidosis aunque la CAD esté resuelta.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Confirmar resolución de CAD: cetonas negativas + anión gap normalizado.
2. Evaluar si persiste acidosis metabólica con bicarbonato bajo.
3. Revisar cloro sérico: si está elevado → acidosis hiperclorémica.
4. Correlacionar con volumen de NaCl 0.9% administrado.

Perlas de examen
✅ CAD resuelta + acidosis persistente + Cl⁻ ↑ = hipercloremia por NaCl 0.9%.
✅ NaCl 0.9% aporta 154 mEq/L de Cl⁻ (suprafisiológico).
✅ Exceso de Cl⁻ reduce HCO₃⁻ por electroneutralidad.
✅ Cetonas negativas descartan CAD activa como causa de acidosis restante.
✅ Anión gap normal orienta a acidosis hiperclorémica, no láctica ni por cetonas.
✅ Usar soluciones balanceadas (RL, Plasmalyte) reduce este riesgo en reanimación prolongada.

Referencias
• Harrison's Principles of Internal Medicine.
• ADA Standards of Medical Care in Diabetes.
• UpToDate: Diabetic ketoacidosis and hyperosmolar hyperglycemic state.
• UpToDate: Hyperchloremic metabolic acidosis.
• LITFL: Normal Saline and Hyperchloremic Acidosis.`,
  },
  {
    id: "dr-q-124",
    examArea: "Ciencias Básicas / Fisiología respiratoria",
    topic: "Ciencias Básicas",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "fisiologia", "epoc", "hipercapnia", "oxigeno"],
    statement:
      "Mujer de 65 años, fumadora pesada, con diagnóstico de EPOC severo. Ingresa por exacerbación infecciosa. Presenta disnea, cianosis y somnolencia. Gasometría inicial (FiO₂ 21%): pH 7.31, pCO₂ 58 mmHg, pO₂ 45 mmHg. Se administra oxígeno mediante mascarilla con reservorio a 15 L/min (FiO₂ cercana al 100%). Treinta minutos después la SpO₂ aumenta a 98%, pero la paciente desarrolla deterioro progresivo del estado de conciencia hasta coma hipercápnico. Gasometría de control: pH 7.15, pCO₂ 85 mmHg, pO₂ 120 mmHg. ¿Cuál es el mecanismo fisiopatológico primario que explica el empeoramiento agudo de la hipercapnia tras la oxigenoterapia?",
    options: [
      { id: "A", label: "A", text: "Supresión completa del estímulo respiratorio hipóxico." },
      {
        id: "B",
        label: "B",
        text: "Aumento de la producción metabólica de CO₂ por hiperoxia.",
      },
      {
        id: "C",
        label: "C",
        text: "Reversión de la vasoconstricción pulmonar hipóxica con incremento del desajuste ventilación/perfusión (V/Q).",
      },
      {
        id: "D",
        label: "D",
        text: "Disminución aguda de la afinidad de la hemoglobina por el oxígeno.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La hiperoxia revierte la vasoconstricción pulmonar hipóxica, desviando flujo hacia alveolos mal ventilados y empeorando el desajuste V/Q. Este es el mecanismo principal de hipercapnia inducida por oxígeno en EPOC.",
    keyPoints: [
      "Cuando veas: EPOC severo con hipercapnia que empeora tras oxigenoterapia a alto flujo (SpO₂ ↑ pero pCO₂ ↑ y coma hipercápnico).",
      "Debes pensar en: reversión de vasoconstricción pulmonar hipóxica → empeoramiento del desajuste V/Q como mecanismo primario.",
      "La vasoconstricción hipóxica redirige flujo sanguíneo hacia alvéolos mejor ventilados; la hiperoxia la abole.",
      "Supresión del estímulo hipóxico y efecto Haldane contribuyen, pero no son el mecanismo principal de la hipercapnia inducida por O₂.",
      "Tema: Fisiología respiratoria — hipercapnia inducida por oxígeno en EPOC.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de fisiología respiratoria porque evalúa una trampa frecuente: atribuir la hipercapnia inducida por oxígeno en EPOC exclusivamente a la "supresión del estímulo hipóxico", cuando el mecanismo primario es el empeoramiento del desajuste ventilación-perfusión (V/Q).

La clave no es pensar que el O₂ "apaga" completamente el centro respiratorio como única explicación.
La clave es:
Hiperoxia → abolición de vasoconstricción hipóxica → peor V/Q → ↑ pCO₂ → coma hipercápnico.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 65 años, fumadora, con EPOC severo en exacerbación infecciosa.
• Disnea, cianosis, somnolencia; gasometría inicial (FiO₂ 21%): pH 7.31, pCO₂ 58, pO₂ 45 mmHg.
• Recibe O₂ con mascarilla reservorio a 15 L/min (FiO₂ ~100%): SpO₂ sube a 98%.
• Treinta minutos después: deterioro progresivo hasta coma hipercápnico; pH 7.15, pCO₂ 85, pO₂ 120 mmHg.

Recordemos la hipercapnia inducida por oxígeno en EPOC:
• En EPOC, la vasoconstricción pulmonar hipóxica es un mecanismo de defensa: redirige flujo sanguíneo lejos de alvéolos mal ventilados hacia los mejor ventilados.
• La hiperoxia revierte esta vasoconstricción → flujo sanguíneo aumenta hacia alvéolos mal ventilados.
• Resultado: empeoramiento del desajuste V/Q → menor eliminación de CO₂ → hipercapnia aguda y narcosis por CO₂.
• La supresión del estímulo hipóxico y el efecto Haldane (liberación de CO₂ por hemoglobina saturada) contribuyen secundariamente.

Por lo tanto:
El mecanismo fisiopatológico primario es la reversión de la vasoconstricción pulmonar hipóxica con incremento del desajuste V/Q.

¿Por qué la opción C es la respuesta correcta?
La hiperoxia abole la vasoconstricción hipóxica pulmonar, desviando perfusión hacia unidades alveolares mal ventiladas. Esto empeora el desajuste V/Q y reduce la eliminación de CO₂, explicando el aumento agudo de pCO₂ y el coma hipercápnico pese a la normalización de la SpO₂.

¿Por qué fallan las otras opciones?
Opción A (supresión completa del estímulo respiratorio hipóxico): contribuye al cuadro, pero la evidencia respaldada favorece el deterioro V/Q como mecanismo principal de la hipercapnia inducida por O₂ en EPOC.
Opción B (aumento de producción metabólica de CO₂ por hiperoxia): no es el mecanismo central; la hiperoxia no aumenta significativamente la producción de CO₂.
Opción D (disminución de afinidad de Hb por O₂): describe el efecto Haldane, que contribuye secundariamente a la retención de CO₂, pero no es el mecanismo primario preguntado.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen "supresión del estímulo hipóxico" porque es el concepto más citado en la enseñanza tradicional, pero las guías y la fisiología actual enfatizan el desajuste V/Q como mecanismo principal.
Otra trampa: pensar que más oxígeno siempre mejora al paciente con EPOC; aquí la SpO₂ sube pero el paciente empeora por retención de CO₂.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer EPOC severo con retención crónica de CO₂ en exacerbación.
2. Identificar empeoramiento agudo tras O₂ a alto flujo (paradójico: SpO₂ ↑, pCO₂ ↑).
3. Recordar: hiperoxia revierte vasoconstricción hipóxica → peor V/Q.
4. Meta de oxigenoterapia en EPOC grave: SpO₂ ~88-92%, no 98-100%.

Perlas de examen
✅ Hipercapnia inducida por O₂ en EPOC: mecanismo principal = empeoramiento V/Q.
✅ Vasoconstricción hipóxica protege redirigiendo flujo a alvéolos ventilados.
✅ Meta SpO₂ en EPOC grave: ~88-92% (GOLD).
✅ Supresión del estímulo hipóxico contribuye, pero no es el mecanismo primario.
✅ Efecto Haldane: Hb saturada libera CO₂ más fácilmente (contribución secundaria).
✅ O₂ a alto flujo en EPOC retenedor puede causar coma hipercápnico agudo.

Referencias
• West's Respiratory Physiology: The Essentials.
• GOLD Report: Global Strategy for COPD.
• Harrison's Principles of Internal Medicine.
• UpToDate: Oxygen-induced hypercapnia in COPD.
• Tobin MJ: Advances in mechanical ventilation (NEJM).`,
  },
  {
    id: "dr-q-125",
    examArea: "Ciencias Básicas / Farmacología cardiovascular",
    topic: "Ciencias Básicas",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "farmacologia", "digoxina", "hipopotasemia"],
    statement:
      "Hombre de 75 años con insuficiencia cardíaca con fracción de eyección reducida, en tratamiento crónico con digoxina, enalapril y furosemida. Consulta por náuseas, visión con halos amarillentos (xantopsia) y palpitaciones. El ECG muestra extrasístoles ventriculares frecuentes. Laboratorios: creatinina 1.1 mg/dL, K⁺ 2.8 mEq/L, Mg²⁺ 1.5 mg/dL. Se sospecha intoxicación digitálica. Desde el punto de vista farmacodinámico, ¿por qué la hipopotasemia facilita la toxicidad por digoxina en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Porque aumenta la eliminación renal de digoxina y genera metabolitos tóxicos.",
      },
      {
        id: "B",
        label: "B",
        text: "Porque disminuye la unión de digoxina a proteínas plasmáticas aumentando la fracción libre.",
      },
      {
        id: "C",
        label: "C",
        text: "Porque el potasio y la digoxina compiten por el mismo sitio de unión en la Na⁺/K⁺ ATPasa, aumentando la fijación de digoxina cuando el potasio disminuye.",
      },
      {
        id: "D",
        label: "D",
        text: "Porque favorece la degradación intracelular de la Na⁺/K⁺ ATPasa.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Potasio y digoxina compiten por la Na⁺/K⁺ ATPasa. Con hipopotasemia hay menor competencia, mayor unión de digoxina, mayor inhibición de la bomba y mayor toxicidad (mecanismo farmacodinámico).",
    keyPoints: [
      "Cuando veas: intoxicación digitálica (xantopsia, arritmias) en paciente con digoxina + diurético y K⁺ bajo (2.8 mEq/L).",
      "Debes pensar en: competencia farmacodinámica — K⁺ y digoxina compiten por el mismo sitio en la Na⁺/K⁺ ATPasa.",
      "↓ K⁺ = menor competencia → ↑ unión de digoxina → ↑ inhibición de la bomba → ↑ toxicidad (no es farmacocinético).",
      "Hipomagnesemia también favorece toxicidad digitálica y arritmias; corregir ambos electrolitos.",
      "Tema: Farmacología cardiovascular — toxicidad digitálica y hipopotasemia.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de farmacología cardiovascular porque evalúa una trampa frecuente: atribuir la potenciación de la toxicidad digitálica por hipopotasemia a cambios farmacocinéticos (eliminación renal, unión a proteínas), cuando el mecanismo es farmacodinámico por competencia en la Na⁺/K⁺ ATPasa.

La clave no es pensar que la hipopotasemia "elimina" digoxina o aumenta su fracción libre plasmática.
La clave es:
↓ K⁺ → menos competencia en Na⁺/K⁺ ATPasa → más unión de digoxina → más toxicidad.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 75 años con IC-FEr en digoxina, enalapril y furosemida (diurético que depleta K⁺).
• Náuseas, xantopsia (halos amarillentos) y extrasístoles ventriculares frecuentes.
• K⁺ 2.8 mEq/L y Mg²⁺ 1.5 mg/dL; creatinina 1.1 mg/dL (función renal conservada).
• Cuadro clásico de intoxicación digitálica con hipopotasemia e hipomagnesemia.

Recordemos la digoxina y la Na⁺/K⁺ ATPasa:
• Digoxina inhibe la Na⁺/K⁺ ATPasa → ↑ Na⁺ intracelular → intercambiador Na/Ca → ↑ Ca²⁺ → inotropismo positivo.
• Potasio y digoxina compiten por el mismo sitio de unión en la bomba sodio-potasio.
• Con hipopotasemia hay menor competencia por K⁺ → mayor afinidad/unión de digoxina → mayor inhibición de la bomba.
• Este es un mecanismo farmacodinámico (potenciación del efecto), no farmacocinético (niveles séricos).

Por lo tanto:
La hipopotasemia facilita la toxicidad porque el potasio y la digoxina compiten por el mismo sitio de unión en la Na⁺/K⁺ ATPasa, aumentando la fijación de digoxina cuando el potasio disminuye.

¿Por qué la opción C es la respuesta correcta?
Potasio y digoxina compiten por el sitio de unión externo de la Na⁺/K⁺ ATPasa. Con K⁺ bajo (2.8 mEq/L), hay menos competencia, lo que permite que más moléculas de digoxina se unan e inhiban la bomba, intensificando los efectos tóxicos (arritmias, xantopsia, náuseas) sin necesariamente elevar los niveles séricos de digoxina.

¿Por qué fallan las otras opciones?
Opción A (aumento de eliminación renal con metabolitos tóxicos): no es el mecanismo; la creatinina está normal y la hipopotasemia no aumenta metabolitos tóxicos de digoxina.
Opción B (disminución de unión a proteínas plasmáticas): no explica la competencia en la bomba sodio-potasio; es un mecanismo farmacocinético incorrecto para este escenario.
Opción D (degradación intracelular de la Na⁺/K⁺ ATPasa): no es el mecanismo de potenciación por hipopotasemia; la hipopotasemia aumenta la unión de digoxina, no degrada la bomba.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen mecanismos farmacocinéticos (eliminación renal, fracción libre) porque asocian "más toxicidad" con "más fármaco circulante", sin reconocer la competencia K⁺–digoxina a nivel de receptor.
Otra trampa: olvidar que furosemida depleta K⁺ y Mg²⁺, ambos factores que predisponen a intoxicación digitálica.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer cuadro de intoxicación digitálica: xantopsia + arritmias + GI.
2. Revisar electrolitos: K⁺ y Mg²⁺ (depleción por diuréticos).
3. Recordar competencia K⁺–digoxina en Na⁺/K⁺ ATPasa (farmacodinámico).
4. Corregir electrolitos antes y durante el manejo de la toxicidad.

Perlas de examen
✅ Digoxina inhibe Na⁺/K⁺ ATPasa → ↑ Ca²⁺ intracelular → inotropismo.
✅ K⁺ y digoxina compiten por el mismo sitio de unión en la bomba.
✅ ↓ K⁺ = ↑ unión de digoxina = ↑ toxicidad (farmacodinámico).
✅ Xantopsia + arritmias + hipopotasemia = intoxicación digitálica clásica.
✅ Hipomagnesemia también favorece toxicidad y arritmias digitálicas.
✅ Furosemida + digoxina = riesgo de depleción de K⁺/Mg²⁺ y toxicidad.

Referencias
• Katzung & Trevor's Basic & Clinical Pharmacology.
• Goodman & Gilman's: The Pharmacological Basis of Therapeutics.
• Braunwald's Heart Disease.
• UpToDate: Digitalis (cardiac glycoside) poisoning.
• Antman EM et al.: Treatment of cardiac glycoside intoxication (NEJM).`,
  },
  {
    id: "dr-q-126",
    examArea: "Ciencias Básicas / Fisiopatología cardiovascular",
    topic: "Ciencias Básicas",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "fisiopatologia", "reperfusion", "iam"],
    statement:
      "Hombre de 55 años consulta por dolor torácico opresivo de 4 horas de evolución. El ECG muestra un infarto agudo de miocardio con elevación del ST en cara anteroseptal. Es llevado a intervención coronaria percutánea primaria, logrando restablecer el flujo en la arteria descendente anterior. Minutos después de la reperfusión desarrolla arritmias ventriculares, aumento brusco de biomarcadores cardíacos y deterioro transitorio de la contractilidad miocárdica regional. ¿Cuál es el mecanismo patológico celular responsable de este daño tisular paradójico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Activación de la vía extrínseca de coagulación con formación de microtrombos intracoronarios.",
      },
      {
        id: "B",
        label: "B",
        text: "Producción masiva de especies reactivas de oxígeno con sobrecarga intracelular de calcio y daño mitocondrial.",
      },
      {
        id: "C",
        label: "C",
        text: "Inhibición de la fosforilación oxidativa por disminución aguda del oxígeno intracelular.",
      },
      {
        id: "D",
        label: "D",
        text: "Acumulación progresiva de cuerpos cetónicos dentro del miocito isquémico.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Lesión por reperfusión: restablecimiento súbito del flujo genera explosión de radicales libres (ROS), sobrecarga de calcio intracelular y daño mitocondrial, produciendo lesión adicional a la isquemia inicial.",
    keyPoints: [
      "Cuando veas: IAMCEST tratado con PCI exitosa + arritmias ventriculares y ↑ brusca de biomarcadores minutos después de la reperfusión.",
      "Debes pensar en: lesión por reperfusión (daño paradójico post-flujo, no isquemia inicial).",
      "Mecanismo central: explosión de ROS + sobrecarga intracelular de Ca²⁺ + apertura del poro de transición mitocondrial.",
      "Miocardio aturdido (stunning) y arritmias de reperfusión son manifestaciones clínicas; más oxígeno no siempre significa menos daño.",
      "Tema: Fisiopatología cardiovascular / Lesión por reperfusión en IAM.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de fisiopatología cardiovascular porque evalúa una trampa frecuente: confundir el daño isquémico inicial con el daño paradójico que ocurre DESPUÉS de restablecer el flujo.

La clave no es pensar que la angioplastia solo trae beneficio sin costo celular.
La clave es:
PCI exitosa + complicaciones inmediatas post-reperfusión = lesión por reperfusión (ROS + Ca²⁺ + daño mitocondrial).

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 55 años con IAMCEST en cara anteroseptal (4 horas de evolución).
• Intervención coronaria percutánea primaria exitosa: restablecimiento del flujo en la DA.
• Minutos después de la reperfusión: arritmias ventriculares, aumento brusco de biomarcadores cardíacos y deterioro transitorio de contractilidad regional.
• Daño tisular paradójico que empeora el miocito ADICIONALMENTE al daño isquémico previo.

Recordemos la lesión por reperfusión:
• Durante la isquemia: depleción de ATP, acumulación de lactato, entrada de Ca²⁺ por falla de bombas.
• Al reperfundir súbitamente: explosión de especies reactivas de oxígeno (ROS) por reoxigenación abrupta.
• La sobrecarga de Ca²⁺ intracelular abre el poro de transición de permeabilidad mitocondrial (MPTP).
• Resultado: necrosis/apoptosis adicional, arritmias de reperfusión y miocardio aturdido (stunning).

Por lo tanto:
El mecanismo patológico celular responsable es la producción masiva de ROS con sobrecarga intracelular de calcio y daño mitocondrial.

¿Por qué la opción B es la respuesta correcta?
Describe el triplete fisiopatológico clásico de la lesión por reperfusión:
• ROS masivas por reoxigenación abrupta del miocito isquémico.
• Sobrecarga intracelular de calcio que perpetúa la lesión celular.
• Daño mitocondrial por apertura del poro de transición → liberación de citocromo c y activación de vías de muerte celular.
Explica el patrón temporal (minutos post-PCI) y las manifestaciones clínicas (arritmias, ↑ troponina, stunning).

¿Por qué fallan las otras opciones?
Opción A (activación de vía extrínseca de coagulación con microtrombos): describe trombosis intracoronaria, no el mecanismo celular inmediato post-reperfusión con estrés oxidativo.
Opción C (inhibición de fosforilación oxidativa por ↓ O₂ intracelular): al reperfundir HAY oxígeno abundante; el daño es por exceso de estrés oxidativo, no por hipoxia persistente.
Opción D (acumulación de cuerpos cetónicos en miocito isquémico): las cetonas pueden elevarse en isquemia, pero no explican el daño paradójico inmediato tras recuperar el flujo.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Daño miocárdico en IAM" = isquemia por falta de oxígeno.
Pero el examen describe un paciente con PCI EXITOSA y complicaciones INMEDIATAS después de recuperar el flujo.
La trampa es elegir mecanismos de isquemia (hipoxia, cetonas) cuando el escenario pide lesión por reperfusión.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Isquemia prolongada → depleción energética y acumulación de sustratos lesivos.
2. Reperfusión súbita → explosión de ROS por reoxigenación abrupta.
3. Sobrecarga de Ca²⁺ + apertura del poro mitocondrial → daño celular adicional.
4. Manifestaciones clínicas: arritmias de reperfusión, miocardio aturdido y ↑ brusca de biomarcadores.

Perlas de examen
✅ El daño paradójico ocurre DESPUÉS de restablecer el flujo, no durante la isquemia.
✅ ROS + sobrecarga de Ca²⁺ + poro de transición mitocondrial = tríada de lesión por reperfusión.
✅ Miocardio aturdido (stunning): disfunción transitoria post-reperfusión sin necrosis irreversible.
✅ Arritmias ventriculares inmediatas post-PCI son manifestación clásica de reperfusión.
✅ Más oxígeno disponible no siempre significa menos daño celular.
✅ La PCI salva al paciente, pero la reperfusión puede causar lesión adicional al miocito.

Referencias
• Robbins & Cotran Pathologic Basis of Disease.
• Braunwald's Heart Disease.
• ESC Guidelines for the Management of Acute Coronary Syndromes.
• Harrison's Principles of Internal Medicine.
• UpToDate: Reperfusion injury in acute myocardial infarction.`,
  },
  {
    id: "dr-q-127",
    examArea: "Ciencias Básicas / Endocrinología",
    topic: "Ciencias Básicas",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "fisiologia", "graves", "propranolol"],
    statement:
      "Mujer de 35 años, previamente sana, consulta por palpitaciones, pérdida de peso, temblor fino distal, sudoración y exoftalmos. Laboratorios: TSH <0.01 mUI/L y T4 libre marcadamente elevada. Se diagnostica Enfermedad de Graves con tirotoxicosis severa. El médico residente inicia propranolol a dosis altas. Desde el punto de vista bioquímico, además del bloqueo betaadrenérgico para controlar la taquicardia y el temblor, ¿qué otro mecanismo fisiológico clave justifica la elección de propranolol sobre otros betabloqueadores?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Inhibición de la síntesis tiroidea de T3 y T4 mediante bloqueo de la peroxidasa tiroidea.",
      },
      {
        id: "B",
        label: "B",
        text: "Inhibición de la liberación de hormonas tiroideas almacenadas en el coloide.",
      },
      {
        id: "C",
        label: "C",
        text: "Disminución de la conversión periférica de T4 a T3 por inhibición de la 5'-desyodasa.",
      },
      {
        id: "D",
        label: "D",
        text: "Aumento de la depuración hepática de hormonas tiroideas mediante inducción enzimática.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "A dosis altas, el propranolol inhibe parcialmente la 5'-desyodasa, reduciendo la conversión periférica de T4 a T3 (hormona metabólicamente más activa), además de su efecto betabloqueante.",
    keyPoints: [
      "Cuando veas: Enfermedad de Graves con tirotoxicosis severa + propranolol a dosis altas como tratamiento sintomático.",
      "Debes pensar en: propranolol = β-bloqueo + inhibición parcial de 5'-desyodasa (↓ conversión T4→T3).",
      "T3 es la hormona metabólicamente más activa; gran parte se forma por conversión periférica de T4.",
      "Metimazol/PTU inhiben síntesis tiroidea; propranolol reduce síntomas adrenérgicos Y disminuye T3 activa.",
      "Tema: Endocrinología / Tirotoxicosis y Enfermedad de Graves.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de endocrinología porque evalúa una trampa frecuente: confundir los mecanismos de los antitiroideos (metimazol, PTU) con los efectos diferenciales del propranolol en tirotoxicosis.

La clave no es pensar que propranolol inhibe la síntesis tiroidea.
La clave es:
Propranolol a dosis altas = β-bloqueo + inhibición parcial de 5'-desyodasa → ↓ conversión periférica de T4 a T3.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Mujer de 35 años con Enfermedad de Graves: TSH <0.01 mUI/L, T4 libre marcadamente elevada.
• Síntomas adrenérgicos: palpitaciones, temblor fino distal, sudoración, pérdida de peso, exoftalmos.
• Tirotoxicosis severa que requiere control sintomático inmediato.
• Se inicia propranolol a dosis altas; la pregunta pide el mecanismo bioquímico que lo diferencia de otros betabloqueadores.

Recordemos el metabolismo de hormonas tiroideas:
• La glándula tiroidea produce principalmente T4 (tiroxina) y menor cantidad de T3 (triyodotironina).
• T3 es la hormona metabólicamente más activa (mayor afinidad por receptor nuclear).
• Gran parte del T3 circulante se forma por conversión periférica de T4 mediante la enzima 5'-desyodasa.
• Propranolol, a dosis altas, inhibe parcialmente esta enzima → reduce T3 activa disponible.

Por lo tanto:
El mecanismo fisiológico clave que justifica propranolol sobre otros betabloqueadores es la disminución de la conversión periférica de T4 a T3 por inhibición de la 5'-desyodasa.

¿Por qué la opción C es la respuesta correcta?
Describe el efecto diferencial del propranolol:
• Inhibición parcial de la 5'-desyodasa en tejidos periféricos (hígado, riñón, músculo).
• Disminución de la conversión T4 → T3, reduciendo la hormona metabólicamente más activa.
• Este efecto se suma al bloqueo β-adrenérgico (↓ FC, temblor, ansiedad, sudoración).
• Es la razón por la que propranolol (no atenolol ni metoprolol selectivos) es preferido en tirotoxicosis severa y tormenta tiroidea.

¿Por qué fallan las otras opciones?
Opción A (inhibición de síntesis de T3 y T4 por bloqueo de peroxidasa tiroidea): mecanismo de metimazol y propiltiouracilo (PTU), no de propranolol.
Opción B (inhibición de liberación hormonal del coloide): mecanismo de yodo/yoduros (efecto Wolff-Chaikoff), no de betabloqueadores.
Opción D (aumento de depuración hepática por inducción enzimática): propranolol no induce metabolismo hepático de hormonas tiroideas de forma significativa.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Tratamiento de hipertiroidismo" = inhibición de síntesis tiroidea.
Pero propranolol NO es un antitiroideo; es un betabloqueador con efecto adicional sobre la conversión periférica.
La trampa es elegir mecanismos de metimazol/PTU cuando la pregunta pide el efecto diferencial bioquímico del propranolol.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar tirotoxicosis severa con síntomas adrenérgicos (Graves).
2. Iniciar propranolol para control sintomático inmediato (β-bloqueo).
3. Reconocer el efecto adicional: inhibición parcial de 5'-desyodasa → ↓ T4→T3.
4. Combinar con antitiroideo definitivo (metimazol/PTU) para control de la síntesis.

Perlas de examen
✅ Propranolol = β-bloqueo + inhibición parcial de 5'-desyodasa (efecto único a dosis altas).
✅ T3 es la hormona más activa; se forma principalmente por conversión periférica de T4.
✅ Metimazol/PTU inhiben síntesis; yodo inhibe liberación; propranolol ↓ conversión T4→T3.
✅ Propranolol es preferido en tirotoxicosis severa y tormenta tiroidea por su doble mecanismo.
✅ Betabloqueadores selectivos (atenolol, metoprolol) NO inhiben 5'-desyodasa.
✅ El control sintomático con propranolol no cura Graves; requiere tratamiento antitiroideo concomitante.

Referencias
• Williams Textbook of Endocrinology.
• Katzung Basic & Clinical Pharmacology.
• ATA Guidelines for the Diagnosis and Management of Hyperthyroidism.
• Harrison's Principles of Internal Medicine.
• UpToDate: Beta blockers in the treatment of hyperthyroidism.`,
  },
  {
    id: "dr-q-128",
    examArea: "Ciencias Básicas / Hemostasia",
    topic: "Ciencias Básicas",
    difficulty: "hard",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "farmacologia", "hit", "heparina"],
    statement:
      "Hombre de 60 años hospitalizado por tromboembolismo pulmonar, manejado con heparina no fraccionada (HNF) en infusión continua. Al sexto día de tratamiento presenta dolor súbito, frialdad, palidez y ausencia de pulsos en el miembro inferior derecho. Los laboratorios muestran descenso de plaquetas de 250,000/µL a 35,000/µL. Se sospecha trombocitopenia inducida por heparina (HIT) tipo II. ¿Cuál es el proceso inmunológico y patológico central responsable de esta enfermedad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Destrucción directa de plaquetas por toxicidad medular inducida por heparina.",
      },
      {
        id: "B",
        label: "B",
        text: "Formación de anticuerpos IgG contra complejos heparina-factor plaquetario 4 (PF4), con activación masiva de plaquetas y generación de trombina.",
      },
      {
        id: "C",
        label: "C",
        text: "Activación del complemento con hemólisis intravascular y consumo secundario de plaquetas.",
      },
      {
        id: "D",
        label: "D",
        text: "Inhibición de la producción hepática de trombopoyetina por efecto directo de la heparina.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "HIT tipo II: IgG anti-complejo heparina-PF4 activa plaquetas vía FcγIIa → generación masiva de trombina → trombosis (paradoja protrombótica) y consumo plaquetario.",
    keyPoints: [
      "Cuando veas: heparina día 5-10 + caída plaquetas >50% + trombosis nueva (paradoja protrombótica).",
      "Debes pensar en: HIT tipo II = IgG anti complejo heparina-PF4 → activación plaquetaria → trombosis.",
      "La complicación principal es TROMBOSIS, no sangrado; suspender toda heparina (incluida HBPM).",
      "Iniciar anticoagulante alternativo (argatroban, bivalirudina, fondaparinux) sin esperar confirmación.",
      "Tema: Hemostasia / Trombocitopenia inducida por heparina (HIT) tipo II.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de hemostasia porque evalúa una trampa frecuente: confundir HIT tipo II (inmunológica, protrombótica) con toxicidad medular o sangrado por anticoagulación.

La clave no es pensar que heparina solo causa sangrado o destrucción medular de plaquetas.
La clave es:
Heparina día 5-10 + caída plaquetas >50% + trombosis nueva = IgG anti heparina-PF4 → activación masiva de plaquetas → generación de trombina.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 60 años con TEP tratado con heparina no fraccionada en infusión continua.
• Al sexto día: dolor súbito, frialdad, palidez y ausencia de pulsos en miembro inferior derecho (trombosis arterial).
• Plaquetas caen de 250,000 a 35,000/µL (descenso >50%).
• Cuadro clásico de trombocitopenia inducida por heparina (HIT) tipo II con paradoja protrombótica.

Recordemos la fisiopatología de HIT tipo II:
• La heparina se une al factor plaquetario 4 (PF4) formando un complejo inmunogénico.
• Se generan anticuerpos IgG contra el complejo heparina-PF4.
• Los IgG se unen a plaquetas vía receptor FcγRIIa → activación masiva plaquetaria.
• Activación plaquetaria → generación masiva de trombina → TROMBOSIS (arterial y venosa).
• Consumo simultáneo de plaquetas → trombocitopenia (paradoja: anticoagulado que trombosa).

Por lo tanto:
El proceso inmunológico central es la formación de anticuerpos IgG contra complejos heparina-PF4, con activación masiva de plaquetas y generación de trombina.

¿Por qué la opción B es la respuesta correcta?
Describe la cascada inmunológica completa de HIT tipo II:
• Formación del complejo heparina-PF4 (antígeno).
• Producción de anticuerpos IgG específicos.
• Unión de IgG a plaquetas vía FcγRIIa → activación plaquetaria masiva.
• Generación de trombina → trombosis (complicación principal) + consumo plaquetario.
Explica la paradoja protrombótica: paciente anticoagulado que desarrolla trombosis.

¿Por qué fallan las otras opciones?
Opción A (destrucción directa de plaquetas por toxicidad medular): HIT no es aplasia medular; las plaquetas se consumen por activación inmune, no por falla de producción.
Opción C (activación del complemento con hemólisis intravascular): no es el mecanismo central de HIT; no hay hemólisis como hallazgo principal.
Opción D (inhibición de trombopoyetina hepática): la heparina no inhibe trombopoyetina; no explica el patrón inmunológico ni la trombosis.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Trombocitopenia + anticoagulante" = riesgo de sangrado.
Pero HIT tipo II es PROTROMBÓTICA: la complicación principal es trombosis (TEP, TVP, IAM, ACV, isquemia de extremidades).
La trampa es elegir mecanismos de destrucción medular o sangrado cuando el escenario describe trombosis arterial nueva.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Sospechar HIT si caída plaquetas >50% entre día 5-10 de heparina (o antes si exposición previa).
2. Reconocer la paradoja: trombocitopenia + trombosis nueva en paciente anticoagulado.
3. Suspender TODA heparina inmediatamente (HNF, HBPM, heparina en flushes).
4. Iniciar anticoagulante alternativo (argatroban, bivalirudina, fondaparinux) sin esperar confirmación.

Perlas de examen
✅ HIT tipo II = trombocitopenia + trombosis (días 5-10 de heparina).
✅ IgG anti complejo heparina-PF4 → activación plaquetaria vía FcγRIIa → generación de trombina.
✅ Paradoja protrombótica: el paciente anticoagulado desarrolla trombosis, no sangrado.
✅ Suspender toda heparina (incluida HBPM) e iniciar anticoagulante alternativo de inmediato.
✅ Score 4T ayuda a estratificar probabilidad pre-test de HIT.
✅ No administrar warfarina sola en HIT aguda (riesgo de necrosis por proteína C).

Referencias
• Harrison's Principles of Internal Medicine.
• Williams Hematology.
• ASH Guidelines on Heparin-Induced Thrombocytopenia.
• Warkentin TE. HIT Paradox. Blood Reviews.
• UpToDate: Clinical presentation and diagnosis of heparin-induced thrombocytopenia.`,
  },
  {
    id: "dr-q-129",
    examArea: "Ciencias Básicas / Microbiología",
    topic: "Ciencias Básicas",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "microbiologia", "endocarditis", "aureus"],
    statement:
      "Hombre de 32 años, usuario activo de drogas intravenosas, consulta por fiebre de 39°C, escalofríos y disnea. A la auscultación presenta un soplo holosistólico en foco tricuspídeo. El ecocardiograma transesofágico revela una gran vegetación en la válvula tricúspide. Los hemocultivos reportan cocos Gram positivos en racimos, catalasa positivos y coagulasa positivos. ¿Cuál de los siguientes factores de virulencia de este microorganismo es el principal mediador de la adhesión inicial a las células endoteliales dañadas de la válvula cardíaca?",
    options: [
      { id: "A", label: "A", text: "Coagulasa." },
      { id: "B", label: "B", text: "Proteína A." },
      {
        id: "C",
        label: "C",
        text: "Adhesinas de superficie tipo MSCRAMMs (proteínas de unión a fibronectina y fibrinógeno).",
      },
      { id: "D", label: "D", text: "Alfa-toxina." },
    ],
    correctOptionId: "C",
    explanation:
      "Staphylococcus aureus. La adhesión inicial al endotelio valvular lesionado depende de MSCRAMMs (unión a fibronectina, fibrinógeno y matriz extracelular expuesta). Coagulasa y proteína A actúan después (protección/evasión).",
    keyPoints: [
      "Cuando veas: usuario de drogas IV + endocarditis tricuspídea + S. aureus (Gram+, racimos, catalasa+, coagulasa+).",
      "Debes pensar en: adhesión inicial mediada por MSCRAMMs (unión a fibronectina y fibrinógeno expuestos).",
      "Coagulasa y proteína A actúan DESPUÉS de la adhesión (protección y evasión inmune, no adhesión inicial).",
      "Secuencia de virulencia: lesión endotelial → exposición de matriz → MSCRAMMs → colonización → vegetación.",
      "Tema: Microbiología / Virulencia de Staphylococcus aureus en endocarditis.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de microbiología porque evalúa una trampa frecuente: confundir los factores de virulencia de S. aureus según su función temporal (adhesión inicial vs protección/evasión posterior).

La clave no es pensar que coagulasa o proteína A median la adhesión inicial.
La clave es:
Lesión endotelial valvular + exposición de matriz extracelular → MSCRAMMs (adhesinas) → adhesión inicial → colonización.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 32 años, usuario activo de drogas intravenosas.
• Fiebre de 39°C, escalofríos, disnea y soplo holosistólico en foco tricuspídeo.
• Ecocardiograma transesofágico: gran vegetación en válvula tricúspide (patrón clásico en endocarditis por drogas IV).
• Hemocultivos: cocos Gram positivos en racimos, catalasa positivo, coagulasa positivo = Staphylococcus aureus.
• La pregunta pide el factor de virulencia de la adhesión INICIAL al endotelio valvular dañado.

Recordemos la virulencia de S. aureus en endocarditis:
• MSCRAMMs (Microbial Surface Components Recognizing Adhesive Matrix Molecules): adhesinas de superficie.
• Unen fibronectina, fibrinógeno y colágeno expuestos en el endotelio valvular lesionado.
• Median la adhesión inicial y colonización de la válvula cardíaca.
• Coagulasa: convierte fibrinógeno en fibrina → capa protectora alrededor de la bacteria (después de adhesión).
• Proteína A: une dominio Fc de IgG → evasión de fagocitosis (no media adhesión).
• Alfa-toxina: daña membranas celulares → necrosis tisular (no es adhesina).

Por lo tanto:
El principal mediador de la adhesión inicial es las adhesinas de superficie tipo MSCRAMMs (proteínas de unión a fibronectina y fibrinógeno).

¿Por qué la opción C es la respuesta correcta?
Describe el mecanismo de adhesión inicial en endocarditis por S. aureus:
• La lesión endotelial (por drogas IV, catéteres, trauma valvular) expone fibronectina y fibrinógeno.
• Las MSCRAMMs (ej. FnBP, ClfA) reconocen y se unen a estas moléculas de matriz extracelular.
• Esta adhesión inicial es el paso obligatorio para colonización y formación de vegetación.
• Es el factor de virulencia que responde directamente a "adhesión inicial" preguntada en el enunciado.

¿Por qué fallan las otras opciones?
Opción A (coagulasa): convierte fibrinógeno en fibrina y forma un escudo fibrino alrededor de la bacteria; actúa DESPUÉS de la adhesión, no es el paso inicial.
Opción B (proteína A): une el dominio Fc de IgG y evade la opsonización; es un mecanismo de evasión inmune, no de adhesión valvular.
Opción D (alfa-toxina): daña membranas celulares causando necrosis; es una toxina citolítica, no un mediador de adhesión inicial.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"S. aureus coagulasa positivo" = coagulasa como factor principal de virulencia.
Pero coagulasa actúa en la fase de PROTECCIÓN (escudo de fibrina), no en la adhesión INICIAL.
La trampa es elegir coagulasa o proteína A cuando la pregunta especifica "adhesión inicial a células endoteliales dañadas".

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Lesión endotelial valvular (drogas IV, catéter, válvula nativa dañada).
2. Exposición de fibronectina, fibrinógeno y colágeno en la superficie valvular.
3. Adhesión inicial mediada por MSCRAMMs (FnBP, ClfA, etc.).
4. Colonización → formación de vegetación → coagulasa (protección) + proteína A (evasión).

Perlas de examen
✅ Endocarditis en drogas IV: S. aureus afecta válvula tricúspide (diferente a endocarditis clásica en válvula izquierda).
✅ MSCRAMMs = adhesión inicial a fibronectina/fibrinógeno expuestos en endotelio dañado.
✅ Coagulasa: fibrina alrededor de la bacteria (protección), NO adhesión inicial.
✅ Proteína A: evasión inmune (une Fc de IgG), NO adhesión valvular.
✅ Alfa-toxina: citotoxicidad/necrosis, NO adhesión.
✅ La pregunta de virulencia siempre distingue función temporal: adhesión → colonización → evasión.

Referencias
• Murray's Medical Microbiology.
• Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.
• Harrison's Principles of Internal Medicine.
• Fowler VG et al. Staphylococcus aureus Endocarditis. JAMA.
• UpToDate: Clinical manifestations of Staphylococcus aureus infection in adults.`,
  },
  {
    id: "dr-q-130",
    examArea: "Ciencias Básicas / Fisiología celular",
    topic: "Ciencias Básicas",
    difficulty: "medium",
    tags: ["dr-q", "universal", "metodoq", "ciencias_basicas", "fisiologia", "fibrosis_quistica", "cftr"],
    statement:
      "Hombre de 22 años, evaluado por episodios recurrentes de dolor epigástrico irradiado a la espalda. La tomografía evidencia calcificaciones pancreáticas compatibles con pancreatitis crónica. Además refiere tos crónica productiva desde la infancia. Ante la sospecha diagnóstica se realiza prueba de sudor, que reporta cloruros de 85 mmol/L (normal <40 mmol/L). ¿Cuál es la alteración fisiológica directa en las células ductales pancreáticas derivada del defecto genético responsable de esta enfermedad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Disminución de la secreción de bicarbonato y agua hacia la luz ductal, produciendo secreciones espesas y obstrucción ductal.",
      },
      {
        id: "B",
        label: "B",
        text: "Aumento de la secreción de enzimas pancreáticas activadas hacia el conducto pancreático principal.",
      },
      {
        id: "C",
        label: "C",
        text: "Incremento de la absorción ductal de bicarbonato con alcalinización excesiva de las secreciones pancreáticas.",
      },
      {
        id: "D",
        label: "D",
        text: "Disminución de la síntesis de tripsinógeno con insuficiencia pancreática exocrina primaria.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Fibrosis quística por mutación CFTR. Falla del canal de cloro altera secreción de cloro y bicarbonato en células ductales pancreáticas → secreciones viscosas → obstrucción ductal → pancreatitis crónica e insuficiencia exocrina.",
    keyPoints: [
      "Cuando veas: joven con pancreatitis crónica + tos crónica desde infancia + sudor Cl⁻ >60 mmol/L.",
      "Debes pensar en: fibrosis quística por mutación CFTR → ↓ secreción de bicarbonato y agua en ductos pancreáticos.",
      "CFTR es canal de cloro regulado por ATP; en páncreas falla la secreción de Cl⁻ y HCO₃⁻ hacia la luz ductal.",
      "Secreciones espesas → obstrucción ductal → pancreatitis crónica e insuficiencia exocrina (consecuencia, no mecanismo directo).",
      "Tema: Fisiología celular / Fibrosis quística y función del CFTR.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de fisiología celular porque evalúa una trampa frecuente: confundir las consecuencias tardías de fibrosis quística (insuficiencia exocrina, ↓ tripsinógeno) con la alteración fisiológica DIRECTA del defecto CFTR en ductos pancreáticos.

La clave no es pensar que CFTR afecta primariamente la síntesis de enzimas pancreáticas.
La clave es:
Mutación CFTR → falla secreción de Cl⁻ y HCO₃⁻ en células ductales → ↓ agua luminal → secreciones espesas → obstrucción ductal.

¿Qué está ocurriendo realmente?
El paciente presenta:
• Hombre de 22 años con episodios recurrentes de dolor epigástrico irradiado a la espalda.
• TAC con calcificaciones pancreáticas compatibles con pancreatitis crónica.
• Tos crónica productiva desde la infancia (compromiso respiratorio).
• Prueba de sudor: cloruros 85 mmol/L (normal <40 mmol/L) → diagnóstico de fibrosis quística.
• Enfermedad autosómica recesiva por defecto del canal CFTR.

Recordemos la función del CFTR:
• CFTR = canal de cloro regulado por ATP (cAMP) en epitelios exocrinos.
• En ductos pancreáticos: secreta Cl⁻ y HCO₃⁻ hacia la luz ductal → atracción osmótica de agua → fluido alcalino diluido.
• En sudor: reabsorbe Cl⁻ del sudor ductal → sudor hipoclorémico en condiciones normales.
• Mutación CFTR → falla secreción ductal de Cl⁻/HCO₃⁻ → secreciones viscosas → obstrucción.
• En sudor: falla reabsorción de Cl⁻ → sudor hiperclorémico (test diagnóstico).

Por lo tanto:
La alteración fisiológica directa en células ductales pancreáticas es la disminución de la secreción de bicarbonato y agua hacia la luz ductal, produciendo secreciones espesas y obstrucción ductal.

¿Por qué la opción A es la respuesta correcta?
Describe el mecanismo fisiológico directo del defecto CFTR en el páncreas:
• CFTR normalmente secreta Cl⁻ y HCO₃⁻ al lumen ductal pancreático.
• El bicarbonato neutraliza la acidez del quimo gástrico que llega al duodeno.
• La secreción de Cl⁻/HCO₃⁻ genera flujo osmótico de agua → fluido ductal diluido.
• Con CFTR mutado: ↓ HCO₃⁻ y ↓ agua → secreciones espesas → obstrucción ductal → pancreatitis crónica.
Responde directamente a "alteración fisiológica DIRECTA" preguntada en el enunciado.

¿Por qué fallan las otras opciones?
Opción B (aumento de secreción de enzimas pancreáticas activadas): el problema no es hipersecreción enzimática, sino falta de fluido alcalino que diluye y protege los conductos.
Opción C (incremento de absorción ductal de bicarbonato): es lo opuesto; hay disminución de SECRECIÓN de HCO₃⁻, no aumento de absorción.
Opción D (disminución de síntesis de tripsinógeno): es una consecuencia TARDÍA (destrucción glandular por obstrucción crónica), no la alteración fisiológica directa del defecto CFTR.

¿Cuál es la trampa del examen?
Muchos estudiantes asocian:
"Fibrosis quística + páncreas" = insuficiencia pancreática exocrina (↓ enzimas).
Pero la insuficiencia exocrina es una CONSECUENCIA tardía de la obstrucción crónica, no la alteración fisiológica directa.
La trampa es elegir "↓ síntesis de tripsinógeno" cuando la pregunta pide el mecanismo primario del defecto CFTR en ductos.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Mutación CFTR (autosómica recesiva) → canal de cloro disfuncional.
2. Falla secreción de Cl⁻ y HCO₃⁻ en ductos pancreáticos → ↓ agua luminal.
3. Secreciones espesas → obstrucción ductal → pancreatitis crónica recurrente.
4. Destrucción glandular progresiva → insuficiencia exocrina (consecuencia tardía).

Perlas de examen
✅ CFTR = canal de cloro regulado por ATP; mutación causa fibrosis quística (autosómica recesiva).
✅ Test de sudor: Cl⁻ >60 mmol/L sugestivo; >80 mmol/L confirma fibrosis quística.
✅ Páncreas: ↓ secreción de HCO₃⁻ y agua → secreciones espesas → obstrucción ductal.
✅ Pulmón: ↓ secreción de Cl⁻/agua en vías aéreas → moco espeso → infecciones recurrentes.
✅ Insuficiencia exocrina (↓ tripsinógeno) es consecuencia tardía, no alteración directa del CFTR.
✅ Tos crónica + pancreatitis joven + sudor positivo = fibrosis quística hasta demostrar lo contrario.

Referencias
• Guyton & Hall Textbook of Medical Physiology.
• Robbins & Cotran Pathologic Basis of Disease.
• Cystic Fibrosis Foundation Clinical Care Guidelines.
• Harrison's Principles of Internal Medicine.
• UpToDate: Cystic fibrosis: Clinical manifestations and diagnosis.`,
  },
];
