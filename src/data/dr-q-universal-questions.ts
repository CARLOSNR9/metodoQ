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
      "Dolor precordial típico con elevación transitoria (no persistente) del ST y troponinas negativas: angina inestable de alto riesgo (cambios dinámicos del ST). Conducta: estrategia invasiva temprana con coronariografía en las primeras 24 horas.",
    keyPoints: [
      "Elevación transitoria del ST ≠ STEMI; requiere persistencia para IAMCEST.",
      "Cambios dinámicos del ST = angina inestable de alto riesgo.",
      "Coronariografía en primeras 24 h en SCA sin elevación del ST de alto riesgo.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
SCA sin elevación del ST vs IAM con elevación transitoria del ST

Caso clínico: Paciente masculino de 60 años hipertenso con ERC 3B, dolor torácico típico, elevación transitoria del ST y troponinas negativas.

• El síndrome coronario agudo se divide en SCA con elevación persistente del ST (STEMI) y SCA sin elevación persistente del ST (NSTEMI/angina inestable).
• La elevación TRANSITORIA del ST es una trampa clásica de examen. Para diagnosticar STEMI, la elevación debe ser persistente y asociarse a oclusión coronaria aguda.
• Cuando el paciente tiene dolor típico con cambios dinámicos del ST pero troponinas negativas, el diagnóstico más probable es angina inestable de alto riesgo.
• Los cambios dinámicos del ST son criterios de alto riesgo y obligan a estrategia invasiva temprana.
• La conducta correcta es coronariografía en primeras 24 horas.

Lo que el estudiante debe dominar para residencia
1. Diferenciar STEMI vs NSTEMI vs angina inestable.
2. Interpretar elevaciones transitorias del ST.
3. Estratificación de riesgo en SCA sin elevación del ST.
4. Indicaciones de coronariografía temprana.

Perlas de examen
• Las residencias preguntan conductas, no solo diagnósticos.
• El ECG debe interpretarse SIEMPRE junto al contexto clínico.
• Los tiempos de reperfusión son extremadamente preguntables.
• Las guías ESC y AHA modernas priorizan estratificación del riesgo.

Referencias: ESC Guidelines for ACS; AHA/ACC ACS Guideline; Braunwald's Heart Disease; Tintinalli Emergency Medicine.`,
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
      "Dolor típico con bloqueo de rama derecha nuevo en contexto de SCA se considera equivalente de elevación del ST. Diagnóstico: IAMCEST equivalente. Conducta: reperfusión urgente (trombólisis si la PCI no está disponible en ≤120 min).",
    keyPoints: [
      "BRI y BRD con dolor típico = equivalentes de STEMI.",
      "El diagnóstico de SCA es primordialmente clínico.",
      "Reperfusión urgente; no estratificar como NSTEMI de bajo riesgo.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
Equivalentes de elevación del ST

Caso clínico: Paciente con dolor típico y bloqueo de rama derecha en ECG.

• El diagnóstico de síndrome coronario es principalmente clínico.
• Los bloqueos de rama pueden ocultar signos clásicos del infarto.
• En contexto de dolor torácico típico, el bloqueo de rama izquierda y el bloqueo de rama derecha deben considerarse equivalentes de elevación del ST.
• Otros equivalentes importantes: patrón de De Winter, infarto posterior y Wellens.
• La conducta debe ser reperfusión urgente.

Lo que el estudiante debe dominar para residencia
1. Reconocer equivalentes STEMI.
2. Importancia del contexto clínico.
3. Indicaciones de reperfusión inmediata.

Perlas de examen
• Las residencias preguntan conductas, no solo diagnósticos.
• El ECG debe interpretarse SIEMPRE junto al contexto clínico.
• Los tiempos de reperfusión son extremadamente preguntables.
• Las guías ESC y AHA modernas priorizan estratificación del riesgo.

Referencias: ESC Guidelines for ACS; AHA/ACC ACS Guideline; Braunwald's Heart Disease; Tintinalli Emergency Medicine.`,
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
      "STEMI inferior con retraso >120 min para PCI: indicada estrategia farmacoinvasiva (trombólisis + anticoagulación + doble antiagregación). Prasugrel está contraindicado con antecedente de ACV/AIT; usar clopidogrel.",
    keyPoints: [
      "PCI ideal si ≤120 min; si no, trombólisis si dolor <12 h.",
      "Prasugrel contraindicado en ACV/AIT previo.",
      "Todo paciente trombolizado debe remitirse posteriormente a PCI.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
Estrategia farmacoinvasiva en STEMI

Caso clínico: Paciente con STEMI inferior y retraso mayor de 120 minutos para PCI.

• La angioplastia primaria es el tratamiento ideal si puede realizarse en menos de 120 minutos.
• Si el tiempo excede 120 minutos y el dolor tiene menos de 12 horas de evolución, debe realizarse trombólisis.
• Todo paciente trombolizado debe remitirse posteriormente a PCI.
• Prasugrel está contraindicado en pacientes con antecedente de ACV o AIT.
• La estrategia farmacoinvasiva combina trombólisis temprana seguida de coronariografía.

Lo que el estudiante debe dominar para residencia
1. Ventanas de reperfusión.
2. Indicaciones de trombólisis.
3. Contraindicaciones de prasugrel.
4. Concepto de estrategia farmacoinvasiva.

Perlas de examen
• Las residencias preguntan conductas, no solo diagnósticos.
• El ECG debe interpretarse SIEMPRE junto al contexto clínico.
• Los tiempos de reperfusión son extremadamente preguntables.
• Las guías ESC y AHA modernas priorizan estratificación del riesgo.

Referencias: ESC Guidelines for ACS; AHA/ACC ACS Guideline; Braunwald's Heart Disease; Tintinalli Emergency Medicine.`,
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
      "La trombólisis no finaliza el tratamiento del STEMI. Todo paciente trombolizado debe remitirse para PCI dentro de las primeras 24 horas (estrategia farmacoinvasiva).",
    keyPoints: [
      "Trombólisis + PCI en 24 h = estrategia farmacoinvasiva.",
      "Reduce mortalidad y reinfarto vs trombólisis aislada.",
      "Persistencia de dolor o ST sin resolución → trombólisis fallida / PCI rescate.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
Conducta posterior a trombólisis

Caso clínico: Paciente trombolizado en zona rural alejada.

• La trombólisis NO finaliza el tratamiento del STEMI.
• Todo paciente trombolizado debe remitirse para PCI dentro de las primeras 24 horas.
• La estrategia farmacoinvasiva reduce mortalidad y reinfarto.
• La persistencia del dolor o ausencia de resolución del ST obliga a considerar trombólisis fallida.

Lo que el estudiante debe dominar para residencia
1. Conducta posterior a trombólisis.
2. PCI de rescate.
3. Importancia del traslado posterior.

Perlas de examen
• Las residencias preguntan conductas, no solo diagnósticos.
• El ECG debe interpretarse SIEMPRE junto al contexto clínico.
• Los tiempos de reperfusión son extremadamente preguntables.
• Las guías ESC y AHA modernas priorizan estratificación del riesgo.

Referencias: ESC Guidelines for ACS; AHA/ACC ACS Guideline; Braunwald's Heart Disease; Tintinalli Emergency Medicine.`,
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
      "Post-SCA con stent y alto riesgo hemorrágico: las guías ESC/AHA permiten DAPT abreviada (1 mes) seguida de monoterapia con inhibidor P2Y12 hasta completar 12 meses, reduciendo sangrado sin comprometer protección antiisquémica.",
    keyPoints: [
      "DAPT estándar post-SCA: 12 meses.",
      "Alto riesgo hemorrágico: estrategia abreviada permitida.",
      "1 mes DAPT → monoterapia P2Y12 hasta 12 meses totales.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
DAPT y alto riesgo de sangrado

Caso clínico: Paciente post angioplastia con alto riesgo hemorrágico.

• La terapia antiagregante dual (DAPT) es estándar posterior a un síndrome coronario agudo.
• Tradicionalmente se realizaban 12 meses de ASA + inhibidor P2Y12.
• Las nuevas guías permiten estrategias abreviadas en pacientes con alto riesgo hemorrágico.
• Actualmente puede realizarse un mes de DAPT y luego continuar monoterapia con inhibidor P2Y12.
• Esta estrategia reduce sangrado sin aumentar significativamente eventos isquémicos.

Lo que el estudiante debe dominar para residencia
1. Duración estándar de DAPT.
2. Definición de alto riesgo hemorrágico.
3. Estrategias modernas abreviadas.

Perlas de examen
• Las residencias preguntan conductas, no solo diagnósticos.
• El ECG debe interpretarse SIEMPRE junto al contexto clínico.
• Los tiempos de reperfusión son extremadamente preguntables.
• Las guías ESC y AHA modernas priorizan estratificación del riesgo.

Referencias: ESC/AHA ACS Guidelines; European Heart Journal DAPT Updates; Braunwald's Heart Disease; Tintinalli Emergency Medicine.`,
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
      "FA + SCA post-PCI: triple terapia corta (ASA + clopidogrel + DOAC) con suspensión de ASA a la semana, continuando apixabán + clopidogrel hasta 12 meses. Minimiza sangrado sin perder protección antitrombótica.",
    keyPoints: [
      "FA + SCA + stent = escenario antitrombótico complejo.",
      "Triple terapia mínima: suspender ASA a la semana.",
      "Clopidogrel + DOAC preferido tras retirar ASA.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
Triple terapia y fibrilación auricular

Caso clínico: Paciente con FA anticoagulado con apixabán que presenta SCA tratado con angioplastia y stent.

• La coexistencia de fibrilación auricular y síndrome coronario agudo genera uno de los escenarios antitrombóticos más preguntados en residencia.
• El objetivo es equilibrar el riesgo trombótico coronario con el riesgo cardioembólico de la FA.
• Las guías modernas recomiendan minimizar la duración de la triple terapia debido al riesgo hemorrágico.
• Actualmente se favorece triple terapia corta (ASA + Clopidogrel + DOAC) seguida rápidamente de doble terapia.
• El esquema más utilizado es suspensión de ASA después de una semana y continuación con Apixabán + Clopidogrel durante 12 meses.

Lo que el estudiante debe dominar para residencia
1. Indicaciones de triple terapia.
2. Duración recomendada de ASA.
3. Diferencias entre doble y triple terapia.
4. Manejo de pacientes con FA sometidos a PCI.

Perlas de examen
• La mayoría de las residencias preguntan cuánto tiempo debe mantenerse el ASA.
• Los DOAC son preferidos sobre warfarina cuando no existe contraindicación.
• Clopidogrel continúa siendo el inhibidor P2Y12 de elección en triple terapia.
• El objetivo principal es disminuir sangrado sin aumentar eventos isquémicos.

Referencias: ESC ACS Guidelines; ESC AF Guidelines; AHA/ACC Coronary Revascularization; Braunwald's Heart Disease.`,
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
      "La PTOG 75 g tiene mayor sensibilidad para detectar diabetes en fases tempranas, porque captura la hiperglucemia posprandial, alteración metabólica más temprana en resistencia a la insulina.",
    keyPoints: [
      "PTOG: prueba más sensible en fases tempranas.",
      "HbA1c: más práctica; refleja exposición crónica.",
      "Acantosis nigricans = marcador de resistencia a la insulina.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
La PTOG de 75 g como prueba más sensible

Caso clínico: Paciente con obesidad, acantosis nigricans y síntomas cardinales compatibles con diabetes mellitus.

• La resistencia a la insulina suele manifestarse inicialmente con alteraciones posprandiales.
• Por esta razón la PTOG tiene mayor sensibilidad para detectar diabetes en fases tempranas.
• La hemoglobina glicada refleja exposición crónica a glucosa, pero puede ser normal en etapas iniciales.
• La glucemia en ayunas tiene buena utilidad diagnóstica, aunque puede pasar por alto alteraciones tempranas.
• La PTOG sigue siendo considerada la prueba diagnóstica más sensible para detectar trastornos tempranos del metabolismo de la glucosa.

Lo que el estudiante debe dominar para residencia
1. Criterios diagnósticos ADA.
2. Diferencias entre HbA1c, glucemia en ayunas y PTOG.
3. Indicaciones de tamizaje.
4. Factores de riesgo para diabetes tipo 2.

Perlas de examen
• La PTOG es la prueba más sensible.
• La HbA1c es la prueba más práctica.
• Los síntomas cardinales permiten diagnóstico con glucemia aleatoria ≥200 mg/dL.
• La acantosis nigricans es marcador clínico de resistencia a la insulina.

Referencias: ADA Standards of Care; Endocrine Society Guidelines; Harrison's Principles of Internal Medicine.`,
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
      "≥2 exacerbaciones en 6 meses reclasifica al paciente como GOLD E (alto riesgo de exacerbaciones). Tratamiento inicial recomendado: LABA + LAMA (el paciente ya usa tiotropio/LAMA, debe añadirse LABA).",
    keyPoints: [
      "2+ exacerbaciones → GOLD E.",
      "GOLD E: LABA + LAMA como combinación inicial.",
      "ICS no de forma indiscriminada; eosinófilos orientan indicación.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
EPOC GOLD E

Caso clínico: Paciente con EPOC tratado con tiotropio que presenta exacerbaciones frecuentes.

• La clasificación GOLD actual prioriza el riesgo de exacerbaciones.
• Los pacientes con exacerbaciones frecuentes pasan a categoría GOLD E.
• El tratamiento inicial recomendado es LABA + LAMA.
• La combinación mejora síntomas, función pulmonar y disminuye exacerbaciones.
• Los corticoides inhalados no deben utilizarse de forma indiscriminada.

Lo que el estudiante debe dominar para residencia
1. Clasificación GOLD actual.
2. Definición de exacerbación.
3. Indicaciones de LABA + LAMA.
4. Indicaciones de ICS.

Perlas de examen
• GOLD E reemplazó antiguos grupos de alto riesgo.
• Dos o más exacerbaciones implican alto riesgo.
• LABA + LAMA es la combinación inicial preferida.
• Los eosinófilos ayudan a decidir uso de ICS.

Referencias: GOLD Report 2025; Global Initiative for COPD; Harrison's Principles of Internal Medicine.`,
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
      "Shock hipovolémico + irritación peritoneal + hemoperitoneo masivo = lesión intraabdominal grave. Según ATLS: laparotomía exploradora inmediata sin retrasar por estudios complementarios.",
    keyPoints: [
      "Shock + peritonitis = quirófano.",
      "TAC reservado para pacientes hemodinámicamente estables.",
      "FAST confirma líquido libre; no retrasa cirugía si inestable.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
Trauma abdominal e inestabilidad hemodinámica

Caso clínico: Trauma abdominal cerrado con hemoperitoneo masivo e inestabilidad hemodinámica.

• El principio fundamental del ATLS es tratar primero las amenazas inmediatas para la vida.
• La presencia simultánea de shock e irritación peritoneal indica lesión intraabdominal grave.
• Estos pacientes no deben retrasarse para estudios complementarios.
• La laparotomía exploradora constituye una intervención salvadora.
• El TAC está reservado para pacientes hemodinámicamente estables.

Lo que el estudiante debe dominar para residencia
1. Criterios de estabilidad hemodinámica.
2. Indicaciones de laparotomía.
3. Utilidad del FAST.
4. Secuencia ABCDE del trauma.

Perlas de examen
• Shock + peritonitis = quirófano.
• Un TAC nunca debe retrasar una cirugía necesaria.
• El FAST ayuda a detectar líquido libre rápidamente.
• El examen físico sigue siendo fundamental.

Referencias: ATLS 11th Edition; EAST Trauma Guidelines; Schwartz Principles of Surgery.`,
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
      "Depresión ST difusa + elevación aVR = patrón del tronco.",
      "Equivalente STEMI; valoración invasiva urgente.",
      "aVR es derivación clave frecuentemente olvidada en examen.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q.
Patrón del tronco coronario izquierdo

Caso clínico: Dolor torácico típico con depresión extensa del ST y elevación en aVR.

• Este patrón sugiere isquemia subendocárdica extensa.
• Debe hacer sospechar lesión crítica del tronco coronario izquierdo o enfermedad multivaso severa.
• Constituye uno de los hallazgos electrocardiográficos de mayor riesgo.
• Requiere valoración invasiva urgente.
• Es un patrón clásico de examen en residencias.

Lo que el estudiante debe dominar para residencia
1. Equivalentes de elevación del ST.
2. Interpretación de aVR.
3. Lesión del tronco coronario izquierdo.
4. Estratificación de riesgo en SCA.

Perlas de examen
• aVR es una de las derivaciones más olvidadas y más preguntadas.
• Elevación en aVR con depresión difusa del ST indica enfermedad coronaria extensa.
• El diagnóstico siempre debe integrarse con la clínica.
• Las residencias suelen preguntar la conducta más que el hallazgo aislado.

Referencias: ESC ACS Guidelines; AHA/ACC ACS Guideline; Braunwald's Heart Disease; Tintinalli Emergency Medicine.`,
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
      "Tejido, no tiempo: perfusión define candidatos fuera de ventana IV.",
      "DAWN/DEFUSE-3: trombectomía 6–24 h con mismatch en oclusión de gran vaso.",
      "Alteplasa >4.5 h sin protocolo WAKE-UP con RM ↑ riesgo hemorrágico.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Wake-up stroke · Oclusión M1 · Trombectomía mecánica

• Wake-up stroke: tiempo real desconocido → se asume desde última vez visto normal.
• >4.5 h: trombólisis IV estándar contraindicada sin RM con mismatch FLAIR/DWI.
• TAC perfusión: core pequeño + penumbra grande = tejido salvable.
• DAWN y DEFUSE-3: trombectomía clase I (6–24 h) con discordancia clínico-imagenológica.
• En oclusión de gran vaso: "el tiempo es cerebro, pero la colateralidad es tiempo".

Perla: >6 h + oclusión gran vaso → perfusión → si hay penumbra, trombectomía hasta 24 h.

Referencias: AHA/ASA Guidelines for Early Management of Acute Ischemic Stroke; DAWN; DEFUSE-3.`,
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
      "Cese motor ≠ fin de crisis: desacople electro-mecánico.",
      "Refractario = falla BDZ + 2.ª línea → anestésicos + EEG continuo.",
      "EEG es la única forma de confirmar y titular EENC.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Estado epiléptico refractario y EENC

• >30 min de actividad (incluso subclínica): resistencia GABAérgica y excitotoxicidad por glutamato.
• Cese de movimientos puede ser fatiga muscular, no resolución eléctrica.
• Refractario: persiste tras BDZ + anticrisis de 2.ª línea → intubación + propofol/midazolam/ketamina + EEG continuo.
• Objetivo: supresión de brotes (burst suppression) titulada por EEG.

Perla: Convulsionó, recibió tratamiento, no despierta o tiene mioclonías periorales → asumir EENC.

Referencias: Neurocritical Care Society Guidelines for Status Epilepticus.`,
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
      "Día 1 deterioro → re-sangrado; días 4–14 + focal → vasoespasmo (DCI).",
      "Nimodipino oral es neuroprotector, no revierte vasoespasmo agudo.",
      "Vasodilatadores sistémicos (nitroprusiato) empeoran isquemia.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Vasoespasmo y DCI post-HSA

• DCI: vasoconstricción por sangre degradada en espacio subaracnoideo (días 4–14).
• Cerebro vasoespástico pierde autorregulación → dependiente de presión sistémica.
• Tratamiento pilar: euvolemia + vasopresores para ↑ presión de perfusión cerebral.
• Nimodipino PO 21 días: mejora pronóstico global, no revierte espasmo agudo; IV riesgo hipotensión.

Perla: HSA + deterioro día 7 + TAC limpio = vasoespasmo → subir PA.

Referencias: AHA/ASA Guidelines for Management of Aneurysmal Subarachnoid Hemorrhage.`,
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
      "Regla de los 20: CVF <15 mL/kg o NIF peor que -20 → intubar.",
      "PLEX o IGIV de primera línea; igual eficacia.",
      "No más piridostigmina ni esteroides altos en fase aguda aislada.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Crisis miasténica

• Fluoroquinolonas pueden precipitar crisis (bloqueo canal ACh).
• Falla bulbar + diafragma → hipercapnia tipo 2 → asfixia inminente.
• Intubación electiva antes del colapso; luego PLEX o IGIV.
• Suspender anticolinesterásicos en VM (secreciones, broncoespasmo).
• Metilprednisolona sola en agudo puede empeorar debilidad 7–10 días.

Perla: Miasténico con respiración paradójica y CVF <15 → intuba, suspende mestinón, ordena plasmaféresis.

Referencias: AAN / Neurocritical Care Society Guidelines for Myasthenic Crisis.`,
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
      "Uncus temporal → III par ipsilateral → midriasis paralítica.",
      "Terapia puente: hiperosmolar (manitol o SSH) antes de cirugía.",
      "Corticosteroides no en edema citotóxico/hemorrágico agudo.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Herniación uncal

• HIC supratentorial → uncus cae por incisura tentorial → comprime III par.
• Fibras parasimpáticas periféricas del III → midriasis ipsilateral primero.
• Tríada de Cushing: HTA + bradicardia + respiración irregular = isquemia tronco inminente.
• Manejo puente: manitol 20% o SSH 3%/7.5%/23% sin esperar estudios.

Perla: Hematoma + pupila grande y fija ipsilateral = uncal → salina hipertónica ya.

Referencias: Neurocritical Care Society Guidelines on Elevated ICP.`,
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
      "HSV-1: lóbulos temporales + olor/sabor extraño + automatismos orales.",
      "LCR: linfocitos + eritrocitos + glucosa normal vs bacteriana.",
      "Aciclovir empírico sin esperar PCR.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Encefalitis herpética (HSV-1)

• Ascenso por tracto olfatorio/trigémino; necrosis temporal medial.
• Clínica: psiquiátrica + memoria + crisis uncinadas + alucinaciones olfatorias.
• LCR: pleocitosis linfocitaria, eritrocitos por necrosis hemorrágica, glucosa normal.
• Tratamiento: aciclovir IV empírico en todo AMS agudo inexplicado con datos de SNC.

Perla: Fiebre + comportamiento bizarro + olores feos + RM temporal = aciclovir ya.

Referencias: IDSA Guidelines for Encephalitis.`,
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
      "Alterno cara/cuerpo = tronco encefálico.",
      "Fuerza intacta → lesión lateral (no piramidal).",
      "AICA afecta VII-VIII; PICA afecta IX-X.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Síndrome de Wallenberg

• Núcleo espinal V → ↓ dolor/temp facial ipsilateral.
• Espinotalámico → ↓ dolor/temp corporal contralateral.
• Núcleo ambiguo (IX, X) → disfagia, ronquera.
• Descending sympathetic → Horner ipsilateral.
• Pedúnculo cerebeloso inferior → ataxia ipsilateral.
• Pirámides intactas → fuerza conservada.

Perla: Sensibilidad cruzada + disfagia + Horner + ataxia sin debilidad = Wallenberg (PICA/vertebral).

Referencias: AHA/ASA y ESO Guidelines for Acute Ischemic Stroke.`,
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
      "Apixabán/rivaroxabán = anti-Xa → andexanet o CCP4.",
      "Dabigatrán = anti-IIa → idarucizumab.",
      "PT/INR no reflejan bien anticoagulación por DOAC.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Reversión de DOAC en HIC

• Apixabán: inhibidor selectivo del factor Xa activado.
• 1.ª línea: andexanet alfa; alternativa: CCP4.
• + control agresivo PA (PAS ~140 mmHg).
• Idarucizumab = solo dabigatrán; vitamina K/PFC = warfarina; protamina = heparina.

Perla: HIC por "xaban" = andexanet o CCP4; dabigatrán = idarucizumab.

Referencias: AHA/ASA 2022 ICH Guidelines; Neurocritical Care Society Antithrombotic Reversal Guidelines.`,
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
      "Niveles: pezones T4, ombligo T10, pliegue inguinal L1.",
      "Cáncer + déficit medular agudo = metástasis epidural.",
      "RM define cirugía vs radioterapia; retraso = paraplejía permanente.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Compresión medular maligna

• Choque espinal: arreflexia y flacidez en fase aguda (días-semanas).
• Nivel sensitivo = marcador topográfico más fiel.
• Ombligo = T10.
• RM con contraste de columna (torácica focalizada) es obligatoria antes de tratar.
• Dexametasona dosis altas empírica mientras se confirma.

Perla: Cáncer + nivel umbilical = compresión torácica T10 → RM urgente.

Referencias: AAN Guidelines; guías oncológicas de emergencias neurológicas.`,
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
      "Disautonomía = causa principal de muerte no respiratoria en SGB.",
      "IGIV o plasmaféresis equivalentes; iniciar precoz (<2 semanas).",
      "Corticosteroides no benefician SGB clásico.",
    ],
    theoryContent: `PÍLDORAS DE CONOCIMIENTO — BY DR Q. · Neurología
Guillain-Barré y disautonomía

• Polirradiculoneuropatía post-infecciosa (mimetismo molecular; Campylobacter clásico).
• Desmielinización motora + autonómica periférica → barorreflejos destruidos.
• Oscilaciones simpáticas/parasimpáticas: HTA/taquicardia ↔ bradicardia/asistolia.
• Tratamiento: IGIV o plasmaféresis (equivalentes); ideal <2 semanas.
• Esteroide sistémico: ineficaz en ensayos; no indicado.

Perla: SGB en UCI puede hacer asistolia al intubar por hiperreactividad vagal, no solo hipoxia.

Referencias: AAN Guidelines for Treatment of Guillain-Barré Syndrome.`,
  },
];
